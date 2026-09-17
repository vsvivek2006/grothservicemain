import React, { Suspense } from "react";
import Link from "next/link";
import { assertAdminUser, type AdminRole } from "@/lib/authorization";
import {
  FileText,
  Users,
  PlusCircle,
  ExternalLink,
  ArrowRight,
  CreditCard,
  Receipt,
  Sparkles,
  Package,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { getInvoiceStats, getInvoices, type InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import { StatCardSkeleton, TableRowSkeleton } from "@/components/admin/shared/AdminDashboardSkeleton";
import { isPaymentsEnabled } from "@/modules/billing/constants/featureFlags";
import { formatCurrency, formatDate } from "@/lib/formatters";

export const revalidate = 0; // Fresh real-time data on load

// -----------------------------------------------------------------------------
// Component 1: Operational Metrics Cards (Streaming)
// -----------------------------------------------------------------------------
async function OperationalMetrics({ role }: { role: AdminRole }) {
  const supabase = createAdminClient();

  if (role === "editor") {
    const { data: postRows } = await supabase.from("posts").select("status");
    const publishedPosts = postRows?.filter((p) => p.status === "published").length || 0;
    const draftPosts = postRows?.filter((p) => p.status === "draft").length || 0;
    const totalPosts = postRows?.length || 0;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Published Posts */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Live Articles</span>
            <p className="text-2xl font-bold text-emerald-400 mt-1">{publishedPosts}</p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">Published and indexing</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-900/40 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        {/* Draft Posts */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Draft Articles</span>
            <p className="text-2xl font-bold text-amber-400 mt-1">{draftPosts}</p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">In progress or review</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-950/50 border border-amber-900/40 flex items-center justify-center text-amber-400 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        {/* Total Articles */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Total Articles</span>
            <p className="text-2xl font-bold text-purple-400 mt-1">{totalPosts}</p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">Full content library</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
        </div>
      </div>
    );
  }

  if (role === "billing_manager") {
    const [invoiceStats, { count: clientCount }, { count: itemCount }] =
      await Promise.all([
        getInvoiceStats(),
        supabase.from("clients").select("id", { count: "exact", head: true }).neq("status", "archived"),
        supabase.from("billing_items").select("id", { count: "exact", head: true }).eq("is_active", true),
      ]);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Revenue Collected */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Total Collected</span>
            <p className="text-2xl font-bold text-emerald-400 mt-1">
              {formatCurrency(invoiceStats.totalCollected)}
            </p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">
              {invoiceStats.paidCount} fully paid invoices
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-900/40 flex items-center justify-center text-emerald-400 shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        {/* Receivables Due */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Total Receivables</span>
            <p className="text-2xl font-bold text-amber-400 mt-1">
              {formatCurrency(invoiceStats.totalReceivables)}
            </p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">
              {invoiceStats.unpaidCount + invoiceStats.partiallyPaidCount} pending or partial
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-950/50 border border-amber-900/40 flex items-center justify-center text-amber-400 shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>

        {/* Active Clients */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Total Clients</span>
            <p className="text-2xl font-bold text-purple-400 mt-1">
              {clientCount ?? 0}
            </p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">
              Registered client accounts
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
            <Users className="w-5 h-5" />
          </div>
        </div>

        {/* Active Catalog Services */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Active Services</span>
            <p className="text-2xl font-bold text-blue-400 mt-1">
              {itemCount ?? 0}
            </p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">
              Catalog items active
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-900/40 flex items-center justify-center text-blue-400 shrink-0">
            <Package className="w-5 h-5" />
          </div>
        </div>
      </div>
    );
  }

  const [invoiceStats, { count: clientCount }, { data: postRows }] =
    await Promise.all([
      getInvoiceStats(),
      supabase.from("clients").select("id", { count: "exact", head: true }).neq("status", "archived"),
      supabase.from("posts").select("status"),
    ]);

  const publishedPosts = postRows?.filter((p) => p.status === "published").length || 0;
  const draftPosts = postRows?.filter((p) => p.status === "draft").length || 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Revenue Collected */}
      <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-xs font-medium text-gray-400">Total Collected</span>
          <p className="text-2xl font-bold text-emerald-400 mt-1">
            {formatCurrency(invoiceStats.totalCollected)}
          </p>
          <span className="text-[11px] text-gray-500 mt-0.5 block">
            {invoiceStats.paidCount} fully paid invoices
          </span>
        </div>
        <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-900/40 flex items-center justify-center text-emerald-400 shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
      </div>

      {/* Receivables Due */}
      <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-xs font-medium text-gray-400">Total Receivables</span>
          <p className="text-2xl font-bold text-amber-400 mt-1">
            {formatCurrency(invoiceStats.totalReceivables)}
          </p>
          <span className="text-[11px] text-gray-500 mt-0.5 block">
            {invoiceStats.unpaidCount + invoiceStats.partiallyPaidCount} pending or partial
          </span>
        </div>
        <div className="w-10 h-10 rounded-lg bg-amber-950/50 border border-amber-900/40 flex items-center justify-center text-amber-400 shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
      </div>

      {/* Active Clients */}
      <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-xs font-medium text-gray-400">Total Clients</span>
          <p className="text-2xl font-bold text-purple-400 mt-1">
            {clientCount ?? 0}
          </p>
          <span className="text-[11px] text-gray-500 mt-0.5 block">
            Registered client accounts
          </span>
        </div>
        <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
          <Users className="w-5 h-5" />
        </div>
      </div>

      {/* Published Content */}
      <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/80 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-xs font-medium text-gray-400">Live Articles</span>
          <p className="text-2xl font-bold text-white mt-1">
            {publishedPosts ?? 0}
          </p>
          <span className="text-[11px] text-gray-500 mt-0.5 block">
            {draftPosts ?? 0} drafts in progress
          </span>
        </div>
        <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-900/40 flex items-center justify-center text-blue-400 shrink-0">
          <FileText className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component 2: Recent Invoices Section (Streaming)
// -----------------------------------------------------------------------------
async function RecentInvoicesSection() {
  const result = await getInvoices({ page: 1, limit: 5, includeCount: false });
  const invoices: InvoiceWithRelations[] = result?.invoices || [];

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/70 shadow-lg overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-900/90">
        <div className="flex items-center gap-2">
          <Receipt className="w-4 h-4 text-purple-400" />
          <h2 className="text-sm font-semibold text-white">Recent Invoices</h2>
        </div>
        <Link
          href="/admin/billing/invoices"
          className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium transition-colors"
        >
          <span>All Invoices</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="flex-1 overflow-x-auto">
        {invoices.length === 0 ? (
          <div className="p-8 text-center space-y-2">
            <Receipt className="w-7 h-7 text-gray-600 mx-auto" />
            <p className="text-xs text-gray-400">No invoices issued yet.</p>
            <Link
              href="/admin/billing/invoices/new"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-purple-600/80 hover:bg-purple-600 text-white transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Create Invoice
            </Link>
          </div>
        ) : (
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-800/50 text-gray-400 font-medium border-b border-gray-800">
              <tr>
                <th className="py-2.5 px-4">Invoice #</th>
                <th className="py-2.5 px-4">Client</th>
                <th className="py-2.5 px-4">Status</th>
                <th className="py-2.5 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-gray-300">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-800/40 transition-colors">
                  <td className="py-2.5 px-4 font-mono font-medium text-white">
                    <Link
                      href={`/admin/billing/invoices/${inv.id}`}
                      className="text-purple-400 hover:text-purple-300 hover:underline"
                    >
                      {inv.invoice_number}
                    </Link>
                  </td>
                  <td className="py-2.5 px-4 truncate max-w-[140px] text-gray-200">
                    {inv.client?.company_name || "—"}
                  </td>
                  <td className="py-2.5 px-4 whitespace-nowrap">
                    <StatusBadge
                      status={
                        inv.document_status === "draft"
                          ? "draft"
                          : inv.document_status === "cancelled" || inv.document_status === "void"
                          ? inv.document_status
                          : inv.payment_status
                      }
                      type={
                        inv.document_status === "draft" ||
                        inv.document_status === "cancelled" ||
                        inv.document_status === "void"
                          ? "document"
                          : "payment"
                      }
                    />
                  </td>
                  <td className="py-2.5 px-4 text-right font-medium text-white whitespace-nowrap">
                    {formatCurrency(inv.grand_total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Component 3: Recent Articles Section (Streaming)
// -----------------------------------------------------------------------------
async function RecentArticlesSection() {
  const supabase = createAdminClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, slug, status, source, created_at")
    .order("created_at", { ascending: false })
    .limit(5);

  const postList = posts || [];

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/70 shadow-lg overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-900/90">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-400" />
          <h2 className="text-sm font-semibold text-white">Recent Articles</h2>
        </div>
        <Link
          href="/admin/blog"
          className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium transition-colors"
        >
          <span>All Articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="flex-1 overflow-x-auto">
        {postList.length === 0 ? (
          <div className="p-8 text-center space-y-2">
            <FileText className="w-7 h-7 text-gray-600 mx-auto" />
            <p className="text-xs text-gray-400">No blog posts created yet.</p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-purple-600/80 hover:bg-purple-600 text-white transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Create Article
            </Link>
          </div>
        ) : (
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-800/50 text-gray-400 font-medium border-b border-gray-800">
              <tr>
                <th className="py-2.5 px-4">Title</th>
                <th className="py-2.5 px-4">Status</th>
                <th className="py-2.5 px-4 text-right">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-gray-300">
              {postList.map((post) => (
                <tr key={post.id} className="hover:bg-gray-800/40 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-white max-w-[200px] truncate">
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="hover:text-purple-300 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="py-2.5 px-4 whitespace-nowrap">
                    {post.status === "published" ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/70 text-emerald-400 border border-emerald-900/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-950/70 text-amber-400 border border-amber-900/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-4 text-right text-gray-400 whitespace-nowrap">
                    {formatDate(post.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Skeletons for Streaming Suspense Boundaries
// -----------------------------------------------------------------------------
function MetricsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
    </div>
  );
}

function ActivityTableSkeleton({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-4 space-y-4 animate-pulse">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <div className="h-4 w-28 bg-gray-800 rounded" />
        <div className="h-3 w-16 bg-gray-800/60 rounded" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 bg-gray-800/40 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main Page: Instant Shell + Concurrent Streaming
// -----------------------------------------------------------------------------
export default async function AdminDashboardPage() {
  const adminUser = await assertAdminUser();
  const userRole = adminUser.role;
  const isEditor = userRole === "editor";
  const isBillingManager = userRole === "billing_manager";

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header Shell (Renders in < 20ms) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-gray-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {isEditor
              ? "Content operations, article drafts, publishing pipeline, and AI generator."
              : isBillingManager
              ? "Billing operations, invoices, client accounts, and revenue receivables."
              : "Operational overview across revenue, billing, clients, and content."}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {!isBillingManager && (
            <Link
              href="/blog"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-700 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Blog</span>
            </Link>
          )}
          {isEditor ? (
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white shadow-sm transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>New Post</span>
            </Link>
          ) : (
            <Link
              href="/admin/billing/invoices/new"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-sm transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>New Invoice</span>
            </Link>
          )}
        </div>
      </div>

      {/* Operational Metric Cards (Streamed via Suspense) */}
      <Suspense fallback={<MetricsGridSkeleton />}>
        <OperationalMetrics role={userRole} />
      </Suspense>

      {/* Quick Actions Launchpad (Instant Render) */}
      {isEditor ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/admin/blog/new"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-900/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">AI Article Writer</h3>
                <p className="text-[10px] text-gray-400">Draft SEO article</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-400 transition-colors" />
          </Link>

          <Link
            href="/admin/blog"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-900/40 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Article Directory</h3>
                <p className="text-[10px] text-gray-400">Manage blog posts</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 transition-colors" />
          </Link>

          <Link
            href="/blog"
            target="_blank"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Public Blog</h3>
                <p className="text-[10px] text-gray-400">View live website</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </Link>
        </div>
      ) : isBillingManager ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            href="/admin/billing/invoices/new"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-900/40 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                <Receipt className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Create Invoice</h3>
                <p className="text-[10px] text-gray-400">Issue tax invoice</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 transition-colors" />
          </Link>

          <Link
            href="/admin/clients"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Client Directory</h3>
                <p className="text-[10px] text-gray-400">Manage accounts</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </Link>

          <Link
            href="/admin/billing/items"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-900/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Catalog Items</h3>
                <p className="text-[10px] text-gray-400">Manage services</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-emerald-400 transition-colors" />
          </Link>

          {isPaymentsEnabled() ? (
            <Link
              href="/admin/billing/payments"
              className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-900/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">Payment Ledger</h3>
                  <p className="text-[10px] text-gray-400">Audit transactions</p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-400 transition-colors" />
            </Link>
          ) : (
            <Link
              href="/admin/billing/invoices"
              className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-900/40 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Receipt className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">All Invoices</h3>
                  <p className="text-[10px] text-gray-400">View ledger</p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 transition-colors" />
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            href="/admin/billing/invoices/new"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-900/40 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                <Receipt className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Create Invoice</h3>
                <p className="text-[10px] text-gray-400">Issue tax invoice</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 transition-colors" />
          </Link>

          <Link
            href="/admin/clients"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Client Directory</h3>
                <p className="text-[10px] text-gray-400">Manage accounts</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </Link>

          <Link
            href="/admin/blog/new"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-900/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">AI Article Writer</h3>
                <p className="text-[10px] text-gray-400">Draft SEO article</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-400 transition-colors" />
          </Link>

          <Link
            href="/admin/team"
            className="p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:bg-gray-800/60 hover:border-purple-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-900/40 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-white">Team & Admins</h3>
                <p className="text-[10px] text-gray-400">Manage staff roles</p>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 transition-colors" />
          </Link>
        </div>
      )}

      {/* Split Activity Tables (Streamed via Suspense) */}
      {isEditor ? (
        <div className="grid grid-cols-1 gap-6">
          <Suspense fallback={<ActivityTableSkeleton title="Recent Articles" />}>
            <RecentArticlesSection />
          </Suspense>
        </div>
      ) : isBillingManager ? (
        <div className="grid grid-cols-1 gap-6">
          <Suspense fallback={<ActivityTableSkeleton title="Recent Invoices" />}>
            <RecentInvoicesSection />
          </Suspense>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Suspense fallback={<ActivityTableSkeleton title="Recent Invoices" />}>
            <RecentInvoicesSection />
          </Suspense>

          <Suspense fallback={<ActivityTableSkeleton title="Recent Articles" />}>
            <RecentArticlesSection />
          </Suspense>
        </div>
      )}
    </div>
  );
}
