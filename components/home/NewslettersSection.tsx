import { posts } from "@/data/blog";
import { Reveal } from "../Reveal";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function NewslettersSection() {
  return (
    <section id="journal" className="bg-background py-24 md:py-36">
      <div className="container">
        <Reveal className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Eastnews</p>
            <h2 className="text-primary max-w-xl font-serif text-4xl leading-[1.05] md:text-6xl">
              From the <em className="text-accent italic">Eastbound</em>{" "}
              journal.
            </h2>
          </div>
          <a
            href="/newsletters"
            className="text-primary/80 hover:text-accent border-border inline-flex items-center gap-2 border-b pb-1 text-[0.72rem] tracking-[0.28em] uppercase transition-colors"
          >
            View all newsletters →
          </a>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p, i) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full text-inherit no-underline"
            >
              <Reveal
                variant="image"
                delay={i * 120}
                as="article"
                className="card-frame h-full cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div className="px-2 pt-6 pb-8">
                  <div className="text-muted-foreground mb-4 flex items-center gap-4 text-[0.68rem] tracking-[0.28em] uppercase">
                    <span className="text-accent">{p.category}</span>
                    <span className="bg-border h-px w-3" />
                    <span>{p.date}</span>
                    <span className="bg-border h-px w-3" />
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="group-hover:text-accent mb-3 font-serif text-2xl leading-snug text-neutral-700 transition-colors md:text-[1.7rem]">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {p.excerpt}
                  </p>
                  <span className="text-primary mt-8 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.28em] uppercase">
                    Read this newsletter
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </span>
                </div>
              </Reveal>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
