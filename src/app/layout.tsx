import type { Metadata, Viewport } from "next";
import { Alex_Brush, Cormorant_Garamond, Inter } from "next/font/google";
import { Suspense } from "react";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lenora-conciergerie.fr"),
  title:
    "Conciergerie location saisonnière Ain, Nord-Isère & Est lyonnais | Lenora Conciergerie",
  description:
    "Lenora Conciergerie gère votre location saisonnière dans l'Ain, le Nord-Isère et l'Est lyonnais : annonces Airbnb et Booking, réservations, accueil des voyageurs, ménage, linge et intendance.",
  openGraph: {
    title: "Lenora Conciergerie — Conciergerie de location saisonnière",
    description:
      "Gestion complète de votre location saisonnière dans l'Ain, le Nord-Isère et l'Est lyonnais.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fefaf9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} ${alexBrush.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-coral focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-forest-deep"
        >
          Aller au contenu
        </a>
        <Suspense>
          <RevealObserver />
        </Suspense>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
