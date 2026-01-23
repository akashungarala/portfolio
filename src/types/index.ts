/**
 * Personal information displayed in hero and contact sections
 */
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}

/**
 * Work experience entry
 */
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  tech?: string[];
}

/**
 * Education entry
 */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  honors?: string;
}

/**
 * Project entry
 */
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  featured: boolean;
  links?: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  image?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

/**
 * Skill category
 */
export interface SkillCategory {
  category: string;
  skills: string[];
}

/**
 * GitHub commit from API
 */
export interface GitHubCommit {
  sha: string;
  message: string;
  date: string;
  repo: string;
  url: string;
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * System status response
 */
export interface SystemStatus {
  status: 'operational' | 'degraded' | 'down';
  checks: {
    github: { status: 'ok' | 'error'; latency_ms?: number };
    email: { status: 'ok' | 'error' };
    build: { version: string; timestamp: string };
  };
}
