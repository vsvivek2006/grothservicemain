// src/pages/FAQ.tsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronDown, ChevronUp, MessageCircle, Search } from "lucide-react";

type QA = { q: string; a: string; category: string };

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Digital Marketing", "SEO", "Web Development", "Branding", "General"];

  const faqs: QA[] = [
    {
      q: "What is digital marketing and why is it important for my business?",
      a: "Digital marketing involves using online channels like SEO, content marketing, social media, PPC, and email to promote your business. It's crucial because it helps increase visibility, drive targeted traffic, generate qualified leads, and ultimately boost sales and revenue. Unlike traditional marketing, digital marketing provides measurable results and allows for precise targeting.",
      category: "Digital Marketing"
    },
    {
      q: "How do I get started with SEO for my website?",
      a: "Starting with SEO involves three key steps: First, conduct thorough keyword research and optimize your website's content with targeted keywords. Second, focus on technical SEO aspects like improving page speed, ensuring mobile responsiveness, and creating a proper site structure. Third, build high-quality backlinks through content marketing and digital PR. Regular monitoring using tools like Google Analytics and Search Console is essential for ongoing optimization.",
      category: "SEO"
    },
    {
      q: "What is the difference between SEO and PPC?",
      a: "SEO (Search Engine Optimization) focuses on optimizing your website to rank higher in organic search results through content quality, technical improvements, and link building. PPC (Pay-Per-Click) involves paying for ad placements on search engines. Key differences: SEO provides long-term sustainable growth but takes time, while PPC delivers immediate visibility and traffic but requires ongoing investment. A balanced strategy using both often yields the best results.",
      category: "Digital Marketing"
    },
    {
      q: "What are the benefits of social media marketing?",
      a: "Social media marketing offers multiple benefits: Increases brand awareness and recognition, enables direct customer engagement, drives targeted website traffic, generates quality leads, provides valuable customer insights, improves customer loyalty, and allows for cost-effective advertising. Platforms like Facebook, Instagram, and LinkedIn help you reach specific demographics with precision.",
      category: "Digital Marketing"
    },
    {
      q: "How can a website redesign improve my business?",
      a: "A professional website redesign can significantly impact your business by: Improving user experience and reducing bounce rates, increasing mobile responsiveness, enhancing SEO performance, boosting conversion rates, strengthening brand credibility, incorporating modern design trends, and integrating better functionality. This leads to higher engagement, more leads, and increased revenue.",
      category: "Web Development"
    },
    {
      q: "What is content marketing and how does it help SEO?",
      a: "Content marketing involves creating and distributing valuable, relevant content (blogs, videos, infographics, case studies) to attract and engage your target audience. It boosts SEO by: Increasing keyword relevance and density, creating more indexable pages, earning natural backlinks, improving dwell time, establishing topical authority, and enhancing user experience. Quality content is the foundation of successful SEO.",
      category: "SEO"
    },
    {
      q: "How do I measure the success of my digital marketing campaigns?",
      a: "Measure success through key performance indicators (KPIs) including: Website traffic and sources, conversion rates, bounce rates, return on investment (ROI), cost per acquisition (CPA), customer lifetime value (CLV), engagement metrics, and lead quality. Tools like Google Analytics, Google Search Console, and social media insights provide comprehensive data for analysis and optimization.",
      category: "Digital Marketing"
    },
    {
      q: "How can email marketing help my business?",
      a: "Email marketing is highly effective for: Nurturing leads through automated sequences, maintaining customer relationships, driving repeat business, promoting new products/services, sharing valuable content, segmenting audiences for personalized communication, and achieving high ROI. It's a direct communication channel that builds trust and loyalty while being cost-effective.",
      category: "Digital Marketing"
    },
    {
      q: "What is Google Analytics and how do I use it?",
      a: "Google Analytics is a powerful free tool that tracks and reports website traffic and user behavior. Key uses include: Monitoring traffic sources and patterns, tracking conversions and goals, analyzing user behavior flow, measuring page performance, understanding audience demographics, identifying popular content, and making data-driven decisions for website optimization and marketing strategies.",
      category: "General"
    },
    {
      q: "Why should I invest in mobile optimization for my website?",
      a: "Mobile optimization is essential because: Over 60% of web traffic comes from mobile devices, Google uses mobile-first indexing, it improves user experience and reduces bounce rates, it increases conversion rates, enhances local SEO performance, and meets modern user expectations. A mobile-friendly website loads faster and provides better engagement across all devices.",
      category: "Web Development"
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "SEO is a long-term strategy. Typically, initial results can be seen in 3-6 months, with significant improvements occurring in 6-12 months. The timeline depends on factors like website age, competition, content quality, technical SEO implementation, and consistency of efforts. White-hat SEO practices provide sustainable growth that compounds over time.",
      category: "SEO"
    },
    {
      q: "What makes a strong brand identity?",
      a: "A strong brand identity includes: Memorable logo design, consistent color palette and typography, clear brand voice and messaging, professional visual elements, unique value proposition, emotional connection with audience, and consistent application across all touchpoints. This creates brand recognition, trust, and loyalty among your target audience.",
      category: "Branding"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50">
      <Helmet>
        <title>FAQ | DiziGrow - Digital Marketing & Web Development in Jaipur, India</title>
        <meta
          name="description"
          content="Frequently asked questions about digital marketing, web development, branding, SEO, logo design, and website design. Get answers from DiziGrow, Jaipur, India."
        />
        <meta
          name="keywords"
          content="digital marketing, web development, branding, SEO, logo design, website design, Jaipur, India"
        />
        <link rel="canonical" href="https://dizigrow.com/faq" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DiziGrow" />
        <meta name="publisher" content="DiziGrow" />
        <html lang="en" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-purple-100 leading-relaxed">
            Get answers to common questions about digital marketing, web development, 
            branding, SEO, and growing your business online.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                  openIndex === index ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                      {item.q}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-purple-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.a}
                    </p>
                    {openIndex === index && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <a
                          href={`https://wa.me/919521281509?text=I have a question about: ${encodeURIComponent(item.q)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Need more details? Chat with us
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No questions found</h3>
              <p className="text-gray-500 text-lg">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">{faqs.length}+</div>
            <div className="text-gray-700 font-semibold">Questions Answered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-700 font-semibold">Support Available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-700 font-semibold">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have <span className="text-yellow-400">Questions</span>?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Our team of experts is here to help you get the answers you need. 
            We're always happy to discuss your specific requirements and provide personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919521281509?text=Hello%20DiziGrow,%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              💬 Chat on WhatsApp
            </a>
            <a
              href="tel:+919521281509"
              className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300"
            >
              📞 Call Us Directly
            </a>
          </div>
          <p className="mt-6 text-purple-200 text-lg">
            Typically reply within 15 minutes during business hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;