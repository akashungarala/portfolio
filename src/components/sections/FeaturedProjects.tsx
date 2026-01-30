/**
 * Featured Projects Section
 *
 * Displays a curated list of featured projects on the home page.
 * Each project card is clickable and navigates to the project detail page.
 * External links (GitHub, Live) open in new tabs without triggering navigation.
 *
 * @module components/sections/FeaturedProjects
 */
'use client';

import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  company?: string;
  website?: string;
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

/**
 * Main FeaturedProjects section component.
 * Renders a list of featured project cards with navigation.
 */
export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--highlight)]">
                Portfolio
              </p>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className={cn(
                'group inline-flex items-center gap-1.5 text-sm',
                'text-muted-foreground hover:text-[var(--highlight)] transition-colors',
              )}
            >
              View all
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
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
        'group rounded-lg border border-border/50 bg-card/50 p-5 cursor-pointer text-left w-full',
        'hover:border-[var(--highlight)]/50 hover:bg-card',
        'hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--highlight)]/5',
        'transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--highlight)] focus-visible:ring-offset-2',
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-medium group-hover:text-[var(--highlight)] transition-colors underline-offset-4">
            {project.title}
          </h3>
          {project.company && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors"
            >
              {project.company}
            </a>
          )}
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className={cn(
                'p-1.5 text-muted-foreground rounded-md',
                'hover:text-[var(--highlight)] hover:bg-[var(--highlight)]/10',
                'transition-all duration-200',
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
              onClick={handleLinkClick}
              className={cn(
                'p-1.5 text-muted-foreground rounded-md',
                'hover:text-[var(--highlight)] hover:bg-[var(--highlight)]/10',
                'transition-all duration-200',
              )}
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

      {/* Metrics for work projects */}
      {project.metrics && project.metrics.length > 0 && (
        <ul className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
          {project.metrics.slice(0, 3).map((metric) => (
            <li key={metric} className="text-xs text-[var(--highlight)]/70">
              • {metric}
            </li>
          ))}
        </ul>
      )}

      {/* Tech Stack badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            data-testid="tech-badge"
            className={cn(
              'inline-flex items-center rounded px-2 py-0.5 bg-muted/50 text-xs font-mono',
              'group-hover:bg-[var(--highlight)]/10 group-hover:text-[var(--highlight)]',
              'transition-colors duration-200',
            )}
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
    </button>
  );
}
