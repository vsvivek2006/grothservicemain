/**
 * POST /api/billing/invoices/[id]/sync
 *
 * Authoritative sync of payment links for an invoice directly with Razorpay API.
 * Bypasses Turbopack server-action HMR closures to eliminate client runtime desync.
 * Accepts optional ?linkId= query param to sync a specific link, or syncs all links.
 */

import { NextRequest, NextResponse } from "next/server";
import { assertAdminUser, assertPermission, AuthorizationError } from "@/lib/authorization";
import {
  syncPaymentLinkAction,
  syncInvoicePaymentLinksAction,
} from "@/modules/billing/actions/paymentLinkActions";

export const dynamic = "force-dynamic";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:payments");

    const { id } = await params;

    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Invoice ID is required" }, { status: 400 });
    }

    const url = new URL(req.url);
    const linkId = url.searchParams.get("linkId");

    if (linkId) {
      const result = await syncPaymentLinkAction(linkId);
      if (!result.success) {
        return NextResponse.json({ error: result.error }, { status: 400 });
      }
      return NextResponse.json(result);
    }

    const result = await syncInvoicePaymentLinksAction(id);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    const message = err instanceof Error ? err.message : "Failed to sync with Razorpay";
    console.error("[InvoiceSyncRoute] Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

