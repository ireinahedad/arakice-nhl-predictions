# Track record

Generated 2026-11-06T19:27:27.416Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**28 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 28 | 0.6106 | 0.2113 | 71.4% |
| Home −1.5 | 28 | 0.5351 | 0.1748 | — |
| Away −1.5 | 28 | 0.3802 | 0.1105 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 1 | 26.8% | 0.0% |
| 0.3-0.4 | 3 | 34.7% | 33.3% |
| 0.4-0.5 | 6 | 45.1% | 16.7% |
| 0.5-0.6 | 9 | 53.6% | 66.7% |
| 0.6-0.7 | 4 | 62.9% | 50.0% |
| 0.7-0.8 | 4 | 72.9% | 75.0% |
| 0.8-0.9 | 1 | 83.8% | 100.0% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
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
| 2026-11-03 | EDM @ NJD | 54.0% | 3–4 (SO) | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | UTA @ TOR | 41.9% | 3–2 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | WPG @ MTL | 61.1% | 5–4 (OT) | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | DET @ TBL | 74.2% | 2–4 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | STL @ NYR | 51.3% | 1–3 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | MIN @ PHI | 35.3% | 4–2 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | VGK @ PIT | 50.3% | 3–2 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | DAL @ WSH | 49.7% | 6–5 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-03 | COL @ CBJ | 47.9% | 2–7 | [b7b757e](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b7b757ef4e2680788228d16e234aa13be0918e13) |
| 2026-11-02 | CGY @ SJS | 56.6% | 2–1 | [1bf08eb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1bf08eb197d0727e2cee6341096a95c5a57bde55) |
| 2026-11-02 | COL @ CHI | 26.8% | 5–2 | [1bf08eb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1bf08eb197d0727e2cee6341096a95c5a57bde55) |

_Model estimates. Not financial, legal or betting advice._
