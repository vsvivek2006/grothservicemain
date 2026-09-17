"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser, assertPermission } from "@/lib/authorization";
import { logAuditEvent } from "@/lib/audit";
import { actionSuccess, actionError, ActionResult } from "@/lib/actions/result";
import {
  createInvoiceSchema,
  updateInvoiceSchema,
  CreateInvoiceInput,
  UpdateInvoiceInput,
} from "../schemas/invoice";
import { Invoice } from "../types/database";
import {
  calculateInvoiceTotals,
  calculateDueDate,
  LineItemCalculationInput,
  round2,
} from "../services/taxCalculation";
import { getSellerSnapshot } from "../services/sellerConfig";
import {
  generateDraftInvoiceNumber,
  allocateNextInvoiceNumber,
} from "../services/sequenceService";

/**
 * 1. Create a Draft Invoice with authoritative server calculations and immutable snapshots.
 */
export async function createInvoiceAction(
  input: CreateInvoiceInput
): Promise<ActionResult<Invoice>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const validated = createInvoiceSchema.parse(input);
    const adminClient = createAdminClient();

    // 1. Fetch Client and Billing Profile
    const { data: client, error: clientErr } = await adminClient
      .from("clients")
      .select("id, client_code, company_name, contact_name, email, phone, status")
      .eq("id", validated.client_id)
      .single();

    if (clientErr || !client) {
      return actionError(`Client not found: ${clientErr?.message || "invalid ID"}`);
    }

    if (client.status !== "active") {
      return actionError(`Cannot create invoice for client in "${client.status || "inactive"}" status. Only active clients can be billed.`);
    }

    let profileQuery = adminClient
      .from("billing_profiles")
      .select("*")
      .eq("client_id", validated.client_id)
      .order("created_at", { ascending: false });

    if (validated.billing_profile_id) {
      profileQuery = profileQuery.eq("id", validated.billing_profile_id);
    }

    const { data: profile, error: profileErr } = await profileQuery.limit(1).maybeSingle();

    if (profileErr || !profile) {
      return actionError("Client does not have a valid billing profile configured");
    }

    // 2. Prepare Snapshots
    const sellerSnapshot = getSellerSnapshot();
    const buyerSnapshot = {
      clientId: client.id,
      clientCode: client.client_code,
      companyName: client.company_name,
      legalName: profile.legal_name || client.company_name,
      contactName: client.contact_name,
      email: profile.billing_email || client.email,
      phone: profile.billing_phone || client.phone,
      gstin: profile.gstin || null,
      pan: profile.pan || null,
      addressLine1: profile.address_line_1,
      addressLine2: profile.address_line_2 || null,
      city: profile.city,
      state: profile.state,
      stateCode: profile.state_code,
      postalCode: profile.postal_code,
      country: profile.country || "India",
      taxRegistrationType: profile.tax_registration_type,
    };

    // 3. Place of supply and state codes
    const placeOfSupplyStateCode =
      validated.place_of_supply_state_code || profile.state_code || "08";
    const placeOfSupply = validated.place_of_supply || profile.state || "Rajasthan";

    // 4. Server-Side Recalculation
    const calculationItems: LineItemCalculationInput[] = validated.items.map((it, idx) => ({
      itemId: it.item_id || null,
      description: it.description,
      sku: it.sku || null,
      hsnSac: it.hsn_sac || null,
      unit: it.unit || "unit",
      quantity: Number(it.quantity),
      unitPrice: Number(it.unit_price),
      discountType: it.discount_type || null,
      discountValue: it.discount_value ? Number(it.discount_value) : null,
      taxRate: Number(it.tax_rate),
      sortOrder: it.sort_order ?? idx,
    }));

    const totals = calculateInvoiceTotals(
      calculationItems,
      sellerSnapshot.stateCode,
      placeOfSupplyStateCode,
      0 // amountPaid starts at 0 for new invoice
    );

    // 5. Sequence number and dates
    const draftNumber = generateDraftInvoiceNumber();
    const issueDate = validated.issue_date || new Date().toISOString().split("T")[0];
    const dueDate = calculateDueDate(issueDate, validated.payment_terms_days);

    // 6. Insert Core Invoice Record
    const { data: invoice, error: invoiceErr } = await adminClient
      .from("invoices")
      .insert({
        client_id: client.id,
        billing_profile_id: profile.id,
        invoice_number: draftNumber,
        invoice_type: validated.invoice_type,
        document_status: "draft",
        payment_status: "unpaid",
        issue_date: issueDate,
        supply_date: validated.supply_date || issueDate,
        due_date: dueDate,
        currency: "INR",
        subtotal: totals.subtotal,
        discount_total: totals.discountTotal,
        taxable_total: totals.taxableTotal,
        cgst_total: totals.cgstTotal,
        sgst_total: totals.sgstTotal,
        igst_total: totals.igstTotal,
        cess_total: totals.cessTotal,
        tax_total: totals.taxTotal,
        round_off: totals.roundOff,
        grand_total: totals.grandTotal,
        amount_paid: totals.amountPaid,
        amount_due: totals.amountDue,
        place_of_supply: placeOfSupply,
        place_of_supply_state_code: placeOfSupplyStateCode,
        reverse_charge: validated.reverse_charge,
        is_interstate: totals.isInterstate,
        notes: validated.notes || null,
        terms_and_conditions: validated.terms_and_conditions || null,
        seller_snapshot: sellerSnapshot as unknown as Record<string, unknown>,
        buyer_snapshot: buyerSnapshot as unknown as Record<string, unknown>,
        created_by: adminUser.id,
      })
      .select()
      .single();

    if (invoiceErr || !invoice) {
      return actionError(`Failed to save invoice record: ${invoiceErr?.message || "unknown"}`);
    }

    // 7. Insert Line Items with Historical Snapshots
    const itemsToInsert = totals.calculatedItems.map((c) => ({
      invoice_id: invoice.id,
      item_id: c.itemId,
      description_snapshot: c.descriptionSnapshot,
      sku_snapshot: c.skuSnapshot,
      hsn_sac_snapshot: c.hsnSacSnapshot,
      unit_snapshot: c.unitSnapshot,
      quantity: c.quantity,
      unit_price: c.unitPrice,
      discount_type: c.discountType,
      discount_value: c.discountValue,
      discount_amount: c.discountAmount,
      tax_rate: c.taxRate,
      taxable_amount: c.taxableAmount,
      cgst_rate: c.cgstRate,
      cgst_amount: c.cgstAmount,
      sgst_rate: c.sgstRate,
      sgst_amount: c.sgstAmount,
      igst_rate: c.igstRate,
      igst_amount: c.igstAmount,
      cess_rate: c.cessRate,
      cess_amount: c.cessAmount,
      line_subtotal: c.lineSubtotal,
      line_total: c.lineTotal,
      sort_order: c.sortOrder,
    }));

    const { error: itemsErr } = await adminClient.from("invoice_items").insert(itemsToInsert);

    if (itemsErr) {
      console.error("[createInvoiceAction] Line items insert error:", itemsErr.message);
      // Clean up orphaned header
      await adminClient.from("invoices").delete().eq("id", invoice.id);
      return actionError(`Failed to save invoice line items: ${itemsErr.message}`);
    }

    // 8. Audit Log
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "INVOICE_CREATED",
      entityType: "invoice",
      entityId: invoice.id,
      newValues: {
        invoice_number: invoice.invoice_number,
        client_id: invoice.client_id,
        grand_total: invoice.grand_total,
        document_status: invoice.document_status,
      },
    });

    revalidatePath("/admin/billing/invoices");
    return actionSuccess(invoice as Invoice);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error creating invoice";
    return actionError(msg);
  }
}

