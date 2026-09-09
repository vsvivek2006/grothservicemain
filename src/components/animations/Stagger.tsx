import React, { createContext, useContext } from 'react';
import { useInView, UseInViewOptions } from './useInView';

interface StaggerContextValue {
  inView: boolean;
  staggerDelay: number;
  initialDelay: number;
  direction: 'up' | 'down' | 'left' | 'right' | 'none';
  distance: number;
  duration: number;
}

const StaggerContext = createContext<StaggerContextValue>({
  inView: false,
  staggerDelay: 80,
  initialDelay: 0,
  direction: 'up',
  distance: 24,
  duration: 600,
});

export interface StaggerContainerProps extends UseInViewOptions {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 90,
  initialDelay = 0,
  direction = 'up',
  distance = 24,
  duration = 600,
  className = '',
  as: Component = 'div',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <StaggerContext.Provider
      value={{
        inView,
        staggerDelay,
        initialDelay,
        direction,
        distance,
        duration,
      }}
    >
      <Component ref={ref} className={className}>
        {children}
      </Component>
    </StaggerContext.Provider>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  index: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  index,
  direction: itemDirection,
  distance: itemDistance,
  duration: itemDuration,
  className = '',
  as: Component = 'div',
  style = {},
}) => {
  const context = useContext(StaggerContext);
  const inView = context.inView;
  const direction = itemDirection || context.direction;
  const distance = itemDistance ?? context.distance;
  const duration = itemDuration ?? context.duration;
  const totalDelay = context.initialDelay + index * context.staggerDelay;

  const getTransform = () => {
    if (inView) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <Component
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${totalDelay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: inView ? 'auto' : 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default StaggerContainer;
