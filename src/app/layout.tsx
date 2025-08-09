import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mouryasumit0.github.io/'),
  title: 'Sumit Mourya - AI-Powered Full-Stack Developer',
  description: 'I am a passionate AI-powered full-stack developer with expertise in TypeScript, Node.js, Next.js, NestJS and React. I specialize in building scalable server-side solutions and integrating AI technologies to create intelligent applications.',
  keywords: 'Sumit Mourya, AI, Full-Stack Developer, JavaScript, TypeScript, Node.js, Next.js, NestJS, React, Supabase, PostgreSQL, Redis, Portfolio',
  authors: [{ name: 'Sumit Mourya' }],
  creator: 'Sumit Mourya',
  publisher: 'Sumit Mourya',
  openGraph: {
    title: 'Sumit Mourya - AI-Powered Full-Stack Developer',
    description: 'Portfolio of Sumit Mourya — AI-powered full-stack developer building scalable applications with TypeScript, Node.js, Next.js, and NestJS.',
    url: 'https://mouryasumit0.github.io/',
    siteName: 'Sumit Mourya Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sumit Mourya - AI-Powered Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Mourya - AI-Powered Full-Stack Developer',
    description: 'AI-powered full-stack developer portfolio — Next.js, NestJS, TypeScript, Node.js.',
    creator: '@mouryasumit0',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
