import { z } from "zod";

export const billingItemFormSchema = z.object({
  sku: z
    .string()
    .min(2, "SKU must be at least 2 characters")
    .max(50)
    .regex(/^[A-Za-z0-9-_]+$/, "SKU may only contain letters, numbers, hyphens, and underscores")
    .transform((val) => val.toUpperCase().trim()),
  name: z.string().min(1, "Item name is required").max(150),
  short_name: z.string().max(80).optional().or(z.literal("")),
  description: z.string().max(1000).optional().or(z.literal("")),
  item_type: z.enum(["service", "product", "retainer", "custom"]).default("service"),
  service_category: z.string().max(100).optional().or(z.literal("")),
  hsn_sac_code: z.string().max(20).optional().or(z.literal("")),
  unit: z.string().min(1, "Unit of measurement is required").default("unit"),
  default_unit_price: z.coerce.number().min(0, "Unit price cannot be negative"),
  default_tax_rate: z.coerce.number().min(0, "Tax rate cannot be negative").max(100).default(18),
  default_discount_type: z.enum(["percentage", "fixed"]).nullable().optional(),
  default_discount_value: z.coerce.number().min(0).nullable().optional(),
  currency: z.string().default("INR"),
  is_taxable: z.boolean().default(true),
  is_active: z.boolean().default(true),
});

export type BillingItemFormInput = z.infer<typeof billingItemFormSchema>;
