import React from "react";
import { notFound, redirect } from "next/navigation";
import { getInvoiceById } from "@/modules/billing/queries/invoiceQueries";
import { getClients } from "@/modules/billing/queries/clientQueries";
import { getBillingItems } from "@/modules/billing/queries/itemQueries";
import { InvoiceForm } from "@/components/admin/billing/InvoiceForm";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const revalidate = 0;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditInvoicePage({ params }: PageProps) {
  const { id } = await params;
  const [adminUser, invoice, clients, items] = await Promise.all([
    assertAdminUser(),
    getInvoiceById(id),
    getClients({ status: "active" }),
    getBillingItems({ activeOnly: true }),
  ]);
  assertPermission(adminUser, "billing:write");

  if (!invoice) {
    notFound();
  }

  // Guard against editing issued or cancelled financial documents
  if (invoice.document_status !== "draft") {
    redirect(`/admin/billing/invoices/${id}`);
  }

  const clientList =
    invoice.client && !clients.some((c) => c.id === invoice.client_id)
      ? [invoice.client as any, ...clients]
      : clients;

  return (
    <div className="mx-auto max-w-6xl">
      <InvoiceForm
        initialInvoice={invoice}
        clients={clientList}
        catalogItems={items}
      />
    </div>
  );
}
