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
} from 'react-icons/fa';
import {
  MapPin,
  Search,
  Phone,
  Star,
  Award,
  Globe,
  Check,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Smartphone,
  Target,
  FileText,
  ShoppingCart,
  Palette,
  Mail,
  ClipboardList,
  MessageCircle,
} from 'lucide-react';
import { getPhysicalOffices, getPrimaryPhone, getOfficePhone, getBusinessEmail, getBusinessName, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../../services';

const SEOService = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Best SEO Services in Jaipur, Vrindavan & Nepal | Growth Service</title>
        <meta 
          name="description" 
          content="Professional SEO services in Jaipur, Vrindavan, and Nepal. Top Google rankings, organic traffic growth, and verified client outcomes. Free SEO audit available." 
        />
        <meta name="keywords" content="SEO services Jaipur, SEO company Vrindavan, SEO expert Nepal, digital marketing, rank on Google, SEO audit" />
        <link rel="canonical" href={`${getCanonicalOrigin()}/seo`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional SEO Services in Jaipur, Vrindavan & Nepal | Growth Service" />
        <meta property="og:description" content="Professional SEO services with proven ranking track record. Comprehensive organic optimization and technical audits." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${getCanonicalOrigin()}/seo`} />
        
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
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Jaipur</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Vrindavan</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Nepal</span>
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
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free SEO Audit</span>
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-300" /> 300+ Happy Clients</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-yellow-300" /> 500+ Projects</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-yellow-300" /> 3 Office Locations</span>
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
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Website speed optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Mobile-first indexing</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Site structure & XML sitemaps</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Schema markup implementation</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Core Web Vitals optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Crawlability & indexing fixes</span></li>
              </ul>
              <div className="mt-4 text-xs text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-green-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Page SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Keyword research & optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Content optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Meta tags & descriptions</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Header tag optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Internal linking strategy</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Image optimization</span></li>
              </ul>
              <div className="mt-4 text-xs text-green-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 text-3xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3">Off-Page SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Quality backlink building</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Local SEO optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Directory submissions</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Brand mention monitoring</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Guest posting strategy</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Social media signals</span></li>
              </ul>
              <div className="mt-4 text-xs text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-600 shrink-0" /><span>Google Business Profile optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-600 shrink-0" /><span>Local citation building</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-600 shrink-0" /><span>Review management</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-600 shrink-0" /><span>Local keyword targeting</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-600 shrink-0" /><span>Map pack optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-600 shrink-0" /><span>"Near Me" searches</span></li>
              </ul>
              <div className="mt-4 text-xs text-yellow-600">Specialized in Jaipur & Vrindavan</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-red-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce SEO</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Product page optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Category page SEO</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>E-commerce site structure</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Product schema markup</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Shopping feed optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Conversion optimization</span></li>
              </ul>
              <div className="mt-4 text-xs text-red-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Analytics</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Monthly performance reports</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Competitor analysis</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Rank tracking</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Traffic analysis</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>ROI tracking</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Custom dashboards</span></li>
              </ul>
              <div className="mt-4 text-xs text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Monthly Engagement Frameworks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SEO Engagement Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured organic optimization programs tailored for local brands, expanding businesses, and enterprise platforms
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Jaipur</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Vrindavan</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Nepal</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Scope */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    <FaStar />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Starter SEO</h3>
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">Foundation Tier</span>
                  <p className="text-gray-600 text-sm">Targeted local foundation for single-location businesses</p>
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
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Discuss Starter Scope
                </Link>
              </div>
            </div>

            {/* Professional Scope */}
            <div className="bg-white border-2 border-purple-400 rounded-xl p-8 shadow-lg transform md:scale-105 hover:shadow-xl transition-all hover:-translate-y-2 relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl flex items-center gap-1 text-xs font-bold">
                <FaStar className="inline" /> Growth Retainer
              </div>
              <div>
                <div className="text-center mb-6">
                  <div className="bg-purple-100 text-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    <FaCrown />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Professional SEO</h3>
                  <span className="inline-block bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">Competitive Growth</span>
                  <p className="text-gray-600 text-sm">Engineered for expanding brands and competitive regional search</p>
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
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Discuss Professional Scope
                </Link>
              </div>
            </div>

            {/* Enterprise Scope */}
            <div className="bg-white border-2 border-yellow-400 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <div className="bg-yellow-100 text-yellow-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    <FaGem />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Enterprise SEO</h3>
                  <span className="inline-block bg-yellow-50 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">High-Scale Architecture</span>
                  <p className="text-gray-600 text-sm">Full-scale optimization for large catalogs & multi-location platforms</p>
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
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Discuss Enterprise Scope
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backlink Outreach & Authority Building */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              SEO Backlink Outreach & Authority Building
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-authority editorial mentions and contextual link acquisition from verified domain networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Backlinks */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <div className="text-blue-600 text-4xl mb-2">
                    <FaLink />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Starter Outreach</h3>
                  <p className="text-gray-600 text-sm">Foundational Domain Authority</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Inclusions:</h4>
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
                      <span>Permanent placements</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Live placement report provided</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Inquire on Backlinks
                </Link>
              </div>
            </div>

            {/* Professional Backlink Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-400 hover:shadow-xl transition-all hover:-translate-y-2 relative flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <div className="text-purple-600 text-4xl mb-2">
                    <FaCrown />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Professional Outreach</h3>
                  <p className="text-gray-600 text-sm">Competitive Domain Acceleration</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Inclusions:</h4>
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
                      <span>Premium niche directories</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Detailed indexing report</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Inquire on Backlinks
                </Link>
              </div>
            </div>

            {/* Premium Backlink Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-yellow-400 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <div className="text-yellow-600 text-4xl mb-2">
                    <FaGem />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Premium Authority</h3>
                  <p className="text-gray-600 text-sm">Tier-1 Authority Publications</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Inclusions:</h4>
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
                      <span>Established aged domains</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Priority verification & reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  to="/book-call"
                  className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold transition-all w-full block"
                >
                  Inquire on Backlinks
                </Link>
              </div>
            </div>
          </div>

          {/* Quality Standards Note */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-800" />
              <span>White-Hat Quality Standard</span>
            </h4>
            <p className="text-blue-700 text-sm">
              All link acquisition follows strict search engine guidelines. Transparent placement reports and indexing verification provided for every engagement.
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
            {getPhysicalOffices().map((office) => {
              const bgGradient = office.id === 'jaipur'
                ? 'from-blue-50 to-blue-100'
                : office.id === 'vrindavan'
                ? 'from-purple-50 to-purple-100'
                : 'from-green-50 to-green-100';
              const textAccent = office.id === 'jaipur'
                ? 'text-blue-600'
                : office.id === 'vrindavan'
                ? 'text-purple-600'
                : 'text-green-600';
              return (
                <div key={office.id} className={`bg-gradient-to-br ${bgGradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative`}>
                  {office.isHeadOffice && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gray-900" />
                      <span>HEAD OFFICE</span>
                    </div>
                  )}
                  <div className="text-4xl mb-4">{office.flag}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{office.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {office.address}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaPhone className={textAccent} /> {office.phone}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaEnvelope className={textAccent} /> {office.email}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaClock className={textAccent} /> {office.timings}
                    </p>
                  </div>
                  <Link to="/contact" className={`mt-4 inline-block ${textAccent} font-semibold hover:underline`}>
                    Get Directions →
                  </Link>
                </div>
              );
            })}
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
            <Link to="/web-development" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><Code2 className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">Web Development</h3>
              <p className="text-gray-500 text-sm">Responsive Architecture</p>
            </Link>

            <Link to="/social-media" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><Smartphone className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">Social Media Management</h3>
              <p className="text-gray-500 text-sm">Creative Brand Strategy</p>
            </Link>

            <Link to="/paid-marketing" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><Target className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">Meta Ads Management</h3>
              <p className="text-gray-500 text-sm">Performance Acquisition</p>
            </Link>

            <Link to="/local-seo" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><MapPin className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">Google Business Profile</h3>
              <p className="text-gray-500 text-sm">Local 3-Pack Dominance</p>
            </Link>

            <Link to="/content-marketing" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><FileText className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">Content Writing</h3>
              <p className="text-gray-500 text-sm">SEO Content Strategy</p>
            </Link>

            <Link to="/ecommerce" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><ShoppingCart className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">E-commerce Solutions</h3>
              <p className="text-gray-500 text-sm">Custom Store Architecture</p>
            </Link>

            <Link to="/branding" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><Palette className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">Brand Strategy</h3>
              <p className="text-gray-500 text-sm">Identity & Positioning</p>
            </Link>

            <Link to="/digital-marketing" className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center group">
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform"><Mail className="w-8 h-8" /></div>
              <h3 className="font-semibold text-gray-800">Email Marketing</h3>
              <p className="text-gray-500 text-sm">Lifecycle Funnels</p>
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
                  <ClipboardList className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span>Milestone-based delivery agreements</span>
                </li>
                <li className="flex items-start">
                  <ClipboardList className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span>Structured white-hat outreach campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>Proper invoice & live report provided</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>100% White-hat SEO only</span>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span>Transparent pricing with no hidden charges</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span>Market-competitive rates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                  <span>Quality over quantity approach</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
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
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-blue-600 mx-auto mb-4 font-bold">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vivek Singh</h3>
              <p className="text-sm opacity-90 mb-3">SEO General Manager</p>
              <a href={getTelHref(getPrimaryPhone())} className="text-white hover:text-blue-200 text-sm block inline-flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getPrimaryPhone()}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-blue-200 text-sm block inline-flex items-center justify-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
            
            {/* Direct Contact Options */}
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl max-w-xl mx-auto mb-8 text-left">
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2 text-center flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Office Lines</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-blue-300 font-bold block">🇮🇳 India Office (Jaipur/Vrindavan):</span>
                  <a href={getTelHref(getPrimaryPhone())} className="text-white hover:text-blue-200 text-sm block inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{getPrimaryPhone()}</span>
                  </a>
                  <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-blue-200 text-xs block inline-flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{getBusinessEmail()}</span>
                  </a>
                </div>
                <div>
                  <span className="text-purple-300 font-bold block">🇳🇵 Nepal Office (HQ):</span>
                  <a href={getTelHref(getOfficePhone('nepal'))} className="text-white hover:text-purple-200 text-sm block inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{getOfficePhone('nepal')}</span>
                  </a>
                  <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 text-sm block inline-flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp: {getOfficePhone('nepal')}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-green-600 mx-auto mb-4 font-bold">
                GS
              </div>
              <h3 className="text-xl font-bold mb-1">{getBusinessName()}</h3>
              <p className="text-sm opacity-90 mb-3">SEO Support Team</p>
              <a href={getTelHref(getPrimaryPhone())} className="text-white hover:text-green-200 text-sm block inline-flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getPrimaryPhone()}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-green-200 text-sm block inline-flex items-center justify-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free SEO Audit</span>
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Call</span>
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
            
            <h3 className="text-xl font-bold text-gray-800 mt-6">Strategic SEO Programs for Every Business</h3>
            
            <p className="text-gray-700 leading-relaxed">
              We design SEO programs tailored to your specific competitive landscape and business model, making professional organic search strategies accessible, scalable, and measurable for brands of all sizes.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-800" />
                <span>Ready to Rank Higher on Google?</span>
              </h4>
              <p className="text-gray-600 text-sm">
              Questions before booking? 
              Call us at <a href={getTelHref(getPrimaryPhone())} className="font-bold hover:underline">{getPrimaryPhone()}</a> 
              or <a href={getTelHref(getOfficePhone('nepal'))} className="font-bold hover:underline">{getOfficePhone('nepal')}</a>
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;