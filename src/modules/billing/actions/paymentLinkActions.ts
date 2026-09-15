"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser } from "@/lib/authorization";
import { logAuditEvent } from "@/lib/audit";
import { actionSuccess, actionError, ActionResult } from "@/lib/actions/result";
import { createPaymentLinkSchema } from "../schemas/paymentLinkSchemas";
import { getPaymentProvider } from "@/infrastructure/payments/payment-provider";
import type { PaymentLinkRecord, Invoice } from "../types/database";

/**
 * Server action to generate an authoritative payment link for an invoice.
 * Enforces strict financial checks: balance validation, invoice document status,
 * duplicate-request throttling, provider abstraction, and audit logging.
 */
export async function createPaymentLinkAction(
  rawInput: unknown
): Promise<ActionResult<PaymentLinkRecord>> {
  try {
    const adminUser = await assertAdminUser();

    // 1. Validate form input
    const parsed = createPaymentLinkSchema.safeParse(rawInput);
    if (!parsed.success) {
      const errorMsg = parsed.error.issues.map((e) => e.message).join(". ");
      return actionError(`Validation failed: ${errorMsg}`);
    }
    const input = parsed.data;

    const supabase = createAdminClient();

    // 2. Fetch invoice and verify financial invariants
    const { data: invoice, error: invoiceErr } = await supabase
      .from("invoices")
      .select("*")
      .eq("id", input.invoiceId)
      .maybeSingle();

    if (invoiceErr || !invoice) {
      return actionError("Invoice not found or could not be loaded");
    }

    // Document status checks
    if (invoice.document_status === "draft") {
      return actionError("Cannot create a payment link for a draft invoice. Please issue the invoice first.");
    }
    if (invoice.document_status === "cancelled" || invoice.document_status === "void") {
      return actionError(`Cannot create a payment link for a ${invoice.document_status} invoice.`);
    }

    // Payment status checks
    if (invoice.payment_status === "paid" || Number(invoice.amount_due) <= 0) {
      return actionError("Invoice is already fully paid. No balance is due.");
    }

    // Balance check: payment amount cannot exceed amount_due
    const amountDue = Number(invoice.amount_due);
    if (input.amount > amountDue) {
      return actionError(
        `Payment amount (₹${input.amount.toLocaleString("en-IN")}) cannot exceed balance due (₹${amountDue.toLocaleString("en-IN")}).`
      );
    }

    // 3. Duplicate request / Double-click protection:
    // Check if an identical link was created within the last 30 seconds
    const thirtySecondsAgo = new Date(Date.now() - 30 * 1000).toISOString();
    const { data: recentIdentical } = await supabase
      .from("payment_links")
      .select("*")
      .eq("invoice_id", invoice.id)
      .eq("amount", input.amount)
      .eq("status", "created")
      .gte("created_at", thirtySecondsAgo)
      .maybeSingle();

    if (recentIdentical) {
      // Return the already created link gracefully instead of double-creating
      return actionSuccess(recentIdentical as PaymentLinkRecord);
    }

    // 4. Calculate expiration timestamp
    const expiresAt = input.expiresInDays
      ? new Date(Date.now() + input.expiresInDays * 24 * 60 * 60 * 1000)
      : null;

    // 5. Extract customer details from frozen buyer snapshot
    const buyer = (invoice.buyer_snapshot as Record<string, unknown>) || {};
    const customerName = String(buyer.contactName || buyer.legalName || buyer.companyName || "");
    const customerEmail = buyer.email ? String(buyer.email) : undefined;
    const customerPhone = buyer.phone ? String(buyer.phone) : undefined;

    // 6. Delegate to the PaymentProvider abstraction (never imports Razorpay directly)
    const provider = getPaymentProvider();
    const linkResult = await provider.createPaymentLink({
      invoiceId: invoice.id,
      invoiceNumber: invoice.invoice_number,
      amount: input.amount,
      currency: invoice.currency || "INR",
      description: input.description || `Payment for Invoice ${invoice.invoice_number}`,
      customer: {
        name: customerName || undefined,
        email: customerEmail,
        phone: customerPhone,
      },
      acceptPartial: input.acceptPartial,
      minPartialAmount: input.minPartialAmount || undefined,
      expiresAt,
      reminderEnabled: input.reminderEnabled,
    });

    // 7. Persist payment link record in Supabase
    const { data: newLink, error: insertErr } = await supabase
      .from("payment_links")
      .insert({
        invoice_id: invoice.id,
        client_id: invoice.client_id,
        provider: linkResult.provider,
        provider_link_id: linkResult.providerLinkId,
        provider_reference_id: linkResult.providerReferenceId || invoice.id,
        amount: linkResult.amount,
        currency: linkResult.currency,
        status: linkResult.status,
        short_url: linkResult.shortUrl,
        description: input.description || null,
        expires_at: expiresAt ? expiresAt.toISOString() : null,
        accept_partial: input.acceptPartial,
        minimum_partial_amount: input.minPartialAmount || null,
        customer_name: customerName || null,
        customer_email: customerEmail || null,
        customer_phone: customerPhone || null,
        reminder_enabled: input.reminderEnabled,
        created_by: adminUser.id,
      })
      .select()
      .single();

    if (insertErr || !newLink) {
      console.error("[createPaymentLinkAction] Database insert error:", insertErr);
      return actionError(`Payment link created with provider, but failed to save record: ${insertErr?.message}`);
    }

    // 8. If invoice was 'issued', transition document_status to 'sent'
    if (invoice.document_status === "issued") {
      await supabase
        .from("invoices")
        .update({ document_status: "sent", updated_at: new Date().toISOString() })
        .eq("id", invoice.id);
    }

    // 9. Write audit log
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "PAYMENT_LINK_CREATED",
      entityType: "payment_link",
      entityId: newLink.id,
      oldValues: null,
      newValues: {
        invoice_id: invoice.id,
        invoice_number: invoice.invoice_number,
        amount: newLink.amount,
        provider: newLink.provider,
        provider_link_id: newLink.provider_link_id,
        short_url: newLink.short_url,
      },
    });

    revalidatePath("/admin/billing/invoices");
    revalidatePath(`/admin/billing/invoices/${invoice.id}`);

    return actionSuccess(newLink as PaymentLinkRecord);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create payment link";
    console.error("[createPaymentLinkAction] Unexpected error:", err);
    return actionError(message);
  }
}

