// src/pages/digital-marketing/MetaAdsManagement.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaChartLine, FaBullseye, FaDollarSign, FaRocket, FaLightbulb, FaUsers, FaMobileAlt } from 'react-icons/fa';

const MetaAdsManagement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-4">
                <FaFacebook className="text-4xl" />
                <FaInstagram className="text-4xl" />
                <FaWhatsapp className="text-4xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meta Ads Management
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Maximize ROI from Facebook, Instagram & WhatsApp advertising with our data-driven ad strategies
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Ads Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Ads Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Proven Meta Ads Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We drive measurable business growth through strategic Meta advertising
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5x</div>
              <h3 className="text-xl font-semibold mb-2">ROI Increase</h3>
              <p className="text-gray-600">Average return on ad spend</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">Lower cost per acquisition</p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <h3 className="text-xl font-semibold mb-2">Conversion Boost</h3>
              <p className="text-gray-600">Increase in lead generation</p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Campaign Monitoring</h3>
              <p className="text-gray-600">Real-time optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Meta Ads Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end Facebook & Instagram advertising solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Targeting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom audience creation</li>
                <li>• Lookalike audience building</li>
                <li>• Interest-based targeting</li>
                <li>• Demographic segmentation</li>
                <li>• Retargeting strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3">Campaign Strategy</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Campaign objective setting</li>
                <li>• Budget optimization</li>
                <li>• Bid strategy development</li>
                <li>• A/B testing setup</li>
                <li>• Multi-platform campaigns</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ad Creative Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• High-converting ad copy</li>
                <li>• Professional ad design</li>
                <li>• Video ad production</li>
                <li>• Carousel ad creation</li>
                <li>• Story & Reels ads</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaDollarSign />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conversion Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Lead generation campaigns</li>
                <li>• Sales conversion tracking</li>
                <li>• Website conversion setup</li>
                <li>• Pixel installation & tracking</li>
                <li>• ROI maximization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Daily performance monitoring</li>
                <li>• Weekly optimization reports</li>
                <li>• Competitor analysis</li>
                <li>• Conversion funnel analysis</li>
                <li>• Monthly strategy reviews</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp Business Ads</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• WhatsApp click-to-chat ads</li>
                <li>• Lead generation via WhatsApp</li>
                <li>• Automated messaging setup</li>
                <li>• WhatsApp catalog integration</li>
                <li>• Conversion tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meta Campaign Types We Manage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized advertising strategies for different business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💰', title: 'Brand Awareness', desc: 'Increase brand visibility', color: 'bg-blue-100' },
              { icon: '🎯', title: 'Lead Generation', desc: 'Quality lead collection', color: 'bg-green-100' },
              { icon: '🛒', title: 'Sales Conversion', desc: 'Direct product sales', color: 'bg-red-100' },
              { icon: '📱', title: 'App Install', desc: 'Mobile app downloads', color: 'bg-purple-100' },
              { icon: '👥', title: 'Traffic Generation', desc: 'Website visitors', color: 'bg-yellow-100' },
              { icon: '💬', title: 'Message Campaigns', desc: 'WhatsApp/Messenger', color: 'bg-green-100' },
              { icon: '📺', title: 'Video Views', desc: 'Engaging video content', color: 'bg-indigo-100' },
              { icon: '🏪', title: 'Store Visits', desc: 'Local business traffic', color: 'bg-pink-100' },
            ].map((campaign, index) => (
              <div key={index} className={`${campaign.color} p-6 rounded-xl`}>
                <div className="text-3xl mb-3">{campaign.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{campaign.title}</h3>
                <p className="text-gray-600">{campaign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Meta Ads Management Process
          </h2>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: 1, title: 'Strategy Session', desc: 'Goal setting & audience research', color: 'bg-blue-500' },
                { step: 2, title: 'Campaign Setup', desc: 'Ad account creation & targeting', color: 'bg-indigo-500' },
                { step: 3, title: 'Creative Development', desc: 'Ad design & copywriting', color: 'bg-purple-500' },
                { step: 4, title: 'Launch & Optimize', desc: 'Campaign monitoring & scaling', color: 'bg-green-500' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className={`${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meta Ads Management Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with clear deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₹19,999',
                platform: '1 Platform',
                features: ['Basic Campaign Setup', 'Weekly Optimization', 'Monthly Reports', 'Ad Budget: ₹10,000+'],
                color: 'border-blue-200'
              },
              {
                name: 'Growth',
                price: '₹34,999',
                platform: '2 Platforms',
                features: ['Advanced Targeting', 'A/B Testing', 'Creative Development', 'Weekly Strategy Calls', 'Ad Budget: ₹25,000+'],
                color: 'border-indigo-300',
                popular: true
              },
              {
                name: 'Enterprise',
                price: '₹59,999',
                platform: '3+ Platforms',
                features: ['Full Funnel Strategy', 'Custom Audience Building', 'Video Ad Production', 'Daily Monitoring', 'WhatsApp Ads', 'Ad Budget: ₹50,000+'],
                color: 'border-purple-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-6">{plan.platform}</p>
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
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start Advertising
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Scale Your Business with Meta Ads?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get expert management for your Facebook, Instagram & WhatsApp advertising
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/book-call"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              Book Free Strategy Call
            </Link>
            <a
              href="tel:+919341436937"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              📞 Call: +91 93414 36937
            </a>
            <a
              href="https://wa.me/977977382481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              💬 WhatsApp Ads Expert
            </a>
          </div>
          <p className="mt-8 text-blue-200">
            *Minimum ad budget requirements apply for management services
          </p>
        </div>
      </section>

      {/* Client Success */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've transformed businesses with Meta advertising
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-2xl mb-3">🏪</div>
              <h3 className="font-semibold text-lg mb-2">E-commerce Store</h3>
              <p className="text-gray-600 mb-3">Achieved 8x ROAS with Facebook conversion campaigns</p>
              <div className="text-sm text-blue-600 font-semibold">Results: ₹50L+ in sales</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-green-600 text-2xl mb-3">💼</div>
              <h3 className="font-semibold text-lg mb-2">B2B SaaS Company</h3>
              <p className="text-gray-600 mb-3">Generated 200+ qualified leads monthly via LinkedIn & Facebook</p>
              <div className="text-sm text-green-600 font-semibold">Cost per lead: ₹350</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-purple-600 text-2xl mb-3">🏥</div>
              <h3 className="font-semibold text-lg mb-2">Healthcare Clinic</h3>
              <p className="text-gray-600 mb-3">Increased appointments by 300% with local targeting</p>
              <div className="text-sm text-purple-600 font-semibold">50+ new patients monthly</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaAdsManagement;
