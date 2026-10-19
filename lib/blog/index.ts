import { blogPosts, blogCategories } from '@/lib/content/posts';
import { BlogPost, BlogCategory } from '@/types/blog';

/**
 * Retrieves all published blog posts.
 * Articles are sorted in reverse chronological order (newest first).
 */
export function getAllPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.isPublished)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Retrieves a single published blog post by its slug.
 * Returns undefined if no published post matches the given slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.isPublished);
}

/**
 * Retrieves all registered blog categories.
 */
export function getAllCategories(): BlogCategory[] {
  return blogCategories;
}

/**
 * Retrieves a category by its slug.
 */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((cat) => cat.slug === slug);
}

/**
 * Retrieves all published article slugs for static route generation.
 */
export function getAllPublishedSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
