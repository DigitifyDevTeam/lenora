"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { delay } from "@/components/ui";
import { faqs } from "@/content/home";

export function FaqList() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div
            key={item.q}
            className="reveal border-b border-terracotta/20 py-2"
            style={delay(i * 50)}
          >
            <h3 className="font-serif text-2xl font-medium text-forest">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
              >
                {item.q}
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full border text-terracotta transition-all duration-500 ${
                    isOpen
                      ? "rotate-45 border-coral bg-coral text-forest-deep"
                      : "border-terracotta/30"
                  }`}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="max-w-2xl pb-6 leading-relaxed text-ink/70"
            >
              {isOpen ? <p>{item.a}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
