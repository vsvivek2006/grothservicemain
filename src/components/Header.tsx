import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle, Mail, Info, BookOpen, FileText, Sparkles, MapPin, Building, ArrowRight, Zap, Shield, ShieldCheck, ChevronRight } from "lucide-react";
import { Container } from "./ui";

import { businessConfig } from "../config/business";

const texts = ["Jaipur • Vrindavan • Nepal", "300+ Happy Clients", "Digital Growth Partner"];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [animatedText, setAnimatedText] = React.useState<string>("");
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  // Text animation effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for animated text
  React.useEffect(() => {
    const currentText = texts[currentTextIndex];
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (currentIndex <= currentText.length) {
        setAnimatedText(currentText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeWriter, 80);
      }
    };

    typeWriter();
    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Mobile accordion state
  const [mobileSection, setMobileSection] = React.useState<string | null>("marketing");
  // Desktop keyboard dropdown state
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSection = (name: string) => {
    setMobileSection((prev) => (prev === name ? null : name));
  };

  // Close dropdowns when clicking outside or pressing Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Contact Info with Office Locations from single source of truth
  const topNavItems = [
    { 
      name: `India: ${businessConfig.phones.indiaPrimary}`, 
      href: `tel:${businessConfig.phones.indiaPrimary.replace(/[^0-9+]/g, '')}`, 
      icon: <Phone className="h-4 w-4" />,
      location: "🇮🇳 Jaipur & Vrindavan Offices"
    },
    { 
      name: `Nepal: ${businessConfig.phones.nepalPrimary}`, 
      href: `https://wa.me/${businessConfig.whatsapp.nepalNumber}`, 
      icon: <MessageCircle className="h-4 w-4" />,
      location: "🇳🇵 Nepal Office"
    },
    { 
      name: `Email: ${businessConfig.emails.primary}`, 
      href: `mailto:${businessConfig.emails.primary}`, 
      icon: <Mail className="h-4 w-4" />,
      location: "🌐 Global Support"
    }
  ];

  const mainNavItems = [
    { name: "ABOUT", href: "/about", icon: <Info className="h-3.5 w-3.5" /> },
    { name: "SOLUTIONS", href: "/packages", icon: <Building className="h-3.5 w-3.5" /> },
    { name: "BLOG", href: "/blog", icon: <BookOpen className="h-3.5 w-3.5" /> },
    { name: "RESOURCES", href: "/resources", icon: <FileText className="h-3.5 w-3.5" /> },
    { name: "FREE AUDIT", href: "/free-audit", highlight: true, icon: <Sparkles className="h-3.5 w-3.5" /> }
  ];

  // Digital Marketing Submenu
  const digitalMarketingSubmenu = [
    { name: "SEO Services", href: "/seo" },
    { name: "Social Media Management", href: "/social-media" },
    { name: "Meta Ads Management", href: "/paid-marketing" },
    { name: "Google Business Profile", href: "/local-seo" },
    { name: "Content Marketing", href: "/content-marketing" },
    { name: "Lead Generation", href: "/lead-generation" },
    { name: "Brand Strategy", href: "/branding" }
  ];

  // Design & Development Submenu
  const designDevelopmentSubmenu = [
    { name: "Website Development", href: "/web-development" },
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "WordPress Development", href: "/wordpress-development" },
    { name: "E-commerce Solutions", href: "/ecommerce" },
    { name: "Mobile App Development", href: "/app-development" }
  ];

  // White Label Submenu
  const whiteLabelSubmenu = [
    { name: "White Label Hub", href: "/white-label" },
    { name: "White Label SEO", href: "/white-label-seo" },
    { name: "White Label PPC", href: "/white-label-ppc" },
    { name: "White Label Social Media", href: "/white-label-smo" },
    { name: "White Label Web Dev", href: "/white-label-web" }
  ];

  // Trust & Company Links
  const trustAndLegalLinks = [
    { name: "Careers", href: "/careers" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Verify Authenticity", href: "/verify" }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80' : 'bg-white shadow-sm'}`}>
      {/* Top Bar - Office Locations & Contact */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="flex flex-wrap justify-between items-center py-1.5 gap-2">
            {/* Left - Office Locations (Desktop) */}
            <div className="hidden md:flex items-center space-x-2 text-xs">
              <Link 
                to="/offices/jaipur" 
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-0.5 rounded-full border border-white/20 transition-colors"
              >
                <MapPin className="h-3 w-3 text-yellow-300" /> Jaipur
              </Link>
              <Link 
                to="/offices/vrindavan" 
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-0.5 rounded-full border border-white/20 transition-colors"
              >
                <MapPin className="h-3 w-3 text-yellow-300" /> Vrindavan
              </Link>
              <Link 
                to="/offices/nepal" 
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-0.5 rounded-full border border-white/20 transition-colors"
              >
                <Building className="h-3 w-3 text-yellow-300" /> Nepal
              </Link>
            </div>

            {/* Center - Animated Text */}
            <div className="flex items-center justify-center flex-1">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-0.5 rounded-full border border-white/15">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-yellow-300 animate-pulse shrink-0" />
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold text-xs whitespace-nowrap">
                    {animatedText}
                  </span>
                  <Zap className="h-3 w-3 text-yellow-300 animate-pulse shrink-0" />
                </div>
              </div>
            </div>

            {/* Right - Contact Icons */}
            <div className="flex items-center space-x-2">
              {topNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 relative group"
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

      {/* Main Navigation */}
      <Container as="nav" aria-label="Main">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 group"
              aria-label="Home"
            >
              <div className="h-12 w-12 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all">
                <img 
                  src="/logo.png" 
                  alt="Growth Service Logo" 
                  className="h-10 w-10 object-contain p-1"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-full w-full flex items-center justify-center text-purple-600 font-extrabold text-xl';
                    fallback.textContent = 'GS';
                    e.currentTarget.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                  Growth Service
                </h1>
                <p className="text-[10px] text-gray-500 font-medium tracking-wider">
                  DIGITAL GROWTH PARTNER
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Main Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-bold text-xs transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm hover:shadow' 
                      : isActive
                        ? 'bg-purple-100 text-purple-700 font-semibold'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}

            {/* Primary Action CTA */}
            <Link
              to="/book-call"
              className="ml-2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Book Call</span>
            </Link>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={businessConfig.whatsapp.defaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-sm flex items-center justify-center"
              aria-label="Chat with Growth Service on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
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

        {/* Services Navigation Bar - Desktop */}
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
                    onClick={() => setActiveDropdown(null)}
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
                    onClick={() => setActiveDropdown(null)}
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
                    onClick={() => setActiveDropdown(null)}
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
                    onClick={() => setActiveDropdown(null)}
                    className="text-xs font-bold text-purple-600 hover:text-purple-700 hover:underline flex items-center gap-1"
                  >
                    <span>All Locations Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <NavLink to="/locations/delhi" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Delhi</div>
                    <div className="text-[10px] text-gray-500">National Capital Region</div>
                  </NavLink>
                  <NavLink to="/locations/jaipur" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600 flex items-center justify-between">
                      <span>Jaipur</span>
                      <span className="text-[9px] bg-purple-100 text-purple-700 font-semibold px-1 rounded">Office</span>
                    </div>
                    <div className="text-[10px] text-gray-500">Rajasthan</div>
                  </NavLink>
                  <NavLink to="/locations/patna" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Patna</div>
                    <div className="text-[10px] text-gray-500">Bihar</div>
                  </NavLink>
                  <NavLink to="/locations/goa" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Goa</div>
                    <div className="text-[10px] text-gray-500">Goa</div>
                  </NavLink>
                  <NavLink to="/locations/gurgaon" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Gurgaon</div>
                    <div className="text-[10px] text-gray-500">Cyber City, Haryana</div>
                  </NavLink>
                  <NavLink to="/locations/chandigarh" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Chandigarh</div>
                    <div className="text-[10px] text-gray-500">Punjab / Tricity</div>
                  </NavLink>
                  <NavLink to="/locations/mumbai" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Mumbai</div>
                    <div className="text-[10px] text-gray-500">Maharashtra</div>
                  </NavLink>
                  <NavLink to="/locations/bangalore" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Bangalore</div>
                    <div className="text-[10px] text-gray-500">Karnataka</div>
                  </NavLink>
                  <NavLink to="/locations/lucknow" onClick={() => setActiveDropdown(null)} className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Lucknow</div>
                    <div className="text-[10px] text-gray-500">Uttar Pradesh</div>
                  </NavLink>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs bg-purple-50/40 p-2.5 rounded-xl">
                  <span className="text-slate-600 font-medium">
                    Our 3 Company Offices:
                  </span>
                  <div className="flex items-center gap-3 font-semibold">
                    <NavLink to="/offices/jaipur" onClick={() => setActiveDropdown(null)} className="text-purple-600 hover:underline">Jaipur</NavLink>
                    <span className="text-slate-300">•</span>
                    <NavLink to="/offices/vrindavan" onClick={() => setActiveDropdown(null)} className="text-purple-600 hover:underline">Vrindavan</NavLink>
                    <span className="text-slate-300">•</span>
                    <NavLink to="/offices/nepal" onClick={() => setActiveDropdown(null)} className="text-purple-600 hover:underline">Nepal</NavLink>
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
                <NavLink to="/offices/jaipur" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1 transition-all duration-150">
                  Jaipur Office (Rajasthan)
                </NavLink>
                <NavLink to="/offices/vrindavan" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1 transition-all duration-150">
                  Vrindavan Office (Uttar Pradesh)
                </NavLink>
                <NavLink to="/offices/nepal" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:translate-x-1 transition-all duration-150">
                  Nepal Office (Siraha)
                </NavLink>
                <div className="mt-1 pt-1 border-t border-gray-100">
                  <NavLink to="/offices" onClick={() => setActiveDropdown(null)} className="block px-3 py-1.5 rounded-lg text-xs font-bold text-purple-600 hover:bg-purple-50 text-center">
                    All 3 Company Offices →
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
      </Container>

      {/* Mobile Menu - Categorized Drawer with Touch-Friendly Targets */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white/98 backdrop-blur-md z-40 overflow-y-auto animate-fade-in">
          <div className="px-4 py-4 space-y-3 pb-24 max-w-lg mx-auto">
            {/* Quick Action Bar */}
            <div className="grid grid-cols-2 gap-2">
              <Link 
                to="/book-call"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white font-bold text-xs py-3 px-3 rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Phone className="h-4 w-4" />
                <span>Book Strategy Call</span>
              </Link>
              <a
                href={businessConfig.whatsapp.defaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs py-3 px-3 rounded-xl shadow-sm text-center flex items-center justify-center gap-1.5 min-h-[44px] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
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
                      onClick={() => setIsOpen(false)}
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
                      onClick={() => setIsOpen(false)}
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
                      onClick={() => setIsOpen(false)}
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
                    <p className="text-[11px] font-bold text-purple-700 uppercase tracking-wider mb-1.5">3 Verified Physical Offices</p>
                    <div className="grid grid-cols-3 gap-1.5">
                      <Link to="/offices/jaipur" onClick={() => setIsOpen(false)} className="p-2 bg-purple-50 rounded-lg text-center border border-purple-100 block">
                        <span className="text-sm">🇮🇳</span>
                        <p className="text-[11px] font-bold text-gray-800">Jaipur</p>
                      </Link>
                      <Link to="/offices/vrindavan" onClick={() => setIsOpen(false)} className="p-2 bg-purple-50 rounded-lg text-center border border-purple-100 block">
                        <span className="text-sm">🇮🇳</span>
                        <p className="text-[11px] font-bold text-gray-800">Vrindavan</p>
                      </Link>
                      <Link to="/offices/nepal" onClick={() => setIsOpen(false)} className="p-2 bg-purple-50 rounded-lg text-center border border-purple-100 block">
                        <span className="text-sm">🇳🇵</span>
                        <p className="text-[11px] font-bold text-gray-800">Nepal</p>
                      </Link>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <Link to="/offices" onClick={() => setIsOpen(false)} className="text-xs font-bold text-purple-600 hover:underline">
                      All Offices Hub →
                    </Link>
                    <Link to="/locations" onClick={() => setIsOpen(false)} className="text-xs font-bold text-purple-600 hover:underline">
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
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
              >
                About Growth Service
              </NavLink>
              <NavLink
                to="/packages"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
              >
                Growth Packages
              </NavLink>
              <NavLink
                to="/team"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
              >
                Leadership & Team
              </NavLink>
              <NavLink
                to="/case-studies"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
              >
                Case Studies
              </NavLink>
              <NavLink
                to="/testimonials"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-gray-200 text-center text-xs font-bold text-gray-800 hover:bg-purple-50 hover:border-purple-200 min-h-[44px] flex items-center justify-center"
              >
                Client Reviews
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
                  className="px-2.5 py-1.5 bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-800 rounded-lg text-[11px] font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Close Menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <span>Close Navigation</span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;