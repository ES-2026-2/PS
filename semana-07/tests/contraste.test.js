// Contraste WCAG 2.1 calculado a partir das variáveis reais de styles.css.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path');
const css = fs.readFileSync(path.join(__dirname, '../ui-components/styles.css'), 'utf8');
const v = {}; for (const m of css.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)) v[m[1]] = m[2];
const lum = h => { const c = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255).map(x => x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const texto = [
  ['texto/fundo', 'text', 'bg'], ['texto/superfície', 'text', 'surface'], ['texto secundário/fundo', 'muted', 'bg'],
  ['texto secundário/superfície', 'muted', 'surface'], ['placeholder/superfície (DEC-48 ≥ 4,5)', 'placeholder', 'surface'],
  ['botão primário', 'on-primary', 'primary'], ['botão primário hover', 'on-primary', 'primary-hover'],
  ['botão secundário', 'primary', 'surface'], ['botão secundário hover', 'primary-hover', 'pendente-bg'],
  ['badge Divergente', 'divergente-fg', 'divergente-bg'], ['badge Ociosa', 'ociosa-fg', 'ociosa-bg'], ['badge Pendente', 'pendente-fg', 'pendente-bg']
];
for (const [nome, fg, bg] of texto) test(`Contraste de texto ≥ 4,5:1 — ${nome}`, () => {
  assert.ok(v[fg] && v[bg], 'variável ausente');
  const r = ratio(v[fg], v[bg]); assert.ok(r >= 4.5, `${r.toFixed(2)}:1`);
});
test('Botão desabilitado (#475569 sobre #e2e8f0) ≥ 4,5:1', () => assert.ok(ratio('#475569', '#e2e8f0') >= 4.5));
const naoTexto = [['foco/superfície', 'focus', 'surface'], ['barra em aberto/superfície', 'bar-open', 'surface'], ['barra realizada/superfície', 'bar-done', 'surface'],
  ['borda Divergente/fundo do badge', 'divergente-bd', 'divergente-bg'], ['borda Ociosa/fundo do badge', 'ociosa-bd', 'ociosa-bg'], ['borda Pendente/fundo do badge', 'pendente-bd', 'pendente-bg']];
for (const [nome, a, b] of naoTexto) test(`Contraste não textual ≥ 3:1 (WCAG 1.4.11) — ${nome}`, () => {
  const r = ratio(v[a], v[b]); assert.ok(r >= 3, `${r.toFixed(2)}:1`);
});
