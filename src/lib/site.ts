/**
 * Site-wide settings. Fill these in once they're confirmed.
 * Anything left as null is shown as a "coming soon" placeholder rather than an invented value.
 */
export const site = {
  name: "enyday",
  tagline: "Advancing oral health solutions for everyday life.",
  description:
    "enyday is developing portable, science-driven oral wellness products using thoughtfully selected active ingredients to support preventive care beyond the bathroom.",
  /** Full URL of the official Instagram profile, e.g. "https://www.instagram.com/<handle>/" */
  instagramUrl: null as string | null,
  /** Public contact email, e.g. "hello@<your-domain>" */
  contactEmail: null as string | null,
  /** Canonical URL used for SEO and social previews. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const REFERRAL_OPTIONS = [
  { value: "friends", label: "Friends" },
  { value: "social_media", label: "Social media" },
  { value: "in_person_pitch", label: "In-person pitch" },
  { value: "club_newsletter", label: "Club newsletter / group chat" },
  { value: "posters", label: "Posters" },
] as const;

export type ReferralValue = (typeof REFERRAL_OPTIONS)[number]["value"];

export const referralLabel = (value: string) =>
  REFERRAL_OPTIONS.find((o) => o.value === value)?.label ?? value;
