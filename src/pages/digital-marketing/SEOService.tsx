import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  FaSearch, 
  FaChartLine, 
  FaMobileAlt, 
  FaGlobe, 
  FaShieldAlt, 
  FaRocket, 
  FaCheckCircle, 
  FaStar, 
  FaCrown, 
  FaLink, 
  FaPenAlt, 
  FaLaptopCode, 
  FaGoogle, 
  FaFacebook, 
  FaUsers,
  FaBuilding,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaAward,
  FaTrophy,
  FaGem,
  FaDollarSign
} from 'react-icons/fa';

const SEOService = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Best SEO Services in Jaipur, Vrindavan & Nepal | Growth Service</title>
        <meta 
          name="description" 
          content="Professional SEO services in Jaipur, Vrindavan, and Nepal. Get top rankings, organic traffic, and 300+ happy clients. Affordable SEO packages starting at ₹15,999/month. Free SEO audit available." 
        />
        <meta 
          name="keywords" 
          content="SEO services Jaipur, SEO company Vrindavan, SEO Nepal, best SEO agency, organic SEO, local SEO, backlink services, SEO packages India, digital marketing Jaipur, SEO expert Vrindavan"
        />
        <link rel="canonical" href="https://growthservice.in/seo" />
        
        <meta property="og:title" content="Best SEO Services in Jaipur, Vrindavan & Nepal - Growth Service" />
        <meta property="og:description" content="Professional SEO services with 300+ happy clients. Affordable packages starting at ₹15,999/month. Get free SEO audit today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthservice.in/seo" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "Growth Service",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "India"
              }
            },
            "offers": {
              "@type": "Offer",
              "price": "15999",
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Jaipur</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Vrindavan</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Nepal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best SEO Services in <span className="text-yellow-300">Jaipur</span>, <span className="text-cyan-300">Vrindavan</span> & <span className="text-green-300">Nepal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Drive organic traffic, dominate Google rankings, and grow your business with our 
              data-driven SEO strategies. Trusted by <strong className="text-yellow-300">300+ happy clients</strong> across India and Nepal.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                🔍 Get Free SEO Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Book Strategy Call
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-1">⭐ 300+ Happy Clients</span>
              <span className="flex items-center gap-1">🏆 500+ Projects</span>
              <span className="flex items-center gap-1">🌍 3 Office Locations</span>
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
              Our proven SEO strategies from our Jaipur, Vrindavan, and Nepal offices have helped businesses achieve remarkable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <h3 className="text-lg font-semibold mb-2">Happy Clients</h3>
              <p className="text-gray-600 text-sm">Across Jaipur, Vrindavan & Nepal</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-purple-600 mb-2">200%+</div>
              <h3 className="text-lg font-semibold mb-2">Organic Traffic Growth</h3>
              <p className="text-gray-600 text-sm">Average increase in 6 months</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <h3 className="text-lg font-semibold mb-2">Top Rankings</h3>
              <p className="text-gray-600 text-sm">Keywords on Google's 1st page</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-yellow-600 mb-2">300%</div>
              <h3 className="text-lg font-semibold mb-2">ROI Increase</h3>
              <p className="text-gray-600 text-sm">Average return on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive SEO Services Across <span className="text-blue-600">India</span> & <span className="text-green-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our offices in Jaipur, Vrindavan, and Nepal, we deliver end-to-end SEO solutions tailored to your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-blue-600 text-3xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Website speed optimization</li>
                <li>✓ Mobile-first indexing</li>
                <li>✓ Site structure & XML sitemaps</li>
                <li>✓ Schema markup implementation</li>
                <li>✓ Core Web Vitals optimization</li>
                <li>✓ Crawlability & indexing fixes</li>
              </ul>
              <div className="mt-4 text-xs text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-green-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Page SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Keyword research & optimization</li>
                <li>✓ Content optimization</li>
                <li>✓ Meta tags & descriptions</li>
                <li>✓ Header tag optimization</li>
                <li>✓ Internal linking strategy</li>
                <li>✓ Image optimization</li>
              </ul>
              <div className="mt-4 text-xs text-green-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 text-3xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3">Off-Page SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Quality backlink building</li>
                <li>✓ Local SEO optimization</li>
                <li>✓ Directory submissions</li>
                <li>✓ Brand mention monitoring</li>
                <li>✓ Guest posting strategy</li>
                <li>✓ Social media signals</li>
              </ul>
              <div className="mt-4 text-xs text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Google Business Profile optimization</li>
                <li>✓ Local citation building</li>
                <li>✓ Review management</li>
                <li>✓ Local keyword targeting</li>
                <li>✓ Map pack optimization</li>
                <li>✓ "Near Me" searches</li>
              </ul>
              <div className="mt-4 text-xs text-yellow-600">Specialized in Jaipur & Vrindavan</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-red-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Product page optimization</li>
                <li>✓ Category page SEO</li>
                <li>✓ E-commerce site structure</li>
                <li>✓ Product schema markup</li>
                <li>✓ Shopping feed optimization</li>
                <li>✓ Conversion optimization</li>
              </ul>
              <div className="mt-4 text-xs text-red-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Analytics</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Monthly performance reports</li>
                <li>✓ Competitor analysis</li>
                <li>✓ Rank tracking</li>
                <li>✓ Traffic analysis</li>
                <li>✓ ROI tracking</li>
                <li>✓ Custom dashboards</li>
              </ul>
              <div className="mt-4 text-xs text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Monthly Packages - Updated Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SEO Monthly Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect SEO plan for your business growth in Jaipur, Vrindavan, or Nepal
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">📍 Jaipur</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">📍 Vrindavan</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">📍 Nepal</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan - ₹15,999 */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <FaStar />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter SEO</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">₹15,999<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Perfect for local businesses & startups</p>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>10-15 keywords targeting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>On-Page SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>50-100 backlinks/month</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>3-5 content optimizations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monthly ranking report</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Google My Business setup</span>
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

            {/* Professional Plan - ₹26,999 */}
            <div className="bg-white border-2 border-purple-400 rounded-xl p-8 shadow-lg transform scale-105 hover:shadow-xl transition-all hover:-translate-y-2 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl flex items-center gap-1">
                <FaStar className="inline" /> Most Popular
              </div>
              <div className="text-center mb-6">
                <div className="bg-purple-100 text-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <FaCrown />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional SEO</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">₹26,999<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">Best for growing businesses & agencies</p>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>20-30 keywords + competitor analysis</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete website optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>150-200 quality backlinks/month</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>4-6 blog posts/month</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Technical SEO audit</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekly performance reports</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Local SEO for Jaipur/Vrindavan</span>
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

            {/* Enterprise Plan - ₹49,999 */}
            <div className="bg-white border-2 border-yellow-400 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="bg-yellow-100 text-yellow-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <FaGem />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise SEO</h3>
                <div className="text-4xl font-bold text-yellow-600 mb-2">₹49,999<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">For large businesses & e-commerce</p>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>50+ keywords & in-depth analysis</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full website optimization</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>300+ high-quality backlinks/month</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>8-12 blog posts & landing pages</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>International SEO</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-location SEO (Jaipur + Vrindavan + Nepal)</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backlink Packages Section - Updated */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SEO Backlink Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality backlinks at competitive prices from our SEO experts in Jaipur, Vrindavan & Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Backlink Package - ₹1,999 for 100 backlinks */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="text-blue-600 text-4xl mb-2">
                  <FaLink />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter Backlinks</h3>
                <div className="text-3xl font-bold text-blue-600">₹1,999</div>
                <p className="text-gray-600 mt-2">100 High-Quality Backlinks</p>
                <p className="text-sm text-gray-500">Just ₹20 per backlink</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>100 Do-Follow Backlinks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>DA/PA: 30+ websites</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Blog submission & directories</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lifetime backlinks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Live report provided</span>
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

            {/* Professional Backlink Package - ₹3,999 for 200 backlinks */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-400 hover:shadow-xl transition-all hover:-translate-y-2 relative">
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl flex items-center gap-1">
                <FaStar className="inline" /> Best Value
              </div>
              <div className="text-center mb-6">
                <div className="text-purple-600 text-4xl mb-2">
                  <FaCrown />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Backlinks</h3>
                <div className="text-3xl font-bold text-purple-600">₹3,999</div>
                <p className="text-gray-600 mt-2">200 High-Quality Backlinks</p>
                <p className="text-sm text-gray-500">Just ₹20 per backlink</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>200 Do-Follow Backlinks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>DA/PA: 40+ authority sites</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Guest posts & blog submissions</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Premium directories</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Detailed analytics report</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Order Now
                </Link>
              </div>
            </div>

            {/* Premium Backlink Package - ₹7,999 for 400 backlinks */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-yellow-400 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="text-yellow-600 text-4xl mb-2">
                  <FaGem />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Backlinks</h3>
                <div className="text-3xl font-bold text-yellow-600">₹7,999</div>
                <p className="text-gray-600 mt-2">400 High-Quality Backlinks</p>
                <p className="text-sm text-gray-500">Just ₹20 per backlink</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>400 Do-Follow Backlinks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>DA/PA: 60-80 premium sites</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High-authority guest posts</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>3-10 years old websites</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority support & reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>

          {/* Backlink Pricing Note */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <h4 className="font-bold text-blue-800 mb-2">💰 Best Price Guarantee</h4>
            <p className="text-blue-700 text-sm">
              All backlink packages start at just ₹20 per backlink. <br />
              Minimum order: 100 backlinks • Proper invoice & live report provided
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our SEO Offices in <span className="text-blue-600">Jaipur</span>, <span className="text-purple-600">Vrindavan</span> & <span className="text-green-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our offices for personalized SEO consultations and strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Jaipur Office */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jaipur Office</h3>
              <p className="text-gray-600 text-sm mb-3">
                138 A, Vivek Vihar, Mayapuri,<br />
                Jagatpura, Jaipur, Rajasthan 302017
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhone className="text-blue-600" /> +91 62073 00553
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-blue-600" /> jaipur@growthservice.in
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-blue-600" /> Mon-Sat: 9AM-7PM IST
                </p>
              </div>
              <Link to="/contact" className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                Get Directions →
              </Link>
            </div>

            {/* Vrindavan Office */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Vrindavan Office</h3>
              <p className="text-gray-600 text-sm mb-3">
                Radhika Sadan, Pushpa Garden,<br />
                Kailash Nagar, Vrindavan, UP 281121
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhone className="text-purple-600" /> +91 93414 36937
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-purple-600" /> info@growthservice.in
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-purple-600" /> Mon-Sat: 9AM-7PM IST
                </p>
              </div>
              <Link to="/contact" className="mt-4 inline-block text-purple-600 font-semibold hover:underline">
                Get Directions →
              </Link>
            </div>

            {/* Nepal Office */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative">
              <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-full font-bold">
                ★ HEAD OFFICE
              </div>
              <div className="text-4xl mb-4">🇳🇵</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nepal Office</h3>
              <p className="text-gray-600 text-sm mb-3">
                Near Bariyarpatti Rd,<br />
                Bariyarpatti 56500, Nepal
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhone className="text-green-600" /> +977 970-7382481
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-green-600" /> nepal@growthservice.in
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-green-600" /> Sun-Fri: 10AM-6PM NPT
                </p>
              </div>
              <Link to="/contact" className="mt-4 inline-block text-green-600 font-semibold hover:underline">
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Digital Marketing Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Other Digital Marketing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete digital solutions from our offices in Jaipur, Vrindavan & Nepal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/web-development" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-semibold text-gray-800">Web Development</h3>
              <p className="text-gray-500 text-sm">From ₹4,999</p>
            </Link>

            <Link to="/social-media" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-800">Social Media Management</h3>
              <p className="text-gray-500 text-sm">From ₹5,999/month</p>
            </Link>

            <Link to="/paid-marketing" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-800">Meta Ads Management</h3>
              <p className="text-gray-500 text-sm">Setup: ₹1,999</p>
            </Link>

            <Link to="/local-seo" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-gray-800">Google Business Profile</h3>
              <p className="text-gray-500 text-sm">₹5,555</p>
            </Link>

            <Link to="/content-marketing" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="font-semibold text-gray-800">Content Writing</h3>
              <p className="text-gray-500 text-sm">From ₹300/article</p>
            </Link>

            <Link to="/ecommerce" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="font-semibold text-gray-800">E-commerce Solutions</h3>
              <p className="text-gray-500 text-sm">Custom Pricing</p>
            </Link>

            <Link to="/branding" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold text-gray-800">Brand Strategy</h3>
              <p className="text-gray-500 text-sm">Custom Pricing</p>
            </Link>

            <Link to="/email-marketing" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-800">Email Marketing</h3>
              <p className="text-gray-500 text-sm">Custom Pricing</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Important SEO Notes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">⚠</span>
                  <span>Minimum invoice value: ₹1,000 (except trial)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">⚠</span>
                  <span>Minimum backlink order: 100 backlinks</span>
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
                  <span>Transparent pricing with no hidden charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>Market-competitive rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>Quality over quantity approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">✔</span>
                  <span>Long-term SEO focus for sustainable growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Our SEO Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get expert SEO guidance from our team in Jaipur, Vrindavan, or Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-blue-600 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vivek Singh</h3>
              <p className="text-sm opacity-90 mb-3">SEO General Manager</p>
              <a href="tel:+919341436937" className="text-white hover:text-blue-200 text-sm block">
                📞 +91 93414 36937
              </a>
              <a href="mailto:vivek@growthservice.com" className="text-white hover:text-blue-200 text-sm block">
                📧 vivek@growthservice.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all relative">
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                HEAD OFFICE
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-purple-600 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vikash Singh</h3>
              <p className="text-sm opacity-90 mb-3">Sales Manager - Nepal</p>
              <a href="tel:+9779707382481" className="text-white hover:text-purple-200 text-sm block">
                📞 +977 970-7382481
              </a>
              <a href="https://wa.me/9779707382481" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 text-sm block">
                💬 WhatsApp: +977 9707382481
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-green-600 mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold mb-1">Growth Service</h3>
              <p className="text-sm opacity-90 mb-3">SEO Support Team</p>
              <a href="tel:+916207300553" className="text-white hover:text-green-200 text-sm block">
                📞 +91 62073 00553
              </a>
              <a href="mailto:info@growthservice.in" className="text-white hover:text-green-200 text-sm block">
                📧 info@growthservice.in
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg"
              >
                🔍 Get Free SEO Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Book Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Growth Service for SEO in <span className="text-blue-600">Jaipur</span>, <span className="text-purple-600">Vrindavan</span> & <span className="text-green-600">Nepal</span>
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Growth Service is a leading SEO agency with offices in <strong>Jaipur (Rajasthan)</strong>, 
              <strong>Vrindavan (Uttar Pradesh)</strong>, and <strong>Nepal</strong>. We specialize in 
              helping businesses dominate search engine rankings and drive organic traffic through 
              data-driven SEO strategies.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6">Our SEO Expertise Across Locations</h3>
            
            <p className="text-gray-700 leading-relaxed">
              From our <strong>Jaipur office</strong>, we serve clients across Rajasthan and western India 
              with comprehensive local SEO and Google Business Profile optimization. Our 
              <strong>Vrindavan office</strong> handles clients from Uttar Pradesh, Delhi NCR, and 
              northern India with advanced on-page and off-page SEO. Our <strong>Nepal office</strong> 
              extends our reach to international markets with 24/7 support across timezones.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6">What Makes Our SEO Services Unique</h3>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>300+ Happy Clients:</strong> We've helped over 300 businesses achieve top rankings and significant organic traffic growth.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>500+ Projects:</strong> Our team has successfully completed over 500 SEO and digital marketing projects.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>3 Office Locations:</strong> We serve clients from Jaipur, Vrindavan, and Nepal with local expertise and global standards.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>White-hat SEO:</strong> We use only ethical, Google-approved techniques for sustainable, long-term rankings.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span><strong>Transparent Reporting:</strong> We provide detailed monthly reports with clear metrics and ROI analysis.</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6">Our SEO Process</h3>
            
            <p className="text-gray-700 leading-relaxed">
              Our SEO process begins with a comprehensive website audit to identify technical issues, 
              keyword opportunities, and competitive gaps. We then develop a customized SEO strategy 
              tailored to your business goals, target audience, and location-specific needs.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Whether you're a local business in <strong>Jaipur</strong>, an e-commerce store in 
              <strong>Vrindavan</strong>, or a growing company in <strong>Nepal</strong>, our SEO 
              experts deliver results through a combination of technical optimization, quality content, 
              and authority-building backlinks.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6">Affordable SEO Packages for Every Business</h3>
            
            <p className="text-gray-700 leading-relaxed">
              We offer SEO packages starting at just <strong>₹15,999/month</strong>, making professional 
              SEO accessible to businesses of all sizes. Our backlink services start at 
              <strong>₹1,999 for 100 backlinks</strong> (just ₹20 per backlink), one of the most 
              competitive rates in the industry.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
              <h4 className="font-bold text-blue-800 mb-2">📞 Ready to Rank Higher on Google?</h4>
              <p className="text-blue-700">
                Contact our SEO team in Jaipur, Vrindavan, or Nepal for a free consultation. 
                Call us at <a href="tel:+919341436937" className="font-bold hover:underline">+91 93414 36937</a> 
                or <a href="tel:+9779707382481" className="font-bold hover:underline">+977 970-7382481</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;