import React from "react";
import { LucideIcon } from "lucide-react";

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  action,
  className = "",
}) => {
  return (
    <div
      className={`p-10 text-center space-y-3 rounded-xl border border-gray-800 bg-gray-900 ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto text-gray-500">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xs font-semibold text-white">{title}</h3>
        {description && (
          <p className="text-[11px] text-gray-500 mt-1 max-w-sm mx-auto">
            {description}
          </p>
        )}
      </div>
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
};

export default EmptyState;
