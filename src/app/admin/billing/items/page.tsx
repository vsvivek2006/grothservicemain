import type { Metadata } from "next";
import { AdminPageHeader } from "@/components/admin/shared";
import { ItemTable } from "@/components/admin/billing";
import { getBillingItems } from "@/modules/billing/queries/itemQueries";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const metadata: Metadata = {
  title: "Item & Service Catalog | Growth Service Admin",
};

export const revalidate = 0; // Fresh catalog data on load

export default async function AdminBillingItemsPage() {
  const adminUser = await assertAdminUser();
  assertPermission(adminUser, "billing:read");

  const items = await getBillingItems();

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <AdminPageHeader
        title="Item & Service Catalog"
        description="Configure standardized service packages, consulting fees, HSN/SAC tax codes, and default pricing."
      />
      <ItemTable initialItems={items} />
    </div>
  );
}
