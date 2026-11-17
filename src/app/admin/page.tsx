import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { fetchAllSignups } from "@/lib/signups";
import { REFERRAL_OPTIONS, referralLabel } from "@/lib/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Waitlist dashboard", robots: { index: false, follow: false } };

const fmt = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: "America/New_York" });

export default async function AdminPage() {
  let rows: Awaited<ReturnType<typeof fetchAllSignups>> = null;
  let loadError: string | null = null;
  try {
    rows = await fetchAllSignups();
  } catch (e) {
    loadError = e instanceof Error ? e.message : "Unknown error";
  }

  const total = rows?.length ?? 0;
  const counts = REFERRAL_OPTIONS.map((o) => ({
    ...o,
    count: rows?.filter((r) => r.referral_source === o.value).length ?? 0,
  })).sort((a, b) => b.count - a.count);
  const max = Math.max(1, ...counts.map((c) => c.count));
  const week = rows?.filter((r) => Date.now() - new Date(r.created_at).getTime() < 7 * 864e5).length ?? 0;

  return (
    <main className="gutter min-h-screen py-10">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo className="h-8 w-auto" />
            <span className="eyebrow text-cobalt/60">waitlist dashboard</span>
          </div>
          <a
            href="/api/admin/export"
            className="inline-flex min-h-11 items-center rounded-full bg-cobalt px-5 font-display font-semibold text-cream"
          >
            Export CSV
          </a>
        </header>

        {!rows && !loadError && (
          <p className="mt-10 rounded-2xl bg-coral/10 p-5 text-[#b3263d]">
            Supabase isn&rsquo;t connected. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then redeploy.
          </p>
        )}
        {loadError && (
          <p className="mt-10 rounded-2xl bg-coral/10 p-5 text-[#b3263d]">
            Couldn&rsquo;t load signups: {loadError}. Check that the migration in supabase/migrations has been run.
          </p>
        )}

        {rows && (
          <>
            <section className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-paper p-6 ring-1 ring-cobalt/10">
                <p className="eyebrow text-cobalt/60">total signups</p>
                <p className="mt-2 font-display text-6xl font-semibold tabular-nums">{total}</p>
              </div>
              <div className="rounded-3xl bg-paper p-6 ring-1 ring-cobalt/10">
                <p className="eyebrow text-cobalt/60">last 7 days</p>
                <p className="mt-2 font-display text-6xl font-semibold tabular-nums">{week}</p>
              </div>
            </section>

            <section className="mt-4 rounded-3xl bg-paper p-6 ring-1 ring-cobalt/10">
              <h2 className="text-2xl">by referral source</h2>
              <ul className="mt-5 space-y-3">
                {counts.map((c) => (
                  <li key={c.value} className="grid grid-cols-[minmax(0,11rem)_1fr_4.5rem] items-center gap-3 text-[0.95rem]">
                    <span className="truncate font-medium">{c.label}</span>
                    <span className="h-3 overflow-hidden rounded-full bg-periwinkle-mist">
                      <span className="block h-full rounded-full bg-cobalt" style={{ width: `${(c.count / max) * 100}%` }} />
                    </span>
                    <span className="text-right tabular-nums text-cobalt-soft">
                      {c.count}
                      <span className="text-cobalt/40"> · {total ? Math.round((c.count / total) * 100) : 0}%</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-4 rounded-3xl bg-paper p-6 ring-1 ring-cobalt/10">
              <h2 className="text-2xl">latest signups</h2>
              {total === 0 ? (
                <p className="mt-4 text-cobalt-soft">No signups yet. They&rsquo;ll appear here as soon as people join.</p>
              ) : (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-[0.92rem]">
                    <thead className="text-cobalt/50">
                      <tr>
                        <th className="py-2 pr-4 font-medium">Name</th>
                        <th className="py-2 pr-4 font-medium">Email</th>
                        <th className="py-2 pr-4 font-medium">Heard via</th>
                        <th className="py-2 font-medium">Joined (ET)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cobalt/10">
                      {rows.slice(0, 100).map((r) => (
                        <tr key={r.email}>
                          <td className="py-2.5 pr-4">{r.first_name}</td>
                          <td className="py-2.5 pr-4">{r.email}</td>
                          <td className="py-2.5 pr-4">{referralLabel(r.referral_source)}</td>
                          <td className="py-2.5 tabular-nums">{fmt.format(new Date(r.created_at))}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {total > 100 && <p className="mt-3 text-sm text-cobalt/50">Showing the latest 100. Export CSV for all {total}.</p>}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
