import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="contenu" className="bg-paper px-5 pt-32 pb-24 sm:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-rust uppercase">
          Informations légales
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight font-medium text-forest sm:text-5xl">
          {title}
        </h1>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink/70">{children}</div>
      </article>
    </main>
  );
}
