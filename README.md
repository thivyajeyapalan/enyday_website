# enyday · pre-launch website

Single-page landing site for enyday, with a working waitlist.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · Supabase (Postgres)

```
src/
  app/
    page.tsx                 landing page (hero, story, science, gloss, waitlist)
    privacy/page.tsx         privacy policy (starting draft, have it reviewed)
    admin/page.tsx           password-protected team dashboard
    api/waitlist/route.ts    saves signups (server-side only)
    api/admin/export/route.ts  CSV export
  components/                sections + Logo, GlossPen (concept rendering), form
  lib/site.ts                Instagram URL, contact email, referral options
supabase/migrations/0001_waitlist.sql
```

## Design system

| Token | Hex | Use |
| --- | --- | --- |
| cobalt | `#263197` | wordmark, headlines, text, primary buttons |
| periwinkle | `#9EADF4` | the product, product stages, waitlist band |
| periwinkle-mist | `#E4E8FC` | science section ground |
| coral | `#F85C70` | small accents only (eyebrows, status dot, focus ring) |
| spark | `#FF5757` | logo sparkle |
| cream | `#F6F4F0` | main background |

Colors are sampled directly from the brand files. Fonts are **Figtree** for headlines (with italic for emphasis, as in
the banners), **DM Sans** for body text and **Sacramento** for the occasional script accent ("everyday"). All three are
Google Fonts, free for commercial use, and self-hosted by Next.js at build time.

The wordmark (`src/components/logo-paths.ts`) was traced from your logo file into vector paths, so it's your exact logo
at any size, never retyped in a font. The favicon is traced from the "e" icon.

The product photos live in `public/images/` (gloss pen + founder photos). The gloss is still labeled "in development" on the
site.

## Setup: connect the waitlist (about 10 minutes)

Until these steps are done, the form shows "our waitlist isn't connected yet" and **does not** pretend to save anything.

1. **Create a Supabase project** at supabase.com (the free tier is fine).
2. **Create the table:** Supabase → SQL Editor → New query → paste `supabase/migrations/0001_waitlist.sql` → Run.
3. **Set environment variables** in `.env.local` (local) and in your host's settings (e.g. Vercel → Project → Settings →
   Environment Variables):

   | Variable | Required | Where to find it |
   | --- | --- | --- |
   | `SUPABASE_URL` | yes | Supabase → Project Settings → API → Project URL |
   | `SUPABASE_SERVICE_ROLE_KEY` | yes | same page, `service_role` secret. Server-only; never add a `NEXT_PUBLIC_` prefix |
   | `ADMIN_PASSWORD` | yes | choose a long random password for `/admin` |
   | `NEXT_PUBLIC_SITE_URL` | recommended | your live domain, e.g. `https://yourdomain.com` (used for SEO and link previews) |
   | `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | optional | Cloudflare Turnstile, for stronger bot protection |

4. **Fill in brand details** in `src/lib/site.ts`: `instagramUrl` and `contactEmail`. Until then the site shows
   "coming soon" instead of an invented handle or address.

## Viewing signups

* **Dashboard:** visit `/admin` and log in with any username and your `ADMIN_PASSWORD`. It shows total signups, the
  last 7 days, a breakdown by referral source, and the latest 100 signups.
* **CSV export:** the "Export CSV" button on `/admin` (or `/api/admin/export`).
* **Supabase:** Table Editor → `waitlist_signups`, or the `waitlist_referral_summary` view.

## How the waitlist is protected

* Signups are written only from the server with the service-role key. Row Level Security is on with no public policies,
  so the browser can never read the list.
* Emails are validated on both client and server, stored lowercase, and unique at the database level (`citext unique`).
  A repeat signup gets the same friendly confirmation, so the form can't be used to check who has joined.
* Bot protection: hidden honeypot field, a minimum fill time, a per-IP rate limit (5 tries / 10 min per server
  instance), and optional Cloudflare Turnstile.
* Consent: a required, unticked-by-default checkbox. The exact consent wording is saved with each signup.
* CSV export escapes cells to prevent spreadsheet formula injection.

## Develop

```bash
npm install
```

```bash
npm run dev
```

Deploying on Vercel: import the repo, add the environment variables above, deploy.

## Content guardrails

The copy is written to stay within what enyday can say today: the gloss is labeled in development, there are no
efficacy, clinical, whitening or approval claims, hydroxyapatite is discussed only as enamel science (not as an
ingredient), and the site says the gloss goes alongside brushing, flossing, fluoride toothpaste and dental visits.
Please keep this in mind when editing copy.
