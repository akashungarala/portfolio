import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    href: 'https://github.com/akashungarala',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/akashungarala',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:akash.ungarala@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} Akash Ungarala. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Status Indicator */}
          <Link
            href="/status"
            className={cn(
              'flex items-center gap-2 text-sm text-muted-foreground',
              'hover:text-foreground transition-colors',
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span>Status</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-md',
                  'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  'transition-colors',
                )}
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
