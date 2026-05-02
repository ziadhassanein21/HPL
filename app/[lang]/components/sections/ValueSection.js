'use client';

import { memo } from 'react';

function ValueSection({ dict }) {
  const valueCards = [dict.valueProps.item1, dict.valueProps.item2, dict.valueProps.item3, dict.valueProps.item4];
  const points = dict.valueProps.points || [];

  return (
    <section className="value-section">
      <div className="container value-grid">
        <div className="value-copy reveal">
          <span className="eyebrow">{dict.valueProps.eyebrow}</span>
          <h2 className="section-title">{dict.valueProps.title}</h2>
          <p className="section-subtitle align-start">{dict.valueProps.subtitle}</p>

          <div className="value-points">
            {points.map((point, index) => (
              <div className="value-point" key={index}>
                <span className="value-dot" aria-hidden="true" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="value-cards">
          {valueCards.map((item) => (
            <article className="value-card reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ValueSection);
