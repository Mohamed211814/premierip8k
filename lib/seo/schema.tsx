import React from 'react';
import { siteConfig } from '../config/site';
import { BlogPost } from '@/types/blog';
import { FAQItem, InstallationGuide, PricingPlan } from '@/types/content';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer support',
      email: siteConfig.contact.supportEmail,
      availableLanguage: ['French', 'English'],
    },
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ post }: { post: BlogPost }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage.startsWith('http')
      ? post.featuredImage
      : `${siteConfig.url}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: 'fr-FR',
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductPricingSchema({ plans }: { plans: PricingPlan[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Abonnement Premier IPTV 4K France',
    description: 'Abonnement IPTV haute qualité avec chaînes en direct 4K/FHD, VOD illimitée, Replay et EPG.',
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: plans.map((plan) => ({
      '@type': 'Offer',
      name: `Abonnement ${plan.name} : Premier IPTV`,
      price: plan.price.toFixed(2),
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/abonnement-iptv`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({ guide }: { guide: InstallationGuide }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.metaDescription,
    totalTime: guide.estimatedTime,
    step: guide.steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.stepNumber,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
