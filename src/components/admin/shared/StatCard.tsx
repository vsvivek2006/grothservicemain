import React from "react";
import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  label: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "danger" | "purple";
  className?: string;
}

const VARIANT_ICON_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  default: {
    bg: "bg-gray-800",
    text: "text-gray-400",
    border: "border-transparent",
  },
  success: {
    bg: "bg-emerald-950/60",
    text: "text-emerald-400",
    border: "border-emerald-900/40",
  },
  warning: {
    bg: "bg-amber-950/50",
    text: "text-amber-400",
    border: "border-amber-900/40",
  },
  danger: {
    bg: "bg-rose-950/50",
    text: "text-rose-400",
    border: "border-rose-900/40",
  },
  purple: {
    bg: "bg-purple-950/60",
    text: "text-purple-400",
    border: "border-purple-900/40",
  },
};

const VARIANT_VALUE_STYLES: Record<string, string> = {
  default: "text-white",
  success: "text-emerald-400",
  warning: "text-amber-400",
  danger: "text-rose-400",
  purple: "text-purple-300",
};

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  description,
  icon: Icon,
  variant = "default",
  className = "",
}) => {
  const iconStyle = VARIANT_ICON_STYLES[variant] || VARIANT_ICON_STYLES.default;
  const valueStyle = VARIANT_VALUE_STYLES[variant] || VARIANT_VALUE_STYLES.default;

  return (
    <div
      className={`p-5 rounded-xl border border-gray-800 bg-gray-900 flex items-center justify-between shadow-xs ${className}`}
    >
      <div>
        <span className="text-xs font-medium text-gray-400">{label}</span>
        <p className={`text-2xl sm:text-3xl font-bold mt-1 ${valueStyle}`}>
          {value}
        </p>
        {description && (
          <span className="text-[11px] text-gray-500 mt-0.5 block">
            {description}
          </span>
        )}
      </div>

      <div
        className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${iconStyle.bg} ${iconStyle.border} ${iconStyle.text}`}
      >
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatCard;
