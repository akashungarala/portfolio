import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectById } from '@/lib/get-content';
import { cn } from '@/lib/utils';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Formats project description with highlighted Challenge/Solution/Impact sections
 */
function FormattedDescription({ text }: { text: string }) {
  const sections = ['Challenge:', 'Solution:', 'Impact:'];
  const hasStructuredFormat = sections.some((section) => text.includes(section));

  if (!hasStructuredFormat) {
    return <p className="text-lg text-muted-foreground leading-relaxed">{text}</p>;
  }

  // Split by section headers while keeping the headers
  const parts = text.split(/(Challenge:|Solution:|Impact:)/).filter(Boolean);

  const formatted: { label: string; content: string }[] = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (sections.includes(part)) {
      const content = parts[i + 1]?.trim() || '';
      formatted.push({ label: part.replace(':', ''), content });
      i++; // Skip the content part in next iteration
    }
  }

  return (
    <>
      {formatted.map(({ label, content }) => (
        <div key={label} className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--highlight)]">{label}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">{content}</p>
        </div>
      ))}
    </>
  );
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Akash Ungarala`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const links = 'links' in project ? project.links : null;

  return (
    <main className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className={cn(
            'inline-flex items-center gap-2 mb-8',
            'text-sm font-medium text-muted-foreground',
            'hover:text-foreground transition-colors',
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={cn(
                'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
                project.category === 'work'
                  ? 'bg-primary/10 text-primary'
                  : 'bg-green-500/10 text-green-600 dark:text-green-400',
              )}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400">
                Featured
              </span>
            )}
            {'company' in project && project.company && (
              <a
                href={'website' in project ? project.website : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors"
              >
                {project.company}
              </a>
            )}
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{project.title}</h1>

          <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        {/* Links */}
        {links && (
          <div className="flex flex-wrap gap-3 mb-12">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
                  'bg-muted/50 text-foreground font-medium',
                  'hover:bg-muted transition-colors',
                )}
              >
                <Github className="h-4 w-4" />
                View Source
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
                  'gradient-bg text-white font-medium',
                  'hover:opacity-90 transition-opacity',
                )}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        )}

        {/* Content */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="space-y-6">
              <FormattedDescription text={project.longDescription} />
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    'px-3 py-1.5 rounded-lg',
                    'bg-primary/5 border border-primary/20',
                    'text-sm font-medium text-foreground',
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
              <ul className="space-y-3">
                {project.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-lg">{metric}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Interested in discussing this project or similar work?
          </p>
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center justify-center',
              'rounded-lg px-6 py-3',
              'bg-foreground text-background font-semibold',
              'shadow-lg shadow-foreground/20',
              'hover:bg-[var(--highlight)] hover:shadow-xl hover:shadow-[var(--highlight)]/30',
              'transition-all duration-300',
            )}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
