'use client';

import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'work' | 'personal';
  featured: boolean;
  metrics?: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Portfolio
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className={cn(
                'group inline-flex items-center gap-1.5 text-sm',
                'text-muted-foreground hover:text-foreground transition-colors',
              )}
            >
              View all
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <article
                className={cn(
                  'group rounded-lg border border-border/50 bg-card/50 p-5',
                  'hover:border-border hover:bg-card transition-colors',
                )}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="font-medium hover:underline underline-offset-4">
                      {project.title}
                    </h3>
                  </Link>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description.trim()}
                </p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <ul className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
                    {project.metrics.slice(0, 3).map((metric) => (
                      <li key={metric} className="text-xs text-muted-foreground/75">
                        • {metric}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      data-testid="tech-badge"
                      className="inline-flex items-center rounded px-2 py-0.5 bg-muted/50 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span
                      data-testid="tech-badge"
                      className="inline-flex items-center rounded px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
