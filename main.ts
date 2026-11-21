// "The World in One Image — 21 November 2026" — make.fun news-image-20261121
// entry (Node 22, standard library only).
//
// The image is entry.png beside this file: a newspaper front page summing up
// Saturday 21 November 2026 — Russia's biggest barrage yet on Ukraine, with
// missiles landing in Poland; COP31 slipping into overtime in Antalya; Iran
// saying it downed a US MQ-9 over Hormuz; the AI sell-off dragging the S&P
// 500 into correction; and 46 more verified stories from the day, across
// seven regions, each marked with its source and a confidence rating.
// The artwork is drawn in code (inline SVG in src/frontpage.html); there
// are no photographs and no copied artwork.
//
// The program checks the image is a whole PNG inside the competition's
// limits, then copies it to /output/entry.png (or $MAKEFUN_OUTPUT_DIR when
// set). Deterministic, no network: the same bytes land on every run, and
// nothing is read except entry.png beside this file.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);

if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG file');
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`entry.png (${bytes.length} bytes, ${width}x${height}) -> ${join(outDir, 'entry.png')}`);
