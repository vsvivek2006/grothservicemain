import React from 'react';
import Badge from './Badge';
import { FadeIn } from '../animations/FadeIn';

export interface SectionHeaderProps {
  badge?: string;
  eyebrow?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  titleHighlight?: string;
  highlightColor?: string;
  description?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  centered?: boolean;
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  eyebrow,
  badgeIcon,
  title,
  titleHighlight,
  highlightColor = 'text-purple-600',
  description,
  subtitle,
  align = 'center',
  centered,
  className = '',
  dark = false,
}) => {
  const displayBadge = eyebrow || badge;
  const displayDescription = description || subtitle;
  const effectiveAlign = centered ? 'center' : align;
  const alignClasses = effectiveAlign === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <FadeIn direction="up" distance={20} duration={550} className={`max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {displayBadge && (
        <div className={`mb-3.5 flex ${effectiveAlign === 'center' ? 'justify-center' : 'justify-start'}`}>
          <Badge
            variant={dark ? 'dark' : 'purple'}
            icon={badgeIcon}
            size="md"
          >
            {displayBadge}
          </Badge>
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}{' '}
        {titleHighlight && (
          <span className={highlightColor}>{titleHighlight}</span>
        )}
      </h2>

      {displayDescription && (
        <p className={`text-lg sm:text-xl leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {displayDescription}
        </p>
      )}
    </FadeIn>
  );
};

export default SectionHeader;
