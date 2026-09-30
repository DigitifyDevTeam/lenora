"use client";

import { ChevronDown } from "lucide-react";
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
  return (
    <li className="group relative shrink-0">
      <button
        type="button"
        className={`${linkClass} inline-flex items-center gap-1 whitespace-nowrap`}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div className="pointer-events-none invisible absolute top-full left-0 z-[80] pt-3 opacity-0 transition-all duration-200 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
        <ul
          role="menu"
          className="min-w-[22rem] rounded-2xl border border-sand/70 bg-paper p-2 shadow-[0_24px_50px_-24px_rgba(58,74,65,0.45)]"
        >
          <li role="none">
            <a
              role="menuitem"
              href={href}
              className="block rounded-xl px-4 py-3 text-[0.82rem] font-semibold leading-snug text-forest transition-colors hover:bg-cream"
            >
              {label}
            </a>
          </li>
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

          return (
            <li key={item.href} className="border-b border-paper/10 py-4">
              <a href={item.href} onClick={onNavigate} className="font-serif text-2xl">
                {item.label}
              </a>
              <ul className="mt-3 space-y-1 border-l border-paper/15 pl-4">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <a
                      href={child.href}
                      onClick={onNavigate}
                      className="block py-2 text-sm leading-snug text-paper/80 hover:text-coral"
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
