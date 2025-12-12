
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaBullseye, FaUsers, FaMagnet, FaChartLine, FaRocket, FaEnvelope, FaPhoneAlt, FaDatabase, FaHandshake } from 'react-icons/fa';

const LeadGeneration = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <FaMagnet className="text-5xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            High-Quality Lead Generation
                        </h1>
                        <p className="text-xl mb-8 opacity-90">
                            Fuel your sales pipeline with qualified leads that convert into loyal customers
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link
                                to="/free-audit"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
                            >
                                Get Free Lead Audit
                            </Link>
                            <Link
                                to="/book-call"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
                            >
                                Book Strategy Session
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Lead Gen Matters */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Stop Chasing, Start Attracting
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We help you build a predictable engine for business growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaChartLine className="text-blue-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Predictable Growth</h3>
                            <p className="text-gray-600">
                                Consistent flow of qualified prospects to stabilize and grow your revenue
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaBullseye className="text-cyan-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Targeted Approach</h3>
                            <p className="text-gray-600">
                                Reach decision-makers who are actively looking for your solution
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaHandshake className="text-indigo-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Higher Conversion</h3>
                            <p className="text-gray-600">
                                Better quality leads mean higher close rates and shorter sales cycles
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Comprehensive Lead Gen Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Multi-channel strategies to capture and nurture potential clients
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-blue-600 text-3xl mb-4">
                                <FaUsers />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">B2B Lead Generation</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• LinkedIn outreach automation</li>
                                <li>• Decision-maker targeting</li>
                                <li>• Account-based marketing (ABM)</li>
                                <li>• Cold email campaigns</li>
                                <li>• Webinar funnels</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-cyan-600 text-3xl mb-4">
                                <FaFilter />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Inbound Marketing</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Content lead magnets</li>
                                <li>• SEO-driven traffic</li>
                                <li>• Landing page optimization</li>
                                <li>• Chatbot implementation</li>
                                <li>• Newsletter growth</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="text-indigo-600 text-3xl mb-4">
                                <FaDatabase />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Lead Enrichment</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Data verification</li>
                                <li>• Contact info scraping</li>
                                <li>• Intent data analysis</li>
                                <li>• CRM integration</li>
                                <li>• Prospect segmentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-700 to-cyan-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Fill Your Pipeline?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let's build a custom lead generation system for your business
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link
                                to="/book-call"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
                            >
                                Start Generating Leads
                            </Link>
                            <a
                                href="tel:+919341436937"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
                            >
                                📞 Call Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeadGeneration;
