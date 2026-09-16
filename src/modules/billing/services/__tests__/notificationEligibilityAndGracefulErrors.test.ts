import assert from "node:assert";
import test from "node:test";
import {
  validateInvoiceNotificationEligibility,
  validatePaymentReminderEligibility,
} from "../../services/notificationPreconditions";

test("Invoice Print, Download & Graceful Error Handling Logic", async (t) => {
  await t.test("enforces precondition that draft invoices cannot be emailed", () => {
    const draftInvoice = { document_status: "draft" };
    const res = validateInvoiceNotificationEligibility(draftInvoice);
    assert.strictEqual(res.valid, false);
    assert.ok(res.reason?.includes("Draft invoices cannot be emailed"));
  });

  await t.test("enforces precondition that cancelled invoices cannot be emailed", () => {
    const cancelledInvoice = { document_status: "cancelled" };
    const res = validateInvoiceNotificationEligibility(cancelledInvoice);
    assert.strictEqual(res.valid, false);
    assert.ok(res.reason?.includes("Cannot send a cancelled invoice"));
  });

  await t.test("allows officially issued invoices to be emailed", () => {
    const issuedInvoice = { document_status: "issued" };
    const res = validateInvoiceNotificationEligibility(issuedInvoice);
    assert.strictEqual(res.valid, true);
  });

  await t.test("enforces that payment reminders cannot be sent for fully paid invoices", () => {
    const paidInvoice = {
      document_status: "issued",
      payment_status: "paid",
      amount_due: 0,
      due_date: "2026-09-01",
    };
    const res = validatePaymentReminderEligibility(paidInvoice);
    assert.strictEqual(res.valid, false);
    assert.ok(res.reason?.includes("already fully settled"));
  });

  await t.test("allows payment reminders for unpaid issued invoices with balance due", () => {
    const unpaidInvoice = {
      document_status: "issued",
      payment_status: "unpaid",
      amount_due: 53100,
      due_date: "2026-09-01",
    };
    const res = validatePaymentReminderEligibility(unpaidInvoice, "2026-09-16");
    assert.strictEqual(res.valid, true);
    assert.strictEqual(res.daysOverdue, 15);
  });
});
