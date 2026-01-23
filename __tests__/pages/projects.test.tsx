import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectsPage from '@/app/projects/page';

describe('Projects Page', () => {
  it('should render a page heading', () => {
    render(<ProjectsPage />);

    // Use level: 1 to get the main h1 heading
    expect(screen.getByRole('heading', { level: 1, name: /projects/i })).toBeInTheDocument();
  });

  it('should display all projects', () => {
    render(<ProjectsPage />);

    // Should show project cards
    const projectCards = screen.getAllByRole('article');
    expect(projectCards.length).toBeGreaterThanOrEqual(1);
  });

  it('should display project titles', () => {
    render(<ProjectsPage />);

    // Check for at least one known project - use getAllByText since multiple projects exist
    const projects = screen.getAllByText(/captionexchange|slo monitoring|real-time bidding/i);
    expect(projects.length).toBeGreaterThanOrEqual(1);
  });

  it('should display tech stack badges', () => {
    render(<ProjectsPage />);

    const badges = document.querySelectorAll('[data-testid="tech-badge"]');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('should have work and personal sections', () => {
    render(<ProjectsPage />);

    // Should have section headings for work and personal
    expect(screen.getByRole('heading', { name: /work projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /personal projects/i })).toBeInTheDocument();
  });
});
