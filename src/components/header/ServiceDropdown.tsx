"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
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
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                toggleDropdown('marketing');
              } else if (e.key === 'Escape') {
                closeDropdown();
              }
            }}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'marketing'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-1 transition-all duration-200"
          >
            <span>Digital Marketing</span>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'marketing' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] ${
              activeDropdown === 'marketing' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {digitalMarketingSubmenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeDropdown}
                className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  isActive(item.href)
                    ? "bg-purple-50 text-purple-700 font-semibold"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Design & Development Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('dev')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                toggleDropdown('dev');
              } else if (e.key === 'Escape') {
                closeDropdown();
              }
            }}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'dev'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-1 transition-all duration-200"
          >
            <span>Design & Development</span>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'dev' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] ${
              activeDropdown === 'dev' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {designDevelopmentSubmenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeDropdown}
                className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  isActive(item.href)
                    ? "bg-purple-50 text-purple-700 font-semibold"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* White Label Dropdown */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('whitelabel')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                toggleDropdown('whitelabel');
              } else if (e.key === 'Escape') {
                closeDropdown();
              }
            }}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'whitelabel'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-1 transition-all duration-200"
          >
            <span>White Label</span>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'whitelabel' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] ${
              activeDropdown === 'whitelabel' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {whiteLabelSubmenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeDropdown}
                className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  isActive(item.href)
                    ? "bg-purple-50 text-purple-700 font-semibold"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Locations Mega Menu */}
        <div className="relative group">
          <button 
            onClick={() => toggleDropdown('locations')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                toggleDropdown('locations');
              } else if (e.key === 'Escape') {
                closeDropdown();
              }
            }}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'locations'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-1 transition-all duration-200"
          >
            <span>Locations</span>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'locations' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
          </button>
          <div 
            className={`absolute left-1/2 -translate-x-1/2 mt-1.5 w-[660px] max-w-[95vw] rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-5 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] ${
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
              <Link
                href="/locations"
                onClick={closeDropdown}
                className="text-xs font-bold text-purple-600 hover:text-purple-700 hover:underline flex items-center gap-1"
              >
                <span>All Locations Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <Link href="/locations/delhi" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Delhi</div>
                <div className="text-[10px] text-gray-500">National Capital Region</div>
              </Link>
              <Link href="/locations/jaipur" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600 flex items-center justify-between">
                  <span>Jaipur</span>
                  <span className="text-[9px] bg-purple-100 text-purple-700 font-semibold px-1 rounded">Office</span>
                </div>
                <div className="text-[10px] text-gray-500">Rajasthan</div>
              </Link>
              <Link href="/locations/patna" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Patna</div>
                <div className="text-[10px] text-gray-500">Bihar</div>
              </Link>
              <Link href="/locations/goa" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Goa</div>
                <div className="text-[10px] text-gray-500">Goa</div>
              </Link>
              <Link href="/locations/gurgaon" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Gurgaon</div>
                <div className="text-[10px] text-gray-500">Cyber City, Haryana</div>
              </Link>
              <Link href="/locations/chandigarh" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Chandigarh</div>
                <div className="text-[10px] text-gray-500">Punjab / Tricity</div>
              </Link>
              <Link href="/locations/mumbai" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Mumbai</div>
                <div className="text-[10px] text-gray-500">Maharashtra</div>
              </Link>
              <Link href="/locations/bangalore" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Bangalore</div>
                <div className="text-[10px] text-gray-500">Karnataka</div>
              </Link>
              <Link href="/locations/lucknow" onClick={closeDropdown} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Lucknow</div>
                <div className="text-[10px] text-gray-500">Uttar Pradesh</div>
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs bg-purple-50/40 p-2.5 rounded-xl">
              <span className="text-slate-600 font-medium">
                Our {offices.length} Company Offices:
              </span>
              <div className="flex items-center gap-3 font-semibold">
                {offices.map((office, idx) => (
                  <React.Fragment key={office.id}>
                    {idx > 0 && <span className="text-slate-300">•</span>}
                    <Link href={`/offices/${office.slug}`} onClick={closeDropdown} className="text-purple-600 hover:underline">
                      {office.city}
                    </Link>
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
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                toggleDropdown('offices');
              } else if (e.key === 'Escape') {
                closeDropdown();
              }
            }}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'offices'}
            className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-1 transition-all duration-200"
          >
            <span>Offices</span>
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'offices' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
          </button>
          <div 
            className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 transition-all duration-200 ease-luxury z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto focus-within:pointer-events-auto before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] ${
              activeDropdown === 'offices' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
            }`}
          >
            {offices.map((office) => (
              <Link 
                key={office.id} 
                href={`/offices/${office.slug}`} 
                onClick={closeDropdown} 
                className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1 transition-all duration-150"
              >
                {office.name} ({office.state})
              </Link>
            ))}
            <div className="mt-1 pt-1 border-t border-gray-100">
              <Link href="/offices" onClick={closeDropdown} className="block px-3 py-1.5 rounded-lg text-xs font-bold text-purple-600 hover:bg-purple-50 text-center">
                All {offices.length} Company Offices →
              </Link>
            </div>
          </div>
        </div>

        {/* Team Link */}
        <Link 
          href="/team" 
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            isActive("/team")
              ? "text-purple-700 bg-purple-50"
              : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
          }`}
        >
          Team
        </Link>

        {/* Direct Links */}
        <Link 
          href="/packages" 
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            isActive("/packages")
              ? "text-purple-700 bg-purple-50"
              : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
          }`}
        >
          Solutions
        </Link>
        
        <Link 
          href="/impact" 
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            isActive("/impact")
              ? "text-purple-700 bg-purple-50"
              : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
          }`}
        >
          Our Impact
        </Link>
        
        <Link 
          href="/contact" 
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            isActive("/contact")
              ? "text-purple-700 bg-purple-50"
              : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ServiceDropdown;
