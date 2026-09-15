import assert from "node:assert";
import {
  calculateLineItem,
  calculateInvoiceTotals,
  isInterstateTransaction,
  calculateDueDate,
  round2,
} from "../taxCalculation";
import { getFinancialYear } from "../sequenceService";

console.log("--- RUNNING INVOICE CALCULATION ENGINE TESTS ---");

// Test 1: Inter-state vs Intra-state detection
assert.strictEqual(isInterstateTransaction("08", "08"), false, "Same state must be intra-state");
assert.strictEqual(isInterstateTransaction("08", "07"), true, "Different state must be inter-state");
assert.strictEqual(isInterstateTransaction("08", "27"), true, "Rajasthan to Maharashtra must be inter-state");
assert.strictEqual(isInterstateTransaction("08", null), false, "Missing state defaults to intra-state");
console.log("✓ Test 1 Passed: Inter-state / Intra-state transaction detection");

// Test 2: Intra-state Line Item Calculation (CGST + SGST split 50/50)
const intraLine = calculateLineItem(
  {
    description: "Enterprise SEO Package",
    quantity: 1,
    unitPrice: 50000,
    taxRate: 18,
  },
  false // intra-state
);
assert.strictEqual(intraLine.taxableAmount, 50000);
assert.strictEqual(intraLine.cgstRate, 9);
assert.strictEqual(intraLine.cgstAmount, 4500);
assert.strictEqual(intraLine.sgstRate, 9);
assert.strictEqual(intraLine.sgstAmount, 4500);
assert.strictEqual(intraLine.igstRate, 0);
assert.strictEqual(intraLine.igstAmount, 0);
assert.strictEqual(intraLine.lineTotal, 59000);
console.log("✓ Test 2 Passed: Intra-state 18% splits to 9% CGST + 9% SGST (59,000 INR)");

// Test 3: Inter-state Line Item Calculation (100% IGST)
const interLine = calculateLineItem(
  {
    description: "Full Stack Web Development",
    quantity: 2,
    unitPrice: 75000,
    taxRate: 18,
  },
  true // inter-state
);
assert.strictEqual(interLine.lineSubtotal, 150000);
assert.strictEqual(interLine.taxableAmount, 150000);
assert.strictEqual(interLine.igstRate, 18);
assert.strictEqual(interLine.igstAmount, 27000);
assert.strictEqual(interLine.cgstAmount, 0);
assert.strictEqual(interLine.sgstAmount, 0);
assert.strictEqual(interLine.lineTotal, 177000);
console.log("✓ Test 3 Passed: Inter-state 18% computes full 27,000 INR IGST (177,000 INR)");

// Test 4: Line Item with Percentage Discount
const discPctLine = calculateLineItem(
  {
    description: "Content Marketing Retainer",
    quantity: 1,
    unitPrice: 20000,
    discountType: "percentage",
    discountValue: 10, // 10% off
    taxRate: 18,
  },
  true
);
assert.strictEqual(discPctLine.lineSubtotal, 20000);
assert.strictEqual(discPctLine.discountAmount, 2000);
assert.strictEqual(discPctLine.taxableAmount, 18000);
assert.strictEqual(discPctLine.igstAmount, 3240); // 18% of 18,000
assert.strictEqual(discPctLine.lineTotal, 21240);
console.log("✓ Test 4 Passed: 10% discount correctly reduces taxable base before tax calculation");

// Test 5: Full Invoice Totals & Round-off
const invoiceTotals = calculateInvoiceTotals(
  [
    {
      description: "Service A",
      quantity: 1,
      unitPrice: 100.5,
      taxRate: 18,
    },
    {
      description: "Service B",
      quantity: 1,
      unitPrice: 200.3,
      taxRate: 18,
    },
  ],
  "08", // Rajasthan seller
  "08", // Rajasthan buyer -> intra-state
  0
);
assert.strictEqual(invoiceTotals.subtotal, 300.8);
assert.strictEqual(invoiceTotals.taxableTotal, 300.8);
assert.strictEqual(invoiceTotals.cgstTotal, 27.08); // 9.05 + 18.03
assert.strictEqual(invoiceTotals.sgstTotal, 27.08); // 9.05 + 18.03
assert.strictEqual(invoiceTotals.taxTotal, 54.16);
assert.strictEqual(invoiceTotals.grandTotal, 355); // 300.8 + 54.16 = 354.96 rounded to 355
assert.strictEqual(invoiceTotals.roundOff, 0.04);
assert.strictEqual(invoiceTotals.amountDue, 355);
console.log("✓ Test 5 Passed: Multi-item totals, GST split, and round-off calculation");

// Test 6: Due Date Calculation
const dueDate = calculateDueDate("2026-09-15", 30);
assert.strictEqual(dueDate, "2026-10-15");
const dueToday = calculateDueDate("2026-09-15", 0);
assert.strictEqual(dueToday, "2026-09-15");
console.log("✓ Test 6 Passed: Due date calculation with payment terms days");

// Test 7: Indian Financial Year Calculation
assert.strictEqual(getFinancialYear(new Date("2026-09-15")), "26-27");
assert.strictEqual(getFinancialYear(new Date("2027-02-10")), "26-27");
assert.strictEqual(getFinancialYear(new Date("2027-04-01")), "27-28");
assert.strictEqual(getFinancialYear(new Date("2026-03-31")), "25-26");
console.log("✓ Test 7 Passed: Financial year resets on April 1st");

console.log("====================================================");
console.log("ALL 7 INVOICE CALCULATION ENGINE TESTS PASSED!");
console.log("====================================================");
