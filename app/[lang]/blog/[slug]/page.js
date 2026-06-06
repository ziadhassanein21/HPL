import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getSiteUrl, siteConfig } from '../../../../lib/site';
import SchemaOrg from '../../../../components/SchemaOrg';
import { getBlogPosts, getBlogPostBySlug, getRelatedBlogPosts } from '../../../../lib/content/blog-data';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const paths = [];
  
  for (const lang of ['ar', 'en']) {
    for (const post of posts) {
      paths.push({
        lang,
        slug: post.slug,
      });
    }
  }
  
  return paths;
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const postLang = post[lang];
  const url = `${getSiteUrl()}/${lang}/blog/${post.slug}`;
  const imageUrl = `${getSiteUrl()}${post.image}`;

  return {
    title: postLang.title,
    description: postLang.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: postLang.title,
      description: postLang.description,
      url,
      siteName: siteConfig.name,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: postLang.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: postLang.title,
      description: postLang.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPost({ params }) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postLang = post[lang];
  const url = `${getSiteUrl()}/${lang}/blog/${post.slug}`;
  const relatedPosts = getRelatedBlogPosts(post.slug, post.relatedSlugs || []).map((item) => ({
    slug: item.slug,
    title: item[lang].title,
    description: item[lang].description,
    image: item.image,
  }));
  const faqItems = postLang.faq || [];
  const dateModified = post.updatedAt || post.date;
  const categoryLabel = post.category?.[lang] || post.category?.en || postLang.category || '';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'ar' ? 'الرئيسية' : 'Home', item: `${getSiteUrl()}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'ar' ? 'المدونة' : 'Blog', item: `${getSiteUrl()}/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: postLang.title, item: url },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: postLang.title,
    image: `${getSiteUrl()}${post.image}`,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${getSiteUrl()}${siteConfig.logo}`,
      },
    },
    datePublished: post.date,
    dateModified,
    articleSection: categoryLabel,
    keywords: postLang.keywords || [categoryLabel, postLang.title].filter(Boolean),
  };

  const faqSchema = faqItems.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  return (
    <>
      <main className="seo-page" style={{ paddingTop: '100px' }}>
        <div className="container">
          <Link href={`/${lang}/blog`} className="seo-back-link">
            <span>&larr;</span> {lang === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>

          <article className="seo-content-main blog-content-article" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="blog-hero-banner">
              <Image src={post.image} alt={postLang.title} fill priority sizes="(max-width: 1024px) 100vw, 850px" />
              <div className="blog-hero-overlay">
                <div className="blog-article-meta">
                  <span className="blog-meta-date">
                    {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="blog-category-chip blog-category-chip-dark">{categoryLabel}</span>
                  <span className="blog-readtime">{post.readTime} {lang === 'ar' ? 'دقائق قراءة' : 'min read'}</span>
                </div>
                <h1 className="seo-main-title">{postLang.title}</h1>
                <p className="blog-article-description">{postLang.description}</p>
              </div>
            </div>

            {/* Render dynamic HTML content from blog-data.js */}
            <div dangerouslySetInnerHTML={{ __html: postLang.html }} />

            {faqItems.length > 0 && (
              <section className="seo-faq-section blog-faq-wrap">
                <div className="section-heading">
                  <span className="eyebrow">{lang === 'ar' ? 'أسئلة المقال' : 'Article FAQ'}</span>
                  <h2 className="section-title">{lang === 'ar' ? 'أسئلة متكررة مرتبطة بهذا المقال' : 'Frequently Asked Questions'}</h2>
                </div>
                <div className="seo-faq-grid">
                  {faqItems.map((item) => (
                    <article className="seo-faq-card" key={item.q}>
                      <h3>{item.q}</h3>
                      <p>{item.a}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {relatedPosts.length > 0 && (
              <section className="blog-related-section">
                <div className="section-heading">
                  <span className="eyebrow">{lang === 'ar' ? 'مقالات ذات صلة' : 'Related Reading'}</span>
                  <h2 className="section-title">{lang === 'ar' ? 'تابع القراءة' : 'Continue Reading'}</h2>
                </div>
                <div className="blog-related-grid">
                  {relatedPosts.map((item) => (
                    <Link key={item.slug} href={`/${lang}/blog/${item.slug}`} className="blog-related-card">
                      <div className="blog-related-image">
                        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 280px" />
                      </div>
                      <div className="blog-related-copy">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </main>

      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={articleSchema} />
      {faqSchema && <SchemaOrg schema={faqSchema} />}
    </>
  );
}
