const baseSpecs = [
  { label: 'الخامة', value: 'ألواح HPL كومباكت فينوليك مقاومة للماء' },
  { label: 'السماكات الشائعة', value: '10 / 12 / 13 مم حسب طبيعة الاستخدام' },
  { label: 'الإكسسوارات', value: 'SS304 فولاذ مقاوم للصدأ للرطوبة والاستخدام المكثف' },
  { label: 'الخدمة', value: 'معاينة، رفع مقاسات، توريد، تركيب، وتسليم' },
  { label: 'مناطق التنفيذ', value: 'جميع مدن ومناطق المملكة العربية السعودية' },
  { label: 'الاستخدامات', value: 'قواطع حمامات، لوكرات، كبائن استحمام، وفواصل مناطق رطبة' },
];



const industryData = [
  {
    slug: 'hpl-partitions-schools-ksa',
    shortTitle: 'قواطع HPL للمدارس',
    metaTitle: 'قواطع حمامات HPL للمدارس في السعودية | متانة وسهولة صيانة',
    metaDescription: 'حلول قواطع حمامات HPL للمدارس والجامعات في السعودية. مقاومة للصدمات والرطوبة وسهلة التنظيف مع مقاسات مناسبة للطلاب.',
    image: '/Images/hpl-partition-schools-ksa.webp',
    segment: 'المدارس والجامعات',
    painPoint: 'تتعرض حمامات المدارس لاستخدام متكرر وخدوش ورطوبة وتنظيف يومي، لذلك تفشل المواد الخشبية أو الرخيصة بسرعة وتصبح تكلفة الصيانة متكررة.',
    outcome: 'قواطع فينوليك ثابتة وسهلة التنظيف تحافظ على الخصوصية والمظهر المنظم خلال العام الدراسي.',
  },
  {
    slug: 'hpl-lockers-gyms-ksa',
    shortTitle: 'لوكرات HPL للأندية',
    metaTitle: 'لوكرات HPL للأندية والجيم في السعودية | خزائن مقاومة للرطوبة',
    metaDescription: 'لوكرات HPL للأندية الرياضية وغرف تبديل الملابس في السعودية. خزائن فينوليك مقاومة للرطوبة والعرق مع أقفال وتقسيمات مخصصة.',
    image: '/Images/hpl-locker-gym-facilities-ksa.webp',
    segment: 'الأندية الرياضية والجيم',
    painPoint: 'غرف تبديل الملابس تجمع بين رطوبة عالية، عرق، تنظيف متكرر، وفتح وإغلاق يومي للوكرات، وهذا يسبب صدأ المعدن وانتفاخ الخشب.',
    outcome: 'خزائن HPL مقاومة للماء والروائح، بتقسيمات عملية وأقفال مناسبة لتجربة أعضاء أكثر أماناً وتنظيماً.',
  },
  {
    slug: 'hpl-partitions-malls-ksa',
    shortTitle: 'قواطع HPL للمولات',
    metaTitle: 'قواطع حمامات HPL للمولات في السعودية | تحمل استخدام كثيف',
    metaDescription: 'قواطع حمامات HPL للمولات والمراكز التجارية في السعودية. مظهر راق ومتانة عالية للمرافق ذات الزيارات اليومية الكثيفة.',
    image: '/Images/hpl-partition-shopping-mall-ksa.webp',
    segment: 'المولات والمراكز التجارية',
    painPoint: 'دورات المياه في المولات تعمل لساعات طويلة وتستقبل آلاف الزوار، وأي ضعف في الخامة يظهر سريعاً في الأبواب والفواصل والإكسسوارات.',
    outcome: 'نظام قواطع HPL يعطي خصوصية عالية، مظهر ثابت، وتنظيف أسهل مع تقليل الاستبدال المتكرر.',
  },
  {
    slug: 'hpl-partitions-hospitals-ksa',
    shortTitle: 'قواطع HPL للمستشفيات',
    metaTitle: 'قواطع حمامات HPL للمستشفيات في السعودية | أسطح صحية',
    metaDescription: 'قواطع HPL للمستشفيات والعيادات في السعودية. أسطح غير مسامية وسهلة التعقيم ومقاومة للرطوبة والتنظيف المتكرر.',
    image: '/Images/hpl-partition-hospitals-ksa.webp',
    segment: 'المستشفيات والعيادات',
    painPoint: 'المنشآت الصحية تحتاج خامات لا تمتص الرطوبة أو الروائح وتتحمل التعقيم المتكرر دون تقشر أو انتفاخ.',
    outcome: 'قواطع HPL بسطح غير مسامي يساعد فرق التشغيل على الحفاظ على النظافة وتقليل الصيانة.',
  },
  {
    slug: 'hpl-partitions-offices-ksa',
    shortTitle: 'قواطع HPL للمكاتب',
    metaTitle: 'قواطع حمامات HPL للمكاتب والشركات في السعودية',
    metaDescription: 'توريد وتركيب قواطع حمامات HPL للمكاتب والشركات والمباني الإدارية في السعودية. تشطيب احترافي ومقاسات مخصصة وسهولة صيانة.',
    image: '/Images/hpl-partition-corporate-office-ksa.webp',
    segment: 'المكاتب والمباني الإدارية',
    painPoint: 'مرافق الموظفين والزوار في المكاتب تحتاج تشطيباً هادئاً واحترافياً، لكن المواد الضعيفة تفقد شكلها بسرعة مع الرطوبة والتنظيف.',
    outcome: 'قواطع فينوليك تعطي مظهراً منظماً يناسب هوية الشركة مع أداء طويل وسهولة عناية يومية.',
  },
  {
    slug: 'hpl-partitions-mosques-ksa',
    shortTitle: 'قواطع HPL للمساجد',
    metaTitle: 'قواطع حمامات HPL للمساجد في السعودية | مقاومة للرطوبة',
    metaDescription: 'قواطع حمامات ومواضئ HPL للمساجد والجوامع في السعودية. مقاومة للماء والتنظيف المتكرر ومناسبة للاستخدام اليومي العالي.',
    image: '/Images/hpl-mosques-clean.webp',
    segment: 'المساجد والجوامع',
    painPoint: 'مناطق الوضوء ودورات المياه في المساجد تتعرض للماء المباشر والتنظيف المستمر، لذلك تحتاج فواصل لا تنتفخ ولا تصدأ.',
    outcome: 'حل HPL عملي للمناطق الرطبة يحافظ على الخصوصية والنظافة ويقلل أعطال الصيانة بعد التركيب.',
  },
];




