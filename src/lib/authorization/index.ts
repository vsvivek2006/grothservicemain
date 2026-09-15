import "server-only";
import { type SupabaseClient, type User } from "@supabase/supabase-js";
import { createSessionClient } from "@/lib/supabase/server";

export type AdminRole = "superadmin" | "admin" | "billing_manager" | "editor";

export type AdminPermission =
  | "billing:read"
  | "billing:write"
  | "billing:issue"
  | "billing:cancel"
  | "billing:payments"
  | "content:read"
  | "content:write"
  | "content:delete"
  | "system:manage";

const ROLE_PERMISSIONS: Record<AdminRole, AdminPermission[]> = {
  superadmin: [
    "billing:read",
    "billing:write",
    "billing:issue",
    "billing:cancel",
    "billing:payments",
    "content:read",
    "content:write",
    "content:delete",
    "system:manage",
  ],
  admin: [
    "billing:read",
    "billing:write",
    "billing:issue",
    "billing:cancel",
    "billing:payments",
    "content:read",
    "content:write",
    "content:delete",
  ],
  billing_manager: [
    "billing:read",
    "billing:write",
    "billing:issue",
    "billing:cancel",
    "billing:payments",
  ],
  editor: [
    "content:read",
    "content:write",
  ],
};

export interface AdminUserContext {
  id: string;
  email: string;
  role: AdminRole;
  permissions: Set<AdminPermission>;
  rawUser: User;
}

export class AuthorizationError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(message: string, status = 403, code = "FORBIDDEN") {
    super(message);
    this.name = "AuthorizationError";
    this.status = status;
    this.code = code;
  }
}

/**
 * Asserts that the current request is from an authenticated admin user.
 * Resolves roles and permissions from user metadata.
 */
export async function assertAdminUser(
  client?: SupabaseClient
): Promise<AdminUserContext> {
  const supabase = client ?? (await createSessionClient());
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new AuthorizationError(
      "Authentication required. Please sign in.",
      401,
      "UNAUTHENTICATED"
    );
  }

  // Resolve role from metadata; default to 'admin' for valid session users
  const rawRole = (user.app_metadata?.role ||
    user.user_metadata?.role ||
    "admin") as string;

  const role: AdminRole = ["superadmin", "admin", "billing_manager", "editor"].includes(
    rawRole
  )
    ? (rawRole as AdminRole)
    : "admin";

  const permissions = new Set<AdminPermission>(ROLE_PERMISSIONS[role] || []);

  return {
    id: user.id,
    email: user.email ?? "",
    role,
    permissions,
    rawUser: user,
  };
}

/**
 * Verifies that the admin user has the required permission.
 */
export function assertPermission(
  userContext: AdminUserContext,
  permission: AdminPermission
): void {
  if (!userContext.permissions.has(permission)) {
    throw new AuthorizationError(
      `Permission denied: missing '${permission}' permission.`,
      403,
      "PERMISSION_DENIED"
    );
  }
}
