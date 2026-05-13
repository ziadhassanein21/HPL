'use client';

import dynamic from 'next/dynamic';
import SiteHeader from './components/SiteHeader';
import ContactForm from './components/ContactForm';
import FaqAccordion from './components/FaqAccordion';
import ScrollObserver from './components/ScrollObserver';
import ContactIcon from './components/ui/ContactIcon';
import { siteConfig } from '../../lib/site';
import SiteFooter from './components/SiteFooter';
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';


import HeroSection from './components/sections/HeroSection';

const ProductsSection = dynamic(() => import('./components/sections/ProductsSection'));
const FeaturesSection = dynamic(() => import('./components/sections/FeaturesSection'));
const ProcessSection = dynamic(() => import('./components/sections/ProcessSection'));
const GallerySection = dynamic(() => import('./components/sections/GallerySection'));
const SpecsSection = dynamic(() => import('./components/sections/SpecsSection'));
const TestimonialsSection = dynamic(() => import('./components/sections/TestimonialsSection'));

// Lazy load below-the-fold sections
const ValueSection = dynamic(() => import('./components/sections/ValueSection'));
const StatsSection = dynamic(() => import('./components/sections/StatsSection'));
const ServiceAreaSection = dynamic(() => import('./components/sections/ServiceAreaSection'));
const CtaBandSection = dynamic(() => import('./components/sections/CtaBandSection'));
const LandingLinksSection = dynamic(() => import('./components/sections/LandingLinksSection'));
const ResourcesSection = dynamic(() => import('./components/sections/ResourcesSection'));

const galleryImages = [
  { src: 'hpl-partition-project-01.webp', altAr: 'مشروع قواطع حمامات HPL في مركز تجاري بالرياض', altEn: 'HPL bathroom partition project in a Riyadh commercial center' },
  { src: 'hpl-partition-project-04.webp', altAr: 'كبائن دورات مياه فينوليك في مدرسة بجدة', altEn: 'Phenolic toilet cubicles in a Jeddah school' },
  { src: 'hpl-partition-project-05.webp', altAr: 'لوكرات HPL في غرفة تبديل ملابس نادي رياضي', altEn: 'HPL lockers in a sports club changing room' },
  { src: 'hpl-partition-project-06.webp', altAr: 'قواطع حمامات مقاومة للماء في مستشفى بالدمام', altEn: 'Waterproof bathroom partitions in a Dammam hospital' },
  { src: 'hpl-partition-project-07.webp', altAr: 'فواصل دورات مياه HPL بتشطيب خشبي', altEn: 'HPL toilet partitions with wood finish' },
  { src: 'hpl-shower-cubicle-sports-club-ksa.webp', altAr: 'كبائن استحمام HPL في مسبح بالسعودية', altEn: 'HPL shower cubicles in a Saudi swimming pool' },
];

function ClientPage({ dict, lang }) {
  const faqs = [
    { question: dict.faq.q1, answer: dict.faq.a1 },
    { question: dict.faq.q2, answer: dict.faq.a2 },
    { question: dict.faq.q3, answer: dict.faq.a3 },
  ];

  return (
    <>
      <SiteHeader dict={dict} lang={lang} />
      <ScrollObserver />

      <main id="main-content">
        <HeroSection dict={dict.hero} />
        <ProductsSection dict={dict.products} lang={lang} />
        <ResourcesSection dict={dict} lang={lang} />
        <LandingLinksSection dict={dict} lang={lang} />
        <FeaturesSection dict={dict.features} />
        <ProcessSection dict={dict.process} />
        <ValueSection dict={dict} />
        <SpecsSection dict={dict.specs} />
        <GallerySection dict={dict.gallery} images={galleryImages} lang={lang} />
        <StatsSection dict={dict} />
        <TestimonialsSection dict={dict.testimonials} />
        <ServiceAreaSection dict={dict} />
        <CtaBandSection dict={dict} />

        <section className="faq-section" id="faq">
          <div className="container faq-shell reveal">
            <div className="section-heading">
              <span className="eyebrow">{dict.faq.eyebrow}</span>
              <h2 className="section-title">{dict.faq.title}</h2>
            </div>

            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-shell">
            <div className="contact-copy reveal">
              <span className="eyebrow">{dict.contact.eyebrow}</span>
              <h2 className="section-title">{dict.contact.title}</h2>
              <p className="section-subtitle align-start">{dict.contact.desc}</p>

              <div className="contact-points">
                <div className="contact-point">
                  <ContactIcon type="location" />
                  <div>
                    <strong>{dict.contact.locationLabel}</strong>
                    <p><a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{dict.contact.location}</a></p>
                  </div>
                </div>
                <div className="contact-point">
                  <ContactIcon type="phone" />
                  <div>
                    <strong>{dict.contact.phoneLabel}</strong>
                    <p dir="ltr"><a href={`tel:${siteConfig.phoneRaw}`} style={{ color: 'inherit' }} onClick={() => trackPhoneClick('contact_section')}>{siteConfig.phoneDisplay}</a></p>
                  </div>
                </div>
                <div className="contact-point">
                  <ContactIcon type="email" />
                  <div>
                    <strong>{dict.contact.emailLabel}</strong>
                    <p><a href={`mailto:${siteConfig.email}`} style={{ color: 'inherit' }}>{siteConfig.email}</a></p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm dict={dict} />
          </div>
        </section>
      </main>

      <SiteFooter dict={dict} lang={lang} />

      <div className="mobile-action-bar">
        <a href="#contact" className="mobile-action primary-action">{dict.contact.quickQuote}</a>
        <a href={`tel:${siteConfig.phoneRaw}`} className="mobile-action" onClick={() => trackPhoneClick('mobile_action_bar')}>{dict.contact.quickCall}</a>
        <a href={`https://wa.me/${siteConfig.whatsappRaw}`} className="mobile-action" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('mobile_action_bar')}>
          {dict.contact.quickWhatsapp}
        </a>
      </div>

      <a href={`https://wa.me/${siteConfig.whatsappRaw}`} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={() => trackWhatsAppClick('floating_button')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </>
  );
}

export default ClientPage;
