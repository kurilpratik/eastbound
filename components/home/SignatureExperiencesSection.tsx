import { experiences } from "@/data/experiences";
import { Reveal } from "../Reveal";
import Image from "next/image";

export function SignatureExperiencesSection() {
  return (
    <section id="experiences" className="bg-background py-24 md:py-36">
      <div className="container">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Signature experiences</p>
            <h2 className="text-primary max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl">
              A handful of journeys we return to{" "}
              <em className="text-accent italic">again and again.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {experiences.map((e, i) => (
            <Reveal
              key={e.id}
              variant="image"
              delay={i * 120}
              className="card-frame group bg-card cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.title}
                  className="h-[420px] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </div>
              <div className="border-border/60 border-x border-b p-7">
                <div className="text-muted-foreground mb-4 flex items-center justify-between text-[0.68rem] tracking-[0.3em] uppercase">
                  <span>{e.location}</span>
                  <span>{e.duration}</span>
                </div>
                <h3 className="text-primary mb-4 font-serif text-2xl leading-tight md:text-[1.7rem]">
                  {e.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-light">
                  {e.copy}
                </p>
                <span className="text-primary inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase">
                  Discover the journey
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
