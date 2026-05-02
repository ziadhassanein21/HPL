'use client';

import { memo } from 'react';

function TestimonialsSection({ dict }) {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="section-title">{dict.title}</h2>
          <p className="section-subtitle">{dict.subtitle}</p>
        </div>

        <div className="testimonials-grid">
          {dict.items.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <div className="testimonial-stars" aria-label={`${item.rating} stars`}>
                {'★'.repeat(item.rating)}
              </div>
              <blockquote className="testimonial-text">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <strong className="testimonial-name">{item.name}</strong>
                  <span className="testimonial-role">{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