/**
 * 2. Update an existing Draft Invoice.
 * Historical Issued/Sent/Cancelled invoices are permanently locked from silent mutation.
 */
export async function updateInvoiceAction(
  id: string,
  input: UpdateInvoiceInput
): Promise<ActionResult<Invoice>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const validated = updateInvoiceSchema.parse(input);
    const adminClient = createAdminClient();

    // 1. Fetch Existing Invoice & Guard against mutating Issued documents
    const { data: existing, error: fetchErr } = await adminClient
      .from("invoices")
      .select("id, document_status, invoice_number, amount_paid")
      .eq("id", id)
      .single();

    if (fetchErr || !existing) {
      return actionError("Invoice not found");
    }

    if (existing.document_status !== "draft") {
      return actionError(
        `Cannot edit invoice in "${existing.document_status}" status. Issued financial records cannot be mutated.`
      );
    }

    // 2. Fetch Client and Billing Profile
    const { data: client } = await adminClient
      .from("clients")
      .select("id, client_code, company_name, contact_name, email, phone, status")
      .eq("id", validated.client_id)
      .single();

    let profileQuery = adminClient
      .from("billing_profiles")
      .select("*")
      .eq("client_id", validated.client_id)
      .order("created_at", { ascending: false });

    if (validated.billing_profile_id) {
      profileQuery = profileQuery.eq("id", validated.billing_profile_id);
    }
    const { data: profile } = await profileQuery.limit(1).maybeSingle();

    if (!client || !profile) {
      return actionError("Invalid client or billing profile");
    }

    if (client.status !== "active") {
      return actionError(`Cannot invoice client in "${client.status || "inactive"}" status.`);
    }

    // 3. Recalculate & Snapshots
    const sellerSnapshot = getSellerSnapshot();
    const buyerSnapshot = {
      clientId: client.id,
      clientCode: client.client_code,
      companyName: client.company_name,
      legalName: profile.legal_name || client.company_name,
      contactName: client.contact_name,
      email: profile.billing_email || client.email,
      phone: profile.billing_phone || client.phone,
      gstin: profile.gstin || null,
      pan: profile.pan || null,
      addressLine1: profile.address_line_1,
      addressLine2: profile.address_line_2 || null,
      city: profile.city,
      state: profile.state,
      stateCode: profile.state_code,
      postalCode: profile.postal_code,
      country: profile.country || "India",
      taxRegistrationType: profile.tax_registration_type,
    };

    const placeOfSupplyStateCode =
      validated.place_of_supply_state_code || profile.state_code || "08";
    const placeOfSupply = validated.place_of_supply || profile.state || "Rajasthan";

    const calculationItems: LineItemCalculationInput[] = validated.items.map((it, idx) => ({
      itemId: it.item_id || null,
      description: it.description,
      sku: it.sku || null,
      hsnSac: it.hsn_sac || null,
      unit: it.unit || "unit",
      quantity: Number(it.quantity),
      unitPrice: Number(it.unit_price),
      discountType: it.discount_type || null,
      discountValue: it.discount_value ? Number(it.discount_value) : null,
      taxRate: Number(it.tax_rate),
      sortOrder: it.sort_order ?? idx,
    }));

    const totals = calculateInvoiceTotals(
      calculationItems,
      sellerSnapshot.stateCode,
      placeOfSupplyStateCode,
      Number(existing.amount_paid) || 0
    );

    const issueDate = validated.issue_date || new Date().toISOString().split("T")[0];
    const dueDate = calculateDueDate(issueDate, validated.payment_terms_days);

    // 4. Update Header with Synchronized Snapshots
    const { data: updatedInvoice, error: updateErr } = await adminClient
      .from("invoices")
      .update({
        client_id: client.id,
        billing_profile_id: profile.id,
        invoice_type: validated.invoice_type,
        issue_date: issueDate,
        supply_date: validated.supply_date || issueDate,
        due_date: dueDate,
        subtotal: totals.subtotal,
        discount_total: totals.discountTotal,
        taxable_total: totals.taxableTotal,
        cgst_total: totals.cgstTotal,
        sgst_total: totals.sgstTotal,
        igst_total: totals.igstTotal,
        cess_total: totals.cessTotal,
        tax_total: totals.taxTotal,
        round_off: totals.roundOff,
        grand_total: totals.grandTotal,
        amount_due: totals.amountDue,
        place_of_supply: placeOfSupply,
        place_of_supply_state_code: placeOfSupplyStateCode,
        reverse_charge: validated.reverse_charge,
        is_interstate: totals.isInterstate,
        notes: validated.notes || null,
        terms_and_conditions: validated.terms_and_conditions || null,
        seller_snapshot: sellerSnapshot as unknown as Record<string, unknown>,
        buyer_snapshot: buyerSnapshot as unknown as Record<string, unknown>,
        updated_by: adminUser.id,
      })
      .eq("id", id)
      .select()
      .single();

    if (updateErr || !updatedInvoice) {
      return actionError(`Failed to update invoice: ${updateErr?.message}`);
    }

    // 5. Replace Line Items safely
    const itemsToInsert = totals.calculatedItems.map((c) => ({
      invoice_id: id,
      item_id: c.itemId,
      description_snapshot: c.descriptionSnapshot,
      sku_snapshot: c.skuSnapshot,
      hsn_sac_snapshot: c.hsnSacSnapshot,
      unit_snapshot: c.unitSnapshot,
      quantity: c.quantity,
      unit_price: c.unitPrice,
      discount_type: c.discountType,
      discount_value: c.discountValue,
      discount_amount: c.discountAmount,
      tax_rate: c.taxRate,
      taxable_amount: c.taxableAmount,
      cgst_rate: c.cgstRate,
      cgst_amount: c.cgstAmount,
      sgst_rate: c.sgstRate,
      sgst_amount: c.sgstAmount,
      igst_rate: c.igstRate,
      igst_amount: c.igstAmount,
      cess_rate: c.cessRate,
      cess_amount: c.cessAmount,
      line_subtotal: c.lineSubtotal,
      line_total: c.lineTotal,
      sort_order: c.sortOrder,
    }));

    const { error: deleteErr } = await adminClient.from("invoice_items").delete().eq("invoice_id", id);
    if (deleteErr) {
      console.error("[updateInvoiceAction] Failed to clear old line items:", deleteErr.message);
    }
    const { error: insertErr } = await adminClient.from("invoice_items").insert(itemsToInsert);
    if (insertErr) {
      console.error("[updateInvoiceAction] Failed to insert new line items:", insertErr.message);
      return actionError(`Failed to save invoice line items: ${insertErr.message}`);
    }

    // 6. Audit Log
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "INVOICE_UPDATED",
      entityType: "invoice",
      entityId: id,
      newValues: {
        invoice_number: updatedInvoice.invoice_number,
        grand_total: updatedInvoice.grand_total,
      },
    });

    revalidatePath("/admin/billing/invoices");
    revalidatePath(`/admin/billing/invoices/${id}`);
    return actionSuccess(updatedInvoice as Invoice);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error updating invoice";
    return actionError(msg);
  }
}

