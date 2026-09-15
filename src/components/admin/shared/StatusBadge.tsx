import React from "react";

export type DocumentStatusType = "draft" | "issued" | "sent" | "cancelled" | "void";
export type PaymentStatusType =
  | "unpaid"
  | "partially_paid"
  | "paid"
  | "overdue"
  | "refunded"
  | "partially_refunded";
export type GenericStatusType = "active" | "inactive" | "archived" | "published" | string;

export interface StatusBadgeProps {
  status: DocumentStatusType | PaymentStatusType | GenericStatusType;
  type?: "document" | "payment" | "generic";
  size?: "sm" | "md";
  className?: string;
}

const STATUS_STYLES: Record<string, { bg: string; text: string; dot: string; label: string }> = {
  // Document statuses
  draft: {
    bg: "bg-amber-950/70 border-amber-900/50",
    text: "text-amber-400",
    dot: "bg-amber-400",
    label: "Draft",
  },
  issued: {
    bg: "bg-blue-950/70 border-blue-900/50",
    text: "text-blue-400",
    dot: "bg-blue-400",
    label: "Issued",
  },
  sent: {
    bg: "bg-purple-950/70 border-purple-900/50",
    text: "text-purple-300",
    dot: "bg-purple-400",
    label: "Sent",
  },
  cancelled: {
    bg: "bg-rose-950/70 border-rose-900/50",
    text: "text-rose-400",
    dot: "bg-rose-400",
    label: "Cancelled",
  },
  void: {
    bg: "bg-gray-800/80 border-gray-700/50",
    text: "text-gray-400",
    dot: "bg-gray-500",
    label: "Void",
  },

  // Payment statuses
  unpaid: {
    bg: "bg-amber-950/70 border-amber-900/50",
    text: "text-amber-400",
    dot: "bg-amber-400",
    label: "Unpaid",
  },
  partially_paid: {
    bg: "bg-sky-950/70 border-sky-900/50",
    text: "text-sky-400",
    dot: "bg-sky-400",
    label: "Partially Paid",
  },
  paid: {
    bg: "bg-emerald-950/70 border-emerald-900/50",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    label: "Paid",
  },
  overdue: {
    bg: "bg-rose-950/70 border-rose-900/50",
    text: "text-rose-400",
    dot: "bg-rose-400",
    label: "Overdue",
  },
  refunded: {
    bg: "bg-indigo-950/70 border-indigo-900/50",
    text: "text-indigo-400",
    dot: "bg-indigo-400",
    label: "Refunded",
  },
  partially_refunded: {
    bg: "bg-indigo-950/50 border-indigo-900/40",
    text: "text-indigo-300",
    dot: "bg-indigo-300",
    label: "Partially Refunded",
  },

  // Generic statuses
  active: {
    bg: "bg-emerald-950/70 border-emerald-900/50",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    label: "Active",
  },
  inactive: {
    bg: "bg-gray-800/80 border-gray-700/50",
    text: "text-gray-400",
    dot: "bg-gray-500",
    label: "Inactive",
  },
  archived: {
    bg: "bg-gray-800/80 border-gray-700/50",
    text: "text-gray-400",
    dot: "bg-gray-500",
    label: "Archived",
  },
  published: {
    bg: "bg-emerald-950/70 border-emerald-900/50",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    label: "Published",
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "sm",
  className = "",
}) => {
  const normalizedKey = status.toLowerCase();
  const config = STATUS_STYLES[normalizedKey] || {
    bg: "bg-gray-800/80 border-gray-700/50",
    text: "text-gray-300",
    dot: "bg-gray-400",
    label: status.replace(/_/g, " "),
  };

  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-[11px]"
      : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded font-medium border ${config.bg} ${config.text} ${sizeClasses} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${config.dot}`} />
      <span>{config.label}</span>
    </span>
  );
};

export default StatusBadge;
