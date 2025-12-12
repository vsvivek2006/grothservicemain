
// src/pages/digital-marketing/SEOService.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChartLine, FaMobileAlt, FaGlobe, FaShieldAlt, FaRocket } from 'react-icons/fa';

const SEOService = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional SEO Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Drive organic traffic, increase visibility, and grow your business with our data-driven SEO strategies
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free SEO Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Strategy Call
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
              Real SEO Results We Deliver
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven SEO strategies have helped businesses achieve remarkable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200%+</div>
              <h3 className="text-xl font-semibold mb-2">Organic Traffic Growth</h3>
              <p className="text-gray-600">Average increase in organic visitors within 6 months</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <h3 className="text-xl font-semibold mb-2">Top Rankings</h3>
              <p className="text-gray-600">Keywords ranking on Google's first page</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <h3 className="text-xl font-semibold mb-2">ROI Increase</h3>
              <p className="text-gray-600">Average return on SEO investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end SEO solutions tailored to your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Website speed optimization</li>
                <li>• Mobile-first indexing</li>
                <li>• Site structure & XML sitemaps</li>
                <li>• Schema markup implementation</li>
                <li>• Core Web Vitals optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Page SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Keyword research & optimization</li>
                <li>• Content optimization</li>
                <li>• Meta tags & descriptions</li>
                <li>• Header tag optimization</li>
                <li>• Internal linking strategy</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3">Off-Page SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Quality backlink building</li>
                <li>• Local SEO optimization</li>
                <li>• Directory submissions</li>
                <li>• Brand mention monitoring</li>
                <li>• Guest posting strategy</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Google Business Profile optimization</li>
                <li>• Local citation building</li>
                <li>• Review management</li>
                <li>• Local keyword targeting</li>
                <li>• Map pack optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Product page optimization</li>
                <li>• Category page SEO</li>
                <li>• E-commerce site structure</li>
                <li>• Product schema markup</li>
                <li>• Shopping feed optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Analytics</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Monthly performance reports</li>
                <li>• Competitor analysis</li>
                <li>• Rank tracking</li>
                <li>• Traffic analysis</li>
                <li>• ROI tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our 4-Step SEO Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Audit</h3>
              <p className="text-gray-600">Comprehensive website analysis and goal setting</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
              <p className="text-gray-600">Custom SEO roadmap creation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Technical, on-page & off-page optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Monitoring & Reporting</h3>
              <p className="text-gray-600">Monthly performance tracking & optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our SEO services can transform your online presence
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/book-call"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+919341436937"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              📞 Call India: +91 93414 36937
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

      {/* Contact Info Footer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-800">Need Immediate Assistance?</h3>
              <p className="text-gray-600">Our SEO experts are ready to help you</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-center md:text-left">
                <p className="font-semibold text-gray-800">📞 India Office</p>
                <a href="tel:+919341436937" className="text-blue-600 hover:text-blue-800">
                  +91 93414 36937
                </a>
              </div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-gray-800">💬 WhatsApp Support</p>
                <a 
                  href="https://wa.me/977977382481" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800"
                >
                  +977 97738 2481
                </a>
              </div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-gray-800">📧 Email</p>
                <a href="mailto:info@growthservice.com" className="text-purple-600 hover:text-purple-800">
                  info@growthservice.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;
