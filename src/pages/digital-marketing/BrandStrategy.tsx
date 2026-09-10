// src/pages/digital-marketing/BrandStrategy.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaChessKing, FaBullseye, FaUsers, FaPalette, FaChartLine, FaRocket, FaLightbulb, FaGlobe, FaHeart, FaCrown } from 'react-icons/fa';
import {
  Check,
  Landmark,
  Search,
  Brain,
  Palette,
  Rocket,
  RefreshCw,
  Award,
  Phone,
  MessageCircle,
  TrendingUp,
  Globe
} from 'lucide-react';
import { primaryPhone } from '../../data/centralizedData';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const BrandStrategy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Digital Marketing', path: '/digital-marketing' },
              { label: 'Brand Strategy' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaChessKing className="text-4xl text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Strategic Brand Development
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Build a powerful, memorable brand that connects with customers and dominates your market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Brand Audit
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900"
              >
                Book Strategy Session
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Brand Strategy Matters */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="The Power of Strong Branding"
            subtitle="A strong brand is more than just a logo - it's your business's most valuable asset"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 text-purple-600">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">23% Higher Revenue</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Strong brands command 23% more revenue than weak brands in the same market
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Loyalty</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                64% of consumers cite shared values as the primary reason for brand loyalty
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mx-auto mb-4 text-pink-600">
                <FaCrown className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Market Leadership</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Strong brands are 3x more likely to achieve market leadership positions
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Brand Strategy Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Comprehensive Brand Strategy Services"
            subtitle="End-to-end brand development from foundation to market dominance"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Brand Discovery & Research</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Market analysis & competitor audit</li>
                <li>• Target audience profiling</li>
                <li>• Brand positioning strategy</li>
                <li>• SWOT analysis</li>
                <li>• Brand archetype identification</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Brand Positioning</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Unique Value Proposition (UVP)</li>
                <li>• Brand promise development</li>
                <li>• Competitive differentiation</li>
                <li>• Brand messaging framework</li>
                <li>• Elevator pitch creation</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Visual Identity Design</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Logo design & variations</li>
                <li>• Color palette development</li>
                <li>• Typography system</li>
                <li>• Brand style guide</li>
                <li>• Visual assets creation</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Brand Voice & Personality</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Brand voice development</li>
                <li>• Tone of voice guidelines</li>
                <li>• Brand personality traits</li>
                <li>• Messaging hierarchy</li>
                <li>• Content style guide</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Brand Launch Strategy</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Go-to-market strategy</li>
                <li>• Launch campaign planning</li>
                <li>• Media & PR outreach</li>
                <li>• Influencer partnerships</li>
                <li>• Launch timeline development</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Brand Management</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Brand guidelines enforcement</li>
                <li>• Brand health monitoring</li>
                <li>• Brand extension strategies</li>
                <li>• Rebranding strategies</li>
                <li>• Internal brand training</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Brand Strategy Framework */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our 7-Pillar Brand Strategy Framework"
            subtitle="A comprehensive approach to building unforgettable brands"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { pillar: 'Purpose', desc: 'Why your brand exists', color: 'bg-purple-50 border-purple-200 text-purple-900' },
              { pillar: 'Vision', desc: 'Where your brand is going', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
              { pillar: 'Values', desc: 'What your brand stands for', color: 'bg-blue-50 border-blue-200 text-blue-900' },
              { pillar: 'Positioning', desc: 'Your unique market space', color: 'bg-pink-50 border-pink-200 text-pink-900' },
              { pillar: 'Personality', desc: 'Human traits of your brand', color: 'bg-amber-50 border-amber-200 text-amber-900' },
              { pillar: 'Promise', desc: 'Commitment to customers', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
              { pillar: 'Performance', desc: 'Delivering on promises', color: 'bg-rose-50 border-rose-200 text-rose-900' },
              { pillar: 'Perception', desc: 'How customers see you', color: 'bg-teal-50 border-teal-200 text-teal-900' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} border p-6 rounded-2xl shadow-sm`}>
                <div className="text-purple-700 mb-3"><Landmark className="w-6 h-6" /></div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">{item.pillar}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brand Strategy Process */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Brand Strategy Development Process"
            subtitle="Iterative, insights-driven methodology powering iconic brand positioning"
            centered
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Discovery', desc: 'Research & analysis', icon: Search },
                { step: 2, title: 'Strategy', desc: 'Framework development', icon: Brain },
                { step: 3, title: 'Creation', desc: 'Brand identity design', icon: Palette },
                { step: 4, title: 'Implementation', desc: 'Launch & activation', icon: Rocket },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="text-center">
                    <div className="relative mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-md">
                        {item.step}
                      </div>
                      {item.step < 4 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-100 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="flex justify-center text-indigo-600 mb-2"><Icon className="w-6 h-6" /></div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <Card variant="default" padding="default" className="inline-block border-indigo-200">
                <div className="flex justify-center text-indigo-600 mb-2"><RefreshCw className="w-6 h-6" /></div>
                <h3 className="font-semibold text-gray-900">Phase 5: Growth & Evolution</h3>
                <p className="text-gray-600 text-sm">Ongoing brand management and optimization</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Brand Metrics */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Measuring Brand Success"
            subtitle="Key metrics we track to measure brand strength and growth"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: 'Brand Awareness', value: '85%', desc: 'Target market recognition' },
              { metric: 'Brand Recall', value: '72%', desc: 'Unaided brand memory' },
              { metric: 'Brand Loyalty', value: '68%', desc: 'Repeat customer rate' },
              { metric: 'Brand Equity', value: '+40%', desc: 'Price premium achievable' },
              { metric: 'Brand Sentiment', value: '4.8/5', desc: 'Positive perception score' },
              { metric: 'Market Share', value: '+25%', desc: 'Share growth in category' },
              { metric: 'Employee Advocacy', value: '91%', desc: 'Staff brand promotion' },
              { metric: 'Social Mention', value: '300%', desc: 'Online brand mentions' },
            ].map((item, index) => (
              <Card key={index} variant="default" padding="default" className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">{item.value}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.metric}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Brand Transformation Case Studies"
            subtitle="See how we've helped businesses build powerful brands"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Tech Startup',
                challenge: 'Weak differentiation in crowded market',
                solution: 'Developed unique brand positioning and visual identity',
                results: ['200% increase in brand recall', '40% growth in qualified leads', 'Secured Series A funding']
              },
              {
                industry: 'Retail Brand',
                challenge: 'Outdated brand perception',
                solution: 'Complete rebranding and digital transformation',
                results: ['150% increase in online sales', '300% social media growth', 'Won 3 design awards']
              },
              {
                industry: 'Service Business',
                challenge: 'Inconsistent brand experience',
                solution: 'Comprehensive brand guidelines and training',
                results: ['95% customer satisfaction', '50% reduction in marketing costs', 'Expanded to 3 new cities']
              },
            ].map((caseStudy, index) => (
              <Card key={index} variant="interactive" padding="lg" className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{caseStudy.industry}</h3>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wider mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wider mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs uppercase tracking-wider mb-2">Results:</h4>
                  <ul className="space-y-1.5">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brand Strategy Packages */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Brand Strategy Engagement Frameworks"
            subtitle="Strategic brand architecture and identity systems designed for businesses at every milestone"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Brand Foundation', 
                tier: 'Identity & Core Positioning', 
                idealFor: 'Startups & Emerging Ventures',
                features: ['Brand Discovery Workshop', 'Brand Positioning Strategy', 'Logo & Basic Visual Identity', 'Brand Voice Guidelines', '3-Month Advisory Support'],
                popular: false
              },
              { 
                name: 'Brand Growth', 
                tier: 'Complete Market Identity', 
                idealFor: 'Scaling Businesses & Scale-ups',
                features: ['Complete Brand Strategy', 'Full Visual Identity System', 'Brand Guidelines Manual', 'Launch Strategy', 'Employee Brand Training', '6-Month Partnership Support'],
                popular: true
              },
              { 
                name: 'Brand Transformation', 
                tier: 'Full Enterprise Rebranding', 
                idealFor: 'Established Companies & Conglomerates',
                features: ['Enterprise Brand Audit', 'Complete Rebranding', 'Multi-channel Implementation', 'Internal Comms Strategy', 'Brand Performance Tracking', '12-Month Advisory Partnership'],
                popular: false
              },
            ].map((plan) => (
              <Card 
                key={plan.name} 
                variant={plan.popular ? 'featured' : 'default'} 
                padding="lg" 
                className="relative flex flex-col justify-between"
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md">
                    RECOMMENDED SCOPE
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-lg font-bold text-purple-900 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 mb-6 text-sm">Ideal for: <span className="font-semibold text-gray-800">{plan.idealFor}</span></p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                        {feature}
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
                  Discuss Brand Strategy
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Enterprise brand transformations and multi-brand architectures scoped individually
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build a Legendary Brand?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Your brand is your most valuable asset. Let's build it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/book-call"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Free Brand Audit
              </AnimatedButton>
              <Button
                href={getTelHref(primaryPhone)}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {primaryPhone}</span>
              </Button>
              <Button
                href={getNepalWhatsAppUrl()}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 border-none text-white inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>Award-Winning Team</span>
                </div>
                <div className="text-sm opacity-80">Brand strategy experts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-yellow-300" />
                  <span>Proven Results</span>
                </div>
                <div className="text-sm opacity-80">200+ successful brand projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-yellow-300" />
                  <span>Global Perspective</span>
                </div>
                <div className="text-sm opacity-80">Local insights, global standards</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Brand Strategy Checklist */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Brand Strategy Checklist"
            subtitle="Essential strategic touchpoints every market-leading brand must establish"
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <Card variant="default" padding="lg">
              <div className="space-y-3">
                {[
                  'Clear brand purpose and mission statement',
                  'Defined target audience personas',
                  'Unique value proposition (UVP)',
                  'Competitive positioning strategy',
                  'Brand personality traits',
                  'Core brand values',
                  'Brand voice and tone guidelines',
                  'Visual identity system (logo, colors, typography)',
                  'Brand messaging framework',
                  'Brand touchpoints mapping',
                  'Customer experience journey',
                  'Brand measurement metrics',
                  'Internal brand training program',
                  'Brand guidelines document',
                  'Launch and activation plan'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 ${index < 5 ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-500 font-medium text-xs'}`}>
                      {index < 5 ? <Check className="w-3.5 h-3.5" /> : index + 1}
                    </div>
                    <span className={`${index < 5 ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-xl text-center">
                <p className="text-purple-900 text-sm">
                  <span className="font-semibold">How many does your brand have?</span> Schedule a free brand audit to find out!
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default BrandStrategy;
