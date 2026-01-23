'use client';

import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

export function About() {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I&apos;m a Senior Backend Engineer with over 10 years of experience building and
              scaling distributed systems across diverse industries including gaming, fintech,
              media, and ad-tech.
            </p>

            <p>
              My technical philosophy centers on three core principles:{' '}
              <span className="font-medium text-foreground">reliability</span>,{' '}
              <span className="font-medium text-foreground">performance</span>, and{' '}
              <span className="font-medium text-foreground">scale</span>. I believe that great
              backend systems are invisible to users—they just work, fast and consistently,
              regardless of load.
            </p>

            <p>
              Currently, I&apos;m focused on designing high-throughput platforms and real-time data
              pipelines. I have a deep interest in distributed systems architecture, service mesh
              patterns, and building infrastructure that empowers teams to ship faster with
              confidence.
            </p>

            <p>
              When I&apos;m not writing code, you&apos;ll find me exploring new technologies,
              contributing to open source, or diving deep into system design papers.
            </p>
          </div>
        </FadeIn>

        {/* Tech Focus Areas */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <FadeIn delay={0.2}>
            <div
              className={cn(
                'rounded-lg border border-border/50 p-6',
                'bg-card/50 backdrop-blur-sm',
              )}
            >
              <h3 className="mb-3 font-semibold text-foreground">Core Expertise</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Distributed Systems Architecture</li>
                <li>• High-Throughput Data Pipelines</li>
                <li>• Real-Time Processing Systems</li>
                <li>• Platform Engineering</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div
              className={cn(
                'rounded-lg border border-border/50 p-6',
                'bg-card/50 backdrop-blur-sm',
              )}
            >
              <h3 className="mb-3 font-semibold text-foreground">Technologies</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Go, Python, Node.js, Java</li>
                <li>• Kubernetes, Docker, Terraform</li>
                <li>• PostgreSQL, Redis, Kafka</li>
                <li>• AWS, GCP, Azure</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
