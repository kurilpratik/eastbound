"use client";

import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import {
  contactHero,
  offices,
  programmeTypes,
  destinationOptions,
  paymentPolicy,
  contactSignature,
} from "@/data/contact";
import { site } from "@/data/site";

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <main className="bg-blue-dark text-foreground">
        {/* Asymmetric intro: oversized headline left, quick contact rail right */}
        <section className="bg-blue-dark pt-36 pb-20 text-white md:pt-44 md:pb-28">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="mb-7 flex items-center gap-4">
                <span className="bg-accent h-px w-12" />
                <span className="text-primary-foreground/70 text-[0.72rem] tracking-[0.32em] uppercase">
                  {contactHero.eyebrow}
                </span>
              </div>
              <h1 className="font-serif text-4xl leading-[1.04] tracking-tight md:text-5xl lg:text-[3.9rem]">
                Let's Create <span className="text-accent">Remarkable</span>{" "}
                Journeys Together
              </h1>
              <p className="text-primary-foreground/70 mt-8 max-w-xl leading-relaxed font-light">
                {contactHero.copy}
              </p>
            </Reveal>

            <Reveal
              delay={120}
              className="self-end lg:col-span-4 lg:col-start-9"
            >
              <dl className="space-y-8 border-l border-white/15 pl-8">
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Email
                  </dt>
                  <dd className="mt-2 font-serif text-xl">
                    <a
                      href={`mailto:${site.email}`}
                      className="hover:text-accent transition-colors"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Telephone
                  </dt>
                  <dd className="mt-2 font-serif text-xl">{site.phone}</dd>
                </div>
                <div>
                  <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                    Hours
                  </dt>
                  <dd className="text-primary-foreground/70 mt-2 text-sm font-light">
                    Enquiries answered within one working day. 24/7 support
                    while your guests are travelling.
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Enquiry form — wide form, narrow sticky note column */}
        <section id="enquiry" className="bg-background py-24 md:py-32">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-blue-light mb-4">Get in Touch</p>
              <h2 className="text-primary font-serif text-3xl leading-[1.08] md:text-4xl">
                Tell us about the programme you have in mind.
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed font-light">
                The more you share — dates, party size, the brand this needs to
                reflect — the sharper our first proposal will be.
              </p>
              <p className="text-accent mt-10 font-serif text-xl italic">
                One point of contact, from first brief to homecoming.
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-x-8 gap-y-7 sm:grid-cols-2"
              >
                <Field label="Name" htmlFor="c-name">
                  <input
                    id="c-name"
                    required
                    type="text"
                    className="contact-input"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Company" htmlFor="c-company">
                  <input
                    id="c-company"
                    type="text"
                    className="contact-input"
                    placeholder="Company / agency"
                  />
                </Field>
                <Field label="Email" htmlFor="c-email">
                  <input
                    id="c-email"
                    required
                    type="email"
                    className="contact-input"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Phone" htmlFor="c-phone">
                  <input
                    id="c-phone"
                    type="tel"
                    className="contact-input"
                    placeholder="+1 555 000 0000"
                  />
                </Field>
                <Field label="Destination(s) of interest" htmlFor="c-dest">
                  <select id="c-dest" className="contact-input" defaultValue="">
                    <option value="" disabled>
                      Select a destination
                    </option>
                    {destinationOptions.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Type of programme" htmlFor="c-type">
                  <select id="c-type" className="contact-input" defaultValue="">
                    <option value="" disabled>
                      Select a programme type
                    </option>
                    {programmeTypes.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Travel dates"
                  htmlFor="c-dates"
                  className="sm:col-span-2"
                >
                  <input
                    id="c-dates"
                    type="text"
                    className="contact-input"
                    placeholder="e.g. Late February 2027, 11 nights"
                  />
                </Field>
                <Field
                  label="Message"
                  htmlFor="c-message"
                  className="sm:col-span-2"
                >
                  <textarea
                    id="c-message"
                    rows={5}
                    className="contact-input resize-none"
                    placeholder="Party size, interests, budget guidance, anything already decided..."
                  />
                </Field>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group bg-accent text-accent-foreground inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.28em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Offices — asymmetric stagger */}
        <section className="bg-neutral-100 py-24 md:py-32">
          <div className="container">
            <Reveal className="mb-16 max-w-xl lg:ml-[42%]">
              <p className="eyebrow mb-4">Our Offices</p>
              <h2 className="text-primary font-serif text-3xl leading-[1.05] md:text-5xl">
                Three offices,{" "}
                <em className="text-accent italic">five countries.</em>
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-12">
              {offices.map((o, i) => (
                <Reveal
                  key={o.label}
                  delay={i * 110}
                  className={
                    i === 0
                      ? "md:col-span-6"
                      : i === 1
                        ? "md:col-span-6"
                        : "md:col-span-7 md:col-start-4"
                  }
                >
                  <div className="card-frame group bg-background border-border/70 h-full border p-8 md:p-10">
                    <p className="text-accent text-[0.65rem] tracking-[0.3em] uppercase">
                      {o.country}
                    </p>
                    <h3 className="text-primary group-hover:text-accent mt-4 font-serif text-2xl transition-colors md:text-3xl">
                      {o.label}
                    </h3>
                    <address className="text-muted-foreground mt-5 leading-relaxed font-light not-italic">
                      {o.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                    <dl className="mt-7 space-y-2 text-sm">
                      <div className="flex gap-3">
                        <dt className="text-muted-foreground w-6">P</dt>
                        <dd className="text-primary/85">{o.phone}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="text-muted-foreground w-6">E</dt>
                        <dd>
                          <a
                            href={`mailto:${o.email}`}
                            className="text-primary/85 hover:text-accent transition-colors"
                          >
                            {o.email}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Payment policy */}
        <section className="bg-blue-light py-24 text-white md:py-32">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-blue-dark mb-4">
                {paymentPolicy.eyebrow}
              </p>
              <h2 className="font-serif text-3xl leading-[1.08] md:text-4xl">
                {paymentPolicy.title}
              </h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-white/15">
                {paymentPolicy.points.map((p, i) => (
                  <Reveal key={p.slice(0, 20)} delay={i * 80} as="div">
                    <li className="group flex items-baseline gap-6 border-b border-white/15 py-6">
                      <span className="text-blue-dark font-serif">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-blue-dark leading-relaxed font-medium">
                        {p}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <p className="text-primary-foreground/90 mt-12 font-serif text-xl italic md:text-2xl">
                {contactSignature}
              </p>
            </div>
          </div>
        </section>

        <style>{`
        .contact-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--input);
          padding: 0.75rem 0;
          color: var(--color-primary);
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 300ms;
        }
        .contact-input::placeholder { color: var(--color-muted-foreground); }
        .contact-input:focus { border-color: var(--color-accent); }
      `}</style>
      </main>
    </div>
  );
};

function Field({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="text-muted-foreground mb-2 block text-[0.65rem] tracking-[0.3em] uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default ContactPage;
