export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8 animate-pulse">
        <div className="h-48 rounded-3xl bg-purple-950/30 border border-purple-900/30 flex items-center justify-center">
          <div className="h-8 w-64 bg-purple-800/40 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-purple-900/30 bg-gray-900/60 h-80 flex flex-col justify-between p-6 space-y-4"
            >
              <div className="aspect-video bg-gray-800/80 rounded-xl" />
              <div className="h-4 bg-purple-900/40 rounded w-3/4" />
              <div className="h-3 bg-gray-800 rounded w-full" />
              <div className="h-3 bg-gray-800 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
