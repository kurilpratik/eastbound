"use client";

import { useRouter } from "next/navigation";

type PortalLoginFormProps = {
  supportCopy: string;
  redirectOnSubmit?: boolean;
  redirectPath?: string;
};

const PortalLoginForm = ({
  supportCopy,
  redirectOnSubmit = false,
  redirectPath = "/agent/agent-board",
}: PortalLoginFormProps) => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!redirectOnSubmit) {
      return;
    }

    router.push(redirectPath);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
  );
};

export default PortalLoginForm;
