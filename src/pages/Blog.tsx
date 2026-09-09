import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Calendar, User, Clock, ArrowRight, Search, Tag, 
  Code, Globe, TrendingUp, Smartphone, Mail, DollarSign,
  X, ExternalLink, Share2, Bookmark, ThumbsUp, MessageCircle,
  Target, Shield, Zap, Database, Layout, Smartphone as Mobile,
  BarChart, PieChart, Lock, Users, Building, ShoppingCart,
  Video, Image, Cloud, Wifi, Cpu, Battery, MapPin,
  Monitor, BarChart3, Server, Megaphone, FileText, Wrench, Rocket, Phone
} from 'lucide-react';
import { getNepalWhatsAppUrl, getTelHref, getMailtoHref } from '../services';
import { getPrimaryPhone, getBusinessEmail } from '../selectors';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const getPostIcon = (name: string) => {
    switch (name) {
      case 'monitor': return <Monitor className="w-6 h-6 text-purple-600" />;
      case 'barchart': return <BarChart3 className="w-6 h-6 text-purple-600" />;
      case 'smartphone':
      case 'mobile': return <Smartphone className="w-6 h-6 text-purple-600" />;
      case 'code': return <Code className="w-6 h-6 text-purple-600" />;
      case 'mappin': return <MapPin className="w-6 h-6 text-purple-600" />;
      case 'globe': return <Globe className="w-6 h-6 text-purple-600" />;
      case 'target': return <Target className="w-6 h-6 text-purple-600" />;
      case 'building': return <Building className="w-6 h-6 text-purple-600" />;
      case 'server': return <Server className="w-6 h-6 text-purple-600" />;
      case 'database': return <Database className="w-6 h-6 text-purple-600" />;
      case 'megaphone': return <Megaphone className="w-6 h-6 text-purple-600" />;
      case 'cart': return <ShoppingCart className="w-6 h-6 text-purple-600" />;
      case 'lock': return <Lock className="w-6 h-6 text-purple-600" />;
      case 'zap': return <Zap className="w-6 h-6 text-purple-600" />;
      case 'filetext': return <FileText className="w-6 h-6 text-purple-600" />;
      case 'mail': return <Mail className="w-6 h-6 text-purple-600" />;
      case 'trendingup': return <TrendingUp className="w-6 h-6 text-purple-600" />;
      case 'wrench': return <Wrench className="w-6 h-6 text-purple-600" />;
      case 'rocket': return <Rocket className="w-6 h-6 text-purple-600" />;
      default: return <FileText className="w-6 h-6 text-purple-600" />;
    }
  };

  // 20 Blog Posts with SEO Keywords
  const blogPosts = [
    {
      id: 1,
      title: "Website Development Cost in India: Complete Architecture & ROI Guide",
      excerpt: "Comprehensive breakdown of modern web engineering costs including React, TypeScript, Node.js, and MongoDB architectures. Learn about scope estimation and milestone delivery.",
      category: "Web Development",
      readTime: "8 min read",
      date: "2024-02-20",
      author: "Arjun Patel",
      image: "monitor",
      keywords: ["website cost", "web development pricing", "React development", "custom web applications"],
      views: "5.2K",
      content: `Professional website development costs vary based on architectural complexity, performance requirements, and third-party integrations. Custom business applications require tailored scoping.

Key Factors Affecting Cost:
• Technology Stack (React/TypeScript vs WordPress)
• Design Complexity & Component Systems
• Number of Pages & User Flows
• Third-Party Integration Requirements
• Maintenance & Support SLAs

Our development process ensures high-speed websites in agile sprints with modern technologies like React, Node.js, and MongoDB.`
    },
    {
      id: 2,
      title: "SEO Engagement Frameworks: What You Get & ROI Analysis",
      excerpt: "Detailed analysis of our organic SEO frameworks including monthly technical audits, high-intent content production, and search ranking growth for maximum ROI.",
      category: "SEO",
      readTime: "10 min read",
      date: "2024-02-18",
      author: "SEO Expert Team",
      image: "barchart",
      keywords: ["SEO frameworks", "search engine optimization", "keyword ranking", "organic traffic"],
      views: "4.8K",
      content: `Our comprehensive SEO framework includes strategic services designed for compounding business growth.

Key Deliverables:
• Performance & Core Web Vitals Audits
• SEO-optimized Editorial Articles
• Search Intent Keyword Optimization
• Technical SEO Architecture
• White-Hat Backlink Outreach
• Local Map Optimization

Average Results in 6 Months:
• 300% Increase in Organic Traffic
• Top 3 Rankings for Core Terms
• 25%+ Increase in Qualified Inquiries`
    },
    {
      id: 3,
      title: "Social Media Management: Multi-Channel Strategy That Works",
      excerpt: "Complete social media strategy including content calendar planning, community management, and performance analytics for modern businesses.",
      category: "Social Media",
      readTime: "7 min read",
      date: "2024-02-16",
      author: "Social Media Team",
      image: "smartphone",
      keywords: ["social media management", "content strategy", "social media marketing", "engagement"],
      views: "3.9K",
      content: `Effective social media management requires consistent strategy, quality creatives, and conversion analysis.

Key Deliverables:
• Content Calendar Architecture
• Multi-Format Creative Production
• Active Community Engagement
• Conversion & Performance Analytics
• Strategic Executive Reports
• Competitor & Trend Benchmarking

Platforms Covered:
Facebook, Instagram, LinkedIn, YouTube, X (Twitter)

Average Growth Metrics:
• 40-50% Increase in Engagement
• Steady Follower Growth Monthly
• 25%+ Increase in Referral Traffic`
    },
    {
      id: 4,
      title: "React vs WordPress 2024: Which is Better for Business Websites?",
      excerpt: "Comparative analysis of React.js/TypeScript development vs traditional WordPress for modern business websites.",
      category: "Technology",
      readTime: "12 min read",
      date: "2024-02-14",
      author: "Tech Team",
      image: "code",
      keywords: ["React vs WordPress", "modern web development", "TypeScript", "performance"],
      views: "6.1K",
      content: `Choosing between React and WordPress depends on your business needs.

React Advantages:
• Faster Performance
• Better Security
• Scalability
• Modern Development Practices
• SEO Optimized
• Mobile-First Approach

WordPress Advantages:
• Quick Setup
• Easy Content Management
• Extensive Plugin Library
• Lower Initial Cost

Our Recommendation: React for business websites, WordPress for blogs/content sites.`
    },
    {
      id: 5,
      title: "Google My Business Optimization: Complete Local Visibility Guide",
      excerpt: "Step-by-step guide to setting up and optimizing your Google Business Profile for maximum local map visibility and leads.",
      category: "Local SEO",
      readTime: "6 min read",
      date: "2024-02-12",
      author: "Local SEO Team",
      image: "mappin",
      keywords: ["Google My Business", "local SEO", "business listing", "map rankings"],
      views: "3.2K",
      content: `Google My Business is crucial for local business foot traffic and customer inquiries.

Our local optimization framework includes:
• Complete Profile Setup & Verification
• Category & Service Optimization
• Professional Photos & Videos
• Review Management System
• Posts & Updates Weekly
• Performance Tracking

Key Benefits:
• 80% Increase in Map Views
• 60% More Phone Calls
• 45% Increase in Website Clicks
• Better Local Search Rankings`
    },
    {
      id: 6,
      title: "Tour & Travel Website Development Case Study: 10-Day Sprint",
      excerpt: "Complete case study of developing a travel booking website with React, Node.js, and payment gateway integration.",
      category: "Case Study",
      readTime: "15 min read",
      date: "2024-02-10",
      author: "Project Team",
      image: "globe",
      keywords: ["travel website", "booking system", "React development", "case study"],
      views: "4.5K",
      content: `Project Overview:
Client: Travel Agency in Vrindavan
Scope: Custom Booking Engine & Itinerary Architecture
Timeline: 10 Days
Tech Stack: React, Node.js, MongoDB, Payment Gateway

Features Delivered:
• Tour Package Booking System
• Online Payment Integration
• Admin Dashboard
• Customer Management
• Multi-language Support
• Mobile Responsive Design

Results:
• 150+ Bookings in First Month
• 200% Revenue Increase
• 5K Monthly Visitors`
    },
    {
      id: 7,
      title: "Meta Ads Management: High-Performance Paid Media Strategy Guide",
      excerpt: "Professional Facebook and Instagram ads strategy including campaign setup, audience targeting, and ROI optimization.",
      category: "Paid Ads",
      readTime: "9 min read",
      date: "2024-02-08",
      author: "Ads Team",
      image: "target",
      keywords: ["Facebook ads", "Instagram advertising", "Meta ads", "social media ads"],
      views: "3.7K",
      content: `Our Meta Ads Performance Framework includes:

Monthly Services:
• Campaign Strategy & Planning
• Audience Research & Targeting
• Ad Creative Design
• A/B Testing (5 variations)
• Performance Analytics
• ROI Optimization

Typical Results:
• 3-5x Return on Ad Spend
• 15-25% Conversion Rate
• Competitive Cost per Lead
• 30-50% Lower than Industry Average CPA`
    },
    {
      id: 8,
      title: "Guest House & Hotel Website Development: Complete Hospitality Architecture",
      excerpt: "Complete solution for hospitality businesses including booking system, payment gateway, and mobile optimization.",
      category: "Web Development",
      readTime: "8 min read",
      date: "2024-02-06",
      author: "Hospitality Team",
      image: "building",
      keywords: ["hotel website", "booking system", "guest house website", "hospitality"],
      views: "2.9K",
      content: `Our hospitality development framework includes:

Website Features:
• Room Booking System
• Online Payment Integration
• Room Gallery & Amenities
• Contact & Location Map
• Reviews & Testimonials
• Admin Dashboard

Additional Services:
• SEO Optimization
• Mobile Responsive Design
• Dedicated Post-Launch Support
• Google My Business Setup

Average Results:
• 60% Increase in Direct Bookings
• 40% Reduction in Phone Inquiries
• Better Online Visibility`
    },
    {
      id: 9,
      title: "Node.js Backend Development: Why Choose for Your Business?",
      excerpt: "Benefits of Node.js for backend development including scalability, performance, and cost-effectiveness.",
      category: "Technology",
      readTime: "7 min read",
      date: "2024-02-04",
      author: "Backend Team",
      image: "server",
      keywords: ["Node.js", "backend development", "API development", "server-side"],
      views: "3.4K",
      content: `Node.js Advantages for Business:

Performance:
• Non-blocking I/O
• Fast Execution
• Scalability
• Real-time Applications

Cost Benefits:
• Single Language (JavaScript)
• Faster Development
• Lower Server Costs
• Better Developer Availability

Ideal For:
• Real-time Applications
• API Development
• Microservices
• Data Streaming Apps`
    },
    {
      id: 10,
      title: "MongoDB Database Design: Best Practices for Web Applications",
      excerpt: "Complete guide to MongoDB database design, optimization, and best practices for web applications.",
      category: "Database",
      readTime: "11 min read",
      date: "2024-02-02",
      author: "Database Team",
      image: "database",
      keywords: ["MongoDB", "database design", "NoSQL", "data management"],
      views: "2.8K",
      content: `MongoDB Best Practices:

Schema Design:
• Document Structure
• Index Optimization
• Data Modeling
• Query Performance

Performance:
• Indexing Strategy
• Query Optimization
• Aggregation Pipeline
• Sharding & Replication

Security:
• Authentication
• Authorization
• Encryption
• Backup Strategy`
    },
    {
      id: 11,
      title: "Mobile-First Website Design: Complete Guide 2024",
      excerpt: "Importance of mobile-first design and implementation strategies for better user experience and SEO.",
      category: "Web Design",
      readTime: "9 min read",
      date: "2024-01-30",
      author: "Design Team",
      image: "mobile",
      keywords: ["mobile-first", "responsive design", "mobile optimization", "user experience"],
      views: "4.2K",
      content: `Mobile-First Design Principles:

Why Mobile-First?
• 60%+ Traffic from Mobile
• Better SEO Rankings
• Improved User Experience
• Higher Conversion Rates

Implementation:
• Responsive Grid System
• Touch-Friendly Interfaces
• Mobile Navigation
• Performance Optimization

Our Approach:
• Progressive Enhancement
• Performance First
• Accessibility Standards
• SEO Best Practices`
    },
    {
      id: 12,
      title: "TypeScript for Web Development: Benefits & Implementation",
      excerpt: "Why TypeScript is essential for modern web development and how it improves code quality and maintainability.",
      category: "Technology",
      readTime: "8 min read",
      date: "2024-01-28",
      author: "Frontend Team",
      image: "megaphone",
      keywords: ["TypeScript", "JavaScript", "type safety", "web development"],
      views: "3.6K",
      content: `TypeScript Benefits:

Development Advantages:
• Type Safety
• Better IDE Support
• Early Error Detection
• Improved Code Maintainability

Business Benefits:
• Reduced Bugs in Production
• Faster Development
• Better Team Collaboration
• Easier Code Refactoring

Implementation Strategy:
• Gradual Adoption
• Strict Type Checking
• Interface Design
• Third-party Library Integration`
    },
    {
      id: 13,
      title: "E-commerce Website Development: Technical Architecture & Feature Guide",
      excerpt: "Complete guide to e-commerce website development including features, modern headless stacks, and payment architectures.",
      category: "E-commerce",
      readTime: "12 min read",
      date: "2024-01-26",
      author: "E-commerce Team",
      image: "cart",
      keywords: ["e-commerce", "online store", "shopping cart", "payment gateway"],
      views: "5.5K",
      content: `E-commerce Engineering Frameworks:

Direct-to-Consumer Storefront:
• Product Catalog Architecture
• High-Speed Shopping Cart
• Secure Payment Gateway
• Admin Inventory Portal
• Mobile PWA Responsive Experience

Scalable Brand Commerce:
• All D2C Features
• Automated Inventory & Warehouse Sync
• Real-Time Order Tracking
• Advanced Marketing & Abandoned Cart Recovery
• Multi-Currency & Payment Options

Enterprise Marketplace:
• Custom Microservices Architecture
• ERP & Logistics Integration
• AI-Powered Recommendation Engine
• Enterprise Security & Compliance
• 24/7 Dedicated Support SLA`
    },
    {
      id: 14,
      title: "Website Security: Essential Measures Every Business Needs",
      excerpt: "Complete guide to website security including SSL, firewalls, and protection against common threats.",
      category: "Security",
      readTime: "10 min read",
      date: "2024-01-24",
      author: "Security Team",
      image: "lock",
      keywords: ["website security", "SSL", "firewall", "security measures"],
      views: "3.1K",
      content: `Essential Security Measures:

Basic Security:
• SSL Certificate
• Regular Updates
• Strong Passwords
• Security Headers

Advanced Protection:
• Web Application Firewall
• DDoS Protection
• Malware Scanning
• Regular Backups

Our Managed Security SLA:
• Daily Security Scans
• Malware Removal
• SSL Management
• Backup & Recovery
• 24/7 Monitoring`
    },
    {
      id: 15,
      title: "Website Performance Optimization: Speed Up Your Site 300%",
      excerpt: "Complete guide to website performance optimization including techniques and tools for faster loading.",
      category: "Performance",
      readTime: "11 min read",
      date: "2024-01-22",
      author: "Performance Team",
      image: "zap",
      keywords: ["website speed", "performance optimization", "page speed", "Core Web Vitals"],
      views: "4.7K",
      content: `Performance Optimization Techniques:

Frontend Optimization:
• Image Optimization
• Code Minification
• Lazy Loading
• Caching Strategy

Backend Optimization:
• Database Optimization
• Server Configuration
• CDN Implementation
• API Optimization

Our Speed Optimization Deliverables:
• Complete Audit
• Image Optimization
• Code Optimization
• CDN Setup
• Performance Monitoring`
    },
    {
      id: 16,
      title: "Content Marketing Strategy: Drive Traffic & Leads",
      excerpt: "Complete content marketing strategy including planning, creation, and distribution for business growth.",
      category: "Content Marketing",
      readTime: "9 min read",
      date: "2024-01-20",
      author: "Content Team",
      image: "filetext",
      keywords: ["content marketing", "blog strategy", "content creation", "content distribution"],
      views: "3.3K",
      content: `Content Marketing Strategy:

Planning:
• Keyword Research
• Content Calendar
• Topic Planning
• Competitor Analysis

Creation:
• SEO-Optimized Articles
• Visual Content
• Video Content
• Interactive Content

Distribution:
• Social Media
• Email Marketing
• Guest Posting
• SEO Optimization

Our Editorial & Content Deliverables:
• 4 Blog Articles
• 2 Infographics
• Social Media Posts
• Performance Reports`
    },
    {
      id: 17,
      title: "Email Marketing: Complete Guide for Small Businesses",
      excerpt: "Complete email marketing guide including strategy, automation, and optimization for better conversions.",
      category: "Email Marketing",
      readTime: "8 min read",
      date: "2024-01-18",
      author: "Marketing Team",
      image: "mail",
      keywords: ["email marketing", "newsletter", "email automation", "conversion"],
      views: "2.7K",
      content: `Email Marketing Strategy:

Setup:
• List Building
• Segmentation
• Automation Setup
• Template Design

Campaigns:
• Welcome Series
• Promotional Emails
• Newsletter
• Abandoned Cart

Optimization:
• A/B Testing
• Personalization
• Analytics
• List Cleaning

Our Email Automation Retainer:
• List Management
• Campaign Design
• Automation Setup
• Performance Reports`
    },
    {
      id: 18,
      title: "Analytics & Reporting: Measure Your Digital Success",
      excerpt: "Complete guide to digital analytics including setup, tracking, and reporting for business insights.",
      category: "Analytics",
      readTime: "7 min read",
      date: "2024-01-16",
      author: "Analytics Team",
      image: "trendingup",
      keywords: ["analytics", "reporting", "data analysis", "performance tracking"],
      views: "2.5K",
      content: `Analytics Setup:

Essential Tracking:
• Google Analytics
• Google Search Console
• Social Media Analytics
• Conversion Tracking

Reporting:
• Monthly Reports
• Custom Dashboards
• Performance Insights
• Actionable Recommendations

Our Analytics & Attribution SLA:
• Analytics Setup
• Custom Reporting
• Performance Analysis
• Strategy Recommendations`
    },
    {
      id: 19,
      title: "Business Website Maintenance: Complete Care Package",
      excerpt: "Complete website maintenance package including updates, backups, security, and performance monitoring.",
      category: "Maintenance",
      readTime: "6 min read",
      date: "2024-01-14",
      author: "Support Team",
      image: "wrench",
      keywords: ["website maintenance", "updates", "backups", "support"],
      views: "2.4K",
      content: `Website Maintenance Frameworks:

Essential Maintenance SLA:
• Regular Updates
• Daily Backups
• Security Monitoring
• Basic Support

Proactive Optimization SLA:
• All Basic Features
• Performance Optimization
• Uptime Monitoring
• Priority Support

High-Availability Enterprise SLA:
• All Professional Features
• Emergency Support
• Custom Development
• 24/7 Monitoring`
    },
    {
      id: 20,
      title: "Digital Transformation: Complete Strategy for Businesses",
      excerpt: "Complete digital transformation strategy including technology adoption, process automation, and growth planning.",
      category: "Business Growth",
      readTime: "14 min read",
      date: "2024-01-12",
      author: "Strategy Team",
      image: "rocket",
      keywords: ["digital transformation", "business growth", "technology adoption", "digital strategy"],
      views: "4.9K",
      content: `Digital Transformation Strategy:

Assessment:
• Current State Analysis
• Technology Audit
• Process Evaluation
• Gap Analysis

Planning:
• Roadmap Development
• Technology Selection
• Implementation Plan
• Change Management

Implementation:
• Website Development
• Process Automation
• Data Integration
• Team Training

Our Transformation Package:
• Complete Assessment
• Strategic Planning
• Implementation Support
• Ongoing Optimization`
    }
  ];

  const categories = [
    "All Posts",
    "Web Development",
    "SEO",
    "Social Media",
    "Technology",
    "Local SEO",
    "Case Study",
    "Paid Ads",
    "E-commerce",
    "Web Design",
    "Database",
    "Security",
    "Performance",
    "Content Marketing",
    "Email Marketing",
    "Analytics",
    "Maintenance",
    "Business Growth"
  ];

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const openPostModal = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePostModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Blog - Web Development & Digital Marketing Insights | Growth Service</title>
        <meta 
          name="description" 
          content="Expert articles on React development, SEO strategies, social media marketing, and custom digital transformation." 
        />
        <meta 
          name="keywords" 
          content="web development blog, SEO tips, social media strategy, React development, TypeScript, Node.js, MongoDB, website cost, digital marketing" 
        />
      </Helmet>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Growth Service Blog</h1>
              <p className="text-blue-100">Expert insights on digital growth</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-blue-100">
                <Code className="h-4 w-4" />
                <span>High-Performance Web Apps</span>
                <span>•</span>
                <Search className="h-4 w-4" />
                <span>Organic Search Dominance</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search & Filter */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles about web development, SEO, digital marketing..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="p-2 bg-purple-50 rounded-lg flex items-center justify-center">{getPostIcon(post.image)}</span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => openPostModal(post)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                  <span className="text-xs text-gray-500">{post.views} views</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">20+</div>
              <div className="text-sm text-gray-600">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Custom Scoped</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Digital Growth?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get professional website development, SEO, and digital marketing services at competitive prices
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getTelHref(getPrimaryPhone())}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call for Consultation</span>
            </a>
            <a
              href={getMailtoHref(getBusinessEmail())}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closePostModal}
          />
          
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {selectedPost.category}
                      </span>
                      <span className="text-sm text-gray-500">{selectedPost.readTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                  </div>
                  <button
                    onClick={closePostModal}
                    className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="p-1.5 bg-purple-50 rounded-lg mr-4 flex items-center justify-center">{getPostIcon(selectedPost.image)}</span>
                    <span>{selectedPost.views} views</span>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedPost.excerpt}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Keywords:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.keywords.map((keyword: string, idx: number) => (
                        <span key={idx} className="bg-white border border-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {selectedPost.content}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center text-gray-700 hover:text-blue-600">
                      <ThumbsUp className="h-5 w-5 mr-2" />
                      Like
                    </button>
                    <button className="flex items-center text-gray-700 hover:text-blue-600">
                      <Bookmark className="h-5 w-5 mr-2" />
                      Save
                    </button>
                    <button className="flex items-center text-gray-700 hover:text-blue-600">
                      <Share2 className="h-5 w-5 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={closePostModal}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={getNepalWhatsAppUrl(`I read your article: ${selectedPost.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center"
                  >
                    Discuss This Topic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile-friendly touch improvements */}
      <style jsx>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        
        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
