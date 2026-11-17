import { useId } from "react";
import { LOGO_LINE, LOGO_WORD } from "./logo-paths";

/*
  Concept rendering of the enyday enamel-care gloss pen (periwinkle packaging only).
  Built as SVG so it stays crisp and lightweight on every screen.
  viewBox: 140 x 860, centered on x = 70.
*/

const BODY = { x: 32, w: 76, top: 262, bottom: 662 };

type Props = {
  className?: string;
  /** "capped" shows the clear cap over the applicator, "open" shows the applicator */
  variant?: "capped" | "open";
  title?: string;
};

export function GlossPen({ className, variant = "capped", title }: Props) {
  const id = useId().replace(/:/g, "");
  const g = (n: string) => `${id}-${n}`;
  const url = (n: string) => `url(#${g(n)})`;

  // Wordmark printed along the barrel, reading top-to-bottom.
  const s = 0.143;
  const logoH = 504 * s;

  return (
    <svg
      viewBox="0 0 140 860"
      className={className}
      role="img"
      aria-label={title ?? "Concept rendering of the enyday enamel-care gloss pen in periwinkle"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* barrel: cylindrical shading */}
        <linearGradient id={g("body")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#7384dc" />
          <stop offset="0.14" stopColor="#97a7f1" />
          <stop offset="0.3" stopColor="#b9c4f9" />
          <stop offset="0.42" stopColor="#a4b2f5" />
          <stop offset="0.75" stopColor="#93a3ee" />
          <stop offset="0.92" stopColor="#7d8ee3" />
          <stop offset="1" stopColor="#6a7bd2" />
        </linearGradient>
        <linearGradient id={g("sheen")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.24" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.3" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.36" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.86" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.9" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="0.95" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={g("shade")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1b2470" stopOpacity="0.28" />
          <stop offset="0.18" stopColor="#1b2470" stopOpacity="0" />
          <stop offset="0.8" stopColor="#1b2470" stopOpacity="0" />
          <stop offset="1" stopColor="#1b2470" stopOpacity="0.32" />
        </linearGradient>
        {/* clear plastic */}
        <linearGradient id={g("clear")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#c9d1f3" stopOpacity="0.7" />
          <stop offset="0.1" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="0.22" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="0.86" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#b9c2ec" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id={g("nib")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#dde2f2" />
          <stop offset="0.35" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e3e6f2" />
        </linearGradient>
        <linearGradient id={g("frost")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#e7eaf6" />
          <stop offset="0.4" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dfe3f3" />
        </linearGradient>
      </defs>

      {/* ---------- bottom clear end with inner mechanism ---------- */}
      <g>
        <rect x="33" y="650" width="74" height="196" rx="12" fill={url("clear")} stroke="#263197" strokeOpacity="0.14" />
        <rect x="52" y="662" width="36" height="160" rx="6" fill={url("frost")} opacity="0.75" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x="52" y={700 + i * 18} width="36" height="2" fill="#263197" opacity="0.06" />
        ))}
        <rect x="38" y="664" width="5" height="168" rx="2.5" fill="#fff" opacity="0.7" />
        <rect x="33" y="828" width="74" height="18" rx="9" fill="#fff" opacity="0.35" />
      </g>

      {/* ---------- barrel ---------- */}
      <g>
        <rect x={BODY.x} y={BODY.top} width={BODY.w} height={BODY.bottom - BODY.top} rx="3" fill={url("body")} />
        <g transform={`translate(${70 + logoH / 2} 318) rotate(90) scale(${s})`}>
          <path d={LOGO_WORD} fill="#263197" fillRule="evenodd" />
          <path d={LOGO_LINE} fill="#ffffff" opacity="0.55" />
        </g>
        <rect x={BODY.x} y={BODY.top} width={BODY.w} height={BODY.bottom - BODY.top} rx="3" fill={url("shade")} />
        <rect x={BODY.x} y={BODY.top} width={BODY.w} height={BODY.bottom - BODY.top} rx="3" fill={url("sheen")} />
        <rect x={BODY.x} y={BODY.bottom - 4} width={BODY.w} height="4" fill="#1b2470" opacity="0.12" />
      </g>

      {/* ---------- applicator ---------- */}
      <g>
        <rect x="44" y="214" width="52" height="52" rx="4" fill={url("frost")} />
        <rect x="44" y="214" width="52" height="5" fill="#263197" opacity="0.05" />
        <path d="M49 216 C49 160 62 86 70 46 C78 86 91 160 91 216 Z" fill={url("nib")} />
        <path d="M58 210 C58 160 64 100 68 64" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
      </g>

      {/* ---------- clear cap ---------- */}
      {variant === "capped" && <CapShape gradient={url("clear")} />}
    </svg>
  );
}

function CapShape({ gradient }: { gradient: string }) {
  return (
    <g>
      <rect x="30" y="6" width="80" height="268" rx="15" fill={gradient} stroke="#263197" strokeOpacity="0.14" />
      <rect x="36" y="12" width="68" height="12" rx="6" fill="#fff" opacity="0.5" />
      <rect x="37" y="30" width="6" height="232" rx="3" fill="#fff" opacity="0.8" />
      <rect x="95" y="40" width="3" height="200" rx="1.5" fill="#fff" opacity="0.5" />
      <rect x="30" y="258" width="80" height="16" rx="5" fill="#fff" opacity="0.35" />
    </g>
  );
}

/** The clear cap on its own, for compositions with the open pen. */
export function GlossCap({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="20 0 100 284" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-c`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#c9d1f3" stopOpacity="0.75" />
          <stop offset="0.1" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.22" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="0.86" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#b9c2ec" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <CapShape gradient={`url(#${id}-c)`} />
    </svg>
  );
}
