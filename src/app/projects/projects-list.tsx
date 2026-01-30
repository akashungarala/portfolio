'use client';

import { ExternalLink, Github } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  company?: string;
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

interface ProjectsListProps {
  workProjects: Project[];
  personalProjects: Project[];
}

export function ProjectsList({ workProjects, personalProjects }: ProjectsListProps) {
  return (
    <>
      {/* Work Projects */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Work Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {workProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      {personalProjects.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Personal Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

/**
 * Individual project card component.
 * Uses onClick navigation to avoid nested anchor tag issues.
 * External links stop propagation to prevent card navigation.
 */
function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  /** Navigate to project detail page */
  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  /** Prevent card navigation when clicking external links */
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <button
      type="button"
      onClick={handleCardClick}
      className={cn(
        'group relative flex h-full flex-col rounded-lg border border-border/50 cursor-pointer text-left',
        'bg-card/50 backdrop-blur-sm',
        'hover:border-[var(--highlight)]/50 hover:bg-card',
        'hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--highlight)]/5',
        'transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--highlight)] focus-visible:ring-offset-2',
      )}
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-[var(--highlight)] transition-colors">
              {project.title}
            </h3>
            {project.company && (
              <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">
                {project.company}
              </span>
            )}
          </div>
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-xs font-medium',
              project.category === 'work'
                ? 'bg-[var(--highlight)]/10 text-[var(--highlight)]'
                : 'bg-green-500/10 text-green-500',
            )}
          >
            {project.category}
          </span>
        </div>

        <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.description}</p>

        {/* Metrics for work projects */}
        {project.metrics && project.metrics.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.metrics.map((metric) => (
              <li key={metric} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-[var(--highlight)]" />
                {metric}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              data-testid="tech-badge"
              className={cn(
                'inline-flex items-center rounded-md px-2 py-1',
                'bg-muted text-xs font-medium text-muted-foreground',
                'group-hover:bg-[var(--highlight)]/10 group-hover:text-[var(--highlight)]',
                'transition-colors duration-200',
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External links */}
        {project.links && (
          <div className="mt-4 flex gap-4 border-t border-border/50 pt-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className={cn(
                  'inline-flex items-center gap-1 text-sm',
                  'text-muted-foreground hover:text-[var(--highlight)] transition-colors',
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
                onClick={handleLinkClick}
                className={cn(
                  'inline-flex items-center gap-1 text-sm',
                  'text-muted-foreground hover:text-[var(--highlight)] transition-colors',
                )}
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </button>
  );
}
