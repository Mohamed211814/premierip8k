import { Metadata } from 'next';
import { siteConfig } from '../config/site';

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
}: ConstructMetadataProps = {}): Metadata {
  const url = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} : Meilleur Abonnement IPTV 4K & FHD en France`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || [siteConfig.name],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${siteConfig.url}${image}`],
      creator: '@PremierIPTV_FR',
    },
    verification: {
      google: siteConfig.verification.google,
    },
  };
}
