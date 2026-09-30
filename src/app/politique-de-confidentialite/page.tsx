import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Lenora Conciergerie",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        Cette page reprendra la politique de confidentialité officielle de Lenora Conciergerie. Le
        formulaire de contact de cette maquette n&apos;envoie aucune donnée vers un serveur : la
        demande reste affichée localement, à des fins de démonstration.
      </p>
      <p>
        Pour toute question relative à vos données, écrivez à{" "}
        <a className="font-medium text-rust underline-offset-4 hover:underline" href="mailto:contact@lenora-conciergerie.fr">
          contact@lenora-conciergerie.fr
        </a>
        .
      </p>
    </LegalPage>
  );
}
