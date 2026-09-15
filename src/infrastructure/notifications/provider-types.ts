/**
 * Growth Service — Notification & Communication Provider Abstraction Types
 *
 * Designed to keep communication providers completely abstracted and replaceable.
 * Supports Email, SMS/WhatsApp (future), and Console/Mock logging without leaking
 * vendor details to the billing domain.
 */

export interface InvoiceEmailPayload {
  recipientEmail: string;
  recipientName: string;
  invoiceNumber: string;
  invoiceId: string;
  grandTotal: number;
  amountDue: number;
  currency: string;
  dueDate: string | null;
  pdfDownloadUrl?: string;
  invoiceViewUrl?: string;
  companyName?: string;
}

export interface PaymentLinkEmailPayload {
  recipientEmail: string;
  recipientName: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  paymentUrl: string;
  expiresAt: string | null;
  description?: string;
}

export interface PaymentSuccessNotificationPayload {
  recipientEmail: string;
  recipientName: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  paymentId: string;
  paymentMethod?: string | null;
  capturedAt: string;
}

export interface PaymentReminderPayload {
  recipientEmail: string;
  recipientName: string;
  invoiceNumber: string;
  amountDue: number;
  currency: string;
  dueDate: string | null;
  paymentUrl?: string | null;
  daysOverdue?: number;
}

export interface NotificationResult {
  success: boolean;
  messageId?: string;
  provider: string;
  error?: string;
  timestamp: string;
}

export interface NotificationProvider {
  readonly providerName: string;
  sendInvoice(payload: InvoiceEmailPayload): Promise<NotificationResult>;
  sendPaymentLink(payload: PaymentLinkEmailPayload): Promise<NotificationResult>;
  sendPaymentSuccess(payload: PaymentSuccessNotificationPayload): Promise<NotificationResult>;
  sendPaymentReminder(payload: PaymentReminderPayload): Promise<NotificationResult>;
}
