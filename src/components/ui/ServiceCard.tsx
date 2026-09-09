import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Card from './Card';

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  path: string;
  icon?: React.ReactNode;
  iconEmoji?: string;
  badge?: string;
  highlightColor?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  path,
  icon,
  iconEmoji,
  badge,
  highlightColor = 'from-purple-600 to-indigo-600',
}) => {
  return (
    <Card className="flex flex-col h-full group hover:border-purple-300 relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header row: icon + title + optional badge */}
      <div className="mb-5 flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${highlightColor} flex items-center justify-center text-white shadow-card group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0`}
        >
          {icon ? icon : <span className="text-xl">{iconEmoji || '⚡'}</span>}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors leading-snug">
            {title}
          </h3>
          {badge && (
            <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Feature list */}
      <ul className="space-y-2 mb-6 text-sm text-slate-700 border-t border-slate-100 pt-4 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </span>
            <span className="leading-snug text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to={path}
        className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 mt-auto pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform duration-200"
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </Card>
  );
};

export default ServiceCard;
