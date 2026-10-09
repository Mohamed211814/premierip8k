export interface PricingFeature {
  name: string;
  included: boolean;
  highlight?: boolean;
  tooltip?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  durationMonths: number;
  price: number;
  originalPrice?: number;
  monthlyEquivalent: number;
  badge?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  screens: number;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technique' | 'installation' | 'abonnement' | 'legalite';
}

export interface InstallationGuide {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  device: string;
  appName: string;
  difficulty: 'Facile' | 'Moyen' | 'Avancé';
  estimatedTime: string;
  excerpt: string;
  prerequisites: string[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    tip?: string;
  }[];
  relatedGuides?: string[];
}

export interface CompatibleDevice {
  id: string;
  name: string;
  category: string;
  icon: string;
  recommendedApps: string[];
  supportedProtocols: string[];
  setupTime: string;
  description: string;
  guideSlug?: string;
}
