# Track record

Generated 2026-11-18T20:36:39.771Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**99 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 99 | 0.6711 | 0.2388 | 60.6% |
| Home −1.5 | 99 | 0.5480 | 0.1820 | — |
| Away −1.5 | 99 | 0.5853 | 0.2004 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 1 | 26.8% | 0.0% |
| 0.3-0.4 | 8 | 34.9% | 25.0% |
| 0.4-0.5 | 28 | 44.4% | 28.6% |
| 0.5-0.6 | 34 | 54.0% | 47.1% |
| 0.6-0.7 | 18 | 65.2% | 55.6% |
| 0.7-0.8 | 7 | 74.4% | 71.4% |
| 0.8-0.9 | 3 | 81.8% | 66.7% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-17 | DAL @ VGK | 56.7% | 4–3 (OT) | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | CGY @ SJS | 57.9% | 5–2 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | ANA @ STL | 55.9% | 6–8 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | NSH @ MIN | 65.5% | 3–7 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | WSH @ TBL | 63.9% | 2–5 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | TOR @ CHI | 42.9% | 3–6 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | LAK @ BOS | 57.3% | 3–0 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | EDM @ FLA | 52.4% | 5–2 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | CBJ @ NYI | 50.8% | 1–5 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | BUF @ PHI | 36.9% | 3–4 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-17 | OTT @ WPG | 43.6% | 2–1 | [b72c138](https://github.com/ireinahedad/arakice-nhl-predictions/commit/b72c1387d4c3a81b2eb66b1fb6bc4ea31e2e26e4) |
| 2026-11-16 | VAN @ UTA | 81.5% | 3–2 | [339adf1](https://github.com/ireinahedad/arakice-nhl-predictions/commit/339adf1e52f24bfd4d0a5a916ebaca9e4a1b63a3) |
| 2026-11-16 | MTL @ NYR | 50.0% | 1–3 | [339adf1](https://github.com/ireinahedad/arakice-nhl-predictions/commit/339adf1e52f24bfd4d0a5a916ebaca9e4a1b63a3) |
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

_Model estimates. Not financial, legal or betting advice._
