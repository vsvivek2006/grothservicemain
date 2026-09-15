import React from "react";
import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/shared/AdminPageHeader";
import { StatCard } from "@/components/admin/shared/StatCard";
import { EmptyState } from "@/components/admin/shared/EmptyState";
import { InvoiceTable } from "@/components/admin/billing/InvoiceTable";
import { getInvoices, getInvoiceStats } from "@/modules/billing/queries/invoiceQueries";
import { Plus, FileText, AlertCircle, CheckCircle, Clock } from "lucide-react";

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

  const [{ invoices, totalCount, totalPages }, stats] = await Promise.all([
    getInvoices({ page, limit: 20, status, paymentStatus, search }),
    getInvoiceStats(),
  ]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <AdminPageHeader
        title="Invoices"
        description="Issue, monitor, and manage tax invoices with automated GST calculations and snapshots"
        actions={
          <Link
            href="/admin/billing/invoices/new"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all hover:from-blue-600 hover:to-indigo-800"
          >
            <Plus className="h-4 w-4" />
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
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              status === "all" && paymentStatus === "all"
                ? "bg-purple-600 text-white"
                : "border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-white"
            }`}
          >
            All ({stats.totalInvoices})
          </Link>
          <Link
            href="/admin/billing/invoices?status=draft"
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              status === "draft"
                ? "bg-purple-600 text-white"
                : "border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-white"
            }`}
          >
            Drafts ({stats.draftCount})
          </Link>
          <Link
            href="/admin/billing/invoices?status=issued"
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              status === "issued"
                ? "bg-purple-600 text-white"
                : "border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-white"
            }`}
          >
            Issued ({stats.issuedCount})
          </Link>
          <Link
            href="/admin/billing/invoices?paymentStatus=unpaid"
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              paymentStatus === "unpaid"
                ? "bg-purple-600 text-white"
                : "border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-white"
            }`}
          >
            Unpaid ({stats.unpaidCount})
          </Link>
          <Link
            href="/admin/billing/invoices?paymentStatus=paid"
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              paymentStatus === "paid"
                ? "bg-purple-600 text-white"
                : "border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-white"
            }`}
          >
            Paid ({stats.paidCount})
          </Link>
        </div>

        {/* Search */}
        <form method="GET" className="relative w-full sm:w-64">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search invoice number..."
            className="w-full rounded-lg border border-gray-800 bg-gray-900/60 px-3.5 py-1.5 text-xs text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
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
              className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
            >
              <Plus className="h-4 w-4" />
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
