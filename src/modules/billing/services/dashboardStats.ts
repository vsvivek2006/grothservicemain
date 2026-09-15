/**
 * Growth Service — Billing Dashboard Statistics Computation Service
 *
 * Pure calculation logic for billing KPI metrics.
 * Kept strictly free of 'server-only' imports for isolated unit testing.
 */

export interface InvoiceStatRow {
  document_status: string;
  payment_status: string;
  grand_total: number;
  amount_paid: number;
  amount_due: number;
  due_date: string | null;
}

export interface BillingDashboardStats {
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
 * Deterministically compute operational summary metrics from invoice summary rows.
 *
 * Invariants:
 * - Cancelled / Void invoices are excluded from receivables and total collected.
 * - Invoices are overdue only if due_date is strictly before today AND not settled/refunded.
 * - All currency amounts are rounded to 2 decimal places.
 */
export function computeDashboardStats(
  rows: InvoiceStatRow[] = [],
  todayStr?: string
): BillingDashboardStats {
  const today = todayStr || new Date().toISOString().split("T")[0];

  let draftCount = 0;
  let issuedCount = 0;
  let unpaidCount = 0;
  let partiallyPaidCount = 0;
  let paidCount = 0;
  let overdueCount = 0;
  let cancelledCount = 0;
  let totalReceivables = 0;
  let totalCollected = 0;

  for (const inv of rows) {
    const isCancelledOrVoid =
      inv.document_status === "cancelled" || inv.document_status === "void";

    if (inv.document_status === "draft") {
      draftCount++;
    } else if (inv.document_status === "issued" || inv.document_status === "sent") {
      issuedCount++;
    }

    if (isCancelledOrVoid) {
      cancelledCount++;
      // Exclude cancelled/void from revenue and receivables pipeline
      continue;
    }

    const paid = Number(inv.amount_paid) || 0;
    const due = Number(inv.amount_due) || 0;

    totalCollected += paid;
    totalReceivables += due;

    if (inv.payment_status === "paid") {
      paidCount++;
    } else if (inv.payment_status === "partially_paid") {
      partiallyPaidCount++;
    } else {
      unpaidCount++;
    }

    // Check overdue: past due date and still has unsettled balance
    if (
      inv.due_date &&
      inv.due_date < today &&
      inv.payment_status !== "paid" &&
      inv.payment_status !== "refunded"
    ) {
      overdueCount++;
    }
  }

  return {
    totalInvoices: rows.length,
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
