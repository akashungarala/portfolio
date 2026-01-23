'use client';

import { ArrowRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/motion';
import type { ProfileContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface HeroProps {
  content: ProfileContent;
}

export function Hero({ content }: HeroProps) {
  const { name, title, headline, profileImage, resumeUrl } = content;

  return (
    <section className="relative container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16 md:py-24">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Profile Image */}
        <FadeIn delay={0}>
          <div className="profile-image mb-8 h-32 w-32 md:h-40 md:w-40">
            <Image
              src={profileImage}
              alt={name}
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </FadeIn>

        {/* Badge */}
        <FadeIn delay={0.1}>
          <div className="badge mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {headline.badge}
          </div>
        </FadeIn>

        {/* Name */}
        <FadeIn delay={0.2}>
          <h1 className="mb-4">{name}</h1>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.3}>
          <p className="mb-6 text-xl font-medium text-muted-foreground md:text-2xl">{title}</p>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.4}>
          <p className="mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
            {headline.tagline.trim()}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3',
                'bg-primary text-primary-foreground font-medium',
                'hover:opacity-90 transition-opacity',
              )}
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3',
                'border border-border bg-background',
                'font-medium',
                'hover:bg-secondary transition-colors',
              )}
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
