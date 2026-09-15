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

import { RazorpayProvider } from "./razorpay/razorpay-provider";

let cachedRazorpayProvider: RazorpayProvider | null = null;

/**
 * Payment Provider Registry / Factory
 * Defaults to 'razorpay' or PAYMENT_PROVIDER environment variable.
 */
export function getPaymentProvider(providerName?: string): PaymentProvider {
  const target = (providerName || process.env.PAYMENT_PROVIDER || "razorpay").toLowerCase();

  switch (target) {
    case "razorpay":
      if (!cachedRazorpayProvider) {
        cachedRazorpayProvider = new RazorpayProvider();
      }
      return cachedRazorpayProvider;
    default:
      throw new Error(
        `Unsupported payment provider: ${target}. Supported providers: razorpay.`
      );
  }
}
