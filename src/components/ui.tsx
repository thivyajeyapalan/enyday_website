import type { ComponentProps } from "react";

type Tone = "primary" | "ghost" | "light";

const tones: Record<Tone, string> = {
  primary:
    "bg-cobalt text-cream hover:bg-[#1e287e] shadow-[0_10px_30px_-12px_rgba(38,49,151,0.7)] hover:shadow-[0_14px_34px_-12px_rgba(38,49,151,0.8)]",
  ghost: "text-cobalt ring-1 ring-inset ring-cobalt/25 hover:ring-cobalt/60 hover:bg-cobalt/5",
  light: "bg-cream text-cobalt hover:bg-paper",
};

export function buttonClass(tone: Tone = "primary", extra = "") {
  return `inline-flex items-center justify-center gap-2 rounded-full px-6 min-h-12 font-display text-[1.02rem] font-semibold lowercase tracking-[-0.01em] transition duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none ${tones[tone]} ${extra}`;
}

export function ButtonLink({ tone = "primary", className = "", ...props }: ComponentProps<"a"> & { tone?: Tone }) {
  return <a className={buttonClass(tone, className)} {...props} />;
}

export function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Status pill, e.g. "in development · coming soon" */
export function StatusPill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2 rounded-full bg-paper/80 px-3.5 py-1.5 text-[0.7rem] text-cobalt ring-1 ring-cobalt/10 backdrop-blur ${className}`}
    >
      <span className="relative flex size-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-coral/60 motion-reduce:hidden" />
        <span className="relative size-2 rounded-full bg-coral" />
      </span>
      {children}
    </span>
  );
}
