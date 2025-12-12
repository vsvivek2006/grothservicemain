// src/pages/white-label/WhiteLabelSocialMedia.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaUsers, FaChartLine, FaCalendarAlt, FaPalette, FaComment, FaRocket } from 'react-icons/fa';

const WhiteLabelSocialMedia = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 space-x-4">
              <FaFacebook className="text-4xl" />
              <FaInstagram className="text-4xl" />
              <FaLinkedin className="text-4xl" />
              <FaTiktok className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label Social Media Management
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Offer premium social media services under your brand with our complete white label solution
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
              </Link>
              <Link
                to="/whitelabel"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                View All White Label Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why White Label Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Scale Your Agency with Social Media
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Add high-demand social media services to your agency offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-pink-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">60-70% Profit Margin</h3>
              <p className="text-gray-600">
                Social media management offers 60-70% profit margins for agencies
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-orange-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Client Demand</h3>
              <p className="text-gray-600">
                90% of businesses use social media, creating massive service demand
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recurring Revenue</h3>
              <p className="text-gray-600">
                Monthly social media retainers create predictable recurring income
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White Label Social Media Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete White Label Social Media Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Full-service social media management delivered under your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-pink-600 text-3xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creation & Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Social media graphics design</li>
                <li>• Video content creation</li>
                <li>• Reels & Stories content</li>
                <li>• Carousel posts creation</li>
                <li>• Branded content templates</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Strategy & Planning</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Monthly content calendars</li>
                <li>• Platform-specific strategies</li>
                <li>• Hashtag research & strategy</li>
                <li>• Trend analysis & implementation</li>
                <li>• Campaign planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaComment />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Daily engagement & responses</li>
                <li>• Comment moderation</li>
                <li>• Direct message management</li>
                <li>• Review monitoring</li>
                <li>• Crisis management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaChartLine />
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
              <div className="text-red-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Advertising</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Facebook/Instagram ads</li>
                <li>• LinkedIn advertising</li>
                <li>• TikTok ads management</li>
                <li>• Ad creative development</li>
                <li>• Campaign optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaUsers />
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
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Social Media Platforms We Manage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage across all major social platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: 'Facebook', icon: <FaFacebook className="text-3xl" />, color: 'bg-blue-100 text-blue-800' },
              { platform: 'Instagram', icon: <FaInstagram className="text-3xl" />, color: 'bg-gradient-to-r from-purple-100 to-pink-100 text-pink-800' },
              { platform: 'LinkedIn', icon: <FaLinkedin className="text-3xl" />, color: 'bg-blue-50 text-blue-700' },
              { platform: 'Twitter/X', icon: <FaTwitter className="text-3xl" />, color: 'bg-gray-100 text-gray-800' },
              { platform: 'YouTube', icon: <FaYoutube className="text-3xl" />, color: 'bg-red-100 text-red-800' },
              { platform: 'TikTok', icon: <FaTiktok className="text-3xl" />, color: 'bg-black text-white' },
              { platform: 'Pinterest', icon: '📌', color: 'bg-red-50 text-red-700' },
              { platform: 'Threads', icon: '🧵', color: 'bg-gray-100 text-gray-800' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-6 rounded-xl text-center`}>
                <div className="flex justify-center mb-3">
                  {typeof item.icon === 'string' ? (
                    <span className="text-3xl">{item.icon}</span>
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="font-bold text-lg">{item.platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How White Label Works */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How White Label Social Media Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Client Onboarding', desc: 'Share client details & access', icon: '📋' },
              { step: 2, title: 'Strategy Development', desc: 'Create monthly content plan', icon: '🎯' },
              { step: 3, title: 'Content Creation', desc: 'Design & schedule posts', icon: '🎨' },
              { step: 4, title: 'Management & Reporting', desc: 'Engage & report results', icon: '📊' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* White Label Platform Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              White Label Platform Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage social media for your clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'White Label Dashboard', desc: 'Your branding, your clients', icon: '🏷️' },
              { feature: 'Content Calendar', desc: 'Monthly scheduling & planning', icon: '📅' },
              { feature: 'Content Library', desc: 'Branded templates & assets', icon: '📚' },
              { feature: 'Analytics Dashboard', desc: 'Performance tracking', icon: '📈' },
              { feature: 'Approval Workflows', desc: 'Client content approval', icon: '✅' },
              { feature: 'Collaboration Tools', desc: 'Team & client collaboration', icon: '👥' },
              { feature: 'Automated Reporting', desc: 'Monthly client reports', icon: '🤖' },
              { feature: '24/7 Support', desc: 'Technical & strategic support', icon: '🛟' },
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

      {/* Social Media Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Typical Social Media Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What your clients can expect from our services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '200-300%', label: 'Engagement Increase', desc: 'Within 3 months' },
              { metric: '150%', label: 'Follower Growth', desc: 'Organic growth rate' },
              { metric: '40%', label: 'Cost Reduction', desc: 'Lower acquisition cost' },
              { metric: '5x', label: 'ROI Increase', desc: 'Return on investment' },
              { metric: '24/7', label: 'Community Management', desc: 'Always-on engagement' },
              { metric: 'Daily', label: 'Content Publishing', desc: 'Consistent presence' },
              { metric: 'Monthly', label: 'Strategy Reviews', desc: 'Performance optimization' },
              { metric: '100%', label: 'White Label', desc: 'Your brand only' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="text-2xl font-bold text-pink-600 mb-2">{item.metric}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              White Label Social Media Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible monthly plans for agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Social', 
                price: '₹7,999', 
                platforms: '2 Platforms',
                features: ['12 Posts/Month', 'Basic Graphics', 'Community Management', 'Monthly Reports', 'Content Calendar', 'Email Support'],
                color: 'border-pink-200'
              },
              { 
                name: 'Professional Social', 
                price: '₹14,999', 
                platforms: '3 Platforms',
                features: ['24 Posts/Month', 'Advanced Graphics', 'Video Content', 'Engagement Strategy', 'Weekly Reports', 'Strategy Calls', 'Phone Support'],
                color: 'border-orange-300',
                popular: true
              },
              { 
                name: 'Enterprise Social', 
                price: '₹29,999', 
                platforms: '5+ Platforms',
                features: ['Daily Posts', 'Premium Content Creation', 'Influencer Outreach', 'Paid Advertising', 'Crisis Management', 'Dedicated Manager', 'Priority Support'],
                color: 'border-pink-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-4">Platforms: <span className="font-semibold">{plan.platforms}</span></p>
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
                  className="block w-full bg-gradient-to-r from-pink-600 to-orange-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start White Label Partnership
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Setup fee: ₹4,999 per client. Minimum 3-month commitment. Custom packages available.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Benefits */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits for Your Agency
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why agencies choose our white label solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Business Growth</h3>
              <ul className="space-y-4">
                {[
                  'Add high-margin social media services (60-70% profit)',
                  'Increase average client value by 2-3x',
                  'Create predictable monthly recurring revenue',
                  'Cross-sell to existing web design/SEO clients',
                  'Attract clients wanting complete digital solutions',
                  'Differentiate from single-service competitors',
                  'Build long-term client relationships',
                  'Increase agency valuation with recurring revenue'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-pink-500 mr-3">🚀</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500 to-orange-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Operational Efficiency</h3>
              <ul className="space-y-4">
                {[
                  'No need to hire social media managers',
                  'No design software or tool costs',
                  'No training or certification expenses',
                  'Focus on client acquisition & relationships',
                  'Professional results without in-house expertise',
                  'Scalable as your agency grows',
                  '24/7 content scheduling & monitoring',
                  'Expert creative team at your service'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-white mr-3">⚡</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Agency Success Story
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how agencies grow with white label social media
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-r from-pink-500 to-orange-600 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">400%</div>
                  <div className="font-semibold">Revenue Growth</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Marketing Agency Expansion</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Before White Label Social Media:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Only offering PPC and SEO services</li>
                    <li>• Clients asking for social media help</li>
                    <li>• 7 clients, ₹5L/month revenue</li>
                    <li>• Turning away social media requests</li>
                    <li>• Missing full-service opportunities</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">After White Label Social Media:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Added social media management services</li>
                    <li>• Converted 5 existing clients to social media</li>
                    <li>• Acquired 8 new social media-only clients</li>
                    <li>• ₹20L/month revenue (400% growth)</li>
                    <li>• 90% client retention rate</li>
                    <li>• Became complete digital marketing agency</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 font-semibold">"White label social media allowed us to become a full-service agency overnight. Our clients love the content we create, and they never know we have a team behind us. It's been transformational for our growth."</p>
                  <p className="text-gray-600 mt-2">- Agency Director, 18-month partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Offer Social Media Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Add high-margin social media management to your agency with complete white label support
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book White Label Demo
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
                <div className="font-semibold">📱 All Platforms</div>
                <div className="text-sm opacity-90">8+ social platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Professional Social Media Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-standard tools we use for exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tool: 'Later', color: 'bg-pink-100 text-pink-800' },
              { tool: 'Buffer', color: 'bg-blue-100 text-blue-800' },
              { tool: 'Hootsuite', color: 'bg-orange-100 text-orange-800' },
              { tool: 'Canva Pro', color: 'bg-blue-50 text-blue-700' },
              { tool: 'Adobe Creative Cloud', color: 'bg-red-100 text-red-800' },
              { tool: 'Sprout Social', color: 'bg-green-100 text-green-800' },
              { tool: 'Meta Business Suite', color: 'bg-blue-100 text-blue-800' },
              { tool: 'TweetDeck', color: 'bg-blue-100 text-blue-800' },
              { tool: 'LinkedIn Creator', color: 'bg-blue-50 text-blue-700' },
              { tool: 'TikTok Creator', color: 'bg-black text-white' },
              { tool: 'Google Analytics', color: 'bg-yellow-100 text-yellow-800' },
              { tool: 'Brandwatch', color: 'bg-purple-100 text-purple-800' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-lg text-center font-medium`}>
                {item.tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            White Label Social Media FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How do you ensure our clients never know about you?',
                a: 'We work completely behind the scenes. All communication goes through you. Content is posted from your client\'s accounts, reports are branded with your logo, and we never interact directly with your clients.'
              },
              {
                q: 'What if we don\'t have social media expertise?',
                a: 'No expertise needed! We handle everything - strategy, content creation, posting, engagement, and reporting. You focus on client relationships while we deliver professional social media management.'
              },
              {
                q: 'How quickly can you start managing a client?',
                a: 'We can onboard new clients within 48 hours. Once we receive access and brand guidelines, we can begin strategy development and content creation immediately.'
              },
              {
                q: 'Can clients approve content before it\'s posted?',
                a: 'Yes, we offer content approval workflows. Clients can review and approve content through your white label dashboard before it\'s scheduled for posting.'
              },
              {
                q: 'How do you handle negative comments or crises?',
                a: 'We have established crisis management protocols. We monitor all comments 24/7 and follow your brand\'s guidelines for handling negative situations. We escalate serious issues to you immediately.'
              },
              {
                q: 'What about platform algorithm changes?',
                a: 'Our team stays updated with all platform algorithm changes and adapts strategies accordingly. We continuously optimize content for maximum reach and engagement based on current best practices.'
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
              <div className="bg-white p-8 rounded-xl border border-pink-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Agency Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital agency or marketing firm',
                    'Minimum 2 active clients',
                    'Professional website and branding',
                    'Client management experience',
                    'Commitment to 3-month minimum',
                    'Ability to provide brand guidelines',
                    'Willingness to learn social media benefits',
                    'Ethical business practices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-pink-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500 to-orange-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete social media management',
                    'White label dashboard & reporting',
                    'Monthly content strategy & calendars',
                    'Professional content creation',
                    '24/7 community management',
                    'Performance analytics & insights',
                    'Agency training & resources',
                    'Dedicated account manager'
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
              <div className="inline-block bg-pink-50 p-6 rounded-xl">
                <p className="text-pink-700 font-semibold text-lg">
                  Ready to become a white label social media partner? Schedule a demo to see our platform in action.
                </p>
                <Link
                  to="/book-call"
                  className="inline-block mt-4 bg-gradient-to-r from-pink-600 to-orange-700 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
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

export default WhiteLabelSocialMedia;
