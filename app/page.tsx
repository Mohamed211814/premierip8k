import React from 'react';
import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesGrid } from '@/components/home/FeaturesGrid';
import { PricingSection } from '@/components/home/PricingSection';
import { FranceAdvantageSection } from '@/components/home/FranceAdvantageSection';
import { CompatibilityShowcase } from '@/components/home/CompatibilityShowcase';
import { FaqHomeSection } from '@/components/home/FaqHomeSection';
import { CtaBanner } from '@/components/home/CtaBanner';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Premier IPTV : Meilleur Abonnement Premier IPTV 4K & FHD en France',
  description:
    'Découvrez Premier IPTV : le service premier IPTV de télévision par internet haute qualité en France. Plus de 18 000 chaînes Premier IPTV 4K/FHD, 65 000 films et séries VOD, EPG 7 jours et serveurs Premier IPTV Anti Freeze v5 sans coupure.',
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
      <CtaBanner
        title="Profitez de l’expérience Premier IPTV dès aujourd'hui"
        subtitle="Accédez à l’offre complète de chaînes et VOD 4K Premier IPTV en quelques minutes sur votre Smart TV ou boîtier."
        primaryCtaText="Choisir un abonnement Premier IPTV"
        primaryCtaLink="#tarifs"
        secondaryCtaText="Contacter l'équipe Premier IPTV"
        secondaryCtaLink="/contact"
      />
    </>
  );
}
