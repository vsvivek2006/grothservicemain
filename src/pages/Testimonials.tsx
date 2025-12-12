import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Users, 
  Award, 
  Target, 
  MessageCircle,
  Play,
  ChevronLeft,
  ChevronRight,
  Filter,
  Globe,
  Smartphone,
  Search,
  ShoppingCart
} from "lucide-react";

const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Testimonial categories
  const filters = [
    { id: "all", name: "All Testimonials", count: 24 },
    { id: "website", name: "Website Development", count: 8 },
    { id: "seo", name: "SEO Services", count: 6 },
    { id: "smm", name: "Social Media", count: 5 },
    { id: "business", name: "Business Setup", count: 5 }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      company: "Travel & Tourism Company",
      role: "Owner",
      category: "website",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Grworth built our travel portal in just 15 days! The website is fast, responsive, and already generating 5x more bookings than our old site. Their team was professional and delivered exactly what we needed.",
      project: "Tour & Travel Website",
      duration: "15 Days",
      results: ["+500% bookings", "+300% website traffic", "+45% conversion rate"],
      videoUrl: "#",
      featured: true
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Fashion Boutique",
      role: "CEO",
      category: "smm",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Our social media presence was non-existent before Grworth. In 3 months, we gained 10,000+ followers and sales increased by 300%. Their content strategy is simply brilliant!",
      project: "Social Media Management",
      duration: "3 Months",
      results: ["+10,000 followers", "+300% sales", "+250% engagement"],
      videoUrl: "#",
      featured: true
    },
    {
      id: 3,
      name: "Amit Kumar",
      company: "Restaurant Chain",
      role: "Director",
      category: "seo",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "SEO services from Grworth put us on Google's first page. We're getting 220% more organic traffic and 150% more online orders! Their monthly reports are detailed and transparent.",
      project: "Local SEO Campaign",
      duration: "4 Months",
      results: ["+220% organic traffic", "+150% online orders", "Top 3 rankings"],
      videoUrl: "#",
      featured: false
    },
    {
      id: 4,
      name: "Sunita Mehta",
      company: "E-commerce Store",
      role: "Founder",
      category: "business",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Complete business setup by Grworth transformed our operations. From website to social media to Google Business Profile - everything done professionally. Highly recommended!",
      project: "Business Digital Setup",
      duration: "45 Days",
      results: ["Complete online presence", "+60% efficiency", "-35% operational costs"],
      videoUrl: "#",
      featured: false
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "Manufacturing Unit",
      role: "Managing Director",
      category: "website",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Our corporate website was outdated. Grworth developed a modern, responsive site that perfectly represents our brand. The admin panel makes updates super easy.",
      project: "Corporate Website",
      duration: "20 Days",
      results: ["Modern responsive design", "Easy content management", "+180% lead generation"],
      videoUrl: "#",
      featured: false
    },
    {
      id: 6,
      name: "Neha Gupta",
      company: "Beauty & Cosmetics",
      role: "Marketing Head",
      category: "smm",
      rating: 5,
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "From zero to hero! Our beauty brand gained 15K+ followers and sales grew by 400% in just 2 months. The video content they create is absolutely stunning.",
      project: "Brand Social Media",
      duration: "2 Months",
      results: ["+15,000 followers", "+400% sales", "Viral content"],
      videoUrl: "#",
      featured: true
    },
    {
      id: 7,
      name: "Rohan Desai",
      company: "Real Estate Agency",
      role: "Partner",
      category: "seo",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Local SEO work by Grworth increased our property inquiries by 180%. Now we rank #1 for all important local keywords. Worth every penny!",
      project: "Local Real Estate SEO",
      duration: "5 Months",
      results: ["#1 local rankings", "+180% inquiries", "+120% website visits"],
      videoUrl: "#",
      featured: false
    },
    {
      id: 8,
      name: "Deepak Verma",
      company: "Educational Institute",
      role: "Principal",
      category: "business",
      rating: 5,
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Complete digital transformation for our institute. New website, social media setup, and student enrollment system. Admissions increased by 65%!",
      project: "Education Institute Setup",
      duration: "60 Days",
      results: ["+65% admissions", "Digital enrollment system", "Modern website"],
      videoUrl: "#",
      featured: false
    }
  ];

  // Stats
  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="h-6 w-6" /> },
    { number: "₹25Cr+", label: "Revenue Generated", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <MessageCircle className="h-6 w-6" /> }
  ];

  // Filtered testimonials
  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  // Featured testimonials for carousel
  const featuredTestimonials = testimonials.filter(t => t.featured);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "website": return <Globe className="h-4 w-4" />;
      case "seo": return <Search className="h-4 w-4" />;
      case "smm": return <Smartphone className="h-4 w-4" />;
      case "business": return <Target className="h-4 w-4" />;
      default: return <Award className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Client Testimonials & Success Stories | Grworth Services</title>
        <meta
          name="description"
          content="Read real client testimonials and success stories about Grworth Services' website development, SEO, social media management, and business setup services."
        />
        <meta
          name="keywords"
          content="client testimonials, success stories, website development reviews, SEO service feedback, social media management testimonials, business setup reviews"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Quote className="h-5 w-5 mr-2" />
            <span className="text-lg font-semibold">CLIENT SUCCESS STORIES</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            What Our <span className="text-cyan-300">Clients Say</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Real stories from businesses we've helped grow. Discover how our professional 
            services transformed their digital presence and boosted their success.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {stat.icon}
                  <div className="text-3xl font-bold">{stat.number}</div>
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highlighted testimonials showcasing remarkable transformations
            </p>
          </div>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                      <div className="flex flex-col lg:flex-row gap-8 items-center">
                        {/* Client Image & Info */}
                        <div className="lg:w-1/3 text-center lg:text-left">
                          <div className="relative mb-6">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 shadow-xl"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full p-2">
                              <Quote className="h-4 w-4" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-blue-600 font-medium">{testimonial.company}</p>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                          
                          <div className="flex justify-center lg:justify-start mt-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="lg:w-2/3">
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                {getCategoryIcon(testimonial.category)}
                                {testimonial.project}
                              </div>
                              <span className="text-gray-500 text-sm">• {testimonial.duration}</span>
                            </div>
                            
                            <Quote className="h-8 w-8 text-blue-200 mb-4" />
                            <p className="text-xl text-gray-700 italic leading-relaxed mb-6">
                              "{testimonial.quote}"
                            </p>
                          </div>

                          {/* Results */}
                          <div className="bg-blue-50 rounded-xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Results Achieved:</h4>
                            <div className="flex flex-wrap gap-3">
                              {testimonial.results.map((result, idx) => (
                                <div key={idx} className="bg-white px-4 py-2 rounded-lg shadow-sm">
                                  <span className="text-green-600 font-bold">✓</span>
                                  <span className="ml-2 text-gray-700 font-medium">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Filter className="h-5 w-5 text-gray-600" />
                <h2 className="text-2xl font-bold text-gray-900">Client Testimonials</h2>
              </div>
              <div className="text-gray-600">
                Showing {filteredTestimonials.length} of {testimonials.length} reviews
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {getCategoryIcon(filter.id)}
                  {filter.name}
                  <span className={`px-2 py-1 rounded text-xs ${
                    activeFilter === filter.id
                      ? 'bg-white/20'
                      : 'bg-gray-200'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-blue-600">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Category & Project */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm mb-2">
                      {getCategoryIcon(testimonial.category)}
                      <span>{testimonial.project}</span>
                    </div>
                    <p className="text-sm text-gray-500">Duration: {testimonial.duration}</p>
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="h-5 w-5 text-blue-200 mb-2" />
                    <p className="text-gray-700 italic line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Results Preview */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-900 mb-2">Key Results:</div>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.slice(0, 2).map((result, idx) => (
                        <span key={idx} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                          {result}
                        </span>
                      ))}
                      {testimonial.results.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{testimonial.results.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Video Button */}
                  {testimonial.videoUrl && (
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 py-2 rounded-lg font-medium transition-colors group-hover:scale-105">
                      <Play className="h-4 w-4" />
                      Watch Video Testimonial
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No testimonials found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our clients share their experiences in their own words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <button className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                    <Play className="h-8 w-8 text-blue-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Client Success Story #{item}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Watch how we transformed their business with our digital solutions
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">
                      {item}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Featured Client</div>
                      <div className="text-xs text-gray-500">3 min video</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <MessageCircle className="h-5 w-5 text-cyan-300 mr-2" />
            <span className="text-white font-semibold">SHARE YOUR STORY</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become Our Next Success Story
          </h2>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Ready to achieve similar results? Let's discuss how we can transform your business.
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
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-blue-200">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">₹25Cr+</div>
              <div className="text-blue-200">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">7-15 Days</div>
              <div className="text-blue-200">Delivery Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
