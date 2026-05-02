'use client';

import { memo } from 'react';
import { siteConfig } from '../../../../lib/site';

function CtaBandSection({ dict }) {
  return (
    <section className="cta-band-section">
      <div className="container">
        <div className="cta-band reveal">
          <div className="cta-band-copy">
            <span className="eyebrow">{dict.ctaBand.eyebrow}</span>
            <h2>{dict.ctaBand.title}</h2>
            <p>{dict.ctaBand.text}</p>
          </div>
          <div className="cta-band-actions">
            <a href="#contact" className="btn btn-primary">{dict.ctaBand.primary}</a>
            <a href={`https://wa.me/${siteConfig.whatsappRaw}`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              {dict.ctaBand.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CtaBandSection);
