import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/placeholder-page";
import { zonePages } from "@/content/navigation";
import { placeholderMetadata } from "@/lib/page-metadata";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(zonePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const title = zonePages[slug];
  if (!title) return {};
  return placeholderMetadata(title);
}

export default async function ZonePage({ params }: PageProps) {
  const { slug } = await params;
  const title = zonePages[slug];
  if (!title) notFound();
  return <PlaceholderPage title={title} />;
}
