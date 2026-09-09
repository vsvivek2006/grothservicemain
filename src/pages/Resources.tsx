import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Download, Search, Filter, BookOpen, Video, FileText, Wrench, 
  ArrowRight, ExternalLink, FileCode, Globe, Smartphone, Zap, 
  TrendingUp, Users, MessageSquare, BarChart, Mail,
  Layers, CheckSquare, Book, Laptop, Rocket, Gift, MessageCircle 
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { WhatsAppIcon } from '../components/ui';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 32 },
    { id: 'website', name: 'Website Development', count: 8 },
    { id: 'seo', name: 'SEO & Analytics', count: 7 },
    { id: 'smm', name: 'Social Media', count: 6 },
    { id: 'business', name: 'Business Growth', count: 5 },
    { id: 'tools', name: 'Free Wrenchs', count: 6 }
  ];

  const types = [
    { id: 'all', name: 'All Types', Icon: Layers },
    { id: 'guide', name: 'Guides', Icon: BookOpen },
    { id: 'template', name: 'Templates', Icon: FileText },
    { id: 'tool', name: 'Wrenchs', Icon: Wrench },
    { id: 'checklist', name: 'Checklists', Icon: CheckSquare },
    { id: 'ebook', name: 'E-books', Icon: Book }
  ];

  const resources = [
    {
      id: 1,
      title: "Website Development Guide 2024",
      description: "Complete guide to modern web development with React, Node.js, and best practices for performance.",
      category: 'website',
      type: 'guide',
      icon: 'website',
      downloads: '3.2K',
      format: 'PDF',
      size: '3.5 MB',
      link: '#',
      featured: true,
      tags: ['React', 'Node.js', 'MongoDB', 'Performance']
    },
    {
      id: 2,
      title: "SEO Audit Checklist",
      description: "Comprehensive checklist for technical SEO, on-page optimization, and performance analysis.",
      category: 'seo',
      type: 'checklist',
      icon: 'seo',
      downloads: '2.8K',
      format: 'Google Sheets',
      size: '1.2 MB',
      link: '#',
      featured: true,
      tags: ['Technical SEO', 'Audit', 'Checklist']
    },
    {
      id: 3,
      title: "Social Media Content Calendar 2024",
      description: "Professional content calendar template with scheduling and performance tracking.",
      category: 'smm',
      type: 'template',
      icon: 'calendar',
      downloads: '4.1K',
      format: 'Excel',
      size: '0.9 MB',
      link: '#',
      featured: false,
      tags: ['Content Calendar', 'Scheduling', 'Planning']
    },
    {
      id: 4,
      title: "Website Speed Analyzer Wrench",
      description: "Free tool to analyze website performance, identify bottlenecks, and get optimization suggestions.",
      category: 'website',
      type: 'tool',
      icon: 'performance',
      downloads: '5.6K',
      format: 'Web Wrench',
      size: 'Online',
      link: '#',
      featured: true,
      tags: ['Performance', 'Speed', 'Optimization']
    },
    {
      id: 5,
      title: "Business Growth Strategy Template",
      description: "Strategic framework for scaling your business with digital marketing and automation.",
      category: 'business',
      type: 'template',
      icon: 'growth',
      downloads: '2.3K',
      format: 'PDF',
      size: '2.8 MB',
      link: '#',
      featured: false,
      tags: ['Strategy', 'Growth', 'Planning']
    },
    {
      id: 6,
      title: "Google Business Profile Optimization Guide",
      description: "Step-by-step guide to optimize your GMB listing for better local visibility and leads.",
      category: 'seo',
      type: 'guide',
      icon: 'local',
      downloads: '3.9K',
      format: 'PDF',
      size: '2.1 MB',
      link: '#',
      featured: false,
      tags: ['Local SEO', 'GMB', 'Optimization']
    },
    {
      id: 7,
      title: "Meta Ads Campaign Calculator",
      description: "Calculate ROI, budget allocation, and performance metrics for your Meta advertising campaigns.",
      category: 'tools',
      type: 'tool',
      icon: 'target',
      downloads: '3.4K',
      format: 'Web Wrench',
      size: 'Online',
      link: '#',
      featured: false,
      tags: ['Meta Ads', 'Calculator', 'ROI']
    },
    {
      id: 8,
      title: "Complete Digital Marketing E-book",
      description: "Comprehensive guide covering SEO, social media, content marketing, and analytics for 2024.",
      category: 'business',
      type: 'ebook',
      icon: 'ebook',
      downloads: '4.8K',
      format: 'PDF',
      size: '4.5 MB',
      link: '#',
      featured: true,
      tags: ['Digital Marketing', 'Strategy', '2024']
    },
    {
      id: 9,
      title: "Website Development Quote Template",
      description: "Professional template for creating accurate website development quotes and proposals.",
      category: 'website',
      type: 'template',
      icon: 'proposal',
      downloads: '1.9K',
      format: 'Word',
      size: '0.5 MB',
      link: '#',
      featured: false,
      tags: ['Proposal', 'Quotes', 'Templates']
    },
    {
      id: 10,
      title: "SEO Keyword Research Masterclass",
      description: "Video series on advanced keyword research, competition analysis, and strategy development.",
      category: 'seo',
      type: 'guide',
      icon: 'video',
      downloads: '2.7K',
      format: 'Video Series',
      size: '1.8 GB',
      link: '#',
      featured: false,
      tags: ['Keyword Research', 'Video', 'Tutorial']
    },
    {
      id: 11,
      title: "Social Media Performance Dashboard",
      description: "Google Sheets dashboard template to track and analyze all your social media metrics.",
      category: 'smm',
      type: 'template',
      icon: 'analytics',
      downloads: '3.1K',
      format: 'Google Sheets',
      size: '1.5 MB',
      link: '#',
      featured: false,
      tags: ['Analytics', 'Dashboard', 'Metrics']
    },
    {
      id: 12,
      title: "Business Automation Checklist",
      description: "Checklist for automating business processes and improving operational efficiency.",
      category: 'business',
      type: 'checklist',
      icon: 'automation',
      downloads: '2.5K',
      format: 'PDF',
      size: '1.1 MB',
      link: '#',
      featured: true,
      tags: ['Automation', 'Efficiency', 'Checklist']
    }
  ];

  const featuredResources = [
    {
      title: "Website Development Kit",
      description: "Complete toolkit including templates, checklists, and guides for web development projects.",
      Icon: Laptop,
      category: 'website',
      items: 12,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: "SEO Master Bundle",
      description: "All-in-one SEO resource pack with tools, templates, and comprehensive guides.",
      Icon: Search,
      category: 'seo',
      items: 18,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: "Business Growth Pack",
      description: "Resources to help scale your business including strategy templates and automation guides.",
      Icon: Rocket,
      category: 'business',
      items: 9,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesType = activeType === 'all' || resource.type === activeType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'website': return <Globe className="h-5 w-5" />;
      case 'seo': return <TrendingUp className="h-5 w-5" />;
      case 'smm': return <MessageSquare className="h-5 w-5" />;
      case 'business': return <Users className="h-5 w-5" />;
      case 'tools': return <Wrench className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpen className="h-4 w-4" />;
      case 'template': return <FileText className="h-4 w-4" />;
      case 'tool': return <Wrench className="h-4 w-4" />;
      case 'checklist': return <FileText className="h-4 w-4" />;
      case 'ebook': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Free Digital Marketing & SEO Resources | Growth Service</title>
        <meta
          name="description"
          content="Free resources for web development, SEO, social media marketing, and business growth. Download templates, guides, tools, and checklists from Growth Service."
        />
        <meta
          name="keywords"
          content="free website templates, SEO tools, marketing guides, business growth resources, social media templates, digital marketing resources"
        />
        <link rel="canonical" href="https://www.growthservice.in/resources" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Gift className="w-5 h-5 text-yellow-300" />
            <span className="text-lg font-semibold">FREE RESOURCES</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free <span className="text-cyan-300">Resources</span> for<br />Your <span className="text-cyan-300">Success</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Download professional templates, tools, and guides to accelerate your business growth and digital transformation.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources, templates, tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bundles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Resource Bundles</h2>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
              <span>View All Bundles</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-200 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md`}>
                  <resource.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.items} resources included</span>
                  <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                    Download Bundle
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-bold text-gray-900">Categories</h3>
              </div>

              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-200 ${activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(category.id)}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${activeCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600'
                      }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Resource Types */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Resource Types</h3>

              <div className="space-y-2">
                {types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-200 ${activeType === type.id
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <type.Icon className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">{type.name}</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      {activeType === type.id && (
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white">
              <h4 className="font-bold text-lg mb-6">Resource Library Stats</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Total Resources</span>
                  <span className="font-bold text-xl">32</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Total Downloads</span>
                  <span className="font-bold text-xl">45K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Free Wrenchs</span>
                  <span className="font-bold text-xl">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Updated</span>
                  <span className="font-bold">Weekly</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-500">
                <p className="text-blue-200 text-sm">All resources are completely free to download and use.</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeCategory === 'all' ? 'All Resources' :
                    categories.find(c => c.id === activeCategory)?.name}
                  <span className="text-gray-500 text-lg font-normal ml-2">
                    ({filteredResources.length} items)
                  </span>
                </h2>
                {searchTerm && (
                  <p className="text-gray-600 text-sm mt-1">
                    Search results for "{searchTerm}"
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <select className="border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white">
                    <option>Sort by: Most Popular</option>
                    <option>Newest First</option>
                    <option>Alphabetical</option>
                    <option>Most Downloaded</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Grid */}
            {filteredResources.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setActiveType('all');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-200"
                  >
                    <div className="p-6">
                      {/* Resource Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                            {getCategoryIcon(resource.category)}
                          </div>
                          {resource.featured && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              FEATURED
                            </span>
                          )}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${resource.type === 'guide' ? 'bg-blue-100 text-blue-700' :
                            resource.type === 'tool' ? 'bg-green-100 text-green-700' :
                              resource.type === 'template' ? 'bg-purple-100 text-purple-700' :
                                resource.type === 'checklist' ? 'bg-orange-100 text-orange-700' :
                                  'bg-pink-100 text-pink-700'
                          }`}>
                          {getTypeIcon(resource.type)}
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </span>
                      </div>

                      {/* Resource Content */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {resource.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {resource.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {resource.format}
                          </span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{resource.downloads}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={resource.link}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <Download className="h-4 w-4" />
                          Download Free
                        </a>
                        <button className="p-3 border border-gray-300 text-gray-600 hover:border-blue-300 hover:text-blue-600 rounded-xl transition-colors duration-200 hover:bg-blue-50">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Newsletter Subscription */}
            <div className="mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-12 text-white overflow-hidden relative">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>

                <div className="relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Mail className="h-6 w-6 text-cyan-300" />
                        <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">FREE RESOURCES</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Premium Resources Weekly</h3>
                      <p className="text-blue-100 mb-6 text-lg">
                        Subscribe to get exclusive access to premium templates, tools, and guides delivered directly to your inbox.
                      </p>
                      <ul className="space-y-3 text-blue-100">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                          <span>Weekly resource updates</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                          <span>Exclusive tools and templates</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                          <span>Industry insights and trends</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                          <span>No spam, unsubscribe anytime</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="space-y-4">
                        <input
                          type="email"
                          placeholder="Enter your work email"
                          className="w-full px-4 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-cyan-300 shadow-lg"
                        />
                        <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                          Get Free Resources
                        </button>
                      </div>
                      <p className="text-blue-200 text-xs mt-4 text-center">
                        By subscribing, you agree to our Privacy Policy. We respect your privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Resources?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Looking for specific tools or templates tailored to your business needs? Our team can create custom resources for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={businessConfig.whatsapp.defaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    Request Custom Resource
                  </a>
                  <a
                    href={`mailto:${businessConfig.emails.primary}`}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    <Mail className="h-5 w-5" />
                    Email Requirements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
