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

      </div>
    </section>
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
