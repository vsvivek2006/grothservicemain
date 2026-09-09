import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  variant?: 'default' | 'elevated' | 'interactive' | 'featured' | 'dark' | 'glass' | 'gradient' | 'subtle';
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className = '',
  variant = 'default',
  ...props
}) => {
  const variantStyles = {
    default: "bg-white border border-slate-200/80 shadow-card",
    elevated: "bg-white border border-slate-200/80 shadow-elevated",
    interactive: "bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift cursor-pointer",
    featured: "bg-white border-2 border-purple-600/80 shadow-elevated relative overflow-hidden",
    subtle: "bg-slate-50/80 border border-slate-200/60 shadow-subtle",
    dark: "bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white border border-white/10 shadow-xl",
    glass: "glass-card shadow-card",
    gradient: "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border border-purple-900/50 shadow-xl",
  };

  const hoverStyle = (hoverEffect && variant !== 'interactive')
    ? "card-lift hover:shadow-card-hover hover:border-purple-300/80"
    : "";

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 ${variantStyles[variant]} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
