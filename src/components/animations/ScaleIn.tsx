import React from 'react';
import { useInView, UseInViewOptions } from './useInView';

export interface ScaleInProps extends UseInViewOptions {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 550,
  initialScale = 0.95,
  className = '',
  as: Component = 'div',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  style = {},
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale3d(1, 1, 1)' : `scale3d(${initialScale}, ${initialScale}, 1)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: inView ? 'auto' : 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default ScaleIn;
