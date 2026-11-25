import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { clean, findTable, isEmpty, isFile, parseTables } from './lib.mjs';

const groups = ['foundations', 'patterns', 'components', 'inputs', 'technologies'];
const split = value => value.split(/[,\s]+/).filter(Boolean);

export function loadGuardrails(skill) {
  const rules = new Map();
  for (const group of groups) {
    const doc = `references/guardrails/references/rules-${group}.md`;
    const content = fs.readFileSync(path.join(skill, doc), 'utf8');
    for (const match of content.matchAll(/^- \[([FPCIT]-\d{2})\].*? Source: (.*?)\. Why:/gm)) {
      const topics = [...match[2].matchAll(/human-interface-guidelines\/([\w-]+)/g)].map(m => m[1]);
      if (!topics.length || rules.has(match[1])) throw new Error(`invalid guardrail definition: ${match[1]} in ${doc}`);
      rules.set(match[1], { doc, topics });
    }
  }
  if (rules.size !== 190) throw new Error(`expected 190 published guardrails, parsed ${rules.size}`);
  return rules;
}

export function readScope(md, topicKeys, rules, fail) {
  const scope = new Map();
  const table = findTable(parseTables(md), ['rule_id', 'applicability', 'reason']);
  if (!table) {
    fail('00-contract.md: add the S1 rule_id | applicability | reason table (including when resuming an older contract)');
    return scope;
  }
  // Topic keys come from the HIG source URLs. Payment also covers ordinary web checkout.
  const topics = new Set(split(topicKeys || '').map(key => key === 'payment' ? 'apple-pay' : key));
  if (!topics.size) fail('00-contract.md: declare guardrail_topics for the actual task');
  const recognized = new Set([...rules.values()].flatMap(rule => rule.topics));
  for (const topic of topics) if (!recognized.has(topic)) fail(`unknown guardrail topic: ${topic}`);
  for (const row of table.rows) {
    const ids = split(table.get(row, 'rule_id'));
    const value = table.get(row, 'applicability');
    const reason = table.get(row, 'reason');
    if (!ids.length || isEmpty(reason) || !['design', 'runtime', 'no', 'exception', 'unknown'].includes(value)) {
      fail(`00-contract.md line ${row.line}: supply rule ids, applicability and a concrete reason`);
      continue;
    }
    for (const id of ids) {
      if (!rules.has(id) || scope.has(id)) { fail(`00-contract.md: unknown or duplicate guardrail ${id}`); continue; }
      const matches = rules.get(id).topics.some(topic => topics.has(topic));
      if (matches && value === 'no') fail(`${id}: declared topic applies; assess the rule or document a rule-specific exception`);
      if (value === 'exception' && (!matches || ids.length !== 1)) fail(`${id}: use exception only for a single rule in a declared topic`);
      scope.set(id, value);
    }
  }
  const missing = [...rules.keys()].filter(id => !scope.has(id));
  if (missing.length) fail(`00-contract.md: missing guardrail decisions: ${missing.join(', ')}`);
  if (![...scope.values()].some(isApplicable)) fail('00-contract.md: no applicable guardrail for the UI task');
  return scope;
}

export function isApplicable(value) { return value === 'design' || value === 'runtime'; }

export function checkDecisions(tables, alternatives, scope, fail) {
  const decisions = findTable(tables, ['rule_id', 'alt', 'decision']);
  if (!decisions) { fail('board.md: missing rule_id | alt | decision table'); return; }
  const covered = new Set();
  for (const row of decisions.rows) {
    const target = decisions.get(row, 'alt');
    const alts = target === 'all' ? alternatives : split(target);
    const ids = split(decisions.get(row, 'rule_id'));
    if (!ids.length || !target || isEmpty(decisions.get(row, 'decision'))) { fail(`board.md line ${row.line}: incomplete design decision`); continue; }
    for (const alt of alts) {
      if (!alternatives.has(alt)) fail(`board.md: unknown alternative ${alt}`);
      for (const id of ids) {
        if (!isApplicable(scope.get(id))) fail(`board.md: ${id} is not an applicable contract rule`);
        covered.add(`${alt}/${id}`);
      }
    }
  }
  for (const alt of alternatives) {
    const missing = [...scope].filter(([id, value]) => isApplicable(value) && !covered.has(`${alt}/${id}`));
    if (missing.length) fail(`board.md: alternative ${alt} missing design decisions for ${missing.map(([id]) => id).join(', ')}`);
  }
}

// A proof is an actual file under the work directory, or under 05-after for an implementation.
export function proofExists(base, work, value) {
  if (isEmpty(value) || path.isAbsolute(value)) return false;
  const file = path.resolve(work, value);
  if (!isFile(file) || fs.statSync(file).size === 0) return false;
  if (!fs.existsSync(base)) return false;
  const rel = path.relative(fs.realpathSync(base), fs.realpathSync(file));
  return rel !== '..' && !rel.startsWith('..' + path.sep) && !path.isAbsolute(rel);
}

export function column(table, row, name) {
  return clean(row.cells[table.headers.indexOf(name)]);
}

// Print an editable inventory; inclusion in the catalog alone never decides applicability.
const moduleFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === moduleFile) {
  const rules = loadGuardrails(path.resolve(path.dirname(moduleFile), '..'));
  const byTopic = new Map();
  for (const [id, { topics }] of rules) {
    const key = topics.join(', ');
    if (!byTopic.has(key)) byTopic.set(key, []);
    byTopic.get(key).push(id);
  }
  console.log('| topic | rule_id | applicability | reason |\n| --- | --- | --- | --- |');
  for (const [topic, ids] of byTopic) console.log(`| ${topic} | ${ids.join(', ')} | unknown | … |`);
}
