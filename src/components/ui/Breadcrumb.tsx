import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const schemaBreadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://growthservice.in"
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 2,
      "name": item.label,
      ...(item.path ? { "item": `https://growthservice.in${item.path}` } : {})
    }))
  ];

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-slate-500 py-3 ${className}`}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": schemaBreadcrumbs
          })}
        </script>
      </Helmet>

      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-purple-600 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-purple-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
