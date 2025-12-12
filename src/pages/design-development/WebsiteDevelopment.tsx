
// src/pages/design-development/WebsiteDevelopment.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaShoppingCart, FaRocket, FaShieldAlt, FaSearch, FaPalette, FaServer, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const WebsiteDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaCode className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Website Development
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Custom websites that drive conversions, engage visitors, and grow your business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Website Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Your Website Matters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your website is your digital storefront - make it count
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-indigo-600 mb-2">75%</div>
              <h3 className="text-xl font-semibold mb-3">Credibility Factor</h3>
              <p className="text-gray-600">
                75% of users judge a company's credibility based on their website design
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">&lt;3s</div>
              <h3 className="text-xl font-semibold mb-3">Loading Time</h3>
              <p className="text-gray-600">
                53% of visitors leave if a website takes more than 3 seconds to load
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">400%</div>
              <h3 className="text-xl font-semibold mb-3">Conversion Boost</h3>
              <p className="text-gray-600">
                Well-designed websites convert visitors 400% better than poor ones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Website Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete web solutions from concept to launch and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Web Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Responsive website design</li>
                <li>• Frontend & backend development</li>
                <li>• CMS development (Custom)</li>
                <li>• API integrations</li>
                <li>• Progressive Web Apps (PWA)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Shopify development</li>
                <li>• WooCommerce development</li>
                <li>• Custom e-commerce solutions</li>
                <li>• Payment gateway integration</li>
                <li>• Inventory management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaWordpress />
              </div>
              <h3 className="text-xl font-semibold mb-3">WordPress Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom theme development</li>
                <li>• Plugin development</li>
                <li>• WordPress optimization</li>
                <li>• Security hardening</li>
                <li>• Maintenance & support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile-First Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Responsive design</li>
                <li>• Mobile optimization</li>
                <li>• Accelerated Mobile Pages (AMP)</li>
                <li>• Touch-friendly interfaces</li>
                <li>• Mobile performance testing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO-Friendly Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Technical SEO implementation</li>
                <li>• Schema markup</li>
                <li>• Page speed optimization</li>
                <li>• Clean URL structure</li>
                <li>• SEO-optimized code</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Maintenance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Regular updates & backups</li>
                <li>• Security monitoring</li>
                <li>• Performance optimization</li>
                <li>• Bug fixes & support</li>
                <li>• Content updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Modern Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We build with cutting-edge technologies for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: 'bg-blue-100 text-blue-800' },
              { name: 'Next.js', color: 'bg-gray-100 text-gray-800' },
              { name: 'Node.js', color: 'bg-green-100 text-green-800' },
              { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
              { name: 'WordPress', color: 'bg-blue-50 text-blue-700' },
              { name: 'Shopify', color: 'bg-green-50 text-green-700' },
              { name: 'MongoDB', color: 'bg-green-100 text-green-800' },
              { name: 'Firebase', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'AWS', color: 'bg-orange-100 text-orange-800' },
              { name: 'Docker', color: 'bg-blue-100 text-blue-800' },
              { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-800' },
              { name: 'GraphQL', color: 'bg-pink-100 text-pink-800' },
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} p-4 rounded-lg text-center font-semibold`}>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our 6-Step Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Discovery & Planning', desc: 'Requirements gathering & strategy', icon: '🔍' },
              { step: 2, title: 'UI/UX Design', desc: 'Wireframes & prototypes', icon: '🎨' },
              { step: 3, title: 'Development', desc: 'Coding & implementation', icon: '💻' },
              { step: 4, title: 'Testing', desc: 'Quality assurance & bug fixes', icon: '🧪' },
              { step: 5, title: 'Launch', desc: 'Deployment & go-live', icon: '🚀' },
              { step: 6, title: 'Maintenance', desc: 'Support & updates', icon: '🛡️' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 rounded-xl text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Recent Website Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See examples of our website development work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'E-commerce',
                title: 'Fashion Store',
                desc: 'Complete Shopify store with custom features',
                color: 'bg-pink-100'
              },
              {
                category: 'SaaS Platform',
                title: 'Project Management Tool',
                desc: 'React-based SaaS with real-time features',
                color: 'bg-blue-100'
              },
              {
                category: 'Healthcare',
                title: 'Medical Clinic Portal',
                desc: 'WordPress site with appointment booking',
                color: 'bg-green-100'
              },
            ].map((project, index) => (
              <div key={index} className={`${project.color} p-6 rounded-xl`}>
                <div className="text-sm font-semibold text-gray-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <Link
                  to="/portfolio"
                  className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold text-lg"
            >
              View All Projects
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Website Development Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Website',
                price: '₹24,999',
                type: 'Informational Website',
                features: ['5-7 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO', '6 Months Support'],
                color: 'border-blue-200'
              },
              {
                name: 'Business Website',
                price: '₹49,999',
                type: 'Small Business Website',
                features: ['10-15 Pages', 'CMS Integration', 'Blog Setup', 'Advanced SEO', 'Contact Management', '1 Year Support'],
                color: 'border-indigo-300',
                popular: true
              },
              {
                name: 'E-commerce Store',
                price: '₹99,999',
                type: 'Online Store',
                features: ['Full E-commerce', 'Payment Gateway', 'Product Management', 'Inventory System', 'Mobile App', '2 Years Support'],
                color: 'border-purple-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600"> one-time</span></div>
                <p className="text-gray-600 mb-4">{plan.type}</p>
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
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start Project
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Custom development projects are quoted individually based on requirements
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a website that drives results
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+919341436937"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call: +91 93414 36937
              </a>
              <a
                href="https://wa.me/977977382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                💬 WhatsApp Quote
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">⏰ Fast Delivery</div>
                <div className="text-sm opacity-90">2-4 weeks typical timeline</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">✅ Satisfaction Guarantee</div>
                <div className="text-sm opacity-90">30-day post-launch support</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🔄 Free Revisions</div>
                <div className="text-sm opacity-90">Unlimited revisions during development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Website Development FAQs
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How long does it take to develop a website?',
                a: 'Basic websites: 2-3 weeks, Business websites: 4-6 weeks, E-commerce websites: 6-8 weeks. Custom projects may vary based on complexity.'
              },
              {
                q: 'What is included in your website development packages?',
                a: 'All packages include design, development, testing, deployment, basic SEO setup, and post-launch support. We provide a detailed scope document before starting.'
              },
              {
                q: 'Do you provide website maintenance after launch?',
                a: 'Yes, we offer monthly maintenance packages that include updates, backups, security monitoring, and technical support.'
              },
              {
                q: 'Can you redesign my existing website?',
                a: 'Absolutely! We specialize in website redesigns and migrations while preserving SEO rankings and improving functionality.'
              },
              {
                q: 'What about website hosting and domain?',
                a: 'We can help you purchase domains and set up reliable hosting. We recommend and work with premium hosting providers for optimal performance.'
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes, we provide different support packages including emergency support, regular maintenance, and feature additions.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Note: FaWordpress icon import (you'll need to add this to your imports)
const FaWordpress = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 496 512">
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 11.7-1.7 10.7-15.7-1-14.7 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-11.7-.7-12.7 13.1-1 14.7 0 0 11.4 1.4 24.9 2.1l34.5 94.5-48.7 141.9-86.3-236.5c13.4-.7 25.5-2.1 25.5-2.1 11.7-1.7 10.7-15.7-1-14.7 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 33 171.8 8 248 8c66.8 0 127.7 25.5 173.8 67.2-5.3.2-10.4.3-15.5.3-21.9 0-58.7-2.8-58.7-2.8-11.7-.7-12.7 13.1-1 14.7 0 0 11.4 1.4 24.9 2.1l25.2 71.3c1.7 4.9 3.5 9.8 5.5 14.5L275.6 387c-2.3 6.4-4.5 12.8-6.7 19.2-10.3-29.9-18.5-54.9-18.5-54.9-8.8-25.2-33.4-91.9-33.4-91.9-17.7-52.2 10.6-52.7 27.3-52.7 17.4 0 26.5 17.4 26.5 17.4l10.2 28.7c26.7 77.3 44.6 125 44.6 125s20.3 60.1 49.2 138.1c-14.8 11.1-31.5 20.5-49.7 27.3l68.9-200.9c1.2-3.4 2.4-6.8 3.5-10.2 13.4-39.2 20.3-67.7 20.3-103.1C463 119 385.8 33 295.7 33c-44.3 0-84.9 16.1-116.3 42.8 7.7 1.1 15.3 2.3 22.8 3.7l41.2 113.7 33.2-91.6z" />
  </svg>
);

export default WebsiteDevelopment;
