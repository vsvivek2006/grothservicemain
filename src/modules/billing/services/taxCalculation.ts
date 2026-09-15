/**
 * Growth Service — Core Tax & Invoice Calculation Engine
 *
 * Deterministic financial calculations:
 * - Pure functions with zero external dependencies
 * - GST intra-state (CGST + SGST) vs inter-state (IGST)
 * - Line item discounts (percentage / fixed)
 * - Round-off calculation to 2 decimal places
 * - Due date computation based on payment terms
 */

export interface LineItemCalculationInput {
  itemId?: string | null;
  description: string;
  sku?: string | null;
  hsnSac?: string | null;
  unit?: string;
  quantity: number;
  unitPrice: number;
  discountType?: "percentage" | "fixed" | null;
  discountValue?: number | null;
  taxRate: number; // e.g. 18 for 18%
  sortOrder?: number;
}

export interface CalculatedLineItem {
  itemId: string | null;
  descriptionSnapshot: string;
  skuSnapshot: string | null;
  hsnSacSnapshot: string | null;
  unitSnapshot: string;
  quantity: number;
  unitPrice: number;
  discountType: "percentage" | "fixed" | null;
  discountValue: number | null;
  discountAmount: number;
  taxRate: number;
  taxableAmount: number;
  cgstRate: number | null;
  cgstAmount: number | null;
  sgstRate: number | null;
  sgstAmount: number | null;
  igstRate: number | null;
  igstAmount: number | null;
  cessRate: number | null;
  cessAmount: number | null;
  lineSubtotal: number;
  lineTotal: number;
  sortOrder: number;
}

export interface InvoiceTotals {
  subtotal: number;
  discountTotal: number;
  taxableTotal: number;
  cgstTotal: number;
  sgstTotal: number;
  igstTotal: number;
  cessTotal: number;
  taxTotal: number;
  roundOff: number;
  grandTotal: number;
  amountPaid: number;
  amountDue: number;
  isInterstate: boolean;
  calculatedItems: CalculatedLineItem[];
}

