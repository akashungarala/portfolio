import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { describe, expect, it } from 'vitest';
import { Header } from '@/components/layout/Header';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ThemeProvider attribute="class">{ui}</ThemeProvider>);
};

describe('Header', () => {
  it('should render the breadcrumb path', () => {
    renderWithProviders(<Header />);

    // The header now shows a breadcrumb path like ~/home
    expect(screen.getByText(/~\/home/)).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    renderWithProviders(<Header />);

    // Home appears twice (breadcrumb + nav link), so use getAllByRole
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    expect(homeLinks.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('should render the theme toggle', () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('should have proper navigation landmark', () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should have a header element', () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
