import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from '@/components/sections/Hero';
import { mockContent } from '../fixtures/mockContent';

describe('Hero', () => {
  it('should render the name', () => {
    render(<Hero content={mockContent} />);

    expect(screen.getByText(/akash ungarala/i)).toBeInTheDocument();
  });

  it('should render the title', () => {
    render(<Hero content={mockContent} />);

    // Title is rendered in a paragraph element with specific styling
    const titles = screen.getAllByText(/senior software engineer/i);
    expect(titles.length).toBeGreaterThan(0);
  });

  it('should render a tagline', () => {
    render(<Hero content={mockContent} />);

    // Should have some descriptive text about what they do
    expect(screen.getByText(/distributed systems/i)).toBeInTheDocument();
  });

  it('should render a primary CTA button', () => {
    render(<Hero content={mockContent} />);

    // Looking for the primary call-to-action
    const cta = screen.getByRole('link', { name: /view my work/i });
    expect(cta).toBeInTheDocument();
  });

  it('should not render a resume link in hero (moved to navbar)', () => {
    render(<Hero content={mockContent} />);

    // Resume link has been moved to the navbar, so it shouldn't be in Hero anymore
    const resumeLinks = screen.queryAllByRole('link', { name: /resume/i });
    expect(resumeLinks).toHaveLength(0);
  });

  it('should have proper heading hierarchy', () => {
    render(<Hero content={mockContent} />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
