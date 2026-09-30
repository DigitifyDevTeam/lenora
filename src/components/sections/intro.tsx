import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { icons } from "@/components/icons";
import { ButtonLink, delay, Eyebrow, SectionHeading } from "@/components/ui";
import { pillars, reassurance } from "@/content/home";

export function Reassurance() {
  return (
    <section aria-labelledby="reassurance-title" className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="reveal">
            <Eyebrow>Nos engagements</Eyebrow>
            <h2
              id="reassurance-title"
              className="mt-5 font-serif text-4xl font-medium text-forest sm:text-5xl"
            >
              Votre logement, <em className="text-terracotta">notre savoir-faire</em>
            </h2>
          </div>
          <p className="reveal max-w-md text-ink/65" style={delay(120)}>
            Une conciergerie de proximité qui s&apos;occupe de tout, pour que votre location soit aussi
            sereine pour vous que pour vos voyageurs.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-sand/70 bg-sand/70 sm:grid-cols-2 lg:grid-cols-4">
          {reassurance.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.title}
                className="reveal group relative bg-paper p-8 transition-colors duration-500 hover:bg-cream lg:p-10"
                style={delay(i * 90)}
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-sand-soft text-terracotta transition-all duration-500 group-hover:-rotate-6 group-hover:bg-coral group-hover:text-forest-deep">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-8 font-serif text-2xl font-medium text-forest">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="reveal relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/leslye-portrait.webp"
              alt="Leslye, fondatrice de Lenora Conciergerie"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -right-2 -bottom-6 rounded-3xl bg-forest px-7 py-6 text-paper shadow-2xl sm:right-4 lg:-right-8">
            <p className="font-script text-4xl leading-none text-sand">Leslye</p>
            <p className="mt-2 text-xs tracking-[0.2em] text-paper/70 uppercase">Fondatrice · Jujurieux</p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <SectionHeading
            eyebrow="À propos de Lenora"
            title={
              <>
                La gestion de votre location saisonnière,{" "}
                <em className="text-terracotta">en toute simplicité</em>
              </>
            }
          />
          <div className="reveal mt-8 space-y-5 text-lg leading-relaxed text-ink/70" style={delay(120)}>
            <p>
              Derrière Lenora, il y a Leslye. Après plusieurs années à accompagner des familles, elle met son
              écoute, son sens de l&apos;organisation et sa bienveillance au service des propriétaires qui
              souhaitent louer leur logement sans en porter la charge au quotidien.
            </p>
            <p>
              Lenora, c&apos;est la combinaison des prénoms de ses deux enfants : un clin d&apos;œil à des
              valeurs familiales et à l&apos;attention portée à chaque détail. Formée par Alice Roda, experte
              reconnue de la location saisonnière, elle maîtrise les plateformes et les attentes des
              voyageurs.
            </p>
          </div>

          <ul className="reveal mt-10 flex flex-wrap gap-2.5" style={delay(200)}>
            {["Expertise", "Accompagnement", "Proximité", "Gestion complète", "Plateformes maîtrisées", "Disponibilité"].map(
              (value) => (
                <li
                  key={value}
                  className="rounded-full border border-terracotta/25 bg-paper px-4 py-2 text-sm text-terracotta"
                >
                  {value}
                </li>
              ),
            )}
          </ul>

          <div className="reveal mt-12" style={delay(260)}>
            <ButtonLink href="#contact" variant="outline">
              Rencontrons-nous
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pillars() {
  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Nos services"
          title={
            <>
              Une gestion complète <em className="text-terracotta">de votre logement</em>
            </>
          }
          intro="Trois pôles complémentaires pour prendre en charge votre location saisonnière, de l'annonce au départ du dernier voyageur."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <a
              key={pillar.number}
              href={pillar.href}
              className="reveal group flex flex-col overflow-hidden rounded-[2rem] border border-sand/70 bg-paper transition-all duration-500 ease-soft hover:-translate-y-2 hover:border-transparent hover:shadow-[0_40px_70px_-35px_rgba(58,74,65,0.5)]"
              style={delay(i * 120)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(min-width: 1024px) 26rem, 90vw"
                  className="object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 rounded-full bg-paper/90 px-3.5 py-1.5 font-sans text-sm font-semibold tabular-nums tracking-wide text-forest backdrop-blur">
                  {pillar.number}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif text-3xl font-medium text-forest">{pillar.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-ink/65">{pillar.text}</p>
                <span className="mt-8 inline-flex items-center justify-between border-t border-sand/70 pt-6 text-sm font-semibold text-rust">
                  {pillar.cta}
                  <span className="grid size-10 place-items-center rounded-full bg-sand-soft transition-all duration-500 group-hover:rotate-45 group-hover:bg-coral group-hover:text-forest-deep">
                    <ArrowUpRight className="size-4" />
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
