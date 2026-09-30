import { PlaceholderPage } from "@/components/placeholder-page";
import { placeholderMetadata } from "@/lib/page-metadata";

const title = "Comment ça marche";

export const metadata = placeholderMetadata(title);

export default function CommentCaMarchePage() {
  return <PlaceholderPage title={title} />;
}
