import { Button } from "../ui/Button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen w-full items-end overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/home-hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/25 to-black/10" />

      <div className="container w-full pt-32 pb-10 sm:pt-36 sm:pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <h1 className="font-regular font-serif text-3xl leading-none text-white sm:text-4xl sm:leading-[1.08] lg:text-5xl">
            <span className="text-4xl lg:text-6xl">20</span> Years of
            Extraordinary Journeys
            <span className="block"> Timeless Expeditions</span>
          </h1>
          <p className="mt-5 mb-6 max-w-xl text-sm leading-6 text-white/85 sm:text-sm sm:leading-7">
            From luxury FITs and incentive travel to photography, culinary tours
            and educational trips, Eastbound designs classic and seamless travel
            experiences for tour operators, travel agents, wholesalers, across
            India, Nepal, Bhutan, Sri Lanka and the UAE that are its signature.
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
