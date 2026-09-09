import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, ChevronRight, MapPin, Phone, Clock, 
  Globe, Zap, Search, FileText, Facebook, Instagram, 
  Linkedin, Youtube 
} from "lucide-react";
import { getPhysicalOffices, getSocialProfiles } from "../../selectors";
import { getTelHref } from "../../services";

export const FooterOfficeSection: React.FC = () => {
  const offices = getPhysicalOffices();
  const social = getSocialProfiles();

  const socialLinks = [
    { icon: Facebook, href: social.facebook, label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: social.instagram, label: "Instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, href: social.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Youtube, href: social.youtube, label: "YouTube", color: "hover:text-red-500" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 border-b border-purple-800/60">
      {/* Office Cards (2 Cols on lg) */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-400" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Verified Physical Offices
            </h3>
          </div>
          <Link 
            to="/offices" 
            className="text-xs text-purple-300 hover:text-yellow-300 transition-colors font-medium flex items-center gap-1"
          >
            View All Office Hubs <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {offices.map((office) => (
            <div 
              key={office.id}
              className="bg-purple-950/40 hover:bg-purple-900/40 p-4 rounded-xl transition-all duration-300 border border-purple-800/40 hover:border-purple-600/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{office.flag}</span>
                  <Link 
                    to={`/offices/${office.slug}`}
                    className="font-semibold text-purple-200 hover:text-white text-xs hover:underline"
                  >
                    {office.name} ({office.state})
                  </Link>
                </div>
                <p className="text-gray-300 text-[11px] leading-relaxed mb-2 flex items-start gap-1">
                  <MapPin className="h-3 w-3 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </p>
                {office.landmark && (
                  <p className="text-purple-300/80 text-[10px] italic mb-2 ml-4 flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5 text-purple-400 shrink-0" />
                    <span>Near {office.landmark}</span>
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-purple-800/40 space-y-1.5">
                <a 
                  href={getTelHref(office.phone)}
                  className="text-gray-300 hover:text-yellow-300 text-[11px] flex items-center gap-1 transition-colors"
                >
                  <Phone className="h-3 w-3 text-purple-400" />
                  {office.phone}
                </a>
                {office.timings && (
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Clock className="h-3 w-3 text-purple-400" />
                    {office.timings}
                  </div>
                )}
                {office.mapLink && (
                  <a 
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-white text-[10px] flex items-center gap-1 transition-colors pt-0.5"
                  >
                    <Globe className="h-3 w-3" />
                    Get Directions →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Contact / Actions (1 Col on lg) */}
      <div className="lg:col-span-1 bg-gradient-to-br from-purple-900/40 via-purple-950/60 to-gray-900/40 p-5 rounded-2xl border border-purple-700/40 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            <h3 className="text-base font-bold text-white">Let&apos;s Accelerate Your Growth</h3>
          </div>
          <p className="text-gray-300 text-xs mb-4 leading-relaxed">
            Consult with our senior growth engineers and digital marketing architects today.
          </p>

          <div className="space-y-2.5">
            <Link 
              to="/book-call"
              className="block w-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white text-center py-2.5 px-4 rounded-lg font-bold transition-all duration-200 text-xs shadow-md shadow-purple-900/30 flex items-center justify-center gap-2"
            >
              <Phone className="h-3.5 w-3.5" /> Book Free Strategy Call
            </Link>
            <Link 
              to="/free-audit"
              className="block w-full border border-yellow-500/80 text-yellow-300 hover:bg-yellow-500/10 text-center py-2 px-4 rounded-lg font-semibold transition-all duration-200 text-xs flex items-center justify-center gap-2"
            >
              <Search className="h-3.5 w-3.5" /> Request Free Digital Audit
            </Link>
            <Link 
              to="/contact"
              className="block w-full border border-purple-500/60 text-purple-200 hover:bg-purple-900/40 hover:text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-200 text-xs flex items-center justify-center gap-2"
            >
              <FileText className="h-3.5 w-3.5" /> Contact Office Directly
            </Link>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-purple-800/40">
          <p className="text-purple-300 text-xs font-semibold mb-2">Follow Growth Service</p>
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a 
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-purple-900/60 p-2 rounded-lg text-gray-300 ${s.color} transition-all duration-200 hover:scale-110`}
                title={s.label}
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOfficeSection;
