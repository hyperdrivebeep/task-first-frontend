#!/usr/bin/env node
// Renders provenance boards and before/alternative comparison images from the work folder,
// so the images show exactly the regions declared in board.md. Needs ffmpeg on PATH.
// Usage: node compose.mjs <work> [boards|compare|all]
// Writes, next to every image, a <name>.json manifest (input files, sha256, crops, output sha256)
// that gate.mjs checks: editing board.md or a source image without recomposing FAILs the gate.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { isFile, sha256, parseTables, findTable, imageDims, findImage, parseGateBlock, kvList, parseCrop, cropFits, cropKey, boardAltImage } from './lib.mjs';

const [workArg, what = 'all'] = process.argv.slice(2);
if (!workArg || !['boards', 'compare', 'all'].includes(what)) {
  console.error('usage: node compose.mjs <work> [boards|compare|all]');
  process.exit(2);
}
const work = path.resolve(workArg);
const rel = (p) => path.relative(work, p).replace(/\\/g, '/');
const die = (m) => { console.error(`compose: ${m}`); process.exit(1); };

const kv = parseGateBlock(fs.existsSync(path.join(work, '00-contract.md')) ? fs.readFileSync(path.join(work, '00-contract.md'), 'utf8') : '');
if (!kv) die('00-contract.md with a ```gate block is required');
const widths = kvList(kv, 'widths').map(Number), screens = kvList(kv, 'screens');
const ROW_H = 360, GAP = 16, BLANK_W = 240, MAX_W = 900;
const even = (n) => Math.max(2, 2 * Math.round(n / 2));

function ffmpeg(args, out) {
  const r = spawnSync('ffmpeg', ['-loglevel', 'error', '-y', ...args, out], { encoding: 'utf8' });
  if (r.error) die(`ffmpeg not runnable (${r.error.code || r.error.message}); install ffmpeg`);
  if (r.status !== 0) die(`ffmpeg failed for ${rel(out)}:\n${r.stderr}`);
}
function writeManifest(out, kind, inputs, extra) {
  const m = { generator: 'compose.mjs', kind, inputs: inputs.map((i) => ({ file: rel(i.file), sha256: sha256(i.file), crop: i.crop ? cropKey(i.crop) : '-' })), ...extra, output_sha256: sha256(out) };
  fs.writeFileSync(out.replace(/\.(png|webp)$/i, '.json'), JSON.stringify(m, null, 2) + '\n');
}
// one strip: [left crop or blank] gap [right crop], height ROW_H, padded to width `pad`
const boxW = (c) => Math.min(MAX_W, even(c[2] * ROW_H / c[3]));
// crop, then fit inside boxW x ROW_H without distortion (very wide crops are letterboxed on white)
const fit = (i, c) => `[${i}:v]crop=${c[2]}:${c[3]}:${c[0]}:${c[1]},scale=${boxW(c)}:${ROW_H}:force_original_aspect_ratio=decrease,pad=${boxW(c)}:${ROW_H}:(ow-iw)/2:(oh-ih)/2:white,setsar=1`;
function stripFilter(iL, cL, iR, cR, tag, pad) {
  const wR = boxW(cR);
  const right = `${fit(iR, cR)}[r${tag}]`;
  if (iL === null) return { w: BLANK_W + GAP + wR, f: `${right};[r${tag}]pad=${pad}:${ROW_H + GAP}:${BLANK_W + GAP}:0:white[s${tag}]` };
  const wL = boxW(cL);
  return { w: wL + GAP + wR, f: `${fit(iL, cL)},pad=${wL + GAP}:${ROW_H}:0:0:white[l${tag}];${right};[l${tag}][r${tag}]hstack,pad=${pad}:${ROW_H + GAP}:0:0:white[s${tag}]` };
}
function stack(tags) { return tags.length === 1 ? `[${tags[0]}]null[out]` : `${tags.map((t) => `[${t}]`).join('')}vstack=inputs=${tags.length}[out]`; }

