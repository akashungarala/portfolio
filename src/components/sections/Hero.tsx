'use client';

import { ArrowRight, Download, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-12 md:py-24 overflow-hidden">
      {/* Background gradient blobs */}
      <div
        className="hero-blob absolute -top-40 -right-40 h-80 w-80 bg-[var(--gradient-start)]"
        aria-hidden="true"
      />
      <div
        className="hero-blob absolute -bottom-40 -left-40 h-96 w-96 bg-[var(--gradient-end)]"
        style={{ animationDelay: '-3s' }}
        aria-hidden="true"
      />
      <div
        className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-[var(--gradient-mid)]"
        style={{ animationDelay: '-6s' }}
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <FadeIn delay={0}>
          <div
            className={cn(
              'mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5',
              'border border-border/50 bg-background/50 backdrop-blur-sm',
              'text-sm font-medium text-muted-foreground',
            )}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Available for opportunities
          </div>
        </FadeIn>

        {/* Name with gradient */}
        <FadeIn delay={0.1}>
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="gradient-text">Akash Ungarala</span>
          </h1>
        </FadeIn>

        {/* Title with emphasis */}
        <FadeIn delay={0.2}>
          <p className="mb-6 text-xl font-semibold text-foreground/80 sm:text-2xl md:text-3xl">
            Senior Backend Engineer
          </p>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.3}>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Building{' '}
            <span className="font-semibold text-foreground">distributed systems at scale</span>. 10+
            years across gaming, fintech, media, and ad-tech. Focused on{' '}
            <span className="font-semibold text-foreground">reliability</span>,{' '}
            <span className="font-semibold text-foreground">performance</span>, and{' '}
            <span className="font-semibold text-foreground">high-throughput platforms</span>.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4',
                'gradient-bg text-white font-semibold',
                'shadow-lg shadow-primary/25',
                'hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
                'transition-all duration-300',
                'btn-shine',
              )}
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="/resume.pdf"
              download
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4',
                'border-2 border-border bg-background/50 backdrop-blur-sm',
                'font-semibold',
                'hover:border-primary/50 hover:bg-primary/5',
                'transition-all duration-300',
              )}
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={0.6}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div
              className={cn(
                'flex flex-col items-center gap-2 text-muted-foreground/50',
                'animate-bounce',
              )}
            >
              <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
              <div className="h-8 w-5 rounded-full border-2 border-current p-1">
                <div className="h-2 w-1 rounded-full bg-current animate-pulse" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
