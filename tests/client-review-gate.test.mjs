import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { loadGuardrails } from '../skills/task-first-frontend/scripts/guardrails.mjs';

const skill = fileURLToPath(new URL('../skills/task-first-frontend/', import.meta.url));
const gate = path.join(skill, 'scripts/gate.mjs');
const stateDoc = 'verification/references/state-design.md';
const reviewDoc = 'verification/references/client-runtime-review.md';
const docs = [
  'work-folder.md', 'reading-and-delegation.md', 'discovery-and-tasks.md',
  'guardrails/SKILL.source.md', 'guardrails/references/method.md', stateDoc,
  'audit-and-research.md', 'guides/01-good-ui-ux-reference-guide.md',
  'guides/02-no-ai-slop-mobile-web-ui-ux.md', 'design-and-ideation.md', 'anti-slop.md',
  'guardrails/references/rules-foundations.md', 'guardrails/references/rules-patterns.md',
  'guardrails/references/standards-and-scope.md', 'verification/SKILL.source.md',
  reviewDoc, 'implementation-and-validation.md', 'verification/references/browser-evidence.md',
  'guardrails/references/rules-technologies.md', 'verification/references/usability-review.md',
];
const uiIds = Array.from({ length: 8 }, (_, i) => 'UI-0' + (i + 1));

function fixture(t, { review = 'changes', reason = 'Save request handling', scope = 'small-fix',
                      omitDoc, omitUi, verdict = 'UNVERIFIED', expected = 'Only B remains selected',
                      evidence = 'Reverse the two responses', applies = 'required', payment = false } = {}) {
  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'task-first-review-test-'));
  t.after(() => {
    assert.equal(path.dirname(work), path.resolve(os.tmpdir()));
    fs.rmSync(work, { recursive: true, force: true });
  });
  const write = (name, value) => fs.writeFileSync(path.join(work, name), value);
  const files = ['SKILL.md', ...docs.filter(doc => doc !== omitDoc).map(doc => 'references/' + doc)];
  const ledger = files.map(file => {
    const fullPath = path.join(skill, file);
    const count = fs.readFileSync(fullPath, 'utf8').replace(/\n$/, '').split('\n').length;
    return `| ${fullPath} | ${count} | ${count} | Synthetic fixture |`;
  });
  write('reading-ledger.md', ['| path | total_lines | last_line_read | method |', '| --- | --- | --- | --- |', ...ledger].join('\n'));
  const catalog = [...loadGuardrails(skill).keys()];
  const excluded = catalog.filter(id => id !== 'F-01' && !(payment && ['T-16', 'T-17'].includes(id)));
  write('00-contract.md', [
    '```gate', 'widths: 1', 'widths_reason: test fixture', 'screens: form', 'tasks: T1',
    'existing_ui: yes', 'ref_tags: screens', 'scope: ' + scope, 'client_review: ' + review,
    'client_review_reason: ' + reason, 'guardrail_topics: design-principles' + (payment ? ', payment' : ''), '```',
    ...['people', 'journey', 'ideal', 'fixed case', 'states'].map(s => '## ' + s + '\nSave form fixture'),
    '| rule_id | applicability | reason |', '| --- | --- | --- |',
    '| F-01 | design | The person must find the first action |',
    ...(payment ? ['| T-16 | design | Order total before payment |', '| T-17 | runtime | Confirm settlement |'] : []),
    `| ${excluded.join(', ')} | no | Outside this synthetic scope |`,
  ].join('\n'));
  const pixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aS64AAAAASUVORK5CYII=', 'base64');
  for (const [dir, prefix] of [['01-before', 'before'], ['05-after', 'after']]) {
    fs.mkdirSync(path.join(work, dir));
    write(dir + '/' + prefix + '-form-1.png', pixel);
  }
  const ruleDir = path.join(skill, 'references/guardrails/references');
  const requiredIds = fs.readdirSync(ruleDir).filter(name => name.startsWith('rules-')).flatMap(name =>
    [...fs.readFileSync(path.join(ruleDir, name), 'utf8').matchAll(/^- \[([FP]-\d{2})\]/gm)].map(match => match[1]));
  const rows = ['| rule_id | applies | expected | evidence | verdict | method | proof |', '| --- | --- | --- | --- | --- | --- | --- |',
    `| ${requiredIds.filter(id => id !== 'F-01').join(', ')} | no | | Outside this fixture | N/A | | |`,
    '| F-01 | required | Save action visible | Save button visible at entry | PASS | usability-review.md | 05-after/after-form-1.png |'];
  if (payment) rows.push(
    '| T-16 | required | Total visible | Total shown above pay button | PASS | usability-review.md | 05-after/after-form-1.png |',
    '| T-17 | required | Decline offers retry | Simulate a decline | UNVERIFIED | browser-evidence.md | |');
  if (review !== 'none') {
    rows.push(`| UI-02 | ${applies} | ${expected} | ${evidence} | ${verdict} |`);
    const otherIds = uiIds.filter(id => id !== 'UI-02' && id !== omitUi);
    rows.push(`| ${otherIds.join(', ')} | no | | Outside this fixture | N/A |`);
  }
  write('04-verdicts.md', rows.join('\n'));
  return work;
}

