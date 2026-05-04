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
    ...enSeoClusterPages,
  ],
};

export function getSeoPages(lang) {
  return seoPages[lang] || [];
}

export function getResources(lang) {
  const pages = getSeoPages(lang);
  // Returns Prices (p6), Guide (p7), and Comparison (p8)
  return pages.filter(page => 
    page.slug.includes('prices') || 
    page.slug.includes('guide') || 
    page.slug.includes('comparison')
  );
}

export function getProjectGuides(lang) {
  const pages = getSeoPages(lang);
  // Returns City pages and Industry Clusters
  return pages.filter(page => 
    !page.slug.includes('prices') && 
    !page.slug.includes('guide') && 
    !page.slug.includes('comparison') &&
    // Also exclude core product pages p2-p5 if we only want "Industry/City" guides
    !['bathroom-partitions', 'hpl-lockers-ksa', 'shower-cubicles-ksa', 'phenolic-panels-ksa'].includes(page.slug)
  );
}

export function getSeoPageBySlug(lang, slug) {
  return getSeoPages(lang).find((page) => page.slug === slug);
}
