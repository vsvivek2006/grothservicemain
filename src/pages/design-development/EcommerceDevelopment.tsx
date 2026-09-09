// src/pages/design-development/EcommerceDevelopment.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaMobileAlt, FaCreditCard, FaTruck, FaChartLine, FaShieldAlt, FaSearch, FaCog, FaSync, FaRocket } from 'react-icons/fa';
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

const EcommerceDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaShoppingCart className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional E-commerce Development
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Build high-converting online stores that drive sales and grow your business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Store Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Discuss Your E-commerce Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why E-commerce is Essential
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The future of retail is online - don't get left behind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-orange-600 mb-2">$6.3T</div>
              <h3 className="text-xl font-semibold mb-3">Global E-commerce Market</h3>
              <p className="text-gray-600">
                Expected to reach $8.1 trillion by 2026 with 56% annual growth
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-red-600 mb-2">76%</div>
              <h3 className="text-xl font-semibold mb-3">Mobile Shopping</h3>
              <p className="text-gray-600">
                76% of consumers prefer mobile shopping over desktop
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">45%</div>
              <h3 className="text-xl font-semibold mb-3">Revenue Growth</h3>
              <p className="text-gray-600">
                E-commerce businesses grow 45% faster than traditional retail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete E-commerce Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions for building successful online stores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-orange-600 text-3xl mb-4">
                <FaShoppingCart />
              </div>
              <h3 className="text-xl font-semibold mb-3">Platform Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Shopify Store Development</li>
                <li>• WooCommerce Development</li>
                <li>• Magento Development</li>
                <li>• Custom E-commerce Solutions</li>
                <li>• Headless Commerce</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Commerce</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile-optimized Stores</li>
                <li>• Progressive Web Apps (PWA)</li>
                <li>• Mobile App Development</li>
                <li>• AMP for E-commerce</li>
                <li>• Touch-friendly Interfaces</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaCreditCard />
              </div>
              <h3 className="text-xl font-semibold mb-3">Payment Integration</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Global Payment Gateway Integration</li>
                <li>• Stripe Integration</li>
                <li>• PayPal Integration</li>
                <li>• UPI & Digital Wallets</li>
                <li>• Multi-currency Support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaTruck />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inventory & Shipping</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Inventory Management System</li>
                <li>• Shipping Integration</li>
                <li>• Order Tracking</li>
                <li>• Dropshipping Setup</li>
                <li>• Warehouse Management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaSearch />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce SEO</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Product Page Optimization</li>
                <li>• Category Page SEO</li>
                <li>• Schema Markup for Products</li>
                <li>• Site Speed Optimization</li>
                <li>• SEO-friendly URLs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• SSL Certificate Setup</li>
                <li>• PCI DSS Compliance</li>
                <li>• GDPR Compliance</li>
                <li>• Fraud Protection</li>
                <li>• Data Backup Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              E-commerce Platforms We Develop
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in all major e-commerce platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Shopify', color: 'bg-green-100 text-green-800', bestFor: 'Startups & SMEs' },
              { name: 'WooCommerce', color: 'bg-blue-100 text-blue-800', bestFor: 'WordPress Users' },
              { name: 'Magento', color: 'bg-orange-100 text-orange-800', bestFor: 'Enterprise' },
              { name: 'BigCommerce', color: 'bg-purple-100 text-purple-800', bestFor: 'Growing Brands' },
              { name: 'Custom React', color: 'bg-cyan-100 text-cyan-800', bestFor: 'Custom Solutions' },
              { name: 'PrestaShop', color: 'bg-red-100 text-red-800', bestFor: 'European Markets' },
              { name: 'OpenCart', color: 'bg-gray-100 text-gray-800', bestFor: 'Budget Solutions' },
              { name: 'Headless', color: 'bg-indigo-100 text-indigo-800', bestFor: 'Advanced Tech' },
            ].map((platform, index) => (
              <div key={index} className={`${platform.color} p-6 rounded-xl text-center`}>
                <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                <p className="text-sm opacity-80">Best for: {platform.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Advanced E-commerce Features
          </h2>
          
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
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="text-orange-600 mb-3"><Icon className="w-6 h-6" /></div>
                  <h3 className="font-semibold text-gray-800">{item.feature}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our E-commerce Development Process
          </h2>
          
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
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                        {item.step}
                      </div>
                      {item.step < 5 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-orange-200 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="flex justify-center text-orange-600 mb-2"><Icon className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-block bg-white p-6 rounded-xl shadow-sm border border-orange-200">
                <div className="flex justify-center text-orange-600 mb-2"><TrendingUp className="w-6 h-6" /></div>
                <h3 className="font-semibold text-gray-800">Phase 6: Growth & Marketing</h3>
                <p className="text-gray-600">Post-launch optimization and marketing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Performance Guarantees
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our e-commerce stores deliver exceptional results
            </p>
          </div>
          
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
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">{item.metric}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              E-commerce Engineering Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom digital storefronts, multi-vendor marketplaces, and headless commerce platforms tailored to high-conversion transactional journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter Store', 
                tier: 'Direct-to-Consumer Storefront', 
                platform: 'Shopify / Modern WooCommerce',
                features: ['Up to 50 Products', 'Mobile-Responsive High-Speed UI', 'Secure Payment Gateway & Checkout', 'Lead & Abandoned Cart Recovery', 'Social Shopping Integration', '1 Month Support & Optimization'],
                color: 'border-orange-200'
              },
              { 
                name: 'Business Store', 
                tier: 'Scalable Brand Commerce', 
                platform: 'Custom WooCommerce / Shopify Plus',
                features: ['Up to 500 Products', 'Custom Checkout & Subscription Flows', 'Multi-Currency Payment Gateways', 'Automated Inventory & Warehouse Sync', 'E-commerce Schema & SEO Optimization', 'Marketing & CRM Automation', '3 Months Dedicated Engineering Support'],
                color: 'border-red-300',
                popular: true
              },
              { 
                name: 'Enterprise Store', 
                tier: 'Enterprise & Multi-Vendor Hub', 
                platform: 'Headless Commerce / Magento / Custom',
                features: ['High-Volume Catalog Architecture', 'Custom Headless Frontend Experience', 'Multi-Vendor Marketplace Infrastructure', 'Real-Time ERP / Logistics Integration', 'B2B Wholesale / Tiered Pricing Engine', 'PWA & Native App Integration', '6 Months Priority SLA Support'],
                color: 'border-orange-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    RECOMMENDED FRAMEWORK
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-orange-900 mb-2">{plan.tier}</div>
                <p className="text-gray-600 mb-4">Platform: <span className="font-semibold">{plan.platform}</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-orange-600 to-red-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Discuss Commerce Scope
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Custom enterprise solutions and ongoing maintenance packages available separately
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build an e-commerce platform that drives sales and grows your business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                to="/book-call"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Consultation
              </Link>
              <a
                href={getTelHref(primaryPhone)}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {primaryPhone}</span>
              </a>
              <a
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Rocket className="w-4 h-4 text-orange-300" />
                  <span>Fast Development</span>
                </div>
                <div className="text-sm opacity-90">4-8 weeks delivery</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-orange-300" />
                  <span>Payment Ready</span>
                </div>
                <div className="text-sm opacity-90">Multiple gateway options</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center">
                <div className="font-semibold inline-flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-orange-300" />
                  <span>Mobile Optimized</span>
                </div>
                <div className="text-sm opacity-90">Perfect shopping experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            E-commerce Success Checklist
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-orange-200">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Technical Requirements</h3>
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
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-red-200">
                <h3 className="font-bold text-xl mb-4 text-gray-800">User Experience</h3>
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
                    <li key={index} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-block bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-700">
                  <span className="font-semibold">How does your store compare?</span> Get a free e-commerce audit today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Industry-Specific E-commerce Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We build specialized stores for every industry
            </p>
          </div>
          
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
                <div key={index} className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-orange-300 transition-colors">
                  <div className="flex justify-center text-orange-600 mb-2"><Icon className="w-6 h-6" /></div>
                  <div className="text-gray-700 font-medium">{item.industry}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopment;