function check(work, stage, failure) {
  const run = spawnSync(process.execPath, [gate, work, '--stage', String(stage)], { encoding: 'utf8' });
  assert.equal(run.status, failure ? 1 : 0, run.stdout + run.stderr);
  if (failure) assert.match(run.stdout, failure);
}

test('S1 requires the state design ledger entry and an explicit review decision', t => {
  check(fixture(t, { omitDoc: stateDoc }), 1, /required reading for S1.*state-design\.md/);
  check(fixture(t, { review: '' }), 1, /set client_review in 00-contract/);
  check(fixture(t, { review: 'none', reason: '' }), 1, /set client_review_reason/);
  check(fixture(t, { scope: 'design-only' }), 1, /design-only cannot verify implementation/);
  check(fixture(t, { scope: 'design-only', review: 'existing' }), 1);
});

test('copy-only changes pass S6 without runtime reading or UI rows', t => {
  check(fixture(t, { review: 'none', reason: 'Button wording only', omitDoc: reviewDoc }), 6);
});

test('S5 requires the review document, eight decisions and expectations for changed behavior', t => {
  check(fixture(t, { omitDoc: reviewDoc }), 5, /required reading for S5.*client-runtime-review/);
  check(fixture(t, { omitUi: 'UI-08' }), 5, /missing client review rows: UI-08/);
  check(fixture(t, { expected: '' }), 5, /expected behavior/);
  check(fixture(t, { applies: 'optional' }), 5, /use required for applicable UI rules/);
});

test('existing code is judged at S5', t => {
  check(fixture(t, { review: 'existing' }), 5, /completion blocked.*UI-02/);
  check(fixture(t, { review: 'existing', verdict: 'PASS', expected: '', evidence: 'Source trace confirms the request ID guard' }), 5);
});

test('a plan passes S5 only; S6 requires a final verdict with evidence', t => {
  const pending = fixture(t);
  check(pending, 5);
  check(pending, 6, /\[S6\] FAIL.*post-change evidence for: UI-02/);
  const table = path.join(pending, '04-verdicts.md');
  const plan = fs.readFileSync(table, 'utf8');
  fs.writeFileSync(table, plan.replace('Reverse the two responses | UNVERIFIED', ' | PASS'));
  check(pending, 6, /PASS needs evidence/);
  fs.writeFileSync(table, plan.replace('Reverse the two responses | UNVERIFIED', 'Observed B after late A | PASS'));
  check(pending, 6);
});

function edit(work, name, from, to) {
  const file = path.join(work, name);
  const original = fs.readFileSync(file, 'utf8');
  const changed = original.replace(from, to);
  assert.notEqual(changed, original);
  fs.writeFileSync(file, changed);
}

test('S1 accounts for all 190 rules, checks declared topics and reads selected rulebooks', t => {
  const options = { payment: true, review: 'none' };
  const w = fixture(t, options);
  check(w, 1);
  check(fixture(t, { ...options, omitDoc: 'guardrails/references/rules-technologies.md' }), 1, /required reading for S1.*rules-technologies/);
  edit(w, '00-contract.md', '| T-17 | runtime', '| T-17 | no');
  check(w, 1, /T-17: declared topic applies/);
  edit(w, '00-contract.md', '| T-17 | no', '| T-17 | exception');
  check(w, 1);
  edit(w, '00-contract.md', /\| T-17 \| exception[^\n]+\n/, '');
  check(w, 1, /missing guardrail decisions: T-17/);
});

