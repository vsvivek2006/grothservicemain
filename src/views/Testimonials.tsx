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
  Phone, 
  Mail, 
  Smile, 
  CheckCircle, 
} from "lucide-react";
import { getPrimaryPhone, getBusinessEmail, getCanonicalOrigin } from "../selectors";
import { getNepalWhatsAppUrl, getTelHref, getMailtoHref } from "../services";
import { WhatsAppIcon } from "../components/ui";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

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
      quote: "Growth Service built our travel portal in just 15 days! The website is fast, responsive, and already generating 5x more bookings than our old site. Their team was professional and delivered exactly what we needed.",
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
      quote: "Our social media presence was non-existent before Growth Service. In 3 months, we gained 10,000+ followers and sales increased by 300%. Their content strategy is simply brilliant!",
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
      quote: "SEO services from Growth Service put us on Google's first page. We're getting 220% more organic traffic and 150% more online orders! Their monthly reports are detailed and transparent.",
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
      quote: "Complete business setup by Growth Service transformed our operations. From website to social media to Google Business Profile - everything done professionally. Highly recommended!",
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
      quote: "Our corporate website was outdated. Growth Service developed a modern, responsive site that perfectly represents our brand. The admin panel makes updates super easy.",
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
      quote: "Local SEO work by Growth Service increased our property inquiries by 180%. Now we rank #1 for all important local keywords. Worth every penny!",
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
    { number: "500+", label: "Happy Clients", icon: <Users className="h-5 w-5 text-yellow-300" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star className="h-5 w-5 text-yellow-300" /> },
    { number: "₹25Cr+", label: "Revenue Generated", icon: <TrendingUp className="h-5 w-5 text-yellow-300" /> },
    { number: "24/7", label: "Support Available", icon: <MessageCircle className="h-5 w-5 text-yellow-300" /> }
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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Client Testimonials & Success Stories | Growth Service</title>
        <meta
          name="description"
          content="Read real client testimonials and success stories about Growth Service website development, SEO, social media management, and business setup services."
        />
        <meta
          name="keywords"
          content="client testimonials, success stories, website development reviews, SEO service feedback, social media management testimonials, business setup reviews"
        />
        <link rel="canonical" href={`${getCanonicalOrigin()}/testimonials`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <Quote className="h-4 w-4 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold tracking-wider uppercase">CLIENT SUCCESS STORIES</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What Our <span className="text-yellow-300">Clients Say</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Real stories from businesses we've helped grow. Discover how our professional 
              services transformed their digital presence and boosted their success.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {stat.icon}
                    <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  </div>
                  <div className="text-blue-200 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Testimonials Carousel */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Featured Success Stories"
            subtitle="Highlighted testimonials showcasing remarkable transformations"
            align="center"
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <Card variant="featured" className="p-8 md:p-12">
                      <div className="flex flex-col lg:flex-row gap-8 items-center">
                        {/* Client Image & Info */}
                        <div className="lg:w-1/3 text-center lg:text-left">
                          <div className="relative mb-6 inline-block">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-28 h-28 rounded-full object-cover mx-auto lg:mx-0 shadow-lg border-2 border-purple-200"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-2 shadow-md">
                              <Quote className="h-4 w-4" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-blue-600 font-medium text-sm">{testimonial.company}</p>
                          <p className="text-gray-500 text-xs">{testimonial.role}</p>
                          
                          <div className="flex justify-center lg:justify-start mt-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="lg:w-2/3">
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                                {getCategoryIcon(testimonial.category)}
                                <span>{testimonial.project}</span>
                              </div>
                              <span className="text-gray-500 text-xs">• {testimonial.duration}</span>
                            </div>
                            
                            <Quote className="h-8 w-8 text-blue-200 mb-2" />
                            <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                              "{testimonial.quote}"
                            </p>
                          </div>

                          {/* Results */}
                          <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100">
                            <h4 className="font-semibold text-gray-900 mb-2 text-xs uppercase tracking-wider">Results Achieved:</h4>
                            <div className="flex flex-wrap gap-2">
                              {testimonial.results.map((result, idx) => (
                                <div key={idx} className="bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 text-xs font-medium text-gray-800 border border-gray-100">
                                  <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                                  <span>{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-gray-100"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-gray-100"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Grid */}
      <Section variant="default" padding="default">
        <Container>
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <h2 className="text-2xl font-bold text-gray-900">Client Testimonials</h2>
              </div>
              <div className="text-gray-500 text-sm">
                Showing {filteredTestimonials.length} of {testimonials.length} reviews
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 text-sm ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {getCategoryIcon(filter.id)}
                  <span>{filter.name}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    activeFilter === filter.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-700'
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
              <Card 
                key={testimonial.id}
                variant="interactive"
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border border-gray-200"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">{testimonial.name}</h3>
                        <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
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
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-1">
                      {getCategoryIcon(testimonial.category)}
                      <span>{testimonial.project}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Duration: {testimonial.duration}</p>
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="h-5 w-5 text-blue-200 mb-1" />
                    <p className="text-gray-700 italic text-sm leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>

                {/* Results Preview */}
                <div>
                  <div className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wider">Key Results:</div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {testimonial.results.slice(0, 2).map((result, idx) => (
                      <span key={idx} className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs font-medium border border-green-100">
                        {result}
                      </span>
                    ))}
                    {testimonial.results.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">
                        +{testimonial.results.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Video Button */}
                  {testimonial.videoUrl && (
                    <Button
                      as="button"
                      variant="outline"
                      size="sm"
                      className="w-full justify-center text-xs font-semibold"
                    >
                      <Play className="h-3.5 w-3.5 mr-1.5" />
                      <span>Watch Video Testimonial</span>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No testimonials found</h3>
              <p className="text-gray-600 text-sm">Try selecting a different category</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Video Testimonials Section */}
      <Section variant="subtle" padding="default">
        <Container>
          <SectionHeader
            title="Video Testimonials"
            subtitle="Watch our clients share their experiences in their own words"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} variant="default" className="overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors"></div>
                  <button className="relative z-10 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg">
                    <Play className="h-6 w-6 text-blue-600 ml-1" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-base">Client Success Story #{item}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Watch how we transformed their business with our digital solutions
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                      {item}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">Featured Client</div>
                      <div className="text-xs text-gray-500">3 min video</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6 text-xs font-semibold">
              <MessageCircle className="h-4 w-4 text-yellow-300 mr-2" />
              <span>SHARE YOUR STORY</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Become Our Next Success Story
            </h2>
            <p className="text-lg mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Ready to achieve similar results? Let's discuss how we can transform your business.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <a
                href={getNepalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-blue-900 p-6 rounded-xl font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-lg flex flex-col items-center gap-2"
              >
                <div className="text-emerald-600"><WhatsAppIcon className="w-7 h-7" /></div>
                <div>
                  <div className="font-bold text-base">WhatsApp</div>
                  <div className="text-xs text-gray-600">Instant Response</div>
                </div>
              </a>
              
              <a
                href={getTelHref(getPrimaryPhone())}
                className="bg-white hover:bg-gray-100 text-blue-900 p-6 rounded-xl font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-lg flex flex-col items-center gap-2"
              >
                <div className="text-blue-600"><Phone className="w-7 h-7" /></div>
                <div>
                  <div className="font-bold text-base">Call Now</div>
                  <div className="text-xs text-gray-600">{getPrimaryPhone()}</div>
                </div>
              </a>
              
              <a
                href={getMailtoHref(getBusinessEmail())}
                className="bg-white hover:bg-gray-100 text-blue-900 p-6 rounded-xl font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-lg flex flex-col items-center gap-2"
              >
                <div className="text-purple-600"><Mail className="w-7 h-7" /></div>
                <div>
                  <div className="font-bold text-base">Email Us</div>
                  <div className="text-xs text-gray-600">{getBusinessEmail()}</div>
                </div>
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-blue-200 text-xs">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-blue-200 text-xs">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">₹25Cr+</div>
                <div className="text-blue-200 text-xs">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">7-15 Days</div>
                <div className="text-blue-200 text-xs">Delivery Time</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials;
