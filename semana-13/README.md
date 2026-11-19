# Semana 13 (Iteração 13) — Ajustes e Tratamento de Fricções de UX

**Período:** 02/11/2026 a 08/11/2026  
**Fase:** 4 — Testes de Usabilidade, Refinamento e Handoff  
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Roteiro prático:** [`estudo_caso1.md`](../estudo_caso1.md), Seção 4  
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md) · [`semana-06/`](../semana-06/README.md) · [`semana-07/`](../semana-07/README.md) · [`semana-08/`](../semana-08/README.md) · [`semana-09/`](../semana-09/README.md) · [`semana-10/`](../semana-10/README.md) · [`semana-11/`](../semana-11/README.md) · [`semana-12/`](../semana-12/README.md)  

---

## Situação desta iteração

> ### Uma sessão simulada deu SUS 90 — pouco para concluir, suficiente para conferir o método.
> A Semana 13 transforma os dados da Semana 12 em relatório e em ajustes. A Semana 12 registrou
> **uma sessão**, a USR-01, simulada entre integrantes da equipe: 5 tarefas concluídas sem ajuda,
> 1 caminho errado e **SUS 90**. Com n = 1 e participante da equipe, isso não representa os
> usuários-alvo. Esta versão entrega o método de cálculo do SUS, o protocolo de análise, os
> resultados da USR-01 e uma inspeção do protótipo contra o roteiro de teste, **sem nenhuma
> nota, taxa ou citação inventada**. A inspeção achou algo que precisava ser achado antes das sessões: pelo registro
> da Semana 11, cinco das oito tarefas terminavam em um botão sem reação. O Entregável 2 ligou os
> estados de confirmação no Figma, e as 8 tarefas agora podem ser medidas até o fim.

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR1 / AR2** | Atualização da especificação funcional e requisitos com base no feedback dos usuários | ◐ Parcial — sem feedback de usuário; errata conferida (14 correções registradas, 0 aplicadas) | Anexo A |
| **D1 / D2** | Ajuste fino das telas, fluxos de navegação e componentes no protótipo | Concluído — 13 de 14 ajustes aplicados no Figma, 9 telas novas | Entregável 2 |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Relatório de Avaliação de Usabilidade e Cálculo da Nota SUS | [entregavel-01-relatorio-avaliacao-usabilidade-sus.md](entregavel-01-relatorio-avaliacao-usabilidade-sus.md) — ◐ **parcial**. Método do SUS, protocolo de análise e inspeção (9 fricções) prontos; **nota SUS 90 com 1 questionário (USR-01, simulada)** | AR1/AR2 |
| 2 | Protótipo Hi-Fi Refatorado com Ajustes Visuais e de Fluxo | [entregavel-02-prototipo-hifi-refatorado.md](entregavel-02-prototipo-hifi-refatorado.md) — ✅ **aplicado**. 14 ajustes especificados (`AJ-01` a `AJ-14`); **13 aplicados ou conferidos no Figma**, 9 telas novas em [`wireframes/semana-13/`](../wireframes/semana-13/) | D1/D2 |
| — | Anexo: atualização da especificação funcional (atividade da AR1/AR2) | [anexo-a-atualizacao-especificacao-funcional.md](anexo-a-atualizacao-especificacao-funcional.md) — errata CU-01 a CU-14 conferida arquivo a arquivo; 6 ajustes no roteiro de teste | AR1/AR2 |

O cronograma não prevê Entregável 3 (diagramas UML) nesta semana, e a matriz de
[`diagramasUML.md`](../diagramasUML.md) não lista nenhum diagrama para ela.

---

## Achados da Iteração

> ### Cinco tarefas do roteiro não podem ser medidas até o fim.
> O plano define o fim da tarefa como "a ação final confirmada na tela". O protótipo tem a
> navegação global e 9 ligações de aprofundamento, e nenhuma delas é a ação final de T1, T2,
> T3, T7 ou T8: *"Registrar desfecho"*, a correção de categoria, *"Realocar"* e *"Exportar"*
> não têm reação registrada. Sem um evento de tela, o tempo de tarefa não tem término, e três
> critérios de sucesso não podem ser verificados (**FR-01**, **P-58**). A T6 depende ainda de um
> e-mail simulado que nunca foi produzido (**FR-02**, **P-59**).

> ### Os três ajustes que o `estudo_caso1.md` antecipava já estão no Hi-Fi.
> As três linhas de exemplo do roteiro prático (porcentagem de divergência sem explicação,
> aprovação sem ver o estoque ocioso, botão de exportar fora do topo) descrevem fricções que o
> desenho atual já trata: a SCR-02b mostra a conta por extenso, a SCR-09 abre com o bloqueio e
> a exportação está no cabeçalho. Isso é conferência de desenho, e não resultado de teste.

