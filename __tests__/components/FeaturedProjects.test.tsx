import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { mockProjects } from '../fixtures/mockContent';

describe('FeaturedProjects', () => {
  it('should render a projects section heading', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('should render featured project cards', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    // Should show at least one project card
    const projectCards = screen.getAllByRole('article');
    expect(projectCards.length).toBeGreaterThanOrEqual(1);
  });

  it('should display project titles', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    // Should have at least one project heading
    const projectHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(projectHeadings.length).toBeGreaterThanOrEqual(1);
  });

  it('should display tech stack badges', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    // Should have technology badges
    const badges = document.querySelectorAll('[data-testid="tech-badge"]');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('should have proper section landmark', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    const section = document.querySelector('section#projects');
    expect(section).toBeInTheDocument();
  });

  it('should render a view all projects link', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    // Changed from "View all projects" to "View all"
    expect(screen.getByRole('link', { name: /view all/i })).toBeInTheDocument();
  });
});
