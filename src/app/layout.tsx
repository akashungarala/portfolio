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
    default: 'Akash Ungarala | Senior Software Engineer',
    template: '%s | Akash Ungarala',
  },
  description:
    'Senior Software Engineer building resilient distributed systems. 9+ years shipping real-time platforms for Fox, Niantic, Fidelity. Python, TypeScript, Kubernetes, AWS, GCP.',
  keywords: [
    'Senior Backend Engineer',
    'Senior Software Engineer',
    'Distributed Systems',
    'Python Developer',
    'TypeScript Developer',
    'Kubernetes',
    'AWS',
    'GCP',
    'Real-time Systems',
    'Microservices',
    'FastAPI',
    'Node.js',
  ],
  authors: [{ name: 'Akash Ungarala' }],
  creator: 'Akash Ungarala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Akash Ungarala',
    title: 'Akash Ungarala | Senior Software Engineer',
    description:
      'Senior Software Engineer building resilient distributed systems. 9+ years shipping real-time platforms for Fox, Niantic, Fidelity. Python, TypeScript, Kubernetes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Ungarala | Senior Software Engineer',
    description:
      'Senior Software Engineer building resilient distributed systems. 9+ years shipping real-time platforms for Fox, Niantic, Fidelity. Python, TypeScript, Kubernetes.',
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
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
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
