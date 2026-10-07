# pouyasadri.com

Greenfield **Next.js 16.4** App Router site for Pouya Sadri (FR-first + EN), replacing the legacy CRA masterPortfolio fork.

## Stack

- Next.js 16.4 · React 19 · TypeScript strict (`noUncheckedIndexedAccess`)
- Tailwind CSS 4
- Sanity schema stubs (headless CMS) with JSON seed fallback
- Case studies seeded from **all GitHub pinned repos** of [`pouyasadri`](https://github.com/pouyasadri)

## Locales

| Locale | Prefix |
| --- | --- |
| French (default) | `/fr/...` (bare `/` redirects to `/fr`) |
| English | `/en/...` |

Hreflang / `alternates.languages` set via the Metadata API (`x-default` → FR).

## Routes

- `/[locale]` — home (product platforms hero)
- `/[locale]/work` + `/[locale]/work/[slug]`
- `/[locale]/services`
- `/[locale]/writing` + `/[locale]/writing/[slug]`
- `/[locale]/about`
- `/[locale]/faq`
- `/[locale]/contact` — fixed form (name, email, message)

## CMS choice: Sanity

Sanity is the locked headless CMS. Schemas live in `sanity/schemaTypes/` (`project`, `writingPost`, `siteSettings`, `faqItem`). Until `NEXT_PUBLIC_SANITY_*` is set, the app serves `content/seed/*` (including GitHub pin stubs).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run seed:pins   # refresh content/seed from GitHub pins
```

## Env setup

Copy `.env.example` → `.env.local` and fill:

1. **Sanity** — `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`
2. **Contact** — `CONTACT_EMAIL_PROVIDER` + provider secrets (optional until you wire send)
3. **Medium / YouTube** — stubs only; see `src/lib/content/media.ts`

Canonical phone / WhatsApp: `0768411196` → `+33 7 68 41 11 96` (`+33768411196` E.164).

## Out of scope (this scaffold)

- Visual redesign polish
- Live Sanity provisioning / production secrets
- Full Medium / YouTube ingestion