test('the draft includes every source ID once and leaves applicability for the agent', () => {
  const draft = spawnSync(process.execPath, [path.join(skill, 'scripts/guardrails.mjs')], { encoding: 'utf8' });
  assert.equal(draft.status, 0, draft.stderr);
  const ids = draft.stdout.match(/\b[FPCIT]-\d{2}\b/g);
  assert.equal(ids.length, 190);
  assert.deepEqual(new Set(ids), new Set(loadGuardrails(skill).keys()));
  assert.ok(draft.stdout.split('\n').slice(2).filter(Boolean).every(line => line.includes('| unknown |')));
});

test('unresolved scope can be recorded at S1 but cannot silently become N/A or pass implementation', t => {
  const w = fixture(t, { payment: true, review: 'none' });
  edit(w, '00-contract.md', '| T-17 | runtime', '| T-17 | unknown');
  check(w, 1);
  check(w, 6, /completion blocked: required row\(s\) UNVERIFIED: T-17/);
  edit(w, '04-verdicts.md', '| T-17 | required', '| T-17 | no');
  check(w, 5, /unresolved scope requires required\/UNVERIFIED/);
});

test('S5 checks scope against verdicts, method files and evidence', t => {
  const options = { payment: true, review: 'none' };
  check(fixture(t, { ...options, omitDoc: 'verification/references/usability-review.md' }), 5, /required reading for S5.*usability-review/);
  const w = fixture(t, options);
  check(w, 5);
  edit(w, '04-verdicts.md', '| T-17 | required', '| T-17 | no');
  check(w, 5, /verdict disagrees with S1 applicability for T-17/);
  edit(w, '04-verdicts.md', /\| T-17 \| no[^\n]+/, '');
  check(w, 5, /missing scoped rules: T-17/);
  edit(w, '04-verdicts.md', 'usability-review.md', 'invented-review.md');
  check(w, 5, /select a verification method/);
});

test('S6 rejects planned payment checks and design-only evidence; S7 preserves the links', t => {
  const w = fixture(t, { payment: true, review: 'none' });
  check(w, 6, /\[S6\] FAIL T-17: S6 needs PASS/);
  const line = 'Simulate a decline | UNVERIFIED | browser-evidence.md | |';
  const proof = 'Decline and retry observed | PASS | browser-evidence.md | ';
  edit(w, '04-verdicts.md', line, proof + '01-before/before-form-1.png |');
  check(w, 6, /\[S6\] FAIL T-17: S6 needs PASS/);
  edit(w, '04-verdicts.md', proof + '01-before/before-form-1.png', proof + '05-after/payment.log');
  check(w, 6, /PASS requires a proof file/);
  fs.writeFileSync(path.join(w, '05-after/payment.log'), 'synthetic declined order, then successful retry');
  check(w, 6);
  fs.writeFileSync(path.join(w, '06-report.md'), [
    '[case](00-contract.md)', '[branch](https://github.com/example/example/tree/test)',
    '![before](01-before/before-form-1.png)', '![after](05-after/after-form-1.png)',
  ].join('\n'));
  check(w, 7, /link to 04-verdicts.md/);
  fs.appendFileSync(path.join(w, '06-report.md'), '\n[results](04-verdicts.md)');
  check(w, 7);
});

