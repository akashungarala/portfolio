'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'border-b border-border/40 bg-background/95 backdrop-blur',
        'supports-[backdrop-filter]:bg-background/60',
      )}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Akash</span>
          </Link>
        </div>

        <nav className="flex flex-1 items-center justify-between space-x-2">
          <div className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn('transition-colors hover:text-foreground/80', 'text-foreground/60')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
