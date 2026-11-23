# Track record

Generated 2026-11-23T23:57:26.055Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**131 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 131 | 0.6838 | 0.2447 | 58.0% |
| Home −1.5 | 131 | 0.5496 | 0.1829 | — |
| Away −1.5 | 131 | 0.5667 | 0.1916 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 2 | 28.3% | 50.0% |
| 0.3-0.4 | 10 | 34.9% | 20.0% |
| 0.4-0.5 | 36 | 44.9% | 33.3% |
| 0.5-0.6 | 46 | 54.1% | 45.6% |
| 0.6-0.7 | 24 | 64.8% | 62.5% |
| 0.7-0.8 | 10 | 73.3% | 50.0% |
| 0.8-0.9 | 3 | 81.8% | 66.7% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-22 | CHI @ VAN | 49.2% | 6–3 | [7705018](https://github.com/ireinahedad/arakice-nhl-predictions/commit/770501887f93803c294b97358d68ed01ab3c936e) |
| 2026-11-22 | EDM @ STL | 47.4% | 4–5 (SO) | [7705018](https://github.com/ireinahedad/arakice-nhl-predictions/commit/770501887f93803c294b97358d68ed01ab3c936e) |
| 2026-11-22 | PIT @ DAL | 68.0% | 0–1 | [7705018](https://github.com/ireinahedad/arakice-nhl-predictions/commit/770501887f93803c294b97358d68ed01ab3c936e) |
| 2026-11-22 | BUF @ TBL | 70.0% | 6–2 | [7705018](https://github.com/ireinahedad/arakice-nhl-predictions/commit/770501887f93803c294b97358d68ed01ab3c936e) |
| 2026-11-21 | MIN @ VAN | 29.7% | 3–4 (SO) | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | SEA @ SJS | 54.6% | 3–4 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | ANA @ UTA | 60.6% | 2–3 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | WSH @ BOS | 53.6% | 5–7 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | CBJ @ TOR | 43.5% | 4–3 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | PHI @ MTL | 67.5% | 4–3 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | LAK @ OTT | 61.1% | 2–4 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | NYI @ DET | 51.6% | 3–2 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | NJD @ STL | 48.1% | 6–9 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | VGK @ WPG | 42.2% | 5–4 (SO) | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | BUF @ FLA | 56.0% | 3–4 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | PIT @ NSH | 48.6% | 3–4 | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-21 | CHI @ CGY | 58.6% | 4–3 (OT) | [f62b259](https://github.com/ireinahedad/arakice-nhl-predictions/commit/f62b259a2faaace058ed8d1cd7095c2d1ada07ba) |
| 2026-11-19 | DAL @ VGK | 56.7% | 4–3 (SO) | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | VAN @ SEA | 61.2% | 1–5 | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | ANA @ COL | 62.7% | 0–4 | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | CBJ @ CHI | 34.8% | 4–2 | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | MIN @ CGY | 34.8% | 4–1 | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | EDM @ TBL | 59.8% | 1–3 | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | LAK @ TOR | 48.7% | 4–3 (SO) | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | PHI @ OTT | 71.9% | 6–5 (OT) | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | STL @ PIT | 51.2% | 5–2 | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | BUF @ WSH | 52.2% | 6–3 | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | MTL @ CAR | 70.3% | 2–1 (OT) | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-19 | NYI @ WPG | 51.0% | 3–4 (OT) | [8409615](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8409615d197868a2b3dcd54f1d2fab0d98c4891f) |
| 2026-11-18 | COL @ UTA | 46.1% | 1–4 | [84b7940](https://github.com/ireinahedad/arakice-nhl-predictions/commit/84b7940341733ba98c4794cbbd256442cad3af80) |

_Model estimates. Not financial, legal or betting advice._
