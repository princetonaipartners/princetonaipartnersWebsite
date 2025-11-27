import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="text-[8rem] md:text-[10rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
          404
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-zinc-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors"
          >
            View Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
