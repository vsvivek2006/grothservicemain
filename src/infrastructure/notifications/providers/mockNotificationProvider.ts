/**
 * Growth Service — Mock & Console Notification Provider
 *
 * Implements NotificationProvider interface with structured logging and in-memory
 * inspection for automated tests and development environments.
 */

import type {
  NotificationProvider,
  InvoiceEmailPayload,
  PaymentLinkEmailPayload,
  PaymentSuccessNotificationPayload,
  PaymentReminderPayload,
  NotificationResult,
} from "../provider-types";
import {
  renderInvoiceEmailHtml,
  renderInvoiceEmailText,
  renderPaymentLinkEmailHtml,
  renderPaymentLinkEmailText,
  renderPaymentSuccessEmailHtml,
  renderPaymentSuccessEmailText,
  renderPaymentReminderEmailHtml,
  renderPaymentReminderEmailText,
} from "../templates/emailTemplates";

export interface SentNotificationRecord {
  type: "invoice" | "payment_link" | "payment_success" | "payment_reminder";
  recipient: string;
  subject: string;
  html: string;
  text: string;
  payload: unknown;
  timestamp: string;
}

export class MockNotificationProvider implements NotificationProvider {
  public readonly providerName = "mock";
  private sentHistory: SentNotificationRecord[] = [];

  public getHistory(): SentNotificationRecord[] {
    return [...this.sentHistory];
  }

  public clearHistory(): void {
    this.sentHistory = [];
  }

  public getLastSent(): SentNotificationRecord | undefined {
    return this.sentHistory[this.sentHistory.length - 1];
  }

  public async sendInvoice(payload: InvoiceEmailPayload): Promise<NotificationResult> {
    if (!payload.recipientEmail || !payload.recipientEmail.includes("@")) {
      return {
        success: false,
        provider: this.providerName,
        error: "Invalid recipient email address",
        timestamp: new Date().toISOString(),
      };
    }

    const html = renderInvoiceEmailHtml(payload);
    const text = renderInvoiceEmailText(payload);
    const messageId = `mock_inv_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    this.sentHistory.push({
      type: "invoice",
      recipient: payload.recipientEmail,
      subject: `Invoice ${payload.invoiceNumber} from Growth Service`,
      html,
      text,
      payload,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      messageId,
      provider: this.providerName,
      timestamp: new Date().toISOString(),
    };
  }

  public async sendPaymentLink(payload: PaymentLinkEmailPayload): Promise<NotificationResult> {
    if (!payload.recipientEmail || !payload.recipientEmail.includes("@")) {
      return {
        success: false,
        provider: this.providerName,
        error: "Invalid recipient email address",
        timestamp: new Date().toISOString(),
      };
    }

    const html = renderPaymentLinkEmailHtml(payload);
    const text = renderPaymentLinkEmailText(payload);
    const messageId = `mock_pl_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    this.sentHistory.push({
      type: "payment_link",
      recipient: payload.recipientEmail,
      subject: `Payment Request for Invoice ${payload.invoiceNumber}`,
      html,
      text,
      payload,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      messageId,
      provider: this.providerName,
      timestamp: new Date().toISOString(),
    };
  }

  public async sendPaymentSuccess(
    payload: PaymentSuccessNotificationPayload
  ): Promise<NotificationResult> {
    if (!payload.recipientEmail || !payload.recipientEmail.includes("@")) {
      return {
        success: false,
        provider: this.providerName,
        error: "Invalid recipient email address",
        timestamp: new Date().toISOString(),
      };
    }

    const html = renderPaymentSuccessEmailHtml(payload);
    const text = renderPaymentSuccessEmailText(payload);
    const messageId = `mock_ps_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    this.sentHistory.push({
      type: "payment_success",
      recipient: payload.recipientEmail,
      subject: `Payment Received for Invoice ${payload.invoiceNumber}`,
      html,
      text,
      payload,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      messageId,
      provider: this.providerName,
      timestamp: new Date().toISOString(),
    };
  }

  public async sendPaymentReminder(payload: PaymentReminderPayload): Promise<NotificationResult> {
    if (!payload.recipientEmail || !payload.recipientEmail.includes("@")) {
      return {
        success: false,
        provider: this.providerName,
        error: "Invalid recipient email address",
        timestamp: new Date().toISOString(),
      };
    }

    const html = renderPaymentReminderEmailHtml(payload);
    const text = renderPaymentReminderEmailText(payload);
    const messageId = `mock_pr_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    this.sentHistory.push({
      type: "payment_reminder",
      recipient: payload.recipientEmail,
      subject: `Payment Reminder: Invoice ${payload.invoiceNumber}`,
      html,
      text,
      payload,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      messageId,
      provider: this.providerName,
      timestamp: new Date().toISOString(),
    };
  }
}
