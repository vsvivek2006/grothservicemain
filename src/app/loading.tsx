/**
 * Root-level loading skeleton.
 * Enables React Suspense streaming: shell (header + footer) renders immediately
 * while page data is fetched, eliminating blank-screen flash.
 */
export default function RootLoading() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="w-12 h-12 rounded-full border-4 border-purple-600/40 border-t-purple-500 animate-spin" />
        <div className="h-3 w-32 bg-purple-900/40 rounded-full" />
      </div>
    </div>
  );
}
