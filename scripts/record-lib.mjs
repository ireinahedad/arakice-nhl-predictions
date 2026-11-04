// record-lib.mjs — pure logic of the public track record (no I/O, no dependencies).
//
// Kept identical to the API's `/v1/nhl/results` (server `format.ts`): same
// clipping (1e-6), same rounding, same 10 calibration bins, same settlement
// rules. If the two ever disagree, this repository is the reference: anyone
// can re-run it from the git history.

export const EPS = 1e-6;
const r4 = (x) => Math.round(x * 1e4) / 1e4;
const r5 = (x) => Math.round(x * 1e5) / 1e5;

/**
 * Whether a published game counts in the record.
 * Rule: the commit that added the day's file must precede the scheduled puck
 * drop, and the file must never have been changed after that commit.
 */
export function eligibility(game, file) {
  if (file.commits !== 1) return { ok: false, reason: 'file_modified_after_publication' };
  const start = Date.parse(game.startTimeUTC);
  const committed = Date.parse(file.committedAt);
  if (!Number.isFinite(start) || !Number.isFinite(committed)) return { ok: false, reason: 'bad_timestamp' };
  if (committed >= start) return { ok: false, reason: 'committed_after_start' };
  return { ok: true };
}

const FINAL_STATES = new Set(['OFF', 'FINAL']);
const VOID_SCHEDULE = new Set(['PPD', 'CNCL', 'SUSP']);

/** One game from the public NHL score endpoint → compact, cached form. */
export function compactResult(g) {
  return {
    gameId: String(g.id),
    home: g.homeTeam?.abbrev ?? null,
    away: g.awayTeam?.abbrev ?? null,
    state: VOID_SCHEDULE.has(g.gameScheduleState) ? 'void' : FINAL_STATES.has(g.gameState) ? 'final' : 'pending',
    homeScore: Number.isInteger(g.homeTeam?.score) ? g.homeTeam.score : null,
    awayScore: Number.isInteger(g.awayTeam?.score) ? g.awayTeam.score : null,
    lastPeriodType: g.gameOutcome?.lastPeriodType ?? null,
  };
}

/**
 * Settles a published game against its result.
 * - homeWin: home final score > away final score (overtime and shootout included;
 *   the NHL counts the shootout winner as one goal, e.g. 5-4).
 * - homeMinus1_5 / awayMinus1_5: winning margin of 2 or more on the final score
 *   (a shootout game is always a one-goal margin).
 */
export function settle(game, result) {
  if (!result) return { status: 'pending' };
  if (result.state === 'void') return { status: 'void', reason: 'postponed_or_cancelled' };
  if (result.state !== 'final' || result.homeScore == null || result.awayScore == null) return { status: 'pending' };
  if (result.home !== game.home || result.away !== game.away) return { status: 'void', reason: 'teams_mismatch' };
  const diff = result.homeScore - result.awayScore;
  return {
    status: 'settled',
    homeScore: result.homeScore,
    awayScore: result.awayScore,
    lastPeriodType: result.lastPeriodType,
    outcomes: { homeWin: diff > 0, homeMinus1_5: diff >= 2, awayMinus1_5: diff <= -2 },
  };
}

export function metric(pairs) {
  if (pairs.length === 0) return { n: 0, logLoss: null, brier: null };
  let ll = 0, br = 0;
  for (const [p0, y] of pairs) {
    const p = Math.min(1 - EPS, Math.max(EPS, p0));
    ll += -(y ? Math.log(p) : Math.log(1 - p));
    br += (p - (y ? 1 : 0)) ** 2;
  }
  const n = pairs.length;
  return { n, logLoss: r5(ll / n), brier: r5(br / n) };
}

export function calibration(pairs) {
  const bins = Array.from({ length: 10 }, () => ({ n: 0, sumP: 0, wins: 0 }));
  for (const [p, y] of pairs) {
    const b = bins[Math.min(9, Math.floor(p * 10))];
    b.n++; b.sumP += p; if (y) b.wins++;
  }
  return bins.flatMap((b, i) => (b.n === 0 ? [] : [{
    bin: `${(i / 10).toFixed(1)}-${((i + 1) / 10).toFixed(1)}`,
    n: b.n,
    meanPredicted: r4(b.sumP / b.n),
    observed: r4(b.wins / b.n),
  }]));
}

