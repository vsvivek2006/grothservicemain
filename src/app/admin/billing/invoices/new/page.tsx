import React from "react";
import { getClients } from "@/modules/billing/queries/clientQueries";
import { getBillingItems } from "@/modules/billing/queries/itemQueries";
import { InvoiceForm } from "@/components/admin/billing/InvoiceForm";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const revalidate = 0;

interface PageProps {
  searchParams?: Promise<{ clientId?: string }>;
}

export default async function NewInvoicePage({ searchParams }: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  const [adminUser, clients, items] = await Promise.all([
    assertAdminUser(),
    getClients({ status: "active" }),
    getBillingItems({ activeOnly: true }),
  ]);
  assertPermission(adminUser, "billing:write");

  return (
    <div className="mx-auto max-w-6xl">
      <InvoiceForm
        clients={clients}
        catalogItems={items}
        defaultClientId={params?.clientId}
      />
    </div>
  );
}
