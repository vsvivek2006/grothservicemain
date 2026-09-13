import Link from "next/link";
import { ArrowRight, Lock, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white py-2.5 px-4 text-center text-sm font-medium">
        <span>Growth Service — Digital Marketing &amp; SEO Agency</span>
      </div>

      {/* Main Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/30 text-xs font-semibold text-yellow-300">
            Official Blog &amp; Admin Platform
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Growth <span className="text-yellow-400">Service</span>
          </h1>

          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto">
            Server-rendered, SEO-optimized blog platform with AI-assisted publishing pipeline and admin dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-lg shadow-purple-900/40 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Visit Public Blog
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/admin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold bg-white/10 hover:bg-white/20 border border-purple-500/40 text-white transition-all"
            >
              <Lock className="w-4 h-4 text-yellow-400" />
              Admin Dashboard
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 py-6 text-center text-xs text-purple-300/70">
        © {new Date().getFullYear()} Growth Service. All rights reserved.
      </footer>
    </div>
  );
}
