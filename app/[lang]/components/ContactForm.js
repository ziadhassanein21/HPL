'use client';

import { siteConfig } from '@/lib/site';
import { useState } from 'react';

export default function ContactForm({ dict }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = event.target;
    const formDataObj = Object.fromEntries(new FormData(form));
    
    const payload = {
      name: formDataObj['name'],
      phone: formDataObj['phone'],
      projectType: formDataObj['project-type'],
      details: formDataObj['project-details'],
    };

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error('Missing WEB3FORMS_KEY environment variable');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New HPL Project Inquiry — ${payload.projectType}`,
          from_name: 'HPL Website',
          name: payload.name,
          phone: payload.phone,
          project_type: payload.projectType,
          message: payload.details,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
        console.error('API Error:', result.message);
      }
    } catch (error) {
      setError(true);
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center' }}>
        <div className="form-success-content">
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✅</div>
          <h3 style={{ color: 'var(--gold-strong)', marginBottom: '1rem', fontSize: '1.4rem' }}>
            {dict.contact.sent}
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>
            {dict.contact.success}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">{dict.contact.form_name}</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-control" 
            required 
            placeholder={dict.contact.form_name} 
            disabled={submitting} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">{dict.contact.form_phone}</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="form-control" 
            required 
            placeholder={dict.contact.form_phone} 
            disabled={submitting} 
            dir="ltr" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-type" className="form-label">{dict.contact.form_project}</label>
          <select 
            id="project-type" 
            name="project-type" 
            className="form-control" 
            required 
            disabled={submitting}
          >
            <option value="">{dict.contact.form_project}</option>
            <option value="bathroom-partitions">{dict.contact.form_opt1}</option>
            <option value="lockers">{dict.contact.form_opt2}</option>
            <option value="shower-cubicles">{dict.contact.form_opt3}</option>
            <option value="other">{dict.contact.form_opt4}</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="project-details" className="form-label">{dict.contact.form_msg}</label>
          <textarea
            id="project-details"
            name="project-details"
            className="form-control textarea-control"
            rows="4"
            placeholder={dict.contact.form_msg}
            disabled={submitting}
          />
        </div>

        {error && (
          <div style={{ marginTop: '16px', color: '#ff4d4d', fontSize: '0.9rem' }}>
            {dict.contact.form_error}
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? dict.contact.form_submitting : dict.contact.form_submit}
        </button>
      </form>
    </div>
  );
}
