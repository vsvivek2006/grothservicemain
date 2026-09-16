"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { downloadInvoicePdfAction } from "@/modules/billing/actions/invoiceActions";
import { Printer, Download, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface PrintInvoiceViewProps {
  invoice: InvoiceWithRelations;
}

// Convert numbers into Indian Currency words (e.g., 3186 -> Three Thousand One Hundred Eighty-Six Rupees Only)
function numberToIndianWords(num: number): string {
  if (!num || isNaN(num)) return "Zero Rupees Only";
  const abs = Math.abs(num);
  let integerPart = Math.floor(abs);
  let paise = Math.round((abs - integerPart) * 100);
  if (paise >= 100) {
    integerPart += 1;
    paise = 0;
  }

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

  let result = (words.trim() || "Zero") + " Rupees";
  if (paise > 0) {
    result += ` and ${convertTwoDigits(paise).trim()} Paise`;
  }
  return result + " Only";
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    try {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {}
  }, 15000);
}

function getSafeInvoiceFilename(invoiceNumber?: string | null): string {
  const safe = (invoiceNumber || "Invoice")
    .replace(/[^a-zA-Z0-9\-_]/g, "_")
    .replace(/_+/g, "_");
  return `Invoice_${safe}.pdf`;
}

export const PrintInvoiceView: React.FC<PrintInvoiceViewProps> = ({ invoice }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Trigger print dialog on mount ONLY if explicit query param ?autoprint=1 is provided
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("autoprint=1")) {
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
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
    const toastId = toast.loading("Preparing invoice PDF...");

    try {
      // 1. Try Next.js Server Action first (returns base64 buffer)
      const actionRes = await downloadInvoicePdfAction(invoice.id);
      if (actionRes.success && actionRes.data?.base64) {
        const byteCharacters = atob(actionRes.data.base64);
        const byteNumbers = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const blob = new Blob([byteNumbers], { type: "application/pdf" });
        triggerBlobDownload(
          blob,
          actionRes.data.filename || getSafeInvoiceFilename(invoice.invoice_number)
        );
        toast.success("Invoice PDF downloaded successfully!", { id: toastId });
        return;
      }

      // 2. Direct HTTP stream fallback with blob download (no raw JSON tabs)
      const res = await fetch(`/api/billing/invoices/${invoice.id}/pdf`);
      if (!res.ok) {
        let msg = "Failed to generate PDF";
        try {
          const errData = await res.json();
          if (errData?.error) msg = errData.error;
        } catch {}
        throw new Error(msg);
      }

      const blob = await res.blob();
      triggerBlobDownload(blob, getSafeInvoiceFilename(invoice.invoice_number));
      toast.success("Invoice PDF downloaded successfully!", { id: toastId });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to download PDF";
      toast.error(msg, { id: toastId });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 print:bg-white print:p-0 print:m-0">
      {/* Embedded CSS for Exact A4 Portrait Page Layout & Zero Overflow */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              size: A4 portrait;
              margin: 8mm 10mm 8mm 10mm;
            }
            @media print {
              *, *:before, *:after {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              html, body {
                background: #ffffff !important;
                color: #000000 !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
              }
              aside, header, nav, footer,
              .no-print,
              .print\\:hidden,
              .print\\:\\!hidden {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                width: 0 !important;
                overflow: hidden !important;
              }
              .print-container {
                max-width: 100% !important;
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
                border: none !important;
              }
              .avoid-break {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
              }
              tr {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
              }
              thead {
                display: table-header-group !important;
              }
              .print-purple-hdr {
                background-color: #581c87 !important;
                color: #ffffff !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
            }
          `,
        }}
      />

      {/* Non-Printable Top Action Bar */}
      <div className="no-print print:!hidden mx-auto mb-6 flex max-w-[210mm] items-center justify-between rounded-lg bg-gray-900 px-5 py-3 text-white shadow-md">
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
            {invoice.document_status || "draft"}
          </span>
          {invoice.payment_status === "paid" && (
            <span className="rounded bg-emerald-950 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-700">
              PAID
            </span>
          )}
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
      <div className="print-container mx-auto w-full max-w-[210mm] rounded-sm bg-white p-8 print:p-0 text-gray-900 shadow-2xl print:max-w-none print:w-full print:shadow-none border border-gray-300 print:border-none">
        {/* Header: Company Identity & Tax Invoice Title */}
        <div className="avoid-break border-b-2 border-purple-800 pb-3 print:pb-2">
          <div className="flex items-start justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-purple-800 text-xs font-black text-white">
                  GS
                </div>
                <h1 className="text-xl font-black tracking-tight text-purple-800">
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
              <div className="mt-0.5 flex flex-wrap gap-x-4 text-[11px] font-semibold text-gray-800">
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

            <div className="text-right space-y-0.5">
              <span className="inline-block rounded border border-purple-800 bg-purple-100 px-2.5 py-0.5 text-xs font-black uppercase tracking-widest text-purple-900">
                TAX INVOICE
              </span>
              <p className="font-mono text-sm font-bold text-gray-900 mt-0.5">
                {invoice.invoice_number}
              </p>
              <p className="text-xs text-gray-700">
                Invoice Date: <strong className="text-black">{formatDate(invoice.issue_date)}</strong>
              </p>
              <p className="text-xs text-gray-700">
                Due Date: <strong className="text-black">{formatDate(invoice.due_date)}</strong>
              </p>
              <div className="pt-0.5 flex items-center justify-end gap-2">
                <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-700">
                  ORIGINAL FOR RECIPIENT
                </span>
                {invoice.payment_status === "paid" && (
                  <span className="inline-block rounded border border-emerald-600 bg-emerald-100 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-800">
                    PAID
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Billed From & Billed To Cards */}
        <div className="avoid-break my-3 print:my-2 grid grid-cols-2 gap-3 text-xs">
          {/* Seller / Supplier */}
          <div className="rounded border border-gray-300 bg-gray-50/60 p-3 print:p-2.5">
            <span className="font-bold uppercase tracking-wider text-purple-800 text-[10px]">
              Supplier / Billed From:
            </span>
            <p className="mt-0.5 font-bold text-xs text-gray-900">
              {seller.legalName || "Growth Service Technologies LLP"}
            </p>
            <p className="text-gray-600 text-[11px]">{seller.addressLine1 || "Plot No. 42, Malviya Nagar"}</p>
            <p className="text-gray-600 text-[11px]">
              {seller.city || "Jaipur"}, {seller.state || "Rajasthan"} - {seller.postalCode || "302017"}
            </p>
            <div className="mt-1.5 space-y-0.5 border-t border-gray-200 pt-1 text-[11px]">
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
          <div className="rounded border border-gray-300 bg-gray-50/60 p-3 print:p-2.5">
            <span className="font-bold uppercase tracking-wider text-purple-800 text-[10px]">
              Recipient / Billed To:
            </span>
            <p className="mt-0.5 font-bold text-xs text-gray-900">
              {buyer.legalName || buyer.companyName || invoice.client?.company_name || "Valued Client"}
            </p>
            <p className="text-gray-600 text-[11px]">
              Attn: {buyer.contactName || invoice.client?.contact_name || "Accounts Dept."}
            </p>
            <p className="text-gray-600 text-[11px]">
              {buyer.addressLine1 || "Client Address Not Provided"}
              {buyer.city ? `, ${buyer.city}` : ""}
              {buyer.state ? `, ${buyer.state}` : ""}
              {buyer.postalCode ? ` - ${buyer.postalCode}` : ""}
            </p>
            <div className="mt-1.5 space-y-0.5 border-t border-gray-200 pt-1 text-[11px]">
              <p>
                <span className="text-gray-500">GSTIN:</span>{" "}
                <span className="font-mono font-bold text-black">{buyer.gstin || "Unregistered"}</span>
              </p>
              <p>
                <span className="text-gray-500">Place of Supply:</span>{" "}
                <span className="font-semibold text-black">
                  {invoice.place_of_supply || "Rajasthan"} (Code: {invoice.place_of_supply_state_code || "08"})
                </span>{" "}
                <span className="text-[10px] text-purple-700 font-semibold">
                  {invoice.is_interstate ? "[IGST]" : "[CGST + SGST]"}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="my-3 print:my-2 border border-gray-300 rounded overflow-hidden">
          <table className="w-full text-left text-xs table-fixed">
            <thead className="print-purple-hdr bg-purple-900 text-white uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-2 py-1.5 print:py-1 w-[4%] text-center">#</th>
                <th className="px-2.5 py-1.5 print:py-1 w-[34%]">Item Description</th>
                <th className="px-2 py-1.5 print:py-1 w-[10%]">HSN/SAC</th>
                <th className="px-2 py-1.5 print:py-1 w-[7%] text-right">Qty</th>
                <th className="px-2 py-1.5 print:py-1 w-[11%] text-right">Rate</th>
                <th className="px-2 py-1.5 print:py-1 w-[7%] text-right">Disc</th>
                <th className="px-2 py-1.5 print:py-1 w-[12%] text-right">Taxable</th>
                <th className="px-1.5 py-1.5 print:py-1 w-[5%] text-right">GST</th>
                <th className="px-2.5 py-1.5 print:py-1 w-[10%] text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {(!invoice.items || invoice.items.length === 0) ? (
                <tr>
                  <td colSpan={9} className="px-3 py-4 text-center text-gray-500">
                    No items on this invoice
                  </td>
                </tr>
              ) : (
                invoice.items.map((it, idx) => {
                  return (
                    <tr key={it.id || idx} className="avoid-break hover:bg-gray-50/50">
                      <td className="px-2 py-1.5 print:py-1 text-center text-gray-500 font-medium">{idx + 1}</td>
                      <td className="px-2.5 py-1.5 print:py-1 font-bold text-gray-900">
                        <div className="break-words">{it.description_snapshot}</div>
                        {it.sku_snapshot && (
                          <div className="text-[10px] font-normal text-gray-500">
                            SKU: {it.sku_snapshot}
                          </div>
                        )}
                      </td>
                      <td className="px-2 py-1.5 print:py-1 font-mono text-gray-700">{it.hsn_sac_snapshot || "—"}</td>
                      <td className="px-2 py-1.5 print:py-1 text-right font-mono">
                        {Number(it.quantity)} {it.unit_snapshot}
                      </td>
                      <td className="px-2 py-1.5 print:py-1 text-right font-mono">
                        {formatCurrency(Number(it.unit_price))}
                      </td>
                      <td className="px-2 py-1.5 print:py-1 text-right font-mono text-gray-700">
                        {Number(it.discount_amount) > 0 ? `-${formatCurrency(Number(it.discount_amount))}` : "—"}
                      </td>
                      <td className="px-2 py-1.5 print:py-1 text-right font-mono font-medium text-black">
                        {formatCurrency(Number(it.taxable_amount))}
                      </td>
                      <td className="px-1.5 py-1.5 print:py-1 text-right font-mono">
                        {Number(it.tax_rate)}%
                      </td>
                      <td className="px-2.5 py-1.5 print:py-1 text-right font-mono font-bold text-black">
                        {formatCurrency(Number(it.line_total))}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom Section: Bank Details & Totals Breakdown (Side-by-side flex layout to guarantee single-page fit) */}
        <div className="avoid-break my-3 print:my-2 flex flex-row items-start justify-between gap-4">
          {/* Left: Bank Details & Amount in Words */}
          <div className="w-[58%] shrink-0 space-y-2 text-xs">
            {/* Amount in Words */}
            <div className="rounded border border-gray-300 bg-purple-50/40 p-2.5 print:p-2">
              <span className="font-bold text-purple-900 text-[10px] uppercase tracking-wider">
                Total Amount in Words:
              </span>
              <p className="mt-0.5 font-bold text-gray-900 text-[11px]">
                {numberToIndianWords(Number(invoice.grand_total))}
              </p>
            </div>

            {/* Bank Details */}
            {seller.bankDetails && (
              <div className="rounded border border-gray-300 p-2.5 print:p-2">
                <span className="font-bold text-purple-900 text-[10px] uppercase tracking-wider">
                  Bank Details for Direct RTGS / NEFT / IMPS:
                </span>
                <div className="mt-1 grid grid-cols-2 gap-y-0.5 gap-x-2 text-[11px] text-gray-800">
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
                  {seller.bankDetails.upiId && (
                    <p className="col-span-2">
                      <span className="text-gray-500">UPI ID:</span>{" "}
                      <strong className="font-mono text-purple-900">{seller.bankDetails.upiId}</strong>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Notes */}
            {invoice.notes && (
              <div className="rounded border border-gray-200 p-2 text-[11px] text-gray-600">
                <span className="font-bold text-gray-700">Remarks / Notes: </span>
                <span>{invoice.notes}</span>
              </div>
            )}
          </div>

          {/* Right: Totals Breakdown */}
          <div className="w-[40%] shrink-0">
            <div className="rounded border border-gray-300 bg-gray-50/70 p-3 print:p-2 text-xs">
              <div className="space-y-1">
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
                  <div className="flex justify-between text-gray-500 text-[10px]">
                    <span>Round Off</span>
                    <span className="font-mono">
                      {Number(invoice.round_off) > 0 ? `+${invoice.round_off}` : invoice.round_off}
                    </span>
                  </div>
                )}

                <div className="border-t-2 border-purple-800 pt-1.5 mt-1">
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="font-black text-purple-900">Grand Total</span>
                    <span className="font-mono text-sm font-black text-purple-900">
                      {formatCurrency(Number(invoice.grand_total))}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-gray-300 pt-1 text-gray-600 text-[11px]">
                  <span>Amount Paid</span>
                  <span className="font-mono font-semibold text-emerald-700">
                    {formatCurrency(Number(invoice.amount_paid))}
                  </span>
                </div>

                <div className="flex justify-between font-bold text-black border-t border-gray-300 pt-1">
                  <span>Total Amount Due</span>
                  <span className="font-mono text-xs text-purple-950">
                    {formatCurrency(Number(invoice.amount_due))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Declaration & Authorized Signatory */}
        <div className="avoid-break mt-4 pt-3 print:mt-2 print:pt-2 border-t border-gray-300 flex justify-between items-end">
          <div className="text-[10px] text-gray-500 max-w-sm space-y-0.5">
            <p className="font-bold text-gray-700">Terms & Conditions:</p>
            <p>1. We declare that this invoice shows the actual price of services described and all particulars are true and correct.</p>
            <p>2. Subject to Jaipur jurisdiction.</p>
            <p className="italic pt-0.5 text-gray-400">This is a computer generated tax invoice and requires no physical seal or signature.</p>
          </div>

          <div className="text-right text-xs">
            <p className="font-bold text-gray-900">
              For {seller.legalName || "Growth Service Technologies LLP"}
            </p>
            <div className="h-10 print:h-8"></div>
            <p className="border-t border-gray-400 pt-0.5 font-bold text-gray-800">
              Authorized Signatory
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
