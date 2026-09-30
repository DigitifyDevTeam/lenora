export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main id="contenu" className="bg-paper px-5 pt-32 pb-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl leading-tight font-medium text-forest sm:text-5xl">{title}</h1>
      </div>
    </main>
  );
}
