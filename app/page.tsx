import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesGrid } from '@/components/home/FeaturesGrid';
import { PricingSection } from '@/components/home/PricingSection';
import { CompatibilityShowcase } from '@/components/home/CompatibilityShowcase';
import { FranceAdvantageSection } from '@/components/home/FranceAdvantageSection';
import { FaqHomeSection } from '@/components/home/FaqHomeSection';
import { LatestPostsSection } from '@/components/home/LatestPostsSection';
import { CtaBanner } from '@/components/home/CtaBanner';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Premier IPTV : Meilleur Abonnement IPTV 4K & FHD en France',
  description:
    'Découvrez Premier IPTV : service de télévision par internet haute qualité en France. Plus de 18 000 chaînes 4K/FHD, 65 000 films et séries VOD, EPG 7 jours et serveurs Anti-Freeze v5 sans coupure.',
  canonical: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <PricingSection />
      <FranceAdvantageSection />
      <CompatibilityShowcase />
      <FaqHomeSection />
      <LatestPostsSection />
      <CtaBanner
        title="Profitez de l’expérience Premier IPTV dès aujourd'hui"
        subtitle="Accédez à un catalogue complet de chaînes et VOD 4K en quelques minutes sur votre Smart TV ou boîtier."
      />
    </>
  );
}
