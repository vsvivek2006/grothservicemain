import React from 'react';
import { useInView, UseInViewOptions } from './useInView';

export interface SlideInProps extends UseInViewOptions {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'left',
  distance = 36,
  delay = 0,
  duration = 650,
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

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(${distance}px, 0, 0)`;
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0, 0, 0)' : getInitialTransform(),
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

export default SlideIn;
