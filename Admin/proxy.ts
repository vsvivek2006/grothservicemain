import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, next internal files, and files with extensions
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Normalize pathname (strip trailing slash)
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  // Only protect admin routes
  if (!normalizedPath.startsWith("/admin")) {
    return NextResponse.next();
  }

  const isLoginPage = normalizedPath === "/admin/login";

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Fail-safe check for missing environment variables
    if (!supabaseUrl || !supabaseAnonKey) {
      if (!isLoginPage) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = "/admin/login";
        loginUrl.search = "";
        loginUrl.searchParams.set("redirectTo", normalizedPath);
        return NextResponse.redirect(loginUrl);
      }
      return NextResponse.next();
    }

    let supabaseResponse = NextResponse.next({
      request,
    });

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    });

    // Safely retrieve user session
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    // If unauthenticated or session invalid, redirect to login
    if ((!user || userError) && !isLoginPage) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";
      loginUrl.searchParams.set("redirectTo", normalizedPath);
      return NextResponse.redirect(loginUrl);
    }

    // If already authenticated and visiting login page, redirect to admin home
    if (user && isLoginPage) {
      const adminUrl = request.nextUrl.clone();
      adminUrl.pathname = "/admin";
      adminUrl.search = "";
      return NextResponse.redirect(adminUrl);
    }

    return supabaseResponse;
  } catch (error) {
    console.error("Proxy middleware error:", error);
    // On unexpected error, fail safe without crashing the routing engine
    if (!isLoginPage) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";
      loginUrl.searchParams.set("redirectTo", normalizedPath);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }
}

export default proxy;

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};

