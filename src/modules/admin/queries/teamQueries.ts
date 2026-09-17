import { createAdminClient } from "@/lib/supabase/server";
import type { AdminRole } from "@/lib/authorization";

export interface TeamMember {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  created_at: string;
  last_sign_in_at: string | null;
}

const ROLE_PRIORITY: Record<AdminRole, number> = {
  superadmin: 1,
  admin: 2,
  billing_manager: 3,
  editor: 4,
};

let cachedMembers: { data: TeamMember[]; timestamp: number } | null = null;
const CACHE_TTL_MS = 20 * 1000;

export function invalidateTeamCache(): void {
  cachedMembers = null;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    if (cachedMembers && Date.now() - cachedMembers.timestamp < CACHE_TTL_MS) {
      return cachedMembers.data;
    }

    const adminClient = createAdminClient();
    const { data, error } = await adminClient.auth.admin.listUsers({
      page: 1,
      perPage: 100,
    });

    if (error || !data?.users) {
      console.error("[getTeamMembers] Failed to list users:", error?.message);
      return [];
    }

    const validRoles: AdminRole[] = ["superadmin", "admin", "billing_manager", "editor"];

    const members: TeamMember[] = data.users
      .filter((u) => {
        const role = u.app_metadata?.role as AdminRole | undefined;
        return role && validRoles.includes(role);
      })
      .map((u) => {
        const role = u.app_metadata.role as AdminRole;
        const name =
          (u.user_metadata?.name as string | undefined) ||
          (u.user_metadata?.full_name as string | undefined) ||
          u.email?.split("@")[0] ||
          "Admin User";

        return {
          id: u.id,
          email: u.email || "",
          name,
          role,
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at || null,
        };
      });

    // Sort by role hierarchy then by created_at desc
    members.sort((a, b) => {
      const priorityDiff = ROLE_PRIORITY[a.role] - ROLE_PRIORITY[b.role];
      if (priorityDiff !== 0) return priorityDiff;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    cachedMembers = { data: members, timestamp: Date.now() };

    return members;
  } catch (err) {
    console.error("[getTeamMembers] Unexpected error:", err);
    return [];
  }
}
