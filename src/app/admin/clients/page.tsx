import type { Metadata } from "next";
import { AdminPageHeader } from "@/components/admin/shared";
import { ClientTable } from "@/components/admin/billing/ClientTable";
import { getClients } from "@/modules/billing/queries/clientQueries";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const metadata: Metadata = {
  title: "Clients Directory | Growth Service Admin",
};

export const revalidate = 0; // Fresh data on each load

export default async function AdminClientsPage() {
  const [adminUser, clients] = await Promise.all([
    assertAdminUser(),
    getClients(),
  ]);
  assertPermission(adminUser, "billing:read");

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <AdminPageHeader
        title="Clients"
        description="Manage client accounts, registered billing profiles, and corporate GSTIN credentials."
      />
      <ClientTable initialClients={clients} />
    </div>
  );
}
