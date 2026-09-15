import "server-only";
import {
  CreatePaymentLinkInput,
  PaymentLinkResult,
  VerifiedWebhook,
  NormalizedPaymentEvent,
} from "./provider-types";

/**
 * Payment Provider Abstraction
 * Billing services and invoice workflows code strictly against this interface.
 * Neither invoices nor payments ever import Razorpay SDK directly.
 */
export interface PaymentProvider {
  readonly providerName: string;

  createPaymentLink(
    input: CreatePaymentLinkInput
  ): Promise<PaymentLinkResult>;

  fetchPaymentLink(
    providerLinkId: string
  ): Promise<PaymentLinkResult>;

  cancelPaymentLink(
    providerLinkId: string
  ): Promise<void>;

  verifyWebhook(
    rawBody: string,
    signature: string
  ): Promise<VerifiedWebhook>;

  parseWebhookEvent(
    input: unknown
  ): NormalizedPaymentEvent;
}

/**
 * Payment Provider Registry / Factory
 * Defaults to 'razorpay'.
 * Concrete provider adapters will be mounted in Phase 6.
 */
export function getPaymentProvider(providerName = "razorpay"): PaymentProvider {
  switch (providerName.toLowerCase()) {
    case "razorpay":
      // Provider implementation will be injected in Phase 6
      throw new Error(
        "RazorpayProvider adapter not yet registered. Scheduled for Phase 6."
      );
    default:
      throw new Error(
        `Unsupported payment provider: ${providerName}.`
      );
  }
}
