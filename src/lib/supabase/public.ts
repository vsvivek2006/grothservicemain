import { createClient } from "@supabase/supabase-js";

export function createPublicClient() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yfyuapeblsncikhkrndj.supabase.co";
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmeXVhcGVibHNuY2lraGtybmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyODQyNTUsImV4cCI6MjEwNDg2MDI1NX0.3B3MxtgMEytsnLf-YJqtta8uITEp6QteAy-Skr7ic7w";

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

