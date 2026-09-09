// src/pages/white-label/WhiteLabelWebDevelopment.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaWordpress, FaShoppingCart, FaMobileAlt, FaServer, FaShieldAlt, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';
import {
  ClipboardList,
  BarChart3,
  Code,
  Eye,
  Rocket,
  FolderKanban,
  Lock,
  MessageCircle,
  Monitor,
  DollarSign,
  LifeBuoy,
  GraduationCap,
  CheckCircle2,
  Search,
  Palette,
  TestTube,
  Check,
  Zap,
  Tag,
  Phone,
} from 'lucide-react';
import { getPrimaryPhone } from '../../selectors';
import { getTelHref, getNepalWhatsAppUrl } from '../../services';

const WhiteLabelWebDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaCode className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label Web Development
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Offer premium web development services under your brand with our complete white label solution
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
              </Link>
              <Link
                to="/white-label"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                View All White Label Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why White Label Web Development */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Scale Your Agency with Web Development
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Add high-margin development services without the overhead of building an in-house tech team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">70-80% Profit Margin</h3>
              <p className="text-gray-600">
                Web development projects command premium pricing with exceptional profit margins
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Ticket Projects</h3>
              <p className="text-gray-600">
                Website projects often lead to ongoing retainer services like SEO and maintenance
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Confidential</h3>
              <p className="text-gray-600">
                We work silently in the background. Your clients only know and interact with your agency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Services We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete Web Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From simple landing pages to complex web applications, we build it all under your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaWordpress />
              </div>
              <h3 className="text-xl font-semibold mb-3">WordPress Development</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Custom theme development, plugin integration, Elementor/Gutenberg builds, and WooCommerce setups.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Custom themes & child themes</li>
                <li>• Elementor & page builder sites</li>
                <li>• Plugin customization</li>
                <li>• Speed & security optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-Commerce Development</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Shopify, WooCommerce, and custom headless e-commerce solutions with payment gateway integrations.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Shopify store setup & themes</li>
                <li>• WooCommerce configuration</li>
                <li>• Payment gateway integrations</li>
                <li>• Product catalog & checkout flow</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Web Apps</h3>
              <p className="text-gray-600 mb-4 text-sm">
                React, Next.js, Node.js, and TypeScript web applications tailored for specific business logic.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Single-page applications (SPA)</li>
                <li>• Server-side rendering (SSR)</li>
                <li>• REST API & GraphQL integration</li>
                <li>• Scalable cloud architecture</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Landing Pages & Funnels</h3>
              <p className="text-gray-600 mb-4 text-sm">
                High-converting, fast-loading landing pages designed to drive leads and sales for PPC campaigns.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Conversion-optimized layouts</li>
                <li>• Form & CRM integrations</li>
                <li>• Fast loading speed (90+ score)</li>
                <li>• A/B testing setup</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Maintenance</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Ongoing updates, security patches, regular backups, uptime monitoring, and technical support.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Core & plugin updates</li>
                <li>• Automated daily backups</li>
                <li>• Security scans & malware cleanup</li>
                <li>• 24/7 uptime monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Speed & Security</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Core Web Vitals optimization, caching solutions, SSL enforcement, and vulnerability hardening.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Core Web Vitals compliance</li>
                <li>• CDN setup & caching</li>
                <li>• Database optimization</li>
                <li>• Firewall & DDoS protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How White Label Works */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How White Label Web Development Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Client Brief', desc: 'You gather requirements', icon: ClipboardList },
              { step: 2, title: 'Planning', desc: 'We create project plan', icon: BarChart3 },
              { step: 3, title: 'Development', desc: 'We build the website', icon: Code },
              { step: 4, title: 'Review', desc: 'You review with client', icon: Eye },
              { step: 5, title: 'Launch', desc: 'Website goes live', icon: Rocket },
            ].map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="text-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-indigo-600 mb-3 flex justify-center"><StepIcon className="w-8 h-8" /></div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* White Label Platform Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              White Label Platform Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver web development services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'Project Management', desc: 'White label project tracking', icon: FolderKanban },
              { feature: 'Client Portal', desc: 'Branded client dashboard', icon: Lock },
              { feature: 'Direct Communication', desc: 'You maintain client contact', icon: MessageCircle },
              { feature: 'Development Environment', desc: 'Staging sites for review', icon: Monitor },
              { feature: 'Scalable Pricing', desc: 'Volume-based discounts', icon: DollarSign },
              { feature: '24/7 Support', desc: 'Technical & development support', icon: LifeBuoy },
              { feature: 'Training Resources', desc: 'Agency sales materials', icon: GraduationCap },
              { feature: 'Quality Assurance', desc: 'Comprehensive testing', icon: CheckCircle2 },
            ].map((item, index) => {
              const FeatureIcon = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="text-indigo-600 mb-3"><FeatureIcon className="w-7 h-7" /></div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{item.feature}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Web Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured process for successful project delivery
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {[
                { step: 1, title: 'Discovery', desc: 'Requirements gathering', icon: Search },
                { step: 2, title: 'Planning', desc: 'Project scope & timeline', icon: ClipboardList },
                { step: 3, title: 'Design', desc: 'UI/UX design & wireframes', icon: Palette },
                { step: 4, title: 'Development', desc: 'Coding & implementation', icon: Code },
                { step: 5, title: 'Testing', desc: 'QA & bug fixing', icon: TestTube },
                { step: 6, title: 'Launch', desc: 'Deployment & handover', icon: Rocket },
              ].map((item) => {
                const ProcessIcon = item.icon;
                return (
                  <div key={item.step} className="text-center">
                    <div className="relative mb-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                        {item.step}
                      </div>
                      {item.step < 6 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-indigo-200 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="text-indigo-600 mb-1 flex justify-center"><ProcessIcon className="w-5 h-5" /></div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* White Label Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              White Label Web Development Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Production-ready development capacities engineered seamlessly under your agency's brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Website', 
                tier: 'Agency Turnkey Site', 
                type: 'Brochure Website',
                features: ['5-7 Pages', 'Responsive Modern Design', 'Contact Form & Lead Capture', 'On-Page SEO', 'CMS Integration', '1 Month Post-Launch Support'],
                color: 'border-indigo-200'
              },
              { 
                name: 'Business Website', 
                tier: 'Corporate Platform', 
                type: 'Corporate Website',
                features: ['10-15 Pages', 'Custom UI/UX Architecture', 'Advanced CMS Features', 'Integrated Blog', 'Performance Optimization', '3 Months Dedicated Support', 'White-Label Client Training'],
                color: 'border-purple-300',
                popular: true
              },
              { 
                name: 'E-commerce Store', 
                tier: 'Full Commerce Engine', 
                type: 'Online Store',
                features: ['Full E-commerce Capability', 'Payment Gateway Integration', 'Catalog & Inventory Management', 'ERP Sync Ready', 'Mobile-Responsive UI', '6 Months Support', 'Dedicated Account Manager'],
                color: 'border-indigo-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST REQUESTED
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-indigo-900 mb-2">{plan.tier}</div>
                <p className="text-gray-600 mb-4">Type: <span className="font-semibold">{plan.type}</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Partner Inquiry
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Custom agency volume tiers and enterprise multi-site agreements scoped individually
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              White Label Maintenance Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reliable recurring maintenance fulfillment for your agency's client portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Care', 
                tier: 'Essential Maintenance', 
                features: ['Weekly Backups', 'Security Updates', 'Uptime Monitoring', 'White-Label Bug Fixes', 'Monthly Performance Reports', 'Core Updates'],
                color: 'bg-indigo-50'
              },
              { 
                name: 'Professional Care', 
                tier: 'Proactive Optimization', 
                features: ['Daily Backups', 'Advanced Security', 'Speed Optimization', 'Monthly Content Updates', 'Priority Agency SLA', 'Quarterly Review Audits'],
                color: 'bg-purple-50',
                popular: true
              },
              { 
                name: 'Enterprise Care', 
                tier: 'Dedicated SLA', 
                features: ['Real-time Backups', 'Enterprise Hardening', '24/7 Monitoring', 'Active Hours Retainer', 'Emergency Incident Response', 'Strategic Technical Architecture'],
                color: 'bg-indigo-50'
              },
            ].map((plan) => (
              <div key={plan.name} className={`${plan.color} p-8 rounded-xl border border-indigo-200`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-indigo-900 mb-4">{plan.tier}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Discuss Maintenance Retainers
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits for Your Agency
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why agencies choose our white label web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Business Growth</h3>
              <ul className="space-y-4">
                {[
                  'Add high-margin web development (70-80% profit)',
                  'Increase project sizes by 3-5x',
                  'Create recurring revenue with maintenance',
                  'Cross-sell to existing marketing clients',
                  'Attract higher-value enterprise clients',
                  'Differentiate from design-only competitors',
                  'Build long-term client partnerships',
                  'Increase agency valuation with diverse services'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Rocket className="w-4 h-4 text-white mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-indigo-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Efficiency</h3>
              <ul className="space-y-4">
                {[
                  'No need to hire web developers',
                  'No software or tool license costs',
                  'No training or certification expenses',
                  'Focus on sales and client relationships',
                  'Professional results without technical expertise',
                  'Scalable as your agency grows',
                  '24/7 technical support',
                  'Expert development team at your service'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Zap className="w-4 h-4 text-indigo-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Agency Success Story
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how agencies transform with white label web development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">500%</div>
                  <div className="font-semibold">Revenue Growth</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Marketing Agency Transformation</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Before White Label Web Development:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Only offering digital marketing services</li>
                    <li>• Referring web development work to others</li>
                    <li>• 10 clients, ₹6L/month revenue</li>
                    <li>• Missing website project opportunities</li>
                    <li>• No technical capabilities in-house</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">After White Label Web Development:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Added full web development services</li>
                    <li>• Completed 15 website projects in 6 months</li>
                    <li>• Converted 8 marketing clients to web projects</li>
                    <li>• ₹30L/month revenue (500% growth)</li>
                    <li>• Added ₹2L/month in maintenance revenue</li>
                    <li>• Became full-service digital agency</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 font-semibold">"White label web development transformed our agency from service provider to full digital partner. We now handle everything from strategy to development, and our clients love the seamless experience."</p>
                  <p className="text-gray-600 mt-2">- Agency Founder, 2-year partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Offer Web Development Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Add high-margin web development to your agency with complete white label support
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
              </Link>
              <a
                href={getTelHref(getPrimaryPhone())}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {getPrimaryPhone()}</span>
              </a>
              <a
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Partnership</span>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold flex items-center justify-center gap-1.5">
                  <Tag className="w-4 h-4" />
                  <span>100% White Label</span>
                </div>
                <div className="text-sm opacity-90">Your brand only</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold flex items-center justify-center gap-1.5">
                  <DollarSign className="w-4 h-4" />
                  <span>High Margins</span>
                </div>
                <div className="text-sm opacity-90">70-80% profit margins</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold flex items-center justify-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  <span>Fast Development</span>
                </div>
                <div className="text-sm opacity-90">2-6 weeks delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Professional Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern technologies for exceptional web development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tech: 'React.js', color: 'bg-cyan-100 text-cyan-800' },
              { tech: 'Next.js', color: 'bg-gray-100 text-gray-800' },
              { tech: 'Node.js', color: 'bg-green-100 text-green-800' },
              { tech: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
              { tech: 'WordPress', color: 'bg-blue-50 text-blue-700' },
              { tech: 'Shopify', color: 'bg-green-50 text-green-700' },
              { tech: 'PHP', color: 'bg-purple-100 text-purple-800' },
              { tech: 'Python', color: 'bg-yellow-100 text-yellow-800' },
              { tech: 'MySQL', color: 'bg-blue-100 text-blue-800' },
              { tech: 'MongoDB', color: 'bg-green-100 text-green-800' },
              { tech: 'AWS', color: 'bg-orange-100 text-orange-800' },
              { tech: 'Docker', color: 'bg-blue-100 text-blue-800' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-lg text-center font-medium`}>
                {item.tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            White Label Web Development FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How do you ensure our clients never know about you?',
                a: 'We work completely behind the scenes. All communication goes through you. Websites are delivered to you for client review, and we never interact directly with your clients. All project management happens through your branded portal.'
              },
              {
                q: 'What if we don\'t have technical or development expertise?',
                a: 'No technical expertise needed! We handle all development work. You focus on gathering requirements and managing client relationships. We provide you with non-technical explanations to share with clients.'
              },
              {
                q: 'How do you handle client revisions and changes?',
                a: 'We include revision rounds in our packages. You collect feedback from clients and share it with us. We make the changes and deliver updated versions. You maintain control of the client relationship throughout.'
              },
              {
                q: 'Can you work with our existing design files?',
                a: 'Yes, we can work with your existing designs from Figma, Adobe XD, Sketch, or even PDFs. We also offer design services if your clients need complete design + development solutions.'
              },
              {
                q: 'What about website hosting and domains?',
                a: 'We can handle hosting setup and domain registration as part of our service. We work with premium hosting providers and can recommend the best solutions for each client\'s needs.'
              },
              {
                q: 'Do you provide training for our clients?',
                a: 'Yes, we provide client training for content management systems. We create video tutorials and documentation that you can share with your clients under your branding.'
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

      {/* Partnership Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Agency Partnership Requirements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What we look for in white label agency partners
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-indigo-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Agency Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital agency or marketing firm',
                    'Minimum 2 active clients',
                    'Professional website and branding',
                    'Client project management experience',
                    'Ability to gather client requirements',
                    'Commitment to quality client service',
                    'Willingness to learn web development process',
                    'Ethical business practices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete web development services',
                    'White label project management portal',
                    'Professional design & development',
                    'Quality assurance & testing',
                    'Hosting & deployment support',
                    'Client training materials',
                    'Agency sales resources',
                    'Dedicated project manager'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Zap className="w-4 h-4 text-yellow-300 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block bg-indigo-50 p-6 rounded-xl">
                <p className="text-indigo-700 font-semibold text-lg">
                  Ready to become a white label web development partner? Schedule a demo to see our portfolio and process.
                </p>
                <Link
                  to="/book-call"
                  className="inline-block mt-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
                >
                  Schedule Partnership Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelWebDevelopment;
