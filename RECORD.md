# Track record

Generated 2026-11-13T19:46:09.878Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**66 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 66 | 0.6162 | 0.2139 | 66.7% |
| Home −1.5 | 66 | 0.5124 | 0.1650 | — |
| Away −1.5 | 66 | 0.5288 | 0.1773 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 1 | 26.8% | 0.0% |
| 0.3-0.4 | 5 | 35.4% | 20.0% |
| 0.4-0.5 | 20 | 44.7% | 30.0% |
| 0.5-0.6 | 22 | 54.2% | 50.0% |
| 0.6-0.7 | 10 | 63.7% | 70.0% |
| 0.7-0.8 | 6 | 73.7% | 83.3% |
| 0.8-0.9 | 2 | 81.9% | 100.0% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-12 | NYI @ LAK | 52.5% | 5–2 | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | STL @ UTA | 53.2% | 1–0 (SO) | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | BUF @ CHI | 40.4% | 2–3 (OT) | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | WPG @ DAL | 62.3% | 8–3 | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | DET @ FLA | 62.4% | 4–5 | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | MTL @ BOS | 54.7% | 5–2 | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | MIN @ TOR | 42.5% | 5–2 | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | COL @ OTT | 44.7% | 3–4 (OT) | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | WSH @ NJD | 56.1% | 2–5 | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
| 2026-11-12 | TBL @ CBJ | 48.1% | 3–1 | [e6c0ecf](https://github.com/ireinahedad/arakice-nhl-predictions/commit/e6c0ecfb3c1b9ac7356f7ad3e1077b32f368c968) |
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

_Model estimates. Not financial, legal or betting advice._
