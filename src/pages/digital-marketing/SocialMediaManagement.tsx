
// src/pages/digital-marketing/SocialMediaManagement.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaChartBar, FaUsers, FaBullhorn, FaVideo, FaHashtag } from 'react-icons/fa';

const SocialMediaManagement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Social Media Management
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Build your brand, engage your audience, and drive growth with our expert social media strategies
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Social Media Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We Master Every Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive social media management across all major platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <FaFacebook className="text-blue-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Facebook</h3>
              <p className="text-sm text-gray-600 mt-1">Page Management</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center">
              <FaInstagram className="text-pink-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Instagram</h3>
              <p className="text-sm text-gray-600 mt-1">Content & Reels</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <FaTwitter className="text-blue-400 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Twitter/X</h3>
              <p className="text-sm text-gray-600 mt-1">Engagement & Growth</p>
            </div>
            
            <div className="bg-blue-100 p-6 rounded-xl text-center">
              <FaLinkedin className="text-blue-700 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">LinkedIn</h3>
              <p className="text-sm text-gray-600 mt-1">B2B Networking</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <FaYoutube className="text-red-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">YouTube</h3>
              <p className="text-sm text-gray-600 mt-1">Video Strategy</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl text-center">
              <FaHashtag className="text-purple-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Trends</h3>
              <p className="text-sm text-gray-600 mt-1">Hashtag & Trend Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Social Media Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end social media solutions for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-pink-600 text-3xl mb-4">
                <FaBullhorn />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Strategy & Creation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom content calendar</li>
                <li>• Graphic design & creatives</li>
                <li>• Video content & Reels</li>
                <li>• Copywriting & captions</li>
                <li>• Brand voice development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Daily engagement & responses</li>
                <li>• Comment moderation</li>
                <li>• Direct message management</li>
                <li>• Crisis management</li>
                <li>• Brand reputation monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Monthly performance reports</li>
                <li>• Competitor analysis</li>
                <li>• ROI tracking</li>
                <li>• Audience insights</li>
                <li>• Growth recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaVideo />
              </div>
              <h3 className="text-xl font-semibold mb-3">Paid Social Advertising</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Facebook/Instagram ads</li>
                <li>• LinkedIn advertising</li>
                <li>• Audience targeting</li>
                <li>• Ad creative development</li>
                <li>• Conversion tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaHashtag />
              </div>
              <h3 className="text-xl font-semibold mb-3">Influencer Marketing</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Influencer identification</li>
                <li>• Campaign management</li>
                <li>• Content collaboration</li>
                <li>• Performance tracking</li>
                <li>• Relationship management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaInstagram />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Growth</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Follower growth strategy</li>
                <li>• Engagement optimization</li>
                <li>• Profile optimization</li>
                <li>• Hashtag strategy</li>
                <li>• Trend implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Measurable Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real outcomes from our social media management services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-pink-600 mb-2">300%</div>
              <h3 className="text-lg font-semibold mb-2">Engagement Increase</h3>
              <p className="text-gray-600">Average boost in social interactions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">150%</div>
              <h3 className="text-lg font-semibold mb-2">Follower Growth</h3>
              <p className="text-gray-600">Organic audience expansion</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">40%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">Lower customer acquisition cost</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">250%</div>
              <h3 className="text-lg font-semibold mb-2">ROI Increase</h3>
              <p className="text-gray-600">Return on social media investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our 5-Step Social Media Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Audit & Analysis', desc: 'Current profile analysis', color: 'bg-pink-100 text-pink-600' },
              { step: 2, title: 'Strategy Planning', desc: 'Custom content calendar', color: 'bg-orange-100 text-orange-600' },
              { step: 3, title: 'Content Creation', desc: 'Design & copywriting', color: 'bg-yellow-100 text-yellow-600' },
              { step: 4, title: 'Implementation', desc: 'Posting & engagement', color: 'bg-green-100 text-green-600' },
              { step: 5, title: 'Optimization', desc: 'Analytics & improvements', color: 'bg-blue-100 text-blue-600' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create a social media strategy that drives real business results
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/book-call"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              Start Your Social Media Journey
            </Link>
            <a
              href="tel:+919341436937"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              📞 Call: +91 93414 36937
            </a>
            <a
              href="https://wa.me/977977382481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              💬 WhatsApp: +977 97738 2481
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Social Media Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '₹15,999', color: 'bg-blue-50', features: ['2 Platforms', '12 Posts/Month', 'Basic Analytics', 'Community Management'] },
              { name: 'Growth', price: '₹29,999', color: 'bg-pink-50', features: ['3 Platforms', '24 Posts/Month', 'Advanced Analytics', 'Content Creation', 'Ad Management'] },
              { name: 'Enterprise', price: '₹49,999', color: 'bg-purple-50', features: ['5+ Platforms', 'Daily Posts', 'Full Analytics', 'Influencer Collabs', 'Strategy Planning', 'Monthly Reports'] },
            ].map((plan) => (
              <div key={plan.name} className={`${plan.color} p-8 rounded-xl border border-gray-200`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;
