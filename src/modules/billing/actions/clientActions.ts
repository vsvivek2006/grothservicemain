"use server";

import { revalidatePath } from "next/cache";
import { ZodError } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser, assertPermission } from "@/lib/authorization";
import { logAuditEvent } from "@/lib/audit";
import { actionSuccess, actionError, ActionResult } from "@/lib/actions/result";
import { clientFormSchema, ClientFormInput } from "../schemas/client";
import { Client } from "../types/database";

function generateClientCode(companyName: string): string {
  const prefix = companyName
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 3)
    .toUpperCase() || "CLI";
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `GS-${prefix}-${randomSuffix}`;
}

export async function createClientAction(
  input: ClientFormInput
): Promise<ActionResult<Client>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const validated = clientFormSchema.parse(input);
    const adminClient = createAdminClient();

    const clientCode = generateClientCode(validated.company_name);

    // 1. Insert Client Record
    const { data: client, error: clientErr } = await adminClient
      .from("clients")
      .insert({
        client_code: clientCode,
        company_name: validated.company_name,
        contact_name: validated.contact_name,
        email: validated.email,
        phone: validated.phone,
        alternate_phone: validated.alternate_phone || null,
        website: validated.website || null,
        notes: validated.notes || null,
        status: validated.status,
        created_by: adminUser.id,
      })
      .select()
      .single();

    if (clientErr || !client) {
      return actionError(clientErr?.message || "Failed to create client record");
    }

    // 2. Insert Associated Billing Profile
    const profile = validated.billing_profile;
    const { error: profileErr } = await adminClient
      .from("billing_profiles")
      .insert({
        client_id: client.id,
        legal_name: profile.legal_name || validated.company_name,
        display_name: profile.display_name || null,
        billing_email: profile.billing_email || validated.email,
        billing_phone: profile.billing_phone || validated.phone,
        address_line_1: profile.address_line_1,
        address_line_2: profile.address_line_2 || null,
        city: profile.city,
        district: profile.district || null,
        state: profile.state,
        state_code: profile.state_code,
        postal_code: profile.postal_code,
        country: profile.country || "India",
        gstin: profile.gstin || null,
        pan: profile.pan || null,
        tax_registration_type: profile.tax_registration_type,
        currency: profile.currency || "INR",
        payment_terms_days: profile.payment_terms_days || 0,
      });

    if (profileErr) {
      console.error("[createClientAction] Profile creation failed:", profileErr.message);
      await adminClient.from("clients").delete().eq("id", client.id);
      return actionError(`Failed to create client billing profile: ${profileErr.message}`);
    }

    // 3. Insert Contacts if provided
    if (validated.contacts && validated.contacts.length > 0) {
      const contactsToInsert = validated.contacts.map((c) => ({
        client_id: client.id,
        name: c.name,
        email: c.email || null,
        phone: c.phone || null,
        designation: c.designation || null,
        is_primary: c.is_primary,
        is_billing_contact: c.is_billing_contact,
      }));

      await adminClient.from("client_contacts").insert(contactsToInsert);
    }

    // 4. Audit Log Event
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "CLIENT_CREATED",
      entityType: "client",
      entityId: client.id,
      newValues: {
        client_code: client.client_code,
        company_name: client.company_name,
      },
    });

    revalidatePath("/admin/clients");
    return actionSuccess(client as Client);
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      const issue = err.issues[0];
      const field = issue.path[issue.path.length - 1];
      return actionError(`${field ? `${String(field)}: ` : ""}${issue.message}`);
    }
    const msg = err instanceof Error ? err.message : "Error creating client";
    return actionError(msg);
  }
}

export async function updateClientAction(
  id: string,
  input: ClientFormInput
): Promise<ActionResult<Client>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const validated = clientFormSchema.parse(input);
    const adminClient = createAdminClient();

    // 1. Update Client Core Record
    const { data: client, error: clientErr } = await adminClient
      .from("clients")
      .update({
        company_name: validated.company_name,
        contact_name: validated.contact_name,
        email: validated.email,
        phone: validated.phone,
        alternate_phone: validated.alternate_phone || null,
        website: validated.website || null,
        notes: validated.notes || null,
        status: validated.status,
        updated_by: adminUser.id,
      })
      .eq("id", id)
      .select()
      .single();

    if (clientErr || !client) {
      return actionError(clientErr?.message || "Failed to update client record");
    }

    // 2. Upsert/Update Primary Billing Profile
    const profile = validated.billing_profile;
    const { data: existingProfiles } = await adminClient
      .from("billing_profiles")
      .select("id")
      .eq("client_id", id)
      .limit(1);

    if (existingProfiles && existingProfiles.length > 0) {
      await adminClient
        .from("billing_profiles")
        .update({
          legal_name: profile.legal_name || validated.company_name,
          display_name: profile.display_name || null,
          billing_email: profile.billing_email || validated.email,
          billing_phone: profile.billing_phone || validated.phone,
          address_line_1: profile.address_line_1,
          address_line_2: profile.address_line_2 || null,
          city: profile.city,
          district: profile.district || null,
          state: profile.state,
          state_code: profile.state_code,
          postal_code: profile.postal_code,
          country: profile.country || "India",
          gstin: profile.gstin || null,
          pan: profile.pan || null,
          tax_registration_type: profile.tax_registration_type,
          currency: profile.currency || "INR",
          payment_terms_days: profile.payment_terms_days || 0,
        })
        .eq("id", existingProfiles[0].id);
    } else {
      await adminClient.from("billing_profiles").insert({
        client_id: id,
        legal_name: profile.legal_name || validated.company_name,
        display_name: profile.display_name || null,
        billing_email: profile.billing_email || validated.email,
        billing_phone: profile.billing_phone || validated.phone,
        address_line_1: profile.address_line_1,
        address_line_2: profile.address_line_2 || null,
        city: profile.city,
        district: profile.district || null,
        state: profile.state,
        state_code: profile.state_code,
        postal_code: profile.postal_code,
        country: profile.country || "India",
        gstin: profile.gstin || null,
        pan: profile.pan || null,
        tax_registration_type: profile.tax_registration_type,
        currency: profile.currency || "INR",
        payment_terms_days: profile.payment_terms_days || 0,
      });
    }

    // 3. Audit Log Event
    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "CLIENT_UPDATED",
      entityType: "client",
      entityId: id,
      newValues: {
        company_name: validated.company_name,
        status: validated.status,
      },
    });

    revalidatePath("/admin/clients");
    return actionSuccess(client as Client);
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      const issue = err.issues[0];
      const field = issue.path[issue.path.length - 1];
      return actionError(`${field ? `${String(field)}: ` : ""}${issue.message}`);
    }
    const msg = err instanceof Error ? err.message : "Error updating client";
    return actionError(msg);
  }
}

export async function archiveClientAction(
  id: string
): Promise<ActionResult<{ id: string; status: string }>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const adminClient = createAdminClient();
    const { error } = await adminClient
      .from("clients")
      .update({ status: "archived", updated_by: adminUser.id })
      .eq("id", id);

    if (error) {
      return actionError(error.message);
    }

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "CLIENT_ARCHIVED",
      entityType: "client",
      entityId: id,
    });

    revalidatePath("/admin/clients");
    return actionSuccess({ id, status: "archived" });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error archiving client";
    return actionError(msg);
  }
}
