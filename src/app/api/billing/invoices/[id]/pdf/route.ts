/**
 * GET /api/billing/invoices/[id]/pdf
 *
 * Redirects directly to the native A4 print/save-as-PDF view.
 */

import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "Invoice ID is required" }, { status: 400 });
  }

  const targetUrl = new URL(`/admin/billing/invoices/${id}/print?autoprint=1`, req.url);
  return NextResponse.redirect(targetUrl, 307);
}
