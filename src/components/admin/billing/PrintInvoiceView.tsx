"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { downloadInvoicePdfAction } from "@/modules/billing/actions/invoiceActions";
import { Printer, Download, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface PrintInvoiceViewProps {
  invoice: InvoiceWithRelations;
}

// Convert numbers into Indian Currency words (e.g., 3186 -> Three Thousand One Hundred Eighty-Six)
function numberToIndianWords(num: number): string {
  if (!num || isNaN(num)) return "Zero Rupees Only";
  const integerPart = Math.floor(Math.abs(num));

  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function convertTwoDigits(n: number): string {
    if (n < 20) return a[n];
    return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
  }

  function convertThreeDigits(n: number): string {
    if (n === 0) return "";
    let str = "";
    if (Math.floor(n / 100) > 0) {
      str += a[Math.floor(n / 100)] + " Hundred";
      if (n % 100 !== 0) str += " and ";
    }
    str += convertTwoDigits(n % 100);
    return str.trim();
  }

  let words = "";
  const crore = Math.floor(integerPart / 10000000);
  let rem = integerPart % 10000000;
  const lakh = Math.floor(rem / 100000);
  rem = rem % 100000;
  const thousand = Math.floor(rem / 1000);
  rem = rem % 1000;

  if (crore > 0) words += convertTwoDigits(crore) + " Crore ";
  if (lakh > 0) words += convertTwoDigits(lakh) + " Lakh ";
  if (thousand > 0) words += convertTwoDigits(thousand) + " Thousand ";
  if (rem > 0) words += convertThreeDigits(rem);

  return (words.trim() || "Zero") + " Rupees Only";
}

export const PrintInvoiceView: React.FC<PrintInvoiceViewProps> = ({ invoice }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Automatically trigger print dialog on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 450);
    return () => clearTimeout(timer);
  }, []);

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

  const seller = (invoice.seller_snapshot as any) || {};
  const buyer = (invoice.buyer_snapshot as any) || {};

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const actionRes = await downloadInvoicePdfAction(invoice.id);
      if (actionRes.success && actionRes.data?.base64) {
        const byteCharacters = atob(actionRes.data.base64);
        const byteNumbers = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const blob = new Blob([byteNumbers], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download =
          actionRes.data.filename ||
          `Invoice_${invoice.invoice_number.replace(/[^a-zA-Z0-9\-_]/g, "_")}.pdf`;
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
          try {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          } catch {}
        }, 15000);

        toast.success("PDF download started!");
        return;
      }

      // Direct fallback
      window.open(`/api/billing/invoices/${invoice.id}/pdf`, "_blank");
    } catch (err: unknown) {
      window.open(`/api/billing/invoices/${invoice.id}/pdf`, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 print:bg-white print:p-0 print:m-0">
      {/* Non-Printable Top Action Bar */}
      <div className="mx-auto mb-6 flex max-w-[210mm] items-center justify-between rounded-lg bg-gray-900 px-5 py-3 text-white shadow-md print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href={`/admin/billing/invoices/${invoice.id}`}
            className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
          <span className="text-gray-600">|</span>
          <span className="font-mono text-xs font-semibold text-yellow-400">
            {invoice.invoice_number}
          </span>
          <span className="rounded bg-purple-900/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-200">
            {invoice.document_status}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-1.5 rounded-md bg-purple-700 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-purple-600 disabled:opacity-50 cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{isDownloading ? "Generating…" : "Download PDF"}</span>
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 cursor-pointer shadow"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Print Invoice</span>
          </button>
        </div>
      </div>

      {/* Official A4 Indian Tax Invoice Document Sheet */}
      <div className="mx-auto w-full max-w-[210mm] rounded-sm bg-white p-8 text-gray-900 shadow-2xl print:max-w-none print:w-full print:p-0 print:shadow-none border border-gray-300 print:border-none">
        {/* Header: Company Identity & Tax Invoice Title */}
        <div className="border-b-2 border-purple-800 pb-5">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-800 text-sm font-black text-white">
                  GS
                </div>
                <h1 className="text-2xl font-black tracking-tight text-purple-800">
                  GROWTH SERVICE
                </h1>
              </div>
              <p className="text-xs font-bold text-gray-900">
                {seller.legalName || "Growth Service Technologies LLP"}
              </p>
              <p className="text-[11px] text-gray-600">
                {seller.addressLine1 || "Plot No. 42, Malviya Nagar"}, {seller.city || "Jaipur"},{" "}
                {seller.state || "Rajasthan"} - {seller.postalCode || "302017"}, India
              </p>
              <div className="mt-1 flex flex-wrap gap-x-4 text-[11px] font-semibold text-gray-800">
                <span>
                  GSTIN: <strong className="font-mono text-black">{seller.gstin || "08AAAAA0000A1Z5"}</strong>
                </span>
                <span>
                  PAN: <strong className="font-mono text-black">{seller.pan || "AAAAA0000A"}</strong>
                </span>
                <span>
                  State Code: <strong className="font-mono text-black">{seller.stateCode || "08"}</strong>
                </span>
              </div>
              <p className="text-[10px] text-gray-500">
                Email: {seller.email || "billing@growthservice.in"} | Website: www.growthservice.in
              </p>
            </div>

            <div className="text-right space-y-1">
              <span className="inline-block rounded border border-purple-800 bg-purple-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-purple-900">
                TAX INVOICE
              </span>
              <p className="font-mono text-base font-bold text-gray-900 mt-1">
                {invoice.invoice_number}
              </p>
              <p className="text-xs text-gray-700">
                Invoice Date: <strong className="text-black">{formatDate(invoice.issue_date)}</strong>
              </p>
              <p className="text-xs text-gray-700">
                Due Date: <strong className="text-black">{formatDate(invoice.due_date)}</strong>
              </p>
              <div className="pt-1">
                <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-700">
                  ORIGINAL FOR RECIPIENT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Billed From & Billed To Cards */}
        <div className="my-5 grid grid-cols-2 gap-4 text-xs">
          {/* Seller / Supplier */}
          <div className="rounded border border-gray-300 bg-gray-50/60 p-3.5">
            <span className="font-bold uppercase tracking-wider text-purple-800 text-[10px]">
              Supplier / Billed From:
            </span>
            <p className="mt-1 font-bold text-sm text-gray-900">
              {seller.legalName || "Growth Service Technologies LLP"}
            </p>
            <p className="text-gray-600 mt-0.5">{seller.addressLine1 || "Plot No. 42, Malviya Nagar"}</p>
            <p className="text-gray-600">
              {seller.city || "Jaipur"}, {seller.state || "Rajasthan"} - {seller.postalCode || "302017"}
            </p>
            <div className="mt-2.5 space-y-0.5 border-t border-gray-200 pt-1.5 text-[11px]">
              <p>
                <span className="text-gray-500">GSTIN:</span>{" "}
                <span className="font-mono font-bold text-black">{seller.gstin || "08AAAAA0000A1Z5"}</span>
              </p>
              <p>
                <span className="text-gray-500">State:</span>{" "}
                <span>{seller.state || "Rajasthan"} (Code: {seller.stateCode || "08"})</span>
              </p>
            </div>
          </div>

          {/* Buyer / Recipient */}
          <div className="rounded border border-gray-300 bg-gray-50/60 p-3.5">
            <span className="font-bold uppercase tracking-wider text-purple-800 text-[10px]">
              Recipient / Billed To:
            </span>
            <p className="mt-1 font-bold text-sm text-gray-900">
              {buyer.legalName || buyer.companyName || invoice.client?.company_name || "Valued Client"}
            </p>
            <p className="text-gray-600 mt-0.5">
              Attn: {buyer.contactName || invoice.client?.contact_name || "Accounts Dept."}
            </p>
            <p className="text-gray-600">
              {buyer.addressLine1 || "Client Address Not Provided"}
              {buyer.city ? `, ${buyer.city}` : ""}
              {buyer.state ? `, ${buyer.state}` : ""}
              {buyer.postalCode ? ` - ${buyer.postalCode}` : ""}
            </p>
            <div className="mt-2.5 space-y-0.5 border-t border-gray-200 pt-1.5 text-[11px]">
              <p>
                <span className="text-gray-500">GSTIN:</span>{" "}
                <span className="font-mono font-bold text-black">{buyer.gstin || "Unregistered"}</span>
              </p>
              <p>
                <span className="text-gray-500">Place of Supply:</span>{" "}
                <span className="font-semibold text-black">
                  {invoice.place_of_supply || "Rajasthan"} (Code: {invoice.place_of_supply_state_code || "08"})
                </span>{" "}
                <span className="text-[10px] text-purple-700">
                  {invoice.is_interstate ? "[IGST]" : "[CGST + SGST]"}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="my-5 border border-gray-300 rounded overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-purple-900 text-white uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-3 py-2.5 w-[5%] text-center">#</th>
                <th className="px-3 py-2.5 w-[38%]">Item Description</th>
                <th className="px-3 py-2.5 w-[11%]">HSN/SAC</th>
                <th className="px-3 py-2.5 w-[8%] text-right">Qty</th>
                <th className="px-3 py-2.5 w-[12%] text-right">Rate</th>
                <th className="px-3 py-2.5 w-[8%] text-right">Disc</th>
                <th className="px-3 py-2.5 w-[10%] text-right">Taxable</th>
                <th className="px-3 py-2.5 w-[8%] text-right">GST</th>
                <th className="px-3 py-2.5 w-[10%] text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoice.items?.map((it, idx) => {
                const taxAmt =
                  Number(it.cgst_amount || 0) +
                  Number(it.sgst_amount || 0) +
                  Number(it.igst_amount || 0);

                return (
                  <tr key={it.id || idx} className="hover:bg-gray-50/50">
                    <td className="px-3 py-2.5 text-center text-gray-500 font-medium">{idx + 1}</td>
                    <td className="px-3 py-2.5 font-bold text-gray-900">
                      <div>{it.description_snapshot}</div>
                      {it.sku_snapshot && (
                        <div className="text-[10px] font-normal text-gray-500">
                          SKU: {it.sku_snapshot}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2.5 font-mono text-gray-700">{it.hsn_sac_snapshot || "—"}</td>
                    <td className="px-3 py-2.5 text-right font-mono">
                      {Number(it.quantity)} {it.unit_snapshot}
                    </td>
                    <td className="px-3 py-2.5 text-right font-mono">
                      {formatCurrency(Number(it.unit_price))}
                    </td>
                    <td className="px-3 py-2.5 text-right font-mono text-gray-700">
                      {Number(it.discount_amount) > 0 ? `-${formatCurrency(Number(it.discount_amount))}` : "—"}
                    </td>
                    <td className="px-3 py-2.5 text-right font-mono font-medium text-black">
                      {formatCurrency(Number(it.taxable_amount))}
                    </td>
                    <td className="px-3 py-2.5 text-right font-mono">
                      {Number(it.tax_rate)}%
                    </td>
                    <td className="px-3 py-2.5 text-right font-mono font-bold text-black">
                      {formatCurrency(Number(it.line_total))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Section: Bank Details & Totals Breakdown */}
        <div className="my-5 grid grid-cols-12 gap-5">
          {/* Left: Bank Details & Amount in Words */}
          <div className="col-span-7 space-y-3 text-xs">
            {/* Amount in Words */}
            <div className="rounded border border-gray-300 bg-purple-50/40 p-3">
              <span className="font-bold text-purple-900 text-[10px] uppercase tracking-wider">
                Total Amount in Words:
              </span>
              <p className="mt-0.5 font-bold text-gray-900 text-xs">
                {numberToIndianWords(Number(invoice.grand_total))}
              </p>
            </div>

            {/* Bank Details */}
            {seller.bankDetails && (
              <div className="rounded border border-gray-300 p-3">
                <span className="font-bold text-purple-900 text-[10px] uppercase tracking-wider">
                  Bank Details for Direct RTGS/NEFT:
                </span>
                <div className="mt-1.5 grid grid-cols-2 gap-y-1 gap-x-2 text-[11px] text-gray-800">
                  <p>
                    <span className="text-gray-500">Account Name:</span>{" "}
                    <strong>{seller.bankDetails.accountName}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">A/C Number:</span>{" "}
                    <strong className="font-mono">{seller.bankDetails.accountNumber}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">IFSC Code:</span>{" "}
                    <strong className="font-mono">{seller.bankDetails.ifscCode}</strong>
                  </p>
                  <p>
                    <span className="text-gray-500">Bank & Branch:</span>{" "}
                    <strong>
                      {seller.bankDetails.bankName} ({seller.bankDetails.branch})
                    </strong>
                  </p>
                </div>
              </div>
            )}

            {/* Notes */}
            {invoice.notes && (
              <div className="rounded border border-gray-200 p-2.5 text-[11px] text-gray-600">
                <span className="font-bold text-gray-700">Remarks / Notes: </span>
                <span>{invoice.notes}</span>
              </div>
            )}
          </div>

          {/* Right: Totals Breakdown */}
          <div className="col-span-5">
            <div className="rounded border border-gray-300 bg-gray-50/70 p-3.5 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium text-black">
                    {formatCurrency(Number(invoice.subtotal))}
                  </span>
                </div>

                {Number(invoice.discount_total) > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount</span>
                    <span className="font-mono">-{formatCurrency(Number(invoice.discount_total))}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Taxable Value</span>
                  <span className="font-mono font-medium text-black">
                    {formatCurrency(Number(invoice.taxable_total))}
                  </span>
                </div>

                {invoice.is_interstate ? (
                  <div className="flex justify-between text-purple-800">
                    <span>Integrated Tax (IGST)</span>
                    <span className="font-mono font-semibold">{formatCurrency(Number(invoice.igst_total))}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between text-purple-800">
                      <span>Central Tax (CGST)</span>
                      <span className="font-mono font-semibold">{formatCurrency(Number(invoice.cgst_total))}</span>
                    </div>
                    <div className="flex justify-between text-purple-800">
                      <span>State Tax (SGST)</span>
                      <span className="font-mono font-semibold">{formatCurrency(Number(invoice.sgst_total))}</span>
                    </div>
                  </>
                )}

                {Number(invoice.round_off) !== 0 && (
                  <div className="flex justify-between text-gray-500 text-[11px]">
                    <span>Round Off</span>
                    <span className="font-mono">
                      {Number(invoice.round_off) > 0 ? `+${invoice.round_off}` : invoice.round_off}
                    </span>
                  </div>
                )}

                <div className="border-t-2 border-purple-800 pt-2 mt-2">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-black text-purple-900">Grand Total</span>
                    <span className="font-mono text-base font-black text-purple-900">
                      {formatCurrency(Number(invoice.grand_total))}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-gray-300 pt-1.5 text-gray-600">
                  <span>Amount Paid</span>
                  <span className="font-mono font-semibold text-emerald-700">
                    {formatCurrency(Number(invoice.amount_paid))}
                  </span>
                </div>

                <div className="flex justify-between font-bold text-black border-t border-gray-300 pt-1.5">
                  <span>Total Amount Due</span>
                  <span className="font-mono text-sm text-purple-950">
                    {formatCurrency(Number(invoice.amount_due))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Declaration & Authorized Signatory */}
        <div className="mt-8 pt-6 border-t-2 border-gray-300 flex justify-between items-end">
          <div className="text-[10px] text-gray-500 max-w-sm space-y-1">
            <p className="font-bold text-gray-700">Terms & Conditions:</p>
            <p>1. We declare that this invoice shows the actual price of services described and all particulars are true and correct.</p>
            <p>2. Subject to Jaipur jurisdiction.</p>
            <p className="italic pt-1 text-gray-400">This is a computer generated tax invoice and requires no physical seal or signature.</p>
          </div>

          <div className="text-right text-xs">
            <p className="font-bold text-gray-900">
              For {seller.legalName || "Growth Service Technologies LLP"}
            </p>
            <div className="h-16"></div>
            <p className="border-t border-gray-400 pt-1 font-bold text-gray-800">
              Authorized Signatory
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
