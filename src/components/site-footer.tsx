import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { BrandLogo } from "@/components/brand";
import { contact } from "@/content/home";
import { contactCta, footerNavSections } from "@/content/navigation";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/conditions-generales-de-vente", label: "Conditions générales de vente" },
];

export function SiteFooter() {
  const sections = footerNavSections();

  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <BrandLogo className="size-20" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-paper/70">
            Conciergerie de location saisonnière à Jujurieux. Lenora accompagne les propriétaires de
            meublés de tourisme dans l&apos;Ain, le Nord-Isère et l&apos;Est lyonnais.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lenora Conciergerie sur Facebook"
              className="grid size-11 place-items-center rounded-full border border-paper/15 text-paper transition-colors hover:border-coral hover:bg-coral hover:text-forest-deep"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lenora Conciergerie sur Instagram"
              className="grid size-11 place-items-center rounded-full border border-paper/15 text-paper transition-colors hover:border-coral hover:bg-coral hover:text-forest-deep"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-sand uppercase">{section.title}</p>
              <ul className="mt-5 space-y-3 text-sm text-paper/75">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-coral">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-sand uppercase">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/75">
              <li>
                <a href={contactCta.href} className="font-medium text-coral transition-colors hover:text-sand">
                  {contactCta.label}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="transition-colors hover:text-coral">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-coral">
                  {contact.email}
                </a>
              </li>
              <li>{contact.base}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 pb-24 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-6">
          <p>© {new Date().getFullYear()} Lenora Conciergerie. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-sand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