function industryPage(item) {
  return {
    slug: item.slug,
    image: item.image,
    shortTitle: item.shortTitle,
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
    canonical: `https://hplksa.com/ar/${item.slug}`,
    heroTitle: `${item.shortTitle} في السعودية`,
    heroText: `حلول HPL فينوليك مخصصة لاحتياج ${item.segment} في السعودية، مع توريد وتركيب ومقاسات تناسب الاستخدام اليومي المكثف.`,
    sections: [
      {
        title: `تحدي ${item.segment}`,
        body: `${item.painPoint}\n\nلذلك لا يكفي اختيار شكل جميل؛ المهم هو خامة تتحمل الرطوبة والتنظيف والفتح والإغلاق المستمر. HPL الكومباكت فينوليك يقدم هذا التوازن لأنه صلب، غير مسامي، وسهل العناية.`,
      },
      {
        title: 'المواصفات المقترحة للمشروع',
        body: 'يتم اختيار السماكة والإكسسوارات ونظام الأقفال أو الفواصل بناء على عدد المستخدمين وطبيعة التشغيل. في المشاريع عالية الاستخدام نوصي بتثبيت مواصفات واضحة من البداية حتى لا تتكرر أعمال الصيانة بعد التسليم.',
        isSpecsTable: true,
        specsData: baseSpecs,
      },
      {
        title: 'ما النتيجة المتوقعة بعد التركيب؟',
        body: `${item.outcome}\n\nيمكن توحيد الخامة بين قواطع الحمامات واللوكرات وكبائن الاستحمام عند الحاجة، وهذا يعطي المشروع مظهراً متناسقاً ويجعل الصيانة اليومية أسهل على فريق التشغيل.`,
      },
      {
        title: 'تفاصيل يجب حسمها قبل عرض السعر',
        body: 'نحتاج معرفة المدينة، نوع المنشأة، عدد الكبائن أو الخزائن، المقاسات التقريبية، مستوى الخصوصية المطلوب، ونوع التشطيب. هذه البيانات تساعد على تقديم عرض دقيق بدلاً من تسعير عام قد يتغير لاحقاً.',
      },
      {
        title: 'توريد وتركيب في مدن السعودية',
        body: 'نخدم مشاريع HPL في الرياض وجدة والدمام والخبر ومكة والمدينة وباقي مدن المملكة حسب نطاق العمل. يمكن البدء بمراجعة المخططات أو زيارة الموقع ثم اقتراح النظام الأنسب.',
      },
    ],
    faq: [
      { q: `هل HPL مناسب لـ ${item.segment}؟`, a: `نعم، لأن الخامة مقاومة للرطوبة والاستخدام المتكرر وسهلة التنظيف، وهي مناسبة للمنشآت التي تحتاج إلى تشغيل يومي بدون صيانة متكررة.` },
      { q: 'هل يمكن تخصيص المقاسات والألوان؟', a: 'نعم، يتم تنفيذ المقاسات حسب الموقع مع اختيار ألوان وتشطيبات تناسب هوية المشروع ونوع المستخدمين.' },
      { q: 'هل الخدمة تشمل التركيب؟', a: 'نعم، الخدمة تشمل التوريد والتركيب بعد اعتماد المقاسات والمواصفات النهائية.' },
    ],
    cta: `هل لديك مشروع ${item.segment}؟ أرسل التفاصيل وسنقترح حل HPL مناسباً مع عرض سعر واضح.`,
    highlights: [
      `حل مخصص لـ ${item.segment}`,
      'خامة مقاومة للماء والتنظيف اليومي',
      'مقاسات وتشطيبات حسب طبيعة المشروع',
    ],
    specs: [
      'مناسب للمرافق عالية الاستخدام',
      'يمكن دمجه مع قواطع ولوكرات وكبائن من نفس الخامة',
      'إكسسوارات مقاومة للصدأ',
      'استشارة قبل التسعير لتقليل الهدر والتعديلات',
    ],
  };
}

