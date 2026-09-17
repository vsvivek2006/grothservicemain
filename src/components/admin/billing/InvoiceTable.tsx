"use client";

import React from "react";
import Link from "next/link";
import { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import { Eye, Edit2, CheckCircle2, XCircle, FileText } from "lucide-react";
import { formatCurrencyExact as formatCurrency, formatDate } from "@/lib/formatters";

interface InvoiceTableProps {
  invoices: InvoiceWithRelations[];
  onIssue?: (invoice: InvoiceWithRelations) => void;
  onCancel?: (invoice: InvoiceWithRelations) => void;
}

export const InvoiceTable: React.FC<InvoiceTableProps> = ({
  invoices,
  onIssue,
  onCancel,
}) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-800 bg-gray-900/70 shadow-2xl backdrop-blur-md">
      <table className="w-full text-left text-sm text-gray-300">
        <thead className="border-b border-gray-800 bg-gray-900/95 text-[11px] font-bold uppercase tracking-wider text-gray-400">
          <tr>
            <th scope="col" className="px-5 py-3.5">Invoice #</th>
            <th scope="col" className="px-5 py-3.5">Client</th>
            <th scope="col" className="px-5 py-3.5">Issue / Due</th>
            <th scope="col" className="px-5 py-3.5">Doc Status</th>
            <th scope="col" className="px-5 py-3.5">Payment</th>
            <th scope="col" className="px-5 py-3.5 text-right">Grand Total</th>
            <th scope="col" className="px-5 py-3.5 text-right">Balance Due</th>
            <th scope="col" className="px-5 py-3.5 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/60">
          {invoices.map((inv) => {
            const isDraft = inv.document_status === "draft";
            const isCancelled = inv.document_status === "cancelled" || inv.document_status === "void";

            return (
              <tr
                key={inv.id}
                className="transition-colors hover:bg-gray-800/40"
              >
                <td className="whitespace-nowrap px-5 py-4">
                  <Link
                    href={`/admin/billing/invoices/${inv.id}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-950/40 border border-purple-800/30 text-purple-300 font-mono text-xs font-semibold hover:bg-purple-900/50 hover:text-white transition-all shadow-xs"
                  >
                    <FileText className="h-3.5 w-3.5 text-purple-400" />
                    <span>{inv.invoice_number}</span>
                  </Link>
                </td>
                <td className="px-5 py-4 max-w-[220px]">
                  <div className="font-semibold text-white truncate" title={inv.client?.company_name || ""}>
                    {inv.client?.company_name || "Unknown Client"}
                  </div>
                  <div className="text-xs text-gray-400 truncate mt-0.5">
                    {inv.client?.contact_name || inv.client?.email || "—"}
                  </div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-xs">
                  <div className="text-gray-200 font-medium">{formatDate(inv.issue_date)}</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">Due: {formatDate(inv.due_date)}</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <StatusBadge status={inv.document_status} />
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <StatusBadge status={inv.payment_status} />
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-mono font-bold text-white">
                  {formatCurrency(Number(inv.grand_total))}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-mono">
                  <span
                    className={
                      Number(inv.amount_due) > 0 ? "font-bold text-yellow-400" : "text-emerald-400 font-medium"
                    }
                  >
                    {formatCurrency(Number(inv.amount_due))}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <Link
                      href={`/admin/billing/invoices/${inv.id}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-700 text-xs font-medium transition-all shadow-xs"
                      title="View Invoice Details"
                    >
                      <Eye className="h-3.5 w-3.5 text-gray-400" />
                      <span>View</span>
                    </Link>

                    {isDraft && (
                      <>
                        <Link
                          href={`/admin/billing/invoices/${inv.id}/edit`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-300 hover:bg-blue-900/50 text-xs font-medium transition-all"
                          title="Edit Draft"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                          <span>Edit</span>
                        </Link>
                        {onIssue && (
                          <button
                            onClick={() => onIssue(inv)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-emerald-300 hover:bg-emerald-900/60 text-xs font-medium transition-all cursor-pointer"
                            title="Issue Invoice"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Issue</span>
                          </button>
                        )}
                      </>
                    )}

                    {!isCancelled && onCancel && (
                      <button
                        onClick={() => onCancel(inv)}
                        className="p-1 rounded-lg text-gray-500 hover:bg-rose-950/40 hover:text-rose-400 transition-colors cursor-pointer"
                        title="Cancel Invoice"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
