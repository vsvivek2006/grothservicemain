import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaChartBar, FaUsers, FaBullhorn, FaVideo, FaHashtag } from 'react-icons/fa';
import { Check, Phone, MessageCircle } from 'lucide-react';
import { primaryPhone } from '../../data/centralizedData';
import { getNepalWhatsAppUrl, getTelHref } from '../../services';
import { getCanonicalOrigin } from '../../selectors';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import AnimatedButton from '../../components/ui/AnimatedButton';

const SocialMediaManagement = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Social Media Management Services | Growth Service</title>
        <meta 
          name="description" 
          content="Build your brand, engage your audience, and drive measurable business growth with our expert social media management services." 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/social-media`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Social Media Management
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Build your brand, engage your audience, and drive growth with our expert social media strategies
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                as={Link}
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
              >
                Get Social Media Audit
              </Button>
              <Button
                to="/book-call"
                variant="outline-white"
                size="lg"
              >
                Book Free Strategy Session
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Platform Stats */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="We Master Every Platform"
            subtitle="Comprehensive social media management across all major platforms"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card variant="interactive" className="p-6 text-center">
              <FaFacebook className="text-blue-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Facebook</h3>
              <p className="text-sm text-gray-600 mt-1">Page Management</p>
            </Card>
            
            <Card variant="interactive" className="p-6 text-center">
              <FaInstagram className="text-pink-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Instagram</h3>
              <p className="text-sm text-gray-600 mt-1">Content & Reels</p>
            </Card>
            
            <Card variant="interactive" className="p-6 text-center">
              <FaTwitter className="text-blue-400 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Twitter/X</h3>
              <p className="text-sm text-gray-600 mt-1">Engagement & Growth</p>
            </Card>
            
            <Card variant="interactive" className="p-6 text-center">
              <FaLinkedin className="text-blue-700 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">LinkedIn</h3>
              <p className="text-sm text-gray-600 mt-1">B2B Networking</p>
            </Card>
            
            <Card variant="interactive" className="p-6 text-center">
              <FaYoutube className="text-red-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">YouTube</h3>
              <p className="text-sm text-gray-600 mt-1">Video Strategy</p>
            </Card>
            
            <Card variant="interactive" className="p-6 text-center">
              <FaHashtag className="text-purple-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Trends</h3>
              <p className="text-sm text-gray-600 mt-1">Hashtag & Trend Research</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Services Offered */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our Social Media Services"
            subtitle="End-to-end social media solutions for your business growth"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" className="p-8">
              <div className="text-purple-600 text-3xl mb-4">
                <FaBullhorn />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Strategy & Creation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Custom content calendar</li>
                <li>• Graphic design & creatives</li>
                <li>• Video content & Reels</li>
                <li>• Copywriting & captions</li>
                <li>• Brand voice development</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-blue-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Management</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Daily engagement & responses</li>
                <li>• Comment moderation</li>
                <li>• Direct message management</li>
                <li>• Crisis management</li>
                <li>• Brand reputation monitoring</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-green-600 text-3xl mb-4">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Reporting</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Monthly performance reports</li>
                <li>• Competitor analysis</li>
                <li>• ROI tracking</li>
                <li>• Audience insights</li>
                <li>• Growth recommendations</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaVideo />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Paid Social Advertising</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Facebook/Instagram ads</li>
                <li>• LinkedIn advertising</li>
                <li>• Audience targeting</li>
                <li>• Ad creative development</li>
                <li>• Conversion tracking</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaHashtag />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Influencer Marketing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Influencer identification</li>
                <li>• Campaign management</li>
                <li>• Content collaboration</li>
                <li>• Performance tracking</li>
                <li>• Relationship management</li>
              </ul>
            </Card>

            <Card variant="default" className="p-8">
              <div className="text-pink-600 text-3xl mb-4">
                <FaInstagram />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media Growth</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Follower growth strategy</li>
                <li>• Engagement optimization</li>
                <li>• Profile optimization</li>
                <li>• Hashtag strategy</li>
                <li>• Trend implementation</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Measurable Results"
            subtitle="Real outcomes from our social media management services"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card variant="default" className="text-center p-6 bg-purple-50/50 border-purple-100">
              <div className="text-5xl font-bold text-purple-600 mb-2">300%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement Increase</h3>
              <p className="text-gray-600 text-sm">Average boost in social interactions</p>
            </Card>
            
            <Card variant="default" className="text-center p-6 bg-blue-50/50 border-blue-100">
              <div className="text-5xl font-bold text-blue-600 mb-2">150%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follower Growth</h3>
              <p className="text-gray-600 text-sm">Organic audience expansion</p>
            </Card>
            
            <Card variant="default" className="text-center p-6 bg-green-50/50 border-green-100">
              <div className="text-5xl font-bold text-green-600 mb-2">40%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</h3>
              <p className="text-gray-600 text-sm">Lower customer acquisition cost</p>
            </Card>
            
            <Card variant="default" className="text-center p-6 bg-yellow-50/50 border-yellow-100">
              <div className="text-5xl font-bold text-yellow-600 mb-2">250%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ROI Increase</h3>
              <p className="text-gray-600 text-sm">Return on social media investment</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our 5-Step Social Media Process"
            subtitle="Strategic workflows designed to consistently produce high-performing brand assets"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Audit & Analysis', desc: 'Current profile analysis', color: 'bg-blue-100 text-blue-600' },
              { step: 2, title: 'Strategy Planning', desc: 'Custom content calendar', color: 'bg-purple-100 text-purple-600' },
              { step: 3, title: 'Content Creation', desc: 'Design & copywriting', color: 'bg-indigo-100 text-indigo-600' },
              { step: 4, title: 'Implementation', desc: 'Posting & engagement', color: 'bg-green-100 text-green-600' },
              { step: 5, title: 'Optimization', desc: 'Analytics & improvements', color: 'bg-yellow-100 text-yellow-600' },
            ].map((item) => (
              <Card key={item.step} variant="default" className="text-center p-6">
                <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create a social media strategy that drives real business results
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                as={Link}
                to="/book-call"
                variant="secondary"
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 shadow-lg"
              >
                Start Your Social Media Journey
              </Button>
              <Button
                href={getTelHref(primaryPhone)}
                variant="outline-white"
                size="lg"
                className="inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-yellow-300" />
                <span>Call: {primaryPhone}</span>
              </Button>
              <Button
                as="a"
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="bg-[#25D366] hover:bg-emerald-600 text-white border-0 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Media Engagement Frameworks */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Social Media Engagement Frameworks"
            subtitle="Structured multi-channel creative scopes tailored to your brand's growth objectives"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter Scope', tier: 'Foundation Management', color: 'bg-blue-50/50 border-blue-200', features: ['2 Platforms', '12 Posts/Month', 'Basic Analytics', 'Community Management'] },
              { name: 'Growth Scope', tier: 'Active Multi-Channel', color: 'bg-purple-50/50 border-purple-300', features: ['3 Platforms', '24 Posts/Month', 'Advanced Analytics', 'Content Creation', 'Ad Management'] },
              { name: 'Enterprise Scope', tier: 'Omnichannel Brand Leadership', color: 'bg-yellow-50/50 border-yellow-200', features: ['5+ Platforms', 'Daily Posts', 'Full Analytics', 'Influencer Collabs', 'Strategy Planning', 'Monthly Reports'] },
            ].map((plan) => (
              <Card key={plan.name} variant="default" className={`${plan.color} p-8 border flex flex-col justify-between`}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                  <div className="text-sm font-semibold text-purple-700 mb-4">{plan.tier}</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                        {feature}
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
                    Discuss Scope
                  </AnimatedButton>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default SocialMediaManagement;
