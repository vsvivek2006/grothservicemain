import React from 'react';
import { Search, ClipboardList, Rocket, BarChart3 } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string; // kept for backwards-compat; ignored internally
}

interface ProcessTimelineProps {
  steps?: ProcessStep[];
}

const DEFAULT_STEPS: ProcessStep[] = [
  { step: '1', title: 'Discovery Call', description: 'We understand your business, goals, and current challenges in a focused consultation.', icon: 'search' },
  { step: '2', title: 'Strategy & Plan', description: 'We craft a customized digital growth roadmap tailored to your market and budget.', icon: 'clipboard' },
  { step: '3', title: 'Execution', description: 'Our team implements the strategy with precision — on time, every milestone.', icon: 'rocket' },
  { step: '4', title: 'Measure & Scale', description: 'We track KPIs, report results monthly, and scale what works for compounding ROI.', icon: 'chart' },
];

// Map step numbers to Lucide icons
const stepIcons = [
  <Search className="w-6 h-6" />,
  <ClipboardList className="w-6 h-6" />,
  <Rocket className="w-6 h-6" />,
  <BarChart3 className="w-6 h-6" />,
];

const stepColors = [
  { ring: 'ring-blue-500/30', bg: 'bg-blue-500/10', icon: 'text-blue-500', num: 'text-blue-500', connector: 'from-blue-500/60 to-purple-500/60' },
  { ring: 'ring-purple-500/30', bg: 'bg-purple-500/10', icon: 'text-purple-500', num: 'text-purple-500', connector: 'from-purple-500/60 to-indigo-500/60' },
  { ring: 'ring-indigo-500/30', bg: 'bg-indigo-500/10', icon: 'text-indigo-500', num: 'text-indigo-500', connector: 'from-indigo-500/60 to-emerald-500/60' },
  { ring: 'ring-emerald-500/30', bg: 'bg-emerald-500/10', icon: 'text-emerald-500', num: 'text-emerald-500', connector: '' },
];

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps = DEFAULT_STEPS }) => {
  return (
    <div className="relative">
      {/* Desktop: horizontal row */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
        {steps.map((item, index) => {
          const color = stepColors[index] ?? stepColors[0];
          const isLast = index === steps.length - 1;
          return (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Connector line (not on last) */}
              {!isLast && (
                <div
                  className={`absolute top-[28px] left-[calc(50%+28px)] right-0 h-[2px] bg-gradient-to-r ${color.connector} z-0`}
                  style={{ width: 'calc(100% - 56px)', left: 'calc(50% + 28px)' }}
                  aria-hidden="true"
                />
              )}

              {/* Icon ring */}
              <div
                className={`relative z-10 w-14 h-14 rounded-2xl ring-2 ${color.ring} ${color.bg} flex items-center justify-center ${color.icon} mb-5 group-hover:scale-110 group-hover:ring-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-card`}
              >
                {stepIcons[index]}
              </div>

              {/* Step badge */}
              <span className={`text-xs font-extrabold uppercase tracking-widest ${color.num} bg-slate-100 px-3 py-1 rounded-full mb-3 border border-slate-200/80`}>
                STEP {item.step}
              </span>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical stack */}
      <div className="lg:hidden flex flex-col gap-0">
        {steps.map((item, index) => {
          const color = stepColors[index] ?? stepColors[0];
          const isLast = index === steps.length - 1;
          return (
            <div key={index} className="flex gap-5 group">
              {/* Left: icon + connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-xl ring-2 ${color.ring} ${color.bg} flex items-center justify-center ${color.icon} shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card`}
                >
                  {stepIcons[index]}
                </div>
                {!isLast && (
                  <div className={`w-[2px] flex-1 mt-2 mb-2 bg-gradient-to-b ${color.connector} min-h-[32px]`} aria-hidden="true" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8">
                <span className={`text-xs font-extrabold uppercase tracking-widest ${color.num} bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/80 inline-block mb-2`}>
                  STEP {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
