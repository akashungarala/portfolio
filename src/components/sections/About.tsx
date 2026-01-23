'use client';

import { Cloud, Code2, Database, Server, Zap } from 'lucide-react';
import { FadeIn } from '@/components/motion';
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

  return (
    <section id="about" className="relative container section-padding">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About
            </p>
            <h2>{about.heading}</h2>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Main content */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-muted-foreground">
                <p>{about.intro.trim()}</p>
                <p>{about.philosophy.trim()}</p>
                <p>{about.currentFocus.trim()}</p>
              </div>
            </FadeIn>

            {/* Expertise badges */}
            <FadeIn delay={0.2}>
              <div className="mt-10">
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div
                        key={item.label}
                        className={cn(
                          'inline-flex items-center gap-2 rounded-lg px-4 py-2',
                          'bg-secondary border border-border',
                          'text-sm font-medium',
                        )}
                      >
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Tech stack card */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.3}>
              <div className={cn('rounded-xl border border-border p-6', 'bg-card', 'card-hover')}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                </div>

                <div className="space-y-5">
                  {technologies.map((tech) => (
                    <div key={tech.category}>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {tech.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item) => (
                          <span
                            key={item}
                            className={cn(
                              'inline-flex items-center rounded-md px-2.5 py-1',
                              'bg-secondary text-sm font-medium',
                              'border border-border',
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
        </div>
      </div>
    </section>
  );
}