function boards() {
  const md = path.join(work, '03-alts', 'boards', 'board.md');
  if (!isFile(md)) die('03-alts/boards/board.md missing');
  const t = findTable(parseTables(fs.readFileSync(md, 'utf8')), ['alt', 'element', 'ref_file', 'ref_crop', 'alt_crop']);
  if (!t) die('board.md provenance table needs columns alt | element | ref_file | ref_crop | alt_crop');
  const byAlt = new Map();
  for (const row of t.rows) {
    const alt = t.get(row, 'alt').toLowerCase().replace(/^alt-/, '');
    const ref = t.get(row, 'ref_file'), own = /^자체\s*설계$/.test(ref);
    const { name: altName, file: altFile } = boardAltImage(t, row, path.join(work, '03-alts'), alt, widths);
    if (!altFile) die(`board.md line ${row.line}: alternative image ${altName} not found in 03-alts`);
    const ac = parseCrop(t.get(row, 'alt_crop'));
    if (!ac || !cropFits(ac, imageDims(altFile))) die(`board.md line ${row.line}: alt_crop "${t.get(row, 'alt_crop')}" is not x,y,w,h inside ${rel(altFile)}`);
    let refFile = null, rc = null;
    if (!own) {
      refFile = path.join(work, '02-refs', ref);
      if (!isFile(refFile)) die(`board.md line ${row.line}: ${ref} not in 02-refs`);
      rc = parseCrop(t.get(row, 'ref_crop'));
      if (!rc || !cropFits(rc, imageDims(refFile))) die(`board.md line ${row.line}: ref_crop "${t.get(row, 'ref_crop')}" is not x,y,w,h inside 02-refs/${ref}`);
    }
    if (!byAlt.has(alt)) byAlt.set(alt, []);
    byAlt.get(alt).push({ line: row.line, refFile, rc, altFile, ac });
  }
  for (const [alt, rows] of byAlt) {
    const inputs = [], parts = [];
    const widthsOf = rows.map((r) => (r.refFile ? boxW(r.rc) : BLANK_W) + GAP + boxW(r.ac));
    const pad = Math.max(...widthsOf);
    rows.forEach((r, k) => {
      let iL = null;
      if (r.refFile) { iL = inputs.length; inputs.push({ file: r.refFile, crop: r.rc }); }
      const iR = inputs.length; inputs.push({ file: r.altFile, crop: r.ac });
      parts.push(stripFilter(iL, r.rc, iR, r.ac, k, pad).f);
    });
    const out = path.join(work, '03-alts', 'boards', `board-${alt}.png`);
    ffmpeg([...inputs.flatMap((i) => ['-i', i.file]), '-filter_complex', `${parts.join(';')};${stack(rows.map((_, k) => `s${k}`))}`, '-map', '[out]', '-frames:v', '1'], out);
    writeManifest(out, 'board', inputs, { rows: rows.map((r) => ({ line: r.line, ref_file: r.refFile ? path.basename(r.refFile) : '자체 설계', ref_crop: cropKey(r.rc), alt_file: path.basename(r.altFile), alt_crop: cropKey(r.ac) })) });
    console.log(`board ${rel(out)}: ${rows.length} row(s)`);
  }
}

function compare() {
  if ((kv.existing_ui || '').toLowerCase() !== 'yes') { console.log('compare: existing_ui is not yes; nothing to compare'); return; }
  const screen = kv.compare_screen || screens[0];
  const dir = path.join(work, '03-alts');
  const ids = new Set(fs.readdirSync(dir).map((n) => n.match(/^alt-([a-z0-9]+)-(\d+)\.(png|webp)$/i)?.[1]?.toLowerCase()).filter(Boolean));
  fs.mkdirSync(path.join(dir, 'compare'), { recursive: true });
  for (const id of ids) for (const w of widths) {
    const before = findImage(path.join(work, '01-before'), `before-${screen}-${w}`);
    const alt = findImage(dir, `alt-${id}-${w}`);
    if (!before || !alt) die(`compare ${id}-${w}: needs 01-before/before-${screen}-${w} and 03-alts/alt-${id}-${w}`);
    const bd = imageDims(before), ad = imageDims(alt);
    const cb = [0, 0, bd.w, bd.h], ca = [0, 0, ad.w, ad.h];
    const s = stripFilter(0, cb, 1, ca, 0, boxW(cb) + GAP + boxW(ca));
    const out = path.join(dir, 'compare', `compare-${id}-${w}.png`);
    ffmpeg(['-i', before, '-i', alt, '-filter_complex', `${s.f};[s0]null[out]`, '-map', '[out]', '-frames:v', '1'], out);
    writeManifest(out, 'compare', [{ file: before, crop: cb }, { file: alt, crop: ca }], { screen, width: w });
    console.log(`compare ${rel(out)}`);
  }
}

if (what !== 'compare') boards();
if (what !== 'boards') compare();
