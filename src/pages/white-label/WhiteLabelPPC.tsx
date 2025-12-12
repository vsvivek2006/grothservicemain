// src/pages/white-label/WhiteLabelPPC.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaLinkedin, FaChartLine, FaUsers, FaDollarSign, FaRocket, FaShieldAlt, FaSync, FaCog, FaBullseye, FaFileAlt } from 'react-icons/fa';

const WhiteLabelPPC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 space-x-4">
              <FaGoogle className="text-4xl" />
              <FaFacebook className="text-4xl" />
              <FaLinkedin className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label PPC Management
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Offer premium PPC services under your brand with our complete white label solution
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
              </Link>
              <Link
                to="/whitelabel"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                View All White Label Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why White Label PPC */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Scale Your Agency with White Label PPC
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expand your service offerings without increasing overhead or hiring costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">70% Profit Margin</h3>
              <p className="text-gray-600">
                White label PPC services typically offer 60-70% profit margins for agencies
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3x Faster Scaling</h3>
              <p className="text-gray-600">
                Scale your agency 3x faster by adding PPC services without infrastructure costs
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Client Loss</h3>
              <p className="text-gray-600">
                100% white label - your clients never know we exist. You maintain full client relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White Label PPC Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete White Label PPC Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to offer premium PPC management under your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaGoogle />
              </div>
              <h3 className="text-xl font-semibold mb-3">Google Ads Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Search Campaign Management</li>
                <li>• Display Network Campaigns</li>
                <li>• YouTube Video Ads</li>
                <li>• Shopping Campaigns</li>
                <li>• App Campaigns</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaFacebook />
              </div>
              <h3 className="text-xl font-semibold mb-3">Meta Ads Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Facebook Ads Management</li>
                <li>• Instagram Ads</li>
                <li>• WhatsApp Business Ads</li>
                <li>• Messenger Ads</li>
                <li>• Audience Network</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaLinkedin />
              </div>
              <h3 className="text-xl font-semibold mb-3">LinkedIn Ads Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• B2B Lead Generation</li>
                <li>• Sponsored Content</li>
                <li>• Message Ads</li>
                <li>• Dynamic Ads</li>
                <li>• Account-Based Marketing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy & Planning</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Campaign Strategy Development</li>
                <li>• Keyword Research & Planning</li>
                <li>• Audience Targeting Strategy</li>
                <li>• Budget Allocation Planning</li>
                <li>• Competitive Analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaCog />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation & Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Campaign Setup & Launch</li>
                <li>• Daily Bid Optimization</li>
                <li>• Ad Creative Testing</li>
                <li>• Landing Page Optimization</li>
                <li>• Conversion Tracking Setup</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reporting & Analytics</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom White Label Reports</li>
                <li>• Monthly Performance Reviews</li>
                <li>• ROI Analysis</li>
                <li>• Client Dashboard Access</li>
                <li>• Quarterly Strategy Reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How White Label Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How White Label PPC Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to scale your agency with PPC services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Onboarding', desc: 'Client details & access sharing', icon: '🤝' },
              { step: 2, title: 'Strategy', desc: 'Campaign planning & setup', icon: '📋' },
              { step: 3, title: 'Execution', desc: 'Campaign management & optimization', icon: '⚡' },
              { step: 4, title: 'Reporting', desc: 'White label reports delivery', icon: '📊' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Platform */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our White Label Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: '100% White Label', desc: 'No branding, your agency only', icon: '🏷️' },
              { feature: 'Custom Reporting', desc: 'Your logo, your branding', icon: '📄' },
              { feature: 'Direct Communication', desc: 'You maintain client contact', icon: '💬' },
              { feature: 'Agency Dashboard', desc: 'Track all client campaigns', icon: '📱' },
              { feature: 'Scalable Pricing', desc: 'Grow with volume discounts', icon: '💰' },
              { feature: '24/7 Support', desc: 'Technical & strategic support', icon: '🛟' },
              { feature: 'Training & Resources', desc: 'Agency growth materials', icon: '🎓' },
              { feature: 'Performance Guarantee', desc: 'Minimum ROI targets', icon: '✅' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.feature}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPC Platforms Covered */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              PPC Platforms We Manage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete coverage across all major advertising platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: 'Google Ads', color: 'bg-green-100 text-green-800', spend: '$10K+' },
              { platform: 'Microsoft Ads', color: 'bg-blue-100 text-blue-800', spend: '$5K+' },
              { platform: 'Facebook Ads', color: 'bg-blue-50 text-blue-700', spend: '$5K+' },
              { platform: 'Instagram Ads', color: 'bg-pink-100 text-pink-800', spend: '$3K+' },
              { platform: 'LinkedIn Ads', color: 'bg-blue-100 text-blue-800', spend: '$15K+' },
              { platform: 'Twitter Ads', color: 'bg-blue-100 text-blue-800', spend: '$3K+' },
              { platform: 'Pinterest Ads', color: 'bg-red-100 text-red-800', spend: '$2K+' },
              { platform: 'TikTok Ads', color: 'bg-black text-white', spend: '$2K+' },
            ].map((platform, index) => (
              <div key={index} className={`${platform.color} p-6 rounded-xl text-center`}>
                <h3 className="font-bold text-lg mb-2">{platform.platform}</h3>
                <p className="text-sm opacity-80">Minimum spend: {platform.spend}/month</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              White Label PPC Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible pricing for agencies of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter', 
                price: '₹14,999', 
                clients: '1-5 Clients',
                features: ['Google OR Meta Ads', 'Monthly Strategy', 'Basic Reporting', 'Weekly Optimization', 'Email Support', 'White Label Reports'],
                color: 'border-green-200'
              },
              { 
                name: 'Growth', 
                price: '₹29,999', 
                clients: '6-15 Clients',
                features: ['Google + Meta Ads', 'Weekly Strategy Calls', 'Advanced Reporting', 'Daily Optimization', 'Phone Support', 'Client Dashboard', 'Performance Guarantee'],
                color: 'border-blue-300',
                popular: true
              },
              { 
                name: 'Enterprise', 
                price: '₹59,999', 
                clients: '16+ Clients',
                features: ['All Platforms', 'Dedicated Account Manager', 'Custom Reporting', '24/7 Optimization', 'Priority Support', 'Agency Training', 'Volume Discounts', 'Strategic Planning'],
                color: 'border-green-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-4">For agencies with: <span className="font-semibold">{plan.clients}</span></p>
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
                  className="block w-full bg-gradient-to-r from-green-600 to-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start White Label Partnership
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Setup fee: ₹9,999 per client. Minimum 3-month commitment. Volume discounts available.
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
              Why agencies choose our white label PPC solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Financial Benefits</h3>
              <ul className="space-y-3">
                {[
                  'High profit margins (60-70%)',
                  'No hiring or training costs',
                  'No software or tool expenses',
                  'Scalable pricing with volume',
                  'Predictable monthly costs',
                  'No infrastructure investment',
                  'Lower client acquisition costs',
                  'Faster ROI on services'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-white mr-3">💰</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Focus on client relationships',
                  'No PPC expertise required',
                  '24/7 campaign management',
                  'Professional reporting',
                  'Performance guarantees',
                  'Strategic partnership',
                  'Industry best practices',
                  'Continuous optimization'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">⚡</span>
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
              White Label Success Story
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how agencies grow with our white label PPC solution
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">450%</div>
                  <div className="font-semibold">Revenue Growth</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Digital Marketing Agency Success</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Before White Label PPC:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Limited to SEO and social media services</li>
                    <li>• Turning away PPC client requests</li>
                    <li>• 5 clients, ₹3L/month revenue</li>
                    <li>• No PPC expertise in-house</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">After White Label PPC:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Added full PPC services under their brand</li>
                    <li>• Acquired 12 new PPC clients in 6 months</li>
                    <li>• ₹13.5L/month revenue (450% growth)</li>
                    <li>• Expanded to enterprise clients</li>
                    <li>• Become full-service digital agency</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 font-semibold">"White label PPC transformed our agency from niche to full-service. Our clients love the results, and they never know we have a partner."</p>
                  <p className="text-gray-600 mt-2">- Agency Founder, 3-year partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Scale Your Agency with PPC?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Add high-margin PPC services to your offerings with our complete white label solution
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
              </Link>
              <a
                href="tel:+919341436937"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call: +91 93414 36937
              </a>
              <a
                href="https://wa.me/977977382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 hover:bg-green-900 border-2 border-green-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                💬 WhatsApp Partnership
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🏷️ 100% White Label</div>
                <div className="text-sm opacity-90">Your brand only</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">💰 High Margins</div>
                <div className="text-sm opacity-90">60-70% profit margins</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">📈 Performance Guarantee</div>
                <div className="text-sm opacity-90">Minimum ROI targets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            White Label PPC FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Is this really 100% white label?',
                a: 'Yes, completely white label. Your clients will only see your branding. All reports, communications, and dashboards will have your logo and branding. We work completely behind the scenes.'
              },
              {
                q: 'How do you communicate with our clients?',
                a: 'We don\'t. You maintain all direct client communication. We provide you with strategy, reports, and updates that you can share with clients in your voice and branding.'
              },
              {
                q: 'What if we don\'t have PPC experience?',
                a: 'No problem! Our solution is designed for agencies without PPC expertise. We handle all technical aspects, strategy, and execution. You focus on client relationships.'
              },
              {
                q: 'How are pricing and billing handled?',
                a: 'You set your own pricing to clients. We charge you a fixed monthly fee per client. You markup our services to achieve your desired profit margin.'
              },
              {
                q: 'What platforms do you support?',
                a: 'We support all major platforms: Google Ads, Microsoft Ads, Facebook/Instagram Ads, LinkedIn Ads, Twitter Ads, Pinterest Ads, and TikTok Ads.'
              },
              {
                q: 'Is there a minimum contract?',
                a: 'We require a 3-month minimum commitment per client to ensure proper campaign setup and optimization time. No long-term agency contracts.'
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
      <section className="py-16 bg-gray-50">
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
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital marketing agency',
                    'Minimum 3 active clients',
                    'Professional website and branding',
                    'Experience in client management',
                    'Commitment to client success',
                    'Minimum ₹50K/month client ad spend',
                    'Willingness to learn and grow',
                    '3-month minimum commitment'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete PPC campaign management',
                    'White label reporting platform',
                    'Strategic planning and consultation',
                    '24/7 campaign optimization',
                    'Performance guarantees',
                    'Agency training and resources',
                    'Dedicated account manager',
                    'Scalable pricing structure'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-white mr-2">⚡</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block bg-green-50 p-6 rounded-xl">
                <p className="text-green-700 font-semibold">
                  Ready to become a white label partner? Schedule a demo to see our platform in action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelPPC;
