'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@/components/icons';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { ThemeToggleSlider } from '@/components/ui/theme-toggle-slider';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-bg-primary/80 backdrop-blur-lg border-b border-neutral-100 dark:border-dark-border transition-colors">
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
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.title} className="relative group">
                {link.dropdown ? (
                  <>
                    <Link
                      href={link.href || '#'}
                      className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors font-medium flex items-center gap-1"
                    >
                      {link.title}
                      <Icon name="chevronDown" size={16} className="transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-xl border border-neutral-200 dark:border-dark-border p-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary hover:bg-neutral-50 dark:hover:bg-dark-bg-primary transition-all group/item"
                          >
                            <Icon name={item.icon as any} size={18} className="text-brand-primary dark:text-dark-brand-primary" />
                            <span className="font-medium text-sm">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href || '#'}
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors font-medium"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggleSlider />
            <Link href="/contact">
              <InteractiveHoverButton text="Get Started" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <Icon name="close" size={24} aria-hidden="true" /> : <Icon name="menu" size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {NAV_LINKS.map((link) => (
              <div key={link.title}>
                {link.dropdown ? (
                  <>
                    <Link
                      href={link.href || '#'}
                      className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors font-medium py-2 flex items-center gap-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-2 text-text-tertiary dark:text-dark-text-tertiary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors text-sm py-1.5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Icon name={item.icon as any} size={16} />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href || '#'}
                    className="text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <ThemeToggleSlider />
              <Link href="/contact" className="flex-1">
                <InteractiveHoverButton text="Get Started" className="w-full" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
