"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Link as LinkIcon,
  Copy,
  Check,
  ExternalLink,
  Plus,
  XCircle,
  Loader2,
  Clock,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Mail,
} from "lucide-react";
import { toast } from "sonner";
import {
  createPaymentLinkAction,
  cancelPaymentLinkAction,
} from "@/modules/billing/actions/paymentLinkActions";
import { sendPaymentLinkEmailAction } from "@/modules/billing/actions/notificationActions";
import type { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import type { PaymentLinkRecord } from "@/modules/billing/types/database";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";

interface InvoicePaymentLinksSectionProps {
  invoice: InvoiceWithRelations;
}

export const InvoicePaymentLinksSection: React.FC<InvoicePaymentLinksSectionProps> = ({
  invoice,
}) => {
  const router = useRouter();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [linkToCancel, setLinkToCancel] = useState<string | null>(null);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [sendingLinkId, setSendingLinkId] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const amountDue = Number(invoice.amount_due) || 0;
  const [amount, setAmount] = useState<number>(amountDue);
  const [description, setDescription] = useState(
    `Payment for Invoice ${invoice.invoice_number}`
  );
  const [acceptPartial, setAcceptPartial] = useState(false);
  const [minPartialAmount, setMinPartialAmount] = useState<number | "">("");
  const [expiresInDays, setExpiresInDays] = useState<number | "">(15);
  const [reminderEnabled, setReminderEnabled] = useState(true);

  const links: PaymentLinkRecord[] = invoice.payment_links || [];

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
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleCopy = async (link: PaymentLinkRecord) => {
    try {
      await navigator.clipboard.writeText(link.short_url);
      setCopiedId(link.id);
      toast.success("Payment link copied to clipboard!");
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      toast.error("Failed to copy link to clipboard");
    }
  };

  const confirmCancel = async () => {
    if (!linkToCancel) return;

    setCancellingId(linkToCancel);
    try {
      const res = await cancelPaymentLinkAction(linkToCancel);
      if (!res.success) {
        toast.error(res.error);
        return;
      }
      toast.success("Payment link cancelled");
      setLinkToCancel(null);
      router.refresh();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error cancelling link");
    } finally {
      setCancellingId(null);
    }
  };

  const handleEmailLink = async (linkId: string) => {
    setSendingLinkId(linkId);
    try {
      const res = await sendPaymentLinkEmailAction({ paymentLinkId: linkId });
      if (!res.success) {
        toast.error(res.error || "Failed to email payment link");
        return;
      }
      toast.success("Payment link successfully emailed to client");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error emailing payment link");
    } finally {
      setSendingLinkId(null);
    }
  };

  const handleCreateLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (amount <= 0) {
      toast.error("Amount must be greater than zero");
      return;
    }
    if (amount > amountDue) {
      toast.error(`Amount cannot exceed balance due (${formatCurrency(amountDue)})`);
      return;
    }
    if (acceptPartial && minPartialAmount && Number(minPartialAmount) > amount) {
      toast.error("Minimum partial amount cannot exceed total amount");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await createPaymentLinkAction({
        invoiceId: invoice.id,
        amount: Number(amount),
        description: description.trim() || undefined,
        acceptPartial,
        minPartialAmount: minPartialAmount ? Number(minPartialAmount) : undefined,
        expiresInDays: expiresInDays ? Number(expiresInDays) : null,
        reminderEnabled,
      });

      if (!res.success) {
        toast.error(res.error);
        return;
      }

      toast.success("Payment link created successfully!");
      setShowCreateModal(false);
      router.refresh();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error creating payment link");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canGenerateLink =
    invoice.document_status !== "draft" &&
    invoice.document_status !== "cancelled" &&
    invoice.document_status !== "void" &&
    invoice.payment_status !== "paid" &&
    amountDue > 0;

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="h-3 w-3" />
            Paid
          </span>
        );
      case "partially_paid":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-400 border border-amber-500/20">
            <Clock className="h-3 w-3" />
            Partially Paid
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-500/10 px-2.5 py-0.5 text-xs font-medium text-gray-400 border border-gray-500/20">
            <XCircle className="h-3 w-3" />
            Cancelled
          </span>
        );
      case "expired":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400 border border-red-500/20">
            <AlertCircle className="h-3 w-3" />
            Expired
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-400 border border-purple-500/20">
            <Clock className="h-3 w-3" />
            Active
          </span>
        );
    }
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-white">
            <LinkIcon className="h-5 w-5 text-purple-400" />
            Payment Links
          </h2>
          <p className="mt-0.5 text-xs text-gray-400">
            Track and generate shareable online payment links for this invoice via Razorpay.
          </p>
        </div>

        {canGenerateLink && (
          <button
            onClick={() => {
              setAmount(amountDue);
              setShowCreateModal(true);
            }}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-purple-950/40 hover:from-blue-600 hover:to-indigo-800"
          >
            <Plus className="h-4 w-4" />
            <span>Generate Payment Link</span>
          </button>
        )}
      </div>

      {/* Links List */}
      {links.length === 0 ? (
        <div className="py-8 text-center">
          <LinkIcon className="mx-auto h-8 w-8 text-gray-600" />
          <p className="mt-2 text-sm text-gray-400">No payment links generated yet.</p>
          {canGenerateLink ? (
            <p className="mt-1 text-xs text-gray-500">
              Click &quot;Generate Payment Link&quot; above to create an online link for the client.
            </p>
          ) : invoice.document_status === "draft" ? (
            <p className="mt-1 text-xs text-amber-400/80">
              Invoice must be issued before creating a payment link.
            </p>
          ) : (
            <p className="mt-1 text-xs text-gray-500">
              This invoice has no outstanding balance.
            </p>
          )}
        </div>
      ) : (
        <div className="mt-4 divide-y divide-gray-800/80">
          {links.map((link) => {
            const isCancelledOrPaid =
              link.status === "cancelled" ||
              link.status === "paid" ||
              link.status === "expired";
            const isCancelling = cancellingId === link.id;

            return (
              <div
                key={link.id}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-base font-bold text-white">
                      {formatCurrency(Number(link.amount))}
                    </span>
                    {getStatusBadge(link.status)}
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      via {link.provider}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span className="font-mono text-gray-300">
                      {link.short_url}
                    </span>
                    <span>•</span>
                    <span>Created: {formatDate(link.created_at)}</span>
                    {link.expires_at && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <Calendar className="h-3 w-3" />
                          Expires: {formatDate(link.expires_at)}
                        </span>
                      </>
                    )}
                  </div>

                  {link.accept_partial && (
                    <p className="text-xs text-teal-400">
                      ✓ Partial payments accepted (min: {formatCurrency(Number(link.minimum_partial_amount || 0))})
                    </p>
                  )}
                </div>

                {/* Actions on Link */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleCopy(link)}
                    className="flex items-center gap-1 rounded-md border border-gray-700 bg-gray-800/80 px-2.5 py-1.5 text-xs font-medium text-gray-300 hover:bg-gray-700"
                    title="Copy short link"
                  >
                    {copiedId === link.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={link.short_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-md border border-purple-500/30 bg-purple-950/30 px-2.5 py-1.5 text-xs font-medium text-purple-300 hover:bg-purple-900/40"
                    title="Open payment link in new tab"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Open</span>
                  </a>

                  {!isCancelledOrPaid && (
                    <button
                      onClick={() => handleEmailLink(link.id)}
                      disabled={sendingLinkId === link.id}
                      className="flex items-center gap-1 rounded-md border border-blue-500/30 bg-blue-950/30 px-2.5 py-1.5 text-xs font-medium text-blue-300 hover:bg-blue-900/40 disabled:cursor-not-allowed disabled:opacity-50"
                      title="Email payment link to client"
                    >
                      {sendingLinkId === link.id ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Mail className="h-3.5 w-3.5" />
                      )}
                      <span>Email</span>
                    </button>
                  )}

                  {!isCancelledOrPaid && (
                    <button
                      onClick={() => setLinkToCancel(link.id)}
                      disabled={isCancelling}
                      className="flex items-center gap-1 rounded-md border border-red-500/30 bg-red-950/20 px-2.5 py-1.5 text-xs font-medium text-red-400 hover:bg-red-900/40 disabled:cursor-not-allowed disabled:opacity-50"
                      title="Cancel payment link"
                    >
                      {isCancelling ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <XCircle className="h-3.5 w-3.5" />
                      )}
                      <span>Cancel</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal: Create Payment Link */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <h3 className="text-base font-bold text-white">
                Generate Payment Link
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateLink} className="mt-4 space-y-4">
              {/* Amount */}
              <div>
                <label className="block text-xs font-medium text-gray-300">
                  Amount (₹ INR) <span className="text-red-400">*</span>
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2.5 text-sm font-semibold text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    max={amountDue}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/80 pl-8 pr-3 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Max allowed: {formatCurrency(amountDue)} (current balance due)
                </p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-medium text-gray-300">
                  Description / Purpose
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800/80 px-3 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                />
              </div>

              {/* Expiry in Days */}
              <div>
                <label className="block text-xs font-medium text-gray-300">
                  Expiry Duration
                </label>
                <select
                  value={expiresInDays === "" ? "" : expiresInDays}
                  onChange={(e) =>
                    setExpiresInDays(
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800/80 px-3 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
                >
                  <option value={7}>7 Days</option>
                  <option value={15}>15 Days (Recommended)</option>
                  <option value={30}>30 Days</option>
                  <option value={60}>60 Days</option>
                  <option value="">No Expiry</option>
                </select>
              </div>

              {/* Partial Payment Toggle */}
              <div className="rounded-lg border border-gray-800 bg-gray-800/40 p-3 space-y-3">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptPartial}
                    onChange={(e) => setAcceptPartial(e.target.checked)}
                    className="rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                  />
                  <span>Accept partial payments on this link</span>
                </label>

                {acceptPartial && (
                  <div>
                    <label className="block text-xs font-medium text-gray-400">
                      Minimum First Partial Amount (₹)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      max={amount}
                      value={minPartialAmount}
                      onChange={(e) =>
                        setMinPartialAmount(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                      placeholder="e.g. 5000"
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800/80 px-3 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Send Reminder Toggle */}
              <label className="flex items-center gap-2 text-xs font-medium text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reminderEnabled}
                  onChange={(e) => setReminderEnabled(e.target.checked)}
                  className="rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
                />
                <span>Enable automated Razorpay SMS &amp; email reminders</span>
              </label>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 border-t border-gray-800 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="rounded-lg border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-purple-950/40 hover:from-blue-600 hover:to-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Creating…</span>
                    </>
                  ) : (
                    <>
                      <LinkIcon className="h-4 w-4" />
                      <span>Generate Link</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cancel Payment Link Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!linkToCancel}
        title="Cancel Payment Link"
        description="Are you sure you want to cancel this payment link? Once cancelled, the client will not be able to make payments through it."
        confirmLabel="Cancel Link"
        isDestructive={true}
        isLoading={!!cancellingId}
        onConfirm={confirmCancel}
        onCancel={() => {
          if (!cancellingId) setLinkToCancel(null);
        }}
      />
    </div>
  );
};
