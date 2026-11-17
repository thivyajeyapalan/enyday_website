import { fetchAllSignups } from "@/lib/signups";
import { referralLabel } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Quote every cell, and neutralise spreadsheet formulas (=, +, -, @) in user-supplied text.
function cell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

export async function GET() {
  const rows = await fetchAllSignups();
  if (!rows) return new Response("Supabase is not configured.", { status: 503 });

  const header = ["first_name", "email", "referral_source", "marketing_consent", "signed_up_at_utc"];
  const lines = [
    header.join(","),
    ...rows.map((r) =>
      [r.first_name, r.email, referralLabel(r.referral_source), String(r.marketing_consent), r.created_at]
        .map(cell)
        .join(","),
    ),
  ];
  const date = new Date().toISOString().slice(0, 10);
  return new Response("﻿" + lines.join("\r\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="enyday-waitlist-${date}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
