
// src/pages/digital-marketing/GoogleBusinessProfile.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaMapMarkerAlt, FaStar, FaSearch, FaPhone, FaGlobe, FaImages, FaChartBar, FaCalendarAlt, FaComment } from 'react-icons/fa';

const GoogleBusinessProfile = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaGoogle className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Google Business Profile Optimization
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Dominate local search results, attract more customers, and grow your business with expert GBP management
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free GBP Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why GBP Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Google Business Profile is Essential
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your GBP is often the first impression customers have of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Search Visibility</h3>
              <p className="text-gray-600">
                46% of all Google searches have local intent. GBP helps you appear in "Google Maps 3-Pack"
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Credibility</h3>
              <p className="text-gray-600">
                Businesses with complete GBP listings receive 7x more clicks and 2x more website visits
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Conversions</h3>
              <p className="text-gray-600">
                Customers can call, get directions, or visit your website directly from your GBP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GBP Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete GBP Management Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We handle every aspect of your Google Business Profile for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Profile Setup & Optimization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Complete GBP creation</li>
                <li>• Category & attribute optimization</li>
                <li>• Business hours & service areas</li>
                <li>• Contact information setup</li>
                <li>• Verification assistance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaImages />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual Content Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Professional photo uploads</li>
                <li>• Virtual tours setup</li>
                <li>• Logo & cover image optimization</li>
                <li>• Regular photo updates</li>
                <li>• Video content integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaComment />
              </div>
              <h3 className="text-xl font-semibold mb-3">Review Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Review monitoring & responses</li>
                <li>• Review generation strategy</li>
                <li>• Negative review management</li>
                <li>• Review analytics</li>
                <li>• Star rating improvement</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-semibold mb-3">Posts & Updates</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Weekly Google Posts</li>
                <li>• Event announcements</li>
                <li>• Product/service updates</li>
                <li>• Offer & promotion posts</li>
                <li>• Q&A management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local SEO Integration</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Local keyword optimization</li>
                <li>• Citation building</li>
                <li>• NAP consistency check</li>
                <li>• Local backlink strategy</li>
                <li>• Competitor analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Monthly performance reports</li>
                <li>• Customer action tracking</li>
                <li>• Search query analysis</li>
                <li>• Photo view analytics</li>
                <li>• Competitor benchmarking</li>
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
              Expected Results from GBP Optimization
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our clients typically achieve within 3 months
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '200%', label: 'More Profile Views', color: 'bg-blue-100 text-blue-600' },
              { value: '150%', label: 'Increase in Calls', color: 'bg-green-100 text-green-600' },
              { value: '4.8★', label: 'Average Rating', color: 'bg-yellow-100 text-yellow-600' },
              { value: '300%', label: 'Direction Requests', color: 'bg-red-100 text-red-600' },
              { value: '80%', label: 'Search Appearance', color: 'bg-purple-100 text-purple-600' },
              { value: '250%', label: 'Website Clicks', color: 'bg-indigo-100 text-indigo-600' },
              { value: '100+', label: 'Monthly Views', color: 'bg-pink-100 text-pink-600' },
              { value: '50%', label: 'Conversion Rate', color: 'bg-teal-100 text-teal-600' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className={`text-3xl font-bold mb-2 ${stat.color.split(' ')[1]}`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GBP Checklist */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              GBP Optimization Checklist
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Complete Business Information',
                'Accurate NAP (Name, Address, Phone)',
                'Proper Business Categories',
                'High-Quality Photos & Logo',
                'Business Hours (Including Holidays)',
                'Service Areas & Locations',
                'Products/Services Listed',
                'Attributes Selection',
                'Booking/Appointment Links',
                'Website & Social Links',
                'Review Response Strategy',
                'Regular Google Posts',
                'Q&A Monitoring',
                'Photo Updates (Monthly)',
                'Analytics Tracking',
                'Competitor Benchmarking'
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Industries We've Helped
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              GBP optimization works for businesses of all types and sizes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Restaurants', emoji: '🍽️' },
              { name: 'Retail Stores', emoji: '🛍️' },
              { name: 'Healthcare', emoji: '🏥' },
              { name: 'Real Estate', emoji: '🏠' },
              { name: 'Automotive', emoji: '🚗' },
              { name: 'Legal Services', emoji: '⚖️' },
              { name: 'Education', emoji: '🎓' },
              { name: 'Beauty Salons', emoji: '💇' },
              { name: 'Home Services', emoji: '🔧' },
              { name: 'Hotels', emoji: '🏨' },
              { name: 'Fitness Centers', emoji: '💪' },
              { name: 'Consulting', emoji: '💼' },
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-2xl mb-2">{industry.emoji}</div>
                <div className="text-gray-700 font-medium">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Google Business Profile Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right level of management for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic', 
                price: '₹4,999', 
                bestFor: 'New Businesses',
                features: ['Profile Setup', 'Basic Optimization', 'Monthly Updates', 'Review Monitoring'],
                color: 'border-blue-200'
              },
              { 
                name: 'Professional', 
                price: '₹9,999', 
                bestFor: 'Growing Businesses',
                features: ['Complete Optimization', 'Weekly Google Posts', 'Review Management', 'Photo Updates', 'Monthly Reports'],
                color: 'border-red-300',
                popular: true
              },
              { 
                name: 'Enterprise', 
                price: '₹19,999', 
                bestFor: 'Multiple Locations',
                features: ['Multi-Location Management', 'Daily Monitoring', 'Competitor Analysis', 'Advanced Analytics', 'Local SEO Integration', 'Priority Support'],
                color: 'border-purple-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-4">Best for: <span className="font-semibold">{plan.bestFor}</span></p>
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
                  className="block w-full bg-gradient-to-r from-blue-500 to-red-500 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Get Started Now
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 text-gray-600">
            *All packages include Google Business Profile verification assistance
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Dominate Your Local Market with Google
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let competitors get the local search advantage. Optimize your Google Business Profile today!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free GBP Audit
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
                💬 WhatsApp Consultation
              </a>
            </div>
            <div className="mt-8 bg-white/10 p-4 rounded-lg inline-block">
              <p className="text-blue-100">
                <span className="font-semibold">Limited Time Offer:</span> First month FREE with annual commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How long does it take to see results from GBP optimization?',
                a: 'Initial improvements can be seen within 7-14 days, but full optimization results typically take 1-3 months as Google processes updates and rankings stabilize.'
              },
              {
                q: 'Do you handle Google Business Profile verification?',
                a: 'Yes, we guide you through the verification process and help with postcard verification, phone verification, or instant verification when available.'
              },
              {
                q: 'Can you manage multiple locations?',
                a: 'Absolutely! We have special packages for businesses with multiple locations and can manage them all from a single dashboard.'
              },
              {
                q: 'How often do you update our Google Business Profile?',
                a: 'We update profiles weekly with new posts, photos, and information. Review responses are handled within 24 hours.'
              },
              {
                q: 'What happens if we already have a GBP listing?',
                a: 'We conduct a comprehensive audit of your existing listing, identify optimization opportunities, and implement improvements to enhance performance.'
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

export default GoogleBusinessProfile;
