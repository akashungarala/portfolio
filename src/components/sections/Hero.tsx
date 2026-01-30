'use client';

import { ArrowRight, Globe, MapPin } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/motion';
import { HighlightText } from '@/components/ui/HighlightText';
import type { ProfileContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface HeroProps {
  content: ProfileContent;
}

export function Hero({ content }: HeroProps) {
  const { name, headline, profileImage } = content;

  // First highlight is the title, rest are keywords to highlight in tagline
  const [title, ...highlights] = headline.highlights;

  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-16 md:py-24">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        {/* Profile Image */}
        <FadeIn delay={0}>
          <div className="profile-image mb-8 h-28 w-28 md:h-36 md:w-36 hover:scale-105 transition-transform duration-300">
            <Image
              src={profileImage}
              alt={name}
              width={144}
              height={144}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </FadeIn>

        {/* Badge */}
        <FadeIn delay={0.1}>
          <div className="badge mb-6 hover:border-[var(--highlight)] transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {headline.badge}
          </div>
        </FadeIn>

        {/* Name */}
        <FadeIn delay={0.2}>
          <h1 className="mb-4 section-title">{name}</h1>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.3}>
          <p className="mb-4 text-lg font-medium text-muted-foreground md:text-xl">{title}</p>
        </FadeIn>

        {/* Location Info */}
        <FadeIn delay={0.35}>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[var(--highlight)]" />
              Charlotte, NC
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-[var(--highlight)]" />
              Remote (US) or Hybrid (NC, SC)
            </span>
          </div>
        </FadeIn>

        {/* Tagline with highlighted keywords */}
        <FadeIn delay={0.4}>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
            <HighlightText text={headline.tagline.trim()} highlights={highlights} />
          </p>
        </FadeIn>

        {/* CTA Button with hover animation */}
        <FadeIn delay={0.5}>
          <button
            type="button"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3',
              'bg-foreground text-background font-medium',
              'hover:bg-[var(--highlight)] hover:scale-105',
              'transition-all duration-300 ease-out',
              'shadow-lg hover:shadow-xl hover:shadow-[var(--highlight)]/20',
            )}
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
