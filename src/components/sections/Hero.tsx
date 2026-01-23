'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/motion';
import type { ProfileContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface HeroProps {
  content: ProfileContent;
}

export function Hero({ content }: HeroProps) {
  const { name, title, headline, profileImage } = content;

  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-16 md:py-24">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        {/* Profile Image */}
        <FadeIn delay={0}>
          <div className="profile-image mb-8 h-28 w-28 md:h-36 md:w-36">
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
          <p className="mb-6 text-lg font-medium text-muted-foreground md:text-xl">{title}</p>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.4}>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
            {headline.tagline.trim()}
          </p>
        </FadeIn>

        {/* Single CTA */}
        <FadeIn delay={0.5}>
          <Link
            href="#projects"
            className={cn(
              'group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3',
              'bg-foreground text-background font-medium',
              'hover:bg-foreground/90 transition-colors',
            )}
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
