"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Reveal } from "@/components/Reveal";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center" delay={80}>
          <p className="eyebrow mb-6">Frequently asked questions</p>
          <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
            Everything you need to know about travelling with{" "}
            <span className="text-primary">Eastbound</span>
          </h2>
        </Reveal>

        <div className="mx-auto max-w-4xl">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-border/70 border-b last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                >
                  <span className="text-blue-dark max-w-[90%] font-serif text-xl leading-tight font-medium md:text-3xl">
                    {item.question}
                  </span>
                  <span className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
