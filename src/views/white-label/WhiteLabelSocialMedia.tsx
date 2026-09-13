import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaPinterest, FaUsers, FaChartLine, FaCalendarAlt, FaPalette, FaComment, FaRocket } from 'react-icons/fa';
import {
  ClipboardList,
  Target,
  Palette as LucidePalette,
  BarChart3,
  Tag,
  Calendar,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Users as LucideUsers,
  Bot,
  LifeBuoy,
  Phone,
  MessageCircle,
  Share2,
  DollarSign,
  Smartphone,
  Check,
  Zap,
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

const WhiteLabelSocialMedia = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>White Label Social Media Management Services | Growth Service</title>
        <meta 
          name="description" 
          content="Offer premium social media services under your brand with our complete white label solution. Turnkey creative assets, 60-70% profit margins, and 100% white label fulfillment." 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/white-label-smo`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 space-x-6 text-white/90">
              <FaFacebook className="text-4xl" />
              <FaInstagram className="text-4xl" />
              <FaLinkedin className="text-4xl" />
              <FaTiktok className="text-4xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Label Social Media Management
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Offer premium social media services under your brand with our complete white label solution
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
                to="/white-label"
                variant="outline-white"
                size="lg"
              >
                View All White Label Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why White Label Social Media */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Scale Your Agency with White Label Social Media"
            subtitle="Add recurring revenue streams without the overhead of building an in-house content team"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">60-70% Profit Margin</h3>
              <p className="text-gray-600 text-sm">
                Resell our social media packages at your own prices and keep substantial margins
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Immediate Capacity</h3>
              <p className="text-gray-600 text-sm">
                Onboard 10+ clients this month without worrying about hiring or bandwidth
              </p>
            </Card>
            
            <Card variant="interactive" className="p-8 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">100% White Label</h3>
              <p className="text-gray-600 text-sm">
                Complete brand invisibility. Your clients will only see your agency's branding
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Social Media Services We Manage */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Complete Social Media Management Suite"
            subtitle="Everything your clients need to succeed across all major social networks"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" className="p-8">
              <div className="text-purple-600 text-3xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Content Creation & Design</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Custom branded graphics, short-form videos, carousels, and stories designed by our creative team.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Custom branded templates</li>
                <li>• Reels, TikToks & Shorts</li>
                <li>• Carousel post design</li>
                <li>• Engaging story content</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-blue-600 text-3xl mb-4">
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Strategy & Scheduling</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Monthly content calendars, hashtag strategies, and optimal posting time analysis for every platform.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• 30-day content calendar</li>
                <li>• Niche hashtag research</li>
                <li>• Optimal timing scheduling</li>
                <li>• Multi-platform distribution</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaComment />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Management</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Active engagement, comment responses, direct message triage, and proactive outreach to build community.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Daily comment monitoring</li>
                <li>• DM triage & responses</li>
                <li>• Proactive niche outreach</li>
                <li>• Brand reputation management</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-green-600 text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Custom white-label reports showing follower growth, engagement rates, top posts, and ROI metrics.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Monthly white-label reports</li>
                <li>• Engagement & growth metrics</li>
                <li>• Top performing content audit</li>
                <li>• Audience demographic insights</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Audience Growth</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Organic growth strategies, influencer collaborations, and contest management to build real audiences.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Organic engagement tactics</li>
                <li>• Micro-influencer outreach</li>
                <li>• Giveaway & contest management</li>
                <li>• Cross-platform promotion</li>
              </ul>
            </Card>
            
            <Card variant="default" className="p-8">
              <div className="text-red-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Paid Social Add-on</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Seamlessly boost top-performing organic posts or run dedicated ad campaigns on Meta, LinkedIn, and TikTok.
              </p>
              <ul className="text-gray-500 space-y-1.5 text-xs">
                <li>• Post boosting management</li>
                <li>• Lead gen ad campaigns</li>
                <li>• Retargeting audiences</li>
                <li>• Ad spend ROI reporting</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Platforms Covered */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Social Platforms We Manage"
            subtitle="Complete coverage across every major social media channel"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: 'Facebook', icon: <FaFacebook className="text-3xl text-blue-600" />, color: 'bg-blue-50 text-blue-900 border-blue-100' },
              { platform: 'Instagram', icon: <FaInstagram className="text-3xl text-pink-600" />, color: 'bg-pink-50 text-pink-900 border-pink-100' },
              { platform: 'LinkedIn', icon: <FaLinkedin className="text-3xl text-blue-700" />, color: 'bg-blue-50 text-blue-900 border-blue-100' },
              { platform: 'Twitter/X', icon: <FaTwitter className="text-3xl text-sky-500" />, color: 'bg-sky-50 text-sky-900 border-sky-100' },
              { platform: 'YouTube', icon: <FaYoutube className="text-3xl text-red-600" />, color: 'bg-red-50 text-red-900 border-red-100' },
              { platform: 'TikTok', icon: <FaTiktok className="text-3xl text-gray-900" />, color: 'bg-gray-100 text-gray-900 border-gray-200' },
              { platform: 'Pinterest', icon: <FaPinterest className="text-3xl text-red-600" />, color: 'bg-red-50 text-red-900 border-red-100' },
              { platform: 'Threads', icon: <Share2 className="w-7 h-7 mx-auto text-gray-800" />, color: 'bg-gray-50 text-gray-900 border-gray-200' },
            ].map((item, index) => (
              <Card key={index} variant="interactive" className={`${item.color} p-6 text-center border`}>
                <div className="flex justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg">{item.platform}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How White Label Works */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="How White Label Social Media Works"
            subtitle="Transparent 4-step workflow to empower seamless client satisfaction"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Client Onboarding', desc: 'Share client details & access', icon: ClipboardList },
              { step: 2, title: 'Strategy Development', desc: 'Create monthly content plan', icon: Target },
              { step: 3, title: 'Content Creation', desc: 'Design & schedule posts', icon: LucidePalette },
              { step: 4, title: 'Management & Reporting', desc: 'Engage & report results', icon: BarChart3 },
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
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="White Label Platform Features"
            subtitle="Everything you need to manage social media for your clients"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'White Label Dashboard', desc: 'Your branding, your clients', icon: Tag },
              { feature: 'Content Calendar', desc: 'Monthly scheduling & planning', icon: Calendar },
              { feature: 'Content Library', desc: 'Branded templates & assets', icon: BookOpen },
              { feature: 'Analytics Dashboard', desc: 'Performance tracking', icon: TrendingUp },
              { feature: 'Approval Workflows', desc: 'Client content approval', icon: CheckCircle2 },
              { feature: 'Collaboration Tools', desc: 'Team & client collaboration', icon: LucideUsers },
              { feature: 'Automated Reporting', desc: 'Monthly client reports', icon: Bot },
              { feature: '24/7 Support', desc: 'Technical & strategic support', icon: LifeBuoy },
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

      {/* Typical Results */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Typical Social Media Results"
            subtitle="What your clients can expect from our services"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '200-300%', label: 'Engagement Increase', desc: 'Within 3 months' },
              { metric: '150%', label: 'Follower Growth', desc: 'Organic growth rate' },
              { metric: '40%', label: 'Cost Reduction', desc: 'Lower acquisition cost' },
              { metric: '5x', label: 'ROI Increase', desc: 'Return on investment' },
              { metric: '24/7', label: 'Community Management', desc: 'Always-on engagement' },
              { metric: 'Daily', label: 'Content Publishing', desc: 'Consistent presence' },
              { metric: 'Monthly', label: 'Strategy Reviews', desc: 'Performance optimization' },
              { metric: '100%', label: 'White Label', desc: 'Your brand only' },
            ].map((item, index) => (
              <Card key={index} variant="default" className="p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">{item.metric}</div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.label}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* White Label Packages */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="White Label Social Media Frameworks"
            subtitle="Turnkey social media management and creative execution delivered under your agency brand"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Social', 
                tier: 'Brand Visibility & Consistency', 
                platforms: '2 Core Platforms',
                features: ['12 Posts/Month', 'Brand-Aligned Creatives', 'Active Community Engagement', 'White-Label Monthly Reports', 'Curated Content Calendar', 'Dedicated Email Support'],
                color: 'border-blue-200'
              },
              { 
                name: 'Professional Social', 
                tier: 'High-Growth & Multimedia', 
                platforms: '3-4 Multi-Platforms',
                features: ['24 Posts/Month', 'High-Fidelity Visuals & Motion', 'Reels & Video Content Creation', 'Audience Growth & Engagement', 'Bi-Weekly White-Label Reports', 'Strategic Client Reviews', 'Priority Phone Support'],
                color: 'border-purple-300',
                popular: true
              },
              { 
                name: 'Enterprise Social', 
                tier: 'Full Brand Authority & Ads', 
                platforms: '5+ Cross-Platform Channels',
                features: ['Daily High-Impact Posts', 'Bespoke Motion & Video Assets', 'Influencer & Creator Outreach', 'Organic + Paid Amplification', 'Brand Reputation Management', 'Dedicated Senior Manager', 'Custom Turnaround SLAs'],
                color: 'border-yellow-300'
              },
            ].map((plan) => (
              <Card key={plan.name} variant={plan.popular ? 'featured' : 'default'} className={`border-2 ${plan.color} p-8 relative flex flex-col justify-between`}>
                <div>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap z-10">
                      MOST REQUESTED
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-700 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 text-sm mb-6">Platforms: <span className="font-semibold text-gray-900">{plan.platforms}</span></p>
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
              *Agency volume retainers and multi-client bundled contracts scoped individually
            </p>
          </div>
        </Container>
      </Section>

      {/* Agency Benefits */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Benefits for Your Agency"
            subtitle="Why agencies choose our white label solution"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Business Growth</h3>
              <ul className="space-y-3">
                {[
                  'Add high-margin social media services (60-70% profit)',
                  'Increase average client value by 2-3x',
                  'Create predictable monthly recurring revenue',
                  'Cross-sell to existing web design/SEO clients',
                  'Attract clients wanting complete digital solutions',
                  'Differentiate from single-service competitors',
                  'Build long-term client relationships',
                  'Increase agency valuation with recurring revenue'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <LucideRocket className="w-4 h-4 text-yellow-300 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card variant="default" className="p-8 border border-purple-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Operational Efficiency</h3>
              <ul className="space-y-3">
                {[
                  'No need to hire social media managers',
                  'No design software or tool costs',
                  'No training or certification expenses',
                  'Focus on client acquisition & relationships',
                  'Professional results without in-house expertise',
                  'Scalable as your agency grows',
                  '24/7 content scheduling & monitoring',
                  'Expert creative team at your service'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-sm">
                    <Zap className="w-4 h-4 text-purple-600 mr-3 shrink-0" />
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
            subtitle="See how agencies grow with white label social media"
            align="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <Card variant="default" className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-purple-50 text-purple-900 p-6 rounded-xl text-center border border-purple-100">
                    <div className="text-4xl font-bold mb-2">400%</div>
                    <div className="font-semibold text-sm">Revenue Growth</div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Marketing Agency Expansion</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Before White Label Social Media:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Only offering PPC and SEO services</li>
                      <li>• Clients asking for social media help</li>
                      <li>• 7 clients, ₹5L/month revenue</li>
                      <li>• Turning away social media requests</li>
                      <li>• Missing full-service opportunities</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">After White Label Social Media:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Added social media management services</li>
                      <li>• Converted 5 existing clients to social media</li>
                      <li>• Acquired 8 new social media-only clients</li>
                      <li>• ₹20L/month revenue (400% growth)</li>
                      <li>• 90% client retention rate</li>
                      <li>• Became complete digital marketing agency</li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-semibold italic text-sm">"White label social media allowed us to become a full-service agency overnight. Our clients love the content we create, and they never know we have a team behind us. It's been transformational for our growth."</p>
                    <p className="text-gray-500 mt-1 text-xs">- Agency Director, 18-month partnership</p>
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
              Ready to Offer Social Media Services?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Add high-margin social media management to your agency with complete white label support
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
                href={getTelHref(getPrimaryPhone())}
                variant="outline-white"
                size="lg"
                className="inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-yellow-300" />
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
                <div className="text-xs opacity-90 mt-1">60-70% profit margins</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="font-semibold flex items-center justify-center gap-1.5 text-sm">
                  <Smartphone className="w-4 h-4 text-yellow-300" />
                  <span>All Platforms</span>
                </div>
                <div className="text-xs opacity-90 mt-1">8+ social platforms</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tools & Technology */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Professional Social Media Tools"
            subtitle="Industry-standard tools we use for exceptional results"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tool: 'Later', color: 'bg-pink-50 text-pink-800 border-pink-100' },
              { tool: 'Buffer', color: 'bg-blue-50 text-blue-800 border-blue-100' },
              { tool: 'Hootsuite', color: 'bg-amber-50 text-amber-800 border-amber-100' },
              { tool: 'Canva Pro', color: 'bg-sky-50 text-sky-800 border-sky-100' },
              { tool: 'Adobe Creative Cloud', color: 'bg-red-50 text-red-800 border-red-100' },
              { tool: 'Sprout Social', color: 'bg-emerald-50 text-emerald-800 border-emerald-100' },
              { tool: 'Meta Business Suite', color: 'bg-blue-50 text-blue-800 border-blue-100' },
              { tool: 'TweetDeck', color: 'bg-slate-50 text-slate-800 border-slate-200' },
              { tool: 'LinkedIn Creator', color: 'bg-blue-50 text-blue-800 border-blue-100' },
              { tool: 'TikTok Creator', color: 'bg-gray-100 text-gray-900 border-gray-200' },
              { tool: 'Google Analytics', color: 'bg-yellow-50 text-yellow-800 border-yellow-100' },
              { tool: 'Brandwatch', color: 'bg-purple-50 text-purple-800 border-purple-100' },
            ].map((item, index) => (
              <Card key={index} variant="interactive" className={`${item.color} p-4 text-center font-medium text-sm border`}>
                {item.tool}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="White Label Social Media FAQs"
            subtitle="Frequently asked questions regarding our agency white label social partnership"
            align="center"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How do you ensure our clients never know about you?',
                a: 'We work completely behind the scenes. All communication goes through you. Content is posted from your client\'s accounts, reports are branded with your logo, and we never interact directly with your clients.'
              },
              {
                q: 'What if we don\'t have social media expertise?',
                a: 'No expertise needed! We handle everything - strategy, content creation, posting, engagement, and reporting. You focus on client relationships while we deliver professional social media management.'
              },
              {
                q: 'How quickly can you start managing a client?',
                a: 'We can onboard new clients within 48 hours. Once we receive access and brand guidelines, we can begin strategy development and content creation immediately.'
              },
              {
                q: 'Can clients approve content before it\'s posted?',
                a: 'Yes, we offer content approval workflows. Clients can review and approve content through your white label dashboard before it\'s scheduled for posting.'
              },
              {
                q: 'How do you handle negative comments or crises?',
                a: 'We have established crisis management protocols. We monitor all comments 24/7 and follow your brand\'s guidelines for handling negative situations. We escalate serious issues to you immediately.'
              },
              {
                q: 'What about platform algorithm changes?',
                a: 'Our team stays updated with all platform algorithm changes and adapts strategies accordingly. We continuously optimize content for maximum reach and engagement based on current best practices.'
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
              <Card variant="default" className="p-8 border border-purple-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Agency Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Registered digital agency or marketing firm',
                    'Minimum 2 active clients',
                    'Professional website and branding',
                    'Client management experience',
                    'Commitment to 3-month minimum',
                    'Ability to provide brand guidelines',
                    'Willingness to learn social media benefits',
                    'Ethical business practices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-purple-600 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">We Provide</h3>
                <ul className="space-y-3">
                  {[
                    'Complete social media management',
                    'White label dashboard & reporting',
                    'Monthly content strategy & calendars',
                    'Professional content creation',
                    '24/7 community management',
                    'Performance analytics & insights',
                    'Agency training & resources',
                    'Dedicated account manager'
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
              <div className="inline-block bg-purple-50 border border-purple-200 p-6 rounded-xl">
                <p className="text-purple-900 font-medium text-sm mb-4">
                  Ready to become a white label social media partner? Schedule a demo to see our platform in action.
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

export default WhiteLabelSocialMedia;
