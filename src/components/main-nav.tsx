"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/content/navigation";

const linkClass =
  "relative shrink-0 whitespace-nowrap text-[0.72rem] font-medium text-ink/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-coral after:transition-transform after:duration-300 hover:text-forest hover:after:scale-x-100 xl:text-[0.78rem] 2xl:text-[0.82rem]";

function DesktopNavGroup({
  label,
  href,
  links,
}: {
  label: string;
  href: string;
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative shrink-0"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <a
        href={href}
        className={`${linkClass} inline-flex items-center gap-1 whitespace-nowrap`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </a>
      <div
        className={`absolute top-full left-0 z-50 pt-3 transition-all duration-300 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul
          role="menu"
          className="min-w-[22rem] rounded-2xl border border-sand/70 bg-paper p-2 shadow-[0_24px_50px_-24px_rgba(58,74,65,0.45)]"
        >
          {links.map((child) => (
            <li key={child.href} role="none">
              <a
                role="menuitem"
                href={child.href}
                className="block rounded-xl px-4 py-3 text-[0.82rem] leading-snug text-ink/80 transition-colors hover:bg-cream hover:text-forest"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function DesktopMainNav() {
  return (
    <nav aria-label="Navigation principale" className="hidden min-w-0 flex-1 justify-center lg:block">
      <ul className="flex flex-nowrap items-center justify-center gap-2 xl:gap-3 2xl:gap-4">
        {mainNav.map((item) =>
          item.type === "link" ? (
            <li key={item.href} className="shrink-0">
              <a href={item.href} className={linkClass}>{item.label}</a>
            </li>
          ) : (
            <DesktopNavGroup key={item.href} label={item.label} href={item.href} links={item.children} />
          ),
        )}
      </ul>
    </nav>
  );
}

export function MobileMainNav({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (key: string) => setExpanded((current) => (current === key ? null : key));

  return (
    <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto">
      <ul className="space-y-1">
        {mainNav.map((item) => {
          if (item.type === "link") {
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-center justify-between border-b border-paper/10 py-4 font-serif text-2xl"
                >
                  {item.label}
                </a>
              </li>
            );
          }

          const isOpen = expanded === item.href;
          return (
            <li key={item.href} className="border-b border-paper/10">
              <div className="flex items-center justify-between gap-3 py-4">
                <a href={item.href} onClick={onNavigate} className="font-serif text-2xl">
                  {item.label}
                </a>
                <button
                  type="button"
                  onClick={() => toggle(item.href)}
                  aria-expanded={isOpen}
                  className="grid size-10 place-items-center rounded-full border border-paper/20 text-paper/80"
                >
                  <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              <ul className={`space-y-1 overflow-hidden pb-3 pl-1 transition-all ${isOpen ? "max-h-96" : "max-h-0"}`}>
                {item.children.map((child) => (
                  <li key={child.href}>
                    <a
                      href={child.href}
                      onClick={onNavigate}
                      className="block py-2.5 text-sm leading-snug text-paper/75 hover:text-coral"
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
