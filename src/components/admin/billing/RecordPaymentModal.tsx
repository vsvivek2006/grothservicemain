"use client";

import React, { useState } from "react";
import { X, Loader2, CreditCard, CheckCircle2, Hash } from "lucide-react";
import { toast } from "sonner";
import { recordManualPaymentAction } from "@/modules/billing/actions/invoiceActions";
import type { Invoice } from "@/modules/billing/types/database";

interface RecordPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  invoice: Invoice;
}

export function RecordPaymentModal({
  isOpen,
  onClose,
  onSuccess,
  invoice,
}: RecordPaymentModalProps) {
  const [status, setStatus] = useState<"paid" | "partially_paid" | "unpaid">(
    invoice.payment_status === "paid" ? "paid" : "paid"
  );
  const [amount, setAmount] = useState<string>(
    String(invoice.amount_due > 0 ? invoice.amount_due : invoice.grand_total)
  );
  const [method, setMethod] = useState<"bank_transfer" | "upi" | "cash" | "cheque" | "other">(
    "bank_transfer"
  );
  const [refNumber, setRefNumber] = useState("");
  const [paymentDate, setPaymentDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [notes, setNotes] = useState("");
  const [isPending, setIsPending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const res = await recordManualPaymentAction({
        invoiceId: invoice.id,
        paymentStatus: status,
        amount: status === "partially_paid" ? Number(amount) : undefined,
        paymentMethod: method,
        referenceNumber: refNumber,
        paymentDate: paymentDate ? new Date(paymentDate).toISOString() : undefined,
        notes,
      });

      if (!res.success) {
        toast.error(res.error || "Failed to update payment status");
        setIsPending(false);
        return;
      }

      toast.success(
        status === "paid"
          ? `Invoice #${invoice.invoice_number} marked as Paid!`
          : status === "partially_paid"
          ? `Recorded partial payment for #${invoice.invoice_number}`
          : `Invoice #${invoice.invoice_number} payment status reset to Unpaid`
      );

      onSuccess();
      onClose();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsPending(false);
    }
  };

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-gray-800 flex items-center justify-between bg-gray-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-950/60 border border-purple-900/40 flex items-center justify-center text-purple-400 shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                Record Payment
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Invoice <span className="font-mono text-purple-300 font-semibold">#{invoice.invoice_number}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Invoice Summary Banner */}
        <div className="px-5 py-3 bg-gray-800/40 border-b border-gray-800 grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-gray-400 block text-[11px]">Grand Total</span>
            <span className="font-bold text-white text-sm">
              {formatCurrency(invoice.grand_total)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-gray-400 block text-[11px]">Current Balance Due</span>
            <span className={`font-bold text-sm ${invoice.amount_due > 0 ? "text-amber-400" : "text-emerald-400"}`}>
              {formatCurrency(invoice.amount_due)}
            </span>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {/* Status Selection */}
          <div>
            <label className="block text-gray-300 font-semibold mb-1.5">
              Payment Status <span className="text-rose-400">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  setStatus("paid");
                  setAmount(String(invoice.grand_total));
                }}
                className={`px-3 py-2 rounded-lg border text-center font-medium transition-all ${
                  status === "paid"
                    ? "border-emerald-500 bg-emerald-950/40 text-emerald-300 shadow-xs"
                    : "border-gray-800 bg-gray-800/40 text-gray-400 hover:border-gray-700 hover:text-white"
                }`}
              >
                Full (Paid)
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatus("partially_paid");
                  setAmount(String(invoice.amount_due > 0 ? invoice.amount_due : Math.round(invoice.grand_total / 2)));
                }}
                className={`px-3 py-2 rounded-lg border text-center font-medium transition-all ${
                  status === "partially_paid"
                    ? "border-amber-500 bg-amber-950/40 text-amber-300 shadow-xs"
                    : "border-gray-800 bg-gray-800/40 text-gray-400 hover:border-gray-700 hover:text-white"
                }`}
              >
                Partial
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatus("unpaid");
                  setAmount("0");
                }}
                className={`px-3 py-2 rounded-lg border text-center font-medium transition-all ${
                  status === "unpaid"
                    ? "border-rose-500 bg-rose-950/40 text-rose-300 shadow-xs"
                    : "border-gray-800 bg-gray-800/40 text-gray-400 hover:border-gray-700 hover:text-white"
                }`}
              >
                Unpaid
              </button>
            </div>
          </div>

          {/* Amount (Visible if partial) */}
          {status === "partially_paid" && (
            <div>
              <label className="block text-gray-300 font-semibold mb-1">
                Total Amount Paid (₹) <span className="text-rose-400">*</span>
              </label>
              <input
                type="number"
                step="any"
                min="1"
                max={invoice.grand_total}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium focus:outline-hidden focus:border-purple-500 transition-colors"
                placeholder="e.g. 5000"
              />
              <span className="text-[11px] text-gray-400 mt-1 block">
                Remaining balance will be: {formatCurrency(Math.max(0, invoice.grand_total - (Number(amount) || 0)))}
              </span>
            </div>
          )}

          {/* Payment Method & Date */}
          {status !== "unpaid" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Payment Method
                  </label>
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value as any)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium focus:outline-hidden focus:border-purple-500 transition-colors"
                  >
                    <option value="bank_transfer">Bank Transfer (NEFT/RTGS)</option>
                    <option value="upi">UPI (GPay/PhonePe)</option>
                    <option value="cash">Cash</option>
                    <option value="cheque">Cheque</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Payment Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={paymentDate}
                      onChange={(e) => setPaymentDate(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium focus:outline-hidden focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Reference / UTR Number */}
              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Reference / UTR / Cheque Number
                </label>
                <div className="relative">
                  <Hash className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={refNumber}
                    onChange={(e) => setRefNumber(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-hidden focus:border-purple-500 transition-colors"
                    placeholder="e.g. UTR12345678 or Cheque #004512"
                  />
                </div>
              </div>
            </>
          )}

          {/* Notes */}
          <div>
            <label className="block text-gray-300 font-semibold mb-1">
              Internal Remarks (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-hidden focus:border-purple-500 transition-colors resize-none"
              placeholder="e.g. Verified in Kotak statement, credited on 17 Sep"
            />
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white transition-all shadow-md disabled:opacity-60 cursor-pointer"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Save Payment Status
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
