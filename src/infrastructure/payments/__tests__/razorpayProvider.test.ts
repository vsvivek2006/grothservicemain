import assert from "node:assert";
import crypto from "node:crypto";
import {
  mapRazorpayLinkStatus,
  mapRazorpayPaymentLink,
  mapRazorpayEventType,
  mapRazorpayWebhookPayload,
  mapRazorpayError,
} from "../razorpay/razorpay-mappers";
import { RazorpayProvider } from "../razorpay/razorpay-provider";
import { getPaymentProvider } from "../payment-provider";

console.log("--- RUNNING RAZORPAY PROVIDER & MAPPER TESTS ---");

// Test 1: Link Status Mapping
assert.strictEqual(mapRazorpayLinkStatus("created"), "created");
assert.strictEqual(mapRazorpayLinkStatus("partially_paid"), "partially_paid");
assert.strictEqual(mapRazorpayLinkStatus("paid"), "paid");
assert.strictEqual(mapRazorpayLinkStatus("cancelled"), "cancelled");
assert.strictEqual(mapRazorpayLinkStatus("expired"), "expired");
assert.strictEqual(mapRazorpayLinkStatus("unknown_status"), "created");
console.log("✓ Test 1 Passed: Payment link status mapping");

// Test 2: Raw Payment Link to PaymentLinkResult Mapping
const mockRzpLink = {
  id: "plink_MNOP12345678",
  reference_id: "inv_987654321",
  short_url: "https://rzp.io/i/testlink",
  status: "paid",
  amount: 5310000, // 53,100 INR in paise
  currency: "INR",
};
const mappedLink = mapRazorpayPaymentLink(mockRzpLink);
assert.strictEqual(mappedLink.provider, "razorpay");
assert.strictEqual(mappedLink.providerLinkId, "plink_MNOP12345678");
assert.strictEqual(mappedLink.providerReferenceId, "inv_987654321");
assert.strictEqual(mappedLink.shortUrl, "https://rzp.io/i/testlink");
assert.strictEqual(mappedLink.status, "paid");
assert.strictEqual(mappedLink.amount, 53100); // properly converted to Rupees
assert.strictEqual(mappedLink.currency, "INR");
console.log("✓ Test 2 Passed: Raw payment link response mapped with paise-to-INR conversion");

// Test 3: Webhook Event Type Mapping
assert.strictEqual(mapRazorpayEventType("payment.captured"), "payment.captured");
assert.strictEqual(mapRazorpayEventType("payment.failed"), "payment.failed");
assert.strictEqual(mapRazorpayEventType("payment_link.paid"), "payment_link.paid");
assert.strictEqual(mapRazorpayEventType("payment_link.cancelled"), "payment_link.cancelled");
assert.strictEqual(mapRazorpayEventType("payment_link.expired"), "payment_link.expired");
assert.strictEqual(mapRazorpayEventType("refund.processed"), "refund.processed");
assert.strictEqual(mapRazorpayEventType("unknown.event"), "unknown");
console.log("✓ Test 3 Passed: Webhook event type mapping");

// Test 4: Webhook Payload Normalization
const mockWebhookPayload = {
  event: "payment.captured",
  account_id: "acc_test123",
  created_at: 1773648000,
  payload: {
    payment: {
      entity: {
        id: "pay_test999",
        order_id: "order_test888",
        amount: 2500000, // 25,000 INR in paise
        currency: "INR",
        status: "captured",
        method: "upi",
        email: "payer@example.com",
        contact: "+919999999999",
        created_at: 1773648000,
        payment_link_id: "plink_MNOP12345678",
      },
    },
  },
};
const normalized = mapRazorpayWebhookPayload(mockWebhookPayload);
assert.strictEqual(normalized.provider, "razorpay");
assert.strictEqual(normalized.eventType, "payment.captured");
assert.strictEqual(normalized.providerPaymentId, "pay_test999");
assert.strictEqual(normalized.providerOrderId, "order_test888");
assert.strictEqual(normalized.providerLinkId, "plink_MNOP12345678");
assert.strictEqual(normalized.amount, 25000);
assert.strictEqual(normalized.currency, "INR");
assert.strictEqual(normalized.status, "captured");
assert.strictEqual(normalized.paymentMethod, "upi");
assert.strictEqual(normalized.payerEmail, "payer@example.com");
console.log("✓ Test 4 Passed: Webhook payload normalization");

// Test 5: Error Mapping
const err1 = mapRazorpayError({
  error: {
    code: "BAD_REQUEST_ERROR",
    description: "Amount cannot exceed outstanding balance",
    field: "amount",
  },
});
assert.strictEqual(err1.message, "[BAD_REQUEST_ERROR] Amount cannot exceed outstanding balance (field: amount)");

const err2 = mapRazorpayError(new Error("Network timeout"));
assert.strictEqual(err2.message, "Network timeout");
console.log("✓ Test 5 Passed: Error mapping and formatting");

// Test 6: Webhook HMAC-SHA256 Signature Verification
const testSecret = "secret_webhook_key_xyz_12345";
const providerWithConfig = new RazorpayProvider({
  keyId: "rzp_test_dummy",
  keySecret: "dummy_secret",
  webhookSecret: testSecret,
  baseUrl: "https://api.razorpay.com/v1",
});

const rawWebhookBody = JSON.stringify({
  event: "payment_link.paid",
  account_id: "acc_test123",
  created_at: 1773648000,
  payload: {
    payment_link: {
      entity: {
        id: "plink_test",
        amount: 500000,
        status: "paid",
      },
    },
  },
});

const validSignature = crypto
  .createHmac("sha256", testSecret)
  .update(rawWebhookBody)
  .digest("hex");

async function runAsyncTests() {
  const verifiedValid = await providerWithConfig.verifyWebhook(rawWebhookBody, validSignature);
  assert.strictEqual(verifiedValid.isValid, true, "Valid signature must verify true");
  assert.strictEqual(verifiedValid.eventType, "payment_link.paid");

  const verifiedInvalid = await providerWithConfig.verifyWebhook(rawWebhookBody, "tampered_signature");
  assert.strictEqual(verifiedInvalid.isValid, false, "Invalid signature must verify false");

  const verifiedEmpty = await providerWithConfig.verifyWebhook(rawWebhookBody, "");
  assert.strictEqual(verifiedEmpty.isValid, false, "Empty signature must verify false");
  console.log("✓ Test 6 Passed: Webhook HMAC-SHA256 signature verification");

  // Test 7: Provider Factory
  const provider = getPaymentProvider("razorpay");
  assert.strictEqual(provider.providerName, "razorpay");
  assert.throws(() => getPaymentProvider("stripe"), /Unsupported payment provider: stripe/);
  console.log("✓ Test 7 Passed: Provider factory resolution and error guarding");

  console.log("====================================================");
  console.log("ALL RAZORPAY PROVIDER & MAPPER TESTS PASSED!");
  console.log("====================================================");
}

runAsyncTests().catch((err) => {
  console.error("Async test failed:", err);
  process.exit(1);
});
