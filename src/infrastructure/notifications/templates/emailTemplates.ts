/**
 * Growth Service — Brand-Aligned Email & Notification Templates
 *
 * Locked Theme Colors:
 * - Royal Purple: #6A0DAD / #7C3AED
 * - Vibrant Gold: #FFD700 / #F59E0B
 * - Deep Charcoal / Dark Navy: #0F172A / #1E1B4B
 * - Clean White / Off-white background
 */

import type {
  InvoiceEmailPayload,
  PaymentLinkEmailPayload,
  PaymentSuccessNotificationPayload,
  PaymentReminderPayload,
} from "../provider-types";

function formatCurrency(val: number, currency = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(val);
}

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return "N/A";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// -----------------------------------------------------------------------------
// 1. INVOICE EMAIL
// -----------------------------------------------------------------------------

export function renderInvoiceEmailHtml(payload: InvoiceEmailPayload): string {
  const formattedTotal = formatCurrency(payload.grandTotal, payload.currency);
  const formattedDue = formatCurrency(payload.amountDue, payload.currency);
  const formattedDueDate = formatDate(payload.dueDate);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice ${payload.invoiceNumber} from Growth Service</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #4c1d95 50%, #1e1b4b 100%); padding: 32px 28px; text-align: left;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
                Growth <span style="color: #FFD700;">Service</span>
              </h1>
              <p style="margin: 8px 0 0 0; color: #cbd5e1; font-size: 13px;">
                Tax Invoice • ${payload.invoiceNumber}
              </p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 32px 28px;">
              <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                Hello ${payload.recipientName},
              </h2>
              <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 14px; line-height: 1.6;">
                Please find attached your invoice <strong style="color: #111827;">${payload.invoiceNumber}</strong>. Here is a summary of your billing details:
              </p>

              <!-- Financial Summary Card -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Invoice Number</span>
                    <div style="font-size: 15px; font-weight: 600; color: #6A0DAD; margin-top: 4px;">${payload.invoiceNumber}</div>
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Due Date</span>
                    <div style="font-size: 15px; font-weight: 600; color: #111827; margin-top: 4px;">${formattedDueDate}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px;">
                    <span style="font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Grand Total</span>
                    <div style="font-size: 18px; font-weight: 700; color: #111827; margin-top: 4px;">${formattedTotal}</div>
                  </td>
                  <td style="padding: 16px 20px;">
                    <span style="font-size: 12px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Balance Due</span>
                    <div style="font-size: 18px; font-weight: 700; color: #b45309; margin-top: 4px;">${formattedDue}</div>
                  </td>
                </tr>
              </table>

              ${
                payload.pdfDownloadUrl
                  ? `
              <div style="text-align: center; margin: 32px 0 16px 0;">
                <a href="${payload.pdfDownloadUrl}" style="background: linear-gradient(135deg, #3b82f6 0%, #6A0DAD 50%, #4338ca 100%); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; display: inline-block;">
                  Download Invoice PDF
                </a>
              </div>
              `
                  : ""
              }

              <p style="margin: 24px 0 0 0; color: #6b7280; font-size: 12px; line-height: 1.5;">
                If you have questions regarding this invoice, reply directly to this email or contact support@growthservice.in.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 28px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Growth Service • Accelerating digital performance • www.growthservice.in
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function renderInvoiceEmailText(payload: InvoiceEmailPayload): string {
  return `
GROWTH SERVICE — TAX INVOICE
======================================
Invoice Number: ${payload.invoiceNumber}
Recipient:      ${payload.recipientName}
Due Date:       ${formatDate(payload.dueDate)}
Grand Total:    ${formatCurrency(payload.grandTotal, payload.currency)}
Balance Due:    ${formatCurrency(payload.amountDue, payload.currency)}

${payload.pdfDownloadUrl ? `Download PDF: ${payload.pdfDownloadUrl}` : ""}

Thank you for choosing Growth Service.
If you have any questions, please reach out to support@growthservice.in.
  `.trim();
}

// -----------------------------------------------------------------------------
// 2. PAYMENT LINK EMAIL
// -----------------------------------------------------------------------------

export function renderPaymentLinkEmailHtml(payload: PaymentLinkEmailPayload): string {
  const formattedAmount = formatCurrency(payload.amount, payload.currency);
  const formattedExpiry = payload.expiresAt ? formatDate(payload.expiresAt) : "Open";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Request for ${payload.invoiceNumber}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #4c1d95 50%, #1e1b4b 100%); padding: 32px 28px; text-align: left;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">
                Growth <span style="color: #FFD700;">Service</span>
              </h1>
              <p style="margin: 8px 0 0 0; color: #cbd5e1; font-size: 13px;">
                Secure Payment Request
              </p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 32px 28px;">
              <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                Hello ${payload.recipientName},
              </h2>
              <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 14px; line-height: 1.6;">
                A secure payment link has been generated for invoice <strong style="color: #111827;">${payload.invoiceNumber}</strong>.
              </p>

              <!-- Payment Box -->
              <div style="background-color: #fdf4ff; border: 1px solid #f0abfc; border-radius: 8px; padding: 24px; text-align: center; margin-bottom: 28px;">
                <span style="font-size: 12px; color: #701a75; text-transform: uppercase; font-weight: 600;">Amount Requested</span>
                <div style="font-size: 32px; font-weight: 800; color: #6A0DAD; margin: 8px 0 16px 0;">
                  ${formattedAmount}
                </div>

                <a href="${payload.paymentUrl}" style="background: linear-gradient(135deg, #2563eb 0%, #6A0DAD 50%, #4338ca 100%); color: #ffffff; text-decoration: none; padding: 14px 36px; border-radius: 6px; font-size: 15px; font-weight: 600; display: inline-block;">
                  Pay Now with UPI / Card / Netbanking
                </a>

                <div style="margin-top: 14px; font-size: 12px; color: #86198f;">
                  Link expires on: <strong>${formattedExpiry}</strong>
                </div>
              </div>

              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px;">
                Direct URL: <a href="${payload.paymentUrl}" style="color: #6A0DAD; word-break: break-all;">${payload.paymentUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 28px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Growth Service • Payments powered by 256-bit encrypted banking standards.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function renderPaymentLinkEmailText(payload: PaymentLinkEmailPayload): string {
  return `
GROWTH SERVICE — PAYMENT REQUEST
======================================
Invoice:    ${payload.invoiceNumber}
Recipient:  ${payload.recipientName}
Amount:     ${formatCurrency(payload.amount, payload.currency)}
Expires:    ${payload.expiresAt ? formatDate(payload.expiresAt) : "Open"}

Pay online now:
${payload.paymentUrl}

Accepts UPI, Netbanking, Debit/Credit Cards.
  `.trim();
}

// -----------------------------------------------------------------------------
// 3. PAYMENT SUCCESS EMAIL
// -----------------------------------------------------------------------------

export function renderPaymentSuccessEmailHtml(payload: PaymentSuccessNotificationPayload): string {
  const formattedAmount = formatCurrency(payload.amount, payload.currency);
  const formattedDate = formatDate(payload.capturedAt);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Received for ${payload.invoiceNumber}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #065f46 50%, #1e1b4b 100%); padding: 32px 28px; text-align: left;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">
                Growth <span style="color: #FFD700;">Service</span>
              </h1>
              <p style="margin: 8px 0 0 0; color: #a7f3d0; font-size: 13px;">
                ✓ Payment Confirmation
              </p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 32px 28px;">
              <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                Thank You, ${payload.recipientName}!
              </h2>
              <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 14px; line-height: 1.6;">
                We have successfully received your payment of <strong style="color: #047857;">${formattedAmount}</strong> for invoice <strong style="color: #111827;">${payload.invoiceNumber}</strong>.
              </p>

              <!-- Payment Details Card -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #bbf7d0;">
                    <span style="font-size: 12px; color: #166534; text-transform: uppercase; font-weight: 600;">Transaction Reference</span>
                    <div style="font-size: 14px; font-weight: 600; color: #14532d; font-family: monospace; margin-top: 4px;">${payload.paymentId}</div>
                  </td>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #bbf7d0;">
                    <span style="font-size: 12px; color: #166534; text-transform: uppercase; font-weight: 600;">Date</span>
                    <div style="font-size: 14px; font-weight: 600; color: #14532d; margin-top: 4px;">${formattedDate}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px;">
                    <span style="font-size: 12px; color: #166534; text-transform: uppercase; font-weight: 600;">Payment Method</span>
                    <div style="font-size: 14px; font-weight: 600; color: #14532d; text-transform: capitalize; margin-top: 4px;">${payload.paymentMethod || "Online"}</div>
                  </td>
                  <td style="padding: 16px 20px;">
                    <span style="font-size: 12px; color: #166534; text-transform: uppercase; font-weight: 600;">Amount Settled</span>
                    <div style="font-size: 18px; font-weight: 700; color: #047857; margin-top: 4px;">${formattedAmount}</div>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; color: #6b7280; font-size: 13px; line-height: 1.5;">
                Your updated invoice record has been updated and reflected on our portal.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 28px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Growth Service • Financial Operations • support@growthservice.in
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function renderPaymentSuccessEmailText(payload: PaymentSuccessNotificationPayload): string {
  return `
GROWTH SERVICE — PAYMENT CONFIRMATION
======================================
Invoice:        ${payload.invoiceNumber}
Amount Paid:    ${formatCurrency(payload.amount, payload.currency)}
Transaction ID: ${payload.paymentId}
Date:           ${formatDate(payload.capturedAt)}
Method:         ${payload.paymentMethod || "Online"}

We have successfully received and processed your payment. Thank you!
  `.trim();
}

// -----------------------------------------------------------------------------
// 4. PAYMENT REMINDER EMAIL
// -----------------------------------------------------------------------------

export function renderPaymentReminderEmailHtml(payload: PaymentReminderPayload): string {
  const formattedDue = formatCurrency(payload.amountDue, payload.currency);
  const formattedDueDate = formatDate(payload.dueDate);
  const isOverdue = (payload.daysOverdue ?? 0) > 0;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Reminder for Invoice ${payload.invoiceNumber}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, ${isOverdue ? "#991b1b" : "#4c1d95"} 50%, #1e1b4b 100%); padding: 32px 28px; text-align: left;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">
                Growth <span style="color: #FFD700;">Service</span>
              </h1>
              <p style="margin: 8px 0 0 0; color: ${isOverdue ? "#fecaca" : "#cbd5e1"}; font-size: 13px;">
                ${isOverdue ? "⚠️ Overdue Payment Notice" : "Friendly Payment Reminder"}
              </p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 32px 28px;">
              <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; font-weight: 600;">
                Hello ${payload.recipientName},
              </h2>
              <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 14px; line-height: 1.6;">
                This is a ${isOverdue ? "notice that invoice" : "courtesy reminder regarding invoice"} <strong style="color: #111827;">${payload.invoiceNumber}</strong>, with an outstanding balance of <strong style="color: ${isOverdue ? "#b91c1c" : "#b45309"};">${formattedDue}</strong>.
              </p>

              <!-- Reminder Summary Card -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: ${isOverdue ? "#fef2f2" : "#fffbeb"}; border: 1px solid ${isOverdue ? "#fecaca" : "#fde68a"}; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <span style="font-size: 12px; color: ${isOverdue ? "#991b1b" : "#92400e"}; text-transform: uppercase; font-weight: 600;">Due Date</span>
                    <div style="font-size: 16px; font-weight: 700; color: ${isOverdue ? "#7f1d1d" : "#78350f"}; margin-top: 4px;">
                      ${formattedDueDate} ${isOverdue ? `(${payload.daysOverdue} days past due)` : ""}
                    </div>
                  </td>
                  <td style="padding: 16px 20px;">
                    <span style="font-size: 12px; color: ${isOverdue ? "#991b1b" : "#92400e"}; text-transform: uppercase; font-weight: 600;">Amount Due</span>
                    <div style="font-size: 20px; font-weight: 800; color: ${isOverdue ? "#991b1b" : "#b45309"}; margin-top: 4px;">${formattedDue}</div>
                  </td>
                </tr>
              </table>

              ${
                payload.paymentUrl
                  ? `
              <div style="text-align: center; margin: 28px 0;">
                <a href="${payload.paymentUrl}" style="background: linear-gradient(135deg, #2563eb 0%, #6A0DAD 50%, #4338ca 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 14px; font-weight: 600; display: inline-block;">
                  Pay Outstanding Balance
                </a>
              </div>
              `
                  : ""
              }

              <p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 1.5;">
                If you have already arranged this payment, please disregard this reminder. For assistance, contact billing@growthservice.in.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 28px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Growth Service • Financial Operations • www.growthservice.in
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function renderPaymentReminderEmailText(payload: PaymentReminderPayload): string {
  const isOverdue = (payload.daysOverdue ?? 0) > 0;
  return `
GROWTH SERVICE — PAYMENT REMINDER
======================================
Invoice:    ${payload.invoiceNumber}
Recipient:  ${payload.recipientName}
Amount Due: ${formatCurrency(payload.amountDue, payload.currency)}
Due Date:   ${formatDate(payload.dueDate)} ${isOverdue ? `(OVERDUE by ${payload.daysOverdue} days)` : ""}

${payload.paymentUrl ? `Pay balance online: ${payload.paymentUrl}` : ""}

Please settle this outstanding balance or reach out to billing@growthservice.in.
  `.trim();
}
