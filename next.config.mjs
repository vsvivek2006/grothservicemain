import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.growthservice.in',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/team/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/:asset(logo\\.png|favicon\\.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/admin',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  generateEtags: true,
  serverExternalPackages: ['groq-sdk', '@react-pdf/renderer'],
  outputFileTracingIncludes: {
    '/api/billing/invoices/[id]/pdf': ['./src/modules/billing/services/**/*'],
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      'date-fns',
      'sonner',
    ],
    staleTimes: {
      dynamic: 0,
      static: 180,
    },
  },
  async redirects() {
    return [
      { source: '/consultation', destination: '/book-call', permanent: true },
      { source: '/email-marketing', destination: '/digital-marketing', permanent: true },
      { source: '/website-development', destination: '/web-development', permanent: true },
      { source: '/ui-ux', destination: '/ui-ux-design', permanent: true },
      { source: '/ecommerce-development', destination: '/ecommerce', permanent: true },
      { source: '/whitelabel', destination: '/white-label', permanent: true },
      { source: '/sitemap', destination: '/locations', permanent: true },
      { source: '/careers', destination: '/team', permanent: true },
      { source: '/about/team', destination: '/team', permanent: true },
      { source: '/webinars', destination: '/resources', permanent: true },
      { source: '/success-stories', destination: '/case-studies', permanent: true },
      { source: '/scam-alert', destination: '/verify', permanent: true },
      { source: '/report-scam', destination: '/verify', permanent: true },
      { source: '/locations/:city/:serviceSlug', destination: '/:city/:serviceSlug', permanent: true },
    ];
  },
};

export default nextConfig;
