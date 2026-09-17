import "server-only";
import { cache } from "react";
import { createAdminClient } from "@/lib/supabase/server";
import type { PaymentRecord, PaymentTransactionRecord } from "../types/database";

export interface PaymentWithInvoiceAndClient extends PaymentRecord {
  invoice?: {
    id: string;
    invoice_number: string;
    grand_total: number;
    amount_due: number;
    payment_status: string;
    client?: {
      id: string;
      company_name: string;
      client_code: string;
    } | null;
  } | null;
}

export interface GetPaymentsParams {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
}

export interface PaymentListResponse {
  payments: PaymentWithInvoiceAndClient[];
  totalCount: number;
  page: number;
  limit: number;
  totalPages: number;
  summary: {
    totalCaptured: number;
    capturedCount: number;
    failedCount: number;
    pendingCount: number;
  };
}

export interface TransactionWithInvoice extends PaymentTransactionRecord {
  invoice?: {
    id: string;
    invoice_number: string;
  } | null;
}

/**
 * Fetch paginated payments with related invoice and client records.
 */
export const getPayments = cache(async function getPayments(
  params: GetPaymentsParams = {}
): Promise<PaymentListResponse> {
  const adminClient = createAdminClient();
  const page = Math.max(1, params.page || 1);
  const limit = Math.min(100, Math.max(1, params.limit || 20));
  const offset = (page - 1) * limit;

  let query = adminClient
    .from("payments")
    .select(
      `
      *,
      invoice:invoices(
        id,
        invoice_number,
        grand_total,
        amount_due,
        payment_status,
        client:clients(id, company_name, client_code)
      )
    `,
      { count: "exact" }
    )
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (params.status && params.status !== "all") {
    query = query.eq("status", params.status);
  }

  if (params.search && params.search.trim() !== "") {
    const term = `%${params.search.trim()}%`;
    query = query.or(`provider_payment_id.ilike.${term},payer_email.ilike.${term},payer_name.ilike.${term}`);
  }

  const [queryResult, summaryResult] = await Promise.all([
    query,
    adminClient.from("payments").select("status, amount"),
  ]);

  const { data, error, count } = queryResult;
  const allSummary = summaryResult.data;

  if (error) {
    console.error("[getPayments] Supabase query error:", error.message);
  }

  const totalCount = count || 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  let totalCaptured = 0;
  let capturedCount = 0;
  let failedCount = 0;
  let pendingCount = 0;

  if (allSummary) {
    for (const p of allSummary) {
      if (p.status === "captured") {
        totalCaptured += Number(p.amount) || 0;
        capturedCount++;
      } else if (p.status === "failed") {
        failedCount++;
      } else if (p.status === "pending" || p.status === "authorized") {
        pendingCount++;
      }
    }
  }

  return {
    payments: (data as unknown as PaymentWithInvoiceAndClient[]) || [],
    totalCount,
    page,
    limit,
    totalPages,
    summary: {
      totalCaptured: Math.round(totalCaptured * 100) / 100,
      capturedCount,
      failedCount,
      pendingCount,
    },
  };
});

/**
 * Fetch immutable ledger transactions for audit reconciliation.
 */
export const getPaymentTransactions = cache(async function getPaymentTransactions(
  limit = 25
): Promise<TransactionWithInvoice[]> {
  try {
    const adminClient = createAdminClient();
    const { data, error } = await adminClient
      .from("payment_transactions")
      .select(`
        id,
        payment_id,
        invoice_id,
        transaction_type,
        source,
        amount,
        balance_before,
        balance_after,
        created_at,
        invoice:invoices(id, invoice_number)
      `)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.warn("[getPaymentTransactions] Query error:", error.message);
      return [];
    }

    return (data || []) as unknown as TransactionWithInvoice[];
  } catch (err) {
    console.warn("[getPaymentTransactions] Handled error:", err);
    return [];
  }
});
