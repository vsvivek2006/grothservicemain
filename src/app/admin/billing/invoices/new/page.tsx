import React from "react";
import { getClients } from "@/modules/billing/queries/clientQueries";
import { getBillingItems } from "@/modules/billing/queries/itemQueries";
import { InvoiceForm } from "@/components/admin/billing/InvoiceForm";

export const revalidate = 0;

export default async function NewInvoicePage() {
  const [clients, items] = await Promise.all([
    getClients({ status: "active" }),
    getBillingItems({ activeOnly: true }),
  ]);

  return (
    <div className="mx-auto max-w-6xl">
      <InvoiceForm clients={clients} catalogItems={items} />
    </div>
  );
}
