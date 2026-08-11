"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navData } from "@/data/navData";

const MenuMark = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 34 26"
    className="h-7 w-8 overflow-visible"
    fill="none"
  >
    <path d="M2 4.5C9 1.5 20 2 31 4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M4 13C12 10.5 22 11.5 29 13"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M2 21.5C11 18.5 21 20 32 21"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const CloseMark = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 36 36"
    className="h-8 w-8 overflow-visible"
    fill="none"
  >
    <path
      d="M5 5C12 10 20 22 31 30"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M30 5C22 12 12 21 5 31"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M8 7C15 11 23 21 29 28"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.55"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isMenuOpen]);

  if (pathname === "/agent" || pathname === "/events") return null;

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] bg-gradient-to-b from-black/80 via-black/35 to-transparent py-4 text-white">
      <div className="container flex items-center justify-between gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="flex items-center gap-2 sm:contents">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            className="group flex w-fit items-center gap-3 text-left text-xs font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <MenuMark />
            <span className="hidden sm:inline">Menu</span>
          </button>

          <Link
            href="/"
            aria-label="Eastbound home"
            className="shrink-0 sm:justify-self-center"
          >
            <Image
              src="/logo/logo-white.png"
              alt="Eastbound"
              width={140}
              height={100}
              priority
              className="h-auto w-25 sm:w-32"
            />
          </Link>
        </div>

        <div className="flex gap-2 justify-self-end sm:gap-3">
          <Link
            href="/agent"
            className="group hover:text-blue-dark inline-flex items-center gap-0 border border-white/70 px-2.5 py-2 text-[9px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 group-hover:gap-2 hover:bg-white sm:px-4 sm:text-[11px]"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-[-2px]">
              Agent Hub
            </span>
            <ArrowUpRight className="h-0 w-0 translate-x-2 opacity-0 transition-all duration-300 ease-out group-hover:h-3.5 group-hover:w-3.5 group-hover:translate-x-0 group-hover:opacity-100 sm:group-hover:h-4 sm:group-hover:w-4" />
          </Link>
          <Link
            href="/events"
            className="group bg-primary hover:text-blue-dark inline-flex items-center gap-0 px-2.5 py-2 text-[9px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 group-hover:gap-2 hover:bg-white sm:px-4 sm:text-[11px]"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-[-2px]">
              Events Hub
            </span>
            <ArrowUpRight className="h-0 w-0 translate-x-2 opacity-0 transition-all duration-300 ease-out group-hover:h-3.5 group-hover:w-3.5 group-hover:translate-x-0 group-hover:opacity-100 sm:group-hover:h-4 sm:group-hover:w-4" />
          </Link>
        </div>
      </div>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`bg-blue-dark fixed inset-0 px-4 py-4 transition-[clip-path,opacity] duration-500 ease-out sm:px-8 ${
          isMenuOpen
            ? "pointer-events-auto opacity-100 [clip-path:circle(150%_at_0_0)]"
            : "pointer-events-none opacity-0 [clip-path:circle(0%_at_0_0)]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <div className="flex items-center justify-between">
            <Image
              src="/logo/logo-white.png"
              alt="Eastbound"
              width={140}
              height={100}
              priority
              className="h-auto w-25 sm:w-32"
            />
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="hover:text-blue-dark flex h-12 items-center gap-2 px-3 text-[10px] font-medium tracking-[0.18em] uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <CloseMark />
            </button>
          </div>

          <div className="my-auto grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <ul className="space-y-1">
              {navData.map((item, index) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group hover:text-blue-light flex w-fit items-baseline gap-4 font-serif text-4xl leading-tight transition-colors sm:text-6xl lg:text-7xl"
                  >
                    <span className="text-blue-light font-sans text-[10px] tracking-[0.2em]">
                      0{index + 1}
                    </span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 text-sm tracking-wider text-white/65 uppercase">
              <Link
                href="/agents-hub"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 hover:text-white"
              >
                Agent Hub <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/events-hub"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 hover:text-white"
              >
                Events Hub <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="text-[10px] tracking-[0.18em] text-white/45 uppercase">
            Explore beyond the ordinary
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
