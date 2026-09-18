import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Explore Event Venues", href: "#explore-event-venues" },
  { label: "Browse Experiences", href: "#browse-experiences" },
  { label: "Request a Proposal", href: "#request-a-proposal" },
  { label: "Event Updates", href: "#event-updates" },
  { label: "Download Resources", href: "#download-resources" },
];

const sections = [
  {
    id: "explore-event-venues",
    title: "Explore Event Venues",
    description:
      "Discover exceptional venues across South Asia for incentives, conferences, celebrations and private events.",
    cta: "Explore Venues",
    href: "#explore-event-venues",
  },
  {
    id: "browse-experiences",
    title: "Browse Experiences",
    description:
      "From private cultural encounters to culinary, wellness, wildlife and adventure experiences, discover ways to make an event memorable.",
    cta: "Browse Experiences",
    href: "#browse-experiences",
  },
  {
    id: "request-a-proposal",
    title: "Request a Proposal",
    description:
      "Tell us what you are planning and our team will create a tailored proposal around your group, destination and objectives.",
    cta: "Request a Proposal",
    href: "#request-a-proposal",
  },
  {
    id: "event-updates",
    title: "Event Updates",
    description:
      "The latest destinations, venues, openings, experiences and ideas from the Eastbound team.",
    cta: "View Updates",
    href: "#event-updates",
  },
  {
    id: "download-resources",
    title: "Download Resources",
    description:
      "Access useful destination guides, venue information, event resources and planning material.",
    cta: "Download Resources",
    href: "#download-resources",
  },
];

const EventsBoard = () => {
  return (
    <main className="min-h-screen text-[#0d2031]">
      <section className="relative overflow-hidden border-b border-[#d9d9d9] bg-[#0d2031] text-white">
        <Image
          src="/images/events/events-bg.jpg"
          alt="Eastbound event venues and experiences"
          fill
          priority
          className="-z-20 object-cover opacity-80"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0d2031]/90 via-[#0d2031]/35 to-[#0d2031]/60" />

        <div className="relative container mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-blue-light">Eastbound events portal</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Events that feel distinctly local, deeply considered and
              beautifully delivered.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Discover venue ideas, bespoke experiences, destination insight and
              event planning support curated for groups, incentives,
              celebrations and private occasions across South Asia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#explore-event-venues">
                  Explore Venues
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#request-a-proposal">
                  Request a Proposal
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6">
          {sections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className="border border-[#d9d9d9] bg-white p-5 shadow-[0_12px_40px_rgba(13,32,49,0.04)] sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[10px] font-medium tracking-[0.28em] text-[#0c8dd8] uppercase">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    {section.title}
                  </h2>
                </div>

                <Button
                  asChild
                  variant="link"
                  size="link"
                  className="self-start lg:self-end"
                >
                  <Link href={section.href}>
                    {section.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventsBoard;
