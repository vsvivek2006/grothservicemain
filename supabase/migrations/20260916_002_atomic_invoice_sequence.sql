-- ==============================================================================
-- Growth Service — Atomic Sequential Invoice Number Allocation
-- Migration: 20260916_002_atomic_invoice_sequence.sql
-- ==============================================================================

-- 1. Create or replace the atomic sequence generator function
CREATE OR REPLACE FUNCTION allocate_next_invoice_number(
  p_fy TEXT,
  p_series TEXT DEFAULT 'GS'
)
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_next_num BIGINT;
BEGIN
  -- Atomic upsert: initialize to 1 on conflict increment existing by 1.
  -- PostgreSQL handles row-level serialization on unique index (financial_year, series).
  INSERT INTO invoice_sequences (financial_year, series, last_number, updated_at)
  VALUES (p_fy, p_series, 1, now())
  ON CONFLICT (financial_year, series)
  DO UPDATE SET 
    last_number = invoice_sequences.last_number + 1,
    updated_at = now()
  RETURNING last_number INTO v_next_num;

  RETURN v_next_num;
END;
$$;

-- 2. Grant execute permissions
GRANT EXECUTE ON FUNCTION allocate_next_invoice_number(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION allocate_next_invoice_number(TEXT, TEXT) TO service_role;
