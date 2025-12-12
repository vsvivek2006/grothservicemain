// src/pages/design-development/WordPressDevelopment.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaWordpress, FaCog, FaShieldAlt, FaRocket, FaSearch, FaMobileAlt, FaPalette, FaPlug, FaServer, FaChartLine, FaUsers, FaWrench } from 'react-icons/fa';

const WordPressDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaWordpress className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional WordPress Development
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Build powerful, scalable WordPress websites that drive business growth and deliver exceptional user experiences
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free WordPress Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Discuss Your WordPress Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose WordPress?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              WordPress powers over 40% of all websites for good reasons
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">43%</div>
              <h3 className="text-xl font-semibold mb-3">Market Share</h3>
              <p className="text-gray-600">
                WordPress powers 43% of all websites worldwide
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">60%+</div>
              <h3 className="text-xl font-semibold mb-3">CMS Market Share</h3>
              <p className="text-gray-600">
                Holds over 60% of the CMS market, 20x more than the closest competitor
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">2x</div>
              <h3 className="text-xl font-semibold mb-3">Faster Development</h3>
              <p className="text-gray-600">
                WordPress development is 2x faster than custom development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive WordPress Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end WordPress solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Theme Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom WordPress theme creation</li>
                <li>• Child theme development</li>
                <li>• Theme customization</li>
                <li>• Responsive design</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaPlug />
              </div>
              <h3 className="text-xl font-semibold mb-3">Plugin Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom plugin development</li>
                <li>• Plugin customization</li>
                <li>• WooCommerce extensions</li>
                <li>• API integration plugins</li>
                <li>• Security plugins</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">WordPress Security</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Security hardening</li>
                <li>• Malware removal</li>
                <li>• SSL certificate setup</li>
                <li>• Firewall configuration</li>
                <li>• Regular security audits</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3">WordPress SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• SEO-friendly theme development</li>
                <li>• Schema markup implementation</li>
                <li>• Page speed optimization</li>
                <li>• SEO plugin configuration</li>
                <li>• Content optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile-first design</li>
                <li>• Tablet optimization</li>
                <li>• Cross-browser compatibility</li>
                <li>• Touch-friendly interfaces</li>
                <li>• AMP implementation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-cyan-600 text-3xl mb-4">
                <FaWrench />
              </div>
              <h3 className="text-xl font-semibold mb-3">WordPress Maintenance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Regular updates</li>
                <li>• Backup management</li>
                <li>• Performance monitoring</li>
                <li>• Bug fixes</li>
                <li>• Technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              WordPress Solutions We Build
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized WordPress solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { solution: 'Corporate Websites', icon: '🏢', desc: 'Business websites' },
              { solution: 'E-commerce Stores', icon: '🛒', desc: 'WooCommerce solutions' },
              { solution: 'Blogs & Magazines', icon: '📝', desc: 'Content publishing' },
              { solution: 'Portfolio Sites', icon: '🎨', desc: 'Creative portfolios' },
              { solution: 'Membership Sites', icon: '🔐', desc: 'Subscription platforms' },
              { solution: 'Learning Management', icon: '🎓', desc: 'LMS platforms' },
              { solution: 'Booking Systems', icon: '📅', desc: 'Appointment booking' },
              { solution: 'Multi-vendor Marketplaces', icon: '🏪', desc: 'Marketplace solutions' },
              { solution: 'Real Estate Portals', icon: '🏠', desc: 'Property listings' },
              { solution: 'Job Boards', icon: '💼', desc: 'Career platforms' },
              { solution: 'Non-profit Websites', icon: '🤝', desc: 'Charity organizations' },
              { solution: 'Event Websites', icon: '🎪', desc: 'Event management' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.solution}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Technologies */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            WordPress Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { tech: 'PHP 8.x', color: 'bg-purple-100 text-purple-800' },
              { tech: 'MySQL', color: 'bg-blue-100 text-blue-800' },
              { tech: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
              { tech: 'React.js', color: 'bg-cyan-100 text-cyan-800' },
              { tech: 'REST API', color: 'bg-green-100 text-green-800' },
              { tech: 'GraphQL', color: 'bg-pink-100 text-pink-800' },
              { tech: 'WooCommerce', color: 'bg-red-100 text-red-800' },
              { tech: 'Elementor', color: 'bg-orange-100 text-orange-800' },
              { tech: 'Gutenberg', color: 'bg-gray-100 text-gray-800' },
              { tech: 'ACF Pro', color: 'bg-blue-50 text-blue-700' },
              { tech: 'WP Rocket', color: 'bg-green-50 text-green-700' },
              { tech: 'Yoast SEO', color: 'bg-red-50 text-red-700' },
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} p-4 rounded-lg text-center font-semibold`}>
                {tech.tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            WordPress Development Process
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: 1, title: 'Planning', desc: 'Requirements & strategy', icon: '📋' },
                { step: 2, title: 'Design', desc: 'UI/UX & wireframes', icon: '🎨' },
                { step: 3, title: 'Development', desc: 'Coding & integration', icon: '💻' },
                { step: 4, title: 'Testing', desc: 'QA & optimization', icon: '🧪' },
                { step: 5, title: 'Launch', desc: 'Deployment & training', icon: '🚀' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                      {item.step}
                    </div>
                    {item.step < 5 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-block bg-white p-6 rounded-xl shadow-sm border border-blue-200">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-gray-800">Phase 6: Maintenance & Support</h3>
                <p className="text-gray-600">Ongoing updates, security, and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Advanced WordPress Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern features for powerful WordPress websites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'Headless WordPress', icon: '⚡' },
              { feature: 'Custom Post Types', icon: '📄' },
              { feature: 'Advanced Custom Fields', icon: '🔧' },
              { feature: 'Multi-language Support', icon: '🌐' },
              { feature: 'User Role Management', icon: '👥' },
              { feature: 'API Integrations', icon: '🔌' },
              { feature: 'Advanced Search', icon: '🔍' },
              { feature: 'Real-time Updates', icon: '🔄' },
              { feature: 'Gutenberg Blocks', icon: '🧱' },
              { feature: 'WooCommerce Customization', icon: '💰' },
              { feature: 'Membership Systems', icon: '🔐' },
              { feature: 'Learning Management', icon: '📚' },
              { feature: 'Booking Systems', icon: '📅' },
              { feature: 'Social Media Integration', icon: '📱' },
              { feature: 'Newsletter Integration', icon: '✉️' },
              { feature: 'Analytics Dashboard', icon: '📊' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800">{item.feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Guarantees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Performance Guarantees
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our WordPress websites are built for speed and performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '<2s', label: 'Page Load Time', desc: 'Lightning fast loading' },
              { metric: '99.9%', label: 'Uptime', desc: 'Maximum availability' },
              { metric: 'A+', label: 'Security Score', desc: 'Top security standards' },
              { metric: '90+', label: 'PageSpeed Score', desc: 'Google performance' },
              { metric: 'Mobile-First', label: 'Design Approach', desc: 'Optimized for mobile' },
              { metric: 'SEO-Ready', label: 'Built-in SEO', desc: 'Rank higher in search' },
              { metric: 'Scalable', label: 'Architecture', desc: 'Grow without limits' },
              { metric: '24/7', label: 'Support', desc: 'Technical assistance' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              WordPress Development Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect WordPress solution for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic WordPress', 
                price: '₹29,999', 
                type: 'Business Website',
                features: ['Up to 10 Pages', 'Custom Theme', 'Contact Form', 'Basic SEO', 'Mobile Responsive', '1 Month Support'],
                color: 'border-blue-200'
              },
              { 
                name: 'Professional WordPress', 
                price: '₹79,999', 
                type: 'Advanced Website',
                features: ['Up to 25 Pages', 'Custom Theme Development', 'Advanced Features', 'WooCommerce Setup', 'Performance Optimization', '3 Months Support'],
                color: 'border-blue-300',
                popular: true
              },
              { 
                name: 'Enterprise WordPress', 
                price: '₹1,99,999', 
                type: 'Custom Solution',
                features: ['Unlimited Pages', 'Custom Plugin Development', 'API Integrations', 'Advanced Security', 'Custom CMS Features', '6 Months Support', 'Priority Support'],
                color: 'border-blue-400'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600"> one-time</span></div>
                <p className="text-gray-600 mb-4">Type: <span className="font-semibold">{plan.type}</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Build My WordPress Site
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Custom enterprise solutions, e-commerce development, and ongoing maintenance packages available
            </p>
          </div>
        </div>
      </section>

      {/* WordPress Maintenance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              WordPress Maintenance Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep your WordPress site secure, fast, and up-to-date
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Care', 
                price: '₹4,999', 
                period: '/month',
                features: ['Weekly Backups', 'Security Monitoring', 'WordPress Updates', 'Plugin Updates', 'Uptime Monitoring', 'Email Support'],
                color: 'bg-blue-50'
              },
              { 
                name: 'Professional Care', 
                price: '₹9,999', 
                period: '/month',
                features: ['Daily Backups', 'Advanced Security', 'Performance Optimization', 'SEO Updates', 'Content Updates', 'Phone Support', 'Monthly Reports'],
                color: 'bg-blue-100',
                popular: true
              },
              { 
                name: 'Enterprise Care', 
                price: '₹19,999', 
                period: '/month',
                features: ['Real-time Backups', 'Premium Security', 'Speed Optimization', 'Emergency Support', 'Unlimited Edits', 'Priority Support', 'Quarterly Strategy'],
                color: 'bg-blue-50'
              },
            ].map((plan) => (
              <div key={plan.name} className={`${plan.color} p-8 rounded-xl border border-blue-200`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600">{plan.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Get Maintenance Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your WordPress Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a powerful WordPress site that grows your business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+919341436937"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call: +91 93414 36937
              </a>
              <a
                href="https://wa.me/977977382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                💬 WhatsApp WordPress Expert
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">⚡ Fast Development</div>
                <div className="text-sm opacity-90">3-6 weeks delivery</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🔒 Secure & Stable</div>
                <div className="text-sm opacity-90">Enterprise-grade security</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">📈 SEO Optimized</div>
                <div className="text-sm opacity-90">Built for search engines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            WordPress Development FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Why choose WordPress over other platforms?',
                a: 'WordPress offers unmatched flexibility, scalability, and a massive ecosystem of plugins and themes. It\'s SEO-friendly, regularly updated, and has a huge community for support. Over 40% of all websites use WordPress for good reason.'
              },
              {
                q: 'How long does WordPress development take?',
                a: 'Basic websites: 3-4 weeks, Business websites: 4-6 weeks, Complex websites: 6-10 weeks. E-commerce sites and custom solutions may take longer depending on requirements.'
              },
              {
                q: 'Do you provide WordPress training?',
                a: 'Yes, we provide comprehensive WordPress training to help you manage your site. We cover content updates, basic maintenance, and best practices for site management.'
              },
              {
                q: 'Can you migrate my existing website to WordPress?',
                a: 'Absolutely! We specialize in website migrations to WordPress. We handle content migration, URL redirection, SEO preservation, and ensure a smooth transition.'
              },
              {
                q: 'Do you offer WordPress hosting?',
                a: 'We don\'t provide hosting directly, but we work with premium hosting providers and can help you choose and set up the best hosting solution for your WordPress site.'
              },
              {
                q: 'Is WordPress secure?',
                a: 'WordPress is very secure when properly maintained. We implement security best practices including SSL certificates, firewalls, regular updates, security plugins, and regular security audits.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits of Professional WordPress Development
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why businesses choose professional WordPress development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-800">For Business Owners</h3>
              <ul className="space-y-3">
                {[
                  'Lower development costs compared to custom solutions',
                  'Faster time-to-market',
                  'Easy content management without technical skills',
                  'Scalable as your business grows',
                  'SEO-friendly architecture',
                  'Large plugin ecosystem for extended functionality',
                  'Regular updates and security patches',
                  'Massive community support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">For Marketing Teams</h3>
              <ul className="space-y-3">
                {[
                  'Easy content updates and publishing',
                  'SEO optimization built-in',
                  'Analytics integration',
                  'Social media integration',
                  'Email marketing integration',
                  'Landing page creation',
                  'A/B testing capabilities',
                  'Performance tracking'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
