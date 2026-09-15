-- ==============================================================================
-- Growth Service — Billing Database Foundation (Phase 2)
-- Migration: 20260915_001_billing_foundation.sql
-- Description: Creates the 12 core tables, indexes, constraints, triggers, and RLS
--              for clients, catalog items, invoices, payment links, payments,
--              reconciliation transactions, webhooks, and audit logs.
-- ==============================================================================

-- Enable pgcrypto for UUID generation if not already active
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ------------------------------------------------------------------------------
-- 1. Helper trigger function for updated_at timestamps
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ------------------------------------------------------------------------------
-- 2. clients (Client Master Records)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_code TEXT UNIQUE NOT NULL,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  alternate_phone TEXT NULL,
  website TEXT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'inactive', 'archived')) DEFAULT 'active',
  notes TEXT NULL,
  created_by UUID NULL,
  updated_by UUID NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_clients_client_code ON clients(client_code);
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);
CREATE INDEX IF NOT EXISTS idx_clients_company_name ON clients(company_name);

CREATE OR REPLACE TRIGGER trg_clients_updated_at
BEFORE UPDATE ON clients
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 3. client_contacts (Multiple Contacts per Client)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS client_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NULL,
  phone TEXT NULL,
  designation TEXT NULL,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  is_billing_contact BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_client_contacts_client_id ON client_contacts(client_id);
CREATE INDEX IF NOT EXISTS idx_client_contacts_email ON client_contacts(email);

CREATE OR REPLACE TRIGGER trg_client_contacts_updated_at
BEFORE UPDATE ON client_contacts
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 4. billing_profiles (Tax & Address Profiles per Client)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS billing_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  legal_name TEXT NOT NULL,
  display_name TEXT NULL,
  billing_email TEXT NULL,
  billing_phone TEXT NULL,
  address_line_1 TEXT NOT NULL,
  address_line_2 TEXT NULL,
  city TEXT NOT NULL,
  district TEXT NULL,
  state TEXT NOT NULL,
  state_code TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'India',
  gstin TEXT NULL,
  pan TEXT NULL,
  tax_registration_type TEXT NULL,
  place_of_supply_state TEXT NULL,
  place_of_supply_state_code TEXT NULL,
  currency TEXT NOT NULL DEFAULT 'INR',
  payment_terms_days INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_billing_profiles_client_id ON billing_profiles(client_id);
CREATE INDEX IF NOT EXISTS idx_billing_profiles_gstin ON billing_profiles(gstin);

CREATE OR REPLACE TRIGGER trg_billing_profiles_updated_at
BEFORE UPDATE ON billing_profiles
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 5. billing_items (Reusable Product / Service Catalog)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS billing_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  short_name TEXT NULL,
  description TEXT NULL,
  item_type TEXT NOT NULL DEFAULT 'service',
  service_category TEXT NULL,
  hsn_sac_code TEXT NULL,
  unit TEXT NOT NULL DEFAULT 'unit',
  default_unit_price NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  default_tax_rate NUMERIC(5, 2) NOT NULL DEFAULT 18.00,
  default_discount_type TEXT NULL CHECK (default_discount_type IS NULL OR default_discount_type IN ('percentage', 'fixed')),
  default_discount_value NUMERIC(12, 2) NULL,
  currency TEXT NOT NULL DEFAULT 'INR',
  is_taxable BOOLEAN NOT NULL DEFAULT true,
  is_active BOOLEAN NOT NULL DEFAULT true,
  metadata JSONB NULL,
  created_by UUID NULL,
  updated_by UUID NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_billing_items_sku ON billing_items(sku);
CREATE INDEX IF NOT EXISTS idx_billing_items_is_active ON billing_items(is_active);
CREATE INDEX IF NOT EXISTS idx_billing_items_service_category ON billing_items(service_category);

CREATE OR REPLACE TRIGGER trg_billing_items_updated_at
BEFORE UPDATE ON billing_items
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 6. invoice_sequences (Concurrency-Safe Financial Year Numbering)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS invoice_sequences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  financial_year TEXT NOT NULL,
  series TEXT NOT NULL DEFAULT 'GS',
  last_number BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_invoice_sequences_fy_series UNIQUE (financial_year, series)
);

CREATE OR REPLACE TRIGGER trg_invoice_sequences_updated_at
BEFORE UPDATE ON invoice_sequences
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 7. invoices (Core Commercial / Legal Invoices)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
  billing_profile_id UUID NOT NULL REFERENCES billing_profiles(id) ON DELETE RESTRICT,
  invoice_number TEXT UNIQUE NOT NULL,
  invoice_type TEXT NOT NULL DEFAULT 'tax_invoice',
  document_status TEXT NOT NULL CHECK (document_status IN ('draft', 'issued', 'sent', 'cancelled', 'void')) DEFAULT 'draft',
  payment_status TEXT NOT NULL CHECK (payment_status IN ('unpaid', 'partially_paid', 'paid', 'overdue', 'refunded', 'partially_refunded')) DEFAULT 'unpaid',
  issue_date DATE NULL,
  supply_date DATE NULL,
  due_date DATE NULL,
  currency TEXT NOT NULL DEFAULT 'INR',
  subtotal NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  discount_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  taxable_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  cgst_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  sgst_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  igst_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  cess_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  tax_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  round_off NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  grand_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  amount_paid NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  amount_due NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  place_of_supply TEXT NULL,
  place_of_supply_state_code TEXT NULL,
  reverse_charge BOOLEAN NOT NULL DEFAULT false,
  is_interstate BOOLEAN NOT NULL DEFAULT false,
  notes TEXT NULL,
  terms_and_conditions TEXT NULL,
  seller_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
  buyer_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_by UUID NULL,
  updated_by UUID NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  issued_at TIMESTAMPTZ NULL,
  cancelled_at TIMESTAMPTZ NULL
);

