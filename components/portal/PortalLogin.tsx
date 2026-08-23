"use client";

import Image from "next/image";
import Link from "next/link";

type PortalLoginProps = {
  eyebrow: string;
  title: string;
  description: string;
  supportCopy: string;
  imageUrl?: string;
  imagePosition?: string;
};

const PortalLogin = ({
  eyebrow,
  title,
  description,
  supportCopy,
  imageUrl = "/images/events/events-bg.jpg",
  imagePosition = "center",
}: PortalLoginProps) => {
  return (
    <main className="bg-blue-dark relative isolate flex min-h-screen items-end overflow-hidden text-white sm:items-center">
      <Image
        src={imageUrl}
        alt="Eastbound travel landscape"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: imagePosition }}
      />
      {/* <div className="absolute inset-0 -z-10 bg-[#0d2031]/70" /> */}
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

          <form
            onSubmit={(event) => event.preventDefault()}
            className="bg-blue-dark/80 border border-white/20 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-[10px] font-medium tracking-[0.2em] text-white/75 uppercase"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="focus:border-primary mt-2 w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white transition-colors outline-none placeholder:text-white/45"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="password"
                    className="text-[10px] font-medium tracking-[0.2em] text-white/75 uppercase"
                  >
                    Password
                  </label>
                  <a
                    href="mailto:info@eastbound.com?subject=Portal%20password%20reset"
                    className="hover:text-primary text-[10px] tracking-[0.12em] text-white/70 uppercase transition-colors"
                  >
                    Need help?
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="focus:border-primary mt-2 w-full border-b border-white/40 bg-transparent px-0 py-3 text-base text-white transition-colors outline-none placeholder:text-white/45"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary hover:text-blue-dark mt-8 inline-flex w-full items-center justify-center gap-3 px-5 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Sign in <span aria-hidden="true">→</span>
            </button>
            <p className="mt-5 text-center text-xs leading-5 text-white/65">
              {supportCopy}
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default PortalLogin;
