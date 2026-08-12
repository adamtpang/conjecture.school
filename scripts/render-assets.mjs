/**
 * render-assets.mjs — rasterize lesson/marketing SVGs to PNG for Open Graph
 * and cover art.
 *
 * Product role: presentation/lesson packaging assets, not essay-studio media.
 * Source of truth is the SVG; PNG is the shippable binary for social and
 * lesson covers.
 *
 * Usage:
 *   npm run render-assets
 *   node scripts/render-assets.mjs
 *
 * Requires: sharp (devDependency). Inputs must exist under public/.
 *
 * Jobs (edit this list to add a lesson cover):
 *   public/og.svg          → public/og.png          (1200×630, site OG)
 *   public/cover-ep01.svg  → public/cover-ep01.png  (1600×800, Episode 01)
 *
 * After changing an SVG, re-run this script before deploy so /og.png and
 * lesson covers stay in sync. Do not hand-edit the PNG outputs.
 */

import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

const jobs = [
  { in: "public/og.svg", out: "public/og.png", w: 1200, h: 630 },
  { in: "public/cover-ep01.svg", out: "public/cover-ep01.png", w: 1600, h: 800 },
];

let failed = 0;

for (const job of jobs) {
  const inPath = resolve(root, job.in);
  const outPath = resolve(root, job.out);

  if (!existsSync(inPath)) {
    console.error(`missing input: ${job.in}`);
    failed += 1;
    continue;
  }

  const svg = readFileSync(inPath);
  await sharp(svg, { density: 300 })
    .resize(job.w, job.h)
    .png()
    .toFile(outPath);
  console.log(`wrote ${job.out} (${job.w}×${job.h})`);
}

if (failed > 0) {
  console.error(`${failed} job(s) failed`);
  process.exit(1);
}

console.log("render-assets: ok");
