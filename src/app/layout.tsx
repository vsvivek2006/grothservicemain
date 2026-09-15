import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import '../index.css';
import { Header, Footer, WhatsAppFloat, ScrollToTop } from './_components/layout';

import { buildOrganizationSchema, buildWebSiteSchema } from '../seo/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const organizationSchema = buildOrganizationSchema();
const webSiteSchema = buildWebSiteSchema();

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growthservice.in'),
  title: 'Growth Service | Digital Marketing, SEO & Web Development Agency in India',
  description:
    'Growth Service is a leading digital marketing agency offering SEO, SMO, PPC, branding, and website development services to grow your business online.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.growthservice.in/',
    title: 'Growth Service | Digital Marketing & SEO Experts',
    description:
      'Performance-driven SEO, digital marketing & web development solutions for real business growth.',
    siteName: 'Growth Service',
    images: [
      {
        url: 'https://www.growthservice.in/logo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Service | Digital Marketing & SEO Experts',
    description:
      'Full-service digital marketing agency delivering measurable growth.',
    images: ['https://www.growthservice.in/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://yfyuapeblsncikhkrndj.supabase.co" />
        <link rel="preconnect" href="https://yfyuapeblsncikhkrndj.supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-gray-900 text-white antialiased font-sans flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P50L6F04NE"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P50L6F04NE');
          `}
        </Script>
        <ScrollToTop />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

