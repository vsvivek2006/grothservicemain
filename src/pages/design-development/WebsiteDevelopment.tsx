import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Code,
  Laptop,
  ShoppingCart,
  Search,
  Server,
  Smartphone,
  Palette,
  TestTube,
  Rocket,
  Shield,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  RefreshCw,
  Check,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Container, Section, SectionHeader, Card, Breadcrumb, Badge, Button } from '../../components/ui';
import { AnimatedButton } from '../../components/animations';
import { getFeaturedTechnologies } from '../../data/technologies';
import { getPrimaryPhone, getCanonicalOrigin, getBusinessName } from '../../selectors';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';

const WebsiteDevelopment: React.FC = () => {
  const primaryPhone = getPrimaryPhone();
  const businessName = getBusinessName();
  const canonicalOrigin = getCanonicalOrigin();
  const technologies = getFeaturedTechnologies();

  const servicesList = [
    {
      icon: Laptop,
      color: "text-purple-600 bg-purple-50",
      title: "Custom Web Development",
      items: [
        "Responsive website design",
        "Frontend & backend development",
        "CMS development (Custom)",
        "API integrations",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      icon: ShoppingCart,
      color: "text-indigo-600 bg-indigo-50",
      title: "E-commerce Development",
      items: [
        "Shopify development",
        "WooCommerce development",
        "Custom e-commerce solutions",
        "Payment gateway integration",
        "Inventory management"
      ]
    },
    {
      icon: Code,
      color: "text-blue-600 bg-blue-50",
      title: "WordPress Development",
      items: [
        "Custom theme development",
        "Plugin development",
        "WordPress optimization",
        "Security hardening",
        "Maintenance & support"
      ]
    },
    {
      icon: Smartphone,
      color: "text-emerald-600 bg-emerald-50",
      title: "Mobile-First Development",
      items: [
        "Responsive design",
        "Mobile optimization",
        "Accelerated Mobile Pages (AMP)",
        "Touch-friendly interfaces",
        "Mobile performance testing"
      ]
    },
    {
      icon: Search,
      color: "text-amber-600 bg-amber-50",
      title: "SEO-Friendly Development",
      items: [
        "Technical SEO implementation",
        "Schema markup",
        "Page speed optimization",
        "Clean URL structure",
        "SEO-optimized code"
      ]
    },
    {
      icon: Server,
      color: "text-pink-600 bg-pink-50",
      title: "Website Maintenance",
      items: [
        "Regular updates & backups",
        "Security monitoring",
        "Performance optimization",
        "Bug fixes & support",
        "Content updates"
      ]
    }
  ];

  const processSteps = [
    { step: 1, title: 'Discovery & Planning', desc: 'Requirements gathering & strategy', icon: Search },
    { step: 2, title: 'UI/UX Design', desc: 'Wireframes & prototypes', icon: Palette },
    { step: 3, title: 'Development', desc: 'Coding & implementation', icon: Code },
    { step: 4, title: 'Testing', desc: 'Quality assurance & bug fixes', icon: TestTube },
    { step: 5, title: 'Launch', desc: 'Deployment & go-live', icon: Rocket },
    { step: 6, title: 'Maintenance', desc: 'Support & updates', icon: Shield },
  ];

  const recentProjects = [
    {
      category: 'E-commerce',
      title: 'Fashion Store',
      desc: 'Complete Shopify store with custom features',
      tagColor: 'bg-pink-100 text-pink-700'
    },
    {
      category: 'SaaS Platform',
      title: 'Project Management Tool',
      desc: 'React-based SaaS with real-time features',
      tagColor: 'bg-blue-100 text-blue-700'
    },
    {
      category: 'Healthcare',
      title: 'Medical Clinic Portal',
      desc: 'WordPress site with appointment booking',
      tagColor: 'bg-emerald-100 text-emerald-700'
    },
  ];

  const pricingFrameworks = [
    {
      name: 'Basic Website',
      tier: 'High-Performance Brand Site',
      type: 'Informational & Corporate Website',
      features: [
        '5-7 Pages',
        'Responsive Design',
        'Contact Form & Lead Capture',
        'On-Page SEO Optimization',
        '6 Months Post-Launch Support'
      ],
      popular: false
    },
    {
      name: 'Business Website',
      tier: 'Dynamic CMS & Content Hub',
      type: 'Growth-Stage Business Website',
      features: [
        '10-15 Pages',
        'Headless / CMS Integration',
        'Integrated Blog Architecture',
        'Advanced Technical SEO',
        'Lead Management & CRM Sync',
        '1 Year Dedicated Support'
      ],
      popular: true
    },
    {
      name: 'E-commerce Store',
      tier: 'Enterprise Commerce Architecture',
      type: 'High-Volume Transactional Store',
      features: [
        'Custom Commerce Architecture',
        'Secure Payment Gateway Integration',
        'Catalog & Inventory Management',
        'ERP / CRM Integration',
        'Mobile-First PWA Experience',
        '2 Years Extended Engineering SLA'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      q: 'How long does it take to develop a website?',
      a: 'Basic websites: 2-3 weeks, Business websites: 4-6 weeks, E-commerce websites: 6-8 weeks. Custom projects may vary based on complexity.'
    },
    {
      q: 'What is included in your website development packages?',
      a: 'All packages include design, development, testing, deployment, basic SEO setup, and post-launch support. We provide a detailed scope document before starting.'
    },
    {
      q: 'Do you provide website maintenance after launch?',
      a: 'Yes, we offer monthly maintenance packages that include updates, backups, security monitoring, and technical support.'
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Absolutely! We specialize in website redesigns and migrations while preserving SEO rankings and improving functionality.'
    },
    {
      q: 'What about website hosting and domain?',
      a: 'We can help you purchase domains and set up reliable hosting. We recommend and work with premium hosting providers for optimal performance.'
    },
    {
      q: 'Do you offer ongoing support?',
      a: 'Yes, we provide different support packages including emergency support, regular maintenance, and feature additions.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>Professional Website Development Services | {businessName}</title>
        <meta
          name="description"
          content="Custom web development that drives conversions, engages visitors, and scales your business online. Responsive, high-performance web engineering."
        />
        <link rel="canonical" href={`${canonicalOrigin}/web-development`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24 overflow-hidden">
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Services", path: "/services" },
              { label: "Website Development" }
            ]}
            className="text-white/80 mb-6"
          />

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-white/20">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>Engineered for Maximum Speed, Conversion & SEO</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Professional Website Development
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Custom websites that drive conversions, engage visitors, and grow your business with modern web standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="white"
                size="lg"
              >
                Get Free Website Audit
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

      {/* Stats Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Performance Metrics"
            title="Why Your Website"
            titleHighlight="Matters"
            description="Your website is your digital storefront — make it count with real technical excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card variant="default" className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">75%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Credibility Factor</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                75% of users judge a company's credibility based on their website design and responsiveness.
              </p>
            </Card>

            <Card variant="default" className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-2">&lt;3s</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Loading Time</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                53% of visitors abandon a website if it takes more than 3 seconds to load on mobile devices.
              </p>
            </Card>

            <Card variant="default" className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">400%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conversion Boost</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Well-designed websites convert visitors up to 400% better than outdated or slow competitors.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Development Services */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            badge="Full-Stack Capabilities"
            title="Our Website Development"
            titleHighlight="Services"
            description="Complete web solutions from concept to launch and continuous optimization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesList.map((service, index) => {
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

      {/* Technologies We Use (Centralized) */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Technology Stack"
            title="Modern Technologies"
            titleHighlight="We Use"
            description="We build with modern frameworks and robust tools for enterprise-grade speed and reliability."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-xl p-4 text-center border border-slate-200/80 hover:border-purple-300 hover:shadow-md card-lift-sm transition-all duration-200 group"
              >
                <div className={`flex justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                  <tech.Icon size={28} />
                </div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">{tech.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{tech.type}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6-Step Development Process */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            badge="Engineering Methodology"
            title="Our 6-Step"
            titleHighlight="Development Process"
            description="A structured, predictable development lifecycle from initial architecture to post-launch scaling."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.step} variant="default" className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4 font-bold text-lg border border-purple-100">
                    {item.step}
                  </div>
                  <div className="flex justify-center text-purple-600 mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Portfolio Showcase */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            badge="Proven Track Record"
            title="Recent Website"
            titleHighlight="Projects"
            description="Explore representative examples of our responsive, high-converting website engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${project.tagColor}`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/portfolio" variant="outline" size="md">
              View All Projects
            </Button>
          </div>
        </Container>
      </Section>

      {/* Pricing Engagement Frameworks */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            badge="Engagement Options"
            title="Website Development"
            titleHighlight="Engagement Frameworks"
            description="Engineered web architectures structured for scalability, user conversion, and search authority."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pricingFrameworks.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.popular ? 'featured' : 'default'}
                className="flex flex-col justify-between relative"
              >
                <div>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                      RECOMMENDED FRAMEWORK
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <div className="text-base font-bold text-purple-700 mb-2">{plan.tier}</div>
                  <p className="text-slate-500 text-xs mb-6">{plan.type}</p>

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
                  Discuss Web Scope
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-500 text-xs sm:text-sm">
              *Enterprise custom web applications, SaaS portals, and custom API architectures scoped individually
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Let's discuss your project and create a website that drives real business results.
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
                WhatsApp Quote
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="font-semibold text-white inline-flex items-center gap-2 mb-1 text-sm">
                  <Clock className="w-4 h-4 text-yellow-300" />
                  <span>Fast Delivery</span>
                </div>
                <div className="text-xs text-blue-100">2-4 weeks typical timeline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="font-semibold text-white inline-flex items-center gap-2 mb-1 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                  <span>Satisfaction Guarantee</span>
                </div>
                <div className="text-xs text-blue-100">30-day post-launch support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                <div className="font-semibold text-white inline-flex items-center gap-2 mb-1 text-sm">
                  <RefreshCw className="w-4 h-4 text-yellow-300" />
                  <span>Free Revisions</span>
                </div>
                <div className="text-xs text-blue-100">Unlimited revisions during development</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <Section variant="default" padding="default">
        <Container size="narrow">
          <SectionHeader
            badge="Common Questions"
            title="Website Development"
            titleHighlight="FAQs"
            description="Clear answers about our web development process, scopes, and timelines."
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
    </div>
  );
};

export default WebsiteDevelopment;
