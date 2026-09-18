"use client";

import Image from "next/image";
import Link from "next/link";
import PortalLoginForm from "@/components/portal/PortalLoginForm";

export default function Agent() {
  const eyebrow = "AGENT";
  const title = "Agent Collective";
  const description =
    "The Eastbound Agent Collective is the dedicated platform for travel advisors and partners looking to create exceptional journeys across South Asia. It brings together Eastbound’s local knowledge, trusted relationships and curated travel expertise in one place - giving you the tools and inspiration to design journeys that go beyond the expected";
  const supportCopy = "Agent Details will be provided by the Eastbound team.";
  const imageUrl = "/images/agent/ag-bg-2.jpg";

  return (
    <main className="bg-blue-dark relative isolate flex min-h-screen items-end overflow-hidden text-white sm:items-center">
      <Image
        src={imageUrl}
        alt="Eastbound travel landscape"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0d2031]/90 via-[#0d2031]/30 to-[#0d2031]/55" />

      <header className="absolute inset-x-0 top-0">
        <div className="container flex items-center justify-between py-5 sm:py-7">
          <Link href="/" aria-label="Return to Eastbound home">
            <Image
              src="/logo/logo-white.png"
              alt="Eastbound"
              width={140}
              height={100}
              priority
              className="h-auto w-24 sm:w-28"
            />
          </Link>
          <Link
            href="/"
            className="hover:text-blue-light text-[10px] font-medium tracking-[0.22em] text-white/80 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Back to Eastbound
          </Link>
        </div>
      </header>

      <div className="container w-full py-8 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-center lg:gap-20">
          <div className="max-w-xl">
            {/* <p className="eyebrow text-blue-light">{eyebrow}</p> */}
            <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/80 sm:text-sm sm:leading-7">
              The Eastbound Agent Collective is the dedicated platform for
              travel advisors and partners looking to create exceptional
              journeys across South Asia.
              <br />
              It brings together Eastbound’s local knowledge, trusted
              relationships and curated travel expertise in one place - giving
              you the tools and inspiration to design journeys that go beyond
              the expected.
            </p>
          </div>

          <PortalLoginForm
            supportCopy={supportCopy}
            redirectOnSubmit
            redirectPath="/agent/agent-board"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <p className="text-blue-light max-w-4xl px-4 text-center text-xs">
          Explore original hand-crafted itineraries, unusual experiences,
          destination intelligence, travel resources and more. Access our
          expertise, discover what's new across our destinations, and connect
          with a team that understands the importance of detail, access and
          seamless execution.
        </p>
      </div>
    </main>
  );
}
