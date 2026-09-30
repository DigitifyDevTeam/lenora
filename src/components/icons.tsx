import {
  Award,
  Briefcase,
  Building2,
  ChartLine,
  Clock,
  Droplet,
  Gift,
  House,
  KeyRound,
  Layers,
  type LucideIcon,
  Shirt,
  Sparkles,
  TrendingUp,
  User,
  Wrench,
} from "lucide-react";
import type { SVGProps } from "react";

export const icons = {
  clock: Clock,
  trending: TrendingUp,
  award: Award,
  layers: Layers,
  sparkles: Sparkles,
  shirt: Shirt,
  wrench: Wrench,
  droplet: Droplet,
  gift: Gift,
  home: House,
  user: User,
  chart: ChartLine,
  briefcase: Briefcase,
  key: KeyRound,
  building: Building2,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}