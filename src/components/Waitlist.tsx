import { Tooth } from "./Doodles";
import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function Waitlist() {
  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="gutter relative overflow-clip bg-periwinkle py-20 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 size-[28rem] rounded-full bg-coral/30 blur-3xl" />
      <Sparkle className="absolute right-[6%] top-14 size-14 animate-twinkle text-coral md:size-20" />
      <Sparkle className="absolute bottom-16 left-[4%] hidden size-8 animate-twinkle text-paper [animation-delay:1.2s] md:block" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
        <Reveal className="min-w-0 md:sticky md:top-28">
          <p className="script-label cream">be part of our enamily!</p>
          <h2 id="waitlist-title" className="mt-6 text-[clamp(2.6rem,6.4vw,5.2rem)]">
            join the <span className="em underline decoration-coral decoration-[5px] underline-offset-[10px]">waitlist.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cobalt/80 md:text-xl">
            We&rsquo;re developing a new approach to preventive oral care, designed to fit into everyday life.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-cobalt/80 md:text-xl">
            Join our waitlist for a first look at the enyday gloss, product updates, and early access when we launch.
          </p>
          <div aria-hidden="true" className="mt-8 hidden items-end gap-4 md:flex">
            <p className="-rotate-3 font-script text-6xl leading-none text-coral">see you soon</p>
            <span className="relative mb-1 inline-block">
              <Tooth className="size-14 rotate-6 text-cobalt" />
              <Sparkle className="absolute -right-3 -top-2 size-5 animate-twinkle text-coral" />
            </span>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <div className="shadow-[0_40px_80px_-40px_rgba(27,36,112,0.55)] rounded-[2rem]">
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
