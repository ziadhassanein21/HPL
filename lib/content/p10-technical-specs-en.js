const techStandards = [
  { label: 'European Standard', value: 'EN 438 - Performance & Specs' },
  { label: 'International Standard', value: 'ISO 4586 - Decorative Laminates' },
  { label: 'Fire Rating', value: 'ASTM E84 Class A or EN 13501-1' },
  { label: 'Chemical Resistance', value: 'SEFA 8 - Laboratory Surfaces Grade' },
  { label: 'Hygiene & Health', value: 'Antibacterial compliant with ISO 22196' },
];

export const p10TechnicalSpecsEn = {
  slug: 'hpl-technical-specifications-submittals-ksa',
  image: '/Images/hpl-specs-main.png',
  shortTitle: 'Technical Specs',
  metaTitle: 'HPL Technical Specifications & Submittals KSA | Data Sheets',
  metaDescription: 'Technical guide for HPL and compact phenolic specifications in Saudi Arabia. Download data sheets, ISO/EN standards, lab and commercial kitchen specs for projects.',
  canonical: 'https://hplksa.com/en/hpl-technical-specifications-submittals-ksa',

  heroTitle: 'Technical Specifications & Project Submittals',
  heroText: 'We provide engineers and consultants with all technical documentation and certified testing for HPL panels to ensure compliance with international quality standards and the Saudi Building Code.',

  sections: [
    {
      title: 'Standards for HPL Approval in Major Projects',
      body: 'In major government and private projects (such as Aramco, NEOM, and MoH), compact phenolic panels are strictly audited for international compliance. We ensure the supply of materials that achieve a precise balance between mechanical durability and chemical stability, providing third-party test reports upon request.',
    },
    {
      title: 'Specifications & Certifications Matrix',
      body: 'We adhere to standards that guarantee project sustainability and reduce long-term maintenance costs for facilities management.',
      isSpecsTable: true,
      specsData: techStandards,
    },
    {
      title: 'HPL for Laboratories & Medical Facilities',
      body: 'Laboratory Grade HPL requires specialized treatment to resist acids and strong solvents. Our lab-grade panels meet SEFA 8 standards and are completely non-porous, preventing absorption and facilitating full sterilization of the workspace.',
    },
    {
      title: 'Commercial Kitchen & Food Service Applications',
      body: 'In central kitchens and restaurants, HPL is used for countertops and storage cabinets due to its ability to withstand direct heat (up to 180°C for short periods) and its complete resistance to moisture, steam, and scratches—making it the ideal long-term alternative to marble or traditional wood.',
    },
  ],

  faq: [
    { q: 'Do you provide Data Sheets for submittals?', a: 'Yes, we provide all technical documents, catalogs, certificates of origin, and test reports required for consultant approval.' },
    { q: 'What is the recommended thickness for lab surfaces?', a: 'Typically, thicknesses from 16 mm to 20 mm are used for worktops to ensure rigidity and resistance to chemical and mechanical loads.' },
    { q: 'Are your HPL panels fire rated?', a: 'Fire-rated options (Class A) are available and are highly recommended for hospitals, malls, and high-occupancy commercial buildings.' }
  ],

  cta: 'Need the technical submittal for your project? Contact us for the complete documentation package.',

  highlights: [
    'Compliant with EN 438 and ISO 4586',
    'Certified chemical and fire resistance',
    'Technical support for engineers & consultants',
    'Specialized grades for labs and commercial kitchens',
  ],
  specs: [
    'Technical samples available for immediate approval',
    'Test reports from accredited laboratories',
    'Custom technical solutions per project specs',
  ],
};
