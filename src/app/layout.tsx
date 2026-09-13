import type { Metadata } from 'next';
import '../index.css';

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
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="min-h-screen bg-gray-900 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
