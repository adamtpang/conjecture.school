# RUNTIME — conjecture.school

Generated 2026-07-26 by Summon fleet standardizer.

## Local run

`npm run dev` (see package.json). Stack: Next.js App Router + Tailwind.

## Asset render (lesson covers / OG)

SVGs under `public/` are source of truth. Rasterize before deploy when art changes:

```
npm run render-assets
```

Script: `scripts/render-assets.mjs` (sharp). Jobs: `og.svg` → `og.png`, `cover-ep01.svg` → `cover-ep01.png`. Documented in the script header.

## Deploy

Production: Vercel project for conjecture.school. Ship: push to the connected git branch (or Vercel deploy). Public proof lesson: `/lessons/ep01`.

## Agent execution adapters (Summon lanes)

| Lane | When to use | Notes |
| --- | --- | --- |
| Claude Code | Default deep work while quota remains | Resets weekly; hand off via sync |
| Codex | When Claude is exhausted | Keep `AGENTS.md` / `CODEX_CONTINUE_FROM_CLAUDE.md` current |
| Grok | When Claude and Codex are exhausted | `node .grok/sync-to-grok.js` then read `GROK_CONTINUE_FROM_*.md` |

Strong default model: whatever the active adapter's best coding model is.  
Low-reasoning lane: short, bounded tasks (lint, rename, one-file edits) on a fast model when available.

## Health proof

After each ship, record in `EVIDENCE.md`: URL or command, status code / screenshot, date.
