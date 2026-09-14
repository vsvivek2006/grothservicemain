"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, Mail, MapPin, Building, Zap, Info, BookOpen, 
  FileText, Sparkles, ChevronDown, ChevronRight, Menu, X 
} from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { WhatsAppIcon } from "../../../components/ui/WhatsAppIcon";
import { 
  getPhysicalOffices, getPrimaryPhone, getBusinessEmail, 
  getOfficePhone, getBusinessName, getBusinessTagline 
} from "../../../selectors";
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from "../../../services";
import { navigationConfig } from "../../../config";

const tickerTexts = ["Jaipur • Vrindavan • Nepal", "300+ Happy Clients", "Digital Growth Partner"];

export const NextHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>("marketing");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const pathname = usePathname();

  const businessName = getBusinessName();
  const tagline = getBusinessTagline();
  const offices = getPhysicalOffices();
  const primaryPhone = getPrimaryPhone();
  const businessEmail = getBusinessEmail();
  const nepalPhone = getOfficePhone('nepal');

  // Top Bar ticker rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % tickerTexts.length);
        setIsFading(false);
      }, 250);
      return () => clearTimeout(timeout);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const topNavItems = [
    { 
      name: `India: ${primaryPhone}`, 
      href: getTelHref(primaryPhone), 
      icon: <Phone className="h-3.5 w-3.5" />,
      location: "🇮🇳 Jaipur & Vrindavan Offices"
    },
    { 
      name: `Nepal: ${nepalPhone}`, 
      href: getNepalWhatsAppUrl(), 
      icon: <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-300" />,
      location: "🇳🇵 Nepal Office (WhatsApp)"
    },
    { 
      name: `Email: ${businessEmail}`, 
      href: getMailtoHref(businessEmail), 
      icon: <Mail className="h-3.5 w-3.5" />,
      location: "Global Support"
    }
  ];

  const mainNavItems = [
    { name: "ABOUT", href: "/about", icon: <Info className="h-3.5 w-3.5" /> },
    { name: "SOLUTIONS", href: "/packages", icon: <Building className="h-3.5 w-3.5" /> },
    { name: "BLOG", href: "/blog", icon: <BookOpen className="h-3.5 w-3.5" /> },
    { name: "RESOURCES", href: "/resources", icon: <FileText className="h-3.5 w-3.5" /> },
    { name: "FREE AUDIT", href: "/free-audit", highlight: true, icon: <Sparkles className="h-3.5 w-3.5" /> }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80' : 'bg-white shadow-sm'}`}>
      {/* Top Bar with Office Badges & Verified Contacts */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="flex items-center justify-between py-1.5 gap-1.5 sm:gap-2">
            {/* Left - Office Locations (Desktop) */}
            <div className="hidden md:flex items-center space-x-2 text-xs">
              {offices.map((office) => (
                <Link 
                  key={office.id}
                  href={`/offices/${office.slug}`} 
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-0.5 rounded-full border border-white/20 transition-colors"
                >
                  {office.id === 'nepal' ? (
                    <Building className="h-3 w-3 text-yellow-300" />
                  ) : (
                    <MapPin className="h-3 w-3 text-yellow-300" />
                  )}
                  {office.city}
                </Link>
              ))}
            </div>

            {/* Center - Animated Text */}
            <div className="flex items-center justify-center flex-1 min-w-0">
              <div className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-0.5 rounded-full border border-white/15 max-w-[200px] sm:max-w-none">
                <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-hidden">
                  <Zap className="h-3 w-3 text-yellow-300 shrink-0" />
                  <span className={`bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold text-[10px] sm:text-xs truncate transition-opacity duration-250 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    {tickerTexts[currentTextIndex]}
                  </span>
                  <Zap className="h-3 w-3 text-yellow-300 shrink-0" />
                </div>
              </div>
            </div>

            {/* Right - Contact Icons */}
            <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
              {topNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-1 sm:p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 relative group"
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={item.name}
                >
                  {item.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-950 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-purple-800 z-50 pointer-events-none">
                    {item.location}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <Container as="nav" aria-label="Main">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 group"
              aria-label="Home"
            >
              <div className="h-12 w-12 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all">
                <Image 
                  src="/logo.png" 
                  alt={`${businessName} Logo`} 
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 object-contain p-1"
                />
              </div>
              <div className="block">
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  {businessName}
                </h1>
                <p className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
                  {tagline}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`px-3 py-2 rounded-lg font-bold text-xs transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm hover:shadow' 
                      : isActive
                        ? 'bg-purple-100 text-purple-700 font-semibold'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}

            {/* Primary Action CTA */}
            <Link
              href="/book-call"
              className="ml-2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Book Call</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-all min-h-[44px] min-w-[44px]"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Services Submenu Bar */}
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
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'marketing' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
              </button>
              <div 
                className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto ${
                  activeDropdown === 'marketing' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
                }`}
              >
                {navigationConfig.digitalMarketingSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                      pathname === item.href
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
                onClick={() => toggleDropdown('design')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'design'}
                className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-all duration-200"
              >
                <span>Design & Development</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'design' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
              </button>
              <div 
                className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto ${
                  activeDropdown === 'design' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
                }`}
              >
                {navigationConfig.designDevelopmentSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                      pathname === item.href
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
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'whitelabel'}
                className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 focus:bg-purple-50 transition-all duration-200"
              >
                <span>White Label</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'whitelabel' ? 'rotate-180 text-purple-600' : 'group-hover:rotate-180'}`} />
              </button>
              <div 
                className={`absolute left-0 mt-1.5 w-56 rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-2 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 z-50 origin-top-left pointer-events-none group-hover:pointer-events-auto ${
                  activeDropdown === 'whitelabel' ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' : ''
                }`}
              >
                {navigationConfig.whiteLabelSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                      pathname === item.href
                        ? "bg-purple-50 text-purple-700 font-semibold"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col animate-fade-in">
          {/* Mobile Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-slate-200/80 shrink-0 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="Growth Service Logo" width={32} height={32} priority className="h-8 w-8 object-contain p-0.5" />
              </div>
              <span className="text-lg font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {businessName}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-purple-700" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {/* Primary Action Button */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/book-call"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white font-bold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
              >
                <Phone className="w-3.5 h-3.5" /> Book Call
              </Link>
              <Link
                href="/free-audit"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" /> Free Audit
              </Link>
            </div>

            {/* Main Links */}
            <div className="space-y-1 bg-slate-50 p-2 rounded-xl border border-slate-200/60">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
            </div>

            {/* Accordion: Digital Marketing */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileSection(mobileSection === "marketing" ? null : "marketing")}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 font-bold text-sm text-gray-800"
              >
                <span>Digital Marketing Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "marketing" ? "rotate-180 text-purple-600" : ""}`} />
              </button>
              {mobileSection === "marketing" && (
                <div className="p-2 space-y-1 bg-white">
                  {navigationConfig.digitalMarketingSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Design & Development */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileSection(mobileSection === "design" ? null : "design")}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 font-bold text-sm text-gray-800"
              >
                <span>Design & Development</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "design" ? "rotate-180 text-purple-600" : ""}`} />
              </button>
              {mobileSection === "design" && (
                <div className="p-2 space-y-1 bg-white">
                  {navigationConfig.designDevelopmentSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: White Label */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileSection(mobileSection === "whitelabel" ? null : "whitelabel")}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 font-bold text-sm text-gray-800"
              >
                <span>White Label Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "whitelabel" ? "rotate-180 text-purple-600" : ""}`} />
              </button>
              {mobileSection === "whitelabel" && (
                <div className="p-2 space-y-1 bg-white">
                  {navigationConfig.whiteLabelSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Offices Quick Contact */}
            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 space-y-2">
              <p className="text-xs font-bold text-purple-900 uppercase tracking-wider">Physical Offices</p>
              <div className="grid grid-cols-1 gap-1.5">
                {offices.map((office) => (
                  <Link
                    key={office.id}
                    href={`/offices/${office.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium text-purple-800 hover:text-purple-950 flex items-center gap-1.5"
                  >
                    <span>{office.flag}</span>
                    <span>{office.name} ({office.city})</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NextHeader;
