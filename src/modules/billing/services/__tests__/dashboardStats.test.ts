import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  computeDashboardStats,
  type InvoiceStatRow,
} from "../dashboardStats";

describe("Billing Dashboard Stats Calculation", () => {
  const TODAY = "2026-09-16";

  it("handles empty rows correctly", () => {
    const stats = computeDashboardStats([], TODAY);
    assert.deepEqual(stats, {
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
    });
  });

  it("accurately categorizes draft, issued, paid, and overdue invoices", () => {
    const rows: InvoiceStatRow[] = [
      // 1. Draft invoice, unpaid
      {
        document_status: "draft",
        payment_status: "unpaid",
        grand_total: 10000,
        amount_paid: 0,
        amount_due: 10000,
        due_date: "2026-09-25", // future
      },
      // 2. Issued invoice, partially paid
      {
        document_status: "issued",
        payment_status: "partially_paid",
        grand_total: 20000,
        amount_paid: 5000,
        amount_due: 15000,
        due_date: "2026-09-20", // future
      },
      // 3. Sent invoice, fully paid
      {
        document_status: "sent",
        payment_status: "paid",
        grand_total: 15000,
        amount_paid: 15000,
        amount_due: 0,
        due_date: "2026-09-10", // past but paid -> NOT overdue
      },
      // 4. Issued invoice, overdue
      {
        document_status: "issued",
        payment_status: "unpaid",
        grand_total: 8000,
        amount_paid: 0,
        amount_due: 8000,
        due_date: "2026-09-01", // past and unpaid -> overdue
      },
    ];

    const stats = computeDashboardStats(rows, TODAY);

    assert.equal(stats.totalInvoices, 4);
    assert.equal(stats.draftCount, 1);
    assert.equal(stats.issuedCount, 3); // 2 'issued' + 1 'sent'
    assert.equal(stats.unpaidCount, 2);
    assert.equal(stats.partiallyPaidCount, 1);
    assert.equal(stats.paidCount, 1);
    assert.equal(stats.overdueCount, 1);
    assert.equal(stats.cancelledCount, 0);

    // Receivables: 10000 + 15000 + 0 + 8000 = 33000
    assert.equal(stats.totalReceivables, 33000);
    // Collected: 0 + 5000 + 15000 + 0 = 20000
    assert.equal(stats.totalCollected, 20000);
  });

  it("excludes cancelled and void invoices from receivables and collected amounts", () => {
    const rows: InvoiceStatRow[] = [
      {
        document_status: "cancelled",
        payment_status: "unpaid",
        grand_total: 50000,
        amount_paid: 0,
        amount_due: 50000,
        due_date: "2026-09-01", // past due date, but cancelled
      },
      {
        document_status: "void",
        payment_status: "unpaid",
        grand_total: 25000,
        amount_paid: 0,
        amount_due: 25000,
        due_date: "2026-09-05",
      },
      {
        document_status: "issued",
        payment_status: "paid",
        grand_total: 1000,
        amount_paid: 1000,
        amount_due: 0,
        due_date: "2026-09-30",
      },
    ];

    const stats = computeDashboardStats(rows, TODAY);

    assert.equal(stats.totalInvoices, 3);
    assert.equal(stats.cancelledCount, 2);
    assert.equal(stats.overdueCount, 0); // cancelled/void must not trigger overdue alert
    assert.equal(stats.totalReceivables, 0);
    assert.equal(stats.totalCollected, 1000);
    assert.equal(stats.paidCount, 1);
  });

  it("handles floating point amounts and rounding accurately", () => {
    const rows: InvoiceStatRow[] = [
      {
        document_status: "issued",
        payment_status: "partially_paid",
        grand_total: 100.33,
        amount_paid: 50.11,
        amount_due: 50.22,
        due_date: "2026-09-30",
      },
      {
        document_status: "issued",
        payment_status: "partially_paid",
        grand_total: 200.66,
        amount_paid: 100.22,
        amount_due: 100.44,
        due_date: "2026-09-30",
      },
    ];

    const stats = computeDashboardStats(rows, TODAY);

    assert.equal(stats.totalReceivables, 150.66);
    assert.equal(stats.totalCollected, 150.33);
  });
});
