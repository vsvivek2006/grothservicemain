// src/pages/digital-marketing/GoogleBusinessProfile.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaMapMarkerAlt, FaStar, FaSearch, FaPhone, FaGlobe, FaImages, FaChartBar, FaCalendarAlt, FaComment } from 'react-icons/fa';
import { 
  Check,
  Utensils,
  ShoppingBag,
  HeartPulse,
  Home,
  Car,
  Scale,
  GraduationCap,
  Sparkles,
  Wrench,
  Hotel,
  Activity,
  Briefcase,
  Phone,
  MessageCircle
} from 'lucide-react';
import { primaryPhone } from '../../data/centralizedData';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const GoogleBusinessProfile: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Digital Marketing', path: '/digital-marketing' },
              { label: 'Google Business Profile' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaGoogle className="text-4xl text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Google Business Profile Optimization
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Dominate local search results, attract more customers, and grow your business with expert GBP management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Free GBP Audit
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why GBP Matters */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Why Google Business Profile is Essential"
            subtitle="Your GBP is often the first impression customers have of your business"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600">
                <FaSearch className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Search Visibility</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                46% of all Google searches have local intent. GBP helps you appear in "Google Maps 3-Pack"
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Trust & Credibility</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Businesses with complete GBP listings receive 7x more clicks and 2x more website visits
              </p>
            </Card>
            
            <Card variant="default" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 text-purple-600">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Direct Conversions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customers can call, get directions, or visit your website directly from your GBP
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* GBP Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Complete GBP Management Services"
            subtitle="We handle every aspect of your Google Business Profile for maximum impact"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Profile Setup & Optimization</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Complete GBP creation</li>
                <li>• Category & attribute optimization</li>
                <li>• Business hours & service areas</li>
                <li>• Contact information setup</li>
                <li>• Verification assistance</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                <FaImages />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Visual Content Management</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Professional photo uploads</li>
                <li>• Virtual tours setup</li>
                <li>• Logo & cover image optimization</li>
                <li>• Regular photo updates</li>
                <li>• Video content integration</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-4">
                <FaComment />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Review Management</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Review monitoring & responses</li>
                <li>• Review generation strategy</li>
                <li>• Negative review management</li>
                <li>• Review analytics</li>
                <li>• Star rating improvement</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-4">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Posts & Updates</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Weekly Google Posts</li>
                <li>• Event announcements</li>
                <li>• Product/service updates</li>
                <li>• Offer & promotion posts</li>
                <li>• Q&A management</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local SEO Integration</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Local keyword optimization</li>
                <li>• Citation building</li>
                <li>• NAP consistency check</li>
                <li>• Local backlink strategy</li>
                <li>• Competitor analysis</li>
              </ul>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4">
                <FaCalendarAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Monthly performance reports</li>
                <li>• Customer action tracking</li>
                <li>• Search query analysis</li>
                <li>• Photo view analytics</li>
                <li>• Competitor benchmarking</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Expected Results from GBP Optimization"
            subtitle="What our clients typically achieve within 3 months"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '200%', label: 'More Profile Views', color: 'text-blue-600' },
              { value: '150%', label: 'Increase in Calls', color: 'text-emerald-600' },
              { value: '4.8 / 5', label: 'Average Rating', color: 'text-amber-500' },
              { value: '300%', label: 'Direction Requests', color: 'text-rose-600' },
              { value: '80%', label: 'Search Appearance', color: 'text-purple-600' },
              { value: '250%', label: 'Website Clicks', color: 'text-indigo-600' },
              { value: '100+', label: 'Monthly Views', color: 'text-pink-600' },
              { value: '50%', label: 'Conversion Rate', color: 'text-teal-600' },
            ].map((stat, index) => (
              <Card key={index} variant="default" padding="default" className="text-center">
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-800 font-medium text-xs">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* GBP Checklist */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="GBP Optimization Checklist"
            subtitle="Essential technical data points verified across every local map listing"
            centered
          />
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Complete Business Information',
              'Accurate NAP (Name, Address, Phone)',
              'Proper Business Categories',
              'High-Quality Photos & Logo',
              'Business Hours (Including Holidays)',
              'Service Areas & Locations',
              'Products/Services Listed',
              'Attributes Selection',
              'Booking/Appointment Links',
              'Website & Social Links',
              'Review Response Strategy',
              'Regular Google Posts',
              'Q&A Monitoring',
              'Photo Updates (Monthly)',
              'Analytics Tracking',
              'Competitor Benchmarking'
            ].map((item, index) => (
              <Card key={index} variant="default" padding="default" className="flex items-center">
                <div className="bg-emerald-100 text-emerald-600 w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-gray-800 font-medium text-sm">{item}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries We Serve */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Industries We've Helped"
            subtitle="GBP optimization works for businesses of all types and sizes"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Restaurants', icon: Utensils },
              { name: 'Retail Stores', icon: ShoppingBag },
              { name: 'Healthcare', icon: HeartPulse },
              { name: 'Real Estate', icon: Home },
              { name: 'Automotive', icon: Car },
              { name: 'Legal Services', icon: Scale },
              { name: 'Education', icon: GraduationCap },
              { name: 'Beauty Salons', icon: Sparkles },
              { name: 'Home Services', icon: Wrench },
              { name: 'Hotels', icon: Hotel },
              { name: 'Fitness Centers', icon: Activity },
              { name: 'Consulting', icon: Briefcase },
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} variant="interactive" padding="sm" className="text-center">
                  <div className="flex justify-center text-blue-600 mb-2"><Icon className="w-6 h-6" /></div>
                  <div className="text-gray-800 font-medium text-xs">{industry.name}</div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Pricing Packages */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Google Business Profile Frameworks"
            subtitle="Structured local map management tiers to capture nearby customer searches"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Scope', 
                tier: 'Foundation Setup',
                bestFor: 'Single Location & New Businesses',
                features: ['Profile Setup', 'Basic Optimization', 'Monthly Updates', 'Review Monitoring'],
                popular: false
              },
              { 
                name: 'Professional Scope', 
                tier: 'Active Growth Retainer',
                bestFor: 'Growing Local Businesses',
                features: ['Complete Optimization', 'Weekly Google Posts', 'Review Management', 'Photo Updates', 'Monthly Reports'],
                popular: true
              },
              { 
                name: 'Enterprise Scope', 
                tier: 'Multi-Location Network',
                bestFor: 'Regional Chains & Franchises',
                features: ['Multi-Location Management', 'Daily Monitoring', 'Competitor Analysis', 'Advanced Analytics', 'Local SEO Integration', 'Priority Support'],
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
                    POPULAR SCOPE
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-900 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 text-xs mb-6">Best for: <span className="font-semibold text-gray-800">{plan.bestFor}</span></p>
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
                  Discuss GMB Scope
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 text-gray-500 text-sm">
            *All engagements include Google Business Profile verification guidance
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dominate Your Local Market with Google
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Don't let competitors get the local search advantage. Optimize your Google Business Profile today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/book-call"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book Free GBP Audit
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
                <span>WhatsApp Consultation</span>
              </Button>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl inline-block">
              <p className="text-blue-100 text-sm">
                <span className="font-semibold text-yellow-300">Limited Time Offer:</span> First month FREE with annual commitment
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common questions about our local Google Maps management and verification"
            centered
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How long does it take to see results from GBP optimization?',
                a: 'Initial improvements can be seen within 7-14 days, but full optimization results typically take 1-3 months as Google processes updates and rankings stabilize.'
              },
              {
                q: 'Do you handle Google Business Profile verification?',
                a: 'Yes, we guide you through the verification process and help with postcard verification, phone verification, or instant verification when available.'
              },
              {
                q: 'Can you manage multiple locations?',
                a: 'Absolutely! We have special packages for businesses with multiple locations and can manage them all from a single dashboard.'
              },
              {
                q: 'How often do you update our Google Business Profile?',
                a: 'We update profiles weekly with new posts, photos, and information. Review responses are handled within 24 hours.'
              },
              {
                q: 'What happens if we already have a GBP listing?',
                a: 'We conduct a comprehensive audit of your existing listing, identify optimization opportunities, and implement improvements to enhance performance.'
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

export default GoogleBusinessProfile;