export const arSeoClusterPages = [
  ...industryData.map(industryPage),
];


function industryPageEn(item) {
  // Simple English version of the cluster pages
  const segmentsEn = {
    'المدارس والجامعات': 'Schools & Universities',
    'الأندية الرياضية والجيم': 'Sports Clubs & Gyms',
    'المولات والمراكز التجارية': 'Shopping Malls',
    'المستشفيات والعيادات': 'Hospitals & Clinics',
    'المكاتب والمباني الإدارية': 'Offices & Corporate Buildings',
    'المساجد والجوامع': 'Mosques',
  };

  const shortTitlesEn = {
    'قواطع HPL للمدارس': 'HPL Partitions for Schools',
    'لوكرات HPL للأندية': 'HPL Lockers for Gyms',
    'قواطع HPL للمولات': 'HPL Partitions for Malls',
    'قواطع HPL للمستشفيات': 'HPL Partitions for Hospitals',
    'قواطع HPL للمكاتب': 'HPL Partitions for Offices',
    'قواطع HPL للمساجد': 'HPL Partitions for Mosques',
  };

  return {
    slug: item.slug,
    image: item.image,
    shortTitle: shortTitlesEn[item.shortTitle] || item.shortTitle,
    metaTitle: `${shortTitlesEn[item.shortTitle] || item.shortTitle} in Saudi Arabia | HPL Solutions`,
    metaDescription: `High-quality HPL phenolic solutions for ${segmentsEn[item.segment] || item.segment} across Saudi Arabia. Durable, moisture-resistant, and professional installation.`,
    canonical: `https://hplksa.com/en/${item.slug}`,
    heroTitle: `${shortTitlesEn[item.shortTitle] || item.shortTitle} in Saudi Arabia`,
    heroText: `Customized HPL phenolic solutions for ${segmentsEn[item.segment] || item.segment} requirements in Saudi Arabia, with professional supply and installation.`,
    sections: [
      {
        title: `${segmentsEn[item.segment] || item.segment} Challenges`,
        body: `Facilities in the ${segmentsEn[item.segment] || item.segment} sector face heavy daily use, moisture, cleaning cycles and privacy requirements. Standard materials often fail, leading to repeated maintenance and poor user experience. Compact phenolic HPL provides a stronger specification route because the panel, hardware and installation scope can be reviewed before fabrication.`,
      },
      {
        title: 'Proposed Specifications',
        body: 'We recommend specific thicknesses and hardware grades based on expected traffic, humidity level, cleaning routine and project budget. For high-use wet areas, 12-13 mm compact panels and SS304 hardware are usually the safer starting point.',
        isSpecsTable: true,
        specsData: [
          { label: 'Material', value: 'Waterproof HPL Compact Phenolic Panels' },
          { label: 'Thickness', value: '10 / 12 / 13 mm based on application' },
          { label: 'Hardware', value: 'SS304 Rust-proof Stainless Steel' },
          { label: 'Service', value: 'Survey, Measurement, Supply, and Installation' },
          { label: 'Coverage', value: 'All cities in Saudi Arabia' },
        ],
      },
      {
        title: 'Expected Result After Installation',
        body: `The target outcome is a cleaner, more stable system for ${segmentsEn[item.segment] || item.segment}: better privacy, easier maintenance, and fewer replacement interruptions. The same HPL material can also be used across partitions, lockers and shower cubicles when the project needs a unified finish.`,
      },
      {
        title: 'Details Needed Before Quotation',
        body: 'To prepare an accurate quote, send the city, facility type, number of cubicles or lockers, approximate dimensions, drawings or site photos, privacy level, finish preference, hardware preference, and target timeline. This prevents generic pricing that changes later.',
      },
      {
        title: 'Supply and Installation Across KSA',
        body: 'We support HPL projects in Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina and other Saudi cities depending on scope. Work can start from drawing review or a site visit, followed by specification, fabrication coordination, installation and handover.',
      },
    ],
    faq: [
      { q: `Is HPL suitable for ${segmentsEn[item.segment] || item.segment}?`, a: `Yes, because the material is moisture-resistant, durable, and easy to clean, making it perfect for high-traffic environments.` },
      { q: 'Can we customize colors and sizes?', a: 'Yes, all partitions and lockers are custom-sized for your site with a wide range of colors to match your brand.' },
      { q: 'Does the service include installation?', a: 'Yes, the scope can include survey, measurement, supply and installation after final specification approval.' },
    ],
    cta: `Do you have a project for ${segmentsEn[item.segment] || item.segment}? Contact us for a professional HPL proposal.`,
    highlights: [
      'Tailored for high-traffic facilities',
      'Moisture-resistant and impact-resistant options',
      'Professional installation across KSA',
    ],
    specs: [
      'Built for heavy daily use',
      'Compatible hardware systems',
      'Low maintenance costs',
    ],
  };
}

export const enSeoClusterPages = [
  ...industryData.map(industryPageEn),
];

