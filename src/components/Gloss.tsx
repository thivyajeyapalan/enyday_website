import Image from "next/image";
import { Reveal } from "./Reveal";
import { Arrow, ButtonLink, StatusPill } from "./ui";

const moments = ["heading to class", "grabbing coffee", "going out with friends"];

export function Gloss() {
  return (
    <section id="gloss" aria-labelledby="gloss-title" className="gutter py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* visual */}
        <Reveal className="relative order-last min-w-0 md:order-first">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2.25rem] bg-[#ece9ea] md:rounded-[2.75rem]">
            <Image
              src="/images/gloss-angled.webp"
              alt="The enyday gloss pen lying on a glossy surface, cap off to show the brush applicator"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-5 text-[0.7rem] font-medium tracking-wide text-cobalt/60">
              in development · final design may change
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
