import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center text-purple-300 space-y-3">
      <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-300/80">
        Loading Admin Dashboard...
      </p>
    </div>
  );
}
