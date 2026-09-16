import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Validates that redirect paths are strictly internal admin routes
export function sanitizeAdminRedirect(path: string | null | undefined): string {
  if (!path) return "/admin";
  // Must start with /admin, cannot start with // (protocol-relative), and cannot have : (scheme injection)
  if (path.startsWith("/admin") && !path.startsWith("//") && !path.includes(":")) {
    return path;
  }
  return "/admin";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static assets, next internals, api, and files with extensions bypass middleware
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Normalize path (strip trailing slashes)
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  // Only protect /admin routes; all public routes bypass
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
        loginUrl.searchParams.set("redirectTo", sanitizeAdminRedirect(normalizedPath));
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

    // Refresh auth session
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    // If unauthenticated or error, redirect to /admin/login
    if ((!user || userError) && !isLoginPage) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";
      loginUrl.searchParams.set("redirectTo", sanitizeAdminRedirect(normalizedPath));
      return NextResponse.redirect(loginUrl);
    }

    // If already authenticated and visiting login, redirect to /admin or requested safe redirectTo
    if (user && isLoginPage) {
      const redirectParam = request.nextUrl.searchParams.get("redirectTo");
      const target = sanitizeAdminRedirect(redirectParam);
      const destinationUrl = request.nextUrl.clone();
      destinationUrl.pathname = target;
      destinationUrl.search = "";
      return NextResponse.redirect(destinationUrl);
    }

    // If authenticated and accessing admin, verify authorized role & route boundaries
    if (user && !isLoginPage) {
      const validRoles = ["superadmin", "admin", "billing_manager", "editor"];
      const adminRole = user.app_metadata?.role as string | undefined;

      // Unassigned or unauthorized user cannot enter admin portal
      if (!adminRole || !validRoles.includes(adminRole)) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = "/admin/login";
        loginUrl.search = "";
        loginUrl.searchParams.set("error", "unauthorized");
        return NextResponse.redirect(loginUrl);
      }

      // Route-level role boundary checks:
      // 1. Billing & Clients section: restricted to superadmin, admin, billing_manager
      if (
        (normalizedPath.startsWith("/admin/billing") || normalizedPath.startsWith("/admin/clients")) &&
        adminRole === "editor"
      ) {
        const adminUrl = request.nextUrl.clone();
        adminUrl.pathname = "/admin";
        adminUrl.search = "";
        adminUrl.searchParams.set("unauthorized", "billing");
        return NextResponse.redirect(adminUrl);
      }

      // 2. Content section: restricted to superadmin, admin, editor
      if (
        normalizedPath.startsWith("/admin/blog") &&
        adminRole === "billing_manager"
      ) {
        const adminUrl = request.nextUrl.clone();
        adminUrl.pathname = "/admin";
        adminUrl.search = "";
        adminUrl.searchParams.set("unauthorized", "content");
        return NextResponse.redirect(adminUrl);
      }

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-email", user.email || "");
      requestHeaders.set("x-user-id", user.id);
      requestHeaders.set("x-user-role", adminRole);
      requestHeaders.set("x-pathname", normalizedPath);

      const responseWithHeaders = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });

      // Preserve any cookies refreshed by Supabase
      supabaseResponse.cookies.getAll().forEach((cookie) => {
        responseWithHeaders.cookies.set(cookie);
      });

      return responseWithHeaders;
    }

    return supabaseResponse;
  } catch (error) {
    console.error("Middleware auth verification error:", error);
    if (!isLoginPage) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";
      loginUrl.searchParams.set("redirectTo", sanitizeAdminRedirect(normalizedPath));
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }
}

export default middleware;

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
