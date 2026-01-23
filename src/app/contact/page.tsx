import type { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact | Akash Ungarala',
  description:
    'Get in touch with Akash Ungarala. Reach out for collaboration, opportunities, or just to say hello.',
};

export default function ContactPage() {
  return <Contact />;
}
