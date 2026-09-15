import React from "react";
import type { Metadata } from "next";
import { getPayments, getPaymentTransactions } from "@/modules/billing/queries/paymentQueries";
import { PaymentLedgerView } from "@/components/admin/billing/PaymentLedgerView";

export const revalidate = 0; // Fresh real-time financial ledger

export const metadata: Metadata = {
  title: "Payments & Ledger | Admin | Growth Service",
  robots: {
    index: false,
    follow: false,
  },
};

interface PageProps {
  searchParams: Promise<{
    page?: string;
    status?: string;
    search?: string;
  }>;
}

export default async function PaymentsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const status = params.status || "all";
  const search = params.search || "";

  const [paymentData, transactions] = await Promise.all([
    getPayments({ page, limit: 20, status, search }),
    getPaymentTransactions(30),
  ]);

  return (
    <PaymentLedgerView
      payments={paymentData.payments}
      totalCount={paymentData.totalCount}
      page={paymentData.page}
      totalPages={paymentData.totalPages}
      summary={paymentData.summary}
      transactions={transactions}
      currentStatus={status}
      currentSearch={search}
    />
  );
}
