"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

const resources = [
  {
    title: "Destination guides",
    description:
      "Expert-led briefs for key markets, including route ideas, cultural notes, and practical planning advice.",
    href: "https://www.travolgo.com/home",
  },
  {
    title: "Travel tools",
    description:
      "Quick access to itinerary frameworks, booking workflows, and client-ready planning materials.",
    href: "https://www.travolgo.com/home",
  },
  {
    title: "Marketing assets",
    description:
      "Campaign-ready visuals and narrative prompts to support sales conversations and client storytelling.",
    href: "https://www.travolgo.com/home",
  },
] as const;

import { useEffect, useRef, useState } from "react";

const tabs = [
  { id: "itineraries", label: "Itineraries" },
  { id: "signature-experiences", label: "Signature Experiences" },
  { id: "festival-calendar", label: "Festival Calendar" },
  {
    id: "maps-guidelines",
    label: "Maps, Guidelines & Everything You Need to Know",
  },
];

const AgentResources = () => {
  const [active, setActive] = useState<string>(tabs[0].id);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) {
        sectionsRef.current[t.id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = sectionsRef.current[id] || document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <section
      id="agent-resources"
      className="bg-[#f5f3ee] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="sticky top-4 z-40 mx-0 mb-4">
          <nav className="rounded-md bg-white/60 px-3 py-2 shadow-sm backdrop-blur-sm">
            <ul className="flex gap-3 overflow-auto">
              {tabs.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    onClick={handleClick(t.id)}
                    className={`inline-block rounded-md px-3 py-2 text-sm font-medium whitespace-normal transition-colors ${
                      active === t.id
                        ? "bg-[#0d2031] text-white"
                        : "text-[#0d2031] hover:bg-[#0d2031]/10"
                    }`}
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="space-y-16">
          <section
            id="itineraries"
            className="rounded-md bg-white p-6"
            aria-label="Itineraries"
          >
            <h3 className="font-serif text-2xl">Itineraries</h3>
            <p className="mt-4 text-sm text-[#0d2031]/70">
              Placeholder — content to be provided.
            </p>
          </section>

          <section
            id="signature-experiences"
            className="rounded-md bg-white p-6"
            aria-label="Signature Experiences"
          >
            <h3 className="font-serif text-2xl">Signature Experiences</h3>
            <p className="mt-4 text-sm text-[#0d2031]/70">
              Placeholder — content to be provided.
            </p>
          </section>

          <section
            id="festival-calendar"
            className="rounded-md bg-white p-6"
            aria-label="Festival Calendar"
          >
            <h3 className="font-serif text-2xl">Festival Calendar</h3>
            <p className="mt-4 text-sm text-[#0d2031]/70">
              Placeholder — content to be provided.
            </p>
          </section>

          <section
            id="maps-guidelines"
            className="rounded-md bg-white p-6"
            aria-label="Maps, Guidelines & Everything You Need to Know"
          >
            <h3 className="font-serif text-2xl">
              MAPS, GUIDELINES & EVERYTHING YOU NEED TO KNOW
            </h3>
            <p className="mt-4 text-sm text-[#0d2031]/70">
              Placeholder — content to be provided.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AgentResources;
