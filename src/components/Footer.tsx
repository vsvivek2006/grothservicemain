import React from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Building,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Shield,
  AlertTriangle
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Rating Section with Enhanced Design */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7 text-yellow-400 fill-current mx-1 animate-pulse" />
              ))}
              <span className="ml-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                4.8/5
              </span>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mb-2">
              Trusted by 300+ Businesses
            </p>
            <p className="text-gray-300 text-sm">
              Rated 4.8/5 average from 300+ reviews on Google & Facebook
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ABOUT COMPANY */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              ABOUT COMPANY
            </h3>
            <ul className="space-y-2">
              {[
                { name: "About Growth Service", path: "/about", emoji: "🏢" },
                { name: "Our Team", path: "/about#team", emoji: "👥" },
                { name: "Careers", path: "/careers", emoji: "💼" },
                { name: "Terms & Conditions", path: "/terms", emoji: "📜" },
                { name: "Privacy Policy", path: "/privacy", emoji: "🔒" },
                { name: "Refund Policy", path: "/refund", emoji: "💸" },
                { name: "Client Success Stories", path: "/success-stories", emoji: "🏆" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm block py-2 hover:translate-x-2 transform group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.emoji}</span>
                    {item.name}
                    <span className="ml-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DIGITAL SOLUTIONS */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <span className="mr-2">🚀</span>
              DIGITAL SOLUTIONS
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Digital Marketing", path: "/digital-marketing", emoji: "📈" },
                { name: "Social Media Management", path: "/social-media", emoji: "📱" },
                { name: "SEO Services", path: "/seo", emoji: "🔍" },
                { name: "Meta Ads Management", path: "/paid-marketing", emoji: "🎯" },
                { name: "Google Business Profile", path: "/local-seo", emoji: "📍" },
                { name: "Website Development", path: "/web-development", emoji: "💻" },
                { name: "Brand Strategy", path: "/branding", emoji: "🎨" },
                { name: "E-commerce Solutions", path: "/ecommerce", emoji: "🛒" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm block py-2 hover:translate-x-2 transform group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.emoji}</span>
                    {item.name}
                    <span className="ml-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <span className="mr-2">📚</span>
              RESOURCES
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Blog & Articles", path: "/blog", emoji: "✍️" },
                { name: "Case Studies", path: "/case-studies", emoji: "📊" },
                { name: "Free Digital Audit", path: "/free-audit", emoji: "🔍" },
                { name: "Digital Marketing Guides", path: "/resources", emoji: "📖" },
                { name: "Video Tutorials", path: "/resources#tutorials", emoji: "🎥" },
                { name: "Webinars", path: "/webinars", emoji: "🎤" },
                { name: "Help Center", path: "/help-center", emoji: "❓" },
                { name: "FAQs", path: "/faq", emoji: "❔" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm block py-2 hover:translate-x-2 transform group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.emoji}</span>
                    {item.name}
                    <span className="ml-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HEAD OFFICE - FIXED NUMBERS */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              HEAD OFFICE
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:bg-purple-900/30 p-3 rounded-lg transition-all">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-semibold text-purple-300">Radhika Sadan, Pushpa Garden</span><br />
                    Kailash Nagar, Vrindavan<br />
                    Uttar Pradesh 281121<br />
                    <span className="text-purple-300/80 text-xs mt-1 block italic">
                      (Radhika Sadan ki Bassinet me)
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:bg-purple-900/30 p-3 rounded-lg transition-all">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <Link 
                  to="tel:+919341436937"
                  className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm font-medium group-hover:translate-x-1"
                >
                  📞 +91 93414 36937 (India)
                </Link>
              </div>
              
              <div className="flex items-center space-x-3 group hover:bg-purple-900/30 p-3 rounded-lg transition-all">
                <MessageCircle className="h-5 w-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="https://wa.me/9779707382481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm font-medium group-hover:translate-x-1"
                >
                  💬 +977 9707382481 (WhatsApp)
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group hover:bg-purple-900/30 p-3 rounded-lg transition-all">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <Link 
                  to="mailto:info@growthservice.in"
                  className="text-gray-300 hover:text-purple-300 transition-all duration-200 text-sm font-medium group-hover:translate-x-1 truncate"
                >
                  📧 info@growthservice.in
                </Link>
              </div>

              {/* Business Hours */}
              <div className="mt-4 pt-4 border-t border-purple-800">
                <p className="text-xs text-purple-300 font-semibold mb-1">Business Hours:</p>
                <p className="text-gray-400 text-xs">
                  Mon-Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* QUICK CONTACT & SOCIAL */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2 flex items-center">
              <span className="mr-2">⚡</span>
              QUICK CONNECT
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Ready to <span className="text-purple-300 font-semibold">grow your business</span> with digital solutions? 
                  Get in touch with us today for a <span className="text-yellow-300">FREE consultation!</span>
                </p>
                
                <div className="space-y-3">
                  <Link 
                    to="/book-call"
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-purple-500/30"
                  >
                    📞 Book Free Call
                  </Link>
                  
                  <Link 
                    to="/contact"
                    className="block w-full border-2 border-purple-500 text-purple-300 hover:bg-purple-900/50 hover:text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105"
                  >
                    📝 Contact Form
                  </Link>
                  
                  <Link 
                    to="/free-audit"
                    className="block w-full border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-900/30 hover:text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200 hover:scale-105"
                  >
                    🔍 Free Website Audit
                  </Link>
                </div>
              </div>
              
              {/* Social Media Links - Enhanced */}
              <div className="pt-4">
                <p className="text-purple-300 text-sm font-semibold mb-3 flex items-center">
                  <span className="mr-2">🌐</span>
                  Follow Our Journey
                </p>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, href: "https://facebook.com/growthservices", label: "Facebook", color: "hover:text-blue-500" },
                    { icon: Instagram, href: "https://instagram.com/growth_servces", label: "Instagram", color: "hover:text-pink-500" },
                    { icon: Linkedin, href: "https://linkedin.com/company/growthservice", label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: Youtube, href: "https://youtube.com/@growthservice", label: "YouTube", color: "hover:text-red-500" }
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-purple-900/50 p-3 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      title={social.label}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Alert - Enhanced */}
        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-900/40 via-orange-900/30 to-red-900/40 border border-yellow-600/50 rounded-xl backdrop-blur-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-yellow-400 animate-pulse" />
            </div>
            <div>
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
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1 rounded-full"
                >
                  🛡️ Scam Alert Page
                </Link>
                <span className="text-yellow-700">•</span>
                <Link 
                  to="/verify" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1 rounded-full"
                >
                  ✅ Verify Authenticity
                </Link>
                <span className="text-yellow-700">•</span>
                <Link 
                  to="/report-scam" 
                  className="text-yellow-300 hover:text-yellow-200 text-xs font-medium transition-colors duration-200 bg-yellow-900/30 px-3 py-1 rounded-full"
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
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">GS</span>
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
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-purple-300 transition-colors px-3 py-1 hover:bg-purple-900/30 rounded-full">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-purple-300 transition-colors px-3 py-1 hover:bg-purple-900/30 rounded-full">
                Privacy Policy
              </Link>
              <Link to="/refund" className="text-gray-400 hover:text-purple-300 transition-colors px-3 py-1 hover:bg-purple-900/30 rounded-full">
                Refund Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-purple-300 transition-colors px-3 py-1 hover:bg-purple-900/30 rounded-full">
                Sitemap
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-purple-300 transition-colors px-3 py-1 hover:bg-purple-900/30 rounded-full">
                Accessibility
              </Link>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <p className="text-gray-500 text-xs mb-2">Certified & Trusted</p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[8px] bg-purple-900/50 text-purple-300 px-2 py-1 rounded">🔐 SSL Secured</span>
                <span className="text-[8px] bg-purple-900/50 text-purple-300 px-2 py-1 rounded">📈 Google Partner</span>
                <span className="text-[8px] bg-purple-900/50 text-purple-300 px-2 py-1 rounded">⭐ Trustpilot</span>
              </div>
            </div>
          </div>

          {/* Trust Badges - Enhanced */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-6 pt-6 border-t border-purple-800">
            {[
              { text: "🚀 Social Media Marketing", path: "/social-media" },
              { text: "🎯 Meta Ads Management", path: "/paid-marketing" },
              { text: "🔍 SEO Services", path: "/seo" },
              { text: "💻 Website Development", path: "/web-development" },
              { text: "📧 Email Marketing", path: "/email-marketing" },
              { text: "🛒 E-commerce Solutions", path: "/ecommerce" },
              { text: "📱 App Development", path: "/app-development" },
              { text: "🎨 UI/UX Design", path: "/ui-ux" }
            ].map((badge) => (
              <Link 
                key={badge.text}
                to={badge.path}
                className="text-purple-300 text-xs bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-700/50 px-3 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 hover:text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                {badge.text}
              </Link>
            ))}
          </div>

          {/* Final Note */}
          <div className="text-center mt-6 pt-4 border-t border-purple-800/50">
            <p className="text-gray-500 text-xs">
              Growth Service is a registered digital marketing agency. All trademarks, logos and brand names are the property of their respective owners.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Made with ❤️ for growing businesses • <Link to="/contact" className="text-purple-400 hover:text-purple-300">Partner with us</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
