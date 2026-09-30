import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Mentions légales | Lenora Conciergerie",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        Cette page reprendra les mentions légales officielles de Lenora Conciergerie, actuellement
        publiées sur le site en ligne. La présente version est une maquette de démonstration.
      </p>
      <p>
        Éditeur : Lenora Conciergerie — Leslye — Jujurieux, Ain.
        Contact :{" "}
        <a className="font-medium text-rust underline-offset-4 hover:underline" href="mailto:contact@lenora-conciergerie.fr">
          contact@lenora-conciergerie.fr
        </a>
        .
      </p>
    </LegalPage>
  );
}
