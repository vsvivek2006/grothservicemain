import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'dark' | 'primary' | 'transparent';
  padding?: 'default' | 'sm' | 'lg' | 'none';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'default',
  id,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white text-slate-900',
    subtle: 'bg-slate-50 text-slate-900 border-y border-slate-200/60',
    dark: 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden',
    primary: 'bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden',
    transparent: 'bg-transparent',
  };

  const paddingStyles = {
    default: 'py-16 md:py-24 lg:py-28',
    sm: 'py-10 md:py-16',
    lg: 'py-20 md:py-28 lg:py-32',
    none: 'py-0',
  };

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
