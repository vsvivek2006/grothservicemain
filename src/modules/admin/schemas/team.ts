import { z } from "zod";
import type { AdminRole } from "@/lib/authorization";

export const adminRoles: [AdminRole, ...AdminRole[]] = [
  "superadmin",
  "admin",
  "billing_manager",
  "editor",
];

export const createAdminSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please provide a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot exceed 100 characters"),
  role: z.enum(adminRoles, {
    message: "Please select a valid admin role",
  }),
});

export type CreateAdminInput = z.infer<typeof createAdminSchema>;

export const updateAdminSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please provide a valid email address"),
  role: z.enum(adminRoles, {
    message: "Please select a valid admin role",
  }),
  password: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.length >= 8,
      "Password must be at least 8 characters if provided"
    ),
});

export type UpdateAdminInput = z.infer<typeof updateAdminSchema>;
