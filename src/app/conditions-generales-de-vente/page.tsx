import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Lenora Conciergerie",
  robots: { index: false },
};

export default function CgvPage() {
  return (
    <LegalPage title="Conditions générales de vente">
      <p>
        Les conditions générales de vente officielles de Lenora Conciergerie seront reprises ici
        lors de la mise en production. Cette page est un emplacement de la maquette.
      </p>
      <p>
        L&apos;offre, le forfait et les conditions d&apos;engagement sont présentés lors du premier
        échange, avec la grille tarifaire.
      </p>
    </LegalPage>
  );
}
