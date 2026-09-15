import type {
  PaymentLinkResult,
  PaymentLinkStatus,
  NormalizedPaymentEvent,
  NormalizedPaymentEventType,
} from "../provider-types";

/**
 * Maps Razorpay payment link status string to normalized internal status.
 */
export function mapRazorpayLinkStatus(status?: string | null): PaymentLinkStatus {
  switch (status?.toLowerCase()) {
    case "created":
      return "created";
    case "partially_paid":
      return "partially_paid";
    case "paid":
      return "paid";
    case "cancelled":
      return "cancelled";
    case "expired":
      return "expired";
    default:
      return "created";
  }
}

/**
 * Maps Razorpay raw payment link API response to normalized PaymentLinkResult.
 */
export function mapRazorpayPaymentLink(data: Record<string, unknown>): PaymentLinkResult {
  const amountPaise = Number(data.amount) || 0;
  const amountRupees = amountPaise / 100;

  return {
    provider: "razorpay",
    providerLinkId: String(data.id || ""),
    providerReferenceId: data.reference_id ? String(data.reference_id) : undefined,
    shortUrl: String(data.short_url || ""),
    status: mapRazorpayLinkStatus(data.status as string),
    amount: amountRupees,
    currency: String(data.currency || "INR"),
    rawResponse: data,
  };
}

/**
 * Maps Razorpay webhook event names to internal normalized event types.
 */
export function mapRazorpayEventType(event?: string | null): NormalizedPaymentEventType {
  switch (event) {
    case "payment.captured":
      return "payment.captured";
    case "payment.failed":
      return "payment.failed";
    case "payment_link.paid":
      return "payment_link.paid";
    case "payment_link.cancelled":
      return "payment_link.cancelled";
    case "payment_link.expired":
      return "payment_link.expired";
    case "refund.processed":
      return "refund.processed";
    default:
      return "unknown";
  }
}

/**
 * Normalizes Razorpay webhook payload into a provider-agnostic event.
 */
export function mapRazorpayWebhookPayload(rawPayload: Record<string, unknown>): NormalizedPaymentEvent {
  const eventName = String(rawPayload.event || "");
  const eventType = mapRazorpayEventType(eventName);

  const payloadContainer = (rawPayload.payload || {}) as Record<string, Record<string, unknown>>;
  const paymentObj = (payloadContainer.payment?.entity || {}) as Record<string, unknown>;
  const linkObj = (payloadContainer.payment_link?.entity || {}) as Record<string, unknown>;

  // Amount may come on payment object or link object; Razorpay amounts are in paise
  const rawAmount = paymentObj.amount ?? linkObj.amount ?? 0;
  const amount = Number(rawAmount) / 100;
  const currency = String(paymentObj.currency || linkObj.currency || "INR");

  let status: NormalizedPaymentEvent["status"] = "pending";
  const rawStatus = String(paymentObj.status || linkObj.status || "").toLowerCase();
  if (rawStatus === "captured" || rawStatus === "paid") {
    status = "captured";
  } else if (rawStatus === "failed" || rawStatus === "cancelled") {
    status = "failed";
  } else if (rawStatus === "authorized") {
    status = "authorized";
  } else if (rawStatus === "refunded") {
    status = "refunded";
  }

  return {
    provider: "razorpay",
    providerEventId: String(rawPayload.account_id || "") + ":" + String(rawPayload.created_at || Date.now()),
    eventType,
    providerPaymentId: paymentObj.id ? String(paymentObj.id) : undefined,
    providerOrderId: paymentObj.order_id ? String(paymentObj.order_id) : undefined,
    providerLinkId: linkObj.id ? String(linkObj.id) : (paymentObj.payment_link_id ? String(paymentObj.payment_link_id) : undefined),
    amount,
    currency,
    status,
    paymentMethod: paymentObj.method ? String(paymentObj.method) : undefined,
    payerName: (paymentObj.card as Record<string, unknown>)?.name
      ? String((paymentObj.card as Record<string, unknown>).name)
      : (linkObj.customer as Record<string, unknown>)?.name
      ? String((linkObj.customer as Record<string, unknown>).name)
      : undefined,
    payerEmail: paymentObj.email ? String(paymentObj.email) : undefined,
    payerPhone: paymentObj.contact ? String(paymentObj.contact) : undefined,
    capturedAt: paymentObj.created_at ? new Date(Number(paymentObj.created_at) * 1000) : undefined,
    rawPayload,
  };
}

/**
 * Formats API errors from Razorpay into actionable JavaScript Error objects.
 */
export function mapRazorpayError(err: unknown, defaultMessage = "Razorpay API error"): Error {
  if (err instanceof Error) {
    return err;
  }

  if (typeof err === "object" && err !== null) {
    const errObj = err as Record<string, unknown>;
    const rzpError = (errObj.error || errObj) as Record<string, unknown>;
    const code = rzpError.code ? `[${rzpError.code}] ` : "";
    const desc = rzpError.description || rzpError.message || defaultMessage;
    const field = rzpError.field ? ` (field: ${rzpError.field})` : "";
    return new Error(`${code}${desc}${field}`);
  }

  return new Error(String(err || defaultMessage));
}
