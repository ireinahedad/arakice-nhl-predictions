// node --test scripts/   (Node >= 20, no install)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calibration, compactResult, eligibility, metric, renderMarkdown, settle, summarize } from './record-lib.mjs';

const game = { gameId: '2026020219', home: 'NSH', away: 'TBL', startTimeUTC: '2026-10-31T18:00:00Z',
  probabilities: { homeWin: 0.55, homeMinus1_5: 0.25, awayMinus1_5: 0.15 } };

test('eligibility: committed before puck drop, file never modified', () => {
  assert.deepEqual(eligibility(game, { commits: 1, committedAt: '2026-10-31T15:02:00Z' }), { ok: true });
  assert.equal(eligibility(game, { commits: 1, committedAt: '2026-10-31T18:00:00Z' }).reason, 'committed_after_start');
  assert.equal(eligibility(game, { commits: 2, committedAt: '2026-10-31T15:02:00Z' }).reason, 'file_modified_after_publication');
  assert.equal(eligibility({ ...game, startTimeUTC: 'x' }, { commits: 1, committedAt: '2026-10-31T15:02:00Z' }).reason, 'bad_timestamp');
});

// Real shapes from https://api-web.nhle.com/v1/score/2026-10-31 (TBL 4 @ NSH 5, shootout).
const nhl = (over = {}) => ({ id: 2026020219, gameState: 'OFF', gameScheduleState: 'OK',
  homeTeam: { abbrev: 'NSH', score: 5 }, awayTeam: { abbrev: 'TBL', score: 4 }, gameOutcome: { lastPeriodType: 'SO' }, ...over });

test('compactResult: final, void, pending', () => {
  assert.deepEqual(compactResult(nhl()), { gameId: '2026020219', home: 'NSH', away: 'TBL', state: 'final', homeScore: 5, awayScore: 4, lastPeriodType: 'SO' });
  assert.equal(compactResult(nhl({ gameScheduleState: 'PPD' })).state, 'void');
  assert.equal(compactResult(nhl({ gameState: 'LIVE' })).state, 'pending');
  assert.equal(compactResult(nhl({ gameState: 'FUT', homeTeam: { abbrev: 'NSH' }, awayTeam: { abbrev: 'TBL' } })).homeScore, null);
});

test('settle: shootout win counts as a win, never as a -1.5 cover', () => {
  const s = settle(game, compactResult(nhl()));
  assert.equal(s.status, 'settled');
  assert.deepEqual(s.outcomes, { homeWin: true, homeMinus1_5: false, awayMinus1_5: false });
  const big = settle(game, compactResult(nhl({ homeTeam: { abbrev: 'NSH', score: 1 }, awayTeam: { abbrev: 'TBL', score: 4 }, gameOutcome: { lastPeriodType: 'REG' } })));
  assert.deepEqual(big.outcomes, { homeWin: false, homeMinus1_5: false, awayMinus1_5: true });
});

test('settle: pending, void, teams mismatch', () => {
  assert.equal(settle(game, undefined).status, 'pending');
  assert.equal(settle(game, compactResult(nhl({ gameState: 'LIVE' }))).status, 'pending');
  assert.equal(settle(game, compactResult(nhl({ gameScheduleState: 'CNCL' }))).reason, 'postponed_or_cancelled');
  assert.equal(settle({ ...game, home: 'TBL', away: 'NSH' }, compactResult(nhl())).reason, 'teams_mismatch');
});

test('metric and calibration match the API formulas', () => {
  assert.deepEqual(metric([]), { n: 0, logLoss: null, brier: null });
  const m = metric([[0.5, true], [0.5, false]]);
  assert.equal(m.logLoss, Math.round(Math.log(2) * 1e5) / 1e5);
  assert.equal(m.brier, 0.25);
  assert.ok(Number.isFinite(metric([[0, true]]).logLoss)); // clipped, not Infinity
  assert.deepEqual(calibration([[0.62, true], [0.68, false], [1, true]]), [
    { bin: '0.6-0.7', n: 2, meanPredicted: 0.65, observed: 0.5 },
    { bin: '0.9-1.0', n: 1, meanPredicted: 1, observed: 1 },
  ]);
});

test('summarize skips missing puck-line numbers, renderMarkdown has no betting words', () => {
  const rows = [
    { probabilities: { homeWin: 0.6, homeMinus1_5: 0.3, awayMinus1_5: 0.1 }, outcomes: { homeWin: true, homeMinus1_5: true, awayMinus1_5: false } },
    { probabilities: { homeWin: 0.4, homeMinus1_5: null, awayMinus1_5: null }, outcomes: { homeWin: true, homeMinus1_5: false, awayMinus1_5: false } },
  ];
  const s = summarize(rows);
  assert.equal(s.homeWin.n, 2);
  assert.equal(s.homeWin.accuracy, 0.5);
  assert.equal(s.homeMinus1_5.n, 1);
  const md = renderMarkdown({ generatedAt: 'now', counts: { pending: 0, void: 0, notEligible: 0 }, summary: s,
    games: [{ date: '2026-10-31', home: 'NSH', away: 'TBL', probabilities: { homeWin: 0.55 }, homeScore: 5, awayScore: 4, lastPeriodType: 'SO', commit: 'a'.repeat(40) }] },
  'https://github.com/x/y');
  assert.match(md, /TBL @ NSH \| 55\.0% \| 4–5 \(SO\)/);
  for (const w of [/profit/i, /\broi\b/i, /beat the market/i, /\bstake\b/i, /guarantee/i, /iceedge/i]) assert.doesNotMatch(md, w);
});
