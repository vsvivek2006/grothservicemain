"use client";

import { useState } from "react";
import { Sparkles, RefreshCw, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import type { GenerateBlogPostOutput } from "@/lib/ai/generateBlogPost";

interface AIGeneratorPanelProps {
  onGenerated: (output: GenerateBlogPostOutput) => void;
  disabled?: boolean;
}

export function AIGeneratorPanel({ onGenerated, disabled }: AIGeneratorPanelProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Professional & Authoritative");
  const [keywords, setKeywords] = useState("");
  const [wordCount, setWordCount] = useState(800);
  const [audience, setAudience] = useState("Business owners and marketing leaders");
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Topic is required", {
        description: "Please enter a blog post topic to generate.",
      });
      return;
    }

    setIsGenerating(true);
    const toastId = toast.loading("Generating article with AI...", {
      description: "Crafting headline, SEO metadata, rich content, and tags.",
    });

    try {
      const keywordList = keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

      const response = await fetch("/api/admin/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          tone,
          keywords: keywordList,
          wordCount,
          audience,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to generate blog post");
      }

      toast.success("AI draft generated successfully!", {
        id: toastId,
        description: "Content loaded into editor. Review, tweak, and save as draft.",
      });

      setHasGenerated(true);
      onGenerated(data as GenerateBlogPostOutput);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Generation failed";
      toast.error("Generation failed", {
        id: toastId,
        description: message,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 rounded-2xl border border-purple-800/50 bg-gradient-to-br from-purple-950/40 via-gray-900 to-purple-950/30 backdrop-blur-md shadow-xl shadow-black/30 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-purple-900/60 border border-purple-700/50 text-yellow-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              AI Content Strategist
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase bg-purple-900 text-yellow-300 border border-purple-700/40">
                Groq Llama 3.3
              </span>
            </h3>
            <p className="text-xs text-purple-200/70">
              Provide brief directives to generate a complete, SEO-ready draft into the editor.
            </p>
          </div>
        </div>

        {hasGenerated && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Draft Loaded
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Topic */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
            Topic or Working Title <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 7 Local SEO Strategies for High-Conversion Service Businesses in India"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-900/90 border border-purple-900/50 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          />
        </div>

        {/* Tone */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
            Tone &amp; Style
          </label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3.5 py-2.5 rounded-lg bg-gray-900/90 border border-purple-900/50 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          >
            <option value="Professional & Authoritative">Professional &amp; Authoritative</option>
            <option value="Conversational & Engaging">Conversational &amp; Engaging</option>
            <option value="Educational & Action-Oriented">Educational &amp; Action-Oriented</option>
            <option value="Direct & Data-Driven">Direct &amp; Data-Driven</option>
          </select>
        </div>

        {/* Word Count */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
            Target Word Count
          </label>
          <div className="flex items-center gap-2">
            {[600, 900, 1200].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setWordCount(count)}
                disabled={disabled || isGenerating}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  wordCount === count
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-gray-800 text-gray-300 hover:text-white border border-purple-900/40"
                }`}
              >
                ~{count} words
              </button>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
            Target SEO Keywords (Comma Separated)
          </label>
          <input
            type="text"
            placeholder="e.g. local SEO, google my business, organic ranking"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3.5 py-2.5 rounded-lg bg-gray-900/90 border border-purple-900/50 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          />
        </div>

        {/* Audience */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
            Target Audience
          </label>
          <input
            type="text"
            placeholder="e.g. Small business owners, marketing managers"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3.5 py-2.5 rounded-lg bg-gray-900/90 border border-purple-900/50 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          />
        </div>
      </div>

      <div className="pt-2 flex items-center justify-end gap-3">
        {hasGenerated ? (
          <button
            type="button"
            onClick={handleGenerate}
            disabled={disabled || isGenerating}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-gray-800 hover:bg-gray-700 text-purple-200 hover:text-white border border-purple-700/50 transition-all text-xs cursor-pointer disabled:opacity-50"
          >
            {isGenerating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 text-yellow-400" />
            )}
            Regenerate Article
          </button>
        ) : (
          <button
            type="button"
            onClick={handleGenerate}
            disabled={disabled || isGenerating}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-lg shadow-purple-900/50 transition-all text-xs cursor-pointer disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating Draft...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-yellow-300" />
                Generate Article
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
