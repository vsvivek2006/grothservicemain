import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Phone, MessageCircle, Mail, Home, Info, BookOpen, FileText, Sparkles } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [animatedText, setAnimatedText] = React.useState<string>("");
  const location = useLocation();

  const texts = ["Proven Model", "Trusted Brand", "Start Your Franchise"];
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
        timeout = setTimeout(typeWriter, 100);
      }
    };

    typeWriter();
    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Contact Info
  const topNavItems = [
    { name: "India +91-93414-36937", href: "tel:+919341436937", icon: <Phone className="h-4 w-4" /> },
    { name: "WhatsApp +977-9707382481", href: "https://wa.me/9779707382481", icon: <MessageCircle className="h-4 w-4" /> },
    { name: "Email", href: "mailto:info@growthservice.in", icon: <Mail className="h-4 w-4" /> }
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
    { name: "Website Development", href: "/website-development" },
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "WordPress Development", href: "/wordpress-development" },
    { name: "E-commerce Development", href: "/ecommerce-development" },
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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Mobile Optimized */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center py-2">
            {/* Left - Contact Info (Mobile: Only Icons) */}
            <div className="flex items-center space-x-3">
              {topNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Center - Animated Text (Hidden on very small screens) */}
            <div className="hidden xs:flex items-center">
              <div className="bg-gradient-to-r from-purple-800 to-pink-700 px-3 py-1 rounded-full">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-300 animate-bounce text-xs">✨</span>
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold text-xs">
                    {animatedText}
                  </span>
                  <span className="text-yellow-300 animate-bounce text-xs">✨</span>
                </div>
              </div>
            </div>

            {/* Right - Growth Banner (Hidden on mobile) */}
            <div className="hidden md:flex items-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 rounded-full text-xs font-bold">
                🚀 GROWTH PARTNER
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4" aria-label="Main">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 group"
              aria-label="Home"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="Growth Service Logo" 
                  className="h-10 w-10 object-contain p-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'h-full w-full flex items-center justify-center text-white font-bold text-lg';
                    fallback.textContent = 'GS';
                    e.currentTarget.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Growth Service
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  Digital Growth Partner
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
                  `px-3 py-2 rounded-lg font-bold text-xs transition-all duration-300 flex items-center gap-1 ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' 
                      : isActive
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Navigation Bar - Desktop */}
        <div className="hidden lg:block border-t border-gray-200 pt-3 pb-2">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-4">
              {/* Digital Marketing Dropdown */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 transition-all duration-300">
                  Digital Marketing
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {digitalMarketingSubmenu.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 rounded text-sm hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Design & Development Dropdown */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 transition-all duration-300">
                  Design & Development
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {designDevelopmentSubmenu.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 rounded text-sm hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* White Label Dropdown */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-purple-600 font-semibold text-sm flex items-center gap-1 transition-all duration-300">
                  White Label
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {whiteLabelSubmenu.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 rounded text-sm hover:bg-purple-50 hover:text-purple-600 transition-all"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Direct Links */}
              <NavLink 
                to="/packages" 
                className="text-gray-800 hover:text-purple-600 font-semibold text-sm transition-all duration-300"
              >
                Packages
              </NavLink>
              
              <NavLink 
                to="/impact" 
                className="text-gray-800 hover:text-purple-600 font-semibold text-sm transition-all duration-300"
              >
                Our Impact
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className="text-gray-800 hover:text-purple-600 font-semibold text-sm transition-all duration-300"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Complete Access to All Pages */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-2 space-y-1 h-[calc(100vh-4rem)]">
            
            {/* Main Navigation */}
            <div className="space-y-1">
              <div className="px-2 py-3 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Main Menu
              </div>
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-4 rounded-lg text-base font-medium transition-all ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
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
              <div className="px-2 py-3 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Digital Marketing
              </div>
              {digitalMarketingSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-sm transition-all ${
                      isActive
                        ? "bg-purple-50 text-purple-700 border-l-4 border-purple-500"
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
              <div className="px-2 py-3 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Design & Development
              </div>
              {designDevelopmentSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-sm transition-all ${
                      isActive
                        ? "bg-purple-50 text-purple-700 border-l-4 border-purple-500"
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
              <div className="px-2 py-3 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                White Label
              </div>
              {whiteLabelSubmenu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-sm transition-all ${
                      isActive
                        ? "bg-purple-50 text-purple-700 border-l-4 border-purple-500"
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
              <div className="px-2 py-3 text-xs uppercase tracking-wider text-gray-500 font-semibold border-b">
                Other Pages
              </div>
              <div className="grid grid-cols-2 gap-1 px-3">
                {otherPages.map((page) => (
                  <NavLink
                    key={page.name}
                    to={page.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-xs rounded transition-all text-center ${
                        isActive
                          ? "bg-purple-50 text-purple-700 border border-purple-300"
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

            {/* Contact Info Section */}
            <div className="space-y-2 pt-4 border-t">
              <div className="px-2 py-3 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Contact Us Directly
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
                  <span className="font-medium text-sm">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-4">
              <a
                href="https://wa.me/9779707382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              
              <a
                href="tel:+919341436937"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-sm text-center flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            {/* Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mt-4 p-4 text-center">
              <p className="text-white font-bold text-xs">
                🚀 YOUR DIGITAL GROWTH PARTNER 🚀
              </p>
            </div>

            {/* Close Menu Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold text-sm"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
