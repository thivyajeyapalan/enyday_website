import { LOGO_LINE, LOGO_SPARK, LOGO_VIEWBOX, LOGO_WORD } from "./logo-paths";

type LogoProps = {
  className?: string;
  word?: string;
  line?: string;
  spark?: string;
  /** Hide the sparkle (e.g. when printed on the product) */
  noSpark?: boolean;
  title?: string;
};

/** The enyday wordmark, traced from the brand files. Colors are adjustable per background. */
export function Logo({
  className,
  word = "var(--color-cobalt)",
  line = "var(--color-periwinkle)",
  spark = "var(--color-spark)",
  noSpark,
  title = "enyday",
}: LogoProps) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={className} role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <path d={LOGO_WORD} fill={word} fillRule="evenodd" />
      <path d={LOGO_LINE} fill={line} />
      {!noSpark && <path d={LOGO_SPARK} fill={spark} />}
    </svg>
  );
}

/** The four-point brand sparkle on its own, for decoration. */
export function Sparkle({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M50 0C51.5 38 56 47 100 50C56 53 51.5 62 50 100C48.5 62 44 53 0 50C44 47 48.5 38 50 0Z"
      />
    </svg>
  );
}
