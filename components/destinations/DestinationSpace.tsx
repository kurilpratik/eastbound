import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { allDestinations } from "@/data/all-destinations";

type DestinationSpaceProps = {
  destinationId: string;
};

const serviceLinks: Record<string, { href: string; label: string }> = {
  india: { href: "/services#luxury-fit", label: "Luxury FIT Travel" },
  nepal: {
    href: "/services#special-interest",
    label: "Special Interest & Affinity Groups",
  },
  bhutan: { href: "/services#luxury-fit", label: "Luxury FIT Travel" },
  srilanka: {
    href: "/services#special-interest",
    label: "Special Interest & Affinity Groups",
  },
  uae: { href: "/services#incentives", label: "Incentives & Meetings" },
};

const DestinationSpace = ({ destinationId }: DestinationSpaceProps) => {
  const destination =
    allDestinations.find((item) => item.id === destinationId) ??
    allDestinations[0];
  const service = serviceLinks[destination.id] ?? serviceLinks.india;

  return (
    <div className="bg-background text-foreground">
      <section className="container py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="image" className="overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="h-[420px] w-full object-cover md:h-[560px]"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-blue-light mb-4">Destination overview</p>
            <h2 className="text-primary font-serif text-4xl leading-tight md:text-5xl">
              {destination.name}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">
              {destination.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {destination.experiences.slice(0, 3).map((experience) => (
                <span
                  key={experience}
                  className="border-border/70 bg-secondary/60 text-primary border px-4 py-2 text-[0.7rem] tracking-[0.2em] uppercase"
                >
                  {experience}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow text-blue-light mb-4">Highlights</p>
            <h2 className="text-primary font-serif text-3xl leading-[1.05] md:text-5xl">
              Places that shape the story of {destination.name}.
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {destination.highlightPlaces.map((place, index) => (
              <Reveal
                key={place.name}
                delay={index * 80}
                className="group border-border/70 bg-background overflow-hidden border"
              >
                <div className="overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-7">
                  <span className="text-blue-light text-[0.68rem] tracking-[0.28em] uppercase">
                    Highlight
                  </span>
                  <h3 className="text-primary mt-4 font-serif text-2xl leading-tight">
                    {place.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                    {place.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-blue-light mb-4">Experiences</p>
            <h2 className="text-primary font-serif text-3xl leading-[1.05] md:text-5xl">
              What to do in {destination.name}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-neutral-700">
              Every journey is shaped around your pace, interests and travel
              style — from immersive cultural moments to private luxury
              experiences.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid gap-4 sm:grid-cols-2">
              {destination.experiences.map((experience, index) => (
                <div
                  key={experience}
                  className="card-frame border-border/70 bg-secondary/40 flex items-start gap-4 border p-5"
                >
                  <span className="text-accent mt-0.5 font-serif text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed font-medium text-neutral-700">
                    {experience}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="border-border/70 mt-16 border-t pt-10">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow text-blue-light mb-2">
                  Planning this trip
                </p>
                <h3 className="text-primary font-serif text-2xl md:text-3xl">
                  Let us shape a journey around your interests.
                </h3>
              </div>

              <Link
                href={service.href}
                className="group border-primary bg-primary text-primary-foreground hover:text-primary inline-flex items-center gap-3 border px-7 py-4 text-[0.72rem] tracking-[0.28em] uppercase transition-colors hover:bg-transparent"
              >
                {service.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default DestinationSpace;
