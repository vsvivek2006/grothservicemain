import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaCode, FaWordpress, FaShoppingCart, FaMobileAlt, FaServer, FaShieldAlt, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';
import {
  ClipboardList,
  BarChart3,
  Code,
  Eye,
  Rocket,
  FolderKanban,
  Lock,
  MessageCircle,
  Monitor,
  DollarSign,
  LifeBuoy,
  GraduationCap,
  CheckCircle2,
  Search,
  Palette,
  TestTube,
  Check,
  Zap,
  Tag,
  Phone,
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

const WhiteLabelWebDevelopment = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>White Label Web Development Services for Agencies | Growth Service</title>
        <meta 
          name="description" 
          content="Offer premium web development services under your brand with our complete white label solution. WordPress, E-commerce, custom apps, high margins, and 100% white label delivery." 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/white-label-web`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaCode className="text-5xl text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label Web Development
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Offer premium web development services under your brand with our complete white label solution
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

      {/* Why White Label Web Development */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Scale Your Agency with Web Development"
            subtitle="Add high-margin development services without the overhead of building an in-house tech team"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">70-80% Profit Margin</h3>
              <p className="text-gray-600 text-sm">
                Web development projects command premium pricing with exceptional profit margins
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">High-Ticket Projects</h3>
              <p className="text-gray-600 text-sm">
                Website projects often lead to ongoing retainer services like SEO and maintenance
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Confidential</h3>
              <p className="text-gray-600 text-sm">
                We work silently in the background. Your clients only know and interact with your agency
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Web Development Services We Offer */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Complete Web Development Services"
            subtitle="From simple landing pages to complex web applications, we build it all under your brand"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" className="p-8">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaWordpress />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">WordPress Development</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Custom theme development, plugin integration, Elementor/Gutenberg builds, and WooCommerce setups.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Custom themes & child themes</li>
                <li>• Elementor & page builder sites</li>
                <li>• Plugin customization</li>
                <li>• Speed & security optimization</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-purple-600 text-3xl mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">E-Commerce Development</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Shopify, WooCommerce, and custom headless e-commerce solutions with payment gateway integrations.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Shopify store setup & themes</li>
                <li>• WooCommerce configuration</li>
                <li>• Payment gateway integrations</li>
                <li>• Product catalog & checkout flow</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-blue-600 text-3xl mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Web Apps</h3>
              <p className="text-gray-600 mb-4 text-sm">
                React, Next.js, Node.js, and TypeScript web applications tailored for specific business logic.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Single-page applications (SPA)</li>
                <li>• Server-side rendering (SSR)</li>
                <li>• REST API & GraphQL integration</li>
                <li>• Scalable cloud architecture</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Landing Pages & Funnels</h3>
              <p className="text-gray-600 mb-4 text-sm">
                High-converting, fast-loading landing pages designed to drive leads and sales for PPC campaigns.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Conversion-optimized layouts</li>
                <li>• Form & CRM integrations</li>
                <li>• Fast loading speed (90+ score)</li>
                <li>• A/B testing setup</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-green-600 text-3xl mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Website Maintenance</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Ongoing updates, security patches, regular backups, uptime monitoring, and technical support.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Core & plugin updates</li>
                <li>• Automated daily backups</li>
                <li>• Security scans & malware cleanup</li>
                <li>• 24/7 uptime monitoring</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-red-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Speed & Security</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Core Web Vitals optimization, caching solutions, SSL enforcement, and vulnerability hardening.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Core Web Vitals compliance</li>
                <li>• CDN setup & caching</li>
                <li>• Database optimization</li>
                <li>• Firewall & DDoS protection</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* How White Label Works */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="How White Label Web Development Works"
            subtitle="5-step streamlined methodology for flawless delivery"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Client Brief', desc: 'You gather requirements', icon: ClipboardList },
              { step: 2, title: 'Planning', desc: 'We create project plan', icon: BarChart3 },
              { step: 3, title: 'Development', desc: 'We build the website', icon: Code },
              { step: 4, title: 'Review', desc: 'You review with client', icon: Eye },
              { step: 5, title: 'Launch', desc: 'Website goes live', icon: Rocket },
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
            subtitle="Everything you need to deliver web development services"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'Project Management', desc: 'White label project tracking', icon: FolderKanban },
              { feature: 'Client Portal', desc: 'Branded client dashboard', icon: Lock },
              { feature: 'Direct Communication', desc: 'You maintain client contact', icon: MessageCircle },
              { feature: 'Development Environment', desc: 'Staging sites for review', icon: Monitor },
              { feature: 'Scalable Pricing', desc: 'Volume-based discounts', icon: DollarSign },
              { feature: '24/7 Support', desc: 'Technical & development support', icon: LifeBuoy },
              { feature: 'Training Resources', desc: 'Agency sales materials', icon: GraduationCap },
              { feature: 'Quality Assurance', desc: 'Comprehensive testing', icon: CheckCircle2 },
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

      {/* Development Process */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Web Development Process"
            subtitle="Structured process for successful project delivery"
            align="center"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { step: 1, title: 'Discovery', desc: 'Requirements gathering', icon: Search },
              { step: 2, title: 'Planning', desc: 'Project scope & timeline', icon: ClipboardList },
              { step: 3, title: 'Design', desc: 'UI/UX design & wireframes', icon: Palette },
              { step: 4, title: 'Development', desc: 'Coding & implementation', icon: Code },
              { step: 5, title: 'Testing', desc: 'QA & bug fixing', icon: TestTube },
              { step: 6, title: 'Launch', desc: 'Deployment & handover', icon: Rocket },
            ].map((item) => {
              const ProcessIcon = item.icon;
              return (
                <Card key={item.step} variant="default" className="p-4 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    {item.step}
                  </div>
                  <div className="text-blue-600 mb-1 flex justify-center"><ProcessIcon className="w-5 h-5" /></div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* White Label Packages */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="White Label Web Development Frameworks"
            subtitle="Production-ready development capacities engineered seamlessly under your agency's brand"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Website', 
                tier: 'Agency Turnkey Site', 
                type: 'Brochure Website',
                features: ['5-7 Pages', 'Responsive Modern Design', 'Contact Form & Lead Capture', 'On-Page SEO', 'CMS Integration', '1 Month Post-Launch Support'],
                color: 'border-blue-200'
              },
              { 
                name: 'Business Website', 
                tier: 'Corporate Platform', 
                type: 'Corporate Website',
                features: ['10-15 Pages', 'Custom UI/UX Architecture', 'Advanced CMS Features', 'Integrated Blog', 'Performance Optimization', '3 Months Dedicated Support', 'White-Label Client Training'],
                color: 'border-purple-300',
                popular: true
              },
              { 
                name: 'E-commerce Store', 
                tier: 'Full Commerce Engine', 
                type: 'Online Store',
                features: ['Full E-commerce Capability', 'Payment Gateway Integration', 'Catalog & Inventory Management', 'ERP Sync Ready', 'Mobile-Responsive UI', '6 Months Support', 'Dedicated Account Manager'],
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
                  <p className="text-gray-600 text-sm mb-6">Type: <span className="font-semibold text-gray-900">{plan.type}</span></p>
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
              *Custom agency volume tiers and enterprise multi-site agreements scoped individually
            </p>
          </div>
        </Container>
      </Section>

      {/* Maintenance Plans */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="White Label Maintenance Frameworks"
            subtitle="Reliable recurring maintenance fulfillment for your agency's client portfolio"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Care', 
                tier: 'Essential Maintenance', 
                features: ['Weekly Backups', 'Security Updates', 'Uptime Monitoring', 'White-Label Bug Fixes', 'Monthly Performance Reports', 'Core Updates'],
                color: 'bg-blue-50/40 border-blue-200'
              },
              { 
                name: 'Professional Care', 
                tier: 'Proactive Optimization', 
                features: ['Daily Backups', 'Advanced Security', 'Speed Optimization', 'Monthly Content Updates', 'Priority Agency SLA', 'Quarterly Review Audits'],
                color: 'bg-purple-50/40 border-purple-300',
                popular: true
              },
              { 
                name: 'Enterprise Care', 
                tier: 'Dedicated SLA', 
                features: ['Real-time Backups', 'Enterprise Hardening', '24/7 Monitoring', 'Active Hours Retainer', 'Emergency Incident Response', 'Strategic Technical Architecture'],
                color: 'bg-yellow-50/40 border-yellow-300'
              },
            ].map((plan) => (
              <Card key={plan.name} variant={plan.popular ? 'featured' : 'default'} className={`${plan.color} p-8 border flex flex-col justify-between`}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-700 mb-4">{plan.tier}</div>
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
                    Discuss Maintenance Retainers
                  </AnimatedButton>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Agency Benefits */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Benefits for Your Agency"
            subtitle="Why agencies choose our white label web development"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Business Growth</h3>
              <ul className="space-y-3">
                {[
                  'Add high-margin web development (70-80% profit)',
                  'Increase project sizes by 3-5x',
                  'Create recurring revenue with maintenance',
                  'Cross-sell to existing marketing clients',
                  'Attract higher-value enterprise clients',
                  'Differentiate from design-only competitors',
                  'Build long-term client partnerships',
                  'Increase agency valuation with diverse services'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Rocket className="w-4 h-4 text-yellow-300 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card variant="default" className="p-8 border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Efficiency</h3>
              <ul className="space-y-3">
                {[
                  'No need to hire web developers',
                  'No software or tool license costs',
                  'No training or certification expenses',
                  'Focus on sales and client relationships',
                  'Professional results without technical expertise',
                  'Scalable as your agency grows',
                  '24/7 technical support',
                  'Expert development team at your service'
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
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Agency Success Story"
            subtitle="See how agencies transform with white label web development"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <Card variant="default" className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-50 text-blue-900 p-6 rounded-xl text-center border border-blue-100">
                    <div className="text-4xl font-bold mb-2">500%</div>
                    <div className="font-semibold text-sm">Revenue Growth</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Marketing Agency Transformation</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Before White Label Web Development:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Only offering digital marketing services</li>
                      <li>• Referring web development work to others</li>
                      <li>• 10 clients, ₹6L/month revenue</li>
                      <li>• Missing website project opportunities</li>
                      <li>• No technical capabilities in-house</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">After White Label Web Development:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Added full web development services</li>
                      <li>• Completed 15 website projects in 6 months</li>
                      <li>• Converted 8 marketing clients to web projects</li>
                      <li>• ₹30L/month revenue (500% growth)</li>
                      <li>• Added ₹2L/month in maintenance revenue</li>
                      <li>• Became full-service digital agency</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-semibold italic text-sm">"White label web development transformed our agency from service provider to full digital partner. We now handle everything from strategy to development, and our clients love the seamless experience."</p>
                    <p className="text-gray-500 mt-1 text-xs">- Agency Founder, 2-year partnership</p>
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
              Ready to Offer Web Development Services?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Add high-margin web development to your agency with complete white label support
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
                <div className="text-xs opacity-90 mt-1">70-80% profit margins</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-semibold flex items-center justify-center gap-1.5 text-sm">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span>Fast Development</span>
                </div>
                <div className="text-xs opacity-90 mt-1">2-6 weeks delivery</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Professional Technology Stack"
            subtitle="Modern technologies for exceptional web development"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tech: 'React.js', color: 'bg-cyan-50 text-cyan-800 border-cyan-100' },
              { tech: 'Next.js', color: 'bg-slate-50 text-slate-800 border-slate-200' },
              { tech: 'Node.js', color: 'bg-emerald-50 text-emerald-800 border-emerald-100' },
              { tech: 'TypeScript', color: 'bg-blue-50 text-blue-800 border-blue-100' },
              { tech: 'WordPress', color: 'bg-sky-50 text-sky-800 border-sky-100' },
              { tech: 'Shopify', color: 'bg-green-50 text-green-800 border-green-100' },
              { tech: 'PHP', color: 'bg-purple-50 text-purple-800 border-purple-100' },
              { tech: 'Python', color: 'bg-yellow-50 text-yellow-800 border-yellow-100' },
              { tech: 'MySQL', color: 'bg-blue-50 text-blue-800 border-blue-100' },
              { tech: 'MongoDB', color: 'bg-green-50 text-green-800 border-green-100' },
              { tech: 'AWS', color: 'bg-amber-50 text-amber-800 border-amber-100' },
              { tech: 'Docker', color: 'bg-blue-50 text-blue-800 border-blue-100' },
            ].map((item, index) => (
              <Card key={index} variant="interactive" className={`${item.color} p-4 text-center font-medium text-sm border`}>
                {item.tech}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="White Label Web Development FAQs"
            subtitle="Frequently asked questions about our web development partnerships"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How do you ensure our clients never know about you?',
                a: 'We work completely behind the scenes. All communication goes through you. Websites are delivered to you for client review, and we never interact directly with your clients. All project management happens through your branded portal.'
              },
              {
                q: 'What if we don\'t have technical or development expertise?',
                a: 'No technical expertise needed! We handle all development work. You focus on gathering requirements and managing client relationships. We provide you with non-technical explanations to share with clients.'
              },
              {
                q: 'How do you handle client revisions and changes?',
                a: 'We include revision rounds in our packages. You collect feedback from clients and share it with us. We make the changes and deliver updated versions. You maintain control of the client relationship throughout.'
              },
              {
                q: 'Can you work with our existing design files?',
                a: 'Yes, we can work with your existing designs from Figma, Adobe XD, Sketch, or even PDFs. We also offer design services if your clients need complete design + development solutions.'
              },
              {
                q: 'What about website hosting and domains?',
                a: 'We can handle hosting setup and domain registration as part of our service. We work with premium hosting providers and can recommend the best solutions for each client\'s needs.'
              },
              {
                q: 'Do you provide training for our clients?',
                a: 'Yes, we provide client training for content management systems. We create video tutorials and documentation that you can share with your clients under your branding.'
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
              <Card variant="default" className="p-8 border border-indigo-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Agency Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital agency or marketing firm',
                    'Minimum 2 active clients',
                    'Professional website and branding',
                    'Client project management experience',
                    'Ability to gather client requirements',
                    'Commitment to quality client service',
                    'Willingness to learn web development process',
                    'Ethical business practices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete web development services',
                    'White label project management portal',
                    'Professional design & development',
                    'Quality assurance & testing',
                    'Hosting & deployment support',
                    'Client training materials',
                    'Agency sales resources',
                    'Dedicated project manager'
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
              <div className="inline-block bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                <p className="text-indigo-900 font-medium text-sm mb-4">
                  Ready to become a white label web development partner? Schedule a demo to see our portfolio and process.
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

export default WhiteLabelWebDevelopment;
