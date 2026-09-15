"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import { issueInvoiceAction, cancelInvoiceAction } from "@/modules/billing/actions/invoiceActions";
import { toast } from "sonner";
import {
  ArrowLeft,
  Edit2,
  CheckCircle2,
  XCircle,
  FileText,
  Printer,
  Calendar,
  MapPin,
  Building2,
  AlertTriangle,
  Loader2,
  Download,
} from "lucide-react";

interface InvoiceDetailViewProps {
  invoice: InvoiceWithRelations;
}

export const InvoiceDetailView: React.FC<InvoiceDetailViewProps> = ({ invoice }) => {
  const router = useRouter();
  const [isIssuing, setIsIssuing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  const formatCurrency = (val: number) => {
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
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  const isDraft = invoice.document_status === "draft";
  const isCancelled = invoice.document_status === "cancelled" || invoice.document_status === "void";
  const canCancel = !isCancelled && Number(invoice.amount_paid) === 0;

  const seller = (invoice.seller_snapshot as any) || {};
  const buyer = (invoice.buyer_snapshot as any) || {};

  const handleDownloadPdf = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const res = await fetch(`/api/billing/invoices/${invoice.id}/pdf`);
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "PDF generation failed" }));
        toast.error(err.error || "Failed to download PDF");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Invoice_${invoice.invoice_number.replace(/[^a-zA-Z0-9\-_]/g, "_")}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error downloading PDF");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleIssue = async () => {
    setIsIssuing(true);
    try {
      const res = await issueInvoiceAction(invoice.id);
      if (!res.success) {
        toast.error(res.error || "Failed to issue invoice");
        setIsIssuing(false);
        return;
      }
      toast.success(`Invoice issued: ${res.data.invoice_number}`);
      setShowIssueModal(false);
      router.refresh();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error issuing invoice");
    } finally {
      setIsIssuing(false);
    }
  };

  const handleCancel = async () => {
    if (!cancelReason.trim()) {
      toast.error("Please state a cancellation reason");
      return;
    }
    setIsCancelling(true);
    try {
      const res = await cancelInvoiceAction(invoice.id, cancelReason);
      if (!res.success) {
        toast.error(res.error || "Failed to cancel invoice");
        setIsCancelling(false);
        return;
      }
      toast.success("Invoice cancelled");
      setShowCancelModal(false);
      router.refresh();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error cancelling invoice");
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Action Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/billing/invoices"
            className="rounded-lg border border-gray-800 bg-gray-900/60 p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-mono text-2xl font-bold tracking-tight text-white">
                {invoice.invoice_number}
              </h1>
              <StatusBadge status={invoice.document_status} />
              <StatusBadge status={invoice.payment_status} />
            </div>
            <p className="mt-1 text-xs text-gray-400">
              Created on {formatDate(invoice.created_at)}
              {invoice.issued_at && ` • Issued on ${formatDate(invoice.issued_at)}`}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-purple-950/30 px-3.5 py-2 text-xs font-medium text-purple-300 hover:bg-purple-900/50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDownloading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            <span>{isDownloading ? "Generating…" : "Download PDF"}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-lg border border-gray-700 bg-gray-800/80 px-3.5 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700"
          >
            <Printer className="h-4 w-4" />
            <span>Print View</span>
          </button>

          {isDraft && (
            <>
              <Link
                href={`/admin/billing/invoices/${invoice.id}/edit`}
                className="flex items-center gap-1.5 rounded-lg border border-blue-500/40 bg-blue-950/30 px-3.5 py-2 text-xs font-medium text-blue-300 hover:bg-blue-900/50"
              >
                <Edit2 className="h-4 w-4" />
                <span>Edit Draft</span>
              </Link>

              <button
                onClick={() => setShowIssueModal(true)}
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-950/40 hover:from-emerald-700 hover:to-teal-800"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Issue Invoice</span>
              </button>
            </>
          )}

          {canCancel && (
            <button
              onClick={() => setShowCancelModal(true)}
              className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-950/20 px-3.5 py-2 text-xs font-medium text-red-400 hover:bg-red-900/40"
            >
              <XCircle className="h-4 w-4" />
              <span>Cancel Invoice</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Invoice Card */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 shadow-2xl backdrop-blur-md md:p-8">
        {/* Meta Bar */}
        <div className="mb-8 grid grid-cols-2 gap-4 border-b border-gray-800 pb-6 text-xs sm:grid-cols-4">
          <div>
            <span className="text-gray-500">Document Type</span>
            <p className="mt-1 font-semibold uppercase tracking-wider text-white">
              {invoice.invoice_type.replace("_", " ")}
            </p>
          </div>
          <div>
            <span className="text-gray-500">Issue Date</span>
            <p className="mt-1 font-medium text-white">{formatDate(invoice.issue_date)}</p>
          </div>
          <div>
            <span className="text-gray-500">Due Date</span>
            <p className="mt-1 font-medium text-white">{formatDate(invoice.due_date)}</p>
          </div>
          <div>
            <span className="text-gray-500">Place of Supply</span>
            <p className="mt-1 font-medium text-white">
              {invoice.place_of_supply || "Rajasthan"} (Code: {invoice.place_of_supply_state_code || "08"})
              <span className="ml-1 text-[10px] text-purple-400">
                {invoice.is_interstate ? "[Inter-State IGST]" : "[Intra-State CGST+SGST]"}
              </span>
            </p>
          </div>
        </div>

        {/* Snapshots Grid: Seller vs Buyer */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Seller Snapshot */}
          <div className="rounded-lg border border-gray-800/80 bg-gray-950/40 p-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400">
              Billed From (Seller)
            </span>
            <h3 className="mt-2 text-base font-bold text-white">
              {seller.legalName || "Growth Service Technologies LLP"}
            </h3>
            <p className="text-xs text-gray-400">{seller.addressLine1 || "Plot No. 42, Malviya Nagar"}</p>
            <p className="text-xs text-gray-400">
              {seller.city || "Jaipur"}, {seller.state || "Rajasthan"} - {seller.postalCode || "302017"}
            </p>
            <div className="mt-3 space-y-0.5 border-t border-gray-800/60 pt-2 text-xs">
              <p className="text-gray-300">
                <span className="text-gray-500">GSTIN:</span>{" "}
                <span className="font-mono">{seller.gstin || "08AAAAA0000A1Z5"}</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">PAN:</span>{" "}
                <span className="font-mono">{seller.pan || "AAAAA0000A"}</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">State Code:</span>{" "}
                <span className="font-mono">{seller.stateCode || "08"}</span>
              </p>
            </div>
          </div>

          {/* Buyer Snapshot */}
          <div className="rounded-lg border border-gray-800/80 bg-gray-950/40 p-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
              Billed To (Buyer)
            </span>
            <h3 className="mt-2 text-base font-bold text-white">
              {buyer.legalName || buyer.companyName || invoice.client?.company_name || "Client"}
            </h3>
            <p className="text-xs text-gray-400">Attn: {buyer.contactName || invoice.client?.contact_name || "—"}</p>
            <p className="text-xs text-gray-400">
              {buyer.addressLine1 || "—"}
              {buyer.city && `, ${buyer.city}`}
              {buyer.state && `, ${buyer.state} - ${buyer.postalCode || ""}`}
            </p>
            <div className="mt-3 space-y-0.5 border-t border-gray-800/60 pt-2 text-xs">
              <p className="text-gray-300">
                <span className="text-gray-500">GSTIN:</span>{" "}
                <span className="font-mono">{buyer.gstin || "Unregistered"}</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">PAN:</span>{" "}
                <span className="font-mono">{buyer.pan || "—"}</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">State Code:</span>{" "}
                <span className="font-mono">{buyer.stateCode || "08"}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-800">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="border-b border-gray-800 bg-gray-950/60 uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">HSN/SAC</th>
                <th className="px-4 py-3 text-right">Qty</th>
                <th className="px-4 py-3 text-right">Rate</th>
                <th className="px-4 py-3 text-right">Disc</th>
                <th className="px-4 py-3 text-right">Taxable</th>
                <th className="px-4 py-3 text-right">Tax %</th>
                <th className="px-4 py-3 text-right">Tax Amt</th>
                <th className="px-4 py-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {invoice.items?.map((it, idx) => {
                const taxAmt =
                  Number(it.cgst_amount || 0) +
                  Number(it.sgst_amount || 0) +
                  Number(it.igst_amount || 0);

                return (
                  <tr key={it.id || idx} className="hover:bg-gray-800/30">
                    <td className="px-4 py-3.5 text-gray-500">{idx + 1}</td>
                    <td className="px-4 py-3.5 font-medium text-white">
                      <div>{it.description_snapshot}</div>
                      {it.sku_snapshot && (
                        <span className="text-[10px] text-gray-500">SKU: {it.sku_snapshot}</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-gray-400">{it.hsn_sac_snapshot || "—"}</td>
                    <td className="px-4 py-3.5 text-right font-mono">
                      {Number(it.quantity)} {it.unit_snapshot}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono">{formatCurrency(Number(it.unit_price))}</td>
                    <td className="px-4 py-3.5 text-right font-mono text-emerald-400">
                      {Number(it.discount_amount) > 0 ? `-${formatCurrency(Number(it.discount_amount))}` : "—"}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono">{formatCurrency(Number(it.taxable_amount))}</td>
                    <td className="px-4 py-3.5 text-right font-mono">{Number(it.tax_rate)}%</td>
                    <td className="px-4 py-3.5 text-right font-mono">{formatCurrency(taxAmt)}</td>
                    <td className="px-4 py-3.5 text-right font-mono font-semibold text-white">
                      {formatCurrency(Number(it.line_total))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Calculation Summary Footer */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Notes & Bank Details */}
          <div className="space-y-4 text-xs md:col-span-7">
            {invoice.notes && (
              <div className="rounded-lg border border-gray-800 bg-gray-950/30 p-4">
                <span className="font-semibold text-gray-400">Notes:</span>
                <p className="mt-1 whitespace-pre-line text-gray-300">{invoice.notes}</p>
              </div>
            )}

            {seller.bankDetails && (
              <div className="rounded-lg border border-gray-800 bg-gray-950/30 p-4">
                <span className="font-semibold text-purple-400">Bank Details for Direct RTGS/NEFT:</span>
                <div className="mt-2 grid grid-cols-2 gap-2 text-gray-300">
                  <p>
                    <span className="text-gray-500">Account:</span> {seller.bankDetails.accountName}
                  </p>
                  <p>
                    <span className="text-gray-500">A/C No:</span>{" "}
                    <span className="font-mono">{seller.bankDetails.accountNumber}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">IFSC:</span>{" "}
                    <span className="font-mono">{seller.bankDetails.ifscCode}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">Bank:</span> {seller.bankDetails.bankName} (
                    {seller.bankDetails.branch})
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Totals Table */}
          <div className="md:col-span-5">
            <div className="rounded-lg border border-gray-800 bg-gray-950/60 p-5 text-xs">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">{formatCurrency(Number(invoice.subtotal))}</span>
                </div>

                {Number(invoice.discount_total) > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span className="font-mono">-{formatCurrency(Number(invoice.discount_total))}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-400">
                  <span>Taxable Value</span>
                  <span className="font-mono text-white">{formatCurrency(Number(invoice.taxable_total))}</span>
                </div>

                {invoice.is_interstate ? (
                  <div className="flex justify-between text-blue-400">
                    <span>IGST</span>
                    <span className="font-mono">{formatCurrency(Number(invoice.igst_total))}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between text-purple-400">
                      <span>CGST</span>
                      <span className="font-mono">{formatCurrency(Number(invoice.cgst_total))}</span>
                    </div>
                    <div className="flex justify-between text-purple-400">
                      <span>SGST</span>
                      <span className="font-mono">{formatCurrency(Number(invoice.sgst_total))}</span>
                    </div>
                  </>
                )}

                {Number(invoice.round_off) !== 0 && (
                  <div className="flex justify-between text-gray-500">
                    <span>Round Off</span>
                    <span className="font-mono">
                      {Number(invoice.round_off) > 0 ? `+${invoice.round_off}` : invoice.round_off}
                    </span>
                  </div>
                )}

                <div className="border-t border-gray-800 pt-3">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-bold text-white">Grand Total</span>
                    <span className="font-mono text-lg font-bold text-yellow-400">
                      {formatCurrency(Number(invoice.grand_total))}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-gray-800/60 pt-2 text-gray-400">
                  <span>Amount Paid</span>
                  <span className="font-mono text-emerald-400">{formatCurrency(Number(invoice.amount_paid))}</span>
                </div>

                <div className="flex justify-between font-semibold">
                  <span className="text-white">Amount Due</span>
                  <span className="font-mono text-sm text-yellow-400">
                    {formatCurrency(Number(invoice.amount_due))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Issue Modal */}
      {showIssueModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Issue Official Invoice?</h3>
            <p className="mt-2 text-sm text-gray-400">
              Issuing this invoice will allocate an official consecutive invoice number (e.g. GS/26-27/000001)
              and permanently lock its line items and calculations.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowIssueModal(false)}
                className="rounded-lg border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleIssue}
                disabled={isIssuing}
                className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
              >
                {isIssuing ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                <span>Confirm & Issue</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-2xl">
            <div className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="text-lg font-bold text-white">Cancel Invoice</h3>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Are you sure you want to cancel {invoice.invoice_number}? This action cannot be reversed.
            </p>
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase text-gray-400">
                Cancellation Reason <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={3}
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                placeholder="e.g. Customer cancelled order / Duplicate entry..."
                className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-xs text-white focus:border-red-500 focus:outline-none"
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="rounded-lg border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={isCancelling}
                className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 disabled:opacity-50"
              >
                {isCancelling ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4" />}
                <span>Confirm Cancellation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
