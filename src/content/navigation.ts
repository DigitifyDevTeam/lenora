export type NavChild = { href: string; label: string };

export type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "group"; label: string; href: string; children: NavChild[] };

export const conciergerieHub = {
  href: "/conciergerie-location-saisonniere",
  label: "Conciergerie location saisonnière",
} as const;

export const conciergeriePages: Record<string, string> = {
  "gestion-de-location-saisonniere": "Gestion de location saisonnière",
  "gestion-des-annonces-airbnb-booking-et-plateformes":
    "Gestion des annonces Airbnb, Booking & plateformes",
  "optimisation-des-reservations": "Optimisation des réservations",
  "accueil-et-gestion-des-voyageurs": "Accueil & gestion des voyageurs",
  "menage-linge-et-intendance": "Ménage, linge & intendance",
  "maintenance-et-assistance-du-logement": "Maintenance & assistance du logement",
};

export const zonesHub = {
  href: "/zones-d-intervention",
  label: "Zones d'intervention",
} as const;

export const zonePages: Record<string, string> = {
  ain: "Ain",
  "nord-isere": "Nord-Isère",
  "est-lyonnais": "Est lyonnais",
};

const conciergerieChildren: NavChild[] = Object.entries(conciergeriePages).map(([slug, label]) => ({
  href: `${conciergerieHub.href}/${slug}`,
  label,
}));

const zoneChildren: NavChild[] = Object.entries(zonePages).map(([slug, label]) => ({
  href: `${zonesHub.href}/${slug}`,
  label,
}));

export const mainNav: NavItem[] = [
  { type: "link", href: "/", label: "Accueil" },
  {
    type: "group",
    label: conciergerieHub.label,
    href: conciergerieHub.href,
    children: conciergerieChildren,
  },
  {
    type: "group",
    label: zonesHub.label,
    href: zonesHub.href,
    children: zoneChildren,
  },
  { type: "link", href: "/comment-ca-marche", label: "Comment ça marche" },
  { type: "link", href: "/a-propos", label: "À propos" },
  { type: "link", href: "/faq", label: "FAQ" },
  { type: "link", href: "/contact", label: "Contact" },
];

export const contactCta = {
  href: "/contact",
  label: "Demander une estimation",
} as const;

export function footerNavSections(): { title: string; links: NavChild[] }[] {
  const sections: { title: string; links: NavChild[] }[] = [];

  for (const item of mainNav) {
    if (item.type === "group") {
      sections.push({ title: item.label, links: item.children });
    }
  }

  sections.push({
    title: "Le site",
    links: mainNav
      .filter((item): item is Extract<NavItem, { type: "link" }> => item.type === "link")
      .filter((item) => item.href !== "/")
      .map((item) => ({ href: item.href, label: item.label })),
  });

  return sections;
}
