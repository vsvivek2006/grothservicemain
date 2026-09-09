import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { navigationConfig } from "../../config";
import { getPhysicalOffices } from "../../selectors";

interface ServiceDropdownProps {
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  closeDropdown: () => void;
}

export const ServiceDropdown: React.FC<ServiceDropdownProps> = ({
  activeDropdown,
  toggleDropdown,
  closeDropdown,
}) => {
  const digitalMarketingSubmenu = navigationConfig.digitalMarketingSubmenu;
  const designDevelopmentSubmenu = navigationConfig.designDevelopmentSubmenu;
  const whiteLabelSubmenu = navigationConfig.whiteLabelSubmenu;
  const offices = getPhysicalOffices();

  return (
    <div className="hidden lg:block border-t border-gray-100 py-2">
      <div className="flex flex-wrap justify-center items-center gap-1">
        {/* Digital Marketing Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('marketing')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'marketing'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-all duration-200"
          >
            <span>Digital Marketing</span>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto ${
              activeDropdown === 'marketing' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {digitalMarketingSubmenu.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Design & Development Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('dev')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'dev'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-all duration-200"
          >
            <span>Design & Development</span>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto ${
              activeDropdown === 'dev' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {designDevelopmentSubmenu.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* White Label Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('whitelabel')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'whitelabel'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-all duration-200"
          >
            <span>White Label</span>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto ${
              activeDropdown === 'whitelabel' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {whiteLabelSubmenu.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={closeDropdown}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Locations Mega Menu */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('locations')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'locations'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-all duration-200"
          >
            <span>Locations</span>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          <div 
            className={`absolute left-1/2 -translate-x-1/2 mt-1.5 w-[660px] max-w-[95vw] rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-5 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto ${
              activeDropdown === 'locations' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  Regional Coverage Directory
                </span>
                <p className="text-[11px] text-gray-500">Key service locations across India & Nepal</p>
              </div>
              <NavLink
                to="/locations"
                onClick={closeDropdown}
                className="text-xs font-bold text-purple-600 hover:text-purple-700 hover:underline flex items-center gap-1"
              >
                <span>All Locations Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <NavLink to="/locations/delhi" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Delhi</div>
                <div className="text-[10px] text-gray-500">National Capital Region</div>
              </NavLink>
              <NavLink to="/locations/jaipur" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600 flex items-center justify-between">
                  <span>Jaipur</span>
                  <span className="text-[9px] bg-purple-100 text-purple-700 font-semibold px-1 rounded">Office</span>
                </div>
                <div className="text-[10px] text-gray-500">Rajasthan</div>
              </NavLink>
              <NavLink to="/locations/patna" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Patna</div>
                <div className="text-[10px] text-gray-500">Bihar</div>
              </NavLink>
              <NavLink to="/locations/goa" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Goa</div>
                <div className="text-[10px] text-gray-500">Goa</div>
              </NavLink>
              <NavLink to="/locations/gurgaon" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Gurgaon</div>
                <div className="text-[10px] text-gray-500">Cyber City, Haryana</div>
              </NavLink>
              <NavLink to="/locations/chandigarh" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Chandigarh</div>
                <div className="text-[10px] text-gray-500">Punjab / Tricity</div>
              </NavLink>
              <NavLink to="/locations/mumbai" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Mumbai</div>
                <div className="text-[10px] text-gray-500">Maharashtra</div>
              </NavLink>
              <NavLink to="/locations/bangalore" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Bangalore</div>
                <div className="text-[10px] text-gray-500">Karnataka</div>
              </NavLink>
              <NavLink to="/locations/lucknow" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Lucknow</div>
                <div className="text-[10px] text-gray-500">Uttar Pradesh</div>
              </NavLink>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs bg-purple-50/40 p-2.5 rounded-xl">
              <span className="text-slate-600 font-medium">
                Our {offices.length} Company Offices:
              </span>
              <div className="flex items-center gap-3 font-semibold">
                {offices.map((office, idx) => (
                  <React.Fragment key={office.id}>
                    {idx > 0 && <span className="text-slate-300">•</span>}
                    <NavLink to={`/offices/${office.slug}`} onClick={closeDropdown} className="text-purple-600 hover:underline">
                      {office.city}
                    </NavLink>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Offices Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('offices')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'offices'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-all duration-200"
          >
            <span>Offices</span>
            <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto ${
              activeDropdown === 'offices' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {offices.map((office) => (
              <NavLink 
                key={office.id} 
                to={`/offices/${office.slug}`} 
                onClick={closeDropdown} 
                className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1 transition-all duration-150"
              >
                {office.name} ({office.state})
              </NavLink>
            ))}
            <div className="mt-1 pt-1 border-t border-gray-100">
              <NavLink to="/offices" onClick={closeDropdown} className="block px-3 py-1.5 rounded-lg text-xs font-bold text-purple-600 hover:bg-purple-50 text-center">
                All {offices.length} Company Offices →
              </NavLink>
            </div>
          </div>
        </div>

        {/* Team Link */}
        <NavLink 
          to="/team" 
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              isActive
                ? "text-purple-700 bg-purple-50"
                : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
            }`
          }
        >
          Team
        </NavLink>

        {/* Direct Links */}
        <NavLink 
          to="/packages" 
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              isActive
                ? "text-purple-700 bg-purple-50"
                : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
            }`
          }
        >
          Solutions
        </NavLink>
        
        <NavLink 
          to="/impact" 
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              isActive
                ? "text-purple-700 bg-purple-50"
                : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
            }`
          }
        >
          Our Impact
        </NavLink>
        
        <NavLink 
          to="/contact" 
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              isActive
                ? "text-purple-700 bg-purple-50"
                : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceDropdown;
