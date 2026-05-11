/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ── TASK A4 — Redirects ─────────────────────────────────── */
  async redirects() {
    return [
      // 301 redirect from root / to /ar
      {
        source: '/',
        destination: '/ar',
        permanent: true,
      },
      // Redirects for old -riyadh slugs to new -ksa slugs
      {
        source: '/:lang/hpl-bathroom-partitions-riyadh',
        destination: '/:lang/hpl-bathroom-partitions-ksa',
        permanent: true,
      },
      {
        source: '/:lang/hpl-lockers-riyadh',
        destination: '/:lang/hpl-lockers-ksa',
        permanent: true,
      },
      {
        source: '/:lang/hpl-shower-cubicles-riyadh',
        destination: '/:lang/hpl-shower-cubicles-ksa',
        permanent: true,
      },
      {
        source: '/:lang/phenolic-compact-laminate-riyadh',
        destination: '/:lang/phenolic-compact-laminate-ksa',
        permanent: true,
      },
    ];
  },

  /* ── Security Headers ──────────────────────────────────── */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  /* ── Image Optimization ────────────────────────────────── */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hplksa.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hplksa.com',
      },
    ],
  },
};

export default nextConfig;
