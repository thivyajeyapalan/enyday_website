/** Small hand-drawn style accents. Decorative only. */

/** Line-art tooth. */
export function Tooth({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8c-8 0-13 6-13 15 0 7 3 11 5 17 2 7 2 18 7 18 6 0 5-14 13-14s7 14 13 14c5 0 5-11 7-18 2-6 5-10 5-17 0-9-5-15-13-15-5 0-8 3-12 3S25 8 20 8Z" />
    </svg>
  );
}
