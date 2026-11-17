import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { InstagramIcon } from "./ui";

export function Footer() {
  return (
    <footer className="gutter bg-cobalt pb-10 pt-16 text-cream md:pb-12 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <Logo className="w-[min(70vw,360px)]" word="var(--color-cream)" line="var(--color-periwinkle)" spark="var(--color-spark)" />
            <p className="mt-6 font-display text-xl tracking-[-0.01em] text-cream/85 md:text-2xl">
              Advancing oral health solutions for <span className="em text-coral">everyday life.</span>
            </p>
          </div>

          <ul className="flex flex-col gap-3 text-[0.98rem] md:items-end">
            <li>
              {site.instagramUrl ? (
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/85 transition hover:text-cream"
                >
                  <InstagramIcon /> Instagram
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-cream/60">
                  <InstagramIcon /> Instagram coming soon
                </span>
              )}
            </li>
            <li>
              {site.contactEmail ? (
                <a href={`mailto:${site.contactEmail}`} className="text-cream/85 transition hover:text-cream">
                  Contact
                </a>
              ) : (
                <span className="text-cream/60">Contact coming soon</span>
              )}
            </li>
            <li>
              <a href="/privacy" className="text-cream/85 transition hover:text-cream">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 text-[0.82rem] leading-relaxed text-cream/60 md:flex-row md:justify-between md:gap-10">
          <p className="shrink-0">© 2026 enyday</p>
        </div>
      </div>
    </footer>
  );
}
