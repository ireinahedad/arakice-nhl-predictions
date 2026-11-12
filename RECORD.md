# Track record

Generated 2026-11-12T19:58:32.991Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**56 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 56 | 0.5969 | 0.2047 | 71.4% |
| Home −1.5 | 56 | 0.5241 | 0.1705 | — |
| Away −1.5 | 56 | 0.4766 | 0.1544 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 1 | 26.8% | 0.0% |
| 0.3-0.4 | 5 | 35.4% | 20.0% |
| 0.4-0.5 | 16 | 44.9% | 25.0% |
| 0.5-0.6 | 18 | 54.2% | 55.6% |
| 0.6-0.7 | 8 | 64.0% | 75.0% |
| 0.7-0.8 | 6 | 73.7% | 83.3% |
| 0.8-0.9 | 2 | 81.9% | 100.0% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-10 | NSH @ LAK | 57.6% | 3–0 | [26a50ce](https://github.com/ireinahedad/arakice-nhl-predictions/commit/26a50ced8f6a484daed5a9efa80eb1b0625a7186) |
| 2026-11-10 | DET @ STL | 56.4% | 2–3 | [26a50ce](https://github.com/ireinahedad/arakice-nhl-predictions/commit/26a50ced8f6a484daed5a9efa80eb1b0625a7186) |
| 2026-11-10 | FLA @ CBJ | 48.9% | 4–1 | [26a50ce](https://github.com/ireinahedad/arakice-nhl-predictions/commit/26a50ced8f6a484daed5a9efa80eb1b0625a7186) |
| 2026-11-10 | COL @ TOR | 35.0% | 6–3 | [26a50ce](https://github.com/ireinahedad/arakice-nhl-predictions/commit/26a50ced8f6a484daed5a9efa80eb1b0625a7186) |
| 2026-11-10 | MIN @ MTL | 50.5% | 2–1 (OT) | [26a50ce](https://github.com/ireinahedad/arakice-nhl-predictions/commit/26a50ced8f6a484daed5a9efa80eb1b0625a7186) |
| 2026-11-10 | WSH @ OTT | 55.7% | 3–2 (OT) | [26a50ce](https://github.com/ireinahedad/arakice-nhl-predictions/commit/26a50ced8f6a484daed5a9efa80eb1b0625a7186) |
| 2026-11-10 | NJD @ WPG | 44.6% | 2–4 | [26a50ce](https://github.com/ireinahedad/arakice-nhl-predictions/commit/26a50ced8f6a484daed5a9efa80eb1b0625a7186) |
| 2026-11-09 | NYI @ SJS | 44.5% | 2–3 (SO) | [9ff1023](https://github.com/ireinahedad/arakice-nhl-predictions/commit/9ff10234b5231f179c3175abc28413d5f5af23b4) |
| 2026-11-09 | PHI @ VAN | 52.8% | 3–1 | [9ff1023](https://github.com/ireinahedad/arakice-nhl-predictions/commit/9ff10234b5231f179c3175abc28413d5f5af23b4) |
| 2026-11-09 | NYR @ EDM | 60.5% | 1–3 | [9ff1023](https://github.com/ireinahedad/arakice-nhl-predictions/commit/9ff10234b5231f179c3175abc28413d5f5af23b4) |
| 2026-11-08 | PIT @ ANA | 59.5% | 2–5 | [1b2df9e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1b2df9e0fa6e7de5e4e1c888b5e5ff3a33bb49a1) |
| 2026-11-08 | NJD @ TOR | 40.9% | 4–0 | [1b2df9e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1b2df9e0fa6e7de5e4e1c888b5e5ff3a33bb49a1) |
| 2026-11-08 | PHI @ CGY | 52.4% | 3–4 (OT) | [1b2df9e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1b2df9e0fa6e7de5e4e1c888b5e5ff3a33bb49a1) |
| 2026-11-08 | TBL @ WPG | 42.8% | 3–4 | [1b2df9e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1b2df9e0fa6e7de5e4e1c888b5e5ff3a33bb49a1) |
| 2026-11-08 | VGK @ BUF | 49.2% | 4–1 | [1b2df9e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1b2df9e0fa6e7de5e4e1c888b5e5ff3a33bb49a1) |
| 2026-11-07 | VAN @ EDM | 77.9% | 2–4 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | DET @ COL | 69.2% | 0–4 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | PIT @ LAK | 53.9% | 5–2 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | CHI @ CAR | 80.1% | 2–9 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | SJS @ DAL | 73.1% | 3–4 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | TBL @ MIN | 40.1% | 4–3 (OT) | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | MTL @ TOR | 44.0% | 4–2 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | UTA @ OTT | 54.8% | 2–4 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | NJD @ NYI | 46.9% | 5–4 (OT) | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-07 | NYR @ SEA | 38.0% | 4–3 | [63772f0](https://github.com/ireinahedad/arakice-nhl-predictions/commit/63772f0b2f474c5824fc4a7725716aca41e2cfca) |
| 2026-11-06 | SJS @ MIN | 69.0% | 1–4 | [6132713](https://github.com/ireinahedad/arakice-nhl-predictions/commit/61327132a7d703b4152ad83dce13e512856645f1) |
| 2026-11-06 | ANA @ CGY | 45.7% | 5–3 | [6132713](https://github.com/ireinahedad/arakice-nhl-predictions/commit/61327132a7d703b4152ad83dce13e512856645f1) |
| 2026-11-06 | CBJ @ BUF | 61.6% | 2–5 | [6132713](https://github.com/ireinahedad/arakice-nhl-predictions/commit/61327132a7d703b4152ad83dce13e512856645f1) |
| 2026-11-05 | NSH @ COL | 71.5% | 3–2 (OT) | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | ANA @ EDM | 62.2% | 5–4 | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |

_Model estimates. Not financial, legal or betting advice._
