/** Small hand-drawn style accents used in the waitlist section. All decorative. */

/** Three little "pop" lines, like a sparkle burst. */
export function Burst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
      <path d="M8 4l3 10" />
      <path d="M22 10l-7 7" />
      <path d="M30 22l-11 3" />
    </svg>
  );
}

/** Four-point sparkle drawn as an outline. */
export function OutlineSparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round">
      <path d="M50 4C52 38 58 46 96 50C58 54 52 62 50 96C48 62 42 54 4 50C42 46 48 38 50 4Z" />
    </svg>
  );
}

/** Line-art tooth. */
export function Tooth({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8c-8 0-13 6-13 15 0 7 3 11 5 17 2 7 2 18 7 18 6 0 5-14 13-14s7 14 13 14c5 0 5-11 7-18 2-6 5-10 5-17 0-9-5-15-13-15-5 0-8 3-12 3S25 8 20 8Z" />
    </svg>
  );
}

/** Loose hand-drawn underline swoosh. */
export function Swoosh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" preserveAspectRatio="none">
      <path d="M4 16C50 8 120 4 196 6" />
    </svg>
  );
}
