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
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, 'src/shims/react-router-dom.tsx'),
      'react-helmet': path.resolve(__dirname, 'src/shims/react-helmet.tsx'),
    };
    return config;
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
