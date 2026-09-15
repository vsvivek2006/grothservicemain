import "server-only";

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
    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      ...entry,
    };

    // Structured server-side audit log output
    console.info(`[AUDIT_LOG] [${entry.action}] [${entry.entityType}:${entry.entityId}] by user:${entry.actorUserId}`, {
      action: entry.action,
      entityType: entry.entityType,
      entityId: entry.entityId,
      actorUserId: entry.actorUserId,
      hasChanges: Boolean(entry.oldValues || entry.newValues),
    });

    // NOTE: In Phase 2, when the `audit_logs` table is provisioned,
    // this function will persist records directly via createAdminClient().
  } catch (err) {
    // Non-blocking catch
    console.error("[AUDIT_LOG_FAILURE] Failed to record audit log event:", err);
  }
}
