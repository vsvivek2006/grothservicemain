import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { buildBreadcrumbSchema } from '../../seo/schema';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'dark' | 'light';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  className = '',
  variant = 'dark',
}) => {
  const breadcrumbSchema = buildBreadcrumbSchema(items);
  const isDark = variant === 'dark';

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center text-xs sm:text-sm py-3 ${isDark ? 'text-purple-200/80' : 'text-slate-500'} ${className}`}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li>
          <Link 
            to="/" 
            className={`inline-flex items-center gap-1 transition-colors ${
              isDark 
                ? 'text-purple-200/90 hover:text-white' 
                : 'text-slate-500 hover:text-purple-600'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className={`w-3 h-3 shrink-0 ${isDark ? 'text-purple-300/60' : 'text-slate-400'}`} />
              {isLast || !item.path ? (
                <span 
                  className={`font-semibold truncate max-w-[200px] sm:max-w-none ${
                    isDark 
                      ? 'text-white bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15' 
                      : 'text-slate-900'
                  }`} 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className={`transition-colors ${
                    isDark 
                      ? 'text-purple-200/90 hover:text-white hover:underline decoration-purple-300/40 underline-offset-4' 
                      : 'text-slate-600 hover:text-purple-600'
                  }`}
                >
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
