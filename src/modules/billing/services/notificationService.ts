import "server-only";
import { createAdminClient } from "@/lib/supabase/server";
import { logAuditEvent } from "@/lib/audit";
import { getNotificationProvider } from "@/infrastructure/notifications/notification-provider";
import type { NotificationResult } from "@/infrastructure/notifications/provider-types";
import {
  validateInvoiceNotificationEligibility,
  validatePaymentLinkNotificationEligibility,
  validatePaymentReminderEligibility,
  validatePaymentSuccessEligibility,
} from "./notificationPreconditions";

export interface SendNotificationOptions {
  actorUserId?: string;
  recipientEmail?: string;
  recipientName?: string;
}

/**
 * Send an authoritative invoice notification with a PDF download link to the client.
 */
export async function sendInvoiceNotification(
  invoiceId: string,
  options: SendNotificationOptions = {}
): Promise<NotificationResult> {
  const supabase = createAdminClient();

  // 1. Fetch invoice with client and billing profile
  const { data: invoice, error } = await supabase
    .from("invoices")
    .select(`
      *,
      client:clients(id, company_name, contact_name, email),
      billing_profile:billing_profiles(billing_email, display_name)
    `)
    .eq("id", invoiceId)
    .maybeSingle();

  if (error || !invoice) {
    return {
      success: false,
      provider: "system",
      error: "Invoice not found",
      timestamp: new Date().toISOString(),
    };
  }

  // 2. Enforce invariant eligibility
  const check = validateInvoiceNotificationEligibility(invoice);
  if (!check.valid) {
    return {
      success: false,
      provider: "system",
      error: check.reason,
      timestamp: new Date().toISOString(),
    };
  }

  // 3. Resolve recipient
  const targetEmail =
    options.recipientEmail ||
    invoice.billing_profile?.billing_email ||
    invoice.client?.email;

  if (!targetEmail) {
    return {
      success: false,
      provider: "system",
      error: "No email address found for this client. Please specify a recipient email.",
      timestamp: new Date().toISOString(),
    };
  }

  const targetName =
    options.recipientName ||
    invoice.client?.contact_name ||
    invoice.client?.company_name ||
    "Valued Client";

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.growthservice.in";
  const pdfDownloadUrl = `${baseUrl}/api/billing/invoices/${invoice.id}/pdf`;

  // 4. Dispatch via abstracted provider
  const provider = getNotificationProvider();
  const result = await provider.sendInvoice({
    recipientEmail: targetEmail,
    recipientName: targetName,
    invoiceNumber: invoice.invoice_number,
    invoiceId: invoice.id,
    grandTotal: Number(invoice.grand_total),
    amountDue: Number(invoice.amount_due),
    currency: invoice.currency || "INR",
    dueDate: invoice.due_date,
    pdfDownloadUrl,
    companyName: invoice.client?.company_name,
  });

  // 5. Audit log
  if (result.success) {
    await logAuditEvent({
      actorUserId: options.actorUserId || "system",
      action: "NOTIFICATION_SENT",
      entityType: "invoice",
      entityId: invoice.id,
      metadata: {
        type: "invoice_email",
        recipient: targetEmail,
        provider: result.provider,
        messageId: result.messageId,
      },
    });
  }

  return result;
}

/**
 * Send an authoritative payment link notification to the client.
 */
export async function sendPaymentLinkNotification(
  paymentLinkId: string,
  options: SendNotificationOptions = {}
): Promise<NotificationResult> {
  const supabase = createAdminClient();

  // 1. Fetch payment link with invoice and client
  const { data: link, error } = await supabase
    .from("payment_links")
    .select(`
      *,
      invoice:invoices(id, invoice_number, currency),
      client:clients(id, company_name, contact_name, email)
    `)
    .eq("id", paymentLinkId)
    .maybeSingle();

  if (error || !link) {
    return {
      success: false,
      provider: "system",
      error: "Payment link not found",
      timestamp: new Date().toISOString(),
    };
  }

  // 2. Validate eligibility
  const check = validatePaymentLinkNotificationEligibility(link);
  if (!check.valid) {
    return {
      success: false,
      provider: "system",
      error: check.reason,
      timestamp: new Date().toISOString(),
    };
  }

  // 3. Resolve recipient
  const targetEmail =
    options.recipientEmail ||
    link.customer_email ||
    link.client?.email;

  if (!targetEmail) {
    return {
      success: false,
      provider: "system",
      error: "No recipient email address available for this payment link.",
      timestamp: new Date().toISOString(),
    };
  }

  const targetName =
    options.recipientName ||
    link.customer_name ||
    link.client?.contact_name ||
    link.client?.company_name ||
    "Valued Client";

  // 4. Dispatch via provider
  const provider = getNotificationProvider();
  const result = await provider.sendPaymentLink({
    recipientEmail: targetEmail,
    recipientName: targetName,
    invoiceNumber: link.invoice?.invoice_number || "Invoice",
    amount: Number(link.amount),
    currency: link.currency || "INR",
    paymentUrl: link.short_url,
    expiresAt: link.expires_at,
    description: link.description || undefined,
  });

  // 5. Audit log
  if (result.success) {
    await logAuditEvent({
      actorUserId: options.actorUserId || "system",
      action: "NOTIFICATION_SENT",
      entityType: "payment_link",
      entityId: link.id,
      metadata: {
        type: "payment_link_email",
        recipient: targetEmail,
        provider: result.provider,
        messageId: result.messageId,
      },
    });
  }

  return result;
}

