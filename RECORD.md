# Track record

Generated 2026-11-08T17:56:57.442Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**41 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 41 | 0.5681 | 0.1912 | 78.0% |
| Home −1.5 | 41 | 0.5355 | 0.1758 | — |
| Away −1.5 | 41 | 0.4067 | 0.1241 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 1 | 26.8% | 0.0% |
| 0.3-0.4 | 4 | 35.5% | 25.0% |
| 0.4-0.5 | 10 | 44.7% | 10.0% |
| 0.5-0.6 | 11 | 53.7% | 63.6% |
| 0.6-0.7 | 7 | 64.5% | 71.4% |
| 0.7-0.8 | 6 | 73.7% | 83.3% |
| 0.8-0.9 | 2 | 81.9% | 100.0% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
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
| 2026-11-05 | UTA @ MTL | 52.1% | 4–5 (OT) | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | VGK @ DET | 43.5% | 2–1 | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | CHI @ TBL | 83.8% | 1–4 | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | STL @ NJD | 57.6% | 4–5 (OT) | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | CAR @ NYI | 40.2% | 5–3 | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | PHI @ NYR | 66.7% | 2–3 | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | BOS @ PIT | 47.1% | 6–2 | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | DAL @ CBJ | 51.3% | 1–2 (SO) | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-05 | VAN @ WPG | 70.6% | 2–6 | [eff67fe](https://github.com/ireinahedad/arakice-nhl-predictions/commit/eff67fe7b463bc18ad5f6459ba56dc79c95b8e65) |
| 2026-11-04 | SJS @ LAK | 61.5% | 2–7 | [7e4c621](https://github.com/ireinahedad/arakice-nhl-predictions/commit/7e4c621675f0721349f37fcfa56166f3224a0543) |
| 2026-11-04 | CGY @ SEA | 55.3% | 1–2 (OT) | [7e4c621](https://github.com/ireinahedad/arakice-nhl-predictions/commit/7e4c621675f0721349f37fcfa56166f3224a0543) |
| 2026-11-04 | OTT @ BUF | 53.7% | 2–1 | [7e4c621](https://github.com/ireinahedad/arakice-nhl-predictions/commit/7e4c621675f0721349f37fcfa56166f3224a0543) |
| 2026-11-04 | CHI @ FLA | 75.2% | 3–5 | [7e4c621](https://github.com/ireinahedad/arakice-nhl-predictions/commit/7e4c621675f0721349f37fcfa56166f3224a0543) |
| 2026-11-03 | ANA @ VAN | 33.3% | 5–4 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | CAR @ NSH | 35.5% | 1–4 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |

_Model estimates. Not financial, legal or betting advice._
