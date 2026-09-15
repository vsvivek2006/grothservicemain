import { createAdminClient } from "@/lib/supabase/server";
import { Invoice, InvoiceItem, Client, BillingProfile } from "../types/database";

export interface InvoiceWithRelations extends Invoice {
  client?: Pick<Client, "id" | "client_code" | "company_name" | "contact_name" | "email" | "phone">;
  billing_profile?: BillingProfile;
  items?: InvoiceItem[];
}

export interface GetInvoicesParams {
  page?: number;
  limit?: number;
  status?: string;
  paymentStatus?: string;
  clientId?: string;
  search?: string;
}

export interface InvoiceListResponse {
  invoices: InvoiceWithRelations[];
  totalCount: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface InvoiceStats {
  totalInvoices: number;
  draftCount: number;
  issuedCount: number;
  unpaidCount: number;
  partiallyPaidCount: number;
  paidCount: number;
  overdueCount: number;
  cancelledCount: number;
  totalReceivables: number;
  totalCollected: number;
}

/**
 * Fetch paginated invoices with optional filters and client relation.
 */
export async function getInvoices(params: GetInvoicesParams = {}): Promise<InvoiceListResponse> {
  const adminClient = createAdminClient();
  const page = Math.max(1, params.page || 1);
  const limit = Math.min(100, Math.max(1, params.limit || 25));
  const offset = (page - 1) * limit;

  let query = adminClient
    .from("invoices")
    .select(
      `
      *,
      client:clients(id, client_code, company_name, contact_name, email, phone)
    `,
      { count: "exact" }
    )
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (params.status && params.status !== "all") {
    query = query.eq("document_status", params.status);
  }

  if (params.paymentStatus && params.paymentStatus !== "all") {
    query = query.eq("payment_status", params.paymentStatus);
  }

  if (params.clientId) {
    query = query.eq("client_id", params.clientId);
  }

  if (params.search && params.search.trim() !== "") {
    const term = `%${params.search.trim()}%`;
    query = query.ilike("invoice_number", term);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error("[getInvoices] Supabase query error:", error.message);
    return {
      invoices: [],
      totalCount: 0,
      page,
      limit,
      totalPages: 1,
    };
  }

  const totalCount = count || 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  return {
    invoices: (data as unknown as InvoiceWithRelations[]) || [],
    totalCount,
    page,
    limit,
    totalPages,
  };
}

/**
 * Fetch single invoice by ID with items, client, and billing profile.
 */
export async function getInvoiceById(id: string): Promise<InvoiceWithRelations | null> {
  const adminClient = createAdminClient();

  const { data, error } = await adminClient
    .from("invoices")
    .select(
      `
      *,
      client:clients(*),
      billing_profile:billing_profiles(*),
      items:invoice_items(*)
    `
    )
    .eq("id", id)
    .maybeSingle();

  if (error || !data) {
    if (error) console.error("[getInvoiceById] Error:", error.message);
    return null;
  }

  // Sort items deterministically by sort_order
  if (data.items && Array.isArray(data.items)) {
    data.items.sort((a: InvoiceItem, b: InvoiceItem) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  }

  return data as unknown as InvoiceWithRelations;
}

/**
 * Fetch operational summary statistics for invoices.
 */
export async function getInvoiceStats(): Promise<InvoiceStats> {
  const adminClient = createAdminClient();

  const { data, error } = await adminClient
    .from("invoices")
    .select("document_status, payment_status, grand_total, amount_paid, amount_due, due_date");

  if (error || !data) {
    return {
      totalInvoices: 0,
      draftCount: 0,
      issuedCount: 0,
      unpaidCount: 0,
      partiallyPaidCount: 0,
      paidCount: 0,
      overdueCount: 0,
      cancelledCount: 0,
      totalReceivables: 0,
      totalCollected: 0,
    };
  }

  const todayStr = new Date().toISOString().split("T")[0];
  let draftCount = 0;
  let issuedCount = 0;
  let unpaidCount = 0;
  let partiallyPaidCount = 0;
  let paidCount = 0;
  let overdueCount = 0;
  let cancelledCount = 0;
  let totalReceivables = 0;
  let totalCollected = 0;

  for (const inv of data) {
    if (inv.document_status === "draft") draftCount++;
    if (inv.document_status === "issued" || inv.document_status === "sent") issuedCount++;
    if (inv.document_status === "cancelled" || inv.document_status === "void") cancelledCount++;

    if (inv.document_status !== "cancelled" && inv.document_status !== "void") {
      totalCollected += Number(inv.amount_paid) || 0;
      totalReceivables += Number(inv.amount_due) || 0;

      if (inv.payment_status === "paid") {
        paidCount++;
      } else if (inv.payment_status === "partially_paid") {
        partiallyPaidCount++;
      } else {
        unpaidCount++;
      }

      // Check if overdue
      if (
        inv.due_date &&
        inv.due_date < todayStr &&
        inv.payment_status !== "paid" &&
        inv.payment_status !== "refunded"
      ) {
        overdueCount++;
      }
    }
  }

  return {
    totalInvoices: data.length,
    draftCount,
    issuedCount,
    unpaidCount,
    partiallyPaidCount,
    paidCount,
    overdueCount,
    cancelledCount,
    totalReceivables: Math.round(totalReceivables * 100) / 100,
    totalCollected: Math.round(totalCollected * 100) / 100,
  };
}
