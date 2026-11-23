#!/usr/bin/env node
// task-first-frontend stage gate. Node 18+, no dependencies.
// Usage: node gate.mjs <work> --stage <0-7> [--max-accent-bg N] [--max-pill-repeat N]
// Checks are cumulative: --stage N runs S0..SN. Exit 1 on any FAIL, 2 on usage error.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { isFile, sha256, parseTables, findTable, clean, isEmpty, imageDims, findImage, parseGateBlock, kvList, parseCrop, cropFits, cropKey, altImageStem } from './lib.mjs';

const SKILL_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// ---------- args ----------
const argv = process.argv.slice(2);
function usage(msg) {
  if (msg) console.error(`gate: ${msg}`);
  console.error('usage: node gate.mjs <work> --stage <0-7> [--max-accent-bg N] [--max-pill-repeat N]');
  process.exit(2);
}
let work = null, stage = null, maxAccentBg = 3, maxPillRepeat = 4;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--stage') stage = Number(argv[++i]);
  else if (a === '--max-accent-bg') maxAccentBg = Number(argv[++i]);
  else if (a === '--max-pill-repeat') maxPillRepeat = Number(argv[++i]);
  else if (a.startsWith('--')) usage(`unknown option ${a}`);
  else if (work === null) work = a;
  else usage(`unexpected argument ${a}`);
}
if (!work) usage('missing <work>');
if (!Number.isInteger(stage) || stage < 0 || stage > 7) usage('--stage must be an integer 0-7');
if (!Number.isFinite(maxAccentBg) || !Number.isFinite(maxPillRepeat)) usage('numeric option expected');
work = path.resolve(work);
if (!fs.existsSync(work) || !fs.statSync(work).isDirectory()) usage(`work folder not found: ${work}`);

// ---------- reporting ----------
const counts = { PASS: 0, FAIL: 0, WARN: 0, INFO: 0, 'N/A': 0 };
let cur = 0;
function rec(level, msg) {
  counts[level]++;
  console.log(`[S${cur}] ${level.padEnd(4)} ${msg}`);
}
const pass = (m) => rec('PASS', m), fail = (m) => rec('FAIL', m), warn = (m) => rec('WARN', m),
  info = (m) => rec('INFO', m), na = (m) => rec('N/A', m);

// ---------- helpers ----------
const W = (...p) => path.join(work, ...p);
const rel = (p) => path.relative(work, p).replace(/\\/g, '/');
function readText(p) { try { return fs.readFileSync(p, 'utf8'); } catch { return null; } }
function listDir(p) { try { return fs.readdirSync(p); } catch { return []; } }
function walk(dir) {
  const out = [];
  for (const name of listDir(dir)) {
    const p = path.join(dir, name);
    let st; try { st = fs.statSync(p); } catch { continue; }
    if (st.isDirectory()) out.push(...walk(p)); else out.push(p);
  }
  return out;
}
function normPath(p) {
  const r = path.resolve(p).replace(/\\/g, '/');
  return process.platform === 'win32' ? r.toLowerCase() : r;
}
// Same line count the Read tool shows: a trailing newline does not open a new line.
function countLines(s) {
  if (s.length === 0) return 0;
  const n = (s.match(/\n/g) || []).length;
  return s.endsWith('\n') ? n : n + 1;
}
// ---------- colors ----------
const NAMED = { red: '#ff0000', blue: '#0000ff', green: '#008000', orange: '#ffa500', purple: '#800080', violet: '#ee82ee', teal: '#008080', pink: '#ffc0cb', yellow: '#ffff00', gold: '#ffd700', crimson: '#dc143c', tomato: '#ff6347', royalblue: '#4169e1', dodgerblue: '#1e90ff', indigo: '#4b0082', magenta: '#ff00ff', cyan: '#00ffff', lime: '#00ff00', black: '#000000', white: '#ffffff', gray: '#808080', grey: '#808080', silver: '#c0c0c0', lightgray: '#d3d3d3', lightgrey: '#d3d3d3', gainsboro: '#dcdcdc', whitesmoke: '#f5f5f5', darkgray: '#a9a9a9', dimgray: '#696969' };
function parseColor(tok) {
  const t = tok.trim().toLowerCase();
  let m;
  if ((m = t.match(/^#([0-9a-f]{3,8})$/))) {
    let h = m[1];
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    if (h.length !== 6 && h.length !== 8) return null;
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1 };
  }
  if ((m = t.match(/^rgba?\(([^)]*)\)$/))) {
    const p = m[1].split(/[\s,/]+/).filter(Boolean);
    const ch = (v) => (v.endsWith('%') ? parseFloat(v) * 2.55 : parseFloat(v));
    return { r: ch(p[0]), g: ch(p[1]), b: ch(p[2]), a: p[3] !== undefined ? (p[3].endsWith('%') ? parseFloat(p[3]) / 100 : parseFloat(p[3])) : 1 };
  }
  if ((m = t.match(/^hsla?\(([^)]*)\)$/))) {
    const p = m[1].split(/[\s,/]+/).filter(Boolean);
    const h = parseFloat(p[0]) / 360, s = parseFloat(p[1]) / 100, l = parseFloat(p[2]) / 100;
    const a = p[3] !== undefined ? (p[3].endsWith('%') ? parseFloat(p[3]) / 100 : parseFloat(p[3])) : 1;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s, pp = 2 * l - q;
    const f = (t2) => { t2 = (t2 + 1) % 1; return t2 < 1 / 6 ? pp + (q - pp) * 6 * t2 : t2 < 1 / 2 ? q : t2 < 2 / 3 ? pp + (q - pp) * (2 / 3 - t2) * 6 : pp; };
    return { r: f(h + 1 / 3) * 255, g: f(h) * 255, b: f(h - 1 / 3) * 255, a };
  }
  if (NAMED[t]) return parseColor(NAMED[t]);
  return null;
}
// Neutral vs accent, documented in references/anti-slop.md:
// a color is ACCENT when RGB chroma (max-min)/255 >= 0.2, lightness (max+min)/510 is in [0.12, 0.94]
// and alpha >= 0.15. Everything else (grays, dark slate/navy UI tones, near-white, faint transparency) is NEUTRAL.
// HSL saturation is not used: it inflates dark, barely tinted colors (#232e40 has saturation 0.29 but chroma 0.11).
const ACCENT_MIN_CHROMA = 0.2, ACCENT_MIN_L = 0.12, ACCENT_MAX_L = 0.94, ACCENT_MIN_ALPHA = 0.15;
function isAccent(c) {
  if (!c || c.a < ACCENT_MIN_ALPHA) return false;
  const mx = Math.max(c.r, c.g, c.b), mn = Math.min(c.r, c.g, c.b);
  const chroma = (mx - mn) / 255, l = (mx + mn) / 510;
  return chroma >= ACCENT_MIN_CHROMA && l >= ACCENT_MIN_L && l <= ACCENT_MAX_L;
}
const hex = (c) => '#' + [c.r, c.g, c.b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
function colorsIn(value) {
  const out = [];
  const re = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)|\b[a-zA-Z]+\b/g;
  let m;
  while ((m = re.exec(value))) { const c = parseColor(m[0]); if (c) out.push(c); }
  return out;
}

