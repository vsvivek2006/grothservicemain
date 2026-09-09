import React from 'react';
import { useInView, UseInViewOptions } from './useInView';

export interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement>, UseInViewOptions {
  children: React.ReactNode;
  delay?: number;
  hoverEffect?: boolean;
  variant?: 'default' | 'glass' | 'dark' | 'gradient';
  className?: string;
  glowAccent?: boolean;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  delay = 0,
  hoverEffect = true,
  variant = 'default',
  className = '',
  glowAccent = false,
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  style = {},
  ...props
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const variantStyles = {
    default: "bg-white border border-slate-200/80 shadow-card hover:border-purple-300/80",
    glass: "glass-card shadow-card hover:border-purple-300/80",
    dark: "glass-card-dark text-white border-white/10 hover:border-purple-500/40",
    gradient: "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white border-purple-900/50 shadow-xl hover:border-purple-500/50",
  };

  const hoverClasses = hoverEffect
    ? "card-lift hover:shadow-card-hover group"
    : "";

  return (
    <div
      ref={ref}
      className={`rounded-2xl p-6 sm:p-8 relative overflow-hidden ${variantStyles[variant]} ${hoverClasses} ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)',
        transitionProperty: 'opacity, transform, box-shadow, border-color',
        transitionDuration: '600ms, 300ms, 300ms, 300ms',
        transitionDelay: `${delay}ms, 0ms, 0ms, 0ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: inView ? 'auto' : 'opacity, transform',
        ...style,
      }}
      {...props}
    >
      {glowAccent && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      {children}
    </div>
  );
};

export default MotionCard;
