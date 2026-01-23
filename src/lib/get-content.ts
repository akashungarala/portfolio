import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import type { ProfileContent } from './types';

let cachedContent: ProfileContent | null = null;

/**
 * Get the profile content from the YAML file.
 * Content is cached after the first read for performance.
 */
export function getProfileContent(): ProfileContent {
  if (cachedContent) {
    return cachedContent;
  }

  const contentPath = path.join(process.cwd(), 'src/content/profile.yaml');
  const fileContents = fs.readFileSync(contentPath, 'utf8');
  const content = yaml.load(fileContents) as ProfileContent;

  cachedContent = content;
  return content;
}

/**
 * Get all projects (work + personal) combined.
 */
export function getAllProjects() {
  const content = getProfileContent();
  const workProjects = content.workProjects.map((p) => ({
    ...p,
    category: 'work' as const,
  }));
  const personalProjects = content.personalProjects.map((p) => ({
    ...p,
    category: 'personal' as const,
    metrics: [] as string[],
  }));
  return [...workProjects, ...personalProjects];
}

/**
 * Get a single project by ID.
 */
export function getProjectById(id: string) {
  const projects = getAllProjects();
  return projects.find((p) => p.id === id);
}

/**
 * Get featured projects only.
 */
export function getFeaturedProjects() {
  const projects = getAllProjects();
  return projects.filter((p) => p.featured);
}
