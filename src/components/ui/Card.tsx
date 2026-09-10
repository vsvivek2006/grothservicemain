import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  variant?: 'default' | 'elevated' | 'interactive' | 'featured' | 'dark' | 'glass' | 'gradient' | 'subtle';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'default';
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className = '',
  variant = 'default',
  padding = 'default',
  ...props
}) => {
  const variantStyles = {
    default: "bg-white border border-slate-200/80 shadow-card",
    elevated: "bg-white border border-slate-200/80 shadow-elevated",
    interactive: "bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift cursor-pointer",
    featured: "bg-white border-2 border-purple-600/80 shadow-elevated relative",
    subtle: "bg-slate-50/80 border border-slate-200/60 shadow-subtle",
    dark: "bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white border border-white/10 shadow-xl",
    glass: "glass-card shadow-card",
    gradient: "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border border-purple-900/50 shadow-xl",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-5 sm:p-6",
    default: "p-6 sm:p-8",
    lg: "p-6 sm:p-8 lg:p-10",
  };

  const hoverStyle = (hoverEffect && variant !== 'interactive')
    ? (variant === 'featured' ? "card-lift hover:shadow-card-hover" : "card-lift hover:shadow-card-hover hover:border-purple-300/80")
    : "";

  return (
    <div
      className={`rounded-2xl ${paddingStyles[padding]} ${variantStyles[variant]} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
