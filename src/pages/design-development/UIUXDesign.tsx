
// src/pages/design-development/UIUXDesign.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaintBrush, FaDesktop, FaMobileAlt, FaUsers, FaRocket, FaPalette, FaLightbulb, FaChartLine, FaEye, FaMagic, FaPenAlt, FaCheckCircle } from 'react-icons/fa';

const UIUXDesign = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FaPaintBrush className="text-5xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional UI/UX Design
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Create beautiful, intuitive digital experiences that users love and convert better
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/free-audit"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Design Audit
              </Link>
              <Link
                to="/book-call"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Discuss Your Design Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design Impact Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The Power of Great Design
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Good design is good business - and great design drives results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">94%</div>
              <h3 className="text-xl font-semibold mb-3">First Impressions</h3>
              <p className="text-gray-600">
                94% of first impressions are design-related. Good design builds immediate trust.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-pink-600 mb-2">400%</div>
              <h3 className="text-xl font-semibold mb-3">Conversion Increase</h3>
              <p className="text-gray-600">
                Well-designed websites convert 400% better than poor designs
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">75%</div>
              <h3 className="text-xl font-semibold mb-3">Credibility Factor</h3>
              <p className="text-gray-600">
                75% of users judge a company's credibility based on website design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive UI/UX Design Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end design solutions that combine beauty with functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-600 text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-3">User Research & Analysis</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• User persona development</li>
                <li>• User journey mapping</li>
                <li>• Competitor analysis</li>
                <li>• Usability testing</li>
                <li>• User interviews & surveys</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-pink-600 text-3xl mb-4">
                <FaPenAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wireframing & Prototyping</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Low-fidelity wireframes</li>
                <li>• High-fidelity mockups</li>
                <li>• Interactive prototypes</li>
                <li>• User flow diagrams</li>
                <li>• Information architecture</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaPalette />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual UI Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Color palette creation</li>
                <li>• Typography system</li>
                <li>• Icon design</li>
                <li>• Component library</li>
                <li>• Design system creation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-green-600 text-3xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile-first design</li>
                <li>• Tablet optimization</li>
                <li>• Desktop adaptation</li>
                <li>• Cross-device consistency</li>
                <li>• Touch-friendly interfaces</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-yellow-600 text-3xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interaction Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Micro-interactions</li>
                <li>• Animation design</li>
                <li>• Transition effects</li>
                <li>• Gesture design</li>
                <li>• Loading states</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-red-600 text-3xl mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-3">Usability Testing</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• A/B testing setup</li>
                <li>• User testing sessions</li>
                <li>• Heatmap analysis</li>
                <li>• Conversion rate optimization</li>
                <li>• Accessibility testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Platforms We Design For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creating seamless experiences across all digital touchpoints
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: 'Web Applications', icon: '💻', desc: 'SaaS platforms & web apps' },
              { platform: 'Mobile Apps', icon: '📱', desc: 'iOS & Android applications' },
              { platform: 'E-commerce', icon: '🛒', desc: 'Online stores & marketplaces' },
              { platform: 'Dashboards', icon: '📊', desc: 'Admin panels & analytics' },
              { platform: 'Landing Pages', icon: '🚀', desc: 'High-converting pages' },
              { platform: 'Progressive Web Apps', icon: '⚡', desc: 'Fast web experiences' },
              { platform: 'Enterprise Software', icon: '🏢', desc: 'Business applications' },
              { platform: 'Wearables', icon: '⌚', desc: 'Smartwatch & IoT interfaces' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.platform}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our 6-Step UI/UX Design Process
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {[
                { step: 1, title: 'Discover', desc: 'Research & analysis', icon: '🔍' },
                { step: 2, title: 'Define', desc: 'Strategy & planning', icon: '📋' },
                { step: 3, title: 'Design', desc: 'Wireframes & visuals', icon: '🎨' },
                { step: 4, title: 'Prototype', desc: 'Interactive models', icon: '🔄' },
                { step: 5, title: 'Test', desc: 'User feedback & testing', icon: '🧪' },
                { step: 6, title: 'Deliver', desc: 'Final assets & handoff', icon: '🚚' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                      {item.step}
                    </div>
                    {item.step < 6 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-purple-200 transform -translate-y-1/2"></div>
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

      {/* Design Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Design Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core principles that guide every design decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { principle: 'User-Centered', desc: 'Design for real user needs', icon: '👤' },
              { principle: 'Simplicity', desc: 'Less is more in design', icon: '✨' },
              { principle: 'Consistency', desc: 'Uniform patterns & behaviors', icon: '🔄' },
              { principle: 'Accessibility', desc: 'Design for everyone', icon: '♿' },
              { principle: 'Feedback', desc: 'Clear system responses', icon: '💬' },
              { principle: 'Efficiency', desc: 'Minimize user effort', icon: '⚡' },
              { principle: 'Aesthetics', desc: 'Beautiful visual experiences', icon: '🎨' },
              { principle: 'Innovation', desc: 'Push creative boundaries', icon: '💡' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.principle}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Design Deliverables
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for successful implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                deliverable: 'Design System',
                items: ['Color palette', 'Typography scale', 'Component library', 'Icon set'],
                icon: '🎨'
              },
              {
                deliverable: 'Interactive Prototypes',
                items: ['Clickable prototypes', 'User flow animations', 'Micro-interactions', 'Mobile gestures'],
                icon: '🖱️'
              },
              {
                deliverable: 'Developer Handoff',
                items: ['Design specs', 'Assets export', 'Style guides', 'Responsive guidelines'],
                icon: '💻'
              },
              {
                deliverable: 'Research Documentation',
                items: ['User personas', 'Journey maps', 'Usability reports', 'Competitor analysis'],
                icon: '📊'
              },
              {
                deliverable: 'Responsive Designs',
                items: ['Mobile designs', 'Tablet layouts', 'Desktop views', 'Breakpoint specs'],
                icon: '📱'
              },
              {
                deliverable: 'Accessibility Report',
                items: ['WCAG compliance', 'Color contrast', 'Keyboard navigation', 'Screen reader support'],
                icon: '♿'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-4 text-gray-800">{item.deliverable}</h3>
                <ul className="space-y-2">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-purple-500 mr-2">•</span>
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Professional Design Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-standard tools for world-class design work
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { tool: 'Figma', color: 'bg-purple-100 text-purple-800' },
              { tool: 'Adobe XD', color: 'bg-pink-100 text-pink-800' },
              { tool: 'Sketch', color: 'bg-yellow-100 text-yellow-800' },
              { tool: 'InVision', color: 'bg-blue-100 text-blue-800' },
              { tool: 'Adobe Creative Cloud', color: 'bg-red-100 text-red-800' },
              { tool: 'Webflow', color: 'bg-cyan-100 text-cyan-800' },
              { tool: 'ProtoPie', color: 'bg-green-100 text-green-800' },
              { tool: 'Framer', color: 'bg-gray-100 text-gray-800' },
              { tool: 'Miro', color: 'bg-orange-100 text-orange-800' },
              { tool: 'Zeplin', color: 'bg-indigo-100 text-indigo-800' },
              { tool: 'Hotjar', color: 'bg-red-50 text-red-700' },
              { tool: 'UserTesting', color: 'bg-green-50 text-green-700' },
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-4 rounded-lg text-center font-medium`}>
                {item.tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              UI/UX Design Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible design solutions for projects of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Basic Design', 
                price: '₹49,999', 
                scope: 'Single Platform Design',
                features: ['Up to 10 Screens', 'Basic UI Design', 'Wireframing', 'Color Palette', 'Typography', '1 Round of Revisions'],
                color: 'border-purple-200'
              },
              { 
                name: 'Professional Design', 
                price: '₹1,49,999', 
                scope: 'Multi-Platform Design',
                features: ['Up to 30 Screens', 'Complete UI/UX Design', 'Interactive Prototypes', 'Design System', 'User Testing', 'Responsive Design', '3 Rounds of Revisions'],
                color: 'border-pink-300',
                popular: true
              },
              { 
                name: 'Enterprise Design', 
                price: '₹3,99,999', 
                scope: 'Full Product Design',
                features: ['Unlimited Screens', 'End-to-End UX Process', 'Advanced Prototyping', 'Design System Creation', 'User Research', 'Accessibility Audit', 'Unlimited Revisions', 'Design Support'],
                color: 'border-purple-300'
              },
            ].map((plan) => (
              <div key={plan.name} className={`border-2 ${plan.color} bg-white p-8 rounded-xl relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}<span className="text-lg text-gray-600"> one-time</span></div>
                <p className="text-gray-600 mb-4">Scope: <span className="font-semibold">{plan.scope}</span></p>
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
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-700 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Start Design Project
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              *Custom enterprise design solutions and ongoing design support available
            </p>
          </div>
        </div>
      </section>

      {/* Design Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Design ROI & Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How good design translates to business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Business Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Higher conversion rates (up to 400%)',
                  'Reduced development costs (by 50%)',
                  'Lower customer support requests',
                  'Increased user engagement & retention',
                  'Competitive differentiation',
                  'Brand credibility & trust',
                  'Faster time-to-market',
                  'Improved customer satisfaction'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-white mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-purple-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">User Experience Metrics</h3>
              <ul className="space-y-4">
                {[
                  'Task completion rate improvement',
                  'Error rate reduction',
                  'Time-on-task decrease',
                  'User satisfaction increase (NPS)',
                  'Learning curve reduction',
                  'Accessibility compliance',
                  'Mobile experience optimization',
                  'Cross-platform consistency'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-3">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create beautiful, functional designs that users love and businesses thrive on
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/book-call"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
              >
                Book Free Design Consultation
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
                💬 WhatsApp Design Expert
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🎨 Award-Winning Designers</div>
                <div className="text-sm opacity-90">Creative professionals</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">🚀 Fast Turnaround</div>
                <div className="text-sm opacity-90">2-4 weeks delivery</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold">💯 Satisfaction Guarantee</div>
                <div className="text-sm opacity-90">Unlimited revisions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Portfolio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Design Portfolio Preview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'E-commerce UI',
                project: 'Fashion Store Redesign',
                highlights: ['Mobile-first design', 'Shopping cart optimization', 'Product discovery'],
                color: 'bg-pink-100'
              },
              {
                category: 'SaaS Dashboard',
                project: 'Analytics Platform',
                highlights: ['Data visualization', 'Complex interactions', 'User workflow'],
                color: 'bg-blue-100'
              },
              {
                category: 'Mobile App',
                project: 'Fitness Tracking App',
                highlights: ['Health metrics display', 'Activity tracking', 'Social features'],
                color: 'bg-green-100'
              },
            ].map((project, index) => (
              <div key={index} className={`${project.color} p-8 rounded-xl`}>
                <div className="text-sm font-semibold text-purple-600 mb-2">{project.category}</div>
                <h3 className="font-bold text-xl mb-4 text-gray-800">{project.project}</h3>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-purple-500 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/portfolio"
                  className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center"
                >
                  View Case Study
                  <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-lg"
            >
              View Full Design Portfolio
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Design FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            UI/UX Design FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What\'s the difference between UI and UX design?',
                a: 'UI (User Interface) focuses on the visual elements - colors, typography, buttons, etc. UX (User Experience) focuses on the overall feel and functionality - user flow, research, testing, etc. We provide both for complete digital experiences.'
              },
              {
                q: 'How long does a typical UI/UX project take?',
                a: 'Basic projects: 2-3 weeks, Medium projects: 3-6 weeks, Complex projects: 6-12+ weeks. Timeline depends on scope, complexity, and number of screens.'
              },
              {
                q: 'Do you provide design files to developers?',
                a: 'Yes, we provide complete design handoff packages including design specs, assets, style guides, and responsive guidelines for smooth developer implementation.'
              },
              {
                q: 'Can you redesign an existing website/app?',
                a: 'Absolutely! We specialize in redesign projects that improve user experience while maintaining brand identity and improving conversion rates.'
              },
              {
                q: 'Do you conduct user testing?',
                a: 'Yes, user testing is part of our process. We conduct usability tests, A/B tests, and gather user feedback to validate design decisions.'
              },
              {
                q: 'What design tools do you use?',
                a: 'We primarily use Figma for collaborative design, along with Adobe Creative Suite, Sketch, InVision, and prototyping tools for interactive designs.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;
