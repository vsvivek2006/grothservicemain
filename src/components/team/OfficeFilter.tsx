import React from 'react';
import { Building2 } from 'lucide-react';
import { TeamMember } from '../../data/team';
import { getPhysicalOffices } from '../../selectors';

interface OfficeFilterProps {
  selectedOffice: string;
  onSelectOffice: (officeId: string) => void;
  teamMembers: TeamMember[];
}

export const OfficeFilter: React.FC<OfficeFilterProps> = ({
  selectedOffice,
  onSelectOffice,
  teamMembers,
}) => {
  const offices = getPhysicalOffices();
  const totalCount = teamMembers.length;

  const officeCounts = offices.reduce((acc, office) => {
    acc[office.id] = teamMembers.filter(
      (m) => m.officeId.toLowerCase() === office.id.toLowerCase()
    ).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div 
      className="bg-white border-y border-slate-200 sticky top-16 z-30 shadow-xs py-3"
      role="region"
      aria-label="Filter Team by Office"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-1 mr-1">
              <Building2 className="w-3.5 h-3.5 text-purple-600" />
              <span className="hidden sm:inline">Office Filter:</span>
            </span>

            {/* "All" Tab */}
            <button
              onClick={() => onSelectOffice('all')}
              role="tab"
              aria-selected={selectedOffice === 'all'}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 min-h-[38px] ${
                selectedOffice === 'all'
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-sm ring-2 ring-purple-400/40'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <span>All Offices</span>
              <span 
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  selectedOffice === 'all' 
                    ? 'bg-white/20 text-yellow-300' 
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {totalCount}
              </span>
            </button>

            {/* Individual Office Tabs */}
            {offices.map((office) => {
              const isSelected = selectedOffice.toLowerCase() === office.id.toLowerCase();
              const count = officeCounts[office.id] || 0;

              return (
                <button
                  key={office.id}
                  onClick={() => onSelectOffice(office.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 min-h-[38px] ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-sm ring-2 ring-purple-400/40'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span>{office.flag}</span>
                  <span>{office.city}</span>
                  <span 
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isSelected 
                        ? 'bg-white/20 text-yellow-300' 
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-medium shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{offices.length} Verified Corporate Locations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeFilter;
