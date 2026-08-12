# UPGRADE_SESSION — conjecture.school

**Date:** 2026-07-28  
**Scope:** Lesson product with `VideoEmbed` + `render-assets.mjs`. Presentation/lesson video packaging, not essay studio, not full LMS.

## Mission

One lesson path with working video embed **or** consistent asset render; clear one-liner.

## Cold-start (what exists)

| Surface | Role |
| --- | --- |
| `/` | Series landing: hero, `#watch` VideoEmbed, RSVP EventCard, series progress, recordings ledger, fellows, hosts |
| `/design` | Design system tokens |
| `/lessons/ep01` | **New** complete lesson: video + notes + outline |
| `app/components/VideoEmbed.tsx` | Click-to-load YouTube (`youtube-nocookie`), privacy-friendly |
| `scripts/render-assets.mjs` | SVG → PNG for OG + episode cover (sharp) |
| Product | Brings Conjecture Institute to Network School as a public lecture series |

**Sells:** packaged lecture lessons (recording + short notes + series context).  
**Does not sell:** LMS, enrollment product, essay studio (that lane is summon.guide).

## Shipped this session

### (a) Complete lesson page

- **Route:** `/lessons/ep01` (`app/lessons/ep01/page.tsx`)
- **Video:** YouTube id `cDvdpCBJLmo` via shared `VideoEmbed` (Episode 01 · Part 1)
- **Notes:** five lesson sections (what it is, Fabric four strands, Beginning of Infinity, good explanations, how to use)
- **Outline:** rough map of the tape
- **Home wiring:** recordings ledger → `/lessons/ep01`; Watch section CTA “Open Episode 01 lesson”
- **Sitemap / llms.txt:** lesson URL listed

### (b) Documented render-assets

- Script header documents purpose, jobs, usage
- `npm run render-assets` in `package.json`
- `sharp` declared as `devDependency`
- `RUNTIME.md` documents the pipeline
- Re-ran successfully: `og.png`, `cover-ep01.png`

### (c) OFFER one-liner

See `OFFER.md`:

> For Network School residents and critical rationalists who want Deutsch, Popper, and Conjecture Institute ideas taught in public, **conjecture.school** is a **lecture-series product** that packages each session as a **watchable lesson with notes**. Unlike LMS platforms or essay studios (e.g. summon.guide), we ship **one clear lesson path per recording**, not a course catalog or writing workspace.

Also tightened `NORTH_STAR.md` to match.

## Proof (local, 2026-07-28)

```
npm run build          → routes include ○ /lessons/ep01
npm run render-assets  → wrote og.png + cover-ep01.png
npm run start -p 3456
GET /lessons/ep01      → 200; body contains cDvdpCBJLmo, Lesson notes
GET /cover-ep01.png    → 200; ~82KB
YouTube oEmbed cDvdpCBJLmo → 200; title "conjecture.school 1"
```

Note: iframe `youtube-nocookie` src is injected only after click (by design in `VideoEmbed`). ID is in the page; oEmbed confirms media is live.

**Public after deploy:** `https://conjecture.school/lessons/ep01`

## Explicit non-goals (held)

- No full LMS (catalog, progress DB, auth enrollments)
- No competition with summon.guide as essay studio
- No multi-lesson CMS; one complete path is the proof

## Files touched

- `app/lessons/ep01/page.tsx` (new)
- `app/page.tsx`
- `app/sitemap.ts`
- `scripts/render-assets.mjs`
- `package.json` (+ lock via sharp)
- `OFFER.md`
- `NORTH_STAR.md`
- `RUNTIME.md`
- `public/llms.txt`
- `public/og.png`, `public/cover-ep01.png` (regenerated)
- `UPGRADE_SESSION.md` (this file)

## Next (optional, not in this upgrade)

- Deploy to Vercel so production matches local proof
- Tighten outline timestamps after rewatch
- Written RSVP/viewer receipt into `EVIDENCE.md`
