'use client';

import { memo } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { siteConfig } from '@/lib/site';

function SiteFooter({ dict, lang }) {
  const footerLinks = dict.footer.links;

  const trackSocial = (platform) => {
    trackEvent({
      action: 'social_click',
      category: 'Social',
      label: platform
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-section">
          <h3>{dict.footer.title}</h3>
          <p>{dict.footer.desc}</p>
          <div className="social-links" style={{ display: 'flex', gap: '1.25rem', marginTop: '1.5rem', alignItems: 'center' }}>
            <a href="https://www.tiktok.com/@newbasic..hpl?_r=1&_t=ZS-96BfcLSzgc0" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8} onClick={() => trackSocial('tiktok')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ overflow: 'visible' }}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/newbasic_hpl?igsh=MTZqZmoyNzkxNTJzMg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8} onClick={() => trackSocial('instagram')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href={siteConfig.youtubeUrl || "https://youtube.com/@newbasichpl?si=1h1N6RGUT8GLgN9d"} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8} onClick={() => trackSocial('youtube')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ overflow: 'visible' }}>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-section">
          <h4>{footerLinks.servicesTitle}</h4>
          <ul className="footer-links-list">
            <li>
              <Link href={`/${lang}/hpl-bathroom-partitions-ksa`}>
                {footerLinks.partitions}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/hpl-lockers-ksa`}>
                {footerLinks.lockers}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/hpl-shower-cubicles-ksa`}>
                {footerLinks.cubicles}
              </Link>
            </li>
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
            {footerLinks.maintenance && (
              <li>
                <Link href={`/${lang}/hpl-cleaning-maintenance-guide-ksa`}>
                  {footerLinks.maintenance}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="footer-contact-section" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text)' }}>
            {lang === 'ar' ? 'تواصل معنا' : 'Contact'}
          </h4>
          <div className="footer-contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', opacity: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ marginTop: '2px', flexShrink: 0, color: 'var(--gold)' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', lineHeight: 1.6, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--gold)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                <strong style={{ display: 'block', fontWeight: 600, marginBottom: '2px', fontSize: '0.95rem' }}>
                  {lang === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}
                </strong>
                <span style={{ fontSize: '0.9rem' }}>
                  {lang === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                </span>
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ marginTop: '2px', flexShrink: 0, color: 'var(--gold)' }}>
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div style={{ lineHeight: 1.6 }}>
                <strong style={{ display: 'block', fontWeight: 600, marginBottom: '2px', fontSize: '0.95rem' }}>
                  {dict.contact?.locationLabel || (lang === 'ar' ? 'نخدم المشاريع في' : 'We serve')}
                </strong>
                <span style={{ fontSize: '0.9rem' }}>
                  {dict.contact?.location || (lang === 'ar' ? 'الرياض، جدة، الدمام، الخبر، وكافة مدن المملكة' : 'Riyadh, Jeddah, Dammam, Khobar, and across KSA')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>{dict.footer.copy}</p>
      </div>
    </footer>
  );
}

export default memo(SiteFooter);
