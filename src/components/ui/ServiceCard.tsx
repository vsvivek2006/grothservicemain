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
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {badge && (
        <div className="absolute top-4 right-4 bg-purple-50 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-100">
          {badge}
        </div>
      )}

      <div className="mb-5 flex items-center gap-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${highlightColor} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury shrink-0`}>
          {icon ? icon : <span className="text-2xl">{iconEmoji || "⚡"}</span>}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <ul className="space-y-2.5 mb-6 text-sm text-slate-700 border-t border-slate-100 pt-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
              <Check className="w-3 h-3" strokeWidth={2.5} />
            </span>
            <span className="leading-tight">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={path}
        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 mt-auto pt-2 group-hover:translate-x-1.5 transition-transform duration-200"
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </Card>
  );
};

export default ServiceCard;
