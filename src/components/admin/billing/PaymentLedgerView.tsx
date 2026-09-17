"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CreditCard,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  ArrowUpDown,
  ShieldCheck,
  X,
} from "lucide-react";
import { AdminPageHeader } from "@/components/admin/shared/AdminPageHeader";
import { StatCard } from "@/components/admin/shared/StatCard";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import { EmptyState } from "@/components/admin/shared/EmptyState";
import type {
  PaymentWithInvoiceAndClient,
  TransactionWithInvoice,
} from "@/modules/billing/queries/paymentQueries";
import {
  formatCurrency,
  formatCurrencyExact,
  formatDateTime,
} from "@/lib/formatters";

interface PaymentLedgerViewProps {
  payments: PaymentWithInvoiceAndClient[];
  totalCount: number;
  page: number;
  totalPages: number;
  summary: {
    totalCaptured: number;
    capturedCount: number;
    failedCount: number;
    pendingCount: number;
  };
  transactions: TransactionWithInvoice[];
  currentStatus: string;
  currentSearch: string;
}

export const PaymentLedgerView: React.FC<PaymentLedgerViewProps> = ({
  payments,
  totalCount,
  page,
  totalPages,
  summary,
  transactions,
  currentStatus,
  currentSearch,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"payments" | "ledger">("payments");
  const [searchTerm, setSearchTerm] = useState(currentSearch);

  const statusFilters = [
    { label: "All Payments", value: "all" },
    { label: "Captured", value: "captured" },
    { label: "Pending", value: "pending" },
    { label: "Failed", value: "failed" },
    { label: "Refunded", value: "refunded" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <AdminPageHeader
        title="Payments & Ledger"
        description="Authoritative payment records, transaction tracking, and immutable ledger balance history"
        actions={
          <div className="flex items-center gap-2">
            <Link
              href="/admin/billing"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <CreditCard className="w-3.5 h-3.5 text-purple-400" />
              <span>Billing Overview</span>
            </Link>
            <Link
              href="/admin/billing/invoices"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <span>View Invoices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        }
      />

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Captured"
          value={formatCurrency(summary.totalCaptured)}
          description={`${summary.capturedCount} completed settlements`}
          icon={CheckCircle2}
          variant="success"
        />
        <StatCard
          label="Captured Count"
          value={summary.capturedCount}
          description="Fully settled transactions"
          icon={CreditCard}
          variant="purple"
        />
        <StatCard
          label="Pending Payments"
          value={summary.pendingCount}
          description="Awaiting gateway confirmation"
          icon={Clock}
          variant="warning"
        />
        <StatCard
          label="Failed Payments"
          value={summary.failedCount}
          description="Provider/gateway rejected"
          icon={AlertCircle}
          variant="danger"
        />
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab("payments")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === "payments"
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white hover:bg-gray-800/60"
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Payments List ({totalCount})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ledger")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === "ledger"
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white hover:bg-gray-800/60"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Ledger Balance Trail ({transactions.length})</span>
        </button>
      </div>

      {/* TAB 1: PAYMENTS LIST */}
      {activeTab === "payments" && (
        <div className="space-y-4">
          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {statusFilters.map((sf) => (
                <Link
                  key={sf.value}
                  href={`/admin/billing/payments?status=${sf.value}${
                    currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : ""
                  }`}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    currentStatus === sf.value
                      ? "bg-purple-600 text-white"
                      : "border border-gray-800 bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {sf.label}
                </Link>
              ))}
            </div>

            <form
              method="GET"
              action="/admin/billing/payments"
              className="relative w-full sm:w-64"
            >
              <input type="hidden" name="status" value={currentStatus} />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search transaction ID, email…"
                className="w-full pl-9 pr-8 py-1.5 text-xs rounded-lg border border-gray-800 bg-gray-900 text-white placeholder-gray-500 focus:outline-hidden focus:border-purple-500"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    router.push(`/admin/billing/payments?status=${currentStatus}`);
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-0.5 rounded cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>
          </div>

          {/* Payments Table */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/80 overflow-hidden">
            {payments.length === 0 ? (
              <div className="p-8">
                <EmptyState
                  title="No payment records found"
                  description="Payments captured via payment links or webhooks will be listed here."
                  icon={CreditCard}
                />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-800 bg-gray-900/50 text-[11px] font-medium text-gray-400">
                      <th className="py-3 px-4">Transaction / Provider ID</th>
                      <th className="py-3 px-4">Invoice #</th>
                      <th className="py-3 px-4">Client</th>
                      <th className="py-3 px-4">Method</th>
                      <th className="py-3 px-4 text-right">Amount</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Captured At</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/60">
                    {payments.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-800/30 transition-colors">
                        <td className="py-3 px-4">
                          <div className="font-mono font-medium text-gray-200">
                            {p.provider_payment_id || p.id}
                          </div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                            Provider: {p.provider}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-purple-400">
                          {p.invoice ? (
                            <Link
                              href={`/admin/billing/invoices/${p.invoice.id}`}
                              className="hover:text-purple-300"
                            >
                              {p.invoice.invoice_number}
                            </Link>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-200">
                            {p.invoice?.client?.company_name || p.payer_name || "—"}
                          </div>
                          <div className="text-[11px] text-gray-400">
                            {p.payer_email || ""}
                          </div>
                        </td>
                        <td className="py-3 px-4 capitalize text-gray-300">
                          {p.payment_method || "Online"}
                        </td>
                        <td className="py-3 px-4 text-right font-semibold text-white">
                          {formatCurrencyExact(p.amount)}
                        </td>
                        <td className="py-3 px-4">
                          <StatusBadge status={p.status} />
                        </td>
                        <td className="py-3 px-4 text-gray-400 font-mono text-[11px]">
                          {formatDateTime(p.captured_at || p.created_at)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {p.invoice && (
                            <Link
                              href={`/admin/billing/invoices/${p.invoice.id}`}
                              className="inline-flex items-center gap-1 rounded bg-gray-800 px-2 py-1 text-[11px] font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                            >
                              <span>Invoice</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-gray-400">
                Page {page} of {totalPages} ({totalCount} total)
              </span>
              <div className="flex items-center gap-2">
                {page > 1 && (
                  <Link
                    href={`/admin/billing/payments?page=${page - 1}&status=${currentStatus}${
                      currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : ""
                    }`}
                    className="px-3 py-1.5 text-xs rounded border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Previous
                  </Link>
                )}
                {page < totalPages && (
                  <Link
                    href={`/admin/billing/payments?page=${page + 1}&status=${currentStatus}${
                      currentSearch ? `&search=${encodeURIComponent(currentSearch)}` : ""
                    }`}
                    className="px-3 py-1.5 text-xs rounded border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: LEDGER RECONCILIATION AUDIT TRAIL */}
      {activeTab === "ledger" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-purple-400" />
              <span>Immutable Ledger Balance Adjustments</span>
            </h3>
            <span className="text-xs text-gray-500 font-mono">
              Displaying recent {transactions.length} transactions
            </span>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/80 overflow-hidden">
            {transactions.length === 0 ? (
              <div className="p-8">
                <EmptyState
                  title="No ledger entries recorded"
                  description="Every payment capture, refund, or adjustment writes an immutable balance before/after audit row here."
                  icon={BookOpen}
                />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-800 bg-gray-900/50 text-[11px] font-medium text-gray-400">
                      <th className="py-3 px-4">Transaction Type</th>
                      <th className="py-3 px-4">Invoice #</th>
                      <th className="py-3 px-4">Source</th>
                      <th className="py-3 px-4 text-right">Amount</th>
                      <th className="py-3 px-4 text-right">Balance Before</th>
                      <th className="py-3 px-4 text-right">Balance After</th>
                      <th className="py-3 px-4">Recorded At</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/60">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-800/30 transition-colors">
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-950/70 text-purple-300 border border-purple-900/50 uppercase">
                            {tx.transaction_type}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-purple-400">
                          {tx.invoice ? (
                            <Link
                              href={`/admin/billing/invoices/${tx.invoice_id}`}
                              className="hover:text-purple-300"
                            >
                              {tx.invoice.invoice_number}
                            </Link>
                          ) : (
                            <span className="text-gray-500 font-mono">—</span>
                          )}
                        </td>
                        <td className="py-3 px-4 capitalize text-gray-300">
                          {tx.source}
                        </td>
                        <td className="py-3 px-4 text-right font-semibold text-white">
                          {formatCurrencyExact(tx.amount)}
                        </td>
                        <td className="py-3 px-4 text-right font-mono text-gray-400">
                          {formatCurrencyExact(tx.balance_before)}
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-semibold">
                          {tx.balance_after === 0 ? (
                            <span className="text-emerald-400">₹0.00 (Settled)</span>
                          ) : (
                            <span className="text-amber-400">
                              {formatCurrencyExact(tx.balance_after)}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-gray-400 font-mono text-[11px]">
                          {formatDateTime(tx.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Security Architecture Notice */}
      <div className="rounded-lg border border-purple-900/40 bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-blue-950/40 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-400">
        <div className="flex items-center gap-2 text-purple-300 font-medium">
          <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
          <span>Double-Entry Balance Invariants</span>
        </div>
        <div className="text-[11px] text-gray-400">
          All financial state transitions write non-destructive ledger records before mutating invoice balances.
        </div>
      </div>
    </div>
  );
};

export default PaymentLedgerView;
