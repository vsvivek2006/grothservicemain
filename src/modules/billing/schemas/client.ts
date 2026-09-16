import { z } from "zod";

export const clientContactSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Contact name is required").max(100),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().max(20).optional().or(z.literal("")),
  designation: z.string().max(100).optional().or(z.literal("")),
  is_primary: z.boolean().default(false),
  is_billing_contact: z.boolean().default(false),
});

export const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
export const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

export const billingProfileSchema = z
  .object({
    legal_name: z.string().min(1, "Legal company/individual name is required").max(150),
    display_name: z.string().max(100).optional().or(z.literal("")),
    billing_email: z.string().email("Invalid billing email").optional().or(z.literal("")),
    billing_phone: z.string().max(20).optional().or(z.literal("")),
    address_line_1: z.string().max(255).default("N/A"),
    address_line_2: z.string().max(255).optional().or(z.literal("")),
    city: z.string().max(100).default("N/A"),
    district: z.string().max(100).optional().or(z.literal("")),
    state: z.string().min(1, "State is required").max(100).default("Rajasthan"),
    state_code: z.string().min(1, "State code is required").max(10).default("08"),
    postal_code: z.string().max(20).default("000000"),
    country: z.string().default("India"),
    gstin: z
      .string()
      .trim()
      .toUpperCase()
      .refine(
        (val) => !val || GSTIN_REGEX.test(val),
        "Invalid Indian GSTIN format (must be 15 characters, e.g. 08AAAAA0000A1Z5)"
      )
      .optional()
      .or(z.literal("")),
    pan: z
      .string()
      .trim()
      .toUpperCase()
      .refine(
        (val) => !val || PAN_REGEX.test(val),
        "Invalid Indian PAN format (must be 10 characters, e.g. AAAAA0000A)"
      )
      .optional()
      .or(z.literal("")),
    tax_registration_type: z
      .enum(["regular", "composition", "unregistered", "overseas", "consumer"])
      .default("unregistered"),
    currency: z.string().default("INR"),
    payment_terms_days: z.coerce.number().min(0).default(0),
  })
  .refine(
    (data) => {
      if (data.gstin && data.gstin.length === 15 && data.state_code) {
        return data.gstin.slice(0, 2) === data.state_code.padStart(2, "0");
      }
      return true;
    },
    {
      message: "GSTIN state code prefix does not match the selected billing state code",
      path: ["gstin"],
    }
  );

export const clientFormSchema = z.object({
  company_name: z.string().min(1, "Company / Brand name is required").max(150),
  contact_name: z.string().min(1, "Primary contact name is required").max(100),
  email: z.string().email("Valid business email is required"),
  phone: z.string().min(5, "Contact phone number is required").max(20),
  alternate_phone: z.string().max(20).optional().or(z.literal("")),
  website: z.string().max(255).optional().or(z.literal("")),
  notes: z.string().max(1000).optional().or(z.literal("")),
  status: z.enum(["active", "inactive", "archived"]).default("active"),
  billing_profile: billingProfileSchema,
  contacts: z.array(clientContactSchema).optional().default([]),
});

export type ClientFormInput = z.input<typeof clientFormSchema>;
export type ClientFormOutput = z.output<typeof clientFormSchema>;
export type BillingProfileInput = z.input<typeof billingProfileSchema>;
export type ClientContactInput = z.input<typeof clientContactSchema>;
