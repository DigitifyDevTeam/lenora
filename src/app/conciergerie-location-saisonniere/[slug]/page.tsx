import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/placeholder-page";
import { conciergeriePages } from "@/content/navigation";
import { placeholderMetadata } from "@/lib/page-metadata";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(conciergeriePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const title = conciergeriePages[slug];
  if (!title) return {};
  return placeholderMetadata(title);
}

export default async function ConciergerieServicePage({ params }: PageProps) {
  const { slug } = await params;
  const title = conciergeriePages[slug];
  if (!title) notFound();
  return <PlaceholderPage title={title} />;
}
