'use client';

import Link from 'next/link';

/**
 * TASK C2 — Reusable RelatedPages component
 * Renders "صفحات ذات صلة" section at the bottom of each page.
 * Accepts currentPage slug and renders links to all other 6 pages.
 */

const allPages = [
  {
    slug: 'hpl-bathroom-partitions-ksa',
    href: '/ar/hpl-bathroom-partitions-ksa',
    name: 'قواطع حمامات HPL',
    description: 'قواطع حمامات HPL كومباكت فينوليك للمشاريع التجارية والعامة في السعودية.',
  },
  {
    slug: 'hpl-lockers-ksa',
    href: '/ar/hpl-lockers-ksa',
    name: 'لوكرات HPL',
    description: 'لوكرات فينوليك لغرف تبديل الملابس والأندية والمنشآت المؤسسية.',
  },
  {
    slug: 'hpl-shower-cubicles-ksa',
    href: '/ar/hpl-shower-cubicles-ksa',
    name: 'كبائن استحمام HPL',
    description: 'كبائن استحمام مقاومة للماء المباشر للأندية والمسابح والمنشآت الرياضية.',
  },
  {
    slug: 'phenolic-compact-laminate-ksa',
    href: '/ar/phenolic-compact-laminate-ksa',
    name: 'ألواح فينوليك HPL',
    description: 'ألواح HPL كومباكت فينوليك للمشاريع التجارية والصناعية في السعودية.',
  },
  {
    slug: 'hpl-partitions-jeddah',
    href: '/ar/hpl-partitions-jeddah',
    name: 'قواطع HPL جدة',
    description: 'توريد وتركيب قواطع حمامات HPL في جدة ومنطقة مكة المكرمة.',
  },
  {
    slug: 'hpl-partitions-dammam',
    href: '/ar/hpl-partitions-dammam',
    name: 'قواطع HPL الدمام',
    description: 'توريد وتركيب قواطع حمامات HPL في الدمام والمنطقة الشرقية.',
  },
  {
    slug: 'home',
    href: '/ar',
    name: 'الصفحة الرئيسية',
    description: 'الصفحة الرئيسية لشركة NEW BASIC — قواطع وخزائن وكبائن HPL في السعودية.',
  },
];

export default function RelatedPages({ currentPage }) {
  const filteredPages = allPages.filter((page) => page.slug !== currentPage);

  return (
    <section className="seo-related-section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          صفحات ذات صلة
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filteredPages.map((page) => (
            <Link
              href={page.href}
              key={page.slug}
              style={{
                display: 'block',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid var(--border, rgba(255,255,255,0.1))',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s',
              }}
            >
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{page.name}</strong>
              <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>{page.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
