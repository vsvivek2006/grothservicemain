import React from "react";

export function StatCardSkeleton() {
  return (
    <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/60 animate-pulse flex items-center justify-between">
      <div className="space-y-2">
        <div className="h-3 w-20 bg-gray-800 rounded" />
        <div className="h-7 w-28 bg-gray-700/80 rounded" />
        <div className="h-2.5 w-32 bg-gray-800/60 rounded" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-gray-800/80 shrink-0" />
    </div>
  );
}

export function TableRowSkeleton({ cols = 5 }: { cols?: number }) {
  return (
    <tr className="border-b border-gray-800/60 animate-pulse">
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="py-3.5 px-4">
          <div
            className="h-4 bg-gray-800/70 rounded"
            style={{ width: `${Math.floor(45 + (i * 17) % 45)}%` }}
          />
        </td>
      ))}
    </tr>
  );
}

export function AdminDashboardSkeleton() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-gray-800">
        <div className="space-y-2">
          <div className="h-7 w-48 bg-gray-800 rounded-lg" />
          <div className="h-3.5 w-72 bg-gray-800/60 rounded" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-24 bg-gray-800 rounded-lg" />
          <div className="h-8 w-32 bg-purple-900/40 rounded-lg" />
        </div>
      </div>

      {/* Metric Cards Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>

      {/* Quick Actions Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-12 bg-gray-900/60 border border-gray-800 rounded-xl"
          />
        ))}
      </div>

      {/* Split Activity Tables Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-4 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <div className="h-4 w-32 bg-gray-800 rounded" />
            <div className="h-3 w-16 bg-gray-800/60 rounded" />
          </div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 bg-gray-800/40 rounded-lg" />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-4 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <div className="h-4 w-32 bg-gray-800 rounded" />
            <div className="h-3 w-16 bg-gray-800/60 rounded" />
          </div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 bg-gray-800/40 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdminTablePageSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-6 max-w-6xl mx-auto animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-gray-800">
        <div className="space-y-2">
          <div className="h-7 w-40 bg-gray-800 rounded-lg" />
          <div className="h-3.5 w-64 bg-gray-800/60 rounded" />
        </div>
        <div className="h-8 w-28 bg-gray-800 rounded-lg" />
      </div>

      {/* Filter / Search Bar Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex gap-2">
          <div className="h-8 w-16 bg-gray-800 rounded-lg" />
          <div className="h-8 w-16 bg-gray-800/60 rounded-lg" />
          <div className="h-8 w-16 bg-gray-800/60 rounded-lg" />
        </div>
        <div className="h-8 w-48 bg-gray-800 rounded-lg" />
      </div>

      {/* Table Skeleton */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden shadow-xl">
        <div className="h-10 bg-gray-800/70 border-b border-gray-800" />
        <div className="divide-y divide-gray-800/60 p-2 space-y-2">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="h-10 bg-gray-800/30 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}

