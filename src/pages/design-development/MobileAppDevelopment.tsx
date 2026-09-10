// src/pages/design-development/MobileAppDevelopment.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaApple, FaAndroid, FaCode, FaShieldAlt, FaCloud, FaSync, FaServer, FaPaintBrush } from 'react-icons/fa';
import {
  Check,
  ShoppingCart,
  Share2,
  Car,
  Wallet,
  HeartPulse,
  GraduationCap,
  Plane,
  Building2,
  Gamepad2,
  Activity,
  Utensils,
  Home,
  Lightbulb,
  Palette,
  Code,
  CheckCircle2,
  Rocket,
  Wrench,
  Bell,
  CreditCard,
  Lock,
  MapPin,
  Camera,
  WifiOff,
  Fingerprint,
  Glasses,
  MessageCircle,
  BarChart3,
  Globe,
  Moon,
  Mic,
  Cpu,
  Sparkles,
  Phone,
  Smartphone,
  Shirt
} from 'lucide-react';
import { primaryPhone } from '../../data/centralizedData';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const MobileAppDevelopment: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Design & Development', path: '/design-development' },
              { label: 'Mobile App Development' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex justify-center mb-6 space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaMobileAlt className="text-2xl text-yellow-300" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaApple className="text-2xl text-white" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaAndroid className="text-2xl text-emerald-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Professional Mobile App Development
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Build powerful mobile apps that engage users, drive growth, and transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Free App Consultation
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Discuss Your App Idea
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile App Statistics */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Why Mobile Apps are Essential"
            subtitle="Mobile-first world demands mobile-first solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">6.92B</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Smartphone Users</h3>
              <p className="text-gray-600 leading-relaxed">
                86% of world population uses smartphones with 3+ hours daily screen time
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">230B</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">App Downloads</h3>
              <p className="text-gray-600 leading-relaxed">
                230 billion app downloads annually, growing at 15% year-over-year
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">3.5x</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Higher Conversions</h3>
              <p className="text-gray-600 leading-relaxed">
                Mobile apps convert 3.5x better than mobile websites
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* App Development Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Complete Mobile App Development Services"
            subtitle="End-to-end app development from concept to launch and beyond"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Native App Development</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• iOS App Development (Swift)</li>
                <li>• Android App Development (Kotlin)</li>
                <li>• Native Performance</li>
                <li>• Platform-Specific Features</li>
                <li>• App Store Optimization</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4">
                <FaSync />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cross-Platform Development</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• React Native Development</li>
                <li>• Flutter Development</li>
                <li>• Single Codebase</li>
                <li>• Faster Development</li>
                <li>• Consistent Experience</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                <FaPaintBrush />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">UI/UX Design for Mobile</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Mobile App Wireframing</li>
                <li>• Interactive Prototypes</li>
                <li>• User Experience Design</li>
                <li>• Responsive Mobile Design</li>
                <li>• Design System Creation</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Backend Development</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• API Development</li>
                <li>• Database Design</li>
                <li>• Cloud Integration</li>
                <li>• Server Configuration</li>
                <li>• Real-time Features</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">App Security</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Data Encryption</li>
                <li>• Secure Authentication</li>
                <li>• API Security</li>
                <li>• Penetration Testing</li>
                <li>• Compliance (GDPR, HIPAA)</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-2xl mb-4">
                <FaCloud />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">App Maintenance</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Regular Updates</li>
                <li>• Bug Fixes & Support</li>
                <li>• Performance Monitoring</li>
                <li>• Feature Enhancements</li>
                <li>• App Store Compliance</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* App Types */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Types of Apps We Develop"
            subtitle="Specialized mobile solutions for every business need"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { type: 'E-commerce Apps', icon: ShoppingCart, desc: 'Online shopping experiences' },
              { type: 'Social Media Apps', icon: Share2, desc: 'Community platforms' },
              { type: 'On-demand Apps', icon: Car, desc: 'Service delivery apps' },
              { type: 'FinTech Apps', icon: Wallet, desc: 'Financial solutions' },
              { type: 'Healthcare Apps', icon: HeartPulse, desc: 'Medical & wellness' },
              { type: 'Education Apps', icon: GraduationCap, desc: 'Learning platforms' },
              { type: 'Travel Apps', icon: Plane, desc: 'Booking & planning' },
              { type: 'Enterprise Apps', icon: Building2, desc: 'Business solutions' },
              { type: 'Gaming Apps', icon: Gamepad2, desc: 'Mobile games' },
              { type: 'Fitness Apps', icon: Activity, desc: 'Health & workout' },
              { type: 'Food Delivery Apps', icon: Utensils, desc: 'Restaurant ordering' },
              { type: 'Real Estate Apps', icon: Home, desc: 'Property platforms' },
            ].map((app, index) => {
              const Icon = app.icon;
              return (
                <Card key={index} variant="interactive" padding="default" className="text-left">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{app.type}</h3>
                  <p className="text-gray-600 text-xs">{app.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Technology Stack */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our Technology Stack"
            subtitle="Industry-standard tools and frameworks powering world-class mobile apps"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { tech: 'React Native', color: 'bg-blue-50 border-blue-200 text-blue-900' },
              { tech: 'Flutter', color: 'bg-cyan-50 border-cyan-200 text-cyan-900' },
              { tech: 'Swift', color: 'bg-orange-50 border-orange-200 text-orange-900' },
              { tech: 'Kotlin', color: 'bg-purple-50 border-purple-200 text-purple-900' },
              { tech: 'Node.js', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
              { tech: 'Firebase', color: 'bg-amber-50 border-amber-200 text-amber-900' },
              { tech: 'AWS', color: 'bg-gray-50 border-gray-200 text-gray-900' },
              { tech: 'MongoDB', color: 'bg-green-50 border-green-200 text-green-900' },
              { tech: 'MySQL', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
              { tech: 'Redis', color: 'bg-rose-50 border-rose-200 text-rose-900' },
              { tech: 'Docker', color: 'bg-sky-50 border-sky-200 text-sky-900' },
              { tech: 'GraphQL', color: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-900' },
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} border p-4 rounded-xl text-center font-semibold text-sm shadow-sm`}>
                {tech.tech}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Development Process */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Mobile App Development Process"
            subtitle="Agile, transparent execution from concept discovery to App Store feature"
            centered
          />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {[
                { step: 1, title: 'Discovery', desc: 'Idea validation & planning', icon: Lightbulb },
                { step: 2, title: 'Design', desc: 'UI/UX & prototypes', icon: Palette },
                { step: 3, title: 'Development', desc: 'Coding & integration', icon: Code },
                { step: 4, title: 'Testing', desc: 'QA & optimization', icon: CheckCircle2 },
                { step: 5, title: 'Deployment', desc: 'App store launch', icon: Rocket },
                { step: 6, title: 'Maintenance', desc: 'Support & updates', icon: Wrench },
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

      {/* App Features Showcase */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Advanced Mobile App Features"
            subtitle="Modern features for competitive mobile applications"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'Push Notifications', icon: Bell },
              { feature: 'In-App Purchases', icon: CreditCard },
              { feature: 'Social Login', icon: Lock },
              { feature: 'GPS & Location', icon: MapPin },
              { feature: 'Camera Integration', icon: Camera },
              { feature: 'Offline Mode', icon: WifiOff },
              { feature: 'Biometric Auth', icon: Fingerprint },
              { feature: 'AR/VR Features', icon: Glasses },
              { feature: 'Chat/Messaging', icon: MessageCircle },
              { feature: 'Payment Gateway', icon: CreditCard },
              { feature: 'Analytics Dashboard', icon: BarChart3 },
              { feature: 'Multi-language', icon: Globe },
              { feature: 'Dark Mode', icon: Moon },
              { feature: 'Voice Commands', icon: Mic },
              { feature: 'IoT Integration', icon: Cpu },
              { feature: 'Machine Learning', icon: Sparkles },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="default" padding="default" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.feature}</h3>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* App Development Packages */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Mobile App Engineering Frameworks"
            subtitle="Custom iOS, Android, and cross-platform mobile architectures engineered for speed, security, and scale"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic App', 
                tier: 'Native MVP Engineering', 
                platform: 'Native iOS or Android',
                features: ['Native iOS OR Android', 'Tailored UI/UX Design', 'Up to 10 Core Screens', 'REST / GraphQL API Backend', 'Standard Cloud Integration', '3 Months Support & Bug Fix SLA'],
                popular: false
              },
              { 
                name: 'Business App', 
                tier: 'Cross-Platform Ecosystem', 
                platform: 'React Native / Flutter Multi-Platform',
                features: ['React Native / Flutter Multi-Platform', 'Advanced UI/UX Architecture', 'Up to 30 Screens', 'Microservices Backend & Cloud DB', 'Role-Based Admin Portal', 'Push Notifications & Deep Linking', '6 Months Dedicated Support'],
                popular: true
              },
              { 
                name: 'Enterprise App', 
                tier: 'Enterprise Scale & High Concurrency', 
                platform: 'Dual Native or Tailored Hybrid',
                features: ['Dual Native iOS + Android', 'High-Fidelity Custom Design System', 'Scalable Cloud Architecture & Serverless', 'Real-time WebSockets & Data Streaming', 'Enterprise Security & Compliance', 'CI/CD Pipeline Automation', '12 Months Priority Support SLA'],
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
                    RECOMMENDED FRAMEWORK
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-lg font-bold text-blue-950 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 mb-6 text-sm">Platform: <span className="font-semibold text-gray-800">{plan.platform}</span></p>
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
                  Discuss App Scope
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Custom enterprise solutions, MVP development, and monthly maintenance available
            </p>
          </div>
        </Container>
      </Section>

      {/* App Store Optimization */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="App Store Optimization (ASO)"
            subtitle="Get your app discovered, ranked, and downloaded organically"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="default" padding="lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">ASO Services Included</h3>
              <ul className="space-y-3">
                {[
                  'Keyword research & optimization',
                  'App title & subtitle optimization',
                  'Compelling app description',
                  'High-converting screenshots',
                  'App icon design',
                  'App preview video creation',
                  'Localization for global markets',
                  'Review & rating management',
                  'Competitor analysis',
                  'Performance tracking & reporting'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-8 rounded-2xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-300">Benefits of ASO</h3>
                <ul className="space-y-3">
                  {[
                    'Increase app store visibility',
                    'Higher organic downloads',
                    'Lower user acquisition cost',
                    'Better conversion rates',
                    'Improved user retention',
                    'Higher app store rankings',
                    'Competitive advantage',
                    'Long-term sustainable growth'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Let's transform your idea into a successful mobile application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/book-call"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Free Consultation
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
                <span>WhatsApp App Expert</span>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Rocket className="w-4 h-4 text-yellow-300" />
                  <span>Fast Development</span>
                </div>
                <div className="text-sm opacity-80">8-12 weeks delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-yellow-300" />
                  <span>Multi-Platform</span>
                </div>
                <div className="text-sm opacity-80">iOS, Android, Cross-platform</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                  <span>App Store Ready</span>
                </div>
                <div className="text-sm opacity-80">ASO & deployment included</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* App Development Checklist */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Mobile App Success Checklist"
            subtitle="Proven architectural requirements and user experience standards"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="default" padding="lg">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Technical Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Fast loading & performance',
                    'Smooth animations (60fps)',
                    'Offline functionality',
                    'Secure data handling',
                    'Regular updates',
                    'Bug-free experience',
                    'Battery optimization',
                    'Memory management'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card variant="default" padding="lg">
                <h3 className="font-bold text-xl mb-4 text-gray-900">User Experience</h3>
                <ul className="space-y-3">
                  {[
                    'Intuitive navigation',
                    'Consistent design',
                    'Gesture controls',
                    'Accessibility features',
                    'Personalization',
                    'Push notifications',
                    'Social sharing',
                    'Feedback mechanism'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Card variant="default" padding="lg" className="inline-block border-blue-200">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Have an app idea?</h3>
                <p className="text-gray-600 mb-4 text-sm">Get a free consultation and project estimate</p>
                <AnimatedButton
                  to="/book-call"
                  variant="primary"
                  size="md"
                >
                  Start Your App Journey
                </AnimatedButton>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry Case Studies */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="App Success Stories"
            subtitle="Mobile apps we've built that are transforming businesses"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'E-commerce',
                name: 'Fashion Retail App',
                stats: ['500K+ downloads', '4.8/5 rating', '40% increase in sales'],
                icon: Shirt
              },
              {
                category: 'Healthcare',
                name: 'Doctor Consultation App',
                stats: ['200K+ users', '95% satisfaction', '24/7 availability'],
                icon: HeartPulse
              },
              {
                category: 'Education',
                name: 'Online Learning App',
                stats: ['1M+ students', '4.7/5 rating', '30% completion rate'],
                icon: GraduationCap
              },
            ].map((app, index) => {
              const Icon = app.icon;
              return (
                <Card key={index} variant="interactive" padding="lg" className="flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{app.category}</div>
                    <h3 className="font-bold text-xl mb-4 text-gray-900">{app.name}</h3>
                    <ul className="space-y-2 mb-6">
                      {app.stats.map((stat, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Case Study →
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default MobileAppDevelopment;
