import "server-only";
import crypto from "node:crypto";
import type { PaymentProvider } from "../payment-provider";
import type {
  CreatePaymentLinkInput,
  PaymentLinkResult,
  VerifiedWebhook,
  NormalizedPaymentEvent,
} from "../provider-types";
import { getRazorpayConfig, type RazorpayConfig } from "./razorpay-config";
import {
  mapRazorpayPaymentLink,
  mapRazorpayWebhookPayload,
  mapRazorpayError,
} from "./razorpay-mappers";

export class RazorpayProvider implements PaymentProvider {
  readonly providerName = "razorpay";
  private customConfig?: RazorpayConfig;

  constructor(customConfig?: RazorpayConfig) {
    this.customConfig = customConfig;
  }

  private getConfig(): RazorpayConfig {
    return this.customConfig || getRazorpayConfig();
  }

  private getAuthHeader(): string {
    const config = this.getConfig();
    const token = Buffer.from(`${config.keyId}:${config.keySecret}`).toString("base64");
    return `Basic ${token}`;
  }

  /**
   * Create a standard Razorpay Payment Link for an invoice.
   * Converts INR amount into paise (multiplied by 100).
   */
  async createPaymentLink(input: CreatePaymentLinkInput): Promise<PaymentLinkResult> {
    const config = this.getConfig();
    const url = `${config.baseUrl}/payment_links`;

    const amountInPaise = Math.round(input.amount * 100);

    const body: Record<string, unknown> = {
      amount: amountInPaise,
      currency: input.currency || "INR",
      accept_partial: Boolean(input.acceptPartial),
      description: input.description || `Payment for invoice ${input.invoiceNumber}`,
      reference_id: input.invoiceId,
      reminder_enable: Boolean(input.reminderEnabled ?? true),
      notes: {
        invoice_id: input.invoiceId,
        invoice_number: input.invoiceNumber,
        ...(input.metadata || {}),
      },
    };

    if (input.acceptPartial && input.minPartialAmount && input.minPartialAmount > 0) {
      body.first_min_partial_amount = Math.round(input.minPartialAmount * 100);
    }

    if (input.expiresAt) {
      body.expire_by = Math.floor(new Date(input.expiresAt).getTime() / 1000);
    }

    if (input.customer) {
      body.customer = {
        name: input.customer.name || undefined,
        email: input.customer.email || undefined,
        contact: input.customer.phone || undefined,
      };
    }

    if (input.callbackUrl) {
      body.callback_url = input.callbackUrl;
      body.callback_method = "get";
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: this.getAuthHeader(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) {
        throw mapRazorpayError(data, `Failed to create payment link (HTTP ${res.status})`);
      }

      return mapRazorpayPaymentLink(data as Record<string, unknown>);
    } catch (err) {
      throw mapRazorpayError(err, "Network or provider error while creating payment link");
    }
  }

  /**
   * Fetches payment link status and details from Razorpay API.
   */
  async fetchPaymentLink(providerLinkId: string): Promise<PaymentLinkResult> {
    const config = this.getConfig();
    const url = `${config.baseUrl}/payment_links/${encodeURIComponent(providerLinkId)}`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: this.getAuthHeader(),
          Accept: "application/json",
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw mapRazorpayError(data, `Failed to fetch payment link (HTTP ${res.status})`);
      }

      return mapRazorpayPaymentLink(data as Record<string, unknown>);
    } catch (err) {
      throw mapRazorpayError(err, `Failed to retrieve payment link ${providerLinkId}`);
    }
  }

  /**
   * Cancels an active payment link in Razorpay.
   */
  async cancelPaymentLink(providerLinkId: string): Promise<void> {
    const config = this.getConfig();
    const url = `${config.baseUrl}/payment_links/${encodeURIComponent(providerLinkId)}/cancel`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: this.getAuthHeader(),
          Accept: "application/json",
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw mapRazorpayError(data, `Failed to cancel payment link (HTTP ${res.status})`);
      }
    } catch (err) {
      throw mapRazorpayError(err, `Failed to cancel payment link ${providerLinkId}`);
    }
  }

  /**
   * Verifies Razorpay HMAC-SHA256 signature using timing-safe string comparison.
   */
  async verifyWebhook(rawBody: string, signature: string): Promise<VerifiedWebhook> {
    const config = this.getConfig();
    const webhookSecret = config.webhookSecret;

    if (!webhookSecret) {
      throw new Error(
        "RAZORPAY_WEBHOOK_SECRET is not configured on server. Cannot verify webhook signature."
      );
    }

    if (!signature) {
      return {
        isValid: false,
        providerEventId: "",
        eventType: "unknown",
        rawPayload: null,
      };
    }

    try {
      const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(rawBody)
        .digest("hex");

      const expectedBuf = Buffer.from(expectedSignature, "utf8");
      const signatureBuf = Buffer.from(signature, "utf8");

      const isValid =
        expectedBuf.length === signatureBuf.length &&
        crypto.timingSafeEqual(expectedBuf, signatureBuf);

      let parsedPayload: Record<string, unknown> = {};
      try {
        parsedPayload = JSON.parse(rawBody) as Record<string, unknown>;
      } catch {
        // Raw body wasn't JSON
      }

      const eventType = String(parsedPayload.event || "unknown");
      const providerEventId = String(parsedPayload.account_id || "") + ":" + String(parsedPayload.created_at || Date.now());

      return {
        isValid,
        providerEventId,
        eventType,
        rawPayload: parsedPayload,
      };
    } catch {
      return {
        isValid: false,
        providerEventId: "",
        eventType: "unknown",
        rawPayload: null,
      };
    }
  }

  /**
   * Parses and normalizes incoming Razorpay webhook payload.
   */
  parseWebhookEvent(input: unknown): NormalizedPaymentEvent {
    if (typeof input !== "object" || input === null) {
      throw new Error("Invalid webhook event: payload must be a JSON object");
    }

    return mapRazorpayWebhookPayload(input as Record<string, unknown>);
  }
}
