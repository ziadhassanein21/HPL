'use client';

import { siteConfig } from '@/lib/site';
import { useState } from 'react';

export default function ContactForm({ dict }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.target;
    const formDataObj = Object.fromEntries(new FormData(form));
    
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
        <div className="form-success">
          <p>{dict.contact.success}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{dict.contact.form_name}</label>
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

        <div style={{ marginTop: '16px' }}>
          <label htmlFor="phone">{dict.contact.form_phone}</label>
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

        <div style={{ marginTop: '16px' }}>
          <label htmlFor="project-type">{dict.contact.form_project}</label>
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

        <div style={{ marginTop: '16px' }}>
          <label htmlFor="project-details">{dict.contact.form_msg}</label>
          <textarea
            id="project-details"
            name="project-details"
            className="form-control textarea-control"
            rows="4"
            placeholder={dict.contact.form_msg}
            disabled={submitting}
          />
        </div>

        <button type="submit" className="btn btn-primary full-width" style={{ marginTop: '24px' }} disabled={submitting}>
          {submitting ? dict.contact.form_submit : dict.contact.form_submit}
        </button>
      </form>
    </div>
  );
}
