/**
 * Projects Page
 *
 * Displays all projects organized by category (work/personal).
 * Each project card is clickable and links to the project detail page.
 *
 * @see src/content/profile.yaml for project data
 */
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/get-content';
import { ProjectsList } from './projects-list';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of projects I have worked on throughout my career, from large-scale distributed systems to personal experiments.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const workProjects = projects.filter((p) => p.category === 'work');
  const personalProjects = projects.filter((p) => p.category === 'personal');

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mb-12 text-muted-foreground leading-relaxed">
          A collection of projects I&apos;ve worked on throughout my career, from large-scale
          distributed systems to personal experiments.
        </p>

        <ProjectsList workProjects={workProjects} personalProjects={personalProjects} />
      </div>
    </div>
  );
}
