import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  FaPenAlt, 
  FaChartLine, 
  FaSearch, 
  FaVideo, 
  FaBullhorn, 
  FaUsers, 
  FaHashtag, 
  FaRocket, 
  FaFileAlt, 
  FaNewspaper,
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGem,
  FaCrown
} from 'react-icons/fa';
import {
  MapPin,
  Search,
  Phone,
  Star,
  FileText,
  Globe,
  Check,
  Video,
  BarChart3,
  ClipboardList,
  BookOpen,
  Mail,
  Smartphone,
  Mic,
  Radio,
  CheckSquare,
  Layers,
  MessageCircle,
  Sparkles,
  Edit3,
  Zap,
  Share2
} from 'lucide-react';
import { getPhysicalOffices, getPrimaryPhone, getOfficePhone, getBusinessEmail, getCanonicalOrigin } from '../../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../../services';
import { Container, Section, SectionHeader } from '../../components/ui';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AnimatedButton } from '../../components/ui/AnimatedButton';
import { Breadcrumb } from '../../components/ui/Breadcrumb';

const ContentMarketing: React.FC = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Best Content Marketing Services in Jaipur, Vrindavan & Nepal | Growth Service</title>
        <meta 
          name="description" 
          content="Professional content marketing services in Jaipur, Vrindavan, and Nepal. Create compelling content that attracts, engages, and converts your target audience. Get free content audit today!" 
        />
        <meta 
          name="keywords" 
          content="content marketing Jaipur, content writing services Vrindavan, content marketing Nepal, digital content strategy, SEO content writing, blog writing services, content marketing agency India, content strategy Jaipur"
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/content-marketing`} />
        
        <meta property="og:title" content="Best Content Marketing Services in Jaipur, Vrindavan & Nepal" />
        <meta property="og:description" content="Professional content marketing services with 300+ happy clients. Create content that drives traffic, generates leads, and grows your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${getCanonicalOrigin()}/content-marketing`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Digital Marketing', path: '/digital-marketing' },
              { label: 'Content Marketing' }
            ]}
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Jaipur</span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Vrindavan</span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-yellow-300" /> Nepal</span>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                <FaPenAlt className="text-4xl text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Best Content Marketing Services in <span className="text-yellow-300">Jaipur</span>, <span className="text-cyan-300">Vrindavan</span> & <span className="text-emerald-300">Nepal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Create compelling content that attracts, engages, and converts your target audience. 
              Trusted by <strong className="text-yellow-300">300+ happy clients</strong> across India and Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free Content Audit</span>
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Session</span>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-300 fill-yellow-300" /> 300+ Happy Clients</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-yellow-300" /> 5000+ Content Pieces</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-yellow-300" /> 3 Office Locations</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Content Marketing */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title={<span>Why Content Marketing is <span className="text-purple-600">Essential</span> for Your Business</span>}
            subtitle="Content is the foundation of modern digital marketing success. Here's why businesses in Jaipur, Vrindavan, and Nepal choose us."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="interactive" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 text-purple-600">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cost-Effective Marketing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Content marketing costs 62% less than traditional marketing and generates 3x more leads. We design high-impact content strategies tailored to your market and goals.
              </p>
            </Card>
            
            <Card variant="interactive" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <FaSearch className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">SEO Benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quality content improves search rankings by 434% more indexed pages. Our SEO-optimized content helps businesses rank higher in Jaipur, Vrindavan, and Nepal.
              </p>
            </Card>
            
            <Card variant="interactive" padding="lg" className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Builds Trust & Authority</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                70% of consumers feel closer to a company after reading custom content. Our content helps establish your brand as an industry authority.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Content Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <div className="text-center mb-12">
            <SectionHeader
              title={<span>Our Content Marketing Services in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span></span>}
              subtitle="Comprehensive content solutions for every stage of the customer journey from our 3 office locations"
              centered
            />
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Jaipur Office</span>
              <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Vrindavan Office</span>
              <span className="bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Nepal Office</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="interactive" padding="lg">
              <div className="text-blue-600 text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Blog Content Creation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> SEO-optimized blog posts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Industry research articles</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> How-to guides & tutorials</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Thought leadership pieces</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Content calendar management</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaVideo />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Video Content Production</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Explainer videos</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Product demonstrations</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Customer testimonials</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Social media shorts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> YouTube channel management</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-purple-600 text-3xl mb-4">
                <FaNewspaper />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Copywriting Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Website copywriting</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Email marketing campaigns</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Social media captions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Sales pages & landing pages</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Ad copy creation</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-rose-600 text-3xl mb-4">
                <FaBullhorn />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Content Strategy</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Content audit & analysis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Buyer persona development</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Content funnel mapping</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Editorial calendar creation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Performance measurement</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-rose-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-amber-600 text-3xl mb-4">
                <FaHashtag />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Social Media Content</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Platform-specific content</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Visual content creation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Carousel posts & infographics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Story/Reels content</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Content repurposing</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-amber-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>

            <Card variant="interactive" padding="lg">
              <div className="text-cyan-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Content Distribution</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Content syndication</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Guest posting outreach</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Email newsletter creation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Content promotion strategy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> Influencer collaboration</li>
              </ul>
              <div className="mt-4 text-xs font-medium text-cyan-600">Available in Jaipur • Vrindavan • Nepal</div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Content Types */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Types of Content We Create"
            subtitle="Diverse content formats to engage your audience across multiple channels"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { type: 'Blog Posts', icon: FileText },
              { type: 'Video Content', icon: Video },
              { type: 'Infographics', icon: BarChart3 },
              { type: 'Case Studies', icon: ClipboardList },
              { type: 'E-books', icon: BookOpen },
              { type: 'Whitepapers', icon: FileText },
              { type: 'Email Newsletters', icon: Mail },
              { type: 'Social Posts', icon: Smartphone },
              { type: 'Webinars', icon: Mic },
              { type: 'Podcasts', icon: Radio },
              { type: 'Checklists', icon: CheckSquare },
              { type: 'Templates', icon: Layers },
            ].map((content, index) => {
              const Icon = content.icon;
              return (
                <Card key={index} variant="interactive" padding="sm" className="text-center">
                  <div className="flex justify-center text-blue-600 mb-2"><Icon className="w-6 h-6" /></div>
                  <div className="text-gray-800 font-medium text-xs">{content.type}</div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Content Marketing Funnel */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Content Marketing Funnel Strategy"
            subtitle="Architected customer acquisition journey from top-of-funnel reach to bottom-of-funnel transaction"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stage: 'Top of Funnel', goal: 'Awareness', content: 'Blog posts, Social media, Infographics', color: 'bg-blue-50 border-blue-200 text-blue-900' },
              { stage: 'Middle of Funnel', goal: 'Consideration', content: 'Case studies, Webinars, E-books', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
              { stage: 'Bottom of Funnel', goal: 'Conversion', content: 'Product demos, Testimonials, Comparison guides', color: 'bg-purple-50 border-purple-200 text-purple-900' },
            ].map((funnel, index) => (
              <div key={index} className="text-center">
                <div className={`${funnel.color} border p-6 rounded-2xl mb-4 shadow-sm`}>
                  <h3 className="text-xl font-bold mb-2">{funnel.stage}</h3>
                  <div className="text-base font-semibold text-gray-700">Goal: {funnel.goal}</div>
                </div>
                <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider font-semibold">Content Types:</p>
                <p className="text-gray-800 font-medium text-sm">{funnel.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Content Marketing Results We Deliver"
            subtitle="What you can expect from our content marketing services across Jaipur, Vrindavan, and Nepal"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '300%', label: 'More Leads', color: 'text-blue-600' },
              { value: '6x', label: 'Higher Conversion', color: 'text-indigo-600' },
              { value: '97%', label: 'SEO Traffic Boost', color: 'text-emerald-600' },
              { value: '3x', label: 'Cost Savings', color: 'text-cyan-600' },
              { value: '24/7', label: 'Lead Generation', color: 'text-purple-600' },
              { value: '70%', label: 'Brand Awareness', color: 'text-amber-600' },
              { value: '5x', label: 'Website Traffic', color: 'text-rose-600' },
              { value: '2x', label: 'Social Engagement', color: 'text-violet-600' },
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

      {/* Pricing Packages */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Content Marketing Engagement Frameworks"
            subtitle="Strategic editorial and multimedia content frameworks tailored to your industry, audience, and growth objectives"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter Content', 
                tier: 'Consistent Publishing', 
                content: '4 Structured Content Pieces',
                features: ['4 Blog Posts/Month', 'Basic SEO Optimization', 'Social Media Graphics', 'Monthly Content Calendar', 'Performance Report'],
                popular: false,
                icon: <FaStar className="text-blue-600" />
              },
              { 
                name: 'Growth Content', 
                tier: 'Multi-Channel Velocity', 
                content: '8 Comprehensive Assets',
                features: ['6 Blog Posts/Month', '2 Video Content', 'Email Newsletter', 'Content Strategy', 'Performance Analytics', 'Dedicated Content Manager'],
                popular: true,
                icon: <FaCrown className="text-yellow-500" />
              },
              { 
                name: 'Enterprise Content', 
                tier: 'Full Editorial Scale', 
                content: '16+ High-Authority Assets',
                features: ['12 Blog Posts/Month', '4 Videos/Month', 'E-book/Whitepaper', 'Guest Post Outreach', 'Content Distribution', 'Monthly Strategy Calls', 'Priority Support'],
                popular: false,
                icon: <FaGem className="text-purple-600" />
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
                    POPULAR FRAMEWORK
                  </div>
                )}
                <div>
                  <div className="text-3xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-lg font-bold text-purple-900 mb-2">{plan.tier}</div>
                  <p className="text-gray-600 mb-6 text-sm">{plan.content}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700 text-sm">
                        <FaCheckCircle className="text-emerald-500 mr-2 mt-0.5 shrink-0" />
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
                  Discuss Content Scope
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              *Custom content strategies tailored for enterprise clients • Available in Jaipur, Vrindavan & Nepal
            </p>
          </div>
        </Container>
      </Section>

      {/* Office Locations Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title={<span>Our Content Marketing Offices in <span className="text-blue-600">Jaipur</span>, <span className="text-indigo-600">Vrindavan</span> & <span className="text-purple-600">Nepal</span></span>}
            subtitle="Visit our offices for personalized content strategy consultations"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getPhysicalOffices().map((office) => {
              return (
                <Card key={office.id} variant="interactive" padding="lg" className="relative flex flex-col justify-between">
                  <div>
                    {office.isHeadOffice && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-gray-900" />
                        <span>HEAD OFFICE</span>
                      </div>
                    )}
                    <div className="text-4xl mb-4">{office.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {office.address}
                    </p>
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <p className="flex items-center gap-2">
                        <FaPhone className="text-purple-600 shrink-0" /> <span>{office.phone}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaEnvelope className="text-purple-600 shrink-0" /> <span>{office.email}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaClock className="text-purple-600 shrink-0" /> <span>{office.timings}</span>
                      </p>
                    </div>
                  </div>
                  <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center pt-2">
                    Get Directions →
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Content Strategy Process */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our 5-Step Content Strategy Process"
            subtitle="Data-led editorial and distribution roadmap ensuring consistent audience growth"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Research', desc: 'Audience & topic research', icon: Search },
              { step: 2, title: 'Strategy', desc: 'Content plan & calendar', icon: ClipboardList },
              { step: 3, title: 'Creation', desc: 'Content writing & production', icon: Edit3 },
              { step: 4, title: 'Optimization', desc: 'SEO & performance tuning', icon: Zap },
              { step: 5, title: 'Distribution', desc: 'Promotion & sharing', icon: Share2 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-md">
                    {item.step}
                  </div>
                  <div className="flex justify-center text-indigo-600 mb-2"><Icon className="w-6 h-6" /></div>
                  <h3 className="text-base font-semibold mb-1 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Content Marketing Tips */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Content Marketing Best Practices"
            subtitle="Core operational disciplines that maximize digital engagement and search discoverability"
            centered
          />
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { tip: 'Quality Over Quantity', desc: 'One excellent piece outperforms ten average ones. Focus on creating valuable, in-depth content.' },
              { tip: 'SEO Integration', desc: 'Optimize content for search from the start. Use keyword research to guide your content creation.' },
              { tip: 'Audience Focus', desc: 'Create content that solves your audience\'s problems and answers their questions.' },
              { tip: 'Consistency Matters', desc: 'Regular publishing builds trust and authority. Maintain a consistent content schedule.' },
              { tip: 'Repurpose Content', desc: 'Turn one piece into multiple formats. Maximize the value of your content investment.' },
              { tip: 'Measure Performance', desc: 'Track what works and optimize accordingly. Use analytics to guide your content strategy.' },
            ].map((practice, index) => (
              <Card key={index} variant="default" padding="lg">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full w-9 h-9 flex items-center justify-center mr-4 shrink-0 font-bold text-sm shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 mb-1">{practice.tip}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{practice.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Team Section */}
      <Section variant="dark" padding="default">
        <Container>
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Content Marketing Team</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Get expert content strategy guidance from our team in Jaipur, Vrindavan, or Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-lg font-bold mb-1">Vivek Singh</h3>
              <p className="text-xs text-blue-200 mb-3">Content Strategy Manager</p>
              <a href={getTelHref(getPrimaryPhone())} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getPrimaryPhone()}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all text-white relative">
              <div className="absolute -top-2.5 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                HEAD OFFICE
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-lg font-bold mb-1">Vikash Singh</h3>
              <p className="text-xs text-blue-200 mb-3">Content Lead - Nepal</p>
              <a href={getTelHref(getOfficePhone('nepal'))} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('nepal')}</span>
              </a>
              <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {getOfficePhone('nepal')}</span>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 mx-auto mb-4">
                GS
              </div>
              <h3 className="text-lg font-bold mb-1">Growth Service</h3>
              <p className="text-xs text-blue-200 mb-3">Content Support Team</p>
              <a href={getTelHref(getOfficePhone('jaipur'))} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{getOfficePhone('jaipur')}</span>
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-yellow-300 text-xs block inline-flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{getBusinessEmail()}</span>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/free-audit"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Get Free Content Audit</span>
              </AnimatedButton>
              <Button
                to="/book-call"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Session</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section variant="default" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's create content that drives traffic, generates leads, and grows your business across Jaipur, Vrindavan, and Nepal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                to="/book-call"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Book Free Content Audit</span>
              </AnimatedButton>
              <Button
                href={getTelHref(getPrimaryPhone())}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {getPrimaryPhone()}</span>
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
                <span>WhatsApp Strategy Call</span>
              </Button>
            </div>
            <div className="mt-8 bg-purple-50 border border-purple-200 p-4 rounded-xl inline-block text-purple-900 text-sm">
              <span className="font-semibold inline-flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-purple-600" /> Special Offer:</span>
              <span> Get 2 free blog posts with 3-month commitment</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Internal Linking Section */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <Container className="text-center">
          <p className="text-gray-600 text-xs mb-3 font-medium uppercase tracking-wider">Explore More Services:</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/seo" className="text-blue-600 hover:text-blue-800 font-medium">SEO Services</Link>
            <span className="text-gray-300">|</span>
            <Link to="/web-development" className="text-blue-600 hover:text-blue-800 font-medium">Web Development</Link>
            <span className="text-gray-300">|</span>
            <Link to="/social-media" className="text-blue-600 hover:text-blue-800 font-medium">Social Media Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/paid-marketing" className="text-blue-600 hover:text-blue-800 font-medium">Meta Ads Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/local-seo" className="text-blue-600 hover:text-blue-800 font-medium">Google Business Profile</Link>
            <span className="text-gray-300">|</span>
            <Link to="/ecommerce" className="text-blue-600 hover:text-blue-800 font-medium">E-commerce Solutions</Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContentMarketing;