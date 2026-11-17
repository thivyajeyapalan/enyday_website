import Image from "next/image";
import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";

const moments = [
  { time: "7:30 am", note: "", label: "brush", kind: "brush", img: "brush", alt: "A toothbrush" },
  { time: "9:00 am", note: "", label: "coffee run", kind: "moment", img: "coffee", alt: "An iced coffee" },
  { time: "3:00 pm", note: "", label: "afternoon matcha", kind: "moment", img: "matcha", alt: "An iced matcha latte" },
  { time: "10:30 pm", label: "soda", note: "(or a treat)", kind: "moment", img: "soda", alt: "A can of soda with a lemon wedge" },
  { time: "11:30 pm", note: "", label: "brush", kind: "brush", img: "brush-night", alt: "A toothbrush" },
] as const;

export function Story() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="gutter py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow chip">
            <Sparkle className="size-3 text-coral" /> why enyday
          </p>
          <h2 id="approach-title" className="mt-6 max-w-5xl text-[clamp(2.7rem,8.4vw,7rem)]">
            rethinking <span className="em-coral">preventive</span> oral care.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <Reveal className="min-w-0 space-y-5 text-lg leading-relaxed text-cobalt-soft md:text-xl">
            <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-cobalt md:text-[1.75rem]">
              Preventive oral health plays an important role in long-term dental health, yet most daily routines still
              revolve around brushing and flossing.
            </p>
            <p>
              Throughout the day, our teeth are exposed to foods, drinks, and changing conditions in the mouth. While oral
              care has traditionally focused on morning and nighttime routines, there is an opportunity to develop more
              convenient solutions for the hours in between.
            </p>
            <p>
              enyday is exploring new approaches to everyday oral wellness through portable formats, innovative active
              ingredients, and research-informed product development.
            </p>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <DayLine />
          </Reveal>
        </div>

      </div>
    </section>
  );
}

/** An ordinary day: two brushing moments, and everything in between. */
function DayLine() {
  return (
    <figure className="relative rounded-[2rem] bg-[#f9f4f4] p-5 ring-1 ring-cobalt/[0.06] sm:p-7 lg:p-8">
      <figcaption className="eyebrow inline-flex rounded-full bg-periwinkle-mist px-4 py-2 text-cobalt-soft">an ordinary day</figcaption>

      <ol className="relative mt-6 grid gap-3 md:mt-8 md:grid-cols-5 md:gap-2">
        {/* connecting line: vertical on phones, horizontal from md up (sits under the markers) */}
        <span aria-hidden="true" className="absolute bottom-10 left-[11px] top-10 w-[3px] rounded-full bg-coral/80 md:hidden" />
        <span aria-hidden="true" className="absolute bottom-[11px] left-[10%] right-[10%] hidden h-[3px] rounded-full bg-coral/80 md:block" />

        {moments.map((m, i) => (
          <li key={i} className="relative flex items-center gap-3 md:flex-col md:gap-0 md:text-center">
            {/* marker */}
            <span className="relative z-10 grid size-6 shrink-0 place-items-center md:order-4 md:mt-4">
              {m.kind === "brush" ? (
                <span className="grid size-6 place-items-center rounded-full bg-cobalt">
                  <span className="size-2 rounded-full bg-[#f9f4f4]" />
                </span>
              ) : (
                <span className="grid size-6 place-items-center rounded-full bg-[#f9f4f4]">
                  <Sparkle className="size-6 text-coral" />
                </span>
              )}
            </span>

            {/* picture */}
            <span className="relative block aspect-[310/268] w-24 shrink-0 sm:w-28 md:order-3 md:mt-3 md:w-full">
              <Image src={`/images/day/${m.img}.webp`} alt={m.alt} fill sizes="(min-width: 768px) 140px, 112px" className="object-contain [mask-image:radial-gradient(closest-side,#000_82%,transparent_100%)]" />
            </span>

            {/* time + label */}
            <span className="flex min-w-0 flex-col md:order-1 md:min-h-[4.5rem] md:items-center md:justify-start">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cobalt/55 [font-variant-numeric:tabular-nums]">
                {m.time}
              </span>
              <span
                className={`font-display leading-tight ${
                  m.kind === "brush" ? "text-xl font-semibold" : "text-lg italic md:text-[1.05rem] lg:text-lg"
                }`}
              >
                {m.label}
                {m.note ? <span className="block whitespace-nowrap">{m.note}</span> : null}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-6 flex items-center gap-4 rounded-[1.5rem] bg-periwinkle-mist px-5 py-4 text-[0.98rem] leading-snug text-cobalt-soft md:mt-8">
        <BagIcon />
        <span aria-hidden="true" className="h-10 w-px shrink-0 bg-cobalt/20" />
        <span>
          About 16 hours between brushes, with coffee, matcha, soda and more.{" "}
          <strong className="font-display font-semibold italic text-cobalt">That&rsquo;s the space enyday is exploring.</strong>
        </span>
      </p>
    </figure>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-10 shrink-0" aria-hidden="true" fill="none">
      <path d="M11 19h22l-1.6 19.2A3 3 0 0 1 28.4 41H15.6a3 3 0 0 1-3-2.8L11 19Z" stroke="var(--color-cobalt)" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M16.5 19v-3.5a5.5 5.5 0 0 1 11 0V19" stroke="var(--color-cobalt)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="17.5" cy="26" r="1.4" fill="var(--color-cobalt)" />
      <circle cx="26.5" cy="26" r="1.4" fill="var(--color-cobalt)" />
      <path d="M36 9l2-4M39.5 13l4-1.6M40 18.5h4" stroke="var(--color-coral)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
