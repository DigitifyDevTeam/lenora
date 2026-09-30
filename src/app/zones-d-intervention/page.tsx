import { PlaceholderPage } from "@/components/placeholder-page";
import { zonesHub } from "@/content/navigation";
import { placeholderMetadata } from "@/lib/page-metadata";

export const metadata = placeholderMetadata(zonesHub.label);

export default function ZonesHubPage() {
  return <PlaceholderPage title={zonesHub.label} />;
}
