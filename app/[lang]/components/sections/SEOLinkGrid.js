'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function SEOLinkGrid({ items, title, subtitle, eyebrow, lang, cardType = 'standard' }) {
  return (
    <section className={`${cardType === 'resource' ? 'resources-section' : 'landing-links-section'}`}>
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className={`${cardType === 'resource' ? 'resources-grid' : 'landing-links-grid'}`}>
          {items.map((item) => (
            <Link 
              className={`${cardType === 'resource' ? 'resource-card' : 'landing-link-card'} reveal`} 
              href={`/${lang}/${item.slug}`} 
              key={item.slug}
            >
              <div className={`${cardType === 'resource' ? 'resource-card-image' : 'landing-link-image'}`}>
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.shortTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="cover-image"
                  />
                )}
              </div>
              <div className={`${cardType === 'resource' ? 'resource-card-body' : 'landing-link-body'}`}>
                <h3>{item.shortTitle}</h3>
                <p>{item.heroText.substring(0, cardType === 'resource' ? 100 : 80)}...</p>
                <span className="read-more">
                  {lang === 'ar' ? (cardType === 'resource' ? 'عرض الدليل ←' : 'استعرض التفاصيل ←') : (cardType === 'resource' ? 'View Guide →' : 'View Details →')}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SEOLinkGrid);
