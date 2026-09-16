import "server-only";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { logAuditEvent } from "@/lib/audit";
import { round2 } from "./taxCalculation";
import {
  computeBalanceReconciliation,
  type BalanceReconciliationResult,
} from "./balanceCalculation";
import type { NormalizedPaymentEvent } from "@/infrastructure/payments/provider-types";
import type {
  Invoice,
  PaymentLinkRecord,
  PaymentRecord,
  PaymentTransactionRecord,
} from "../types/database";

export { computeBalanceReconciliation, type BalanceReconciliationResult };

export interface ReconcileEventResult {
  success: boolean;
  status: "processed" | "ignored" | "duplicate" | "failed";
  message: string;
  invoiceId?: string;
  paymentId?: string;
  transactionId?: string;
}

/**
 * Server-only service to reconcile a normalized payment event into the database.
 * Updates payments, creates immutable ledger transactions, and updates invoice balances.
 */
export async function reconcilePaymentEvent(
  event: NormalizedPaymentEvent
): Promise<ReconcileEventResult> {
  const supabase = createAdminClient();

  // 1. Locate Invoice and Payment Link
  let paymentLink: PaymentLinkRecord | null = null;
  let invoice: Invoice | null = null;

  // A. Check by providerLinkId if present
  if (event.providerLinkId) {
    const { data: linkData } = await supabase
      .from("payment_links")
      .select("*")
      .eq("provider_link_id", event.providerLinkId)
      .maybeSingle();

    if (linkData) {
      paymentLink = linkData as PaymentLinkRecord;
    }
  }

  // B. Locate invoice from link or notes payload
  const rawPayload = (event.rawPayload || {}) as Record<string, unknown>;
  const payloadNotes = ((rawPayload.payload as any)?.payment?.entity?.notes ||
    (rawPayload.payload as any)?.payment_link?.entity?.notes ||
    {}) as Record<string, unknown>;
  const invoiceIdFromNotes = (payloadNotes.invoice_id as string) || (event.providerOrderId as string);

  const targetInvoiceId = paymentLink?.invoice_id || invoiceIdFromNotes;

  if (!targetInvoiceId) {
    console.warn("[reconcilePaymentEvent] Unable to resolve invoice ID from event:", event.providerEventId);
    return {
      success: false,
      status: "ignored",
      message: "No invoice reference found in webhook payload.",
    };
  }

  const { data: invoiceData, error: invoiceErr } = await supabase
    .from("invoices")
    .select("*")
    .eq("id", targetInvoiceId)
    .maybeSingle();

  if (invoiceErr || !invoiceData) {
    return {
      success: false,
      status: "failed",
      message: `Invoice ${targetInvoiceId} not found in database.`,
    };
  }
  invoice = invoiceData as Invoice;

  // 2. Handle specific event types
  switch (event.eventType) {
    case "payment.captured":
    case "payment_link.paid": {
      // Guard: Check if invoice was cancelled or voided
      if (invoice.document_status === "cancelled" || invoice.document_status === "void") {
        console.warn(`[reconcilePaymentEvent] Payment received for ${invoice.document_status} invoice ${invoice.id}`);
        // Log transaction as orphaned/flagged, but do not alter cancelled invoice
        return {
          success: true,
          status: "processed",
          message: `Payment received for ${invoice.document_status} invoice. Logged without balance application.`,
          invoiceId: invoice.id,
        };
      }

      // Guard: Payment Deduplication (Idempotency)
      if (event.providerPaymentId) {
        const { data: existingPayment } = await supabase
          .from("payments")
          .select("id, status")
          .eq("provider_payment_id", event.providerPaymentId)
          .maybeSingle();

        if (existingPayment && existingPayment.status === "captured") {
          return {
            success: true,
            status: "duplicate",
            message: `Payment ${event.providerPaymentId} already processed previously.`,
            invoiceId: invoice.id,
            paymentId: existingPayment.id,
          };
        }
      }

      // Compute balance reconciliation
      const reconciliation = computeBalanceReconciliation(
        Number(invoice.grand_total),
        Number(invoice.amount_paid),
        event.amount
      );

      const now = new Date().toISOString();
      const capturedAt = event.capturedAt ? event.capturedAt.toISOString() : now;

      // 1. Attempt Atomic Transaction via PostgreSQL RPC
      let paymentRecordId: string | null = null;
      let isAtomicSuccess = false;

      const { data: rpcData, error: rpcErr } = await supabase.rpc(
        "reconcile_payment_transaction",
        {
          p_invoice_id: invoice.id,
          p_payment_link_id: paymentLink?.id || null,
          p_provider: event.provider,
          p_provider_payment_id: event.providerPaymentId || null,
          p_provider_order_id: event.providerOrderId || null,
          p_amount: event.amount,
          p_currency: event.currency || "INR",
          p_payment_method: event.paymentMethod || null,
          p_captured_at: capturedAt,
          p_payer_name: event.payerName || null,
          p_payer_email: event.payerEmail || null,
          p_payer_phone: event.payerPhone || null,
          p_metadata: {
            provider_event_id: event.providerEventId,
            raw_event: event.eventType,
          },
          p_source: `${event.provider}_webhook`,
          p_provider_link_id: event.providerLinkId || null,
        }
      );

      if (!rpcErr && rpcData) {
        const resObj = typeof rpcData === "string" ? JSON.parse(rpcData) : rpcData;
        if (resObj.status === "duplicate") {
          return {
            success: true,
            status: "duplicate",
            message: resObj.message || `Payment ${event.providerPaymentId} already processed previously.`,
            invoiceId: invoice.id,
            paymentId: resObj.payment_id,
          };
        }
        if (resObj.success) {
          paymentRecordId = resObj.payment_id;
          isAtomicSuccess = true;
        }
      }

      // 2. Fallback path if stored procedure is not yet applied
      if (!isAtomicSuccess) {
        // Insert Payment Record
        const { data: newPayment, error: paymentErr } = await supabase
          .from("payments")
          .insert({
            invoice_id: invoice.id,
            payment_link_id: paymentLink?.id || null,
            provider: event.provider,
            provider_payment_id: event.providerPaymentId || null,
            provider_order_id: event.providerOrderId || null,
            amount: event.amount,
            currency: event.currency,
            status: "captured",
            payment_method: event.paymentMethod || null,
            captured_at: capturedAt,
            payer_name: event.payerName || null,
            payer_email: event.payerEmail || null,
            payer_phone: event.payerPhone || null,
            metadata: {
              provider_event_id: event.providerEventId,
              raw_event: event.eventType,
            },
          })
          .select()
          .single();

        if (paymentErr || !newPayment) {
          throw new Error(`Failed to insert payment record: ${paymentErr?.message}`);
        }

        paymentRecordId = newPayment.id;

        // Insert Ledger Transaction
        const { error: txErr } = await supabase
          .from("payment_transactions")
          .insert({
            invoice_id: invoice.id,
            payment_id: newPayment.id,
            transaction_type: "payment",
            amount: event.amount,
            balance_before: reconciliation.balanceBefore,
            balance_after: reconciliation.balanceAfter,
            source: `${event.provider}_webhook`,
            metadata: {
              provider_payment_id: event.providerPaymentId,
              provider_link_id: event.providerLinkId,
              status: reconciliation.newPaymentStatus,
            },
          });

        if (txErr) {
          console.error("[reconcilePaymentEvent] Ledger insert error:", txErr);
        }

        // Update Invoice Balances & Payment Status
        const invoiceUpdates: Partial<Invoice> = {
          amount_paid: reconciliation.amountPaidAfter,
          amount_due: reconciliation.balanceAfter,
          payment_status: reconciliation.newPaymentStatus,
          updated_at: now,
        };

        const { error: invoiceUpdateErr } = await supabase
          .from("invoices")
          .update(invoiceUpdates)
          .eq("id", invoice.id);

        if (invoiceUpdateErr) {
          throw new Error(`Failed to update invoice balances: ${invoiceUpdateErr.message}`);
        }

        // Update Payment Link Status if applicable
        if (paymentLink) {
          const linkStatus = reconciliation.isFullyPaid ? "paid" : "partially_paid";
          await supabase
            .from("payment_links")
            .update({
              status: linkStatus,
              updated_at: now,
            })
            .eq("id", paymentLink.id);
        }
      }

      // Audit Log
      await logAuditEvent({
        actorUserId: "system",
        action: "PAYMENT_RECORDED",
        entityType: "payment",
        entityId: paymentRecordId || invoice.id,
        oldValues: {
          amount_paid: reconciliation.amountPaidBefore,
          amount_due: reconciliation.balanceBefore,
          payment_status: invoice.payment_status,
        },
        newValues: {
          amount_paid: reconciliation.amountPaidAfter,
          amount_due: reconciliation.balanceAfter,
          payment_status: reconciliation.newPaymentStatus,
          payment_amount: event.amount,
          provider_payment_id: event.providerPaymentId,
        },
      });

      revalidatePath("/admin/billing/invoices");
      revalidatePath(`/admin/billing/invoices/${invoice.id}`);

      return {
        success: true,
        status: "processed",
        message: `Successfully reconciled payment of ₹${event.amount} for invoice ${invoice.invoice_number}`,
        invoiceId: invoice.id,
        paymentId: paymentRecordId || undefined,
      };
    }

    case "payment.failed": {
      const now = new Date().toISOString();
      await supabase.from("payments").insert({
        invoice_id: invoice.id,
        payment_link_id: paymentLink?.id || null,
        provider: event.provider,
        provider_payment_id: event.providerPaymentId || null,
        amount: event.amount,
        currency: event.currency,
        status: "failed",
        failed_at: now,
        failure_reason: (rawPayload.error_description as string) || "Payment failed at provider",
        payer_name: event.payerName || null,
        payer_email: event.payerEmail || null,
        payer_phone: event.payerPhone || null,
      });

      return {
        success: true,
        status: "processed",
        message: `Logged failed payment attempt for invoice ${invoice.invoice_number}`,
        invoiceId: invoice.id,
      };
    }

    case "payment_link.cancelled": {
      if (paymentLink) {
        await supabase
          .from("payment_links")
          .update({
            status: "cancelled",
            cancelled_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", paymentLink.id);
      }
      return {
        success: true,
        status: "processed",
        message: "Payment link cancelled via webhook",
      };
    }

    case "payment_link.expired": {
      if (paymentLink) {
        await supabase
          .from("payment_links")
          .update({
            status: "expired",
            expired_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", paymentLink.id);
      }
      return {
        success: true,
        status: "processed",
        message: "Payment link marked expired via webhook",
      };
    }

    default:
      return {
        success: true,
        status: "ignored",
        message: `Unhandled event type: ${event.eventType}`,
      };
  }
}
