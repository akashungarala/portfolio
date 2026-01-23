import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Experience } from '@/components/sections/Experience';
import { mockContent } from '../fixtures/mockContent';

describe('Experience', () => {
  it('should render an experience section heading', () => {
    render(<Experience content={mockContent} />);

    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  });

  it('should render work and education tabs', () => {
    render(<Experience content={mockContent} />);

    expect(screen.getByRole('tab', { name: /work/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /education/i })).toBeInTheDocument();
  });

  it('should show work experience by default', () => {
    render(<Experience content={mockContent} />);

    // Work tab should be selected by default
    const workTab = screen.getByRole('tab', { name: /work/i });
    expect(workTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should display work experience items', () => {
    render(<Experience content={mockContent} />);

    // Should show at least one company name
    const companies = screen.getAllByText(/fox|fidelity|niantic|adara|infosys/i);
    expect(companies.length).toBeGreaterThanOrEqual(1);
  });

  it('should switch to education tab when clicked', async () => {
    const user = userEvent.setup();
    render(<Experience content={mockContent} />);

    const educationTab = screen.getByRole('tab', { name: /education/i });
    await user.click(educationTab);

    expect(educationTab).toHaveAttribute('aria-selected', 'true');
  });

  it('should display education items when education tab is active', async () => {
    const user = userEvent.setup();
    render(<Experience content={mockContent} />);

    const educationTab = screen.getByRole('tab', { name: /education/i });
    await user.click(educationTab);

    // Should show education-related content
    const educationItems = screen.getAllByText(/university|bachelor|master|degree/i);
    expect(educationItems.length).toBeGreaterThanOrEqual(1);
  });

  it('should have proper section landmark', () => {
    render(<Experience content={mockContent} />);

    const section = document.querySelector('section#experience');
    expect(section).toBeInTheDocument();
  });
});
