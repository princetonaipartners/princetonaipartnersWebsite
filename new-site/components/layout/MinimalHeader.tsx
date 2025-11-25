'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';

export function MinimalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      <div className="p-4 sm:p-6">
        {/* Logo - floating with glow */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 group pointer-events-auto"
        >
          <div className="relative">
            <Image
              src="/logos/logo-header.png"
              alt={SITE_CONFIG.name}
              width={40}
              height={40}
              className="transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              priority
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent transition-opacity group-hover:opacity-80">
            Princeton AI
          </span>
        </Link>
      </div>
    </header>
  );
}
