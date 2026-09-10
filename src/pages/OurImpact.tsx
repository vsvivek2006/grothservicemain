import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  ArrowRight, Play, Star, TrendingUp, Users, Target, Globe, Shield, Zap, Clock,
  Factory, HeartPulse, Rocket, ShoppingCart, Briefcase, Cog, Trophy
} from 'lucide-react';
import { getCanonicalOrigin } from '../selectors';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const OurImpact: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', count: 32 },
    { id: 'digital', name: 'Digital Marketing', count: 12 },
    { id: 'branding', name: 'Branding', count: 8 },
    { id: 'ecommerce', name: 'E-commerce', count: 6 },
    { id: 'webdev', name: 'Web Development', count: 4 },
    { id: 'automation', name: 'Business Automation', count: 2 }
  ];

  const successStories = [
    {
      id: 1,
      title: "Manufacturing Company Digital Transformation",
      category: 'digital',
      industry: "Manufacturing",
      duration: "8 Months",
      results: {
        leads: "+320%",
        revenue: "+185%",
        efficiency: "+40%",
        roi: "+28.5%"
      },
      challenge: "Traditional manufacturing company struggling with digital presence and lead generation",
      solution: "Complete digital marketing strategy + sales automation + CRM integration",
      image: <Factory className="w-10 h-10 text-blue-600" />,
      video: "#",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Brand Identity & Marketing",
      category: 'branding',
      industry: "Healthcare",
      duration: "6 Months",
      results: {
        brandrecall: "+200%",
        leads: "+150%",
        trustscore: "+85%",
        engagement: "+180%"
      },
      challenge: "New healthcare startup needed strong brand identity and market positioning",
      solution: "Strategic branding + digital marketing + content strategy",
      image: <HeartPulse className="w-10 h-10 text-red-500" />,
      video: "#",
      featured: true
    },
    {
      id: 3,
      title: "B2B SaaS Platform Growth",
      category: 'digital',
      industry: "Technology",
      duration: "12 Months",
      results: {
        mrr: "+220%",
        users: "+300%",
        retention: "+45%",
        roi: "+32.4%"
      },
      challenge: "SaaS platform struggling with user acquisition and retention",
      solution: "Growth hacking strategy + content marketing + customer success program",
      image: <Rocket className="w-10 h-10 text-purple-600" />,
      video: "#"
    },
    {
      id: 4,
      title: "Retail Chain E-commerce Setup",
      category: 'ecommerce',
      industry: "Retail",
      duration: "5 Months",
      results: {
        sales: "+250%",
        traffic: "+180%",
        conversion: "+35%",
        orders: "+140%"
      },
      challenge: "Brick-and-mortar retail chain needing online presence and sales",
      solution: "E-commerce platform development + digital marketing + inventory management",
      image: <ShoppingCart className="w-10 h-10 text-amber-500" />,
      video: "#"
    },
    {
      id: 5,
      title: "Corporate Website & Lead Generation",
      category: 'webdev',
      industry: "Corporate",
      duration: "4 Months",
      results: {
        leads: "+190%",
        performance: "+300%",
        engagement: "+120%",
        conversions: "+28%"
      },
      challenge: "Outdated website with poor performance and zero lead generation",
      solution: "Modern website development + SEO optimization + lead capture system",
      image: <Briefcase className="w-10 h-10 text-indigo-600" />,
      video: "#"
    },
    {
      id: 6,
      title: "Business Process Automation",
      category: 'automation',
      industry: "Services",
      duration: "3 Months",
      results: {
        efficiency: "+60%",
        costsaving: "-35%",
        productivity: "+45%",
        accuracy: "+90%"
      },
      challenge: "Manual processes causing inefficiency and high operational costs",
      solution: "Custom automation solutions + workflow optimization + integration",
      image: <Cog className="w-10 h-10 text-slate-600" />,
      video: "#"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Transformed", icon: <Users className="h-7 w-7 text-blue-600" /> },
    { number: "₹25Cr+", label: "Client Revenue Generated", icon: <TrendingUp className="h-7 w-7 text-blue-600" /> },
    { number: "96%", label: "Client Retention Rate", icon: <Shield className="h-7 w-7 text-blue-600" /> },
    { number: "150+", label: "Industries Served", icon: <Globe className="h-7 w-7 text-blue-600" /> }
  ];

  const awards = [
    { title: "Best Business Solutions Provider", icon: <Trophy className="w-8 h-8 text-yellow-500" />, year: "2024" },
    { title: "Digital Transformation Excellence", icon: <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />, year: "2024" },
    { title: "Top Growth Partner Award", icon: <Target className="w-8 h-8 text-red-500" />, year: "2023" },
    { title: "Innovation in Business Automation", icon: <Zap className="w-8 h-8 text-amber-500" />, year: "2023" }
  ];

  const services = [
    {
      title: "Digital Marketing",
      description: "End-to-end digital marketing solutions for business growth",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      features: ["SEO", "Social Media", "PPC", "Content Marketing"]
    },
    {
      title: "Brand Strategy",
      description: "Building powerful brands that resonate with audiences",
      icon: <Target className="h-6 w-6 text-blue-600" />,
      features: ["Brand Identity", "Positioning", "Voice & Tone", "Visual Design"]
    },
    {
      title: "Business Automation",
      description: "Streamline operations with smart automation solutions",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      features: ["Workflow Automation", "CRM Setup", "Integration", "Analytics"]
    },
    {
      title: "Web Solutions",
      description: "High-performance websites and web applications",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      features: ["Web Development", "E-commerce", "Progressive Web Apps", "Maintenance"]
    }
  ];

  const filteredStories = successStories.filter(story => 
    activeCategory === 'all' || story.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Impact - Business Transformation Stories | Growth Service</title>
        <meta 
          name="description" 
          content="See how Growth Service transforms businesses with digital solutions, automation, and growth strategies. Real results and success stories." 
        />
        <meta 
          name="keywords" 
          content="business transformation, digital marketing, business automation, branding, web development, growth strategy" 
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/impact`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Transforming Businesses, Driving Growth</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Growth Service, we don't just deliver services - we deliver results that transform businesses and drive sustainable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">Digital Marketing</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">Business Automation</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">Brand Strategy</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">Web Solutions</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Section variant="default" padding="default">
        <Container>
          <SectionHeader
            title="Our Impact in Numbers"
            subtitle="Measurable results that speak louder than words"
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} variant="interactive" className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Services */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Our Comprehensive Solutions"
            subtitle="End-to-end business solutions for sustainable growth"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} variant="default" className="p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded text-xs font-medium border border-blue-100">
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section variant="default" padding="default">
        <Container>
          {/* Categories Filter */}
          <SectionHeader
            title="Success Stories"
            subtitle="Real businesses, real transformations"
            align="center"
          />
          
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm flex items-center ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredStories.map((story) => (
              <Card 
                key={story.id}
                variant={story.featured ? 'featured' : 'default'}
                className={`p-8 ${story.featured ? 'ring-2 ring-purple-400' : ''}`}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl inline-flex border border-blue-100">{story.image}</div>
                    {story.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                        Featured Transformation
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium border border-blue-100">
                        {story.industry}
                      </span>
                      <span>•</span>
                      <span>{story.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2 text-sm">
                        <span className="text-red-500 font-bold">Challenge:</span>
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{story.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2 text-sm">
                        <span className="text-green-600 font-bold">Our Solution:</span>
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{story.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(story.results).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    className="w-full justify-center text-sm font-semibold"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    <span>View Detailed Case Study</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Awards & Recognition */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Awards & Recognition</h2>
              <p className="text-gray-600 text-sm">Our commitment to excellence has been recognized by industry leaders</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <Card key={index} variant="default" className="text-center p-6 bg-blue-50/30 border border-blue-100">
                  <div className="mb-3 flex justify-center">{award.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{award.title}</h3>
                  <div className="text-blue-600 font-bold text-xs">{award.year}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">What Business Leaders Say</h2>
              <p className="text-blue-100 text-sm">Success stories from our valued partners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  "Growth Service transformed our manufacturing business from traditional to digital-first. 185% revenue growth in 8 months!"
                </p>
                <div className="font-semibold text-xs text-yellow-300">- Manufacturing Company CEO</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  "The business automation solutions saved us 35% in operational costs and improved efficiency by 60%."
                </p>
                <div className="font-semibold text-xs text-yellow-300">- Service Industry Director</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  "Our brand identity and digital strategy by Growth Service made us industry leaders within a year."
                </p>
                <div className="font-semibold text-xs text-yellow-300">- Healthcare Startup Founder</div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Proven Process</h2>
              <p className="text-gray-600 text-sm">A systematic approach to business transformation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Card variant="default" className="text-center p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 shadow-md">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Discovery & Analysis</h3>
                <p className="text-gray-600 text-xs">Deep dive into your business challenges and opportunities</p>
              </Card>

              <Card variant="default" className="text-center p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 shadow-md">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Strategy & Planning</h3>
                <p className="text-gray-600 text-xs">Customized roadmap for transformation and growth</p>
              </Card>

              <Card variant="default" className="text-center p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 shadow-md">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600 text-xs">Execution with precision and expertise</p>
              </Card>

              <Card variant="default" className="text-center p-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 shadow-md">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Optimization & Growth</h3>
                <p className="text-gray-600 text-xs">Continuous improvement and scaling success</p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's create your success story. Partner with Growth Service for sustainable growth and business excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                as={Link}
                to="/book-call"
                variant="primary"
                size="lg"
                className="shadow-lg inline-flex items-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                as={Link}
                to="/services"
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default OurImpact;
