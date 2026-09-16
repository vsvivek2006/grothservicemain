import React from "react";
import type { Metadata } from "next";
import { getBillingDashboardData } from "@/modules/billing/queries/dashboardQueries";
import { BillingDashboardView } from "@/components/admin/billing/BillingDashboardView";

import { assertAdminUser, assertPermission } from "@/lib/authorization";

export const revalidate = 0; // Always fetch real-time financial metrics

export const metadata: Metadata = {
  title: "Billing Overview | Admin | Growth Service",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BillingDashboardPage() {
  const adminUser = await assertAdminUser();
  assertPermission(adminUser, "billing:read");

  const data = await getBillingDashboardData();

  return (
    <BillingDashboardView
      stats={data.stats}
      recentPayments={data.recentPayments}
      recentPaymentLinks={data.recentPaymentLinks}
      recentInvoices={data.recentInvoices}
    />
  );
}
