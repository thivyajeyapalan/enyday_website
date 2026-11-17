import { REFERRAL_OPTIONS, type ReferralValue } from "./site";

// Practical email check: one @, no spaces, a dotted domain with a 2+ letter TLD.
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/;

export const CONSENT_TEXT =
  "Receive occasional updates from enyday. Unsubscribe at any time.";

export type WaitlistInput = {
  firstName: string;
  email: string;
  referral: ReferralValue;
  consent: true;
};

export type FieldErrors = Partial<Record<"firstName" | "email" | "referral" | "consent", string>>;

export function isValidEmail(email: string) {
  return email.length <= 254 && EMAIL_RE.test(email);
}

export function validateWaitlist(raw: Record<string, unknown>):
  | { ok: true; data: WaitlistInput }
  | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};
  const firstName = typeof raw.firstName === "string" ? raw.firstName.trim().replace(/\s+/g, " ") : "";
  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  const referral = typeof raw.referral === "string" ? raw.referral : "";

  if (!firstName) errors.firstName = "Add your first name.";
  else if (firstName.length > 80) errors.firstName = "That name is a bit long. Use 80 characters or fewer.";
  else if (/[<>{}]|https?:|www\./i.test(firstName)) errors.firstName = "Use letters only for your name.";

  if (!email) errors.email = "Add your email address.";
  else if (!isValidEmail(email)) errors.email = "Check your email address. It should look like name@example.com.";

  if (!REFERRAL_OPTIONS.some((o) => o.value === referral)) errors.referral = "Pick how you heard about us.";

  if (raw.consent !== true) errors.consent = "Tick the box so we can email you about the launch.";

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, data: { firstName, email, referral: referral as ReferralValue, consent: true } };
}
