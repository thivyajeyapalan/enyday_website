import Image from "next/image";
import { Logo, Sparkle } from "./Logo";
import { Arrow, ButtonLink, StatusPill } from "./ui";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="gutter relative overflow-hidden pb-14 pt-8 md:pb-24 md:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.08fr_1fr] md:gap-8 lg:gap-16">
        {/* copy */}
        <div className="relative z-10 flex min-w-0 flex-col items-start">
          <Logo className="w-[min(78vw,380px)] animate-fade-up md:w-[min(34vw,440px)]" title="enyday" />

          <h1
            id="hero-title"
            className="mt-8 animate-fade-up text-[clamp(2.5rem,9.6vw,3.4rem)] [animation-delay:120ms] md:mt-12 md:text-[clamp(2.8rem,4.9vw,5rem)]"
          >
            <span className="md:whitespace-nowrap">
              more than <span className="em">brushing.</span>
            </span>
            <br />
            <span className="md:whitespace-nowrap">
              more than <span className="em">basics.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[30rem] animate-fade-up text-lg leading-relaxed text-cobalt-soft [animation-delay:220ms] md:text-xl">
            Meet enyday. Portable, science-driven oral care for life beyond the bathroom.
          </p>

          <div className="mt-8 flex w-full animate-fade-up flex-col gap-3 [animation-delay:320ms] sm:w-auto sm:flex-row">
            <ButtonLink href="#waitlist" className="w-full sm:w-auto">
              join the waitlist <Arrow />
            </ButtonLink>
            <ButtonLink href="#gloss" tone="ghost" className="w-full sm:w-auto">
              meet the gloss
            </ButtonLink>
          </div>
        </div>

        {/* product stage */}
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2.25rem] bg-[#f1eeef] md:rounded-[2.75rem]">
            <Image
              src="/images/gloss-upright.webp"
              alt="The enyday gloss pen, standing upright with its clear cap on"
              fill
              priority
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-cover"
            />

            <Sparkle className="absolute right-[14%] top-[13%] size-10 animate-twinkle text-periwinkle md:size-12" />
            <Sparkle className="absolute bottom-[22%] left-[13%] size-5 animate-twinkle text-periwinkle [animation-delay:1.4s]" />

            <div className="absolute left-4 top-4 md:left-5 md:top-5">
              <StatusPill>in development</StatusPill>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 left-2 font-script text-[3.4rem] leading-none text-cobalt md:-left-10 md:bottom-6 md:text-[4.6rem]"
          >
            everyday
          </span>
        </div>
      </div>
    </section>
  );
}
