export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription: string;
  excerpt?: string;
  content: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  category?: string;
  categorySlug?: string;
  tags?: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  isPublished: boolean;
  relatedSlugs?: string[];
  ctaLabels?: {
    top?: string;
    center?: string;
    bottom?: string;
  };
}

export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
  iconName?: string;
}
