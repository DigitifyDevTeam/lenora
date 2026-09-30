"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand";
import { DesktopMainNav, MobileMainNav } from "@/components/main-nav";
import { contactCta } from "@/content/navigation";
import { contact as contactInfo } from "@/content/home";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowMobileCta(window.scrollY > 640);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
          scrolled
            ? "border-b border-sand/50 bg-paper/85 py-3 shadow-[0_10px_30px_-20px_rgba(58,74,65,0.35)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-3 px-5 sm:px-8 lg:gap-4">
          <a href="/" aria-label="Lenora Conciergerie, retour à l'accueil" className="shrink-0">
            <BrandLogo className="size-12 sm:size-14" preload />
          </a>

          <DesktopMainNav />

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={contactInfo.phoneHref}
              className="hidden items-center gap-2 whitespace-nowrap text-[0.82rem] font-medium text-forest 2xl:inline-flex"
            >
              <Phone className="size-4 text-terracotta" />
              {contactInfo.phoneDisplay}
            </a>
            <a
              href={contactCta.href}
              className="hidden shrink-0 whitespace-nowrap rounded-full bg-forest px-4 py-3 text-[0.75rem] font-semibold text-paper transition-colors duration-300 hover:bg-coral hover:text-forest-deep sm:inline-flex xl:px-5 xl:text-[0.8rem]"
            >
              {contactCta.label}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className="grid size-11 shrink-0 place-items-center rounded-full border border-forest/15 text-forest lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-forest-deep px-6 pt-5 pb-10 text-paper transition-all duration-500 ease-soft lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <BrandLogo className="size-14" />
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Fermer le menu"
            className="grid size-11 place-items-center rounded-full border border-paper/20"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="mt-10 flex min-h-0 flex-1 flex-col">
          <MobileMainNav onNavigate={closeMenu} />
        </div>
        <a
          href={contactCta.href}
          onClick={closeMenu}
          className="mt-6 rounded-full bg-coral py-4 text-center text-sm font-semibold text-forest-deep"
        >
          {contactCta.label}
        </a>
        <a href={contactInfo.phoneHref} className="mt-4 text-center text-sm text-paper/70">
          ou appelez le {contactInfo.phoneDisplay}
        </a>
      </div>

      <div
        className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-500 ease-soft sm:hidden ${
          showMobileCta && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 rounded-full bg-forest-deep/95 p-1.5 shadow-2xl backdrop-blur">
          <a
            href={contactInfo.phoneHref}
            aria-label={`Appeler le ${contactInfo.phoneDisplay}`}
            className="grid size-12 shrink-0 place-items-center rounded-full border border-paper/15 text-paper"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={contactCta.href}
            className="flex-1 rounded-full bg-coral py-3.5 text-center text-sm font-semibold text-forest-deep"
          >
            {contactCta.label}
          </a>
        </div>
      </div>
    </>
  );
}
