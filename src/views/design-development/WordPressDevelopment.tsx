import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Check,
  Building2,
  ShoppingCart,
  FileText,
  Palette,
  Lock,
  GraduationCap,
  Calendar,
  Store,
  Home,
  Briefcase,
  Heart,
  Ticket,
  ClipboardList,
  Code,
  TestTube,
  Rocket,
  RefreshCw,
  Zap,
  Wrench,
  Globe,
  Users,
  Plug,
  Search,
  Boxes,
  CreditCard,
  BookOpen,
  Share2,
  Mail,
  BarChart3,
  Phone,
  MessageCircle,
  Shield,
  TrendingUp,
  Smartphone,
  Cpu
} from 'lucide-react';
import { Container, Section, SectionHeader, Card, Breadcrumb, Button } from '../../components/ui';
import { AnimatedButton } from '../../components/animations';
import { getPrimaryPhone, getCanonicalOrigin, getBusinessName } from '../../selectors';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';

const WordPressDevelopment: React.FC = () => {
  const primaryPhone = getPrimaryPhone();
  const businessName = getBusinessName();
  const canonicalOrigin = getCanonicalOrigin();

  const services = [
    {
      title: "Custom Theme Development",
      icon: Palette,
      color: "text-purple-600 bg-purple-50",
      items: [
        "Custom WordPress theme creation",
        "Child theme development",
        "Theme customization",
        "Responsive design",
        "Performance optimization"
      ]
    },
    {
      title: "Plugin Development",
      icon: Plug,
      color: "text-emerald-600 bg-emerald-50",
      items: [
        "Custom plugin development",
        "Plugin customization",
        "WooCommerce extensions",
        "API integration plugins",
        "Security plugins"
      ]
    },
    {
      title: "WordPress Security",
      icon: Shield,
      color: "text-indigo-600 bg-indigo-50",
      items: [
        "Security hardening",
        "Malware removal",
        "SSL certificate setup",
        "Firewall configuration",
        "Regular security audits"
      ]
    },
    {
      title: "WordPress SEO",
      icon: Search,
      color: "text-amber-600 bg-amber-50",
      items: [
        "SEO-friendly theme development",
        "Schema markup implementation",
        "Page speed optimization",
        "SEO plugin configuration",
        "Content optimization"
      ]
    },
    {
      title: "Responsive Design",
      icon: Smartphone,
      color: "text-rose-600 bg-rose-50",
      items: [
        "Mobile-first design",
        "Tablet optimization",
        "Cross-browser compatibility",
        "Touch-friendly interfaces",
        "AMP implementation"
      ]
    },
    {
      title: "WordPress Maintenance",
      icon: Wrench,
      color: "text-blue-600 bg-blue-50",
      items: [
        "Regular updates",
        "Backup management",
        "Performance monitoring",
        "Bug fixes",
        "Technical support"
      ]
    }
  ];

  const solutions = [
    { solution: 'Corporate Websites', icon: Building2, desc: 'Business websites' },
    { solution: 'E-commerce Stores', icon: ShoppingCart, desc: 'WooCommerce solutions' },
    { solution: 'Blogs & Magazines', icon: FileText, desc: 'Content publishing' },
    { solution: 'Portfolio Sites', icon: Palette, desc: 'Creative portfolios' },
    { solution: 'Membership Sites', icon: Lock, desc: 'Subscription platforms' },
    { solution: 'Learning Management', icon: GraduationCap, desc: 'LMS platforms' },
    { solution: 'Booking Systems', icon: Calendar, desc: 'Appointment booking' },
    { solution: 'Multi-vendor Marketplaces', icon: Store, desc: 'Marketplace solutions' },
    { solution: 'Real Estate Portals', icon: Home, desc: 'Property listings' },
    { solution: 'Job Boards', icon: Briefcase, desc: 'Career platforms' },
    { solution: 'Non-profit Websites', icon: Heart, desc: 'Charity organizations' },
    { solution: 'Event Websites', icon: Ticket, desc: 'Event management' },
  ];

  const techStack = [
    { tech: 'PHP 8.x', category: 'Backend Engine' },
    { tech: 'MySQL', category: 'Database Layer' },
    { tech: 'JavaScript / ES6', category: 'Client Logic' },
    { tech: 'React.js', category: 'Block UI' },
    { tech: 'REST API', category: 'Data Exchange' },
    { tech: 'GraphQL', category: 'WPGraphQL' },
    { tech: 'WooCommerce', category: 'E-commerce' },
    { tech: 'Elementor / Gutenberg', category: 'Block Builders' },
    { tech: 'ACF Pro', category: 'Structured Fields' },
    { tech: 'WP Rocket', category: 'Speed & Caching' },
    { tech: 'Yoast / RankMath', category: 'SEO Architecture' },
    { tech: 'Redis Object Cache', category: 'High Concurrency' },
  ];

  const processSteps = [
    { step: 1, title: 'Planning', desc: 'Requirements & strategy', icon: ClipboardList },
    { step: 2, title: 'Design', desc: 'UI/UX & wireframes', icon: Palette },
    { step: 3, title: 'Development', desc: 'Coding & integration', icon: Code },
    { step: 4, title: 'Testing', desc: 'QA & optimization', icon: TestTube },
    { step: 5, title: 'Launch', desc: 'Deployment & training', icon: Rocket },
  ];

  const features = [
    { feature: 'Headless WordPress', icon: Zap },
    { feature: 'Custom Post Types', icon: FileText },
    { feature: 'Advanced Custom Fields', icon: Wrench },
    { feature: 'Multi-language Support', icon: Globe },
    { feature: 'User Role Management', icon: Users },
    { feature: 'API Integrations', icon: Plug },
    { feature: 'Advanced Search', icon: Search },
    { feature: 'Real-time Updates', icon: RefreshCw },
    { feature: 'Gutenberg Blocks', icon: Boxes },
    { feature: 'WooCommerce Customization', icon: CreditCard },
    { feature: 'Membership Systems', icon: Lock },
    { feature: 'Learning Management', icon: BookOpen },
    { feature: 'Booking Systems', icon: Calendar },
    { feature: 'Social Media Integration', icon: Share2 },
    { feature: 'Newsletter Integration', icon: Mail },
    { feature: 'Analytics Dashboard', icon: BarChart3 },
  ];

  const guarantees = [
    { metric: '<2s', label: 'Page Load Time', desc: 'Lightning fast loading' },
    { metric: '99.9%', label: 'Uptime', desc: 'Maximum availability' },
    { metric: 'A+', label: 'Security Score', desc: 'Top security standards' },
    { metric: '90+', label: 'PageSpeed Score', desc: 'Google performance' },
    { metric: 'Mobile-First', label: 'Design Approach', desc: 'Optimized for mobile' },
    { metric: 'SEO-Ready', label: 'Built-in SEO', desc: 'Rank higher in search' },
    { metric: 'Scalable', label: 'Architecture', desc: 'Grow without limits' },
    { metric: '24/7', label: 'Support', desc: 'Technical assistance' },
  ];

  const packages = [
    { 
      name: 'Basic WordPress', 
      tier: 'Custom Brand Site', 
      type: 'Business Website',
      features: ['Up to 10 Pages', 'Custom Theme', 'Contact Form', 'Basic SEO', 'Mobile Responsive', '1 Month Post-Launch Support'],
      popular: false
    },
    { 
      name: 'Professional WordPress', 
      tier: 'Performance & Commerce', 
      type: 'Advanced Website',
      features: ['Up to 25 Pages', 'Custom Theme Development', 'Advanced Features', 'WooCommerce Setup', 'Performance Optimization', '3 Months Dedicated Support'],
      popular: true
    },
    { 
      name: 'Enterprise WordPress', 
      tier: 'Bespoke Architecture & Plugins', 
      type: 'Custom Enterprise Solution',
      features: ['Multi-Page Architecture', 'Custom Plugin Development', 'API Integrations', 'Advanced Security Hardening', 'Custom CMS Features', '6 Months Support', 'Priority SLA'],
      popular: false
    },
  ];

  const maintenancePlans = [
    { 
      name: 'Basic Care', 
      tier: 'Essential Maintenance', 
      features: ['Weekly Backups', 'Security Monitoring', 'WordPress Updates', 'Plugin Updates', 'Uptime Monitoring', 'Email Support'],
      popular: false
    },
    { 
      name: 'Professional Care', 
      tier: 'Proactive Optimization', 
      features: ['Daily Backups', 'Advanced Security', 'Performance Optimization', 'SEO Updates', 'Content Updates', 'Direct Phone Support', 'Monthly Reports'],
      popular: true
    },
    { 
      name: 'Enterprise Care', 
      tier: 'High-Availability SLA', 
      features: ['Real-time Backups', 'Premium Security', 'Speed Optimization', 'Emergency Escalation Support', 'Continuous Edits', 'Priority Support', 'Quarterly Architecture Strategy'],
      popular: false
    },
  ];

  const faqs = [
    {
      q: 'Why choose WordPress over other platforms?',
      a: 'WordPress offers unmatched flexibility, scalability, and a massive ecosystem of plugins and themes. It\'s SEO-friendly, regularly updated, and has a huge community for support. Over 40% of all websites use WordPress for good reason.'
    },
    {
      q: 'How long does WordPress development take?',
      a: 'Basic websites: 3-4 weeks, Business websites: 4-6 weeks, Complex websites: 6-10 weeks. E-commerce sites and custom solutions may take longer depending on requirements.'
    },
    {
      q: 'Do you provide WordPress training?',
      a: 'Yes, we provide comprehensive WordPress training to help you manage your site. We cover content updates, basic maintenance, and best practices for site management.'
    },
    {
      q: 'Can you migrate my existing website to WordPress?',
      a: 'Absolutely! We specialize in website migrations to WordPress. We handle content migration, URL redirection, SEO preservation, and ensure a smooth transition.'
    },
    {
      q: 'Do you offer WordPress hosting?',
      a: 'We don\'t provide hosting directly, but we work with premium hosting providers and can help you choose and set up the best hosting solution for your WordPress site.'
    },
    {
      q: 'Is WordPress secure?',
      a: 'WordPress is very secure when properly maintained. We implement security best practices including SSL certificates, firewalls, regular updates, security plugins, and regular security audits.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Custom WordPress Development Services | {businessName}</title>
        <meta
          name="description"
          content="Build powerful, scalable WordPress websites that drive business growth. Custom themes, plugin engineering, WooCommerce, and high-performance hosting integration."
        />
        <link rel="canonical" href={`${canonicalOrigin}/wordpress-development`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24 overflow-hidden">
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Services", path: "/services" },
              { label: "WordPress Development" }
            ]}
            className="text-white/80 mb-6"
          />

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-white/20">
              <Cpu className="w-4 h-4 text-yellow-300" />
              <span>Fast, Scalable & Secure WordPress Engineering</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Professional WordPress Development
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Build powerful, scalable WordPress websites that drive business growth and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="white"
                size="lg"
              >
                Get Free WordPress Audit
              </AnimatedButton>
              <AnimatedButton
                to="/book-call"
                variant="primary"
                size="lg"
              >
                Discuss Your Project
              </AnimatedButton>
            </div>
          </div>
        </Container>
      </section>

      {/* WordPress Statistics */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="CMS Market Dominance"
            title="Why Choose"
            titleHighlight="WordPress?"
            description="WordPress powers over 43% of all web properties worldwide for good reasons."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card variant="default" className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">43%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Share</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                WordPress powers 43% of all websites worldwide, representing unmatched stability.
              </p>
            </Card>

            <Card variant="default" className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">60%+</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">CMS Market Share</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Holds over 60% of the content management market, 20x more than the closest competitor.
              </p>
            </Card>

            <Card variant="default" className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">2x</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Faster Development</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Modular theme and plugin architecture delivers rapid development cycles and lower total cost.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Comprehensive WordPress Services */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            badge="Engineering Services"
            title="Comprehensive WordPress"
            titleHighlight="Capabilities"
            description="End-to-end WordPress architecture for growing brands and enterprise businesses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} variant="interactive" className="flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <ul className="text-slate-600 space-y-2.5 text-sm mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Solutions We Build */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Use Cases"
            title="WordPress Solutions"
            titleHighlight="We Build"
            description="Specialized WordPress solutions engineered for varied industry verticals."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-purple-300 hover:shadow-md card-lift-sm transition-all"
                >
                  <div className="text-purple-600 mb-3"><Icon className="w-6 h-6" /></div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">{item.solution}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* WordPress Technology Stack */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            badge="Under The Hood"
            title="WordPress"
            titleHighlight="Technology Stack"
            description="Robust architectural stack ensuring speed, security, and developer flexibility."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center hover:border-purple-300 transition-colors"
              >
                <div className="font-bold text-slate-900 text-sm sm:text-base">{tech.tech}</div>
                <div className="text-xs text-slate-500 mt-0.5">{tech.category}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Execution Pipeline"
            title="WordPress Development"
            titleHighlight="Process"
            description="A disciplined 5-phase delivery model ensuring predictable quality and performance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.step} variant="default" className="text-center p-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-base mx-auto mb-3 border border-purple-100">
                    {item.step}
                  </div>
                  <div className="flex justify-center text-purple-600 mb-2"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Advanced Features */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            badge="Modern Extensions"
            title="Advanced WordPress"
            titleHighlight="Features"
            description="Modern capabilities that elevate WordPress into an enterprise-grade web application."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3">
                  <div className="text-purple-600 shrink-0"><Icon className="w-5 h-5" /></div>
                  <h3 className="font-semibold text-xs sm:text-sm text-slate-900">{item.feature}</h3>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Performance Guarantees */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Engineering SLA"
            title="Performance"
            titleHighlight="Guarantees"
            description="Our WordPress architectures are optimized for sub-second loading and 99.9% uptime."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {guarantees.map((item, index) => (
              <Card key={index} variant="default" className="text-center p-5">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-700 mb-1">{item.metric}</div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{item.label}</h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* WordPress Engagement Frameworks */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            badge="Project Tiers"
            title="WordPress Development"
            titleHighlight="Engagement Frameworks"
            description="Custom WordPress engineering tailored to your design specifications and business operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.popular ? 'featured' : 'default'}
                className="flex flex-col justify-between relative"
              >
                <div>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap z-10">
                      RECOMMENDED FRAMEWORK
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <div className="text-base font-bold text-purple-700 mb-2">{plan.tier}</div>
                  <p className="text-slate-500 text-xs mb-6">Type: <span className="font-semibold text-slate-700">{plan.type}</span></p>

                  <ul className="space-y-3 mb-8 text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
                  Discuss WordPress Scope
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* WordPress Maintenance & Support Frameworks */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Post-Launch Security"
            title="WordPress Maintenance &"
            titleHighlight="Support Frameworks"
            description="Ongoing engineering, security patches, and speed optimizations for high-traffic WordPress websites."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {maintenancePlans.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.popular ? 'featured' : 'default'}
                className="flex flex-col justify-between relative"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <div className="text-base font-bold text-purple-700 mb-4">{plan.tier}</div>
                  <ul className="space-y-3 mb-8 text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
                  Inquire About Support SLA
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Build Your WordPress Website?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Let's create a powerful, customized WordPress site that scales your business online.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10">
              <Button to="/book-call" variant="secondary" size="lg">
                Book Free Consultation
              </Button>
              <Button
                href={getTelHref(primaryPhone)}
                variant="white"
                size="lg"
                icon={<Phone className="w-4 h-4" />}
              >
                Call: {primaryPhone}
              </Button>
              <Button
                href={getNepalWhatsAppUrl()}
                isExternal
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                WhatsApp WordPress Expert
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="font-semibold text-white inline-flex items-center gap-2 mb-1 text-sm">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span>Fast Development</span>
                </div>
                <div className="text-xs text-blue-100">3-6 weeks typical delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="font-semibold text-white inline-flex items-center gap-2 mb-1 text-sm">
                  <Shield className="w-4 h-4 text-yellow-300" />
                  <span>Secure & Stable</span>
                </div>
                <div className="text-xs text-blue-100">Enterprise-grade security hardening</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="font-semibold text-white inline-flex items-center gap-2 mb-1 text-sm">
                  <TrendingUp className="w-4 h-4 text-yellow-300" />
                  <span>SEO Optimized</span>
                </div>
                <div className="text-xs text-blue-100">Built-in schema and speed audits</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WordPress FAQ */}
      <Section variant="default" padding="default">
        <Container size="narrow">
          <SectionHeader
            badge="Common Questions"
            title="WordPress Development"
            titleHighlight="FAQs"
            description="Frequently asked questions regarding our custom WordPress development and migration services."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} variant="default" hoverEffect={false} className="p-5 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* WordPress Benefits */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Value Proposition"
            title="Benefits of Professional"
            titleHighlight="WordPress Development"
            description="Why fast-growing businesses choose professional WordPress engineering over DIY builders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Card variant="default">
              <h3 className="text-xl font-bold mb-4 text-slate-900">For Business Owners</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  'Lower development costs compared to proprietary custom stacks',
                  'Faster time-to-market with proven plugin ecosystems',
                  'Easy content management without requiring technical staff',
                  'Scalable cloud architecture as your traffic grows',
                  'SEO-friendly semantic HTML markup',
                  'Extensive plugin ecosystem for extended functionality',
                  'Regular security updates and core patch governance',
                  'Massive community and global developer support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card variant="dark">
              <h3 className="text-xl font-bold mb-4 text-white">For Marketing Teams</h3>
              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  'Rapid content publishing and real-time edits',
                  'SEO metadata controls and OpenGraph previews built-in',
                  'Native Google Analytics 4 and Tag Manager integration',
                  'Automated social sharing and feed synchronizations',
                  'Email marketing and newsletter capture workflows',
                  'Landing page generation with reusable blocks',
                  'A/B testing capabilities for conversion optimization',
                  'Conversion tracking and campaign analytics dashboards'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default WordPressDevelopment;
