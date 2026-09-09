import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'gold' | 'green' | 'blue' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'sm',
  icon,
  className = '',
}) => {
  const sizeStyles = {
    sm: "text-xs px-2.5 py-1 gap-1",
    md: "text-sm px-3.5 py-1.5 gap-1.5",
  };

  const variantStyles = {
    purple: "bg-purple-100 text-purple-800 border border-purple-200/80 font-medium",
    gold: "bg-amber-100 text-amber-900 border border-amber-200 font-semibold",
    green: "bg-emerald-100 text-emerald-800 border border-emerald-200 font-medium",
    blue: "bg-blue-100 text-blue-800 border border-blue-200 font-medium",
    slate: "bg-slate-100 text-slate-700 border border-slate-200 font-medium",
    outline: "bg-transparent border border-slate-300 text-slate-700 font-medium",
  };

  return (
    <span className={`inline-flex items-center rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
