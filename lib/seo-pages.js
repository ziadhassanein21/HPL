import { p2BathroomPartitions } from './content/p2-bathroom-partitions';
import { p3Lockers } from './content/p3-lockers';
import { p4ShowerCubicles } from './content/p4-shower-cubicles';
import { p5PhenolicPanels } from './content/p5-phenolic-panels';

import { p2BathroomPartitionsEn } from './content/p2-bathroom-partitions-en';
import { p3LockersEn } from './content/p3-lockers-en';
import { p4ShowerCubiclesEn } from './content/p4-shower-cubicles-en';
import { p5PhenolicPanelsEn } from './content/p5-phenolic-panels-en';
import { p6HplPrices } from './content/p6-hpl-prices';
import { p6HplPricesEn } from './content/p6-hpl-prices-en';
import { p7HplGuide } from './content/p7-hpl-guide';
import { p7HplGuideEn } from './content/p7-hpl-guide-en';
import { p8MaterialComparison } from './content/p8-material-comparison';
import { p8MaterialComparisonEn } from './content/p8-material-comparison-en';
import { p9HplCladding } from './content/p9-hpl-cladding';
import { p9HplCladdingEn } from './content/p9-hpl-cladding-en';
import { p10TechnicalSpecs } from './content/p10-technical-specs';
import { p10TechnicalSpecsEn } from './content/p10-technical-specs-en';
import { p11HplVsMdf } from './content/p11-hpl-vs-mdf';
import { p11HplVsMdfEn } from './content/p11-hpl-vs-mdf-en';
import { p12HplMaintenance } from './content/p12-hpl-maintenance';
import { p12HplMaintenanceEn } from './content/p12-hpl-maintenance-en';
import { arSeoClusterPages, enSeoClusterPages } from './content/seo-clusters';

export const seoPages = {
  ar: [
    p2BathroomPartitions,
    p3Lockers,
    p4ShowerCubicles,
    p5PhenolicPanels,
    p6HplPrices,
    p7HplGuide,
    p8MaterialComparison,
    p9HplCladding,
    p10TechnicalSpecs,
    p11HplVsMdf,
    p12HplMaintenance,
    ...arSeoClusterPages,
  ],
  en: [
    p2BathroomPartitionsEn,
    p3LockersEn,
    p4ShowerCubiclesEn,
    p5PhenolicPanelsEn,
    p6HplPricesEn,
    p7HplGuideEn,
    p8MaterialComparisonEn,
    p9HplCladdingEn,
    p10TechnicalSpecsEn,
    p11HplVsMdfEn,
    p12HplMaintenanceEn,
    ...enSeoClusterPages,
  ],
};

export function getSeoPages(lang) {
  return seoPages[lang] || [];
}

export function getResources(lang) {
  const pages = getSeoPages(lang);
  // Precisely select the desired resources to avoid duplication
  const targetSlugs = [
    'hpl-prices-saudi-arabia-2026',
    'what-is-hpl-compact-phenolic-guide',
    'hpl-vs-mdf-vs-marble-comparison-ksa',
    'hpl-technical-specifications-submittals-ksa',
    'hpl-cleaning-maintenance-guide-ksa'
  ];
  return pages.filter(page => targetSlugs.includes(page.slug));
}

export function getProjectGuides(lang) {
  const pages = getSeoPages(lang);
  // Returns City pages and Industry Clusters
  return pages.filter(page => 
    !page.slug.includes('prices') && 
    !page.slug.includes('guide') && 
    !page.slug.includes('comparison') &&
    !page.slug.includes('maintenance') &&
    // Also exclude core product pages p2-p5 if we only want "Industry/City" guides
    !['bathroom-partitions', 'hpl-lockers-ksa', 'shower-cubicles-ksa', 'phenolic-panels-ksa', 'hpl-exterior-cladding-wall-lining-ksa', 'hpl-technical-specifications-submittals-ksa', 'hpl-vs-mdf-comparison-ksa', 'hpl-cleaning-maintenance-guide-ksa'].includes(page.slug)
  );
}

export function getSeoPageBySlug(lang, slug) {
  return getSeoPages(lang).find((page) => page.slug === slug);
}
