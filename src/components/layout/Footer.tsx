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
    <footer className="border-t border-border/40 py-6">
      <div className="mx-auto max-w-4xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">&copy; {currentYear} Akash Ungarala</p>

        <div className="flex items-center gap-3">
          <Link
            href="/privacy"
            className={cn(
              'text-xs text-muted-foreground',
              'hover:text-foreground transition-colors',
            )}
          >
            Privacy
          </Link>

          <span className="text-muted-foreground/30">·</span>

          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex h-7 w-7 items-center justify-center rounded-md',
                  'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                  'transition-colors',
                )}
                aria-label={link.label}
              >
                <link.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
