import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { InstagramIcon, buttonClass } from "./ui";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-cobalt/[0.06] bg-cream/80 backdrop-blur-md supports-[backdrop-filter]:bg-cream/70">
      <nav aria-label="Main" className="gutter mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#top" className="shrink-0 rounded-md" aria-label="enyday, back to top">
          <Logo className="h-8 w-auto md:h-9" />
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a href="#story" className="hidden rounded-full px-3 py-2 text-[0.95rem] font-medium text-cobalt/80 transition hover:text-cobalt sm:block">
            Our Story
          </a>
          <a href="#gloss" className="hidden rounded-full px-3 py-2 text-[0.95rem] font-medium text-cobalt/80 transition hover:text-cobalt sm:block">
            The Gloss
          </a>
          {site.instagramUrl ? (
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="enyday on Instagram"
              className="grid size-10 place-items-center rounded-full text-cobalt/80 transition hover:bg-cobalt/5 hover:text-cobalt"
            >
              <InstagramIcon />
            </a>
          ) : null}
          <a href="#waitlist" className={buttonClass("primary", "ml-1 min-h-10 px-4 text-[0.95rem] sm:px-5")}>
            join the waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
