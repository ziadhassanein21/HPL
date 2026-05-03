/**
 * TASK A2 — Next.js App Router Sitemap
 * Covers all 7 pages (P1–P7) with correct priorities and changeFrequency.
 */

const BASE_URL = 'https://hplksa.com';

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    // P1 — Homepage
    {
      url: `${BASE_URL}/ar`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // P2 — Bathroom Partitions KSA
    {
      url: `${BASE_URL}/ar/hpl-bathroom-partitions-ksa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // P3 — Lockers KSA
    {
      url: `${BASE_URL}/ar/hpl-lockers-ksa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // P4 — Shower Cubicles KSA
    {
      url: `${BASE_URL}/ar/hpl-shower-cubicles-ksa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // P5 — Phenolic Compact Laminate KSA
    {
      url: `${BASE_URL}/ar/phenolic-compact-laminate-ksa`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // P6 — HPL Partitions Jeddah (city page)
    {
      url: `${BASE_URL}/ar/hpl-partitions-jeddah`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // P7 — HPL Partitions Dammam (city page)
    {
      url: `${BASE_URL}/ar/hpl-partitions-dammam`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];
}
