"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { MoveRight } from "lucide-react";

const heroVideos = ["/videos/h2.mp4", "/videos/h1.mp4", "/videos/h3.mp4"];

const Hero = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex(
        (currentIndex) => (currentIndex + 1) % heroVideos.length,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex h-screen min-h-screen w-full items-end overflow-hidden">
      <video
        key={heroVideos[activeVideoIndex]}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover object-center"
      >
        <source src={heroVideos[activeVideoIndex]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/25 to-black/10" />

      <div className="container w-full pt-32 pb-10 sm:pt-36 sm:pb-16 lg:pb-24">
        <div className="max-w-3xl">
          {/* slide-indicators  */}
          <div
            className="mb-4 flex items-center gap-2"
            aria-label="Hero slide indicators"
          >
            {heroVideos.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full border border-white/70 transition-all duration-300 ${
                  activeVideoIndex === index ? "bg-white" : "bg-white/35"
                }`}
                onClick={() => setActiveVideoIndex(index)}
              />
            ))}
          </div>

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