/**
 * Send a payment reminder notification for an unsettled invoice.
 */
export async function sendPaymentReminderNotification(
  invoiceId: string,
  options: SendNotificationOptions = {}
): Promise<NotificationResult> {
  const supabase = createAdminClient();

  // 1. Fetch invoice, client, and any active payment link
  const { data: invoice, error } = await supabase
    .from("invoices")
    .select(`
      *,
      client:clients(id, company_name, contact_name, email),
      billing_profile:billing_profiles(billing_email),
      payment_links:payment_links(id, status, short_url, expires_at)
    `)
    .eq("id", invoiceId)
    .maybeSingle();

  if (error || !invoice) {
    return {
      success: false,
      provider: "system",
      error: "Invoice not found",
      timestamp: new Date().toISOString(),
    };
  }

  // 2. Validate reminder eligibility
  const check = validatePaymentReminderEligibility(invoice);
  if (!check.valid) {
    return {
      success: false,
      provider: "system",
      error: check.reason,
      timestamp: new Date().toISOString(),
    };
  }

  // 3. Resolve recipient
  const targetEmail =
    options.recipientEmail ||
    invoice.billing_profile?.billing_email ||
    invoice.client?.email;

  if (!targetEmail) {
    return {
      success: false,
      provider: "system",
      error: "No email address found for this client.",
      timestamp: new Date().toISOString(),
    };
  }

  const targetName =
    options.recipientName ||
    invoice.client?.contact_name ||
    invoice.client?.company_name ||
    "Valued Client";

  // Find active payment link (if available)
  const activeLink = Array.isArray(invoice.payment_links)
    ? invoice.payment_links.find(
        (pl: { status: string }) => pl.status === "created" || pl.status === "partially_paid"
      )
    : null;

  // 4. Dispatch reminder
  const provider = getNotificationProvider();
  const result = await provider.sendPaymentReminder({
    recipientEmail: targetEmail,
    recipientName: targetName,
    invoiceNumber: invoice.invoice_number,
    amountDue: Number(invoice.amount_due),
    currency: invoice.currency || "INR",
    dueDate: invoice.due_date,
    paymentUrl: activeLink?.short_url || undefined,
    daysOverdue: check.daysOverdue,
  });

  // 5. Audit log
  if (result.success) {
    await logAuditEvent({
      actorUserId: options.actorUserId || "system",
      action: "PAYMENT_REMINDER_SENT",
      entityType: "invoice",
      entityId: invoice.id,
      metadata: {
        recipient: targetEmail,
        daysOverdue: check.daysOverdue,
        provider: result.provider,
        messageId: result.messageId,
      },
    });
  }

  return result;
}

/**
 * Send an authoritative payment success confirmation to the client.
 */
export async function sendPaymentSuccessNotification(
  paymentId: string
): Promise<NotificationResult> {
  const supabase = createAdminClient();

  // 1. Fetch payment with invoice and client
  const { data: payment, error } = await supabase
    .from("payments")
    .select(`
      *,
      invoice:invoices(
        id,
        invoice_number,
        currency,
        client:clients(company_name, contact_name, email)
      )
    `)
    .eq("id", paymentId)
    .maybeSingle();

  if (error || !payment) {
    return {
      success: false,
      provider: "system",
      error: "Payment record not found",
      timestamp: new Date().toISOString(),
    };
  }

  // 2. Validate eligibility
  const check = validatePaymentSuccessEligibility(payment);
  if (!check.valid) {
    return {
      success: false,
      provider: "system",
      error: check.reason,
      timestamp: new Date().toISOString(),
    };
  }

  // 3. Resolve recipient
  const targetEmail =
    payment.payer_email ||
    payment.invoice?.client?.email;

  if (!targetEmail) {
    // If no email available, return gracefully without failure
    return {
      success: true,
      provider: "skipped",
      error: "No email address found for payment confirmation recipient",
      timestamp: new Date().toISOString(),
    };
  }

  const targetName =
    payment.payer_name ||
    payment.invoice?.client?.contact_name ||
    payment.invoice?.client?.company_name ||
    "Valued Client";

  // 4. Dispatch confirmation
  const provider = getNotificationProvider();
  const result = await provider.sendPaymentSuccess({
    recipientEmail: targetEmail,
    recipientName: targetName,
    invoiceNumber: payment.invoice?.invoice_number || "Invoice",
    amount: Number(payment.amount),
    currency: payment.currency || "INR",
    paymentId: payment.provider_payment_id || payment.id,
    paymentMethod: payment.payment_method,
    capturedAt: payment.captured_at || payment.created_at,
  });

  // 5. Audit log
  if (result.success && result.provider !== "skipped") {
    await logAuditEvent({
      actorUserId: "system",
      action: "NOTIFICATION_SENT",
      entityType: "payment",
      entityId: payment.id,
      metadata: {
        type: "payment_success_email",
        recipient: targetEmail,
        provider: result.provider,
        messageId: result.messageId,
      },
    });
  }

  return result;
}
