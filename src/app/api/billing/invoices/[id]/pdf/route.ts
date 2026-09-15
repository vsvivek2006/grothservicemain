/**
 * GET /api/billing/invoices/[id]/pdf
 *
 * Generates and streams the invoice PDF for download.
 * Admin-only: requires authenticated admin session.
 * PDF is generated server-side from frozen snapshot data.
 */

import { NextRequest, NextResponse } from "next/server";
import { assertAdminUser } from "@/lib/authorization";
import { generateInvoicePdf } from "@/modules/billing/services/invoicePdfService";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    // 1. Auth gate — admin only
    await assertAdminUser();

    const { id } = await params;

    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Invoice ID is required" }, { status: 400 });
    }

    // 2. Generate PDF buffer from frozen snapshot data
    const { buffer, filename } = await generateInvoicePdf(id);

    // 3. Stream as downloadable PDF
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": String(buffer.length),
        // Prevent caching of financial documents
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Pragma": "no-cache",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to generate PDF";
    console.error("[PDF Route] Error:", message);

    // Return 401 for auth failures, 404 for not found, 500 for others
    const status = message.includes("Unauthorized") || message.includes("not authenticated")
      ? 401
      : message.includes("not found") || message.includes("Invoice not found")
      ? 404
      : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
