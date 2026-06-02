import Link from 'next/link';
import { getDictionary } from '../../../dictionaries';
import { getLocalizedUrl, getSiteUrl, siteConfig } from '../../../lib/site';
import SchemaOrg from '../../../components/SchemaOrg';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentUrl = `${getLocalizedUrl(lang)}/blog`;
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;
  const title = lang === 'ar' ? 'المدونة | NEW BASIC Company' : 'Blog | NEW BASIC Company';
  const description = lang === 'ar' 
    ? 'اقرأ أحدث المقالات والدلائل حول أنظمة قواطع الحمامات واللوكرات وكبائن الاستحمام HPL.'
    : 'Read the latest articles and guides about HPL bathroom partitions, lockers, and shower cubicles.';

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        ar: `${getSiteUrl()}/ar/blog`,
        en: `${getSiteUrl()}/en/blog`,
        'x-default': `${getSiteUrl()}/ar/blog`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: siteConfig.name,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogIndex({ params }) {
  const { lang } = await params;
  const currentUrl = `${getLocalizedUrl(lang)}/blog`;
  const title = lang === 'ar' ? 'المدونة' : 'Blog';
  const description = lang === 'ar' 
    ? 'أحدث المقالات والدلائل الإرشادية'
    : 'Latest articles and practical guides';

  // For now, we manually define the available blog posts.
  // This can be refactored to read from lib/content or a CMS later.
  const posts = [
    {
      slug: 'hpl-vs-mdf-vs-pvc',
      title: lang === 'ar' 
        ? 'HPL مقابل MDF مقابل PVC: أي خامة تختار لقواطع حمامات مشروعك؟'
        : 'HPL vs MDF vs PVC: Which material to choose for your bathroom partitions?',
      description: lang === 'ar'
        ? 'مقارنة شاملة بين خامات قواطع الحمامات HPL وMDF وPVC من حيث تحمل الرطوبة والمتانة وتكاليف الصيانة ومدة الخدمة. دليل المشتري السعودي.'
        : 'A comprehensive comparison between HPL, MDF, and PVC bathroom partition materials in terms of moisture resistance, durability, and maintenance costs.',
      image: '/Images/hpl-bathroom-partition-riyadh.webp',
      date: new Date().toISOString()
    }
  ];

  const itemListElement = posts.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${getSiteUrl()}/${lang}/blog/${post.slug}`
  }));

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'ar' ? 'الرئيسية' : 'Home', item: `${getSiteUrl()}/${lang}` },
      { '@type': 'ListItem', position: 2, name: title, item: currentUrl },
    ],
  };

  return (
    <>
      <main className="seo-page" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="section-heading text-center" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">{title}</span>
            <h1 className="section-title">{description}</h1>
          </div>
          
          <div className="landing-links-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {posts.map((post) => (
              <Link className="landing-link-card seo-related-card" href={`/${lang}/blog/${post.slug}`} key={post.slug} title={post.title} style={{ padding: '2rem' }}>
                <div className="landing-link-body">
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>{post.title}</h2>
                  <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '1.5rem' }}>{post.description}</p>
                  <span className="read-more" style={{ color: 'var(--gold)', fontWeight: 600 }}>{lang === 'ar' ? 'اقرأ المقال كاملاً' : 'Read full article'}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SchemaOrg schema={blogSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
    </>
  );
}
