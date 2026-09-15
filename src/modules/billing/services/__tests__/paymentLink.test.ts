import assert from "node:assert";
import { createPaymentLinkSchema } from "../../schemas/paymentLinkSchemas";

console.log("--- RUNNING PAYMENT LINK VALIDATION & LOGIC TESTS ---");

// Test 1: Valid input passes schema validation
const validData = {
  invoiceId: "c7a3b4c1-8d2e-4b6a-9f1c-3e5a7b9c1d3e",
  amount: 50000,
  description: "Payment for monthly retainer",
  acceptPartial: false,
  expiresInDays: 15,
  reminderEnabled: true,
};
const parsed1 = createPaymentLinkSchema.safeParse(validData);
assert.strictEqual(parsed1.success, true, "Standard valid payment link must pass");
console.log("✓ Test 1 Passed: Valid payment link input parsed successfully");

// Test 2: Invalid non-positive amount is rejected
const invalidAmount = {
  ...validData,
  amount: 0,
};
const parsed2 = createPaymentLinkSchema.safeParse(invalidAmount);
assert.strictEqual(parsed2.success, false, "Zero or negative amount must be rejected");
console.log("✓ Test 2 Passed: Non-positive amount rejected by schema");

// Test 3: Partial payment refinement: minPartialAmount > amount must fail
const invalidPartial = {
  ...validData,
  amount: 10000,
  acceptPartial: true,
  minPartialAmount: 15000, // exceeds total amount!
};
const parsed3 = createPaymentLinkSchema.safeParse(invalidPartial);
assert.strictEqual(parsed3.success, false, "Minimum partial amount exceeding total amount must fail");
console.log("✓ Test 3 Passed: minPartialAmount > amount correctly fails schema refinement");

// Test 4: Valid partial payment passes
const validPartial = {
  ...validData,
  amount: 10000,
  acceptPartial: true,
  minPartialAmount: 2500,
};
const parsed4 = createPaymentLinkSchema.safeParse(validPartial);
assert.strictEqual(parsed4.success, true, "Valid partial payment must pass");
console.log("✓ Test 4 Passed: Valid partial payment configuration accepted");

// Test 5: Expiry days boundary checks (1 to 90)
assert.strictEqual(
  createPaymentLinkSchema.safeParse({ ...validData, expiresInDays: 0 }).success,
  false,
  "0 days expiry must fail"
);
assert.strictEqual(
  createPaymentLinkSchema.safeParse({ ...validData, expiresInDays: 91 }).success,
  false,
  "91 days expiry must fail"
);
assert.strictEqual(
  createPaymentLinkSchema.safeParse({ ...validData, expiresInDays: 90 }).success,
  true,
  "90 days expiry must pass"
);
assert.strictEqual(
  createPaymentLinkSchema.safeParse({ ...validData, expiresInDays: null }).success,
  true,
  "null expiry must pass (no expiry)"
);
console.log("✓ Test 5 Passed: Expiry duration boundary guards (1–90 days or null)");

// Test 6: Financial Invariant Verification Function
function validatePaymentLinkPreconditions(invoice: {
  document_status: string;
  payment_status: string;
  amount_due: number;
}, requestedAmount: number): { allowed: boolean; reason?: string } {
  if (invoice.document_status === "draft") {
    return { allowed: false, reason: "Cannot create payment link for draft invoice" };
  }
  if (invoice.document_status === "cancelled" || invoice.document_status === "void") {
    return { allowed: false, reason: "Cannot create payment link for cancelled invoice" };
  }
  if (invoice.payment_status === "paid" || invoice.amount_due <= 0) {
    return { allowed: false, reason: "Invoice is already fully paid" };
  }
  if (requestedAmount > invoice.amount_due) {
    return { allowed: false, reason: "Amount cannot exceed balance due" };
  }
  return { allowed: true };
}

// Check draft invoice
assert.strictEqual(
  validatePaymentLinkPreconditions({ document_status: "draft", payment_status: "unpaid", amount_due: 50000 }, 50000).allowed,
  false
);

// Check cancelled invoice
assert.strictEqual(
  validatePaymentLinkPreconditions({ document_status: "cancelled", payment_status: "unpaid", amount_due: 50000 }, 50000).allowed,
  false
);

// Check paid invoice
assert.strictEqual(
  validatePaymentLinkPreconditions({ document_status: "issued", payment_status: "paid", amount_due: 0 }, 1000).allowed,
  false
);

// Check amount exceeding balance due
assert.strictEqual(
  validatePaymentLinkPreconditions({ document_status: "issued", payment_status: "unpaid", amount_due: 25000 }, 30000).allowed,
  false
);

// Check valid issued invoice with balance
assert.strictEqual(
  validatePaymentLinkPreconditions({ document_status: "issued", payment_status: "unpaid", amount_due: 50000 }, 50000).allowed,
  true
);
console.log("✓ Test 6 Passed: Financial invariant preconditions (draft, cancelled, paid, amount_due)");

console.log("====================================================");
console.log("ALL PAYMENT LINK VALIDATION TESTS PASSED!");
console.log("====================================================");
