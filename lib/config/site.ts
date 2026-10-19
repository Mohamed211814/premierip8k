export const siteConfig = {
  name: "Premier IPTV",
  legalName: "Premier IPTV France Services",
  shortName: "PremierIPTV",
  description: "Premier IPTV : Service officiel d'abonnement premier IPTV en France. Plus de 22 000 chaînes Premier IPTV 4K/FHD, 160 000 films et séries VOD, serveurs Anti Freeze v5 et support 7j/7.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://premieriptv.fr",
  ogImage: "/logo.png",
  locale: "fr_FR",
  lang: "fr",
  contact: {
    email: "iptvusapro@gmail.com",
    supportEmail: "iptvusapro@gmail.com",
    phone: "Support en ligne & WhatsApp 7j/7",
    whatsapp: "+212 7 79 39 52 71",
    whatsappDisplay: "Support 7j/7",
    whatsappLink: "https://wa.me/212779395271",
    telegram: "https://t.me/PremierIPTV_Support",
    hours: "Du lundi au dimanche : 08h00 à 23h00 (Heure de Paris)",
  },
  social: {
    twitter: "https://twitter.com/PremierIPTV_FR",
    facebook: "https://facebook.com/PremierIPTVFrance",
    instagram: "https://instagram.com/premieriptv_fr",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Tarifs & Offres", href: "/#tarifs" },
    { name: "Compatibilité", href: "/#compatibilite" },
    { name: "Contact", href: "/contact" },
  ],
  footerLinks: {
    sections: [
      { name: "Accueil", href: "/" },
      { name: "Tarifs & Formules", href: "/#tarifs" },
      { name: "Fonctionnalités & Flux 4K", href: "/#fonctionnalites" },
      { name: "Compatibilité Appareils", href: "/#compatibilite" },
      { name: "Questions Fréquentes (FAQ)", href: "/#faq" },
      { name: "Assistance & Support 7j/7", href: "/contact" },
    ],
    legal: [
      { name: "Informations Légales", href: "/legal" },
    ],
  },
};
