import React from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  Phone, 
  Building,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Shield,
  AlertTriangle,
  Clock,
  Award,
  Globe,
  ChevronRight,
  Users,
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
  isHeadOffice?: boolean;
  timings?: string;
  googleMaps?: string;
  landmark?: string;
}

interface FooterLink {
  name: string;
  path: string;
  emoji: string;
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
  icon?: string;
}

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // Office Locations Data
  const offices: OfficeLocation[] = [
    {
      id: "india-jaipur",
      name: "India Office - Jaipur",
      address: "138 A, Vivek Vihar, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017",
      phone: "+91 62073 00553",
      country: "India",
      flag: "🇮🇳",
      isHeadOffice: true,
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
      googleMaps: "https://maps.google.com/?q=138A+Vivek+Vihar+Mayapuri+Jagatpura+Jaipur",
      landmark: "Near Jagatpura Flyover"
    },
    {
      id: "india-vrindavan",
      name: "India Office - Vrindavan",
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
      name: "Nepal Office",
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
    { name: "About Growth Service", path: "/about", emoji: "🏢" },
    { name: "Our Team", path: "/team", emoji: "👥" },
    { name: "Company Offices", path: "/offices", emoji: "📍" },
    { name: "Locations Directory", path: "/locations", emoji: "🗺️" },
    { name: "Careers", path: "/careers", emoji: "💼" },
    { name: "Terms & Conditions", path: "/terms", emoji: "📜" },
    { name: "Privacy Policy", path: "/privacy", emoji: "🔒" },
    { name: "Refund Policy", path: "/refund", emoji: "💸" },
    { name: "Client Success Stories", path: "/success-stories", emoji: "🏆" }
  ];

  const digitalSolutions: FooterLink[] = [
    { name: "Digital Marketing", path: "/digital-marketing", emoji: "📈" },
    { name: "Social Media Management", path: "/social-media", emoji: "📱" },
    { name: "SEO Services", path: "/seo", emoji: "🔍" },
    { name: "Meta Ads Management", path: "/paid-marketing", emoji: "🎯" },
    { name: "Google Business Profile", path: "/local-seo", emoji: "📍" },
    { name: "Website Development", path: "/web-development", emoji: "💻" },
    { name: "Brand Strategy", path: "/branding", emoji: "🎨" },
    { name: "E-commerce Solutions", path: "/ecommerce", emoji: "🛒" }
  ];

  const resources: FooterLink[] = [
    { name: "Blog & Articles", path: "/blog", emoji: "✍️" },
    { name: "Case Studies", path: "/case-studies", emoji: "📊" },
    { name: "Free Digital Audit", path: "/free-audit", emoji: "🔍" },
    { name: "Digital Marketing Guides", path: "/resources", emoji: "📖" },
    { name: "Video Tutorials", path: "/resources#tutorials", emoji: "🎥" },
    { name: "Webinars", path: "/webinars", emoji: "🎤" },
    { name: "Help Center", path: "/help-center", emoji: "❓" },
    { name: "FAQs", path: "/faq", emoji: "❔" }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://facebook.com/growthservices", label: "Facebook", color: "hover:text-blue-500", handle: "@growthservices" },
    { icon: Instagram, href: "https://instagram.com/growth_servces", label: "Instagram", color: "hover:text-pink-500", handle: "@growth_servces" },
    { icon: Linkedin, href: "https://linkedin.com/company/growthservice", label: "LinkedIn", color: "hover:text-blue-400", handle: "growthservice" },
    { icon: Youtube, href: "https://youtube.com/@growthservice", label: "YouTube", color: "hover:text-red-500", handle: "@growthservice" }
  ];

  const trustBadges: TrustBadge[] = [
    { text: "🚀 Social Media Marketing", path: "/social-media" },
    { text: "🎯 Meta Ads Management", path: "/paid-marketing" },
    { text: "🔍 SEO Services", path: "/seo" },
    { text: "💻 Website Development", path: "/web-development" },
    { text: "📧 Email Marketing", path: "/email-marketing" },
    { text: "🛒 E-commerce Solutions", path: "/ecommerce" },
    { text: "📱 App Development", path: "/app-development" },
    { text: "🎨 UI/UX Design", path: "/ui-ux" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background grid and ambient glow */}
      <DecorativeGrid variant="dots" dark />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Rating Section */}
        <FadeIn direction="up" className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current mx-0.5 animate-pulse" />
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
              <Shield className="h-5 w-5 mr-2" />
              ABOUT
            </h3>
            <ul className="space-y-1">
              {aboutLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm block py-1.5 hover:translate-x-2 transform group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.emoji}</span>
                    {item.name}
                    <ChevronRight className="h-3 w-3 inline ml-1 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DIGITAL SOLUTIONS */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <span className="mr-2">🚀</span>
              SOLUTIONS
            </h3>
            <ul className="space-y-1">
              {digitalSolutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm block py-1.5 hover:translate-x-2 transform group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.emoji}</span>
                    {item.name}
                    <ChevronRight className="h-3 w-3 inline ml-1 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <span className="mr-2">📚</span>
              RESOURCES
            </h3>
            <ul className="space-y-1">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm block py-1.5 hover:translate-x-2 transform group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.emoji}</span>
                    {item.name}
                    <ChevronRight className="h-3 w-3 inline ml-1 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE LOCATIONS - Now showing all 3 */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6 border-b border-purple-600 pb-2">
              <Link to="/offices" className="text-lg font-bold text-purple-300 hover:text-white transition-colors flex items-center">
                <Building className="h-5 w-5 mr-2" />
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
                  className={`relative group hover:bg-purple-900/30 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-purple-700/50 ${
                    office.isHeadOffice ? 'bg-gradient-to-r from-purple-900/20 to-pink-900/20' : ''
                  }`}
                >
                  {office.isHeadOffice && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                        ★ HEAD OFFICE
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                        office.isHeadOffice ? 'bg-purple-600' : 'bg-purple-800'
                      }`}>
                        {office.flag}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/offices/${office.id.replace('india-', '')}`}
                        className="font-semibold text-purple-300 hover:text-white transition-colors text-sm flex items-center gap-2 group-hover:underline"
                      >
                        {office.name}
                        {office.isHeadOffice && (
                          <Zap className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        )}
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
                          <Link 
                            to={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="text-gray-300 hover:text-purple-300 text-xs flex items-center gap-1 transition-colors"
                          >
                            <Phone className="h-3 w-3 text-purple-400" />
                            {office.phone}
                          </Link>
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

          {/* QUICK CONTACT & SOCIAL */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <span className="mr-2">⚡</span>
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
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-purple-500/30 text-sm"
                  >
                    📞 Book Free Call
                  </Link>
                  
                  <Link 
                    to="/contact"
                    className="block w-full border-2 border-purple-500 text-purple-300 hover:bg-purple-900/50 hover:text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105 text-sm"
                  >
                    📝 Contact Form
                  </Link>
                  
                  <Link 
                    to="/free-audit"
                    className="block w-full border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-900/30 hover:text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105 text-sm"
                  >
                    🔍 Free Website Audit
                  </Link>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-2">
                <p className="text-purple-300 text-sm font-semibold mb-3 flex items-center">
                  <span className="mr-2">🌐</span>
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
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[8px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
              <AlertTriangle className="h-8 w-8 text-yellow-400 animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-yellow-200 text-sm font-bold mb-2 flex items-center">
                ⚠️ IMPORTANT SECURITY ALERT
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
                  to="/scam-alert" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1.5 rounded-full hover:bg-yellow-800/50"
                >
                  🛡️ Scam Alert
                </Link>
                <span className="text-yellow-700">•</span>
                <Link 
                  to="/verify" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1.5 rounded-full hover:bg-yellow-800/50"
                >
                  ✅ Verify Authenticity
                </Link>
                <span className="text-yellow-700">•</span>
                <Link 
                  to="/report-scam" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1.5 rounded-full hover:bg-yellow-800/50"
                >
                  🚨 Report Fraud
                </Link>
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
                <span className="text-[8px] bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-full">🔐 SSL Secured</span>
                <span className="text-[8px] bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-full">📈 Google Partner</span>
                <span className="text-[8px] bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-full">⭐ Trustpilot 4.7</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6 pt-6 border-t border-purple-800">
            {trustBadges.map((badge) => (
              <Link 
                key={badge.text}
                to={badge.path}
                className="text-purple-300 text-[10px] bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-700/50 px-3 py-1.5 rounded-full hover:from-purple-700 hover:to-pink-700 hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                {badge.text}
              </Link>
            ))}
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
