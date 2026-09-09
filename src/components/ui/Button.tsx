import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  isExternal = false,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-98 select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2 shadow-sm hover:shadow-md",
    lg: "px-8 py-4 text-lg gap-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-800 shadow-purple-900/20 focus-visible:ring-purple-600",
    secondary: "bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold shadow-yellow-500/20 focus-visible:ring-yellow-400",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 focus-visible:ring-purple-600",
    white: "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm focus-visible:ring-slate-900",
    whatsapp: "bg-[#25D366] hover:bg-emerald-600 text-white shadow-emerald-900/20 focus-visible:ring-emerald-500",
    ghost: "text-slate-700 hover:text-purple-600 hover:bg-purple-50/60 focus-visible:ring-purple-600",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
