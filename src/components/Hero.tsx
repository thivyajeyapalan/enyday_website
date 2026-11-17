import { GlossPen } from "./GlossPen";
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
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2.25rem] bg-periwinkle md:rounded-[2.75rem]">
            {/* soft studio light */}
            <div className="absolute -left-1/4 -top-1/4 size-[85%] rounded-full bg-paper/45 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-1/3 -right-1/4 size-[80%] rounded-full bg-periwinkle-deep/60 blur-3xl" aria-hidden="true" />
            {/* floor shadow */}
            <div className="absolute bottom-[11%] left-1/2 h-6 w-[38%] -translate-x-1/2 rounded-[50%] bg-cobalt/30 blur-xl" aria-hidden="true" />

            <div className="absolute inset-0 grid place-items-center">
              <div className="h-[94%] animate-float [--tilt:-12deg]" style={{ transform: "rotate(-12deg)" }}>
                <GlossPen className="h-full w-auto drop-shadow-[0_30px_40px_rgba(27,36,112,0.35)]" />
              </div>
            </div>

            <Sparkle className="absolute right-[14%] top-[13%] size-10 animate-twinkle text-cream md:size-12" />
            <Sparkle className="absolute bottom-[22%] left-[13%] size-5 animate-twinkle text-cream/90 [animation-delay:1.4s]" />

            <div className="absolute left-4 top-4 md:left-5 md:top-5">
              <StatusPill>in development</StatusPill>
            </div>
            <p className="absolute bottom-4 right-5 text-[0.7rem] font-medium tracking-wide text-cobalt/60">concept rendering</p>
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
