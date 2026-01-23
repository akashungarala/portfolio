'use client';

import { Cloud, Code2, Database, Server, Zap } from 'lucide-react';
import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

const expertise = [
  { icon: Server, label: 'Distributed Systems Architecture' },
  { icon: Zap, label: 'High-Throughput Data Pipelines' },
  { icon: Database, label: 'Real-Time Processing Systems' },
  { icon: Cloud, label: 'Platform Engineering' },
];

const technologies = [
  { category: 'Languages', items: ['Go', 'Python', 'Node.js', 'Java'] },
  { category: 'Infrastructure', items: ['Kubernetes', 'Docker', 'Terraform'] },
  { category: 'Data', items: ['PostgreSQL', 'Redis', 'Kafka'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Azure'] },
];

export function About() {
  return (
    <section id="about" className="relative container py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Building systems that <span className="gradient-text">scale with confidence</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Main content */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a Senior Backend Engineer with over{' '}
                  <span className="font-semibold text-foreground">10 years of experience</span>{' '}
                  building and scaling distributed systems across diverse industries including
                  gaming, fintech, media, and ad-tech.
                </p>

                <p>
                  My technical philosophy centers on three core principles:{' '}
                  <span className="font-semibold text-primary">reliability</span>,{' '}
                  <span className="font-semibold text-primary">performance</span>, and{' '}
                  <span className="font-semibold text-primary">scale</span>. I believe that great
                  backend systems are invisible to users—they just work, fast and consistently,
                  regardless of load.
                </p>

                <p>
                  Currently, I&apos;m focused on designing high-throughput platforms and real-time
                  data pipelines. I have a deep interest in distributed systems architecture,
                  service mesh patterns, and building infrastructure that empowers teams to ship
                  faster with confidence.
                </p>
              </div>
            </FadeIn>

            {/* Expertise badges */}
            <FadeIn delay={0.2}>
              <div className="mt-10">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item) => (
                    <div
                      key={item.label}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-full px-4 py-2',
                        'bg-primary/5 border border-primary/20',
                        'text-sm font-medium text-foreground',
                        'hover:bg-primary/10 transition-colors',
                      )}
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Tech stack card */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.3}>
              <div
                className={cn(
                  'rounded-xl border border-border/50 p-6',
                  'bg-card/80 backdrop-blur-sm',
                  'card-hover',
                )}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Tech Stack</h3>
                </div>

                <div className="space-y-5">
                  {technologies.map((tech) => (
                    <div key={tech.category}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {tech.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item) => (
                          <span
                            key={item}
                            className={cn(
                              'inline-flex items-center rounded-md px-2.5 py-1',
                              'bg-muted/50 text-sm font-medium text-foreground',
                              'border border-border/50',
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
