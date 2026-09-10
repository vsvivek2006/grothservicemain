import React from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Phone, Sparkles, Building, Zap, 
  MapPin, ChevronDown, ChevronRight, X 
} from "lucide-react";
import { WhatsAppIcon } from "../ui";
import { navigationConfig } from "../../config";
import { getPhysicalOffices } from "../../selectors";
import { getNepalWhatsAppUrl } from "../../services";

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileSection: string | null;
  toggleMobileSection: (name: string) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  setIsOpen,
  mobileSection,
  toggleMobileSection,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const digitalMarketingSubmenu = navigationConfig.digitalMarketingSubmenu;
  const designDevelopmentSubmenu = navigationConfig.designDevelopmentSubmenu;
  const whiteLabelSubmenu = navigationConfig.whiteLabelSubmenu;
  const trustAndLegalLinks = navigationConfig.trustAndLegalLinks;
  const offices = getPhysicalOffices();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto shadow-2xl border-t border-slate-200/80 animate-fade-in pt-24">
      <div className="px-4 py-4 space-y-3 pb-28 max-w-lg mx-auto">
        {/* Quick Action Bar */}
        <div className="grid grid-cols-2 gap-2">
          <Link 
            to="/book-call"
            onClick={closeMenu}
            className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white font-bold text-xs py-3 px-3 rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 min-h-[44px]"
          >
            <Phone className="h-4 w-4" />
            <span>Book Strategy Call</span>
          </Link>
          <a
            href={getNepalWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs py-3 px-3 rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 min-h-[44px] transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp Chat</span>
          </a>
        </div>

        {/* Accordion 1: Digital Marketing */}
        <div className="border border-purple-100 rounded-xl overflow-hidden bg-purple-50/20">
          <button
            onClick={() => toggleMobileSection('marketing')}
            aria-expanded={mobileSection === 'marketing'}
            className="w-full flex items-center justify-between p-3.5 text-left font-bold text-sm text-purple-950 hover:bg-purple-50/60 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              Digital Marketing Services
            </span>
            <ChevronDown className={`h-4 w-4 text-purple-600 transition-transform ${mobileSection === 'marketing' ? 'rotate-180' : ''}`} />
          </button>
          {mobileSection === 'marketing' && (
            <div className="p-2 pt-0 space-y-1 bg-white/80 border-t border-purple-100">
              {digitalMarketingSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium min-h-[40px] transition-colors ${
                      isActive
                        ? "bg-purple-100 text-purple-800 font-semibold"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-purple-400" />
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Accordion 2: Design & Web Development */}
        <div className="border border-purple-100 rounded-xl overflow-hidden bg-purple-50/20">
          <button
            onClick={() => toggleMobileSection('dev')}
            aria-expanded={mobileSection === 'dev'}
            className="w-full flex items-center justify-between p-3.5 text-left font-bold text-sm text-purple-950 hover:bg-purple-50/60 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <Building className="h-4 w-4 text-purple-600" />
              Design & Development
            </span>
            <ChevronDown className={`h-4 w-4 text-purple-600 transition-transform ${mobileSection === 'dev' ? 'rotate-180' : ''}`} />
          </button>
          {mobileSection === 'dev' && (
            <div className="p-2 pt-0 space-y-1 bg-white/80 border-t border-purple-100">
              {designDevelopmentSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium min-h-[40px] transition-colors ${
                      isActive
                        ? "bg-purple-100 text-purple-800 font-semibold"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-purple-400" />
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Accordion 3: White Label */}
        <div className="border border-purple-100 rounded-xl overflow-hidden bg-purple-50/20">
          <button
            onClick={() => toggleMobileSection('whitelabel')}
            aria-expanded={mobileSection === 'whitelabel'}
            className="w-full flex items-center justify-between p-3.5 text-left font-bold text-sm text-purple-950 hover:bg-purple-50/60 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-600" />
              White Label Agency Services
            </span>
            <ChevronDown className={`h-4 w-4 text-purple-600 transition-transform ${mobileSection === 'whitelabel' ? 'rotate-180' : ''}`} />
          </button>
          {mobileSection === 'whitelabel' && (
            <div className="p-2 pt-0 space-y-1 bg-white/80 border-t border-purple-100">
              {whiteLabelSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium min-h-[40px] transition-colors ${
                      isActive
                        ? "bg-purple-100 text-purple-800 font-semibold"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-purple-400" />
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Accordion 4: Locations & Offices */}
        <div className="border border-purple-100 rounded-xl overflow-hidden bg-purple-50/20">
          <button
            onClick={() => toggleMobileSection('locations')}
            aria-expanded={mobileSection === 'locations'}
            className="w-full flex items-center justify-between p-3.5 text-left font-bold text-sm text-purple-950 hover:bg-purple-50/60 transition-colors min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-600" />
              Offices & Locations Directory
            </span>
            <ChevronDown className={`h-4 w-4 text-purple-600 transition-transform ${mobileSection === 'locations' ? 'rotate-180' : ''}`} />
          </button>
          {mobileSection === 'locations' && (
            <div className="p-3 bg-white/80 border-t border-purple-100 space-y-3">
              <div>
                <p className="text-[11px] font-bold text-purple-700 uppercase tracking-wider mb-1.5">
                  {offices.length} Verified Physical Offices
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {offices.map((office) => (
                    <Link 
                      key={office.id} 
                      to={`/offices/${office.slug}`} 
                      onClick={closeMenu} 
                      className="p-2 bg-purple-50 rounded-lg text-center border border-purple-100 block"
                    >
                      <span className="text-sm">{office.flag}</span>
                      <p className="text-[11px] font-bold text-gray-800">{office.city}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <Link to="/offices" onClick={closeMenu} className="text-xs font-bold text-purple-600 hover:underline">
                  All Offices Hub →
                </Link>
                <Link to="/locations" onClick={closeMenu} className="text-xs font-bold text-purple-600 hover:underline">
                  National Locations →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Core Main Pages Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
          >
            About Growth Service
          </NavLink>
          <NavLink
            to="/packages"
            onClick={closeMenu}
            className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
          >
            Growth Packages
          </NavLink>
          <NavLink
            to="/team"
            onClick={closeMenu}
            className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
          >
            Leadership & Team
          </NavLink>
          <NavLink
            to="/case-studies"
            onClick={closeMenu}
            className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/testimonials"
            onClick={closeMenu}
            className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
          >
            Client Reviews
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
          >
            Contact & Support
          </NavLink>
        </div>

        {/* Trust & Verification Pill Links */}
        <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-1.5 justify-center">
          {trustAndLegalLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeMenu}
              className="px-2.5 py-1.5 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-800 rounded-lg text-[11px] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Close Menu */}
        <button
          onClick={closeMenu}
          className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
        >
          <span>Close Navigation</span>
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
