import SubHero from "@/components/SubHero";

const DestinationsPage = () => {
  return (
    <>
      <SubHero
        eyebrow="Curated escapes"
        title="Discover India and the Sub-Continent Through Local Experts "
        description="Every destination tells a different story. From Himalayan kingdoms and ancient temples to wildlife, wellness retreats and vibrant cities, our teams know every region intimately - and design every journey around it. "
        backgroundVideo="/videos/bhutan.mp4"
      />

      <main className="container py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-[0.65rem] font-medium tracking-[0.28em] text-slate-500 uppercase">
              India
            </p>
            <h2 className="font-serif text-3xl text-slate-900">Royal trails</h2>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-[0.65rem] font-medium tracking-[0.28em] text-slate-500 uppercase">
              Bhutan
            </p>
            <h2 className="font-serif text-3xl text-slate-900">
              Mountain calm
            </h2>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-[0.65rem] font-medium tracking-[0.28em] text-slate-500 uppercase">
              Nepal
            </p>
            <h2 className="font-serif text-3xl text-slate-900">
              High-altitude wonder
            </h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default DestinationsPage;
