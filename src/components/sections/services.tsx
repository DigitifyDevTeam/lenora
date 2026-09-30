import { CalendarDays, Check, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { icons } from "@/components/icons";
import { delay, SectionHeading, TextLink } from "@/components/ui";
import { guestJourney, housekeeping, presencePoints } from "@/content/home";

const bookedDays = new Set([3, 4, 5, 6, 10, 11, 12, 13, 14, 18, 19, 20, 24, 25, 26, 27, 28]);

function ListingMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-[2rem] bg-paper text-ink shadow-[0_50px_90px_-40px_rgba(0,0,0,0.6)]">
        <div className="relative aspect-[16/10]">
          <Image
            src="/images/service-presence.webp"
            alt="Aperçu d'une annonce de location saisonnière optimisée"
            fill
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
          />
          <span className="absolute top-4 left-4 rounded-full bg-paper/95 px-3 py-1.5 text-xs font-semibold text-forest">
            Annonce optimisée
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <p className="font-serif text-2xl text-forest">Votre logement</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-forest">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              Synchronisé
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Airbnb", "Booking", "+ autres plateformes"].map((p) => (
              <span key={p} className="rounded-full bg-sand-soft px-3 py-1 text-xs font-medium text-terracotta">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-ink/50">
              <span className="inline-flex items-center gap-1.5 font-medium text-ink/70">
                <CalendarDays className="size-3.5" /> Calendrier
              </span>
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <span className="size-2 rounded-sm bg-forest" /> Réservé
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="size-2 rounded-sm bg-sand-soft" /> Libre
                </span>
              </span>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                <span
                  key={day}
                  className={`grid aspect-square place-items-center rounded-md text-[0.65rem] ${
                    bookedDays.has(day) ? "bg-forest text-paper" : "bg-sand-soft/70 text-ink/50"
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-float absolute -right-4 -bottom-8 flex max-w-[15rem] items-start gap-3 rounded-2xl bg-coral p-4 text-forest-deep shadow-2xl sm:-right-10">
        <MessageCircle className="mt-0.5 size-5 shrink-0" />
        <p className="text-sm leading-snug font-medium">Voyageurs informés et accompagnés, avant même leur arrivée.</p>
      </div>
    </div>
  );
}

export function OnlinePresence() {
  return (
    <section id="presence" className="relative overflow-hidden bg-forest py-24 text-paper sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-[36rem] rounded-full bg-terracotta/25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="01 · Présence en ligne & réservations"
            title={
              <>
                Donnez à votre logement{" "}
                <em className="text-coral">toutes les chances d&apos;être réservé</em>
              </>
            }
            intro="Une annonce bien présentée et régulièrement optimisée contribue à améliorer la visibilité de votre logement et à faciliter sa réservation."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {presencePoints.map((point, i) => (
              <li
                key={point}
                className="reveal flex items-center gap-3 border-b border-paper/10 pb-4 text-paper/85"
                style={delay(i * 60)}
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-coral/90 text-forest-deep">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="reveal mt-10">
            <TextLink href="#contact" tone="dark">
              En savoir plus sur la gestion des annonces
            </TextLink>
          </div>
        </div>
        <div className="reveal" style={delay(150)}>
          <ListingMockup />
        </div>
      </div>
    </section>
  );
}

export function GuestExperience() {
  return (
    <section id="voyageurs" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="02 · Accueil & voyageurs"
            title={
              <>
                Une expérience voyageur soignée,{" "}
                <em className="text-terracotta">du premier échange au départ</em>
              </>
            }
          />
          <div className="reveal relative aspect-[16/9] overflow-hidden rounded-[2rem]" style={delay(120)}>
            <Image
              src="/images/service-voyageurs.webp"
              alt="Accueil chaleureux des voyageurs dans le logement"
              fill
              sizes="(min-width: 1024px) 36rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-sand via-terracotta/50 to-sand lg:block"
          />
          {guestJourney.map((step, i) => (
            <li key={step.moment} className="reveal relative" style={delay(i * 110)}>
              <span className="relative z-10 grid size-12 place-items-center rounded-full border border-terracotta/30 bg-paper font-sans text-lg font-semibold tabular-nums text-terracotta">
                {i + 1}
              </span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-forest">{step.moment}</h3>
              <p className="mt-3 leading-relaxed text-ink/65">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-14">
          <TextLink href="#contact">Découvrir la gestion des voyageurs</TextLink>
        </div>
      </div>
    </section>
  );
}

export function Housekeeping() {
  return (
    <section id="intendance" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 · Intendance du logement"
          title={
            <>
              Votre logement reste prêt{" "}
              <em className="text-terracotta">à accueillir vos prochains voyageurs</em>
            </>
          }
          intro="Lenora ne s'arrête pas à la gestion des annonces : chaque détail du logement est suivi, entre chaque séjour."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {housekeeping.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <li
                  key={item.title}
                  className="reveal group flex gap-5 rounded-3xl bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_-30px_rgba(58,74,65,0.45)]"
                  style={delay(i * 70)}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest text-sand transition-colors duration-500 group-hover:bg-coral group-hover:text-forest-deep">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-forest">{item.title}</h3>
                    <p className="mt-1.5 text-[0.93rem] leading-relaxed text-ink/65">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="reveal relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] p-8 text-paper lg:col-span-4" style={delay(200)}>
            <Image
              src="/images/service-intendance.webp"
              alt="Linge propre plié, prêt pour les voyageurs"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-forest-deep">
                <Sparkles className="size-3.5" /> Mise en service
              </span>
              <p className="mt-4 font-serif text-3xl leading-tight">Démarquez-vous dès le départ</p>
              <p className="mt-3 text-sm leading-relaxed text-paper/80">
                Photos professionnelles et ménage complet avant la première mise en location. Sur devis.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-12">
          <TextLink href="#contact">Découvrir notre intendance</TextLink>
        </div>
      </div>
    </section>
  );
}
