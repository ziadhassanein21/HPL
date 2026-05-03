import { getDictionary } from '../../dictionaries';
import ClientPage from './ClientPage';
import { getSiteUrl, siteConfig } from '../../lib/site';
import SchemaOrg from '../../components/SchemaOrg';

/* ── TASK A6 — P1 Homepage metadata ── */
export const metadata = {
  title: 'قواطع حمامات HPL وخزائن وكبائن استحمام في السعودية | NEW BASIC',
  description: 'نورّد ونركّب قواطع حمامات HPL وخزائن وكبائن استحمام فينوليك في الرياض وجدة والمملكة. مقاومة تامة للرطوبة، تركيب احترافي، ضمان جودة. اطلب عرض سعر مجاني خلال 24 ساعة.',
  alternates: {
    canonical: 'https://hplksa.com/ar',
  },
  openGraph: {
    title: 'قواطع حمامات HPL وخزائن وكبائن استحمام في السعودية | NEW BASIC',
    description: 'نورّد ونركّب قواطع حمامات HPL وخزائن وكبائن استحمام فينوليك في الرياض وجدة والمملكة. مقاومة تامة للرطوبة، تركيب احترافي، ضمان جودة. اطلب عرض سعر مجاني خلال 24 ساعة.',
    url: 'https://hplksa.com/ar',
    siteName: 'NEW BASIC Company',
    locale: 'ar_SA',
    type: 'website',
    images: [{ url: 'https://hplksa.com/Images/hpl-bathroom-partition-riyadh.jpg', width: 1200, height: 630, alt: 'قواطع حمامات HPL في السعودية' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قواطع حمامات HPL وخزائن وكبائن استحمام في السعودية | NEW BASIC',
    description: 'نورّد ونركّب قواطع حمامات HPL وخزائن وكبائن استحمام فينوليك في الرياض وجدة والمملكة. مقاومة تامة للرطوبة، تركيب احترافي، ضمان جودة. اطلب عرض سعر مجاني خلال 24 ساعة.',
    images: ['https://hplksa.com/Images/hpl-bathroom-partition-riyadh.jpg'],
  },
};

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  /* ── TASK A5-a — LocalBusiness Schema ── */
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://hplksa.com/#localbusiness',
    name: 'NEW BASIC Company',
    telephone: '+966551130855',
    email: 'newbasic.ac@gmail.com',
    url: 'https://hplksa.com',
    image: 'https://hplksa.com/Images/logo.png',
    description: 'توريد وتركيب قواطع حمامات ولوكرات وكبائن استحمام HPL فينوليك في السعودية',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753,
    },
    areaServed: [
      { '@type': 'Country', name: 'SA' },
      { '@type': 'City', name: 'Riyadh' },
      { '@type': 'City', name: 'Jeddah' },
      { '@type': 'City', name: 'Dammam' },
      { '@type': 'City', name: 'Mecca' },
      { '@type': 'City', name: 'Medina' }
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: ['https://wa.me/966551130855'],
  };

  /* ── TASK A5-b — FAQPage Schema ── */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'لماذا أختار HPL بدلاً من المواد التقليدية؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'المواد التقليدية مثل MDF و PVC تنتفخ وتتعفن عند تعرضها للرطوبة خلال بضعة أشهر. بينما تتميز ألواح HPL الكومباكت فينوليك بمقاومتها التامة للماء، الصدمات، وعمليات التنظيف المتكررة — وتحافظ على مظهرها لسنوات دون الحاجة للاستبدال.',
        },
      },
      {
        '@type': 'Question',
        name: 'كم يستغرق توريد وتركيب قواطع HPL؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'تعتمد المدة على حجم المشروع، ولكن عادةً ما يستغرق الأمر من 7 إلى 14 يوماً من أخذ المقاسات النهائية وحتى إتمام عملية التركيب.',
        },
      },
      {
        '@type': 'Question',
        name: 'هل يمكنني اختيار الألوان والمقاسات بما يتناسب مع مشروعي؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'بالتأكيد. نقوم بتفصيل كافة العناصر وفقاً لمقاسات موقعك — ونوفر مجموعة واسعة من الألوان والتشطيبات لتتناسب تماماً مع الهوية البصرية لمشروعك.',
        },
      },
    ],
  };

  /* ── TASK A5-c — AggregateRating + Reviews Schema ── */
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NEW BASIC Company',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'م. خالد العتيبي' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'تعاملنا معهم في مشروع قواطع حمامات لمبنى تجاري في الرياض. كان التركيب متقناً جداً والتسليم في الموعد المحدد بالضبط. جودة الخامة ممتازة والفرق واضح مقارنة بالمواد التقليدية منذ اليوم الأول.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'أ. سارة المالكي' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'قمنا بتركيب خزائن HPL في غرف تبديل الملابس. المظهر احترافي للغاية والصيانة سهلة جداً. لقد مر عام كامل من الاستخدام المكثف ولم تتأثر الخزائن على الإطلاق.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'م. عبدالله الشمري' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'أنصح بهم لأي مشروع يتطلب قواطع فينوليك. التواصل معهم واضح ومريح، وتوصياتهم عملية ومدروسة، كما أن النتيجة النهائية دائماً ما تتجاوز التوقعات.',
      },
    ],
  };

  /* ── TASK A5-d — Homepage BreadcrumbList ── */
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://hplksa.com/ar' },
    ],
  };

  return (
    <>
      <ClientPage dict={dict} lang={lang} />
      <SchemaOrg schema={localBusinessSchema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={reviewSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
    </>
  );
}
