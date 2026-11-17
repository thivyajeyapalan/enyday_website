import Image from "next/image";
import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";

const moments = [
  { time: "7:30 am", label: "brush", kind: "brush" },
  { time: "9:00 am", label: "morning coffee", kind: "moment" },
  { time: "3:00 pm", label: "afternoon matcha", kind: "moment" },
  { time: "10:30 pm", label: "late-night snack", kind: "moment" },
  { time: "11:30 pm", label: "brush", kind: "brush" },
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

        <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
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

        <Founder />
      </div>
    </section>
  );
}

function Founder() {
  return (
    <Reveal className="mt-16 md:mt-24">
      <div className="grid items-center gap-8 rounded-[2rem] bg-coral-mist/60 p-6 ring-1 ring-coral/15 sm:p-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-12 md:p-10">
        <div className="min-w-0">
          <p className="eyebrow chip">
            <Sparkle className="size-3 text-coral" /> meet the founder
          </p>
          <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Thivya <span className="em-coral">Jeyapalan</span>
          </h3>
          <div className="mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-cobalt-soft">
            <p>
              Thivya is really passionate about oral health. Her parents own dental practices, so she grew up seeing
              first-hand how important preventative oral care is, and how invasive whitening can be.
            </p>
            <p>enyday is her way of making gentle, everyday care easier for the moments between brushing.</p>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
          <figure className="min-w-0">
            <div className="relative aspect-[4/5] -rotate-2 overflow-hidden rounded-2xl bg-periwinkle-mist shadow-[0_18px_30px_-18px_rgba(38,49,151,0.5)] ring-4 ring-paper transition duration-500 hover:rotate-0">
              <Image
                src="/images/founder.webp"
                alt="Thivya Jeyapalan smiling in a dental clinic, with a dental X-ray on the screen behind her"
                fill
                sizes="(min-width: 768px) 220px, 45vw"
                className="object-cover object-[62%_40%]"
              />
            </div>
            <figcaption className="mt-3 text-xs text-cobalt/60">in the clinic</figcaption>
          </figure>
          <figure className="min-w-0">
            <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-2xl bg-periwinkle-mist shadow-[0_18px_30px_-18px_rgba(38,49,151,0.5)] ring-4 ring-paper transition duration-500 hover:rotate-0">
              <Image
                src="/images/founder-basecamp.webp"
                alt="Thivya hugging a fellow founder on stage while holding a $10,000 cheque made out to enyday for second place at Basecamp 2026"
                fill
                sizes="(min-width: 768px) 220px, 45vw"
                className="object-cover object-[52%_50%]"
              />
            </div>
            <figcaption className="mt-3 text-xs text-cobalt/60">2nd place, DMZ Basecamp 2026</figcaption>
          </figure>
        </div>
      </div>
    </Reveal>
  );
}

/** An ordinary day: two brushing moments, and everything in between. */
function DayLine() {
  return (
    <figure className="relative rounded-[2rem] bg-paper p-6 ring-1 ring-cobalt/[0.06] sm:p-8 md:p-10">
      <figcaption className="eyebrow text-cobalt/60">an ordinary day</figcaption>

      <ol className="relative mt-8 grid gap-0 md:mt-12 md:grid-cols-5">
        {/* connecting line */}
        <span aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-px bg-cobalt/15 md:bottom-auto md:left-[10%] md:right-[10%] md:top-[11px] md:h-px md:w-auto" />
        {/* the in-between, highlighted */}
        <span
          aria-hidden="true"
          className="absolute left-[10px] top-[calc(20%+6px)] h-[calc(60%-12px)] w-[3px] rounded-full bg-coral/70 md:left-[calc(10%+16px)] md:top-[10px] md:h-[3px] md:w-[calc(80%-32px)]"
        />

        {moments.map((m, i) => (
          <li key={i} className="relative flex items-center gap-4 py-3.5 md:flex-col md:items-center md:gap-3 md:py-0 md:text-center">
            {m.kind === "brush" ? (
              <span className="relative z-10 grid size-6 shrink-0 place-items-center rounded-full bg-cobalt text-cream">
                <span className="size-1.5 rounded-full bg-cream" />
              </span>
            ) : (
              <span className="relative z-10 grid size-6 shrink-0 place-items-center rounded-full bg-paper">
                <Sparkle className="size-6 text-coral" />
              </span>
            )}
            <span className="flex min-w-0 flex-col md:items-center">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-cobalt/50 [font-variant-numeric:tabular-nums]">
                {m.time}
              </span>
              <span className={`font-display text-lg leading-tight ${m.kind === "brush" ? "font-semibold" : "italic"}`}>
                {m.label}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-8 flex items-center gap-3 border-t border-cobalt/10 pt-6 text-[0.95rem] text-cobalt-soft md:mt-12">
        <span aria-hidden="true" className="h-[3px] w-8 shrink-0 rounded-full bg-coral" />
        about 16 hours between brushes. that&rsquo;s the space enyday is exploring.
      </p>
    </figure>
  );
}
