import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Award, Star, Share2, Target, 
  Search, Layout, TrendingUp, ShoppingCart, Palette, Heart
} from "lucide-react";
import { getBusinessName, getBusinessTagline } from "../../selectors";

interface TrustBadge {
  text: string;
  path: string;
  icon: React.ElementType;
}

export const FooterBottom: React.FC = () => {
  const year = new Date().getFullYear();
  const businessName = getBusinessName();
  const tagline = getBusinessTagline();

  const trustBadges: TrustBadge[] = [
    { text: "Social Media Marketing", path: "/social-media", icon: Share2 },
    { text: "Meta Ads Management", path: "/paid-marketing", icon: Target },
    { text: "SEO Services", path: "/seo", icon: Search },
    { text: "Website Development", path: "/web-development", icon: Layout },
    { text: "Performance Marketing", path: "/paid-marketing", icon: TrendingUp },
    { text: "E-commerce Solutions", path: "/ecommerce", icon: ShoppingCart },
    { text: "App Development", path: "/app-development", icon: Layout },
    { text: "UI/UX Design", path: "/ui-ux-design", icon: Palette }
  ];

  return (
    <div className="border-t border-purple-800 mt-8 pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Copyright */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-white font-bold text-sm">GS</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                © {year} <span className="text-purple-300 font-bold">{businessName}</span>
              </p>
              <p className="text-gray-500 text-xs">
                {tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          {[
            { label: 'Terms', path: '/terms' },
            { label: 'Privacy', path: '/privacy' },
            { label: 'Refund', path: '/refund' },
            { label: 'Sitemap', path: '/locations' },
            { label: 'Accessibility', path: '/accessibility' },
            { label: 'Verify', path: '/verify' }
          ].map((item) => (
            <Link 
              key={item.label}
              to={item.path}
              className="text-gray-400 hover:text-purple-300 transition-colors px-3 py-1.5 hover:bg-purple-900/30 rounded-full text-xs"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <p className="text-gray-500 text-xs mb-2">Certified & Trusted</p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[10px] bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-purple-400" /> SSL Secured
            </span>
            <span className="text-[10px] bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Award className="w-3 h-3 text-purple-400" /> Google Partner
            </span>
            <span className="text-[10px] bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> Trustpilot 4.7
            </span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-6 pt-6 border-t border-purple-800/80">
        {trustBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <Link 
              key={badge.text}
              to={badge.path}
              className="text-purple-300 text-[11px] bg-purple-900/30 border border-purple-700/50 px-3 py-1.5 rounded-full hover:bg-purple-800/50 hover:text-white transition-all duration-200 hover:scale-105 flex items-center gap-1.5"
            >
              <Icon className="w-3 h-3 text-purple-400" />
              <span>{badge.text}</span>
            </Link>
          );
        })}
      </div>

      {/* Final Note */}
      <div className="text-center mt-6 pt-4 border-t border-purple-800/50">
        <p className="text-gray-500 text-[10px]">
          {businessName} is a registered digital marketing agency. All trademarks, logos and brand names are the property of their respective owners.
        </p>
        <p className="text-gray-600 text-[10px] mt-1 inline-flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          <span>for growing businesses •</span>
          <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors ml-1">Partner with us</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