/**
 * 3. Issue a Draft Invoice: Assigns official consecutive sequence number and transitions state.
 */
export async function issueInvoiceAction(id: string): Promise<ActionResult<Invoice>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:issue");

    const adminClient = createAdminClient();

    // 1. Fetch and verify draft status
    const { data: invoice, error: fetchErr } = await adminClient
      .from("invoices")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchErr || !invoice) {
      return actionError("Invoice not found");
    }

    if (invoice.document_status !== "draft") {
      return actionError(`Invoice is already in "${invoice.document_status}" status`);
    }

    // 2. Execute Atomic Issue & Sequential Allocation via PostgreSQL RPC
    let issuedInvoice: Invoice | null = null;
    const { getFinancialYear } = await import("../services/sequenceService");
    const fy = getFinancialYear(new Date());

    const { data: rpcData, error: rpcErr } = await adminClient.rpc(
      "issue_invoice_with_sequence",
      {
        p_invoice_id: id,
        p_fy: fy,
        p_series: "GS",
        p_actor_id: adminUser.id,
      }
    );

    if (!rpcErr && rpcData) {
      const parsed = typeof rpcData === "string" ? JSON.parse(rpcData as string) : rpcData;
      if (parsed.success) {
        const { data: freshInvoice } = await adminClient
          .from("invoices")
          .select("*")
          .eq("id", id)
          .single();
        issuedInvoice = freshInvoice as Invoice;
      }
    }

    // Fallback path if stored procedure is not yet applied
    if (!issuedInvoice) {
      const { invoiceNumber } = await allocateNextInvoiceNumber(adminClient, "GS");

      const now = new Date().toISOString();
      const issueDate = invoice.issue_date || now.split("T")[0];

      const { data: fallbackUpdated, error: updateErr } = await adminClient
        .from("invoices")
        .update({
          invoice_number: invoiceNumber,
          document_status: "issued",
          issue_date: issueDate,
          issued_at: now,
          updated_by: adminUser.id,
        })
        .eq("id", id)
        .eq("document_status", "draft")
        .select()
        .maybeSingle();

      if (updateErr || !fallbackUpdated) {
        return actionError(
          updateErr
            ? `Failed to issue invoice: ${updateErr.message}`
            : "Invoice was already issued or modified concurrently by another process"
        );
      }
      issuedInvoice = fallbackUpdated as Invoice;
    }

    // 4. Audit Log
    const issuedTimestamp = issuedInvoice.issued_at || new Date().toISOString();
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "INVOICE_ISSUED",
      entityType: "invoice",
      entityId: id,
      oldValues: { invoice_number: invoice.invoice_number, document_status: "draft" },
      newValues: {
        invoice_number: issuedInvoice.invoice_number,
        document_status: "issued",
        issued_at: issuedTimestamp,
      },
    });

    revalidatePath("/admin/billing/invoices");
    revalidatePath(`/admin/billing/invoices/${id}`);
    return actionSuccess(issuedInvoice as Invoice);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error issuing invoice";
    return actionError(msg);
  }
}

