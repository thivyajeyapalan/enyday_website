import { GlossCap, GlossPen } from "./GlossPen";
import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";
import { Arrow, ButtonLink, StatusPill } from "./ui";

const moments = ["heading to class", "grabbing coffee", "going out with friends"];

export function Gloss() {
  return (
    <section id="gloss" aria-labelledby="gloss-title" className="gutter py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* visual: one product, two angles */}
        <Reveal className="relative order-last min-w-0 md:order-first">
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2.25rem] bg-[radial-gradient(120%_90%_at_30%_15%,#c4cdf9_0%,#9eadf4_55%,#8d9eef_100%)] md:rounded-[2.75rem]">
            <div className="absolute bottom-[11%] left-[16%] h-5 w-[30%] rounded-[50%] bg-cobalt/30 blur-lg" aria-hidden="true" />
            <div className="absolute bottom-[9%] right-[12%] h-5 w-[34%] rounded-[50%] bg-cobalt/25 blur-lg" aria-hidden="true" />

            {/* angle 1: capped */}
            <div className="absolute bottom-[12%] left-[20%] h-[76%] -rotate-6">
              <GlossPen className="h-full w-auto drop-shadow-[0_26px_30px_rgba(27,36,112,0.3)]" />
            </div>
            {/* angle 2: same pen, uncapped to show the applicator */}
            <div className="absolute bottom-[10%] left-[50%] h-[70%] rotate-[9deg]">
              <GlossPen
                variant="open"
                title="Concept rendering of the gloss pen with the cap removed, showing the applicator"
                className="h-full w-auto drop-shadow-[0_22px_26px_rgba(27,36,112,0.28)]"
              />
            </div>
            {/* the cap, set down beside it */}
            <div className="absolute bottom-[7%] right-[6%] h-[24%] rotate-[78deg]">
              <GlossCap className="h-full w-auto drop-shadow-[0_14px_18px_rgba(27,36,112,0.22)]" />
            </div>

            <Sparkle className="absolute left-[10%] top-[10%] size-9 animate-twinkle text-cream" />
            <p className="absolute bottom-4 left-5 text-[0.7rem] font-medium tracking-wide text-cobalt/60">
              concept rendering · final design may change
            </p>
          </div>
        </Reveal>

        {/* copy */}
        <div className="min-w-0">
          <Reveal>
            <StatusPill>in development · coming soon</StatusPill>
            <h2 id="gloss-title" className="mt-6 text-[clamp(3rem,8vw,6.4rem)]">
              meet <span className="em">the gloss.</span>
            </h2>
            <p className="mt-5 font-display text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem]">
              Think lip gloss, but for your teeth.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cobalt-soft">
              We&rsquo;re developing a portable enamel-care gloss designed to fit into your everyday routine, whether
              you&rsquo;re heading to class, grabbing coffee, or going out with friends.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cobalt-soft">
              Compact enough to take anywhere, designed for the moments between brushing.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Made for moments like">
              {moments.map((m) => (
                <li key={m} className="rounded-full bg-paper px-4 py-2 text-[0.95rem] font-medium ring-1 ring-cobalt/10">
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-start gap-4">
              <ButtonLink href="#waitlist">
                get early access <Arrow />
              </ButtonLink>
              <p className="max-w-md text-sm leading-relaxed text-cobalt/60">
                The gloss isn&rsquo;t available yet, and it&rsquo;s designed to go alongside brushing, flossing, fluoride
                toothpaste and regular dental visits, not replace them.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
