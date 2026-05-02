import Script from 'next/script';
import ExpandableImage from '../components/ui/ExpandableImage';
import { notFound } from 'next/navigation';
import { getSeoPageBySlug, getSeoPages } from '../../../lib/seo-pages';
import { getLocalizedUrl, getSiteUrl, hasRealContactValue, siteConfig } from '../../../lib/site';

export async function generateStaticParams() {
  return siteConfig.locales.flatMap((lang) =>
    getSeoPages(lang).map((page) => ({
      lang,
      slug: page.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const page = getSeoPageBySlug(lang, slug);

  if (!page) {
    return {};
  }

  const currentUrl = `${getLocalizedUrl(lang)}/${page.slug}`;
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: currentUrl,
      languages: {
        ar: `${getLocalizedUrl('ar')}/${page.slug}`,
        en: `${getLocalizedUrl('en')}/${page.slug}`,
      },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: currentUrl,
      siteName: siteConfig.name,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.shortTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function SeoServicePage({ params }) {
  const { lang, slug } = await params;
  const page = getSeoPageBySlug(lang, slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `${getLocalizedUrl(lang)}/${page.slug}`;
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: lang,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'ar' ? 'الرئيسية' : 'Home',
            item: getLocalizedUrl(lang),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.shortTitle,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: page.shortTitle,
        serviceType: page.shortTitle,
        description: page.metaDescription,
        areaServed: {
          '@type': 'Country',
          name: siteConfig.countryName,
        },
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          image: imageUrl,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  if (hasRealContactValue(siteConfig.phoneRaw)) {
    schemaGraph['@graph'][2].provider.telephone = siteConfig.phoneRaw;
  }

  if (hasRealContactValue(siteConfig.email)) {
    schemaGraph['@graph'][2].provider.email = siteConfig.email;
  }

  return (
    <>
      <main className="seo-page">
        <section className="seo-hero">
          <div className="seo-hero-backdrop" />
          <div className="container seo-hero-grid">
            <div className="seo-hero-copy">
              <a href={`/${lang}`} className="seo-back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }}>
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                {lang === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to homepage'}
              </a>
              <span className="eyebrow">{page.shortTitle}</span>
              <h1 className="section-title seo-main-title">{page.heroTitle}</h1>
              <p className="section-subtitle align-start">{page.heroText}</p>
              <div className="seo-hero-actions">
                <a href={`/${lang}#contact`} className="btn btn-primary">
                  {lang === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}
                </a>
                <a href={`/${lang}`} className="btn btn-secondary">
                  {lang === 'ar' ? 'استعرض الموقع' : 'Explore Website'}
                </a>
              </div>
            </div>

            <div className="seo-hero-media">
              <div className="seo-hero-image">
                <ExpandableImage
                  src={page.image || siteConfig.ogImage}
                  alt={page.shortTitle}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className="cover-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="seo-content-section">
          <div className="container seo-content-grid">
            <article className="seo-content-main">
              <div className="seo-content-block">
                <h2>{page.introTitle}</h2>
                <p>{page.introText}</p>
              </div>

              {page.sections.map((section) => (
                <div className="seo-content-block" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </article>

            <aside className="seo-content-side">
              <div className="seo-side-card">
                <h3>{lang === 'ar' ? 'نقاط أساسية' : 'Key Highlights'}</h3>
                <ul className="seo-list">
                  {page.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="seo-side-card">
                <h3>{lang === 'ar' ? 'نقاط مهمة للمشروع' : 'Project Considerations'}</h3>
                <ul className="seo-list">
                  {page.specs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="seo-faq-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{lang === 'ar' ? 'أسئلة شائعة' : 'FAQ'}</span>
              <h2 className="section-title">{page.shortTitle}</h2>
            </div>

            <div className="seo-faq-grid">
              {page.faq.map((item) => (
                <article className="seo-faq-card" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-cta-section">
          <div className="container seo-cta-card">
            <div>
              <span className="eyebrow">{lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}</span>
              <h2 className="section-title">
                {lang === 'ar'
                  ? 'هل تريد حلاً مناسباً لمشروعك باستخدام أنظمة HPL؟'
                  : 'Need the right HPL solution for your project?'}
              </h2>
            </div>
            <a href={`/${lang}#contact`} className="btn btn-primary">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </a>
          </div>
        </section>
      </main>

      <Script
        id="seo-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
    </>
  );
}
