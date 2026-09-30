export const contact = {
  phoneDisplay: "06 74 39 87 41",
  phoneHref: "tel:+33674398741",
  email: "contact@lenora-conciergerie.fr",
  base: "Jujurieux, Ain",
  facebook: "https://www.facebook.com/share/1DVts78FRo/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/lenora.conciergerie",
};

export const towns = [
  "Jujurieux",
  "Ambérieu-en-Bugey",
  "Bourg-en-Bresse",
  "Meximieux",
  "Le Bugey",
  "Bourgoin-Jallieu",
  "Nord-Isère",
  "Meyzieu",
  "Est lyonnais",
];

export const reassurance = [
  {
    icon: "clock",
    title: "Gagnez du temps",
    text: "Nous prenons en charge les tâches opérationnelles liées à votre location.",
  },
  {
    icon: "trending",
    title: "Optimisez vos réservations",
    text: "Vos annonces et votre présence sur les plateformes sont suivies et optimisées.",
  },
  {
    icon: "award",
    title: "Professionnalisez votre gestion",
    text: "Un accompagnement structuré pour offrir une expérience de qualité aux voyageurs.",
  },
  {
    icon: "layers",
    title: "Une gestion complète",
    text: "De la mise en ligne de l'annonce à l'intendance du logement.",
  },
] as const;

export const pillars = [
  {
    number: "01",
    title: "Présence en ligne",
    text: "Nous optimisons votre présence sur les principales plateformes de location saisonnière et assurons le suivi de vos annonces, calendriers et réservations.",
    href: "#presence",
    cta: "Voir la gestion des annonces",
    image: "/images/service-presence.webp",
    alt: "Optimisation d'une annonce de location saisonnière",
  },
  {
    number: "02",
    title: "Voyageurs",
    text: "De la préparation de l'arrivée au départ, nous assurons la communication et l'accompagnement des voyageurs pendant leur séjour.",
    href: "#voyageurs",
    cta: "Découvrir la gestion des voyageurs",
    image: "/images/service-voyageurs.webp",
    alt: "Accueil des voyageurs dans un logement préparé",
  },
  {
    number: "03",
    title: "Intendance",
    text: "Ménage, linge, consommables, kit de bienvenue et suivi du logement : nous veillons au bon déroulement de chaque séjour.",
    href: "#intendance",
    cta: "Découvrir notre intendance",
    image: "/images/service-intendance.webp",
    alt: "Linge propre et logement prêt pour les prochains voyageurs",
  },
];

export const presencePoints = [
  "Audit du logement",
  "Optimisation des annonces",
  "Mise à jour des contenus",
  "Gestion des calendriers",
  "Gestion des réservations",
  "Communication avec les voyageurs",
];

export const guestJourney = [
  {
    moment: "Avant le séjour",
    text: "Échanges avec les voyageurs et envoi des informations pratiques.",
  },
  {
    moment: "À l'arrivée",
    text: "Organisation de l'accueil et de l'accès au logement.",
  },
  {
    moment: "Pendant le séjour",
    text: "Assistance et communication, pour un séjour sans accroc.",
  },
  {
    moment: "Au départ",
    text: "Organisation du départ et contrôle du logement.",
  },
];

export const housekeeping = [
  {
    icon: "sparkles",
    title: "Ménage",
    text: "Un ménage soigné entre chaque séjour, selon un standard hôtelier.",
  },
  {
    icon: "shirt",
    title: "Linge & blanchisserie",
    text: "Draps et serviettes pris en charge par une blanchisserie professionnelle.",
  },
  {
    icon: "wrench",
    title: "Maintenance",
    text: "Suivi des petites réparations pour garder un logement irréprochable.",
  },
  {
    icon: "droplet",
    title: "Consommables",
    text: "Produits d'accueil et essentiels réassortis avant chaque arrivée.",
  },
  {
    icon: "gift",
    title: "Kit de bienvenue",
    text: "Une attention et un guide d'accueil pour une première impression réussie.",
  },
  {
    icon: "home",
    title: "Contrôle du logement",
    text: "Vérification après chaque départ et remise en état complète.",
  },
] as const;

export const sellingPoints = [
  {
    title: "Gagnez du temps",
    text: "Plus besoin de gérer les messages, les arrivées, les départs, le ménage ou le linge.",
  },
  {
    title: "Optimisez vos réservations",
    text: "Votre annonce et votre présence sur les plateformes sont suivies pour développer votre activité.",
  },
  {
    title: "Professionnalisez votre location",
    text: "Une organisation structurée pour offrir une expérience cohérente aux voyageurs.",
  },
];

