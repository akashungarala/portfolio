import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Contact } from '@/components/sections/Contact';
import { mockContent } from '../fixtures/mockContent';

describe('Contact', () => {
  it('should render a contact section heading', () => {
    render(<Contact content={mockContent} />);

    expect(screen.getByRole('heading', { name: /work together/i })).toBeInTheDocument();
  });

  it('should render contact information', () => {
    render(<Contact content={mockContent} />);

    // Should show email address - use getAllByText since 'email' appears multiple times
    const emailElements = screen.getAllByText(/akash\.ungarala@gmail\.com/i);
    expect(emailElements.length).toBeGreaterThanOrEqual(1);
  });

  it('should render social links', () => {
    render(<Contact content={mockContent} />);

    // Should have links to social profiles
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  it('should render a contact form', () => {
    render(<Contact content={mockContent} />);

    // Should have form inputs - use role queries to avoid aria-label conflicts
    expect(screen.getByRole('textbox', { name: /^name$/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /^email$/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /^message$/i })).toBeInTheDocument();
  });

  it('should have a submit button', () => {
    render(<Contact content={mockContent} />);

    expect(screen.getByRole('button', { name: /send|submit/i })).toBeInTheDocument();
  });

  it('should have proper section landmark', () => {
    render(<Contact content={mockContent} />);

    const section = document.querySelector('section#contact');
    expect(section).toBeInTheDocument();
  });
});
