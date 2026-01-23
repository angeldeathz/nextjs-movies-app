/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';

import Header from './Header';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Header', () => {
  it('should render the header component', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should display the TMDB logo and brand', () => {
    render(<Header />);
    const brandText = screen.getByText('TMDB');
    expect(brandText).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Header />);

    const peliculasLink = screen.getByRole('link', { name: /películas/i });
    const seriesLink = screen.getByRole('link', { name: /series/i });

    expect(peliculasLink).toBeInTheDocument();
    expect(seriesLink).toBeInTheDocument();
  });

  it('should have correct href for Películas link', () => {
    render(<Header />);
    const peliculasLink = screen.getByRole('link', { name: /películas/i });
    expect(peliculasLink).toHaveAttribute('href', '/');
  });

  it('should have correct href for Series link', () => {
    render(<Header />);
    const seriesLink = screen.getByRole('link', { name: /series/i });
    expect(seriesLink).toHaveAttribute('href', '/series');
  });

  it('should render additional navigation items (Gente and Más)', () => {
    render(<Header />);

    const genteLink = screen.getByRole('link', { name: /gente/i });
    const masLink = screen.getByRole('link', { name: /más/i });

    expect(genteLink).toBeInTheDocument();
    expect(masLink).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    render(<Header />);

    const languageButton = screen.getByRole('button', { name: /es/i });
    expect(languageButton).toBeInTheDocument();

    const addButton = screen.getByText('+').closest('button');
    expect(addButton).toBeInTheDocument();
  });

  it('should render icon buttons (notifications and search)', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBeGreaterThan(2);
  });

  it('should have correct CSS classes for styling', () => {
    render(<Header />);
    const header = screen.getByRole('banner');

    expect(header).toHaveClass('bg-[#032541]');
    expect(header).toHaveClass('text-white');
  });

  it('should render the brand dot indicator', () => {
    render(<Header />);
    const brandDot = document.querySelector('.bg-\\[\\#01b4e4\\]');
    expect(brandDot).toBeInTheDocument();
  });

  it('should have responsive navigation (hidden on mobile)', () => {
    render(<Header />);
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('hidden');
    expect(nav).toHaveClass('md:flex');
  });
});
