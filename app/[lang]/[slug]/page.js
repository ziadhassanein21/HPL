import Script from 'next/script';
import Link from 'next/link';
import ExpandableImage from '../components/ui/ExpandableImage';
import { notFound } from 'next/navigation';
import { getSeoPageBySlug, getSeoPages } from '../../../lib/seo-pages';
import { getLocalizedUrl, getSiteUrl, hasRealContactValue, siteConfig } from '../../../lib/site';
import SchemaOrg from '../../../components/SchemaOrg';

/* ── TASK A6 — per-page metadata with exact values ── */
export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const page = getSeoPageBySlug(lang, slug);

  if (!page) return {};

  const imageUrl = `${getSiteUrl()}${page.image || siteConfig.ogImage}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.canonical || `${getLocalizedUrl(lang)}/${page.slug}`,
      languages: {
        ar: `${getSiteUrl()}/ar/${page.slug}`,
        en: `${getSiteUrl()}/en/${page.slug}`,
        'x-default': `${getSiteUrl()}/ar/${page.slug}`,
      },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.canonical || `${getLocalizedUrl(lang)}/${page.slug}`,
      siteName: siteConfig.name,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: page.shortTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const arPages = getSeoPages('ar').map((page) => ({
    lang: 'ar',
    slug: page.slug,
  }));
  const enPages = getSeoPages('en').map((page) => ({
    lang: 'en',
    slug: page.slug,
  }));
  return [...arPages, ...enPages];
}

export default async function SeoServicePage({ params }) {
  const { lang, slug } = await params;
  const page = getSeoPageBySlug(lang, slug);
  if (!page) notFound();

  const pageUrl = page.canonical || `${getLocalizedUrl(lang)}/${page.slug}`;
  const imageUrl = `${getSiteUrl()}${page.image || siteConfig.ogImage}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'ar' ? 'الرئيسية' : 'Home', item: `https://hplksa.com/${lang}` },
      { '@type': 'ListItem', position: 2, name: page.shortTitle, item: pageUrl },
    ],
  };

  /* ── TASK A5-e — Service schema ── */
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: page.shortTitle,
    name: page.metaTitle,
    description: page.metaDescription,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      email: siteConfig.email,
    },
    areaServed: { '@type': 'Country', name: siteConfig.countryName },
  };

  /* ── TASK A5 — FAQPage schema ── */
  const faqSchema = page.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  return (
    <>
      <main className="seo-page">
        {/* ── Hero Section ── */}
        <section className="seo-hero">
          <div className="seo-hero-backdrop" />
          <div className="container seo-hero-grid">
            <div className="seo-hero-copy">
              <Link href={`/${lang}`} className="seo-back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }}>
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                {lang === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Back to Home'}
              </Link>
              <span className="eyebrow">{page.shortTitle}</span>
              <h1 className="section-title seo-main-title">{page.heroTitle}</h1>
              <p className="section-subtitle align-start">{page.heroText}</p>
              <div className="seo-hero-actions">
                <Link href={`/${lang}#contact`} className="btn btn-primary">{lang === 'ar' ? 'اطلب عرض سعر' : 'Get a Quote'}</Link>
                <Link href={`/${lang}`} className="btn btn-secondary">{lang === 'ar' ? 'استعرض الموقع' : 'Explore Site'}</Link>
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

        {/* ── Content Sections ── */}
        <section className="seo-content-section">
          <div className="container seo-content-grid">
            <article className="seo-content-main">
              {page.sections.map((section) => (
                <div className="seo-content-block" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.body.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {section.isSpecsTable && section.specsData && (
                    <div className="seo-specs-table-wrapper">
                      <table className={`seo-specs-table ${section.isComparisonTable ? 'comparison-table' : ''}`}>
                        <thead>
                          {section.isComparisonTable ? (
                            <tr>
                              {section.columns ? (
                                section.columns.map(col => <th key={col}>{col}</th>)
                              ) : (
                                <>
                                  <th>{lang === 'ar' ? 'الميزة' : 'Feature'}</th>
                                  <th>HPL</th>
                                  <th>MDF</th>
                                </>
                              )}
                            </tr>
                          ) : (
                            <tr>
                              <th>{lang === 'ar' ? 'المواصفة' : 'Specification'}</th>
                              <th>{lang === 'ar' ? 'القيمة' : 'Value'}</th>
                            </tr>
                          )}
                        </thead>
                        <tbody>
                          {section.specsData.map((spec, idx) => (
                            <tr key={idx}>
                              {section.isComparisonTable ? (
                                section.columnKeys ? (
                                  section.columnKeys.map(key => <td key={key}>{spec[key]}</td>)
                                ) : (
                                  <>
                                    <td>{spec.label}</td>
                                    <td>{spec.hpl}</td>
                                    <td>{spec.mdf}</td>
                                  </>
                                )
                              ) : (
                                <>
                                  <td>{spec.label}</td>
                                  <td>{spec.value}</td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
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
                <h3>{lang === 'ar' ? 'نقاط مهمة للمشروع' : 'Project Insights'}</h3>
                <ul className="seo-list">
                  {page.specs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        {page.faq?.length > 0 && (
          <section className="seo-faq-section">
            <div className="container">
              <div className="section-heading">
                <span className="eyebrow">{lang === 'ar' ? 'أسئلة شائعة' : 'FAQ'}</span>
                <h2 className="section-title">{lang === 'ar' ? `أسئلة شائعة حول ${page.shortTitle}` : `Frequently Asked Questions about ${page.shortTitle}`}</h2>
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
        )}

        {/* ── CTA Section ── */}
        <section className="seo-cta-section">
          <div className="container seo-cta-card">
            <div>
              <span className="eyebrow">{lang === 'ar' ? 'ابدأ الآن' : 'Start Now'}</span>
              <h2 className="section-title">{page.cta || (lang === 'ar' ? 'هل تريد حلاً مناسباً لمشروعك باستخدام أنظمة HPL؟' : 'Do you want a suitable solution for your project using HPL systems?')}</h2>
            </div>
            <Link href={`/${lang}#contact`} className="btn btn-primary">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</Link>
          </div>
        </section>
      </main>

      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={serviceSchema} />
      {faqSchema && <SchemaOrg schema={faqSchema} />}
    </>
  );
}
