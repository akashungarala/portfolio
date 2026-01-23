import type { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';
import { getProfileContent } from '@/lib/get-content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Akash Ungarala. Reach out for collaboration, opportunities, or just to say hello.',
  openGraph: {
    title: 'Contact | Akash Ungarala',
    description:
      'Get in touch with Akash Ungarala. Reach out for collaboration, opportunities, or just to say hello.',
  },
};

export default function ContactPage() {
  const content = getProfileContent();
  return <Contact content={content} />;
}
