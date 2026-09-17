import React from "react";
import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/shared/AdminPageHeader";
import { StatCard } from "@/components/admin/shared/StatCard";
import { EmptyState } from "@/components/admin/shared/EmptyState";
import { InvoiceTable } from "@/components/admin/billing/InvoiceTable";
import { getInvoices, getInvoiceStats } from "@/modules/billing/queries/invoiceQueries";
import { Plus, FileText, AlertCircle, CheckCircle, Clock, Search } from "lucide-react";
import { assertAdminUser, assertPermission } from "@/lib/authorization";
import { formatCurrency } from "@/lib/formatters";

export const revalidate = 0;

interface PageProps {
  searchParams: Promise<{
    page?: string;
    status?: string;
    paymentStatus?: string;
    search?: string;
  }>;
}

export default async function InvoicesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const status = params.status || "all";
  const paymentStatus = params.paymentStatus || "all";
  const search = params.search || "";

  const [adminUser, { invoices, totalCount, totalPages }, stats] = await Promise.all([
    assertAdminUser(),
    getInvoices({ page, limit: 20, status, paymentStatus, search }),
    getInvoiceStats(),
  ]);
  assertPermission(adminUser, "billing:read");

  return (
    <div className="space-y-8">
      {/* Header */}
      <AdminPageHeader
        title="Invoices"
        description="Issue, monitor, and manage tax invoices with automated GST calculations and snapshots"
        actions={
          <Link
            href="/admin/billing/invoices/new"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-purple-900/40 transition-all hover:from-blue-600 hover:to-indigo-800"
          >
            <Plus className="h-4 w-4 text-yellow-300" />
            <span>New Invoice</span>
          </Link>
        }
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Receivables"
          value={formatCurrency(stats.totalReceivables)}
          description={`${stats.unpaidCount + stats.partiallyPaidCount} unpaid or partial`}
          icon={AlertCircle}
          variant="warning"
        />
        <StatCard
          label="Total Collected"
          value={formatCurrency(stats.totalCollected)}
          description={`${stats.paidCount} fully paid invoices`}
          icon={CheckCircle}
          variant="success"
        />
        <StatCard
          label="Issued Invoices"
          value={stats.issuedCount}
          description={`${stats.draftCount} drafts awaiting issue`}
          icon={FileText}
          variant="purple"
        />
        <StatCard
          label="Overdue Invoices"
          value={stats.overdueCount}
          description="Past payment due date"
          icon={Clock}
          variant="danger"
        />
      </div>

      {/* Filter / Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/billing/invoices"
            className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
              status === "all" && paymentStatus === "all"
                ? "bg-purple-600 text-white shadow-sm font-semibold"
                : "border border-gray-800 bg-gray-900/80 text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            All <span className="ml-1 opacity-80 font-mono">({stats.totalInvoices})</span>
          </Link>
          <Link
            href="/admin/billing/invoices?status=draft"
            className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
              status === "draft"
                ? "bg-purple-600 text-white shadow-sm font-semibold"
                : "border border-gray-800 bg-gray-900/80 text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            Drafts <span className="ml-1 opacity-80 font-mono">({stats.draftCount})</span>
          </Link>
          <Link
            href="/admin/billing/invoices?status=issued"
            className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
              status === "issued"
                ? "bg-purple-600 text-white shadow-sm font-semibold"
                : "border border-gray-800 bg-gray-900/80 text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            Issued <span className="ml-1 opacity-80 font-mono">({stats.issuedCount})</span>
          </Link>
          <Link
            href="/admin/billing/invoices?paymentStatus=unpaid"
            className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
              paymentStatus === "unpaid"
                ? "bg-purple-600 text-white shadow-sm font-semibold"
                : "border border-gray-800 bg-gray-900/80 text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            Unpaid <span className="ml-1 opacity-80 font-mono">({stats.unpaidCount})</span>
          </Link>
          <Link
            href="/admin/billing/invoices?paymentStatus=paid"
            className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
              paymentStatus === "paid"
                ? "bg-purple-600 text-white shadow-sm font-semibold"
                : "border border-gray-800 bg-gray-900/80 text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            Paid <span className="ml-1 opacity-80 font-mono">({stats.paidCount})</span>
          </Link>
        </div>

        {/* Search */}
        <form method="GET" className="relative w-full sm:w-72">
          {status !== "all" && <input type="hidden" name="status" value={status} />}
          {paymentStatus !== "all" && (
            <input type="hidden" name="paymentStatus" value={paymentStatus} />
          )}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            <Search className="w-3.5 h-3.5" />
          </div>
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search invoice number..."
            className="w-full rounded-lg border border-gray-800 bg-gray-900/80 pl-9 pr-3.5 py-2 text-xs text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all"
          />
        </form>
      </div>

      {/* Invoices Table */}
      {invoices.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="No Invoices Found"
          description="Create your first client invoice or adjust your search filters."
          action={
            <Link
              href="/admin/billing/invoices/new"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-purple-900/40 transition-all hover:from-blue-600 hover:to-indigo-800"
            >
              <Plus className="h-4 w-4 text-yellow-300" />
              <span>Create Invoice</span>
            </Link>
          }
        />
      ) : (
        <>
          <InvoiceTable invoices={invoices} />

          {totalPages > 1 && (
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div>
                Showing page {page} of {totalPages} ({totalCount} total)
              </div>
              <div className="flex gap-2">
                {page > 1 && (
                  <Link
                    href={`/admin/billing/invoices?page=${page - 1}&status=${status}&paymentStatus=${paymentStatus}&search=${search}`}
                    className="rounded border border-gray-800 bg-gray-900 px-3 py-1 hover:text-white"
                  >
                    Previous
                  </Link>
                )}
                {page < totalPages && (
                  <Link
                    href={`/admin/billing/invoices?page=${page + 1}&status=${status}&paymentStatus=${paymentStatus}&search=${search}`}
                    className="rounded border border-gray-800 bg-gray-900 px-3 py-1 hover:text-white"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
