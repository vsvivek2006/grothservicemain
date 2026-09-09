import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  ...props
}) => {
  const sizeStyles = {
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  };

  return (
    <div className={`${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
