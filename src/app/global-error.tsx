"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertCircle } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalRootError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Critical Root Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/60 text-xs font-semibold text-yellow-300">
            <AlertCircle className="w-3.5 h-3.5 text-yellow-400" />
            <span>HTTP 500 • Critical Notice</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white">
            We hit an unexpected snag
          </h1>

          <p className="text-sm sm:text-base text-purple-200/80 max-w-md mx-auto">
            The application experienced a server glitch. Our engineering team has been notified.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Application
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gray-900 hover:bg-gray-800 border border-purple-800/50 transition-all cursor-pointer"
            >
              <Home className="w-4 h-4 text-purple-400" />
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
