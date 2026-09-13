import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-400 text-sm font-medium">
          <span>⚡</span> Next.js App Router Shell Active
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-yellow-200">
          Growth Service
        </h1>

        <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
          India&apos;s premier performance-driven digital marketing, SEO, and web engineering agency.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-lg transition-all"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
