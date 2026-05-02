'use client';

import { memo } from 'react';

function SpecsSection({ dict }) {
  const specificationItems = [
    dict.item1,
    dict.item2,
    dict.item3,
    dict.item4,
    dict.item5,
    dict.item6,
  ];

  return (
    <section className="specs-section" id="specs">
      <div className="container specs-shell">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">{dict.subtitle}</p>
        </div>

        <div className="specs-grid">
          {specificationItems.map((item) => (
            <article className="spec-card reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SpecsSection);
