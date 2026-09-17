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
      className={`p-12 text-center space-y-4 rounded-2xl border border-purple-900/30 bg-gray-900/70 backdrop-blur-md shadow-xl ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-950/80 to-purple-900/40 border border-purple-800/40 flex items-center justify-center mx-auto text-purple-400 shadow-md shadow-purple-950/50">
        <Icon className="w-7 h-7" />
      </div>
      <div className="max-w-md mx-auto">
        <h3 className="text-base font-bold text-white tracking-tight">{title}</h3>
        {description && (
          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="pt-2 flex justify-center">{action}</div>}
    </div>
  );
};

export default EmptyState;
