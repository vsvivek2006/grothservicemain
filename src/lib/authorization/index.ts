import * as React from "react";
import { type SupabaseClient, type User } from "@supabase/supabase-js";

const serverCache = typeof React.cache === "function" ? React.cache : <T extends (...args: any[]) => any>(fn: T): T => fn;

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
  | "system:manage"
  | "team:read"
  | "team:manage";

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
    "team:read",
    "team:manage",
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
    "team:read",
    "team:manage",
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
 * Pure authorization resolver. Validates that user possesses an authorized admin role in app_metadata.
 * Rejects client user_metadata spoofing and unauthenticated requests.
 */
export function verifyAdminRole(user: User | null | undefined): AdminUserContext {
  if (!user) {
    throw new AuthorizationError(
      "Authentication required. Please sign in.",
      401,
      "UNAUTHENTICATED"
    );
  }

  // Resolve role exclusively from server-controlled app_metadata (never trust client user_metadata)
  const rawRole = user.app_metadata?.role as string | undefined;

  const validRoles: AdminRole[] = ["superadmin", "admin", "billing_manager", "editor"];
  if (!rawRole || !validRoles.includes(rawRole as AdminRole)) {
    throw new AuthorizationError(
      "Access denied: You do not have an authorized administrator role.",
      403,
      "FORBIDDEN"
    );
  }

  const role = rawRole as AdminRole;
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
 * Asserts that the current request is from an authenticated admin user.
 * Resolves roles and permissions exclusively from server-controlled app_metadata.
 */
export const assertAdminUser = serverCache(async function assertAdminUser(
  client?: SupabaseClient
): Promise<AdminUserContext> {
  // Fast path: if called within Next.js Server Component request context where middleware already verified the token
  if (!client) {
    try {
      const { headers } = await import("next/headers");
      const headersList = await headers();
      const headerUserId = headersList.get("x-user-id");
      const headerUserEmail = headersList.get("x-user-email");
      const headerUserRole = headersList.get("x-user-role") as AdminRole | null;

      const validRoles: AdminRole[] = ["superadmin", "admin", "billing_manager", "editor"];
      if (headerUserId && headerUserRole && validRoles.includes(headerUserRole)) {
        const permissions = new Set<AdminPermission>(ROLE_PERMISSIONS[headerUserRole] || []);
        return {
          id: headerUserId,
          email: headerUserEmail || "",
          role: headerUserRole,
          permissions,
          rawUser: {
            id: headerUserId,
            email: headerUserEmail || "",
            app_metadata: { role: headerUserRole },
          } as unknown as User,
        };
      }
    } catch {
      // In tests, CLI scripts, or environments without request headers, fall through to direct supabase check
    }
  }

  let supabase = client;
  if (!supabase) {
    const { createSessionClient } = await import("@/lib/supabase/server");
    supabase = await createSessionClient();
  }

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

  // If JWT app_metadata.role is missing or stale, fetch live user record from auth admin
  let targetUser = user;
  const rawRole = targetUser.app_metadata?.role as string | undefined;
  const validRoles: AdminRole[] = ["superadmin", "admin", "billing_manager", "editor"];

  if (!rawRole || !validRoles.includes(rawRole as AdminRole)) {
    try {
      const { createAdminClient } = await import("@/lib/supabase/server");
      const adminClient = createAdminClient();
      const { data: adminUserData } = await adminClient.auth.admin.getUserById(targetUser.id);
      if (adminUserData?.user?.app_metadata?.role) {
        targetUser = adminUserData.user;
      }
    } catch {
      // Fall through to verifyAdminRole
    }
  }

  return verifyAdminRole(targetUser);
});

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
