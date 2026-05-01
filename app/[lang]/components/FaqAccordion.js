'use client';

import { useState } from 'react';

export default function FaqAccordion({ faqs }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="faq-grid">
      <div className="faq-accordion">
        {faqs.map((faq, index) => {
          const isActive = activeFaq === index;
          return (
            <div className={`faq-item ${isActive ? 'active' : ''}`} key={index}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setActiveFaq(isActive ? null : index)}
                aria-expanded={isActive}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
