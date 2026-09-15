"use server";

import { assertAdminUser } from "@/lib/authorization";
import { actionSuccess, actionError, ActionResult } from "@/lib/actions/result";
import {
  sendInvoiceNotification,
  sendPaymentLinkNotification,
  sendPaymentReminderNotification,
} from "../services/notificationService";

export interface SendInvoiceEmailInput {
  invoiceId: string;
  recipientEmail?: string;
}

export interface SendPaymentLinkEmailInput {
  paymentLinkId: string;
  recipientEmail?: string;
}

export interface SendPaymentReminderEmailInput {
  invoiceId: string;
  recipientEmail?: string;
}

/**
 * Server action to email an invoice PDF to the client.
 */
export async function sendInvoiceEmailAction(
  input: SendInvoiceEmailInput
): Promise<ActionResult<{ messageId?: string; recipient: string }>> {
  try {
    const adminUser = await assertAdminUser();

    if (!input.invoiceId) {
      return actionError("Invoice ID is required");
    }

    const res = await sendInvoiceNotification(input.invoiceId, {
      actorUserId: adminUser.id,
      recipientEmail: input.recipientEmail,
    });

    if (!res.success) {
      return actionError(res.error || "Failed to send invoice email");
    }

    return actionSuccess({
      messageId: res.messageId,
      recipient: input.recipientEmail || "client",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error sending invoice email";
    return actionError(message);
  }
}

/**
 * Server action to email a payment link to the client.
 */
export async function sendPaymentLinkEmailAction(
  input: SendPaymentLinkEmailInput
): Promise<ActionResult<{ messageId?: string; recipient: string }>> {
  try {
    const adminUser = await assertAdminUser();

    if (!input.paymentLinkId) {
      return actionError("Payment Link ID is required");
    }

    const res = await sendPaymentLinkNotification(input.paymentLinkId, {
      actorUserId: adminUser.id,
      recipientEmail: input.recipientEmail,
    });

    if (!res.success) {
      return actionError(res.error || "Failed to send payment link email");
    }

    return actionSuccess({
      messageId: res.messageId,
      recipient: input.recipientEmail || "client",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error sending payment link email";
    return actionError(message);
  }
}

/**
 * Server action to send a payment reminder to the client.
 */
export async function sendPaymentReminderEmailAction(
  input: SendPaymentReminderEmailInput
): Promise<ActionResult<{ messageId?: string; recipient: string }>> {
  try {
    const adminUser = await assertAdminUser();

    if (!input.invoiceId) {
      return actionError("Invoice ID is required");
    }

    const res = await sendPaymentReminderNotification(input.invoiceId, {
      actorUserId: adminUser.id,
      recipientEmail: input.recipientEmail,
    });

    if (!res.success) {
      return actionError(res.error || "Failed to send payment reminder");
    }

    return actionSuccess({
      messageId: res.messageId,
      recipient: input.recipientEmail || "client",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error sending payment reminder";
    return actionError(message);
  }
}
