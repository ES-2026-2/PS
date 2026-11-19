# Anexo A — Matriz de Rastreabilidade Final (REQ-01 a REQ-10)

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 14 (09/11/2026 – 15/11/2026) — Handoff Técnico e Encerramento  
**Responsável:** Equipe integrada (AR1, AR2, D1, D2)  
**Parte do:** [Dossiê de Engenharia de Requisitos](entregavel-01-dossie-engenharia-requisitos.md)  
**Situação:** ✅ Consolidada a partir das matrizes das Semanas 08 e 09 — **nenhum requisito é dado como "Concluído"** (Seção 4)  

---

## 1. Objetivo

Unir, em uma só matriz, as duas matrizes de rastreabilidade do projeto — Bloco A
([Semana 08](../semana-08/entregavel-01-matriz-rastreabilidade-bloco-a.md)) e Bloco B
([Semana 09](../semana-09/entregavel-01-matriz-rastreabilidade-bloco-b.md)) — e acrescentar o
que aconteceu depois delas: Hi-Fi entregue, protótipo ligado e validação com usuários.

Esta matriz **substitui a Seção 3 do `estudo_caso1.md`** como retrato da situação. Aquela
tabela marca os 10 requisitos como "Concluído"; ela é a meta do cronograma, e não uma medição
(DEC-76, proposta).

**Não há conteúdo novo aqui.** As células copiam as matrizes-síntese de origem; as duas
colunas finais vêm das Semanas 11 a 13.

---

## 2. Camadas

| Camada | Conteúdo | Fonte |
|:---|:---|:---|
| L1 | Requisito e regras | `estudo_caso1.md`; decomposições nas Semanas 02 e 03 |
| L2 | História (`US`) | Semanas 02 e 03 |
| L3 | Caso de uso (`UC`) | Semanas 01 a 03 |
| L4 | Cenário (`CT`) | Semanas 02 e 03 |
| L5 | Comportamento UML | Semanas 03 a 07 |
| L6 | Estrutura (`ENT`, classe) | Semanas 06 e 08 |
| L7 | Regra derivada do motor | Semana 04 |
| L8 | Tela (wireframes) | Semanas 04 e 05 |
| L9 | Design System | Semana 06 |
| L10 | Hi-Fi no Figma | Semanas 08 a 10 |
| **L11** | **Protótipo navegável** | Semana 11 |
| **L12** | **Validação com usuários** | Semanas 12 e 13 |

Legenda: ✓ coberto · ◐ parcial · ↻ desatualizado (há correção `CU` registrada e não aplicada) ·
⏳ pendente.

---

## 3. Matriz-síntese final

