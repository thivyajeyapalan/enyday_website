-- enyday waitlist
-- Run this once in Supabase: Dashboard > SQL Editor > New query > paste > Run.

create extension if not exists citext;

create table if not exists public.waitlist_signups (
  id               uuid primary key default gen_random_uuid(),
  first_name       text not null check (char_length(first_name) between 1 and 80),
  email            citext not null unique check (char_length(email) <= 254),
  referral_source  text not null check (referral_source in (
                     'friends', 'social_media', 'in_person_pitch', 'club_newsletter', 'posters'
                   )),
  marketing_consent boolean not null default false,
  consent_text     text,
  created_at       timestamptz not null default now()
);

create index if not exists waitlist_signups_created_at_idx on public.waitlist_signups (created_at desc);
create index if not exists waitlist_signups_referral_idx on public.waitlist_signups (referral_source);

-- Lock the table down. RLS on + no policies = the public "anon" key can't read or write.
-- The website writes through a server-side API route using the service-role key.
alter table public.waitlist_signups enable row level security;
revoke all on public.waitlist_signups from anon, authenticated;

-- Handy summary for the team (also visible in Supabase > Table Editor).
create or replace view public.waitlist_referral_summary
with (security_invoker = true) as
select referral_source,
       count(*)::int as signups,
       round(100.0 * count(*) / nullif(sum(count(*)) over (), 0), 1) as pct
from public.waitlist_signups
group by referral_source
order by signups desc;

revoke all on public.waitlist_referral_summary from anon, authenticated;
