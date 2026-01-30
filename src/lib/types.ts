// =============================================================================
// Portfolio Content Types
// =============================================================================

export interface Social {
  github: string;
  linkedin: string;
}

export interface Headline {
  badge: string;
  tagline: string;
  highlights: string[];
}

export interface About {
  heading: string;
  intro: string;
  philosophy: string;
  currentFocus: string;
  coreValues: string[];
}

export interface Expertise {
  icon: 'server' | 'zap' | 'database' | 'cloud';
  label: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface WorkExperience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  logo?: string;
  website?: string;
  projectId?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  logo?: string;
  website?: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  company?: string;
  logo?: string;
  website?: string;
  description: string;
  longDescription: string;
  techStack: string[];
  featured: boolean;
  metrics: string[];
}

export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  featured: boolean;
  links?: ProjectLinks;
}

export interface Contact {
  heading: string;
  description: string;
  availability: string;
}

export interface ProfileContent {
  // Personal Information
  name: string;
  email: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  social: Social;

  // Hero Section
  headline: Headline;

  // About Section
  about: About;
  expertise: Expertise[];
  technologies: TechCategory[];

  // Experience
  workExperience: WorkExperience[];
  education: Education[];

  // Projects
  workProjects: WorkProject[];
  personalProjects: PersonalProject[];

  // Contact
  contact: Contact;
}
