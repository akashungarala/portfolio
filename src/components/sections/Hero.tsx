'use client';

import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-12 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Greeting */}
        <FadeIn delay={0}>
          <p className="mb-4 text-sm font-medium text-muted-foreground">Hello, I&apos;m</p>
        </FadeIn>

        {/* Name */}
        <FadeIn delay={0.1}>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Akash Ungarala
          </h1>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.2}>
          <p className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
            Senior Backend Engineer
          </p>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.3}>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
            Building distributed systems at scale. 10+ years of experience across gaming, fintech,
            media, and ad-tech. Focused on reliability, performance, and high-throughput platforms.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3',
                'bg-primary text-primary-foreground',
                'hover:bg-primary/90 transition-colors',
                'font-medium',
              )}
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="/resume.pdf"
              download
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3',
                'border border-input bg-background',
                'hover:bg-accent hover:text-accent-foreground transition-colors',
                'font-medium',
              )}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
