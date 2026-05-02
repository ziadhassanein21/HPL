'use client';

import { memo } from 'react';

function ProcessSection({ dict }) {
  const processSteps = [
    { step: '01', title: dict.s1_title, description: dict.s1_desc },
    { step: '02', title: dict.s2_title, description: dict.s2_desc },
    { step: '03', title: dict.s3_title, description: dict.s3_desc },
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">{dict.subtitle}</p>
        </div>

        <div className="process-grid">
          {processSteps.map((item) => (
            <article className="process-card reveal" key={item.step}>
              <div className="step-number" aria-hidden="true">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProcessSection);
