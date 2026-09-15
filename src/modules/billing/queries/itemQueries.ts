import "server-only";
import { createAdminClient } from "@/lib/supabase/server";
import { BillingItem } from "../types/database";

export async function getBillingItems(options?: {
  search?: string;
  category?: string;
  activeOnly?: boolean;
}): Promise<BillingItem[]> {
  try {
    const supabase = createAdminClient();
    let query = supabase
      .from("billing_items")
      .select("*")
      .order("name", { ascending: true });

    if (options?.activeOnly) {
      query = query.eq("is_active", true);
    }

    if (options?.category && options.category !== "all") {
      query = query.eq("service_category", options.category);
    }

    if (options?.search && options.search.trim().length > 0) {
      const term = options.search.trim();
      query = query.or(
        `name.ilike.%${term}%,sku.ilike.%${term}%,description.ilike.%${term}%,hsn_sac_code.ilike.%${term}%`
      );
    }

    const { data, error } = await query;
    if (error) {
      console.warn("[getBillingItems] Database query warning:", error.message);
      return [];
    }

    return (data || []) as BillingItem[];
  } catch (err) {
    console.warn("[getBillingItems] Handled fetch error:", err);
    return [];
  }
}

export async function getBillingItemById(id: string): Promise<BillingItem | null> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("billing_items")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;
    return data as BillingItem;
  } catch (err) {
    console.warn("[getBillingItemById] Handled fetch error:", err);
    return null;
  }
}
