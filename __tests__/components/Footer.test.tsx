import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from '@/components/layout/Footer';

describe('Footer', () => {
  it('should render copyright text', () => {
    render(<Footer />);

    expect(screen.getByText(/akash ungarala/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(new Date().getFullYear().toString()))).toBeInTheDocument();
  });

  it('should render social links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  it('should have proper footer landmark', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render status indicator', () => {
    render(<Footer />);

    expect(screen.getByText(/status/i)).toBeInTheDocument();
  });
});
