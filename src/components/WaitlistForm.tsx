"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { REFERRAL_OPTIONS } from "@/lib/site";
import { CONSENT_TEXT, isValidEmail, type FieldErrors } from "@/lib/validation";
import { Sparkle } from "./Logo";
import { Tooth, Burst } from "./Doodles";
import { Arrow, buttonClass } from "./ui";

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done"; name: string } | { kind: "error"; message: string };

export function WaitlistForm() {
  const startedAt = useRef<number>(0);
  const [state, setState] = useState<State>({ kind: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [referral, setReferral] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (state.kind === "done") successRef.current?.focus();
  }, [state.kind]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      email: String(fd.get("email") ?? ""),
      referral,
      consent: fd.get("consent") === "on",
      company: String(fd.get("company") ?? ""),
      elapsed: Date.now() - startedAt.current,
      turnstileToken: fd.get("cf-turnstile-response") ?? undefined,
    };

    // quick client-side checks (the server validates again)
    const next: FieldErrors = {};
    if (!payload.firstName.trim()) next.firstName = "Add your first name.";
    if (!payload.email.trim()) next.email = "Add your email address.";
    else if (!isValidEmail(payload.email.trim())) next.email = "Check your email address. It should look like name@example.com.";
    if (!payload.referral) next.referral = "Pick how you heard about us.";
    if (!payload.consent) next.consent = "Tick the box so we can email you about the launch.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      (form.querySelector(`[data-field="${first}"]`) as HTMLElement | null)?.focus();
      return;
    }

    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { status?: string; error?: string; fields?: FieldErrors };
      if (res.ok && json.status === "ok") {
        setState({ kind: "done", name: payload.firstName.trim() });
        return;
      }
      if (json.fields) setErrors(json.fields);
      setState({ kind: "error", message: json.error ?? "We couldn't save your signup. Try again in a minute." });
    } catch {
      setState({ kind: "error", message: "We couldn't reach the server. Check your connection and try again." });
    }
  }

  if (state.kind === "done") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="relative overflow-hidden rounded-[2rem] bg-cream p-8 text-center outline-none sm:p-12"
      >
        <div className="success-burst relative mx-auto grid size-28 place-items-center" aria-hidden="true">
          <Sparkle className="absolute size-16 text-spark [animation:pop_0.7s_var(--ease-soft)_both]" />
          <Sparkle className="absolute -right-1 top-1 size-6 text-periwinkle [animation:pop_0.7s_0.18s_var(--ease-soft)_both]" />
          <Sparkle className="absolute bottom-2 left-0 size-5 text-cobalt [animation:pop_0.7s_0.3s_var(--ease-soft)_both]" />
        </div>
        <h3 className="mt-4 text-[clamp(2.2rem,6vw,3.4rem)] [animation:pop-text_0.8s_0.15s_var(--ease-soft)_both]">
          you&rsquo;re on the list!
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-lg leading-relaxed text-cobalt-soft [animation:pop-text_0.8s_0.25s_var(--ease-soft)_both]">
          Thanks for joining us early{state.name ? `, ${state.name}` : ""}. We can&rsquo;t wait to show you what&rsquo;s coming.
        </p>
        <p className="mt-6 font-script text-5xl leading-none text-cobalt [animation:pop-text_0.8s_0.4s_var(--ease-soft)_both]" aria-hidden="true">
          everyday
        </p>
        <style>{`
          @keyframes pop { from { transform: scale(0) rotate(-40deg); opacity: 0 } to { transform: none; opacity: 1 } }
          @keyframes pop-text { from { transform: translateY(12px); opacity: 0 } to { transform: none; opacity: 1 } }
        `}</style>
      </div>
    );
  }

  const sending = state.kind === "sending";
  const inputClass = (bad?: string) =>
    `mt-2 block w-full rounded-full bg-paper px-5 py-3.5 text-[1.05rem] text-cobalt placeholder:text-cobalt/35 ring-1 ring-inset transition outline-none focus:ring-2 focus:ring-cobalt ${
      bad ? "ring-coral" : "ring-cobalt/15 hover:ring-cobalt/30"
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-[2.5rem] bg-cream p-6 sm:p-10" aria-describedby="waitlist-privacy">
      {TURNSTILE_KEY ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-first-name" className="text-[0.95rem] font-semibold">
            first name
          </label>
          <input
            id="wl-first-name"
            data-field="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={80}
            placeholder="your first name"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "wl-first-name-err" : undefined}
            className={inputClass(errors.firstName)}
          />
          {errors.firstName && <FieldError id="wl-first-name-err">{errors.firstName}</FieldError>}
        </div>
        <div>
          <label htmlFor="wl-email" className="text-[0.95rem] font-semibold">
            email address
          </label>
          <input
            id="wl-email"
            data-field="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            required
            maxLength={254}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "wl-email-err" : undefined}
            className={inputClass(errors.email)}
          />
          {errors.email && <FieldError id="wl-email-err">{errors.email}</FieldError>}
        </div>
      </div>

      <fieldset className="mt-6" aria-describedby={errors.referral ? "wl-ref-err" : undefined}>
        <legend className="text-[0.95rem] font-semibold">how did you hear about enyday?</legend>
        <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-required="true">
          {REFERRAL_OPTIONS.map((o, i) => {
            const checked = referral === o.value;
            return (
              <label
                key={o.value}
                className={`relative inline-flex min-h-11 cursor-pointer select-none items-center rounded-full px-5 text-[0.95rem] font-medium lowercase ring-1 ring-inset transition has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-coral ${
                  checked
                    ? "bg-periwinkle text-cobalt ring-periwinkle"
                    : `bg-transparent text-cobalt hover:bg-paper hover:ring-cobalt/40 ${errors.referral ? "ring-coral" : "ring-cobalt/25"}`
                }`}
              >
                <input
                  type="radio"
                  name="referral"
                  value={o.value}
                  checked={checked}
                  onChange={() => setReferral(o.value)}
                  data-field={i === 0 ? "referral" : undefined}
                  className="sr-only"
                />
                {o.label}
              </label>
            );
          })}
        </div>
        {errors.referral && <FieldError id="wl-ref-err">{errors.referral}</FieldError>}
      </fieldset>

      <div aria-hidden="true" className="pointer-events-none absolute bottom-[10.75rem] right-8 hidden sm:block">
        <Tooth className="size-14 -rotate-6 text-cobalt" />
        <Burst className="absolute -right-5 -top-3 size-6 text-cobalt" />
      </div>

      {/* honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="wl-company">Company</label>
        <input id="wl-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 pr-0 text-[0.95rem] leading-snug text-cobalt-soft sm:pr-20">
        <input
          id="wl-consent"
          name="consent"
          type="checkbox"
          data-field="consent"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "wl-consent-err" : undefined}
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-cobalt"
        />
        <span>{CONSENT_TEXT}</span>
      </label>
      {errors.consent && <FieldError id="wl-consent-err">{errors.consent}</FieldError>}

      {TURNSTILE_KEY ? <div className="cf-turnstile mt-5" data-sitekey={TURNSTILE_KEY} data-theme="light" /> : null}

      <button type="submit" disabled={sending} className={buttonClass("primary", "mt-7 w-full !text-xl sm:min-h-16")}>
        {sending ? "joining…" : (
          <>
            join the waitlist <Arrow />
          </>
        )}
      </button>

      <div aria-live="polite">
        {state.kind === "error" && (
          <p className="mt-4 rounded-2xl bg-coral/10 px-4 py-3 text-[0.95rem] font-medium text-[#b3263d]">{state.message}</p>
        )}
      </div>

      <p id="waitlist-privacy" className="mt-5 text-center text-[0.82rem] leading-relaxed text-cobalt/60">
        We only use your details to send enyday updates. We never sell your data.{" "}
        <a href="/privacy" className="underline decoration-cobalt/30 underline-offset-2 hover:decoration-cobalt">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 text-[0.88rem] font-medium text-[#b3263d]">
      {children}
    </p>
  );
}
