import { PlaceholderPage } from "@/components/placeholder-page";
import { placeholderMetadata } from "@/lib/page-metadata";

const title = "FAQ";

export const metadata = placeholderMetadata(title);

export default function FaqPage() {
  return <PlaceholderPage title={title} />;
}
