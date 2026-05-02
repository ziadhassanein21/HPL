'use client';

import { memo } from 'react';

function TrustSection({ dict }) {
  return (
    <section className="trust-strip">
      <div className="container trust-grid reveal">
        <p>{dict.title}</p>
        <div className="trust-items">
          <span>★ {dict.item1}</span>
          <span>⚡ {dict.item2}</span>
          <span>🛡️ {dict.item3}</span>
          <span>✓ {dict.item4}</span>
        </div>
      </div>
    </section>
  );
}

export default memo(TrustSection);
