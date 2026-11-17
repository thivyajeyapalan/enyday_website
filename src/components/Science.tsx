import { Sparkle } from "./Logo";
import { Reveal } from "./Reveal";

const points = [
  {
    n: 1,
    title: "acids come and go",
    body: "Everyday foods and beverages expose enamel to acids throughout the day.",
  },
  {
    n: 2,
    title: "saliva works all day",
    body: "Saliva helps neutralize these acids and provides minerals that support natural remineralization.",
  },
  {
    n: 3,
    title: "enamel is mineral",
    body: "Much of tooth enamel is hydroxyapatite, a calcium phosphate mineral that researchers continue to study.",
  },
];

const ingredients = ["hydroxyapatite", "food-derived bioactives", "oral care technologies"];

export function Science() {
  return (
    <section id="science" aria-labelledby="science-title" className="gutter relative overflow-hidden bg-periwinkle-mist py-20 md:py-32">
      <Sparkle className="absolute right-[7%] top-16 hidden size-12 animate-twinkle text-coral md:block" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-end gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
          <Reveal className="min-w-0">
            <p className="script-label">our research</p>
            <h2 id="science-title" className="mt-6 text-[clamp(2.5rem,6.6vw,5.4rem)]">
              science-driven <span className="em-coral">oral wellness.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="min-w-0 space-y-4 text-lg leading-relaxed text-cobalt-soft">
            <p>
              Tooth enamel is exposed to acids from everyday foods and beverages. Saliva helps neutralize these acids and
              provides minerals that support the natural remineralization process.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 md:mt-16">
          <figure className="overflow-hidden rounded-[2rem] bg-paper ring-1 ring-cobalt/[0.06]">
            <div className="grid md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
              <div className="relative min-w-0 bg-[linear-gradient(180deg,#fbfaf8_0%,#f1f3fd_100%)] p-5 sm:p-8">
                <EnamelDiagram />
              </div>
              <ol className="min-w-0 divide-y divide-cobalt/10 p-6 sm:p-8 md:p-10">
                {points.map((p) => (
                  <li key={p.n} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cobalt font-display text-sm font-semibold text-cream">
                      {p.n}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl tracking-[-0.02em]">{p.title}</h3>
                      <p className="mt-1.5 text-[0.98rem] leading-relaxed text-cobalt-soft">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <figcaption className="sr-only">
              Illustration: acids from food and drink reach the tooth surface, saliva helps neutralize them and supply
              minerals, and enamel is made largely of hydroxyapatite crystals.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal className="min-w-0">
            <p className="text-lg leading-relaxed text-cobalt-soft">
              Research into ingredients such as hydroxyapatite, food-derived bioactives, and other oral care technologies
              continues to inform new approaches to preventive dental health.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of research">
              {ingredients.map((i, n) => (
                <li
                  key={i}
                  className={`rounded-full px-4 py-2 text-[0.95rem] font-medium ${
                    n === 0 ? "bg-coral text-paper" : "bg-paper text-cobalt ring-1 ring-cobalt/10"
                  }`}
                >
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="min-w-0 space-y-4">
            <p className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-tight tracking-[-0.025em] text-balance">
              At enyday, we&rsquo;re working with <span className="em-coral">dentists and researchers</span> to explore
              ingredient combinations and delivery formats that could make preventive oral care more accessible throughout
              the day.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Minimal cross-section: acidic sip → saliva layer → hydroxyapatite enamel. Illustrative, not to scale. */
function EnamelDiagram() {
  // hexagonal "crystal" grid for enamel
  const hexes: { x: number; y: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 13; col++) {
      hexes.push({ x: 18 + col * 46 + (row % 2 ? 23 : 0), y: 286 + row * 26 });
    }
  }
  const hex = (x: number, y: number, r = 15) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i + Math.PI / 6;
      return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`;
    }).join(" ");

  return (
    <svg viewBox="0 0 600 400" className="h-auto w-full" aria-hidden="true">
      <defs>
        <clipPath id="enamel-clip">
          <rect x="0" y="266" width="600" height="134" rx="0" />
        </clipPath>
        <linearGradient id="saliva" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#9eadf4" stopOpacity="0.25" />
          <stop offset="1" stopColor="#9eadf4" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* acidic sip: droplets */}
      {[
        [120, 48, 1],
        [168, 92, 0.8],
        [96, 128, 0.7],
        [214, 40, 0.6],
      ].map(([x, y, s], i) => (
        <path
          key={i}
          transform={`translate(${x} ${y}) scale(${s})`}
          d="M0 -22 C10 -6 16 2 16 10 A16 16 0 0 1 -16 10 C-16 2 -10 -6 0 -22Z"
          fill="#f85c70"
          opacity={0.85 - i * 0.12}
        />
      ))}
      <path d="M150 150 C150 180 150 196 150 214" stroke="#f85c70" strokeWidth="2.5" strokeDasharray="3 7" strokeLinecap="round" fill="none" />
      <path d="M143 206 L150 216 L157 206" stroke="#f85c70" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* saliva layer */}
      <path
        d="M0 214 C60 196 120 232 190 214 C260 196 320 230 400 212 C470 196 540 226 600 210 L600 266 L0 266 Z"
        fill="url(#saliva)"
      />
      <path
        d="M0 214 C60 196 120 232 190 214 C260 196 320 230 400 212 C470 196 540 226 600 210"
        stroke="#7d8ee6"
        strokeWidth="2"
        fill="none"
      />
      {/* minerals carried by saliva */}
      {[
        [300, 236],
        [338, 248],
        [372, 230],
        [420, 246],
        [462, 234],
        [510, 250],
        [548, 238],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 ? 4.5 : 6} fill="#263197" opacity={0.75} />
      ))}

      {/* enamel: hydroxyapatite crystals */}
      <rect x="0" y="266" width="600" height="134" fill="#ffffff" />
      <g clipPath="url(#enamel-clip)">
        {hexes.map((h, i) => (
          <polygon key={i} points={hex(h.x, h.y)} fill="#f3f4fb" stroke="#c9d0f5" strokeWidth="1.6" />
        ))}
      </g>
      <line x1="0" y1="266" x2="600" y2="266" stroke="#263197" strokeOpacity="0.25" strokeWidth="1.5" />

      {/* sparkle */}
      <path transform="translate(512 70) scale(0.5)" fill="#9eadf4" d="M50 0C51.5 38 56 47 100 50C56 53 51.5 62 50 100C48.5 62 44 53 0 50C44 47 48.5 38 50 0Z" />

      {/* numbered keys */}
      {[
        [252, 66, 1],
        [252, 238, 2],
        [252, 336, 3],
      ].map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x} cy={y} r="17" fill="#263197" />
          <text x={x} y={y + 6.5} textAnchor="middle" fontSize="18" fontWeight="600" fill="#f6f4f0" fontFamily="var(--font-figtree), sans-serif">
            {n}
          </text>
        </g>
      ))}

      {/* layer labels */}
      <rect x="10" y="364" width="292" height="32" rx="16" fill="#ffffff" />
      <g fontFamily="var(--font-dm-sans), sans-serif" fontSize="15" fontWeight="600" letterSpacing="2" fill="#263197">
        <text x="290" y="72" opacity="0.7">ACIDIC SIP</text>
        <text x="20" y="252" opacity="0.7">SALIVA</text>
        <text x="22" y="386" opacity="0.7">ENAMEL · HYDROXYAPATITE</text>
      </g>
    </svg>
  );
}
