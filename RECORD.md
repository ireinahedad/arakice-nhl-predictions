# Track record

Generated 2026-11-04T02:03:33.280Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**2 settled games** · 11 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 2 | 0.5729 | 0.1959 | 50.0% |
| Home −1.5 | 2 | 0.2861 | 0.0699 | — |
| Away −1.5 | 2 | 0.4546 | 0.1398 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 1 | 26.8% | 0.0% |
| 0.5-0.6 | 1 | 56.6% | 0.0% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-02 | CGY @ SJS | 56.6% | 2–1 | [1bf08eb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1bf08eb197d0727e2cee6341096a95c5a57bde55) |
| 2026-11-02 | COL @ CHI | 26.8% | 5–2 | [1bf08eb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/1bf08eb197d0727e2cee6341096a95c5a57bde55) |

_Model estimates. Not financial, legal or betting advice._
