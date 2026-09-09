import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, Phone, Clock, ArrowRight, ShieldCheck, Users 
} from 'lucide-react';
import { OfficeData } from '../../data/offices';
import { TeamMember } from '../../data/team';
import EmployeeCard from './EmployeeCard';

interface OfficeTeamSectionProps {
  office: OfficeData;
  employees: TeamMember[];
}

export const OfficeTeamSection: React.FC<OfficeTeamSectionProps> = ({
  office,
  employees,
}) => {
  if (employees.length === 0) {
    return (
      <section 
        className="py-10 border-b border-slate-200 last:border-b-0"
        aria-labelledby={`office-heading-${office.id}`}
      >
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center max-w-xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-3">
            <Building2 className="w-6 h-6" />
          </div>
          <h2 id={`office-heading-${office.id}`} className="text-xl font-bold text-slate-900 mb-1">
            {office.name}
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Growth Service — {office.city} ({office.country})
          </p>
          <p className="text-sm text-slate-600 mb-4">
            Staff directory update in progress for this location. For local inquiries, please reach out directly.
          </p>
          <Link
            to={`/offices/${office.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800"
          >
            <span>View {office.city} Office Hub Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    );
  }

  const memberCountText = employees.length === 1 ? '1 Team Member' : `${employees.length} Team Members`;

  return (
    <section 
      className="py-12 border-b border-slate-200/80 last:border-b-0"
      aria-labelledby={`office-heading-${office.id}`}
    >
      {/* Office Header Card */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-card relative overflow-hidden">
        {/* Subtle decorative dot pattern & ambient glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Office Identity & Title */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl" role="img" aria-label={office.country}>
                {office.flag}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full">
                <Building2 className="w-3.5 h-3.5 text-yellow-300" />
                <span>Growth Service — {office.city}</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-yellow-400/20 text-yellow-300 text-xs font-bold px-2.5 py-1 rounded-full">
                <Users className="w-3.5 h-3.5" />
                <span>{memberCountText}</span>
              </span>
            </div>

            <div>
              <h2 
                id={`office-heading-${office.id}`}
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              >
                {office.name}
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/90 font-medium mt-1">
                {office.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {office.description}
            </p>
          </div>

          {/* Right: Office Meta & Hub Link */}
          <div className="lg:w-80 shrink-0 bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-4 space-y-2.5 text-xs text-purple-100">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 leading-snug">{office.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
              <a 
                href={`tel:${office.phone.replace(/\s+/g, '')}`}
                className="hover:text-yellow-300 font-semibold transition-colors"
              >
                {office.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-300 shrink-0" />
              <span>{office.timings}</span>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Corporate Hub
              </span>
              <Link
                to={`/offices/${office.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-yellow-300 hover:text-white transition-colors"
              >
                <span>Office Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Employee Cards Grid */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        role="list"
        aria-label={`Staff members of ${office.name}`}
      >
        {employees.map((member) => (
          <div key={member.id} role="listitem">
            <EmployeeCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeTeamSection;