CREATE INDEX IF NOT EXISTS idx_invoices_invoice_number ON invoices(invoice_number);
CREATE INDEX IF NOT EXISTS idx_invoices_client_id ON invoices(client_id);
CREATE INDEX IF NOT EXISTS idx_invoices_document_status ON invoices(document_status);
CREATE INDEX IF NOT EXISTS idx_invoices_payment_status ON invoices(payment_status);
CREATE INDEX IF NOT EXISTS idx_invoices_due_date ON invoices(due_date);
CREATE INDEX IF NOT EXISTS idx_invoices_created_at ON invoices(created_at DESC);

CREATE OR REPLACE TRIGGER trg_invoices_updated_at
BEFORE UPDATE ON invoices
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 8. invoice_items (Immutable Historical Snapshot Line Items)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS invoice_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  item_id UUID NULL REFERENCES billing_items(id) ON DELETE SET NULL,
  description_snapshot TEXT NOT NULL,
  sku_snapshot TEXT NULL,
  hsn_sac_snapshot TEXT NULL,
  unit_snapshot TEXT NOT NULL DEFAULT 'unit',
  quantity NUMERIC(10, 2) NOT NULL DEFAULT 1.00,
  unit_price NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  discount_type TEXT NULL CHECK (discount_type IS NULL OR discount_type IN ('percentage', 'fixed')),
  discount_value NUMERIC(12, 2) NULL,
  discount_amount NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  tax_rate NUMERIC(5, 2) NOT NULL DEFAULT 18.00,
  taxable_amount NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  cgst_rate NUMERIC(5, 2) NULL,
  cgst_amount NUMERIC(12, 2) NULL,
  sgst_rate NUMERIC(5, 2) NULL,
  sgst_amount NUMERIC(12, 2) NULL,
  igst_rate NUMERIC(5, 2) NULL,
  igst_amount NUMERIC(12, 2) NULL,
  cess_rate NUMERIC(5, 2) NULL,
  cess_amount NUMERIC(12, 2) NULL,
  line_subtotal NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  line_total NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
  sort_order INTEGER NOT NULL DEFAULT 0,
  metadata JSONB NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_invoice_items_invoice_id ON invoice_items(invoice_id);
CREATE INDEX IF NOT EXISTS idx_invoice_items_item_id ON invoice_items(item_id);

-- ------------------------------------------------------------------------------
-- 9. payment_links (Payment Collection Mechanism)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS payment_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE RESTRICT,
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
  provider TEXT NOT NULL DEFAULT 'razorpay',
  provider_link_id TEXT NOT NULL,
  provider_reference_id TEXT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'INR',
  status TEXT NOT NULL DEFAULT 'created',
  short_url TEXT NOT NULL,
  description TEXT NULL,
  expires_at TIMESTAMPTZ NULL,
  accept_partial BOOLEAN NOT NULL DEFAULT false,
  minimum_partial_amount NUMERIC(12, 2) NULL,
  customer_name TEXT NULL,
  customer_email TEXT NULL,
  customer_phone TEXT NULL,
  reminder_enabled BOOLEAN NOT NULL DEFAULT false,
  callback_url TEXT NULL,
  metadata JSONB NULL,
  created_by UUID NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  cancelled_at TIMESTAMPTZ NULL,
  expired_at TIMESTAMPTZ NULL
);

CREATE INDEX IF NOT EXISTS idx_payment_links_invoice_id ON payment_links(invoice_id);
CREATE INDEX IF NOT EXISTS idx_payment_links_client_id ON payment_links(client_id);
CREATE INDEX IF NOT EXISTS idx_payment_links_provider_id ON payment_links(provider, provider_link_id);
CREATE INDEX IF NOT EXISTS idx_payment_links_status ON payment_links(status);

CREATE OR REPLACE TRIGGER trg_payment_links_updated_at
BEFORE UPDATE ON payment_links
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 10. payments (Actual Captured / Processed Payment Events)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE RESTRICT,
  payment_link_id UUID NULL REFERENCES payment_links(id) ON DELETE SET NULL,
  provider TEXT NOT NULL DEFAULT 'razorpay',
  provider_payment_id TEXT NULL,
  provider_order_id TEXT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'INR',
  status TEXT NOT NULL CHECK (status IN ('pending', 'authorized', 'captured', 'failed', 'refunded', 'partially_refunded')) DEFAULT 'pending',
  payment_method TEXT NULL,
  payment_method_details JSONB NULL,
  captured_at TIMESTAMPTZ NULL,
  failed_at TIMESTAMPTZ NULL,
  failure_reason TEXT NULL,
  payer_name TEXT NULL,
  payer_email TEXT NULL,
  payer_phone TEXT NULL,
  provider_fee NUMERIC(12, 2) NULL,
  provider_tax NUMERIC(12, 2) NULL,
  net_amount NUMERIC(12, 2) NULL,
  metadata JSONB NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_payments_invoice_id ON payments(invoice_id);
