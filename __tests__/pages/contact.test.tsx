import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactPage from '@/app/contact/page';

describe('Contact Page', () => {
  it('should render a page heading', () => {
    render(<ContactPage />);

    // Contact section uses h2 as the main heading
    expect(screen.getByRole('heading', { name: /build something together/i })).toBeInTheDocument();
  });

  it('should render the contact form', () => {
    render(<ContactPage />);

    // Should have form inputs
    expect(screen.getByRole('textbox', { name: /^name$/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /^email$/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /^message$/i })).toBeInTheDocument();
  });

  it('should render social links', () => {
    render(<ContactPage />);

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  it('should have a submit button', () => {
    render(<ContactPage />);

    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });
});
