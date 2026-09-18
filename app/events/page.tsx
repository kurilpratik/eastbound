"use client";

import Image from "next/image";
import Link from "next/link";
import PortalLoginForm from "@/components/portal/PortalLoginForm";

export default function Events() {
  const eyebrow = "Eastbound events portal";
  const title = "Event Exchnange";
  const description =
    " Everything you need to create an exceptional event across India & the UAE.";
  const supportCopy = "Contact your Eastbound event lead to request access.";
  const imageUrl = "/images/events/events-bg.jpg";

  return (
    <main className="bg-blue-dark relative isolate flex min-h-screen items-end overflow-hidden text-white sm:items-center">
      <Image
        src={imageUrl}
        alt="Eastbound travel landscape"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: "center" }}
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
        <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-end lg:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow text-blue-light">{eyebrow}</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              {description}
            </p>
          </div>

          <PortalLoginForm supportCopy={supportCopy} />
        </div>
      </div>
    </main>
  );
}
