import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search, Code, Globe, Smartphone, TrendingUp, MessageCircle, Phone, Mail, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  // Popular services
  const popularServices = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Website Development",
      description: "From ₹9,999 • 7-10 days",
      link: "/design-development"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "SEO Package",
      description: "From ₹7,779/month • 4 reports",
      link: "/digital-marketing"
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Social Media",
      description: "From ₹4,449/month • Complete management",
      link: "/digital-marketing"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Meta Ads",
      description: "From ₹9,999/month • Professional ads",
      link: "/digital-marketing"
    }
  ];

  // Quick links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Book a Call", path: "/book-call" },
    { name: "Free Audit", path: "/free-audit" },
    { name: "Portfolio", path: "/portfolio" }
  ];

  // Project types
  const projectTypes = [
    {
      type: "Tour & Travel Website",
      price: "₹14,999",
      link: "/contact"
    },
    {
      type: "Guest House Website",
      price: "₹12,999",
      link: "/contact"
    },
    {
      type: "Business Website",
      price: "₹9,999",
      link: "/contact"
    },
    {
      type: "B2B Setup",
      price: "₹24,999",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>404 - Page Not Found | Growth Service</title>
        <meta
          name="description"
          content="Page not found. Explore Growth Service's professional web development & digital marketing services. Get website from ₹9,999, SEO from ₹7,779/month."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* 404 Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-4xl md:text-5xl font-bold text-purple-600">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-2">
            {/* Quick Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="h-5 w-5 text-purple-600" />
                Quick Navigation
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <ArrowLeft className="h-6 w-6 text-gray-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Go Back</span>
                </button>
                <Link
                  to="/"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors group"
                >
                  <Home className="h-6 w-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Homepage</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
                >
                  <MessageCircle className="h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Contact</span>
                </Link>
                <Link
                  to="/book-call"
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
                >
                  <Phone className="h-6 w-6 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700">Book Call</span>
                </Link>
              </div>
            </div>

            {/* Popular Services */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Popular Services You Might Need
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {popularServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="flex items-center p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
                  >
                    <div className="flex-shrink-0 mr-4 text-purple-600">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Project Types */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Popular Projects
              </h2>
              <div className="space-y-4">
                {projectTypes.map((project, index) => (
                  <Link
                    key={index}
                    to={project.link}
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">
                        {project.type}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-purple-600">{project.price}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links & Contact */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group"
                  >
                    <span className="text-gray-700 group-hover:text-purple-700">{link.name}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/97797073824881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">WhatsApp Support</div>
                    <div className="text-sm opacity-90">+977 97073824881</div>
                  </div>
                </a>
                <a
                  href="tel:+919341436937"
                  className="flex items-center gap-3 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Phone Support</div>
                    <div className="text-sm opacity-90">+91 93414 36937</div>
                  </div>
                </a>
                <a
                  href="mailto:info@growthservice.in"
                  className="flex items-center gap-3 p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Email Support</div>
                    <div className="text-sm opacity-90">info@growthservice.in</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js", "TypeScript", "Node.js", 
                  "MongoDB", "Next.js", "Tailwind CSS"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <Home className="h-5 w-5" />
              Explore Homepage
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Optimized Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="grid grid-cols-3 gap-1 p-2">
          <button
            onClick={() => navigate(-1)}
            className="flex flex-col items-center justify-center py-2 rounded-lg hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600 mb-1" />
            <span className="text-xs font-medium text-gray-700">Back</span>
          </button>
          <Link
            to="/"
            className="flex flex-col items-center justify-center py-2 rounded-lg hover:bg-purple-50"
          >
            <Home className="h-5 w-5 text-purple-600 mb-1" />
            <span className="text-xs font-medium text-purple-700">Home</span>
          </Link>
          <a
            href="https://wa.me/97797073824881"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 rounded-lg hover:bg-green-50"
          >
            <MessageCircle className="h-5 w-5 text-green-600 mb-1" />
            <span className="text-xs font-medium text-green-700">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
