
// src/pages/digital-marketing/ContentMarketing.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPenAlt, FaChartLine, FaSearch, FaVideo, FaBullhorn, FaUsers, FaHashtag, FaRocket, FaFileAlt, FaNewspaper } from 'react-icons/fa';

const ContentMarketing = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaPenAlt className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Content Marketing
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Create compelling content that attracts, engages, and converts your target audience
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Content Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Content Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Marketing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Content Marketing is Essential
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Content is the foundation of modern digital marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-teal-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Content marketing costs 62% less than traditional marketing and generates 3x more leads
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-emerald-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Benefits</h3>
              <p className="text-gray-600">
                Quality content improves search rankings by 434% more indexed pages
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Builds Trust</h3>
              <p className="text-gray-600">
                70% of consumers feel closer to a company after reading custom content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Content Marketing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive content solutions for every stage of the customer journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-teal-600 text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Blog Content Creation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• SEO-optimized blog posts</li>
                <li>• Industry research articles</li>
                <li>• How-to guides & tutorials</li>
                <li>• Thought leadership pieces</li>
                <li>• Content calendar management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaVideo />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Content Production</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Explainer videos</li>
                <li>• Product demonstrations</li>
                <li>• Customer testimonials</li>
                <li>• Social media shorts</li>
                <li>• YouTube channel management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaNewspaper />
              </div>
              <h3 className="text-xl font-semibold mb-3">Copywriting Services</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Website copywriting</li>
                <li>• Email marketing campaigns</li>
                <li>• Social media captions</li>
                <li>• Sales pages & landing pages</li>
                <li>• Ad copy creation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaBullhorn />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Content audit & analysis</li>
                <li>• Buyer persona development</li>
                <li>• Content funnel mapping</li>
                <li>• Editorial calendar creation</li>
                <li>• Performance measurement</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaHashtag />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Content</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Platform-specific content</li>
                <li>• Visual content creation</li>
                <li>• Carousel posts & infographics</li>
                <li>• Story/Reels content</li>
                <li>• Content repurposing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Distribution</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Content syndication</li>
                <li>• Guest posting outreach</li>
                <li>• Email newsletter creation</li>
                <li>• Content promotion strategy</li>
                <li>• Influencer collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Types of Content We Create
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse content formats to engage your audience across multiple channels
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { type: 'Blog Posts', icon: '📝' },
              { type: 'Video Content', icon: '🎥' },
              { type: 'Infographics', icon: '📊' },
              { type: 'Case Studies', icon: '📋' },
              { type: 'E-books', icon: '📚' },
              { type: 'Whitepapers', icon: '📄' },
              { type: 'Email Newsletters', icon: '✉️' },
              { type: 'Social Posts', icon: '📱' },
              { type: 'Webinars', icon: '🎤' },
              { type: 'Podcasts', icon: '🎙️' },
              { type: 'Checklists', icon: '✅' },
              { type: 'Templates', icon: '📑' },
            ].map((content, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-teal-300 transition-colors">
                <div className="text-2xl mb-2">{content.icon}</div>
                <div className="text-gray-700 font-medium">{content.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Marketing Funnel */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Content Marketing Funnel Strategy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stage: 'Top of Funnel', goal: 'Awareness', content: 'Blog posts, Social media, Infographics', color: 'bg-teal-100 text-teal-800' },
              { stage: 'Middle of Funnel', goal: 'Consideration', content: 'Case studies, Webinars, E-books', color: 'bg-emerald-100 text-emerald-800' },
              { stage: 'Bottom of Funnel', goal: 'Conversion', content: 'Product demos, Testimonials, Comparison guides', color: 'bg-green-100 text-green-800' },
            ].map((funnel, index) => (
              <div key={index} className="text-center">
                <div className={`${funnel.color} p-6 rounded-xl mb-4`}>
                  <h3 className="text-xl font-bold mb-2">{funnel.stage}</h3>
                  <div className="text-lg font-semibold">Goal: {funnel.goal}</div>
                </div>
                <p className="text-gray-600 mb-3">Content Types:</p>
                <p className="text-gray-700 font-medium">{funnel.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Content Marketing Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What you can expect from our content marketing services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '300%', label: 'More Leads', color: 'text-teal-600' },
              { value: '6x', label: 'Higher Conversion', color: 'text-emerald-600' },
              { value: '97%', label: 'SEO Traffic Boost', color: 'text-green-600' },
              { value: '3x', label: 'Cost Savings', color: 'text-blue-600' },
              { value: '24/7', label: 'Lead Generation', color: 'text-purple-600' },
              { value: '70%', label: 'Brand Awareness', color: 'text-yellow-600' },
              { value: '5x', label: 'Website Traffic', color: 'text-red-600' },
              { value: '2x', label: 'Social Engagement', color: 'text-indigo-600' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
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
              Content Marketing Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible plans to match your content needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter', 
                price: '₹14,999', 
                content: '4 Blog Posts',
                features: ['2 Blog Posts/Month', 'Basic SEO Optimization', 'Social Media Graphics', 'Monthly Content Calendar'],
                color: 'border-teal-200'
              },
              { 
                name: 'Growth', 
                price: '₹29,999', 
                content: '8 Content Pieces',
                features: ['4 Blog Posts/Month', '1 Video Content', 'Email Newsletter', 'Content Strategy', 'Performance Analytics'],
                color: 'border-emerald-300',
                popular: true
              },
              { 
                name: 'Enterprise', 
                price: '₹59,999', 
                content: '16+ Content Pieces',
                features: ['8 Blog Posts/Month', '2 Videos/Month', 'E-book/Whitepaper', 'Guest Post Outreach', 'Content Distribution', 'Monthly Strategy Calls'],
                color: 'border-green-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-4">{plan.content}</p>
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
                  className="block w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start Content Creation
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Custom content packages available for enterprise clients
            </p>
          </div>
        </div>
      </section>

      {/* Content Strategy Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our 5-Step Content Strategy Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Research', desc: 'Audience & topic research', icon: '🔍' },
              { step: 2, title: 'Strategy', desc: 'Content plan & calendar', icon: '📋' },
              { step: 3, title: 'Creation', desc: 'Content writing & production', icon: '✍️' },
              { step: 4, title: 'Optimization', desc: 'SEO & performance tuning', icon: '⚡' },
              { step: 5, title: 'Distribution', desc: 'Promotion & sharing', icon: '📢' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-teal-100 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create content that drives traffic, generates leads, and grows your business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Content Audit
              </Link>
              <a
                href="tel:+919341436937"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call: +91 93414 36937
              </a>
              <a
                href="https://wa.me/977977382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                💬 WhatsApp Strategy Call
              </a>
            </div>
            <div className="mt-8 bg-white/10 p-4 rounded-lg inline-block">
              <p className="text-teal-100">
                <span className="font-semibold">Special Offer:</span> Get 2 free blog posts with 3-month commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Marketing Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Content Marketing Best Practices
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { tip: 'Quality Over Quantity', desc: 'One excellent piece outperforms ten average ones' },
              { tip: 'SEO Integration', desc: 'Optimize content for search from the start' },
              { tip: 'Audience Focus', desc: 'Create content that solves your audience\'s problems' },
              { tip: 'Consistency Matters', desc: 'Regular publishing builds trust and authority' },
              { tip: 'Repurpose Content', desc: 'Turn one piece into multiple formats' },
              { tip: 'Measure Performance', desc: 'Track what works and optimize accordingly' },
            ].map((practice, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{practice.tip}</h3>
                    <p className="text-gray-600">{practice.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;
