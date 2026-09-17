import React from "react";
import { notFound } from "next/navigation";
import { getInvoiceById } from "@/modules/billing/queries/invoiceQueries";
import { InvoiceDetailView } from "@/components/admin/billing/InvoiceDetailView";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const revalidate = 0;

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InvoiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [adminUser, invoice] = await Promise.all([
    assertAdminUser(),
    getInvoiceById(id),
  ]);
  assertPermission(adminUser, "billing:read");

  if (!invoice) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <InvoiceDetailView invoice={invoice} />
    </div>
  );
}
