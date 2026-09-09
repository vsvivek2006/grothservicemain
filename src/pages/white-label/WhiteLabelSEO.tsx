// src/pages/white-label/WhiteLabelSEO.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChartLine, FaShieldAlt, FaUsers, FaRocket, FaFileAlt, FaCog, FaMobileAlt, FaGlobe, FaSync, FaCode, FaGoogle } from 'react-icons/fa';
import {
  ClipboardList,
  Search,
  Zap,
  BarChart3,
  Tag,
  Lock,
  MessageCircle,
  LayoutDashboard,
  DollarSign,
  LifeBuoy,
  GraduationCap,
  TrendingUp,
  Phone,
  Check,
  Rocket as LucideRocket,
} from 'lucide-react';
import { getPrimaryPhone } from '../../selectors';
import { getTelHref, getNepalWhatsAppUrl } from '../../services';
import { WhatsAppIcon } from '../../components/ui';

const WhiteLabelSEO = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaSearch className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label SEO Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Offer premium SEO services under your brand with our complete white label solution
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
              </Link>
              <Link
                to="/white-label"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                View All White Label Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why White Label SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Scale Your Agency with White Label SEO
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expand your service offerings without increasing overhead or hiring costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">70% Profit Margin</h3>
              <p className="text-gray-600">
                White label SEO services typically offer 65-75% profit margins for agencies
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Scaling</h3>
              <p className="text-gray-600">
                Take on enterprise clients immediately without building an in-house SEO team
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Client Risk</h3>
              <p className="text-gray-600">
                100% white label with strict NDAs. Your clients remain yours forever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete White Label SEO Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deliver every aspect of SEO under your brand with our comprehensive service suite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Complete technical audits, crawl error fixes, site speed optimization, and schema markup implementation.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Core Web Vitals optimization</li>
                <li>• Mobile-first indexing fixes</li>
                <li>• XML sitemap & robots.txt</li>
                <li>• Structured data implementation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Page SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Keyword research, content optimization, meta tags, heading structures, and internal linking strategies.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Comprehensive keyword mapping</li>
                <li>• Title & meta description optimization</li>
                <li>• Content quality improvements</li>
                <li>• Internal linking architecture</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3">Off-Page SEO & Links</h3>
              <p className="text-gray-600 mb-4 text-sm">
                High-quality backlink building through white-hat outreach, digital PR, and authority placement.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Contextual guest posting</li>
                <li>• Resource page link building</li>
                <li>• Broken link replacement</li>
                <li>• Brand mention conversion</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Google Business Profile optimization, local citation building, and review management for local clients.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• GBP setup & optimization</li>
                <li>• Local citation building (NAP)</li>
                <li>• Review generation strategy</li>
                <li>• Local pack ranking optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Specialized SEO for online stores: product optimization, category pages, and faceted navigation.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Product schema & review markup</li>
                <li>• Category page optimization</li>
                <li>• Faceted navigation handling</li>
                <li>• E-commerce platform expertise</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Large-scale SEO for complex websites, international SEO, and multi-location business frameworks.
              </p>
              <ul className="text-gray-500 space-y-1 text-xs">
                <li>• Multi-language & hreflang setup</li>
                <li>• Subdomain/subfolder strategies</li>
                <li>• Large-scale crawl optimization</li>
                <li>• Custom analytics & reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How White Label SEO Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple process for seamless agency partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Onboarding', desc: 'Client details & website access', icon: ClipboardList },
              { step: 2, title: 'Audit & Strategy', desc: 'Comprehensive SEO analysis', icon: Search },
              { step: 3, title: 'Implementation', desc: 'Monthly SEO execution', icon: Zap },
              { step: 4, title: 'Reporting', desc: 'White label reports delivery', icon: BarChart3 },
            ].map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-purple-600 mb-3 flex justify-center"><StepIcon className="w-8 h-8" /></div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* White Label Platform Features */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold center mb-12 text-gray-800">
            White Label Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'Branded Reports', desc: 'Custom reports with your logo', icon: Tag },
              { feature: 'Client Portal', desc: 'White label dashboard access', icon: Lock },
              { feature: 'Direct Communication', desc: 'You maintain client contact', icon: MessageCircle },
              { feature: 'Agency Dashboard', desc: 'Manage all client campaigns', icon: LayoutDashboard },
              { feature: 'Scalable Pricing', desc: 'Volume-based discounts', icon: DollarSign },
              { feature: '24/7 Support', desc: 'Technical & strategic support', icon: LifeBuoy },
              { feature: 'Training Resources', desc: 'Agency growth materials', icon: GraduationCap },
              { feature: 'Performance Tracking', desc: 'Real-time rank monitoring', icon: TrendingUp },
            ].map((item, index) => {
              const FeatureIcon = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="text-purple-600 mb-3"><FeatureIcon className="w-7 h-7" /></div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{item.feature}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Results & Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Typical SEO Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What you can expect from our white label SEO services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '200-300%', label: 'Organic Traffic Increase', desc: 'Within 6-9 months' },
              { metric: '50+', label: 'Top Rankings', desc: 'Keywords on page 1' },
              { metric: '3-5x', label: 'ROI Increase', desc: 'Return on investment' },
              { metric: '20-30%', label: 'Conversion Rate Boost', desc: 'Higher quality traffic' },
              { metric: '<3 months', label: 'Initial Results', desc: 'First visible improvements' },
              { metric: '24/7', label: 'Rank Monitoring', desc: 'Real-time tracking' },
              { metric: 'Monthly', label: 'Performance Reports', desc: 'Detailed analytics' },
              { metric: '100%', label: 'White Label', desc: 'Your brand only' },
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

      {/* White Label SEO Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              White Label SEO Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              White-hat organic growth, technical site audits, and search rankings executed seamlessly behind your agency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter SEO', 
                tier: 'Foundation & On-Page SEO', 
                clients: '1-5 Client Engagements',
                features: ['Core Technical SEO Audit', 'On-Page Optimization', 'White-Label Monthly Ranking Reports', 'Keyword Research & Search Intent', 'Bi-Weekly Progress Updates', 'Dedicated Email Support'],
                color: 'border-blue-200'
              },
              { 
                name: 'Professional SEO', 
                tier: 'High-Authority Organic Scale', 
                clients: '6-15 Client Engagements',
                features: ['Comprehensive Technical Architecture', 'Advanced On-Page & Schema Optimization', 'White-Hat Editorial Outreach & Backlinks', 'Local SEO & Multi-Location Maps', 'Monthly Strategy Reviews', 'Custom Client Portal Access', 'Direct Priority Support'],
                color: 'border-purple-300',
                popular: true
              },
              { 
                name: 'Enterprise SEO', 
                tier: 'Full Enterprise Search Domination', 
                clients: '16+ Client Engagements',
                features: ['Full-Scale Competitive SEO Strategy', 'High-DA Link Syndication & Digital PR', 'Enterprise E-commerce Architecture', 'Algorithmic Penalty Recovery', 'Dedicated SEO Director', 'Custom White-Label Live Dashboards', 'Dedicated SLA Turnaround'],
                color: 'border-blue-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST REQUESTED
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-blue-900 mb-2">{plan.tier}</div>
                <p className="text-gray-600 mb-4">Scale: <span className="font-semibold">{plan.clients}</span></p>
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
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Partner Inquiry
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Agency volume retainers and custom multi-account white-label agreements scoped individually
            </p>
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
              Why agencies choose our white label SEO solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Business Growth</h3>
              <ul className="space-y-4">
                {[
                  'Add high-margin SEO services (65-75% profit)',
                  'Increase average client value by 3-5x',
                  'Create predictable recurring revenue',
                  'Reduce client churn with long-term SEO',
                  'Cross-sell to existing clients',
                  'Attract higher-value enterprise clients',
                  'Differentiate from competitors',
                  'Build agency valuation'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <LucideRocket className="w-4 h-4 text-white mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Efficiency</h3>
              <ul className="space-y-4">
                {[
                  'No need to hire SEO specialists',
                  'No software or tool costs',
                  'No training or certification expenses',
                  'Focus on sales and client relationships',
                  'Professional results without expertise',
                  'Scalable as you grow',
                  '24/7 campaign monitoring',
                  'Expert support when needed'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Zap className="w-4 h-4 text-blue-500 mr-3 shrink-0" />
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
              See how agencies transform with white label SEO
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">600%</div>
                  <div className="font-semibold">Revenue Growth</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Web Design Agency Transformation</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Before White Label SEO:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Only offering web design services</li>
                    <li>• One-time project revenue only</li>
                    <li>• 8 clients, ₹4L/month revenue</li>
                    <li>• High client turnover after projects</li>
                    <li>• No recurring revenue streams</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">After White Label SEO:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Added SEO as ongoing service</li>
                    <li>• Converted 6 web design clients to SEO</li>
                    <li>• Acquired 14 new SEO-only clients</li>
                    <li>• ₹24L/month revenue (600% growth)</li>
                    <li>• 95% client retention rate</li>
                    <li>• Became full-service digital agency</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 font-semibold">"White label SEO transformed our one-time project business into a sustainable agency with recurring revenue. Our clients get amazing results, and they see us as their complete digital partner."</p>
                  <p className="text-gray-600 mt-2">- Agency Owner, 2-year partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Offer SEO Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Add high-margin, recurring SEO services to your agency with complete white label support
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
              </Link>
              <a
                href={getTelHref(getPrimaryPhone())}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
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
                <WhatsAppIcon className="w-5 h-5" />
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
                <div className="text-sm opacity-90">65-75% profit margins</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold flex items-center justify-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>Recurring Revenue</span>
                </div>
                <div className="text-sm opacity-90">Monthly retainers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Tools & Technology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Professional SEO Tools We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-standard tools for delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tool: 'Ahrefs', color: 'bg-red-100 text-red-800' },
              { tool: 'SEMrush', color: 'bg-orange-100 text-orange-800' },
              { tool: 'Google Analytics', color: 'bg-blue-100 text-blue-800' },
              { tool: 'Google Search Console', color: 'bg-green-100 text-green-800' },
              { tool: 'Screaming Frog', color: 'bg-purple-100 text-purple-800' },
              { tool: 'Moz Pro', color: 'bg-blue-50 text-blue-700' },
              { tool: 'Majestic', color: 'bg-indigo-100 text-indigo-800' },
              { tool: 'BrightLocal', color: 'bg-yellow-100 text-yellow-800' },
              { tool: 'RankMath', color: 'bg-green-50 text-green-700' },
              { tool: 'Yoast SEO', color: 'bg-red-50 text-red-700' },
              { tool: 'Google My Business', color: 'bg-blue-100 text-blue-800' },
              { tool: 'Google PageSpeed', color: 'bg-green-100 text-green-800' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-lg text-center font-medium`}>
                {item.tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            White Label SEO FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How do you ensure 100% white label delivery?',
                a: 'We never interact with your clients directly. All communication goes through you. Reports, dashboards, and deliverables are completely branded with your agency\'s logo, colors, and contact information.'
              },
              {
                q: 'What if we don\'t have SEO expertise?',
                a: 'No SEO expertise needed! We handle all technical aspects, strategy, implementation, and reporting. You focus on client relationships and sales. We provide training materials to help you sell SEO effectively.'
              },
              {
                q: 'How long before we see results for our clients?',
                a: 'Initial improvements often appear within 1-3 months (technical fixes, initial rankings). Significant traffic growth typically occurs in 4-6 months. Full results are visible in 6-12 months depending on competition.'
              },
              {
                q: 'Can we customize the SEO packages?',
                a: 'Yes, we offer custom packages for agencies with specific needs. Our standard packages can be modified, and we can create completely custom solutions for enterprise agencies.'
              },
              {
                q: 'How are reports delivered?',
                a: 'Reports are delivered monthly through your white label dashboard. You can download PDF reports with your branding, or give clients access to their own branded portal to view results.'
              },
              {
                q: 'What about client communication and strategy?',
                a: 'We provide you with strategy documents, updates, and insights that you can share with clients in your voice. You maintain all direct client communication and relationship management.'
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
              <div className="bg-white p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Agency Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital agency or marketing firm',
                    'Minimum 3 active clients',
                    'Professional website and branding',
                    'Client management experience',
                    'Commitment to 6-month minimum',
                    'Ability to manage client relationships',
                    'Willingness to learn about SEO benefits',
                    'Ethical business practices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-blue-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete SEO campaign management',
                    'White label reporting platform',
                    'Monthly strategy documents',
                    '24/7 rank monitoring',
                    'Performance tracking & analytics',
                    'Agency training materials',
                    'Dedicated account manager',
                    'Scalable pricing structure'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Zap className="w-4 h-4 text-white mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block bg-blue-50 p-6 rounded-xl">
                <p className="text-blue-700 font-semibold text-lg">
                  Ready to become a white label SEO partner? Schedule a demo to see our platform and results.
                </p>
                <Link
                  to="/book-call"
                  className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
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

export default WhiteLabelSEO;
