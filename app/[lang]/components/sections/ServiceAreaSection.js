'use client';

import { memo, useMemo } from 'react';

function ServiceAreaSection({ dict }) {
  const serviceAreaItems = useMemo(() => [
    dict.serviceAreas.item1,
    dict.serviceAreas.item2,
    dict.serviceAreas.item3,
    dict.serviceAreas.item4,
  ], [dict.serviceAreas]);

  return (
    <section className="service-area-section">
      <div className="container service-area-shell reveal">
        <div className="section-heading">
          <span className="eyebrow">{dict.serviceAreas.eyebrow}</span>
          <h2 className="section-title">{dict.serviceAreas.title}</h2>
          <p className="section-subtitle">{dict.serviceAreas.subtitle}</p>
        </div>

        <div className="service-area-grid">
          {serviceAreaItems.map((item) => (
            <div className="service-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ServiceAreaSection);
