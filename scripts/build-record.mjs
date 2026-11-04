#!/usr/bin/env node
// build-record.mjs — rebuilds RECORD.md and record.json from scratch.
//
//   node scripts/build-record.mjs            # from the repository root, Node >= 20, no install
//   node scripts/build-record.mjs --offline  # use cached results only (no network)
//
// Inputs, both public:
//   • data/YYYY/YYYY-MM-DD.json — probabilities published each morning, and the
//     git history of each file. A commit date is written by whoever commits, so it is
//     a claim; the independent evidence is GitHub's push log (README, "Verify");
//   • final scores from the public NHL feed, https://api-web.nhle.com/v1/score/YYYY-MM-DD,
//     cached in results/ so the record can be rebuilt offline.
//
// A game counts only if the commit that added its file precedes the scheduled
// puck drop and the file was never modified afterwards (rules in record-lib.mjs).
// Needs the full history: `git clone` (not a shallow clone or a zip download).

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { compactResult, eligibility, renderMarkdown, settle, summarize } from './record-lib.mjs';

const ROOT = process.cwd();
const OFFLINE = process.argv.includes('--offline');
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const etToday = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });

const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

function repoUrl() {
  if (process.env.GITHUB_REPOSITORY) return `https://github.com/${process.env.GITHUB_REPOSITORY}`;
  try {
    const u = git('remote', 'get-url', 'origin');
    const m = u.match(/github\.com[:/](.+?)(\.git)?$/);
    if (m) return `https://github.com/${m[1]}`;
  } catch { /* no remote */ }
  return 'https://github.com/ireinahedad/arakice-nhl-predictions';
}

function dataFiles() {
  const dir = join(ROOT, 'data');
  if (!existsSync(dir)) return [];
  const out = [];
  for (const y of readdirSync(dir).sort()) {
    const yd = join(dir, y);
    for (const f of readdirSync(yd).sort()) if (/^\d{4}-\d{2}-\d{2}\.json$/.test(f)) out.push(join(yd, f));
  }
  return out;
}

/** The commits that touched a file: how many, and the oldest (the publication). */
function history(path) {
  const rel = relative(ROOT, path).split('\\').join('/');
  const lines = git('log', '--format=%H %cI', '--', rel).split('\n').filter(Boolean);
  if (lines.length === 0) return null; // not committed yet
  const [commit, committedAt] = lines[lines.length - 1].split(' ');
  return { commit, committedAt, commits: lines.length };
}

async function results(date) {
  const file = join(ROOT, 'results', date.slice(0, 4), `${date}.json`);
  if (existsSync(file)) return JSON.parse(readFileSync(file, 'utf8')).games;
  if (OFFLINE || date >= etToday()) return null;
  const res = await fetch(`https://api-web.nhle.com/v1/score/${date}`, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`NHL score feed ${date}: HTTP ${res.status}`);
  const games = ((await res.json()).games ?? []).map(compactResult);
  // Cache only once every game of the day is decided: a pending game is fetched again tomorrow.
  if (games.every((g) => g.state !== 'pending')) {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `${JSON.stringify({ date, source: 'https://api-web.nhle.com/v1/score/' + date, games }, null, 2)}\n`);
  }
  return games;
}

async function main() {
  try { git('rev-parse', '--is-inside-work-tree'); } catch { throw new Error('Run inside a git clone (the record is proved by git history).'); }
  if (git('rev-parse', '--is-shallow-repository') === 'true') throw new Error('Shallow clone: run `git fetch --unshallow` first.');

  const settled = [], notEligible = [], voided = [], pending = [];
  for (const path of dataFiles()) {
    const doc = JSON.parse(readFileSync(path, 'utf8'));
    if (!DATE_RE.test(doc.date ?? '')) continue;
    const file = history(path);
    if (!file) continue; // written but not committed yet
    const byId = new Map(((await results(doc.date)) ?? []).map((g) => [g.gameId, g]));
    for (const g of doc.games ?? []) {
      const base = { date: doc.date, gameId: String(g.gameId), home: g.home, away: g.away, startTimeUTC: g.startTimeUTC };
      const el = eligibility(g, file);
      if (!el.ok) { notEligible.push({ ...base, reason: el.reason }); continue; }
      const s = settle(g, byId.get(String(g.gameId)));
      if (s.status === 'pending') { pending.push(base); continue; }
      if (s.status === 'void') { voided.push({ ...base, reason: s.reason }); continue; }
      settled.push({
        ...base,
        committedAt: file.committedAt,
        commit: file.commit,
        probabilities: {
          homeWin: g.probabilities?.homeWin ?? null,
          homeMinus1_5: g.probabilities?.homeMinus1_5 ?? null,
          awayMinus1_5: g.probabilities?.awayMinus1_5 ?? null,
        },
        homeScore: s.homeScore, awayScore: s.awayScore, lastPeriodType: s.lastPeriodType,
        outcomes: s.outcomes,
      });
    }
  }
  settled.sort((a, b) => b.startTimeUTC.localeCompare(a.startTimeUTC) || a.gameId.localeCompare(b.gameId));

  const url = repoUrl();
  const record = {
    generatedAt: new Date().toISOString(),
    publisher: 'ArakIce',
    rules: 'A game counts if the commit adding its file precedes the scheduled start and the file was never modified. Results: public NHL score feed.',
    counts: { settled: settled.length, pending: pending.length, void: voided.length, notEligible: notEligible.length },
    summary: summarize(settled),
    games: settled,
    notEligible, void: voided, pending,
    disclaimer: 'Model estimates. Not financial, legal or betting advice.',
  };
  writeFileSync(join(ROOT, 'record.json'), `${JSON.stringify(record, null, 2)}\n`);
  writeFileSync(join(ROOT, 'RECORD.md'), renderMarkdown(record, url));
  console.log(`record: ${settled.length} settled, ${pending.length} pending, ${voided.length} void, ${notEligible.length} not eligible`);
}

main().catch((err) => { console.error(`[record] ${err.message}`); process.exit(1); });
