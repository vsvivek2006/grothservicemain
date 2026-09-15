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
      .select("id, client_code, company_name, contact_name, email, phone")
      .eq("id", validated.client_id)
      .single();

    if (clientErr || !client) {
      return actionError(`Client not found: ${clientErr?.message || "invalid ID"}`);
    }

    let profileQuery = adminClient
      .from("billing_profiles")
      .select("*")
      .eq("client_id", validated.client_id);

    if (validated.billing_profile_id) {
      profileQuery = profileQuery.eq("id", validated.billing_profile_id);
    }

    const { data: profile, error: profileErr } = await profileQuery.maybeSingle();

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
      .select("id, client_code, company_name, contact_name, email, phone")
      .eq("id", validated.client_id)
      .single();

    let profileQuery = adminClient
      .from("billing_profiles")
      .select("*")
      .eq("client_id", validated.client_id);

    if (validated.billing_profile_id) {
      profileQuery = profileQuery.eq("id", validated.billing_profile_id);
    }
    const { data: profile } = await profileQuery.maybeSingle();

    if (!client || !profile) {
      return actionError("Invalid client or billing profile");
    }

    // 3. Recalculate
    const sellerSnapshot = getSellerSnapshot();
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

    // 4. Update Header
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
        updated_by: adminUser.id,
      })
      .eq("id", id)
      .select()
      .single();

    if (updateErr || !updatedInvoice) {
      return actionError(`Failed to update invoice: ${updateErr?.message}`);
    }

    // 5. Replace Line Items atomically
    await adminClient.from("invoice_items").delete().eq("invoice_id", id);

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

    await adminClient.from("invoice_items").insert(itemsToInsert);

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
    assertPermission(adminUser, "billing:write");

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

    // 2. Allocate consecutive legal invoice number
    const { invoiceNumber } = await allocateNextInvoiceNumber(adminClient, "GS");

    const now = new Date().toISOString();
    const issueDate = invoice.issue_date || now.split("T")[0];

    // 3. Update Invoice to Issued
    const { data: issuedInvoice, error: updateErr } = await adminClient
      .from("invoices")
      .update({
        invoice_number: invoiceNumber,
        document_status: "issued",
        issue_date: issueDate,
        issued_at: now,
        updated_by: adminUser.id,
      })
      .eq("id", id)
      .select()
      .single();

    if (updateErr || !issuedInvoice) {
      return actionError(`Failed to issue invoice: ${updateErr?.message}`);
    }

    // 4. Audit Log
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "INVOICE_ISSUED",
      entityType: "invoice",
      entityId: id,
      oldValues: { invoice_number: invoice.invoice_number, document_status: "draft" },
      newValues: { invoice_number: invoiceNumber, document_status: "issued", issued_at: now },
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
    assertPermission(adminUser, "billing:write");

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
