import React from 'react';

export interface BentoItem {
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  className?: string;
  children: React.ReactNode;
}

export interface BentoGridProps {
  items: BentoItem[];
  className?: string;
  columns?: 2 | 3;
}

/**
 * Asymmetric Bento Grid layout.
 * - Supports 2 or 3 columns configuration.
 * - Each item can span 1 or 2 columns/rows.
 */
export const BentoGrid: React.FC<BentoGridProps> = ({ items, className = '', columns = 3 }) => {
  const gridColsClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div
      className={`grid ${gridColsClass} gap-3.5 sm:gap-4 auto-rows-auto ${className}`}
    >
      {items.map((item, idx) => {
        const colClass =
          item.colSpan === 2
            ? columns === 2
              ? 'sm:col-span-2'
              : 'md:col-span-2 lg:col-span-2'
            : 'col-span-1';
        const rowClass =
          item.rowSpan === 2 ? 'md:row-span-2' : '';

        return (
          <div
            key={idx}
            className={`${colClass} ${rowClass} ${item.className ?? ''}`}
          >
            {item.children}
          </div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
