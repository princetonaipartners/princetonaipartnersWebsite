import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { SocialIcon } from '@/components/icons';
import GridPattern from '@/components/animata/background/grid-pattern';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-50 dark:bg-dark-bg-primary border-t border-neutral-200 dark:border-dark-border overflow-hidden transition-colors">
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#0A84FF_10%,#3B9FFF_15%,#0060CE_20%,#3B9FFF_25%,#0A84FF_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-20 will-change-transform
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4 group">
              <Image
                src="/logos/logo-footer-blue.png"
                alt="Princeton AI Partners"
                width={32}
                height={32}
                className="transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <SocialIcon platform="github" url={SITE_CONFIG.links.github} />
              <SocialIcon platform="linkedin" url="#" />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">Solutions</h4>
            <ul className="space-y-2">
              {NAV_LINKS.find((link) => link.title === 'Solutions')?.dropdown?.map(
                (item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-brand-primary dark:hover:text-dark-brand-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-200 dark:border-dark-border text-center">
          <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
