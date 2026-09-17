"use server";

import { revalidatePath } from "next/cache";
import { ZodError } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser, assertPermission, type AdminRole } from "@/lib/authorization";
import { logAuditEvent } from "@/lib/audit";
import { actionSuccess, actionError, type ActionResult } from "@/lib/actions/result";
import {
  createAdminSchema,
  updateAdminSchema,
  type CreateAdminInput,
  type UpdateAdminInput,
} from "../schemas/team";
import { type TeamMember, invalidateTeamCache } from "../queries/teamQueries";

export async function createAdminAction(
  input: CreateAdminInput
): Promise<ActionResult<TeamMember>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "team:manage");

    const validated = createAdminSchema.parse(input);
    const adminClient = createAdminClient();

    // Hierarchy Guard: Regular admin cannot create a Super Admin
    if (adminUser.role !== "superadmin" && validated.role === "superadmin") {
      return actionError(
        "Permission denied: Only Super Administrators can create a Super Admin account."
      );
    }

    const { data, error } = await adminClient.auth.admin.createUser({
      email: validated.email,
      password: validated.password,
      email_confirm: true,
      app_metadata: {
        role: validated.role,
        provider: "email",
        providers: ["email"],
      },
      user_metadata: {
        name: validated.name,
      },
    });

    if (error || !data.user) {
      console.error("[createAdminAction] Supabase createUser error:", error?.message);
      return actionError(error?.message || "Failed to create administrator account.");
    }

    const newMember: TeamMember = {
      id: data.user.id,
      email: data.user.email || validated.email,
      name: validated.name,
      role: validated.role,
      created_at: data.user.created_at,
      last_sign_in_at: null,
    };

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "ADMIN_CREATED",
      entityType: "admin_user",
      entityId: data.user.id,
      newValues: {
        email: validated.email,
        name: validated.name,
        role: validated.role,
      },
    });

    invalidateTeamCache();
    revalidatePath("/admin/team");
    return actionSuccess(newMember);
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      const issue = err.issues[0];
      const field = issue.path[issue.path.length - 1];
      return actionError(`${field ? `${String(field)}: ` : ""}${issue.message}`);
    }
    const msg = err instanceof Error ? err.message : "Error creating administrator account.";
    return actionError(msg);
  }
}

export async function updateAdminAction(
  id: string,
  input: UpdateAdminInput
): Promise<ActionResult<TeamMember>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "team:manage");

    const validated = updateAdminSchema.parse(input);
    const adminClient = createAdminClient();

    // 1. Fetch current target user from auth
    const { data: targetData, error: fetchErr } = await adminClient.auth.admin.getUserById(id);
    if (fetchErr || !targetData?.user) {
      return actionError("Administrator record not found.");
    }

    const targetUser = targetData.user;
    const currentTargetRole = (targetUser.app_metadata?.role as AdminRole) || "editor";

    // 2. Hierarchy Guards
    if (adminUser.role !== "superadmin") {
      // Regular admin cannot touch a superadmin profile
      if (currentTargetRole === "superadmin") {
        return actionError("Access denied: Regular administrators cannot modify a Super Admin profile.");
      }
      // Regular admin cannot elevate anyone to superadmin
      if (validated.role === "superadmin") {
        return actionError("Access denied: Regular administrators cannot promote any account to Super Admin.");
      }
    }

    // 3. Last Superadmin Guard (Prevent demoting last superadmin)
    if (currentTargetRole === "superadmin" && validated.role !== "superadmin") {
      const { data: allUsers } = await adminClient.auth.admin.listUsers();
      const superAdmins = (allUsers?.users || []).filter(
        (u: any) => u.app_metadata?.role === "superadmin"
      );
      if (superAdmins.length <= 1) {
        return actionError(
          "Action prohibited: Cannot demote the last remaining Super Administrator in the system."
        );
      }
    }

    // 4. Perform Update
    const updatePayload: {
      email?: string;
      password?: string;
      app_metadata: Record<string, unknown>;
      user_metadata: Record<string, unknown>;
    } = {
      email: validated.email,
      app_metadata: {
        ...targetUser.app_metadata,
        role: validated.role,
      },
      user_metadata: {
        ...targetUser.user_metadata,
        name: validated.name,
      },
    };

    if (validated.password && validated.password.trim().length > 0) {
      updatePayload.password = validated.password;
    }

    const { data: updatedData, error: updateErr } = await adminClient.auth.admin.updateUserById(
      id,
      updatePayload
    );

    if (updateErr || !updatedData.user) {
      return actionError(updateErr?.message || "Failed to update administrator profile.");
    }

    const updatedMember: TeamMember = {
      id: updatedData.user.id,
      email: updatedData.user.email || validated.email,
      name: validated.name,
      role: validated.role,
      created_at: updatedData.user.created_at,
      last_sign_in_at: updatedData.user.last_sign_in_at || null,
    };

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "ADMIN_UPDATED",
      entityType: "admin_user",
      entityId: id,
      oldValues: {
        email: targetUser.email,
        role: currentTargetRole,
        name: targetUser.user_metadata?.name,
      },
      newValues: {
        email: validated.email,
        role: validated.role,
        name: validated.name,
      },
    });

    invalidateTeamCache();
    revalidatePath("/admin/team");
    return actionSuccess(updatedMember);
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      const issue = err.issues[0];
      const field = issue.path[issue.path.length - 1];
      return actionError(`${field ? `${String(field)}: ` : ""}${issue.message}`);
    }
    const msg = err instanceof Error ? err.message : "Error updating administrator profile.";
    return actionError(msg);
  }
}

export async function deleteAdminAction(
  id: string
): Promise<ActionResult<{ id: string }>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "team:manage");

    // Guard 1: Cannot delete self
    if (id === adminUser.id) {
      return actionError("Self-deletion prohibited: You cannot delete your own active administrator account.");
    }

    const adminClient = createAdminClient();

    // Guard 2: Fetch target user to verify role
    const { data: targetData, error: fetchErr } = await adminClient.auth.admin.getUserById(id);
    if (fetchErr || !targetData?.user) {
      return actionError("Administrator record not found.");
    }

    const targetRole = targetData.user.app_metadata?.role as AdminRole | undefined;

    // Guard 3: Admin cannot delete Super Admin
    if (adminUser.role !== "superadmin" && targetRole === "superadmin") {
      return actionError("Access denied: Regular administrators cannot delete a Super Admin profile.");
    }

    // Guard 4: Cannot delete the last Super Admin
    if (targetRole === "superadmin") {
      const { data: allUsers } = await adminClient.auth.admin.listUsers();
      const superAdmins = (allUsers?.users || []).filter(
        (u: any) => u.app_metadata?.role === "superadmin"
      );
      if (superAdmins.length <= 1) {
        return actionError(
          "Action prohibited: Cannot delete the only remaining Super Administrator in the system."
        );
      }
    }

    const { error: deleteErr } = await adminClient.auth.admin.deleteUser(id);
    if (deleteErr) {
      return actionError(deleteErr.message || "Failed to delete administrator account.");
    }

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "ADMIN_DELETED",
      entityType: "admin_user",
      entityId: id,
      oldValues: {
        email: targetData.user.email,
        role: targetRole,
      },
    });

    invalidateTeamCache();
    revalidatePath("/admin/team");
    return actionSuccess({ id });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error deleting administrator account.";
    return actionError(msg);
  }
}
