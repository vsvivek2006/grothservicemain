import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-between">
      {/* Top Notification Bar (LOCKED) */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-medium">
        <span>🚀 Premier SEO &amp; Digital Marketing Agency — </span>
        <a
          href="https://www.growthservice.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline font-semibold hover:text-white transition-colors ml-1"
        >
          Visit GrowthService.in
        </a>
      </div>

      {/* Main Public Header */}
      <header className="border-b border-purple-900/30 bg-gray-900/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Growth <span className="text-yellow-400">Service</span>
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-900/60 border border-purple-700/50 text-purple-300">
              Blog
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              All Articles
            </Link>
            <a
              href="https://www.growthservice.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-md shadow-purple-900/30 transition-all"
            >
              Agency Site
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="flex-1">{children}</div>

      {/* Public Footer */}
      <footer className="border-t border-purple-900/30 bg-gray-900/90 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-extrabold text-white">
              Growth <span className="text-yellow-400">Service</span>
            </span>
            <p className="text-xs text-purple-300/70 mt-1">
              Actionable SEO, Digital Marketing, and Growth Strategies for Businesses.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-purple-300/80">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog Home
            </Link>
            <a
              href="https://www.growthservice.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              growthservice.in
            </a>
            <Link href="/admin" className="hover:text-white transition-colors text-purple-400/60">
              Admin
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-purple-900/20 text-center text-xs text-purple-400/50">
          © {new Date().getFullYear()} Growth Service. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
