import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaGoogle, FaFacebook, FaLinkedin, FaDollarSign, FaRocket, FaShieldAlt, FaCog, FaBullseye, FaFileAlt } from 'react-icons/fa';
import {
  Handshake,
  ClipboardList,
  Zap,
  BarChart3,
  Tag,
  FileText,
  MessageCircle,
  LayoutDashboard,
  DollarSign as LucideDollarSign,
  LifeBuoy,
  GraduationCap,
  CheckCircle2,
  Phone,
  TrendingUp,
  Check,
} from 'lucide-react';
import { getPrimaryPhone, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getNepalWhatsAppUrl } from '../../services';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import AnimatedButton from '../../components/ui/AnimatedButton';

const WhiteLabelPPC = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>White Label PPC Management Services | Growth Service</title>
        <meta 
          name="description" 
          content="Offer premium PPC services under your brand with our complete white label solution. High profit margins, zero hiring costs, and 100% confidential fulfillment." 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/white-label-ppc`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 space-x-6 text-white/90">
              <FaGoogle className="text-4xl" />
              <FaFacebook className="text-4xl" />
              <FaLinkedin className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label PPC Management
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Offer premium PPC services under your brand with our complete white label solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as={Link}
                to="/book-call"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                Book White Label Demo
              </Button>
              <Button
                as={Link}
                to="/white-label"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                View All White Label Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why White Label PPC */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Why Choose White Label PPC?"
            subtitle="Scale your agency revenue without hiring PPC experts or investing in expensive tools"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaDollarSign className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">High Profit Margins</h3>
              <p className="text-gray-600 text-sm">
                Resell our services at your own price point and keep 60-70% profit margins on every project.
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRocket className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Expertise</h3>
              <p className="text-gray-600 text-sm">
                Offer advanced PPC capabilities immediately backed by our team of certified specialists.
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">100% Confidential</h3>
              <p className="text-gray-600 text-sm">
                Complete white label delivery under your brand name with strict NDA protection.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* White Label PPC Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Complete White Label PPC Services"
            subtitle="Everything you need to offer premium PPC management under your brand"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" className="p-8">
              <div className="text-blue-600 text-3xl mb-4">
                <FaGoogle />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Google Ads Management</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Search Campaign Management</li>
                <li>• Display Network Campaigns</li>
                <li>• YouTube Video Ads</li>
                <li>• Shopping Campaigns</li>
                <li>• App Campaigns</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-blue-600 text-3xl mb-4">
                <FaFacebook />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Meta Ads Management</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Facebook Ads Management</li>
                <li>• Instagram Ads</li>
                <li>• WhatsApp Business Ads</li>
                <li>• Messenger Ads</li>
                <li>• Audience Network</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-purple-600 text-3xl mb-4">
                <FaLinkedin />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">LinkedIn Ads Management</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• B2B Lead Generation</li>
                <li>• Sponsored Content</li>
                <li>• Message Ads</li>
                <li>• Dynamic Ads</li>
                <li>• Account-Based Marketing</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-red-600 text-3xl mb-4">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Strategy & Planning</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Campaign Strategy Development</li>
                <li>• Keyword Research & Planning</li>
                <li>• Audience Targeting Strategy</li>
                <li>• Budget Allocation Planning</li>
                <li>• Competitive Analysis</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaCog />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Implementation & Optimization</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Campaign Setup & Launch</li>
                <li>• Daily Bid Optimization</li>
                <li>• Ad Creative Testing</li>
                <li>• Landing Page Optimization</li>
                <li>• Conversion Tracking Setup</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Reporting & Analytics</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Custom White Label Reports</li>
                <li>• Monthly Performance Reviews</li>
                <li>• ROI Analysis</li>
                <li>• Client Dashboard Access</li>
                <li>• Quarterly Strategy Reviews</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* How White Label Works */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="How White Label PPC Works"
            subtitle="Simple 4-step process to scale your agency with PPC services"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Onboarding', desc: 'Client details & access sharing', icon: Handshake },
              { step: 2, title: 'Strategy', desc: 'Campaign planning & setup', icon: ClipboardList },
              { step: 3, title: 'Execution', desc: 'Campaign management & optimization', icon: Zap },
              { step: 4, title: 'Reporting', desc: 'White label reports delivery', icon: BarChart3 },
            ].map((item) => {
              const StepIcon = item.icon;
              return (
                <Card key={item.step} variant="default" className="p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-blue-600 mb-3 flex justify-center"><StepIcon className="w-7 h-7" /></div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* White Label Platform */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our White Label Platform Features"
            subtitle="Engineered for seamless client delivery and effortless agency scaling"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: '100% White Label', desc: 'No branding, your agency only', icon: Tag },
              { feature: 'Custom Reporting', desc: 'Your logo, your branding', icon: FileText },
              { feature: 'Direct Communication', desc: 'You maintain client contact', icon: MessageCircle },
              { feature: 'Agency Dashboard', desc: 'Track all client campaigns', icon: LayoutDashboard },
              { feature: 'Scalable Pricing', desc: 'Grow with volume discounts', icon: LucideDollarSign },
              { feature: '24/7 Support', desc: 'Technical & strategic support', icon: LifeBuoy },
              { feature: 'Training & Resources', desc: 'Agency growth materials', icon: GraduationCap },
              { feature: 'Performance Guarantee', desc: 'Minimum ROI targets', icon: CheckCircle2 },
            ].map((item, index) => {
              const FeatureIcon = item.icon;
              return (
                <Card key={index} variant="interactive" className="p-6">
                  <div className="text-blue-600 mb-3"><FeatureIcon className="w-7 h-7" /></div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{item.feature}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* PPC Platforms Covered */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="PPC Platforms We Manage"
            subtitle="Complete coverage across all major advertising platforms"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: 'Google Ads', color: 'bg-blue-50 text-blue-900 border-blue-100', spend: '$10K+' },
              { platform: 'Microsoft Ads', color: 'bg-blue-50/60 text-blue-800 border-blue-100', spend: '$5K+' },
              { platform: 'Facebook Ads', color: 'bg-indigo-50 text-indigo-900 border-indigo-100', spend: '$5K+' },
              { platform: 'Instagram Ads', color: 'bg-pink-50 text-pink-900 border-pink-100', spend: '$3K+' },
              { platform: 'LinkedIn Ads', color: 'bg-blue-50 text-blue-900 border-blue-100', spend: '$15K+' },
              { platform: 'Twitter Ads', color: 'bg-sky-50 text-sky-900 border-sky-100', spend: '$3K+' },
              { platform: 'Pinterest Ads', color: 'bg-red-50 text-red-900 border-red-100', spend: '$2K+' },
              { platform: 'TikTok Ads', color: 'bg-gray-100 text-gray-900 border-gray-200', spend: '$2K+' },
            ].map((platform, index) => (
              <Card key={index} variant="interactive" className={`${platform.color} p-6 text-center border`}>
                <h3 className="font-bold text-lg mb-2">{platform.platform}</h3>
                <p className="text-xs opacity-80">Minimum spend: {platform.spend}/month</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* White Label Packages */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="White Label PPC Frameworks"
            subtitle="High-converting Google Ads and Meta Ads performance fulfillment delivered under your agency's banner"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter', 
                tier: 'Single-Channel Paid Search / Social', 
                clients: '1-5 Client Accounts',
                features: ['Google OR Meta Ads Management', 'Campaign Architecture & Strategy', 'White-Label Performance Reporting', 'Weekly Bid & Negative Match Optimization', 'Dedicated Email Support', 'Pixel & Conversion API Verification'],
                color: 'border-blue-200'
              },
              { 
                name: 'Growth', 
                tier: 'Multi-Channel Performance Scale', 
                clients: '6-15 Client Accounts',
                features: ['Full Google + Meta Ads Synergy', 'Weekly Strategic Optimization', 'Advanced Multi-Touch Attribution Reporting', 'Daily Bid & Audience Optimization', 'Priority Phone Support', 'Live White-Label Client Dashboards', 'Creative Ad Copy & Hook Testing'],
                color: 'border-purple-300',
                popular: true
              },
              { 
                name: 'Enterprise', 
                tier: 'Omni-Channel & High Spend Retainer', 
                clients: '16+ Client Accounts',
                features: ['Omnichannel (Google, Meta, YouTube, LinkedIn)', 'Dedicated Senior Media Buyer', 'Custom White-Label Executive Dashboards', 'Continuous Real-Time Budget Optimization', 'Priority Agency SLA', 'Internal Agency Team Strategy Sessions', 'Volume Retainer Discounts'],
                color: 'border-yellow-300'
              },
            ].map((plan) => (
              <Card key={plan.name} variant={plan.popular ? 'featured' : 'default'} className={`border-2 ${plan.color} p-8 relative flex flex-col justify-between`}>
                <div>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      MOST REQUESTED
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-700 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 text-sm mb-6">Scale: <span className="font-semibold text-gray-900">{plan.clients}</span></p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <AnimatedButton
                    to="/book-call"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Partner Inquiry
                  </AnimatedButton>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Agency volume retainers and custom multi-client performance agreements scoped individually
            </p>
          </div>
        </Container>
      </Section>

      {/* Agency Benefits */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Benefits for Your Agency"
            subtitle="Why agencies choose our white label PPC solution"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Financial Benefits</h3>
              <ul className="space-y-3">
                {[
                  'High profit margins (60-70%)',
                  'No hiring or training costs',
                  'No software or tool expenses',
                  'Scalable pricing with volume',
                  'Predictable monthly costs',
                  'No infrastructure investment',
                  'Lower client acquisition costs',
                  'Faster ROI on services'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <LucideDollarSign className="w-4 h-4 text-yellow-300 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card variant="default" className="p-8 border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Focus on client relationships',
                  'No PPC expertise required',
                  '24/7 campaign management',
                  'Professional reporting',
                  'Performance guarantees',
                  'Strategic partnership',
                  'Industry best practices',
                  'Continuous optimization'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-sm">
                    <Zap className="w-4 h-4 text-blue-600 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Case Study */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="White Label Success Story"
            subtitle="See how agencies grow with our white label PPC solution"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <Card variant="default" className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-50 text-blue-800 p-6 rounded-xl text-center border border-blue-100">
                    <div className="text-4xl font-bold mb-2">450%</div>
                    <div className="font-semibold text-sm">Revenue Growth</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Digital Marketing Agency Success</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Before White Label PPC:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Limited to SEO and social media services</li>
                      <li>• Turning away PPC client requests</li>
                      <li>• 5 clients, ₹3L/month revenue</li>
                      <li>• No PPC expertise in-house</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">After White Label PPC:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Added full PPC services under their brand</li>
                      <li>• Acquired 12 new PPC clients in 6 months</li>
                      <li>• ₹13.5L/month revenue (450% growth)</li>
                      <li>• Expanded to enterprise clients</li>
                      <li>• Become full-service digital agency</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-semibold italic text-sm">"White label PPC transformed our agency from niche to full-service. Our clients love the results, and they never know we have a partner."</p>
                    <p className="text-gray-500 mt-1 text-xs">- Agency Founder, 3-year partnership</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Scale Your Agency with PPC?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Add high-margin PPC services to your offerings with our complete white label solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as={Link}
                to="/book-call"
                variant="secondary"
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 shadow-lg"
              >
                Book White Label Demo
              </Button>
              <Button
                as="a"
                href={getTelHref(getPrimaryPhone())}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {getPrimaryPhone()}</span>
              </Button>
              <Button
                as="a"
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="bg-[#25D366] hover:bg-emerald-600 text-white border-0 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Partnership</span>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-semibold flex items-center justify-center gap-1.5 text-sm">
                  <Tag className="w-4 h-4 text-yellow-300" />
                  <span>100% White Label</span>
                </div>
                <div className="text-xs opacity-90 mt-1">Your brand only</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-semibold flex items-center justify-center gap-1.5 text-sm">
                  <LucideDollarSign className="w-4 h-4 text-yellow-300" />
                  <span>High Margins</span>
                </div>
                <div className="text-xs opacity-90 mt-1">60-70% profit margins</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-semibold flex items-center justify-center gap-1.5 text-sm">
                  <TrendingUp className="w-4 h-4 text-yellow-300" />
                  <span>Performance Guarantee</span>
                </div>
                <div className="text-xs opacity-90 mt-1">Minimum ROI targets</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="White Label PPC FAQs"
            subtitle="Common questions about partnering with our white-label fulfillment team"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Is this really 100% white label?',
                a: 'Yes, completely white label. Your clients will only see your branding. All reports, communications, and dashboards will have your logo and branding. We work completely behind the scenes.'
              },
              {
                q: 'How do you communicate with our clients?',
                a: 'We don\'t. You maintain all direct client communication. We provide you with strategy, reports, and updates that you can share with clients in your voice and branding.'
              },
              {
                q: 'What if we don\'t have PPC experience?',
                a: 'No problem! Our solution is designed for agencies without PPC expertise. We handle all technical aspects, strategy, and execution. You focus on client relationships.'
              },
              {
                q: 'How are pricing and billing handled?',
                a: 'You set your own pricing to clients. We charge you a fixed monthly fee per client. You markup our services to achieve your desired profit margin.'
              },
              {
                q: 'What platforms do you support?',
                a: 'We support all major platforms: Google Ads, Microsoft Ads, Facebook/Instagram Ads, LinkedIn Ads, Twitter Ads, Pinterest Ads, and TikTok Ads.'
              },
              {
                q: 'Is there a minimum contract?',
                a: 'We require a 3-month minimum commitment per client to ensure proper campaign setup and optimization time. No long-term agency contracts.'
              }
            ].map((faq, index) => (
              <Card key={index} variant="default" className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partnership Requirements */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Agency Partnership Requirements"
            subtitle="What we look for in white label agency partners"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="default" className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital marketing agency',
                    'Minimum 3 active clients',
                    'Professional website and branding',
                    'Experience in client management',
                    'Commitment to client success',
                    'Active client ad spend qualification',
                    'Willingness to learn and grow',
                    '3-month minimum commitment'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete PPC campaign management',
                    'White label reporting platform',
                    'Strategic planning and consultation',
                    '24/7 campaign optimization',
                    'Performance guarantees',
                    'Agency training and resources',
                    'Dedicated account manager',
                    'Scalable pricing structure'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Zap className="w-4 h-4 text-yellow-300 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block bg-blue-50 border border-blue-200 p-6 rounded-xl">
                <p className="text-blue-800 font-medium text-sm">
                  Ready to become a white label partner? Schedule a demo to see our platform in action.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default WhiteLabelPPC;