/**
 * 4. Cancel an Invoice: Guards against cancelling paid invoices.
 */
export async function cancelInvoiceAction(
  id: string,
  reason: string
): Promise<ActionResult<Invoice>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:cancel");

    const adminClient = createAdminClient();

    const { data: invoice, error: fetchErr } = await adminClient
      .from("invoices")
      .select("id, document_status, payment_status, amount_paid, invoice_number, notes")
      .eq("id", id)
      .single();

    if (fetchErr || !invoice) {
      return actionError("Invoice not found");
    }

    if (invoice.document_status === "cancelled" || invoice.document_status === "void") {
      return actionError("Invoice is already cancelled");
    }

    if (Number(invoice.amount_paid) > 0 || invoice.payment_status === "paid") {
      return actionError(
        "Cannot cancel an invoice with recorded payments. Please process a refund or credit note."
      );
    }

    const now = new Date().toISOString();
    const cancellationNote = `[Cancelled on ${now.split("T")[0]}]: ${reason.trim()}`;
    const updatedNotes = invoice.notes
      ? `${invoice.notes}\n\n${cancellationNote}`
      : cancellationNote;

    const { data: cancelledInvoice, error: updateErr } = await adminClient
      .from("invoices")
      .update({
        document_status: "cancelled",
        cancelled_at: now,
        notes: updatedNotes,
        updated_by: adminUser.id,
      })
      .eq("id", id)
      .select()
      .single();

    if (updateErr || !cancelledInvoice) {
      return actionError(`Failed to cancel invoice: ${updateErr?.message}`);
    }

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "INVOICE_CANCELLED",
      entityType: "invoice",
      entityId: id,
      oldValues: { document_status: invoice.document_status },
      newValues: { document_status: "cancelled", reason, cancelled_at: now },
    });

    revalidatePath("/admin/billing/invoices");
    revalidatePath(`/admin/billing/invoices/${id}`);
    return actionSuccess(cancelledInvoice as Invoice);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error cancelling invoice";
    return actionError(msg);
  }
}

