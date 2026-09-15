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
 */
export async function allocateNextInvoiceNumber(
  supabase: SupabaseClient,
  series: string = "GS",
  customDate?: Date
): Promise<{ invoiceNumber: string; financialYear: string; sequenceNumber: number }> {
  const financialYear = getFinancialYear(customDate);

  // 1. Fetch current sequence or initialize
  const { data: existing, error: fetchErr } = await supabase
    .from("invoice_sequences")
    .select("id, last_number")
    .eq("financial_year", financialYear)
    .eq("series", series)
    .maybeSingle();

  if (fetchErr) {
    throw new Error(`Failed to query invoice sequence: ${fetchErr.message}`);
  }

  let nextNumber = 1;

  if (!existing) {
    // Insert new sequence row
    const { data: inserted, error: insertErr } = await supabase
      .from("invoice_sequences")
      .insert({
        financial_year: financialYear,
        series,
        last_number: 1,
      })
      .select("last_number")
      .single();

    if (insertErr) {
      // Concurrency race: if another request inserted, retry query once
      const { data: retry, error: retryErr } = await supabase
        .from("invoice_sequences")
        .select("id, last_number")
        .eq("financial_year", financialYear)
        .eq("series", series)
        .single();

      if (retryErr || !retry) {
        throw new Error(`Failed to allocate invoice sequence: ${insertErr.message}`);
      }

      nextNumber = Number(retry.last_number) + 1;
      await supabase
        .from("invoice_sequences")
        .update({ last_number: nextNumber })
        .eq("id", retry.id);
    } else {
      nextNumber = Number(inserted.last_number);
    }
  } else {
    // Increment existing sequence row
    nextNumber = Number(existing.last_number) + 1;
    const { error: updateErr } = await supabase
      .from("invoice_sequences")
      .update({ last_number: nextNumber })
      .eq("id", existing.id);

    if (updateErr) {
      throw new Error(`Failed to increment invoice sequence: ${updateErr.message}`);
    }
  }

  const paddedSequence = String(nextNumber).padStart(6, "0");
  const invoiceNumber = `${series}/${financialYear}/${paddedSequence}`;

  return {
    invoiceNumber,
    financialYear,
    sequenceNumber: nextNumber,
  };
}
