import React from 'react';

export interface DecorativeGridProps {
  className?: string;
  variant?: 'dots' | 'grid' | 'mesh';
  dark?: boolean;
}

export const DecorativeGrid: React.FC<DecorativeGridProps> = ({
  className = '',
  variant = 'dots',
  dark = false,
}) => {
  const dotColor = dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(106, 13, 173, 0.07)';
  const gridLineColor = dark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(106, 13, 173, 0.04)';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`} aria-hidden="true">
      {variant === 'dots' && (
        <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill={dotColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      )}

      {variant === 'grid' && (
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gridLineColor} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      )}

      {variant === 'mesh' && (
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }} />
        </div>
      )}
    </div>
  );
};

export default DecorativeGrid;
