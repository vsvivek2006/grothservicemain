import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  FaFilter, 
  FaBullseye, 
  FaUsers, 
  FaMagnet, 
  FaChartLine, 
  FaRocket, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaDatabase, 
  FaHandshake,
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
  FaGlobe,
  FaTrophy,
  FaGem,
  FaCrown,
  FaDollarSign,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
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
  CheckCircle2,
  Mail,
  MessageCircle,
  Trophy,
  Award,
  Users as LucideUsers,
} from 'lucide-react';
import { getPhysicalOffices, getPrimaryPhone, getOfficePhone, getBusinessEmail, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../../services';

const LeadGeneration = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Best Lead Generation Services in Jaipur, Vrindavan & Nepal | Growth Service</title>
        <meta 
          name="description" 
          content="Professional lead generation services in Jaipur, Vrindavan, and Nepal. Get high-quality B2B leads, inbound marketing, and sales pipeline growth. 300+ happy clients." 
        />
        <meta 
          name="keywords" 
          content="lead generation Jaipur, B2B lead generation Vrindavan, lead generation Nepal, sales pipeline growth, inbound marketing, LinkedIn lead generation, cold email outreach, lead generation agency India"
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/lead-generation`} />
        
        <meta property="og:title" content="Best Lead Generation Services in Jaipur, Vrindavan & Nepal" />
        <meta property="og:description" content="Professional lead generation services with 300+ happy clients. Fuel your sales pipeline with qualified leads that convert." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${getCanonicalOrigin()}/lead-generation`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lead Generation Services",
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
      <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Jaipur</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Vrindavan</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Nepal</span>
            </div>
            <div className="flex justify-center mb-6">
              <FaMagnet className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Lead Generation Services in <span className="text-yellow-300">Jaipur</span>, <span className="text-cyan-300">Vrindavan</span> & <span className="text-green-300">Nepal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Fuel your sales pipeline with qualified leads that convert into loyal customers. 
              Trusted by <strong className="text-yellow-300">300+ happy clients</strong> across India and Nepal.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free Lead Audit</span>
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Session</span>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-300" /> 300+ Happy Clients</span>
              <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-yellow-300" /> 10,000+ Leads Generated</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-yellow-300" /> 3 Office Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lead Gen Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stop Chasing, Start Attracting Quality Leads
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help you build a predictable engine for business growth across Jaipur, Vrindavan, and Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-all rounded-xl hover:-translate-y-2">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictable Growth</h3>
              <p className="text-gray-600">
                Consistent flow of qualified prospects to stabilize and grow your revenue. Our lead generation system delivers 50+ qualified leads monthly.
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-lg transition-all rounded-xl hover:-translate-y-2">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBullseye className="text-cyan-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Targeted Approach</h3>
              <p className="text-gray-600">
                Reach decision-makers who are actively looking for your solution. Our targeting strategies cover Jaipur, Vrindavan, Nepal, and global markets.
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-lg transition-all rounded-xl hover:-translate-y-2">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Higher Conversion</h3>
              <p className="text-gray-600">
                Better quality leads mean higher close rates and shorter sales cycles. Our clients see 40%+ conversion rates on qualified leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Lead Gen Services in <span className="text-blue-600">Jaipur</span>, <span className="text-cyan-600">Vrindavan</span> & <span className="text-teal-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multi-channel strategies to capture and nurture potential clients from our 3 office locations
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Jaipur Office</span>
              <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Vrindavan Office</span>
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Nepal Office</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-blue-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3">B2B Lead Generation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>LinkedIn outreach automation</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Decision-maker targeting</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Account-based marketing (ABM)</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Cold email campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 shrink-0" /><span>Webinar funnels</span></li>
              </ul>
              <div className="mt-4 text-xs text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-cyan-600 text-3xl mb-4">
                <FaFilter />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inbound Marketing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600 shrink-0" /><span>Content lead magnets</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600 shrink-0" /><span>SEO-driven traffic</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600 shrink-0" /><span>Landing page optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600 shrink-0" /><span>Chatbot implementation</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-600 shrink-0" /><span>Newsletter growth</span></li>
              </ul>
              <div className="mt-4 text-xs text-cyan-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Enrichment</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Data verification</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Contact info scraping</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Intent data analysis</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>CRM integration</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0" /><span>Prospect segmentation</span></li>
              </ul>
              <div className="mt-4 text-xs text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-green-600 text-3xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Cold email campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Email automation sequences</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>A/B testing & optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Email list building</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /><span>Lead nurturing workflows</span></li>
              </ul>
              <div className="mt-4 text-xs text-green-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 text-3xl mb-4">
                <FaLinkedin />
              </div>
              <h3 className="text-xl font-semibold mb-3">LinkedIn Lead Generation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>LinkedIn profile optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Connection requests automation</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>InMail campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>Sales Navigator targeting</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-600 shrink-0" /><span>LinkedIn advertising</span></li>
              </ul>
              <div className="mt-4 text-xs text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-red-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Nurturing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Automated email sequences</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Retargeting campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Personalization strategies</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Sales enablement content</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600 shrink-0" /><span>Lead scoring & qualification</span></li>
              </ul>
              <div className="mt-4 text-xs text-red-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Lead Generation Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified lead generation specialists across Jaipur, Vrindavan, and Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Vivek Singh</h3>
              <p className="text-blue-600 font-semibold">Lead Gen Director</p>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Lead generation expert with 7+ years of experience generating 10,000+ leads for B2B companies
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">LinkedIn Expert</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Email Marketing</span>
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
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Vikash Singh</h3>
              <p className="text-cyan-600 font-semibold">Lead Gen Manager - Nepal</p>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Lead generation specialist with expertise in LinkedIn outreach and cold email campaigns
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">LinkedIn Pro</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Cold Email</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href={getTelHref(getOfficePhone('nepal'))} className="text-cyan-600 hover:text-cyan-800 text-sm block inline-flex items-center justify-center gap-1">
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
              <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Growth Service Team</h3>
              <p className="text-teal-600 font-semibold">Lead Gen Support Team</p>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                Dedicated team of lead generation specialists across all locations
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">24/7 Support</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Multi-Channel</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href={getTelHref(getPrimaryPhone())} className="text-teal-600 hover:text-teal-800 text-sm block inline-flex items-center justify-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getPrimaryPhone()}</span>
                </a>
                <a href={getMailtoHref(getBusinessEmail())} className="text-teal-600 hover:text-teal-800 text-sm block inline-flex items-center justify-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{getBusinessEmail()}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span>Lead Generation Results</span>
            </h4>
            <p className="text-gray-600 text-sm">
              Our team has generated 10,000+ qualified leads for 300+ clients across India and Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Lead Generation Offices in <span className="text-blue-600">Jaipur</span>, <span className="text-cyan-600">Vrindavan</span> & <span className="text-teal-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our offices for personalized lead generation strategy consultations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getPhysicalOffices().map((office) => {
              const bgGradient = office.id === 'jaipur'
                ? 'from-blue-50 to-blue-100'
                : office.id === 'vrindavan'
                ? 'from-cyan-50 to-cyan-100'
                : 'from-teal-50 to-teal-100';
              const textAccent = office.id === 'jaipur'
                ? 'text-blue-600'
                : office.id === 'vrindavan'
                ? 'text-cyan-600'
                : 'text-teal-600';
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

      {/* Lead Generation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Lead Generation Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Research & Targeting', desc: 'Identify ideal prospects and decision-makers across Jaipur, Vrindavan, and Nepal', color: 'bg-blue-500' },
              { step: 2, title: 'Outreach Strategy', desc: 'Multi-channel outreach including LinkedIn, email, and social media', color: 'bg-cyan-500' },
              { step: 3, title: 'Engagement & Nurturing', desc: 'Personalized engagement and lead nurturing sequences', color: 'bg-teal-500' },
              { step: 4, title: 'Conversion & Handoff', desc: 'Qualified lead delivery with complete information for sales team', color: 'bg-indigo-500' },
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

      {/* Lead Generation Channels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Multi-Channel Lead Generation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage multiple channels to capture high-quality leads from Jaipur, Vrindavan, Nepal, and global markets
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { channel: 'LinkedIn', icon: FaLinkedin, color: 'bg-blue-100 text-blue-700' },
              { channel: 'Email', icon: Mail, color: 'bg-red-100 text-red-700' },
              { channel: 'Facebook', icon: FaFacebook, color: 'bg-blue-100 text-blue-700' },
              { channel: 'Instagram', icon: FaInstagram, color: 'bg-pink-100 text-pink-700' },
              { channel: 'Website', icon: Globe, color: 'bg-purple-100 text-purple-700' },
              { channel: 'WhatsApp', icon: FaWhatsapp, color: 'bg-green-100 text-green-700' },
              { channel: 'SEO', icon: Search, color: 'bg-yellow-100 text-yellow-700' },
              { channel: 'Referrals', icon: LucideUsers, color: 'bg-indigo-100 text-indigo-700' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`${item.color} p-4 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1`}>
                  <div className="text-2xl mb-2 flex justify-center"><Icon className="w-6 h-6" /></div>
                  <div className="font-semibold text-sm">{item.channel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Lead Gen Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Growth Service for Lead Generation?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver qualified leads that fuel your sales pipeline and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Quality Over Quantity', desc: 'We focus on delivering qualified leads that are ready to convert, not just volume' },
              { title: 'Multi-Channel Approach', desc: 'We leverage LinkedIn, email, social media, and more to capture leads from all channels' },
              { title: 'Data-Driven Strategy', desc: 'Our strategies are backed by data and analytics for maximum ROI' },
              { title: 'Dedicated Team', desc: 'You get a dedicated lead generation team across Jaipur, Vrindavan, and Nepal' },
              { title: 'Transparent Reporting', desc: 'Weekly reports with clear metrics and lead quality scores' },
              { title: 'Continuous Optimization', desc: 'We continuously refine strategies for better results and higher conversion' },
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

      {/* Pricing Section */}
      {/* Lead Generation Frameworks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Lead Generation Engagement Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom scopes to fill your sales pipeline with verified, high-intent decision-makers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Leads',
                tier: 'Foundation Outreach',
                leads: 'Focused Pipeline Target',
                features: ['LinkedIn & Email Outreach', 'Basic Lead Qualification', 'Weekly Reports', 'Dedicated Lead Gen Executive'],
                color: 'border-blue-200',
                icon: <FaStar className="text-blue-600" />
              },
              {
                name: 'Growth Leads',
                tier: 'Multi-Channel Acquisition',
                leads: 'Accelerated Pipeline Target',
                features: ['Multi-Channel Outreach', 'Advanced Lead Qualification', 'Detailed Analytics', '2 Dedicated Executives', 'Quarterly Strategy Review'],
                color: 'border-cyan-300',
                popular: true,
                icon: <FaCrown className="text-cyan-600" />
              },
              {
                name: 'Enterprise Leads',
                tier: 'Account-Based Marketing (ABM)',
                leads: 'High-Volume Enterprise Scale',
                features: ['Full-Funnel Lead Gen', 'Account-Based Marketing', 'CRM Integration', 'Dedicated Team', 'Real-Time Dashboard', 'Monthly Strategy Review'],
                color: 'border-teal-300',
                icon: <FaGem className="text-teal-600" />
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                    <FaStar className="text-yellow-300" />
                    <span>MOST POPULAR</span>
                  </div>
                )}
                <div>
                  <div className="text-3xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                  <div className="text-sm font-semibold text-cyan-700 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 text-xs font-medium mb-6">{plan.leads}</p>
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
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Discuss Lead Scope
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              *Custom lead generation packages available • Available in Jaipur, Vrindavan & Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Our Lead Generation Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get expert lead generation guidance from our team in Jaipur, Vrindavan, or Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-blue-600 mx-auto mb-4 font-bold">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vivek Singh</h3>
              <p className="text-sm opacity-90 mb-3">Lead Gen Director</p>
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
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vikash Singh</h3>
              <p className="text-sm opacity-90 mb-3">Lead Gen Manager - Nepal</p>
              <a href={getTelHref(getOfficePhone('nepal'))} className="text-white hover:text-cyan-200 text-sm block inline-flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('nepal')}</span>
              </a>
              <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-200 text-sm block inline-flex items-center justify-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {getOfficePhone('nepal')}</span>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-teal-600 mx-auto mb-4 font-bold">
                GS
              </div>
              <h3 className="text-xl font-bold mb-1">Growth Service</h3>
              <p className="text-sm opacity-90 mb-3">Lead Gen Support Team</p>
              <a href={getTelHref(getOfficePhone('jaipur'))} className="text-white hover:text-teal-200 text-sm block inline-flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('jaipur')}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-teal-200 text-sm block inline-flex items-center justify-center gap-1">
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
                <span>Get Free Lead Audit</span>
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Session</span>
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
            <Link to="/paid-marketing" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Meta Ads Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/ecommerce" className="text-blue-600 hover:text-blue-800 text-sm font-medium">E-commerce Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;