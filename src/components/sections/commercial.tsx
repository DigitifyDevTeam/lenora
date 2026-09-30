import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { icons } from "@/components/icons";
import { ButtonLink, delay, SectionHeading } from "@/components/ui";
import { audiences, propertyTypes, sellingPoints, steps, zones } from "@/content/home";

export function WhyLenora() {
  return (
    <section aria-labelledby="pourquoi-title" className="grain relative overflow-hidden bg-sand-soft py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="reveal text-center text-[0.7rem] font-semibold tracking-[0.28em] text-rust uppercase">
          Pourquoi confier votre logement à Lenora ?
        </p>
        <h2
          id="pourquoi-title"
          className="reveal mx-auto mt-6 max-w-5xl text-center font-serif text-5xl leading-[1.02] font-medium text-balance text-forest sm:text-6xl lg:text-7xl"
          style={delay(80)}
        >
          Vous louez votre logement.{" "}
          <em className="text-terracotta">Nous nous occupons du reste.</em>
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] bg-terracotta/20 md:grid-cols-3">
          {sellingPoints.map((point, i) => (
            <article key={point.title} className="reveal bg-sand-soft p-8 lg:p-12" style={delay(i * 120)}>
              <span className="font-sans text-6xl leading-none font-light tabular-nums text-coral">0{i + 1}</span>
              <h3 className="mt-6 font-serif text-3xl font-medium text-forest">{point.title}</h3>
              <p className="mt-4 leading-relaxed text-ink/70">{point.text}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 text-center">
          <ButtonLink href="#contact">Parlons de votre logement</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  return (
    <section aria-labelledby="audience-title" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Pour quels propriétaires ?"
            title={
              <span id="audience-title">
                Une solution adaptée <em className="text-terracotta">à chaque propriétaire</em>
              </span>
            }
            intro="Que vous soyez propriétaire d'un appartement, d'une maison, d'un studio ou de plusieurs logements, Lenora adapte son accompagnement à votre situation et à vos objectifs."
          />
          <ul className="reveal mt-8 flex flex-wrap gap-2.5" style={delay(160)}>
            {propertyTypes.map((type) => (
              <li key={type} className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-forest">
                {type}
              </li>
            ))}
          </ul>
          <div
            className="reveal relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem]"
            style={delay(220)}
          >
            <Image
              src="/images/logement-jujurieux.webp"
              alt="Intérieur d'un logement en location saisonnière géré par Lenora"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {audiences.map((audience, i) => {
            const Icon = icons[audience.icon];
            return (
              <li
                key={audience.label}
                className={`reveal group flex flex-col justify-between rounded-3xl border border-sand/70 p-6 transition-all duration-500 hover:border-forest hover:bg-forest ${
                  i === 0 ? "sm:row-span-2 bg-cream" : "bg-paper"
                }`}
                style={delay(i * 80)}
              >
                <Icon
                  className="size-7 text-terracotta transition-colors duration-500 group-hover:text-coral"
                  strokeWidth={1.4}
                />
                <p className="mt-10 font-serif text-2xl leading-tight text-forest transition-colors duration-500 group-hover:text-paper">
                  {audience.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Zones() {
  return (
    <section id="zones" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Zones d'intervention"
          title={
            <>
              Une conciergerie <em className="text-terracotta">proche de votre logement</em>
            </>
          }
          intro="Lenora accompagne les propriétaires de locations saisonnières dans l'Ain, le Nord-Isère et l'Est lyonnais, au départ de Jujurieux."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <figure className="reveal relative overflow-hidden rounded-[2rem] bg-paper p-6 lg:col-span-5">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/zone-carte.webp"
                alt="Carte des zones d'intervention de Lenora Conciergerie : Ain, Nord-Isère et Est lyonnais"
                fill
                sizes="(min-width: 1024px) 30rem, 90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 flex items-center gap-2 text-sm text-ink/60">
              <MapPin className="size-4 text-terracotta" /> Basée à Jujurieux, au cœur de l&apos;Ain
            </figcaption>
          </figure>

          <div className="grid gap-5 lg:col-span-7">
            {zones.map((zone, i) => (
              <article
                key={zone.name}
                className="reveal group relative overflow-hidden rounded-[2rem] bg-paper p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-35px_rgba(58,74,65,0.5)] sm:p-10"
                style={delay(i * 110)}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 bg-coral transition-transform duration-500 group-hover:scale-y-100"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-serif text-4xl font-medium text-forest">{zone.name}</h3>
                  <span className="font-sans text-xl tabular-nums text-sand">0{i + 1}</span>
                </div>
                <p className="mt-3 text-ink/65">{zone.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {zone.towns.map((town) => (
                    <li key={town} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-terracotta">
                      {town}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-rust transition-colors hover:text-forest"
                >
                  {zone.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="methode" className="relative overflow-hidden bg-forest-deep py-24 text-paper sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-24 size-[40rem] rounded-full bg-forest blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Comment ça marche ?"
            title={
              <>
                Confier votre logement à Lenora <em className="text-coral">en 4 étapes</em>
              </>
            }
          />
          <div className="reveal shrink-0">
            <ButtonLink href="#contact">Demander une estimation</ButtonLink>
          </div>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-[2rem] bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="reveal group relative bg-forest-deep p-8 transition-colors duration-500 hover:bg-forest lg:p-10"
              style={delay(i * 120)}
            >
              <span className="font-sans text-7xl leading-none font-light tabular-nums text-paper/15 transition-colors duration-500 group-hover:text-coral">
                {step.number}
              </span>
              <h3 className="mt-10 font-serif text-3xl font-medium">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-paper/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
