"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import {
  cancelInvoiceAction,
  issueInvoiceAction,
} from "@/modules/billing/actions/invoiceActions";
import {
  sendInvoiceEmailAction,
  sendPaymentReminderEmailAction,
} from "@/modules/billing/actions/notificationActions";
import { InvoicePaymentLinksSection } from "./InvoicePaymentLinksSection";
import { RecordPaymentModal } from "./RecordPaymentModal";
import { isPaymentsEnabled } from "@/modules/billing/constants/featureFlags";
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
  Mail,
  Bell,
  Send,
  Info,
  CreditCard,
} from "lucide-react";

interface InvoiceDetailViewProps {
  invoice: InvoiceWithRelations;
}

export const InvoiceDetailView: React.FC<InvoiceDetailViewProps> = ({ invoice }) => {
  const router = useRouter();
  const [isIssuing, setIsIssuing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");

  // Notification Modals & Form State
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const initialRecipient =
    invoice.billing_profile?.billing_email || invoice.client?.email || "";
  const [emailRecipient, setEmailRecipient] = useState(initialRecipient);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [reminderError, setReminderError] = useState<string | null>(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSendingReminder, setIsSendingReminder] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  const handleDownloadPdf = async () => {
    if (isDownloadingPdf) return;
    setIsDownloadingPdf(true);
    const filename = `Invoice_${(invoice.invoice_number || "Draft").replace(/[^a-zA-Z0-9\-_]/g, "_")}.pdf`;
    try {
      const res = await fetch(`/api/billing/invoices/${invoice.id}/pdf`);
      if (!res.ok) {
        let errMessage = "Server PDF generation unavailable.";
        try {
          const errData = await res.json();
          if (errData?.error) errMessage = errData.error;
        } catch {
          // non-json response
        }
        toast.error(`${errMessage} Opening Print View...`);
        window.location.href = `/admin/billing/invoices/${invoice.id}/print?autoprint=1`;
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success("Invoice PDF downloaded successfully");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Download failed";
      toast.error(`${msg}. Opening Print View to save as PDF...`);
      window.location.href = `/admin/billing/invoices/${invoice.id}/print?autoprint=1`;
    } finally {
      setIsDownloadingPdf(false);
    }
  };

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
  const isPaid = invoice.payment_status === "paid";
  const canCancel = !isCancelled && Number(invoice.amount_paid) === 0;

  const seller = (invoice.seller_snapshot as any) || {};
  const buyer = (invoice.buyer_snapshot as any) || {};



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
      React.startTransition(() => {
        router.refresh();
      });
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
      React.startTransition(() => {
        router.refresh();
      });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error cancelling invoice");
    } finally {
      setIsCancelling(false);
    }
  };

  const handleSendEmail = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!emailRecipient.trim() || !emailRecipient.includes("@")) {
      setEmailError("Please enter a valid recipient email address.");
      return;
    }

    setIsSendingEmail(true);
    setEmailError(null);
    try {
      const res = await sendInvoiceEmailAction({
        invoiceId: invoice.id,
        recipientEmail: emailRecipient.trim(),
      });
      if (!res.success) {
        setEmailError(res.error || "Failed to send invoice email");
        toast.error(res.error || "Failed to send invoice email");
        return;
      }
      toast.success(`Invoice successfully emailed to ${emailRecipient.trim()}`);
      setShowEmailModal(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error sending invoice email";
      setEmailError(msg);
      toast.error(msg);
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleSendReminder = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!emailRecipient.trim() || !emailRecipient.includes("@")) {
      setReminderError("Please enter a valid recipient email address.");
      return;
    }

    setIsSendingReminder(true);
    setReminderError(null);
    try {
      const res = await sendPaymentReminderEmailAction({
        invoiceId: invoice.id,
        recipientEmail: emailRecipient.trim(),
      });
      if (!res.success) {
        setReminderError(res.error || "Failed to send payment reminder");
        toast.error(res.error || "Failed to send payment reminder");
        return;
      }
      toast.success(`Payment reminder sent to ${emailRecipient.trim()}`);
      setShowReminderModal(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error sending payment reminder";
      setReminderError(msg);
      toast.error(msg);
    } finally {
      setIsSendingReminder(false);
    }
  };

  return (
    <div className="space-y-8 print:space-y-0 print:m-0 print:p-0">
      {/* Action Header — Hidden during print */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
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
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isDownloadingPdf}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-purple-500/40 bg-purple-950/30 px-3.5 py-2 text-xs font-medium text-purple-300 hover:bg-purple-900/50 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloadingPdf ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-purple-400" />
                <span>Generating PDF...</span>
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </>
            )}
          </button>

          <Link
            href={`/admin/billing/invoices/${invoice.id}/print`}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-700 bg-gray-800/80 px-3.5 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700 cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>Print View</span>
          </Link>

          {!isCancelled && (
            <button
              type="button"
              onClick={() => {
                setEmailError(null);
                setShowEmailModal(true);
              }}
              disabled={isSendingEmail}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-blue-500/40 bg-blue-950/30 px-3.5 py-2 text-xs font-medium text-blue-300 hover:bg-blue-900/50 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
              title="Email invoice PDF to client"
            >
              <Mail className="h-4 w-4" />
              <span>Email Invoice</span>
            </button>
          )}

          {!isDraft && !isCancelled && !isPaid && (
            <button
              type="button"
              onClick={() => {
                setReminderError(null);
                setShowReminderModal(true);
              }}
              disabled={isSendingReminder}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-950/30 px-3.5 py-2 text-xs font-medium text-amber-300 hover:bg-amber-900/50 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
              title="Send payment reminder to client"
            >
              <Bell className="h-4 w-4" />
              <span>Send Reminder</span>
            </button>
          )}

          {!isDraft && !isCancelled && (
            <button
              type="button"
              onClick={() => setShowPaymentModal(true)}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white px-3.5 py-2 text-xs font-semibold shadow-md shadow-purple-950/40 cursor-pointer"
              title="Record offline payment or update status"
            >
              <CreditCard className="h-4 w-4" />
              <span>{isPaid ? "Update Payment" : "Record Payment"}</span>
            </button>
          )}

          {isDraft && (
            <>
              <Link
                href={`/admin/billing/invoices/${invoice.id}/edit`}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-blue-500/40 bg-blue-950/30 px-3.5 py-2 text-xs font-medium text-blue-300 hover:bg-blue-900/50"
              >
                <Edit2 className="h-4 w-4" />
                <span>Edit Draft</span>
              </Link>

              <button
                type="button"
                onClick={() => setShowIssueModal(true)}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-950/40 hover:from-emerald-700 hover:to-teal-800 cursor-pointer"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Issue Invoice</span>
              </button>
            </>
          )}

          {canCancel && (
            <button
              type="button"
              onClick={() => setShowCancelModal(true)}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-red-500/30 bg-red-950/20 px-3.5 py-2 text-xs font-medium text-red-400 hover:bg-red-900/40 cursor-pointer col-span-2 sm:col-span-1"
            >
              <XCircle className="h-4 w-4" />
              <span>Cancel Invoice</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Invoice Card — Fully responsive and print optimized */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-md print:p-0 print:m-0 print:border-none print:shadow-none print:bg-white print:text-black print:rounded-none">
        {/* Printable Official Tax Invoice Header (Visible on print only) */}
        <div className="hidden print:block border-b-2 border-purple-800 pb-4 mb-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="Growth Service"
                  className="h-8 w-8 object-contain shrink-0"
                />
                <h1 className="font-extrabold text-2xl tracking-tight text-purple-800">
                  GROWTH SERVICE
                </h1>
              </div>
              <p className="text-xs font-bold text-gray-900">
                {seller.legalName || "Growth Service Digital Solution"}
              </p>
              <p className="text-[11px] text-gray-700">
                {seller.addressLine1 || "Plot No. 42, Malviya Nagar"}, {seller.city || "Jaipur"},{" "}
                {seller.state || "Rajasthan"} - {seller.postalCode || "302017"}
              </p>
              <div className="mt-1 flex flex-wrap gap-x-4 text-[11px] text-gray-800 font-medium">
                <span>
                  GSTIN: <strong className="font-mono">{seller.gstin || "08SDFPS4894L1Z7"}</strong>
                </span>
                <span>
                  PAN: <strong className="font-mono">{seller.pan || "SDFPS4894L"}</strong>
                </span>
                <span>
                  State Code: <strong className="font-mono">{seller.stateCode || "08"}</strong>
                </span>
              </div>
              <p className="text-[10px] text-gray-600">
                Email: {seller.email || "billing@growthservice.in"} | Web: www.growthservice.in
              </p>
            </div>

            <div className="text-right space-y-1">
              <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-400 rounded">
                TAX INVOICE
              </div>
              <p className="font-mono text-base font-bold text-gray-900">{invoice.invoice_number}</p>
              <p className="text-[11px] text-gray-700">
                Invoice Date: <strong>{formatDate(invoice.issue_date)}</strong>
              </p>
              <p className="text-[11px] text-gray-700">
                Due Date: <strong>{formatDate(invoice.due_date)}</strong>
              </p>
              <p className="text-[10px] font-semibold text-purple-900 uppercase tracking-wider">
                Original for Recipient
              </p>
            </div>
          </div>
        </div>

        {/* Screen Meta Bar (Hidden during print as print header covers it) */}
        <div className="mb-8 grid grid-cols-2 gap-4 border-b border-gray-800 pb-6 text-xs sm:grid-cols-4 print:hidden">
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
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 print:grid-cols-2 print:gap-4 print:mb-6">
          {/* Seller Snapshot */}
          <div className="rounded-lg border border-gray-800/80 bg-gray-900/40 p-5 print:border-gray-300 print:bg-gray-50/50 print:p-4 print:text-black">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 print:text-purple-800">
                Billed From (Seller)
              </span>
              <img
                src="/logo.png"
                alt="Growth Service"
                className="h-5 w-5 object-contain"
              />
            </div>
            <h3 className="mt-2 text-base font-bold text-white print:text-black">
              {seller.legalName || "Growth Service Digital Solution"}
            </h3>
            <p className="text-xs text-gray-400 print:text-gray-700">
              {seller.addressLine1 || "Plot No. 42, Malviya Nagar"}
            </p>
            <p className="text-xs text-gray-400 print:text-gray-700">
              {seller.city || "Jaipur"}, {seller.state || "Rajasthan"} - {seller.postalCode || "302017"}
            </p>
            <div className="mt-3 space-y-0.5 border-t border-gray-800/60 pt-2 text-xs print:border-gray-300">
              <p className="text-gray-300 print:text-gray-900">
                <span className="text-gray-500 print:text-gray-600">GSTIN:</span>{" "}
                <span className="font-mono">{seller.gstin || "08SDFPS4894L1Z7"}</span>
              </p>
              <p className="text-gray-300 print:text-gray-900">
                <span className="text-gray-500 print:text-gray-600">PAN:</span>{" "}
                <span className="font-mono">{seller.pan || "SDFPS4894L"}</span>
              </p>
              <p className="text-gray-300 print:text-gray-900">
                <span className="text-gray-500 print:text-gray-600">State Code:</span>{" "}
                <span className="font-mono">{seller.stateCode || "08"}</span>
              </p>
            </div>
          </div>

          {/* Buyer Snapshot */}
          <div className="rounded-lg border border-gray-800/80 bg-gray-900/40 p-5 print:border-gray-300 print:bg-gray-50/50 print:p-4 print:text-black">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 print:text-blue-900">
              Billed To (Buyer)
            </span>
            <h3 className="mt-2 text-base font-bold text-white print:text-black">
              {buyer.legalName || buyer.companyName || invoice.client?.company_name || "Client"}
            </h3>
            <p className="text-xs text-gray-400 print:text-gray-700">
              Attn: {buyer.contactName || invoice.client?.contact_name || "—"}
            </p>
            <p className="text-xs text-gray-400 print:text-gray-700">
              {buyer.addressLine1 || "—"}
              {buyer.city && `, ${buyer.city}`}
              {buyer.state && `, ${buyer.state} - ${buyer.postalCode || ""}`}
            </p>
            <div className="mt-3 space-y-0.5 border-t border-gray-800/60 pt-2 text-xs print:border-gray-300">
              <p className="text-gray-300 print:text-gray-900">
                <span className="text-gray-500 print:text-gray-600">GSTIN:</span>{" "}
                <span className="font-mono">{buyer.gstin || "Unregistered"}</span>
              </p>
              <p className="text-gray-300 print:text-gray-900">
                <span className="text-gray-500 print:text-gray-600">PAN:</span>{" "}
                <span className="font-mono">{buyer.pan || "—"}</span>
              </p>
              <p className="text-gray-300 print:text-gray-900">
                <span className="text-gray-500 print:text-gray-600">State Code:</span>{" "}
                <span className="font-mono">{buyer.stateCode || "08"}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="mb-8 overflow-x-auto rounded-lg border border-gray-800 print:border-gray-300 print:overflow-visible print:mb-6">
          <table className="w-full text-left text-xs text-gray-300 print:text-black">
            <thead className="border-b border-gray-800 bg-gray-900/60 uppercase tracking-wider text-gray-400 print:bg-gray-100 print:border-gray-300 print:text-gray-900">
              <tr>
                <th className="px-4 py-3 print:py-2">#</th>
                <th className="px-4 py-3 print:py-2">Description</th>
                <th className="px-4 py-3 print:py-2">HSN/SAC</th>
                <th className="px-4 py-3 print:py-2 text-right">Qty</th>
                <th className="px-4 py-3 print:py-2 text-right">Rate</th>
                <th className="px-4 py-3 print:py-2 text-right">Disc</th>
                <th className="px-4 py-3 print:py-2 text-right">Taxable</th>
                <th className="px-4 py-3 print:py-2 text-right">Tax %</th>
                <th className="px-4 py-3 print:py-2 text-right">Tax Amt</th>
                <th className="px-4 py-3 print:py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 print:divide-gray-200">
              {invoice.items?.map((it, idx) => {
                const taxAmt =
                  Number(it.cgst_amount || 0) +
                  Number(it.sgst_amount || 0) +
                  Number(it.igst_amount || 0);

                return (
                  <tr
                    key={it.id || idx}
                    className="hover:bg-gray-800/30 print:hover:bg-transparent print-avoid-break"
                  >
                    <td className="px-4 py-3.5 print:py-2 text-gray-500 print:text-gray-700">{idx + 1}</td>
                    <td className="px-4 py-3.5 print:py-2 font-medium text-white print:text-black">
                      <div>{it.description_snapshot}</div>
                      {it.sku_snapshot && (
                        <span className="text-[10px] text-gray-500 print:text-gray-600">
                          SKU: {it.sku_snapshot}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 print:py-2 font-mono text-gray-400 print:text-gray-800">
                      {it.hsn_sac_snapshot || "—"}
                    </td>
                    <td className="px-4 py-3.5 print:py-2 text-right font-mono print:text-black">
                      {Number(it.quantity)} {it.unit_snapshot}
                    </td>
                    <td className="px-4 py-3.5 print:py-2 text-right font-mono print:text-black">
                      {formatCurrency(Number(it.unit_price))}
                    </td>
                    <td className="px-4 py-3.5 print:py-2 text-right font-mono text-emerald-400 print:text-green-800">
                      {Number(it.discount_amount) > 0
                        ? `-${formatCurrency(Number(it.discount_amount))}`
                        : "—"}
                    </td>
                    <td className="px-4 py-3.5 print:py-2 text-right font-mono print:text-black">
                      {formatCurrency(Number(it.taxable_amount))}
                    </td>
                    <td className="px-4 py-3.5 print:py-2 text-right font-mono print:text-black">
                      {Number(it.tax_rate)}%
                    </td>
                    <td className="px-4 py-3.5 print:py-2 text-right font-mono print:text-black">
                      {formatCurrency(taxAmt)}
                    </td>
                    <td className="px-4 py-3.5 print:py-2 text-right font-mono font-semibold text-white print:text-black">
                      {formatCurrency(Number(it.line_total))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Calculation Summary Footer */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 print:grid-cols-12 print:gap-4 print-avoid-break">
          {/* Notes & Bank Details */}
          <div className="space-y-4 text-xs md:col-span-7 print:col-span-7">
            {invoice.notes && (
              <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-4 print:border-gray-300 print:bg-gray-50/50 print:p-3 print:text-black">
                <span className="font-semibold text-gray-400 print:text-gray-700">Notes:</span>
                <p className="mt-1 whitespace-pre-line text-gray-300 print:text-black">{invoice.notes}</p>
              </div>
            )}

            {seller.bankDetails && (
              <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-4 print:border-gray-300 print:bg-gray-50/50 print:p-3 print:text-black">
                <span className="font-semibold text-purple-400 print:text-purple-800">
                  Bank Details for Direct RTGS/NEFT:
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2 text-gray-300 print:text-black">
                  <p>
                    <span className="text-gray-500 print:text-gray-600">Account:</span>{" "}
                    {seller.bankDetails.accountName}
                  </p>
                  <p>
                    <span className="text-gray-500 print:text-gray-600">A/C No:</span>{" "}
                    <span className="font-mono font-semibold">{seller.bankDetails.accountNumber}</span>
                  </p>
                  <p>
                    <span className="text-gray-500 print:text-gray-600">IFSC:</span>{" "}
                    <span className="font-mono font-semibold">{seller.bankDetails.ifscCode}</span>
                  </p>
                  <p>
                    <span className="text-gray-500 print:text-gray-600">Bank:</span>{" "}
                    {seller.bankDetails.bankName} ({seller.bankDetails.branch})
                  </p>
                  {seller.bankDetails.upiId && (
                    <p className="col-span-2">
                      <span className="text-gray-500 print:text-gray-600">UPI ID:</span>{" "}
                      <span className="font-mono font-semibold text-purple-400 print:text-purple-800">{seller.bankDetails.upiId}</span>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Totals Table */}
          <div className="md:col-span-5 print:col-span-5">
            <div className="rounded-lg border border-gray-800 bg-gray-900/60 p-5 text-xs print:border-gray-300 print:bg-gray-50/70 print:p-4 print:text-black">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400 print:text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-mono text-white print:text-black">
                    {formatCurrency(Number(invoice.subtotal))}
                  </span>
                </div>

                {Number(invoice.discount_total) > 0 && (
                  <div className="flex justify-between text-emerald-400 print:text-green-800">
                    <span>Discount</span>
                    <span className="font-mono">
                      -{formatCurrency(Number(invoice.discount_total))}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-gray-400 print:text-gray-700">
                  <span>Taxable Value</span>
                  <span className="font-mono text-white print:text-black">
                    {formatCurrency(Number(invoice.taxable_total))}
                  </span>
                </div>

                {invoice.is_interstate ? (
                  <div className="flex justify-between text-blue-400 print:text-blue-900">
                    <span>IGST</span>
                    <span className="font-mono">{formatCurrency(Number(invoice.igst_total))}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between text-purple-400 print:text-purple-900">
                      <span>CGST</span>
                      <span className="font-mono">{formatCurrency(Number(invoice.cgst_total))}</span>
                    </div>
                    <div className="flex justify-between text-purple-400 print:text-purple-900">
                      <span>SGST</span>
                      <span className="font-mono">{formatCurrency(Number(invoice.sgst_total))}</span>
                    </div>
                  </>
                )}

                {Number(invoice.round_off) !== 0 && (
                  <div className="flex justify-between text-gray-500 print:text-gray-600">
                    <span>Round Off</span>
                    <span className="font-mono">
                      {Number(invoice.round_off) > 0
                        ? `+${invoice.round_off}`
                        : invoice.round_off}
                    </span>
                  </div>
                )}

                <div className="border-t border-gray-800 pt-3 print:border-gray-400">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-bold text-white print:text-black">Grand Total</span>
                    <span className="font-mono text-lg font-bold text-yellow-400 print:text-purple-900">
                      {formatCurrency(Number(invoice.grand_total))}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-gray-800/60 pt-2 text-gray-400 print:border-gray-300 print:text-gray-700">
                  <span>Amount Paid</span>
                  <span className="font-mono text-emerald-400 print:text-green-800 font-semibold">
                    {formatCurrency(Number(invoice.amount_paid))}
                  </span>
                </div>

                <div className="flex justify-between font-semibold">
                  <span className="text-white print:text-black">Amount Due</span>
                  <span className="font-mono text-sm text-yellow-400 print:text-black font-bold">
                    {formatCurrency(Number(invoice.amount_due))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Printable Authorized Signatory & Legal Declaration (Print Only) */}
        <div className="hidden print:flex justify-between items-end pt-8 mt-8 border-t-2 border-gray-300 print-avoid-break">
          <div className="text-[10px] text-gray-600 max-w-sm space-y-1">
            <p className="font-bold text-gray-900">Declaration & Terms:</p>
            <p>
              1. We declare that this invoice shows the actual price of services described and that all particulars are true and correct.
            </p>
            <p>2. Subject to Jaipur jurisdiction.</p>
            <p className="pt-2 italic text-gray-500">
              This is a computer-generated tax invoice and requires no physical signature.
            </p>
          </div>
          <div className="text-right text-xs">
            <p className="font-bold text-gray-900">
              For {seller.legalName || "Growth Service Digital Solution"}
            </p>
            <div className="h-16"></div>
            <p className="border-t border-gray-500 pt-1 font-semibold text-gray-800">
              Authorized Signatory
            </p>
          </div>
        </div>
      </div>

      {/* Payment Links Section — Dev / Local only until production payment credentials enabled */}
      {isPaymentsEnabled() && (
        <div className="print:hidden">
          <InvoicePaymentLinksSection invoice={invoice} />
        </div>
      )}

      {/* Issue Modal */}
      {showIssueModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm print:hidden">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm print:hidden">
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

      {/* Graceful Email Invoice Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm print:hidden">
          <div className="w-full max-w-md rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-2xl">
            <div className="flex items-center gap-2 text-blue-400">
              <Mail className="h-5 w-5" />
              <h3 className="text-lg font-bold text-white">Email Invoice to Client</h3>
            </div>

            {isDraft && (
              <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-950/20 p-3 text-xs text-amber-300">
                <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Invoice is in Draft status</p>
                  <p className="mt-0.5 text-amber-400/90">
                    GST rules require invoices to be officially issued before sending to clients. You can issue it first or enter an email to test delivery.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSendEmail} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400">
                  Recipient Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={emailRecipient}
                  onChange={(e) => {
                    setEmailRecipient(e.target.value);
                    if (emailError) setEmailError(null);
                  }}
                  placeholder="client@company.com"
                  className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
                {!initialRecipient && (
                  <p className="mt-1.5 text-[11px] text-gray-400">
                    No email was configured on this client profile. Please specify one above.
                  </p>
                )}
              </div>

              {emailError && (
                <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-3 text-xs text-red-300">
                  <p className="font-medium">{emailError}</p>
                </div>
              )}

              <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3 text-xs text-gray-400 space-y-1">
                <p>
                  <span className="text-gray-500">Invoice:</span>{" "}
                  <strong className="text-white font-mono">{invoice.invoice_number}</strong>
                </p>
                <p>
                  <span className="text-gray-500">Amount Due:</span>{" "}
                  <strong className="text-yellow-400 font-mono">
                    {formatCurrency(Number(invoice.amount_due))}
                  </strong>
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEmailModal(false)}
                  className="rounded-lg border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSendingEmail || isDraft}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSendingEmail ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span>{isSendingEmail ? "Sending…" : "Send Email"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Graceful Payment Reminder Modal */}
      {showReminderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm print:hidden">
          <div className="w-full max-w-md rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-2xl">
            <div className="flex items-center gap-2 text-amber-400">
              <Bell className="h-5 w-5" />
              <h3 className="text-lg font-bold text-white">Send Payment Reminder</h3>
            </div>

            {isPaid ? (
              <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-3 text-xs text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                <p>This invoice is already fully paid. No reminder is needed.</p>
              </div>
            ) : (
              <form onSubmit={handleSendReminder} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-400">
                    Recipient Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={emailRecipient}
                    onChange={(e) => {
                      setEmailRecipient(e.target.value);
                      if (reminderError) setReminderError(null);
                    }}
                    placeholder="client@company.com"
                    className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3 text-xs text-gray-400 space-y-1">
                  <p>
                    <span className="text-gray-500">Invoice:</span>{" "}
                    <strong className="text-white font-mono">{invoice.invoice_number}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">Balance Pending:</span>{" "}
                    <strong className="text-yellow-400 font-mono">
                      {formatCurrency(Number(invoice.amount_due))}
                    </strong>
                  </p>
                  <p>
                    <span className="text-gray-500">Due Date:</span>{" "}
                    <strong className="text-white">{formatDate(invoice.due_date)}</strong>
                  </p>
                </div>

                {reminderError && (
                  <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-3 text-xs text-red-300">
                    <p className="font-medium">{reminderError}</p>
                  </div>
                )}

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReminderModal(false)}
                    className="rounded-lg border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSendingReminder}
                    className="flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-700 disabled:opacity-50"
                  >
                    {isSendingReminder ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    <span>{isSendingReminder ? "Sending…" : "Send Reminder"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Record Payment / Status Modal */}
      <RecordPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={() => {
          React.startTransition(() => {
            router.refresh();
          });
        }}
        invoice={invoice}
      />
    </div>
  );
};

