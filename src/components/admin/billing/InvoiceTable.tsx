"use client";

import React from "react";
import Link from "next/link";
import { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { StatusBadge } from "@/components/admin/shared/StatusBadge";
import { Eye, Edit2, CheckCircle2, XCircle, FileText } from "lucide-react";

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

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-800 bg-gray-900/60 shadow-xl backdrop-blur-md">
      <table className="w-full text-left text-sm text-gray-300">
        <thead className="border-b border-gray-800 bg-gray-900/90 text-xs uppercase tracking-wider text-gray-400">
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
                <td className="whitespace-nowrap px-5 py-4 font-mono font-medium text-white">
                  <Link
                    href={`/admin/billing/invoices/${inv.id}`}
                    className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 hover:underline"
                  >
                    <FileText className="h-4 w-4 text-purple-400/80" />
                    <span>{inv.invoice_number}</span>
                  </Link>
                </td>
                <td className="px-5 py-4">
                  <div className="font-medium text-white">
                    {inv.client?.company_name || "Unknown Client"}
                  </div>
                  <div className="text-xs text-gray-400">
                    {inv.client?.contact_name || inv.client?.email || ""}
                  </div>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-xs">
                  <div className="text-gray-200">{formatDate(inv.issue_date)}</div>
                  <div className="text-gray-500">Due: {formatDate(inv.due_date)}</div>
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <StatusBadge status={inv.document_status} />
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <StatusBadge status={inv.payment_status} />
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-mono font-semibold text-white">
                  {formatCurrency(Number(inv.grand_total))}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-mono">
                  <span
                    className={
                      Number(inv.amount_due) > 0 ? "font-semibold text-yellow-400" : "text-gray-400"
                    }
                  >
                    {formatCurrency(Number(inv.amount_due))}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <Link
                      href={`/admin/billing/invoices/${inv.id}`}
                      className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                      title="View Invoice"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>

                    {isDraft && (
                      <>
                        <Link
                          href={`/admin/billing/invoices/${inv.id}/edit`}
                          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                          title="Edit Draft"
                        >
                          <Edit2 className="h-4 w-4 text-blue-400" />
                        </Link>
                        {onIssue && (
                          <button
                            onClick={() => onIssue(inv)}
                            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-emerald-950/40 hover:text-emerald-400"
                            title="Issue Invoice"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          </button>
                        )}
                      </>
                    )}

                    {!isCancelled && onCancel && (
                      <button
                        onClick={() => onCancel(inv)}
                        className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-950/40 hover:text-red-400"
                        title="Cancel Invoice"
                      >
                        <XCircle className="h-4 w-4 text-red-400" />
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
