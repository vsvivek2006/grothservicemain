/**
 * Centralized formatting utilities using module-level singleton Intl instances.
 * Eliminates redundant object allocations and reduces V8 GC pressure during render cycles.
 */

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const currencyExactFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

/**
 * Formats a number to INR currency string.
 * @param val Numeric amount
 * @param exact If true, includes 2 decimal places. Default is false (0 decimal places).
 */
export function formatCurrency(val: number, exact = false): string {
  if (isNaN(val)) return "₹0";
  return exact ? currencyExactFormatter.format(val) : currencyFormatter.format(val);
}

/**
 * Formats a number to INR currency string with exact 2 decimal places.
 */
export function formatCurrencyExact(val: number): string {
  if (isNaN(val)) return "₹0.00";
  return currencyExactFormatter.format(val);
}

/**
 * Formats a date string or Date object into a readable date (e.g., "17 Sep 2026").
 */
export function formatDate(dateInput?: string | Date | null): string {
  if (!dateInput) return "—";
  const d = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  if (isNaN(d.getTime())) return typeof dateInput === "string" ? dateInput : "—";
  return dateFormatter.format(d);
}

/**
 * Formats a date string or Date object into date + time (e.g., "17 Sep 2026, 12:35 pm").
 */
export function formatDateTime(dateInput?: string | Date | null): string {
  if (!dateInput) return "—";
  const d = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  if (isNaN(d.getTime())) return typeof dateInput === "string" ? dateInput : "—";
  return dateTimeFormatter.format(d);
}
