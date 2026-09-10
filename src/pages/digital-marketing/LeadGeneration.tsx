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
  FaDatabase, 
  FaHandshake,
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaWhatsapp,
  FaClock,
  FaGem,
  FaCrown,
  FaLinkedin,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import {
  MapPin,
  Search,
  Phone,
  Star,
  TrendingUp,
  Globe,
  Check,
  Mail,
  MessageCircle,
  Trophy,
  Users as LucideUsers,
} from 'lucide-react';
import { getPhysicalOffices, getPrimaryPhone, getOfficePhone, getBusinessEmail, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const LeadGeneration: React.FC = () => {
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
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Digital Marketing', path: '/digital-marketing' },
              { label: 'Lead Generation' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Jaipur</span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Vrindavan</span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Nepal</span>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaMagnet className="text-4xl text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Best Lead Generation Services in <span className="text-yellow-300">Jaipur</span>, <span className="text-cyan-300">Vrindavan</span> & <span className="text-emerald-300">Nepal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Fuel your sales pipeline with qualified leads that convert into loyal customers. 
              Trusted by <strong className="text-yellow-300">300+ happy clients</strong> across India and Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free Lead Audit</span>
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Session</span>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-300 fill-yellow-300" /> 300+ Happy Clients</span>
              <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-yellow-300" /> 10,000+ Leads Generated</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-yellow-300" /> 3 Office Locations</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Lead Gen Matters */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Stop Chasing, Start Attracting Quality Leads"
            subtitle="We help you build a predictable engine for business growth across Jaipur, Vrindavan, and Nepal"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="interactive" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Predictable Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Consistent flow of qualified prospects to stabilize and grow your revenue. Our lead generation system delivers 50+ qualified leads monthly.
              </p>
            </Card>

            <Card variant="interactive" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <FaBullseye className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Targeted Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach decision-makers who are actively looking for your solution. Our targeting strategies cover Jaipur, Vrindavan, Nepal, and global markets.
              </p>
            </Card>

            <Card variant="interactive" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 text-purple-600">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Higher Conversion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Better quality leads mean higher close rates and shorter sales cycles. Our clients see 40%+ conversion rates on qualified leads.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <div className="text-center mb-12">
            <SectionHeader
              title={<span>Comprehensive Lead Gen Services in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span></span>}
              subtitle="Multi-channel strategies to capture and nurture potential clients from our 3 office locations"
              centered
            />
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Jaipur Office</span>
              <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Vrindavan Office</span>
              <span className="bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Nepal Office</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="interactive" padding="lg">
              <div className="text-blue-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">B2B Lead Generation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>LinkedIn outreach automation</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Decision-maker targeting</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Account-based marketing (ABM)</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Cold email campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Webinar funnels</span></li>
              </ul>
              <div className="mt-4 text-xs font-medium text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaFilter />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Inbound Marketing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Content lead magnets</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>SEO-driven traffic</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Landing page optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Chatbot implementation</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Newsletter growth</span></li>
              </ul>
              <div className="mt-4 text-xs font-medium text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-purple-600 text-3xl mb-4">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Lead Enrichment</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Data verification</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Contact info scraping</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Intent data analysis</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>CRM integration</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Prospect segmentation</span></li>
              </ul>
              <div className="mt-4 text-xs font-medium text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-emerald-600 text-3xl mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Email Marketing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Cold email campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Email automation sequences</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>A/B testing & optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Email list building</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Lead nurturing workflows</span></li>
              </ul>
              <div className="mt-4 text-xs font-medium text-emerald-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-blue-700 text-3xl mb-4">
                <FaLinkedin />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">LinkedIn Lead Generation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>LinkedIn profile optimization</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Connection requests automation</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>InMail campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Sales Navigator targeting</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>LinkedIn advertising</span></li>
              </ul>
              <div className="mt-4 text-xs font-medium text-blue-700">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-rose-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Lead Nurturing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Automated email sequences</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Retargeting campaigns</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Personalization strategies</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Sales enablement content</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Lead scoring & qualification</span></li>
              </ul>
              <div className="mt-4 text-xs font-medium text-rose-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Meet Our Lead Generation Experts"
            subtitle="Our certified lead generation specialists across Jaipur, Vrindavan, and Nepal"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vivek Singh</h3>
              <p className="text-blue-600 font-semibold text-xs mb-2">Lead Gen Director</p>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                Lead generation expert with 7+ years of experience generating 10,000+ leads for B2B companies
              </p>
              <div className="flex justify-center gap-2 text-xs mb-4">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">LinkedIn Expert</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">Email Marketing</span>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs">
                <a href={getTelHref(getPrimaryPhone())} className="text-blue-600 hover:text-blue-800 font-medium block inline-flex items-center justify-center gap-1 mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getPrimaryPhone()}</span>
                </a>
                <a href={getMailtoHref(getBusinessEmail())} className="text-blue-600 hover:text-blue-800 font-medium block inline-flex items-center justify-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{getBusinessEmail()}</span>
                </a>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="text-center relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                <Star className="w-3 h-3 fill-gray-900" />
                <span>HEAD OFFICE</span>
              </div>
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-2xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vikash Singh</h3>
              <p className="text-indigo-600 font-semibold text-xs mb-2">Lead Gen Manager - Nepal</p>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                Lead generation specialist with expertise in LinkedIn outreach and cold email campaigns
              </p>
              <div className="flex justify-center gap-2 text-xs mb-4">
                <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full font-medium">LinkedIn Pro</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">Cold Email</span>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs">
                <a href={getTelHref(getOfficePhone('nepal'))} className="text-indigo-600 hover:text-indigo-800 font-medium block inline-flex items-center justify-center gap-1 mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getOfficePhone('nepal')}</span>
                </a>
                <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-medium block inline-flex items-center justify-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {getOfficePhone('nepal')}</span>
                </a>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 text-2xl font-bold mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold text-gray-900">Growth Service Team</h3>
              <p className="text-purple-600 font-semibold text-xs mb-2">Lead Gen Support Team</p>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                Dedicated team of lead generation specialists across all locations
              </p>
              <div className="flex justify-center gap-2 text-xs mb-4">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">24/7 Support</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">Multi-Channel</span>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs">
                <a href={getTelHref(getPrimaryPhone())} className="text-purple-600 hover:text-purple-800 font-medium block inline-flex items-center justify-center gap-1 mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getPrimaryPhone()}</span>
                </a>
                <a href={getMailtoHref(getBusinessEmail())} className="text-purple-600 hover:text-purple-800 font-medium block inline-flex items-center justify-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{getBusinessEmail()}</span>
                </a>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <h4 className="font-bold text-gray-900 mb-1 flex items-center justify-center gap-2 text-sm">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span>Lead Generation Results</span>
            </h4>
            <p className="text-gray-600 text-xs">
              Our team has generated 10,000+ qualified leads for 300+ clients across India and Nepal
            </p>
          </div>
        </Container>
      </Section>

      {/* Office Locations Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title={<span>Our Lead Generation Offices in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span></span>}
            subtitle="Visit our offices for personalized lead generation strategy consultations"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getPhysicalOffices().map((office) => {
              return (
                <Card key={office.id} variant="interactive" padding="lg" className="relative flex flex-col justify-between">
                  <div>
                    {office.isHeadOffice && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-gray-900" />
                        <span>HEAD OFFICE</span>
                      </div>
                    )}
                    <div className="text-4xl mb-4">{office.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {office.address}
                    </p>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <p className="flex items-center gap-2">
                        <FaPhone className="text-purple-600 shrink-0" /> <span>{office.phone}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaEnvelope className="text-purple-600 shrink-0" /> <span>{office.email}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaClock className="text-purple-600 shrink-0" /> <span>{office.timings}</span>
                      </p>
                    </div>
                  </div>
                  <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center pt-2">
                    Get Directions →
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Lead Generation Process */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Lead Generation Process"
            subtitle="Multi-step acquisition methodology engineered for predictable pipeline velocity"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Research & Targeting', desc: 'Identify ideal prospects and decision-makers across Jaipur, Vrindavan, and Nepal' },
              { step: 2, title: 'Outreach Strategy', desc: 'Multi-channel outreach including LinkedIn, email, and social media' },
              { step: 3, title: 'Engagement & Nurturing', desc: 'Personalized engagement and lead nurturing sequences' },
              { step: 4, title: 'Conversion & Handoff', desc: 'Qualified lead delivery with complete information for sales team' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold mb-1 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lead Generation Channels */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Multi-Channel Lead Generation"
            subtitle="We leverage multiple channels to capture high-quality leads from Jaipur, Vrindavan, Nepal, and global markets"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { channel: 'LinkedIn', icon: FaLinkedin },
              { channel: 'Email', icon: Mail },
              { channel: 'Facebook', icon: FaFacebook },
              { channel: 'Instagram', icon: FaInstagram },
              { channel: 'Website', icon: Globe },
              { channel: 'WhatsApp', icon: FaWhatsapp },
              { channel: 'SEO', icon: Search },
              { channel: 'Referrals', icon: LucideUsers },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="interactive" padding="default" className="text-center">
                  <div className="text-blue-600 text-2xl mb-2 flex justify-center"><Icon className="w-6 h-6" /></div>
                  <div className="font-semibold text-gray-900 text-sm">{item.channel}</div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Lead Gen Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Why Choose Growth Service for Lead Generation?"
            subtitle="We deliver qualified leads that fuel your sales pipeline and drive business growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Quality Over Quantity', desc: 'We focus on delivering qualified leads that are ready to convert, not just volume' },
              { title: 'Multi-Channel Approach', desc: 'We leverage LinkedIn, email, social media, and more to capture leads from all channels' },
              { title: 'Data-Driven Strategy', desc: 'Our strategies are backed by data and analytics for maximum ROI' },
              { title: 'Dedicated Team', desc: 'You get a dedicated lead generation team across Jaipur, Vrindavan, and Nepal' },
              { title: 'Transparent Reporting', desc: 'Weekly reports with clear metrics and lead quality scores' },
              { title: 'Continuous Optimization', desc: 'We continuously refine strategies for better results and higher conversion' },
            ].map((item, index) => (
              <Card key={index} variant="default" padding="lg">
                <div className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lead Generation Frameworks */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Lead Generation Engagement Frameworks"
            subtitle="Custom scopes to fill your sales pipeline with verified, high-intent decision-makers"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Leads',
                tier: 'Foundation Outreach',
                leads: 'Focused Pipeline Target',
                features: ['LinkedIn & Email Outreach', 'Basic Lead Qualification', 'Weekly Reports', 'Dedicated Lead Gen Executive'],
                popular: false,
                icon: <FaStar className="text-blue-600" />
              },
              {
                name: 'Growth Leads',
                tier: 'Multi-Channel Acquisition',
                leads: 'Accelerated Pipeline Target',
                features: ['Multi-Channel Outreach', 'Advanced Lead Qualification', 'Detailed Analytics', '2 Dedicated Executives', 'Quarterly Strategy Review'],
                popular: true,
                icon: <FaCrown className="text-yellow-500" />
              },
              {
                name: 'Enterprise Leads',
                tier: 'Account-Based Marketing (ABM)',
                leads: 'High-Volume Enterprise Scale',
                features: ['Full-Funnel Lead Gen', 'Account-Based Marketing', 'CRM Integration', 'Dedicated Team', 'Real-Time Dashboard', 'Monthly Strategy Review'],
                popular: false,
                icon: <FaGem className="text-purple-600" />
              },
            ].map((plan) => (
              <Card 
                key={plan.name} 
                variant={plan.popular ? 'featured' : 'default'} 
                padding="lg" 
                className="relative flex flex-col justify-between"
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md flex items-center gap-1 whitespace-nowrap z-10">
                    <FaStar className="text-yellow-300" />
                    <span>MOST POPULAR</span>
                  </div>
                )}
                <div>
                  <div className="text-3xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-900 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 text-xs font-medium mb-6">{plan.leads}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700 text-sm">
                        <FaCheckCircle className="text-emerald-500 mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  to="/book-call"
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="md"
                  className="w-full"
                >
                  Discuss Lead Scope
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Custom lead generation packages available • Available in Jaipur, Vrindavan & Nepal
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Team Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Lead Generation Team</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Get expert lead generation guidance from our team in Jaipur, Vrindavan, or Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-lg font-bold mb-1">Vivek Singh</h3>
              <p className="text-xs text-blue-200 mb-3">Lead Gen Director</p>
              <a href={getTelHref(getPrimaryPhone())} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getPrimaryPhone()}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all text-white relative">
              <div className="absolute -top-2.5 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm flex items-center gap-1">
                <Star className="w-2.5 h-2.5 fill-gray-900" />
                <span>HEAD OFFICE</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-lg font-bold mb-1">Vikash Singh</h3>
              <p className="text-xs text-blue-200 mb-3">Lead Gen Manager - Nepal</p>
              <a href={getTelHref(getOfficePhone('nepal'))} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('nepal')}</span>
              </a>
              <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {getOfficePhone('nepal')}</span>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 mx-auto mb-4">
                GS
              </div>
              <h3 className="text-lg font-bold mb-1">Growth Service Team</h3>
              <p className="text-xs text-blue-200 mb-3">Lead Gen Support Team</p>
              <a href={getTelHref(getOfficePhone('jaipur'))} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('jaipur')}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free Lead Audit</span>
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Session</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Internal Linking */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <Container className="text-center">
          <p className="text-gray-600 text-xs mb-3 font-medium uppercase tracking-wider">Explore More Services:</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/seo" className="text-blue-600 hover:text-blue-800 font-medium">SEO Services</Link>
            <span className="text-gray-300">|</span>
            <Link to="/web-development" className="text-blue-600 hover:text-blue-800 font-medium">Web Development</Link>
            <span className="text-gray-300">|</span>
            <Link to="/social-media" className="text-blue-600 hover:text-blue-800 font-medium">Social Media Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/content-marketing" className="text-blue-600 hover:text-blue-800 font-medium">Content Marketing</Link>
            <span className="text-gray-300">|</span>
            <Link to="/paid-marketing" className="text-blue-600 hover:text-blue-800 font-medium">Meta Ads Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/ecommerce" className="text-blue-600 hover:text-blue-800 font-medium">E-commerce Solutions</Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LeadGeneration;