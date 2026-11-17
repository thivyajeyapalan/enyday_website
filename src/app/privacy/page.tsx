import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How enyday handles the information you share when you join the waitlist.",
  alternates: { canonical: "/privacy" },
};

// NOTE FOR THE TEAM: this is a plain-language starting point, not legal advice.
// Have it reviewed before launch, and fill in the contact email in src/lib/site.ts.
export default function PrivacyPage() {
  return (
    <>
      <header className="gutter py-6">
        <div className="mx-auto max-w-3xl">
          <a href="/" aria-label="enyday home" className="inline-block">
            <Logo className="h-9 w-auto" />
          </a>
        </div>
      </header>
      <main className="gutter pb-24 pt-10">
        <article className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-cobalt-soft [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:text-cobalt">
          <p className="eyebrow text-coral">last updated 2026</p>
          <h1 className="text-[clamp(2.6rem,7vw,4.5rem)] text-cobalt">privacy policy</h1>
          <p>
            This policy explains what we collect when you join the enyday waitlist and how we use it. We keep it short
            because we collect very little.
          </p>

          <h2>what we collect</h2>
          <p>
            When you join the waitlist we collect your first name, your email address, how you heard about enyday, the
            date and time you signed up, and your consent to receive emails from us.
          </p>

          <h2>how we use it</h2>
          <p>
            We use your details to send you updates about enyday&rsquo;s launch, product development and early-access
            opportunities, and to understand which channels people find us through. We don&rsquo;t sell or rent your
            information.
          </p>

          <h2>where it&rsquo;s stored</h2>
          <p>
            Signups are stored in a secured database hosted by our infrastructure provider (Supabase). Access is limited to
            the enyday team.
          </p>

          <h2>your choices</h2>
          <p>
            You can unsubscribe from our emails at any time using the link in any email. You can also ask us to access,
            correct or delete your information by contacting us
            {site.contactEmail ? (
              <>
                {" "}at <a className="text-cobalt underline underline-offset-2" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </>
            ) : (
              " (our contact email will be listed here soon)"
            )}
            .
          </p>

          <h2>cookies</h2>
          <p>This site doesn&rsquo;t use advertising or tracking cookies.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
