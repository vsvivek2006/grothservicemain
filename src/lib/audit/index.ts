import "server-only";
import { createAdminClient } from "@/lib/supabase/server";

export type AuditAction =
  | "INVOICE_CREATED"
  | "INVOICE_UPDATED"
  | "INVOICE_ISSUED"
  | "INVOICE_CANCELLED"
  | "PAYMENT_LINK_CREATED"
  | "PAYMENT_LINK_CANCELLED"
  | "PAYMENT_RECORDED"
  | "PAYMENT_STATUS_CHANGED"
  | "REFUND_CREATED"
  | "CLIENT_CREATED"
  | "CLIENT_UPDATED"
  | "CLIENT_ARCHIVED"
  | "BILLING_PROFILE_UPDATED"
  | "ITEM_CREATED"
  | "ITEM_UPDATED"
  | "ITEM_ARCHIVED"
  | "POST_CREATED"
  | "POST_UPDATED"
  | "POST_DELETED";

export interface AuditLogEntry {
  actorUserId: string;
  action: AuditAction;
  entityType: "client" | "billing_profile" | "billing_item" | "invoice" | "payment_link" | "payment" | "refund" | "post";
  entityId: string;
  oldValues?: Record<string, unknown> | null;
  newValues?: Record<string, unknown> | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  metadata?: Record<string, unknown> | null;
}

/**
 * Standard audit logger.
 * Safe error boundary: audit logging failures must never block or crash
 * the primary business transaction.
 */
export async function logAuditEvent(entry: AuditLogEntry): Promise<void> {
  try {
    // 1. Structured server-side console output
    console.info(`[AUDIT_LOG] [${entry.action}] [${entry.entityType}:${entry.entityId}] by user:${entry.actorUserId}`, {
      action: entry.action,
      entityType: entry.entityType,
      entityId: entry.entityId,
      actorUserId: entry.actorUserId,
      hasChanges: Boolean(entry.oldValues || entry.newValues),
    });

    // 2. Persist to audit_logs table in Supabase
    try {
      const adminClient = createAdminClient();
      await adminClient.from("audit_logs").insert({
        actor_user_id: entry.actorUserId,
        action: entry.action,
        entity_type: entry.entityType,
        entity_id: entry.entityId,
        old_values: entry.oldValues ?? null,
        new_values: entry.newValues ?? null,
        ip_address: entry.ipAddress ?? null,
        user_agent: entry.userAgent ?? null,
        metadata: entry.metadata ?? null,
      });
    } catch {
      // Gracefully silent if table not yet migrated on remote Supabase instance
    }
  } catch (err) {
    // Non-blocking catch
    console.error("[AUDIT_LOG_FAILURE] Failed to record audit log event:", err);
  }
}

