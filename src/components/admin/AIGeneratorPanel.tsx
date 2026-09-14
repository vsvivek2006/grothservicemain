"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  RefreshCw,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Zap,
  Sliders,
} from "lucide-react";
import { toast } from "sonner";
import type { GenerateBlogPostOutput } from "@/lib/ai/generateBlogPost";

interface AIGeneratorPanelProps {
  onGenerated: (output: GenerateBlogPostOutput) => void;
  disabled?: boolean;
}

const GENERATION_STEPS = [
  { label: "Connecting to Groq Llama 3.3 Engine...", progress: 20 },
  { label: "Analyzing topic, audience & search intent...", progress: 45 },
  { label: "Structuring semantic H2/H3 headings & outline...", progress: 70 },
  { label: "Drafting rich sanitized HTML content & SEO tags...", progress: 90 },
];

const SUGGESTED_TOPICS = [
  "7 Local SEO Strategies for Indian Service Businesses",
  "How High-ROI PPC Campaigns Double Qualified Leads",
  "Social Media Marketing Roadmap for B2B Growth in 2026",
];

export function AIGeneratorPanel({ onGenerated, disabled }: AIGeneratorPanelProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Professional & Authoritative");
  const [keywords, setKeywords] = useState("");
  const [wordCount, setWordCount] = useState(800);
  const [audience, setAudience] = useState("Business owners and marketing leaders");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  // Animated progress state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const stepTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Progress simulation during AI generation
  useEffect(() => {
    if (isGenerating) {
      setCurrentStepIndex(0);
      setProgressPercent(15);

      let step = 0;
      stepTimerRef.current = setInterval(() => {
        step += 1;
        if (step < GENERATION_STEPS.length) {
          setCurrentStepIndex(step);
          setProgressPercent(GENERATION_STEPS[step].progress);
        } else {
          // Creep forward slowly while waiting for final payload
          setProgressPercent((prev) => Math.min(prev + 2, 94));
        }
      }, 1600);
    } else {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
        stepTimerRef.current = null;
      }
    }

    return () => {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, [isGenerating]);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Topic is required", {
        description: "Please enter a blog post topic or click a suggested prompt.",
      });
      return;
    }

    setIsGenerating(true);
    setErrorBanner(null);

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
        throw new Error(data.error || "Failed to generate blog post from Groq API");
      }

      setProgressPercent(100);
      toast.success("AI draft generated successfully!", {
        id: toastId,
        description: "Content loaded into editor. Review, tweak, and save as draft.",
      });

      setHasGenerated(true);
      onGenerated(data as GenerateBlogPostOutput);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unexpected error during AI generation. Check your network or API quota.";
      setErrorBanner(message);
      toast.error("Generation failed", {
        id: toastId,
        description: message,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-xl border border-gray-800 bg-gray-900 shadow-sm space-y-5 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gray-800 border border-gray-700 text-purple-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              AI Content Strategist
              <span className="text-[10px] px-2 py-0.5 rounded-md font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                Groq Llama 3.3
              </span>
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Draft an SEO-structured article tailored to Growth Service.
            </p>
          </div>
        </div>

        {hasGenerated && !isGenerating && (
          <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-md border border-emerald-800/60">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Draft In Editor
          </span>
        )}
      </div>

      {/* Inline Error Banner with Retry */}
      {errorBanner && (
        <div className="p-3.5 rounded-lg border border-rose-800/60 bg-rose-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-white">Generation Error</h4>
              <p className="text-xs text-rose-200/90 mt-0.5">{errorBanner}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="self-end sm:self-auto shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      )}

      {/* Animated Multi-Step Progress (Active during generation) */}
      {isGenerating && (
        <div className="p-4 rounded-lg border border-gray-800 bg-gray-800/50 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
              {GENERATION_STEPS[currentStepIndex]?.label || "Finalizing content..."}
            </span>
            <span className="font-mono font-semibold text-gray-400">
              {progressPercent}%
            </span>
          </div>

          {/* Progress Track */}
          <div className="w-full h-1.5 rounded-full bg-gray-800 overflow-hidden relative">
            <div
              className="h-full bg-purple-600 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Step indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
            {GENERATION_STEPS.map((step, idx) => {
              const isDone = idx < currentStepIndex;
              const isCurrent = idx === currentStepIndex;
              return (
                <div
                  key={step.label}
                  className={`flex items-center gap-1.5 truncate ${
                    isDone
                      ? "text-emerald-400 font-medium"
                      : isCurrent
                      ? "text-yellow-400 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isDone
                        ? "bg-emerald-400"
                        : isCurrent
                        ? "bg-yellow-400 animate-ping"
                        : "bg-gray-600"
                    }`}
                  />
                  <span className="truncate">Step {idx + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Form Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Topic Input & Quick Suggestions */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="block text-xs font-semibold text-gray-300">
            Target Topic or Title <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 7 Proven SEO Tactics for Service Businesses in India"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3.5 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          />

          {/* Suggested Topic Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1 mr-1">
              <Zap className="w-3 h-3 text-yellow-400" />
              Quick Prompts:
            </span>
            {SUGGESTED_TOPICS.map((suggested) => (
              <button
                key={suggested}
                type="button"
                onClick={() => setTopic(suggested)}
                disabled={disabled || isGenerating}
                className="text-[11px] px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {suggested}
              </button>
            ))}
          </div>
        </div>

        {/* Tone & Style */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-gray-400" />
            Tone &amp; Editorial Style
          </label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          >
            <option value="Professional & Authoritative">Professional &amp; Authoritative</option>
            <option value="Conversational & Engaging">Conversational &amp; Engaging</option>
            <option value="Educational & Action-Oriented">Educational &amp; Action-Oriented</option>
            <option value="Direct & Data-Driven">Direct &amp; Data-Driven</option>
          </select>
        </div>

        {/* Word Count */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">
            Target Article Length
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
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:bg-gray-700"
                }`}
              >
                ~{count} words
              </button>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">
            Target SEO Keywords (Comma Separated)
          </label>
          <input
            type="text"
            placeholder="e.g. digital marketing, local SEO, PPC lead gen"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          />
        </div>

        {/* Audience */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">
            Target Audience Persona
          </label>
          <input
            type="text"
            placeholder="e.g. Small business founders, marketing heads in India"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
          />
        </div>
      </div>

      {/* Action Trigger */}
      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-800">
        <p className="text-[11px] text-gray-400 text-center sm:text-left">
          Generates title, slug, meta description, outline, content &amp; tags into editor.
        </p>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {hasGenerated ? (
            <button
              type="button"
              onClick={handleGenerate}
              disabled={disabled || isGenerating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-700 transition-all text-xs cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <RefreshCw className="w-3.5 h-3.5 text-yellow-400" />
              )}
              Regenerate Article
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGenerate}
              disabled={disabled || isGenerating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors text-xs cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Generating Draft...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  Generate Draft with AI
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
