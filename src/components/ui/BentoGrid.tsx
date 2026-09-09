import React from 'react';

interface BentoItem {
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  className?: string;
  children: React.ReactNode;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

/**
 * Asymmetric Bento Grid layout.
 * - Uses CSS Grid with 3 columns on desktop, 1 on mobile.
 * - Each item can span 1 or 2 columns/rows.
 */
export const BentoGrid: React.FC<BentoGridProps> = ({ items, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-auto ${className}`}
    >
      {items.map((item, idx) => {
        const colClass =
          item.colSpan === 2
            ? 'md:col-span-2 lg:col-span-2'
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
