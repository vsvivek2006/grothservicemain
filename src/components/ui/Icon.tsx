import React from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  size?: IconSize;
  className?: string;
  color?: string;
}

const sizeMap: Record<IconSize, { pixelSize: number; className: string }> = {
  xs: { pixelSize: 16, className: 'w-4 h-4' },
  sm: { pixelSize: 20, className: 'w-5 h-5' },
  md: { pixelSize: 24, className: 'w-6 h-6' },
  lg: { pixelSize: 32, className: 'w-8 h-8' },
  xl: { pixelSize: 40, className: 'w-10 h-10' },
  '2xl': { pixelSize: 48, className: 'w-12 h-12' },
};

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  className = '',
  color = '',
  ...props
}) => {
  const { pixelSize, className: sizeClass } = sizeMap[size];

  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${sizeClass} ${color} ${className}`} {...props}>
      <IconComponent size={pixelSize} className="w-full h-full" />
    </span>
  );
};

export default Icon;
