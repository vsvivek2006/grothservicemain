import { z } from "zod";

export const invoiceItemInputSchema = z.object({
  item_id: z.string().uuid().optional().nullable(),
  description: z.string().min(1, "Item description is required").max(500),
  sku: z.string().max(50).optional().nullable(),
  hsn_sac: z.string().max(20).optional().nullable(),
  unit: z.string().default("unit"),
  quantity: z.coerce.number().min(0.01, "Quantity must be greater than 0"),
  unit_price: z.coerce.number().min(0, "Unit price must be non-negative"),
  discount_type: z.enum(["percentage", "fixed"]).optional().nullable(),
  discount_value: z.coerce.number().min(0).optional().nullable(),
  tax_rate: z.coerce.number().min(0).max(100).default(18),
  sort_order: z.coerce.number().default(0),
});

export const createInvoiceSchema = z.object({
  client_id: z.string().uuid("Client selection is required"),
  billing_profile_id: z.string().uuid().optional().nullable(),
  invoice_type: z.enum(["tax_invoice", "proforma", "receipt"]).default("tax_invoice"),
  issue_date: z.string().optional().nullable(),
  supply_date: z.string().optional().nullable(),
  payment_terms_days: z.coerce.number().min(0).default(0),
  place_of_supply: z.string().optional().nullable(),
  place_of_supply_state_code: z.string().max(10).optional().nullable(),
  reverse_charge: z.boolean().default(false),
  notes: z.string().max(1000).optional().nullable(),
  terms_and_conditions: z.string().max(2000).optional().nullable(),
  items: z.array(invoiceItemInputSchema).min(1, "At least one line item is required"),
});

export const updateInvoiceSchema = createInvoiceSchema;

export const issueInvoiceSchema = z.object({
  invoice_id: z.string().uuid("Invalid invoice ID"),
});

export const cancelInvoiceSchema = z.object({
  invoice_id: z.string().uuid("Invalid invoice ID"),
  reason: z.string().min(1, "Cancellation reason is required").max(500),
});

export type InvoiceItemFormInput = z.input<typeof invoiceItemInputSchema>;
export type InvoiceItemFormOutput = z.output<typeof invoiceItemInputSchema>;
export type CreateInvoiceInput = z.input<typeof createInvoiceSchema>;
export type CreateInvoiceOutput = z.output<typeof createInvoiceSchema>;
export type UpdateInvoiceInput = z.input<typeof updateInvoiceSchema>;
export type CancelInvoiceInput = z.input<typeof cancelInvoiceSchema>;
