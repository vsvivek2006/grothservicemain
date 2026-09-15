import { z } from "zod";

export const createPaymentLinkSchema = z.object({
  invoiceId: z.string().uuid("Invalid invoice ID"),
  amount: z.number().positive("Amount must be greater than zero"),
  description: z.string().max(255).optional(),
  acceptPartial: z.boolean().default(false),
  minPartialAmount: z.number().positive("Minimum partial amount must be greater than zero").optional().nullable(),
  expiresInDays: z.number().int().min(1, "Minimum expiry is 1 day").max(90, "Maximum expiry is 90 days").optional().nullable(),
  reminderEnabled: z.boolean().default(true),
}).refine(
  (data) => {
    if (data.acceptPartial && data.minPartialAmount && data.minPartialAmount > data.amount) {
      return false;
    }
    return true;
  },
  {
    message: "Minimum partial amount cannot exceed total link amount",
    path: ["minPartialAmount"],
  }
);

export type CreatePaymentLinkSchemaInput = z.infer<typeof createPaymentLinkSchema>;
