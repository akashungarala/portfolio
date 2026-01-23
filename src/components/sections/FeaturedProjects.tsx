import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
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
    <section id="projects" className="container py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <Link
            href="/projects"
            className={cn(
              'inline-flex items-center gap-2 text-sm font-medium',
              'text-muted-foreground hover:text-foreground transition-colors',
            )}
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className={cn(
                'group relative flex flex-col rounded-lg border border-border/50',
                'bg-card/50 backdrop-blur-sm',
                'hover:border-border hover:bg-card transition-colors',
              )}
            >
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.description}</p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <ul className="mb-4 space-y-1">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <li
                        key={metric}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      data-testid="tech-badge"
                      className={cn(
                        'inline-flex items-center rounded-md px-2 py-1',
                        'bg-muted text-xs font-medium text-muted-foreground',
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span
                      data-testid="tech-badge"
                      className={cn(
                        'inline-flex items-center rounded-md px-2 py-1',
                        'bg-muted text-xs font-medium text-muted-foreground',
                      )}
                    >
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                {project.links && (
                  <div className="mt-4 flex gap-4 border-t border-border/50 pt-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'inline-flex items-center gap-1 text-sm',
                          'text-muted-foreground hover:text-foreground transition-colors',
                        )}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'inline-flex items-center gap-1 text-sm',
                          'text-muted-foreground hover:text-foreground transition-colors',
                        )}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
