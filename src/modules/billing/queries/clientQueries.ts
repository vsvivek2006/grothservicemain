import "server-only";
import { createAdminClient } from "@/lib/supabase/server";
import { Client, BillingProfile, ClientContact } from "../types/database";

export interface ClientListItem extends Client {
  billing_profile?: BillingProfile | null;
  contacts_count?: number;
}

export async function getClients(options?: {
  search?: string;
  status?: string;
}): Promise<ClientListItem[]> {
  try {
    const supabase = createAdminClient();
    let query = supabase
      .from("clients")
      .select("*, billing_profiles(*), client_contacts(id)")
      .order("created_at", { ascending: false });

    if (options?.status && options.status !== "all") {
      query = query.eq("status", options.status);
    }

    if (options?.search && options.search.trim().length > 0) {
      const term = options.search.trim();
      query = query.or(
        `company_name.ilike.%${term}%,contact_name.ilike.%${term}%,client_code.ilike.%${term}%,email.ilike.%${term}%`
      );
    }

    const { data, error } = await query;
    if (error) {
      console.warn("[getClients] Database query warning:", error.message);
      return [];
    }

    return (data || []).map((row: any) => ({
      ...row,
      billing_profile: Array.isArray(row.billing_profiles)
        ? row.billing_profiles[0] || null
        : row.billing_profiles || null,
      contacts_count: Array.isArray(row.client_contacts)
        ? row.client_contacts.length
        : 0,
    }));
  } catch (err) {
    console.warn("[getClients] Handled fetch error (e.g. table not yet migrated):", err);
    return [];
  }
}

export async function getClientById(id: string): Promise<{
  client: Client;
  billingProfile: BillingProfile | null;
  contacts: ClientContact[];
} | null> {
  try {
    const supabase = createAdminClient();
    const [
      { data: client, error: clientErr },
      { data: profiles },
      { data: contacts },
    ] = await Promise.all([
      supabase.from("clients").select("*").eq("id", id).single(),
      supabase.from("billing_profiles").select("*").eq("client_id", id),
      supabase.from("client_contacts").select("*").eq("client_id", id).order("created_at", { ascending: true }),
    ]);

    if (clientErr || !client) return null;

    return {
      client,
      billingProfile: (profiles && profiles[0]) || null,
      contacts: contacts || [],
    };
  } catch (err) {
    console.warn("[getClientById] Handled fetch error:", err);
    return null;
  }
}
