/**
 * Growth Service — Transactional Invoice Number & Sequence Service
 *
 * Enforces strictly sequential, gapless, audit-compliant invoice numbering:
 * Format: GS/{FY}/{SEQUENCE_6_DIGITS} e.g. GS/26-27/000001
 * Financial year resets every April 1st.
 */

import { SupabaseClient } from "@supabase/supabase-js";

/**
 * Returns Indian Financial Year string, e.g. "26-27" for Sep 2026.
 */
export function getFinancialYear(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0 = Jan, 3 = Apr
  const startYear = month >= 3 ? year : year - 1;
  const endYear = startYear + 1;
  const s2 = String(startYear).slice(-2);
  const e2 = String(endYear).slice(-2);
  return `${s2}-${e2}`;
}

/**
 * Generate a non-colliding draft reference identifier.
 * Real legal sequence numbers are strictly allocated upon issuance.
 */
export function generateDraftInvoiceNumber(fy?: string): string {
  const financialYear = fy || getFinancialYear();
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  return `DRAFT/${financialYear}/${timestamp}-${randomSuffix}`;
}

/**
 * Atomically allocates the next legal sequential invoice number for a given series and FY.
 * 
 * Strategy:
 * 1. Primary path: Calls atomic Postgres RPC `allocate_next_invoice_number(p_fy, p_series)`.
 *    Zero-race condition with database-level row locks.
 * 2. Fallback path: Optimistic concurrency loop with version match (last_number = existing.last_number)
 *    and unique constraint recovery if RPC is not available in environment.
 */
export async function allocateNextInvoiceNumber(
  supabase: SupabaseClient,
  series: string = "GS",
  customDate?: Date
): Promise<{ invoiceNumber: string; financialYear: string; sequenceNumber: number }> {
  const financialYear = getFinancialYear(customDate);

  // 1. Primary path: Atomic PostgreSQL function
  try {
    const { data: rpcNumber, error: rpcErr } = await supabase.rpc(
      "allocate_next_invoice_number",
      {
        p_fy: financialYear,
        p_series: series,
      }
    );

    if (!rpcErr && rpcNumber != null) {
      const nextNumber = Number(rpcNumber);
      const paddedSequence = String(nextNumber).padStart(6, "0");
      return {
        invoiceNumber: `${series}/${financialYear}/${paddedSequence}`,
        financialYear,
        sequenceNumber: nextNumber,
      };
    }
  } catch {
    // Fall back to optimistic concurrency loop below
  }

  // 2. Resilient Fallback: Optimistic concurrency retry loop
  const MAX_RETRIES = 5;
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const { data: existing, error: fetchErr } = await supabase
      .from("invoice_sequences")
      .select("id, last_number")
      .eq("financial_year", financialYear)
      .eq("series", series)
      .maybeSingle();

    if (fetchErr) {
      throw new Error(`Failed to query invoice sequence: ${fetchErr.message}`);
    }

    if (!existing) {
      // Try to initialize sequence with 1
      const { data: inserted, error: insertErr } = await supabase
        .from("invoice_sequences")
        .insert({
          financial_year: financialYear,
          series,
          last_number: 1,
        })
        .select("last_number")
        .single();

      if (!insertErr && inserted) {
        const nextNumber = Number(inserted.last_number);
        const paddedSequence = String(nextNumber).padStart(6, "0");
        return {
          invoiceNumber: `${series}/${financialYear}/${paddedSequence}`,
          financialYear,
          sequenceNumber: nextNumber,
        };
      }
      // If insert failed due to conflict, retry loop to fetch the existing row
      continue;
    }

    // Existing sequence found: atomically attempt to increment using optimistic condition
    const currentLast = Number(existing.last_number);
    const targetNext = currentLast + 1;

    const { data: updated, error: updateErr } = await supabase
      .from("invoice_sequences")
      .update({ last_number: targetNext })
      .eq("id", existing.id)
      .eq("last_number", currentLast) // Optimistic concurrency guard
      .select("last_number")
      .maybeSingle();

    if (!updateErr && updated) {
      const nextNumber = Number(updated.last_number);
      const paddedSequence = String(nextNumber).padStart(6, "0");
      return {
        invoiceNumber: `${series}/${financialYear}/${paddedSequence}`,
        financialYear,
        sequenceNumber: nextNumber,
      };
    }

    // Another caller incremented first; loop again
  }

  throw new Error(
    `Failed to allocate invoice sequence for ${series}/${financialYear} after ${MAX_RETRIES} attempts due to concurrent modifications.`
  );
}
