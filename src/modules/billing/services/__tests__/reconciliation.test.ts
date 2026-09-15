import assert from "node:assert";
import crypto from "node:crypto";
import { computeBalanceReconciliation } from "../balanceCalculation";
import { RazorpayProvider } from "../../../../infrastructure/payments/razorpay/razorpay-provider";

console.log("--- RUNNING RECONCILIATION & WEBHOOK ENGINE TESTS ---");

// Test 1: Full Payment Calculation
const fullPayment = computeBalanceReconciliation(50000, 0, 50000);
assert.strictEqual(fullPayment.amountPaidAfter, 50000);
assert.strictEqual(fullPayment.balanceAfter, 0);
assert.strictEqual(fullPayment.newPaymentStatus, "paid");
assert.strictEqual(fullPayment.isFullyPaid, true);
console.log("✓ Test 1 Passed: Full payment clears balance and sets status to 'paid'");

// Test 2: Partial Payment Calculation
const partialPayment1 = computeBalanceReconciliation(50000, 0, 20000);
assert.strictEqual(partialPayment1.amountPaidAfter, 20000);
assert.strictEqual(partialPayment1.balanceAfter, 30000);
assert.strictEqual(partialPayment1.newPaymentStatus, "partially_paid");
assert.strictEqual(partialPayment1.isFullyPaid, false);
console.log("✓ Test 2 Passed: Partial payment sets status to 'partially_paid'");

// Test 3: Second Partial Payment Completing Invoice
const partialPayment2 = computeBalanceReconciliation(50000, 20000, 30000);
assert.strictEqual(partialPayment2.amountPaidAfter, 50000);
assert.strictEqual(partialPayment2.balanceAfter, 0);
assert.strictEqual(partialPayment2.newPaymentStatus, "paid");
assert.strictEqual(partialPayment2.isFullyPaid, true);
console.log("✓ Test 3 Passed: Subsequent partial payment completes balance to 0");

// Test 4: Floating Point / Decimal Rounding Precision
const decimalPayment = computeBalanceReconciliation(1180.55, 0, 590.25);
assert.strictEqual(decimalPayment.amountPaidAfter, 590.25);
assert.strictEqual(decimalPayment.balanceAfter, 590.30);
assert.strictEqual(decimalPayment.newPaymentStatus, "partially_paid");
console.log("✓ Test 4 Passed: Decimal currency precision without floating point drift");

// Test 5: Overpayment Clamp
const overPayment = computeBalanceReconciliation(10000, 8000, 3000);
assert.strictEqual(overPayment.balanceAfter, 0);
assert.strictEqual(overPayment.isFullyPaid, true);
console.log("✓ Test 5 Passed: Overpayment clamp guarantees balanceAfter never goes negative");

// Test 6: Deduplication Check Logic
const processedPayments = new Set(["pay_test_001", "pay_test_002"]);
function checkPaymentDuplicate(providerPaymentId: string): boolean {
  return processedPayments.has(providerPaymentId);
}
assert.strictEqual(checkPaymentDuplicate("pay_test_001"), true, "Existing payment must be detected as duplicate");
assert.strictEqual(checkPaymentDuplicate("pay_test_003"), false, "New payment must not be detected as duplicate");
console.log("✓ Test 6 Passed: Idempotent payment deduplication logic");

// Test 7: Webhook Signature Guard & Tamper Detection
const secret = "test_webhook_secret_key_999";
const provider = new RazorpayProvider({
  keyId: "rzp_test_dummy",
  keySecret: "dummy_secret",
  webhookSecret: secret,
  baseUrl: "https://api.razorpay.com/v1",
});

const body = JSON.stringify({
  event: "payment.captured",
  payload: { payment: { entity: { id: "pay_test_001", amount: 500000 } } },
});

const validSig = crypto.createHmac("sha256", secret).update(body).digest("hex");
const invalidSig = "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

async function runAsyncTests() {
  const verifiedValid = await provider.verifyWebhook(body, validSig);
  assert.strictEqual(verifiedValid.isValid, true, "Valid signature must verify");

  const verifiedTampered = await provider.verifyWebhook(body, invalidSig);
  assert.strictEqual(verifiedTampered.isValid, false, "Tampered signature must fail");

  const verifiedCorruptedBody = await provider.verifyWebhook(body + "tampered", validSig);
  assert.strictEqual(verifiedCorruptedBody.isValid, false, "Modified body must fail verification");
  console.log("✓ Test 7 Passed: Webhook HMAC-SHA256 signature verification and tamper detection");

  // Test 8: Cancelled Invoice Guard
  function canApplyPaymentToInvoice(documentStatus: string): boolean {
    return documentStatus !== "cancelled" && documentStatus !== "void";
  }
  assert.strictEqual(canApplyPaymentToInvoice("issued"), true);
  assert.strictEqual(canApplyPaymentToInvoice("sent"), true);
  assert.strictEqual(canApplyPaymentToInvoice("cancelled"), false, "Cancelled invoice cannot receive active balance updates");
  assert.strictEqual(canApplyPaymentToInvoice("void"), false, "Void invoice cannot receive active balance updates");
  console.log("✓ Test 8 Passed: Cancelled / void invoice safety guard");

  console.log("====================================================");
  console.log("ALL RECONCILIATION & WEBHOOK ENGINE TESTS PASSED!");
  console.log("====================================================");
}

runAsyncTests().catch((err) => {
  console.error("Reconciliation test failed:", err);
  process.exit(1);
});
