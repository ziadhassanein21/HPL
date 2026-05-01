import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import ContactForm from './components/ContactForm';
import FaqAccordion from './components/FaqAccordion';
import ScrollObserver from './components/ScrollObserver';
import { getSeoPages } from '../../lib/seo-pages';

import HeroSection from './components/sections/HeroSection';
import TrustSection from './components/sections/TrustSection';
import ProductsSection from './components/sections/ProductsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ProcessSection from './components/sections/ProcessSection';
import GallerySection from './components/sections/GallerySection';
import SpecsSection from './components/sections/SpecsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

const galleryImages = [
  'hpl-partition-project-01.jpg',
  'hpl-partition-project-02.jpg',
  'hpl-bathroom-partition-riyadh.jpg',
  'hpl-partition-project-03.jpg',
  'hpl-partition-project-04.jpg',
  'hpl-partition-project-05.jpg',
  'hpl-partition-project-06.png',
  'hpl-partition-project-07.png',
  'hpl_locker_gym_01_1777661339876.png',
  'hpl_locker_gym_02_1777661422143.png',
  'hpl_locker_hospital_01_1777661449971.png',
  'hpl_locker_school_01_1777661378585.png',
  'hpl_partition_airport_01_1777661436449.png',
  'hpl_partition_corporate_01_1777661505167.png',
  'hpl_partition_mall_01_1777661359617.png',
  'hpl_partition_office_01_1777661393466.png',
  'hpl_shower_club_01_1777661470398.png',
  'hpl_shower_pool_01_1777661407418.png',
];

export default function ClientPage({ dict, lang }) {
  const useCases = [
    dict.useCases.item1,
    dict.useCases.item2,
    dict.useCases.item3,
    dict.useCases.item4,
    dict.useCases.item5,
    dict.useCases.item6,
  ];

  const serviceAreaItems = [
    dict.serviceAreas.item1,
    dict.serviceAreas.item2,
    dict.serviceAreas.item3,
    dict.serviceAreas.item4,
  ];

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
        <TrustSection dict={dict.trust} />
        <ProductsSection dict={dict.products} />
        <FeaturesSection dict={dict.features} />
        <ProcessSection dict={dict.process} />

        <section className="value-section">
          <div className="container value-grid">
            <div className="value-copy reveal">
              <span className="eyebrow">{dict.valueProps.eyebrow}</span>
              <h2 className="section-title">{dict.valueProps.title}</h2>
              <p className="section-subtitle align-start">{dict.valueProps.subtitle}</p>

              <div className="value-points">
                {(dict.valueProps.points || []).map((point, index) => (
                  <div className="value-point" key={index}>
                    <span className="value-dot" aria-hidden="true" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="value-cards">
              {[dict.valueProps.item1, dict.valueProps.item2, dict.valueProps.item3, dict.valueProps.item4].map((item) => (
                <article className="value-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-links-section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">{dict.landingLinks?.eyebrow || (lang === 'ar' ? 'أدلة المشاريع' : 'Project Guides')}</span>
              <h2 className="section-title">{dict.landingLinks?.title || (lang === 'ar' ? 'تعرف على المزيد حول حلولنا' : 'Learn More About Our Solutions')}</h2>
              <p className="section-subtitle">{dict.landingLinks?.subtitle || ''}</p>
            </div>

            <div className="landing-links-grid">
              {getSeoPages(lang).map((item) => (
                <Link className="landing-link-card reveal" href={`/${lang}/${item.slug}`} key={item.slug}>
                  <h3>{item.shortTitle}</h3>
                  <p>{item.heroText.substring(0, 80)}...</p>
                  <span className="read-more">{lang === 'ar' ? 'اقرأ المزيد ←' : 'Read More →'}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SpecsSection dict={dict.specs} />
        <GallerySection dict={dict.gallery} images={galleryImages} />

        <section className="stats-section">
          <div className="container stats-bar reveal">
            <div className="stat-item">
              <span className="stat-value">{dict.stats.projects}</span>
              <span className="stat-label">{dict.stats.projectsLabel}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{dict.stats.experience}</span>
              <span className="stat-label">{dict.stats.experienceLabel}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{dict.stats.cities}</span>
              <span className="stat-label">{dict.stats.citiesLabel}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{dict.stats.satisfaction}</span>
              <span className="stat-label">{dict.stats.satisfactionLabel}</span>
            </div>
          </div>
        </section>

        <TestimonialsSection dict={dict.testimonials} />

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

        <section className="cta-band-section">
          <div className="container">
            <div className="cta-band reveal">
              <div className="cta-band-copy">
                <span className="eyebrow">{dict.ctaBand.eyebrow}</span>
                <h2>{dict.ctaBand.title}</h2>
                <p>{dict.ctaBand.text}</p>
              </div>
              <div className="cta-band-actions">
                <a href="#contact" className="btn btn-primary">{dict.ctaBand.primary}</a>
                <a href="https://wa.me/966551130855" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  {dict.ctaBand.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>

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
                  <span>📍</span>
                  <div>
                    <strong>{dict.contact.locationLabel}</strong>
                    <p>{dict.contact.location}</p>
                  </div>
                </div>
                <div className="contact-point">
                  <span>📞</span>
                  <div>
                    <strong>{dict.contact.phoneLabel}</strong>
                    <p dir="ltr"><a href="tel:+966551130855" style={{ color: 'inherit' }}>+966 551 130 855</a></p>
                  </div>
                </div>
                <div className="contact-point">
                  <span>✉️</span>
                  <div>
                    <strong>{dict.contact.emailLabel}</strong>
                    <p><a href="mailto:newbasic.ac@gmail.com" style={{ color: 'inherit' }}>newbasic.ac@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm dict={dict} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div>
            <h3>{dict.footer.title}</h3>
            <p>{dict.footer.desc}</p>
          </div>
          <p>{dict.footer.copy}</p>
        </div>
      </footer>

      <div className="mobile-action-bar">
        <a href="#contact" className="mobile-action primary-action">{dict.contact.quickQuote}</a>
        <a href="tel:+966551130855" className="mobile-action">{dict.contact.quickCall}</a>
        <a href="https://wa.me/966551130855" className="mobile-action" target="_blank" rel="noopener noreferrer">
          {dict.contact.quickWhatsapp}
        </a>
      </div>

      <a href="https://wa.me/966551130855" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </>
  );
}
