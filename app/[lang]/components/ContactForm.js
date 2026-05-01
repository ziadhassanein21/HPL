'use client';

import { useState } from 'react';
import { siteConfig } from '../../../lib/site';

export default function ContactForm({ dict }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.target;
    const formDataObj = Object.fromEntries(new FormData(form));
    
    // Ensure the payload matches the backend expectations based on previous implementation
    const payload = {
      name: formDataObj['name'],
      phone: formDataObj['phone'],
      projectType: formDataObj['project-type'],
      details: formDataObj['project-details'],
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();

        const waMessage = encodeURIComponent(
          `New inquiry from website:\n\nName: ${payload.name}\nPhone: ${payload.phone}\nProject: ${payload.projectType}\nDetails: ${payload.details}`
        );
        window.open(`https://wa.me/${siteConfig.phoneRaw.replace(/\+/g, '')}?text=${waMessage}`, '_blank');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form-card">
        <div className="success-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3>{dict.contact.successTitle}</h3>
          <p>{dict.contact.successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <h3>{dict.contact.formTitle}</h3>
      <p>{dict.contact.formSubtitle}</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{dict.contact.nameLabel}</label>
          <input type="text" id="name" name="name" required placeholder={dict.contact.namePlaceholder} disabled={submitting} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">{dict.contact.phoneLabel}</label>
          <input type="tel" id="phone" name="phone" required placeholder={dict.contact.phonePlaceholder} disabled={submitting} dir="ltr" />
        </div>

        <div className="form-group">
          <label htmlFor="project-type">{dict.contact.projectTypeLabel}</label>
          <select id="project-type" name="project-type" required disabled={submitting}>
            <option value="">{dict.contact.projectTypeSelect}</option>
            <option value="bathroom-partitions">{dict.contact.optionPartitions}</option>
            <option value="lockers">{dict.contact.optionLockers}</option>
            <option value="shower-cubicles">{dict.contact.optionShowers}</option>
            <option value="other">{dict.contact.optionOther}</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="project-details">{dict.contact.detailsLabel}</label>
          <textarea
            id="project-details"
            name="project-details"
            rows="4"
            placeholder={dict.contact.detailsPlaceholder}
            disabled={submitting}
          />
        </div>

        <button type="submit" className="btn btn-primary full-width" disabled={submitting}>
          {submitting ? dict.contact.btnSubmitting : dict.contact.btnSubmit}
        </button>
      </form>
    </div>
  );
}
