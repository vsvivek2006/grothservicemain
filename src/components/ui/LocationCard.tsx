import React from 'react';
import { MapPin, Phone, ExternalLink, Clock } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

export interface LocationCardProps {
  name: string;
  state?: string;
  country?: string;
  flag: string;
  address?: string;
  phone: string;
  mapLink?: string;
  timings?: string;
  isHeadOffice?: boolean;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  name,
  state,
  country,
  flag,
  address,
  phone,
  mapLink,
  timings,
  isHeadOffice = false,
}) => {
  return (
    <Card className="flex flex-col h-full bg-white border border-slate-200/80 relative">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-label="Flag">
            {flag}
          </span>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">{name}</h3>
            {state && (
              <p className="text-xs text-purple-600 font-semibold">{state}{country ? ` • ${country}` : ''}</p>
            )}
          </div>
        </div>
        {isHeadOffice && (
          <Badge variant="gold" size="sm">
            Head Office
          </Badge>
        )}
      </div>

      {address && (
        <div className="flex items-start gap-2 text-sm text-slate-600 mb-4 flex-grow">
          <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-1" />
          <p className="leading-relaxed">{address}</p>
        </div>
      )}

      {timings && (
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{timings}</span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 mt-auto text-sm">
        <a
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className="inline-flex items-center gap-1.5 font-semibold text-purple-600 hover:text-purple-700 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </a>

        {mapLink && (
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors text-xs font-medium"
          >
            <span>View Map</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </Card>
  );
};

export default LocationCard;
