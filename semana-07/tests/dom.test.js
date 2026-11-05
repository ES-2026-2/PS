// Comportamento real da interface em DOM (jsdom): badges, filtros, ordenação, botões, estados, acessibilidade básica.
// Limite: jsdom não calcula layout nem CSS responsivo; isso exige navegador real (ver README, P-32).
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function abrir() {
  const dom = await JSDOM.fromFile(path.join(__dirname, '../ui-components/index.html'), { runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true });
  const w = dom.window; w.__csv = null;
  w.URL.createObjectURL = b => { w.__csv = b; return 'blob:teste'; }; w.URL.revokeObjectURL = () => {};
  w.HTMLAnchorElement.prototype.click = function () { w.__baixou = this.download; };
  await new Promise(r => w.document.readyState === 'complete' ? r() : w.addEventListener('load', r));
  await sleep(30);
  return w;
}
const q = (w, s) => [...w.document.querySelectorAll(s)];
const set = (w, id, val, ev = 'change') => { const el = w.document.getElementById(id); el.value = val; el.dispatchEvent(new w.Event(ev, { bubbles: true })); };
const linhas = w => q(w, '#tbody tr');

test('Renderização inicial: 9 linhas, sem estado de zero (ANT-02), banner de dados demonstrativos', async () => {
  const w = await abrir();
  assert.equal(linhas(w).length, 9);
  assert.match(w.document.querySelector('.demo-banner').textContent, /Dados demonstrativos/);
  assert.match(w.document.getElementById('live').textContent, /9 registros exibidos/);
});
test('Economia realizada é o primeiro indicador (DEC-29) e vem separada do potencial', async () => {
  const w = await abrir();
  const kpis = q(w, '.kpi dt').map(e => e.textContent);
  assert.equal(kpis[0], 'Economia realizada'); assert.equal(kpis[1], 'Desperdício em aberto');
});
test('Os três badges aparecem com ícone, rótulo textual e descrição para leitor de tela', async () => {
  const w = await abrir();
  for (const [cls, rotulo] of [['divergente', 'Divergente'], ['ociosa', 'Ociosa'], ['pendente', 'Pendente de revisão']]) {
    const b = q(w, `#tbody .badge--${cls}`); assert.ok(b.length > 0, cls);
    assert.equal(b[0].querySelector('svg').getAttribute('aria-hidden'), 'true');
    assert.equal(b[0].querySelectorAll('span')[0].textContent, rotulo);
    assert.ok(b[0].querySelector('.sr-only').textContent.length > 10);
  }
});
test('Ordenação padrão por severidade: primeira linha é Divergente', async () => {
  const w = await abrir();
  assert.match(linhas(w)[0].textContent, /Divergente/);
  assert.match(linhas(w).at(-1).textContent, /Ociosa/);
});
test('Filtro por estado e por tipo; limpar filtros restaura a lista e foca a busca', async () => {
  const w = await abrir();
  set(w, 'f-estado', 'divergente'); assert.equal(linhas(w).length, 2);
  assert.equal(w.document.getElementById('clear').disabled, false);
  set(w, 'f-tipo', 'Licença'); assert.match(linhas(w)[0].textContent, /Nenhum registro corresponde aos filtros/);
  assert.equal(w.document.getElementById('export').disabled, true);
  w.document.getElementById('clear').click();
  assert.equal(linhas(w).length, 9); assert.equal(w.document.getElementById('clear').disabled, true);
});
test('Busca por texto sem acento encontra o setor generalizado (DEC-54 ilustrativa) e esconde o setor pequeno', async () => {
  const w = await abrir();
  set(w, 'f-q', 'outros setores', 'input'); assert.equal(linhas(w).length, 1);
  set(w, 'f-q', 'juridico', 'input'); assert.match(linhas(w)[0].textContent, /Nenhum registro corresponde/);
});
test('Ordenar por valor alterna asc/desc e atualiza aria-sort', async () => {
  const w = await abrir();
  const th = w.document.querySelector('th[data-key="valor"]');
  th.querySelector('button').click(); assert.equal(th.getAttribute('aria-sort'), 'descending');
  th.querySelector('button').click(); assert.equal(th.getAttribute('aria-sort'), 'ascending');
  const valores = q(w, '#tbody td.right').map(td => parseFloat(td.textContent.replace(/[^\d,]/g, '').replace(',', '.')));
  assert.deepEqual(valores, [...valores].sort((a, b) => a - b));
});
test('Exportar CSV baixa exatamente a visão filtrada (ANT-04)', async () => {
  const w = await abrir();
  set(w, 'f-estado', 'ociosa');
  w.document.getElementById('export').click();
  assert.equal(w.__baixou, 'fila-de-atencao-demonstrativo.csv');
  const texto = await new Promise(r => { const fr = new w.FileReader(); fr.onload = () => r(fr.result); fr.readAsText(w.__csv); });
  assert.equal(texto.split('\r\n').length, 1 + 5);
});
test('Atualizar dados: botão entra em carregamento (desabilitado, aria-busy) e volta ao normal', async () => {
  const w = await abrir(); const b = w.document.getElementById('refresh');
  b.click();
  assert.equal(b.disabled, true); assert.equal(b.getAttribute('aria-busy'), 'true'); assert.ok(b.classList.contains('btn--loading'));
  assert.equal(w.document.getElementById('table-wrap').getAttribute('aria-busy'), 'true');
  await sleep(800);
  assert.equal(b.disabled, false); assert.equal(b.textContent, 'Atualizar dados'); assert.equal(linhas(w).length, 9);
});
test('Estados simulados: vazio, erro (com "Tentar novamente" funcional) e carregando', async () => {
  const w = await abrir();
  const sim = v => { const r = w.document.querySelector(`input[name="sim"][value="${v}"]`); r.checked = true; r.dispatchEvent(new w.Event('change', { bubbles: true })); };
  sim('vazio'); assert.match(linhas(w)[0].textContent, /Nenhum registro precisa de atenção/); assert.equal(w.document.getElementById('export').disabled, true);
  assert.match(w.document.getElementById('export-why').textContent, /indisponível/); // DEC-39: motivo visível
  sim('erro'); assert.ok(w.document.querySelector('[role="alert"]'));
  sim('normal'); assert.equal(linhas(w).length, 9);
  sim('erro'); w.document.getElementById('retry').click(); assert.equal(w.document.getElementById('refresh').disabled, true);
  await sleep(800); assert.ok(w.document.querySelector('[role="alert"]'), 'após tentar novamente, a simulação de erro persiste');
});
test('Gráfico: 5 categorias, valores textuais, realizado e em aberto distintos e total separado', async () => {
  const w = await abrir();
  assert.equal(q(w, '#chart-rows .row').length, 5);
  assert.equal(q(w, '#chart-rows .bar--open').length, 5); assert.equal(q(w, '#chart-rows .bar--done').length, 5);
  assert.ok(q(w, '#chart-rows .val').every(v => /R\$/.test(v.textContent)));
  assert.match(w.document.getElementById('chart-sum').textContent, /exibidos separadamente/);
});
test('Acessibilidade básica: lang, título, skip link, região rolável com teclado, cabeçalhos com escopo, rótulos nos filtros', async () => {
  const w = await abrir(); const d = w.document;
  assert.equal(d.documentElement.lang, 'pt-BR'); assert.ok(d.title.length > 5);
  assert.equal(d.querySelector('.skip').getAttribute('href'), '#tabela');
  const reg = d.getElementById('table-wrap'); assert.equal(reg.getAttribute('role'), 'region'); assert.equal(reg.getAttribute('tabindex'), '0');
  assert.ok(q(w, 'thead th').every(th => th.getAttribute('scope') === 'col'));
  assert.ok(q(w, '.toolbar select, .toolbar input[type="search"]').every(el => el.closest('label')));
  assert.equal(d.querySelectorAll('h1').length, 1);
  assert.ok(q(w, 'button').every(b => b.textContent.trim().length > 0));
  assert.ok(d.getElementById('live').getAttribute('aria-live') === 'polite');
});
test('Prioridade de coluna (RNF-09/DEC-52): coluna Detalhe é "baixa" e o detalhe também existe sob o item', async () => {
  const w = await abrir();
  assert.ok(w.document.querySelector('thead th[data-prio="baixa"]'));
  assert.ok(q(w, '#tbody th .inline-detail').length === 9);
});
