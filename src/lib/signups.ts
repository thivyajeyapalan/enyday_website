import "server-only";
import { getSupabaseAdmin, type Signup } from "./supabase-server";

/** Loads every signup, newest first, paging through Supabase's 1,000-row limit. */
export async function fetchAllSignups(): Promise<Signup[] | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;
  const rows: Signup[] = [];
  const page = 1000;
  for (let from = 0; ; from += page) {
    const { data, error } = await supabase
      .from("waitlist_signups")
      .select("first_name, email, referral_source, marketing_consent, created_at")
      .order("created_at", { ascending: false })
      .range(from, from + page - 1);
    if (error) throw new Error(error.message);
    rows.push(...(data as Signup[]));
    if (!data || data.length < page) break;
  }
  return rows;
}
