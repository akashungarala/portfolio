import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Contact } from '@/components/sections/Contact';

describe('Contact', () => {
  it('should render a contact section heading', () => {
    render(<Contact />);

    expect(screen.getByRole('heading', { name: /contact|get in touch/i })).toBeInTheDocument();
  });

  it('should render contact information', () => {
    render(<Contact />);

    // Should show email address - use getAllByText since 'email' appears multiple times
    const emailElements = screen.getAllByText(/akash\.ungarala@gmail\.com/i);
    expect(emailElements.length).toBeGreaterThanOrEqual(1);
  });

  it('should render social links', () => {
    render(<Contact />);

    // Should have links to social profiles
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  it('should render a contact form', () => {
    render(<Contact />);

    // Should have form inputs - use role queries to avoid aria-label conflicts
    expect(screen.getByRole('textbox', { name: /^name$/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /^email$/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /^message$/i })).toBeInTheDocument();
  });

  it('should have a submit button', () => {
    render(<Contact />);

    expect(screen.getByRole('button', { name: /send|submit/i })).toBeInTheDocument();
  });

  it('should have proper section landmark', () => {
    render(<Contact />);

    const section = document.querySelector('section#contact');
    expect(section).toBeInTheDocument();
  });
});