| Req | Descrição | US · UC | Regras (L1) | Cenários (L4) | Comportamento (L5) | Estrutura (L6) | Tela Hi-Fi (L10) | Protótipo (L11) | Tarefa de teste (L12) |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **REQ-01** | Integração via API com ERPs e faturamento | US-01 · UC-01 | RNF-01, 04, 05, 08 · DEC-02 | CT-01.1–01.8 ↻ | SEQ-01, SEQ-05 ✓ · `Conexão` ↻ | ENT-06 ✓ · classe v1.0 ✓ | SCR-01 ✓ · HF-41, 42, 44 | Direto (Configurações) ✓ | T1 ⏳ |
| **REQ-02** | Extração OCR de notas fiscais e e-mails | US-02 · UC-02, UC-13 | RN05 · RNF-07 · LGPD-01 | CT-02.1–02.13 ✓ | AT-01, SEQ-02 ✓ · `Fatura` ✓ | ENT-13 a 16 ✓ · classe v1.0 ✓ | SCR-02, 02b, 02c ✓ · HF-46, 47 | Direto (Faturas) ✓ | T2 ⏳ |
| **REQ-03** | Catalogação automática por IA | US-03 · UC-03 | RNF-10 · DEC-14, 44, 45 | CT-03.1–03.7 ↻ | `Assinatura` (`Mapeada`) ◐ | ENT-07 ✓ · classe v1.0 ✓ | SCR-03a, 03b ✓ | Direto (Inventário) ✓ | T3 ⏳ |
| **REQ-04** | Licenças ociosas e duplicadas | US-04 · UC-04 | RN02 · RNF-10 · LGPD-01 | CT-04.1–04.12 ◐ | `Licença`, `Assinatura` ✓ | ENT-08 a 12 ✓ · classe v1.0 ✓ | SCR-04 ✓ | Direto (Ociosas) ✓ | T4 ⏳ |
| **REQ-05** | Relatório mensal de desperdício | US-05 · UC-05 | RNF-06 · DEC-21, 30 | CT-05.1–05.5 ✓ | `Recomendação` ◐ | ENT-17, 18 ✓ · relatório sem `ENT` ◐ | SCR-05 ✓ | Direto (Relatórios) ✓ | T5 ⏳ |
| **REQ-06** | Alertas de renovação automática | US-06 · UC-06 | RN03 · DEC-17 | CT-06.1–06.7 ✓ | `Alerta` ✓ | ENT-19 ✓ | SCR-06 ✓ | Direto (Alertas) ✓ | T6 ⏳ |
| **REQ-07** | Cancelamento ou downgrade direto | US-07 · UC-07 | RN02, RN01 · DEC-63 | CT-07.1–07.6 ✓ | `Ação sobre Assinatura` ✓ | ENT-21 ✓ | SCR-07, 07a, 07b ✓ | SCR-04 → *"Aplicar"* ✓ | T4 ⏳ |
| **REQ-08** | Dashboard de ROI histórico | US-08 · UC-08 | RNF-06 | CT-08.1–08.5 ✓ | — (tela de leitura) | ENT-11, 12 ✓ | SCR-08 ✓ | Direto (Início) ✓ | T5 ⏳ |
| **REQ-09** | Fluxo de aprovação de compras | US-09 · UC-09 | RN01, RN04 | CT-09.1–09.8 ✓ | `Requisição` ✓ | ENT-20, 22 ✓ | SCR-09, 09b ✓ | Direto (Aprovações) ✓ | T7 ⏳ |
| **REQ-10** | Exportação PDF/XLSX e LGPD | US-10 · UC-10 | LGPD-01, LGPD-02 | CT-10.1–10.7 ✓ | — (ação de exportação) | ENT-23, 24 ✓ | SCR-10a, 10b ✓ | SCR-05 → central ✓ | T8 ⏳ |

Fontes das células: Semana 08, Entregável 1, Seção 4 (REQ-01 a REQ-05); Semana 09,
Entregável 1, Seção 4 (REQ-06 a REQ-10); Semana 11, Entregável 1, Seção 3 (L11); Semana 13,
Entregável 1 (L12).

---

## 4. Situação final por requisito

O critério proposto de "Concluído" (DEC-76) exige as camadas L1 a L9 sem lacuna nem
desatualização e Hi-Fi aprovado contra a lista `HF`. A coluna abaixo aplica esse critério e
acrescenta, à parte, a validação com usuários, que a DEC-76 não exige mas o cronograma previa.

| Req | Hi-Fi contra a lista `HF` | O que ainda impede "Concluído" | Validação com usuários | Situação final |
|:---|:---|:---|:---:|:---|
| REQ-01 | HF-01 a HF-04 ✓ | CU-01, CU-02 e CU-14 não aplicadas · CU-10 na OpenAPI · RNF-05 sem validação (P-51) | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-02 | HF-05 a HF-08 ✓ | CU-11 na OpenAPI · `CT-02.14` e `CT-02.15` propostos e não incorporados | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-03 | HF-09 a HF-11 ✓ | CU-03 a CU-06 não aplicadas · subcategorias indefinidas (P-44) | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-04 | HF-12 a HF-17 ✓ | CU-09 · contestação por E4 sem transição (P-41) · estados pós-ação sem tela (P-47) | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-05 | HF-18, HF-19 ✓ | CU-07, CU-08 · `ENT-25` fora do dicionário | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-06 | HF-25 a HF-27 e HF-49 ✓ | E-mail de alerta (RI-20) produzido na Semana 13 (`AJ-08`) | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-07 | HF-28 a HF-30 ✓ | Estados pós-ação sem tela (P-47) · *"Reverter"* sem tela (P-48) | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-08 | HF-31 ✓ | RNF-06 nunca medido (P-32) | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-09 | HF-32, HF-33 e HF-48 ✓ | *"Aprovar"* habilitado sem tela (P-48) | ⏳ | Pronto para engenharia, **com ressalvas** |
| REQ-10 | HF-34, HF-35 ✓ | Exportação assíncrona só em texto (P-46) | ⏳ | Pronto para engenharia, **com ressalvas** |

