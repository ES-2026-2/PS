# Entregável 2 — Protótipo Hi-Fi Refatorado com Ajustes Visuais e de Fluxo

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 13 (02/11/2026 – 08/11/2026) — Ajustes e Tratamento de Fricções de UX  
**Responsável:** D1 / D2 (Designers), com AR1 / AR2 na conferência  
**Situação:** ✅ **Aplicado no Figma** — 12 de 14 ajustes aplicados ou conferidos; `AJ-11` aguarda decisão (P-62) e `AJ-14` (opcional) não foi feito  
**Prazo:** 08/11/2026  

---

## 1. Objetivo e situação

O cronograma pede o protótipo refatorado "com ajustes visuais e de fluxo", a partir do feedback
dos usuários. Há dois tipos de ajuste, e só um deles pode ser especificado agora:

| Origem do ajuste | Situação | Onde está |
|:---|:---:|:---|
| **Inspeção documental** (fricções `FR-01` a `FR-09` do Entregável 1) e pendências de tela herdadas (P-45, P-47, P-48) | ✅ Especificado — 14 ajustes | Seções 3 e 4 |
| **Sessões com usuários** (aba `Problemas_UX`, coluna *Ação de Ajuste (Semana 13)*) | ◐ 1 problema da sessão USR-01 (simulada), prioridade P3 — sem ajuste no protótipo | Seção 5 |

> **Os ajustes foram aplicados no Figma.** As Seções 3 e 4 continuam sendo a especificação; a
> Seção 6 registra o que foi feito em cada ajuste, as telas novas e as capturas em
> [`wireframes/semana-13/`](../wireframes/semana-13/).

**Por que aplicar antes das sessões.** Os ajustes `AJ-01` a `AJ-08` não são refinamento: sem
eles, 6 das 8 tarefas do roteiro não podem ser medidas até o fim (Entregável 1, Seção 6.1).
Fazer as sessões com o protótipo atual produziria tempos sem definição de término.

---

## 2. Regras desta refatoração

1. **Nenhuma regra de negócio nova.** Todo estado ou texto acrescentado já existe em uma
   máquina de estados, em um cenário `CT-xx` ou no catálogo `MSG`. A coluna *Fonte* aponta qual.
2. **Nenhum número novo.** Valores vêm da massa canônica (Semana 08, Seção 10; Semana 09,
   Seção 10).
3. **Componentes do Design System**, sem estilo local: confirmação por CMP-16 (feedback de
   sistema) e estados por badge com o nome exato da máquina (DEC-49).
4. **Variante tablet junto.** Tela alterada tem a variante de 768 px alterada na mesma entrega
   (HF-20 e HF-36).
5. **Um ajuste, uma captura.** Cada ajuste aplicado reexporta a imagem correspondente em
   `wireframes/`, como a Semana 11 fez com a SCR-09.

---

## 3. Ajustes de fluxo (tornam as tarefas mensuráveis)

Cada ajuste liga a **ação final** de uma tarefa a um estado de confirmação. Transição igual à
da Semana 11 (`DISSOLVE`, 0,2 s).

