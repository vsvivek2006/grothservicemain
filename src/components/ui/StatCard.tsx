import React from 'react';
import Card from './Card';

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  iconEmoji?: string;
  dark?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  icon,
  iconEmoji,
  dark = false,
}) => {
  return (
    <Card
      variant={dark ? 'dark' : 'default'}
      className="text-center relative overflow-hidden group hover:border-purple-300/80 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="flex items-center justify-center mb-3">
        {icon ? (
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury">
            {icon}
          </div>
        ) : (
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300 inline-block">{iconEmoji || "🚀"}</span>
        )}
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 mb-2 group-hover:scale-105 transition-transform duration-300">
        {value}
      </div>

      <h3 className={`text-base sm:text-lg font-bold ${dark ? 'text-white' : 'text-slate-900'} mb-1`}>
        {label}
      </h3>

      {description && (
        <p className={`text-xs sm:text-sm ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </Card>
  );
};

export default StatCard;
