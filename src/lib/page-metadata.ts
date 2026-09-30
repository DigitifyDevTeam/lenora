import type { Metadata } from "next";

export function placeholderMetadata(title: string): Metadata {
  return {
    title: `${title} | Lenora Conciergerie`,
    description: `${title} — Lenora Conciergerie, conciergerie de location saisonnière dans l'Ain, le Nord-Isère et l'Est lyonnais.`,
  };
}
