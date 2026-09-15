import React from "react";

export interface AdminPageHeaderProps {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export const AdminPageHeader: React.FC<AdminPageHeaderProps> = ({
  title,
  description,
  badge,
  actions,
  children,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-800">
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </h1>
          {badge}
        </div>
        {description && (
          <p className="text-xs text-gray-400 mt-1">{description}</p>
        )}
        {children}
      </div>

      {actions && (
        <div className="flex items-center gap-2.5 shrink-0">{actions}</div>
      )}
    </div>
  );
};

export default AdminPageHeader;
