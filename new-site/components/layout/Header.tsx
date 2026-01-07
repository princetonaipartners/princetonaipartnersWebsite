'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@/components/icons';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { ThemeToggleSlider } from '@/components/ui/theme-toggle-slider';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MobileDrawer } from './MobileDrawer';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-transparent backdrop-blur-md dark:backdrop-blur-0 border-b border-neutral-100 dark:border-none transition-colors">
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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.dropdown ? (
                    <>
                      <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                          {link.dropdown.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink
                                render={
                                  <Link
                                    href={item.href}
                                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-accent dark:hover:bg-dark-bg-tertiary transition-colors"
                                  />
                                }
                              >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light dark:bg-dark-brand-light">
                                  <Icon
                                    name={item.icon}
                                    size={20}
                                    className="text-brand-primary dark:text-dark-brand-primary"
                                  />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                                    {item.title}
                                  </div>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href || '#'} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary'
                        )}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>

            <NavigationMenuPositioner>
              <NavigationMenuPopup />
            </NavigationMenuPositioner>
          </NavigationMenu>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggleSlider />
            <Link href="/contact">
              <InteractiveHoverButton text="Get Started" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-primary dark:text-dark-text-primary"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Icon name="menu" size={24} aria-hidden />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
