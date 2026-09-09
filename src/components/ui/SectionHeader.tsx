import React from 'react';
import Badge from './Badge';
import { FadeIn } from '../animations/FadeIn';

export interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleHighlight?: string;
  highlightColor?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  highlightColor = 'text-purple-600',
  description,
  align = 'center',
  className = '',
  dark = false,
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <FadeIn direction="up" distance={20} duration={550} className={`max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {badge && (
        <div className={`mb-3.5 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <Badge
            variant={dark ? 'purple' : 'purple'}
            icon={badgeIcon}
            size="md"
            className={dark ? 'bg-purple-900/60 text-purple-200 border-purple-700/50' : ''}
          >
            {badge}
          </Badge>
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}{' '}
        {titleHighlight && (
          <span className={highlightColor}>{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className={`text-lg sm:text-xl leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
};

export default SectionHeader;
