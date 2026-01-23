import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://akashungarala.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Akash Ungarala | Senior Backend Engineer',
    template: '%s | Akash Ungarala',
  },
  description:
    'Senior Backend Engineer with 10+ years building distributed systems across gaming, fintech, media, and ad-tech.',
  keywords: [
    'Backend Engineer',
    'Distributed Systems',
    'Software Engineer',
    'TypeScript',
    'Node.js',
    'Python',
    'Go',
    'Kubernetes',
    'AWS',
    'GCP',
  ],
  authors: [{ name: 'Akash Ungarala' }],
  creator: 'Akash Ungarala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Akash Ungarala',
    title: 'Akash Ungarala | Senior Backend Engineer',
    description:
      'Senior Backend Engineer with 10+ years building distributed systems across gaming, fintech, media, and ad-tech.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Ungarala | Senior Backend Engineer',
    description:
      'Senior Backend Engineer with 10+ years building distributed systems across gaming, fintech, media, and ad-tech.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
