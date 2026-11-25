# Track record

Generated 2026-11-25T21:45:03.400Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**134 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 134 | 0.6834 | 0.2446 | 57.5% |
| Home −1.5 | 134 | 0.5437 | 0.1802 | — |
| Away −1.5 | 134 | 0.5729 | 0.1944 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 2 | 28.3% | 50.0% |
| 0.3-0.4 | 11 | 34.8% | 18.2% |
| 0.4-0.5 | 37 | 44.8% | 35.1% |
| 0.5-0.6 | 47 | 54.1% | 44.7% |
| 0.6-0.7 | 24 | 64.8% | 62.5% |
| 0.7-0.8 | 10 | 73.3% | 50.0% |
| 0.8-0.9 | 3 | 81.8% | 66.7% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-24 | VGK @ EDM | 51.9% | 5–3 | [280cac6](https://github.com/ireinahedad/arakice-nhl-predictions/commit/280cac6a451f2abdcd4604b0e2e21e1a73548333) |
| 2026-11-23 | MIN @ SJS | 34.5% | 5–2 | [a93695a](https://github.com/ireinahedad/arakice-nhl-predictions/commit/a93695a22b8fe72cd2ca8f7aaf873fbb3d5a2751) |
| 2026-11-23 | ANA @ SEA | 43.1% | 2–3 | [a93695a](https://github.com/ireinahedad/arakice-nhl-predictions/commit/a93695a22b8fe72cd2ca8f7aaf873fbb3d5a2751) |
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

_Model estimates. Not financial, legal or betting advice._
