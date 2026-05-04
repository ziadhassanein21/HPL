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
