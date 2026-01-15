// src/pages/digital-marketing/SEOService.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChartLine, FaMobileAlt, FaGlobe, FaShieldAlt, FaRocket, FaCheckCircle, FaStar, FaCrown, FaLink, FaPenAlt, FaLaptopCode, FaGoogle, FaFacebook, FaUsers } from 'react-icons/fa';

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

      {/* SEO Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SEO Monthly Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">₹5,000<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600">Small websites, local businesses, start-ups</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>5–10 main keywords targeting</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>On-Page SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>50–100 high-quality backlinks/month</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>3–5 pages content optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Monthly ranking report</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-white border-2 border-purple-200 rounded-xl p-8 shadow-lg transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl">
                <FaStar className="inline mr-1" /> Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard Plan</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹10,000<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600">Medium businesses, growing online presence</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>15–20 main keywords research</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Full website optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>150–200 backlinks/month</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>4–6 blog posts/month</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Technical SEO & Weekly reports</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border-2 border-yellow-100 rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Plan</h3>
                <div className="text-4xl font-bold text-yellow-600 mb-2">₹20,000<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600">Large businesses, e-commerce, high-competition</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>25–50 keywords & competitor analysis</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Complete website optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>300+ high-quality backlinks/month</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>8–12 blog posts & landing pages</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Advanced analytics & weekly reports</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backlink Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SEO Backlink Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality backlinks at competitive prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Backlink Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-blue-600 text-4xl mb-2">
                  <FaLink />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic Backlinks</h3>
                <div className="text-3xl font-bold text-blue-600">₹3<span className="text-lg text-gray-500">/backlink</span></div>
                <p className="text-gray-600 mt-2">DA/PA: 30+ • Blog Submission</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Minimum Order:</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>300 Backlinks</span>
                    <span className="font-semibold">₹1000</span>
                  </li>
                  <li className="text-sm text-gray-600">
                    Market Price: ₹2400 – ₹4500
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Order Now
                </Link>
              </div>
            </div>

            {/* Trial Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-300 relative">
              <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl">
                <FaStar className="inline mr-1" /> Best Value
              </div>
              <div className="text-center mb-6">
                <div className="text-green-600 text-4xl mb-2">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Trial Package</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">₹299</div>
                <p className="text-gray-600">DA/PA: 30+ • Most Popular</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                    <span>Profile Creation</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                    <span>Blog Submission</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                    <span>Directory Submission</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                    <span>Social Bookmarking</span>
                  </li>
                  <li className="text-xs text-gray-500 mt-2">*Trial allowed once per website only</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Try Now
                </Link>
              </div>
            </div>

            {/* Premium Backlink Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-purple-600 text-4xl mb-2">
                  <FaCrown />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Authority Links</h3>
                <div className="text-3xl font-bold text-purple-600">₹1999</div>
                <p className="text-gray-600 mt-2">DA/PA: 60-80 • Premium Quality</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-purple-500 mr-2 text-sm" />
                    <span>300 High-Quality Backlinks</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-purple-500 mr-2 text-sm" />
                    <span>3–10 years old websites</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-purple-500 mr-2 text-sm" />
                    <span>Worldwide traffic</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-purple-500 mr-2 text-sm" />
                    <span>Lifetime backlinks</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Order Premium
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Other Digital Marketing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete digital solutions for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Content Writing */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-2xl mb-3">
                <FaPenAlt />
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Writing</h3>
              <p className="text-gray-600 mb-3">Our Price: ₹300/article</p>
              <p className="text-sm text-gray-500">Market Price: ₹600 – ₹1200</p>
            </div>

            {/* Guest Posting */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-2xl mb-3">
                <FaGlobe />
              </div>
              <h3 className="text-lg font-semibold mb-2">Guest Posting</h3>
              <p className="text-gray-600 mb-3">Starting ₹249</p>
              <p className="text-sm text-gray-500">Market Price: ₹800 – ₹2000</p>
            </div>

            {/* Website Development */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-2xl mb-3">
                <FaLaptopCode />
              </div>
              <h3 className="text-lg font-semibold mb-2">Website Development</h3>
              <p className="text-gray-600 mb-3">From ₹4,999</p>
              <p className="text-sm text-gray-500">Mobile responsive & SEO friendly</p>
            </div>

            {/* Google Business Profile */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-2xl mb-3">
                <FaGoogle />
              </div>
              <h3 className="text-lg font-semibold mb-2">GMB Optimization</h3>
              <p className="text-gray-600 mb-3">₹5,555</p>
              <p className="text-sm text-gray-500">Profile setup & local ranking</p>
            </div>

            {/* Meta Ads */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-500 text-2xl mb-3">
                <FaFacebook />
              </div>
              <h3 className="text-lg font-semibold mb-2">Meta Ads Setup</h3>
              <p className="text-gray-600 mb-3">Setup Fee: ₹1,999</p>
              <p className="text-sm text-gray-500">Campaign setup & targeting</p>
            </div>

            {/* SMO */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-pink-600 text-2xl mb-3">
                <FaUsers />
              </div>
              <h3 className="text-lg font-semibold mb-2">Social Media Optimization</h3>
              <p className="text-gray-600 mb-3">Custom Pricing</p>
              <p className="text-sm text-gray-500">Profile optimization & growth</p>
            </div>

            {/* Monthly SEO */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-2xl mb-3">
                <FaChartLine />
              </div>
              <h3 className="text-lg font-semibold mb-2">Monthly SEO</h3>
              <p className="text-gray-600 mb-3">From ₹9,999/month</p>
              <p className="text-sm text-gray-500">Market Price: ₹20,000 – ₹40,000</p>
            </div>

            {/* Google Ads */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-2xl mb-3">
                <FaGoogle />
              </div>
              <h3 className="text-lg font-semibold mb-2">Google Ads</h3>
              <p className="text-gray-600 mb-3">Custom Pricing</p>
              <p className="text-sm text-gray-500">Lead generation & branding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Important Notes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">⚠</span>
                  <span>Minimum backlink order: 300 backlinks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">⚠</span>
                  <span>Minimum invoice value: ₹1000 (except trial)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✅</span>
                  <span>Proper invoice & live report provided</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✅</span>
                  <span>100% White-hat SEO only</span>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>Market-competitive rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>Quality over quantity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>Long-term SEO focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Our Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get expert guidance for your SEO and digital marketing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-blue-600 mx-auto mb-4">
                  VS
                </div>
                <h3 className="text-2xl font-bold mb-2">Vivek Singh</h3>
                <p className="text-lg opacity-90 mb-4">General Manager</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <span className="mr-3">📞</span>
                  <a href="tel:+919341436937" className="text-white hover:text-blue-200 text-lg">
                    +91 93414 36937
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-3">📧</span>
                  <a href="mailto:vivek@growthservice.com" className="text-white hover:text-blue-200 text-lg">
                    vivek@growthservice.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-purple-600 mx-auto mb-4">
                  VS
                </div>
                <h3 className="text-2xl font-bold mb-2">Vikash Singh</h3>
                <p className="text-lg opacity-90 mb-4">Sales Manager</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <span className="mr-3">📞</span>
                  <a href="tel:+9779707382481" className="text-white hover:text-purple-200 text-lg">
                    +977 970-7382481
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-3">💬</span>
                  <a href="https://wa.me/977977382481" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 text-lg">
                    WhatsApp: +977 97738 2481
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg mb-4">Ready to start your SEO journey?</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free SEO Audit
              </Link>
              <a
                href="tel:+919341436937"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call Now: +91 93414 36937
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;
