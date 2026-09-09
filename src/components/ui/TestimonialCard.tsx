import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import Card from './Card';

export interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  location?: string;
  verified?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  role,
  company,
  rating = 5,
  location,
  verified = true,
}) => {
  // Generate initials for avatar fallback
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <Card className="flex flex-col h-full bg-white relative group hover:border-purple-300/80 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 group-hover:scale-110 transition-transform duration-200" style={{ transitionDelay: `${i * 40}ms` }} />
          ))}
        </div>
        {verified && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Verified Client
          </span>
        )}
      </div>

      <p className="text-slate-700 text-base leading-relaxed italic mb-6 flex-grow">
        "{text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
            {author}
          </h4>
          <p className="text-xs text-slate-500">
            {role} • <span className="text-purple-600 font-medium">{company}</span>
          </p>
          {location && <p className="text-xs text-slate-400">{location}</p>}
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
