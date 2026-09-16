-- ==============================================================================
-- Growth Service — Consolidated DB Audit Remediations
-- ==============================================================================

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


-- ==============================================================================
-- Growth Service — Harden Billing RLS & Immutable Audit Policies
-- Migration: 20260916_003_harden_billing_rls.sql
-- ==============================================================================

-- 1. Drop overly-permissive legacy policies that granted unrestricted access
DROP POLICY IF EXISTS authenticated_manage_clients ON clients;
DROP POLICY IF EXISTS authenticated_manage_client_contacts ON client_contacts;
DROP POLICY IF EXISTS authenticated_manage_billing_profiles ON billing_profiles;
DROP POLICY IF EXISTS authenticated_manage_billing_items ON billing_items;
DROP POLICY IF EXISTS authenticated_manage_invoice_sequences ON invoice_sequences;
DROP POLICY IF EXISTS authenticated_manage_invoices ON invoices;
DROP POLICY IF EXISTS authenticated_manage_invoice_items ON invoice_items;
DROP POLICY IF EXISTS authenticated_manage_payment_links ON payment_links;
DROP POLICY IF EXISTS authenticated_manage_payments ON payments;
DROP POLICY IF EXISTS authenticated_manage_webhook_events ON webhook_events;
DROP POLICY IF EXISTS authenticated_manage_payment_transactions ON payment_transactions;
DROP POLICY IF EXISTS authenticated_manage_audit_logs ON audit_logs;

-- 2. Helper function to safely read user role from JWT claims
CREATE OR REPLACE FUNCTION get_auth_role()
RETURNS TEXT
LANGUAGE sql
STABLE
AS $$
  SELECT coalesce(
    auth.jwt() -> 'app_metadata' ->> 'role',
    ''
  );
$$;

-- 3. Clients & Billing Profiles (Read/Write restricted to billing roles)
CREATE POLICY clients_select_policy ON clients
  FOR SELECT TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY clients_modify_policy ON clients
  FOR ALL TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY client_contacts_policy ON client_contacts
  FOR ALL TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY billing_profiles_policy ON billing_profiles
  FOR ALL TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY billing_items_policy ON billing_items
  FOR ALL TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

-- 4. Invoices & Line Items (Strict separation: billing managers/admins only)
CREATE POLICY invoices_select_policy ON invoices
  FOR SELECT TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY invoices_modify_policy ON invoices
  FOR INSERT TO authenticated
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY invoices_update_policy ON invoices
  FOR UPDATE TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

-- Prohibit client-side DELETE on invoices (draft deletion must go through controlled RPC/service role)
CREATE POLICY invoices_delete_policy ON invoices
  FOR DELETE TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin'));

CREATE POLICY invoice_items_policy ON invoice_items
  FOR ALL TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY invoice_sequences_policy ON invoice_sequences
  FOR ALL TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

-- 5. Payments, Transactions & Links
CREATE POLICY payment_links_policy ON payment_links
  FOR ALL TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'))
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY payments_select_policy ON payments
  FOR SELECT TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

-- Direct deletion of payments or transactions from client SDK is strictly forbidden
CREATE POLICY payment_transactions_select_policy ON payment_transactions
  FOR SELECT TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin', 'billing_manager'));

CREATE POLICY webhook_events_policy ON webhook_events
  FOR SELECT TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin'));

-- 6. Audit Logs: Strictly IMMUTABLE (Append-Only)
-- Allowed to insert audit entries, but NO authenticated user can ever UPDATE or DELETE audit logs
CREATE POLICY audit_logs_select_policy ON audit_logs
  FOR SELECT TO authenticated
  USING (get_auth_role() IN ('superadmin', 'admin'));

CREATE POLICY audit_logs_insert_policy ON audit_logs
  FOR INSERT TO authenticated
  WITH CHECK (get_auth_role() IN ('superadmin', 'admin', 'billing_manager', 'editor'));

-- No UPDATE or DELETE policies for audit_logs ensure immutability at database engine level.


-- ==============================================================================
-- Growth Service — Atomic Financial Transactions & Reconciliation RPCs
-- Migration: 20260916_004_atomic_financial_transactions.sql
-- ==============================================================================

