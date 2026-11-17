import Image from "next/image";
import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";
import { Arrow, ButtonLink } from "./ui";

const goals = ["supporting enamel health", "helping maintain fresh breath", "addressing everyday acid exposure"];

export function Gloss() {
  return (
    <section id="gloss" aria-labelledby="gloss-title" className="gutter py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* visual: the gloss in use, with a product close-up tucked into the corner */}
        <Reveal className="relative order-last min-w-0 md:order-first">
          <div aria-hidden="true" className="absolute -right-4 -top-4 h-[60%] w-[55%] rounded-[2.5rem] bg-periwinkle md:-right-6 md:-top-6" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] bg-[#e9e7e4] md:rounded-[2.75rem]">
            <Image
              src="/images/gloss-in-use.webp"
              alt="A person smiling while brushing the enyday gloss onto their teeth"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[52%_50%]"
            />
            <Sparkle className="absolute right-[9%] top-[8%] size-8 animate-twinkle text-coral" />
          </div>
          <div className="absolute -bottom-8 -left-2 w-[44%] rotate-[-5deg] overflow-hidden rounded-2xl bg-[#ece9ea] shadow-[0_24px_40px_-20px_rgba(38,49,151,0.55)] ring-4 ring-paper md:-left-8">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/gloss-angled.webp"
                alt="Close-up of the enyday gloss pen with its cap off, showing the brush applicator"
                fill
                sizes="(min-width: 768px) 22vw, 44vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow chip">
              <Sparkle className="size-3 text-coral" /> our first product
            </p>
            <h2 id="gloss-title" className="mt-6 text-[clamp(2.8rem,7vw,5.6rem)]">
              introducing <span className="em-coral">the gloss.</span>
            </h2>
            <p className="mt-5 font-display text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem]">
              oral care for everything <span className="em">between</span> brushing.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cobalt-soft">
              Meet the enyday gloss, a portable, brush-on oral care product designed for everyday use.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cobalt-soft">
              Created with the goal of supporting enamel health, helping maintain fresh breath, and addressing the effects of
              everyday acid exposure on teeth.
            </p>

            <ul className="mt-7 grid gap-2.5" aria-label="What the gloss is designed for">
              {goals.map((g, i) => (
                <li
                  key={g}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-display text-lg font-medium tracking-[-0.01em] ${
                    i === 0 ? "bg-coral text-paper" : "bg-paper ring-1 ring-cobalt/10"
                  }`}
                >
                  <Sparkle className={`size-4 shrink-0 ${i === 0 ? "text-paper" : "text-coral"}`} />
                  {g}
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-xl font-display text-xl font-medium leading-snug tracking-[-0.02em]">
              Because oral care shouldn&rsquo;t stop when you <span className="em-coral">leave the bathroom.</span>
            </p>

            <div className="mt-9">
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
