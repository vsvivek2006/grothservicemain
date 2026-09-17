/**
 * Growth Service — Invoice PDF Generation Service (Phase 5)
 *
 * Server-only module. Generates PDF bytes from frozen invoice snapshot data.
 * Must never be imported by client components.
 *
 * Uses an isolated Node worker (pdfWorker.mjs) running standard React 18
 * to eliminate Next.js 15 React 19 reconciler conflicts (Minified React Error #31).
 *
 * Key guarantee: PDF is reproducible from stored invoice data alone.
 * Catalog edits or client record changes cannot alter a historical invoice PDF.
 */

import "server-only";

import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { createAdminClient } from "@/lib/supabase/server";
import { getSellerSnapshot } from "./sellerConfig";
import { InvoicePdfDocument, type BuyerSnapshot } from "./invoicePdfTemplate";
import type { Invoice, InvoiceItem } from "../types/database";

export interface InvoicePdfResult {
  buffer: Buffer;
  filename: string;
}

/**
 * Spawns an isolated Node.js process to render PDF as secondary fallback.
 */
function renderPdfViaWorker(workerPath: string, payload: Record<string, unknown>): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const proc = spawn(process.execPath, [workerPath]);

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    proc.on("error", (err) => {
      reject(new Error(`Failed to spawn PDF worker: ${err.message}`));
    });

    proc.on("close", (code) => {
      if (code === 0 && stdout) {
        try {
          const buffer = Buffer.from(stdout, "base64");
          resolve(buffer);
        } catch (parseErr) {
          reject(
            new Error(
              `Failed to decode PDF buffer: ${
                parseErr instanceof Error ? parseErr.message : "decode error"
              }`
            )
          );
        }
      } else {
        reject(
          new Error(
            `PDF rendering failed (code ${code}): ${
              stderr || "unknown worker error"
            }`
          )
        );
      }
    });

    proc.stdin.write(JSON.stringify(payload));
    proc.stdin.end();
  });
}

/**
 * Robust, production-grade PDF renderer.
 * Tier 1: In-process render via @react-pdf/renderer (serverless-safe, 0 child processes, fast).
 * Tier 2: Isolated child process worker fallback.
 */
async function renderPdfRobustly(payload: {
  invoice: Invoice;
  items: InvoiceItem[];
  seller: ReturnType<typeof getSellerSnapshot>;
  buyer: BuyerSnapshot;
}): Promise<Buffer> {
  let directError: unknown = null;
  // Tier 1: Direct in-process renderToBuffer
  try {
    const element = React.createElement(InvoicePdfDocument, payload);
    const buffer = await renderToBuffer(element as unknown as React.ReactElement);
    if (buffer && buffer.length > 0) {
      return Buffer.from(buffer);
    }
  } catch (directErr) {
    directError = directErr;
    console.warn("[invoicePdfService] Direct in-process renderToBuffer failed:", directErr);
  }

  // Tier 2: Isolated child worker process
  let workerError: unknown = null;
  try {
    const candidatePaths = [
      path.resolve(process.cwd(), "pdfWorker.mjs"),
      path.resolve(process.cwd(), "public/pdfWorker.mjs"),
      path.resolve(process.cwd(), "src/modules/billing/services/pdfWorker.mjs"),
      path.resolve(process.cwd(), ".next/server/pdfWorker.mjs"),
    ];
    const workerPath = candidatePaths.find((p) => fs.existsSync(p));
    if (workerPath) {
      const buffer = await renderPdfViaWorker(workerPath, payload as unknown as Record<string, unknown>);
      return buffer;
    }
  } catch (workerErr) {
    workerError = workerErr;
    console.error("[invoicePdfService] Worker fallback also failed:", workerErr);
  }

  const directMsg = directError instanceof Error ? directError.message : String(directError || "");
  const workerMsg = workerError instanceof Error ? workerError.message : String(workerError || "");
  const errorDetails = [directMsg, workerMsg].filter(Boolean).join(" | ");

  throw new Error(
    `Unable to render invoice PDF on server${errorDetails ? `: ${errorDetails}` : ""}. Please use Print View to save as PDF.`
  );
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

  // 5. Render to PDF buffer via robust multi-tier pipeline
  const buffer = await renderPdfRobustly({
    invoice: invoice as Invoice,
    items: sortedItems,
    seller,
    buyer,
  });

  // 6. Build a clean, safe filename
  const safeNumber = (invoice.invoice_number || invoice.id)
    .replace(/[^a-zA-Z0-9\-_]/g, "_")
    .replace(/_+/g, "_");
  const filename = `Invoice_${safeNumber}.pdf`;

  return { buffer, filename };
}