test('normal redesign traces a payment rule through alternatives, selection, verification and report', t => {
  if (spawnSync('ffmpeg', ['-version']).status !== 0) return t.skip('comparison board rendering needs FFmpeg');
  const w = fixture(t, { payment: true, review: 'changes', verdict: 'PASS', evidence: 'Request guard verified' });
  const sample = fs.readFileSync(new URL('../docs/images/hypothesis-comparison.png', import.meta.url));
  const width = sample.readUInt32BE(16);
  const save = (name, data) => fs.writeFileSync(path.join(w, name), data);
  edit(w, '00-contract.md', 'scope: small-fix', 'scope: implement\nalternatives: 2\nalternatives_reason: compare two variants\nalt_source: imagegen');
  edit(w, '00-contract.md', 'ref_tags: screens', 'ref_tags: paywall');
  edit(w, '00-contract.md', 'widths: 1', 'widths: ' + width);
  for (const [dir, prefix] of [['01-before', 'before'], ['05-after', 'after']]) {
    fs.unlinkSync(path.join(w, dir, prefix + '-form-1.png'));
    save(`${dir}/${prefix}-form-${width}.png`, sample);
  }
  edit(w, '04-verdicts.md', /after-form-1.png/g, `after-form-${width}.png`);
  for (const dir of ['02-refs', '03-alts/boards']) fs.mkdirSync(path.join(w, dir), { recursive: true });
  const index = ['| file | url | captured_at | platform | product | task | part | principle | not_borrowed |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- |'];
  for (const [i, host] of ['screensdesign.com', 'example.org', 'example.org'].entries()) {
    save(`02-refs/ref-${i}.png`, sample);
    index.push(`| ref-${i}.png | https://${host}/${i} | 2026-11-25 | web | fixture | T1 | total | hierarchy | brand |`);
  }
  index.push('', '| site | status | reason |', '| --- | --- | --- |', '| ScreensDesign | visited | fixture |');
  save('02-refs/INDEX.md', index.join('\n'));
  const boardFile = '03-alts/boards/board.md';
  const board = ['| alt | element | ref_file | ref_crop | alt_crop | 가져온 것 | 바꾼 것 |',
    '| --- | --- | --- | --- | --- | --- | --- |'];
  for (const alt of ['a', 'b']) {
    save(`03-alts/alt-${alt}-${width}.png`, sample);
    board.push(`| ${alt} | total | ref-0.png | 0,0,32,32 | 0,0,32,32 | alignment | labels |`);
  }
  board.push('', '| alt | check | result |', '| --- | --- | --- |');
  for (const alt of ['a', 'b']) for (let i = 1; i <= 5; i++) board.push(`| ${alt} | AS-${i} | PASS |`);
  board.push('', '| rule_id | alt | decision |', '| --- | --- | --- |',
    '| F-01, T-16 | all | Show order total before approval |', '| T-17 | a | Reserve space for decline and retry |');
  save(boardFile, board.join('\n'));
  const compose = spawnSync(process.execPath, [path.join(skill, 'scripts/compose.mjs'), w, 'all'], { encoding: 'utf8' });
  assert.equal(compose.status, 0, compose.stderr);
  check(w, 4, /alternative b missing design decisions for T-17/);
  edit(w, boardFile, '| T-17 | a |', '| T-17 | all |');
  check(w, 4);
  check(w, 5, /selected alternative id/);
  edit(w, '00-contract.md', 'scope: implement', 'scope: implement\nselected_alt: b');
  check(w, 5);
  const report = ['[contract](00-contract.md)', '[designs](03-alts/boards/board.md)', '[checks](04-verdicts.md)',
    '[branch](https://github.com/example/example/tree/test)', `![before](01-before/before-form-${width}.png)`];
  for (const alt of ['a', 'b']) report.push(`![board](03-alts/boards/board-${alt}.png)`, `![comparison](03-alts/compare/compare-${alt}-${width}.png)`);
  save('06-report.md', report.join('\n'));
  edit(w, '00-contract.md', 'scope: implement', 'scope: design-only');
  edit(w, '00-contract.md', 'client_review: changes', 'client_review: existing');
  check(w, 7);
  edit(w, '00-contract.md', 'scope: design-only', 'scope: implement');
  edit(w, '00-contract.md', 'client_review: existing', 'client_review: changes');
  check(w, 6, /T-17: S6 needs PASS/);
  save('05-after/payment.log', 'Fixture: decline shown, order unpaid, retry available');
  edit(w, '04-verdicts.md', 'Simulate a decline | UNVERIFIED | browser-evidence.md | |',
    'Order remained unpaid after decline | PASS | browser-evidence.md | 05-after/payment.log |');
  fs.appendFileSync(path.join(w, '06-report.md'), `\n![after](05-after/after-form-${width}.png)`);
  check(w, 7);
});
