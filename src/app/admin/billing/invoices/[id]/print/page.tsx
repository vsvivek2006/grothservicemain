import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInvoiceById } from "@/modules/billing/queries/invoiceQueries";
import { PrintInvoiceView } from "@/components/admin/billing/PrintInvoiceView";

export const revalidate = 0;
export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) {
    return { title: "Invoice | Growth Service" };
  }

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
    title: `${clientName} - ${safeInvoiceNum}`,
  };
}

export default async function InvoicePrintPage({ params }: PageProps) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  return <PrintInvoiceView invoice={invoice} />;
}
