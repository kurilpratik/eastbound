type SubHeroProps = {
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  imageAlt?: string;
  eyebrow?: string;
};

export default function SubHero({
  title,
  description,
  backgroundImage,
  backgroundVideo,
  imageAlt = "Hero background",
  eyebrow,
}: SubHeroProps) {
  return (
    <section className="relative isolate h-[75vh] min-h-105 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            className="h-full w-full object-cover"
            src={backgroundVideo}
            poster={backgroundImage}
            autoPlay
            muted
            loop
            playsInline
          >
            <track kind="captions" />
          </video>
        ) : backgroundImage ? (
          <div
            aria-label={imageAlt}
            role="img"
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(151,180,222,0.35),_transparent_30%),linear-gradient(135deg,_#132436_0%,_#0f172a_52%,_#020617_100%)]" />
        )}

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/45 to-slate-900/15" />
      </div>

      <div className="relative z-10 container flex h-full items-end pt-28 pb-10 md:pb-14">
        <div className="max-w-2xl text-white">
          {eyebrow ? (
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.32em] text-white/75 uppercase">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="max-w-2xl font-serif text-4xl tracking-tight text-white md:text-5xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
