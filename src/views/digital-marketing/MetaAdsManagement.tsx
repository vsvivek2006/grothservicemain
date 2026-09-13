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
  FaMobileAlt,
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGem,
  FaCrown
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
  Store,
  Mail,
} from 'lucide-react';
import { getPhysicalOffices, getPrimaryPhone, getOfficePhone, getBusinessEmail, getBusinessName, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const MetaAdsManagement: React.FC = () => {
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
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Digital Marketing', path: '/digital-marketing' },
              { label: 'Meta Ads Management' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Jaipur</span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Vrindavan</span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Nepal</span>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl shadow-inner">
                <FaFacebook className="text-3xl text-blue-300" />
                <FaInstagram className="text-3xl text-pink-300" />
                <FaWhatsapp className="text-3xl text-emerald-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Best Meta Ads Management in <span className="text-yellow-300">Jaipur</span>, <span className="text-cyan-300">Vrindavan</span> & <span className="text-emerald-300">Nepal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Maximize ROI from Facebook, Instagram & WhatsApp advertising with our data-driven ad strategies. 
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
                <span>Get Free Ads Audit</span>
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-yellow-300" />
                <span>Book Strategy Call</span>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-300 fill-yellow-300" /> 300+ Happy Clients</span>
              <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-yellow-300" /> ₹10Cr+ Ad Spend Managed</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-yellow-300" /> 3 Office Locations</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Proven Meta Ads Results We Deliver"
            subtitle="We drive measurable business growth through strategic Meta advertising across Jaipur, Vrindavan, and Nepal"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card variant="interactive" padding="lg" className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5x</div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">ROI Increase</h3>
              <p className="text-gray-600 text-xs">Average return on ad spend</p>
            </Card>

            <Card variant="interactive" padding="lg" className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Cost Reduction</h3>
              <p className="text-gray-600 text-xs">Lower cost per acquisition</p>
            </Card>

            <Card variant="interactive" padding="lg" className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">300%</div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Conversion Boost</h3>
              <p className="text-gray-600 text-xs">Increase in lead generation</p>
            </Card>

            <Card variant="interactive" padding="lg" className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Campaign Monitoring</h3>
              <p className="text-gray-600 text-xs">Real-time optimization</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <div className="text-center mb-12">
            <SectionHeader
              title={<span>Comprehensive Meta Ads Services in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span></span>}
              subtitle="End-to-end Facebook, Instagram & WhatsApp advertising solutions from our 3 office locations"
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
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Audience Targeting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Custom audience creation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Lookalike audience building</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Interest-based targeting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Demographic segmentation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Retargeting strategies</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-purple-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Campaign Strategy</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Campaign objective setting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Budget optimization</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Bid strategy development</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> A/B testing setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Multi-platform campaigns</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-emerald-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ad Creative Development</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> High-converting ad copy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Professional ad design</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Video ad production</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Carousel ad creation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Story & Reels ads</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-emerald-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-rose-600 text-3xl mb-4">
                <FaDollarSign />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Conversion Optimization</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Lead generation campaigns</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Sales conversion tracking</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Website conversion setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Pixel installation & tracking</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> ROI maximization</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-rose-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-amber-600 text-3xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Daily performance monitoring</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Weekly optimization reports</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Competitor analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Conversion funnel analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Monthly strategy reviews</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-amber-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">WhatsApp Business Ads</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>WhatsApp click-to-chat ads</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Lead generation via WhatsApp</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Automated messaging setup</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>WhatsApp catalog integration</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /><span>Conversion tracking</span></li>
              </ul>
              <div className="mt-4 text-xs font-medium text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Campaign Types */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Meta Campaign Types We Manage"
            subtitle="Specialized advertising strategies for different business goals across Jaipur, Vrindavan, and Nepal"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, title: 'Brand Awareness', desc: 'Increase brand visibility' },
              { icon: Target, title: 'Lead Generation', desc: 'Quality lead collection' },
              { icon: ShoppingCart, title: 'Sales Conversion', desc: 'Direct product sales' },
              { icon: Smartphone, title: 'App Install', desc: 'Mobile app downloads' },
              { icon: Users, title: 'Traffic Generation', desc: 'Website visitors' },
              { icon: MessageCircle, title: 'Message Campaigns', desc: 'WhatsApp/Messenger' },
              { icon: Video, title: 'Video Views', desc: 'Engaging video content' },
              { icon: Store, title: 'Store Visits', desc: 'Local business traffic' },
            ].map((campaign, index) => {
              const Icon = campaign.icon;
              return (
                <Card key={index} variant="interactive" padding="default" className="text-center">
                  <div className="text-blue-600 flex justify-center mb-2"><Icon className="w-6 h-6" /></div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">{campaign.title}</h3>
                  <p className="text-gray-600 text-xs">{campaign.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Meet Our Meta Ads Experts"
            subtitle="Our certified advertising specialists across Jaipur, Vrindavan, and Nepal"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vivek Singh</h3>
              <p className="text-blue-600 font-semibold text-xs mb-2">Meta Ads Director</p>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                Certified Meta Ads expert with 8+ years of experience managing ₹10Cr+ ad spend
              </p>
              <div className="flex justify-center gap-2 text-xs mb-4">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">Facebook Certified</span>
                <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 rounded-full font-medium">Instagram Expert</span>
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
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 text-2xl font-bold mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vikash Singh</h3>
              <p className="text-purple-600 font-semibold text-xs mb-2">Meta Ads Manager - Nepal</p>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                Lead generation specialist with expertise in WhatsApp Business advertising
              </p>
              <div className="flex justify-center gap-2 text-xs mb-4">
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">WhatsApp Ads Expert</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">Lead Gen Pro</span>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs">
                <a href={getTelHref(getOfficePhone('nepal'))} className="text-purple-600 hover:text-purple-800 font-medium block inline-flex items-center justify-center gap-1 mb-1">
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
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 text-2xl font-bold mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold text-gray-900">{getBusinessName()} Team</h3>
              <p className="text-emerald-600 font-semibold text-xs mb-2">Ads Support Team</p>
              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                Dedicated team of certified Meta Ads specialists across all locations
              </p>
              <div className="flex justify-center gap-2 text-xs mb-4">
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-medium">24/7 Support</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">Multi-Location</span>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs">
                <a href={getTelHref(getPrimaryPhone())} className="text-emerald-600 hover:text-emerald-800 font-medium block inline-flex items-center justify-center gap-1 mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{getPrimaryPhone()}</span>
                </a>
                <a href={getMailtoHref(getBusinessEmail())} className="text-emerald-600 hover:text-emerald-800 font-medium block inline-flex items-center justify-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{getBusinessEmail()}</span>
                </a>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <h4 className="font-bold text-gray-900 mb-1 inline-flex items-center justify-center gap-2 text-sm">
              <Award className="w-4 h-4 text-yellow-600" />
              <span>Certified Meta Ads Experts</span>
            </h4>
            <p className="text-gray-600 text-xs">
              Our team has managed over ₹10 Crore in ad spend with proven ROI for 300+ clients across India and Nepal
            </p>
          </div>
        </Container>
      </Section>

      {/* Office Locations Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title={<span>Our Meta Ads Offices in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span></span>}
            subtitle="Visit our offices for personalized Meta Ads strategy consultations"
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

      {/* Process Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our Meta Ads Management Process"
            subtitle="Systematic performance framework to launch, iterate, and scale paid acquisition"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Strategy Session', desc: 'Goal setting & audience research from our Jaipur, Vrindavan & Nepal offices' },
              { step: 2, title: 'Campaign Setup', desc: 'Ad account creation & targeting optimization' },
              { step: 3, title: 'Creative Development', desc: 'Ad design & copywriting for maximum engagement' },
              { step: 4, title: 'Launch & Optimize', desc: 'Campaign monitoring, scaling & ROI maximization' },
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

      {/* Meta Ads Management Frameworks */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Meta Ads Performance Frameworks"
            subtitle="Structured campaign execution with clear deliverables for Jaipur, Vrindavan & Nepal"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Ads',
                tier: 'Foundation Scope',
                platform: '1 Platform Focus',
                features: ['Basic Campaign Setup', 'Weekly Optimization', 'Monthly Reports', 'Targeted Campaign Spend', 'Basic Audience Targeting'],
                popular: false,
                icon: <FaStar className="text-blue-600" />
              },
              {
                name: 'Growth Ads',
                tier: 'Scale & Retargeting Scope',
                platform: 'Multi-Platform (FB + IG)',
                features: ['Advanced Targeting', 'A/B Testing', 'Creative Development', 'Weekly Strategy Calls', 'Multi-Channel Spend Pacing', 'Retargeting Setup'],
                popular: true,
                icon: <FaCrown className="text-yellow-500" />
              },
              {
                name: 'Enterprise Ads',
                tier: 'Full Funnel Acquisition',
                platform: 'Omnichannel Network',
                features: ['Full Funnel Strategy', 'Custom Audience Building', 'Video Ad Production', 'Daily Monitoring', 'WhatsApp Ads', 'Enterprise Scale Budgeting', 'Dedicated Manager'],
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
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md whitespace-nowrap z-10">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div>
                  <div className="text-3xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-900 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 text-xs mb-6 font-medium">{plan.platform}</p>
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
                  Discuss Campaign Scope
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Minimum ad budget requirements apply • Available in Jaipur, Vrindavan & Nepal
            </p>
          </div>
        </Container>
      </Section>

      {/* Client Success Stories */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Client Success Stories"
            subtitle="See how we've transformed businesses with Meta advertising across Jaipur, Vrindavan, and Nepal"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="interactive" padding="lg">
              <div className="text-blue-600 mb-3"><ShoppingCart className="w-8 h-8" /></div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">E-commerce Store - Jaipur</h3>
              <p className="text-gray-600 text-sm mb-3">Achieved 8x ROAS with Facebook conversion campaigns from our Jaipur office</p>
              <div className="text-sm text-blue-600 font-semibold">Results: ₹50L+ in sales</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-emerald-600 mb-3"><Briefcase className="w-8 h-8" /></div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">B2B SaaS - Vrindavan</h3>
              <p className="text-gray-600 text-sm mb-3">Generated 200+ qualified leads monthly via LinkedIn & Facebook from Vrindavan</p>
              <div className="text-sm text-emerald-600 font-semibold">Cost per lead: ₹350</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-purple-600 mb-3"><Building2 className="w-8 h-8" /></div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Healthcare - Nepal</h3>
              <p className="text-gray-600 text-sm mb-3">Increased appointments by 300% with local targeting from Nepal office</p>
              <div className="text-sm text-purple-600 font-semibold">50+ new patients monthly</div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Why Meta Ads Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Why Choose Meta Advertising for Your Business?"
            subtitle="Unlock the power of Facebook, Instagram & WhatsApp to grow your business across Jaipur, Vrindavan, and Nepal"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Massive Reach', desc: 'Reach 2.8+ billion monthly active users across Facebook, Instagram & WhatsApp' },
              { title: 'Precise Targeting', desc: 'Target audiences by location, interests, behavior, and demographics with laser precision' },
              { title: 'Cost-Effective', desc: 'Tailored ad spend to your business goals and scale based on proven performance' },
              { title: 'Measurable Results', desc: 'Track every rupee spent with detailed analytics and conversion tracking' },
              { title: 'Multiple Ad Formats', desc: 'Choose from images, videos, carousels, stories, and WhatsApp messages' },
              { title: 'Retargeting Power', desc: 'Re-engage website visitors and previous customers for higher conversions' },
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

      {/* Contact Team Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Meta Ads Team</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Get expert Meta Ads guidance from our team in Jaipur, Vrindavan, or Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-lg font-bold mb-1">Vivek Singh</h3>
              <p className="text-xs text-blue-200 mb-3">Meta Ads Director</p>
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
              <p className="text-xs text-blue-200 mb-3">Meta Ads Manager - Nepal</p>
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
              <h3 className="text-lg font-bold mb-1">{getBusinessName()} Team</h3>
              <p className="text-xs text-blue-200 mb-3">Meta Ads Support Team</p>
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
                <span>Get Free Ads Audit</span>
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-yellow-300" />
                <span>Book Strategy Call</span>
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
            <Link to="/local-seo" className="text-blue-600 hover:text-blue-800 font-medium">Google Business Profile</Link>
            <span className="text-gray-300">|</span>
            <Link to="/ecommerce" className="text-blue-600 hover:text-blue-800 font-medium">E-commerce Solutions</Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default MetaAdsManagement;