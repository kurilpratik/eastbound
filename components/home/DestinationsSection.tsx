"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const destinations = [
  {
    name: "India",
    slug: "india",
    label: "01",
    region: "The Subcontinent",
    description:
      "From Rajasthan’s palace forts to Kerala’s lush backwaters, India reveals a different world at every turn.",
    image: "/images/destinations/india.jpg",
  },
  {
    name: "Bhutan",
    slug: "bhutan",
    label: "02",
    region: "The Himalayas",
    description: "A kingdom that measures wealth in happiness.",
    image: "/images/destinations/bhutan.jpg",
  },
  {
    name: "Nepal",
    slug: "nepal",
    label: "03",
    region: "The Himalayas",
    description:
      "Ancient temples, mountain trails and warm hospitality beneath the world’s highest peaks.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Sri Lanka",
    slug: "srilanka",
    label: "04",
    region: "The Indian Ocean",
    description:
      "Tea gardens, timeless temples and golden coastlines make every island journey feel distinct.",
    image: "/images/destinations/srilanka.jpg",
  },
  {
    name: "UAE",
    slug: "uae",
    label: "05",
    region: "The Gulf",
    description:
      "Desert horizons, design-forward cities and deeply rooted Arabian hospitality.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=85",
  },
];

const DestinationsSection = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-[#fbf9f5] py-20 sm:py-28 lg:py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-primary text-[10px] font-medium tracking-[0.42em] uppercase sm:text-xs">
              Where we travel
            </p>
            <h2 className="text-blue-dark mt-6 font-serif text-[2.7rem] leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Five countries.
              <span className="text-primary mt-2 block">
                A thousand doorways.
              </span>
            </h2>
          </div>

          <p className="text-blue-dark/70 max-w-md pb-1 text-sm leading-6 sm:text-base sm:leading-7">
            Every Eastbound journey begins with a conversation about place — and
            the specific way you would like to inhabit it.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[1.03fr_0.87fr] lg:gap-14 xl:gap-16">
          <article className="bg-blue-dark relative min-h-[440px] overflow-hidden sm:min-h-[570px]">
            {destinations.map((destination, index) => (
              <Image
                key={destination.name}
                src={destination.image}
                alt={
                  index === activeIndex ? `${destination.name} landscape` : ""
                }
                aria-hidden={index !== activeIndex}
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                className={`object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#132436]/90 via-[#132436]/15 to-transparent" />

            {destinations.map((destination, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={destination.name}
                  aria-hidden={!isActive}
                  className={`absolute inset-x-0 bottom-0 p-7 text-white transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none sm:p-9 lg:p-10 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <p className="text-[10px] font-medium tracking-[0.32em] text-white/80 uppercase sm:text-xs">
                    {destination.label} · {destination.region}
                  </p>
                  <h3 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                    {destination.name}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/90 sm:text-base">
                    {destination.description}
                  </p>
                  {/* <a
                    href={destination.href}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    className="hover:text-primary focus-visible:text-primary mt-6 inline-flex text-[10px] font-medium tracking-[0.34em] text-white uppercase transition-colors focus-visible:outline-none"
                  >
                    View location <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              );
            })}
          </article>

          <div className="border-blue-dark/10 border-y">
            {destinations.map((destination, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={destination.name}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => {
                    setActiveIndex(index);
                    router.push(`/destinations/${destination.slug}`);
                  }}
                  aria-pressed={isActive}
                  className="group border-blue-dark/10 grid w-full grid-cols-[2.75rem_1fr_auto] items-center gap-2 border-b py-6 text-left last:border-b-0 hover:cursor-pointer sm:grid-cols-[3rem_1fr_auto] sm:py-7"
                >
                  <span
                    className={`text-[10px] tracking-[0.24em] ${isActive ? "text-primary" : "text-blue-dark/55"}`}
                  >
                    {destination.label}
                  </span>
                  <span
                    className={`inline-block transform-gpu font-serif text-4xl leading-none tracking-[-0.04em] transition-[color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none sm:text-5xl ${
                      isActive
                        ? "text-primary translate-x-3 italic"
                        : "text-blue-dark group-hover:text-primary group-focus-visible:text-primary translate-x-0"
                    }`}
                  >
                    {destination.name}
                  </span>
                  <span
                    className={`inline-block transform-gpu text-[9px] font-medium tracking-[0.28em] uppercase transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none sm:text-[10px] ${
                      isActive
                        ? "text-primary translate-x-2 opacity-100"
                        : "text-primary translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 group-focus-visible:translate-x-2 group-focus-visible:opacity-100"
                    }`}
                  >
                    Explore{" "}
                    <span className="inline-block transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
                      →
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
