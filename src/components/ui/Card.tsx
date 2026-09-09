import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
  variant?: 'default' | 'glass' | 'dark' | 'gradient';
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
    glass: "glass-card shadow-card",
    dark: "glass-card-dark text-white border-white/10",
    gradient: "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border-purple-900/50 shadow-xl",
  };

  const hoverStyle = hoverEffect
    ? "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 hover:border-purple-300/80"
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
