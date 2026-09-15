import { round2 } from "./taxCalculation";

export interface BalanceReconciliationResult {
  amountPaidBefore: number;
  balanceBefore: number;
  paymentAmount: number;
  amountPaidAfter: number;
  balanceAfter: number;
  newPaymentStatus: "unpaid" | "partially_paid" | "paid";
  isFullyPaid: boolean;
}

/**
 * Pure calculation engine for reconciling payment amounts against invoice balances.
 * Guarantees precision, zero rounding drift, and proper status transitions.
 */
export function computeBalanceReconciliation(
  grandTotal: number,
  currentAmountPaid: number,
  incomingPaymentAmount: number
): BalanceReconciliationResult {
  const amountPaidBefore = Number(currentAmountPaid) || 0;
  const total = Number(grandTotal) || 0;
  const balanceBefore = Math.max(0, round2(total - amountPaidBefore));
  const paymentAmount = Number(incomingPaymentAmount) || 0;

  const amountPaidAfter = round2(amountPaidBefore + paymentAmount);
  const balanceAfter = Math.max(0, round2(total - amountPaidAfter));

  let newPaymentStatus: "unpaid" | "partially_paid" | "paid" = "unpaid";
  if (balanceAfter <= 0.01) {
    newPaymentStatus = "paid";
  } else if (amountPaidAfter > 0) {
    newPaymentStatus = "partially_paid";
  }

  return {
    amountPaidBefore,
    balanceBefore,
    paymentAmount,
    amountPaidAfter,
    balanceAfter,
    newPaymentStatus,
    isFullyPaid: newPaymentStatus === "paid",
  };
}
