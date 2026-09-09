import React from 'react';
import { ShoppingCart, Hotel, Activity, Building2, GraduationCap, Briefcase } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

export interface IndustryCardProps {
  name: string;
  iconName: string;
  shortDesc: string;
  keySolutions: string[];
  metricsHighlight: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  name,
  iconName,
  shortDesc,
  keySolutions,
  metricsHighlight,
}) => {
  const getIcon = () => {
    const props = { className: "w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" };
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart {...props} />;
      case 'Hotel':
        return <Hotel {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'Briefcase':
      default:
        return <Briefcase {...props} />;
    }
  };

  return (
    <Card className="flex flex-col h-full bg-white border border-slate-200/80 group">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
          {getIcon()}
        </div>
        <Badge variant="gold" size="sm">
          {metricsHighlight}
        </Badge>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
        {name}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
        {shortDesc}
      </p>

      <div className="pt-3 border-t border-slate-100 mt-auto">
        <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
          Tailored Solutions
        </p>
        <div className="flex flex-wrap gap-1.5">
          {keySolutions.map((sol, idx) => (
            <span
              key={idx}
              className="text-xs bg-slate-50 text-slate-700 px-2 py-1 rounded border border-slate-200/60 font-medium"
            >
              {sol}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default IndustryCard;
