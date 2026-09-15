import { describe, it } from "node:test";
import assert from "node:assert/strict";
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
import { MockNotificationProvider } from "../providers/mockNotificationProvider";

describe("Notification Templates & Provider Engine", () => {
  it("renders invoice email with locked brand colors and proper totals", () => {
    const payload = {
      recipientEmail: "client@example.com",
      recipientName: "Acme Corp",
      invoiceNumber: "INV-2026-0001",
      invoiceId: "inv_123",
      grandTotal: 118000,
      amountDue: 59000,
      currency: "INR",
      dueDate: "2026-10-01",
      pdfDownloadUrl: "https://www.growthservice.in/api/billing/invoices/inv_123/pdf",
    };

    const html = renderInvoiceEmailHtml(payload);
    const text = renderInvoiceEmailText(payload);

    // Verify brand color codes
    assert.match(html, /#6A0DAD/i, "HTML must contain primary brand Royal Purple (#6A0DAD)");
    assert.match(html, /#FFD700/i, "HTML must contain secondary brand Vibrant Gold (#FFD700)");

    // Verify critical content
    assert.match(html, /INV-2026-0001/);
    assert.match(html, /Acme Corp/);
    assert.match(text, /INV-2026-0001/);
    assert.match(text, /Download PDF:/);
  });

  it("renders payment link email with active short URL and expiry", () => {
    const payload = {
      recipientEmail: "client@example.com",
      recipientName: "Beta LLC",
      invoiceNumber: "INV-2026-0002",
      amount: 25000,
      currency: "INR",
      paymentUrl: "https://rzp.io/i/testlink123",
      expiresAt: "2026-10-15T00:00:00Z",
    };

    const html = renderPaymentLinkEmailHtml(payload);
    const text = renderPaymentLinkEmailText(payload);

    assert.match(html, /https:\/\/rzp\.io\/i\/testlink123/);
    assert.match(text, /https:\/\/rzp\.io\/i\/testlink123/);
    assert.match(html, /Beta LLC/);
    assert.match(html, /#FFD700/i);
  });

  it("renders payment success confirmation with transaction reference", () => {
    const payload = {
      recipientEmail: "client@example.com",
      recipientName: "Gamma Inc",
      invoiceNumber: "INV-2026-0003",
      amount: 50000,
      currency: "INR",
      paymentId: "pay_test_998877",
      paymentMethod: "upi",
      capturedAt: "2026-09-16T12:00:00Z",
    };

    const html = renderPaymentSuccessEmailHtml(payload);
    const text = renderPaymentSuccessEmailText(payload);

    assert.match(html, /pay_test_998877/);
    assert.match(html, /Gamma Inc/);
    assert.match(text, /pay_test_998877/);
  });

  it("renders payment reminder with overdue warning badge if overdue", () => {
    const overduePayload = {
      recipientEmail: "client@example.com",
      recipientName: "Delta Ltd",
      invoiceNumber: "INV-2026-0004",
      amountDue: 15000,
      currency: "INR",
      dueDate: "2026-09-01",
      daysOverdue: 15,
      paymentUrl: "https://rzp.io/i/reminderlink",
    };

    const html = renderPaymentReminderEmailHtml(overduePayload);
    const text = renderPaymentReminderEmailText(overduePayload);

    assert.match(html, /Overdue Payment Notice/);
    assert.match(html, /15 days past due/);
    assert.match(text, /OVERDUE by 15 days/);
  });

  it("dispatches notifications and maintains history in MockNotificationProvider", async () => {
    const provider = new MockNotificationProvider();
    assert.equal(provider.providerName, "mock");

    // 1. Successful invoice dispatch
    const res1 = await provider.sendInvoice({
      recipientEmail: "test@client.com",
      recipientName: "Tester",
      invoiceNumber: "INV-100",
      invoiceId: "100",
      grandTotal: 1000,
      amountDue: 1000,
      currency: "INR",
      dueDate: "2026-10-01",
    });

    assert.equal(res1.success, true);
    assert.ok(res1.messageId);

    // 2. Reject invalid email
    const res2 = await provider.sendInvoice({
      recipientEmail: "invalid-email",
      recipientName: "Tester",
      invoiceNumber: "INV-100",
      invoiceId: "100",
      grandTotal: 1000,
      amountDue: 1000,
      currency: "INR",
      dueDate: "2026-10-01",
    });

    assert.equal(res2.success, false);
    assert.equal(res2.error, "Invalid recipient email address");

    // 3. Verify history
    const history = provider.getHistory();
    assert.equal(history.length, 1);
    assert.equal(history[0].type, "invoice");
    assert.equal(history[0].recipient, "test@client.com");
  });
});