// ---------- CSS ----------
function stripComments(css) { return css.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' ')); }
function parseDecls(text) {
  const out = [];
  let depth = 0, buf = '';
  const push = () => {
    const i = buf.indexOf(':');
    if (i > 0) out.push({ prop: buf.slice(0, i).trim().toLowerCase(), value: buf.slice(i + 1).replace(/!important/i, '').trim() });
    buf = '';
  };
  for (const ch of text) {
    if (ch === '(') depth++; else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) push(); else buf += ch;
  }
  push();
  return out;
}
function parseCss(text, file, lineOffset = 0) {
  const css = stripComments(text); const rules = []; const stack = []; let buf = '', bufStart = 0;
  const lineAt = (i) => lineOffset + css.slice(0, i).split('\n').length;
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (ch === '{') { stack.push({ sel: buf.trim(), at: bufStart }); buf = ''; bufStart = i + 1; }
    else if (ch === '}') {
      const top = stack.pop();
      if (top && !top.sel.startsWith('@')) rules.push({ sel: top.sel, decls: parseDecls(buf), file, line: lineAt(top.at + (css.slice(top.at).search(/\S/) || 0)) });
      buf = ''; bufStart = i + 1;
    } else {
      if (buf.trim() === '' && /\S/.test(ch)) bufStart = i;
      buf += ch;
    }
  }
  return rules;
}
function splitTop(value) {
  const out = []; let depth = 0, buf = '';
  for (const ch of value) {
    if (ch === '(') depth++; else if (ch === ')') depth--;
    if (/\s/.test(ch) && depth === 0) { if (buf) out.push(buf); buf = ''; } else buf += ch;
  }
  if (buf) out.push(buf);
  return out;
}
function makeVarResolver(rules) {
  const vars = {};
  for (const r of rules) for (const d of r.decls) if (d.prop.startsWith('--')) vars[d.prop] = d.value;
  const resolve = (v, depth = 0) => (depth > 6 ? v : v.replace(/var\(\s*(--[\w-]+)\s*(?:,\s*([^)]*))?\)/g, (_, name, fb) => resolve(vars[name] ?? fb ?? '', depth + 1)));
  return resolve;
}
const LEN = /^(-?[\d.]+)(px|em|rem|pt|%|vw|vh|ch|ex)?$/i;
const STYLES = ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'];
function toPx(tok) {
  const t = tok.toLowerCase();
  if (t === 'thin') return 1; if (t === 'medium') return 3; if (t === 'thick') return 5;
  const m = t.match(LEN); if (!m) return null;
  const n = parseFloat(m[1]); const u = (m[2] || 'px').toLowerCase();
  return u === 'em' || u === 'rem' ? n * 16 : u === 'pt' ? (n * 4) / 3 : n;
}
// border shorthand -> {px, visible, color}
function borderInfo(value) {
  const toks = splitTop(value.toLowerCase());
  if (toks.length === 1 && (toks[0] === 'none' || toks[0] === 'hidden' || toks[0] === '0')) return { px: 0, visible: false, color: null };
  let px = null, style = null, color = null;
  for (const t of toks) {
    const p = toPx(t);
    if (p !== null) px = p;
    else if (STYLES.includes(t) || t === 'none' || t === 'hidden') style = t;
    else { const c = parseColor(t); if (c) color = c; }
  }
  const visible = style !== null && style !== 'none' && style !== 'hidden';
  if (px === null) px = visible ? 3 : 0; // CSS default width is medium
  return { px, visible: visible || (px > 0 && style === null), color };
}
// classify a left/start bar: FAIL when >=2px or accent-colored; INFO for 1px neutral divider
function judgeBar(px, color) {
  if (px <= 0) return null;
  if (px >= 2) return 'FAIL';
  if (color && isAccent(color)) return 'FAIL';
  return 'INFO';
}

