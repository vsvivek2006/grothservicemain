import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Phone, Mail, MessageCircle, Building } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Rating Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-1" />
            ))}
          </div>
          <p className="text-xl font-semibold text-gray-200 mb-2">
            Growth Service is rated 4.8 / 5 average from 300+ reviews on Google & Facebook
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ABOUT COMPANY */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2">
              ABOUT COMPANY
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Growth Service", path: "/about" },
                { name: "Our Team", path: "/about#team" },
                { name: "Careers", path: "/careers" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Refund Policy", path: "/refund" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm block py-1 hover:translate-x-1 transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2">
              DIGITAL SOLUTIONS
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Digital Marketing", path: "/digital-marketing" },
                { name: "Social Media Management", path: "/social-media" },
                { name: "SEO Services", path: "/seo" },
                { name: "Meta Ads Management", path: "/paid-marketing" },
                { name: "Google Business Profile", path: "/local-seo" },
                { name: "Website Development", path: "/web-development" },
                { name: "Brand Strategy", path: "/branding" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm block py-1 hover:translate-x-1 transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Blog & Articles", path: "/blog" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Free Digital Audit", path: "/free-audit" },
                { name: "Digital Marketing Guides", path: "/resources" },
                { name: "Video Tutorials", path: "/resources#tutorials" },
                { name: "Help Center", path: "/help-center" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm block py-1 hover:translate-x-1 transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HEAD OFFICE */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2">
              HEAD OFFICE
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Radhika Sadan, Pushpa Garden<br />
                    Kailash Nagar, Vrindavan<br />
                    Uttar Pradesh 281121<br />
                    <span className="text-purple-300 text-xs mt-1 block">
                      (Radhika Sadan ki Bassinet me)
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <Link 
                  to="tel:9341436937"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                >
                  +91 93414 36937
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <Link 
                  to="mailto:info@growthservice.in"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                >
                  info@growthservice.in
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/97797073824881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                >
                  WhatsApp: +977 97073824881
                </a>
              </div>
            </div>
          </div>

          {/* QUICK CONTACT */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-300 border-b border-purple-600 pb-2">
              QUICK CONTACT
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-3">
                  Ready to grow your business with digital solutions? Get in touch with us today!
                </p>
                
                <Link 
                  to="/book-call"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 mb-3"
                >
                  Book Free Call
                </Link>
                
                <Link 
                  to="/contact"
                  className="block w-full border border-purple-400 text-purple-300 hover:bg-purple-800 text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Contact Form
                </Link>
              </div>
              
              {/* Social Media Links */}
              <div className="pt-2">
                <p className="text-gray-400 text-xs mb-2">Follow Us:</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.facebook.com/growthservices" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                    title="Facebook"
                  >
                    FB
                  </a>
                  <a 
                    href="https://www.instagram.com/growth_servces" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                    title="Instagram"
                  >
                    IG
                  </a>
                  <a 
                    href="https://linkedin.com/company/growthservice" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                    title="LinkedIn"
                  >
                    LI
                  </a>
                  <a 
                    href="https://youtube.com/@growthservice" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                    title="YouTube"
                  >
                    YT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Attention Notice */}
        <div className="mt-12 p-6 bg-yellow-900/30 border border-yellow-600 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span className="text-yellow-400 text-lg">⚠️</span>
            </div>
            <div>
              <p className="text-yellow-200 text-sm font-semibold mb-2">
                Attention: Growth Service does not offer part-time job offers or channel subscription tasks via WhatsApp, 
                Telegram, or any other chat platforms. Beware of fraudulent solicitations.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link 
                  to="/privacy" 
                  className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-400">|</span>
                <Link 
                  to="/terms" 
                  className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-400">|</span>
                <Link 
                  to="/refund" 
                  className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors duration-200"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {year} <span className="text-purple-300 font-semibold">Growth Service</span>. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-purple-300 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-purple-300 transition-colors">
                Privacy
              </Link>
              <Link to="/refund" className="text-gray-400 hover:text-purple-300 transition-colors">
                Refund Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-purple-300 transition-colors">
                Sitemap
              </Link>
            </div>
            
            <div className="text-gray-400 text-sm">
              <Link to="/" className="hover:text-purple-300 transition-colors">
                Your Trusted Digital Solutions Partner
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 pt-6 border-t border-purple-800">
            <Link to="/digital-marketing" className="text-purple-300 text-xs bg-purple-800/50 px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
              🚀 Social Media Marketing
            </Link>
            <Link to="/paid-marketing" className="text-purple-300 text-xs bg-purple-800/50 px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
              🎯 Meta Ads Management
            </Link>
            <Link to="/seo" className="text-purple-300 text-xs bg-purple-800/50 px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
              🔍 SEO Services
            </Link>
            <Link to="/web-development" className="text-purple-300 text-xs bg-purple-800/50 px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
              💻 Website Development
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
