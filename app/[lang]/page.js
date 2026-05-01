import { getDictionary } from '../../dictionaries';
import ClientPage from './ClientPage';
import { getLocalizedUrl, getSiteUrl, hasRealContactValue, siteConfig } from '../../lib/site';
import { generateSchemaGraph } from '../../lib/seo-schema';

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const pageUrl = getLocalizedUrl(lang);
  const imageUrl = `${getSiteUrl()}${siteConfig.ogImage}`;

  const schemaGraph = generateSchemaGraph(dict, lang, pageUrl, imageUrl, siteConfig, hasRealContactValue, getSiteUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <ClientPage dict={dict} lang={lang} />
    </>
  );
}
