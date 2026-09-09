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
  Zap
} from "lucide-react";

import DecorativeGrid from "./ui/DecorativeGrid";
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

interface TrustBadge {
  text: string;
  path: string;
  icon: React.ElementType;
}

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // Office Locations Data - 3 factual offices
  const offices: OfficeLocation[] = [
    {
      id: "india-jaipur",
      name: "Jaipur Office (Rajasthan)",
      address: "138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017",
      phone: "+91 62073 00553",
      country: "India",
      flag: "🇮🇳",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
      googleMaps: "https://maps.google.com/?q=138A+Vivek+Vihar+Mayapuri+Jagatpura+Jaipur",
      landmark: "Near Jagatpura Flyover"
    },
    {
      id: "india-vrindavan",
      name: "Vrindavan Office (Uttar Pradesh)",
      address: "Radhika Sadan, Pushpa Garden, Kailash Nagar, Vrindavan, Uttar Pradesh 281121",
      phone: "+91 93414 36937",
      country: "India",
      flag: "🇮🇳",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
      googleMaps: "https://maps.google.com/?q=Radhika+Sadan+Pushpa+Garden+Kailash+Nagar+Vrindavan",
      landmark: "Radhika Sadan ki Bassinet me"
    },
    {
      id: "nepal",
      name: "Nepal Office (Siraha)",
      address: "Near Bariyarpatti Rd, Bariyarpatti 56500, Nepal",
      phone: "+977 970-7382481",
      country: "Nepal",
      flag: "🇳🇵",
      timings: "Sun-Fri: 10:00 AM - 6:00 PM",
      googleMaps: "https://maps.google.com/?q=Bariyarpatti+Rd+Bariyarpatti+56500+Nepal",
      landmark: "Near Bariyarpatti Main Road"
    }
  ];

  const aboutLinks: FooterLink[] = [
    { name: "About Growth Service", path: "/about", icon: Building2 },
    { name: "Our Team", path: "/team", icon: Users },
    { name: "Company Offices", path: "/offices", icon: MapPin },
    { name: "Locations Directory", path: "/locations", icon: Globe },
    { name: "Careers", path: "/team", icon: Briefcase },
    { name: "Terms & Conditions", path: "/terms", icon: FileText },
    { name: "Privacy Policy", path: "/privacy", icon: Lock },
    { name: "Refund Policy", path: "/refund", icon: DollarSign },
    { name: "Client Success Stories", path: "/case-studies", icon: Trophy }
  ];

  const digitalSolutions: FooterLink[] = [
    { name: "Digital Marketing", path: "/digital-marketing", icon: TrendingUp },
    { name: "Social Media Management", path: "/social-media", icon: Share2 },
    { name: "SEO Services", path: "/seo", icon: Search },
    { name: "Meta Ads Management", path: "/paid-marketing", icon: Target },
    { name: "Google Business Profile", path: "/local-seo", icon: MapPin },
    { name: "Website Development", path: "/web-development", icon: Layout },
    { name: "Brand Strategy", path: "/branding", icon: Palette },
    { name: "E-commerce Solutions", path: "/ecommerce", icon: ShoppingCart }
  ];

  const resources: FooterLink[] = [
    { name: "Blog & Articles", path: "/blog", icon: BookOpen },
    { name: "Case Studies", path: "/case-studies", icon: BarChart3 },
    { name: "Free Digital Audit", path: "/free-audit", icon: Search },
    { name: "Digital Marketing Guides", path: "/resources", icon: BookOpen },
    { name: "Video Tutorials", path: "/resources#tutorials", icon: Video },
    { name: "Webinars", path: "/resources", icon: Mic },
    { name: "Help Center", path: "/help-center", icon: HelpCircle },
    { name: "FAQs", path: "/faq", icon: HelpCircle }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://facebook.com/growthservices", label: "Facebook", color: "hover:text-blue-500", handle: "@growthservices" },
    { icon: Instagram, href: "https://instagram.com/growth_servces", label: "Instagram", color: "hover:text-pink-500", handle: "@growth_servces" },
    { icon: Linkedin, href: "https://linkedin.com/company/growthservice", label: "LinkedIn", color: "hover:text-blue-400", handle: "growthservice" },
    { icon: Youtube, href: "https://youtube.com/@growthservice", label: "YouTube", color: "hover:text-red-500", handle: "@growthservice" }
  ];

  const trustBadges: TrustBadge[] = [
    { text: "Social Media Marketing", path: "/social-media", icon: Share2 },
    { text: "Meta Ads Management", path: "/paid-marketing", icon: Target },
    { text: "SEO Services", path: "/seo", icon: Search },
    { text: "Website Development", path: "/web-development", icon: Layout },
    { text: "Email Marketing", path: "/digital-marketing", icon: TrendingUp },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
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
                4.8/5
              </span>
              <span className="text-gray-300 text-sm flex items-center">
                <Users className="h-4 w-4 mr-1" />
                300+ Reviews
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

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* ABOUT COMPANY */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-purple-400" />
              ABOUT
            </h3>
            <ul className="space-y-1">
              {aboutLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm flex items-center py-1.5 hover:translate-x-1 transform group"
                    >
                      <Icon className="h-3.5 w-3.5 mr-2 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                      <ChevronRight className="h-3 w-3 inline ml-auto text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* DIGITAL SOLUTIONS */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <Rocket className="h-4 w-4 mr-2 text-purple-400" />
              SOLUTIONS
            </h3>
            <ul className="space-y-1">
              {digitalSolutions.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm flex items-center py-1.5 hover:translate-x-1 transform group"
                    >
                      <Icon className="h-3.5 w-3.5 mr-2 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                      <ChevronRight className="h-3 w-3 inline ml-auto text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-purple-400" />
              RESOURCES
            </h3>
            <ul className="space-y-1">
              {resources.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm flex items-center py-1.5 hover:translate-x-1 transform group"
                    >
                      <Icon className="h-3.5 w-3.5 mr-2 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                      <ChevronRight className="h-3 w-3 inline ml-auto text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* OFFICE LOCATIONS - All 3 company offices */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6 border-b border-purple-600 pb-2">
              <Link to="/offices" className="text-lg font-bold text-purple-300 hover:text-white transition-colors flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                OUR OFFICES
              </Link>
              <Link to="/locations" className="text-xs text-purple-300 hover:text-white transition-colors">
                All Locations →
              </Link>
            </div>
            <div className="space-y-4">
              {offices.map((office) => (
                <div 
                  key={office.id}
                  className="relative group bg-purple-950/20 hover:bg-purple-900/30 p-4 rounded-xl transition-all duration-300 border border-purple-900/40 hover:border-purple-700/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-purple-900/80 border border-purple-700/50">
                        {office.flag}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/offices/${office.id.replace('india-', '')}`}
                        className="font-semibold text-purple-300 hover:text-white transition-colors text-sm flex items-center gap-2 group-hover:underline"
                      >
                        {office.name}
                      </Link>
                      <div className="mt-1 space-y-1">
                        <p className="text-gray-300 text-xs leading-relaxed flex items-start gap-1">
                          <MapPin className="h-3 w-3 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{office.address}</span>
                        </p>
                        {office.landmark && (
                          <p className="text-purple-400/70 text-[10px] italic ml-4">
                            📍 {office.landmark}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <a 
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="text-gray-300 hover:text-purple-300 text-xs flex items-center gap-1 transition-colors"
                          >
                            <Phone className="h-3 w-3 text-purple-400" />
                            {office.phone}
                          </a>
                          {office.googleMaps && (
                            <a 
                              href={office.googleMaps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 hover:text-purple-300 text-xs flex items-center gap-1 transition-colors"
                            >
                              <Globe className="h-3 w-3" />
                              Get Directions
                            </a>
                          )}
                        </div>
                        {office.timings && (
                          <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
                            <Clock className="h-3 w-3 text-purple-400" />
                            {office.timings}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK CONTACT & CONNECT */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <Zap className="h-4 w-4 mr-2 text-purple-400" />
              CONNECT
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Ready to <span className="text-purple-300 font-semibold">grow your business</span>? 
                  Get a <span className="text-yellow-300">FREE consultation</span> today!
                </p>
                
                <div className="space-y-2.5">
                  <Link 
                    to="/book-call"
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-purple-500/30 text-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" /> Book Free Call
                  </Link>
                  
                  <Link 
                    to="/contact"
                    className="block w-full border-2 border-purple-500 text-purple-300 hover:bg-purple-900/50 hover:text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105 text-sm flex items-center justify-center gap-2"
                  >
                    <FileText className="h-4 w-4" /> Contact Form
                  </Link>
                  
                  <Link 
                    to="/free-audit"
                    className="block w-full border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-900/30 hover:text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105 text-sm flex items-center justify-center gap-2"
                  >
                    <Search className="h-4 w-4" /> Free Website Audit
                  </Link>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-2">
                <p className="text-purple-300 text-sm font-semibold mb-3 flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-purple-400" />
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-purple-900/50 p-2.5 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group relative`}
                      title={social.label}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[8px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Alert */}
        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-900/40 via-orange-900/30 to-red-900/40 border border-yellow-600/50 rounded-xl backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="flex-1">
              <p className="text-yellow-200 text-sm font-bold mb-2 flex items-center">
                <Shield className="w-4 h-4 mr-1.5" /> IMPORTANT SECURITY ALERT
              </p>
              <p className="text-yellow-100 text-sm mb-3">
                <span className="font-semibold">Growth Service does NOT offer:</span> Part-time jobs, channel subscription tasks, 
                or any work-from-home opportunities via WhatsApp, Telegram, or other messaging platforms.
              </p>
              <p className="text-yellow-200/80 text-xs">
                Beware of fraudulent messages. Always verify through official channels: 
                <span className="text-white font-semibold"> info@growthservice.in</span> or 
                <span className="text-white font-semibold"> +91 93414 36937</span>
              </p>
              <div className="flex flex-wrap gap-3 items-center mt-3 pt-3 border-t border-yellow-700/50">
                <Link 
                  to="/help-center" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1.5 rounded-full hover:bg-yellow-800/50 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Scam Alert Info
                </Link>
                <span className="text-yellow-700">•</span>
                <a 
                  href="mailto:info@growthservice.in?subject=Verify%20Authenticity" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1.5 rounded-full hover:bg-yellow-800/50 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Verify Authenticity
                </a>
                <span className="text-yellow-700">•</span>
                <a 
                  href="mailto:info@growthservice.in?subject=Report%20Fraud" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1.5 rounded-full hover:bg-yellow-800/50 flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3.5 h-3.5" /> Report Fraud
                </a>
              </div>
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
                    © {year} <span className="text-purple-300 font-bold">Growth Service</span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    Your Trusted Digital Growth Partner
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {['Terms', 'Privacy', 'Refund', 'Sitemap', 'Accessibility'].map((item) => (
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
      </div>
    </footer>
  );
};

export default Footer;
