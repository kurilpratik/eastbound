import Image from "next/image";

import { Button } from "../ui/Button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen w-full items-end overflow-hidden">
      <Image
        src="/images/home-hero.jpg"
        alt="Eastbound Group"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/25 to-black/10" />

      <div className="container w-full pt-32 pb-10 sm:pt-36 sm:pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <h1 className="font-regular font-serif text-3xl leading-none text-white sm:text-4xl sm:leading-[1.08] lg:text-5xl">
            20 Years of Extraordinary Journeys
            <span className="block"> Timeless Expeditions...</span>
          </h1>
          <p className="mt-5 mb-6 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            For over 20 years, Eastbound has designed seamless luxury FIT,
            Special Interest Groups, incentive, and educational travel
            programmes across India, Nepal, Bhutan, Sri Lanka and the UAE -
            trusted by tour operators and travel designers worldwide.
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            Talk to our experts <MoveRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
