/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Redirects for SEO
  async redirects() {
    return [
      // Redirect www to non-www (canonical consistency)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.princeton-ai.com',
          },
        ],
        destination: 'https://princeton-ai.com/:path*',
        permanent: true,
      },
      // Redirect old .html pages (404 fixes)
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/playground.html',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/AutoPosting.html',
        destination: '/solutions/process-automation',
        permanent: true,
      },
      {
        source: '/websitemanagement.html',
        destination: '/solutions/web-development',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
