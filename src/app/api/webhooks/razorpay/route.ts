import { NextRequest, NextResponse } from "next/server";
import { getPaymentProvider } from "@/infrastructure/payments/payment-provider";
import { reconcilePaymentEvent } from "@/modules/billing/services/reconciliationService";
import { sendPaymentSuccessNotification } from "@/modules/billing/services/notificationService";
import { createAdminClient } from "@/lib/supabase/server";
import { isPaymentsEnabled } from "@/modules/billing/constants/featureFlags";

export const dynamic = "force-dynamic";

/**
 * POST /api/webhooks/razorpay
 *
 * Authoritative webhook receiver for Razorpay events.
 * Performs HMAC-SHA256 signature verification, idempotent event logging into
 * webhook_events, and updates payment state and ledger balances.
 */
export async function POST(req: NextRequest) {
  if (!isPaymentsEnabled()) {
    return NextResponse.json(
      { error: "Payments feature is disabled in this environment" },
      { status: 403 }
    );
  }

  try {
    // 1. Read raw body as text for HMAC verification
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";

    const provider = getPaymentProvider("razorpay");

    // 2. Verify signature before trusting payload
    const verification = await provider.verifyWebhook(rawBody, signature);
    if (!verification.isValid) {
      console.warn("[RazorpayWebhook] Signature verification failed");
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 }
      );
    }

    const payload = (verification.rawPayload || {}) as Record<string, unknown>;
    const eventName = String(payload.event || verification.eventType || "unknown");

    // Construct a deterministic provider_event_id:
    // Prefer x-razorpay-event-id header, otherwise account_id + created_at + event
    const headerEventId = req.headers.get("x-razorpay-event-id");
    const providerEventId =
      headerEventId ||
      verification.providerEventId ||
      `rzp_${payload.created_at || Date.now()}_${eventName}`;

    const supabase = createAdminClient();

    // 3. Deduplication Check
    const { data: existingEvent } = await supabase
      .from("webhook_events")
      .select("id, status")
      .eq("provider", "razorpay")
      .eq("provider_event_id", providerEventId)
      .maybeSingle();

    if (existingEvent) {
      if (existingEvent.status === "processed") {
        return NextResponse.json({
          status: "duplicate",
          message: "Event already processed",
        });
      }
      if (existingEvent.status === "processing") {
        return NextResponse.json({
          status: "processing",
          message: "Event currently being processed",
        });
      }
    }

    // 4. Persist incoming webhook event with status 'processing'
    let webhookEventId: string | undefined;
    if (!existingEvent) {
      const { data: insertedEvent, error: insertErr } = await supabase
        .from("webhook_events")
        .insert({
          provider: "razorpay",
          provider_event_id: providerEventId,
          event_type: eventName,
          payload,
          status: "processing",
          processing_attempts: 1,
          received_at: new Date().toISOString(),
        })
        .select("id")
        .single();

      if (!insertErr && insertedEvent) {
        webhookEventId = insertedEvent.id;
      }
    } else {
      webhookEventId = existingEvent.id;
      await supabase
        .from("webhook_events")
        .update({
          status: "processing",
          processing_attempts: (existingEvent as any).processing_attempts
            ? (existingEvent as any).processing_attempts + 1
            : 2,
        })
        .eq("id", webhookEventId);
    }

    // 5. Normalize and reconcile event
    const normalizedEvent = provider.parseWebhookEvent(payload);
    const result = await reconcilePaymentEvent(normalizedEvent);

    // 6. Update webhook event status to 'processed' or 'failed'
    if (webhookEventId) {
      await supabase
        .from("webhook_events")
        .update({
          status: result.success ? "processed" : "failed",
          processed_at: new Date().toISOString(),
          error_message: result.success ? null : result.message,
        })
        .eq("id", webhookEventId);
    }

    // 7. Asynchronously trigger automated payment success notification
    if (result.success && result.paymentId && normalizedEvent.eventType === "payment.captured") {
      sendPaymentSuccessNotification(result.paymentId).catch((notifErr) => {
        console.warn("[RazorpayWebhook] Failed to dispatch payment success notification:", notifErr);
      });
    }

    return NextResponse.json({
      received: true,
      status: result.status,
      message: result.message,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal webhook error";
    console.error("[RazorpayWebhook] Exception:", err);
    return NextResponse.json(
      { error: "Webhook processing error", details: errorMsg },
      { status: 500 }
    );
  }
}
