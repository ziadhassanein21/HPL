import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '../../../dictionaries';
import { getLocalizedUrl, getSiteUrl, siteConfig } from '../../../lib/site';
import SchemaOrg from '../../../components/SchemaOrg';
import { getBlogPosts } from '../../../lib/content/blog-data';

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

  const allPosts = getBlogPosts();
  const posts = allPosts.map(post => ({
    slug: post.slug,
    title: post[lang].title,
    description: post[lang].description,
    image: post.image,
    date: post.date
  }));

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
          
          <div className="landing-links-grid" style={{ maxWidth: '1000px', margin: '0 auto', gap: '2.5rem' }}>
            {posts.map((post) => (
              <Link className="landing-link-card" href={`/${lang}/blog/${post.slug}`} key={post.slug} title={post.title}>
                <div className="blog-card-image">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 500px" />
                </div>
                <div className="landing-link-body">
                  <span className="blog-meta-date">
                    {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)', lineHeight: 1.4 }}>{post.title}</h2>
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
