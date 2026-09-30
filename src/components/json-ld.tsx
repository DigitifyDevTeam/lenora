import { contact, faqs } from "@/content/home";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://lenora-conciergerie.fr/#business",
        name: "Lenora Conciergerie",
        url: "https://lenora-conciergerie.fr/",
        email: contact.email,
        telephone: "+33674398741",
        image: "https://lenora-conciergerie.fr/images/logo.webp",
        description:
          "Conciergerie de location saisonnière dans l'Ain, le Nord-Isère et l'Est lyonnais : gestion des annonces, accueil des voyageurs et intendance du logement.",
        founder: { "@type": "Person", name: "Leslye" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jujurieux",
          addressRegion: "Ain",
          addressCountry: "FR",
        },
        areaServed: ["Ain", "Nord-Isère", "Est lyonnais", "Bugey"],
        sameAs: [contact.facebook, contact.instagram],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
