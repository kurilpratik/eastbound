"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Footer() {
  const [sent, setSent] = useState(false);
  return (
    <footer id="contact" className="bg-blue-dark text-white">
      {/* Enquiry band */}
      <div className="border-b border-white/10">
        <div className="container grid gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-blue-light mb-8">Begin your journey</p>
            <h2 className="mb-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              Tell us where your{" "}
              <span className="text-accent">imagination</span> is drifting.
            </h2>
            <p className="text-primary-foreground/70 mb-10 max-w-md leading-relaxed font-light">
              Send a few lines about the journey you have in mind. A senior
              consultant will be in touch within one working day.
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                  Concierge
                </dt>
                <dd className="mt-1">
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
                  Speak with us
                </dt>
                <dd className="mt-1">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-primary-foreground/50 text-[0.65rem] tracking-[0.3em] uppercase">
                  Studio
                </dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              <FormRow label="Name">
                <input
                  required
                  type="text"
                  className="footer-input"
                  placeholder="Your name"
                />
              </FormRow>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormRow label="Email">
                  <input
                    required
                    type="email"
                    className="footer-input"
                    placeholder="you@example.com"
                  />
                </FormRow>
                <FormRow label="Phone">
                  <input
                    type="tel"
                    className="footer-input"
                    placeholder="+1 555 000 0000"
                  />
                </FormRow>
              </div>
              <FormRow label="Destination">
                <select className="footer-input" defaultValue="">
                  <option value="" disabled>
                    Where would you like to go?
                  </option>
                  <option>India</option>
                  <option>Bhutan</option>
                  <option>Nepal</option>
                  <option>Sri Lanka</option>
                  <option>UAE</option>
                  <option>Multi-country</option>
                </select>
              </FormRow>
              <FormRow label="A little about your trip">
                <textarea
                  rows={4}
                  className="footer-input resize-none"
                  placeholder="Dates, party size, anything you already dream of..."
                />
              </FormRow>
              <button
                type="submit"
                className="group bg-accent text-accent-foreground inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.28em] uppercase transition-transform duration-300 hover:-translate-y-0.5 hover:font-semibold"
              >
                {sent ? "Thank you — we'll be in touch" : "Submit enquiry"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container grid items-center gap-8 py-12 md:grid-cols-[1fr_auto_auto]">
        <img
          src={"/logo/logo-white.png"}
          alt="Eastbound"
          className="h-9 w-auto opacity-90 brightness-0 invert"
        />
        <nav className="flex flex-wrap gap-8">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-primary-foreground/70 hover:text-blue-light text-[0.7rem] tracking-[0.28em] uppercase transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="text-primary-foreground/70 flex gap-6 text-[0.7rem] tracking-[0.28em] uppercase">
          <a
            href={site.social.instagram}
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href={site.social.linkedin}
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="text-primary-foreground/50 container flex flex-wrap justify-between gap-4 text-[0.68rem] tracking-[0.22em] uppercase">
          <span>
            © {new Date().getFullYear()} Eastbound Travel. All rights reserved.
          </span>
          <span>India · Bhutan · Nepal · Sri Lanka · UAE</span>
        </div>
      </div>

      <style>{`
        .footer-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 0.75rem 0;
          color: white;
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 300ms;
        }
        .footer-input::placeholder { color: rgba(255,255,255,0.4); }
        .footer-input:focus { border-color: var(--color-accent); }
        .footer-input option { color: var(--color-primary); }
      `}</style>
    </footer>
  );
}

function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-primary-foreground/50 mb-2 block text-[0.65rem] tracking-[0.3em] uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