> ### Das 14 correções registradas na Semana 08, nenhuma foi aplicada.
> A Semana 08 destinou a aplicação das CU-01 a CU-14 a esta semana. A conferência arquivo a
> arquivo mostra que o trecho antigo continua em todos. Este anexo **não as aplica**: 12 delas
> dependem de decisões ainda em situação *Proposta*. As duas que não dependem (CU-01 e CU-02)
> ficam liberadas para aplicação imediata (**P-64**).

> ### Duas telas ainda contradizem a massa canônica.
> A SCR-10a filtra por *"ago/2026"*, mês anterior à primeira varredura do tenant, e a SCR-08
> mostra 7 recomendações onde a massa canônica do Bloco A tem 5 — ponto que a Semana 08 já
> havia pedido para o Hi-Fi resolver (**FR-03**, **FR-05**, **P-62**).

---

## Números da Iteração

| Indicador | Valor |
|:---|:---|
| Sessões de teste analisadas | **1** (USR-01, simulada pela equipe) |
| Nota SUS | **90** (n = 1, não generalizável) |
| Tarefas concluídas na sessão | 5 de 5, sem ajuda; 1 caminho errado (T4) |
| Fricções encontradas por inspeção | 9 (`FR-01` a `FR-09`): 1 de fluxo que afeta 5 tarefas, 1 alta, 4 médias, 3 baixas |
| Tarefas do roteiro sem término mensurável | 0 de 8 depois dos ajustes (eram 5, mais T6 sem a peça de e-mail) |
| Exemplos do `estudo_caso1.md` conferidos contra o Hi-Fi | 3 de 3 já tratados no desenho |
| Ajustes especificados para o protótipo | 14 (`AJ-01` a `AJ-14`): 8 de fluxo, 6 de conteúdo e higiene · 13 aplicados ou conferidos |
| Telas novas no protótipo | 9 (8 estados de confirmação e o e-mail de alerta) |
| Ligações do protótipo | 309 de navegação + 27 de aprofundamento (Semana 11: 248 + 9) |
| Correções `CU` conferidas | 14 registradas · 0 aplicadas · 2 liberadas para aplicação |
| Ajustes no roteiro de teste | 6 (`RT-01` a `RT-06`) |
| Decisões propostas | 5 (`DEC-96` a `DEC-100`) |
| Pendências abertas | 7 (`P-58` a `P-64`) |

---

## Decisões de Projeto Propostas nesta Iteração (a ratificar pela equipe)

A numeração continua a da Semana 12 (última: DEC-95). Todas estão como **Proposta**.

| ID | Decisão proposta | Impacto |
|:---|:---|:---|
| DEC-96 | Questionário SUS incompleto não entra na média e é relatado à parte; nota por persona só com 3 ou mais participantes | Não imputa resposta nem expõe a resposta de um indivíduo |
| DEC-97 | As faixas de leitura do SUS (68 e 50/70) são régua de leitura, e não critério de aceite | O critério não é escolhido depois de conhecer o resultado |
| DEC-98 | Prioridade do problema de UX = severidade × frequência; caso isolado de severidade alta é P2 | Uma só regra para decidir o que entra no protótipo |
| DEC-99 | Tempo de tarefa só das tarefas com sucesso; tempos de tarefas diferentes não se somam | Evita média sem significado |
| DEC-100 | Onde um artefato das Semanas 02 a 07 divergir de uma `CU`, vale o original até a decisão correspondente ser ratificada | A engenharia sabe qual versão seguir |

---

## Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-58 | Fim da tarefa em T1, T2, T3, T7 e T8: ligar estados de confirmação ou redefinir o fim como o clique final | **Resolvida** — estados de confirmação ligados (`AJ-01` a `AJ-06`) |
| P-59 | E-mail simulado da T6 (RI-20) não existe | **Resolvida** — e-mail produzido com os valores da SCR-06 (`AJ-08`) |
| P-60 | Realização das sessões com os usuários-alvo: a Semana 12 executou só a USR-01, simulada pela equipe | Equipe e orientador definem data e participantes (com a P-54) |
| P-61 | Conferir na fonte as faixas de leitura do SUS e a versão em português dos enunciados | AR1, antes do relatório final |
| P-62 | SCR-08 mostra 7 recomendações e R$ 62.400,00/ano; a massa canônica do Bloco A tem 5 | **Resolvida** — alinhado à massa canônica (`AJ-11`) |
| P-63 | Ratificação das decisões DEC-66 a DEC-100, todas em situação *Proposta* | Reunião da equipe antes do handoff |
| P-64 | Aplicar CU-01 e CU-02, que não dependem de decisão pendente | Responsáveis pela Semana 02 |

