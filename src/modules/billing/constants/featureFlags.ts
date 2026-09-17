/**
 * Billing Feature Flags
 * Payment features (Razorpay payment links, webhooks, live checkout) are
 * kept local/development-only until production gateway credentials are set.
 */
export function isPaymentsEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_ENABLE_PAYMENTS === "true" ||
    process.env.ENABLE_PAYMENTS === "true"
  );
}
