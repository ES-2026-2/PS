// Regras de negócio embutidas nos componentes: RN05 (divergência), RN02 (ociosidade), DEC-37, DEC-54, LGPD-01.
const test = require('node:test');
const assert = require('node:assert/strict');
const L = require('../ui-components/app.js');
const sp = s => s.replace(/\u00a0/g, ' ');

test('RN05.1: exatamente 1,00% concilia (limite exclusivo)', () => {
  assert.equal(L.estadoFatura({ confianca: 95, nfCents: 100000, lancCents: 101000 }), 'conciliada');
});
test('RN05.1: 1,01% é Divergente', () => {
  assert.equal(L.estadoFatura({ confianca: 95, nfCents: 100000, lancCents: 101010 }), 'divergente');
});
test('RN05.2: arredondamento ROUND_HALF_UP em 2 casas (1,005% → 1,01%)', () => {
  assert.equal(L.variacaoCentesimos(101005, 100000), 101);
  assert.equal(L.estadoFatura({ confianca: 95, nfCents: 100000, lancCents: 101005 }), 'divergente');
});
test('RN05.2: 1,004% arredonda para 1,00% e concilia', () => {
  assert.equal(L.variacaoCentesimos(101004, 100000), 100);
});
test('RN05.2: variação negativa também é avaliada em módulo', () => {
  assert.equal(L.variacaoCentesimos(235200, 240000), -200);
  assert.equal(L.estadoFatura({ confianca: 91, nfCents: 240000, lancCents: 235200 }), 'divergente');
});
test('RN05.2: NF = 0 vai para Pendente de revisão', () => {
  assert.equal(L.variacaoCentesimos(45000, 0), null);
  assert.equal(L.estadoFatura({ confianca: 93, nfCents: 0, lancCents: 45000 }), 'pendente');
});
test('RN05.6: confiança do OCR abaixo de 85% é Pendente; 85% segue a conciliação', () => {
  assert.equal(L.estadoFatura({ confianca: 84, nfCents: 100, lancCents: 100 }), 'pendente');
  assert.equal(L.estadoFatura({ confianca: 85, nfCents: 100, lancCents: 100 }), 'conciliada');
});
test('RN02.1: 29 dias não aciona; 30 dias aciona Ociosa', () => {
  assert.equal(L.estadoLicenca({ dias: 29, fonte: 'E1' }), 'ativa');
  assert.equal(L.estadoLicenca({ dias: 30, fonte: 'E1' }), 'ociosa');
});
test('RN02.4: sem fonte de telemetria nunca é Ociosa', () => {
  assert.equal(L.estadoLicenca({ dias: 200, fonte: null }), 'sem_telemetria');
});
test('RN02.6 e RN02.7: afastamento suspende; coleta desatualizada não gera ociosidade', () => {
  assert.equal(L.estadoLicenca({ dias: 90, fonte: 'E1', afastamento: true }), 'suspensa');
  assert.equal(L.estadoLicenca({ dias: 90, fonte: 'E1', coletaAtualizada: false }), 'telemetria_desatualizada');
});
test('RN02.8: graduação 30/60/90 dias', () => {
  assert.equal(L.acaoGraduada(30), 'Downgrade');
  assert.equal(L.acaoGraduada(60), 'Cancelamento sugerido');
  assert.equal(L.acaoGraduada(90), 'Cancelamento recomendado');
});
test('DEC-54 (ilustrativa): setor com menos de 5 colaboradores é generalizado', () => {
  assert.equal(L.setorExibido('Jurídico', 3), 'Outros setores');
  assert.equal(L.setorExibido('Design', 5), 'Design');
});
const regs = () => L.montarRegistros(L.FATURAS, L.LICENCAS);
test('Fila de atenção só contém os três estados obrigatórios', () => {
  const estados = new Set(regs().map(r => r.estado));
  assert.deepEqual([...estados].sort(), ['divergente', 'ociosa', 'pendente']);
  assert.equal(regs().length, 9); // 4 faturas (a conciliada fica de fora) + 5 licenças ociosas (a ativa fica de fora)
});
test('LGPD-01: nenhum nome ou CPF; licenças aparecem só por pseudônimo COL-xxxx', () => {
  regs().filter(r => r.tipo === 'Licença').forEach(r => assert.match(r.ref, /^COL-[0-9a-f]{4}$/));
  assert.ok(!JSON.stringify(regs()).match(/\d{3}\.\d{3}\.\d{3}-\d{2}/));
});
test('DEC-37: ordenação padrão por severidade (Divergente antes de Pendente antes de Ociosa)', () => {
  const ordem = L.ordenar(regs(), 'severidade', 'desc').map(r => r.estado);
  const rank = { divergente: 3, pendente: 2, ociosa: 1 };
  for (let i = 1; i < ordem.length; i++) assert.ok(rank[ordem[i - 1]] >= rank[ordem[i]]);
});
test('Filtros: por estado, tipo e busca sem acento', () => {
  assert.ok(L.filtrar(regs(), { estado: 'divergente' }).every(r => r.estado === 'divergente'));
  assert.ok(L.filtrar(regs(), { tipo: 'Licença' }).every(r => r.tipo === 'Licença'));
  assert.equal(L.filtrar(regs(), { q: 'MARKETING' }).length, 1);
  assert.equal(L.filtrar(regs(), { q: 'juridico' }).length, 0); // setor generalizado não vaza pela busca
  assert.equal(L.filtrar(regs(), { q: 'outros setores' }).length, 1);
  assert.equal(L.filtrar(regs(), { estado: 'divergente', tipo: 'Licença' }).length, 0);
});
test('Formatação em reais e percentual', () => {
  assert.equal(sp(L.brl(100000)), 'R$ 1.000,00');
  assert.equal(L.pct(320), '+3,20%');
  assert.equal(L.pct(-200), '−2,00%');
});
test('CSV: exporta exatamente as linhas filtradas (ANT-04), com BOM e separador ;', () => {
  const f = L.filtrar(regs(), { estado: 'ociosa' });
  const linhas = L.paraCSV(f).split('\r\n');
  assert.equal(linhas.length, f.length + 1);
  assert.ok(linhas[0].startsWith('\ufeffTipo;Item;'));
});
test('CSV: neutraliza fórmulas e escapa aspas e ponto e vírgula', () => {
  const csv = L.paraCSV([{ tipo: 'Fatura', item: '=SOMA(A1)', ref: '', setor: 'a;b', valorCents: 100, estado: 'divergente', detalhe: 'diz "oi"' }]);
  assert.ok(csv.includes("'=SOMA(A1)"));
  assert.ok(csv.includes('"a;b"'));
  assert.ok(csv.includes('"diz ""oi"""'));
});
test('Economia realizada e desperdício em aberto são totalizados separadamente', () => {
  const t = L.totaisGrafico(L.GRAFICO);
  assert.equal(t.aberto, 311000);
  assert.equal(t.realizada, 100500);
});