export const audiences = [
  { icon: "user", label: "Particuliers" },
  { icon: "chart", label: "Investisseurs" },
  { icon: "briefcase", label: "Professionnels" },
  { icon: "key", label: "Un seul logement" },
  { icon: "building", label: "Plusieurs biens" },
] as const;

export const propertyTypes = ["Studio", "Appartement", "Maison", "Plusieurs logements"];

export const zones = [
  {
    name: "Ain",
    text: "Au départ de Jujurieux, dans tout le Bugey et jusqu'à Bourg-en-Bresse.",
    towns: ["Jujurieux", "Ambérieu-en-Bugey", "Bourg-en-Bresse", "Meximieux", "Le Bugey"],
    cta: "Estimer mon logement dans l'Ain",
  },
  {
    name: "Nord-Isère",
    text: "Pour les propriétaires de meublés de tourisme autour de Bourgoin-Jallieu.",
    towns: ["Bourgoin-Jallieu", "Nord-Isère"],
    cta: "Estimer mon logement en Nord-Isère",
  },
  {
    name: "Est lyonnais",
    text: "Aux portes de Lyon, pour les logements à Meyzieu et dans l'Est lyonnais.",
    towns: ["Meyzieu", "Est lyonnais"],
    cta: "Estimer mon logement dans l'Est lyonnais",
  },
];

export const steps = [
  { number: "01", title: "Échange", text: "Vous nous présentez votre logement et votre projet." },
  {
    number: "02",
    title: "Analyse",
    text: "Nous étudions votre logement, son potentiel et vos besoins.",
  },
  {
    number: "03",
    title: "Mise en place",
    text: "Nous préparons votre présence en ligne et l'organisation de la gestion.",
  },
  {
    number: "04",
    title: "Gestion",
    text: "Lenora prend le relais pour gérer votre location saisonnière au quotidien.",
  },
];

export const testimonials = [
  {
    name: "Johanna",
    quote:
      "Leslye est une personne avenante, sérieuse, chaleureuse et bienveillante. On se sent facilement en confiance. Elle est toujours au petit soins pour ses clients et son entourage. Je vous recommandes ses services.",
  },
  {
    name: "Juliette",
    quote:
      "Je vous recommande les yeux fermés, personne impliqué dans son travail, consciencieuse et très agréable.",
  },
  {
    name: "Nathalie",
    quote:
      "Personne très sérieuse et investie dans son travail. Vous pouvez sincèrement faire confiance à Lenora. Elle sera vous satisfaire dans vos démarches et dans la gestion de vos logements.",
  },
  {
    name: "Marylin",
    quote: "Sérieuse agréable, aimable, à l'écoute, je recommande les yeux fermés",
  },
];

export const faqs = [
  {
    q: "Quels types de logements prenez-vous en charge ?",
    a: "Studios, appartements du T2 au T4 et plus, maisons : Lenora accompagne tous les meublés de tourisme, que vous possédiez un seul logement ou plusieurs biens.",
  },
  {
    q: "Dans quelles zones intervenez-vous ?",
    a: "Basée à Jujurieux, Lenora intervient dans l'Ain (Bugey, Ambérieu-en-Bugey, Bourg-en-Bresse, Meximieux), dans le Nord-Isère autour de Bourgoin-Jallieu et dans l'Est lyonnais, notamment à Meyzieu.",
  },
  {
    q: "Quels services sont compris dans votre accompagnement ?",
    a: "Trois pôles complets : votre présence en ligne (audit, annonce, calendrier, réservations), l'accueil des voyageurs (arrivées, départs, communication, assistance) et l'intendance (ménage, linge, maintenance, consommables, kit de bienvenue).",
  },
  {
    q: "Gérez-vous les annonces Airbnb et Booking ?",
    a: "Oui. Nous créons ou optimisons vos annonces sur les principales plateformes de location saisonnière, mettons à jour les contenus et gérons les calendriers et les réservations.",
  },
  {
    q: "Gérez-vous les arrivées et les départs des voyageurs ?",
    a: "Oui. Nous organisons l'accueil et l'accès au logement, restons disponibles pendant le séjour et assurons le départ ainsi que le contrôle du logement.",
  },
];
