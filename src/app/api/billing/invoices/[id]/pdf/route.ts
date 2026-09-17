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

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

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
    return new NextResponse(new Uint8Array(buffer), {
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

    let status = 500;
    if (typeof (err as any)?.status === "number") {
      status = (err as any).status;
    } else if (
      message.includes("Authentication required") ||
      message.includes("Unauthorized") ||
      message.includes("not authenticated")
    ) {
      status = 401;
    } else if (message.includes("Permission denied") || message.includes("Access denied")) {
      status = 403;
    } else if (message.includes("not found") || message.includes("Invoice not found")) {
      status = 404;
    }

    return NextResponse.json({ error: message }, { status });
  }
}
