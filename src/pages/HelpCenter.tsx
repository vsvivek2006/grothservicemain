import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Search, HelpCircle, MessageCircle, Phone, Mail, 
  Clock, CheckCircle, FileText, Download, ExternalLink,
  Users, Shield, CreditCard, Globe, Smartphone, 
  TrendingUp, Calendar, Zap, BookOpen, ArrowRight,
  ChevronDown, ChevronUp, Headphones, Award, Building
} from 'lucide-react';

import { getPrimaryPhone, getBusinessEmail, getOfficePhone } from '../selectors';
import { getNepalWhatsAppUrl, getTelHref, getMailtoHref } from '../services';

const HelpCenter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const primaryPhone = getPrimaryPhone();
  const businessEmail = getBusinessEmail();
  const nepalPhone = getOfficePhone('nepal');

  const categories = [
    { id: 'all', name: 'All Topics', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'billing', name: 'Billing & Payments', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'webdev', name: 'Website Development', icon: <Globe className="h-5 w-5" /> },
    { id: 'seo', name: 'SEO Services', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'social', name: 'Social Media', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'support', name: 'Support', icon: <Headphones className="h-5 w-5" /> },
    { id: 'account', name: 'Account', icon: <Users className="h-5 w-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="h-5 w-5" /> }
  ];

  const faqs = [
    {
      id: 1,
      question: "How much does website development cost?",
      answer: "Website development is scoped individually based on business goals, features, and technical architecture. We provide comprehensive, itemized proposals with clear milestone deliverables before initiating any build.",
      category: 'webdev',
      views: 1250
    },
    {
      id: 2,
      question: "What is included in an SEO engagement framework?",
      answer: "Our SEO engagements include: detailed performance audits, SEO-optimized content production, search intent keyword research, technical SEO optimization, white-hat backlink outreach, and local map rankings. Results typically show within 3-6 months.",
      category: 'seo',
      views: 980
    },
    {
      id: 3,
      question: "How long does website development take?",
      answer: "Basic websites take 7-10 days for development. E-commerce websites typically take 15-20 days. Complex custom solutions may take 30+ days. We provide clear timelines during project planning and maintain regular updates throughout development.",
      category: 'webdev',
      views: 875
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept UPI, credit/debit cards, net banking, and direct bank transfers. For international clients, we accept wire transfers and standard commercial remittance channels.",
      category: 'billing',
      views: 650
    },
    {
      id: 5,
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer ongoing maintenance and support retainers. This includes regular CMS updates, security monitoring, automated backups, performance optimization, and SLA response support.",
      category: 'support',
      views: 720
    },
    {
      id: 6,
      question: "Can you help with Google My Business setup?",
      answer: "Absolutely! Our GMB optimization service includes: Complete profile setup and verification, category optimization, geotagged photos, review management framework, weekly local updates, and performance tracking to drive foot traffic and inquiries.",
      category: 'seo',
      views: 550
    },
    {
      id: 7,
      question: "What technologies do you use for development?",
      answer: "We use modern technologies: React.js for frontend, TypeScript for type safety, Node.js for backend, MongoDB for database, and Tailwind CSS for styling. This stack ensures fast, secure, and scalable websites with excellent performance.",
      category: 'webdev',
      views: 890
    },
    {
      id: 8,
      question: "How do I track my project progress?",
      answer: "We provide daily updates via WhatsApp/Email, access to project management dashboard, weekly progress meetings, and milestone approvals. Clients can track progress in real-time and provide feedback throughout the development process.",
      category: 'support',
      views: 430
    },
    {
      id: 9,
      question: "What's your refund policy?",
      answer: "We offer a 7-day satisfaction guarantee for website development. If you're not satisfied with the initial design concept, we provide a full refund. For ongoing services, cancellation requests must be made 7 days before the next billing cycle.",
      category: 'billing',
      views: 380
    },
    {
      id: 10,
      question: "Do you provide social media management?",
      answer: "Yes, we provide full-service social media management. This includes content calendar architecture, multi-format creative production, community management, conversion tracking, and monthly strategic executive reports for Facebook, Instagram, LinkedIn, and Twitter.",
      category: 'social',
      views: 510
    },
    {
      id: 11,
      question: "Can I get a custom quote for my project?",
      answer: "Yes! We provide free custom quotes. Contact us with your project requirements via WhatsApp, email, or our contact form. We'll analyze your needs and provide a detailed proposal within 24 hours.",
      category: 'webdev',
      views: 920
    },
    {
      id: 12,
      question: "What support do you offer after website launch?",
      answer: "We provide 1 month of free support after launch. After that, we offer maintenance packages. All our websites come with documentation and training. Emergency support is available 24/7 for critical issues.",
      category: 'support',
      views: 670
    },
    {
      id: 13,
      question: "How do I improve my website speed?",
      answer: "We offer end-to-end Core Web Vitals and speed optimization. This includes image compression, code minification, server caching, CDN routing, and database query optimization, typically improving load speed by 60-80%.",
      category: 'webdev',
      views: 590
    },
    {
      id: 14,
      question: "Do you provide hosting services?",
      answer: "Yes, we provide enterprise managed cloud hosting. This includes SSL certificates, automated daily backups, proactive firewall security, and 99.9% uptime SLAs.",
      category: 'support',
      views: 480
    },
    {
      id: 15,
      question: "Can you migrate my existing website?",
      answer: "Yes, we offer zero-downtime website migrations. We ensure data integrity, 301 SEO redirection mappings, database transfers, and rigorous post-migration QA testing.",
      category: 'webdev',
      views: 320
    }
  ];

  const guides = [
    {
      title: "Website Development Guide",
      description: "Complete guide to planning, developing, and launching your website",
      icon: "🌐",
      download: "PDF Guide",
      pages: "15 pages"
    },
    {
      title: "SEO Starter Kit",
      description: "Beginner's guide to SEO optimization for small businesses",
      icon: "🔍",
      download: "PDF Guide",
      pages: "12 pages"
    },
    {
      title: "Social Media Calendar",
      description: "Free template for planning your social media content",
      icon: "📅",
      download: "Excel Template",
      pages: "Template"
    },
    {
      title: "Website Security Checklist",
      description: "Essential security measures for your website",
      icon: "🔒",
      download: "Checklist PDF",
      pages: "8 pages"
    }
  ];

  const contactOptions = [
    {
      title: "WhatsApp Support",
      description: "Fastest response (24/7)",
      icon: <MessageCircle className="h-6 w-6" />,
      contact: nepalPhone,
      action: "Chat Now",
      color: "bg-green-500",
      href: getNepalWhatsAppUrl()
    },
    {
      title: "Phone Support",
      description: "Mon-Sat, 9 AM - 7 PM",
      icon: <Phone className="h-6 w-6" />,
      contact: primaryPhone,
      action: "Call Now",
      color: "bg-blue-500",
      href: getTelHref(primaryPhone)
    },
    {
      title: "Email Support",
      description: "Response within 4 hours",
      icon: <Mail className="h-6 w-6" />,
      contact: businessEmail,
      action: "Send Email",
      color: "bg-purple-500",
      href: getMailtoHref(businessEmail)
    }
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Help Center - Growth Service Support & FAQs</title>
        <meta 
          name="description" 
          content="Get help with website development, SEO services, social media management, and billing. Contact our support team for assistance." 
        />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Help Center</h1>
              <p className="text-blue-100">Get answers to common questions and contact support</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <Award className="h-5 w-5" />
                <span>100+ Projects Delivered</span>
                <span className="text-blue-200">•</span>
                <span>98% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers about websites, SEO, billing, support..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Popular searches: website cost, development time, SEO package, payment methods
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className={`mb-2 ${activeCategory === category.id ? 'text-white' : 'text-blue-600'}`}>
                  {category.icon}
                </div>
                <span className="text-xs font-medium text-center">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${option.color} text-white p-3 rounded-lg`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                    <p className="font-medium text-gray-900">{option.contact}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
            <span className="text-sm text-gray-500">{filteredFaqs.length} questions</span>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{faq.question}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {faq.views} views
                      </span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {categories.find(c => c.id === faq.category)?.name}
                      </span>
                    </div>
                  </div>
                  {expandedFaqs.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                {expandedFaqs.includes(faq.id) && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    <div className="mt-4 flex space-x-3">
                      <a
                        href={getNepalWhatsAppUrl(`I have a question about: ${faq.question}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        💬 Ask more about this
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">No FAQs found for "{searchQuery}"</p>
              <p className="text-sm text-gray-500">Try different keywords or contact our support team</p>
            </div>
          )}
        </div>

        {/* Resources & Guides */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Free Resources & Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{guide.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{guide.pages}</span>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {guide.download}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Our Support Promise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">WhatsApp Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4h</div>
              <div className="text-sm text-gray-600">Email Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Projects Supported</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">Send us a message and we'll get back to you within 4 hours</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select a category</option>
                <option value="webdev">Website Development</option>
                <option value="seo">SEO Services</option>
                <option value="social">Social Media</option>
                <option value="billing">Billing & Payments</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your issue or question..."
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
              Send Message
            </button>
            <a
              href="tel:+919341436937"
              className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors text-center"
            >
              📞 Call Instead
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Support Hours</p>
              <p className="font-medium">Monday - Saturday: 9:00 AM - 7:00 PM IST</p>
              <p className="font-medium">Sunday: 10:00 AM - 5:00 PM IST</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Emergency Support</p>
              <p className="font-medium">24/7 via WhatsApp for critical issues</p>
              <p className="text-sm text-gray-600 mt-1">Response within 30 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-friendly styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .grid-cols-8 {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .grid-cols-8 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default HelpCenter;
