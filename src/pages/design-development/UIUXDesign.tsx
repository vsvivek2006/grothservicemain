// src/pages/design-development/UIUXDesign.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaintBrush, FaMobileAlt, FaUsers, FaRocket, FaPalette, FaPenAlt, FaCheckCircle } from 'react-icons/fa';
import {
  Check,
  Laptop,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Rocket,
  Zap,
  Building2,
  Watch,
  Search,
  ClipboardList,
  Palette,
  RefreshCw,
  TestTube,
  Truck,
  Users,
  Sparkles,
  Eye,
  MessageSquare,
  Lightbulb,
  MousePointer,
  Code,
  Phone,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { primaryPhone } from '../../data/centralizedData';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const UIUXDesign: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Design & Development', path: '/design-development' },
              { label: 'UI/UX Design' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaPaintBrush className="text-4xl text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Professional UI/UX Design
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Create beautiful, intuitive digital experiences that users love and convert better
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Free Design Audit
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Discuss Your Design Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Design Impact Statistics */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="The Power of Great Design"
            subtitle="Good design is good business - and great design drives results"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">94%</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">First Impressions</h3>
              <p className="text-gray-600 leading-relaxed">
                94% of first impressions are design-related. Good design builds immediate trust.
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">400%</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Conversion Increase</h3>
              <p className="text-gray-600 leading-relaxed">
                Well-designed websites convert 400% better than poor designs
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">75%</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Credibility Factor</h3>
              <p className="text-gray-600 leading-relaxed">
                75% of users judge a company's credibility based on website design
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* UI/UX Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Comprehensive UI/UX Design Services"
            subtitle="End-to-end design solutions that combine beauty with functionality"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">User Research & Analysis</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• User persona development</li>
                <li>• User journey mapping</li>
                <li>• Competitor analysis</li>
                <li>• Usability testing</li>
                <li>• User interviews & surveys</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl mb-4">
                <FaPenAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Wireframing & Prototyping</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Low-fidelity wireframes</li>
                <li>• High-fidelity mockups</li>
                <li>• Interactive prototypes</li>
                <li>• User flow diagrams</li>
                <li>• Information architecture</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Visual UI Design</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Color palette creation</li>
                <li>• Typography system</li>
                <li>• Icon design</li>
                <li>• Component library</li>
                <li>• Design system creation</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Responsive Design</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Mobile-first design</li>
                <li>• Tablet optimization</li>
                <li>• Desktop adaptation</li>
                <li>• Cross-device consistency</li>
                <li>• Touch-friendly interfaces</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Interaction Design</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Micro-interactions</li>
                <li>• Animation design</li>
                <li>• Transition effects</li>
                <li>• Gesture design</li>
                <li>• Loading states</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Usability Testing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• A/B testing setup</li>
                <li>• User testing sessions</li>
                <li>• Heatmap analysis</li>
                <li>• Conversion rate optimization</li>
                <li>• Accessibility testing</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Design Platforms */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Platforms We Design For"
            subtitle="Creating seamless experiences across all digital touchpoints"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: 'Web Applications', icon: Laptop, desc: 'SaaS platforms & web apps' },
              { platform: 'Mobile Apps', icon: Smartphone, desc: 'iOS & Android applications' },
              { platform: 'E-commerce', icon: ShoppingCart, desc: 'Online stores & marketplaces' },
              { platform: 'Dashboards', icon: BarChart3, desc: 'Admin panels & analytics' },
              { platform: 'Landing Pages', icon: Rocket, desc: 'High-converting pages' },
              { platform: 'Progressive Web Apps', icon: Zap, desc: 'Fast web experiences' },
              { platform: 'Enterprise Software', icon: Building2, desc: 'Business applications' },
              { platform: 'Wearables', icon: Watch, desc: 'Smartwatch & IoT interfaces' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="interactive" padding="default" className="text-left">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.platform}</h3>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Design Process */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our 6-Step UI/UX Design Process"
            subtitle="Iterative, user-tested engineering roadmap from empathy to design system delivery"
            centered
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {[
                { step: 1, title: 'Discover', desc: 'Research & analysis', icon: Search },
                { step: 2, title: 'Define', desc: 'Strategy & planning', icon: ClipboardList },
                { step: 3, title: 'Design', desc: 'Wireframes & visuals', icon: Palette },
                { step: 4, title: 'Prototype', desc: 'Interactive models', icon: RefreshCw },
                { step: 5, title: 'Test', desc: 'User feedback & testing', icon: TestTube },
                { step: 6, title: 'Deliver', desc: 'Final assets & handoff', icon: Truck },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="text-center">
                    <div className="relative mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-md">
                        {item.step}
                      </div>
                      {item.step < 6 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-100 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="flex justify-center text-indigo-600 mb-2"><Icon className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Design Principles */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Design Principles"
            subtitle="Core principles that guide every design decision we make"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { principle: 'User-Centered', desc: 'Design for real user needs', icon: Users },
              { principle: 'Simplicity', desc: 'Less is more in design', icon: Sparkles },
              { principle: 'Consistency', desc: 'Uniform patterns & behaviors', icon: RefreshCw },
              { principle: 'Accessibility', desc: 'Design for everyone', icon: Eye },
              { principle: 'Feedback', desc: 'Clear system responses', icon: MessageSquare },
              { principle: 'Efficiency', desc: 'Minimize user effort', icon: Zap },
              { principle: 'Aesthetics', desc: 'Beautiful visual experiences', icon: Palette },
              { principle: 'Innovation', desc: 'Push creative boundaries', icon: Lightbulb },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="default" padding="default" className="text-left">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base mb-1 text-gray-900">{item.principle}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Design Deliverables */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Design Deliverables"
            subtitle="Everything you need for successful implementation"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                deliverable: 'Design System',
                items: ['Color palette', 'Typography scale', 'Component library', 'Icon set'],
                icon: Palette
              },
              {
                deliverable: 'Interactive Prototypes',
                items: ['Clickable prototypes', 'User flow animations', 'Micro-interactions', 'Mobile gestures'],
                icon: MousePointer
              },
              {
                deliverable: 'Developer Handoff',
                items: ['Design specs', 'Assets export', 'Style guides', 'Responsive guidelines'],
                icon: Code
              },
              {
                deliverable: 'Research Documentation',
                items: ['User personas', 'Journey maps', 'Usability reports', 'Competitor analysis'],
                icon: BarChart3
              },
              {
                deliverable: 'Responsive Designs',
                items: ['Mobile designs', 'Tablet layouts', 'Desktop views', 'Breakpoint specs'],
                icon: Smartphone
              },
              {
                deliverable: 'Accessibility Report',
                items: ['WCAG compliance', 'Color contrast', 'Keyboard navigation', 'Screen reader support'],
                icon: Eye
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="interactive" padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">{item.deliverable}</h3>
                  <ul className="space-y-2">
                    {item.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className="text-purple-600 mr-2 font-bold">•</span>
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Tools We Use */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Professional Design Tools"
            subtitle="Industry-standard tools for world-class design work"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tool: 'Figma', color: 'bg-purple-50 border-purple-200 text-purple-900' },
              { tool: 'Adobe XD', color: 'bg-pink-50 border-pink-200 text-pink-900' },
              { tool: 'Sketch', color: 'bg-amber-50 border-amber-200 text-amber-900' },
              { tool: 'InVision', color: 'bg-blue-50 border-blue-200 text-blue-900' },
              { tool: 'Creative Cloud', color: 'bg-rose-50 border-rose-200 text-rose-900' },
              { tool: 'Webflow', color: 'bg-cyan-50 border-cyan-200 text-cyan-900' },
              { tool: 'ProtoPie', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
              { tool: 'Framer', color: 'bg-gray-50 border-gray-200 text-gray-900' },
              { tool: 'Miro', color: 'bg-orange-50 border-orange-200 text-orange-900' },
              { tool: 'Zeplin', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
              { tool: 'Hotjar', color: 'bg-red-50 border-red-200 text-red-900' },
              { tool: 'UserTesting', color: 'bg-teal-50 border-teal-200 text-teal-900' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} border p-4 rounded-xl text-center font-medium text-sm shadow-sm`}>
                {item.tool}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Design Packages */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="UI/UX Design Engagement Frameworks"
            subtitle="Human-centered product design, interactive prototypes, and scalable design systems"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Design', 
                tier: 'Focused Flow & Wireframes', 
                scope: 'Single Platform Design',
                features: ['Up to 10 Screens', 'Basic UI Design', 'Wireframing', 'Color Palette & Typography', 'Clickable Prototype', 'Design Handoff Assets'],
                popular: false
              },
              { 
                name: 'Professional Design', 
                tier: 'Multi-Platform Product Design', 
                scope: 'Cross-Platform Applications',
                features: ['Up to 30 Screens', 'Complete UI/UX Design', 'Interactive High-Fidelity Prototypes', 'Design System & Component Library', 'User Usability Testing', 'Responsive Layouts'],
                popular: true
              },
              { 
                name: 'Enterprise Design', 
                tier: 'Full Product Architecture', 
                scope: 'End-to-End Enterprise Software',
                features: ['Full Product Architecture', 'End-to-End UX Process', 'Advanced Prototyping & Motion Design', 'Enterprise Design System Creation', 'User Research & Journey Mapping', 'WCAG Accessibility Audit', 'Design-to-Engineering Oversight'],
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
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md whitespace-nowrap z-10">
                    RECOMMENDED SCOPE
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-lg font-bold text-purple-900 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 mb-6 text-sm">Scope: <span className="font-semibold text-gray-800">{plan.scope}</span></p>
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
                  Discuss Design Scope
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Complex SaaS platforms, design system governance, and mobile design sprints scoped individually
            </p>
          </div>
        </Container>
      </Section>

      {/* Design Impact */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Design ROI & Impact"
            subtitle="How good design translates to measurable business success"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white p-8 rounded-2xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-300">Business Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Higher conversion rates (up to 400%)',
                    'Reduced development costs (by 50%)',
                    'Lower customer support requests',
                    'Increased user engagement & retention',
                    'Competitive differentiation',
                    'Brand credibility & trust',
                    'Faster time-to-market',
                    'Improved customer satisfaction'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-emerald-400 mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Card variant="default" padding="lg" className="flex flex-col justify-between border-purple-200">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">User Experience Metrics</h3>
                <ul className="space-y-4">
                  {[
                    'Task completion rate improvement',
                    'Error rate reduction',
                    'Time-on-task decrease',
                    'User satisfaction increase (NPS)',
                    'Learning curve reduction',
                    'Accessibility compliance',
                    'Mobile experience optimization',
                    'Cross-platform consistency'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <span className="text-purple-600 mr-3 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Let's create beautiful, functional designs that users love and businesses thrive on
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/book-call"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Free Design Consultation
              </AnimatedButton>
              <Button
                href={getTelHref(primaryPhone)}
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-yellow-300" />
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
                <span>WhatsApp Design Expert</span>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Palette className="w-4 h-4 text-yellow-300" />
                  <span>Award-Winning Designers</span>
                </div>
                <div className="text-sm opacity-80">Creative professionals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Rocket className="w-4 h-4 text-yellow-300" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="text-sm opacity-80">2-4 weeks delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                  <span>Satisfaction Guarantee</span>
                </div>
                <div className="text-sm opacity-80">Unlimited revisions</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Design Portfolio */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Design Portfolio Preview"
            subtitle="Selected user experience engagements across ecommerce, SaaS, and mobile platforms"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'E-commerce UI',
                project: 'Fashion Store Redesign',
                highlights: ['Mobile-first design', 'Shopping cart optimization', 'Product discovery'],
              },
              {
                category: 'SaaS Dashboard',
                project: 'Analytics Platform',
                highlights: ['Data visualization', 'Complex interactions', 'User workflow'],
              },
              {
                category: 'Mobile App',
                project: 'Fitness Tracking App',
                highlights: ['Health metrics display', 'Activity tracking', 'Social features'],
              },
            ].map((project, index) => (
              <Card key={index} variant="interactive" padding="lg" className="flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">{project.project}</h3>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className="text-purple-600 mr-2 font-bold">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/portfolio"
                  className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center text-sm"
                >
                  View Case Study
                  <span className="ml-2">→</span>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-base"
            >
              View Full Design Portfolio
              <span className="ml-2">→</span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Design FAQ */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="UI/UX Design FAQs"
            subtitle="Common questions about our process, tooling, and deliverables"
            centered
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What\'s the difference between UI and UX design?',
                a: 'UI (User Interface) focuses on the visual elements - colors, typography, buttons, etc. UX (User Experience) focuses on the overall feel and functionality - user flow, research, testing, etc. We provide both for complete digital experiences.'
              },
              {
                q: 'How long does a typical UI/UX project take?',
                a: 'Basic projects: 2-3 weeks, Medium projects: 3-6 weeks, Complex projects: 6-12+ weeks. Timeline depends on scope, complexity, and number of screens.'
              },
              {
                q: 'Do you provide design files to developers?',
                a: 'Yes, we provide complete design handoff packages including design specs, assets, style guides, and responsive guidelines for smooth developer implementation.'
              },
              {
                q: 'Can you redesign an existing website/app?',
                a: 'Absolutely! We specialize in redesign projects that improve user experience while maintaining brand identity and improving conversion rates.'
              },
              {
                q: 'Do you conduct user testing?',
                a: 'Yes, user testing is part of our process. We conduct usability tests, A/B tests, and gather user feedback to validate design decisions.'
              },
              {
                q: 'What design tools do you use?',
                a: 'We primarily use Figma for collaborative design, along with Adobe Creative Suite, Sketch, InVision, and prototyping tools for interactive designs.'
              }
            ].map((faq, index) => (
              <Card key={index} variant="default" padding="default">
                <h3 className="font-semibold text-base text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default UIUXDesign;
