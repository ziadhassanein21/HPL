import { post1 } from './blog/post1-hpl-vs-mdf-vs-pvc';
import { post2 } from './blog/post2-hpl-lockers-gyms';
import { post3 } from './blog/post3-full-height-partitions';
import { post4 } from './blog/post4-hpl-vs-ceramic-tiles';
import { post5 } from './blog/post5-hardware-guide';
import { post6 } from './blog/post6-healthcare-hygiene';

export const blogPosts = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6
];

export function getBlogPosts() {
  // Sort posts by date descending without mutating the source array
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedBlogPosts(slug, relatedSlugs = []) {
  const posts = getBlogPosts();
  const targetSlugs = new Set(relatedSlugs.filter(Boolean));

  if (targetSlugs.size === 0) {
    return posts.filter((post) => post.slug !== slug).slice(0, 3);
  }

  return posts.filter((post) => post.slug !== slug && targetSlugs.has(post.slug));
}
