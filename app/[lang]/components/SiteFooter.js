'use client';

import { memo } from 'react';
import Link from 'next/link';

function SiteFooter({ dict, lang }) {
  const footerLinks = dict.footer.links;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-section">
          <h3>{dict.footer.title}</h3>
          <p>{dict.footer.desc}</p>
          <div className="footer-contact-info" style={{ marginTop: '1.5rem', opacity: 0.8 }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <a href="https://maps.google.com/?q=Riyadh,+Saudi+Arabia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit', textUnderlineOffset: '4px' }}>
                {lang === 'ar' ? 'المقر الرئيسي: الرياض، المملكة العربية السعودية' : 'Headquarters: Riyadh, Saudi Arabia'}
              </a>
            </p>
          </div>
        </div>

        <div className="footer-links-section">
          <h4>{footerLinks.servicesTitle}</h4>
          <ul className="footer-links-list">
            <li>
              <Link href={`/${lang}/hpl-prices-saudi-arabia-2026`}>
                {footerLinks.prices}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/what-is-hpl-compact-phenolic-guide`}>
                {footerLinks.guide}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/hpl-vs-mdf-vs-marble-comparison-ksa`}>
                {footerLinks.comparison}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/hpl-exterior-cladding-wall-lining-ksa`}>
                {footerLinks.cladding}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/hpl-technical-specifications-submittals-ksa`}>
                {footerLinks.specs}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/hpl-cleaning-maintenance-guide-ksa`}>
                {footerLinks.maintenance}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>{dict.footer.copy}</p>
      </div>
    </footer>
  );
}

export default memo(SiteFooter);
