import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mouryasumit0.github.io/'),
  title: 'Sumit Mourya - Backend Developer Portfolio',
  description: 'Personal portfolio of Sumit Mourya, a passionate Backend Developer specializing in JavaScript, TypeScript, Java, Node.js, and scalable server-side solutions.',
  keywords: 'Sumit Mourya, Backend Developer, JavaScript, TypeScript, Java, Node.js, React, PostgreSQL, Portfolio',
  authors: [{ name: 'Sumit Mourya' }],
  creator: 'Sumit Mourya',
  publisher: 'Sumit Mourya',
  openGraph: {
    title: 'Sumit Mourya - Backend Developer Portfolio',
    description: 'Personal portfolio showcasing backend development projects and skills',
    url: 'https://mouryasumit0.github.io/',
    siteName: 'Sumit Mourya Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sumit Mourya - Backend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Mourya - Backend Developer Portfolio',
    description: 'Personal portfolio showcasing backend development projects and skills',
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
