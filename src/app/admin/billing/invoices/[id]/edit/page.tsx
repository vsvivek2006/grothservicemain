import React from "react";
import { notFound, redirect } from "next/navigation";
import { getInvoiceById } from "@/modules/billing/queries/invoiceQueries";
import { getClients } from "@/modules/billing/queries/clientQueries";
import { getBillingItems } from "@/modules/billing/queries/itemQueries";
import { InvoiceForm } from "@/components/admin/billing/InvoiceForm";

export const revalidate = 0;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditInvoicePage({ params }: PageProps) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  // Guard against editing issued or cancelled financial documents
  if (invoice.document_status !== "draft") {
    redirect(`/admin/billing/invoices/${id}`);
  }

  const [clients, items] = await Promise.all([
    getClients({ status: "active" }),
    getBillingItems({ activeOnly: true }),
  ]);

  return (
    <div className="mx-auto max-w-6xl">
      <InvoiceForm
        initialInvoice={invoice}
        clients={clients}
        catalogItems={items}
      />
    </div>
  );
}
