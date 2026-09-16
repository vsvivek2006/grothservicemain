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
  const adminUser = await assertAdminUser();
  assertPermission(adminUser, "billing:write");

  const params = searchParams ? await searchParams : undefined;
  const [clients, items] = await Promise.all([
    getClients({ status: "active" }),
    getBillingItems({ activeOnly: true }),
  ]);

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
