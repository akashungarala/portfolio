'use client';

import { ArrowRight, ExternalLink, Folder, Github } from 'lucide-react';
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
    <section id="projects" className="relative container section-padding">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Portfolio
              </p>
              <h2>Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className={cn(
                'group inline-flex items-center gap-2 text-sm font-medium',
                'text-muted-foreground hover:text-foreground transition-colors',
              )}
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <article
                className={cn(
                  'group flex h-full flex-col rounded-xl',
                  'border border-border bg-card',
                  'card-hover',
                )}
              >
                {/* Card header with icon */}
                <div className="flex items-center justify-between p-6 pb-0">
                  <div className="rounded-lg bg-secondary p-3">
                    <Folder className="h-5 w-5" />
                  </div>
                  <div className="flex gap-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'rounded-lg p-2 text-muted-foreground',
                          'hover:bg-secondary hover:text-foreground transition-colors',
                        )}
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
                        className={cn(
                          'rounded-lg p-2 text-muted-foreground',
                          'hover:bg-secondary hover:text-foreground transition-colors',
                        )}
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="mb-2 text-lg font-semibold hover:underline">{project.title}</h3>
                  </Link>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">
                    {project.description.trim()}
                  </p>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <ul className="mb-4 space-y-1.5">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <li
                          key={metric}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        data-testid="tech-badge"
                        className={cn(
                          'inline-flex items-center rounded-md px-2 py-0.5',
                          'bg-secondary text-xs font-medium',
                          'border border-border',
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span
                        data-testid="tech-badge"
                        className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium text-muted-foreground"
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