function lintAlternatives(files) {
  const rules = []; const htmls = [];
  for (const f of files) {
    const text = readText(f) ?? '';
    if (f.toLowerCase().endsWith('.css')) rules.push(...parseCss(text, f));
    else {
      htmls.push({ file: f, text });
      const re = /<style[^>]*>([\s\S]*?)<\/style>/gi; let m;
      while ((m = re.exec(text))) rules.push(...parseCss(m[1], f, text.slice(0, m.index).split('\n').length - 1));
      const ri = /\sstyle\s*=\s*("([^"]*)"|'([^']*)')/gi;
      while ((m = ri.exec(text))) rules.push({ sel: '[inline style]', decls: parseDecls(m[2] ?? m[3]), file: f, line: text.slice(0, m.index).split('\n').length, inline: true });
    }
  }
  const resolve = makeVarResolver(rules);
  const where = (r) => `${rel(r.file)}:${r.line} ${r.sel.replace(/\s+/g, ' ').slice(0, 60)}`;
  let barFails = 0, barInfos = 0;
  const cardSelectors = []; const pillSelectors = []; const accentBg = new Map();

  for (const r of rules) {
    const d = Object.fromEntries(r.decls.map((x) => [x.prop, resolve(x.value)]));
    const textColor = d.color ? parseColor(d.color) : null;
    // 1) left / inline-start border bars
    for (const prop of ['border-left', 'border-inline-start']) {
      if (d[prop] === undefined) continue;
      const b = borderInfo(d[prop]);
      const color = b.color || (d[`${prop}-color`] ? parseColor(d[`${prop}-color`]) : null) || (d['border-color'] ? colorsIn(d['border-color']).pop() : null) || textColor;
      const v = b.visible ? judgeBar(b.px, color) : null;
      if (v === 'FAIL') { barFails++; fail(`anti-slop: ${prop}: ${d[prop]} (${b.px}px${color ? ', ' + hex(color) + (isAccent(color) ? ' accent' : ' neutral') : ''}) at ${where(r)}`); }
      else if (v === 'INFO') { barInfos++; info(`anti-slop: 1px neutral ${prop} divider allowed at ${where(r)}`); }
    }
    for (const prop of ['border-left-width', 'border-inline-start-width']) {
      if (d[prop] === undefined) continue;
      const px = toPx(d[prop].trim()) ?? 0;
      const base = prop.replace('-width', '');
      const color = (d[`${base}-color`] ? parseColor(d[`${base}-color`]) : null) || (d['border-color'] ? colorsIn(d['border-color']).pop() : null) || textColor;
      const v = judgeBar(px, color);
      if (v === 'FAIL') { barFails++; fail(`anti-slop: ${prop}: ${d[prop]} at ${where(r)}`); }
      else if (v === 'INFO') { barInfos++; info(`anti-slop: 1px neutral ${prop} allowed at ${where(r)}`); }
    }
    if (d['border-width'] !== undefined) {
      const w = splitTop(d['border-width']).map((t) => toPx(t) ?? 0);
      if (w.length === 4 && w[3] > 0 && w[0] === 0 && w[1] === 0 && w[2] === 0) {
        const color = d['border-color'] ? colorsIn(d['border-color']).pop() : textColor;
        const v = judgeBar(w[3], color);
        if (v === 'FAIL') { barFails++; fail(`anti-slop: left-only border-width ${d['border-width']} at ${where(r)}`); }
        else if (v === 'INFO') { barInfos++; info(`anti-slop: 1px neutral left-only border-width at ${where(r)}`); }
      }
    }
    // 2) fake bars: inset box-shadow with x offset only
    if (d['box-shadow'] !== undefined) {
      for (const part of d['box-shadow'].split(/,(?![^(]*\))/)) {
        const toks = splitTop(part.trim().toLowerCase());
        if (!toks.includes('inset')) continue;
        const lens = toks.filter((t) => toPx(t) !== null).map(toPx);
        const color = toks.map(parseColor).find(Boolean) || textColor;
        if (lens.length >= 2 && lens[0] > 0 && lens[1] === 0 && (lens[2] ?? 0) === 0) {
          const v = judgeBar(lens[0], color);
          if (v === 'FAIL') { barFails++; fail(`anti-slop: inset box-shadow left bar "${part.trim()}" at ${where(r)}`); }
          else if (v === 'INFO') { barInfos++; info(`anti-slop: 1px neutral inset shadow divider at ${where(r)}`); }
        }
      }
    }
    // 3) fake bars: ::before / ::after absolutely positioned at the left edge
    if (/::?(before|after)/i.test(r.sel) && /^(absolute|fixed)$/.test((d.position || '').trim())) {
      const atLeft = ['left', 'inset-inline-start'].some((p) => d[p] !== undefined && (toPx(d[p].trim()) ?? 1) === 0) || (d.inset && (toPx(splitTop(d.inset).pop()) ?? 1) === 0);
      const width = d.width !== undefined ? toPx(d.width.trim()) : (d['inline-size'] !== undefined ? toPx(d['inline-size'].trim()) : null);
      const tall = (d.height && /100%|100vh/.test(d.height)) || (d.top !== undefined && d.bottom !== undefined) || d.inset !== undefined;
      if (atLeft && width !== null && width > 0 && width <= 8 && tall) {
        const color = colorsIn(d.background || d['background-color'] || '').pop() || null;
        const v = judgeBar(width, color);
        if (v === 'FAIL') { barFails++; fail(`anti-slop: pseudo-element left bar (${width}px) at ${where(r)}`); }
        else if (v === 'INFO') { barInfos++; info(`anti-slop: 1px neutral pseudo-element divider at ${where(r)}`); }
      }
    }
    // collect for WARN checks
    const radius = d['border-radius'] !== undefined ? toPx(splitTop(d['border-radius'])[0] || '') : null;
    let bordered = false;
    for (const p of ['border', 'border-top', 'border-right', 'border-bottom', 'border-left']) if (d[p] !== undefined) { const b = borderInfo(d[p]); if (b.visible && b.px > 0) bordered = true; }
    if (!bordered && d['border-style'] && !/none|hidden/.test(d['border-style'])) bordered = (toPx((d['border-width'] || 'medium').split(/\s+/)[0]) ?? 0) > 0;
    const bgColors = colorsIn(d.background || d['background-color'] || '').filter(isAccent);
    for (const c of bgColors) { const k = hex(c); if (!accentBg.has(k)) accentBg.set(k, where(r)); }
    const isPseudo = /::?(before|after)/i.test(r.sel);
    if (!isPseudo && bordered && radius !== null && radius > 0) cardSelectors.push({ r, keys: selectorKeys(r.sel) });
    // pill = fully rounded ends: radius >= 100px, or >= half the declared height, or (no height) >= 9px on a
    // one-line box with vertical padding <= 4px (badge/chip shape). Percent radii (circles, dots) are not pills.
    const radiusTok = d['border-radius'] !== undefined ? splitTop(d['border-radius'])[0] || '' : '';
    const pillRadius = /%$/.test(radiusTok) ? null : radius;
    const heightPx = d.height !== undefined ? toPx(d.height.trim()) : null;
    const padTop = d.padding !== undefined ? toPx(splitTop(d.padding)[0] || '') : null;
    const pill = (pillRadius !== null && (pillRadius >= 100 || (heightPx ? pillRadius * 2 >= heightPx - 1 : pillRadius >= 9 && padTop !== null && padTop <= 4))) || /9999|999px|infinity/.test(d['border-radius'] || '');
    const colored = bgColors.length > 0 || (bordered && colorsIn(d.border || d['border-color'] || '').some(isAccent)) || (textColor !== null && isAccent(textColor));
    if (!isPseudo && pill && colored) pillSelectors.push({ r, keys: selectorKeys(r.sel) });
  }
  if (barFails === 0) pass(`anti-slop: no decorative left/inline-start accent bar in ${files.length} source file(s)${barInfos ? ` (${barInfos} 1px neutral divider(s) reported as INFO)` : ''}`);

  // nested bordered+rounded containers and repeated pills (DOM walk)
  let nested = 0, cardCount = 0; const nestedEx = []; const pillCount = new Map();
  let scriptFrags = 0;
  for (const h of htmls.slice()) for (const f of scriptMarkup(h.text)) { htmls.push({ file: h.file, text: f.text, lineBase: f.line }); scriptFrags++; }
  if (scriptFrags) info(`anti-slop: linted ${scriptFrags} markup literal(s) built in <script> (static expansion; both ternary branches counted)`);
  for (const { file, text, lineBase } of htmls) {
    const body = text.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, (m) => m.replace(/[^\n]/g, ' '));
    const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
    const stack = []; const re = /<(\/?)([a-zA-Z][\w-]*)([^>]*)>/g; let m;
    while ((m = re.exec(body))) {
      const [, close, tagRaw, attrs] = m; const tag = tagRaw.toLowerCase();
      if (close) { const i = stack.map((s) => s.tag).lastIndexOf(tag); if (i >= 0) stack.length = i; continue; }
      const cls = ((attrs.match(/\sclass\s*=\s*("([^"]*)"|'([^']*)')/i) || [])[2] || (attrs.match(/\sclass\s*=\s*'([^']*)'/i) || [])[1] || '').split(/\s+/).filter(Boolean);
      const inline = (attrs.match(/\sstyle\s*=\s*("([^"]*)"|'([^']*)')/i) || []);
      let inlineCard = false;
      if (inline[0]) {
        const d = Object.fromEntries(parseDecls(inline[2] ?? inline[3]).map((x) => [x.prop, resolve(x.value)]));
        const b = d.border ? borderInfo(d.border) : null; const rad = d['border-radius'] ? toPx(splitTop(d['border-radius'])[0]) : null;
        inlineCard = !!(b && b.visible && b.px > 0 && rad > 0);
      }
      const matches = (list) => list.some(({ keys }) => keys.some((k) => (k.tag === null || k.tag === tag) && k.classes.every((c) => cls.includes(c)) && (k.classes.length > 0 || k.tag !== null)));
      const card = inlineCard || matches(cardSelectors);
      if (card) {
        cardCount++;
        if (stack.some((s) => s.card)) { nested++; if (nestedEx.length < 3) nestedEx.push(`${rel(file)}:${lineBase !== undefined ? `${lineBase} (<script> template)` : body.slice(0, m.index).split('\n').length} <${tag} class="${cls.join(' ')}">`); }
      }
      for (const p of pillSelectors) if (matches([p])) { const k = p.r.sel; pillCount.set(k, (pillCount.get(k) || 0) + 1); }
      if (!VOID.has(tag) && !/\/\s*$/.test(attrs)) stack.push({ tag, card });
    }
  }
  if (nested > 0) warn(`anti-slop: ${nested} bordered+rounded container(s) nested inside another bordered+rounded container (${cardCount} card-like elements total), e.g. ${nestedEx.join('; ')}`);
  else pass(`anti-slop: no nested bordered+rounded containers (${cardCount} card-like elements)`);
  const pillsOver = [...pillCount].filter(([, n]) => n > maxPillRepeat);
  if (pillsOver.length) warn(`anti-slop: colored pill badge repeated more than ${maxPillRepeat} times: ${pillsOver.map(([s, n]) => `${s} x${n}`).join(', ')}`);
  else pass(`anti-slop: no colored pill repeated more than ${maxPillRepeat} times`);
  if (accentBg.size > maxAccentBg) warn(`anti-slop: ${accentBg.size} distinct accent-colored backgrounds (limit ${maxAccentBg}): ${[...accentBg.keys()].join(' ')}`);
  else pass(`anti-slop: ${accentBg.size} distinct accent-colored background(s) (limit ${maxAccentBg})`);
}
// ---------- markup built in <script> ----------
// Static expansion of string/template literals that contain HTML tags (documented in references/anti-slop.md).
// ${name(...)} and ${name} are replaced by the literal bound to "const|let|var name = <literal>" or to an
// arrow function whose body is a literal; literal arguments of such calls are appended after the expansion.
// Any other ${expr} contributes every literal inside it, so both branches of a ternary are linted.
// Runtime data, loops, DOM APIs and regex literals containing quotes are not evaluated.
function lexLiteral(src, i) {
  const q = src[i]; const parts = []; let buf = ''; let j = i + 1;
  while (j < src.length) {
    const ch = src[j];
    if (ch === '\\') { buf += src[j + 1] ?? ''; j += 2; continue; }
    if (ch === q) { parts.push(buf); return { end: j + 1, parts }; }
    if (q === '`' && ch === '$' && src[j + 1] === '{') {
      parts.push(buf); buf = '';
      const e = scanExpr(src, j + 2); parts.push({ expr: src.slice(j + 2, e) }); j = e + 1; continue;
    }
    if (q !== '`' && ch === '\n') { parts.push(buf); return { end: j, parts }; }
    buf += ch; j++;
  }
  parts.push(buf); return { end: j, parts };
}
function scanExpr(src, i) {
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    const ch = src[j];
    if (ch === '"' || ch === "'" || ch === '`') { j = lexLiteral(src, j).end - 1; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') { if (depth === 0) return j; depth--; }
  }
  return src.length;
}
function literalsIn(src) {
  const out = [];
  for (let j = 0; j < src.length; j++) {
    const ch = src[j];
    if (ch === '/' && src[j + 1] === '/') { const n = src.indexOf('\n', j); j = n < 0 ? src.length : n; continue; }
    if (ch === '/' && src[j + 1] === '*') { const n = src.indexOf('*/', j + 2); j = n < 0 ? src.length : n + 1; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { const l = lexLiteral(src, j); out.push({ start: j, end: l.end, parts: l.parts }); j = l.end - 1; }
  }
  return out;
}
const HAS_TAG = /<[a-zA-Z][\w-]*[\s>\/]/;
function scriptMarkup(html) {
  const frags = [];
  for (const m of html.matchAll(/<script(?![^>]*\bsrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi)) {
    const js = m[1];
    const base = html.slice(0, m.index + m[0].indexOf('>') + 1).split('\n').length - 1;
    const lits = literalsIn(js);
    const defs = new Map(); const defStarts = new Set(); const usedDefs = new Set();
    for (const d of js.matchAll(/\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*/g)) {
      let k = d.index + d[0].length;
      const arrow = js.slice(k).match(/^(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>\s*/);
      if (arrow) k += arrow[0].length;
      const lit = lits.find((l) => l.start === k);
      if (lit) { defs.set(d[1], lit); defStarts.add(lit.start); }
    }
    const expand = (parts, depth) => parts.map((p) => (typeof p === 'string' ? p : expandExpr(p.expr, depth))).join('');
    const expandExpr = (expr, depth) => {
      if (depth > 8) return '';
      const e = expr.trim();
      const inner = literalsIn(e);
      let out = '';
      for (const c of e.matchAll(/\b([A-Za-z_$][\w$]*)\s*(\(|$)/g)) {
        if (!defs.has(c[1]) || inner.some((l) => c.index >= l.start && c.index < l.end)) continue;
        usedDefs.add(c[1]); out += expand(defs.get(c[1]).parts, depth + 1);
      }
      for (const l of inner) out += expand(l.parts, depth + 1);
      return out;
    };
    const roots = lits.filter((l) => !defStarts.has(l.start) && HAS_TAG.test(expand(l.parts, 0)));
    const orphanDefs = [...defs].filter(([n]) => !usedDefs.has(n)).map(([, l]) => l);
    for (const l of [...roots, ...orphanDefs]) {
      const text = expand(l.parts, 0);
      if (HAS_TAG.test(text)) frags.push({ text, line: base + js.slice(0, l.start).split('\n').length });
    }
  }
  return frags;
}
function selectorKeys(sel) {
  return sel.split(',').map((s) => {
    const last = s.trim().split(/[\s>+~]+/).pop() || '';
    const base = last.replace(/::?[\w-]+(\([^)]*\))?/g, '');
    const tag = (base.match(/^([a-zA-Z][\w-]*)/) || [])[1]?.toLowerCase() ?? null;
    const classes = [...base.matchAll(/\.([\w-]+)/g)].map((x) => x[1]);
    return { tag, classes };
  }).filter((k) => k.tag || k.classes.length);
}

// ---------- stage-specific required reading (paths relative to the skill root) ----------
const REQUIRED_READING = {
  0: ['SKILL.md', 'references/work-folder.md', 'references/reading-and-delegation.md'],
  1: ['references/discovery-and-tasks.md', 'references/guardrails/SKILL.source.md', 'references/guardrails/references/method.md'],
  2: ['references/audit-and-research.md'],
  3: ['references/guides/01-good-ui-ux-reference-guide.md', 'references/guides/02-no-ai-slop-mobile-web-ui-ux.md'],
  4: ['references/design-and-ideation.md', 'references/anti-slop.md'],
  5: ['references/guardrails/references/rules-foundations.md', 'references/guardrails/references/rules-patterns.md', 'references/guardrails/references/standards-and-scope.md', 'references/verification/SKILL.source.md'],
  6: ['references/implementation-and-validation.md', 'references/verification/references/browser-evidence.md'],
  7: [],
};

// ---------- S0 ----------
let ledgerPaths = null;
function s0() {
  const p = W('reading-ledger.md'); const md = readText(p);
  if (md === null) { fail('reading-ledger.md missing'); ledgerPaths = new Set(); return; }
  const t = findTable(parseTables(md), ['path', 'total_lines', 'last_line_read', 'method']);
  if (!t) { fail('reading-ledger.md has no table with columns path | total_lines | last_line_read | method'); ledgerPaths = new Set(); return; }
  ledgerPaths = new Set(); let ok = 0, bad = 0;
  for (const row of t.rows) {
    const fp = t.get(row, 'path'); const tl = t.get(row, 'total_lines'), ll = t.get(row, 'last_line_read'), method = t.get(row, 'method');
    const abs = path.isAbsolute(fp) ? fp : path.resolve(work, fp);
    const label = `ledger line ${row.line} ${fp}`;
    if (!isFile(abs)) { fail(`${label}: file not found`); bad++; continue; }
    const actual = countLines(readText(abs));
    const total = Number(tl), last = Number(ll);
    let rowOk = true;
    if (!Number.isInteger(total) || total !== actual) { fail(`${label}: total_lines ${tl} != recount ${actual}`); rowOk = false; }
    if (!Number.isInteger(last) || last !== actual) { fail(`${label}: last_line_read ${ll} != ${actual} lines (not read to the last line)`); rowOk = false; }
    if (isEmpty(method)) { fail(`${label}: method empty`); rowOk = false; }
    else if (/요약|summar|heading|제목만|목차만|skim|훑|grep only/i.test(method)) { fail(`${label}: method "${method}" is not a full read`); rowOk = false; }
    if (rowOk) { ok++; ledgerPaths.add(normPath(abs)); } else bad++;
  }
  if (t.rows.length === 0) fail('reading-ledger.md table has no rows');
  else if (bad === 0) pass(`reading ledger: ${ok} row(s) recounted, every file read to its last line`);
}
function requireReading(n) {
  const missing = REQUIRED_READING[n].filter((r) => !ledgerPaths.has(normPath(path.join(SKILL_ROOT, r))));
  if (missing.length) fail(`required reading for S${n} not in ledger as fully read: ${missing.join(', ')} (paths under ${SKILL_ROOT.replace(/\\/g, '/')})`);
  else if (REQUIRED_READING[n].length) pass(`required reading for S${n} recorded (${REQUIRED_READING[n].length} file(s))`);
}

// ---------- S1 ----------
let contract = null;
const SCOPES = ['design-only', 'implement', 'small-fix'];
function siteList() {
  const p = path.join(SKILL_ROOT, 'references', 'site-list.json');
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { fail(`cannot read ${p}: ${e.message}`); return null; }
}
function s1() {
  const md = readText(W('00-contract.md'));
  if (md === null) { fail('00-contract.md missing'); return; }
  const kv = parseGateBlock(md);
  if (!kv) { fail('00-contract.md has no ```gate block (widths, screens, tasks, ref_tags, existing_ui, scope)'); return; }
  const list = (k) => kvList(kv, k);
  const c = { widths: list('widths').map(Number), screens: list('screens'), tasks: list('tasks'), refTags: list('ref_tags'), existing: (kv.existing_ui || '').toLowerCase(), scope: (kv.scope || '').toLowerCase(), alternatives: kv.alternatives ? Number(kv.alternatives) : 3, altSource: (kv.alt_source || 'html').toLowerCase(), kv };
  let ok = true;
  const bad = (m) => { fail(m); ok = false; };
  if (!c.widths.length || c.widths.some((w) => !Number.isInteger(w) || w <= 0)) bad(`widths must be positive integers, got "${kv.widths ?? ''}"`);
  else if (!(c.widths.includes(1440) && c.widths.includes(390)) && isEmpty(kv.widths_reason)) bad(`widths ${c.widths.join(',')} omit 1440/390 without widths_reason`);
  if (!c.screens.length) bad('screens empty');
  if (c.screens.some((s) => !/^[a-z0-9][a-z0-9-]*$/i.test(s))) bad('screens must be file-name-safe ids (letters, digits, -)');
  if (!c.tasks.length) bad('tasks empty');
  if (!['yes', 'no'].includes(c.existing)) bad('existing_ui must be yes or no');
  if (c.existing === 'no' && isEmpty(kv.existing_ui_reason)) bad('existing_ui: no requires existing_ui_reason');
  if (!SCOPES.includes(c.scope)) bad(`scope must be one of ${SCOPES.join(', ')}`);
  if (!Number.isInteger(c.alternatives) || c.alternatives < 1) bad('alternatives must be a positive integer');
  else if (c.alternatives < 3 && isEmpty(kv.alternatives_reason)) bad(`alternatives ${c.alternatives} < 3 requires alternatives_reason (user-specified count)`);
  if (!['html', 'imagegen'].includes(c.altSource)) bad('alt_source must be html or imagegen');
  const sites = siteList();
  if (sites) {
    const known = new Set(sites.sites.flatMap((s) => s.tasks));
    if (!c.refTags.length && c.scope !== 'small-fix') bad(`ref_tags empty; choose from: ${[...known].sort().join(', ')}`);
    const unknown = c.refTags.filter((t) => !known.has(t));
    if (unknown.length) bad(`unknown ref_tags: ${unknown.join(', ')}`);
  }
  const SECTIONS = [['사람', /사람|people/i], ['여정', /여정|journey/i], ['이상 상태', /이상\s*상태|ideal/i], ['고정 케이스', /고정\s*케이스|fixed\s*cases?/i], ['상태', /^(상태(\s*계약)?|states?)(\s|$|[(:·—-])/i]];
  const lines = md.split(/\r?\n/);
  const heads = lines.map((l, i) => ({ i, m: l.match(/^#{1,6}\s+(.*)$/) })).filter((h) => h.m);
  for (const [name, re] of SECTIONS) {
    const h = heads.find((x) => re.test(x.m[1].trim()));
    if (!h) { bad(`00-contract.md missing section "${name}"`); continue; }
    const next = heads.find((x) => x.i > h.i);
    const body = lines.slice(h.i + 1, next ? next.i : lines.length).filter((l) => l.trim() && !/^\|?\s*:?-{2,}/.test(l));
    if (body.length < 1) bad(`00-contract.md section "${name}" is empty`);
  }
  if (/\{\{[^}]*\}\}/.test(md)) bad('00-contract.md still contains {{template}} placeholders');
  if (ok) pass(`contract: widths ${c.widths.join(',')}, screens ${c.screens.join(',')}, tasks ${c.tasks.join(',')}, scope ${c.scope}`);
  contract = c;
}
function needContract(what) { if (!contract) { fail(`${what}: cannot check without a valid 00-contract.md`); return false; } return true; }

// ---------- S2 ----------
const DPR = [1, 1.25, 1.5, 2, 3];
function s2() {
  if (!needContract('before captures')) return;
  if (contract.existing === 'no') { na(`before captures: existing_ui: no (${contract.kv.existing_ui_reason})`); return; }
  let ok = 0;
  for (const sc of contract.screens) for (const w of contract.widths) {
    const p = findImage(W('01-before'), `before-${sc}-${w}`);
    if (!p) { fail(`01-before/before-${sc}-${w}.(png|webp) missing`); continue; }
    const d = imageDims(p);
    if (d.error) { fail(`${rel(p)}: ${d.error}`); continue; }
    if (!DPR.some((r) => Math.abs(d.w / w - r) < 0.01)) warn(`${rel(p)}: pixel width ${d.w} is not a device-pixel multiple of declared width ${w}`);
    ok++;
  }
  if (ok === contract.screens.length * contract.widths.length) pass(`before captures: ${ok} file(s) for ${contract.screens.length} screen(s) x ${contract.widths.length} width(s)`);
}

// ---------- S3 ----------
function urlKey(u) { return (u || '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/+$/, ''); }
// Skip reasons are an allowlist (references/work-folder.md). Any other reason FAILs.
const SKIP_REASONS = [
  ['paid', /유료|결제|구독|체험판|무료\s*체험|trial|paid|subscription|paywall/i],
  ['login', /(로그인|가입|계정)(\s*생성)?(이|을)?\s*(필요|해야|요구|없이는\s*볼\s*수\s*없)|(log[\s-]?in|sign[\s-]?in|sign[\s-]?up|account)\s+(is\s+)?required|requires?\s+(an?\s+)?(account|log[\s-]?in|sign[\s-]?in|sign[\s-]?up)|login\s*wall|로그인\s*벽/i],
  ['blocked', /차단|403|captcha|캡차|캡챠|지역\s*제한|region|geo[\s-]?block|blocked/i],
];
function skipReasonCategory(reason) {
  const r = (reason || '').trim();
  for (const [k, re] of SKIP_REASONS) if (re.test(r)) return k;
  const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (/무관|관련\s*없|not\s+relevant|irrelevant|unrelated/i.test(r) && contract.tasks.some((t) => new RegExp(`(^|[^\\w])${esc(t)}([^\\w]|$)`).test(r))) return 'irrelevant';
  return null;
}
function s3() {
  if (!needContract('references')) return;
  if (contract.scope === 'small-fix') { na('references: scope small-fix (selected design is kept)'); return; }
  const md = readText(W('02-refs', 'INDEX.md'));
  if (md === null) { fail('02-refs/INDEX.md missing'); return; }
  const tables = parseTables(md);
  const borrow = findTable(tables, ['file', 'url', 'captured_at', 'platform', 'product', 'task', 'part', 'principle', 'not_borrowed']);
  const visited = findTable(tables, ['site', 'status', 'reason']);
  if (!borrow) fail('02-refs/INDEX.md: borrow table (file|url|captured_at|platform|product|task|part|principle|not_borrowed) missing');
  if (!visited) fail('02-refs/INDEX.md: visited-sites table (site|status|reason) missing');
  const sites = siteList(); if (!sites || !borrow || !visited) return;

  const refs = [];
  let rowsOk = true;
  for (const row of borrow.rows) {
    const r = Object.fromEntries(['file', 'url', 'captured_at', 'platform', 'product', 'task', 'part', 'principle', 'not_borrowed'].map((c) => [c, borrow.get(row, c)]));
    const label = `INDEX.md line ${row.line} ${r.file}`;
    const emptyCols = Object.entries(r).filter(([, v]) => isEmpty(v)).map(([k]) => k);
    if (emptyCols.length) { fail(`${label}: empty column(s) ${emptyCols.join(', ')}`); rowsOk = false; }
    const fp = path.resolve(W('02-refs'), r.file);
    if (!isFile(fp)) { fail(`${label}: capture file not found in 02-refs`); rowsOk = false; continue; }
    const d = imageDims(fp); if (d.error) { fail(`${label}: ${d.error}`); rowsOk = false; continue; }
    if (!/^ref-/i.test(path.basename(fp))) warn(`${label}: file name should start with ref-`);
    if (!/^https?:\/\//i.test(r.url)) { fail(`${label}: url must be http(s)`); rowsOk = false; }
    if (!/^\d{4}-\d{2}-\d{2}/.test(r.captured_at)) { fail(`${label}: captured_at must start with YYYY-MM-DD`); rowsOk = false; }
    const tasks = r.task.split(/[,\s]+/).filter(Boolean);
    const unknownTasks = tasks.filter((t) => !contract.tasks.includes(t));
    if (unknownTasks.length) { fail(`${label}: task ${unknownTasks.join(',')} not declared in contract tasks`); rowsOk = false; }
    refs.push({ ...r, tasks, key: urlKey(r.url), host: urlKey(r.url).split('/')[0], abs: normPath(fp) });
  }
  if (rowsOk && borrow.rows.length) pass(`borrow table: ${borrow.rows.length} row(s) complete, every capture file valid`);
  if (!borrow.rows.length) fail('borrow table has no rows');
  const listed = new Set(refs.map((r) => r.abs));
  const orphans = listDir(W('02-refs')).filter((n) => /\.(png|webp)$/i.test(n) && !listed.has(normPath(W('02-refs', n))));
  if (orphans.length) warn(`02-refs captures not in the borrow table: ${orphans.join(', ')}`);

  const relevant = sites.sites.filter((s) => s.tasks.some((t) => contract.refTags.includes(t)));
  const vmap = new Map(visited.rows.map((row) => [visited.get(row, 'site').toLowerCase(), { status: visited.get(row, 'status').toLowerCase(), reason: visited.get(row, 'reason'), line: row.line }]));
  let vok = 0;
  for (const s of relevant) {
    const v = vmap.get(s.name.toLowerCase());
    if (!v) { fail(`visited-sites: relevant site "${s.name}" (${s.url}) has no row`); continue; }
    if (v.status === 'skipped') {
      if (!skipReasonCategory(v.reason)) { fail(`visited-sites: "${s.name}" skip reason "${v.reason}" is not allowed (allowed: paid/subscription/trial, login or sign-up required, blocked/403/captcha/region, or not relevant to task <id>)`); continue; }
      if (s.access === 'free') warn(`visited-sites: "${s.name}" is free to browse but was skipped: ${v.reason}`);
      vok++;
    } else if (v.status === 'visited') {
      const pre = urlKey(s.url);
      const caps = refs.filter((r) => r.key === pre || r.key.startsWith(pre + '/') || r.key.startsWith(pre + '?') || r.key.startsWith(pre + '#'));
      if (!caps.length) { fail(`visited-sites: "${s.name}" marked visited but no borrow-table capture has a ${s.url} url`); continue; }
      vok++;
    } else fail(`visited-sites: "${s.name}" status "${v.status}" must be visited or skipped`);
  }
  if (vok === relevant.length) pass(`visited-sites: all ${relevant.length} relevant site(s) for ref_tags [${contract.refTags.join(', ')}] accounted for`);
  const hosts = new Set(refs.map((r) => r.host));
  if (hosts.size < 2) fail(`references come from ${hosts.size} site(s); need >= 2`); else pass(`references from ${hosts.size} distinct site(s)`);
  for (const t of contract.tasks) {
    const rs = refs.filter((r) => r.tasks.includes(t)); const hs = new Set(rs.map((r) => r.host));
    if (rs.length < 3) fail(`task ${t}: ${rs.length} reference capture(s); need >= 3`);
    else if (hs.size < 2) fail(`task ${t}: captures from ${hs.size} site; need >= 2`);
    else pass(`task ${t}: ${rs.length} capture(s) from ${hs.size} site(s)`);
  }
}

// ---------- S4 ----------
// compose.mjs writes <image>.json; the image and every source must be unchanged since composing.
function composedManifest(img, kind) {
  const jp = img.replace(/\.(png|webp)$/i, '.json'); const label = rel(img);
  let m; try { m = JSON.parse(fs.readFileSync(jp, 'utf8')); } catch { fail(`${label}: ${rel(jp)} missing or invalid; make the image with scripts/compose.mjs`); return null; }
  if (m.generator !== 'compose.mjs' || m.kind !== kind) { fail(`${label}: manifest is not a compose.mjs ${kind}`); return null; }
  if (m.output_sha256 !== sha256(img)) { fail(`${label}: image changed after composing; rerun scripts/compose.mjs`); return null; }
  for (const i of m.inputs || []) {
    const p = W(i.file);
    if (!isFile(p)) { fail(`${label}: source ${i.file} missing`); return null; }
    if (sha256(p) !== i.sha256) { fail(`${label}: source ${i.file} changed after composing; rerun scripts/compose.mjs`); return null; }
  }
  return m;
}
const AS_IDS = ['AS-1', 'AS-2', 'AS-3', 'AS-4', 'AS-5'];
function s4() {
  if (!needContract('alternatives')) return;
  if (contract.scope === 'small-fix') { na('alternatives: scope small-fix (selected design is kept)'); return; }
  const dir = W('03-alts');
  const ids = new Set(); const boardImg = new Map();
  for (const n of listDir(dir)) { const m = n.match(/^alt-([a-z0-9]+)-(\d+)\.(png|webp)$/i); if (m) ids.add(m[1].toLowerCase()); }
  if (ids.size < contract.alternatives) fail(`03-alts: ${ids.size} alternative(s) (${[...ids].join(',') || 'none'}); need >= ${contract.alternatives}`);
  else pass(`03-alts: ${ids.size} alternative(s): ${[...ids].join(', ')}`);
  for (const id of ids) {
    for (const w of contract.widths) {
      const p = findImage(dir, `alt-${id}-${w}`);
      if (!p) { fail(`03-alts/alt-${id}-${w}.(png|webp) missing`); continue; }
      const d = imageDims(p); if (d.error) fail(`${rel(p)}: ${d.error}`);
    }
    const b = findImage(path.join(dir, 'boards'), `board-${id}`);
    if (!b) fail(`03-alts/boards/board-${id}.(png|webp) missing (provenance board image)`);
    else { const d = imageDims(b); if (d.error) fail(`${rel(b)}: ${d.error}`); else boardImg.set(id, b); }
  }
  const md = readText(path.join(dir, 'boards', 'board.md'));
  if (md === null) fail('03-alts/boards/board.md missing');
  else {
    const tables = parseTables(md);
    const t = findTable(tables, ['alt', 'element', 'ref_file', 'ref_crop', 'alt_crop', '가져온 것', '바꾼 것']);
    if (!t) fail('board.md: provenance table (alt|element|ref_file|ref_crop|alt_crop|가져온 것|바꾼 것) missing');
    else {
      const per = new Map(); const expect = new Map(); let ok = true;
      for (const row of t.rows) {
        const alt = t.get(row, 'alt').toLowerCase().replace(/^alt-/, '');
        const ref = t.get(row, 'ref_file'), took = t.get(row, '가져온 것'), changed = t.get(row, '바꾼 것'), el = t.get(row, 'element');
        const label = `board.md line ${row.line}`;
        if (!ids.has(alt)) { fail(`${label}: alt "${alt}" has no 03-alts/alt-${alt}-*.png`); ok = false; }
        if (isEmpty(el) || isEmpty(took) || isEmpty(changed)) { fail(`${label}: element / 가져온 것 / 바꾼 것 must all be filled`); ok = false; }
        const own = /^자체\s*설계$/.test(ref);
        const rc = parseCrop(t.get(row, 'ref_crop')), ac = parseCrop(t.get(row, 'alt_crop'));
        const altImg = findImage(dir, altImageStem(alt, contract.widths));
        if (!ac) { fail(`${label}: alt_crop must be x,y,w,h (pixels of ${altImageStem(alt, contract.widths)}.png)`); ok = false; }
        else if (altImg && !cropFits(ac, imageDims(altImg))) { fail(`${label}: alt_crop ${cropKey(ac)} lies outside ${rel(altImg)}`); ok = false; }
        if (own) { if (!isEmpty(t.get(row, 'ref_crop'))) { fail(`${label}: 자체 설계 row must have ref_crop "-"`); ok = false; } }
        else if (!isFile(path.resolve(W('02-refs'), ref))) { fail(`${label}: ref_file "${ref}" not found in 02-refs (use "자체 설계" for own elements)`); ok = false; }
        else if (!rc) { fail(`${label}: ref_crop must be x,y,w,h (pixels of 02-refs/${ref}) showing the borrowed part`); ok = false; }
        else if (!cropFits(rc, imageDims(path.resolve(W('02-refs'), ref)))) { fail(`${label}: ref_crop ${cropKey(rc)} lies outside 02-refs/${ref}`); ok = false; }
        if (!expect.has(alt)) expect.set(alt, []);
        expect.get(alt).push(`${own ? '자체 설계' : ref}|${cropKey(own ? null : rc)}|${cropKey(ac)}`);
        per.set(alt, (per.get(alt) || 0) + 1);
      }
      for (const id of ids) if (!per.get(id)) { fail(`board.md: alternative ${id} has no provenance rows`); ok = false; }
      if (ok) pass(`board.md: provenance rows with crops for every alternative (${[...per].map(([k, v]) => `${k}:${v}`).join(', ')})`);
      for (const [id, img] of boardImg) {
        const m = composedManifest(img, 'board'); if (!m) continue;
        const got = (m.rows || []).map((r) => `${r.ref_file}|${r.ref_crop}|${r.alt_crop}`).sort().join('\n');
        if (got !== (expect.get(id) || []).sort().join('\n')) fail(`${rel(img)}: rows differ from board.md (board.md edited after composing); rerun scripts/compose.mjs`);
        else pass(`${rel(img)}: composed from board.md crops, sources unchanged (${m.rows.length} row(s))`);
      }
    }
    const sc = findTable(tables, ['alt', 'check', 'result']);
    if (!sc) fail('board.md: anti-slop self-check table (alt|check|result) missing');
    else {
      const seen = new Map(); let ok = true;
      for (const row of sc.rows) {
        const alt = sc.get(row, 'alt').toLowerCase().replace(/^alt-/, ''); const chk = sc.get(row, 'check').toUpperCase().match(/AS-\d/)?.[0]; const res = sc.get(row, 'result').toUpperCase();
        if (!chk) continue;
        if (!['PASS', 'FAIL'].includes(res)) { fail(`board.md line ${row.line}: self-check result must be PASS or FAIL`); ok = false; continue; }
        if (res === 'FAIL') { fail(`board.md line ${row.line}: alternative ${alt} fails ${chk} (fix the mockup before moving on)`); ok = false; }
        seen.set(`${alt}|${chk}`, res);
      }
      for (const id of ids) for (const a of AS_IDS) if (!seen.has(`${id}|${a}`)) { fail(`board.md: self-check ${a} missing for alternative ${id}`); ok = false; }
      if (ok) pass(`anti-slop self-check: ${AS_IDS.join(', ')} PASS for every alternative`);
    }
  }
  if (contract.existing === 'yes') {
    const screen = contract.kv.compare_screen || contract.screens[0];
    if (!contract.screens.includes(screen)) fail(`compare_screen "${screen}" is not in screens`);
    else {
      let ok = 0;
      for (const id of ids) for (const w of contract.widths) {
        const p = findImage(path.join(dir, 'compare'), `compare-${id}-${w}`);
        if (!p) { fail(`03-alts/compare/compare-${id}-${w}.(png|webp) missing (before-${screen}-${w} beside alt-${id}-${w}; run scripts/compose.mjs)`); continue; }
        const m = composedManifest(p, 'compare'); if (!m) continue;
        const files = (m.inputs || []).map((i) => i.file.toLowerCase());
        const okB = files.some((f) => f === `01-before/before-${screen}-${w}.png` || f === `01-before/before-${screen}-${w}.webp`);
        const okA = files.some((f) => f === `03-alts/alt-${id}-${w}.png` || f === `03-alts/alt-${id}-${w}.webp`);
        if (!okB || !okA) { fail(`${rel(p)}: not composed from before-${screen}-${w} and alt-${id}-${w}`); continue; }
        ok++;
      }
      if (ok && ok === ids.size * contract.widths.length) pass(`compare: ${ok} before/alternative image(s) composed from current files (screen ${screen})`);
    }
  }
  const sources = walk(dir).filter((p) => /\.(html?|css)$/i.test(p));
  if (!sources.length) {
    if (contract.altSource === 'imagegen') warn('anti-slop lint skipped: alt_source imagegen has no html/css; the self-check table is the only slop evidence');
    else fail('03-alts has no .html/.css source; anti-slop lint cannot run (set alt_source: imagegen only for image-only alternatives)');
  } else lintAlternatives(sources);
}

// ---------- S5 ----------
function knownRuleIds() {
  const ids = new Set();
  const dir = path.join(SKILL_ROOT, 'references', 'guardrails', 'references');
  for (const n of listDir(dir).filter((n) => /^rules-.*\.md$/.test(n))) for (const m of (readText(path.join(dir, n)) || '').matchAll(/^- \[([FPCIT]-\d{2})\]/gm)) ids.add(m[1]);
  for (const m of (readText(path.join(SKILL_ROOT, 'references', 'verification', 'references', 'client-runtime-review.md')) || '').matchAll(/^#### (UI-\d{2})/gm)) ids.add(m[1]);
  return ids;
}
const VERDICTS = ['PASS', 'FAIL', 'UNVERIFIED', 'N/A'];
function s5() {
  if (!needContract('verdicts')) return;
  const md = readText(W('04-verdicts.md'));
  if (md === null) { fail('04-verdicts.md missing'); return; }
  const t = findTable(parseTables(md), ['rule_id', 'applies', 'evidence', 'verdict']);
  if (!t) { fail('04-verdicts.md: table rule_id|applies|evidence|verdict missing'); return; }
  const known = knownRuleIds(); const seen = new Map(); const blockers = []; const unverified = []; let ok = true;
  for (const row of t.rows) {
    const idsCell = t.get(row, 'rule_id'), applies = t.get(row, 'applies').toLowerCase(), ev = t.get(row, 'evidence'), verdict = t.get(row, 'verdict').toUpperCase();
    const label = `04-verdicts.md line ${row.line} ${idsCell}`;
    const ids = idsCell.split(/[,\s]+/).filter(Boolean);
    const unknown = ids.filter((i) => !known.has(i));
    if (unknown.length) warn(`${label}: unknown rule id(s) ${unknown.join(', ')}`);
    if (!['required', 'optional', 'no'].includes(applies)) { fail(`${label}: applies must be required, optional or no`); ok = false; }
    if (!VERDICTS.includes(verdict)) { fail(`${label}: verdict "${verdict}" not in ${VERDICTS.join('/')}`); ok = false; continue; }
    if (applies === 'no' && verdict !== 'N/A') { fail(`${label}: applies no requires verdict N/A`); ok = false; }
    if (verdict === 'N/A' && (isEmpty(ev) || ev.trim().length < 4)) { fail(`${label}: N/A needs a reason in evidence`); ok = false; }
    if (verdict !== 'N/A' && isEmpty(ev)) { fail(`${label}: ${verdict} needs evidence or a reason`); ok = false; }
    if (verdict === 'PASS') for (const m of ev.matchAll(/[\w./\\-]+\.(png|webp|jpe?g|md|html?|har|json|zip|txt|log)\b/gi)) {
      if (/^https?:/i.test(m[0])) continue;
      if (!isFile(path.resolve(work, m[0]))) { fail(`${label}: PASS evidence file "${m[0]}" not found`); ok = false; }
    }
    for (const id of ids) { const prev = seen.get(id); if (prev && prev !== verdict) { fail(`${label}: ${id} has conflicting verdicts ${prev} and ${verdict}`); ok = false; } seen.set(id, verdict); }
    if (applies === 'required' && verdict === 'FAIL') blockers.push(idsCell);
    if (applies === 'required' && verdict === 'UNVERIFIED') unverified.push(idsCell);
  }
  const missing = [...known].filter((i) => /^[FP]-/.test(i) && !seen.has(i));
  if (missing.length) { fail(`04-verdicts.md: ${missing.length} foundation/pattern rule(s) without a row (grouped rows allowed): ${missing.slice(0, 20).join(', ')}${missing.length > 20 ? ' ...' : ''}`); ok = false; }
  if (ok) pass(`verdict table: ${t.rows.length} row(s), ${seen.size} rule id(s), every verdict valid`);
  if (blockers.length) fail(`completion blocked: required row(s) FAIL: ${blockers.join('; ')}`);
  if (unverified.length) {
    if (contract.scope === 'design-only') warn(`design-only: required row(s) UNVERIFIED (report the UI as unverified): ${unverified.join('; ')}`);
    else fail(`completion blocked: required row(s) UNVERIFIED: ${unverified.join('; ')}`);
  }
  if (!blockers.length && !unverified.length) pass('no required row is FAIL or UNVERIFIED');
}

// ---------- S6 ----------
function s6() {
  if (!needContract('after captures')) return;
  if (contract.scope === 'design-only') { na('after captures: scope design-only (nothing implemented)'); return; }
  const bdir = W('01-before'), adir = W('05-after');
  if (contract.existing === 'no') {
    let ok = 0;
    for (const sc of contract.screens) for (const w of contract.widths) {
      const p = findImage(adir, `after-${sc}-${w}`);
      if (!p) fail(`05-after/after-${sc}-${w}.(png|webp) missing`); else if (imageDims(p).error) fail(`${rel(p)}: ${imageDims(p).error}`); else ok++;
    }
    if (ok === contract.screens.length * contract.widths.length) pass(`after captures: ${ok} file(s) (no before: existing_ui no)`);
    return;
  }
  const befores = listDir(bdir).filter((n) => /^before-.+\.(png|webp)$/i.test(n));
  if (!befores.length) { fail('01-before has no before-*.png|webp to pair'); return; }
  let ok = 0;
  for (const n of befores) {
    const stem = n.replace(/^before-/i, '').replace(/\.(png|webp)$/i, '');
    const bp = path.join(bdir, n); const ap = findImage(adir, `after-${stem}`);
    if (!ap) { fail(`05-after/after-${stem}.(png|webp) missing (twin of 01-before/${n})`); continue; }
    const bd = imageDims(bp), ad = imageDims(ap);
    if (bd.error || ad.error) { fail(`${n} / ${path.basename(ap)}: ${bd.error || ad.error}`); continue; }
    if (bd.w !== ad.w || bd.h !== ad.h) { fail(`${n} ${bd.w}x${bd.h} vs ${path.basename(ap)} ${ad.w}x${ad.h}: pixel dimensions differ`); continue; }
    if (sha256(bp) === sha256(ap)) warn(`${path.basename(ap)} is byte-identical to ${n} (was the after capture really taken?)`);
    if (fs.statSync(ap).mtimeMs < fs.statSync(bp).mtimeMs) warn(`${path.basename(ap)} is older than ${n}`);
    ok++;
  }
  if (ok === befores.length) pass(`after captures: ${ok} pair(s) with identical pixel dimensions`);
}

// ---------- S7 ----------
function s7() {
  if (!needContract('report')) return;
  const p = W('06-report.md'); const md = readText(p);
  if (md === null) { fail('06-report.md missing'); return; }
  const embeds = [...md.matchAll(/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?[^)]*\)/g)].map((m) => m[1]).concat([...md.matchAll(/<img[^>]+src\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1]));
  const names = new Set(); let ok = true;
  for (const e of embeds) {
    const dec = decodeURIComponent(e);
    if (!/^https?:/i.test(dec) && !isFile(path.resolve(work, dec))) { fail(`06-report.md: embedded image "${e}" not found`); ok = false; }
    names.add(path.basename(dec.split(/[?#]/)[0]).toLowerCase());
  }
  const need = [];
  if (contract.scope !== 'small-fix') for (const n of listDir(W('03-alts', 'boards'))) if (/^board-.+\.(png|webp)$/i.test(n)) need.push(n);
  if (contract.existing === 'yes') for (const n of listDir(W('01-before'))) if (/^before-.+\.(png|webp)$/i.test(n)) need.push(n);
  if (contract.existing === 'yes' && contract.scope !== 'small-fix') for (const n of listDir(W('03-alts', 'compare'))) if (/^compare-.+\.(png|webp)$/i.test(n)) need.push(n);
  if (contract.scope !== 'design-only') for (const n of listDir(W('05-after'))) if (/^after-.+\.(png|webp)$/i.test(n)) need.push(n);
  const notShown = need.filter((n) => !names.has(n.toLowerCase()));
  if (notShown.length) { fail(`06-report.md does not embed: ${notShown.join(', ')}`); ok = false; }
  if (!/https:\/\/github\.com\/[^\s)]+\/(pull\/\d+|tree\/[^\s)]+|blob\/[^\s)]+)/.test(md)) { fail('06-report.md has no GitHub PR/branch link'); ok = false; }
  if (!/RESULT:\s*(PASS|FAIL)/.test(md)) warn('06-report.md does not quote gate output (RESULT: line)');
  if (ok) pass(`report: ${embeds.length} image(s) embedded inline, boards, before/alternative comparisons and before/after pairs shown, PR link present`);
}

// ---------- run ----------
const STAGES = [['읽기 원장', s0], ['계약', s1], ['비포 캡처', s2], ['레퍼런스', s3], ['시안·출처 보드·안티슬롭', s4], ['가드레일·검증 판정', s5], ['구현·애프터 캡처', s6], ['보고', s7]];
console.log(`gate: ${work.replace(/\\/g, '/')}  stages S0..S${stage}  (skill ${SKILL_ROOT.replace(/\\/g, '/')})`);
for (let n = 0; n <= stage; n++) {
  cur = n;
  console.log(`== S${n} ${STAGES[n][0]} ==`);
  try { STAGES[n][1](); requireReading(n); }
  catch (e) { fail(`internal error: ${e.stack || e.message}`); }
}
const verdict = counts.FAIL ? 'FAIL' : 'PASS';
console.log(`RESULT: ${verdict} (S0..S${stage}: ${counts.PASS} PASS, ${counts.FAIL} FAIL, ${counts.WARN} WARN, ${counts.INFO} INFO, ${counts['N/A']} N/A)`);
process.exit(counts.FAIL ? 1 : 0);
