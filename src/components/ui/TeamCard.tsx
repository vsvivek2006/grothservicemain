import React, { useState } from 'react';
import { Linkedin, ShieldCheck } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

export interface TeamCardProps {
  name: string;
  role: string;
  department: string;
  image?: string;
  bio: string;
  expertise: string[];
  linkedinUrl?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  department,
  image,
  bio,
  expertise,
  linkedinUrl,
}) => {
  const [imageError, setImageError] = useState(!image);

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const deptColors: Record<string, 'purple' | 'blue' | 'green' | 'gold'> = {
    Leadership: 'purple',
    Development: 'blue',
    Marketing: 'green',
    Operations: 'gold',
  };

  return (
    <Card className="flex flex-col h-full bg-white border border-slate-200/80">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative shrink-0">
          {!imageError && image ? (
            <img
              src={image}
              alt={name}
              onError={() => setImageError(true)}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-100 shadow-sm"
              loading="lazy"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-600 text-white font-bold text-lg flex items-center justify-center shadow-md">
              {initials}
            </div>
          )}
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
            <ShieldCheck className="w-4 h-4 text-purple-600 fill-purple-50" />
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex items-center justify-between gap-1">
            <Badge variant={deptColors[department] || 'purple'} size="sm">
              {department}
            </Badge>
            {linkedinUrl && linkedinUrl !== '#' && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">{name}</h3>
          <p className="text-xs font-semibold text-purple-600">{role}</p>
        </div>
      </div>

      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {bio}
      </p>

      <div className="pt-3 border-t border-slate-100">
        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
          Key Expertise
        </p>
        <div className="flex flex-wrap gap-1.5">
          {expertise.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
            >
              {item}
            </span>
          ))}
          {expertise.length > 3 && (
            <span className="text-xs bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded-md font-medium">
              +{expertise.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
