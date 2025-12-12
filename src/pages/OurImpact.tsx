import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Play, Star, TrendingUp, Users, Target, Award, Globe, Shield, Zap, Clock } from 'lucide-react';

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
      image: "🏭",
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
      image: "⚕️",
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
      image: "🚀",
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
      image: "🛒",
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
      image: "💼",
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
      image: "⚙️",
      video: "#"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Transformed", icon: <Users className="h-8 w-8" /> },
    { number: "₹25Cr+", label: "Client Revenue Generated", icon: <TrendingUp className="h-8 w-8" /> },
    { number: "96%", label: "Client Retention Rate", icon: <Shield className="h-8 w-8" /> },
    { number: "150+", label: "Industries Served", icon: <Globe className="h-8 w-8" /> }
  ];

  const awards = [
    { title: "Best Business Solutions Provider", icon: "🏆", year: "2024" },
    { title: "Digital Transformation Excellence", icon: "⭐", year: "2024" },
    { title: "Top Growth Partner Award", icon: "🎯", year: "2023" },
    { title: "Innovation in Business Automation", icon: "⚡", year: "2023" }
  ];

  const services = [
    {
      title: "Digital Marketing",
      description: "End-to-end digital marketing solutions for business growth",
      icon: <Zap className="h-6 w-6" />,
      features: ["SEO", "Social Media", "PPC", "Content Marketing"]
    },
    {
      title: "Brand Strategy",
      description: "Building powerful brands that resonate with audiences",
      icon: <Target className="h-6 w-6" />,
      features: ["Brand Identity", "Positioning", "Voice & Tone", "Visual Design"]
    },
    {
      title: "Business Automation",
      description: "Streamline operations with smart automation solutions",
      icon: <Clock className="h-6 w-6" />,
      features: ["Workflow Automation", "CRM Setup", "Integration", "Analytics"]
    },
    {
      title: "Web Solutions",
      description: "High-performance websites and web applications",
      icon: <Globe className="h-6 w-6" />,
      features: ["Web Development", "E-commerce", "Progressive Web Apps", "Maintenance"]
    }
  ];

  const filteredStories = successStories.filter(story => 
    activeCategory === 'all' || story.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Our Impact - Business Transformation Stories | Grworth Services</title>
        <meta 
          name="description" 
          content="See how Grworth Services transforms businesses with digital solutions, automation, and growth strategies. Real results and success stories." 
        />
        <meta 
          name="keywords" 
          content="business transformation, digital marketing, business automation, branding, web development, growth strategy" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Businesses, Driving Growth</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            At Grworth Services, we don't just deliver services - we deliver results that transform businesses and drive sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full">Digital Marketing</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Business Automation</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Brand Strategy</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Web Solutions</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Measurable results that speak louder than words</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600">End-to-end business solutions for sustainable growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 mb-8">Real businesses, real transformations</p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
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
            <div 
              key={story.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                story.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{story.image}</div>
                  {story.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Transformation
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {story.industry}
                    </span>
                    <span>•</span>
                    <span>{story.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-red-500">Challenge:</span>
                    </h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-green-500">Our Solution:</span>
                    </h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(story.results).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2">
                  <Play className="h-4 w-4" />
                  View Detailed Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence has been recognized by industry leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                <div className="text-blue-600 font-medium">{award.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What Business Leaders Say</h2>
            <p className="text-blue-100 text-xl">Success stories from our valued partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4">
                "Grworth transformed our manufacturing business from traditional to digital-first. 185% revenue growth in 8 months!"
              </p>
              <div className="font-semibold">- Manufacturing Company CEO</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4">
                "The business automation solutions saved us 35% in operational costs and improved efficiency by 60%."
              </p>
              <div className="font-semibold">- Service Industry Director</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4">
                "Our brand identity and digital strategy by Grworth made us industry leaders within a year."
              </p>
              <div className="font-semibold">- Healthcare Startup Founder</div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">A systematic approach to business transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Discovery & Analysis</h3>
              <p className="text-gray-600 text-sm">Deep dive into your business challenges and opportunities</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Strategy & Planning</h3>
              <p className="text-gray-600 text-sm">Customized roadmap for transformation and growth</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Execution with precision and expertise</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Optimization & Growth</h3>
              <p className="text-gray-600 text-sm">Continuous improvement and scaling success</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create your success story. Partner with Grworth Services for sustainable growth and business excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
