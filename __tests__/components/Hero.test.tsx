import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from '@/components/sections/Hero';

describe('Hero', () => {
  it('should render the name', () => {
    render(<Hero />);

    expect(screen.getByText(/akash ungarala/i)).toBeInTheDocument();
  });

  it('should render the title', () => {
    render(<Hero />);

    expect(screen.getByText(/senior backend engineer/i)).toBeInTheDocument();
  });

  it('should render a tagline', () => {
    render(<Hero />);

    // Should have some descriptive text about what they do
    expect(screen.getByText(/distributed systems/i)).toBeInTheDocument();
  });

  it('should render a primary CTA button', () => {
    render(<Hero />);

    // Looking for the primary call-to-action
    const cta = screen.getByRole('link', { name: /view my work/i });
    expect(cta).toBeInTheDocument();
  });

  it('should render a resume download link', () => {
    render(<Hero />);

    const resumeLink = screen.getByRole('link', { name: /download resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
  });

  it('should have proper heading hierarchy', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
