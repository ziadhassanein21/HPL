'use client';

import Link from 'next/link';
import { getSeoPages } from '../../../lib/seo-pages';

export default function RelatedPages({ currentPage, lang = 'ar' }) {
  const pages = getSeoPages(lang).filter((page) => page.slug !== currentPage);
  const primaryPages = pages.slice(0, 8);

  return (
    <section className="seo-related-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{lang === 'ar' ? 'روابط داخلية' : 'Internal Links'}</span>
          <h2 className="section-title">{lang === 'ar' ? 'صفحات ذات صلة بمشروعك' : 'Related Pages'}</h2>
        </div>
        <div className="landing-links-grid">
          {primaryPages.map((page) => (
            <Link className="landing-link-card seo-related-card" href={`/${lang}/${page.slug}`} key={page.slug}>
              <div className="landing-link-body">
                <h3>{page.shortTitle}</h3>
                <p>{page.metaDescription}</p>
                <span className="read-more">{lang === 'ar' ? 'اطلع على التفاصيل' : 'View details'}</span>
              </div>
            </Link>
          ))}
          <Link className="landing-link-card seo-related-card" href={`/${lang}`}>
            <div className="landing-link-body">
              <h3>{lang === 'ar' ? 'حلول HPL في السعودية' : 'HPL Solutions in Saudi Arabia'}</h3>
              <p>{lang === 'ar' ? 'الصفحة الرئيسية لخدمات قواطع الحمامات واللوكرات وكبائن الاستحمام HPL.' : 'Main page for HPL partitions, lockers, and shower cubicle solutions.'}</p>
              <span className="read-more">{lang === 'ar' ? 'العودة للرئيسية' : 'Back home'}</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