/**
 * Server action to cancel an active payment link.
 * Cancels with the provider abstraction and updates local status to 'cancelled'.
 */
export async function cancelPaymentLinkAction(
  paymentLinkId: string
): Promise<ActionResult<{ id: string; status: string }>> {
  try {
    const adminUser = await assertAdminUser();
    const supabase = createAdminClient();

    // 1. Fetch payment link
    const { data: link, error: fetchErr } = await supabase
      .from("payment_links")
      .select("*")
      .eq("id", paymentLinkId)
      .maybeSingle();

    if (fetchErr || !link) {
      return actionError("Payment link not found");
    }

    if (link.status === "cancelled") {
      return actionError("Payment link is already cancelled");
    }

    if (link.status === "paid") {
      return actionError("Cannot cancel a paid payment link");
    }

    // 2. Delegate cancellation to provider
    const provider = getPaymentProvider(link.provider);
    try {
      await provider.cancelPaymentLink(link.provider_link_id);
    } catch (providerErr: unknown) {
      console.warn("[cancelPaymentLinkAction] Provider cancel warning:", providerErr);
      // Proceed to update local status even if provider returns 400 (e.g. already expired/cancelled on provider side)
    }

    // 3. Update database record
    const now = new Date().toISOString();
    const { error: updateErr } = await supabase
      .from("payment_links")
      .update({
        status: "cancelled",
        cancelled_at: now,
        updated_at: now,
      })
      .eq("id", link.id);

    if (updateErr) {
      return actionError(`Failed to update payment link status: ${updateErr.message}`);
    }

    // 4. Write audit log
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "PAYMENT_LINK_CANCELLED",
      entityType: "payment_link",
      entityId: link.id,
      oldValues: { status: link.status },
      newValues: { status: "cancelled", cancelled_at: now },
    });

    revalidatePath("/admin/billing/invoices");
    revalidatePath(`/admin/billing/invoices/${link.invoice_id}`);

    return actionSuccess({ id: link.id, status: "cancelled" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to cancel payment link";
    return actionError(message);
  }
}
