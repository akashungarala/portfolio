import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from '@/components/sections/About';

describe('About', () => {
  it('should render an about section heading', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  it('should render a professional summary', () => {
    render(<About />);

    // Should have content about backend engineering expertise
    expect(screen.getByText(/senior backend engineer with over 10 years/i)).toBeInTheDocument();
  });

  it('should render technical philosophy content', () => {
    render(<About />);

    // Should mention key technical values - look for the specific highlighted words
    expect(screen.getByText('reliability')).toBeInTheDocument();
    expect(screen.getByText('performance')).toBeInTheDocument();
    expect(screen.getByText('scale')).toBeInTheDocument();
  });

  it('should render current focus areas', () => {
    render(<About />);

    // Should mention distributed systems - appears in both prose and expertise list
    const elements = screen.getAllByText(/distributed systems/i);
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it('should have proper section landmark', () => {
    render(<About />);

    // Section should have an id for navigation
    const section = document.querySelector('section#about');
    expect(section).toBeInTheDocument();
  });

  it('should render core expertise section', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: /core expertise/i })).toBeInTheDocument();
  });

  it('should render technologies section', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: /technologies/i })).toBeInTheDocument();
  });
});
