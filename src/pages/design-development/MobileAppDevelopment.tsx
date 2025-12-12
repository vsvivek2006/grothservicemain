// src/pages/design-development/MobileAppDevelopment.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaApple, FaAndroid, FaCode, FaRocket, FaShieldAlt, FaCloud, FaSync, FaChartLine, FaCog, FaServer, FaPaintBrush } from 'react-icons/fa';

const MobileAppDevelopment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 space-x-4">
              <FaMobileAlt className="text-5xl" />
              <FaApple className="text-5xl" />
              <FaAndroid className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mobile App Development
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Build powerful mobile apps that engage users, drive growth, and transform your business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free App Consultation
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Discuss Your App Idea
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Mobile Apps are Essential
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mobile-first world demands mobile-first solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">6.92B</div>
              <h3 className="text-xl font-semibold mb-3">Smartphone Users</h3>
              <p className="text-gray-600">
                86% of world population uses smartphones with 3+ hours daily screen time
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-cyan-600 mb-2">230B</div>
              <h3 className="text-xl font-semibold mb-3">App Downloads</h3>
              <p className="text-gray-600">
                230 billion app downloads annually, growing at 15% year-over-year
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-green-600 mb-2">3.5x</div>
              <h3 className="text-xl font-semibold mb-3">Higher Conversions</h3>
              <p className="text-gray-600">
                Mobile apps convert 3.5x better than mobile websites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete Mobile App Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end app development from concept to launch and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold mb-3">Native App Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• iOS App Development (Swift)</li>
                <li>• Android App Development (Kotlin)</li>
                <li>• Native Performance</li>
                <li>• Platform-Specific Features</li>
                <li>• App Store Optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaSync />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• React Native Development</li>
                <li>• Flutter Development</li>
                <li>• Single Codebase</li>
                <li>• Faster Development</li>
                <li>• Consistent Experience</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaPaintBrush />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design for Mobile</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile App Wireframing</li>
                <li>• Interactive Prototypes</li>
                <li>• User Experience Design</li>
                <li>• Responsive Mobile Design</li>
                <li>• Design System Creation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• API Development</li>
                <li>• Database Design</li>
                <li>• Cloud Integration</li>
                <li>• Server Configuration</li>
                <li>• Real-time Features</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">App Security</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Data Encryption</li>
                <li>• Secure Authentication</li>
                <li>• API Security</li>
                <li>• Penetration Testing</li>
                <li>• Compliance (GDPR, HIPAA)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-cyan-600 text-3xl mb-4">
                <FaCloud />
              </div>
              <h3 className="text-xl font-semibold mb-3">App Maintenance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Regular Updates</li>
                <li>• Bug Fixes & Support</li>
                <li>• Performance Monitoring</li>
                <li>• Feature Enhancements</li>
                <li>• App Store Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Types of Apps We Develop
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized mobile solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { type: 'E-commerce Apps', icon: '🛒', desc: 'Online shopping experiences' },
              { type: 'Social Media Apps', icon: '📱', desc: 'Community platforms' },
              { type: 'On-demand Apps', icon: '🚗', desc: 'Service delivery apps' },
              { type: 'FinTech Apps', icon: '💰', desc: 'Financial solutions' },
              { type: 'Healthcare Apps', icon: '🏥', desc: 'Medical & wellness' },
              { type: 'Education Apps', icon: '🎓', desc: 'Learning platforms' },
              { type: 'Travel Apps', icon: '✈️', desc: 'Booking & planning' },
              { type: 'Enterprise Apps', icon: '💼', desc: 'Business solutions' },
              { type: 'Gaming Apps', icon: '🎮', desc: 'Mobile games' },
              { type: 'Fitness Apps', icon: '💪', desc: 'Health & workout' },
              { type: 'Food Delivery Apps', icon: '🍕', desc: 'Restaurant ordering' },
              { type: 'Real Estate Apps', icon: '🏠', desc: 'Property platforms' },
            ].map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-3xl mb-3">{app.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{app.type}</h3>
                <p className="text-gray-600 text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { tech: 'React Native', color: 'bg-blue-100 text-blue-800' },
              { tech: 'Flutter', color: 'bg-cyan-100 text-cyan-800' },
              { tech: 'Swift', color: 'bg-orange-100 text-orange-800' },
              { tech: 'Kotlin', color: 'bg-purple-100 text-purple-800' },
              { tech: 'Node.js', color: 'bg-green-100 text-green-800' },
              { tech: 'Firebase', color: 'bg-yellow-100 text-yellow-800' },
              { tech: 'AWS', color: 'bg-gray-100 text-gray-800' },
              { tech: 'MongoDB', color: 'bg-green-50 text-green-700' },
              { tech: 'MySQL', color: 'bg-blue-50 text-blue-700' },
              { tech: 'Redis', color: 'bg-red-100 text-red-800' },
              { tech: 'Docker', color: 'bg-blue-100 text-blue-800' },
              { tech: 'GraphQL', color: 'bg-pink-100 text-pink-800' },
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} p-4 rounded-lg text-center font-semibold`}>
                {tech.tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Mobile App Development Process
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {[
                { step: 1, title: 'Discovery', desc: 'Idea validation & planning', icon: '💡' },
                { step: 2, title: 'Design', desc: 'UI/UX & prototypes', icon: '🎨' },
                { step: 3, title: 'Development', desc: 'Coding & integration', icon: '💻' },
                { step: 4, title: 'Testing', desc: 'QA & optimization', icon: '🧪' },
                { step: 5, title: 'Deployment', desc: 'App store launch', icon: '🚀' },
                { step: 6, title: 'Maintenance', desc: 'Support & updates', icon: '🔧' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                      {item.step}
                    </div>
                    {item.step < 6 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Features Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Advanced Mobile App Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern features for competitive mobile applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: 'Push Notifications', icon: '📢' },
              { feature: 'In-App Purchases', icon: '💰' },
              { feature: 'Social Login', icon: '🔐' },
              { feature: 'GPS & Location', icon: '📍' },
              { feature: 'Camera Integration', icon: '📸' },
              { feature: 'Offline Mode', icon: '📶' },
              { feature: 'Biometric Auth', icon: '👆' },
              { feature: 'AR/VR Features', icon: '👓' },
              { feature: 'Chat/Messaging', icon: '💬' },
              { feature: 'Payment Gateway', icon: '💳' },
              { feature: 'Analytics Dashboard', icon: '📊' },
              { feature: 'Multi-language', icon: '🌐' },
              { feature: 'Dark Mode', icon: '🌙' },
              { feature: 'Voice Commands', icon: '🎤' },
              { feature: 'IoT Integration', icon: '🔌' },
              { feature: 'Machine Learning', icon: '🤖' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800">{item.feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mobile App Development Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your mobile app project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic App', 
                price: '₹2,49,999', 
                platform: 'Single Platform',
                features: ['Native iOS OR Android', 'Basic UI/UX Design', 'Up to 10 Screens', 'Simple Backend API', 'Basic Features', '3 Months Support'],
                color: 'border-blue-200'
              },
              { 
                name: 'Business App', 
                price: '₹6,99,999', 
                platform: 'Cross-Platform',
                features: ['React Native/Flutter', 'Advanced UI/UX Design', 'Up to 30 Screens', 'Custom Backend', 'Admin Panel', 'Advanced Features', '6 Months Support'],
                color: 'border-cyan-300',
                popular: true
              },
              { 
                name: 'Enterprise App', 
                price: '₹14,99,999', 
                platform: 'Multiple Platforms',
                features: ['Native iOS + Android', 'Premium UI/UX Design', 'Unlimited Screens', 'Scalable Backend', 'Real-time Features', 'Advanced Security', '12 Months Support', 'Priority Support'],
                color: 'border-blue-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600"> one-time</span></div>
                <p className="text-gray-600 mb-4">Platform: <span className="font-semibold">{plan.platform}</span></p>
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
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start App Project
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Custom enterprise solutions, MVP development, and monthly maintenance available
            </p>
          </div>
        </div>
      </section>

      {/* App Store Optimization */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              App Store Optimization (ASO)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get your app discovered and downloaded
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-800">ASO Services Included</h3>
              <ul className="space-y-3">
                {[
                  'Keyword research & optimization',
                  'App title & subtitle optimization',
                  'Compelling app description',
                  'High-converting screenshots',
                  'App icon design',
                  'App preview video creation',
                  'Localization for global markets',
                  'Review & rating management',
                  'Competitor analysis',
                  'Performance tracking & reporting'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Benefits of ASO</h3>
              <ul className="space-y-3">
                {[
                  'Increase app store visibility',
                  'Higher organic downloads',
                  'Lower user acquisition cost',
                  'Better conversion rates',
                  'Improved user retention',
                  'Higher app store rankings',
                  'Competitive advantage',
                  'Long-term sustainable growth'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's transform your idea into a successful mobile application
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+919341436937"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                📞 Call: +91 93414 36937
              </a>
              <a
                href="https://wa.me/977977382481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 border-2 border-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                💬 WhatsApp App Expert
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🚀 Fast Development</div>
                <div className="text-sm opacity-90">8-12 weeks delivery</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">📱 Multi-Platform</div>
                <div className="text-sm opacity-90">iOS, Android, Cross-platform</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🎯 App Store Ready</div>
                <div className="text-sm opacity-90">ASO & deployment included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Mobile App Success Checklist
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Technical Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Fast loading & performance',
                    'Smooth animations (60fps)',
                    'Offline functionality',
                    'Secure data handling',
                    'Regular updates',
                    'Bug-free experience',
                    'Battery optimization',
                    'Memory management'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-cyan-200">
                <h3 className="font-bold text-xl mb-4 text-gray-800">User Experience</h3>
                <ul className="space-y-3">
                  {[
                    'Intuitive navigation',
                    'Consistent design',
                    'Gesture controls',
                    'Accessibility features',
                    'Personalization',
                    'Push notifications',
                    'Social sharing',
                    'Feedback mechanism'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-block bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Have an app idea?</h3>
                <p className="text-gray-600 mb-4">Get a free consultation and project estimate</p>
                <Link
                  to="/book-call"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
                >
                  Start Your App Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              App Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mobile apps we've built that are transforming businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'E-commerce',
                name: 'Fashion Retail App',
                stats: ['500K+ downloads', '4.8★ rating', '40% increase in sales'],
                icon: '👕'
              },
              {
                category: 'Healthcare',
                name: 'Doctor Consultation App',
                stats: ['200K+ users', '95% satisfaction', '24/7 availability'],
                icon: '🏥'
              },
              {
                category: 'Education',
                name: 'Online Learning App',
                stats: ['1M+ students', '4.7★ rating', '30% completion rate'],
                icon: '🎓'
              },
            ].map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{app.icon}</div>
                <div className="text-sm font-semibold text-blue-600 mb-2">{app.category}</div>
                <h3 className="font-bold text-xl mb-4 text-gray-800">{app.name}</h3>
                <ul className="space-y-2">
                  {app.stats.map((stat, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {stat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/case-studies"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
