"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function RevealObserver() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    for (const el of elements) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible");
      }
    }
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const el of elements) {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
