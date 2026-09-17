import type { Metadata } from "next";
import { AdminPageHeader } from "@/components/admin/shared";
import { AdminTable } from "@/components/admin/team/AdminTable";
import { getTeamMembers } from "@/modules/admin/queries/teamQueries";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const metadata: Metadata = {
  title: "Team & Admins | Growth Service Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export const revalidate = 0; // Fresh team data on each load

export default async function AdminTeamPage() {
  const [adminUser, members] = await Promise.all([
    assertAdminUser(),
    getTeamMembers(),
  ]);

  // Enforce team:read permission
  assertPermission(adminUser, "team:read");

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <AdminPageHeader
        title="Administrators & Staff"
        description="Manage administrator profiles, assign role-based permissions, and control portal credentials."
      />
      <AdminTable
        initialMembers={members}
        currentUserId={adminUser.id}
        currentUserRole={adminUser.role}
      />
    </div>
  );
}
