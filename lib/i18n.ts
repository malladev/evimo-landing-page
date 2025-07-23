export interface TranslationKeys {
  // Navigation
  'nav.features': string;
  'nav.howItWorks': string;
  'nav.testimonials': string;
  'nav.contact': string;
  'nav.faq': string;

  // Hero Section
  'hero.title': string;
  'hero.subtitle': string;
  'hero.cta.primary': string;
  'hero.cta.secondary': string;

  // Problem Section
  'problem.title': string;
  'problem.subtitle': string;
  'problem.stats.fraud': string;
  'problem.stats.losses': string;
  'problem.stats.events': string;

  // Solution Section
  'solution.title': string;
  'solution.subtitle': string;
  'solution.feature1.title': string;
  'solution.feature1.description': string;
  'solution.feature2.title': string;
  'solution.feature2.description': string;
  'solution.feature3.title': string;
  'solution.feature3.description': string;

  // Features Section
  'features.title': string;
  'features.subtitle': string;
  'features.secure.title': string;
  'features.secure.description': string;
  'features.realtime.title': string;
  'features.realtime.description': string;
  'features.dashboard.title': string;
  'features.dashboard.description': string;
  'features.fraud.title': string;
  'features.fraud.description': string;

  // How It Works
  'howItWorks.title': string;
  'howItWorks.subtitle': string;
  'howItWorks.step1.title': string;
  'howItWorks.step1.description': string;
  'howItWorks.step2.title': string;
  'howItWorks.step2.description': string;
  'howItWorks.step3.title': string;
  'howItWorks.step3.description': string;
  'howItWorks.step4.title': string;
  'howItWorks.step4.description': string;

  // Testimonials
  'testimonials.title': string;
  'testimonials.subtitle': string;

  // Contact
  'contact.title': string;
  'contact.subtitle': string;
  'contact.form.name': string;
  'contact.form.email': string;
  'contact.form.company': string;
  'contact.form.message': string;
  'contact.form.submit': string;
  'contact.form.success': string;

  // FAQ
  'faq.title': string;
  'faq.q1.question': string;
  'faq.q1.answer': string;
  'faq.q2.question': string;
  'faq.q2.answer': string;
  'faq.q3.question': string;
  'faq.q3.answer': string;
  'faq.q4.question': string;
  'faq.q4.answer': string;

  // CTA
  'cta.title': string;
  'cta.subtitle': string;
  'cta.appStore': string;
  'cta.googlePlay': string;
  'cta.comingSoon': string;

  // Footer
  'footer.rights': string;
  'footer.privacy': string;
  'footer.terms': string;
}

