import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of projects spanning distributed systems, real-time platforms, and backend engineering.',
  openGraph: {
    title: 'Projects | Akash Ungarala',
    description:
      'Explore my portfolio of projects spanning distributed systems, real-time platforms, and backend engineering.',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
