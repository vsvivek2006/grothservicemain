"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, LayoutDashboard, Home } from "lucide-react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception for internal diagnostics
    console.error("[AdminErrorBoundary] Uncaught admin exception:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="w-full max-w-md rounded-2xl border border-purple-900/40 bg-gray-900/90 p-8 shadow-2xl backdrop-blur-sm">
        {/* Error Icon Badge */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-950/40 text-rose-400">
          <AlertTriangle className="h-7 w-7" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold tracking-tight text-white">
          Admin Portal Error
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-300">
          {error?.message || "An unexpected error occurred while loading this admin section."}
        </p>

        {/* Error Digest (if available from Next.js) */}
        {error?.digest && (
          <p className="mt-2 rounded bg-gray-950/60 px-2.5 py-1 font-mono text-[11px] text-gray-400 border border-gray-800">
            Digest: {error.digest}
          </p>
        )}

        {/* Action CTAs */}
        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-purple-950/40 hover:from-blue-600 hover:to-indigo-800 transition-all cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Try Again</span>
          </button>

          <Link
            href="/admin"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-500/30 bg-purple-950/30 px-4 py-2.5 text-xs font-semibold text-purple-200 hover:bg-purple-900/40 transition-colors"
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-800 bg-gray-800/60 px-4 py-2.5 text-xs font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
