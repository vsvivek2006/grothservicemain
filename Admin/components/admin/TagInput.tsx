"use client";

import React, { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

export function TagInput({
  tags = [],
  onChange,
  placeholder = "Add tags (press Enter)...",
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const addTag = (rawTag: string) => {
    const trimmed = rawTag.trim().replace(/^,+|,+$/g, "");
    if (!trimmed) return;
    if (!tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
    }
    setInputValue("");
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((t) => t !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2 p-2.5 rounded-lg bg-gray-800/80 border border-purple-900/40 min-h-[46px] focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-950/80 border border-purple-700/50 text-purple-200"
          >
            #{tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="hover:text-red-400 p-0.5 rounded transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => addTag(inputValue)}
          placeholder={tags.length === 0 ? placeholder : ""}
          className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none min-w-[120px]"
        />
      </div>
      <p className="text-[11px] text-purple-300/60">
        Separate tags with commas or press Enter.
      </p>
    </div>
  );
}
