import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";

export function Waitlist() {
  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="gutter relative overflow-hidden bg-periwinkle py-20 md:py-32">
      <Sparkle className="absolute right-[6%] top-14 size-14 animate-twinkle text-cream md:size-20" />
      <Sparkle className="absolute bottom-16 left-[4%] hidden size-8 animate-twinkle text-cream/80 [animation-delay:1.2s] md:block" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
        <Reveal className="min-w-0 md:sticky md:top-28">
          <p className="eyebrow text-cobalt">good things are coming</p>
          <h2 id="waitlist-title" className="mt-5 text-[clamp(2.6rem,6.4vw,5.2rem)]">
            your everyday routine is getting an <span className="em">upgrade.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cobalt/80 md:text-xl">
            Be among the first to hear about enyday&rsquo;s launch, product development, and early-access opportunities.
          </p>
          <p aria-hidden="true" className="mt-8 hidden font-script text-6xl leading-none text-cobalt md:block">
            be first in line
          </p>
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
