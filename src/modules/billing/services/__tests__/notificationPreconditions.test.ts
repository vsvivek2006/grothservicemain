import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  validateInvoiceNotificationEligibility,
  validatePaymentLinkNotificationEligibility,
  validatePaymentReminderEligibility,
  validatePaymentSuccessEligibility,
} from "../notificationPreconditions";

describe("Notification Preconditions & Invariants", () => {
  it("enforces invoice eligibility: blocks draft, cancelled, void invoices", () => {
    assert.equal(
      validateInvoiceNotificationEligibility({ document_status: "draft" }).valid,
      false
    );
    assert.equal(
      validateInvoiceNotificationEligibility({ document_status: "cancelled" }).valid,
      false
    );
    assert.equal(
      validateInvoiceNotificationEligibility({ document_status: "void" }).valid,
      false
    );
    assert.equal(
      validateInvoiceNotificationEligibility({ document_status: "issued" }).valid,
      true
    );
    assert.equal(
      validateInvoiceNotificationEligibility({ document_status: "sent" }).valid,
      true
    );
  });

  it("enforces payment link eligibility: blocks cancelled, expired, or past-due links", () => {
    const futureDate = new Date(Date.now() + 86400000).toISOString();
    const pastDate = new Date(Date.now() - 86400000).toISOString();

    assert.equal(
      validatePaymentLinkNotificationEligibility({
        status: "cancelled",
        expires_at: futureDate,
      }).valid,
      false
    );

    assert.equal(
      validatePaymentLinkNotificationEligibility({
        status: "expired",
        expires_at: futureDate,
      }).valid,
      false
    );

    assert.equal(
      validatePaymentLinkNotificationEligibility({
        status: "paid",
        expires_at: futureDate,
      }).valid,
      false
    );

    assert.equal(
      validatePaymentLinkNotificationEligibility({
        status: "created",
        expires_at: pastDate,
      }).valid,
      false
    );

    assert.equal(
      validatePaymentLinkNotificationEligibility({
        status: "created",
        expires_at: futureDate,
      }).valid,
      true
    );
  });

  it("enforces payment reminder eligibility and calculates days overdue", () => {
    const today = "2026-09-16";

    // Draft -> invalid
    assert.equal(
      validatePaymentReminderEligibility(
        {
          document_status: "draft",
          payment_status: "unpaid",
          amount_due: 1000,
          due_date: "2026-09-20",
        },
        today
      ).valid,
      false
    );

    // Paid -> invalid
    assert.equal(
      validatePaymentReminderEligibility(
        {
          document_status: "issued",
          payment_status: "paid",
          amount_due: 0,
          due_date: "2026-09-10",
        },
        today
      ).valid,
      false
    );

    // Future due date -> valid, 0 days overdue
    const resFuture = validatePaymentReminderEligibility(
      {
        document_status: "issued",
        payment_status: "unpaid",
        amount_due: 5000,
        due_date: "2026-09-25",
      },
      today
    );
    assert.equal(resFuture.valid, true);
    assert.equal(resFuture.daysOverdue, 0);

    // Past due date (2026-09-06 vs 2026-09-16 = 10 days overdue)
    const resPast = validatePaymentReminderEligibility(
      {
        document_status: "issued",
        payment_status: "partially_paid",
        amount_due: 3000,
        due_date: "2026-09-06",
      },
      today
    );
    assert.equal(resPast.valid, true);
    assert.equal(resPast.daysOverdue, 10);
  });

  it("enforces payment success eligibility: only captured payments", () => {
    assert.equal(validatePaymentSuccessEligibility({ status: "pending" }).valid, false);
    assert.equal(validatePaymentSuccessEligibility({ status: "failed" }).valid, false);
    assert.equal(validatePaymentSuccessEligibility({ status: "authorized" }).valid, false);
    assert.equal(validatePaymentSuccessEligibility({ status: "captured" }).valid, true);
  });
});
