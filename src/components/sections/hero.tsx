import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui";
import { towns } from "@/content/home";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

const readiness = ["Annonce optimisée", "Calendrier synchronisé", "Ménage & linge planifiés", "Accueil organisé"];

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-paper pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[42rem] rounded-full bg-sand/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 size-[34rem] rounded-full bg-coral/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-terracotta/25 bg-paper/70 px-4 py-2 text-xs font-medium text-terracotta backdrop-blur"
            style={rise(0)}
          >
            <MapPin className="size-3.5" />
            Ain · Nord-Isère · Est lyonnais
          </p>

          <h1
            className="animate-rise mt-7 font-serif text-[2.35rem] leading-[1.05] font-medium tracking-[-0.01em] text-balance text-forest sm:text-5xl lg:text-6xl xl:text-[4.35rem] xl:leading-[1.02]"
            style={rise(100)}
          >
            Conciergerie de location saisonnière{" "}
            <em className="font-normal text-terracotta">
              dans l&apos;Ain, le Nord-Isère et l&apos;Est lyonnais
            </em>
          </h1>

          <p
            className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-pretty text-ink/70"
            style={rise(220)}
          >
            Lenora vous accompagne dans la gestion complète de votre logement en location saisonnière :
            mise en ligne des annonces, gestion des réservations, accueil des voyageurs, ménage, linge et
            intendance.
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row" style={rise(340)}>
            <ButtonLink href="#contact">Demander une estimation</ButtonLink>
            <ButtonLink href="#services" variant="outline">
              Découvrir nos services
            </ButtonLink>
          </div>

          <dl
            className="animate-rise mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-sand pt-8"
            style={rise(460)}
          >
            {[
              ["Basée à", "Jujurieux"],
              ["Formée par", "Alice Roda"],
              ["Une seule", "offre claire"],
            ].map(([label, value]) => (
              <div key={value}>
                <dt className="text-[0.68rem] tracking-[0.2em] text-ink/50 uppercase">{label}</dt>
                <dd className="mt-1.5 font-serif text-xl text-forest">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative md:col-span-6">
          <div className="animate-rise relative mx-auto max-w-[34rem] pb-12 lg:ml-auto" style={rise(150)}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-[0_40px_80px_-40px_rgba(58,74,65,0.55)]">
              <Image
                src="/images/hero-interieur.jpg"
                alt="Salon lumineux d'un logement en location saisonnière préparé pour les voyageurs"
                fill
                preload
                sizes="(min-width: 1024px) 34rem, 90vw"
                className="object-cover object-[65%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 via-transparent to-transparent" />
            </div>

            <div className="animate-float absolute -bottom-2 left-3 w-[min(16rem,calc(100%-1.5rem))] rounded-3xl border border-sand/60 bg-paper/95 p-5 shadow-[0_30px_60px_-30px_rgba(38,50,43,0.6)] backdrop-blur sm:-bottom-8 sm:-left-8 sm:w-64">
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-rust uppercase">
                Prochaine arrivée
              </p>
              <p className="mt-1 font-serif text-xl text-forest">Logement prêt</p>
              <ul className="mt-4 space-y-2.5">
                {readiness.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink/75">
                    <span className="grid size-5 place-items-center rounded-full bg-forest text-paper">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute top-10 -right-3 flex items-center gap-3 rounded-full border border-sand/60 bg-paper/95 py-2 pr-5 pl-2 shadow-lg backdrop-blur sm:-right-8">
              <Image
                src="/images/alice-roda.webp"
                alt="Logo de la formation Alice Roda"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span className="text-xs leading-tight text-ink/70">
                Formée par
                <br />
                <strong className="font-semibold text-forest">Alice Roda</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TownMarquee() {
  const row = [...towns, ...towns];
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-forest/10 bg-forest py-5 text-paper">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((town, i) => (
          <span key={`${town}-${i}`} className="flex items-center gap-10 font-serif text-2xl italic">
            {town}
            <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
          </span>
        ))}
      </div>
    </div>
  );
}