/** Summary over settled rows `{ probabilities, outcomes }`. No odds, no returns. */
export function summarize(rows) {
  const pairs = (key) => rows.flatMap((r) => (typeof r.probabilities[key] === 'number' ? [[r.probabilities[key], r.outcomes[key]]] : []));
  const win = pairs('homeWin');
  const correct = win.filter(([p, y]) => (p >= 0.5) === y).length;
  return {
    games: rows.length,
    homeWin: { ...metric(win), accuracy: win.length ? r4(correct / win.length) : null },
    homeMinus1_5: metric(pairs('homeMinus1_5')),
    awayMinus1_5: metric(pairs('awayMinus1_5')),
    calibrationHomeWin: calibration(win),
    // Reference points that need no market data: a constant 50% forecast.
    reference: { coinFlipLogLoss: r5(Math.log(2)), coinFlipBrier: 0.25 },
  };
}

const pct = (x) => (x == null ? '—' : `${(x * 100).toFixed(1)}%`);
const num = (x, d = 4) => (x == null ? '—' : x.toFixed(d));

/** RECORD.md, generated. Plain English, no betting language. */
export function renderMarkdown(record, repoUrl) {
  const s = record.summary;
  const lines = [
    '# Track record',
    '',
    `Generated ${record.generatedAt} by \`scripts/build-record.mjs\` from this repository's git history and the public NHL score feed. Do not edit by hand.`,
    '',
    `**${s.games} settled games** · ${record.counts.pending} pending · ${record.counts.void} void · ${record.counts.notEligible} not eligible (see \`record.json\`).`,
    '',
    '| Market | Games | Log-loss | Brier | Accuracy |',
    '|---|---:|---:|---:|---:|',
    `| Home win | ${s.homeWin.n} | ${num(s.homeWin.logLoss)} | ${num(s.homeWin.brier)} | ${pct(s.homeWin.accuracy)} |`,
    `| Home −1.5 | ${s.homeMinus1_5.n} | ${num(s.homeMinus1_5.logLoss)} | ${num(s.homeMinus1_5.brier)} | — |`,
    `| Away −1.5 | ${s.awayMinus1_5.n} | ${num(s.awayMinus1_5.logLoss)} | ${num(s.awayMinus1_5.brier)} | — |`,
    '',
    `Lower log-loss and Brier are better. For reference, a constant 50% forecast scores log-loss ${num(s.reference.coinFlipLogLoss)} and Brier ${num(s.reference.coinFlipBrier)}.`,
    '',
    '## Calibration (home win)',
    '',
    'When the model says 60–70%, the home team should win about 60–70% of the time.',
    '',
    '| Predicted | Games | Mean predicted | Observed |',
    '|---|---:|---:|---:|',
    ...s.calibrationHomeWin.map((b) => `| ${b.bin} | ${b.n} | ${pct(b.meanPredicted)} | ${pct(b.observed)} |`),
    ...(s.calibrationHomeWin.length ? [] : ['| — | 0 | — | — |']),
    '',
    '## Latest settled games',
    '',
    '| Date | Game | P(home win) | Final | Proof |',
    '|---|---|---:|---|---|',
    ...record.games.slice(0, 30).map((g) => `| ${g.date} | ${g.away} @ ${g.home} | ${pct(g.probabilities.homeWin)} | ${g.awayScore}–${g.homeScore}${g.lastPeriodType && g.lastPeriodType !== 'REG' ? ` (${g.lastPeriodType})` : ''} | [${g.commit.slice(0, 7)}](${repoUrl}/commit/${g.commit}) |`),
    ...(record.games.length ? [] : ['| — | — | — | — | — |']),
    '',
    '_Model estimates. Not financial, legal or betting advice._',
    '',
  ];
  return lines.join('\n');
}
