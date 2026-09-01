import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "./ui/Button";
import { MoveRight } from "lucide-react";
type Props = {
  eyebrow?: string;
  title: string;
  copy?: string;
  cta?: string;
};

export function CtaBand({
  eyebrow = "Let's begin",
  title,
  copy,
  cta = "Start a conversation",
}: Props) {
  return (
    <section className="bg-blue-light text-primary-foreground">
      <div className="container py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-blue-dark mb-4">{eyebrow}</p>
          <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
            {title}
          </h2>
          {copy && (
            <p className="text-primary-foreground/70 my-6 max-w-xl leading-relaxed font-light">
              {copy}
            </p>
          )}

          <Button size="lg" className="w-full sm:w-auto">
            Make an enquiry <MoveRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
