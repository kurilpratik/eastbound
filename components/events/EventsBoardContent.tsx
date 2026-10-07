"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { eventProposalRequestPath } from "@/components/events/EventProposalForm";
import EventRequestForm, {
  eventRequestSources,
  type EventRequestSource,
} from "@/components/events/EventRequestForm";
import EventUpdatesSubscribeForm, {
  eventUpdatesSubscribeSources,
  type EventUpdatesSubscribeSource,
} from "@/components/events/EventUpdatesSubscribeForm";
import { Button } from "@/components/ui/Button";
import { eventBoardSections } from "@/data/eventsBoard";
import { site } from "@/data/site";

const navItems = [
  { label: "Explore Event Venues", href: "#explore-event-venues" },
  { label: "Browse Experiences", href: "#browse-experiences" },
  { label: "Request a Proposal", href: "#request-a-proposal" },
  { label: "Event Updates", href: "#event-updates" },
  { label: "Download Resources", href: "#download-resources" },
];

const sections = eventBoardSections;

const renderFormBlock = (section: (typeof sections)[number]) => {
  if (!section.form) return null;

  return (
    <div className="mt-8 rounded-xl border border-[#d9d9d9] bg-[#f7f8f8] p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-[10px] font-medium tracking-[0.26em] text-[#0c8dd8] uppercase">
          Request form
        </p>
        <h3 className="mt-2 font-serif text-2xl tracking-[-0.03em] text-[#0d2031]">
          {section.form.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#0d2031]/70 sm:text-base">
          {section.form.description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {section.form.fields.map((field) => (
          <div
            key={field.label}
            className={field.type === "textarea" ? "sm:col-span-2" : ""}
          >
            <label className="mb-2 block text-xs font-medium tracking-[0.12em] text-[#0d2031]/75 uppercase">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <div className="min-h-24 rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031]/60">
                {field.label}
              </div>
            ) : field.type === "select" ? (
              <div className="rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031]/60">
                {field.label}
              </div>
            ) : (
              <div className="rounded-md border border-[#d9d9d9] bg-white px-3 py-2 text-sm text-[#0d2031]/60">
                {field.label}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href={section.cta.href}>{section.form.submitButton}</Link>
        </Button>
        <p className="text-xs tracking-[0.18em] text-[#0d2031]/55 uppercase">
          {section.form.email}
        </p>
      </div>
    </div>
  );
};

const renderSectionContent = (section: (typeof sections)[number]) => {
  switch (section.id) {
    case "explore-event-venues":
      return (
        <>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#0d2031]/75 sm:text-base">
            {section.intro}
          </p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8 max-w-4xl">
              <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#0d2031] sm:text-[2rem]">
                {detail.heading}
              </h3>

              {detail.list && (
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                  {detail.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0c8dd8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#0d2031] sm:text-lg">
            {section.closingLine}
          </p>
        </>
      );

    case "browse-experiences":
      return (
        <>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#0d2031]/75 sm:text-base">
            {section.intro}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {section.details?.map((detail) => (
              <div
                key={detail.heading}
                className="rounded-xl border border-[#d9d9d9] bg-[#f8fafb] p-5"
              >
                <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#0d2031]">
                  {detail.heading}
                </h3>
                {detail.description && (
                  <p className="mt-3 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                    {detail.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#0d2031] sm:text-lg">
            {section.closingLine}
          </p>
        </>
      );

    case "request-a-proposal":
      return (
        <>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#0d2031]/75 sm:text-base">
            {section.intro}
          </p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8">
              <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#0d2031] sm:text-[2rem]">
                {detail.heading}
              </h3>

              {detail.list && (
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {detail.list.map((item, idx) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#d9d9d9] bg-[#f8fafb] p-5"
                    >
                      <p className="text-[10px] font-medium tracking-[0.24em] text-[#0c8dd8] uppercase">
                        {idx + 1}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#0d2031] sm:text-lg">
            {section.closingLine}
          </p>
        </>
      );

    case "event-updates":
      return (
        <>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#0d2031]/75 sm:text-base">
            {section.intro}
          </p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8">
              <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#0d2031] sm:text-[2rem]">
                {detail.heading}
              </h3>

              {detail.list && (
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {detail.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-[#d9d9d9] bg-[#f8fafb] p-4 text-sm leading-7 text-[#0d2031]/75 sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0c8dd8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#0d2031] sm:text-lg">
            {section.closingLine}
          </p>
        </>
      );

    case "download-resources":
      return (
        <>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#0d2031]/75 sm:text-base">
            {section.intro}
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {section.details?.map((detail) => (
              <div
                key={detail.heading}
                className="rounded-xl border border-[#d9d9d9] bg-[#f8fafb] p-5"
              >
                <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#0d2031]">
                  {detail.heading}
                </h3>
                {detail.description && (
                  <p className="mt-3 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                    {detail.description}
                  </p>
                )}

                {detail.list && (
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                    {detail.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0c8dd8]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {detail.download ? (
                  <div className="mt-5">
                    <Button asChild size="sm" variant="secondary">
                      <a
                        href={detail.download.href}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {detail.download.label}
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#0d2031] sm:text-lg">
            {section.closingLine}
          </p>
        </>
      );

    default:
      return (
        <>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#0d2031]/75 sm:text-base">
            {section.intro}
          </p>

          {section.details?.map((detail) => (
            <div key={detail.heading} className="mt-8 max-w-4xl">
              {detail.heading && (
                <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#0d2031] sm:text-[2rem]">
                  {detail.heading}
                </h3>
              )}

              {detail.description && (
                <p className="mt-3 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                  {detail.description}
                </p>
              )}

              {detail.list && (
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#0d2031]/75 sm:text-base">
                  {detail.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0c8dd8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <p className="mt-8 max-w-3xl text-base leading-7 text-[#0d2031] sm:text-lg">
            {section.closingLine}
          </p>

          {renderFormBlock(section)}
        </>
      );
  }
};

const EventsBoardContent = () => {
  const [active, setActive] = useState<string>(
    navItems[0]?.href.replace("#", "") ?? "",
  );
  const [requestSource, setRequestSource] = useState<EventRequestSource | null>(
    null,
  );
  const [updatesSubscribeSource, setUpdatesSubscribeSource] =
    useState<EventUpdatesSubscribeSource | null>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-35% 0px -40% 0px", threshold: 0 },
    );

    navItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        sectionsRef.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = sectionsRef.current[id] || document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(id);
      }
    };

  return (
    <>
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

        <div className="relative container mx-auto px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-blue-light">Eastbound events portal</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">
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
                <Link href={eventProposalRequestPath}>
                  Request a Proposal
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="sticky top-4 z-40 mb-6">
          <nav className="rounded-md border border-[#d9d9d9] bg-white/80 px-3 py-2 shadow-[0_8px_24px_rgba(13,32,49,0.06)] backdrop-blur-sm">
            <ul className="flex gap-2 overflow-auto">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");

                return (
                  <li key={item.href} className="shrink-0">
                    <a
                      href={item.href}
                      onClick={handleClick(id)}
                      className={`inline-flex rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                        active === id
                          ? "bg-[#0d2031] text-white"
                          : "text-[#0d2031] hover:bg-[#0d2031]/8"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="grid gap-6">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="border border-[#d9d9d9] bg-white p-5 shadow-[0_12px_40px_rgba(13,32,49,0.04)] sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[10px] font-medium tracking-[0.28em] text-[#0c8dd8] uppercase">
                    {section.number}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="mt-3 max-w-2xl text-base leading-7 text-[#0d2031]/80 sm:text-lg">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                {eventRequestSources.includes(
                  section.id as EventRequestSource,
                ) ? (
                  <Button
                    type="button"
                    variant="link"
                    size="link"
                    className="self-start lg:self-end"
                    onClick={() =>
                      setRequestSource(section.id as EventRequestSource)
                    }
                  >
                    {section.cta.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                ) : section.id === "request-a-proposal" ? (
                  <Button
                    asChild
                    variant="link"
                    size="link"
                    className="self-start lg:self-end"
                  >
                    <Link href={eventProposalRequestPath}>
                      {section.cta.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                ) : eventUpdatesSubscribeSources.includes(
                    section.id as EventUpdatesSubscribeSource,
                  ) ? (
                  <Button
                    type="button"
                    variant="link"
                    size="link"
                    className="self-start lg:self-end"
                    onClick={() =>
                      setUpdatesSubscribeSource(
                        section.id as EventUpdatesSubscribeSource,
                      )
                    }
                  >
                    {section.cta.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="link"
                    size="link"
                    className="self-start lg:self-end"
                  >
                    <Link href={section.cta.href}>
                      {section.cta.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                )}
              </div>

              {renderSectionContent(section)}
            </article>
          ))}
        </div>

        <p className="mt-10 border border-[#d9d9d9] bg-[#f8fafb] px-5 py-6 text-sm leading-7 text-[#0d2031]/75 sm:px-8 sm:text-base">
          Can&apos;t find what you need? Let us know and we&apos;ll point you to
          the right material.{" "}
          <span className="text-[#0d2031]">
            Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-[#0c8dd8] underline decoration-[#0c8dd8]/40 underline-offset-2 transition-colors hover:text-[#0d2031] hover:decoration-[#0d2031]/40"
            >
              {site.email}
            </a>
          </span>
        </p>
      </div>

      {requestSource ? (
        <EventRequestForm
          source={requestSource}
          onClose={() => setRequestSource(null)}
        />
      ) : null}

      {updatesSubscribeSource ? (
        <EventUpdatesSubscribeForm
          source={updatesSubscribeSource}
          onClose={() => setUpdatesSubscribeSource(null)}
        />
      ) : null}
    </>
  );
};

export default EventsBoardContent;
