import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaSearch, FaChartLine, FaShieldAlt, FaRocket, FaFileAlt, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import {
  ClipboardList,
  Search,
  Zap,
  BarChart3,
  Tag,
  Lock,
  MessageCircle,
  LayoutDashboard,
  DollarSign,
  LifeBuoy,
  GraduationCap,
  TrendingUp,
  Phone,
  Check,
  Rocket as LucideRocket,
} from 'lucide-react';
import { getPrimaryPhone, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getNepalWhatsAppUrl } from '../../services';
import { WhatsAppIcon } from '../../components/ui';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import AnimatedButton from '../../components/ui/AnimatedButton';

const WhiteLabelSEO = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>White Label SEO Services for Agencies | Growth Service</title>
        <meta 
          name="description" 
          content="Offer premium SEO services under your brand with our complete white label solution. High profit margins, zero overhead, and 100% confidential white-hat fulfillment." 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/white-label-seo`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaSearch className="text-5xl text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label SEO Services
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Offer premium SEO services under your brand with our complete white label solution
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

      {/* Why White Label SEO */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Scale Your Agency with White Label SEO"
            subtitle="Expand your service offerings without increasing overhead or hiring costs"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">70% Profit Margin</h3>
              <p className="text-gray-600 text-sm">
                White label SEO services typically offer 65-75% profit margins for agencies
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Instant Scaling</h3>
              <p className="text-gray-600 text-sm">
                Take on enterprise clients immediately without building an in-house SEO team
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Zero Client Risk</h3>
              <p className="text-gray-600 text-sm">
                100% white label with strict NDAs. Your clients remain yours forever
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SEO Services We Offer */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Complete White Label SEO Capabilities"
            subtitle="Deliver every aspect of SEO under your brand with our comprehensive service suite"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" className="p-8">
              <div className="text-blue-600 text-3xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Technical SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Complete technical audits, crawl error fixes, site speed optimization, and schema markup implementation.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Core Web Vitals optimization</li>
                <li>• Mobile-first indexing fixes</li>
                <li>• XML sitemap & robots.txt</li>
                <li>• Structured data implementation</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-purple-600 text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">On-Page SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Keyword research, content optimization, meta tags, heading structures, and internal linking strategies.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Comprehensive keyword mapping</li>
                <li>• Title & meta description optimization</li>
                <li>• Content quality improvements</li>
                <li>• Internal linking architecture</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-green-600 text-3xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Off-Page SEO & Links</h3>
              <p className="text-gray-600 mb-4 text-sm">
                High-quality backlink building through white-hat outreach, digital PR, and authority placement.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Contextual guest posting</li>
                <li>• Resource page link building</li>
                <li>• Broken link replacement</li>
                <li>• Brand mention conversion</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Google Business Profile optimization, local citation building, and review management for local clients.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• GBP setup & optimization</li>
                <li>• Local citation building (NAP)</li>
                <li>• Review generation strategy</li>
                <li>• Local pack ranking optimization</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-red-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">E-commerce SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Specialized SEO for online stores: product optimization, category pages, and faceted navigation.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Product schema & review markup</li>
                <li>• Category page optimization</li>
                <li>• Faceted navigation handling</li>
                <li>• E-commerce platform expertise</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Enterprise SEO</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Large-scale SEO for complex websites, international SEO, and multi-location business frameworks.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Multi-language & hreflang setup</li>
                <li>• Subdomain/subfolder strategies</li>
                <li>• Large-scale crawl optimization</li>
                <li>• Custom analytics & reporting</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="How White Label SEO Works"
            subtitle="Simple process for seamless agency partnerships"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Onboarding', desc: 'Client details & website access', icon: ClipboardList },
              { step: 2, title: 'Audit & Strategy', desc: 'Comprehensive SEO analysis', icon: Search },
              { step: 3, title: 'Implementation', desc: 'Monthly SEO execution', icon: Zap },
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

      {/* White Label Platform Features */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="White Label Platform Features"
            subtitle="Built to empower agency growth and maintain total confidentiality"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'Branded Reports', desc: 'Custom reports with your logo', icon: Tag },
              { feature: 'Client Portal', desc: 'White label dashboard access', icon: Lock },
              { feature: 'Direct Communication', desc: 'You maintain client contact', icon: MessageCircle },
              { feature: 'Agency Dashboard', desc: 'Manage all client campaigns', icon: LayoutDashboard },
              { feature: 'Scalable Pricing', desc: 'Volume-based discounts', icon: DollarSign },
              { feature: '24/7 Support', desc: 'Technical & strategic support', icon: LifeBuoy },
              { feature: 'Training Resources', desc: 'Agency growth materials', icon: GraduationCap },
              { feature: 'Performance Tracking', desc: 'Real-time rank monitoring', icon: TrendingUp },
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

      {/* SEO Results & Metrics */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Typical SEO Results"
            subtitle="What you can expect from our white label SEO services"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '200-300%', label: 'Organic Traffic Increase', desc: 'Within 6-9 months' },
              { metric: '50+', label: 'Top Rankings', desc: 'Keywords on page 1' },
              { metric: '3-5x', label: 'ROI Increase', desc: 'Return on investment' },
              { metric: '20-30%', label: 'Conversion Rate Boost', desc: 'Higher quality traffic' },
              { metric: '<3 months', label: 'Initial Results', desc: 'First visible improvements' },
              { metric: '24/7', label: 'Rank Monitoring', desc: 'Real-time tracking' },
              { metric: 'Monthly', label: 'Performance Reports', desc: 'Detailed analytics' },
              { metric: '100%', label: 'White Label', desc: 'Your brand only' },
            ].map((item, index) => (
              <Card key={index} variant="default" className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.label}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* White Label SEO Packages */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="White Label SEO Frameworks"
            subtitle="White-hat organic growth, technical site audits, and search rankings executed seamlessly behind your agency"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter SEO', 
                tier: 'Foundation & On-Page SEO', 
                clients: '1-5 Client Engagements',
                features: ['Core Technical SEO Audit', 'On-Page Optimization', 'White-Label Monthly Ranking Reports', 'Keyword Research & Search Intent', 'Bi-Weekly Progress Updates', 'Dedicated Email Support'],
                color: 'border-blue-200'
              },
              { 
                name: 'Professional SEO', 
                tier: 'High-Authority Organic Scale', 
                clients: '6-15 Client Engagements',
                features: ['Comprehensive Technical Architecture', 'Advanced On-Page & Schema Optimization', 'White-Hat Editorial Outreach & Backlinks', 'Local SEO & Multi-Location Maps', 'Monthly Strategy Reviews', 'Custom Client Portal Access', 'Direct Priority Support'],
                color: 'border-purple-300',
                popular: true
              },
              { 
                name: 'Enterprise SEO', 
                tier: 'Full Enterprise Search Domination', 
                clients: '16+ Client Engagements',
                features: ['Full-Scale Competitive SEO Strategy', 'High-DA Link Syndication & Digital PR', 'Enterprise E-commerce Architecture', 'Algorithmic Penalty Recovery', 'Dedicated SEO Director', 'Custom White-Label Live Dashboards', 'Dedicated SLA Turnaround'],
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
              *Agency volume retainers and custom multi-account white-label agreements scoped individually
            </p>
          </div>
        </Container>
      </Section>

      {/* Agency Benefits */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Benefits for Your Agency"
            subtitle="Why agencies choose our white label SEO solution"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Business Growth</h3>
              <ul className="space-y-3">
                {[
                  'Add high-margin SEO services (65-75% profit)',
                  'Increase average client value by 3-5x',
                  'Create predictable recurring revenue',
                  'Reduce client churn with long-term SEO',
                  'Cross-sell to existing clients',
                  'Attract higher-value enterprise clients',
                  'Differentiate from competitors',
                  'Build agency valuation'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <LucideRocket className="w-4 h-4 text-yellow-300 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card variant="default" className="p-8 border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Efficiency</h3>
              <ul className="space-y-3">
                {[
                  'No need to hire SEO specialists',
                  'No software or tool costs',
                  'No training or certification expenses',
                  'Focus on sales and client relationships',
                  'Professional results without expertise',
                  'Scalable as you grow',
                  '24/7 campaign monitoring',
                  'Expert support when needed'
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
            title="Agency Success Story"
            subtitle="See how agencies transform with white label SEO"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <Card variant="default" className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-50 text-blue-900 p-6 rounded-xl text-center border border-blue-100">
                    <div className="text-4xl font-bold mb-2">600%</div>
                    <div className="font-semibold text-sm">Revenue Growth</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Web Design Agency Transformation</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Before White Label SEO:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Only offering web design services</li>
                      <li>• One-time project revenue only</li>
                      <li>• 8 clients, ₹4L/month revenue</li>
                      <li>• High client turnover after projects</li>
                      <li>• No recurring revenue streams</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">After White Label SEO:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Added SEO as ongoing service</li>
                      <li>• Converted 6 web design clients to SEO</li>
                      <li>• Acquired 14 new SEO-only clients</li>
                      <li>• ₹24L/month revenue (600% growth)</li>
                      <li>• 95% client retention rate</li>
                      <li>• Became full-service digital agency</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-semibold italic text-sm">"White label SEO transformed our one-time project business into a sustainable agency with recurring revenue. Our clients get amazing results, and they see us as their complete digital partner."</p>
                    <p className="text-gray-500 mt-1 text-xs">- Agency Owner, 2-year partnership</p>
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
              Ready to Offer SEO Services?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Add high-margin, recurring SEO services to your agency with complete white label support
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
                <WhatsAppIcon className="w-5 h-5" />
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
                  <DollarSign className="w-4 h-4 text-yellow-300" />
                  <span>High Margins</span>
                </div>
                <div className="text-xs opacity-90 mt-1">65-75% profit margins</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-semibold flex items-center justify-center gap-1.5 text-sm">
                  <TrendingUp className="w-4 h-4 text-yellow-300" />
                  <span>Recurring Revenue</span>
                </div>
                <div className="text-xs opacity-90 mt-1">Monthly retainers</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SEO Tools & Technology */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Professional SEO Tools We Use"
            subtitle="Industry-standard tools for delivering exceptional results"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tool: 'Ahrefs', color: 'bg-red-50 text-red-800 border-red-100' },
              { tool: 'SEMrush', color: 'bg-orange-50 text-orange-800 border-orange-100' },
              { tool: 'Google Analytics', color: 'bg-blue-50 text-blue-800 border-blue-100' },
              { tool: 'Google Search Console', color: 'bg-green-50 text-green-800 border-green-100' },
              { tool: 'Screaming Frog', color: 'bg-purple-50 text-purple-800 border-purple-100' },
              { tool: 'Moz Pro', color: 'bg-sky-50 text-sky-800 border-sky-100' },
              { tool: 'Majestic', color: 'bg-indigo-50 text-indigo-800 border-indigo-100' },
              { tool: 'BrightLocal', color: 'bg-yellow-50 text-yellow-800 border-yellow-100' },
              { tool: 'RankMath', color: 'bg-emerald-50 text-emerald-800 border-emerald-100' },
              { tool: 'Yoast SEO', color: 'bg-rose-50 text-rose-800 border-rose-100' },
              { tool: 'Google My Business', color: 'bg-blue-50 text-blue-800 border-blue-100' },
              { tool: 'Google PageSpeed', color: 'bg-green-50 text-green-800 border-green-100' },
            ].map((item, index) => (
              <Card key={index} variant="interactive" className={`${item.color} p-4 text-center font-medium text-sm border`}>
                {item.tool}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="White Label SEO FAQs"
            subtitle="Common questions about partnering with our white-label organic search team"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How do you ensure 100% white label delivery?',
                a: 'We never interact with your clients directly. All communication goes through you. Reports, dashboards, and deliverables are completely branded with your agency\'s logo, colors, and contact information.'
              },
              {
                q: 'What if we don\'t have SEO expertise?',
                a: 'No SEO expertise needed! We handle all technical aspects, strategy, implementation, and reporting. You focus on client relationships and sales. We provide training materials to help you sell SEO effectively.'
              },
              {
                q: 'How long before we see results for our clients?',
                a: 'Initial improvements often appear within 1-3 months (technical fixes, initial rankings). Significant traffic growth typically occurs in 4-6 months. Full results are visible in 6-12 months depending on competition.'
              },
              {
                q: 'Can we customize the SEO packages?',
                a: 'Yes, we offer custom packages for agencies with specific needs. Our standard packages can be modified, and we can create completely custom solutions for enterprise agencies.'
              },
              {
                q: 'How are reports delivered?',
                a: 'Reports are delivered monthly through your white label dashboard. You can download PDF reports with your branding, or give clients access to their own branded portal to view results.'
              },
              {
                q: 'What about client communication and strategy?',
                a: 'We provide you with strategy documents, updates, and insights that you can share with clients in your voice. You maintain all direct client communication and relationship management.'
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
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Agency Partnership Requirements"
            subtitle="What we look for in white label agency partners"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="default" className="p-8 border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Agency Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital agency or marketing firm',
                    'Minimum 3 active clients',
                    'Professional website and branding',
                    'Client management experience',
                    'Commitment to 6-month minimum',
                    'Ability to manage client relationships',
                    'Willingness to learn about SEO benefits',
                    'Ethical business practices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-blue-500 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete SEO campaign management',
                    'White label reporting platform',
                    'Monthly strategy documents',
                    '24/7 rank monitoring',
                    'Performance tracking & analytics',
                    'Agency training materials',
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
                <p className="text-blue-800 font-medium text-sm mb-4">
                  Ready to become a white label SEO partner? Schedule a demo to see our platform and results.
                </p>
                <Button
                  as={Link}
                  to="/book-call"
                  variant="primary"
                  className="shadow-md"
                >
                  Schedule Partnership Call
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default WhiteLabelSEO;
