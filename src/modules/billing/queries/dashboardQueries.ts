import "server-only";
import { createAdminClient } from "@/lib/supabase/server";
import { getInvoiceStats, type InvoiceStats, type InvoiceWithRelations, getInvoices } from "./invoiceQueries";
import type { PaymentRecord, PaymentLinkRecord } from "../types/database";

export interface RecentPaymentWithInvoice extends PaymentRecord {
  invoice?: {
    id: string;
    invoice_number: string;
    grand_total: number;
    payment_status: string;
  } | null;
}

export interface RecentPaymentLinkWithInvoice extends PaymentLinkRecord {
  invoice?: {
    id: string;
    invoice_number: string;
  } | null;
}

export interface BillingDashboardData {
  stats: InvoiceStats;
  recentPayments: RecentPaymentWithInvoice[];
  recentPaymentLinks: RecentPaymentLinkWithInvoice[];
  recentInvoices: InvoiceWithRelations[];
}

/**
 * Fetch most recent payments with related invoice metadata.
 */
export async function getRecentPayments(limit = 5): Promise<RecentPaymentWithInvoice[]> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("payments")
      .select(`
        id,
        invoice_id,
        amount,
        status,
        payment_method,
        provider,
        provider_payment_id,
        created_at,
        invoice:invoices(id, invoice_number, grand_total, payment_status)
      `)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.warn("[getRecentPayments] Query error:", error.message);
      return [];
    }

    return (data || []) as unknown as RecentPaymentWithInvoice[];
  } catch (err) {
    console.warn("[getRecentPayments] Handled fetch error:", err);
    return [];
  }
}

/**
 * Fetch most recent payment links with related invoice metadata.
 */
export async function getRecentPaymentLinks(limit = 5): Promise<RecentPaymentLinkWithInvoice[]> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("payment_links")
      .select(`
        id,
        invoice_id,
        amount,
        status,
        short_url,
        created_at,
        expires_at,
        invoice:invoices(id, invoice_number)
      `)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.warn("[getRecentPaymentLinks] Query error:", error.message);
      return [];
    }

    return (data || []) as unknown as RecentPaymentLinkWithInvoice[];
  } catch (err) {
    console.warn("[getRecentPaymentLinks] Handled fetch error:", err);
    return [];
  }
}

/**
 * Concurrently fetch all aggregated metrics and recent activity for the Billing Dashboard.
 */
export async function getBillingDashboardData(): Promise<BillingDashboardData> {
  const [stats, recentPayments, recentPaymentLinks, invoicesResult] = await Promise.all([
    getInvoiceStats(),
    getRecentPayments(5),
    getRecentPaymentLinks(5),
    getInvoices({ page: 1, limit: 5 }),
  ]);

  return {
    stats,
    recentPayments,
    recentPaymentLinks,
    recentInvoices: invoicesResult.invoices,
  };
}
