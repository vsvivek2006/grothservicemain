import React from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  Phone, 
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Shield,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Award,
  Globe,
  ChevronRight,
  Users,
  TrendingUp,
  Share2,
  Search,
  Target,
  Layout,
  Palette,
  ShoppingCart,
  BookOpen,
  BarChart3,
  HelpCircle,
  Video,
  Mic,
  Briefcase,
  FileText,
  Lock,
  DollarSign,
  Trophy,
  Rocket,
  Zap,
  Eye
} from "lucide-react";

import DecorativeGrid from "./ui/DecorativeGrid";
import { Container } from "./ui";
import { FadeIn } from "./animations/FadeIn";

interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  country: string;
  flag: string;
  timings?: string;
  googleMaps?: string;
  landmark?: string;
}

interface FooterLink {
  name: string;
  path: string;
  icon: React.ElementType;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
  color: string;
  handle: string;
}

import { 
  getPhysicalOffices, 
  getBusinessName, 
  getBusinessTagline, 
  getBusinessEmail, 
  getSocialProfiles, 
  getTrustSignals 
} from "../selectors";
import { getMailtoHref } from "../services";

interface TrustBadge {
  text: string;
  path: string;
  icon: React.ElementType;
}

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // Office Locations Data - dynamically mapped from single source of truth
  const offices: OfficeLocation[] = getPhysicalOffices().map((o) => ({
    id: o.id,
    name: `${o.name} (${o.state})`,
    address: o.address,
    phone: o.phone,
    country: o.country,
    flag: o.flag,
    timings: o.timings,
    googleMaps: o.mapLink,
    landmark: o.landmark
  }));

  const companyLinks: FooterLink[] = [
    { name: "About Growth Service", path: "/about", icon: Building2 },
    { name: "Our Team", path: "/team", icon: Users },
    { name: "Our Impact", path: "/impact", icon: Trophy },
    { name: "Careers", path: "/careers", icon: Briefcase },
    { name: "Terms & Conditions", path: "/terms", icon: FileText },
    { name: "Privacy Policy", path: "/privacy", icon: Lock },
    { name: "Refund Policy", path: "/refund", icon: DollarSign },
    { name: "Accessibility Statement", path: "/accessibility", icon: Eye },
    { name: "Trust & Verification", path: "/verify", icon: ShieldCheck }
  ];

  const serviceLinks: FooterLink[] = [
    { name: "Digital Marketing", path: "/digital-marketing", icon: TrendingUp },
    { name: "SEO Services", path: "/seo", icon: Search },
    { name: "Social Media Management", path: "/social-media", icon: Share2 },
    { name: "Meta Ads Management", path: "/paid-marketing", icon: Target },
    { name: "Google Business Profile", path: "/local-seo", icon: MapPin },
    { name: "Content Marketing", path: "/content-marketing", icon: BookOpen },
    { name: "Lead Generation", path: "/lead-generation", icon: Target },
    { name: "Brand Strategy", path: "/branding", icon: Palette }
  ];

  const developmentLinks: FooterLink[] = [
    { name: "Design & Development", path: "/design-development", icon: Layout },
    { name: "Website Development", path: "/web-development", icon: Layout },
    { name: "UI/UX Design", path: "/ui-ux-design", icon: Palette },
    { name: "WordPress Development", path: "/wordpress-development", icon: Layout },
    { name: "E-commerce Solutions", path: "/ecommerce", icon: ShoppingCart },
    { name: "Mobile App Development", path: "/app-development", icon: Layout }
  ];

  const whiteLabelLinks: FooterLink[] = [
    { name: "White Label Hub", path: "/white-label", icon: Briefcase },
    { name: "White Label SEO", path: "/white-label-seo", icon: Search },
    { name: "White Label PPC", path: "/white-label-ppc", icon: Target },
    { name: "White Label Social Media", path: "/white-label-smo", icon: Share2 },
    { name: "White Label Web Dev", path: "/white-label-web", icon: Layout }
  ];

  const locationLinks: FooterLink[] = [
    { name: "Locations Directory", path: "/locations", icon: Globe },
    { name: "Company Offices Hub", path: "/offices", icon: MapPin },
    { name: "Jaipur Office", path: "/offices/jaipur", icon: MapPin },
    { name: "Vrindavan Office", path: "/offices/vrindavan", icon: MapPin },
    { name: "Nepal Office", path: "/offices/nepal", icon: MapPin },
    { name: "Delhi NCR Services", path: "/locations/delhi", icon: Globe },
    { name: "Patna Services", path: "/locations/patna", icon: Globe },
    { name: "Goa Services", path: "/locations/goa", icon: Globe }
  ];

  const resourceLinks: FooterLink[] = [
    { name: "Blog & Insights", path: "/blog", icon: BookOpen },
    { name: "Case Studies", path: "/case-studies", icon: BarChart3 },
    { name: "Client Testimonials", path: "/testimonials", icon: Trophy },
    { name: "Free Digital Audit", path: "/free-audit", icon: Search },
    { name: "Marketing Resources", path: "/resources", icon: BookOpen },
    { name: "Growth Packages", path: "/packages", icon: Award },
    { name: "Pricing Plans", path: "/pricing", icon: DollarSign },
    { name: "Help Center", path: "/help-center", icon: HelpCircle },
    { name: "FAQs", path: "/faq", icon: HelpCircle },
    { name: "Book a Consultation", path: "/book-call", icon: Phone }
  ];

  const social = getSocialProfiles();
  const trustSignals = getTrustSignals();

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: social.facebook, label: "Facebook", color: "hover:text-blue-500", handle: social.handles.facebook },
    { icon: Instagram, href: social.instagram, label: "Instagram", color: "hover:text-pink-500", handle: social.handles.instagram },
    { icon: Linkedin, href: social.linkedin, label: "LinkedIn", color: "hover:text-blue-400", handle: social.handles.linkedin },
    { icon: Youtube, href: social.youtube, label: "YouTube", color: "hover:text-red-500", handle: social.handles.youtube }
  ];

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
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background grid and ambient glow */}
      <DecorativeGrid variant="dots" dark />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="py-12 relative z-10">
        {/* Rating Section */}
        <FadeIn direction="up" className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current mx-0.5" />
                ))}
              </div>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm">
                {trustSignals.displayString}
              </span>
              <span className="text-gray-300 text-sm flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {trustSignals.reviewCount}+ Reviews
              </span>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mb-2">
              Trusted by 500+ Businesses Worldwide
            </p>
            <p className="text-gray-300 text-sm">
              ⭐ Rated 4.8/5 average across Google, Facebook & Trustpilot
            </p>
            <div className="flex justify-center gap-6 mt-3 text-xs text-gray-400">
              <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Google Partner</span>
              <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Meta Business Partner</span>
              <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Trustpilot 4.7</span>
            </div>
          </div>
        </FadeIn>

        {/* 6 Category Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pb-12 border-b border-purple-800/60">
          {/* 1. COMPANY */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-purple-300 mb-4 pb-2 border-b border-purple-700/50 flex items-center">
              <Shield className="h-4 w-4 mr-1.5 text-purple-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-xs flex items-center group py-0.5"
                    >
                      <Icon className="h-3 w-3 mr-1.5 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 2. SERVICES */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-purple-300 mb-4 pb-2 border-b border-purple-700/50 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1.5 text-purple-400" />
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-xs flex items-center group py-0.5"
                    >
                      <Icon className="h-3 w-3 mr-1.5 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 3. DEVELOPMENT */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-purple-300 mb-4 pb-2 border-b border-purple-700/50 flex items-center">
              <Layout className="h-4 w-4 mr-1.5 text-purple-400" />
              Development
            </h3>
            <ul className="space-y-2">
              {developmentLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-xs flex items-center group py-0.5"
                    >
                      <Icon className="h-3 w-3 mr-1.5 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 4. WHITE LABEL */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-purple-300 mb-4 pb-2 border-b border-purple-700/50 flex items-center">
              <Briefcase className="h-4 w-4 mr-1.5 text-purple-400" />
              White Label
            </h3>
            <ul className="space-y-2">
              {whiteLabelLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-xs flex items-center group py-0.5"
                    >
                      <Icon className="h-3 w-3 mr-1.5 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 5. LOCATIONS */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-purple-300 mb-4 pb-2 border-b border-purple-700/50 flex items-center">
              <Globe className="h-4 w-4 mr-1.5 text-purple-400" />
              Locations
            </h3>
            <ul className="space-y-2">
              {locationLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-xs flex items-center group py-0.5"
                    >
                      <Icon className="h-3 w-3 mr-1.5 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 6. RESOURCES */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-purple-300 mb-4 pb-2 border-b border-purple-700/50 flex items-center">
              <BookOpen className="h-4 w-4 mr-1.5 text-purple-400" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-xs flex items-center group py-0.5"
                    >
                      <Icon className="h-3 w-3 mr-1.5 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Physical Offices & Quick Connect */}
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
                        to={`/offices/${office.id.replace('india-', '')}`}
                        className="font-semibold text-purple-200 hover:text-white text-xs hover:underline"
                      >
                        {office.name}
                      </Link>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed mb-2 flex items-start gap-1">
                      <MapPin className="h-3 w-3 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                    {office.landmark && (
                      <p className="text-purple-300/80 text-[10px] italic mb-2 ml-4">
                        📍 {office.landmark}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-purple-800/40 space-y-1.5">
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
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
                    {office.googleMaps && (
                      <a 
                        href={office.googleMaps}
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
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-purple-900/60 p-2 rounded-lg text-gray-300 ${social.color} transition-all duration-200 hover:scale-110`}
                    title={social.label}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security & Authenticity Verification Alert */}
        <div className="my-8 p-5 bg-gradient-to-r from-yellow-950/40 via-purple-950/40 to-yellow-950/40 border border-yellow-600/40 rounded-xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-yellow-400" />
                  Official Authenticity & Scam Alert Warning
                </p>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                  Growth Service does <span className="font-semibold text-white">NOT</span> recruit via Telegram, offer paid review tasks, or request advance deposits to personal accounts. Always verify communications through our official security portal.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
              <Link 
                to="/verify" 
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Verify Official Domain & Staff
              </Link>
              <a 
                href={getMailtoHref(getBusinessEmail(), "Report Fraud")} 
                className="border border-yellow-500/60 hover:bg-yellow-500/10 text-yellow-300 font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5"
              >
                Report Fraud
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
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
                    © {year} <span className="text-purple-300 font-bold">{getBusinessName()}</span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    {getBusinessTagline()}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {['Terms', 'Privacy', 'Refund', 'Sitemap', 'Accessibility', 'Verify'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-300 transition-colors px-3 py-1.5 hover:bg-purple-900/30 rounded-full text-xs"
                >
                  {item}
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
              Growth Service is a registered digital marketing agency. All trademarks, logos and brand names are the property of their respective owners.
            </p>
            <p className="text-gray-600 text-[10px] mt-1">
              Made with ❤️ for growing businesses • <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">Partner with us</Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
