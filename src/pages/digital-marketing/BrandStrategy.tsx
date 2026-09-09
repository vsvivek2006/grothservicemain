// src/pages/digital-marketing/BrandStrategy.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaChessKing, FaBullseye, FaUsers, FaPalette, FaChartLine, FaRocket, FaLightbulb, FaGlobe, FaHeart, FaCrown } from 'react-icons/fa';

const BrandStrategy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaChessKing className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Brand Development
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Build a powerful, memorable brand that connects with customers and dominates your market
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Brand Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brand Strategy Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The Power of Strong Branding
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A strong brand is more than just a logo - it's your business's most valuable asset
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">23% Higher Revenue</h3>
              <p className="text-gray-600">
                Strong brands command 23% more revenue than weak brands in the same market
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-indigo-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Loyalty</h3>
              <p className="text-gray-600">
                64% of consumers cite shared values as the primary reason for brand loyalty
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCrown className="text-pink-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Leadership</h3>
              <p className="text-gray-600">
                Strong brands are 3x more likely to achieve market leadership positions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strategy Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Brand Strategy Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end brand development from foundation to market dominance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Discovery & Research</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Market analysis & competitor audit</li>
                <li>• Target audience profiling</li>
                <li>• Brand positioning strategy</li>
                <li>• SWOT analysis</li>
                <li>• Brand archetype identification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Positioning</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Unique Value Proposition (UVP)</li>
                <li>• Brand promise development</li>
                <li>• Competitive differentiation</li>
                <li>• Brand messaging framework</li>
                <li>• Elevator pitch creation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-pink-600 text-3xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual Identity Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Logo design & variations</li>
                <li>• Color palette development</li>
                <li>• Typography system</li>
                <li>• Brand style guide</li>
                <li>• Visual assets creation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Voice & Personality</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Brand voice development</li>
                <li>• Tone of voice guidelines</li>
                <li>• Brand personality traits</li>
                <li>• Messaging hierarchy</li>
                <li>• Content style guide</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Launch Strategy</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Go-to-market strategy</li>
                <li>• Launch campaign planning</li>
                <li>• Media & PR outreach</li>
                <li>• Influencer partnerships</li>
                <li>• Launch timeline development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-600 text-3xl mb-4">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Brand guidelines enforcement</li>
                <li>• Brand health monitoring</li>
                <li>• Brand extension strategies</li>
                <li>• Rebranding strategies</li>
                <li>• Internal brand training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strategy Framework */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our 7-Pillar Brand Strategy Framework
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach to building unforgettable brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { pillar: 'Purpose', desc: 'Why your brand exists', color: 'bg-purple-100' },
              { pillar: 'Vision', desc: 'Where your brand is going', color: 'bg-indigo-100' },
              { pillar: 'Values', desc: 'What your brand stands for', color: 'bg-blue-100' },
              { pillar: 'Positioning', desc: 'Your unique market space', color: 'bg-pink-100' },
              { pillar: 'Personality', desc: 'Human traits of your brand', color: 'bg-yellow-100' },
              { pillar: 'Promise', desc: 'Commitment to customers', color: 'bg-green-100' },
              { pillar: 'Performance', desc: 'Delivering on promises', color: 'bg-red-100' },
              { pillar: 'Perception', desc: 'How customers see you', color: 'bg-teal-100' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-6 rounded-xl`}>
                <div className="text-2xl mb-3">🏛️</div>
                <h3 className="font-bold text-lg mb-1 text-gray-800">{item.pillar}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Strategy Process */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Brand Strategy Development Process
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Discovery', desc: 'Research & analysis', icon: '🔍' },
                { step: 2, title: 'Strategy', desc: 'Framework development', icon: '🧠' },
                { step: 3, title: 'Creation', desc: 'Brand identity design', icon: '🎨' },
                { step: 4, title: 'Implementation', desc: 'Launch & activation', icon: '🚀' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                      {item.step}
                    </div>
                    {item.step < 4 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-purple-200 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-block bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-gray-800">Phase 5: Growth & Evolution</h3>
                <p className="text-gray-600">Ongoing brand management and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Measuring Brand Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key metrics we track to measure brand strength and growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: 'Brand Awareness', value: '85%', desc: 'Target market recognition' },
              { metric: 'Brand Recall', value: '72%', desc: 'Unaided brand memory' },
              { metric: 'Brand Loyalty', value: '68%', desc: 'Repeat customer rate' },
              { metric: 'Brand Equity', value: '+40%', desc: 'Price premium achievable' },
              { metric: 'Brand Sentiment', value: '4.8/5', desc: 'Positive perception score' },
              { metric: 'Market Share', value: '+25%', desc: 'Share growth in category' },
              { metric: 'Employee Advocacy', value: '91%', desc: 'Staff brand promotion' },
              { metric: 'Social Mention', value: '300%', desc: 'Online brand mentions' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{item.value}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.metric}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Brand Transformation Case Studies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses build powerful brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Tech Startup',
                challenge: 'Weak differentiation in crowded market',
                solution: 'Developed unique brand positioning and visual identity',
                results: ['200% increase in brand recall', '40% growth in qualified leads', 'Secured Series A funding']
              },
              {
                industry: 'Retail Brand',
                challenge: 'Outdated brand perception',
                solution: 'Complete rebranding and digital transformation',
                results: ['150% increase in online sales', '300% social media growth', 'Won 3 design awards']
              },
              {
                industry: 'Service Business',
                challenge: 'Inconsistent brand experience',
                solution: 'Comprehensive brand guidelines and training',
                results: ['95% customer satisfaction', '50% reduction in marketing costs', 'Expanded to 3 new cities']
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-purple-600 text-2xl mb-3">🏆</div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{caseStudy.industry}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Solution:</h4>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Strategy Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Brand Strategy Engagement Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic brand architecture and identity systems designed for businesses at every milestone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Brand Foundation', 
                tier: 'Identity & Core Positioning', 
                idealFor: 'Startups & Emerging Ventures',
                features: ['Brand Discovery Workshop', 'Brand Positioning Strategy', 'Logo & Basic Visual Identity', 'Brand Voice Guidelines', '3-Month Advisory Support'],
                color: 'border-purple-200'
              },
              { 
                name: 'Brand Growth', 
                tier: 'Complete Market Identity', 
                idealFor: 'Scaling Businesses & Scale-ups',
                features: ['Complete Brand Strategy', 'Full Visual Identity System', 'Brand Guidelines Manual', 'Launch Strategy', 'Employee Brand Training', '6-Month Partnership Support'],
                color: 'border-indigo-300',
                popular: true
              },
              { 
                name: 'Brand Transformation', 
                tier: 'Full Enterprise Rebranding', 
                idealFor: 'Established Companies & Conglomerates',
                features: ['Enterprise Brand Audit', 'Complete Rebranding', 'Multi-channel Implementation', 'Internal Comms Strategy', 'Brand Performance Tracking', '12-Month Advisory Partnership'],
                color: 'border-purple-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    RECOMMENDED SCOPE
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-purple-900 mb-2">{plan.tier}</div>
                <p className="text-gray-600 mb-4">Ideal for: <span className="font-semibold">{plan.idealFor}</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-call"
                  className="block w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Discuss Brand Strategy
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Enterprise brand transformations and multi-brand architectures scoped individually
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build a Legendary Brand?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your brand is your most valuable asset. Let's build it together.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Brand Audit
              </Link>
              <a
                href="tel:+919341436937"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call: +91 93414 36937
              </a>
              <a
                href="https://wa.me/977977382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                💬 WhatsApp Consultation
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🏆 Award-Winning Team</div>
                <div className="text-sm opacity-90">Brand strategy experts</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">📈 Proven Results</div>
                <div className="text-sm opacity-90">200+ successful brand projects</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🌍 Global Perspective</div>
                <div className="text-sm opacity-90">Local insights, global standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strategy Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Brand Strategy Checklist
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-4">
              {[
                'Clear brand purpose and mission statement',
                'Defined target audience personas',
                'Unique value proposition (UVP)',
                'Competitive positioning strategy',
                'Brand personality traits',
                'Core brand values',
                'Brand voice and tone guidelines',
                'Visual identity system (logo, colors, typography)',
                'Brand messaging framework',
                'Brand touchpoints mapping',
                'Customer experience journey',
                'Brand measurement metrics',
                'Internal brand training program',
                'Brand guidelines document',
                'Launch and activation plan'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${index < 5 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                    {index < 5 ? '✓' : index + 1}
                  </div>
                  <span className={`${index < 5 ? 'text-gray-700' : 'text-gray-500'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-700 text-center">
                <span className="font-semibold">How many does your brand have?</span> Schedule a free brand audit to find out!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandStrategy;
