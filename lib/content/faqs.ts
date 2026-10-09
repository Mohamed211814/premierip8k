import { FAQItem } from '@/types/content';

export const allFaqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: "Qu'est-ce que le service Premier IPTV ?",
    answer: "Premier IPTV est une solution de diffusion télévisuelle par protocole Internet (IPTV) permettant d'accéder à des milliers de chaînes de télévision en direct en qualité 4K, Full HD et HD, ainsi qu'à une vidéothèque à la demande (VOD) comprenant films et séries, directement sur votre téléviseur, box, ordinateur ou smartphone.",
  },
  {
    id: 'faq-2',
    category: 'general',
    question: "Pourquoi choisir Premier IPTV en France ?",
    answer: "Notre infrastructure est optimisée pour les réseaux des fournisseurs d'accès français (Orange, Free, SFR, Bouygues Telecom). Grâce à nos serveurs haute performance situés en Europe et à la technologie Anti-Freeze v5, nous offrons une stabilité maximale, un temps de zapping quasi instantané et un support client réactif disponible en français 7j/7.",
  },
  {
    id: 'faq-3',
    category: 'technique',
    question: "Quel débit internet est nécessaire pour profiter de l'IPTV 4K et FHD ?",
    answer: "Pour une diffusion fluide en Full HD (1080p), une connexion d'au moins 12 à 15 Mbps est conseillée. Pour les flux en 4K Ultra HD, nous recommandons une vitesse minimale stable de 25 à 30 Mbps (fibre optique, VDSL ou bonne connexion 4G/5G). L'utilisation d'un câble Ethernet ou d'un réseau Wi-Fi 5 GHz est recommandée pour éviter les interférences.",
  },
  {
    id: 'faq-4',
    category: 'technique',
    question: "Qu'est-ce que la technologie Anti-Freeze v5 ?",
    answer: "Notre technologie propriétaire Anti-Freeze v5 gère dynamiquement les flux et la mémoire tampon (buffer) en cas de micro-coupures réseau. Elle prévient les saccades et les déconnexions lors des événements sportifs majeurs à forte affluence.",
  },
  {
    id: 'faq-5',
    category: 'installation',
    question: "Sur quels appareils puis-je utiliser mon abonnement Premier IPTV ?",
    answer: "Premier IPTV est compatible avec la quasi-totalité des appareils du marché : Smart TV (Samsung Tizen, LG WebOS, Sony Google TV), boîtiers Android TV (Xiaomi Mi Box, Nvidia Shield), Amazon Fire TV Stick, Apple TV, récepteurs MAG/Formuler, ordinateurs (Windows, macOS via VLC ou IPTV Smarters) et smartphones/tablettes (iOS, Android).",
  },
  {
    id: 'faq-6',
    category: 'installation',
    question: "Quelles sont les meilleures applications IPTV recommandées ?",
    answer: "Nous recommandons IPTV Smarters Pro, TiviMate (pour Android TV), IBO Player, SmartOne IPTV, XCIPTV, ou GSE Smart IPTV. Selon votre matériel, nous vous fournissons un tutoriel d'installation complet avec vos identifiants Xtream Codes ou lien M3U.",
  },
  {
    id: 'faq-7',
    category: 'installation',
    question: "Combien de temps faut-il pour installer et configurer le service ?",
    answer: "L'installation prend en moyenne entre 3 et 5 minutes. Dès validation de votre commande ou demande de test, vous recevez vos identifiants de connexion avec un guide pas à pas illustré.",
  },
  {
    id: 'faq-8',
    category: 'abonnement',
    question: "Comment puis-je tester le service avant de m'engager ?",
    answer: "Vous pouvez demander un test de 24 heures via notre page dédiée 'Test IPTV'. Cela vous permet de vérifier la fluidité des flux, la compatibilité avec votre matériel et la qualité de notre catalogue dans vos conditions réelles d'utilisation.",
  },
  {
    id: 'faq-9',
    category: 'abonnement',
    question: "Puis-je utiliser mon abonnement sur plusieurs écrans en même temps ?",
    answer: "Par défaut, les offres standards autorisent une seule connexion simultanée active. Si vous souhaitez regarder la télévision sur deux écrans différents en même temps (par exemple salon et chambre), nous proposons la formule 'Pack Famille 2 Écrans'.",
  },
  {
    id: 'faq-10',
    category: 'abonnement',
    question: "Y a-t-il un engagement ou un renouvellement automatique ?",
    answer: "Non, nos abonnements sont sans aucun engagement et sans prélèvement automatique non sollicité. À l'échéance de votre période (1, 3, 6 ou 12 mois), vous choisissez librement si vous souhaitez renouveler votre accès.",
  },
  {
    id: 'faq-11',
    category: 'abonnement',
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les règlements sécurisés par carte bancaire (Visa, Mastercard), virements sécurisés et solutions de paiement en ligne conformes aux standards de sécurité bancaire 3D Secure.",
  },
  {
    id: 'faq-12',
    category: 'legalite',
    question: "Comment contacter l'assistance technique en cas de besoin ?",
    answer: "Notre équipe de support francophone est joignable 7 jours sur 7 par email (support@premieriptv.fr), par formulaire de contact sur le site et par WhatsApp/Telegram pour les demandes urgentes. Notre délai moyen de réponse est inférieur à 30 minutes pendant les heures d'ouverture.",
  },
];

export const homeFaqs = allFaqs.slice(0, 6);
