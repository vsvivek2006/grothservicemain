import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInvoiceById } from "@/modules/billing/queries/invoiceQueries";
import { InvoiceDetailView } from "@/components/admin/billing/InvoiceDetailView";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const revalidate = 0;

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) return { title: "Invoice Details | Growth Service" };

  const buyer = (invoice.buyer_snapshot as any) || {};
  const clientName =
    buyer.legalName ||
    buyer.companyName ||
    buyer.contactName ||
    invoice.client?.company_name ||
    invoice.client?.contact_name ||
    "Client";
  const safeInvoiceNum = (invoice.invoice_number || "Invoice").replace(/[\/\\]/g, "-");

  return {
    title: `${clientName} - ${safeInvoiceNum} | Growth Service`,
  };
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
