/**
 * Growth Service — Normalized Payment Provider Types & Contracts
 * Completely decoupled from Razorpay or any specific provider.
 */

export interface PaymentCustomerInfo {
  name?: string;
  email?: string;
  phone?: string;
}

export interface CreatePaymentLinkInput {
  invoiceId: string;
  invoiceNumber: string;
  amount: number; // in INR rupees (e.g. 1500.00)
  currency: string; // e.g. "INR"
  description?: string;
  customer?: PaymentCustomerInfo;
  acceptPartial?: boolean;
  minPartialAmount?: number;
  expiresAt?: Date | null;
  reminderEnabled?: boolean;
  callbackUrl?: string;
  metadata?: Record<string, unknown>;
}

export type PaymentLinkStatus =
  | "created"
  | "partially_paid"
  | "paid"
  | "cancelled"
  | "expired";

export interface PaymentLinkResult {
  provider: string;
  providerLinkId: string;
  providerReferenceId?: string;
  shortUrl: string;
  status: PaymentLinkStatus;
  amount: number;
  currency: string;
  rawResponse?: unknown;
}

export interface VerifiedWebhook {
  isValid: boolean;
  providerEventId: string;
  eventType: string;
  rawPayload: unknown;
}

export type NormalizedPaymentEventType =
  | "payment.captured"
  | "payment.failed"
  | "payment_link.paid"
  | "payment_link.cancelled"
  | "payment_link.expired"
  | "refund.processed"
  | "unknown";

export interface NormalizedPaymentEvent {
  provider: string;
  providerEventId: string;
  eventType: NormalizedPaymentEventType;
  providerPaymentId?: string;
  providerOrderId?: string;
  providerLinkId?: string;
  amount: number;
  currency: string;
  status: "pending" | "authorized" | "captured" | "failed" | "refunded";
  paymentMethod?: string;
  payerName?: string;
  payerEmail?: string;
  payerPhone?: string;
  capturedAt?: Date;
  rawPayload: unknown;
}
