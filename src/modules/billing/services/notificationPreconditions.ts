/**
 * Growth Service — Notification & Communication Precondition Guards
 *
 * Pure validation logic enforcing business invariants for notifications.
 * Kept strictly isolated without server-only imports for testing.
 */

export interface PreconditionCheckResult {
  valid: boolean;
  reason?: string;
  daysOverdue?: number;
}

/**
 * Validate whether an invoice is eligible to be emailed to a client.
 * Invariant: Draft, cancelled, or void invoices must not be emailed.
 */
export function validateInvoiceNotificationEligibility(invoice: {
  document_status: string;
}): PreconditionCheckResult {
  if (invoice.document_status === "draft") {
    return {
      valid: false,
      reason: "Draft invoices cannot be emailed. Please issue the invoice first.",
    };
  }
  if (invoice.document_status === "cancelled" || invoice.document_status === "void") {
    return {
      valid: false,
      reason: `Cannot send a ${invoice.document_status} invoice.`,
    };
  }
  return { valid: true };
}

/**
 * Validate whether a payment link is eligible to be emailed to a client.
 * Invariant: Cancelled or expired payment links must not be distributed.
 */
export function validatePaymentLinkNotificationEligibility(
  link: {
    status: string;
    expires_at: string | null;
  },
  nowDate?: Date
): PreconditionCheckResult {
  if (link.status === "cancelled") {
    return {
      valid: false,
      reason: "Cannot send a cancelled payment link.",
    };
  }
  if (link.status === "expired") {
    return {
      valid: false,
      reason: "Cannot send an expired payment link.",
    };
  }
  if (link.status === "paid") {
    return {
      valid: false,
      reason: "Payment link has already been fully paid.",
    };
  }

  if (link.expires_at) {
    const expiry = new Date(link.expires_at);
    const now = nowDate || new Date();
    if (expiry.getTime() <= now.getTime()) {
      return {
        valid: false,
        reason: "Payment link has expired.",
      };
    }
  }

  return { valid: true };
}

/**
 * Validate whether an invoice is eligible for an automated or manual payment reminder.
 * Invariant: Unpaid or partially paid non-draft/non-cancelled invoices with balance due.
 */
export function validatePaymentReminderEligibility(
  invoice: {
    document_status: string;
    payment_status: string;
    amount_due: number;
    due_date: string | null;
  },
  todayStr?: string
): PreconditionCheckResult {
  if (invoice.document_status === "draft") {
    return {
      valid: false,
      reason: "Cannot send payment reminders for draft invoices.",
    };
  }
  if (invoice.document_status === "cancelled" || invoice.document_status === "void") {
    return {
      valid: false,
      reason: `Cannot send payment reminders for a ${invoice.document_status} invoice.`,
    };
  }
  if (invoice.payment_status === "paid" || Number(invoice.amount_due) <= 0) {
    return {
      valid: false,
      reason: "Invoice is already fully settled. No reminder needed.",
    };
  }

  const today = todayStr || new Date().toISOString().split("T")[0];
  let daysOverdue = 0;

  if (invoice.due_date && invoice.due_date < today) {
    const diffTime = Math.abs(new Date(today).getTime() - new Date(invoice.due_date).getTime());
    daysOverdue = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  return {
    valid: true,
    daysOverdue,
  };
}

/**
 * Validate whether a payment is eligible for a payment success confirmation.
 * Invariant: Must be strictly in 'captured' state.
 */
export function validatePaymentSuccessEligibility(payment: {
  status: string;
}): PreconditionCheckResult {
  if (payment.status !== "captured") {
    return {
      valid: false,
      reason: `Cannot send payment success notification for payment with status '${payment.status}'.`,
    };
  }
  return { valid: true };
}
