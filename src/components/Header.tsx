import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";

type NavItem = { name: string; href: string };

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

  // Fixed Contact Info (WhatsApp number corrected)
  const topNavItems = [
    { name: "India +91-93414-36937", href: "tel:+919341436937", icon: "📞" },
    { name: "WhatsApp +977-9707382481", href: "https://wa.me/9779707382481", icon: "💬" },
    { name: "Email", href: "mailto:info@growthservice.in", icon: "✉️" }
  ];

  const mainNavItems = [
    { name: "BOOK A CALL", href: "/book-call" },
    { name: "ABOUT US", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "RESOURCES", href: "/resources" },
    { name: "FREE WEBSITE AUDIT", href: "/free-audit", highlight: true }
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

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar with Animated Text */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-3">
            {/* Left - Contact Info */}
            <div className="flex items-center space-x-6 text-sm">
              {topNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 hover:text-purple-200 transition-all duration-300 hover:scale-105 group"
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="hidden sm:inline font-medium">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Center - Animated Brand Tagline */}
            <div className="hidden md:flex items-center">
              <div className="bg-gradient-to-r from-purple-800 to-pink-700 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-300 animate-bounce">✨</span>
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-extrabold text-lg animate-gradient">
                    {animatedText}
                    <span className="inline-block w-1 h-5 bg-yellow-300 ml-1 animate-pulse"></span>
                  </span>
                  <span className="text-yellow-300 animate-bounce delay-100">✨</span>
                </div>
              </div>
            </div>

            {/* Right - Growth Banner */}
            <div className="hidden lg:flex items-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 rounded-full text-xs font-bold animate-pulse">
                🚀 DIGITAL GROWTH PARTNER 🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Circular Design */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 group" 
              aria-label="Home"
            >
              <div className="flex-shrink-0 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                {/* Circular Logo Container */}
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden shadow-lg relative z-10 animate-float">
                  <img 
                    src="/logo.png" 
                    alt="Growth Service Logo" 
                    className="h-14 w-14 object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'h-full w-full flex items-center justify-center text-white font-bold text-xl';
                      fallback.textContent = 'GS';
                      e.currentTarget.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
              <div className="hidden lg:block">
                <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Growth Service
                </h1>
                <p className="text-sm text-gray-600 font-medium animate-fade-in">
                  Your Digital Growth Partner
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Main Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:from-pink-600 hover:to-purple-700 hover:shadow-xl animate-pulse' 
                      : isActive
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110">
              <Search className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300 hover:scale-110"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Navigation Bar with Dropdowns */}
        <div className="hidden lg:block border-t border-gray-200 pt-4 pb-2">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-8">
              {/* Digital Marketing Dropdown */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-purple-600 font-bold text-lg flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
                  Digital Marketing
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-gray-200 bg-white shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:scale-100 scale-95 z-50">
                  <div className="space-y-2">
                    {digitalMarketingSubmenu.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-200 hover:translate-x-2"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design & Development Dropdown */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-purple-600 font-bold text-lg flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
                  Design & Development
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-72 rounded-2xl border border-gray-200 bg-white shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:scale-100 scale-95 z-50">
                  <div className="space-y-2">
                    {designDevelopmentSubmenu.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-200 hover:translate-x-2"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* White Label Dropdown */}
              <div className="relative group">
                <button className="text-gray-800 hover:text-purple-600 font-bold text-lg flex items-center gap-2 transition-all duration-300 group-hover:scale-105">
                  White Label
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-gray-200 bg-white shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:scale-100 scale-95 z-50">
                  <div className="space-y-2">
                    {whiteLabelSubmenu.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-200 hover:translate-x-2"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <NavLink 
                to="/packages" 
                className="text-gray-800 hover:text-purple-600 font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Packages
              </NavLink>
              
              <NavLink 
                to="/impact" 
                className="text-gray-800 hover:text-purple-600 font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Our Impact
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className="text-gray-800 hover:text-purple-600 font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden animate-in fade-in-50 slide-in-from-top-5 duration-300 absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {/* Main Navigation Mobile */}
            <div className="space-y-1 pb-4 border-b border-gray-200">
              <div className="px-3 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Main Menu
              </div>
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-4 rounded-lg text-base font-bold transition-all duration-300 ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg animate-pulse' 
                        : isActive
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Services Mobile */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Services
              </div>
              
              {/* Digital Marketing Mobile */}
              <div className="px-3 py-2">
                <div className="font-bold text-gray-800 mb-2">Digital Marketing</div>
                <div className="space-y-1 ml-3">
                  {digitalMarketingSubmenu.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-lg text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Design & Development Mobile */}
              <div className="px-3 py-2">
                <div className="font-bold text-gray-800 mb-2">Design & Development</div>
                <div className="space-y-1 ml-3">
                  {designDevelopmentSubmenu.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-lg text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* White Label Mobile */}
              <div className="px-3 py-2">
                <div className="font-bold text-gray-800 mb-2">White Label</div>
                <div className="space-y-1 ml-3">
                  {whiteLabelSubmenu.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-lg text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Other Services */}
              <NavLink
                to="/packages"
                className="block px-3 py-4 rounded-lg text-base font-bold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </NavLink>
              
              <NavLink
                to="/impact"
                className="block px-3 py-4 rounded-lg text-base font-bold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Our Impact
              </NavLink>
              
              <NavLink
                to="/contact"
                className="block px-3 py-4 rounded-lg text-base font-bold text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>

            {/* Contact Info Mobile */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <div className="px-3 py-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Contact Us
              </div>
              {topNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Growth Banner Mobile */}
            <div className="px-3 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mt-4 text-center">
              <p className="text-white font-bold text-sm animate-pulse">
                🚀 YOUR DIGITAL GROWTH PARTNER 🚀
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
      `}</style>
    </header>
  );
};

export default Header;
