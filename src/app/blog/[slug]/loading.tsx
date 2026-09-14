export default function BlogPostLoading() {
  return (
    <article className="min-h-screen bg-gray-950 text-white animate-pulse">
      {/* Hero Header Skeleton */}
      <header className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-16 sm:py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="h-4 w-32 bg-purple-800/50 rounded" />
          <div className="flex gap-2">
            <div className="h-5 w-16 bg-purple-950/80 rounded-full" />
            <div className="h-5 w-20 bg-purple-950/80 rounded-full" />
          </div>
          <div className="space-y-3">
            <div className="h-10 sm:h-14 bg-purple-800/40 rounded-xl w-4/5" />
            <div className="h-10 sm:h-14 bg-purple-800/30 rounded-xl w-3/5" />
          </div>
          <div className="flex items-center gap-6 pt-4 border-t border-purple-800/40">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-800/60" />
              <div className="h-4 w-28 bg-purple-800/40 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-800/60" />
              <div className="h-4 w-24 bg-purple-800/40 rounded" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-8">
        <div className="aspect-video w-full rounded-2xl bg-gray-900 border border-purple-900/30" />
        <div className="space-y-4 pt-4">
          <div className="h-4 bg-gray-800/80 rounded w-full" />
          <div className="h-4 bg-gray-800/80 rounded w-11/12" />
          <div className="h-4 bg-gray-800/80 rounded w-4/5" />
          <div className="h-6 bg-purple-900/40 rounded w-2/5 my-6" />
          <div className="h-4 bg-gray-800/80 rounded w-full" />
          <div className="h-4 bg-gray-800/80 rounded w-10/12" />
          <div className="h-4 bg-gray-800/80 rounded w-3/4" />
        </div>
      </div>
    </article>
  );
}
