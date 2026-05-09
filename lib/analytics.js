/**
 * GA4 Event Tracking Utility
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.warn('GA gtag not initialized');
  }
};

/**
 * Specifically track WhatsApp clicks
 * @param {string} location - Where the click happened (e.g., 'floating_button', 'footer', 'cta_band')
 */
export const trackWhatsAppClick = (location) => {
  trackEvent({
    action: 'whatsapp_click',
    category: 'Contact',
    label: location,
  });
};

/**
 * Specifically track form submissions
 * @param {string} formName - Name of the form (e.g., 'contact_form')
 * @param {string} projectType - Selected project type
 */
export const trackFormSubmission = (formName, projectType) => {
  trackEvent({
    action: 'form_submission',
    category: 'Lead',
    label: `${formName} - ${projectType}`,
  });
  
  // Also track as a generic 'generate_lead' GA4 event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      form_name: formName,
      project_type: projectType,
    });
  }
};

/**
 * Track Phone calls
 * @param {string} location - Where the click happened
 */
export const trackPhoneClick = (location) => {
  trackEvent({
    action: 'phone_click',
    category: 'Contact',
    label: location,
  });
};
