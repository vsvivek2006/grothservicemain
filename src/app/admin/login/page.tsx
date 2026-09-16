"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawRedirect = searchParams.get("redirectTo");
  const redirectTo =
    rawRedirect &&
    rawRedirect.startsWith("/admin") &&
    !rawRedirect.startsWith("//") &&
    !rawRedirect.includes(":")
      ? rawRedirect
      : "/admin";
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        toast.error("Authentication failed", {
          description: error.message,
        });
        return;
      }

      toast.success("Welcome back!", {
        description: "Logged in successfully",
      });

      router.push(redirectTo);
      router.refresh();
    } catch {
      toast.error("Unexpected error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl border border-purple-900/50 bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-purple-950/60 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-8 relative">
        <div className="inline-flex p-3 rounded-xl bg-purple-900/40 border border-purple-800/40 text-yellow-400 mb-4">
          <Lock className="w-6 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Admin <span className="text-yellow-400">Portal</span>
        </h1>
        <p className="text-sm text-purple-200/80 mt-2">
          Sign in with your Growth Service admin credentials
        </p>
        {searchParams.get("error") === "unauthorized" && (
          <div className="mt-4 p-3 rounded-lg bg-rose-950/70 border border-rose-800/60 text-xs text-rose-200 text-left">
            Access denied: Your account does not possess authorized administrator roles.
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="email"
              type="email"
              autoComplete="email"
              disabled={isLoading}
              placeholder="admin@growthservice.in"
              {...register("email")}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-800/80 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-600/30 transition-all text-sm disabled:opacity-50"
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs text-rose-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              disabled={isLoading}
              placeholder="••••••••"
              {...register("password")}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-800/80 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-600/30 transition-all text-sm disabled:opacity-50"
            />
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs text-rose-400">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-lg shadow-purple-900/50 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Sign In to Dashboard
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950/70 to-gray-900 px-4 py-12 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

      <Suspense fallback={<div className="text-purple-300">Loading...</div>}>
        <LoginForm />
      </Suspense>

      <div className="mt-6 text-center z-10">
        <a
          href="/"
          className="text-xs text-purple-300/70 hover:text-yellow-400 transition-colors inline-flex items-center gap-1.5"
        >
          ← Return to Growth Service Website
        </a>
      </div>
    </div>
  );
}
