import { notFound } from 'next/navigation';
import { getSiteUrl, siteConfig } from '../../../../lib/site';
import SchemaOrg from '../../../../components/SchemaOrg';
import { getBlogPosts, getBlogPostBySlug } from '../../../../lib/content/blog-data';

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
  };

  return (
    <>
      <main className="seo-page" style={{ paddingTop: '100px' }}>
        <div className="container">
          <article className="seo-content-main" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title seo-main-title" style={{ marginBottom: '2rem' }}>
              {postLang.title}
            </h1>

            {/* Render dynamic HTML content from blog-data.js */}
            <div dangerouslySetInnerHTML={{ __html: postLang.html }} />

          </article>
        </div>
      </main>

      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={articleSchema} />
    </>
  );
}
