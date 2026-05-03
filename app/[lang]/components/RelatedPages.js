'use client';

import Link from 'next/link';

/**
 * TASK C2 — Reusable RelatedPages component
 * Renders "صفحات ذات صلة" section at the bottom of each page.
 * Accepts currentPage slug and renders links to all other 6 pages.
 */

const allPages = {
  ar: [
    {
      slug: 'hpl-bathroom-partitions-ksa',
      name: 'قواطع حمامات HPL',
      description: 'قواطع حمامات HPL كومباكت فينوليك للمشاريع التجارية والعامة في السعودية.',
    },
    {
      slug: 'hpl-lockers-ksa',
      name: 'لوكرات HPL',
      description: 'لوكرات فينوليك لغرف تبديل الملابس والأندية والمنشآت المؤسسية.',
    },
    {
      slug: 'hpl-shower-cubicles-ksa',
      name: 'كبائن استحمام HPL',
      description: 'كبائن استحمام مقاومة للماء المباشر للأندية والمسابح والمنشآت الرياضية.',
    },
    {
      slug: 'phenolic-compact-laminate-ksa',
      name: 'ألواح فينوليك HPL',
      description: 'ألواح HPL كومباكت فينوليك للمشاريع التجارية والصناعية في السعودية.',
    },
    {
      slug: 'home',
      name: 'الصفحة الرئيسية',
      description: 'الصفحة الرئيسية لشركة NEW BASIC — قواطع وخزائن وكبائن HPL في السعودية.',
    },
  ],
  en: [
    {
      slug: 'hpl-bathroom-partitions-ksa',
      name: 'HPL Bathroom Partitions',
      description: 'Compact phenolic HPL bathroom partitions for commercial and public projects in Saudi Arabia.',
    },
    {
      slug: 'hpl-lockers-ksa',
      name: 'HPL Lockers',
      description: 'Phenolic lockers for changing rooms, clubs, and institutional facilities.',
    },
    {
      slug: 'hpl-shower-cubicles-ksa',
      name: 'HPL Shower Cubicles',
      description: 'Water-resistant shower cubicles for clubs, pools, and sports facilities.',
    },
    {
      slug: 'phenolic-compact-laminate-ksa',
      name: 'HPL Phenolic Panels',
      description: 'Compact phenolic HPL panels for commercial and industrial projects in Saudi Arabia.',
    },
    {
      slug: 'home',
      name: 'Home Page',
      description: 'Home page of NEW BASIC — HPL partitions, lockers, and cubicles in Saudi Arabia.',
    },
  ],
};

export default function RelatedPages({ currentPage, lang = 'ar' }) {
  const pages = allPages[lang] || allPages.ar;
  const filteredPages = pages.filter((page) => page.slug !== currentPage);

  return (
    <section className="seo-related-section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          {lang === 'ar' ? 'صفحات ذات صلة' : 'Related Pages'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filteredPages.map((page) => (
            <Link
              href={page.slug === 'home' ? `/${lang}` : `/${lang}/${page.slug}`}
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