**Resultado: 0 de 10 requisitos "Concluído" pelo critério da DEC-76; 10 de 10 prontos para
engenharia com ressalvas; 0 de 10 validados com usuários.**

> As faixas `HF` por requisito são as das listas de verificação das Semanas 08 (HF-01 a HF-24),
> 09 (HF-25 a HF-40) e 10 (HF-41 a HF-49). Os registros de entrega dessas semanas dão as listas
> como aprovadas (24 de 24 e 16 de 16); esta matriz não as reconferiu item a item.

---

## 5. Cobertura numérica

| Indicador | Bloco A (REQ-01 a 05) | Bloco B (REQ-06 a 10) | Fonte |
|:---|:---:|:---:|:---|
| Cenários existentes rastreados | 45 | 33 | S8·E1 e S9·E1, Seção 4.1 |
| Cenários propostos e não incorporados | 8 | 1 | S8·E1 e S9·E1, Seção 9.2 |
| Lacunas de rastreabilidade (`LR`) | 28 (LR-01 a LR-28) | 7 (LR-29 a LR-35) | Seção 9.1 de cada matriz |
| Lacunas declaradas fechadas na origem | 0 (7 com correção encaminhada) | 6 (fechadas pelo Hi-Fi) | Idem |
| Itens da lista de verificação do Hi-Fi | 24 | 16 | Seção 11 de cada matriz |
| Gatilhos humanos sem controle em tela | 10 de 16 (antes do Hi-Fi) | Ver S9·E3 | S8·E3, Parte II |

A Semana 03 registra 83 cenários Gherkin no projeto; as duas matrizes rastreiam 78 deles como
"existentes" (45 + 33). A diferença não foi reconciliada por nenhum documento e fica registrada
como ponto a conferir pela equipe.

---

## 6. Matriz reversa resumida — Tela → Requisito

| Tela | Requisito | Captura |
|:---|:---|:---|
| SCR-01 · HF-41 · HF-42 · HF-44 | REQ-01 | `wireframes/semana-08/` · `wireframes/semana-10/` |
| SCR-02 · SCR-02b · SCR-02c · HF-46 · HF-47 | REQ-02 | `wireframes/semana-08/` · `wireframes/semana-10/` |
| SCR-03a · SCR-03b | REQ-03 | `wireframes/semana-08/` |
| SCR-04 | REQ-04 | `wireframes/semana-08/` |
| SCR-05 | REQ-05 | `wireframes/semana-08/` |
| SCR-06 | REQ-06 | `wireframes/semana-09/` |
| SCR-07 · SCR-07a · SCR-07b | REQ-07 | `wireframes/semana-09/` |
| SCR-08 · HF-43 | REQ-08 | `wireframes/semana-09/` · `wireframes/semana-10/` |
| SCR-09 · SCR-09b | REQ-09 | `wireframes/semana-09/` |
| SCR-10a · SCR-10b · HF-45 | REQ-10 · LGPD-01 · LGPD-02 | `wireframes/semana-09/` · `wireframes/semana-10/` |

Nenhuma tela do protótipo fica sem requisito de origem (matriz reversa das Semanas 08 e 09,
Seção 7).

---

## 7. Rastreabilidade deste documento

| Fonte | Onde está | Uso aqui |
|:---|:---|:---|
| Matriz do Bloco A | Semana 08, Entregável 1 | Linhas REQ-01 a REQ-05 |
| Matriz do Bloco B | Semana 09, Entregável 1 | Linhas REQ-06 a REQ-10 |
| Cobertura do protótipo | Semana 11, Entregável 1, Seção 3 | Coluna L11 |
| Situação dos testes | Semana 13, Entregável 1 | Coluna L12 |
| Errata e itens não incorporados | Semana 13, Anexo A | Coluna "O que ainda impede" |
