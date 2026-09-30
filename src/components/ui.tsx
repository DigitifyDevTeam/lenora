import { ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type Tone = "light" | "dark";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
        tone === "dark" ? "text-sand" : "text-rust"
      }`}
    >
      <span className={`h-px w-8 ${tone === "dark" ? "bg-sand/60" : "bg-rust/50"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`reveal max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 font-serif text-4xl leading-[1.05] font-medium text-balance sm:text-5xl lg:text-[3.6rem] ${
          tone === "dark" ? "text-paper" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-6 text-lg leading-relaxed text-pretty ${
            tone === "dark" ? "text-paper/75" : "text-ink/70"
          } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "outline" | "outline-light" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-coral text-forest-deep shadow-[0_12px_30px_-12px_rgba(253,139,123,0.9)] hover:bg-coral-deep hover:shadow-[0_18px_40px_-14px_rgba(242,112,94,0.95)]",
  outline: "border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-paper",
  "outline-light": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-forest",
  ghost: "text-forest hover:text-rust",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral ${buttonStyles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function TextLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold ${
        tone === "dark" ? "text-sand hover:text-coral" : "text-rust hover:text-forest"
      } transition-colors`}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom-left bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function delay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
