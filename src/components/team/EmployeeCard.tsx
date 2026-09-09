import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Building2 } from 'lucide-react';
import { TeamMember } from '../../data/team';
import { getOfficeById } from '../../selectors';
import { getMailtoHref } from '../../services';
import EmployeeAvatar from './EmployeeAvatar';

interface EmployeeCardProps {
  member: TeamMember;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ member }) => {
  const office = getOfficeById(member.officeId);

  const deptBadgeStyles: Record<string, string> = {
    Leadership: 'bg-purple-100 text-purple-800 border-purple-200',
    Development: 'bg-blue-100 text-blue-800 border-blue-200',
    Marketing: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Operations: 'bg-amber-100 text-amber-800 border-amber-200',
    Sales: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  };

  const badgeClass =
    deptBadgeStyles[member.department] || 'bg-purple-100 text-purple-800 border-purple-200';

  return (
    <article 
      className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-300/80 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
      aria-labelledby={`employee-name-${member.id}`}
    >
      {/* Top Corporate ID Card Ribbon */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white px-3.5 py-2 flex items-center justify-between border-b border-purple-700/50">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-200">
            Growth Service Staff
          </span>
        </div>
        <span className="text-[10px] font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-yellow-300 border border-white/15">
          {member.employeeCode}
        </span>
      </div>

      {/* Decorative Brand Header Pattern */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500" />

      {/* Main Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Portrait Section */}
        <div className="mb-4">
          <EmployeeAvatar
            name={member.name}
            image={member.image}
            department={member.department}
            size="lg"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center mb-3">
          <h3 
            id={`employee-name-${member.id}`}
            className="text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors"
          >
            {member.name}
          </h3>
          <p className="text-xs font-semibold text-purple-700 mt-0.5">
            {member.role}
          </p>
        </div>

        {/* Department & Office Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
            {member.department}
          </span>
          {office && (
            <Link
              to={`/offices/${office.slug}`}
              className="text-[11px] font-medium bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200 px-2.5 py-0.5 rounded-full transition-colors flex items-center gap-1"
              title={`View ${office.name} Hub`}
            >
              <span>{office.flag}</span>
              <span>{office.city} Office</span>
            </Link>
          )}
        </div>

        {/* Short Bio */}
        <p className="text-xs text-slate-600 leading-relaxed text-center mb-4 flex-1 line-clamp-3">
          {member.bio}
        </p>

        {/* Structured Metadata / Key Focus */}
        <div className="pt-3 border-t border-slate-100 mt-auto space-y-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 text-center">
              Core Focus
            </span>
            <div className="flex flex-wrap justify-center gap-1">
              {member.expertise.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-slate-50 text-slate-700 border border-slate-200/80 px-2 py-0.5 rounded-md font-medium"
                >
                  {item}
                </span>
              ))}
              {member.expertise.length > 3 && (
                <span className="text-[10px] bg-purple-50 text-purple-700 border border-purple-100 px-1.5 py-0.5 rounded-md font-semibold">
                  +{member.expertise.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Verification & Action Bar */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <Link
              to="/verify"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              title="Verify Official Staff Authenticity"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Staff</span>
            </Link>

            {member.email ? (
              <a
                href={getMailtoHref(member.email, `Inquiry for ${member.name}`)}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
            ) : office ? (
              <Link
                to={`/offices/${office.slug}`}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-purple-600 transition-colors"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{office.city}</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default EmployeeCard;
