/**
 * Growth Service — Billing Database Types
 * Generated from migration: 20260915_001_billing_foundation.sql
 */

export type ClientStatus = "active" | "inactive" | "archived";
export type DiscountType = "percentage" | "fixed";
export type DocumentStatus = "draft" | "issued" | "sent" | "cancelled" | "void";
export type PaymentStatus =
  | "unpaid"
  | "partially_paid"
  | "paid"
  | "overdue"
  | "refunded"
  | "partially_refunded";
export type PaymentRecordStatus =
  | "pending"
  | "authorized"
  | "captured"
  | "failed"
  | "refunded"
  | "partially_refunded";
export type WebhookStatus = "received" | "processing" | "processed" | "failed";

// 1. clients
export interface Client {
  id: string;
  client_code: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  alternate_phone: string | null;
  website: string | null;
  status: ClientStatus;
  notes: string | null;
  created_by: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
}

export type ClientInsert = Omit<Client, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type ClientUpdate = Partial<ClientInsert>;

// 2. client_contacts
export interface ClientContact {
  id: string;
  client_id: string;
  name: string;
  email: string | null;
  phone: string | null;
  designation: string | null;
  is_primary: boolean;
  is_billing_contact: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export type ClientContactInsert = Omit<ClientContact, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type ClientContactUpdate = Partial<ClientContactInsert>;

// 3. billing_profiles
export interface BillingProfile {
  id: string;
  client_id: string;
  legal_name: string;
  display_name: string | null;
  billing_email: string | null;
  billing_phone: string | null;
  address_line_1: string;
  address_line_2: string | null;
  city: string;
  district: string | null;
  state: string;
  state_code: string;
  postal_code: string;
  country: string;
  gstin: string | null;
  pan: string | null;
  tax_registration_type: string | null;
  place_of_supply_state: string | null;
  place_of_supply_state_code: string | null;
  currency: string;
  payment_terms_days: number;
  created_at: string;
  updated_at: string;
}

export type BillingProfileInsert = Omit<BillingProfile, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type BillingProfileUpdate = Partial<BillingProfileInsert>;

// 4. billing_items
export interface BillingItem {
  id: string;
  sku: string;
  name: string;
  short_name: string | null;
  description: string | null;
  item_type: string;
  service_category: string | null;
  hsn_sac_code: string | null;
  unit: string;
  default_unit_price: number;
  default_tax_rate: number;
  default_discount_type: DiscountType | null;
  default_discount_value: number | null;
  currency: string;
  is_taxable: boolean;
  is_active: boolean;
  metadata: Record<string, unknown> | null;
  created_by: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
}

export type BillingItemInsert = Omit<BillingItem, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type BillingItemUpdate = Partial<BillingItemInsert>;

// 5. invoice_sequences
export interface InvoiceSequence {
  id: string;
  financial_year: string;
  series: string;
  last_number: number;
  updated_at: string;
}

export type InvoiceSequenceInsert = Omit<InvoiceSequence, "id" | "updated_at"> & {
  id?: string;
  updated_at?: string;
};

export type InvoiceSequenceUpdate = Partial<InvoiceSequenceInsert>;

// 6. invoices
export interface Invoice {
  id: string;
  client_id: string;
  billing_profile_id: string;
  invoice_number: string;
  invoice_type: string;
  document_status: DocumentStatus;
  payment_status: PaymentStatus;
  issue_date: string | null;
  supply_date: string | null;
  due_date: string | null;
  currency: string;
  subtotal: number;
  discount_total: number;
  taxable_total: number;
  cgst_total: number;
  sgst_total: number;
  igst_total: number;
  cess_total: number;
  tax_total: number;
  round_off: number;
  grand_total: number;
  amount_paid: number;
  amount_due: number;
  place_of_supply: string | null;
  place_of_supply_state_code: string | null;
  reverse_charge: boolean;
  is_interstate: boolean;
  notes: string | null;
  terms_and_conditions: string | null;
  seller_snapshot: Record<string, unknown>;
  buyer_snapshot: Record<string, unknown>;
  created_by: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
  issued_at: string | null;
  cancelled_at: string | null;
}

export type InvoiceInsert = Omit<Invoice, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type InvoiceUpdate = Partial<InvoiceInsert>;

// 7. invoice_items
export interface InvoiceItem {
  id: string;
  invoice_id: string;
  item_id: string | null;
  description_snapshot: string;
  sku_snapshot: string | null;
  hsn_sac_snapshot: string | null;
  unit_snapshot: string;
  quantity: number;
  unit_price: number;
  discount_type: DiscountType | null;
  discount_value: number | null;
  discount_amount: number;
  tax_rate: number;
  taxable_amount: number;
  cgst_rate: number | null;
  cgst_amount: number | null;
  sgst_rate: number | null;
  sgst_amount: number | null;
  igst_rate: number | null;
  igst_amount: number | null;
  cess_rate: number | null;
  cess_amount: number | null;
  line_subtotal: number;
  line_total: number;
  sort_order: number;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export type InvoiceItemInsert = Omit<InvoiceItem, "id" | "created_at"> & {
  id?: string;
  created_at?: string;
};

export type InvoiceItemUpdate = Partial<InvoiceItemInsert>;

// 8. payment_links
export interface PaymentLinkRecord {
  id: string;
  invoice_id: string;
  client_id: string;
  provider: string;
  provider_link_id: string;
  provider_reference_id: string | null;
  amount: number;
  currency: string;
  status: string;
  short_url: string;
  description: string | null;
  expires_at: string | null;
  accept_partial: boolean;
  minimum_partial_amount: number | null;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  reminder_enabled: boolean;
  callback_url: string | null;
  metadata: Record<string, unknown> | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  cancelled_at: string | null;
  expired_at: string | null;
}

export type PaymentLinkRecordInsert = Omit<PaymentLinkRecord, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type PaymentLinkRecordUpdate = Partial<PaymentLinkRecordInsert>;

// 9. payments
export interface PaymentRecord {
  id: string;
  invoice_id: string;
  payment_link_id: string | null;
  provider: string;
  provider_payment_id: string | null;
  provider_order_id: string | null;
  amount: number;
  currency: string;
  status: PaymentRecordStatus;
  payment_method: string | null;
  payment_method_details: Record<string, unknown> | null;
  captured_at: string | null;
  failed_at: string | null;
  failure_reason: string | null;
  payer_name: string | null;
  payer_email: string | null;
  payer_phone: string | null;
  provider_fee: number | null;
  provider_tax: number | null;
  net_amount: number | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export type PaymentRecordInsert = Omit<PaymentRecord, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type PaymentRecordUpdate = Partial<PaymentRecordInsert>;

// 10. webhook_events
export interface WebhookEventRecord {
  id: string;
  provider: string;
  provider_event_id: string;
  event_type: string;
  payload: Record<string, unknown>;
  status: WebhookStatus;
  processing_attempts: number;
  received_at: string;
  processed_at: string | null;
  error_message: string | null;
  created_at: string;
}

export type WebhookEventRecordInsert = Omit<WebhookEventRecord, "id" | "created_at"> & {
  id?: string;
  created_at?: string;
};

export type WebhookEventRecordUpdate = Partial<WebhookEventRecordInsert>;

// 11. payment_transactions
export interface PaymentTransactionRecord {
  id: string;
  invoice_id: string;
  payment_id: string | null;
  transaction_type: string;
  amount: number;
  balance_before: number;
  balance_after: number;
  source: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export type PaymentTransactionRecordInsert = Omit<PaymentTransactionRecord, "id" | "created_at"> & {
  id?: string;
  created_at?: string;
};

// 12. audit_logs
export interface AuditLogRecord {
  id: string;
  actor_user_id: string | null;
  action: string;
  entity_type: string;
  entity_id: string;
  old_values: Record<string, unknown> | null;
  new_values: Record<string, unknown> | null;
  ip_address: string | null;
  user_agent: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export type AuditLogRecordInsert = Omit<AuditLogRecord, "id" | "created_at"> & {
  id?: string;
  created_at?: string;
};
