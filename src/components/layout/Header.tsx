'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'border-b border-border/40 bg-background/80 backdrop-blur-lg',
        'supports-[backdrop-filter]:bg-background/60',
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className={cn(
              'h-8 w-8 rounded-lg gradient-bg',
              'flex items-center justify-center',
              'text-white font-bold text-sm',
              'shadow-lg shadow-primary/20',
              'group-hover:shadow-xl group-hover:shadow-primary/30',
              'transition-all duration-300',
            )}
          >
            AU
          </div>
          <span className="font-bold text-lg hidden sm:block">Akash Ungarala</span>
        </Link>

        <nav className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-1 mr-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium',
                    'transition-all duration-200',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className={cn(
                'hidden sm:inline-flex items-center justify-center',
                'rounded-lg px-4 py-2 text-sm font-semibold',
                'border border-border bg-background',
                'hover:bg-muted transition-colors',
              )}
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
