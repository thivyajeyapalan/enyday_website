import Image from "next/image";
import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";
import { Arrow, ButtonLink, StatusPill } from "./ui";

const exploring = ["active ingredients", "formulation performance", "product design"];

export function Gloss() {
  return (
    <section id="gloss" aria-labelledby="gloss-title" className="gutter py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* visual */}
        <Reveal className="relative order-last min-w-0 md:order-first">
          <div aria-hidden="true" className="absolute -right-4 -top-4 h-[60%] w-[55%] rounded-[2.5rem] bg-periwinkle md:-right-6 md:-top-6" />
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2.25rem] bg-[#ece9ea] md:rounded-[2.75rem]">
            <Image
              src="/images/gloss-angled.webp"
              alt="The enyday gloss pen lying on a glossy surface, cap off to show the brush applicator"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <Sparkle className="absolute right-[10%] top-[12%] size-8 animate-twinkle text-coral" />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-5 left-6 grid animate-wiggle place-items-center rounded-full bg-coral px-5 py-2.5 font-display text-base font-semibold text-paper shadow-[0_14px_30px_-12px_rgba(248,92,112,0.8)] [--r:-6deg]"
          >
            a new format ✦
          </div>
          <p className="mt-4 text-[0.78rem] leading-relaxed text-cobalt/60">
            Concept packaging shown. Final formulation and design are subject to change.
          </p>
        </Reveal>

        {/* copy */}
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow chip">
              <Sparkle className="size-3 text-coral" /> our first product
            </p>
            <h2 id="gloss-title" className="mt-6 text-[clamp(2.8rem,7vw,5.6rem)]">
              introducing <span className="em-coral">the enyday gloss.</span>
            </h2>
            <p className="mt-5 font-display text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem]">
              A new format for everyday oral care.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cobalt-soft">
              Our first product is a portable enamel-care gloss being developed to complement existing oral hygiene
              routines.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cobalt-soft">
              Inspired by the convenience of everyday cosmetic products, the gloss is designed to make oral wellness easier
              to incorporate into daily life.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cobalt-soft">
              We&rsquo;re currently exploring active ingredients, formulation performance, and product design.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <StatusPill>in development</StatusPill>
              <ul className="contents" aria-label="Currently exploring">
                {exploring.map((m) => (
                  <li key={m} className="rounded-full bg-paper px-4 py-2 text-[0.95rem] font-medium ring-1 ring-cobalt/10">
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <ButtonLink href="#waitlist">
                join the waitlist <Arrow />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
