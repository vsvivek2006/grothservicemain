import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  TrendingUp, 
  Search, 
  Target, 
  BarChart, 
  Globe, 
  Clock, 
  ArrowUpRight, 
  Download, 
  Filter,
  Calendar,
  Users,
  Eye,
  MousePointer,
  Award,
  Shield,
  Zap,
  ChevronRight
} from 'lucide-react';
import { businessConfig } from '../config/business';

const SEOResults: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [activeMetric, setActiveMetric] = useState<'overview' | 'keywords' | 'traffic' | 'competitors'>('overview');

  // Mock data for demonstration
  const seoMetrics = {
    totalKeywords: 245,
    rankingKeywords: 187,
    top10Keywords: 89,
    keywordGrowth: '+28%',
    organicTraffic: 15420,
    trafficGrowth: '+42%',
    avgPosition: 4.2,
    positionImprovement: '+1.8',
    clickThroughRate: '4.8%',
    ctrGrowth: '+0.9%',
    domainAuthority: 52,
    daImprovement: '+8'
  };

  const keywordRankings = [
    { keyword: 'website development company', position: 1, change: 0, volume: 5400, difficulty: 'High' },
    { keyword: 'digital marketing services', position: 2, change: +1, volume: 3200, difficulty: 'Medium' },
    { keyword: 'SEO optimization India', position: 3, change: +2, volume: 2100, difficulty: 'Medium' },
    { keyword: 'social media marketing agency', position: 5, change: +3, volume: 1800, difficulty: 'Medium' },
    { keyword: 'web development cost', position: 6, change: -1, volume: 1500, difficulty: 'High' },
    { keyword: 'Google Business Profile setup', position: 8, change: +4, volume: 1200, difficulty: 'Low' },
    { keyword: 'e-commerce website development', position: 9, change: +2, volume: 1100, difficulty: 'High' },
    { keyword: 'local SEO services', position: 11, change: +5, volume: 900, difficulty: 'Medium' }
  ];

  const trafficMetrics = {
    totalVisitors: 15420,
    newVisitors: 11250,
    returningVisitors: 4170,
    avgSessionDuration: '3:45',
    bounceRate: '38%',
    pagesPerSession: 4.2,
    topPages: [
      { page: '/', visits: 4820, growth: '+15%' },
      { page: '/services', visits: 3210, growth: '+22%' },
      { page: '/pricing', visits: 2180, growth: '+18%' },
      { page: '/portfolio', visits: 1950, growth: '+31%' },
      { page: '/contact', visits: 1650, growth: '+12%' }
    ]
  };

  const competitorAnalysis = [
    { name: 'Competitor A', domainAuthority: 65, backlinks: 1240, rankingKeywords: 210, traffic: 21800 },
    { name: 'Competitor B', domainAuthority: 58, backlinks: 980, rankingKeywords: 185, traffic: 19200 },
    { name: 'Your Website', domainAuthority: 52, backlinks: 720, rankingKeywords: 187, traffic: 15420, current: true },
    { name: 'Competitor C', domainAuthority: 48, backlinks: 650, rankingKeywords: 165, traffic: 13200 },
    { name: 'Competitor D', domainAuthority: 42, backlinks: 520, rankingKeywords: 140, traffic: 11000 }
  ];

  const seoMilestones = [
    { date: 'Jan 15', title: 'Technical SEO Audit', description: 'Fixed 45 technical issues' },
    { date: 'Feb 02', title: 'Content Optimization', description: 'Optimized 32 service pages' },
    { date: 'Mar 10', title: 'Backlink Building', description: 'Gained 48 quality backlinks' },
    { date: 'Apr 05', title: 'Local SEO Setup', description: 'Optimized GMB listing' },
    { date: 'Current', title: 'Continuous Monitoring', description: 'Weekly performance tracking' }
  ];

  // Time range filter for demo
  useEffect(() => {
    // Simulate data change based on time range
    console.log(`Time range changed to: ${timeRange}`);
  }, [timeRange]);

  const renderMetricCard = (title: string, value: string | number, change: string, icon: React.ReactNode, color: string) => (
    <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${color}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          {icon}
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {change}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600 font-medium">{title}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>SEO Results & Analytics Dashboard | Growth Service</title>
        <meta 
          name="description" 
          content="Track SEO performance, keyword rankings, traffic growth, and competitor analysis with our comprehensive SEO results dashboard." 
        />
        <meta 
          name="keywords" 
          content="SEO results, keyword rankings, organic traffic analytics, SEO performance, competitor analysis, Google ranking" 
        />
        <link rel="canonical" href="https://www.growthservice.in/seo-results" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">LIVE SEO DASHBOARD</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                SEO Results & <span className="text-cyan-300">Analytics</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                Real-time tracking of your website's SEO performance, keyword rankings, and organic growth metrics.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-300" />
                  <span>Protected Client Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-300" />
                  <span>Real-time Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-cyan-300" />
                  <span>Industry Benchmarks</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Last Updated</span>
                    <span className="font-semibold">Today, 2:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Tracking Since</span>
                    <span className="font-semibold">Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Next Report</span>
                    <span className="font-semibold">May 01, 2024</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                  <Download className="h-4 w-4 inline mr-2" />
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Navigation */}
      <section className="py-6 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveMetric('overview')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeMetric === 'overview'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <BarChart className="h-4 w-4" />
                Overview
              </button>
              <button
                onClick={() => setActiveMetric('keywords')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeMetric === 'keywords'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Search className="h-4 w-4" />
                Keywords
              </button>
              <button
                onClick={() => setActiveMetric('traffic')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeMetric === 'traffic'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Globe className="h-4 w-4" />
                Traffic
              </button>
              <button
                onClick={() => setActiveMetric('competitors')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeMetric === 'competitors'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Target className="h-4 w-4" />
                Competitors
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <Calendar className="h-4 w-4 text-gray-500" />
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as any)}
                  className="bg-transparent border-0 focus:ring-0 text-gray-700"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
              </div>
              <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Filter className="h-4 w-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        {activeMetric === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {renderMetricCard(
                'Total Ranking Keywords',
                seoMetrics.rankingKeywords,
                seoMetrics.keywordGrowth,
                <Search className="h-6 w-6 text-blue-600" />,
                'border-blue-500'
              )}
              {renderMetricCard(
                'Organic Traffic',
                seoMetrics.organicTraffic.toLocaleString(),
                seoMetrics.trafficGrowth,
                <TrendingUp className="h-6 w-6 text-green-600" />,
                'border-green-500'
              )}
              {renderMetricCard(
                'Average Position',
                seoMetrics.avgPosition,
                `+${seoMetrics.positionImprovement}`,
                <Target className="h-6 w-6 text-purple-600" />,
                'border-purple-500'
              )}
              {renderMetricCard(
                'Click Through Rate',
                seoMetrics.clickThroughRate,
                seoMetrics.ctrGrowth,
                <MousePointer className="h-6 w-6 text-orange-600" />,
                'border-orange-500'
              )}
            </div>

            {/* Milestones Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">SEO Progress Timeline</h2>
                <span className="text-sm text-gray-500">Showing: Last 4 Months</span>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform -translate-y-1/2"></div>
                
                <div className="relative flex justify-between">
                  {seoMilestones.map((milestone, index) => (
                    <div key={index} className="text-center z-10">
                      <div className={`w-4 h-4 rounded-full ${milestone.date === 'Current' ? 'bg-green-500' : 'bg-blue-500'} mb-4 mx-auto`}></div>
                      <div className="bg-white p-4 rounded-xl shadow-lg min-w-[180px]">
                        <div className="text-sm font-semibold text-gray-500 mb-1">{milestone.date}</div>
                        <div className="font-bold text-gray-900 mb-2">{milestone.title}</div>
                        <div className="text-sm text-gray-600">{milestone.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Keyword Distribution</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="font-medium">Top 3 Positions</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">32</div>
                      <div className="text-sm text-gray-500">Keywords</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="font-medium">Positions 4-10</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">57</div>
                      <div className="text-sm text-gray-500">Keywords</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="font-medium">Positions 11-20</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">48</div>
                      <div className="text-sm text-gray-500">Keywords</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <span className="font-medium">Below 20</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">50</div>
                      <div className="text-sm text-gray-500">Keywords</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Quick Insights</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <ArrowUpRight className="h-5 w-5 text-green-300" />
                    <span>42% increase in organic traffic over last month</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-yellow-300" />
                    <span>28 new keywords reached top 10 positions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-cyan-300" />
                    <span>37% increase in conversion rate from organic traffic</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-purple-300" />
                    <span>Domain Authority improved by 8 points</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Keywords Section */}
        {activeMetric === 'keywords' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Keyword Rankings</h2>
                  <p className="text-gray-600">Track your keyword positions and performance</p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export Keywords
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Keyword</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Position</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Change</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Monthly Volume</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Difficulty</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {keywordRankings.map((keyword, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-gray-900">{keyword.keyword}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">{keyword.position}</span>
                            {keyword.position <= 3 && (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">TOP</span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className={`flex items-center gap-1 font-semibold ${
                            keyword.change > 0 ? 'text-green-600' : keyword.change < 0 ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {keyword.change > 0 ? '↑' : keyword.change < 0 ? '↓' : '→'}
                            {keyword.change !== 0 ? Math.abs(keyword.change) : '0'}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-700">{keyword.volume.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            keyword.difficulty === 'High' ? 'bg-red-100 text-red-700' :
                            keyword.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {keyword.difficulty}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-blue-600 hover:text-blue-700 font-medium">
                            Analyze
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-700 mb-2">{seoMetrics.top10Keywords}</div>
                  <div className="font-semibold text-blue-900">Keywords in Top 10</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-700 mb-2">{seoMetrics.rankingKeywords}</div>
                  <div className="font-semibold text-green-900">Total Ranking Keywords</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-purple-700 mb-2">{seoMetrics.domainAuthority}</div>
                  <div className="font-semibold text-purple-900">Domain Authority</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Keyword Strategy Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-lg font-bold mb-3">Focus Areas</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>Optimize for 12 high-volume commercial keywords</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>Improve content for 8 informational keywords</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>Target 5 local keywords with high intent</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-lg font-bold mb-3">Next Actions</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>Create content clusters for main service keywords</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>Optimize meta descriptions for better CTR</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      <span>Build backlinks for 3 competitive keywords</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Traffic Section */}
        {activeMetric === 'traffic' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{trafficMetrics.totalVisitors.toLocaleString()}</div>
                <div className="text-gray-600 font-medium">Total Visitors</div>
                <div className="text-green-600 text-sm font-semibold mt-2">↑ 42% from last month</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{trafficMetrics.avgSessionDuration}</div>
                <div className="text-gray-600 font-medium">Avg. Session Duration</div>
                <div className="text-green-600 text-sm font-semibold mt-2">↑ 25% from last month</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{trafficMetrics.bounceRate}</div>
                <div className="text-gray-600 font-medium">Bounce Rate</div>
                <div className="text-red-600 text-sm font-semibold mt-2">↓ 12% from last month</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">{trafficMetrics.pagesPerSession}</div>
                <div className="text-gray-600 font-medium">Pages/Session</div>
                <div className="text-green-600 text-sm font-semibold mt-2">↑ 18% from last month</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Performing Pages</h3>
              <div className="space-y-4">
                {trafficMetrics.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{page.page}</div>
                        <div className="text-sm text-gray-500">Page URL</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{page.visits.toLocaleString()} visits</div>
                      <div className={`text-sm font-semibold ${page.growth.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {page.growth} growth
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Visitor Segmentation</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">New Visitors</span>
                      <span className="font-bold text-gray-900">{Math.round((trafficMetrics.newVisitors / trafficMetrics.totalVisitors) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full" 
                        style={{ width: `${(trafficMetrics.newVisitors / trafficMetrics.totalVisitors) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">Returning Visitors</span>
                      <span className="font-bold text-gray-900">{Math.round((trafficMetrics.returningVisitors / trafficMetrics.totalVisitors) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-600 h-3 rounded-full" 
                        style={{ width: `${(trafficMetrics.returningVisitors / trafficMetrics.totalVisitors) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Traffic Insights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ArrowUpRight className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Mobile traffic increased by 35% (now 68% of total)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowUpRight className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Direct traffic grew by 28% indicating strong brand recognition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowUpRight className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Referral traffic up by 42% from quality backlinks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span>Conversion rate from organic: 3.8% (industry avg: 2.1%)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Competitors Section */}
        {activeMetric === 'competitors' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Competitor Analysis</h2>
                  <p className="text-gray-600">Compare your performance with industry competitors</p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105">
                  Add Competitor
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Competitor</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Domain Authority</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Backlinks</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Ranking Keywords</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Estimated Traffic</th>
                      <th className="py-4 px-4 text-left font-semibold text-gray-900">Gap Analysis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {competitorAnalysis.map((competitor, index) => (
                      <tr 
                        key={index} 
                        className={`hover:bg-gray-50 transition-colors ${competitor.current ? 'bg-blue-50' : ''}`}
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              competitor.current ? 'bg-blue-500' : 'bg-gray-300'
                            }`}></div>
                            <span className={`font-medium ${competitor.current ? 'text-blue-700' : 'text-gray-900'}`}>
                              {competitor.name}
                              {competitor.current && <span className="ml-2 text-blue-600 font-bold">(You)</span>}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="text-lg font-bold">{competitor.domainAuthority}</div>
                            <div className={`text-sm ${competitor.domainAuthority > 50 ? 'text-green-600' : 'text-yellow-600'}`}>
                              {competitor.domainAuthority > 50 ? 'Strong' : 'Moderate'}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">{competitor.backlinks.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">Links</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">{competitor.rankingKeywords}</div>
                          <div className="text-sm text-gray-500">Keywords</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">{competitor.traffic.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">Monthly</div>
                        </td>
                        <td className="py-4 px-4">
                          {!competitor.current && (
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              competitor.traffic > 15420 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {competitor.traffic > 15420 
                                ? `-${Math.round((competitor.traffic - 15420) / 15420 * 100)}%` 
                                : `+${Math.round((15420 - competitor.traffic) / competitor.traffic * 100)}%`
                              }
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Competitive Advantages</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <div className="font-bold mb-2">Your Strengths</div>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4" />
                        <span>Better content quality and user experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4" />
                        <span>Higher conversion rate from organic traffic</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4" />
                        <span>Faster website loading speed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Opportunities to Improve</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="font-bold text-yellow-800 mb-2">Backlink Gap</div>
                    <p className="text-yellow-700">
                      Competitor A has 520 more quality backlinks. Focus on building 20-30 quality backlinks monthly.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="font-bold text-blue-800 mb-2">Content Coverage</div>
                    <p className="text-blue-700">
                      Competitor B ranks for 25 more informational keywords. Create 5 comprehensive guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center mt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Professional SEO Services?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts analyze your website and create a customized SEO strategy to boost your rankings and traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={businessConfig.whatsapp.defaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">💬</span>
                Get Free SEO Audit
              </a>
              <a
                href={`mailto:${businessConfig.emails.primary}`}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📧</span>
                Email for Proposal
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              Response within 24 hours • Free initial consultation • No commitment required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOResults;
