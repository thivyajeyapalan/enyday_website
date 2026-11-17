import Image from "next/image";
import { Logo, Sparkle } from "./Logo";
import { Arrow, ButtonLink } from "./ui";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="gutter relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-14">
      {/* soft coral glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-coral-mist blur-3xl md:-right-20"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.08fr_1fr] md:gap-8 lg:gap-16">
        {/* copy */}
        <div className="relative z-10 flex min-w-0 flex-col items-start">
          <Logo className="w-[min(72vw,340px)] animate-fade-up md:w-[min(30vw,400px)]" title="enyday" />

          <h1
            id="hero-title"
            className="mt-8 animate-fade-up text-[clamp(2.5rem,9.6vw,3.4rem)] [animation-delay:120ms] md:mt-10 md:text-[clamp(2.8rem,4.9vw,5rem)]"
          >
            <span className="md:whitespace-nowrap">
              more than <span className="em-coral">brushing.</span>
            </span>
            <br />
            <span className="md:whitespace-nowrap">
              more than <span className="em">basics.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[30rem] animate-fade-up font-display text-xl font-medium leading-snug tracking-[-0.02em] [animation-delay:200ms] md:text-2xl">
            Advancing oral health solutions for everyday life.
          </p>
          <p className="mt-3 max-w-[32rem] animate-fade-up text-lg leading-relaxed text-cobalt-soft [animation-delay:260ms]">
            enyday is developing portable, science-driven oral wellness products using thoughtfully selected active
            ingredients to support preventive care beyond the bathroom.
          </p>

          <div className="mt-8 flex w-full animate-fade-up flex-col gap-3 [animation-delay:320ms] sm:w-auto sm:flex-row">
            <ButtonLink href="#waitlist" className="w-full sm:w-auto">
              join the waitlist <Arrow />
            </ButtonLink>
            <ButtonLink href="#gloss" tone="ghost" className="w-full sm:w-auto">
              explore our first product
            </ButtonLink>
          </div>
        </div>

        {/* product stage */}
        <div className="relative animate-fade-up [animation-delay:200ms]">
          {/* coral blob peeking out behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-[55%] w-[60%] rounded-[2.5rem] bg-coral/85 md:-bottom-7 md:-left-7"
          />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2.25rem] bg-[#f1eeef] md:rounded-[2.75rem]">
            <Image
              src="/images/gloss-upright.webp"
              alt="The enyday gloss pen, standing upright with its clear cap on"
              fill
              priority
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-cover"
            />

            <Sparkle className="absolute right-[14%] top-[13%] size-10 animate-twinkle text-coral md:size-12" />
            <Sparkle className="absolute bottom-[22%] left-[13%] size-5 animate-twinkle text-periwinkle [animation-delay:1.4s]" />
          </div>

          {/* sticker */}
          <div
            aria-hidden="true"
            className="absolute -right-2 bottom-[18%] grid size-24 animate-wiggle place-items-center rounded-full bg-coral text-center font-display text-[0.95rem] font-semibold leading-tight text-paper shadow-[0_14px_30px_-12px_rgba(248,92,112,0.8)] [--r:10deg] md:-right-6 md:size-28 md:text-base"
          >
            <span>
              coming
              <br />
              <span className="italic">soon!</span>
            </span>
          </div>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 right-6 font-script text-[3.4rem] leading-none text-cobalt md:-bottom-6 md:right-auto md:-left-10 md:text-[4.6rem]"
          >
            everyday
          </span>
        </div>
      </div>
    </section>
  );
}

const tickerWords = ["preventive care", "portable formats", "science-driven", "beyond the bathroom", "everyday life"];

/** Scrolling coral strip between the hero and the rest of the page. */
export function Ticker() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {tickerWords.map((w) => (
        <li key={w} className="flex items-center gap-6 pr-6 font-display text-xl italic tracking-[-0.01em] md:text-2xl">
          {w}
          <Sparkle className="size-4 text-paper/90 not-italic" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="-rotate-1 overflow-hidden bg-coral py-3.5 text-paper md:py-4">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