export const translations: Record<'en' | 'fr', TranslationKeys> = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.title': 'Secure Digital Ticketing for Modern Events',
    'hero.subtitle': 'EVIMO revolutionizes event ticketing with encrypted QR codes that eliminate fraud and ensure authentic experiences for organizers and attendees.',
    'hero.cta.primary': 'Get Early Access',
    'hero.cta.secondary': 'Watch Demo',

    // Problem Section
    'problem.title': 'Event Ticket Fraud is a Growing Problem',
    'problem.subtitle': 'Traditional ticketing systems are vulnerable to counterfeiting, scalping, and fraud, costing the industry billions annually.',
    'problem.stats.fraud': 'Ticket Fraud Cases',
    'problem.stats.losses': 'Annual Losses',
    'problem.stats.events': 'Events Affected',

    // Solution Section
    'solution.title': 'EVIMO: The Ultimate Anti-Fraud Solution',
    'solution.subtitle': 'Our platform combines advanced encryption with seamless user experience to create the most secure ticketing system available.',
    'solution.feature1.title': 'Encrypted QR Codes',
    'solution.feature1.description': 'Each ticket contains unique encrypted data that cannot be duplicated or forged.',
    'solution.feature2.title': 'Dedicated Scanner App',
    'solution.feature2.description': 'Only our official scanner app can verify and validate EVIMO tickets.',
    'solution.feature3.title': 'Real-time Verification',
    'solution.feature3.description': 'Instant validation ensures no duplicate entries and complete fraud prevention.',

    // Features Section
    'features.title': 'Powerful Features for Event Success',
    'features.subtitle': 'Everything you need to manage secure, fraud-free events from start to finish.',
    'features.secure.title': 'Bank-Level Security',
    'features.secure.description': 'Military-grade encryption protects every ticket with unique cryptographic signatures.',
    'features.realtime.title': 'Real-time Analytics',
    'features.realtime.description': 'Track attendance, sales, and validation metrics in real-time through our dashboard.',
    'features.dashboard.title': 'Organizer Dashboard',
    'features.dashboard.description': 'Comprehensive tools for ticket creation, distribution, and event management.',
    'features.fraud.title': 'Zero Fraud Tolerance',
    'features.fraud.description': 'Our system makes ticket counterfeiting technically impossible with advanced verification.',

    // How It Works
    'howItWorks.title': 'How EVIMO Works',
    'howItWorks.subtitle': 'A simple, secure process that protects both organizers and attendees.',
    'howItWorks.step1.title': 'Create Event',
    'howItWorks.step1.description': 'Organizers set up their event and generate encrypted tickets through our platform.',
    'howItWorks.step2.title': 'Distribute Tickets',
    'howItWorks.step2.description': 'Tickets are sent to attendees as secure QR codes via email or mobile app.',
    'howItWorks.step3.title': 'Scan & Verify',
    'howItWorks.step3.description': 'At the event, our scanner app instantly verifies ticket authenticity.',
    'howItWorks.step4.title': 'Track Analytics',
    'howItWorks.step4.description': 'Monitor real-time attendance and prevent duplicate entries automatically.',

    // Testimonials
    'testimonials.title': 'Trusted by Event Professionals',
    'testimonials.subtitle': 'See what organizers are saying about EVIMO\'s security and ease of use.',

    // Contact
    'contact.title': 'Ready to Secure Your Events?',
    'contact.subtitle': 'Get in touch to learn more about EVIMO or request early access for your organization.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company/Organization',
    'contact.form.message': 'Tell us about your event needs',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you! We\'ll be in touch soon.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1.question': 'How does EVIMO prevent ticket fraud?',
    'faq.q1.answer': 'EVIMO uses advanced encryption to create unique, unforgeable QR codes for each ticket. Our dedicated scanner app is the only way to verify these codes, making counterfeiting impossible.',
    'faq.q2.question': 'Is EVIMO compatible with existing ticketing systems?',
    'faq.q2.answer': 'Yes, EVIMO can integrate with most existing ticketing platforms through our API, allowing you to add security without changing your current workflow.',
    'faq.q3.question': 'What happens if someone loses their phone?',
    'faq.q3.answer': 'Tickets can be resent to a new device using our secure recovery system. The original ticket is automatically invalidated for security.',
    'faq.q4.question': 'How much does EVIMO cost?',
    'faq.q4.answer': 'Our pricing is based on event size and features needed. Contact us for a custom quote tailored to your organization\'s requirements.',

    // CTA
    'cta.title': 'Ready to Eliminate Ticket Fraud?',
    'cta.subtitle': 'Join the future of secure event ticketing with EVIMO. Download our app and start protecting your events today.',
    'cta.appStore': 'App Store',
    'cta.googlePlay': 'Google Play',
    'cta.comingSoon': 'Coming Soon',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  fr: {
    // Navigation
    'nav.features': 'Fonctionnalités',
    'nav.howItWorks': 'Comment ça marche',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Hero Section
    'hero.title': 'Billetterie Numérique Sécurisée pour les Événements Modernes',
    'hero.subtitle': 'EVIMO révolutionne la billetterie événementielle avec des codes QR cryptés qui éliminent la fraude et garantissent des expériences authentiques pour les organisateurs et les participants.',
    'hero.cta.primary': 'Accès Anticipé',
    'hero.cta.secondary': 'Voir la Démo',

    // Problem Section
    'problem.title': 'La Fraude aux Billets d\'Événements est un Problème Croissant',
    'problem.subtitle': 'Les systèmes de billetterie traditionnels sont vulnérables à la contrefaçon, au marché noir et à la fraude, coûtant des milliards à l\'industrie chaque année.',
    'problem.stats.fraud': 'Cas de Fraude',
    'problem.stats.losses': 'Pertes Annuelles',
    'problem.stats.events': 'Événements Affectés',

    // Solution Section
    'solution.title': 'EVIMO : La Solution Anti-Fraude Ultime',
    'solution.subtitle': 'Notre plateforme combine un cryptage avancé avec une expérience utilisateur fluide pour créer le système de billetterie le plus sécurisé disponible.',
    'solution.feature1.title': 'Codes QR Cryptés',
    'solution.feature1.description': 'Chaque billet contient des données cryptées uniques qui ne peuvent être dupliquées ou falsifiées.',
    'solution.feature2.title': 'App Scanner Dédiée',
    'solution.feature2.description': 'Seule notre application scanner officielle peut vérifier et valider les billets EVIMO.',
    'solution.feature3.title': 'Vérification en Temps Réel',
    'solution.feature3.description': 'La validation instantanée garantit aucune entrée en double et une prévention complète de la fraude.',

    // Features Section
    'features.title': 'Fonctionnalités Puissantes pour le Succès des Événements',
    'features.subtitle': 'Tout ce dont vous avez besoin pour gérer des événements sécurisés et sans fraude du début à la fin.',
    'features.secure.title': 'Sécurité Bancaire',
    'features.secure.description': 'Un cryptage de niveau militaire protège chaque billet avec des signatures cryptographiques uniques.',
    'features.realtime.title': 'Analyses en Temps Réel',
    'features.realtime.description': 'Suivez la fréquentation, les ventes et les métriques de validation en temps réel via notre tableau de bord.',
    'features.dashboard.title': 'Tableau de Bord Organisateur',
    'features.dashboard.description': 'Outils complets pour la création de billets, la distribution et la gestion d\'événements.',
    'features.fraud.title': 'Tolérance Zéro Fraude',
    'features.fraud.description': 'Notre système rend la contrefaçon de billets techniquement impossible avec une vérification avancée.',

    // How It Works
    'howItWorks.title': 'Comment EVIMO Fonctionne',
    'howItWorks.subtitle': 'Un processus simple et sécurisé qui protège à la fois les organisateurs et les participants.',
    'howItWorks.step1.title': 'Créer l\'Événement',
    'howItWorks.step1.description': 'Les organisateurs configurent leur événement et génèrent des billets cryptés via notre plateforme.',
    'howItWorks.step2.title': 'Distribuer les Billets',
    'howItWorks.step2.description': 'Les billets sont envoyés aux participants sous forme de codes QR sécurisés par email ou application mobile.',
    'howItWorks.step3.title': 'Scanner et Vérifier',
    'howItWorks.step3.description': 'Lors de l\'événement, notre app scanner vérifie instantanément l\'authenticité du billet.',
    'howItWorks.step4.title': 'Suivre les Analyses',
    'howItWorks.step4.description': 'Surveillez la fréquentation en temps réel et prévenez automatiquement les entrées en double.',

    // Testimonials
    'testimonials.title': 'Approuvé par les Professionnels de l\'Événementiel',
    'testimonials.subtitle': 'Découvrez ce que les organisateurs disent de la sécurité et de la facilité d\'utilisation d\'EVIMO.',

    // Contact
    'contact.title': 'Prêt à Sécuriser Vos Événements ?',
    'contact.subtitle': 'Contactez-nous pour en savoir plus sur EVIMO ou demander un accès anticipé pour votre organisation.',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.company': 'Entreprise/Organisation',
    'contact.form.message': 'Parlez-nous de vos besoins événementiels',
    'contact.form.submit': 'Envoyer le Message',
    'contact.form.success': 'Merci ! Nous vous recontacterons bientôt.',

    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.q1.question': 'Comment EVIMO prévient-il la fraude aux billets ?',
    'faq.q1.answer': 'EVIMO utilise un cryptage avancé pour créer des codes QR uniques et infalsifiables pour chaque billet. Notre app scanner dédiée est le seul moyen de vérifier ces codes, rendant la contrefaçon impossible.',
    'faq.q2.question': 'EVIMO est-il compatible avec les systèmes de billetterie existants ?',
    'faq.q2.answer': 'Oui, EVIMO peut s\'intégrer avec la plupart des plateformes de billetterie existantes via notre API, vous permettant d\'ajouter de la sécurité sans changer votre flux de travail actuel.',
    'faq.q3.question': 'Que se passe-t-il si quelqu\'un perd son téléphone ?',
    'faq.q3.answer': 'Les billets peuvent être renvoyés vers un nouvel appareil en utilisant notre système de récupération sécurisé. Le billet original est automatiquement invalidé pour la sécurité.',
    'faq.q4.question': 'Combien coûte EVIMO ?',
    'faq.q4.answer': 'Nos prix sont basés sur la taille de l\'événement et les fonctionnalités nécessaires. Contactez-nous pour un devis personnalisé adapté aux besoins de votre organisation.',

    // CTA
    'cta.title': 'Prêt à Éliminer la Fraude aux Billets ?',
    'cta.subtitle': 'Rejoignez l\'avenir de la billetterie événementielle sécurisée avec EVIMO. Téléchargez notre app et commencez à protéger vos événements dès aujourd\'hui.',
    'cta.appStore': 'App Store',
    'cta.googlePlay': 'Google Play',
    'cta.comingSoon': 'Bientôt Disponible',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
  },
};

export function useTranslation(lang: 'en' | 'fr') {
  return {
    t: (key: keyof TranslationKeys): string => {
      return translations[lang][key] || key;
    },
    lang,
  };
}