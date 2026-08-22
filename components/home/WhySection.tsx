import { Reveal } from "../Reveal";

const reasons = [
  {
    id: "01",
    title: "Access, not itinerary",
    description:
      "Private audiences, closed doors and dawn hours reserved for you — the Eastbound advantage is rare and highly personal.",
  },
  {
    id: "02",
    title: "One designer, one journey",
    description:
      "A single senior consultant carries your journey from first call to homecoming letter.",
  },
  {
    id: "03",
    title: "Twenty-two years, five countries",
    description:
      "Two decades of relationships with the region's finest hoteliers, guides and craftspersons.",
  },
  {
    id: "04",
    title: "Quietly responsible",
    description:
      "Every journey contributes to conservation and community projects across the regions we work in.",
  },
];

const WhySection = () => {
  return (
    <section className="bg-blue-dark relative overflow-hidden py-24 text-white md:py-36">
      {/* subtle accent bar */}
      <div className="bg-accent absolute top-0 left-0 h-px w-40" />

      <div className="container">
        <Reveal className="mb-20 max-w-3xl">
          <p className="eyebrow text-primary mb-4">Why Eastbound</p>
          <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
            The difference is in the{" "}
            <em className="text-primary italic">detail</em> — and in the people
            who arrange it.
          </h2>
        </Reveal>

        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {reasons.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="flex gap-8">
              <span className="text-primary pt-1 font-serif text-3xl italic">
                {p.id}
              </span>
              <div>
                <h3 className="mb-3 font-serif text-2xl md:text-3xl">
                  {p.title}
                </h3>
                <p className="text-primary-foreground/70 max-w-md leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
