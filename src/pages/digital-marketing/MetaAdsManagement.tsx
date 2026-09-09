import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaChartLine, 
  FaBullseye, 
  FaDollarSign, 
  FaRocket, 
  FaLightbulb, 
  FaUsers, 
  FaMobileAlt,
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
  FaGlobe,
  FaTrophy,
  FaGem,
  FaCrown,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

const MetaAdsManagement = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Best Meta Ads Management in Jaipur, Vrindavan & Nepal | Growth Service</title>
        <meta 
          name="description" 
          content="Professional Meta Ads management services in Jaipur, Vrindavan, and Nepal. Expert Facebook, Instagram & WhatsApp advertising. Get 5x ROI with our data-driven ad strategies." 
        />
        <meta 
          name="keywords" 
          content="Meta ads management Jaipur, Facebook ads Vrindavan, Instagram advertising Nepal, Meta ads agency, social media advertising, Facebook ads management India, WhatsApp business ads, Meta Ads expert Jaipur"
        />
        <link rel="canonical" href="https://growthservice.in/paid-marketing" />
        
        <meta property="og:title" content="Best Meta Ads Management in Jaipur, Vrindavan & Nepal" />
        <meta property="og:description" content="Professional Meta Ads management services with 300+ happy clients. Maximize ROI from Facebook, Instagram & WhatsApp advertising." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthservice.in/paid-marketing" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Meta Ads Management",
            "provider": {
              "@type": "Organization",
              "name": "Growth Service",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "India"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Jaipur</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Vrindavan</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Nepal</span>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex space-x-4">
                <FaFacebook className="text-4xl" />
                <FaInstagram className="text-4xl" />
                <FaWhatsapp className="text-4xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Meta Ads Management in <span className="text-yellow-300">Jaipur</span>, <span className="text-cyan-300">Vrindavan</span> & <span className="text-green-300">Nepal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Maximize ROI from Facebook, Instagram & WhatsApp advertising with our data-driven ad strategies. 
              Trusted by <strong className="text-yellow-300">300+ happy clients</strong> across India and Nepal.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                🔍 Get Free Ads Audit
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
              <span className="flex items-center gap-1">📈 ₹10Cr+ Ad Spend Managed</span>
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
              Proven Meta Ads Results We Deliver
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We drive measurable business growth through strategic Meta advertising across Jaipur, Vrindavan, and Nepal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-600 mb-2">5x</div>
              <h3 className="text-lg font-semibold mb-2">ROI Increase</h3>
              <p className="text-gray-600 text-sm">Average return on ad spend</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600 text-sm">Lower cost per acquisition</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <h3 className="text-lg font-semibold mb-2">Conversion Boost</h3>
              <p className="text-gray-600 text-sm">Increase in lead generation</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Campaign Monitoring</h3>
              <p className="text-gray-600 text-sm">Real-time optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Meta Ads Services in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end Facebook, Instagram & WhatsApp advertising solutions from our 3 office locations
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">📍 Jaipur Office</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">📍 Vrindavan Office</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">📍 Nepal Office</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-blue-600 text-3xl mb-4">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Targeting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Custom audience creation</li>
                <li>✓ Lookalike audience building</li>
                <li>✓ Interest-based targeting</li>
                <li>✓ Demographic segmentation</li>
                <li>✓ Retargeting strategies</li>
              </ul>
              <div className="mt-4 text-xs text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3">Campaign Strategy</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Campaign objective setting</li>
                <li>✓ Budget optimization</li>
                <li>✓ Bid strategy development</li>
                <li>✓ A/B testing setup</li>
                <li>✓ Multi-platform campaigns</li>
              </ul>
              <div className="mt-4 text-xs text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-green-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ad Creative Development</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ High-converting ad copy</li>
                <li>✓ Professional ad design</li>
                <li>✓ Video ad production</li>
                <li>✓ Carousel ad creation</li>
                <li>✓ Story & Reels ads</li>
              </ul>
              <div className="mt-4 text-xs text-green-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-red-600 text-3xl mb-4">
                <FaDollarSign />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conversion Optimization</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Lead generation campaigns</li>
                <li>✓ Sales conversion tracking</li>
                <li>✓ Website conversion setup</li>
                <li>✓ Pixel installation & tracking</li>
                <li>✓ ROI maximization</li>
              </ul>
              <div className="mt-4 text-xs text-red-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Daily performance monitoring</li>
                <li>✓ Weekly optimization reports</li>
                <li>✓ Competitor analysis</li>
                <li>✓ Conversion funnel analysis</li>
                <li>✓ Monthly strategy reviews</li>
              </ul>
              <div className="mt-4 text-xs text-yellow-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp Business Ads</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ WhatsApp click-to-chat ads</li>
                <li>✓ Lead generation via WhatsApp</li>
                <li>✓ Automated messaging setup</li>
                <li>✓ WhatsApp catalog integration</li>
                <li>✓ Conversion tracking</li>
              </ul>
              <div className="mt-4 text-xs text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
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
              Specialized advertising strategies for different business goals across Jaipur, Vrindavan, and Nepal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <div key={index} className={`${campaign.color} p-4 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1`}>
                <div className="text-2xl mb-2">{campaign.icon}</div>
                <h3 className="font-semibold text-sm">{campaign.title}</h3>
                <p className="text-gray-600 text-xs">{campaign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Meta Ads Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified advertising specialists across Jaipur, Vrindavan, and Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Vivek Singh</h3>
              <p className="text-blue-600 font-semibold">Meta Ads Director</p>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Certified Meta Ads expert with 8+ years of experience managing ₹10Cr+ ad spend
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Facebook Certified</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Instagram Expert</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="tel:+919341436937" className="text-blue-600 hover:text-blue-800 text-sm block">
                  📞 +91 93414 36937
                </a>
                <a href="mailto:info@growthservice.in" className="text-blue-600 hover:text-blue-800 text-sm block">
                  📧 info@growthservice.in
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center relative">
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                ★ HEAD OFFICE
              </div>
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Vikash Singh</h3>
              <p className="text-purple-600 font-semibold">Meta Ads Manager - Nepal</p>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Lead generation specialist with expertise in WhatsApp Business advertising
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">WhatsApp Ads Expert</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Lead Gen Pro</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="tel:+9779707382481" className="text-purple-600 hover:text-purple-800 text-sm block">
                  📞 +977 970-7382481
                </a>
                <a href="https://wa.me/9779707382481" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm block">
                  💬 WhatsApp: +977 9707382481
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Growth Service Team</h3>
              <p className="text-green-600 font-semibold">Ads Support Team</p>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Dedicated team of certified Meta Ads specialists across all locations
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">24/7 Support</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Multi-Location</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="tel:+916207300553" className="text-green-600 hover:text-green-800 text-sm block">
                  📞 +91 62073 00553
                </a>
                <a href="mailto:info@growthservice.in" className="text-green-600 hover:text-green-800 text-sm block">
                  📧 info@growthservice.in
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-2">🏆 Certified Meta Ads Experts</h4>
            <p className="text-gray-600 text-sm">
              Our team has managed over ₹10 Crore in ad spend with proven ROI for 300+ clients across India and Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Meta Ads Offices in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our offices for personalized Meta Ads strategy consultations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="text-4xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Vrindavan Office</h3>
              <p className="text-gray-600 text-sm mb-3">
                Radhika Sadan, Pushpa Garden,<br />
                Kailash Nagar, Vrindavan, UP 281121
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <FaPhone className="text-indigo-600" /> +91 93414 36937
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-indigo-600" /> info@growthservice.in
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-indigo-600" /> Mon-Sat: 9AM-7PM IST
                </p>
              </div>
              <Link to="/contact" className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
                Get Directions →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative">
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
                  <FaPhone className="text-purple-600" /> +977 970-7382481
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-purple-600" /> nepal@growthservice.in
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-purple-600" /> Sun-Fri: 10AM-6PM NPT
                </p>
              </div>
              <Link to="/contact" className="mt-4 inline-block text-purple-600 font-semibold hover:underline">
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Meta Ads Management Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Strategy Session', desc: 'Goal setting & audience research from our Jaipur, Vrindavan & Nepal offices', color: 'bg-blue-500' },
              { step: 2, title: 'Campaign Setup', desc: 'Ad account creation & targeting optimization', color: 'bg-indigo-500' },
              { step: 3, title: 'Creative Development', desc: 'Ad design & copywriting for maximum engagement', color: 'bg-purple-500' },
              { step: 4, title: 'Launch & Optimize', desc: 'Campaign monitoring, scaling & ROI maximization', color: 'bg-green-500' },
            ].map((item) => (
              <div key={item.step} className="text-center hover:scale-105 transition-all">
                <div className={`${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Ads Management Frameworks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meta Ads Performance Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured campaign execution with clear deliverables for Jaipur, Vrindavan & Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Ads',
                tier: 'Foundation Scope',
                platform: '1 Platform Focus',
                features: ['Basic Campaign Setup', 'Weekly Optimization', 'Monthly Reports', 'Targeted Campaign Spend', 'Basic Audience Targeting'],
                color: 'border-blue-200',
                icon: <FaStar className="text-blue-600" />
              },
              {
                name: 'Growth Ads',
                tier: 'Scale & Retargeting Scope',
                platform: 'Multi-Platform (FB + IG)',
                features: ['Advanced Targeting', 'A/B Testing', 'Creative Development', 'Weekly Strategy Calls', 'Multi-Channel Spend Pacing', 'Retargeting Setup'],
                color: 'border-indigo-300',
                popular: true,
                icon: <FaCrown className="text-indigo-600" />
              },
              {
                name: 'Enterprise Ads',
                tier: 'Full Funnel Acquisition',
                platform: 'Omnichannel Network',
                features: ['Full Funnel Strategy', 'Custom Audience Building', 'Video Ad Production', 'Daily Monitoring', 'WhatsApp Ads', 'Enterprise Scale Budgeting', 'Dedicated Manager'],
                color: 'border-purple-300',
                icon: <FaGem className="text-purple-600" />
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div>
                  <div className="text-3xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-700 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 text-xs mb-6 font-medium">{plan.platform}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700 text-sm">
                        <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Discuss Campaign Scope
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              *Minimum ad budget requirements apply • Available in Jaipur, Vrindavan & Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've transformed businesses with Meta advertising across Jaipur, Vrindavan, and Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-blue-600 text-2xl mb-3">🏪</div>
              <h3 className="font-semibold text-lg mb-2">E-commerce Store - Jaipur</h3>
              <p className="text-gray-600 text-sm mb-3">Achieved 8x ROAS with Facebook conversion campaigns from our Jaipur office</p>
              <div className="text-sm text-blue-600 font-semibold">Results: ₹50L+ in sales</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-green-600 text-2xl mb-3">💼</div>
              <h3 className="font-semibold text-lg mb-2">B2B SaaS - Vrindavan</h3>
              <p className="text-gray-600 text-sm mb-3">Generated 200+ qualified leads monthly via LinkedIn & Facebook from Vrindavan</p>
              <div className="text-sm text-green-600 font-semibold">Cost per lead: ₹350</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 text-2xl mb-3">🏥</div>
              <h3 className="font-semibold text-lg mb-2">Healthcare - Nepal</h3>
              <p className="text-gray-600 text-sm mb-3">Increased appointments by 300% with local targeting from Nepal office</p>
              <div className="text-sm text-purple-600 font-semibold">50+ new patients monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Meta Ads Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Meta Advertising for Your Business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock the power of Facebook, Instagram & WhatsApp to grow your business across Jaipur, Vrindavan, and Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Massive Reach', desc: 'Reach 2.8+ billion monthly active users across Facebook, Instagram & WhatsApp' },
              { title: 'Precise Targeting', desc: 'Target audiences by location, interests, behavior, and demographics with laser precision' },
              { title: 'Cost-Effective', desc: 'Tailored ad spend to your business goals and scale based on proven performance' },
              { title: 'Measurable Results', desc: 'Track every rupee spent with detailed analytics and conversion tracking' },
              { title: 'Multiple Ad Formats', desc: 'Choose from images, videos, carousels, stories, and WhatsApp messages' },
              { title: 'Retargeting Power', desc: 'Re-engage website visitors and previous customers for higher conversions' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Our Meta Ads Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get expert Meta Ads guidance from our team in Jaipur, Vrindavan, or Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-blue-600 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vivek Singh</h3>
              <p className="text-sm opacity-90 mb-3">Meta Ads Director</p>
              <a href="tel:+919341436937" className="text-white hover:text-blue-200 text-sm block">
                📞 +91 93414 36937
              </a>
              <a href="mailto:info@growthservice.in" className="text-white hover:text-blue-200 text-sm block">
                📧 info@growthservice.in
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all relative">
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                ★ HEAD OFFICE
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-indigo-600 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vikash Singh</h3>
              <p className="text-sm opacity-90 mb-3">Meta Ads Manager - Nepal</p>
              <a href="tel:+9779707382481" className="text-white hover:text-indigo-200 text-sm block">
                📞 +977 970-7382481
              </a>
              <a href="https://wa.me/9779707382481" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 text-sm block">
                💬 WhatsApp: +977 9707382481
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-purple-600 mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold mb-1">Growth Service</h3>
              <p className="text-sm opacity-90 mb-3">Ads Support Team</p>
              <a href="tel:+916207300553" className="text-white hover:text-purple-200 text-sm block">
                📞 +91 62073 00553
              </a>
              <a href="mailto:info@growthservice.in" className="text-white hover:text-purple-200 text-sm block">
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
                🔍 Get Free Ads Audit
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

      {/* Internal Linking */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm mb-3">Explore More Services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/seo" className="text-blue-600 hover:text-blue-800 text-sm font-medium">SEO Services</Link>
            <span className="text-gray-300">|</span>
            <Link to="/web-development" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Web Development</Link>
            <span className="text-gray-300">|</span>
            <Link to="/social-media" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Social Media Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/content-marketing" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Content Marketing</Link>
            <span className="text-gray-300">|</span>
            <Link to="/local-seo" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Google Business Profile</Link>
            <span className="text-gray-300">|</span>
            <Link to="/ecommerce" className="text-blue-600 hover:text-blue-800 text-sm font-medium">E-commerce Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaAdsManagement;