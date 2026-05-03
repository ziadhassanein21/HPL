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
      // 301 redirect from /en to /ar (Arabic-only site now)
      {
        source: '/en',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/ar/:path*',
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
