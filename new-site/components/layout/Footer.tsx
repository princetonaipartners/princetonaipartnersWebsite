import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { SocialIcon } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-transparent border-t border-white/10 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
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
            <p className="text-sm text-text-secondary dark:text-zinc-400 mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <SocialIcon platform="github" url={SITE_CONFIG.links.github} />
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-text-primary dark:text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              {NAV_LINKS.find((link) => link.title === 'Solutions')?.dropdown?.map(
                (item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary dark:text-zinc-400 hover:text-brand-primary dark:hover:text-white transition-colors"
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
            <h4 className="font-semibold text-text-primary dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary dark:text-zinc-400 hover:text-brand-primary dark:hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-sm text-text-secondary dark:text-zinc-400 hover:text-brand-primary dark:hover:text-white transition-colors"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary dark:text-zinc-400 hover:text-brand-primary dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-secondary dark:text-zinc-400 hover:text-brand-primary dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-text-secondary dark:text-zinc-400 hover:text-brand-primary dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 dark:border-white/5 text-center">
          <p className="text-sm text-text-tertiary dark:text-zinc-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
