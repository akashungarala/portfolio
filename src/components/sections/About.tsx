'use client';

import { Cloud, Code2, Database, Server, Zap } from 'lucide-react';
import { FadeIn } from '@/components/motion';
import { HighlightText } from '@/components/ui/HighlightText';
import type { ProfileContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface AboutProps {
  content: ProfileContent;
}

const iconMap = {
  server: Server,
  zap: Zap,
  database: Database,
  cloud: Cloud,
};

export function About({ content }: AboutProps) {
  const { about, expertise, technologies } = content;

  // Keywords to highlight in about content
  const highlights = about.coreValues;

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--highlight)]">
              About
            </p>
            <h2 className="section-title">{about.heading}</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <HighlightText text={about.intro.trim()} highlights={highlights} />
            </p>
            <p>
              <HighlightText text={about.philosophy.trim()} highlights={highlights} />
            </p>
            <p>
              <HighlightText text={about.currentFocus.trim()} highlights={highlights} />
            </p>
          </div>
        </FadeIn>

        {/* Expertise badges */}
        <FadeIn delay={0.2}>
          <div className="mt-10">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-[var(--highlight)]">
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.label}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-md px-3 py-1.5',
                      'bg-muted/50 border border-border/50',
                      'text-sm',
                      'hover:border-[var(--highlight)] hover:bg-[var(--highlight)]/5',
                      'transition-all duration-300 cursor-default',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5 text-[var(--highlight)]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Tech stack */}
        <FadeIn delay={0.3}>
          <div className="mt-10 rounded-lg border border-border/50 bg-card/50 p-6 interactive-card">
            <div className="mb-5 flex items-center gap-2.5">
              <Code2 className="h-4 w-4 text-[var(--highlight)]" />
              <h3 className="text-sm font-medium">Tech Stack</h3>
            </div>

            <div className="space-y-4">
              {technologies.map((tech) => (
                <div key={tech.category}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {tech.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          'inline-flex items-center rounded px-2 py-0.5 bg-muted/50 text-xs font-mono',
                          'hover:bg-[var(--highlight)]/10 hover:text-[var(--highlight)]',
                          'transition-colors duration-200 cursor-default',
                        )}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
