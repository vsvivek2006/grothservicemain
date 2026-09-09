import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ExternalLink, Calendar, Users, Target, Globe, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Container, Section } from '../components/ui';
import { getNepalWhatsAppUrl } from '../services';

const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const caseStudies = [
    {
      id: 1,
      title: "Tour & Travel Website Development",
      client: "Braj Darshan Tours",
      location: "Vrindavan, Mathura",
      industry: "Travel & Tourism",
      duration: "10 Days",
      teamSize: "3 Members",
      scope: "Full-Stack Custom Web Architecture",
      results: {
        metric1: { label: "Online Bookings", value: "150+" },
        metric2: { label: "Revenue Increase", value: "200%" },
        metric3: { label: "Website Visitors", value: "5K/month" }
      },
      overview: "Complete travel website development with booking system, tour packages, and payment gateway integration.",
      challenge: "Client needed a professional website to showcase tour packages and accept online bookings for pilgrimage tours in Vrindavan-Mathura region.",
      solution: "Developed a responsive website with booking system, integrated payment gateway, and multi-language support for international pilgrims.",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Tailwind CSS"],
      features: [
        "Tour package booking system",
        "Online payment integration",
        "Multi-language support",
        "Admin dashboard",
        "Customer management system",
        "Email notifications"
      ],
      testimonial: "Website delivered in just 10 days! Online bookings increased by 200% in first month. Highly professional team.",
      testimonialAuthor: "Rajesh Kumar",
      testimonialRole: "Owner, Braj Darshan Tours",
      images: ["🏞️", "🗺️", "🏛️"]
    },
    {
      id: 2,
      title: "SEO Optimization for Hotel Chain",
      client: "Radhe Krishna Guest House",
      location: "Vrindavan",
      industry: "Hospitality",
      duration: "6 Months",
      teamSize: "2 Members",
      scope: "Enterprise Local SEO & Authority Growth",
      results: {
        metric1: { label: "Organic Traffic", value: "300%" },
        metric2: { label: "Direct Bookings", value: "180+" },
        metric3: { label: "Google Ranking", value: "#1 Position" }
      },
      overview: "Comprehensive SEO strategy for guest house chain targeting pilgrims and tourists.",
      challenge: "Low online visibility and heavy competition from established hotels in Vrindavan area.",
      solution: "Implemented local SEO, content marketing, and technical SEO improvements targeting pilgrimage-related keywords.",
      technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "WordPress"],
      features: [
        "Local SEO optimization",
        "Content marketing strategy",
        "Google My Business management",
        "Review management",
        "Competitor analysis",
        "Monthly performance reports"
      ],
      testimonial: "SEO campaign brought 300% more organic traffic and direct bookings increased significantly. Excellent results!",
      testimonialAuthor: "Priya Sharma",
      testimonialRole: "Manager, Radhe Krishna Guest House",
      images: ["🏨", "📈", "🌟"]
    },
    {
      id: 3,
      title: "E-commerce Website for Handicrafts",
      client: "Vrindavan Handicrafts",
      location: "Mathura",
      industry: "Retail & E-commerce",
      duration: "15 Days",
      teamSize: "4 Members",
      scope: "Full-Stack Custom Commerce & Inventory Engine",
      results: {
        metric1: { label: "Online Sales", value: "₹5L+" },
        metric2: { label: "Products Listed", value: "500+" },
        metric3: { label: "Customer Reach", value: "Pan-India" }
      },
      overview: "Complete e-commerce platform for local handicrafts business with inventory management.",
      challenge: "Traditional handicrafts business needed online presence to reach national customers and manage inventory efficiently.",
      solution: "Built custom e-commerce platform with product management, order tracking, and multiple payment options.",
      technologies: ["Next.js", "Stripe", "Firebase", "Cloudinary", "Tailwind CSS"],
      features: [
        "Product catalog management",
        "Shopping cart system",
        "Multiple payment gateways",
        "Order tracking system",
        "Inventory management",
        "Admin dashboard"
      ],
      testimonial: "Our handicrafts now reach customers across India. The website is user-friendly and sales have increased dramatically.",
      testimonialAuthor: "Amit Patel",
      testimonialRole: "Owner, Vrindavan Handicrafts",
      images: ["🛍️", "🎨", "📦"]
    },
    {
      id: 4,
      title: "Social Media Marketing for Restaurant",
      client: "Govinda's Restaurant",
      location: "Mathura",
      industry: "Food & Beverage",
      duration: "3 Months",
      teamSize: "2 Members",
      scope: "Multi-Channel Social Growth & Content Strategy",
      results: {
        metric1: { label: "Social Engagement", value: "250%" },
        metric2: { label: "Customer Reach", value: "10K+" },
        metric3: { label: "Order Increase", value: "120%" }
      },
      overview: "Social media management and marketing for vegetarian restaurant targeting pilgrims and tourists.",
      challenge: "Limited social media presence and low engagement despite good food quality and service.",
      solution: "Created content calendar, ran targeted campaigns, and managed community engagement across platforms.",
      technologies: ["Meta Business Suite", "Canva", "Instagram", "Facebook", "WhatsApp Business"],
      features: [
        "Social media strategy",
        "Content creation",
        "Community management",
        "Paid advertising",
        "Performance analytics",
        "Monthly reports"
      ],
      testimonial: "Social media management increased our restaurant's popularity significantly. More tourists now visit us based on online reviews.",
      testimonialAuthor: "Rohit Singh",
      testimonialRole: "Manager, Govinda's Restaurant",
      images: ["🍽️", "📱", "📊"]
    },
    {
      id: 5,
      title: "Educational Institute Website",
      client: "Braj Education Academy",
      location: "Vrindavan",
      industry: "Education",
      duration: "12 Days",
      teamSize: "3 Members",
      scope: "Custom Institutional Web & Student Portal",
      results: {
        metric1: { label: "Student Inquiries", value: "200+" },
        metric2: { label: "Course Enrollment", value: "85%" },
        metric3: { label: "Website Traffic", value: "8K/month" }
      },
      overview: "Modern website for educational institute with course management and student portal.",
      challenge: "Traditional institute needed digital presence to showcase courses and manage student applications online.",
      solution: "Developed responsive website with course catalog, admission forms, and student management system.",
      technologies: ["React", "Node.js", "MongoDB", "EmailJS", "Bootstrap"],
      features: [
        "Course catalog",
        "Online admission system",
        "Student portal",
        "Faculty profiles",
        "Event calendar",
        "Blog section"
      ],
      testimonial: "Professional website helped us attract more students and streamline admission process. Great work!",
      testimonialAuthor: "Dr. Meera Sharma",
      testimonialRole: "Principal, Braj Education Academy",
      images: ["🎓", "📚", "🏫"]
    },
    {
      id: 6,
      title: "Meta Ads for Local Business",
      client: "Mathura Sweets & Snacks",
      location: "Mathura",
      industry: "Food & Retail",
      duration: "2 Months",
      teamSize: "2 Members",
      scope: "Targeted Performance Ads & Funnel Optimization",
      results: {
        metric1: { label: "Ad Reach", value: "50K+" },
        metric2: { label: "Conversion Rate", value: "15%" },
        metric3: { label: "ROI", value: "350%" }
      },
      overview: "Facebook and Instagram advertising campaign for local sweets shop.",
      challenge: "Traditional sweets shop wanted to increase online orders and reach younger audience.",
      solution: "Created targeted ad campaigns with compelling visuals and local language content.",
      technologies: ["Meta Ads", "Instagram", "Facebook", "Canva", "Google Analytics"],
      features: [
        "Ad campaign strategy",
        "Audience targeting",
        "Ad creative design",
        "Performance tracking",
        "A/B testing",
        "ROI optimization"
      ],
      testimonial: "Facebook ads brought amazing results! Our online orders increased by 300% in just 2 months.",
      testimonialAuthor: "Sanjay Gupta",
      testimonialRole: "Owner, Mathura Sweets",
      images: ["🍬", "📢", "💰"]
    }
  ];

  const industries = [
    { id: 'all', label: 'All Industries' },
    { id: 'travel', label: 'Travel & Tourism' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'retail', label: 'Retail & E-commerce' },
    { id: 'food', label: 'Food & Beverage' },
    { id: 'education', label: 'Education' }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    if (filter === 'all') return true;
    if (filter === 'travel') return study.industry.includes('Travel');
    if (filter === 'hospitality') return study.industry === 'Hospitality';
    if (filter === 'retail') return study.industry.includes('Retail');
    if (filter === 'food') return study.industry.includes('Food');
    if (filter === 'education') return study.industry === 'Education';
    return true;
  });

  const openModal = (id: number) => {
    setSelectedCase(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  const selectedStudy = selectedCase ? caseStudies.find(study => study.id === selectedCase) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Case Studies | Growth Service - Successful Projects Portfolio</title>
        <meta 
          name="description" 
          content="Explore our successful case studies and projects. See how we helped businesses grow with web development, SEO, and digital marketing solutions." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Case Studies</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real projects, real results. Explore how we've helped businesses achieve digital success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-medium">100+ Projects Completed</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-medium">98% Client Satisfaction</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Section */}
      <Section variant="default" padding="sm">
        <Container>
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Filter by Industry</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setFilter(industry.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === industry.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section variant="subtle" padding="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div 
                key={study.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  {/* Industry Tag */}
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  {/* Title and Client */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{study.client}</span>
                    <span className="mx-2">•</span>
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="text-sm">{study.location}</span>
                  </div>

                  {/* Overview */}
                  <p className="text-gray-600 text-sm mb-6">{study.overview}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.values(study.results).map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Duration and Scope */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="font-semibold text-gray-700 text-xs text-right max-w-[55%]">{study.scope}</div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 mb-2">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View More Button */}
                  <button
                    onClick={() => openModal(study.id)}
                    className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-600 border border-blue-200 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    View Complete Case Study
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No case studies found for the selected filter</div>
              <button
                onClick={() => setFilter('all')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View all case studies
              </button>
            </div>
          )}
        </Container>
      </Section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Measurable results from our successful projects and client partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹2Cr+</div>
              <div className="text-blue-200">Revenue Generated</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <Section variant="default">
        <Container variant="narrow" className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getNepalWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Schedule Free Consultation
            </a>
            <a
              href="/book-call"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book Strategy Call
            </a>
          </div>
        </Container>
      </Section>

      {/* Modal for Detailed View */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>
          
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {selectedStudy.industry}
                      </span>
                      <span className="text-sm text-gray-500">{selectedStudy.duration}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedStudy.title}</h2>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{selectedStudy.client}</span>
                      <span className="mx-3">•</span>
                      <Globe className="h-4 w-4 mr-2" />
                      <span>{selectedStudy.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Images Preview */}
                <div className="flex gap-3 mb-8">
                  {selectedStudy.images.map((image, index) => (
                    <div key={index} className="text-4xl bg-gray-100 p-6 rounded-xl">
                      {image}
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Object.entries(selectedStudy.results).map(([key, metric]) => (
                    <div key={key} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-blue-600" />
                      The Challenge
                    </h3>
                    <p className="text-gray-600">{selectedStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Our Solution
                    </h3>
                    <p className="text-gray-600">{selectedStudy.solution}</p>
                  </div>
                </div>

                {/* Technologies & Features */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedStudy.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Client Testimonial</h3>
                  <p className="text-gray-700 italic mb-4">"{selectedStudy.testimonial}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{selectedStudy.testimonialAuthor}</div>
                    <div className="text-blue-600 text-sm">{selectedStudy.testimonialRole}</div>
                  </div>
                </div>

                {/* Scope & Team */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Project Duration</div>
                    <div className="font-semibold text-gray-900">{selectedStudy.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Team Size</div>
                    <div className="font-semibold text-gray-900">{selectedStudy.teamSize}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Engagement Scope</div>
                    <div className="font-semibold text-gray-900 text-sm">{selectedStudy.scope}</div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getNepalWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center"
                  >
                    Get Similar Solution
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
