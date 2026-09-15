/**
 * Growth Service — Invoice PDF Generation Service (Phase 5)
 *
 * Server-only module. Generates PDF bytes from frozen invoice snapshot data.
 * Must never be imported by client components.
 *
 * Key guarantee: PDF is reproducible from stored invoice data alone.
 * Catalog edits or client record changes cannot alter a historical invoice PDF.
 */

import "server-only";

import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createAdminClient } from "@/lib/supabase/server";
import { getSellerSnapshot } from "./sellerConfig";
import { InvoicePdfDocument, type BuyerSnapshot } from "./invoicePdfTemplate";
import type { Invoice, InvoiceItem } from "../types/database";

export interface InvoicePdfResult {
  buffer: Buffer;
  filename: string;
}

/**
 * Fetch invoice + items from DB and generate PDF buffer.
 * Uses only data stored at invoice creation time (snapshots) — never
 * re-fetches current client/catalog/seller state.
 */
export async function generateInvoicePdf(invoiceId: string): Promise<InvoicePdfResult> {
  const adminClient = createAdminClient();

  // 1. Fetch invoice header (contains frozen snapshots)
  const { data: invoice, error: invoiceErr } = await adminClient
    .from("invoices")
    .select("*")
    .eq("id", invoiceId)
    .single();

  if (invoiceErr || !invoice) {
    throw new Error(`Invoice not found: ${invoiceErr?.message ?? invoiceId}`);
  }

  // 2. Fetch frozen line items (historical snapshots, not current catalog)
  const { data: items, error: itemsErr } = await adminClient
    .from("invoice_items")
    .select("*")
    .eq("invoice_id", invoiceId)
    .order("sort_order", { ascending: true });

  if (itemsErr) {
    throw new Error(`Failed to fetch invoice items: ${itemsErr.message}`);
  }

  const sortedItems: InvoiceItem[] = (items ?? []) as InvoiceItem[];

  // 3. Seller snapshot: use frozen seller_snapshot stored on the invoice.
  //    Fall back to current config only if snapshot is missing (e.g. very old draft).
  const rawSeller = invoice.seller_snapshot as Record<string, unknown>;
  const seller = rawSeller && Object.keys(rawSeller).length > 0
    ? (rawSeller as unknown as ReturnType<typeof getSellerSnapshot>)
    : getSellerSnapshot();

  // 4. Buyer snapshot: exclusively from frozen buyer_snapshot.
  //    This ensures the buyer address/GSTIN at invoice time is preserved.
  const rawBuyer = invoice.buyer_snapshot as Record<string, unknown>;
  const buyer: BuyerSnapshot = {
    clientCode: (rawBuyer?.clientCode as string) ?? undefined,
    companyName: (rawBuyer?.companyName as string) ?? undefined,
    legalName: (rawBuyer?.legalName as string) ?? undefined,
    contactName: (rawBuyer?.contactName as string) ?? undefined,
    email: (rawBuyer?.email as string) ?? undefined,
    phone: (rawBuyer?.phone as string) ?? undefined,
    gstin: (rawBuyer?.gstin as string | null) ?? null,
    pan: (rawBuyer?.pan as string | null) ?? null,
    addressLine1: (rawBuyer?.addressLine1 as string) ?? undefined,
    addressLine2: (rawBuyer?.addressLine2 as string | null) ?? null,
    city: (rawBuyer?.city as string) ?? undefined,
    state: (rawBuyer?.state as string) ?? undefined,
    stateCode: (rawBuyer?.stateCode as string) ?? undefined,
    postalCode: (rawBuyer?.postalCode as string) ?? undefined,
    country: (rawBuyer?.country as string) ?? "India",
  };

  // 5. Render to PDF buffer (server-side, never in browser bundle)
  const element = React.createElement(InvoicePdfDocument, {
    invoice: invoice as Invoice,
    items: sortedItems,
    seller,
    buyer,
  });

  const buffer = await renderToBuffer(element as unknown as React.ReactElement);

  // 6. Build a clean, safe filename
  const safeNumber = invoice.invoice_number
    .replace(/[^a-zA-Z0-9\-_]/g, "_")
    .replace(/_+/g, "_");
  const filename = `Invoice_${safeNumber}.pdf`;

  return { buffer: Buffer.from(buffer), filename };
}
