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
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaBuilding,
  FaGlobe,
  FaTrophy,
  FaGem,
  FaCrown
} from 'react-icons/fa';
import { getPhysicalOffices, getPrimaryPhone, getOfficePhone, getBusinessEmail } from '../../selectors';
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from '../../services';

const ContentMarketing = () => {
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
        <link rel="canonical" href="https://growthservice.in/content-marketing" />
        
        <meta property="og:title" content="Best Content Marketing Services in Jaipur, Vrindavan & Nepal" />
        <meta property="og:description" content="Professional content marketing services with 300+ happy clients. Create content that drives traffic, generates leads, and grows your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthservice.in/content-marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 via-emerald-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Jaipur</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Vrindavan</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">📍 Nepal</span>
            </div>
            <div className="flex justify-center mb-6">
              <FaPenAlt className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Content Marketing Services in <span className="text-yellow-300">Jaipur</span>, <span className="text-cyan-300">Vrindavan</span> & <span className="text-green-300">Nepal</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Create compelling content that attracts, engages, and converts your target audience. 
              Trusted by <strong className="text-yellow-300">300+ happy clients</strong> across India and Nepal.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                🔍 Get Free Content Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Book Strategy Session
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-1">⭐ 300+ Happy Clients</span>
              <span className="flex items-center gap-1">📝 5000+ Content Pieces</span>
              <span className="flex items-center gap-1">🌍 3 Office Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Marketing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Content Marketing is <span className="text-teal-600">Essential</span> for Your Business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Content is the foundation of modern digital marketing success. Here's why businesses in Jaipur, Vrindavan, and Nepal choose us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-all rounded-xl hover:-translate-y-2">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-teal-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective Marketing</h3>
              <p className="text-gray-600">
                Content marketing costs 62% less than traditional marketing and generates 3x more leads. We design high-impact content strategies tailored to your market and goals.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-all rounded-xl hover:-translate-y-2">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-emerald-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Benefits</h3>
              <p className="text-gray-600">
                Quality content improves search rankings by 434% more indexed pages. Our SEO-optimized content helps businesses rank higher in Jaipur, Vrindavan, and Nepal.
              </p>
            </div>
            
            <div className="text-center p-6 hover:shadow-lg transition-all rounded-xl hover:-translate-y-2">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Builds Trust & Authority</h3>
              <p className="text-gray-600">
                70% of consumers feel closer to a company after reading custom content. Our content helps establish your brand as an industry authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Content Marketing Services in <span className="text-teal-600">Jaipur</span>, <span className="text-emerald-600">Vrindavan</span> & <span className="text-green-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive content solutions for every stage of the customer journey from our 3 office locations
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">📍 Jaipur Office</span>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">📍 Vrindavan Office</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">📍 Nepal Office</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-teal-600 text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Blog Content Creation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ SEO-optimized blog posts</li>
                <li>✓ Industry research articles</li>
                <li>✓ How-to guides & tutorials</li>
                <li>✓ Thought leadership pieces</li>
                <li>✓ Content calendar management</li>
              </ul>
              <div className="mt-4 text-xs text-teal-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-blue-600 text-3xl mb-4">
                <FaVideo />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Content Production</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Explainer videos</li>
                <li>✓ Product demonstrations</li>
                <li>✓ Customer testimonials</li>
                <li>✓ Social media shorts</li>
                <li>✓ YouTube channel management</li>
              </ul>
              <div className="mt-4 text-xs text-blue-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-purple-600 text-3xl mb-4">
                <FaNewspaper />
              </div>
              <h3 className="text-xl font-semibold mb-3">Copywriting Services</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Website copywriting</li>
                <li>✓ Email marketing campaigns</li>
                <li>✓ Social media captions</li>
                <li>✓ Sales pages & landing pages</li>
                <li>✓ Ad copy creation</li>
              </ul>
              <div className="mt-4 text-xs text-purple-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-red-600 text-3xl mb-4">
                <FaBullhorn />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Content audit & analysis</li>
                <li>✓ Buyer persona development</li>
                <li>✓ Content funnel mapping</li>
                <li>✓ Editorial calendar creation</li>
                <li>✓ Performance measurement</li>
              </ul>
              <div className="mt-4 text-xs text-red-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaHashtag />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Content</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Platform-specific content</li>
                <li>✓ Visual content creation</li>
                <li>✓ Carousel posts & infographics</li>
                <li>✓ Story/Reels content</li>
                <li>✓ Content repurposing</li>
              </ul>
              <div className="mt-4 text-xs text-yellow-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Distribution</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Content syndication</li>
                <li>✓ Guest posting outreach</li>
                <li>✓ Email newsletter creation</li>
                <li>✓ Content promotion strategy</li>
                <li>✓ Influencer collaboration</li>
              </ul>
              <div className="mt-4 text-xs text-indigo-600">Available in Jaipur • Vrindavan • Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Types of Content We Create
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse content formats to engage your audience across multiple channels
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { type: 'Blog Posts', icon: '📝' },
              { type: 'Video Content', icon: '🎥' },
              { type: 'Infographics', icon: '📊' },
              { type: 'Case Studies', icon: '📋' },
              { type: 'E-books', icon: '📚' },
              { type: 'Whitepapers', icon: '📄' },
              { type: 'Email Newsletters', icon: '✉️' },
              { type: 'Social Posts', icon: '📱' },
              { type: 'Webinars', icon: '🎤' },
              { type: 'Podcasts', icon: '🎙️' },
              { type: 'Checklists', icon: '✅' },
              { type: 'Templates', icon: '📑' },
            ].map((content, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border border-gray-200 hover:border-teal-300 transition-colors hover:shadow-lg hover:-translate-y-1">
                <div className="text-2xl mb-2">{content.icon}</div>
                <div className="text-gray-700 font-medium text-sm">{content.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Marketing Funnel */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Content Marketing Funnel Strategy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stage: 'Top of Funnel', goal: 'Awareness', content: 'Blog posts, Social media, Infographics', color: 'bg-teal-100 text-teal-800' },
              { stage: 'Middle of Funnel', goal: 'Consideration', content: 'Case studies, Webinars, E-books', color: 'bg-emerald-100 text-emerald-800' },
              { stage: 'Bottom of Funnel', goal: 'Conversion', content: 'Product demos, Testimonials, Comparison guides', color: 'bg-green-100 text-green-800' },
            ].map((funnel, index) => (
              <div key={index} className="text-center hover:scale-105 transition-all">
                <div className={`${funnel.color} p-6 rounded-xl mb-4 shadow-lg`}>
                  <h3 className="text-xl font-bold mb-2">{funnel.stage}</h3>
                  <div className="text-lg font-semibold">Goal: {funnel.goal}</div>
                </div>
                <p className="text-gray-600 mb-3">Content Types:</p>
                <p className="text-gray-700 font-medium">{funnel.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Content Marketing Results We Deliver
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What you can expect from our content marketing services across Jaipur, Vrindavan, and Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '300%', label: 'More Leads', color: 'text-teal-600' },
              { value: '6x', label: 'Higher Conversion', color: 'text-emerald-600' },
              { value: '97%', label: 'SEO Traffic Boost', color: 'text-green-600' },
              { value: '3x', label: 'Cost Savings', color: 'text-blue-600' },
              { value: '24/7', label: 'Lead Generation', color: 'text-purple-600' },
              { value: '70%', label: 'Brand Awareness', color: 'text-yellow-600' },
              { value: '5x', label: 'Website Traffic', color: 'text-red-600' },
              { value: '2x', label: 'Social Engagement', color: 'text-indigo-600' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-xl transition-all hover:-translate-y-1">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Content Marketing Engagement Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic editorial and multimedia content frameworks tailored to your industry, audience, and growth objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Starter Content', 
                tier: 'Consistent Publishing', 
                content: '4 Structured Content Pieces',
                features: ['4 Blog Posts/Month', 'Basic SEO Optimization', 'Social Media Graphics', 'Monthly Content Calendar', 'Performance Report'],
                color: 'border-teal-200',
                icon: <FaStar className="text-teal-600" />
              },
              { 
                name: 'Growth Content', 
                tier: 'Multi-Channel Velocity', 
                content: '8 Comprehensive Assets',
                features: ['6 Blog Posts/Month', '2 Video Content', 'Email Newsletter', 'Content Strategy', 'Performance Analytics', 'Dedicated Content Manager'],
                color: 'border-emerald-300',
                popular: true,
                icon: <FaCrown className="text-emerald-600" />
              },
              { 
                name: 'Enterprise Content', 
                tier: 'Full Editorial Scale', 
                content: '16+ High-Authority Assets',
                features: ['12 Blog Posts/Month', '4 Videos/Month', 'E-book/Whitepaper', 'Guest Post Outreach', 'Content Distribution', 'Monthly Strategy Calls', 'Priority Support'],
                color: 'border-green-300',
                icon: <FaGem className="text-green-600" />
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative hover:shadow-xl transition-all hover:-translate-y-2`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    POPULAR FRAMEWORK
                  </div>
                )}
                <div className="text-3xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-gray-900 mb-2">{plan.tier}</div>
                <p className="text-gray-600 mb-4">{plan.content}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm">
                      <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Discuss Content Scope
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              *Custom content strategies tailored for enterprise clients • Available in Jaipur, Vrindavan & Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Content Marketing Offices in <span className="text-teal-600">Jaipur</span>, <span className="text-emerald-600">Vrindavan</span> & <span className="text-green-600">Nepal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our offices for personalized content strategy consultations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getPhysicalOffices().map((office) => {
              const bgGradient = office.id === 'jaipur'
                ? 'from-teal-50 to-teal-100'
                : office.id === 'vrindavan'
                ? 'from-emerald-50 to-emerald-100'
                : 'from-green-50 to-green-100';
              const textAccent = office.id === 'jaipur'
                ? 'text-teal-600'
                : office.id === 'vrindavan'
                ? 'text-emerald-600'
                : 'text-green-600';
              return (
                <div key={office.id} className={`bg-gradient-to-br ${bgGradient} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative`}>
                  {office.isHeadOffice && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded-full font-bold">
                      ★ HEAD OFFICE
                    </div>
                  )}
                  <div className="text-4xl mb-4">{office.flag}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{office.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {office.address}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaPhone className={textAccent} /> {office.phone}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaEnvelope className={textAccent} /> {office.email}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                      <FaClock className={textAccent} /> {office.timings}
                    </p>
                  </div>
                  <Link to="/contact" className={`mt-4 inline-block ${textAccent} font-semibold hover:underline`}>
                    Get Directions →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Strategy Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our 5-Step Content Strategy Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Research', desc: 'Audience & topic research', icon: '🔍' },
              { step: 2, title: 'Strategy', desc: 'Content plan & calendar', icon: '📋' },
              { step: 3, title: 'Creation', desc: 'Content writing & production', icon: '✍️' },
              { step: 4, title: 'Optimization', desc: 'SEO & performance tuning', icon: '⚡' },
              { step: 5, title: 'Distribution', desc: 'Promotion & sharing', icon: '📢' },
            ].map((item) => (
              <div key={item.step} className="text-center hover:scale-105 transition-all">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Marketing Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Content Marketing Best Practices
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { tip: 'Quality Over Quantity', desc: 'One excellent piece outperforms ten average ones. Focus on creating valuable, in-depth content.' },
              { tip: 'SEO Integration', desc: 'Optimize content for search from the start. Use keyword research to guide your content creation.' },
              { tip: 'Audience Focus', desc: 'Create content that solves your audience\'s problems and answers their questions.' },
              { tip: 'Consistency Matters', desc: 'Regular publishing builds trust and authority. Maintain a consistent content schedule.' },
              { tip: 'Repurpose Content', desc: 'Turn one piece into multiple formats. Maximize the value of your content investment.' },
              { tip: 'Measure Performance', desc: 'Track what works and optimize accordingly. Use analytics to guide your content strategy.' },
            ].map((practice, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{practice.tip}</h3>
                    <p className="text-gray-600 text-sm">{practice.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Our Content Marketing Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get expert content strategy guidance from our team in Jaipur, Vrindavan, or Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-teal-600 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vivek Singh</h3>
              <p className="text-sm opacity-90 mb-3">Content Strategy Manager</p>
              <a href={getTelHref(getPrimaryPhone())} className="text-white hover:text-teal-200 text-sm block">
                📞 {getPrimaryPhone()}
              </a>
              <a href={getMailtoHref(getBusinessEmail())} className="text-white hover:text-teal-200 text-sm block">
                📧 {getBusinessEmail()}
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all relative">
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                HEAD OFFICE
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-emerald-600 mx-auto mb-4">
                VS
              </div>
              <h3 className="text-xl font-bold mb-1">Vikash Singh</h3>
              <p className="text-sm opacity-90 mb-3">Content Lead - Nepal</p>
              <a href={getTelHref(getOfficePhone('nepal'))} className="text-white hover:text-emerald-200 text-sm block">
                📞 {getOfficePhone('nepal')}
              </a>
              <a href={getNepalWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-200 text-sm block">
                💬 WhatsApp: {getOfficePhone('nepal')}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl text-green-600 mx-auto mb-4">
                GS
              </div>
              <h3 className="text-xl font-bold mb-1">Growth Service</h3>
              <p className="text-sm opacity-90 mb-3">Content Support Team</p>
              <a href={getTelHref(getOfficePhone('jaipur'))} className="text-white hover:text-green-200 text-sm block">
                📞 {getOfficePhone('jaipur')}
              </a>
              <a href={getMailtoHref(getOfficePhone('jaipur'))} className="text-white hover:text-green-200 text-sm block">
                📧 {getBusinessEmail()}
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg"
              >
                🔍 Get Free Content Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Book Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create content that drives traffic, generates leads, and grows your business across Jaipur, Vrindavan, and Nepal
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:opacity-90 px-8 py-3 rounded-lg font-semibold text-lg transition-all shadow-lg"
              >
                📝 Book Free Content Audit
              </Link>
              <a
                href={getTelHref(getPrimaryPhone())}
                className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call: {getPrimaryPhone()}
              </a>
              <a
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                💬 WhatsApp Strategy Call
              </a>
            </div>
            <div className="mt-8 bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-lg inline-block border border-teal-200">
              <p className="text-teal-800">
                <span className="font-semibold">🎉 Special Offer:</span> Get 2 free blog posts with 3-month commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm mb-3">Explore More Services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/seo" className="text-teal-600 hover:text-teal-800 text-sm font-medium">SEO Services</Link>
            <span className="text-gray-300">|</span>
            <Link to="/web-development" className="text-teal-600 hover:text-teal-800 text-sm font-medium">Web Development</Link>
            <span className="text-gray-300">|</span>
            <Link to="/social-media" className="text-teal-600 hover:text-teal-800 text-sm font-medium">Social Media Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/paid-marketing" className="text-teal-600 hover:text-teal-800 text-sm font-medium">Meta Ads Management</Link>
            <span className="text-gray-300">|</span>
            <Link to="/local-seo" className="text-teal-600 hover:text-teal-800 text-sm font-medium">Google Business Profile</Link>
            <span className="text-gray-300">|</span>
            <Link to="/ecommerce" className="text-teal-600 hover:text-teal-800 text-sm font-medium">E-commerce Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;