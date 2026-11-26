# Track record

Generated 2026-11-26T21:38:32.036Z by `scripts/build-record.mjs` from this repository's git history and the public NHL score feed. Do not edit by hand.

**148 settled games** · 0 pending · 0 void · 0 not eligible (see `record.json`).

| Market | Games | Log-loss | Brier | Accuracy |
|---|---:|---:|---:|---:|
| Home win | 148 | 0.6850 | 0.2455 | 56.8% |
| Home −1.5 | 148 | 0.5554 | 0.1856 | — |
| Away −1.5 | 148 | 0.5863 | 0.2001 | — |

Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss 0.6932 and Brier 0.2500.

## Calibration (home win)

When the model says 60–70%, the home team should win about 60–70% of the time.

| Predicted | Games | Mean predicted | Observed |
|---|---:|---:|---:|
| 0.2-0.3 | 2 | 28.3% | 50.0% |
| 0.3-0.4 | 11 | 34.8% | 18.2% |
| 0.4-0.5 | 39 | 44.9% | 35.9% |
| 0.5-0.6 | 53 | 54.2% | 45.3% |
| 0.6-0.7 | 29 | 64.2% | 58.6% |
| 0.7-0.8 | 11 | 73.1% | 54.5% |
| 0.8-0.9 | 3 | 81.8% | 66.7% |

## Latest settled games

| Date | Game | P(home win) | Final | Proof |
|---|---|---:|---|---|
| 2026-11-25 | SJS @ ANA | 63.4% | 0–7 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | CHI @ SEA | 57.5% | 3–1 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | MTL @ COL | 58.5% | 0–6 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | NSH @ DAL | 61.3% | 3–1 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | UTA @ MIN | 58.9% | 4–3 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | VAN @ DET | 70.6% | 1–5 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | WPG @ BOS | 60.1% | 4–2 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | NYR @ BUF | 51.2% | 1–5 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | CAR @ TBL | 51.3% | 3–1 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | OTT @ FLA | 46.5% | 3–5 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | STL @ NYI | 50.4% | 2–3 (SO) | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | CGY @ PIT | 60.6% | 6–3 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | PHI @ WSH | 61.7% | 3–7 | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
| 2026-11-25 | NJD @ CBJ | 44.9% | 3–2 (SO) | [ca4d9fb](https://github.com/ireinahedad/arakice-nhl-predictions/commit/ca4d9fb054cb239d00ef6d3963cbd7e2eb08b813) |
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

_Model estimates. Not financial, legal or betting advice._