| ID | Tarefa · Tela | O que falta hoje | Ajuste | Fonte do estado | Fricção |
|:---|:---|:---|:---|:---|:---|
| AJ-01 | T1 · HF-42 → SCR-01 | HF-42 (varredura em andamento) não leva a lugar nenhum | Ligar HF-42 a uma variante da SCR-01 com a conexão nova em `Ativa` e a contagem de assinaturas mapeadas. Gatilho por tempo (*After delay*) ou por um link *"Ver conexões"* | Máquina `Conexão` · CT-01.1 · DEC-85 (proposta) | FR-01 |
| AJ-02 | T2 · SCR-02b | *"Registrar desfecho"* sem reação | Ao confirmar com um desfecho selecionado: aviso de sucesso (CMP-16) e fatura com badge `Tratada`; o bloco *"Renovação automática bloqueada"* dá lugar a *"Renovação liberada"* | Máquina `Fatura` · SY-08 · CT-02.14 | FR-01 |
| AJ-03 | T2 · SCR-02c | Descarte do documento sem reação | Ao confirmar *"Não é uma fatura"*: aviso de sucesso e retorno à SCR-02 com o item em `Descartada` | Máquina `Fatura` · CT-02.15 | FR-01 |
| AJ-04 | T3 · SCR-03b | Correção de categoria sem reação | Variante da SCR-03b com a categoria nova e a origem **"Ajuste manual"** visível | CT-03.3 · `OrigemCategoria` | FR-01 |
| AJ-05 | T7 · SCR-09 | *"Realocar"*, *"Registrar justificativa"* e *"Rejeitar"* sem reação | *"Realocar 3 licenças do estoque"* → variante com badge `Atendida por realocação` e a linha do tempo atualizada. *"Rejeitar"* → variante `Rejeitada`. *"Registrar justificativa"* → campo de justificativa aberto na própria tela (sem modal sobre modal, ANT-06) | Máquina `Requisição` · DEC-62 · DEC-24 · UF-01 | FR-01 |
| AJ-06 | T8 · SCR-10a | *"Exportar PDF \| XLSX"* sem reação; não há como conferir a anonimização | Ao exportar: aviso de sucesso e uma **prévia do arquivo gerado** com os filtros aplicados no cabeçalho e os colaboradores pseudonimizados (`COL-xxxx`) | CT-10.1 · DEC-26 · DEC-53 · ANT-04 | FR-01 |
| AJ-07 | T4 · SCR-07a/07b | A confirmação dentro do modal não consta como ligada; nenhuma tela mostra o efeito da ação | Conferir no Figma. Se faltar: ao confirmar, voltar à SCR-07 com a ação em `Janela de arrependimento` (contador de 72 h) e, na SCR-04, a licença com badge `Em downgrade` | Máquina `Ação` · DEC-20 · DEC-40 · P-47 | FR-01 · FR-07 |
| AJ-08 | T6 · e-mail | A peça do e-mail de alerta (RI-20) não existe | Produzir o e-mail simulado com **valor, data da cobrança e dias restantes**, usando a mesma assinatura que a SCR-06 destaca. Formato para imprimir ou exibir fora do protótipo | RI-20 · RN03 · UF-02 | FR-02 |

**Sobre o AJ-08.** O conteúdo do e-mail precisa repetir exatamente os valores do alerta exibido
na SCR-06. Este documento não redige o e-mail para não fixar valor sem conferir a tela no
Figma; a conferência é da AR2 (P-59).

**Sobre o AJ-05.** A tarefa T7 admite mais de uma decisão correta (realocar ou justificar). As
duas saídas precisam estar ligadas, ou o protótipo induz a resposta.

---

## 4. Ajustes de conteúdo e de higiene

| ID | Tela | Problema | Ajuste | Fonte | Fricção |
|:---|:---|:---|:---|:---|:---|
| AJ-09 | SCR-10a | Filtro *"Período: ago/2026"* | Trocar para **set/2026**, mês canônico do relatório | S8·E1, Seção 10.6 (R7) · IC-07 | FR-03 |
| AJ-10 | SCR-10a | Filtro *"Categoria: DevTools"*, herdado do Mid-Fi | Alinhar ao escopo canônico (Design, DevTools e Comunicação) ou manter um único filtro e ajustar a contagem *"3 filtros ativos"* | IC-06 | FR-04 |
| AJ-11 | SCR-08 | *"7 recomendações não aplicadas · R$ 62.400,00/ano"* não bate com as 5 recomendações da massa canônica do Bloco A | A equipe decide (P-62): alinhar os dois números à massa canônica, ou declarar na tela que o dashboard mostra um período maior. Sem decisão, **não alterar o número** | README da Semana 08, "Entradas para a Semana 09" | FR-05 |
| AJ-12 | Barra lateral · SCR-05/SCR-10a | *"Relatórios"* leva só à SCR-05; a central de exportação só é alcançada por um botão dentro dela | Tornar visível, na SCR-05, que a exportação está em *"Exportar"* (rótulo do botão), sem criar item novo de menu — a taxonomia da navegação é decisão da Semana 01 (DEC-05) | DEC-05 · DEC-83 | FR-09 |
| AJ-13 | Arquivo Figma | Quadro da SCR-09 com o nome interno "M-01" | Renomear para "M-06" | P-45 · LR-33 | — |
| AJ-14 | SCR-09 | Não há tela com *"Aprovar"* habilitado (requisição sem bloqueio) | **Opcional.** Variante da SCR-09 sem a RN04 acionada. Não é exigida por nenhuma tarefa do roteiro | P-48 · GI-20 | FR-08 |

