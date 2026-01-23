import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from '@/components/sections/About';
import { mockContent } from '../fixtures/mockContent';

describe('About', () => {
  it('should render an about section heading', () => {
    render(<About content={mockContent} />);

    expect(
      screen.getByRole('heading', { name: /building systems that scale with confidence/i }),
    ).toBeInTheDocument();
  });

  it('should render a professional summary', () => {
    render(<About content={mockContent} />);

    // Should have content about backend engineering expertise
    expect(screen.getByText(/10 years of experience/i)).toBeInTheDocument();
  });

  it('should render technical philosophy content', () => {
    render(<About content={mockContent} />);

    // Should mention key technical values - use getAllByText since words appear multiple times
    expect(screen.getAllByText(/reliability/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/performance/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/scale/i).length).toBeGreaterThanOrEqual(1);
  });

  it('should render current focus areas', () => {
    render(<About content={mockContent} />);

    // Should mention distributed systems
    const elements = screen.getAllByText(/distributed systems/i);
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it('should have proper section landmark', () => {
    render(<About content={mockContent} />);

    // Section should have an id for navigation
    const section = document.querySelector('section#about');
    expect(section).toBeInTheDocument();
  });

  it('should render core expertise section', () => {
    render(<About content={mockContent} />);

    expect(screen.getByRole('heading', { name: /core expertise/i })).toBeInTheDocument();
  });

  it('should render technologies section', () => {
    render(<About content={mockContent} />);

    expect(screen.getByRole('heading', { name: /tech stack/i })).toBeInTheDocument();
  });
});
