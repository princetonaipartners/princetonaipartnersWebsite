/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    // Tree-shake these packages for smaller bundle
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@tabler/icons-react',
      '@radix-ui/react-icons',
    ],
  },

  // Cache headers for static assets (Vercel edge caching)
  async headers() {
    return [
      {
        // Cache static assets for 1 year (immutable)
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|woff|woff2|ttf|eot|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache JS/CSS chunks for 1 year (content-hashed by Next.js)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
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

// Optional: Bundle analyzer (run with ANALYZE=true npm run build)
const withBundleAnalyzer = process.env.ANALYZE === 'true'
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

module.exports = withBundleAnalyzer(nextConfig);
