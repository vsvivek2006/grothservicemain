"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser, assertPermission } from "@/lib/authorization";
import { logAuditEvent } from "@/lib/audit";
import { actionSuccess, actionError, ActionResult } from "@/lib/actions/result";
import { billingItemFormSchema, BillingItemFormInput } from "../schemas/item";
import { BillingItem } from "../types/database";

export async function createBillingItemAction(
  input: BillingItemFormInput
): Promise<ActionResult<BillingItem>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const validated = billingItemFormSchema.parse(input);
    const adminClient = createAdminClient();

    const { data: item, error } = await adminClient
      .from("billing_items")
      .insert({
        sku: validated.sku,
        name: validated.name,
        short_name: validated.short_name || null,
        description: validated.description || null,
        item_type: validated.item_type,
        service_category: validated.service_category || null,
        hsn_sac_code: validated.hsn_sac_code || null,
        unit: validated.unit,
        default_unit_price: validated.default_unit_price,
        default_tax_rate: validated.default_tax_rate,
        default_discount_type: validated.default_discount_type || null,
        default_discount_value: validated.default_discount_value || null,
        currency: validated.currency,
        is_taxable: validated.is_taxable,
        is_active: validated.is_active,
        created_by: adminUser.id,
      })
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return actionError("An item with this SKU already exists. Please choose a unique SKU.");
      }
      return actionError(error.message);
    }

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "ITEM_CREATED",
      entityType: "billing_item",
      entityId: item.id,
      newValues: { sku: item.sku, name: item.name, price: item.default_unit_price },
    });

    revalidatePath("/admin/billing/items");
    return actionSuccess(item as BillingItem);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error creating catalog item";
    return actionError(msg);
  }
}

export async function updateBillingItemAction(
  id: string,
  input: BillingItemFormInput
): Promise<ActionResult<BillingItem>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const validated = billingItemFormSchema.parse(input);
    const adminClient = createAdminClient();

    const { data: item, error } = await adminClient
      .from("billing_items")
      .update({
        sku: validated.sku,
        name: validated.name,
        short_name: validated.short_name || null,
        description: validated.description || null,
        item_type: validated.item_type,
        service_category: validated.service_category || null,
        hsn_sac_code: validated.hsn_sac_code || null,
        unit: validated.unit,
        default_unit_price: validated.default_unit_price,
        default_tax_rate: validated.default_tax_rate,
        default_discount_type: validated.default_discount_type || null,
        default_discount_value: validated.default_discount_value || null,
        currency: validated.currency,
        is_taxable: validated.is_taxable,
        is_active: validated.is_active,
        updated_by: adminUser.id,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return actionError("An item with this SKU already exists.");
      }
      return actionError(error.message);
    }

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "ITEM_UPDATED",
      entityType: "billing_item",
      entityId: id,
      newValues: { sku: validated.sku, name: validated.name, price: validated.default_unit_price },
    });

    revalidatePath("/admin/billing/items");
    return actionSuccess(item as BillingItem);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error updating catalog item";
    return actionError(msg);
  }
}

export async function toggleBillingItemActiveAction(
  id: string,
  isActive: boolean
): Promise<ActionResult<{ id: string; is_active: boolean }>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const adminClient = createAdminClient();
    const { error } = await adminClient
      .from("billing_items")
      .update({ is_active: isActive, updated_by: adminUser.id })
      .eq("id", id);

    if (error) return actionError(error.message);

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "ITEM_UPDATED",
      entityType: "billing_item",
      entityId: id,
      newValues: { is_active: isActive },
    });

    revalidatePath("/admin/billing/items");
    return actionSuccess({ id, is_active: isActive });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error toggling item status";
    return actionError(msg);
  }
}

export async function archiveBillingItemAction(
  id: string
): Promise<ActionResult<{ id: string }>> {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "billing:write");

    const adminClient = createAdminClient();
    // Mark inactive per catalog soft-archive rules
    const { error } = await adminClient
      .from("billing_items")
      .update({ is_active: false, updated_by: adminUser.id })
      .eq("id", id);

    if (error) return actionError(error.message);

    await logAuditEvent({
      actorUserId: adminUser.id,
      action: "ITEM_ARCHIVED",
      entityType: "billing_item",
      entityId: id,
    });

    revalidatePath("/admin/billing/items");
    return actionSuccess({ id });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error archiving item";
    return actionError(msg);
  }
}
