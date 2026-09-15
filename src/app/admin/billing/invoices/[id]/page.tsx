import React from "react";
import { notFound } from "next/navigation";
import { getInvoiceById } from "@/modules/billing/queries/invoiceQueries";
import { InvoiceDetailView } from "@/components/admin/billing/InvoiceDetailView";

export const revalidate = 0;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InvoiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <InvoiceDetailView invoice={invoice} />
    </div>
  );
}
