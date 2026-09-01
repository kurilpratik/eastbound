import SubHero from "@/components/SubHero";

import { Reveal } from "@/components/Reveal";
import { FeatureSection } from "@/components/destinations/FeatureSection";
import { CtaBand } from "@/components/destinations/CtaBand";

import { destinationPages, indiaCities } from "@/data/destinationPages";

const DestinationsPage = () => {
  return (
    <>
      <SubHero
        eyebrow="Curated escapes"
        title="Discover India and the Sub-Continent Through Local Experts "
        description="Every destination tells a different story. From Himalayan kingdoms and ancient temples to wildlife, wellness retreats and vibrant cities, our teams know every region intimately - and design every journey around it. "
        backgroundVideo="/videos/bhutan.mp4"
      />

      <main className="bg-background text-foreground">
        {/* Index of destinations */}
        <section className="bg-secondary/60 py-16 md:py-20">
          <div className="container grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <p className="eyebrow mb-4">Where we travel</p>
              <h2 className="text-primary font-serif text-3xl leading-tight md:text-4xl">
                Five countries, one team on the ground.
              </h2>
            </Reveal>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {destinationPages.map((d, i) => (
                <Reveal
                  key={d.id}
                  delay={i * 60}
                  className="card-frame group border-border/70 border-b py-5"
                >
                  <a href={`#${d.id}`} className="flex items-baseline gap-5">
                    <span className="text-muted-foreground text-[0.7rem] tracking-[0.3em]">
                      {d.index}
                    </span>
                    <span className="text-primary group-hover:text-accent font-serif text-2xl transition-colors">
                      {d.name}
                    </span>
                    <span className="text-muted-foreground group-hover:text-accent ml-auto text-[0.68rem] tracking-[0.28em] uppercase transition-colors">
                      View →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {destinationPages.map((d, i) => (
          <div key={d.id}>
            <FeatureSection
              id={d.id}
              index={d.index}
              name={d.name}
              tagline={d.tagline}
              intro={d.intro}
              highlights={d.highlights}
              cta={d.cta}
              image={d.image}
              flip={i % 2 === 1}
              tinted={i % 2 === 1}
            />
            {d.id === "india" && <IndiaCities />}
          </div>
        ))}

        <CtaBand
          eyebrow="Plan with us"
          title="Not sure where to begin? Start with a conversation."
          copy="Tell our destination specialists who is travelling and what moves them — we will shape the route around it."
          cta="Make an enquiry"
        />
      </main>
    </>
  );
};

function IndiaCities() {
  return (
    <section className="bg-blue-dark text-primary-foreground py-20 md:py-28">
      <div className="container">
        <Reveal className="mb-14 max-w-2xl text-white">
          <p className="eyebrow text-blue-light mb-4">Cities in India</p>
          <h2 className="font-serif text-3xl leading-[1.05] md:text-5xl">
            Ten Indian cities we know{" "}
            <span className="text-accent">street by street.</span>
          </h2>
        </Reveal>
        <div className="grid border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {indiaCities.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 50}
              className="card-frame group flex min-h-[190px] flex-col border-r border-b border-white/10 p-7"
            >
              <span className="text-blue-light mb-4 text-[0.65rem] tracking-[0.3em] uppercase">
                {c.region}
              </span>
              <h3 className="group-hover:text-accent mb-3 font-serif text-2xl text-white transition-colors">
                {c.name}
              </h3>
              <p className="text-sm leading-relaxed font-light text-white/70">
                {c.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationsPage;