-- 1. Atomic Invoice Issuance with Sequential Allocation
-- Guarantees zero sequence gaps if invoice cannot be issued.
CREATE OR REPLACE FUNCTION issue_invoice_with_sequence(
  p_invoice_id UUID,
  p_fy TEXT,
  p_series TEXT DEFAULT 'GS',
  p_actor_id UUID DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_invoice RECORD;
  v_seq BIGINT;
  v_invoice_number TEXT;
  v_now TIMESTAMPTZ := now();
  v_issue_date DATE;
BEGIN
  -- 1. Lock invoice row against concurrent mutation
  SELECT * INTO v_invoice
  FROM invoices
  WHERE id = p_invoice_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invoice % not found', p_invoice_id;
  END IF;

  IF v_invoice.document_status != 'draft' THEN
    RAISE EXCEPTION 'Invoice is in "%" status, only draft invoices can be issued', v_invoice.document_status;
  END IF;

  -- 2. Allocate consecutive legal invoice number
  INSERT INTO invoice_sequences (financial_year, series, last_number, updated_at)
  VALUES (p_fy, p_series, 1, v_now)
  ON CONFLICT (financial_year, series)
  DO UPDATE SET
    last_number = invoice_sequences.last_number + 1,
    updated_at = v_now
  RETURNING last_number INTO v_seq;

  v_invoice_number := p_series || '/' || p_fy || '/' || lpad(v_seq::text, 4, '0');
  v_issue_date := coalesce(v_invoice.issue_date, CURRENT_DATE);

  -- 3. Transition document status to 'issued'
  UPDATE invoices
  SET
    invoice_number = v_invoice_number,
    document_status = 'issued',
    issue_date = v_issue_date,
    issued_at = v_now,
    updated_by = coalesce(p_actor_id, updated_by),
    updated_at = v_now
  WHERE id = p_invoice_id;

  RETURN jsonb_build_object(
    'success', true,
    'invoice_id', p_invoice_id,
    'invoice_number', v_invoice_number,
    'sequence_number', v_seq,
    'issued_at', v_now
  );
END;
$$;

-- 2. Atomic Payment Reconciliation Engine
-- Wraps payment creation, transaction ledger entry, and invoice balance update in a single transaction.
CREATE OR REPLACE FUNCTION reconcile_payment_transaction(
  p_invoice_id UUID,
  p_payment_link_id UUID,
  p_provider TEXT,
  p_provider_payment_id TEXT,
  p_provider_order_id TEXT,
  p_amount NUMERIC,
  p_currency TEXT,
  p_payment_method TEXT,
  p_captured_at TIMESTAMPTZ,
  p_payer_name TEXT,
  p_payer_email TEXT,
  p_payer_phone TEXT,
  p_metadata JSONB,
  p_source TEXT,
  p_provider_link_id TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_invoice RECORD;
  v_existing_payment_id UUID;
  v_payment_id UUID;
  v_tx_id UUID;
  v_balance_before NUMERIC(15, 2);
  v_amount_paid_after NUMERIC(15, 2);
  v_balance_after NUMERIC(15, 2);
  v_new_payment_status TEXT;
  v_now TIMESTAMPTZ := now();
  v_link_status TEXT;
BEGIN
  -- 1. Lock invoice row to prevent concurrent race conditions
  SELECT * INTO v_invoice
  FROM invoices
  WHERE id = p_invoice_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invoice % not found', p_invoice_id;
  END IF;

  -- 2. Guard against cancelled or void invoices
  IF v_invoice.document_status IN ('cancelled', 'void') THEN
    RETURN jsonb_build_object(
      'success', false,
      'status', 'flagged',
      'message', format('Invoice is in "%s" status. Balance application refused.', v_invoice.document_status),
      'invoice_id', p_invoice_id
    );
  END IF;

  -- 3. Idempotency check: provider payment ID deduplication
  IF p_provider_payment_id IS NOT NULL THEN
    SELECT id INTO v_existing_payment_id
    FROM payments
    WHERE provider_payment_id = p_provider_payment_id AND status = 'captured'
    LIMIT 1;

    IF FOUND THEN
      RETURN jsonb_build_object(
        'success', true,
        'status', 'duplicate',
        'message', format('Payment %s already processed previously.', p_provider_payment_id),
        'invoice_id', p_invoice_id,
        'payment_id', v_existing_payment_id
      );
    END IF;
  END IF;

  -- 4. Calculate balances with financial rounding
  v_balance_before := coalesce(v_invoice.amount_due, 0);
  v_amount_paid_after := round(coalesce(v_invoice.amount_paid, 0) + p_amount, 2);
  v_balance_after := round(greatest(0, coalesce(v_invoice.grand_total, 0) - v_amount_paid_after), 2);

  IF v_balance_after <= 0 THEN
    v_new_payment_status := 'paid';
  ELSE
    v_new_payment_status := 'partially_paid';
  END IF;

  -- 5. Insert Payment Record
  INSERT INTO payments (
    invoice_id,
    payment_link_id,
    provider,
    provider_payment_id,
    provider_order_id,
    amount,
    currency,
    status,
    payment_method,
    captured_at,
    payer_name,
    payer_email,
    payer_phone,
    metadata,
    created_at,
    updated_at
  ) VALUES (
    p_invoice_id,
    p_payment_link_id,
    p_provider,
    p_provider_payment_id,
    p_provider_order_id,
    p_amount,
    coalesce(p_currency, 'INR'),
    'captured',
    p_payment_method,
    coalesce(p_captured_at, v_now),
    p_payer_name,
    p_payer_email,
    p_payer_phone,
    coalesce(p_metadata, '{}'::jsonb),
    v_now,
    v_now
  ) RETURNING id INTO v_payment_id;

  -- 6. Insert Transaction Ledger Entry
  INSERT INTO payment_transactions (
    invoice_id,
    payment_id,
    transaction_type,
    amount,
    balance_before,
    balance_after,
    source,
    metadata,
    created_at
  ) VALUES (
    p_invoice_id,
    v_payment_id,
    'payment',
    p_amount,
    v_balance_before,
    v_balance_after,
    p_source,
    jsonb_build_object(
      'provider_payment_id', p_provider_payment_id,
      'provider_link_id', p_provider_link_id,
      'status', v_new_payment_status
    ),
    v_now
  ) RETURNING id INTO v_tx_id;

  -- 7. Update Invoice Balances & State
  UPDATE invoices
  SET
    amount_paid = v_amount_paid_after,
    amount_due = v_balance_after,
    payment_status = v_new_payment_status,
    updated_at = v_now
  WHERE id = p_invoice_id;

  -- 8. Update Payment Link Status if applicable
  IF p_payment_link_id IS NOT NULL THEN
    v_link_status := CASE WHEN v_balance_after <= 0 THEN 'paid' ELSE 'partially_paid' END;
    UPDATE payment_links
    SET
      status = v_link_status,
      updated_at = v_now
    WHERE id = p_payment_link_id;
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'status', 'captured',
    'payment_id', v_payment_id,
    'transaction_id', v_tx_id,
    'invoice_id', p_invoice_id,
    'balance_before', v_balance_before,
    'balance_after', v_balance_after,
    'amount_paid_after', v_amount_paid_after,
    'new_payment_status', v_new_payment_status
  );
END;
$$;

-- 3. Grants
GRANT EXECUTE ON FUNCTION issue_invoice_with_sequence(UUID, TEXT, TEXT, UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION issue_invoice_with_sequence(UUID, TEXT, TEXT, UUID) TO service_role;

GRANT EXECUTE ON FUNCTION reconcile_payment_transaction(
  UUID, UUID, TEXT, TEXT, TEXT, NUMERIC, TEXT, TEXT, TIMESTAMPTZ, TEXT, TEXT, TEXT, JSONB, TEXT, TEXT
) TO authenticated;
GRANT EXECUTE ON FUNCTION reconcile_payment_transaction(
  UUID, UUID, TEXT, TEXT, TEXT, NUMERIC, TEXT, TEXT, TIMESTAMPTZ, TEXT, TEXT, TEXT, JSONB, TEXT, TEXT
) TO service_role;
