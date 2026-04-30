'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getSeoPages } from '../../lib/seo-pages';

const galleryImages = [
  'photo_1_2026-04-29_18-01-45.jpg',
  'photo_2_2026-04-29_18-01-45.jpg',
  'photo_3_2026-04-29_18-01-45.jpg',
  'photo_4_2026-04-29_18-01-45.jpg',
  'photo_8_2026-04-29_18-01-45.jpg',
  'photo_9_2026-04-29_18-01-45.jpg',
];

const productImages = [
  'photo_5_2026-04-29_18-01-45.jpg',
  'photo_11_2026-04-29_18-01-45.jpg',
  'photo_12_2026-04-29_18-01-45.jpg',
];

export default function ClientPage({ dict, lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.dataset.theme || localStorage.getItem('theme') || 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 90) {
          element.classList.add('active');
        }
      });
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleEscape);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuActive);
    return () => document.body.classList.remove('menu-open');
  }, [menuActive]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const direction = lang === 'ar' ? 'rtl' : 'ltr';

    root.lang = lang;
    root.dir = direction;
    body.lang = lang;
    body.dir = direction;

  }, [lang]);

  const metrics = useMemo(
    () => [dict.hero.metric1, dict.hero.metric2, dict.hero.metric3],
    [dict.hero.metric1, dict.hero.metric2, dict.hero.metric3]
  );

  const heroBadges = useMemo(
    () => [dict.hero.badge1, dict.hero.badge2, dict.hero.badge3].filter(Boolean),
    [dict.hero.badge1, dict.hero.badge2, dict.hero.badge3]
  );

  const products = useMemo(
    () => [
      { title: dict.products.p1_title, description: dict.products.p1_desc, tag: dict.products.p1_tag },
      { title: dict.products.p2_title, description: dict.products.p2_desc, tag: dict.products.p2_tag },
      { title: dict.products.p3_title, description: dict.products.p3_desc, tag: dict.products.p3_tag },
    ],
    [dict.products]
  );

  const features = useMemo(
    () => [
      { icon: '01', title: dict.features.f1_title, description: dict.features.f1_desc },
      { icon: '02', title: dict.features.f2_title, description: dict.features.f2_desc },
      { icon: '03', title: dict.features.f3_title, description: dict.features.f3_desc },
      { icon: '04', title: dict.features.f4_title, description: dict.features.f4_desc },
      { icon: '05', title: dict.features.f5_title, description: dict.features.f5_desc },
      { icon: '06', title: dict.features.f6_title, description: dict.features.f6_desc },
    ],
    [dict.features]
  );

  const processSteps = useMemo(
    () => [
      { step: '01', title: dict.process.s1_title, description: dict.process.s1_desc },
      { step: '02', title: dict.process.s2_title, description: dict.process.s2_desc },
      { step: '03', title: dict.process.s3_title, description: dict.process.s3_desc },
    ],
    [dict.process]
  );

  const useCases = useMemo(
    () => [
      dict.useCases.item1,
      dict.useCases.item2,
      dict.useCases.item3,
      dict.useCases.item4,
      dict.useCases.item5,
      dict.useCases.item6,
    ],
    [dict.useCases]
  );

  const specificationItems = useMemo(
    () => [
      dict.specs.item1,
      dict.specs.item2,
      dict.specs.item3,
      dict.specs.item4,
      dict.specs.item5,
      dict.specs.item6,
    ],
    [dict.specs]
  );

  const serviceAreaItems = useMemo(
    () => [
      dict.serviceAreas.item1,
      dict.serviceAreas.item2,
      dict.serviceAreas.item3,
      dict.serviceAreas.item4,
    ],
    [dict.serviceAreas]
  );

  const faqs = useMemo(
    () => [
      { question: dict.faq.q1, answer: dict.faq.a1 },
      { question: dict.faq.q2, answer: dict.faq.a2 },
      { question: dict.faq.q3, answer: dict.faq.a3 },
    ],
    [dict.faq]
  );

  const valueProps = useMemo(
    () => [
      dict.valueProps.item1,
      dict.valueProps.item2,
      dict.valueProps.item3,
      dict.valueProps.item4,
    ],
    [dict.valueProps]
  );

  const seoLinks = useMemo(() => getSeoPages(lang), [lang]);

  const switchLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPathname || `/${newLang}`);
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  const handleNavClick = () => setMenuActive(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <>
      <a href="#main-content" className="skip-link">{dict.nav.skip}</a>

      <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
        <div className="container nav-shell">
          <a href="#home" className="brand-mark" onClick={handleNavClick}>
            <span className="brand-emblem" aria-hidden="true" />
            <span className="brand-copy">
              <strong>HPL</strong>
              <small>{dict.nav.brand}</small>
            </span>
          </a>

          <nav id="primary-navigation" className={`nav-links ${menuActive ? 'active' : ''}`} aria-label={dict.nav.ariaLabel}>
            <a href="#products" onClick={handleNavClick}>{dict.nav.products}</a>
            <a href="#features" onClick={handleNavClick}>{dict.nav.features}</a>
            <a href="#process" onClick={handleNavClick}>{dict.nav.process}</a>
            <a href="#gallery" onClick={handleNavClick}>{dict.nav.gallery}</a>
            <a href="#faq" onClick={handleNavClick}>{dict.nav.faq}</a>
            <a href="#contact" onClick={handleNavClick}>{dict.nav.contact}</a>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={!mounted ? dict.nav.themeToLight : (theme === 'dark' ? dict.nav.themeToLight : dict.nav.themeToDark)}
            >
              <span aria-hidden="true">{!mounted ? '☀' : (theme === 'dark' ? '☀' : '☾')}</span>
              <span>{!mounted ? dict.nav.themeLight : (theme === 'dark' ? dict.nav.themeLight : dict.nav.themeDark)}</span>
            </button>
            <button className="lang-toggle" type="button" onClick={switchLanguage}>
              {dict.nav.langToggle}
            </button>
          </nav>

          <button
            type="button"
            className={`hamburger ${menuActive ? 'active' : ''}`}
            onClick={() => setMenuActive((current) => !current)}
            aria-label={dict.nav.menuToggle}
            aria-expanded={menuActive}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="home">
          <div className="hero-backdrop" />
          <div className="container hero-grid">
            <div className="hero-copy reveal active">
              <span className="eyebrow">{dict.hero.eyebrow}</span>
              <h1 className="hero-title">{dict.hero.title}</h1>
              <p className="hero-text">{dict.hero.subtitle}</p>

              <div className="hero-actions">
                <a href="#products" className="btn btn-primary">{dict.hero.btnExplore}</a>
                <a href="#contact" className="btn btn-secondary">{dict.hero.btnQuote}</a>
              </div>

              <div className="hero-chip-row">
                {heroBadges.map((item) => (
                  <span className="hero-chip" key={item}>{item}</span>
                ))}
              </div>

              <div className="hero-metrics">
                {metrics.map((item) => (
                  <div className="metric-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="hero-image-frame">
                <Image
                  src="/Images/photo_3_2026-04-29_18-01-45.jpg"
                  alt={dict.hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 42vw"
                  className="cover-image"
                />
              </div>

              <div className="floating-panel panel-top">
                <span>{dict.hero.panelTopLabel}</span>
                <strong>{dict.hero.panelTopValue}</strong>
              </div>

              <div className="floating-panel panel-bottom">
                <span>{dict.hero.panelBottomLabel}</span>
                <strong>{dict.hero.panelBottomValue}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid reveal">
            <p>{dict.trust.title}</p>
            <div className="trust-items">
              <span>{dict.trust.item1}</span>
              <span>{dict.trust.item2}</span>
              <span>{dict.trust.item3}</span>
              <span>{dict.trust.item4}</span>
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">{dict.products.eyebrow}</span>
              <h2 className="section-title">{dict.products.title}</h2>
              <p className="section-subtitle">{dict.products.subtitle}</p>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <article className="product-card reveal" key={product.title}>
                  <div className="product-image-wrap">
                    <Image
                      src={`/Images/${productImages[index]}`}
                      alt={product.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className="cover-image"
                    />
                  </div>
                  <div className="product-body">
                    <span className="product-tag">{product.tag}</span>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="container features-layout">
            <div className="section-heading reveal">
              <span className="eyebrow">{dict.features.eyebrow}</span>
              <h2 className="section-title">{dict.features.title}</h2>
              <p className="section-subtitle">{dict.features.subtitle}</p>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <article className="feature-card reveal" key={feature.title}>
                  <span className="feature-index">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">{dict.process.eyebrow}</span>
              <h2 className="section-title">{dict.process.title}</h2>
              <p className="section-subtitle">{dict.process.subtitle}</p>
            </div>

            <div className="process-grid">
              {processSteps.map((item) => (
                <article className="process-card reveal" key={item.step}>
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="value-section">
          <div className="container value-shell">
            <div className="value-copy reveal">
              <span className="eyebrow">{dict.valueProps.eyebrow}</span>
              <h2 className="section-title">{dict.valueProps.title}</h2>
              <p className="section-subtitle align-start">{dict.valueProps.subtitle}</p>
              <div className="value-actions">
                <a href="#contact" className="btn btn-primary">{dict.contact.quickQuote}</a>
                <a href="https://wa.me/9665XXXXXXXX" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  {dict.contact.quickWhatsapp}
                </a>
              </div>
            </div>

            <div className="value-grid">
              {valueProps.map((item) => (
                <article className="value-card reveal" key={item.title}>
                  <span className="value-marker" aria-hidden="true" />
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
              <span className="eyebrow">{lang === 'ar' ? 'حلول متخصصة' : 'Specialized Solutions'}</span>
              <h2 className="section-title">
                {lang === 'ar'
                  ? 'استعرض حلولاً مخصصة لكل نوع من أنواع مشاريع HPL.'
                  : 'Explore dedicated solution pages for each main HPL application.'}
              </h2>
              <p className="section-subtitle">
                {lang === 'ar'
                  ? 'كل صفحة تقدم نظرة أوضح على الاستخدامات والمزايا والمعلومات العملية الخاصة بكل حل.'
                  : 'Each page gives a clearer overview of applications, benefits and practical project information for that solution.'}
              </p>
            </div>

            <div className="landing-links-grid">
              {seoLinks.map((item) => (
                <a className="landing-link-card reveal" href={`/${lang}/${item.slug}`} key={item.slug}>
                  <span className="product-tag">{item.shortTitle}</span>
                  <h3>{item.metaTitle}</h3>
                  <p>{item.metaDescription}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <div className="container showcase-grid">
            <div className="showcase-image reveal">
              <div className="showcase-frame">
                <Image
                  src="/Images/photo_10_2026-04-29_18-01-45.jpg"
                  alt={dict.useCases.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  className="cover-image"
                />
              </div>
            </div>

            <div className="showcase-copy reveal">
              <span className="eyebrow">{dict.useCases.eyebrow}</span>
              <h2 className="section-title">{dict.useCases.title}</h2>
              <p className="section-subtitle align-start">{dict.useCases.subtitle}</p>
              <div className="use-case-grid">
                {useCases.map((item) => (
                  <div className="use-case-item" key={item}>
                    <span className="use-case-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="specs-section" id="specs">
          <div className="container specs-shell">
            <div className="section-heading reveal">
              <span className="eyebrow">{dict.specs.eyebrow}</span>
              <h2 className="section-title">{dict.specs.title}</h2>
              <p className="section-subtitle">{dict.specs.subtitle}</p>
            </div>

            <div className="specs-grid">
              {specificationItems.map((item) => (
                <article className="spec-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">{dict.gallery.eyebrow}</span>
              <h2 className="section-title">{dict.gallery.title}</h2>
              <p className="section-subtitle">{dict.gallery.subtitle}</p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <figure className={`gallery-card gallery-card-${index + 1} reveal`} key={image}>
                  <Image
                    src={`/Images/${image}`}
                    alt={`${dict.gallery.title} ${index + 1}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className="cover-image"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

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
                <a href="https://wa.me/9665XXXXXXXX" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
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

            <div className="faq-list">
              {faqs.map((item, index) => (
                <article className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={item.question}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                    aria-expanded={activeFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{item.question}</span>
                    <span className="faq-symbol">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer" id={`faq-answer-${index}`}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
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
                    <p dir="ltr">+966 5X XXX XXXX</p>
                  </div>
                </div>
                <div className="contact-point">
                  <span>✉️</span>
                  <div>
                    <strong>{dict.contact.emailLabel}</strong>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card reveal">
              <h3>{dict.contact.subtitle}</h3>
              <p className="contact-note">{dict.contact.note}</p>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div>
                    <label className="sr-only" htmlFor="name">{dict.contact.form_name}</label>
                    <input id="name" type="text" className="form-control" placeholder={dict.contact.form_name} required />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">{dict.contact.form_phone}</label>
                    <input id="phone" type="tel" className="form-control" placeholder={dict.contact.form_phone} required />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="project-type">{dict.contact.form_project}</label>
                  <select id="project-type" className="form-control" defaultValue="" required>
                    <option value="" disabled>{dict.contact.form_project}</option>
                    <option value="bathroom">{dict.contact.form_opt1}</option>
                    <option value="lockers">{dict.contact.form_opt2}</option>
                    <option value="shower">{dict.contact.form_opt3}</option>
                    <option value="other">{dict.contact.form_opt4}</option>
                  </select>
                </div>
                <div>
                  <label className="sr-only" htmlFor="project-details">{dict.contact.form_msg}</label>
                  <textarea id="project-details" className="form-control textarea-control" placeholder={dict.contact.form_msg} required />
                </div>
                <button type="submit" className="btn btn-primary full-width">{dict.contact.form_submit}</button>
                {submitted ? <p className="form-success" role="status">{dict.contact.success}</p> : null}
              </form>
            </div>
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
        <a href="tel:+9665XXXXXXXX" className="mobile-action">{dict.contact.quickCall}</a>
        <a href="https://wa.me/9665XXXXXXXX" className="mobile-action" target="_blank" rel="noopener noreferrer">
          {dict.contact.quickWhatsapp}
        </a>
      </div>

      <a href="https://wa.me/9665XXXXXXXX" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </>
  );
}
