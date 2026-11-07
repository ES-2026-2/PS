/* Casos de regressão das correções da revisão do PR #12 (Copilot e Júlia).
   Executar: node --test semana-07/testes/ (Node 18 ou superior). */
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const A = require('../ui-components/app.js');

test('E4 (declaração do gestor) não é fonte de telemetria nem define ociosidade', () => {
  assert.equal(A.estadoLicenca({ dias: 90, fonte: 'E4', coletaAtualizada: true }), 'sem_telemetria');
  const reg = A.montarRegistros([], [{ id: 'L-X', item: 'Figma', pseud: 'COL-0001', setor: 'Design', setorN: 14, dias: 90, fonte: 'E4', preco: 8600 }]);
  assert.equal(reg.length, 0, 'licença só com E4 não entra na fila de atenção');
});

test('E1, E2 e E3 continuam definindo ociosidade; sem fonte continua sem telemetria', () => {
  ['E1', 'E2', 'E3'].forEach((f) => assert.equal(A.estadoLicenca({ dias: 30, fonte: f, coletaAtualizada: true }), 'ociosa'));
  assert.equal(A.estadoLicenca({ dias: 90 }), 'sem_telemetria');
  assert.equal(A.estadoLicenca({ dias: 90, fonte: '' }), 'sem_telemetria');
});

test('faixas de severidade pela |variação| (centésimos de ponto percentual)', () => {
  assert.equal(A.severidadeDivergencia(100), null);     // 1,00% não é divergência (RN05.1)
  assert.equal(A.severidadeDivergencia(101), 'Media');
  assert.equal(A.severidadeDivergencia(-300), 'Media'); // sinal não importa
  assert.equal(A.severidadeDivergencia(500), 'Media');
  assert.equal(A.severidadeDivergencia(501), 'Alta');
  assert.equal(A.severidadeDivergencia(2000), 'Alta');
  assert.equal(A.severidadeDivergencia(2001), 'Critica');
  assert.equal(A.severidadeDivergencia(null), null);
});

test('DEC-37: divergência crítica de 40% vem antes da média de 3%, mesmo valendo menos', () => {
  const faturas = [
    { id: 'F-A', item: 'Maior valor, divergência média', setor: 'X', nfCents: 1000000, lancCents: 1030000, confianca: 95 }, // +3%
    { id: 'F-B', item: 'Menor valor, divergência crítica', setor: 'X', nfCents: 10000, lancCents: 14000, confianca: 95 }    // +40%
  ];
  const reg = A.montarRegistros(faturas, []);
  assert.ok(reg[0].valorCents > reg[1].valorCents, 'a ordem por valor conflita com a ordem por gravidade');
  assert.deepEqual(A.ordenar(reg, 'severidade', 'desc').map((r) => r.id), ['F-B', 'F-A']);
});

test('mesma severidade: desempata por maior valor; estados mantêm Divergente > Pendente > Ociosa', () => {
  const faturas = [
    { id: 'F-1', item: 'a', setor: 'X', nfCents: 100000, lancCents: 103000, confianca: 95 },
    { id: 'F-2', item: 'b', setor: 'X', nfCents: 200000, lancCents: 206000, confianca: 95 },
    { id: 'F-3', item: 'c', setor: 'X', nfCents: 50000, lancCents: 50000, confianca: 70 }
  ];
  const lic = [{ id: 'L-1', item: 'd', pseud: 'COL-0002', setor: 'Design', setorN: 14, dias: 40, fonte: 'E1', preco: 99999999 }];
  const ids = A.ordenar(A.montarRegistros(faturas, lic), 'severidade', 'desc').map((r) => r.id);
  assert.deepEqual(ids, ['F-2', 'F-1', 'F-3', 'L-1']);
});

test('barras e eixo usam a mesma faixa: R$ 1.290 em eixo até R$ 1.500 ocupa 86,0%', () => {
  assert.equal(A.percentualBarra(129000, 150000).toFixed(1), '86.0'); // antes: 60,2%
  assert.equal(A.percentualBarra(0, 150000), 0);
  assert.equal(A.percentualBarra(150000, 150000), 100);
  assert.equal(A.percentualBarra(200000, 150000), 100); // nunca passa do fim do eixo
  assert.equal(A.percentualBarra(10, 0), 0);
});

test('cenário CT-02.13 da matriz RN05 (semana-02): NF de R$ 1.000,00', () => {
  const casos = [[103000, 'Media'], [110000, 'Alta'], [140000, 'Critica']]; // R$ 1.030, R$ 1.100 e R$ 1.400
  casos.forEach(([cartao, esperada]) => {
    const v = A.variacaoCentesimos(cartao, 100000);
    assert.equal(A.severidadeDivergencia(v), esperada);
  });
});

test('cobrança menor que a NF também é divergência e usa o valor absoluto (RN05, nota da seção 5.1)', () => {
  const v = A.variacaoCentesimos(96800, 100000); // −3,20%
  assert.equal(v, -320);
  assert.equal(A.severidadeDivergencia(v), 'Media');
  assert.equal(A.severidadeDivergencia(A.variacaoCentesimos(70000, 100000)), 'Critica'); // −30%
});
