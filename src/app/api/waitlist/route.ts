import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { CONSENT_TEXT, validateWaitlist } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ---------- basic abuse protection ---------- */

// Best-effort, per-server-instance limiter: 5 attempts per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 5000) attempts.clear(); // keep memory bounded
  return recent.length > MAX_ATTEMPTS;
}

async function passesTurnstile(token: unknown, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile is optional
  if (typeof token !== "string" || !token) return false;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: boolean };
  return json.success === true;
}

const MIN_FILL_MS = 2500; // humans don't complete the form faster than this

/* ---------- handler ---------- */

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Something went wrong sending the form. Try again." }, { status: 400 });
  }

  // Honeypot: real people never see or fill the "company" field. Pretend success so bots move on.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ status: "ok" });
  }
  if (typeof body.elapsed !== "number" || body.elapsed < MIN_FILL_MS) {
    return NextResponse.json({ error: "That was quick! Give it a second and try again." }, { status: 400 });
  }
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many tries from this connection. Wait a few minutes and try again." }, { status: 429 });
  }
  if (!(await passesTurnstile(body.turnstileToken, ip))) {
    return NextResponse.json({ error: "We couldn't verify you're human. Refresh the page and try again." }, { status: 400 });
  }

  const parsed = validateWaitlist(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: "Check the highlighted fields.", fields: parsed.errors }, { status: 422 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Never pretend a signup was saved.
    console.error("[waitlist] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set; signup NOT saved.");
    return NextResponse.json(
      { error: "Our waitlist isn't connected yet, so your signup wasn't saved. Please try again soon." },
      { status: 503 },
    );
  }

  const { firstName, email, referral } = parsed.data;
  const { error } = await supabase.from("waitlist_signups").insert({
    first_name: firstName,
    email,
    referral_source: referral,
    marketing_consent: true,
    consent_text: CONSENT_TEXT,
  });

  if (error) {
    // 23505 = unique violation: this email is already on the list. Respond the same as a new
    // signup so the form can't be used to check whether someone else has joined.
    if (error.code === "23505") return NextResponse.json({ status: "ok" });
    console.error("[waitlist] insert failed:", error.code, error.message);
    return NextResponse.json({ error: "We couldn't save your signup just now. Try again in a minute." }, { status: 500 });
  }

  return NextResponse.json({ status: "ok" });
}
