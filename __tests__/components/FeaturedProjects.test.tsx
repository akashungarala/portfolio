/**
 * FeaturedProjects Component Tests
 *
 * Tests for the featured projects section displayed on the home page.
 */
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { mockProjects } from '../fixtures/mockContent';

// Mock next/navigation for useRouter
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

describe('FeaturedProjects', () => {
  it('should render a projects section heading', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('should render featured project cards', () => {
    render(<FeaturedProjects projects={mockProjects} />);

    // Should show at least one clickable project card
    const projectCards = screen.getAllByRole('button');
    expect(projectCards.length).toBeGreaterThanOrEqual(mockProjects.length);
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

    expect(screen.getByRole('link', { name: /view all/i })).toBeInTheDocument();
  });
});