### Pendências anteriores que esta semana deveria receber resolvidas

| ID | Item | Situação |
|:---|:---|:---|
| P-52 | Critérios de sucesso de T1, T3 e T5 | Aberta — agora ligada a `RT-01` e `RT-03` |
| P-53 · P-54 · P-55 | Duração da sessão, número de participantes, consentimento e retenção dos vídeos | Abertas — sem elas não há sessão |
| P-56 · P-57 | Curvas emocionais (P-11) e tablet físico (P-27) | Abertas — só as sessões respondem |
| P-45 · P-47 · P-48 | Nome do quadro da SCR-09; estados pós-ação sem tela; *"Aprovar"* e *"Reverter"* sem tela | Encaminhadas por `AJ-13`, `AJ-07` e `AJ-14` |

---

## Checklist para Fechar a Iteração

A marcar pela equipe:

- [x] Decidir a P-58 e aplicar `AJ-01` a `AJ-08` no Figma
- [x] Aplicar os ajustes de conteúdo (`AJ-09`, `AJ-10`, `AJ-12`, `AJ-13`)
- [x] Decidir a P-62 e aplicar o `AJ-11`
- [ ] Atualizar o roteiro (`RT-01` a `RT-06`) na aba `Catalogo` da planilha da Semana 12
- [ ] Realizar as sessões (P-60), depois de resolver P-53, P-54 e P-55
- [x] Calcular a nota SUS e preencher as Seções 7.1 a 7.3 do Entregável 1 (USR-01)
- [ ] Incluir no Entregável 2 os ajustes P1 vindos das sessões
- [ ] Ratificar DEC-66 a DEC-100 (P-63)

---

## Rastreabilidade com Semanas Anteriores

| Semana | O que esta iteração usa |
|:---|:---|
| Semana 02 e 03 | Cenários `CT-xx` e fluxos `UF-xx`, base dos critérios de tarefa e dos estados de confirmação |
| Semana 05 | Situação do RI-20 ("fora da interface", parcial) — origem da FR-02 |
| Semana 06 | Máquinas de estado e sincronizações `SY-xx` (estados dos ajustes de fluxo); catálogo `MSG` e dicionário (itens ainda não incorporados) |
| Semana 08 | Massa canônica (Seção 10), correções CU-01 a CU-14 e o pedido sobre a SCR-08 |
| Semana 09 | Hi-Fi do Bloco B e as pendências P-45, P-47 e P-48 |
| Semana 11 | Registro das ligações do protótipo e plano de testes — base da inspeção |
| Semana 12 | Planilha (sessão USR-01), protocolo, DEC-90 a DEC-95 e pendências P-52 a P-57 |

---

## Entradas para a Semana 14 (Handoff Técnico e Encerramento)

- **Entregável 1** → o dossiê registra a validação com usuários-alvo como **não realizada**; existe só a sessão simulada USR-01 (SUS 90, n = 1).
- **Entregável 2** → o handoff parte do protótipo com os ajustes aplicados.
- **Anexo A, Seção 3** → seção de erratas do dossiê (CU-01 a CU-14 e a regra DEC-100).
- **Anexo A, Seção 5** → itens propostos e não incorporados (cenários, `ENT`, `MSG`, parâmetros).
- **P-63** → condição do Termo de Aceite: 35 decisões aguardam ratificação.

---

## Estrutura dos Arquivos da Pasta `semana-13`

```
semana-13/
├── README.md
├── entregavel-01-relatorio-avaliacao-usabilidade-sus.md
├── entregavel-02-prototipo-hifi-refatorado.md
└── anexo-a-atualizacao-especificacao-funcional.md
```

---

## Limitações Conhecidas

- **Só uma sessão, e simulada.** A USR-01 foi feita entre integrantes da equipe, com n = 1. Os
  números dela conferem o método, mas não são resultado de teste com os usuários-alvo.
- **A inspeção usou documentos e capturas, e não o arquivo do Figma.** A FR-01 se apoia no
  registro de ligações da Semana 11; se houver ligação não documentada, ela muda. A conferência
  no Figma é o primeiro item do Entregável 2. Só quatro capturas foram abertas (SCR-02b,
  SCR-08, SCR-09 e SCR-10a).
- **O `AJ-14`, opcional, não foi feito.**
- **As faixas de leitura do SUS** foram citadas de memória da literatura e precisam ser
  conferidas na fonte (P-61).
- **A conferência das `CU`** foi feita por busca de texto: prova que o trecho antigo continua
  no arquivo, e não avalia se a correção proposta está certa.
