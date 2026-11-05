// RNF-06: orçamento de tamanho (proposta de projeto) e ausência de dependências externas. NÃO mede tempo de carregamento.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), zlib = require('node:zlib');
const dir = path.join(__dirname, '../ui-components');
const arqs = ['index.html', 'styles.css', 'app.js'].map(f => [f, fs.readFileSync(path.join(dir, f))]);
test('Total dos 3 arquivos ≤ 50 KB sem compressão (orçamento proposto)', () => {
  const total = arqs.reduce((s, [, b]) => s + b.length, 0);
  console.log('  tamanhos (bytes, gzip):', arqs.map(([f, b]) => `${f}=${b.length}/${zlib.gzipSync(b).length}`).join('  '), `total=${total}`);
  assert.ok(total <= 50 * 1024);
});
test('Sem recursos externos (http/https em src, href, import ou url())', () => {
  for (const [f, b] of arqs) assert.ok(!/(src|href)=["']https?:|@import|url\(\s*["']?https?:/i.test(b.toString()), f);
});
test('Script com defer e sem fontes web', () => {
  const html = arqs[0][1].toString();
  assert.match(html, /<script src="app\.js" defer>/);
  assert.ok(!/@font-face|fonts\.googleapis/i.test(arqs[1][1].toString()));
});
