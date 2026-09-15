import "server-only";
import { createAdminClient } from "@/lib/supabase/server";
import type { PaymentLinkRecord } from "../types/database";

/**
 * Fetch all payment links generated for a specific invoice, ordered newest first.
 */
export async function getPaymentLinksForInvoice(invoiceId: string): Promise<PaymentLinkRecord[]> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("payment_links")
      .select("*")
      .eq("invoice_id", invoiceId)
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("[getPaymentLinksForInvoice] Query error:", error.message);
      return [];
    }

    return (data || []) as PaymentLinkRecord[];
  } catch (err) {
    console.warn("[getPaymentLinksForInvoice] Handled fetch error:", err);
    return [];
  }
}

/**
 * Fetch a single payment link by internal UUID.
 */
export async function getPaymentLinkById(id: string): Promise<PaymentLinkRecord | null> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("payment_links")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return data as PaymentLinkRecord;
  } catch {
    return null;
  }
}

/**
 * Check if an active (created or partially_paid) payment link already exists for this invoice.
 */
export async function getActivePaymentLinkForInvoice(invoiceId: string): Promise<PaymentLinkRecord | null> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("payment_links")
      .select("*")
      .eq("invoice_id", invoiceId)
      .in("status", ["created", "partially_paid"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return data as PaymentLinkRecord;
  } catch {
    return null;
  }
}
