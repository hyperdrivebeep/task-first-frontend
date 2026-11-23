// Shared helpers for gate.mjs and compose.mjs. Node 18+, no dependencies.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export function isFile(p) { try { return fs.statSync(p).isFile(); } catch { return false; } }
export function sha256(p) { return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'); }

// Markdown tables -> [{headers, rows:[{cells, line}]}]
export function splitRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|') && !s.endsWith('\\|')) s = s.slice(0, -1);
  const cells = []; let buf = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && s[i + 1] === '|') { buf += '|'; i++; continue; }
    if (s[i] === '|') { cells.push(buf.trim()); buf = ''; continue; }
    buf += s[i];
  }
  cells.push(buf.trim());
  return cells;
}
export function parseTables(md) {
  const lines = md.split(/\r?\n/); const tables = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (!lines[i].trim().startsWith('|')) continue;
    if (!/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(lines[i + 1])) continue;
    const headers = splitRow(lines[i]).map(normHeader);
    const rows = []; let j = i + 2;
    for (; j < lines.length && lines[j].trim().startsWith('|'); j++) rows.push({ cells: splitRow(lines[j]), line: j + 1 });
    tables.push({ headers, rows, line: i + 1 });
    i = j - 1;
  }
  return tables;
}
export function normHeader(h) { return clean(h).toLowerCase().replace(/\s+/g, ''); }
// strip backticks / emphasis; unwrap [text](target) to target
export function clean(c) {
  let s = (c || '').trim();
  const link = s.match(/^!?\[[^\]]*\]\(([^)\s]+)[^)]*\)$/);
  if (link) s = link[1];
  return s.replace(/^`+|`+$/g, '').replace(/^\*\*|\*\*$/g, '').trim();
}
export function findTable(tables, cols) {
  const want = cols.map(normHeader);
  const t = tables.find((t) => want.every((c) => t.headers.includes(c)));
  if (!t) return null;
  const idx = Object.fromEntries(want.map((c) => [c, t.headers.indexOf(c)]));
  return { ...t, get: (row, col) => clean(row.cells[idx[normHeader(col)]] ?? '') };
}
export const EMPTY = /^(|-|—|–|tbd|todo|\.\.\.|…|\{\{.*\}\})$/i;
export const isEmpty = (v) => EMPTY.test((v || '').trim());

// ---------- images (PNG IHDR, WebP VP8/VP8L/VP8X) ----------
export function imageDims(p) {
  let fd; const buf = Buffer.alloc(64);
  try { fd = fs.openSync(p, 'r'); fs.readSync(fd, buf, 0, 64, 0); } catch (e) { return { error: `unreadable (${e.code || e.message})` }; } finally { if (fd !== undefined) fs.closeSync(fd); }
  if (buf.readUInt32BE(0) === 0x89504e47 && buf.readUInt32BE(4) === 0x0d0a1a0a) {
    if (buf.toString('ascii', 12, 16) !== 'IHDR') return { error: 'PNG without IHDR as first chunk' };
    return { type: 'png', w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const fourcc = buf.toString('ascii', 12, 16);
    if (fourcc === 'VP8 ') {
      if (buf[23] !== 0x9d || buf[24] !== 0x01 || buf[25] !== 0x2a) return { error: 'WebP VP8 start code missing' };
      return { type: 'webp/VP8', w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    }
    if (fourcc === 'VP8L') {
      if (buf[20] !== 0x2f) return { error: 'WebP VP8L signature missing' };
      const b1 = buf[21], b2 = buf[22], b3 = buf[23], b4 = buf[24];
      return { type: 'webp/VP8L', w: 1 + (((b2 & 0x3f) << 8) | b1), h: 1 + (((b4 & 0x0f) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6)) };
    }
    if (fourcc === 'VP8X') return { type: 'webp/VP8X', w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
    return { error: `unknown WebP chunk ${JSON.stringify(fourcc)}` };
  }
  return { error: 'not a PNG or WebP file' };
}
export const IMG_EXT = ['png', 'webp'];
export function findImage(dir, stem) {
  for (const e of IMG_EXT) { const p = path.join(dir, `${stem}.${e}`); if (isFile(p)) return p; }
  return null;
}


// ```gate block of 00-contract.md -> { key: value } (keys lower-cased)
export function parseGateBlock(md) {
  const block = (md || '').match(/```gate\s*\n([\s\S]*?)```/);
  if (!block) return null;
  const kv = {};
  for (const line of block[1].split(/\r?\n/)) { const m = line.match(/^\s*([\w-]+)\s*:\s*(.*)$/); if (m) kv[m[1].toLowerCase()] = m[2].trim(); }
  return kv;
}
export const kvList = (kv, k) => (kv[k] || '').split(/[,\s]+/).map((s) => s.trim()).filter(Boolean);

// "x,y,w,h" in source-image pixels -> [x,y,w,h] or null
export function parseCrop(s) {
  const m = (s || '').trim().match(/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/);
  if (!m) return null;
  const c = m.slice(1).map(Number);
  return c[2] > 0 && c[3] > 0 ? c : null;
}
export const cropFits = (c, d) => c[0] + c[2] <= d.w && c[1] + c[3] <= d.h;
export const cropKey = (c) => (c ? c.join(',') : '-');
// image the alt_crop column refers to: the widest declared width
export const altImageStem = (id, widths) => `alt-${id}-${Math.max(...widths)}`;
