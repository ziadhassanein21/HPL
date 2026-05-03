import Script from 'next/script';
import Link from 'next/link';
import ExpandableImage from '../components/ui/ExpandableImage';
import { notFound } from 'next/navigation';
import { getSeoPageBySlug, getSeoPages } from '../../../lib/seo-pages';
import { getLocalizedUrl, getSiteUrl, hasRealContactValue, siteConfig } from '../../../lib/site';
import SchemaOrg from '../../../components/SchemaOrg';
import RelatedPages from '../components/RelatedPages';

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
  return getSeoPages('ar').map((page) => ({
    lang: 'ar',
    slug: page.slug,
  }));
}

export default async function SeoServicePage({ params }) {
  const { lang, slug } = await params;
  const page = getSeoPageBySlug(lang, slug);
  if (!page) notFound();

  const pageUrl = page.canonical || `${getLocalizedUrl(lang)}/${page.slug}`;
  const imageUrl = `${getSiteUrl()}${page.image || siteConfig.ogImage}`;

  /* ── TASK A5-d — BreadcrumbList schema ── */
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://hplksa.com/ar' },
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
              <Link href="/ar" className="seo-back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                العودة إلى الصفحة الرئيسية
              </Link>
              <span className="eyebrow">{page.shortTitle}</span>
              <h1 className="section-title seo-main-title">{page.heroTitle}</h1>
              <p className="section-subtitle align-start">{page.heroText}</p>
              <div className="seo-hero-actions">
                <Link href="/ar#contact" className="btn btn-primary">اطلب عرض سعر</Link>
                <Link href="/ar" className="btn btn-secondary">استعرض الموقع</Link>
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
                      <table className="seo-specs-table">
                        <thead>
                          <tr><th>المواصفة</th><th>القيمة</th></tr>
                        </thead>
                        <tbody>
                          {section.specsData.map((spec) => (
                            <tr key={spec.label}><td>{spec.label}</td><td>{spec.value}</td></tr>
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
                <h3>نقاط أساسية</h3>
                <ul className="seo-list">
                  {page.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="seo-side-card">
                <h3>نقاط مهمة للمشروع</h3>
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
                <span className="eyebrow">أسئلة شائعة</span>
                <h2 className="section-title">أسئلة شائعة حول {page.shortTitle}</h2>
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
              <span className="eyebrow">ابدأ الآن</span>
              <h2 className="section-title">{page.cta || 'هل تريد حلاً مناسباً لمشروعك باستخدام أنظمة HPL؟'}</h2>
            </div>
            <Link href="/ar#contact" className="btn btn-primary">تواصل معنا</Link>
          </div>
        </section>

        {/* ── TASK C — Related Links Section ── */}
        <RelatedPages currentPage={slug} />
      </main>

      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={serviceSchema} />
      {faqSchema && <SchemaOrg schema={faqSchema} />}
    </>
  );
}
