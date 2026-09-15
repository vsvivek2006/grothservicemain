"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  CreditCard,
  Link as LinkIcon,
  Package,
  Users,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import { toast } from "sonner";
import { AdminPageHeader } from "@/components/admin/shared/AdminPageHeader";
import { StatCard } from "@/components/admin/shared/StatCard";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import { EmptyState } from "@/components/admin/shared/EmptyState";
import type { InvoiceStats, InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import type {
  RecentPaymentWithInvoice,
  RecentPaymentLinkWithInvoice,
} from "@/modules/billing/queries/dashboardQueries";

interface BillingDashboardViewProps {
  stats: InvoiceStats;
  recentPayments: RecentPaymentWithInvoice[];
  recentPaymentLinks: RecentPaymentLinkWithInvoice[];
  recentInvoices: InvoiceWithRelations[];
}

export const BillingDashboardView: React.FC<BillingDashboardViewProps> = ({
  stats,
  recentPayments,
  recentPaymentLinks,
  recentInvoices,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatCurrencyExact = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(val);
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (dateStr?: string | null) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleCopy = async (linkId: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(linkId);
      toast.success("Payment link copied to clipboard");
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header with Quick Actions */}
      <AdminPageHeader
        title="Billing Overview"
        description="Real-time receivables, payment links, settlement tracking, and reconciliation"
        actions={
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/admin/clients"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Users className="w-3.5 h-3.5 text-gray-400" />
              <span>Clients</span>
            </Link>

            <Link
              href="/admin/billing/items"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Package className="w-3.5 h-3.5 text-gray-400" />
              <span>Catalog Items</span>
            </Link>

            <Link
              href="/admin/billing/invoices"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-gray-400" />
              <span>All Invoices</span>
            </Link>

            <Link
              href="/admin/billing/invoices/new"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-900/30 transition-all hover:from-blue-600 hover:to-indigo-800"
            >
              <Plus className="h-4 w-4" />
              <span>New Invoice</span>
            </Link>
          </div>
        }
      />

      {/* Top 4 Primary Financial KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Receivables"
          value={formatCurrency(stats.totalReceivables)}
          description={`${stats.unpaidCount + stats.partiallyPaidCount} unpaid or partially settled`}
          icon={AlertCircle}
          variant="warning"
        />
        <StatCard
          label="Total Collected"
          value={formatCurrency(stats.totalCollected)}
          description={`${stats.paidCount} fully paid invoices`}
          icon={CheckCircle2}
          variant="success"
        />
        <StatCard
          label="Total Invoices"
          value={stats.totalInvoices}
          description={`${stats.issuedCount} active issued, ${stats.draftCount} drafts`}
          icon={FileText}
          variant="purple"
        />
        <StatCard
          label="Overdue Invoices"
          value={stats.overdueCount}
          description={
            stats.overdueCount > 0 ? "Requires urgent follow-up" : "All payments on track"
          }
          icon={Clock}
          variant="danger"
        />
      </div>

      {/* Operational Pipeline Mini-Metrics Bar */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-4 backdrop-blur-xs">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
            <Receipt className="w-3.5 h-3.5 text-purple-400" />
            <span>Document & Payment Pipeline</span>
          </h2>
          <Link
            href="/admin/billing/invoices"
            className="text-[11px] text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1"
          >
            Manage Pipeline <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <div className="rounded-lg border border-gray-800/80 bg-gray-950/60 p-3">
            <span className="text-[11px] font-medium text-amber-400">Draft</span>
            <p className="text-xl font-bold text-white mt-0.5">{stats.draftCount}</p>
            <span className="text-[10px] text-gray-500">Unissued drafts</span>
          </div>

          <div className="rounded-lg border border-gray-800/80 bg-gray-950/60 p-3">
            <span className="text-[11px] font-medium text-blue-400">Issued</span>
            <p className="text-xl font-bold text-white mt-0.5">{stats.issuedCount}</p>
            <span className="text-[10px] text-gray-500">Issued or sent</span>
          </div>

          <div className="rounded-lg border border-gray-800/80 bg-gray-950/60 p-3">
            <span className="text-[11px] font-medium text-amber-300">Unpaid</span>
            <p className="text-xl font-bold text-white mt-0.5">{stats.unpaidCount}</p>
            <span className="text-[10px] text-gray-500">Awaiting payment</span>
          </div>

          <div className="rounded-lg border border-gray-800/80 bg-gray-950/60 p-3">
            <span className="text-[11px] font-medium text-sky-400">Partially Paid</span>
            <p className="text-xl font-bold text-white mt-0.5">{stats.partiallyPaidCount}</p>
            <span className="text-[10px] text-gray-500">Partial balance due</span>
          </div>

          <div className="rounded-lg border border-gray-800/80 bg-gray-950/60 p-3">
            <span className="text-[11px] font-medium text-emerald-400">Paid</span>
            <p className="text-xl font-bold text-white mt-0.5">{stats.paidCount}</p>
            <span className="text-[10px] text-gray-500">Fully settled</span>
          </div>

          <div className="rounded-lg border border-gray-800/80 bg-gray-950/60 p-3">
            <span className="text-[11px] font-medium text-rose-400">Overdue</span>
            <p className="text-xl font-bold text-white mt-0.5">{stats.overdueCount}</p>
            <span className="text-[10px] text-gray-500">Past due date</span>
          </div>
        </div>
      </div>

      {/* Two-Column Grid: Recent Payments & Recent Payment Links */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Recent Captured / Logged Payments */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/80 flex flex-col min-h-[340px]">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <h2 className="text-sm font-semibold text-white">Recent Payments</h2>
            </div>
            <span className="text-xs text-gray-400">Latest 5 events</span>
          </div>

          <div className="flex-1 p-2 sm:p-4">
            {recentPayments.length === 0 ? (
              <EmptyState
                title="No payments recorded"
                description="Recorded payment transactions and webhook events will appear here."
                icon={CreditCard}
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-800/80 text-[11px] font-medium text-gray-400">
                      <th className="pb-2 pl-2">Invoice #</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Method</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2 pr-2 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {recentPayments.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-800/40 transition-colors">
                        <td className="py-2.5 pl-2 font-medium">
                          {p.invoice ? (
                            <Link
                              href={`/admin/billing/invoices/${p.invoice.id}`}
                              className="text-purple-400 hover:text-purple-300 font-mono"
                            >
                              {p.invoice.invoice_number}
                            </Link>
                          ) : (
                            <span className="text-gray-500 font-mono">—</span>
                          )}
                        </td>
                        <td className="py-2.5 font-semibold text-white">
                          {formatCurrencyExact(p.amount)}
                        </td>
                        <td className="py-2.5 capitalize text-gray-300">
                          {p.payment_method || "Online"}
                        </td>
                        <td className="py-2.5">
                          <StatusBadge status={p.status} />
                        </td>
                        <td className="py-2.5 pr-2 text-right text-gray-400 font-mono text-[11px]">
                          {formatDateTime(p.captured_at || p.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Recent Payment Links */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/80 flex flex-col min-h-[340px]">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-purple-400" />
              <h2 className="text-sm font-semibold text-white">Recent Payment Links</h2>
            </div>
            <span className="text-xs text-gray-400">Latest 5 generated</span>
          </div>

          <div className="flex-1 p-2 sm:p-4">
            {recentPaymentLinks.length === 0 ? (
              <EmptyState
                title="No payment links generated"
                description="Payment links created from invoice pages will appear here."
                icon={LinkIcon}
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-gray-800/80 text-[11px] font-medium text-gray-400">
                      <th className="pb-2 pl-2">Invoice #</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Created</th>
                      <th className="pb-2 pr-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {recentPaymentLinks.map((l) => (
                      <tr key={l.id} className="hover:bg-gray-800/40 transition-colors">
                        <td className="py-2.5 pl-2 font-medium">
                          {l.invoice ? (
                            <Link
                              href={`/admin/billing/invoices/${l.invoice.id}`}
                              className="text-purple-400 hover:text-purple-300 font-mono"
                            >
                              {l.invoice.invoice_number}
                            </Link>
                          ) : (
                            <span className="text-gray-500 font-mono">—</span>
                          )}
                        </td>
                        <td className="py-2.5 font-semibold text-white">
                          {formatCurrencyExact(l.amount)}
                        </td>
                        <td className="py-2.5">
                          <StatusBadge status={l.status} />
                        </td>
                        <td className="py-2.5 text-gray-400 font-mono text-[11px]">
                          {formatDate(l.created_at)}
                        </td>
                        <td className="py-2.5 pr-2 text-right">
                          <div className="inline-flex items-center gap-1.5 justify-end">
                            <button
                              type="button"
                              onClick={() => handleCopy(l.id, l.short_url)}
                              className="p-1 rounded bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors cursor-pointer"
                              title="Copy Payment Link"
                            >
                              {copiedId === l.id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                            <a
                              href={l.short_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                              title="Open Payment Link"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Invoices Table */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/80 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <h2 className="text-sm font-semibold text-white">Recent Invoices</h2>
          </div>
          <Link
            href="/admin/billing/invoices"
            className="text-xs text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1"
          >
            View All Invoices <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentInvoices.length === 0 ? (
          <div className="p-8">
            <EmptyState
              title="No invoices created yet"
              description="Start generating tax invoices with the New Invoice button above."
              icon={FileText}
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-950/40 text-[11px] font-medium text-gray-400">
                  <th className="py-3 px-4">Invoice #</th>
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Issue Date</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4 text-right">Grand Total</th>
                  <th className="py-3 px-4 text-right">Amount Due</th>
                  <th className="py-3 px-4">Doc Status</th>
                  <th className="py-3 px-4">Payment</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {recentInvoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-3 px-4 font-mono font-medium text-purple-400">
                      <Link
                        href={`/admin/billing/invoices/${inv.id}`}
                        className="hover:text-purple-300"
                      >
                        {inv.invoice_number}
                      </Link>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-200">
                        {inv.client?.company_name || "—"}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {inv.client?.contact_name || inv.client?.client_code || ""}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-400 font-mono text-[11px]">
                      {formatDate(inv.issue_date)}
                    </td>
                    <td className="py-3 px-4 text-gray-400 font-mono text-[11px]">
                      {formatDate(inv.due_date)}
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-white">
                      {formatCurrencyExact(inv.grand_total)}
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">
                      {inv.amount_due > 0 ? (
                        <span className="text-amber-400">{formatCurrencyExact(inv.amount_due)}</span>
                      ) : (
                        <span className="text-emerald-400">₹0.00</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={inv.document_status} />
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={inv.payment_status} />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/admin/billing/invoices/${inv.id}`}
                        className="inline-flex items-center gap-1 rounded bg-gray-800 px-2 py-1 text-[11px] font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        <span>View</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Security & Multi-Provider Architecture Badge */}
      <div className="rounded-lg border border-purple-900/40 bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-blue-950/40 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-400">
        <div className="flex items-center gap-2 text-purple-300 font-medium">
          <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
          <span>Provider-Agnostic Financial Pipeline (Active Adapter: Razorpay)</span>
        </div>
        <div className="text-[11px] text-gray-400">
          Server-authoritative balances • Immutable historical snapshots • Signature verified webhooks
        </div>
      </div>
    </div>
  );
};

export default BillingDashboardView;
