"use client";

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}

export function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File too large", {
        description: "Image size must be less than 5MB",
      });
      return;
    }

    // Check type
    if (!file.type.startsWith("image/")) {
      toast.error("Invalid file type", {
        description: "Please upload an image file (PNG, JPEG, WebP, GIF)",
      });
      return;
    }

    setIsUploading(true);
    const toastId = toast.loading("Uploading cover image...", {
      description: "Processing file and uploading to storage.",
    });

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Upload failed");
      }

      onChange(data.url);
      toast.success("Cover image uploaded successfully!", {
        id: toastId,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to upload image";
      toast.error("Upload failed", {
        id: toastId,
        description: message,
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemove = () => {
    onChange("");
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={handleFileChange}
        disabled={disabled || isUploading}
        className="hidden"
      />

      {value ? (
        <div className="relative rounded-xl overflow-hidden border border-purple-900/40 bg-gray-900 group aspect-video max-h-72 w-full flex items-center justify-center">
          <Image
            src={value}
            alt="Cover preview"
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={disabled || isUploading}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer"
            >
              Change Image
            </button>
            <button
              type="button"
              onClick={handleRemove}
              disabled={disabled || isUploading}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => !disabled && !isUploading && fileInputRef.current?.click()}
          className={`border-2 border-dashed border-purple-900/50 hover:border-purple-500/70 rounded-xl p-8 text-center transition-all bg-purple-950/10 cursor-pointer ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isUploading ? (
            <div className="flex flex-col items-center justify-center space-y-2 text-purple-300">
              <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
              <p className="text-sm font-medium">Uploading cover image to Supabase...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2 text-gray-400">
              <div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
                <Upload className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-purple-300 hover:underline">
                  Click to upload cover image
                </span>{" "}
                or drag and drop
              </div>
              <p className="text-xs text-purple-300/60">
                PNG, JPG, WebP or GIF (max 5MB)
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
