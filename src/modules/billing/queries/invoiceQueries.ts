import { createAdminClient } from "@/lib/supabase/server";
import { Invoice, InvoiceItem, Client, BillingProfile, PaymentLinkRecord } from "../types/database";
import { computeDashboardStats, type BillingDashboardStats } from "../services/dashboardStats";

export interface InvoiceWithRelations extends Invoice {
  client?: Pick<Client, "id" | "client_code" | "company_name" | "contact_name" | "email" | "phone">;
  billing_profile?: BillingProfile;
  items?: InvoiceItem[];
  payment_links?: PaymentLinkRecord[];
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

export type InvoiceStats = BillingDashboardStats;

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
      items:invoice_items(*),
      payment_links:payment_links(*)
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

  // Sort payment links newest first
  if (data.payment_links && Array.isArray(data.payment_links)) {
    data.payment_links.sort(
      (a: PaymentLinkRecord, b: PaymentLinkRecord) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
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
    return computeDashboardStats([]);
  }

  return computeDashboardStats(data as any);
}
