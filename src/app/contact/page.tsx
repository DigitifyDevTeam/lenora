import { PlaceholderPage } from "@/components/placeholder-page";
import { placeholderMetadata } from "@/lib/page-metadata";

const title = "Contact / Demander une estimation";

export const metadata = placeholderMetadata(title);

export default function ContactPage() {
  return <PlaceholderPage title={title} />;
}
