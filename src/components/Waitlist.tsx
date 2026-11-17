import { Burst, OutlineSparkle, Swoosh } from "./Doodles";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function Waitlist() {
  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="gutter relative overflow-clip bg-periwinkle py-20 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 size-[28rem] rounded-full bg-coral/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
        <Reveal className="relative min-w-0">
          {/* script label with a swoosh and a little burst */}
          <div className="relative inline-block pr-8 sm:pr-10">
            <p className="script-label fit">be part of our enamily!</p>
            <Swoosh className="absolute -bottom-3 left-[38%] h-3 w-[42%] -rotate-3 text-coral" />
            <Burst className="absolute -top-3 right-0 size-9 text-coral" />
          </div>

          <h2 id="waitlist-title" className="mt-7 text-[clamp(3rem,7vw,5.6rem)]">
            join the
            <br />
            <span className="em inline-block border-b-[6px] border-coral pb-1">waitlist.</span>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-cobalt/80 md:text-xl">
            We&rsquo;re developing a new approach to preventive oral care, designed to fit into everyday life.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-cobalt/80 md:text-xl">
            Join our waitlist for a first look at the enyday gloss, product updates, and early access when we launch.
          </p>

          <OutlineSparkle className="absolute -right-2 bottom-10 hidden size-11 animate-twinkle text-cobalt md:block lg:right-4" />
        </Reveal>

        <Reveal delay={100} className="relative min-w-0">
          <Burst className="absolute -top-5 right-6 z-10 size-11 rotate-12 text-coral md:right-10" />
          <div className="rounded-[2.5rem] shadow-[0_40px_80px_-40px_rgba(27,36,112,0.55)]">
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
