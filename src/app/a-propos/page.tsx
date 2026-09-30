import { PlaceholderPage } from "@/components/placeholder-page";
import { placeholderMetadata } from "@/lib/page-metadata";

const title = "À propos";

export const metadata = placeholderMetadata(title);

export default function AProposPage() {
  return <PlaceholderPage title={title} />;
}