/**
 * Server action to generate and return invoice PDF as base64 string for direct client download.
 * Runs in authenticated Next.js Server Action context.
 */
export async function downloadInvoicePdfAction(
  invoiceId: string
): Promise<ActionResult<{ base64: string; filename: string }>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:read");

    if (!invoiceId) {
      return actionError("Invoice ID is required");
    }

    const { generateInvoicePdf } = await import("../services/invoicePdfService");
    const { buffer, filename } = await generateInvoicePdf(invoiceId);

    return actionSuccess({
      base64: buffer.toString("base64"),
      filename,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error generating invoice PDF";
    return actionError(msg);
  }
}

export interface RecordManualPaymentParams {
  invoiceId: string;
  paymentStatus: "paid" | "partially_paid" | "unpaid";
  amount?: number;
  paymentMethod?: "bank_transfer" | "upi" | "cash" | "cheque" | "other";
  referenceNumber?: string;
  paymentDate?: string;
  notes?: string;
}

/**
 * 6. Record Manual Payment & Status Update.
 * Allows billing staff to record offline payments (NEFT/RTGS/UPI/Cash) and update invoice payment status.
 */
export async function recordManualPaymentAction(
  params: RecordManualPaymentParams
): Promise<ActionResult<Invoice>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:payments");

    if (!params.invoiceId) {
      return actionError("Invoice ID is required");
    }

    const adminClient = createAdminClient();

    const { data: invoice, error: fetchErr } = await adminClient
      .from("invoices")
      .select("id, invoice_number, document_status, payment_status, grand_total, amount_paid, amount_due, notes")
      .eq("id", params.invoiceId)
      .single();

    if (fetchErr || !invoice) {
      return actionError("Invoice not found");
    }

    if (invoice.document_status === "draft") {
      return actionError("Cannot record payments on a draft invoice. Please issue the invoice first.");
    }

    if (invoice.document_status === "cancelled" || invoice.document_status === "void") {
      return actionError("Cannot record payments on a cancelled invoice.");
    }

    let targetStatus: "paid" | "partially_paid" | "unpaid" = params.paymentStatus;
    let newAmountPaid = 0;
    let newAmountDue = Number(invoice.grand_total);

    if (targetStatus === "paid") {
      newAmountPaid = Number(invoice.grand_total);
      newAmountDue = 0;
    } else if (targetStatus === "partially_paid") {
      const enteredAmount = Number(params.amount) || 0;
      if (enteredAmount <= 0) {
        return actionError("Partial payment amount must be greater than zero");
      }
      if (enteredAmount >= Number(invoice.grand_total)) {
        newAmountPaid = Number(invoice.grand_total);
        newAmountDue = 0;
        targetStatus = "paid";
      } else {
        newAmountPaid = round2(enteredAmount);
        newAmountDue = round2(Number(invoice.grand_total) - newAmountPaid);
      }
    } else if (targetStatus === "unpaid") {
      newAmountPaid = 0;
      newAmountDue = Number(invoice.grand_total);
    }

    const paymentDate = params.paymentDate || new Date().toISOString();
    const paymentMethod = params.paymentMethod || "bank_transfer";
    const refNo = params.referenceNumber?.trim() || "";

    // Insert record in payments table if marking paid or partially paid
    if (newAmountPaid > 0) {
      const paidDelta = round2(newAmountPaid - Number(invoice.amount_paid || 0));
      const paymentRecordAmount = paidDelta > 0 ? paidDelta : newAmountPaid;

      await adminClient.from("payments").insert({
        invoice_id: invoice.id,
        provider: "manual",
        provider_payment_id: refNo ? `manual_${refNo}` : `manual_${Date.now()}`,
        amount: paymentRecordAmount,
        currency: "INR",
        status: "captured",
        payment_method: paymentMethod,
        captured_at: paymentDate,
        metadata: {
          recorded_by_email: adminUser.email,
          recorded_by_id: adminUser.id,
          reference_number: refNo,
          notes: params.notes || "",
          manual: true,
        },
      });
    }

    const nowStr = new Date().toISOString().split("T")[0];
    const methodLabels: Record<string, string> = {
      bank_transfer: "Bank Transfer (NEFT/RTGS)",
      upi: "UPI",
      cash: "Cash",
      cheque: "Cheque",
      other: "Other",
    };
    const methodStr = methodLabels[paymentMethod] || paymentMethod;
    const noteEntry = `[Manual Payment: Status set to ${targetStatus.toUpperCase()} (${formatCurrencySimple(newAmountPaid)} paid) via ${methodStr}${refNo ? ` Ref: ${refNo}` : ""}${params.notes ? ` - ${params.notes}` : ""} by ${adminUser.email} on ${nowStr}]`;
    const updatedNotes = invoice.notes ? `${invoice.notes}\n\n${noteEntry}` : noteEntry;

    const { data: updatedInvoice, error: updateErr } = await adminClient
      .from("invoices")
      .update({
        payment_status: targetStatus,
        amount_paid: newAmountPaid,
        amount_due: newAmountDue,
        notes: updatedNotes,
        updated_by: adminUser.id,
        updated_at: new Date().toISOString(),
      })
      .eq("id", invoice.id)
      .select()
      .single();

    if (updateErr || !updatedInvoice) {
      return actionError(`Failed to update payment status: ${updateErr?.message}`);
    }

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "PAYMENT_RECORDED",
      entityType: "invoice",
      entityId: invoice.id,
      oldValues: {
        payment_status: invoice.payment_status,
        amount_paid: invoice.amount_paid,
        amount_due: invoice.amount_due,
      },
      newValues: {
        payment_status: targetStatus,
        amount_paid: newAmountPaid,
        amount_due: newAmountDue,
        payment_method: paymentMethod,
        reference_number: refNo,
      },
    });

    revalidatePath("/admin/billing/invoices");
    revalidatePath(`/admin/billing/invoices/${params.invoiceId}`);
    revalidatePath("/admin/billing");
    revalidatePath("/admin");

    return actionSuccess(updatedInvoice as Invoice);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error recording manual payment";
    return actionError(msg);
  }
}

function formatCurrencySimple(val: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);
}
