import { brands } from "@/data/brands";

const BrandLogos = () => {
  const loop = [...brands, ...brands];
  return (
    <section className="border-border/60 bg-background overflow-hidden border-b py-16 md:py-20">
      <div className="container-x">
        <p className="eyebrow mb-10 text-center">In partnership with</p>
      </div>
      <div className="relative">
        <div className="marquee-track items-center gap-16 md:gap-24">
          {loop.map((b, i) => (
            <span
              key={`${b.name}-${i}`}
              className="text-blue-dark/50 hover:text-blue-dark font-serif text-2xl tracking-wide whitespace-nowrap transition-colors md:text-3xl"
            >
              {b.name}
            </span>
          ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent" />
      </div>
    </section>
  );
};

export default BrandLogos;
