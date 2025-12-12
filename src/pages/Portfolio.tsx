import React, { useState, useMemo } from 'react';
import { ExternalLink, Filter, Star, TrendingUp, Users, Clock, MessageCircle, Globe, Code, Smartphone, Search, Target, Zap, Award, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filters = ['All', 'Website Development', 'SEO Services', 'SMM Campaigns', 'Business Setup', 'GMB Optimization'];

  const projects = [
    {
      id: 1,
      title: 'Tour & Travel Portal',
      category: 'Website Development',
      description: 'Complete travel booking website built with React.js and Node.js for a travel agency',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Payment Gateway'],
      results: '500% increase in online bookings',
      duration: '15 Days',
      client: 'Travel Agency',
      rating: 5,
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      budget: '₹14,999',
      liveUrl: '#',
      caseStudy: true
    },
    {
      id: 2,
      title: 'E-commerce Store - Fashion',
      category: 'Website Development',
      description: 'Custom e-commerce solution with admin panel and inventory management',
      image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['MERN Stack', 'Razorpay', 'JWT Auth', 'Cloudinary'],
      results: '300% sales growth in 3 months',
      duration: '20 Days',
      client: 'Fashion Brand',
      rating: 5,
      technologies: ['MERN', 'Redux', 'Stripe', 'AWS'],
      budget: '₹24,999',
      liveUrl: '#',
      caseStudy: true
    },
    {
      id: 3,
      title: 'Local Business SEO',
      category: 'SEO Services',
      description: 'Complete SEO optimization for a local restaurant chain',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Local SEO', 'GMB', 'Content', 'Backlinks'],
      results: 'Top 3 rankings for 15+ keywords',
      duration: '4 Months',
      client: 'Restaurant Chain',
      rating: 5,
      technologies: ['SEO Audit', 'Technical SEO', 'Content Strategy'],
      budget: '₹7,779/month',
      metrics: ['+220% Organic Traffic', '+150% Leads', '+300% Visibility'],
      caseStudy: true
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'SMM Campaigns',
      description: '360-degree social media marketing for a beauty brand',
      image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Instagram', 'Facebook', 'Content', 'Influencers'],
      results: '400% follower growth in 2 months',
      duration: '3 Months',
      client: 'Beauty Brand',
      rating: 5,
      technologies: ['Meta Ads', 'Content Calendar', 'Analytics'],
      budget: '₹4,449/month',
      metrics: ['+400% Followers', '+250% Engagement', '+180% Website Clicks'],
      caseStudy: true
    },
    {
      id: 5,
      title: 'Business Digital Transformation',
      category: 'Business Setup',
      description: 'Complete digital setup for a B2B manufacturing company',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Website', 'Social Media', 'CRM', 'Automation'],
      results: 'Streamlined operations with 60% efficiency gain',
      duration: '45 Days',
      client: 'Manufacturing Co.',
      rating: 5,
      technologies: ['Custom Website', 'Social Setup', 'Process Automation'],
      budget: '₹24,999',
      metrics: ['+60% Efficiency', '-35% Costs', '+45% Productivity'],
      caseStudy: true
    },
    {
      id: 6,
      title: 'Google My Business Optimization',
      category: 'GMB Optimization',
      description: 'Complete local business presence setup with review management',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['GMB Setup', 'Reviews', 'Local SEO', 'Analytics'],
      results: '200% more calls and directions requests',
      duration: 'Ongoing',
      client: 'Service Business',
      rating: 5,
      technologies: ['GMB Optimization', 'Review System', 'Local Listings'],
      budget: '₹2,499/month',
      metrics: ['+200% Calls', '+150% Website Visits', '+180% Reviews'],
      caseStudy: true
    }
  ];

  const filteredProjects = useMemo(() => 
    activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
    [activeFilter]
  );

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Projects Delivered', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: '98%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
    { icon: Star, value: '₹25Cr+', label: 'Revenue Generated', color: 'from-orange-500 to-yellow-500' },
    { icon: Clock, value: '7-15 Days', label: 'Average Delivery Time', color: 'from-purple-500 to-pink-500' }
  ];

  const testimonials = [
    {
      name: "Rajesh Verma",
      company: "Travel & Tourism",
      text: "Grworth built our travel portal in just 15 days! The website is fast, responsive, and already generating 5x more bookings than our old site.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      project: "Tour & Travel Portal"
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique",
      text: "Our e-commerce store built by Grworth increased sales by 300% in 3 months. The payment integration and admin panel are flawless!",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      project: "E-commerce Store"
    },
    {
      name: "Amit Patel",
      company: "Restaurant Owner",
      text: "SEO services from Grworth put us on Google's first page. We're getting 220% more organic traffic and 150% more orders!",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      project: "Local SEO Campaign"
    }
  ];

  const technologies = [
    { name: 'React.js', icon: '⚛️', color: 'bg-blue-100 text-blue-800' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-800' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-800' },
    { name: 'TypeScript', icon: '📘', color: 'bg-blue-100 text-blue-800' },
    { name: 'SEO', icon: '🔍', color: 'bg-purple-100 text-purple-800' },
    { name: 'Social Media', icon: '📱', color: 'bg-pink-100 text-pink-800' }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "Understanding business goals and requirements",
      icon: "🔍"
    },
    {
      step: 2,
      title: "Planning & Strategy",
      description: "Creating detailed project roadmap",
      icon: "📋"
    },
    {
      step: 3,
      title: "Design & Development",
      description: "Building with modern technologies",
      icon: "💻"
    },
    {
      step: 4,
      title: "Testing & Quality",
      description: "Rigorous testing and optimization",
      icon: "✅"
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "Deployment and ongoing maintenance",
      icon: "🚀"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openCaseStudy = (project) => {
    setSelectedCaseStudy(project);
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Our Portfolio - Real Projects & Case Studies | Grworth Services</title>
        <meta
          name="description"
          content="Explore our portfolio of website development, SEO services, social media campaigns, and business setup projects. See real results and case studies."
        />
        <meta
          name="keywords"
          content="web development portfolio, SEO case studies, social media marketing projects, business setup examples, react js projects, MERN stack portfolio"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">🎯 500+ Projects Delivered</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              See Our <span className="text-cyan-300">Work</span> That<br />Drives <span className="text-cyan-300">Results</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Real projects, real results. Explore how we've helped businesses grow with custom web development, 
              SEO optimization, and digital marketing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#portfolio"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-3"
              >
                <span>Explore Portfolio</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="https://wa.me/9779707382481"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Technologies We Master</h3>
            <p className="text-gray-600">Built with modern technologies for optimal performance</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div key={index} className={`px-4 py-2 rounded-full font-medium ${tech.color} flex items-center gap-2`}>
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="portfolio" className="py-6 bg-white sticky top-0 z-40 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-blue-600" />
              <span className="text-base font-bold text-gray-900">Filter Projects:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Featured Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each project is crafted with precision and delivered with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                      <div className="flex">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-blue-100 text-sm mt-1">Budget: {project.budget}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.metrics && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results Achieved:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-green-50 p-3 rounded-lg">
                            <p className="text-green-700 font-semibold text-sm">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    {project.caseStudy && (
                      <button
                        onClick={() => openCaseStudy(project)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        Case Study
                      </button>
                    )}
                    
                    <a
                      href={`https://wa.me/9779707382481?text=Hello%20Grworth%20Team,%20I'm%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(project.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 hover:bg-black text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Discuss Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">5-Step Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures project success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-blue-200 z-0"></div>
            
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg border-4 border-white">
                    {step.icon}
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="text-lg font-bold text-gray-900 mb-2">Step {step.step}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our happy clients
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-28 h-28 rounded-full object-cover shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-2">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Project: {testimonials[currentTestimonial].project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Zap className="h-5 w-5 text-yellow-300 mr-2" />
            <span className="text-white font-semibold">Ready to Start Your Project?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Share your vision with us. We'll provide a custom solution and quote within 24 hours.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a
              href="https://wa.me/9779707382481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex flex-col items-center gap-2"
            >
              <div className="text-2xl">💬</div>
              <div>
                <div className="font-bold">WhatsApp</div>
                <div className="text-sm text-gray-600">Instant Response</div>
              </div>
            </a>
            
            <a
              href="tel:+9779707382481"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex flex-col items-center gap-2"
            >
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-bold">Call Now</div>
                <div className="text-sm text-gray-600">+9779707382481</div>
              </div>
            </a>
            
            <a
              href="mailto:contact@grworth.com"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex flex-col items-center gap-2"
            >
              <div className="text-2xl">✉️</div>
              <div>
                <div className="font-bold">Email Us</div>
                <div className="text-sm text-gray-600">contact@grworth.com</div>
              </div>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-blue-200">Custom Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">30 Days</div>
              <div className="text-blue-200">Free Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">7-15 Days</div>
              <div className="text-blue-200">Delivery Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedCaseStudy.title}</h3>
                <button
                  onClick={closeCaseStudy}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.title}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="bg-blue-50 p-4 rounded-xl mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Project Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Client</p>
                        <p className="font-semibold">{selectedCaseStudy.client}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold">{selectedCaseStudy.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Budget</p>
                        <p className="font-semibold">{selectedCaseStudy.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Category</p>
                        <p className="font-semibold">{selectedCaseStudy.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Results Achieved</h4>
                  <div className="space-y-3 mb-6">
                    {selectedCaseStudy.metrics ? (
                      selectedCaseStudy.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-green-50 p-4 rounded-lg">
                          <p className="text-green-700 font-semibold">✓ {metric}</p>
                        </div>
                      ))
                    ) : (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-700 font-semibold">✓ {selectedCaseStudy.results}</p>
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCaseStudy.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={`https://wa.me/9779707382481?text=Hello,%20I'm%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(selectedCaseStudy.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
                    >
                      Start Similar Project
                    </a>
                    
                    <button
                      onClick={closeCaseStudy}
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
