'use client';

import { FileText, Terminal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

function getBreadcrumbPath(pathname: string | null): string {
  if (!pathname || pathname === '/') return '~/home';
  if (pathname === '/projects') return '~/projects';
  if (pathname.startsWith('/projects/')) return '~/projects/*';
  if (pathname === '/contact') return '~/contact';
  if (pathname === '/privacy') return '~/privacy';
  return `~${pathname}`;
}

export function Header() {
  const pathname = usePathname();
  const breadcrumb = getBreadcrumbPath(pathname);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'border-b border-border/40 bg-background/95 backdrop-blur-md',
        'supports-[backdrop-filter]:bg-background/80',
      )}
    >
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        {/* Breadcrumb Path */}
        <Link
          href="/"
          className={cn(
            'group flex items-center gap-2',
            'rounded-md px-3 py-1.5',
            'bg-muted/50 hover:bg-muted',
            'transition-colors duration-200',
          )}
        >
          <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-mono text-sm text-foreground">{breadcrumb}</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          <div className="hidden sm:flex items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-1.5 text-sm font-medium',
                    'rounded-md transition-colors duration-200',
                    isActive
                      ? 'text-foreground bg-muted'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center ml-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5',
                'rounded-md px-3 py-1.5 text-sm font-medium',
                'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                'transition-colors duration-200',
              )}
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