/** Helper to round to exactly 2 decimal places */
export function round2(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * Determine if transaction is inter-state (IGST) or intra-state (CGST + SGST).
 * Seller state code is compared against Place of Supply state code.
 */
export function isInterstateTransaction(
  sellerStateCode: string,
  placeOfSupplyStateCode?: string | null
): boolean {
  if (!placeOfSupplyStateCode) return false;
  const sellerClean = sellerStateCode.trim().padStart(2, "0");
  const buyerClean = placeOfSupplyStateCode.trim().padStart(2, "0");
  return sellerClean !== buyerClean;
}

/**
 * Calculate single line item
 */
export function calculateLineItem(
  item: LineItemCalculationInput,
  isInterstate: boolean,
  sortOrder: number = 0
): CalculatedLineItem {
  const qty = Math.max(0, item.quantity);
  const price = Math.max(0, item.unitPrice);
  const lineSubtotal = round2(qty * price);

  // Discount calculation
  let discountAmount = 0;
  if (item.discountType === "percentage" && item.discountValue) {
    const pct = Math.min(100, Math.max(0, item.discountValue));
    discountAmount = round2((lineSubtotal * pct) / 100);
  } else if (item.discountType === "fixed" && item.discountValue) {
    discountAmount = round2(Math.min(lineSubtotal, Math.max(0, item.discountValue)));
  }

  const taxableAmount = round2(Math.max(0, lineSubtotal - discountAmount));
  const taxRate = Math.max(0, item.taxRate);

  let cgstRate: number | null = null;
  let cgstAmount: number | null = null;
  let sgstRate: number | null = null;
  let sgstAmount: number | null = null;
  let igstRate: number | null = null;
  let igstAmount: number | null = null;

  if (isInterstate) {
    igstRate = taxRate;
    igstAmount = round2((taxableAmount * taxRate) / 100);
    cgstRate = 0;
    cgstAmount = 0;
    sgstRate = 0;
    sgstAmount = 0;
  } else {
    const halfRate = taxRate / 2;
    cgstRate = halfRate;
    cgstAmount = round2((taxableAmount * halfRate) / 100);
    sgstRate = halfRate;
    sgstAmount = round2((taxableAmount * halfRate) / 100);
    igstRate = 0;
    igstAmount = 0;
  }

  const lineTax = (cgstAmount || 0) + (sgstAmount || 0) + (igstAmount || 0);
  const lineTotal = round2(taxableAmount + lineTax);

  return {
    itemId: item.itemId || null,
    descriptionSnapshot: item.description,
    skuSnapshot: item.sku || null,
    hsnSacSnapshot: item.hsnSac || null,
    unitSnapshot: item.unit || "unit",
    quantity: qty,
    unitPrice: price,
    discountType: item.discountType || null,
    discountValue: item.discountValue || null,
    discountAmount,
    taxRate,
    taxableAmount,
    cgstRate,
    cgstAmount,
    sgstRate,
    sgstAmount,
    igstRate,
    igstAmount,
    cessRate: 0,
    cessAmount: 0,
    lineSubtotal,
    lineTotal,
    sortOrder,
  };
}

/**
 * Recalculate full invoice totals from line items
 */
export function calculateInvoiceTotals(
  items: LineItemCalculationInput[],
  sellerStateCode: string,
  placeOfSupplyStateCode?: string | null,
  amountPaid: number = 0
): InvoiceTotals {
  const isInterstate = isInterstateTransaction(sellerStateCode, placeOfSupplyStateCode);

  let subtotal = 0;
  let discountTotal = 0;
  let taxableTotal = 0;
  let cgstTotal = 0;
  let sgstTotal = 0;
  let igstTotal = 0;
  let cessTotal = 0;

  const calculatedItems: CalculatedLineItem[] = items.map((it, idx) => {
    const calc = calculateLineItem(it, isInterstate, it.sortOrder ?? idx);
    subtotal += calc.lineSubtotal;
    discountTotal += calc.discountAmount;
    taxableTotal += calc.taxableAmount;
    cgstTotal += calc.cgstAmount || 0;
    sgstTotal += calc.sgstAmount || 0;
    igstTotal += calc.igstAmount || 0;
    cessTotal += calc.cessAmount || 0;
    return calc;
  });

  subtotal = round2(subtotal);
  discountTotal = round2(discountTotal);
  taxableTotal = round2(taxableTotal);
  cgstTotal = round2(cgstTotal);
  sgstTotal = round2(sgstTotal);
  igstTotal = round2(igstTotal);
  cessTotal = round2(cessTotal);

  const taxTotal = round2(cgstTotal + sgstTotal + igstTotal + cessTotal);
  const rawTotal = taxableTotal + taxTotal;
  const roundedGrandTotal = Math.round(rawTotal);
  const roundOff = round2(roundedGrandTotal - rawTotal);
  const grandTotal = round2(roundedGrandTotal);

  const cleanAmountPaid = round2(Math.max(0, amountPaid));
  const amountDue = round2(Math.max(0, grandTotal - cleanAmountPaid));

  return {
    subtotal,
    discountTotal,
    taxableTotal,
    cgstTotal,
    sgstTotal,
    igstTotal,
    cessTotal,
    taxTotal,
    roundOff,
    grandTotal,
    amountPaid: cleanAmountPaid,
    amountDue,
    isInterstate,
    calculatedItems,
  };
}

/**
 * Calculate due date based on issue date and payment terms days
 */
export function calculateDueDate(issueDateStr?: string | null, termsDays: number = 0): string | null {
  if (!issueDateStr) return null;
  const date = new Date(issueDateStr);
  if (isNaN(date.getTime())) return null;
  date.setDate(date.getDate() + Math.max(0, termsDays));
  return date.toISOString().split("T")[0];
}
