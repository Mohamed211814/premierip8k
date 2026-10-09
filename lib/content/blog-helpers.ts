import { blogPosts, blogCategories } from './posts';
import { BlogPost, BlogCategory } from '@/types/blog';

export function getAllPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.isPublished);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug && p.isPublished);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(
    (p) => p.categorySlug === categorySlug && p.isPublished
  );
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = blogPosts.find((p) => p.slug === currentSlug);
  if (!currentPost) return blogPosts.slice(0, limit);

  if (currentPost.relatedSlugs && currentPost.relatedSlugs.length > 0) {
    const matched = blogPosts.filter((p) =>
      currentPost.relatedSlugs?.includes(p.slug)
    );
    if (matched.length > 0) return matched.slice(0, limit);
  }

  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.categorySlug === currentPost.categorySlug)
    .slice(0, limit);
}

export function getAllCategories(): BlogCategory[] {
  return blogCategories;
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function searchPosts(query: string, categorySlug?: string): BlogPost[] {
  let filtered = getAllPosts();

  if (categorySlug && categorySlug !== 'all') {
    filtered = filtered.filter((p) => p.categorySlug === categorySlug);
  }

  if (query.trim()) {
    const q = query.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.content.toLowerCase().includes(q)
    );
  }

  return filtered;
}