CREATE INDEX IF NOT EXISTS idx_payments_payment_link_id ON payments(payment_link_id);
CREATE INDEX IF NOT EXISTS idx_payments_provider_payment_id ON payments(provider, provider_payment_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON payments(created_at DESC);

CREATE OR REPLACE TRIGGER trg_payments_updated_at
BEFORE UPDATE ON payments
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ------------------------------------------------------------------------------
-- 11. webhook_events (Idempotent Webhook Audit & Processing Log)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS webhook_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider TEXT NOT NULL DEFAULT 'razorpay',
  provider_event_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  payload JSONB NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('received', 'processing', 'processed', 'failed')) DEFAULT 'received',
  processing_attempts INTEGER NOT NULL DEFAULT 0,
  received_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  processed_at TIMESTAMPTZ NULL,
  error_message TEXT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_webhook_events_provider_event UNIQUE (provider, provider_event_id)
);

CREATE INDEX IF NOT EXISTS idx_webhook_events_status ON webhook_events(status);
CREATE INDEX IF NOT EXISTS idx_webhook_events_received_at ON webhook_events(received_at DESC);

-- ------------------------------------------------------------------------------
-- 12. payment_transactions (Ledger & Reconciliation Transactions)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS payment_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  payment_id UUID NULL REFERENCES payments(id) ON DELETE SET NULL,
  transaction_type TEXT NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  balance_before NUMERIC(12, 2) NOT NULL,
  balance_after NUMERIC(12, 2) NOT NULL,
  source TEXT NOT NULL,
  metadata JSONB NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_payment_transactions_invoice_id ON payment_transactions(invoice_id);
CREATE INDEX IF NOT EXISTS idx_payment_transactions_payment_id ON payment_transactions(payment_id);

-- ------------------------------------------------------------------------------
-- 13. audit_logs (Immutable Administrative Audit Trail)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_user_id UUID NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  old_values JSONB NULL,
  new_values JSONB NULL,
  ip_address TEXT NULL,
  user_agent TEXT NULL,
  metadata JSONB NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON audit_logs(actor_user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at DESC);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all 12 tables
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE billing_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE billing_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_sequences ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE webhook_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Note: The service role (used by createAdminClient() via SUPABASE_SERVICE_ROLE_KEY)
-- automatically bypasses RLS in PostgreSQL.

-- Authenticated Users Policies (Admin Dashboard access)
DO $$
BEGIN
  -- clients
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'clients' AND policyname = 'authenticated_manage_clients') THEN
    CREATE POLICY authenticated_manage_clients ON clients FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- client_contacts
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'client_contacts' AND policyname = 'authenticated_manage_client_contacts') THEN
    CREATE POLICY authenticated_manage_client_contacts ON client_contacts FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- billing_profiles
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'billing_profiles' AND policyname = 'authenticated_manage_billing_profiles') THEN
    CREATE POLICY authenticated_manage_billing_profiles ON billing_profiles FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- billing_items
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'billing_items' AND policyname = 'authenticated_manage_billing_items') THEN
    CREATE POLICY authenticated_manage_billing_items ON billing_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- invoice_sequences
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'invoice_sequences' AND policyname = 'authenticated_manage_invoice_sequences') THEN
    CREATE POLICY authenticated_manage_invoice_sequences ON invoice_sequences FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- invoices
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'invoices' AND policyname = 'authenticated_manage_invoices') THEN
    CREATE POLICY authenticated_manage_invoices ON invoices FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- invoice_items
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'invoice_items' AND policyname = 'authenticated_manage_invoice_items') THEN
    CREATE POLICY authenticated_manage_invoice_items ON invoice_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- payment_links
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'payment_links' AND policyname = 'authenticated_manage_payment_links') THEN
    CREATE POLICY authenticated_manage_payment_links ON payment_links FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- payments
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'payments' AND policyname = 'authenticated_manage_payments') THEN
    CREATE POLICY authenticated_manage_payments ON payments FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- webhook_events
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'webhook_events' AND policyname = 'authenticated_manage_webhook_events') THEN
    CREATE POLICY authenticated_manage_webhook_events ON webhook_events FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- payment_transactions
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'payment_transactions' AND policyname = 'authenticated_manage_payment_transactions') THEN
    CREATE POLICY authenticated_manage_payment_transactions ON payment_transactions FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;

  -- audit_logs
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'audit_logs' AND policyname = 'authenticated_manage_audit_logs') THEN
    CREATE POLICY authenticated_manage_audit_logs ON audit_logs FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;
END $$;
