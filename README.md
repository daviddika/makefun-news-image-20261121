# The World in One Image — 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/daviddika/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/daviddika/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

**Entry name:** The World in One Image — 21 November 2026
**Bounty:** news-image-20261121 — "Sum up 21 November's world news in one image" ($100, top 50 share the prize)
**Entrant:** Mahardika (@dika-david)

A newspaper-front-page-style editorial infographic, 1024×1024, summing up
Saturday 21 November 2026 — **50 stories from one day, all verified from
live reporting**, across 7 regions and 10+ fields, each marked with its
source and a confidence rating (● HIGH = two or more major outlets or an
official source; ◐ MEDIUM = a single outlet or a claim worded as a claim):

1. **LEAD — RUSSIA'S BIGGEST BARRAGE YET HITS KYIV, MISSILES LAND IN
   POLAND** — 400+ drones and 110 missiles in one of the war's largest
   overnight barrages; Kyiv's bridges and power grid struck; a second
   night of strikes kills a boy of 7 and a paramedic in Kryvyi Rih.
   Poland calls the missiles on its soil a deliberate provocation.
2. **COP31 SLIPS INTO OVERTIME IN ANTALYA** — the closing plenary is
   suspended at 22:29 with fossil-fuel language still out of the draft;
   a third text is due Saturday; Ethiopia will host COP32.
3. **IRAN SAYS IT DOWNED A US MQ-9 OVER HORMUZ** — Tehran claims the
   58th Reaper; Trump weighs new strikes as Israel presses for action.
4. **AI SELL-OFF DRAGS THE S&P 500 INTO CORRECTION** — US stocks fall
   3.7% on Friday as chip shares lead the rout.
5. **WORLD IN BRIEF — 40 STORIES** — from a 6.7 quake in Peru and
   Cyclone Akvan's flooding in Odisha to the UK–EU post-Brexit deals, a
   pancreatic-cancer pill trial, GTA 6's ~$4.9bn day one, and the day's
   sport, courts, culture and science, region-tagged.
6. **ALSO TODAY** — six more, plus a footer date check: every story
   happened, or was first reported, on Saturday 21 November 2026.

Earlier-day stories (the 19 Nov ICJ ruling, the 20 Nov summit, the Gen Z
marches of 20 Nov) appear only as 21 November follow-ups, or not at all.
See `NOTES.md` for the full evidence trail: all 50 stories with sources.

## Design

Newsprint palette (cream paper, black ink, one red accent), a black
masthead band with the date "21 NOVEMBER 2026" named three times, a hero
story with a drawn Kyiv night skyline (missile arcs, lit windows, the
Dnipro bridge), three medium stories with small drawn icons, a 40-item
"World in Brief" grid with region tags and source + confidence markers,
an "Also today" strip, and a footer date check. Built as HTML+CSS
(`src/frontpage.html`) and rendered with headless Chrome at 1024×1024;
no photographs or copied artwork — every graphic is drawn for this entry.

## Files

- `entry.png` — the image (1024×1024 PNG, ~331 KB)
- `main.ts` — Node 22, standard library only: validates `entry.png`
  (PNG signature, ≤1 MiB, ≤1024×1024) and copies it to
  `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` when set)
- `src/frontpage.html` — the HTML+CSS source the image was rendered from
- `NOTES.md` — the research trail: all 50 stories with sources
- `README.md` — this file
- `LICENSE` — MIT

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it copies the same bytes every run.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dika-david&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
