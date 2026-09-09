import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Phone, MessageCircle, Mail, Home, Info, BookOpen, FileText, Sparkles, MapPin, Globe, Building, ArrowRight } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [animatedText, setAnimatedText] = React.useState<string>("");
  const location = useLocation();

  const texts = ["Jaipur • Vrindavan • Nepal", "300+ Happy Clients", "Digital Growth Partner"];
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

  // Contact Info with Office Locations
  const topNavItems = [
    { 
      name: "India: +91-93414-36937", 
      href: "tel:+919341436937", 
      icon: <Phone className="h-4 w-4" />,
      location: "🇮🇳 Jaipur/Vrindavan"
    },
    { 
      name: "Nepal: +977-9707382481", 
      href: "https://wa.me/9779707382481", 
      icon: <MessageCircle className="h-4 w-4" />,
      location: "🇳🇵 Nepal HQ"
    },
    { 
      name: "Email: info@growthservice.in", 
      href: "mailto:info@growthservice.in", 
      icon: <Mail className="h-4 w-4" />,
      location: "🌐 Global"
    }
  ];

  const mainNavItems = [
    { name: "BOOK A CALL", href: "/book-call", icon: <Phone className="h-4 w-4" /> },
    { name: "ABOUT US", href: "/about", icon: <Info className="h-4 w-4" /> },
    { name: "BLOG", href: "/blog", icon: <BookOpen className="h-4 w-4" /> },
    { name: "RESOURCES", href: "/resources", icon: <FileText className="h-4 w-4" /> },
    { name: "FREE AUDIT", href: "/free-audit", highlight: true, icon: <Sparkles className="h-4 w-4" /> }
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
    { name: "E-commerce Development", href: "/ecommerce" },
    { name: "Mobile App Development", href: "/app-development" }
  ];

  // White Label Submenu
  const whiteLabelSubmenu = [
    { name: "White Label SEO", href: "/white-label-seo" },
    { name: "White Label PPC", href: "/white-label-ppc" },
    { name: "White Label Social Media", href: "/white-label-smo" },
    { name: "White Label Web Development", href: "/white-label-web" }
  ];

  // Other Pages
  const otherPages = [
    { name: "Locations", href: "/locations" },
    { name: "Offices", href: "/offices" },
    { name: "Meet The Team", href: "/team" },
    { name: "Packages", href: "/packages" },
    { name: "Our Impact", href: "/impact" },
    { name: "Contact Us", href: "/contact" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Careers", href: "/careers" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Refund", href: "/refund" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Office Locations & Contact */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-between items-center py-2 gap-2">
            {/* Left - Office Locations (Desktop) */}
            <div className="hidden md:flex items-center space-x-4 text-xs">
              <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                <MapPin className="h-3 w-3" /> Jaipur
              </span>
              <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                <MapPin className="h-3 w-3" /> Vrindavan
              </span>
              <span className="flex items-center gap-1 bg-yellow-400/30 px-2 py-1 rounded-full border border-yellow-400/50">
                <Building className="h-3 w-3" /> Nepal (HQ)
              </span>
            </div>

            {/* Center - Animated Text */}
            <div className="flex items-center justify-center flex-1">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-300 animate-pulse text-xs">✦</span>
                  <span className="text-white font-medium text-xs whitespace-nowrap">
                    {animatedText}
                  </span>
                  <span className="text-yellow-300 animate-pulse text-xs">✦</span>
                </div>
              </div>
            </div>

            {/* Right - Contact Icons */}
            <div className="flex items-center space-x-2">
              {topNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 relative group"
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={item.name}
                >
                  {item.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.location}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4" aria-label="Main">
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
                  `px-3 py-2 rounded-lg font-bold text-xs transition-all duration-300 flex items-center gap-1 whitespace-nowrap ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl' 
                      : isActive
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-sm'
                        : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="https://wa.me/9779707382481"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-all"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Services Navigation Bar - Desktop */}
        <div className="hidden lg:block border-t border-gray-200 py-2">
          <div className="flex flex-wrap justify-center items-center gap-1">
            {/* Digital Marketing Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-all duration-300">
                Digital Marketing
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute left-0 mt-1 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {digitalMarketingSubmenu.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm transition-all ${
                        isActive
                          ? "bg-purple-50 text-purple-700 font-medium"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
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
              <button className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-all duration-300">
                Design & Development
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute left-0 mt-1 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {designDevelopmentSubmenu.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm transition-all ${
                        isActive
                          ? "bg-purple-50 text-purple-700 font-medium"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
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
              <button className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-all duration-300">
                White Label
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute left-0 mt-1 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {whiteLabelSubmenu.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm transition-all ${
                        isActive
                          ? "bg-purple-50 text-purple-700 font-medium"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
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
              <NavLink
                to="/locations"
                className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-all duration-300"
              >
                Locations
                <ChevronDown className="h-3 w-3" />
              </NavLink>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[640px] rounded-2xl border border-gray-200 bg-white shadow-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                      Regional Coverage Directory
                    </span>
                    <p className="text-[11px] text-gray-500">Structured by region/state across India & Nepal</p>
                  </div>
                  <NavLink
                    to="/locations"
                    className="text-xs font-bold text-purple-600 hover:text-purple-700 hover:underline flex items-center gap-1"
                  >
                    <span>All Locations Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <NavLink to="/locations/delhi-ncr" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Delhi NCR</div>
                    <div className="text-[10px] text-gray-500">Delhi, Gurgaon, Noida</div>
                  </NavLink>
                  <NavLink to="/locations/bihar" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Bihar</div>
                    <div className="text-[10px] text-gray-500">Patna, Gaya, Muzaffarpur</div>
                  </NavLink>
                  <NavLink to="/locations/rajasthan" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600 flex items-center justify-between">
                      <span>Rajasthan</span>
                      <span className="text-[9px] bg-purple-100 text-purple-700 font-semibold px-1 rounded">Office</span>
                    </div>
                    <div className="text-[10px] text-gray-500">Jaipur, Jodhpur, Udaipur</div>
                  </NavLink>
                  <NavLink to="/locations/goa" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Goa</div>
                    <div className="text-[10px] text-gray-500">Panaji, Margao</div>
                  </NavLink>
                  <NavLink to="/locations/punjab-chandigarh" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Punjab / Chandigarh</div>
                    <div className="text-[10px] text-gray-500">Chandigarh, Mohali, Ludhiana</div>
                  </NavLink>
                  <NavLink to="/locations/uttar-pradesh" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600 flex items-center justify-between">
                      <span>Uttar Pradesh</span>
                      <span className="text-[9px] bg-amber-100 text-amber-800 font-semibold px-1 rounded">HQ</span>
                    </div>
                    <div className="text-[10px] text-gray-500">Vrindavan, Lucknow, Agra</div>
                  </NavLink>
                  <NavLink to="/locations/maharashtra" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Maharashtra</div>
                    <div className="text-[10px] text-gray-500">Mumbai, Pune, Nagpur</div>
                  </NavLink>
                  <NavLink to="/locations/karnataka" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600">Karnataka</div>
                    <div className="text-[10px] text-gray-500">Bangalore, Mysore</div>
                  </NavLink>
                  <NavLink to="/locations/nepal" className="p-2 rounded-xl hover:bg-purple-50/70 transition-colors block group/item">
                    <div className="font-bold text-xs text-gray-900 group-hover/item:text-purple-600 flex items-center justify-between">
                      <span>Nepal</span>
                      <span className="text-[9px] bg-purple-100 text-purple-700 font-semibold px-1 rounded">Office</span>
                    </div>
                    <div className="text-[10px] text-gray-500">Bariyarpatti, Kathmandu</div>
                  </NavLink>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs bg-purple-50/40 p-2.5 rounded-xl">
                  <span className="text-slate-600 font-medium">
                    Our 3 Company Offices:
                  </span>
                  <div className="flex items-center gap-3 font-semibold">
                    <NavLink to="/offices/jaipur" className="text-purple-600 hover:underline">Jaipur</NavLink>
                    <span className="text-slate-300">•</span>
                    <NavLink to="/offices/vrindavan" className="text-purple-600 hover:underline">Vrindavan (HQ)</NavLink>
                    <span className="text-slate-300">•</span>
                    <NavLink to="/offices/nepal" className="text-purple-600 hover:underline">Nepal</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-all duration-300">
                Offices
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute left-0 mt-1 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <NavLink to="/offices/jaipur" className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Jaipur Office (Rajasthan)
                </NavLink>
                <NavLink to="/offices/vrindavan" className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Vrindavan Office (Head Office)
                </NavLink>
                <NavLink to="/offices/nepal" className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  Nepal Office (Siraha)
                </NavLink>
                <div className="mt-1 pt-1 border-t border-gray-100">
                  <NavLink to="/offices" className="block px-3 py-1.5 rounded-lg text-xs font-bold text-purple-600 hover:bg-purple-50 text-center">
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
              Packages
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
      </nav>

      {/* Mobile Menu - Complete Access to All Pages */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-3 space-y-1 pb-20">
            {/* Quick Contact Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 mb-3 border border-purple-200">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-purple-700 font-semibold">
                  <MapPin className="h-4 w-4" /> 3 Offices
                </span>
                <span className="text-gray-600">Jaipur • Vrindavan • Nepal</span>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="space-y-1">
              <div className="px-2 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Main Menu
              </div>
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3.5 rounded-lg text-base font-medium transition-all ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' 
                        : isActive
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-l-4 border-purple-500'
                          : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Digital Marketing Section */}
            <div className="space-y-1">
              <div className="px-2 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Digital Marketing
              </div>
              {digitalMarketingSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm transition-all ${
                      isActive
                        ? "bg-purple-50 text-purple-700 border-l-4 border-purple-500 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  → {item.name}
                </NavLink>
              ))}
            </div>

            {/* Design & Development Section */}
            <div className="space-y-1">
              <div className="px-2 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Design & Development
              </div>
              {designDevelopmentSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm transition-all ${
                      isActive
                        ? "bg-purple-50 text-purple-700 border-l-4 border-purple-500 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  → {item.name}
                </NavLink>
              ))}
            </div>

            {/* White Label Section */}
            <div className="space-y-1">
              <div className="px-2 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                White Label
              </div>
              {whiteLabelSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm transition-all ${
                      isActive
                        ? "bg-purple-50 text-purple-700 border-l-4 border-purple-500 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  → {item.name}
                </NavLink>
              ))}
            </div>

            {/* Other Important Pages */}
            <div className="space-y-1">
              <div className="px-2 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Other Pages
              </div>
              <div className="grid grid-cols-2 gap-1.5 px-1">
                {otherPages.map((page) => (
                  <NavLink
                    key={page.name}
                    to={page.href}
                    className={({ isActive }) =>
                      `block px-2 py-2 text-xs rounded-lg transition-all text-center ${
                        isActive
                          ? "bg-purple-50 text-purple-700 border border-purple-300 font-medium"
                          : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {page.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Office Locations Section */}
            <div className="space-y-2 pt-3 border-t">
              <div className="px-2 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                📍 Our Offices
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-blue-50 p-2 rounded-lg text-center border border-blue-200">
                  <span className="text-lg">🇮🇳</span>
                  <p className="text-[10px] font-semibold text-gray-700">Jaipur</p>
                  <p className="text-[8px] text-gray-500">Rajasthan</p>
                </div>
                <div className="bg-purple-50 p-2 rounded-lg text-center border border-purple-200">
                  <span className="text-lg">🇮🇳</span>
                  <p className="text-[10px] font-semibold text-gray-700">Vrindavan</p>
                  <p className="text-[8px] text-gray-500">Uttar Pradesh</p>
                </div>
                <div className="bg-green-50 p-2 rounded-lg text-center border border-green-200 relative">
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-[6px] px-1 py-0.5 rounded-full font-bold">HQ</span>
                  <span className="text-lg">🇳🇵</span>
                  <p className="text-[10px] font-semibold text-gray-700">Nepal</p>
                  <p className="text-[8px] text-gray-500">Bariyarpatti</p>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-2 pt-3 border-t">
              <div className="px-2 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Contact Us
              </div>
              {topNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                  onClick={() => setIsOpen(false)}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="bg-purple-100 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-medium text-sm">{item.name}</span>
                    <p className="text-[10px] text-gray-500">{item.location}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <a
                href="https://wa.me/9779707382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3.5 rounded-lg font-semibold text-sm text-center flex items-center justify-center gap-2 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp (Nepal HQ)
              </a>
              
              <a
                href="tel:+919341436937"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3.5 rounded-lg font-semibold text-sm text-center flex items-center justify-center gap-2 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Call India
              </a>
            </div>

            {/* Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mt-4 p-4 text-center shadow-lg">
              <p className="text-white font-bold text-sm">
                🚀 YOUR DIGITAL GROWTH PARTNER 🚀
              </p>
              <p className="text-white/80 text-[10px] mt-1">
                Jaipur • Vrindavan • Nepal
              </p>
            </div>

            {/* Close Menu Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3.5 rounded-lg font-semibold text-sm transition-all"
            >
              Close Menu ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;