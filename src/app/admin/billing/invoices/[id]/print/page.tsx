import React from "react";
import { notFound } from "next/navigation";
import { getInvoiceById } from "@/modules/billing/queries/invoiceQueries";
import { PrintInvoiceView } from "@/components/admin/billing/PrintInvoiceView";

export const revalidate = 0;
export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InvoicePrintPage({ params }: PageProps) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  return <PrintInvoiceView invoice={invoice} />;
}
