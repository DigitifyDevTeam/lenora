import { PlaceholderPage } from "@/components/placeholder-page";
import { conciergerieHub } from "@/content/navigation";
import { placeholderMetadata } from "@/lib/page-metadata";

export const metadata = placeholderMetadata(conciergerieHub.label);

export default function ConciergerieHubPage() {
  return <PlaceholderPage title={conciergerieHub.label} />;
}
