import { Mail, MapPin, Phone, Quote } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { delay, Eyebrow, SectionHeading } from "@/components/ui";
import { contact, testimonials } from "@/content/home";

export function Testimonials() {
  const [featured, ...others] = testimonials;
  return (
    <section id="avis" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Avis clients"
          title={
            <>
              Ils nous font <em className="text-terracotta">confiance</em>
            </>
          }
          intro="Des propriétaires qui ont retrouvé le plaisir de louer, en toute sérénité."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <figure className="reveal relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-forest p-10 text-paper lg:col-span-5 lg:row-span-3 lg:p-12">
            <Quote aria-hidden="true" className="size-14 text-coral" strokeWidth={1.2} />
            <blockquote className="mt-8 font-serif text-3xl leading-snug text-pretty">
              « {featured.quote} »
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-sand font-serif text-xl text-forest">
                {featured.name[0]}
              </span>
              <span>
                <span className="block font-semibold">{featured.name}</span>
                <span className="text-sm text-paper/60">Propriétaire accompagnée</span>
              </span>
            </figcaption>
          </figure>

          {others.map((t, i) => (
            <figure
              key={t.name}
              className="reveal flex flex-col justify-between gap-8 rounded-[2rem] border border-sand/70 bg-cream p-8 lg:col-span-7"
              style={delay(i * 110)}
            >
              <blockquote className="font-serif text-2xl leading-snug text-forest text-pretty">« {t.quote} »</blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-terracotta font-serif text-lg text-paper">
                  {t.name[0]}
                </span>
                <span className="font-semibold text-forest">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Questions <em className="text-terracotta">fréquentes</em>
                </>
              }
              intro="Tout ce que les propriétaires nous demandent avant de nous confier leur logement."
            />
            <p className="reveal mt-8 text-sm text-ink/60">
              Une autre question ?{" "}
              <a href="#contact" className="font-semibold text-rust underline-offset-4 hover:underline">
                Écrivez-nous
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <FaqList />
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest py-24 text-paper sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[40rem] rounded-full bg-terracotta/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-56 size-[36rem] rounded-full bg-coral/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="reveal">
            <Eyebrow tone="dark">Confiez-nous votre logement</Eyebrow>
          </div>
          <h2
            className="reveal mt-6 font-serif text-5xl leading-[1.02] font-medium text-balance sm:text-6xl"
            style={delay(80)}
          >
            Vous avez un logement <em className="text-coral">en location saisonnière ?</em>
          </h2>
          <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-paper/75" style={delay(160)}>
            Confiez sa gestion à Lenora et libérez-vous des contraintes du quotidien. Leslye vous répond
            personnellement pour un premier échange, en toute simplicité.
          </p>

          <ul className="reveal mt-12 space-y-5" style={delay(240)}>
            <li>
              <a href={contact.phoneHref} className="group flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full border border-paper/20 transition-colors group-hover:border-coral group-hover:bg-coral group-hover:text-forest-deep">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.2em] text-paper/50 uppercase">Téléphone</span>
                  <span className="font-sans text-xl font-medium tabular-nums tracking-wide">{contact.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full border border-paper/20 transition-colors group-hover:border-coral group-hover:bg-coral group-hover:text-forest-deep">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.2em] text-paper/50 uppercase">E-mail</span>
                  <span className="font-serif text-xl break-all sm:text-2xl">{contact.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full border border-paper/20">
                <MapPin className="size-5" />
              </span>
              <span>
                <span className="block text-xs tracking-[0.2em] text-paper/50 uppercase">Secteur</span>
                <span className="font-serif text-2xl">Ain · Nord-Isère · Est lyonnais</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="reveal lg:col-span-7" style={delay(150)}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
