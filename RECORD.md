# Track record

Generated 2026-11-16T22:09:56.132Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**86 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 86 | 0.6537 | 0.2310 | 62.8% |
| Home −1.5 | 86 | 0.5175 | 0.1677 | — |
| Away −1.5 | 86 | 0.5884 | 0.2018 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 1 | 26.8% | 0.0% |
| 0.3-0.4 | 7 | 34.6% | 14.3% |
| 0.4-0.5 | 26 | 44.5% | 26.9% |
| 0.5-0.6 | 27 | 53.9% | 48.1% |
| 0.6-0.7 | 16 | 65.2% | 50.0% |
| 0.7-0.8 | 7 | 74.4% | 71.4% |
| 0.8-0.9 | 2 | 81.9% | 100.0% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-15 | VAN @ VGK | 78.6% | 6–3 | [dc2d6dd](https://github.com/ireinahedad/arakice-nhl-predictions/commit/dc2d6ddd73e6f4ebe01a3a78512d94307f3ba08c) |
| 2026-11-15 | NSH @ SJS | 42.2% | 2–4 | [dc2d6dd](https://github.com/ireinahedad/arakice-nhl-predictions/commit/dc2d6ddd73e6f4ebe01a3a78512d94307f3ba08c) |
| 2026-11-15 | FLA @ DAL | 53.3% | 1–2 (OT) | [dc2d6dd](https://github.com/ireinahedad/arakice-nhl-predictions/commit/dc2d6ddd73e6f4ebe01a3a78512d94307f3ba08c) |
| 2026-11-15 | CGY @ ANA | 67.2% | 1–6 | [dc2d6dd](https://github.com/ireinahedad/arakice-nhl-predictions/commit/dc2d6ddd73e6f4ebe01a3a78512d94307f3ba08c) |
| 2026-11-15 | EDM @ PHI | 32.6% | 5–2 | [dc2d6dd](https://github.com/ireinahedad/arakice-nhl-predictions/commit/dc2d6ddd73e6f4ebe01a3a78512d94307f3ba08c) |
| 2026-11-14 | NYI @ ANA | 52.6% | 6–2 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | CGY @ LAK | 66.7% | 3–2 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | SJS @ UTA | 68.6% | 6–5 (SO) | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | BUF @ DAL | 55.7% | 0–2 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | MIN @ BOS | 50.2% | 6–2 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | EDM @ TOR | 41.3% | 1–0 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | COL @ MTL | 43.7% | 4–1 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | DET @ TBL | 68.9% | 2–0 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | OTT @ PIT | 45.4% | 4–1 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | NJD @ WSH | 50.1% | 7–4 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | PHI @ CBJ | 68.5% | 4–3 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | FLA @ STL | 47.6% | 4–1 | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-14 | WPG @ CHI | 41.8% | 5–4 (SO) | [8c4ef80](https://github.com/ireinahedad/arakice-nhl-predictions/commit/8c4ef80d067848387099bd3f491eb4a9649b52b3) |
| 2026-11-13 | NSH @ VGK | 67.4% | 3–2 (SO) | [79d1300](https://github.com/ireinahedad/arakice-nhl-predictions/commit/79d13006123983d87cfcf4133316ab7ec4ad8cf8) |
| 2026-11-13 | NYR @ VAN | 32.8% | 5–1 | [79d1300](https://github.com/ireinahedad/arakice-nhl-predictions/commit/79d13006123983d87cfcf4133316ab7ec4ad8cf8) |
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

_Model estimates. Not financial, legal or betting advice._
