import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Mock next-themes
vi.mock('next-themes', async () => {
  const actual = await vi.importActual('next-themes');
  return {
    ...actual,
    useTheme: vi.fn(() => ({
      theme: 'light',
      setTheme: vi.fn(),
      resolvedTheme: 'light',
    })),
  };
});

describe('ThemeToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', () => {
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it('should have accessible label', () => {
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  it('should call setTheme when clicked', async () => {
    const mockSetTheme = vi.fn();
    const { useTheme } = await import('next-themes');
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      resolvedTheme: 'light',
      themes: ['light', 'dark'],
      systemTheme: 'light',
      forcedTheme: undefined,
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockSetTheme).toHaveBeenCalled();
  });
});
