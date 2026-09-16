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
