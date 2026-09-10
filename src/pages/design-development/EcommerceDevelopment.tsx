// src/pages/design-development/EcommerceDevelopment.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaMobileAlt, FaCreditCard, FaTruck, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { 
  Check,
  Cpu, 
  Zap, 
  Search, 
  Heart, 
  Star, 
  ShoppingCart, 
  Store, 
  RefreshCw, 
  Package, 
  BarChart3, 
  Award, 
  TrendingUp,
  Palette,
  Code,
  CheckCircle2,
  Rocket,
  CreditCard,
  Smartphone,
  Phone,
  MessageCircle,
  Shirt,
  Utensils,
  Sparkles,
  Home,
  Trophy,
  BookOpen,
  Gem,
  HeartPulse,
  Car,
  Monitor
} from 'lucide-react';
import { primaryPhone } from '../../data/centralizedData';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const EcommerceDevelopment: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Design & Development', path: '/design-development' },
              { label: 'Ecommerce Development' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaShoppingCart className="text-4xl text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Professional E-commerce Development
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Build high-converting online stores that drive sales and grow your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Free Store Audit
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Discuss Your E-commerce Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* E-commerce Stats */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Why E-commerce is Essential"
            subtitle="The future of retail is online - don't get left behind"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">$6.3T</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global E-commerce Market</h3>
              <p className="text-gray-600 leading-relaxed">
                Expected to reach $8.1 trillion by 2026 with 56% annual growth
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">76%</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Mobile Shopping</h3>
              <p className="text-gray-600 leading-relaxed">
                76% of consumers prefer mobile shopping over desktop
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">45%</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Revenue Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                E-commerce businesses grow 45% faster than traditional retail
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* E-commerce Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Complete E-commerce Development Services"
            subtitle="End-to-end solutions for building successful online stores"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Platform Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Shopify Store Development</li>
                <li>• WooCommerce Development</li>
                <li>• Magento Development</li>
                <li>• Custom E-commerce Solutions</li>
                <li>• Headless Commerce</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Mobile Commerce</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile-optimized Stores</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• Mobile App Development</li>
                <li>• AMP for E-commerce</li>
                <li>• Touch-friendly Interfaces</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                <FaCreditCard />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Payment Integration</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Global Payment Gateway Integration</li>
                <li>• Stripe Integration</li>
                <li>• PayPal Integration</li>
                <li>• UPI & Digital Wallets</li>
                <li>• Multi-currency Support</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4">
                <FaTruck />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Inventory & Shipping</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Inventory Management System</li>
                <li>• Shipping Integration</li>
                <li>• Order Tracking</li>
                <li>• Dropshipping Setup</li>
                <li>• Warehouse Management</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">E-commerce SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Product Page Optimization</li>
                <li>• Category Page SEO</li>
                <li>• Schema Markup for Products</li>
                <li>• Site Speed Optimization</li>
                <li>• SEO-friendly URLs</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Security & Compliance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• SSL Certificate Setup</li>
                <li>• PCI DSS Compliance</li>
                <li>• GDPR Compliance</li>
                <li>• Fraud Protection</li>
                <li>• Data Backup Systems</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* E-commerce Platforms */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="E-commerce Platforms We Develop"
            subtitle="We specialize in all major e-commerce platforms"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Shopify', color: 'bg-emerald-50 border-emerald-200 text-emerald-900', bestFor: 'Startups & SMEs' },
              { name: 'WooCommerce', color: 'bg-blue-50 border-blue-200 text-blue-900', bestFor: 'WordPress Users' },
              { name: 'Magento', color: 'bg-purple-50 border-purple-200 text-purple-900', bestFor: 'Enterprise' },
              { name: 'BigCommerce', color: 'bg-indigo-50 border-indigo-200 text-indigo-900', bestFor: 'Growing Brands' },
              { name: 'Custom React', color: 'bg-cyan-50 border-cyan-200 text-cyan-900', bestFor: 'Custom Solutions' },
              { name: 'PrestaShop', color: 'bg-rose-50 border-rose-200 text-rose-900', bestFor: 'European Markets' },
              { name: 'OpenCart', color: 'bg-gray-50 border-gray-200 text-gray-900', bestFor: 'Budget Solutions' },
              { name: 'Headless', color: 'bg-violet-50 border-violet-200 text-violet-900', bestFor: 'Advanced Tech' },
            ].map((platform, index) => (
              <div key={index} className={`${platform.color} border p-6 rounded-2xl text-center shadow-sm`}>
                <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                <p className="text-sm opacity-80">Best for: {platform.bestFor}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Showcase */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Advanced E-commerce Features"
            subtitle="Modern features engineered for peak conversion and customer loyalty"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'AI Product Recommendations', icon: Cpu },
              { feature: 'One-Click Checkout', icon: Zap },
              { feature: 'Advanced Search & Filter', icon: Search },
              { feature: 'Wishlist & Save for Later', icon: Heart },
              { feature: 'Customer Reviews & Ratings', icon: Star },
              { feature: 'Abandoned Cart Recovery', icon: ShoppingCart },
              { feature: 'Multi-vendor Marketplace', icon: Store },
              { feature: 'Subscription Management', icon: RefreshCw },
              { feature: 'Bulk Order Processing', icon: Package },
              { feature: 'Real-time Inventory Sync', icon: BarChart3 },
              { feature: 'Customer Loyalty Program', icon: Award },
              { feature: 'Advanced Analytics Dashboard', icon: TrendingUp },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="default" padding="default" className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.feature}</h3>
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
            title="Our E-commerce Development Process"
            subtitle="A structured, transparent engineering methodology from concept to scale"
            centered
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: 1, title: 'Discovery', desc: 'Requirements & planning', icon: Search },
                { step: 2, title: 'Design', desc: 'UI/UX & wireframes', icon: Palette },
                { step: 3, title: 'Development', desc: 'Coding & integration', icon: Code },
                { step: 4, title: 'Testing', desc: 'QA & optimization', icon: CheckCircle2 },
                { step: 5, title: 'Launch', desc: 'Deployment & training', icon: Rocket },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="text-center">
                    <div className="relative mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-md">
                        {item.step}
                      </div>
                      {item.step < 5 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-100 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="flex justify-center text-indigo-600 mb-2"><Icon className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <Card variant="default" padding="default" className="inline-block border-indigo-200">
                <div className="flex justify-center text-indigo-600 mb-2"><TrendingUp className="w-6 h-6" /></div>
                <h3 className="font-semibold text-gray-900">Phase 6: Growth & Marketing</h3>
                <p className="text-gray-600 text-sm">Post-launch optimization and marketing support</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Performance Metrics */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Performance Guarantees"
            subtitle="Our e-commerce stores deliver exceptional results"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '<3s', label: 'Page Load Time', desc: 'Guaranteed fast loading' },
              { metric: '99.9%', label: 'Uptime', desc: 'Maximum store availability' },
              { metric: 'Mobile-First', label: 'Design Approach', desc: 'Optimized for mobile' },
              { metric: 'SEO-Ready', label: 'Built-in SEO', desc: 'Rank higher in search' },
              { metric: 'Secure', label: 'SSL & Security', desc: 'Fully protected' },
              { metric: 'Scalable', label: 'Architecture', desc: 'Grow without limits' },
              { metric: '24/7', label: 'Support', desc: 'Technical assistance' },
              { metric: '30 Days', label: 'Post-launch Support', desc: 'Free maintenance' },
            ].map((item, index) => (
              <Card key={index} variant="default" padding="default" className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-2">{item.metric}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.label}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* E-commerce Packages */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="E-commerce Engineering Frameworks"
            subtitle="Custom digital storefronts, multi-vendor marketplaces, and headless commerce platforms tailored to high-conversion transactional journeys"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter Store', 
                tier: 'Direct-to-Consumer Storefront', 
                platform: 'Shopify / Modern WooCommerce',
                features: ['Up to 50 Products', 'Mobile-Responsive High-Speed UI', 'Secure Payment Gateway & Checkout', 'Lead & Abandoned Cart Recovery', 'Social Shopping Integration', '1 Month Support & Optimization'],
                popular: false
              },
              { 
                name: 'Business Store', 
                tier: 'Scalable Brand Commerce', 
                platform: 'Custom WooCommerce / Shopify Plus',
                features: ['Up to 500 Products', 'Custom Checkout & Subscription Flows', 'Multi-Currency Payment Gateways', 'Automated Inventory & Warehouse Sync', 'E-commerce Schema & SEO Optimization', 'Marketing & CRM Automation', '3 Months Dedicated Engineering Support'],
                popular: true
              },
              { 
                name: 'Enterprise Store', 
                tier: 'Enterprise & Multi-Vendor Hub', 
                platform: 'Headless Commerce / Magento / Custom',
                features: ['High-Volume Catalog Architecture', 'Custom Headless Frontend Experience', 'Multi-Vendor Marketplace Infrastructure', 'Real-Time ERP / Logistics Integration', 'B2B Wholesale / Tiered Pricing Engine', 'PWA & Native App Integration', '6 Months Priority SLA Support'],
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
                  <div className="text-lg font-bold text-purple-900 mb-2">{plan.tier}</div>
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
                  Discuss Commerce Scope
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Custom enterprise solutions and ongoing maintenance packages available separately
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Let's build an e-commerce platform that drives sales and grows your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/book-call"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Free Consultation
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
                <span>WhatsApp Quote</span>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Rocket className="w-4 h-4 text-yellow-300" />
                  <span>Fast Development</span>
                </div>
                <div className="text-sm opacity-80">4-8 weeks delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-yellow-300" />
                  <span>Payment Ready</span>
                </div>
                <div className="text-sm opacity-80">Multiple gateway options</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-yellow-300" />
                  <span>Mobile Optimized</span>
                </div>
                <div className="text-sm opacity-80">Perfect shopping experience</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* E-commerce Checklist */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="E-commerce Success Checklist"
            subtitle="Essential technical and user-experience benchmarks every high-converting store requires"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="default" padding="lg">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Technical Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Fast loading speed (<3 seconds)',
                    'Mobile-responsive design',
                    'Secure checkout process',
                    'SSL certificate installed',
                    'SEO-friendly structure',
                    'Payment gateway integration',
                    'Inventory management system',
                    'Shipping integration'
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
                    'Advanced search & filters',
                    'High-quality product images',
                    'Detailed product descriptions',
                    'Customer reviews & ratings',
                    'Easy checkout process',
                    'Multiple payment options',
                    'Order tracking system'
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
              <div className="inline-block bg-purple-50 border border-purple-200 px-6 py-3 rounded-full text-purple-900 text-sm font-medium">
                <span className="font-semibold">How does your store compare?</span> Get a free e-commerce audit today!
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry Solutions */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Industry-Specific E-commerce Solutions"
            subtitle="We build specialized stores for every industry"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { industry: 'Fashion', icon: Shirt },
              { industry: 'Electronics', icon: Smartphone },
              { industry: 'Food & Grocery', icon: Utensils },
              { industry: 'Beauty', icon: Sparkles },
              { industry: 'Home Decor', icon: Home },
              { industry: 'Sports', icon: Trophy },
              { industry: 'Books', icon: BookOpen },
              { industry: 'Jewelry', icon: Gem },
              { industry: 'Health', icon: HeartPulse },
              { industry: 'Automotive', icon: Car },
              { industry: 'B2B Wholesale', icon: Package },
              { industry: 'Digital Products', icon: Monitor },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="interactive" padding="sm" className="text-center">
                  <div className="flex justify-center text-purple-600 mb-2"><Icon className="w-6 h-6" /></div>
                  <div className="text-gray-800 font-medium text-xs">{item.industry}</div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default EcommerceDevelopment;
