'use client';

import { ArrowRight, ExternalLink, Folder, Github } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/motion';
import projectsData from '@/data/projects.json';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'work' | 'personal';
  featured: boolean;
  metrics?: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

export function FeaturedProjects() {
  const featuredProjects = (projectsData as Project[]).filter((project) => project.featured);

  return (
    <section id="projects" className="relative container py-20 md:py-32">
      {/* Background accent */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Portfolio
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className={cn(
                'group inline-flex items-center gap-2 text-sm font-semibold',
                'text-muted-foreground hover:text-primary transition-colors',
              )}
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <article
                className={cn(
                  'group relative flex h-full flex-col rounded-xl',
                  'border border-border/50 bg-card/80 backdrop-blur-sm',
                  'card-hover',
                  'hover:border-primary/30',
                )}
              >
                {/* Gradient border on hover */}
                <div
                  className={cn(
                    'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300',
                    'gradient-border group-hover:opacity-100',
                  )}
                  aria-hidden="true"
                />

                {/* Card header with icon */}
                <div className="flex items-center justify-between p-6 pb-0">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'rounded-lg p-2 text-muted-foreground',
                          'hover:bg-muted hover:text-foreground transition-colors',
                        )}
                        aria-label="View source code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'rounded-lg p-2 text-muted-foreground',
                          'hover:bg-muted hover:text-foreground transition-colors',
                        )}
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <ul className="mb-4 space-y-1.5">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <li
                          key={metric}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        data-testid="tech-badge"
                        className={cn(
                          'inline-flex items-center rounded-md px-2.5 py-1',
                          'bg-muted/50 text-xs font-medium text-muted-foreground',
                          'border border-border/50',
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span
                        data-testid="tech-badge"
                        className={cn(
                          'inline-flex items-center rounded-md px-2.5 py-1',
                          'bg-primary/10 text-xs font-medium text-primary',
                        )}
                      >
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
