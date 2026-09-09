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
import {
  MapPin,
  Search,
  Phone,
  Star,
  TrendingUp,
  Globe,
  Check,
  Target,
  ShoppingCart,
  Smartphone,
  Users,
  MessageCircle,
  Video,
  Award,
  Briefcase,
  Building2,
} from 'lucide-react';
import { getPhysicalOffices, getPrimaryPhone, getOfficePhone, getBusinessEmail, getBusinessName, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../../services';

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
        <link rel="canonical" href={`${getCanonicalOrigin()}/paid-marketing`} />
        
        <meta property="og:title" content="Best Meta Ads Management in Jaipur, Vrindavan & Nepal" />
        <meta property="og:description" content="Professional Meta Ads management services with 300+ happy clients. Maximize ROI from Facebook, Instagram & WhatsApp advertising." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${getCanonicalOrigin()}/paid-marketing`} />
        
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
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Jaipur</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Vrindavan</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Nepal</span>
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
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free Ads Audit</span>
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-300" /> 300+ Happy Clients</span>
              <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4 text-yellow-300" /> ₹10Cr+ Ad Spend Managed</span>
              <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-yellow-300" /> 3 Office Locations</span>
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
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Jaipur Office</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Vrindavan Office</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Nepal Office</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-blue-600 text-3xl mb-4">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Targeting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Custom audience creation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Lookalike audience building</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Interest-based targeting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Demographic segmentation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Retargeting strategies</li>
              </ul>
              <div className="mt-4 text-xs text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3">Campaign Strategy</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Campaign objective setting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Budget optimization</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Bid strategy development</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> A/B testing setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Multi-platform campaigns</li>
              </ul>
              <div className="mt-4 text-xs text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-green-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ad Creative Development</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> High-converting ad copy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Professional ad design</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Video ad production</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Carousel ad creation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Story & Reels ads</li>
              </ul>
              <div className="mt-4 text-xs text-green-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-red-600 text-3xl mb-4">
                <FaDollarSign />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conversion Optimization</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Lead generation campaigns</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Sales conversion tracking</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Website conversion setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Pixel installation & tracking</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> ROI maximization</li>
              </ul>
              <div className="mt-4 text-xs text-red-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Daily performance monitoring</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Weekly optimization reports</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Competitor analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Conversion funnel analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /> Monthly strategy reviews</li>
              </ul>
              <div className="mt-4 text-xs text-yellow-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp Business Ads</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>WhatsApp click-to-chat ads</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Lead generation via WhatsApp</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Automated messaging setup</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>WhatsApp catalog integration</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Conversion tracking</span></li>
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
              { icon: TrendingUp, title: 'Brand Awareness', desc: 'Increase brand visibility', color: 'bg-blue-100 text-blue-700' },
              { icon: Target, title: 'Lead Generation', desc: 'Quality lead collection', color: 'bg-green-100 text-green-700' },
              { icon: ShoppingCart, title: 'Sales Conversion', desc: 'Direct product sales', color: 'bg-red-100 text-red-700' },
              { icon: Smartphone, title: 'App Install', desc: 'Mobile app downloads', color: 'bg-purple-100 text-purple-700' },
              { icon: Users, title: 'Traffic Generation', desc: 'Website visitors', color: 'bg-yellow-100 text-yellow-700' },
              { icon: MessageCircle, title: 'Message Campaigns', desc: 'WhatsApp/Messenger', color: 'bg-green-100 text-green-700' },
              { icon: Video, title: 'Video Views', desc: 'Engaging video content', color: 'bg-indigo-100 text-indigo-700' },
              { icon: Store, title: 'Store Visits', desc: 'Local business traffic', color: 'bg-pink-100 text-pink-700' },
            ].map((campaign, index) => {
              const Icon = campaign.icon;
              return (
                <div key={index} className={`${campaign.color} p-4 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1`}>
                  <div className="flex justify-center mb-2"><Icon className="w-6 h-6" /></div>
                  <h3 className="font-semibold text-sm text-gray-800">{campaign.title}</h3>
                  <p className="text-gray-600 text-xs">{campaign.desc}</p>
                </div>
              );
            })}
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
                <a href={getTelHref(getPrimaryPhone())} className="text-blue-600 hover:text-blue-800 text-sm block inline-flex items-center justify-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getPrimaryPhone()}</span>
                </a>
                <a href={getMailtoHref(getBusinessEmail())} className="text-blue-600 hover:text-blue-800 text-sm block inline-flex items-center justify-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{getBusinessEmail()}</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center relative">
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                <Star className="w-2.5 h-2.5 fill-gray-900" />
                <span>HEAD OFFICE</span>
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
                <a href={getTelHref(getOfficePhone('nepal'))} className="text-purple-600 hover:text-purple-800 text-sm block inline-flex items-center justify-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getOfficePhone('nepal')}</span>
                </a>
                <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm block inline-flex items-center justify-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {getOfficePhone('nepal')}</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold text-gray-800">{getBusinessName()} Team</h3>
              <p className="text-green-600 font-semibold">Ads Support Team</p>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Dedicated team of certified Meta Ads specialists across all locations
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">24/7 Support</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Multi-Location</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href={getTelHref(getPrimaryPhone())} className="text-green-600 hover:text-green-800 text-sm block inline-flex items-center justify-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getPrimaryPhone()}</span>
                </a>
                <a href={getMailtoHref(getBusinessEmail())} className="text-green-600 hover:text-green-800 text-sm block inline-flex items-center justify-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{getBusinessEmail()}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-2 inline-flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span>Certified Meta Ads Experts</span>
            </h4>
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
            {getPhysicalOffices().map((office) => {
              const bgGradient = office.id === 'jaipur'
                ? 'from-blue-50 to-blue-100'
                : office.id === 'vrindavan'
                ? 'from-indigo-50 to-indigo-100'
                : 'from-purple-50 to-purple-100';
              const textAccent = office.id === 'jaipur'
                ? 'text-blue-600'
                : office.id === 'vrindavan'
                ? 'text-indigo-600'
                : 'text-purple-600';
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
              <div className="text-blue-600 mb-3"><ShoppingCart className="w-8 h-8" /></div>
              <h3 className="font-semibold text-lg mb-2">E-commerce Store - Jaipur</h3>
              <p className="text-gray-600 text-sm mb-3">Achieved 8x ROAS with Facebook conversion campaigns from our Jaipur office</p>
              <div className="text-sm text-blue-600 font-semibold">Results: ₹50L+ in sales</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-green-600 mb-3"><Briefcase className="w-8 h-8" /></div>
              <h3 className="font-semibold text-lg mb-2">B2B SaaS - Vrindavan</h3>
              <p className="text-gray-600 text-sm mb-3">Generated 200+ qualified leads monthly via LinkedIn & Facebook from Vrindavan</p>
              <div className="text-sm text-green-600 font-semibold">Cost per lead: ₹350</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 mb-3"><Building2 className="w-8 h-8" /></div>
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
              <a href={getTelHref(getPrimaryPhone())} className="text-white hover:text-blue-200 text-sm block inline-flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getPrimaryPhone()}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-blue-200 text-sm block inline-flex items-center justify-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all relative">
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                <Star className="w-2.5 h-2.5 fill-gray-900" />
                <span>HEAD OFFICE</span>
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-indigo-600 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vikash Singh</h3>
              <p className="text-sm opacity-90 mb-3">Meta Ads Manager - Nepal</p>
              <a href={getTelHref(getOfficePhone('nepal'))} className="text-white hover:text-indigo-200 text-sm block inline-flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('nepal')}</span>
              </a>
              <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-200 text-sm block inline-flex items-center justify-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {getOfficePhone('nepal')}</span>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-purple-600 mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold mb-1">Growth Service</h3>
              <p className="text-sm opacity-90 mb-3">Meta Ads Support Team</p>
              <a href={getTelHref(getOfficePhone('jaipur'))} className="text-white hover:text-purple-200 text-sm block inline-flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('jaipur')}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-purple-200 text-sm block inline-flex items-center justify-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg inline-flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free Ads Audit</span>
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Call</span>
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