'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from '@/components/icons';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import Menu, { IMenu } from '@/components/ui/navbar';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

// Transform NAV_LINKS to IMenu format
const menuItems: IMenu[] = NAV_LINKS.map((link, index) => ({
  id: index + 1,
  title: link.title,
  url: link.href || '#',
  dropdown: !!link.dropdown,
  items: link.dropdown?.map((item, subIndex) => ({
    id: (index + 1) * 100 + subIndex,
    title: item.title,
    url: item.href,
  })),
}));

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logos/logo-header.png"
              alt="Princeton AI Partners"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <Menu list={menuItems} />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <InteractiveHoverButton text="Get Started" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-dark-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <Icon name="close" size={24} aria-hidden />
            ) : (
              <Icon name="menu" size={24} aria-hidden />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-screen pb-6 bg-zinc-950/95 backdrop-blur-lg rounded-xl mt-2 px-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {NAV_LINKS.map((link) => (
              <div key={link.title}>
                {link.dropdown ? (
                  <>
                    <Link
                      href={link.href || '#'}
                      className="text-dark-text-secondary hover:text-dark-brand-primary transition-colors font-medium py-2 flex items-center gap-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2 text-dark-text-tertiary hover:text-dark-brand-primary transition-colors text-sm py-1.5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Icon name={item.icon as 'layout' | 'database' | 'phone' | 'zap' | 'bot' | 'sparkles' | 'globe'} size={16} />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href || '#'}
                    className="text-dark-text-secondary hover:text-dark-brand-primary transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link href="/contact" className="block" onClick={() => setMobileMenuOpen(false)}>
                <InteractiveHoverButton text="Get Started" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
