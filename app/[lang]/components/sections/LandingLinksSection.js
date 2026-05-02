'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getSeoPages } from '../../../../lib/seo-pages';

function LandingLinksSection({ dict, lang }) {
  const seoPages = getSeoPages(lang);

  return (
    <section className="landing-links-section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.landingLinks?.eyebrow || (lang === 'ar' ? 'دليل المشاريع' : 'Project Guides')}</span>
          <h2 className="section-title">{dict.landingLinks?.title || (lang === 'ar' ? 'تعرف على المزيد حول حلولنا' : 'Learn More About Our Solutions')}</h2>
          <p className="section-subtitle">{dict.landingLinks?.subtitle || ''}</p>
        </div>

        <div className="landing-links-grid">
          {seoPages.map((item) => (
            <Link className="landing-link-card reveal" href={`/${lang}/${item.slug}`} key={item.slug}>
              {item.image && (
                <div className="landing-link-image">
                  <Image
                    src={item.image}
                    alt={item.shortTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="cover-image"
                  />
                </div>
              )}
              <div className="landing-link-body">
                <h3>{item.shortTitle}</h3>
                <p>{item.heroText.substring(0, 80)}...</p>
                <span className="read-more">{lang === 'ar' ? 'اقرأ المزيد ←' : 'Read More →'}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(LandingLinksSection);