A **FR-06** (o enunciado de T5 não deixa claro que a tarefa passa por duas telas) não é ajuste
de protótipo: corrige-se no roteiro, e está no [Anexo A](anexo-a-atualizacao-especificacao-funcional.md),
Seção 4.

---

## 5. Ajustes vindos das sessões

A coluna *Ação de Ajuste (Semana 13)* da aba `Problemas_UX` foi deixada em branco de propósito
pela Semana 12, para ser preenchida aqui. A única sessão registrada (USR-01, simulada) gerou um
problema, de prioridade P3: pela regra do Entregável 1 (Seção 4.2), P3 é registrado para a
engenharia e **não** altera o protótipo.

| ID do problema | Tarefa | Prioridade (Entregável 1, Seção 4.2) | Ajuste | Situação |
|:---|:---|:---|:---|:---|
| PU-01 | T4 | P3 — caso isolado, severidade média | Nenhum no protótipo; observar nas próximas sessões se outros participantes também procuram o downgrade em *Inventário* em vez de *Ociosas* | Registrado |

Quando houver dados, entram aqui os problemas **P1** (corrigir antes do handoff) e os **P2** que
couberem, numerados a partir de `AJ-15`.

---

## 6. Registro de entrega

| Data | Link do Figma | Ajustes aplicados | Observação |
|:---|:---|:---|:---|
| 19/11/2026 | [Projeto de Software — Figma](https://www.figma.com/design/3XaNdOU1zdQisXFuDrvB6O/Projeto-de-Software) | 12 de 14 | Mesmo arquivo da Semana 11, página *Wireframes*. Telas novas na linha abaixo das variantes tablet |

### 6.1. O que foi feito em cada ajuste

Todas as telas novas são cópias das telas existentes (mesma barra lateral, topo, cores e
componentes), alteradas só no que o ajuste pede. A confirmação usa um componente novo,
*Aviso / Sucesso (CMP-16)*, no mesmo formato do aviso de credencial da SCR-01.

| ID | Situação | O que foi feito | Captura |
|:---|:---:|:---|:---|
| AJ-01 | ✅ | Tela nova: SCR-01 com o ERP em `Ativa` e *"47 assinaturas mapeadas"* (número da HF-42). A HF-42 leva a ela depois de 3 s | [aj01](../wireframes/semana-13/aj01-scr01-conexao-ativa.png) |
| AJ-02 | ✅ | Tela nova: SCR-02b com o desfecho *"Estorno solicitado ao fornecedor"*, badge `Tratada` e *"Renovação liberada"* (CT-02.14). Ligada a *"Registrar desfecho"* | [aj02](../wireframes/semana-13/aj02-scr02b-desfecho-registrado.png) |
| AJ-03 | ✅ | Tela nova: SCR-02 **sem** a linha do Canva Pro e com 10 faturas. O CT-02.15 manda o documento descartado sair da lista, e a `Fatura · Descartada` não tem badge (Design System, BD-5) | [aj03](../wireframes/semana-13/aj03-scr02-apos-descarte.png) |
| AJ-04 | ✅ | Tela nova: SCR-03a com o Notion em DevTools e a origem `Ajuste manual` (CT-03.3). Na SCR-03a e no seu tablet, botão *"Corrigir categoria"* na seção *Pendente de classificação*, ligado à tela nova | [aj04](../wireframes/semana-13/aj04-scr03a-categoria-corrigida.png) |
| AJ-05 | ✅ | Três telas novas: `Atendida por realocação`, `Rejeitada` e campo de justificativa aberto na própria tela. As três saídas estão ligadas na SCR-09 | [a](../wireframes/semana-13/aj05a-scr09-atendida-realocacao.png) · [b](../wireframes/semana-13/aj05b-scr09-rejeitada.png) · [c](../wireframes/semana-13/aj05c-scr09-justificativa-aberta.png) |
| AJ-06 | ✅ | Tela nova: SCR-10a com aviso de exportação concluída e a prévia do PDF (período, data, responsável, filtros e colaboradores só por pseudônimo, CT-10.1 a 10.3) | [aj06](../wireframes/semana-13/aj06-scr10a-exportacao-concluida.png) |
| AJ-07 | ✅ | Conferido no Figma: a SCR-07 já mostra o efeito das duas ações (`Reversível · faltam 60 h` e `Em aprovação`). Faltava só ligar os modais: *"Solicitar Aprovação"* e *"Cancelar"* agora fecham o modal. Nenhuma tela nova | — |
| AJ-08 | ✅ | Peça nova: e-mail com valor, data e dias restantes da Salesforce, iguais aos da SCR-06. Ponto de partida próprio no protótipo (*"T6 — E-mail de alerta de renovação"*) e link *"Abrir no Auditor SaaS"* para a SCR-06 | [aj08](../wireframes/semana-13/aj08-email-alerta-renovacao.png) |
| AJ-09 | ✅ | SCR-10a e tablet: *"Período: set/2026"* | [SCR-10a](../wireframes/semana-09/scr-10a-exportacao.png) |
| AJ-10 | ✅ | SCR-10a e tablet: *"Categoria: Design, DevTools e Comunicação"*, o escopo canônico | idem |
| AJ-11 | ⏳ | Não aplicado: depende da P-62 | — |
| AJ-12 | ✅ | Conferido: a SCR-05 já tem o botão *"Exportar"* com a frase que explica o destino. Nada a mudar | — |
| AJ-13 | ✅ | Quadro do Mid-Fi renomeado de *"M-01 - Detalhe da divergência"* para *"M-06 - Aprovação com bloqueio da RN04"* | — |
| AJ-14 | — | Opcional; não feito | — |

**Tablets.** As telas novas de confirmação ficaram só em desktop, como as SCR-02b e SCR-02c, que
também não têm tablet. Foram alterados os tablets das telas existentes que mudaram: SCR-10
(filtros) e SCR-03 (botão novo). O tablet da SCR-03 também foi aumentado, porque já cortava o
Zoom e a seção do Notion antes desta entrega.

**Ligações.** Semana 11: 248 de navegação + 9 de aprofundamento. Esta entrega acrescenta 61 de
navegação (barra lateral das telas novas) e 18 de aprofundamento, total de **309 + 27**.

---

## 7. Decisões e pendências

Nenhuma decisão nova: os ajustes aplicam decisões já registradas.

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-62 | SCR-08 mostra 7 recomendações e R$ 62.400,00/ano; a massa canônica do Bloco A tem 5 recomendações. Pendente desde a Semana 08 | AR2 e D2 decidem: alinhar ou declarar o período na tela (AJ-11) |
| P-58 · P-59 | Fim das tarefas e e-mail da T6 | **Resolvidas** pela aplicação de `AJ-01` a `AJ-08` (Seção 6.1) |
| P-45 · P-47 · P-48 | Herdadas das Semanas 09 e 10 | Encaminhadas por `AJ-13`, `AJ-07` e `AJ-14` |

---

## 8. Rastreabilidade deste documento

| Fonte | Onde está | Uso aqui |
|:---|:---|:---|
| Fricções `FR-01` a `FR-09` | [Entregável 1](entregavel-01-relatorio-avaliacao-usabilidade-sus.md), Seção 6 | Origem de `AJ-01` a `AJ-12` e `AJ-14` |
| Ligações do protótipo | [Semana 11, Entregável 1](../semana-11/entregavel-01-prototipo-navegavel-unificado.md) | Estado de partida |
| Máquinas de estado e sincronizações `SY-xx` | [Semana 06, Entregável 3](../semana-06/entregavel-03-diagramas-uml.md) | Estados de confirmação |
| Massa canônica | Semanas 08 e 09, Entregável 1, Seção 10 | Valores exibidos |
| Protótipo refatorado | Semana 14, Entregável 2 | Objeto do handoff e do Termo de Aceite |
