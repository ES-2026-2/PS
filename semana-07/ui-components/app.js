/* Biblioteca de componentes UI — Semana 07. Sem dependências.
   Parte pura (testável em Node): regras RN05/RN02, filtros, ordenação, CSV.
   Parte DOM: executa só no navegador. Todos os dados abaixo são DEMONSTRATIVOS. */
(function (root) {
  'use strict';

  // Rótulos seguem a DEC-49 (rótulo = nome do estado na máquina). `Ocioso` e `Pendente` do cronograma
  // correspondem a `Ociosa` (Licença) e `Pendente de revisão` (Fatura).
  var ESTADOS = {
    divergente: { label: 'Divergente', rank: 3, tom: 'divergente', desc: 'variação acima de 1,00% entre a NF e o valor cobrado (RN05.1)' },
    pendente: { label: 'Pendente de revisão', rank: 2, tom: 'pendente', desc: 'não conciliada automaticamente; exige revisão humana (RN05.2, RN05.6)' },
    ociosa: { label: 'Ociosa', rank: 1, tom: 'ociosa', desc: '30 dias corridos ou mais sem evento qualificado de uso (RN02.1)' }
  };

  // ---- Regras de negócio (puras) ----
  // Variação em centésimos de ponto percentual, ROUND_HALF_UP, aritmética inteira (RN05.2). Nulo se NF = 0.
  function variacaoCentesimos(lancCents, nfCents) {
    if (!nfCents) return null;
    var num = (lancCents - nfCents) * 10000, den = Math.abs(nfCents);
    var q = Math.floor((2 * Math.abs(num) + den) / (2 * den));
    return num < 0 ? -q : q;
  }
  // RN05.6 (confiança < 85% → pendente), RN05.2 (NF = 0 → pendente), RN05.1 (> 1,00% exclusivo → divergente).
  function estadoFatura(f) {
    if (f.confianca < 85) return 'pendente';
    var v = variacaoCentesimos(f.lancCents, f.nfCents);
    if (v === null) return 'pendente';
    return Math.abs(v) > 100 ? 'divergente' : 'conciliada';
  }
  // Tabela de decisão da ociosidade (O1 a O9): sem fonte nunca é ociosa (RN02.4).
  function estadoLicenca(l) {
    if (!l.fonte) return 'sem_telemetria';
    if (l.afastamento) return 'suspensa';
    if (l.dias >= 30 && l.coletaAtualizada === false) return 'telemetria_desatualizada';
    return l.dias >= 30 ? 'ociosa' : 'ativa';
  }
  function acaoGraduada(dias) {
    return dias >= 90 ? 'Cancelamento recomendado' : dias >= 60 ? 'Cancelamento sugerido' : dias >= 30 ? 'Downgrade' : '';
  }
  // DEC-54 (aplicação ilustrativa): setor com menos de 5 colaboradores é generalizado em visões por linha.
  function setorExibido(setor, n) { return n >= 5 ? setor : 'Outros setores'; }

  // ---- Formatação ----
  function brl(cents) { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100); }
  function pct(cent) { return (cent < 0 ? '−' : '+') + (Math.abs(cent) / 100).toFixed(2).replace('.', ',') + '%'; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // ---- Dados demonstrativos ----
  var FATURAS = [
    { id: 'F-01', item: 'Notion', setor: 'Produtividade', nfCents: 100000, lancCents: 103200, confianca: 96 },
    { id: 'F-02', item: 'Adobe Creative Cloud', setor: 'Design', nfCents: 240000, lancCents: 235200, confianca: 91 },
    { id: 'F-03', item: 'HubSpot', setor: 'Comercial', nfCents: 180000, lancCents: 180000, confianca: 78 },
    { id: 'F-04', item: 'Jira', setor: 'Engenharia', nfCents: 0, lancCents: 45000, confianca: 93 },
    { id: 'F-05', item: 'Zoom', setor: 'Comercial', nfCents: 80000, lancCents: 80600, confianca: 95 }
  ];
  var LICENCAS = [
    { id: 'L-01', item: 'Figma', pseud: 'COL-8f2a', setor: 'Design', setorN: 14, dias: 94, fonte: 'E1', preco: 8600 },
    { id: 'L-02', item: 'Figma', pseud: 'COL-3b91', setor: 'Design', setorN: 14, dias: 47, fonte: 'E1', preco: 8600 },
    { id: 'L-03', item: 'Canva Pro', pseud: 'COL-71c4', setor: 'Marketing', setorN: 9, dias: 33, fonte: 'E2', preco: 5500 },
    { id: 'L-04', item: 'Midjourney', pseud: 'COL-c0de', setor: 'Jurídico', setorN: 3, dias: 62, fonte: 'E1', preco: 15000 },
    { id: 'L-05', item: 'Slack', pseud: 'COL-5d10', setor: 'Comercial', setorN: 22, dias: 31, fonte: 'E2', preco: 4000 },
    { id: 'L-06', item: 'Notion', pseud: 'COL-a417', setor: 'Produtividade', setorN: 11, dias: 12, fonte: 'E1', preco: 4800 }
  ];
  var GRAFICO = [ // desperdício em aberto (potencial) × economia realizada, R$/mês — nunca somados (glossário)
    { cat: 'Design', aberto: 129000, realizada: 43000 },
    { cat: 'IA e geração de conteúdo', aberto: 75000, realizada: 30000 },
    { cat: 'Produtividade e documentos', aberto: 52000, realizada: 0 },
    { cat: 'CRM e vendas', aberto: 34000, realizada: 17000 },
    { cat: 'Comunicação', aberto: 21000, realizada: 10500 }
  ];

  // Monta a fila de atenção: só entram os estados Divergente, Pendente de revisão e Ociosa.
  function montarRegistros(faturas, licencas) {
    var out = [];
    faturas.forEach(function (f) {
      var e = estadoFatura(f); if (!ESTADOS[e]) return;
      var det;
      if (e === 'divergente') det = 'Variação ' + pct(variacaoCentesimos(f.lancCents, f.nfCents)) + ': NF ' + brl(f.nfCents) + ' × cobrado ' + brl(f.lancCents);
      else if (f.confianca < 85) det = 'Confiança do OCR ' + f.confianca + '% (mínimo 85%)';
      else det = 'Valor da NF igual a zero: variação não calculável';
      out.push({ id: f.id, tipo: 'Fatura', item: f.item, ref: '', setor: f.setor, valorCents: f.lancCents, estado: e, detalhe: det });
    });
    licencas.forEach(function (l) {
      var e = estadoLicenca(l); if (!ESTADOS[e]) return;
      var det = l.dias + ' dias sem uso · ' + acaoGraduada(l.dias) + ' · fonte ' + l.fonte + (l.fonte === 'E2' ? ' (evidência: apenas login)' : '');
      out.push({ id: l.id, tipo: 'Licença', item: l.item, ref: l.pseud, setor: setorExibido(l.setor, l.setorN), valorCents: l.preco, estado: e, detalhe: det });
    });
    return out;
  }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
  function filtrar(rows, f) {
    var q = norm(f.q || '');
    return rows.filter(function (r) {
      return (!f.estado || r.estado === f.estado) && (!f.tipo || r.tipo === f.tipo) &&
        (!q || norm(r.item + ' ' + r.ref + ' ' + r.setor).indexOf(q) !== -1);
    });
  }
  // Padrão: severidade (DEC-37), depois maior valor.
  function ordenar(rows, key, dir) {
    var m = dir === 'asc' ? 1 : -1;
    var get = { severidade: function (r) { return ESTADOS[r.estado].rank * 1e9 + r.valorCents; }, estado: function (r) { return ESTADOS[r.estado].rank; },
      item: function (r) { return norm(r.item); }, setor: function (r) { return norm(r.setor); }, valor: function (r) { return r.valorCents; } }[key] || function (r) { return r.valorCents; };
    return rows.slice().sort(function (a, b) { var x = get(a), y = get(b); return (x < y ? -1 : x > y ? 1 : 0) * m; });
  }
  // CSV com BOM e ponto e vírgula (Excel pt-BR). Neutraliza fórmulas (=, +, -, @) contra injeção.
  function csvCell(v) {
    var s = String(v); if (/^[=+\-@]/.test(s)) s = "'" + s;
    return /[;"\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function paraCSV(rows) {
    var head = ['Tipo', 'Item', 'Referência', 'Setor', 'Valor (R$)', 'Estado', 'Detalhe'];
    var lines = rows.map(function (r) {
      return [r.tipo, r.item, r.ref, r.setor, (r.valorCents / 100).toFixed(2).replace('.', ','), ESTADOS[r.estado].label, r.detalhe].map(csvCell).join(';');
    });
    return '\ufeff' + [head.join(';')].concat(lines).join('\r\n');
  }
  function totaisGrafico(g) {
    return g.reduce(function (a, x) { return { aberto: a.aberto + x.aberto, realizada: a.realizada + x.realizada }; }, { aberto: 0, realizada: 0 });
  }

  var API = { ESTADOS: ESTADOS, variacaoCentesimos: variacaoCentesimos, estadoFatura: estadoFatura, estadoLicenca: estadoLicenca,
    acaoGraduada: acaoGraduada, setorExibido: setorExibido, brl: brl, pct: pct, montarRegistros: montarRegistros, filtrar: filtrar,
    ordenar: ordenar, paraCSV: paraCSV, totaisGrafico: totaisGrafico, FATURAS: FATURAS, LICENCAS: LICENCAS, GRAFICO: GRAFICO };
  if (typeof module !== 'undefined' && module.exports) { module.exports = API; }
  if (typeof document === 'undefined') return;

  // ---- Componentes (DOM) ----
  var ICONES = {
    divergente: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4M12 17.5v.01"/>',
    ociosa: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pendente: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17.5v.01"/>'
  };
  function badge(estado) {
    var e = ESTADOS[estado];
    return '<span class="badge badge--' + e.tom + '"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONES[estado] + '</svg>' +
      '<span>' + e.label + '</span><span class="sr-only">: ' + e.desc + '</span></span>';
  }
  function $(id) { return document.getElementById(id); }
  var dados = montarRegistros(FATURAS, LICENCAS);
  var ui = { estado: '', tipo: '', q: '', sort: 'severidade', dir: 'desc', sim: 'normal', view: 'normal' };

  function renderKpis() {
    var t = totaisGrafico(GRAFICO);
    var oc = dados.filter(function (r) { return r.estado === 'ociosa'; }).length;
    var dv = dados.filter(function (r) { return r.estado !== 'ociosa'; }).length;
    var k = [
      ['Economia realizada', brl(t.realizada) + '/mês', 'efetivada e confirmada', 'kpi--primary'],
      ['Desperdício em aberto', brl(t.aberto) + '/mês', 'potencial, não somado ao realizado', ''],
      ['Licenças ociosas na fila', String(oc), 'de ' + LICENCAS.length + ' licenças demonstrativas', ''],
      ['Faturas Divergentes ou Pendentes', String(dv), 'de ' + FATURAS.length + ' faturas demonstrativas', ''],
      ['Cobertura de telemetria', '84%', 'meta ≥ 80% (MI-03) · valor ilustrativo', '']
    ];
    $('kpis').innerHTML = k.map(function (x) {
      return '<div class="kpi ' + x[3] + '"><dt>' + x[0] + '</dt><dd class="num">' + esc(x[1]) + '<small>' + x[2] + '</small></dd></div>';
    }).join('');
  }
  function renderGrafico() {
    var max = Math.max.apply(null, GRAFICO.map(function (g) { return Math.max(g.aberto, g.realizada); }));
    var topo = Math.ceil(max / 25000) * 25000, t = totaisGrafico(GRAFICO);
    function linha(cls, rot, v) {
      return '<div class="barline"><span class="bar bar--' + cls + '" style="width:' + (v / topo * 70).toFixed(1) + '%"></span><span class="val num">' +
        '<span class="sr-only">' + rot + ': </span>' + brl(v) + '</span></div>';
    }
    $('chart-rows').innerHTML = GRAFICO.map(function (g) {
      return '<li class="row"><b>' + esc(g.cat) + '</b><div class="bars">' + linha('open', 'Em aberto', g.aberto) + linha('done', 'Realizada', g.realizada) + '</div></li>';
    }).join('');
    $('chart-axis').innerHTML = '<span></span><div class="num"><span>R$ 0</span><span>' + brl(topo / 2).replace(',00', '') + '</span><span>' + brl(topo).replace(',00', '') + '</span></div>';
    $('chart-sum').textContent = 'Total demonstrativo: ' + brl(t.aberto) + '/mês em aberto e ' + brl(t.realizada) + '/mês realizado (exibidos separadamente).';
  }
  function visiveis() { return ordenar(filtrar(dados, ui), ui.sort, ui.dir); }
  function renderTabela() {
    var body = $('tbody'), rows = visiveis(), wrap = $('table-wrap'), msg = $('live');
    wrap.setAttribute('aria-busy', ui.view === 'loading' ? 'true' : 'false');
    if (ui.view === 'loading') {
      body.innerHTML = [1, 2, 3, 4].map(function () { return '<tr>' + '<td colspan="6"><div class="skel" role="presentation"></div></td></tr>'; }).join('');
      msg.textContent = 'Carregando registros…';
    } else if (ui.view === 'erro') {
      body.innerHTML = '<tr><td colspan="6"><div class="state err" role="alert"><p><strong>Não foi possível carregar os registros.</strong><br>Falha simulada de comunicação. Nenhum dado foi alterado.</p><button type="button" class="btn btn--secondary" id="retry">Tentar novamente</button></div></td></tr>';
      msg.textContent = 'Erro ao carregar registros.';
      $('retry').addEventListener('click', refresh);
    } else if (ui.view === 'vazio' || !rows.length) {
      var filtrado = ui.view !== 'vazio' && (ui.estado || ui.tipo || ui.q);
      body.innerHTML = '<tr><td colspan="6"><div class="state"><p><strong>' + (filtrado ? 'Nenhum registro corresponde aos filtros.' : 'Nenhum registro precisa de atenção.') +
        '</strong></p>' + (filtrado ? '<p>Remova algum filtro para ver mais resultados.</p>' : '<p>Divergências, pendências e licenças ociosas aparecerão aqui.</p>') + '</div></td></tr>';
      msg.textContent = 'Nenhum registro.';
    } else {
      body.innerHTML = rows.map(function (r) {
        return '<tr><td data-label="Estado">' + badge(r.estado) + '</td>' +
          '<th scope="row" style="font-weight:600">' + esc(r.item) + (r.ref ? '<small>' + esc(r.ref) + ' · pseudônimo</small>' : '') + '<span class="inline-detail">' + esc(r.detalhe) + '</span></th>' +
          '<td data-prio="media">' + r.tipo + '</td><td data-prio="media">' + esc(r.setor) + '</td>' +
          '<td class="right num">' + brl(r.valorCents) + '</td><td data-prio="baixa">' + esc(r.detalhe) + '</td></tr>';
      }).join('');
      msg.textContent = rows.length + (rows.length === 1 ? ' registro exibido.' : ' registros exibidos.');
    }
    ['estado', 'item', 'setor', 'valor'].forEach(function (k) {
      var th = document.querySelector('th[data-key="' + k + '"]');
      th.setAttribute('aria-sort', ui.sort === k ? (ui.dir === 'asc' ? 'ascending' : 'descending') : 'none');
    });
    var ex = $('export'), semDados = ui.view !== 'normal' || !rows.length;
    ex.disabled = semDados;
    $('export-why').textContent = semDados ? 'Exportação indisponível: não há registros exibidos.' : 'Exporta exatamente os ' + rows.length + ' registros filtrados.';
    $('clear').disabled = !(ui.estado || ui.tipo || ui.q);
  }
  function refresh() {
    var b = $('refresh');
    ui.view = 'loading'; b.disabled = true; b.classList.add('btn--loading'); b.setAttribute('aria-busy', 'true'); b.lastChild.textContent = 'Atualizando…';
    renderTabela();
    setTimeout(function () { // simulação sem backend; não bloqueia a interface
      ui.view = ui.sim; b.disabled = false; b.classList.remove('btn--loading'); b.removeAttribute('aria-busy'); b.lastChild.textContent = 'Atualizar dados';
      renderTabela();
    }, 700);
  }
  function baixar() {
    var rows = visiveis(); if (!rows.length) return;
    var url = URL.createObjectURL(new Blob([paraCSV(rows)], { type: 'text/csv;charset=utf-8' }));
    var a = document.createElement('a'); a.href = url; a.download = 'fila-de-atencao-demonstrativo.csv';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  renderKpis(); renderGrafico(); renderTabela();
  $('f-estado').addEventListener('change', function (e) { ui.estado = e.target.value; renderTabela(); });
  $('f-tipo').addEventListener('change', function (e) { ui.tipo = e.target.value; renderTabela(); });
  $('f-q').addEventListener('input', function (e) { ui.q = e.target.value; renderTabela(); });
  $('clear').addEventListener('click', function () {
    ui.estado = ui.tipo = ui.q = ''; $('f-estado').value = ''; $('f-tipo').value = ''; $('f-q').value = ''; renderTabela(); $('f-q').focus();
  });
  $('refresh').addEventListener('click', refresh);
  $('export').addEventListener('click', baixar);
  document.querySelectorAll('th[data-key] button').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.parentNode.getAttribute('data-key');
      ui.dir = ui.sort === k && ui.dir === 'desc' ? 'asc' : 'desc'; ui.sort = k; renderTabela();
    });
  });
  document.querySelectorAll('input[name="sim"]').forEach(function (r) {
    r.addEventListener('change', function () { ui.sim = r.value; ui.view = r.value; renderTabela(); });
  });

  // Medição indicativa do carregamento desta sessão (não é evidência de aceite do RNF-06).
  addEventListener('load', function () {
    setTimeout(function () {
      var n = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
      if (!n) return;
      var lcp = 0;
      try { new PerformanceObserver(function (l) { var e = l.getEntries(); lcp = e[e.length - 1].startTime; }).observe({ type: 'largest-contentful-paint', buffered: true }); } catch (x) { /* navegador sem suporte */ }
      setTimeout(function () {
        $('perf').textContent = 'Medição local desta sessão: DOMContentLoaded ' + Math.round(n.domContentLoadedEventEnd) + ' ms · load ' + Math.round(n.loadEventEnd) +
          ' ms' + (lcp ? ' · LCP ' + Math.round(lcp) + ' ms' : '') + '. Meta: < 2000 ms (RNF-06). Valor indicativo; o procedimento oficial está no Entregável 2.';
      }, 50);
    }, 0);
  });
})(typeof window !== 'undefined' ? window : globalThis);
