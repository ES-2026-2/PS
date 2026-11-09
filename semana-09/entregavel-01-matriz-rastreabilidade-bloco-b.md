# Entregável 1 — Matriz de Rastreabilidade Preenchida para o Bloco B (REQ-06 a REQ-10)

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 09 (05/10/2026 – 11/10/2026) — UI Hi-Fi do Bloco B
**Responsável:** AR2 (Analista de Requisitos)
**Versão:** 1.0.0

---

## 1. Objetivo

Aplicar ao Bloco B (REQ-06 a REQ-10) o mesmo método de rastreabilidade usado na Semana 08
para o Bloco A: percorrer as nove camadas (L1 a L9) de cada requisito, registrar o que está
coberto e o que falta, e fixar a lista de verificação (`HF-xx`) que o Hi-Fi da D2 precisa
cumprir. Como na Semana 08, **DEC-76** (Entregável 1 da Semana 08, Seção 3.3) é o critério de
"Concluído": só conta quando as nove camadas não têm lacuna e o Hi-Fi está aprovado contra a
lista `HF`.

---

## 2. Escopo, Fontes e Dependências

### 2.1. Composição do Bloco B

| Requisito | Enunciado | Regra-mãe | Tela prevista |
|:---|:---|:---|:---|
| REQ-06 | Alertas de renovação automática | RN03 | SCR-06 — Central de Alertas e Calendário de Renovação |
| REQ-07 | Ação de cancelamento ou downgrade direto | RN02, RN01 | SCR-07 — Central de Ações e Downgrade de Planos |
| REQ-08 | Dashboard financeiro de ROI histórico | RNF-06 | SCR-08 — Dashboard Principal de ROI e Economia |
| REQ-09 | Fluxo de aprovação para novas compras | RN01, RN04 | SCR-09 — Central de Requisições e Aprovação de Gastos |
| REQ-10 | Exportação de relatórios (PDF/XLSX) e LGPD | LGPD-01, LGPD-02 | SCR-10 — Central de Relatórios e Exportação / Portal do Titular |

### 2.2. Fontes rastreadas

| Camada | Fonte | Onde |
|:---|:---|:---|
| L1 (Regras) | RN01 a RN04 decompostas, RNFs, LGPD-01/02 | S3·E2 (RN01/RN02), `estudo_caso1.md` |
| L2 (Histórias) | US-06 a US-10 | S3·E1 |
| L3 (Casos de uso) | UC-06 a UC-10, fluxos UF-01 a UF-03 | S3·E1, S3·E3 |
| L4 (Cenários) | CT-06.1 a CT-10.7 | S3·E1, S3·E2 |
| L5 (Comportamento) | Máquinas `Requisição`, `Ação sobre Assinatura`, `Alerta` v1.0 | S6·E3 |
| L6 (Estrutura) | ENT-19 a ENT-22 | S6·E2 |
| L7 (Regras de negócio aplicadas) | Tabelas de decisão, alçadas, casos de borda (BA-01 a BA-09) | S3·E2 |
| L8 (Tela) | M-03 a M-08 (Mid-Fi), W-04/W-05 (Lo-Fi) | S5·E1, S4·E1 |
| L9 (Componentes) | Badges Bloco B (Design System Seção 10.2), CMP-06/07/10/16 | S6·E1 |

### 2.3. Insumos da Semana 07

A Semana 07 (Consolidação dos Componentes) não traz nenhum item específico de Bloco B — sua
biblioteca de componentes e o OpenAPI spec são de escopo geral/Bloco A. Nenhuma reconciliação
é necessária aqui (diferente da Semana 08, que precisou da Seção 12 por causa da P-30).

---

## 3. Método

### 3.1. Camadas rastreadas

Mesmas nove camadas da Semana 08 (Entregável 1, Seção 3.1): L1 Regras · L2 Histórias · L3
Casos de uso · L4 Cenários · L5 Comportamento · L6 Estrutura · L7 Regras de negócio · L8 Tela
· L9 Componentes.

### 3.2. Legenda de situação

`✓` coberto sem ressalva · `◐` coberto com ressalva · `↻` definido em mais de um lugar · `✗`
sem cobertura.

### 3.3. Critério de "Concluído"

Reaplica DEC-76 (Semana 08): só é "Concluído" com L1 a L9 sem lacuna nem desatualização e
Hi-Fi aprovado contra os itens `HF-xx` desta entrega.

---

## 4. Matriz-Síntese do Bloco B

| Req | Regras (L1) | Cenários (L4) | Comportamento (L5) | Estrutura (L6) | Tela (L8) | Componentes (L9) | Lacunas | Situação |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **REQ-06** | RN03 · DEC-17 | CT-06.1–06.7 ✓ | `Alerta` v1.0 ✓ | ENT-19 ✓ | SCR-06: M-03, Hi-Fi ✓ | CMP-03, 08 ✓ | — | Pronto para Hi-Fi, com ressalvas |
| **REQ-07** | RN02, RN01 · DEC-63 | CT-07.1–07.6 ✓ | `Ação sobre Assinatura` v1.0 ✓ | ENT-21 ✓ | SCR-07: M-04, M-05, Hi-Fi ✓ | CMP-03, 13 ✓ | LR-30, 31 (fechadas) | Pronto para Hi-Fi, com ressalvas |
| **REQ-08** | RNF-06 · ANT-02, ANT-07 | CT-08.1–08.5 ✓ | — (tela de leitura, sem máquina própria) | ENT-11, 12 ✓ | SCR-08: W-04, W-05, Hi-Fi ✓ | CMP-10 ✓ | LR-32 (fechada) | Pronto para Hi-Fi, com ressalvas |
| **REQ-09** | RN01, RN04 | CT-09.1–09.8 ✓ | `Requisição` v1.0 ✓ | ENT-20, 22 ✓ | SCR-09: M-06, Hi-Fi ✓ | CMP-03, 04, 08 ✓ | LR-29 (fechada), LR-33 | Pronto para Hi-Fi, com ressalvas |
| **REQ-10** | LGPD-01, LGPD-02 · ANT-04 | CT-10.1–10.7 ✓ | — (ação de exportação, sem máquina própria) | ENT-23, 24 ✓ | SCR-10: M-07 ↻ · M-08, Hi-Fi ✓ | CMP-18, 21 ✓ | LR-34, 35 (fechadas) | Pronto para Hi-Fi, com ressalvas |

### 4.1. Cobertura numérica

| Indicador | REQ-06 | REQ-07 | REQ-08 | REQ-09 | REQ-10 | Bloco B |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Cenários existentes | 7 | 6 | 5 | 8 | 7 | **33** ¹ |
| Requisitos de interface (`RI`) vinculados | 6 | 3 | 0 | 6 | 4 | 19 (RI-13 a RI-31) |
| Wireframes que realizam a tela | 1 (M-03) | 2 (M-04, M-05) | 2 (W-04, W-05, Lo-Fi apenas) | 1 (M-06) | 2 (M-07, M-08) | 8 |
| Lacunas encontradas (`LR`) | 0 | 2 | 1 | 2 | 2 | **7** |

> ¹ Os 13 cenários complementares de US-09 (`CT-09.9` a `CT-09.13`, moeda estrangeira,
> delegação, SLA, revalidação, antifatiamento) somam-se aos 83 do total do projeto
> (Semana 03, Seção 10) mas não criam `RI` novo — tratam de regra de back-end, não de tela.

---

## 5. Matriz Detalhada por Requisito

### 5.1. REQ-06 — Alertas de renovação automática

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RN03 (15 dias mensal/trimestral · 45 dias anual/bienal) · DEC-17 (antecipação p/ dia útil) | S3·E2 | ✓ | — |
| L2 | US-06 | S3·E1 | ✓ | — |
| L4 | CT-06.1 a CT-06.7 | S3·E1 | ✓ | Esquema cobre os 4 ciclos (CT-06.7) |
| L5 | Máquina `Alerta` v1.0 (Agendado → Disparado/DisparadoComRessalva → Escalado/Tratado/Ignorado/Cancelado/Expirado) | S6·E3 | ✓ | — |
| L6 | ENT-19 Alerta de Renovação | S6·E2 | ✓ | — |
| L8 | SCR-06: M-03 — calendário + lista de próximas renovações, evoluída para Hi-Fi nesta iteração | S5·E1, S9·E2 | ✓ | Cobre RI-19, 21, 22, 23, 24 com os badges corretos da máquina `Alerta` (tons do catálogo, não mais os `[!]`/`[!!]` do Mid-Fi). O controle de ignorar (RI-24) só foi acrescentado depois de uma conferência contra o Entregável 3 |
| L9 | CMP-03 (badge), CMP-08 (tabela) | S6·E1 | ✓ | — |

### 5.2. REQ-07 — Ação de cancelamento ou downgrade direto

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RN02 (ociosidade 30 dias) · RN01 (alçada) · DEC-63 (execução humana — credencial somente-leitura) | S3·E2, S6·E3 | ✓ | — |
| L2 | US-07 | S3·E1 | ✓ | — |
| L4 | CT-07.1 a CT-07.6 | S3·E1 | ✓ | — |
| L5 | Máquina `Ação sobre Assinatura` v1.0 (Solicitada → EmAprovacao/EmExecucao → Executada/Revertida/InvalidadaPorUso/RecusadaPeloFornecedor) | S6·E3 | ✓ | — |
| L6 | ENT-21 Ação sobre Assinatura | S6·E2 | ✓ | — |
| L8 | SCR-07: M-04 (downgrade dentro da alçada), M-05 (cancelamento com alçada superior), Hi-Fi construída nesta iteração | S5·E1, S9·E2 | ✓ | M-04 usava o Figma (25→18 licenças, R$ 6.048,00/ano) como exemplo — esse mesmo lote já havia sido consolidado pelo RC-1 da Semana 08 (Figma final: 24 licenças, R$ 20.232,00/ano, DEC-82). A Hi-Fi troca o exemplo para o Adobe CC (DEC-87), evitando reabrir o duplo-cômputo (LR-30, LR-31 fechadas) |
| L9 | CMP-03 (badge), CMP-13 (modal de ação destrutiva) | S6·E1 | ✓ | — |

### 5.3. REQ-08 — Dashboard financeiro de ROI histórico

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RNF-06 (carga < 2s) · ANT-02 (dashboard zerado) · ANT-07 (excesso de séries) | S3·E1 | ✓ | — |
| L2 | US-08 | S3·E1 | ✓ | — |
| L4 | CT-08.1 a CT-08.5 | S3·E1 | ✓ | CT-08.2 exige áreas visualmente distintas para realizada × projetada; CT-08.4 limita a 5 séries |
| L5 | Sem máquina própria — tela de leitura sobre dados já apurados (`Recomendação`, `Ação`) | — | — | Não é lacuna: dashboard não introduz estado novo |
| L6 | ENT-11/12 (Uso Diário Agregado) | S6·E2 | ✓ | — |
| L8 | SCR-08: **nunca teve Mid-Fi** — só Lo-Fi (W-04 "com histórico consolidado", W-05 "sem histórico suficiente"), da Semana 04. Hi-Fi construída nesta iteração evoluindo direto do Lo-Fi | S4·E1, S9·E2 | ✓ | O cronograma da Semana 09 não citava o Dashboard no texto do Entregável 2 ("Central de Ações, Exportador PDF/XLSX e Painel LGPD") — mas REQ-08 é Bloco B e seu critério de "Concluído" (DEC-76) também exige Hi-Fi. A coluna do cronograma é meta, não medição (mesmo precedente da Semana 08 com SCR-03/SCR-05) |
| L9 | CMP-10 (gráfico de linha temporal ROI) | S6·E1, S9·E2 | ✓ | Especificado no Design System desde a Semana 06, sem uso em tela real até esta iteração (mesmo padrão da LR-24 da Semana 08 com o CMP-11) — agora usado na SCR-08 (evolução da economia realizada) |

### 5.4. REQ-09 — Fluxo de aprovação para novas compras

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RN01.1 a RN01.10 (decompostas) · RN04 · tabela de alçadas (Seção 4.1, S3·E2) | S3·E2 | ✓ | — |
| L2 | US-09 | S3·E1 | ✓ | — |
| L4 | CT-09.1 a CT-09.8 (+ CT-09.9 a CT-09.13 complementares) | S3·E1, S3·E2 | ✓ | — |
| L5 | Máquina `Requisição` v1.0 (Rascunho → EmAprovacao ⇄ Bloqueada → Aprovada/Rejeitada/AtendidaPorRealocacao) | S6·E3 | ✓ | DEC-62: realocação ≠ rejeição |
| L6 | ENT-20 Requisição · ENT-22 Decisão de Aprovação | S6·E2 | ✓ | — |
| L8 | SCR-09: M-06 (Aprovação com Bloqueio da RN04) — no Figma, o quadro está com o rótulo interno trocado ("M-01" em vez de "M-06"), rótulo de exibição, não de conteúdo (LR-33, ainda aberta) — Hi-Fi construída nesta iteração, com variante de estado de edição | S5·E1, S9·E2 | ✓ | RI-17 (aviso de invalidação por alteração de valor acima de 10%, RN01.9) estava "Parcial" desde a Semana 05 — explicitamente apontado para esta semana. Fechada pela variante SCR-09b (LR-29) |
| L9 | CMP-03, 04 (confiança), 08 | S6·E1 | ✓ | — |

### 5.5. REQ-10 — Exportação de relatórios (PDF/XLSX) e LGPD

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | LGPD-01 (anonimização) · LGPD-02 (portabilidade, 15 dias) · ANT-04 | S3·E1 | ✓ | — |
| L2 | US-10 | S3·E1 | ✓ | — |
| L4 | CT-10.1 a CT-10.7 | S3·E1 | ✓ | CT-10.7 (volume &gt; 50.000 linhas, exportação assíncrona) sem equivalente em tela — não bloqueia o Hi-Fi, é comportamento de backend |
| L5 | Sem máquina própria — ação de exportação não tem estados | — | — | — |
| L6 | ENT-23 Exportação · ENT-24 Solicitação do Titular | S6·E2 | ✓ | — |
| L8 | SCR-10: M-07 (Central de Relatórios) ↻ · M-08 (Portal do Titular) ✓ — ambas evoluídas para Hi-Fi nesta iteração, em duas telas (SCR-10a Exportação, SCR-10b Portal do Titular) | S5·E1, S9·E2 | ✓ | M-07 reproduzia por inteiro o relatório de desperdício (tabela por categoria, "Plano Atual × Sugerido" com os mesmos R$ 26.424,00/ano já corrigidos pela DEC-78/DEC-82 na Semana 08). Por DEC-83 (já ratificada no Entregável 1 da Semana 08), esse conteúdo pertence à SCR-05, não à SCR-10 — a Hi-Fi da SCR-10a não reproduz esse conteúdo, só exportação, filtros e máscara (LR-34, LR-35 fechadas) |
| L9 | CMP-18 (visualizador), CMP-21 | S6·E1 | ✓ | — |

---

## 6. Matriz de Regras, RNFs e LGPD → Verificação

| Regra / RNF / Conformidade | Cenários que a verificam | Máquina/Badge (Design System Seção 10.2) | Cobertura |
|:---|:---|:---|:---:|
| RN01 (teto de R$ 500,00/mês, alçadas) | CT-07.3, CT-09.1–09.3, 09.6, 09.8 | `Requisição` (EmAprovacao, Bloqueada) | Sim |
| RN02 (ociosidade de 30 dias) | CT-06.6, CT-07.1, CT-07.6 | `Ação` (InvalidadaPorUso) | Sim |
| RN03 (alerta 15/45 dias) | CT-06.1–06.7 | `Alerta` (Disparado, DisparadoComRessalva) | Sim |
| RN04 (teto de desperdício) | CT-09.4, CT-09.5 | `Requisição` (Bloqueada) | Sim |
| RNF-06 (carga &lt; 2 s) | CT-08.5 | — | Sim |
| LGPD-01 (anonimização) | CT-10.3, CT-10.4 | — | Sim |
| LGPD-02 (portabilidade, 15 dias) | CT-10.5, CT-10.6 | — | Sim |
| ANT-02 (dashboard zerado) | CT-08.3 | — | Sim |
| ANT-04 (export sem filtros) | CT-10.2 | — | Sim |
| ANT-05 (ação sem confirmação) | CT-07.2 | — | Sim |
| ANT-07 (excesso de séries) | CT-08.4 | — | Sim |

---

## 7. Matriz Reversa — Tela e Componente → Requisito

| Tela | Requisito | Origem | Observação |
|:---|:---|:---|:---|
| SCR-06 | REQ-06 | M-03 | — |
| SCR-07 | REQ-07 | M-04, M-05 | Exemplo do M-04 corrigido na Hi-Fi (Seção 9, DEC-87) |
| SCR-08 | REQ-08 | W-04, W-05 (Lo-Fi) | Sem Mid-Fi; Hi-Fi evoluiu direto do Lo-Fi, como a SCR-01 e a SCR-03/04 da Semana 08 |
| SCR-09 | REQ-09 | M-06 (rotulado "M-01" no Figma) | Rótulo interno ainda não corrigido (LR-33, P-45) |
| SCR-10 | REQ-10 | M-07 (parcial), M-08 | A Hi-Fi não reproduz a parte financeira do M-07 (Seção 9, DEC-88) |

---

## 8. Rastreabilidade Domínio ↔ Interface

| Entidade/Máquina | Tela onde aparece | Estados visíveis |
|:---|:---|:---|
| `Alerta` | SCR-06 | Agendado, Disparado, DisparadoComRessalva, Escalado, Tratado, Ignorado, Cancelado, Expirado |
| `Ação sobre Assinatura` | SCR-07 | Solicitada, EmAprovacao, JanelaArrependimento, Revertida, InvalidadaPorUso, EmExecucao, Executada, RecusadaPeloFornecedor |
| `Requisição` | SCR-09 | Rascunho, EmAprovacao, Bloqueada, Aprovada, Rejeitada, AtendidaPorRealocacao, Contratada, Expirada |
| ENT-23 Exportação, ENT-24 Solicitação do Titular | SCR-10 | Sem máquina de estado — ação única |

---

## 9. Lacunas de Rastreabilidade

### 9.1. Catálogo (LR-xx)

Numeração contínua a partir da LR-28 (última usada na Semana 08).

| ID | Req | Camada | Lacuna | Sev. | Encaminhamento |
|:---|:---|:---:|:---|:---:|:---|
| LR-29 | REQ-09 | L8 | RI-17 (aviso de invalidação por alteração de valor acima de 10%, RN01.9) sem tela desde a Semana 05 | Alta | HF-32 |
| LR-30 | REQ-07 | L8 | M-04 usa o Figma (25→18 licenças) como exemplo de downgrade — esse lote já foi absorvido pelo plano combinado RC-1 da Semana 08 (Figma final: 24 licenças) | Alta | DEC-87 · HF-28 |
| LR-31 | REQ-07 | L8 | Reaproveitar o valor do M-04 (R$ 6.048,00/ano, confiança 94%) sem ajuste duplicaria a economia do Figma já contabilizada no RC-1 (R$ 20.232,00/ano) | Alta | DEC-87 · HF-28 |
| LR-32 | REQ-08 | L8 | SCR-08 nunca teve Mid-Fi; o cronograma da Semana 09 não cita o Dashboard no texto do Entregável 2 | Média | DEC-76 (já ratificada) · HF-31 |
| LR-33 | REQ-09 | L9 | Quadro do Figma com o conteúdo de M-06 está com o nome interno "M-01" (rótulo, não conteúdo) | Baixa | Higiene de nomenclatura do arquivo Figma |
| LR-34 | REQ-10 | L8 | M-07 reproduz a tabela de desperdício por categoria e o comparativo "Plano Atual × Sugerido", conteúdo que a DEC-83 (Semana 08) já atribuiu à SCR-05 | Alta | DEC-88 · HF-34 |
| LR-35 | REQ-10 | L8 | O valor do comparativo em M-07 (R$ 26.424,00/ano) é o mesmo duplo-cômputo já corrigido pela DEC-82 (Semana 08, valor correto R$ 20.232,00/ano) | Alta | DEC-88 · HF-34 |

**Distribuição:** 4 de severidade Alta · 2 Média · 1 Baixa.

> **Leitura do catálogo.** Diferente da Semana 08, aqui nenhuma tela "nunca foi desenhada" por
> completo (SCR-08 tem ao menos o Lo-Fi). O padrão que se repete é outro: **dados de exemplo
> que o Bloco A já corrigiu reaparecem desatualizados no Bloco B**, porque M-04 e M-07 foram
> escritos na Semana 05, antes da correção da Semana 08. Resolver aqui significa apontar para
> os valores já corrigidos, não recalcular de novo.

**Atualização (Hi-Fi entregue nesta iteração):** 6 das 7 lacunas foram fechadas pela
construção das telas Hi-Fi de SCR-06 a SCR-10 — LR-29, 30, 31, 32, 34 e 35. Apenas a LR-33
(rótulo interno do quadro do Figma) continua aberta, por ser uma questão de higiene de
arquivo, não de conteúdo (P-45).

### 9.2. Cenários propostos para fechar lacunas

```gherkin
# language: pt
@BlocoB @Semana09
Funcionalidade: Cenário complementar do Bloco B
  Para fechar a lacuna LR-29
  Como Gestor de Compras
  Quero ver o fluxo de aprovação reiniciar quando o valor muda

  @CT-09.14 @REQ-09 @excecao @RN01.9
  Cenário: Avisar sobre reinício do fluxo por alteração de valor
    Dado uma Requisição em "Em Aprovação" com valor de "R$ 600,00"
    Quando o solicitante altera o valor para "R$ 750,00" (acima de 10%)
    Então a requisição deve voltar ao estado "Rascunho"
    E a tela deve exibir o aviso de que todas as aprovações foram reiniciadas
    E o motivo exibido deve citar a RN01.9
```

---

## 10. Consistência dos Dados de Exemplo e Massa Canônica

### 10.1. Inconsistências encontradas (IC-xx)

| ID | Onde | Inconsistência | Prova |
|:---|:---|:---|:---|
| IC-01 | M-04 (S5·E1) × RC-1 (S8·E1, Seção 10.5) | M-04 mostra o Figma reduzindo de 25 para 18 licenças, R$ 6.048,00/ano; o RC-1 já consolidou o Figma em 24 licenças finais, R$ 20.232,00/ano | S8·E1: "Licenças do Figma após o plano... 24 (redução de 1)" |
| IC-02 | M-07 (S5·E1) × RC-1 (S8·E1) | M-07 mostra "economia R$ 26.424,00/ano" para o mesmo plano Figma+Canva Pro; valor corrigido é R$ 20.232,00/ano (40% menor) | S8·E1, Seção 10.5: "W-07 + M-07 somavam R$ 33.648,00; o valor correto é R$ 20.232,00" |
| IC-03 | M-06 (S5·E1) × inventário canônico (S8·E1, Seção 10.3) | Nenhuma — valores batem: Figma R$ 86,00/licença, 7 ociosas | Conferido, sem divergência |

### 10.2. Regras de derivação da massa canônica (DEC-89)

| # | Regra |
|:--|:---|
| R1 | Nenhum exemplo de tela do Bloco B reutiliza uma licença ou lote já consolidado por uma recomendação do Bloco A (RC-1 a RC-5, Semana 08) sem herdar o valor corrigido |
| R2 | Data de referência única: **30/09/2026** (mesma da Semana 08), para manter os exemplos no mesmo instante |
| R3 | Pseudônimos seguem a DEC-53; nenhuma tela de aprovação ou alerta exibe nome ou e-mail de colaborador |

### 10.3. Exemplo canônico — Downgrade dentro da alçada (SCR-07)

Para não repetir o duplo-cômputo do Figma (IC-01), o exemplo de "downgrade dentro da alçada"
passa a usar o **Adobe CC**, que a Semana 08 já recomendou isoladamente (RC-2) sem conflito:

| Campo | Valor |
|:---|:---|
| Assinatura | Adobe CC |
| Licenças atuais → propostas | 12 → 9 |
| Colaboradores afetados | 3 (sem uso há mais de 30 dias) |
| Economia estimada | R$ 14.760,00/ano · confiança 1,00 |
| Alçada | Nenhuma aprovação adicional (VME afetado R$ 1.230,00/mês, abaixo do teto da RN01) |
| Janela de arrependimento | 72 horas |

### 10.4. Exemplo canônico — Cancelamento com alçada superior (SCR-07)

Mantido o exemplo original do M-05 (Salesforce), que não conflita com nenhum dado do Bloco A:

| Campo | Valor |
|:---|:---|
| Assinatura | Salesforce |
| VME afetado | R$ 12.400,00/mês |
| Alçada exigida | Administrador de TI → Gestor Financeiro |
| Estado durante a aprovação | `Ativa` (RN01, CT-07.3) |

### 10.5. Exemplo canônico — Aprovação bloqueada (SCR-09)

Mantido o exemplo original do M-06 (consistente com o inventário canônico da Semana 08):

| Campo | Valor |
|:---|:---|
| Requisição | REQ-2026-0184 · Figma · 3 licenças |
| Solicitante | Bruno M. (Design) |
| VME apurado | R$ 258,00/mês (3 × R$ 86,00) |
| Bloqueio | RN04 — 7 licenças ociosas do Figma em estoque |
| RN01 | Não acionada (VME abaixo de R$ 500,00/mês) |

### 10.6. Exemplo canônico — Exportação (SCR-10)

A SCR-10 não traz mais números próprios (Seção 5.5): exporta o que a SCR-05 (Semana 08) já
mostra, herdando os filtros ativos e a máscara de anonimização (DEC-83, ANT-04).

---

## 11. Lista de Verificação do Hi-Fi do Bloco B

Numeração contínua a partir da HF-24 (última usada na Semana 08). Mesmo critério: um
requisito só passa a "Concluído" quando todos os seus itens estão aprovados (DEC-76).

### 11.1. Itens por tela (HF-xx)

| ID | Tela | Condição | Origem |
|:---|:---|:---|:---|
| HF-25 | SCR-06 | Calendário e lista de renovações com os badges da máquina `Alerta` (tons do catálogo, Design System Seção 10.2) | M-03 · RI-19, 21, 22, 23, 24 |
| HF-26 | SCR-06 | Ação "Avaliar downgrade antes de renovar" destacando licenças ociosas (exemplo Salesforce) | CT-06.6 |
| HF-27 | SCR-06 | Badge "Renovação próxima com ressalva" quando a antecedência da RN03 não pôde ser cumprida | CT-06.4 · DEC-17 |
| HF-28 | SCR-07 | Modal de downgrade dentro da alçada evoluído do M-04, com o exemplo do Adobe CC (Seção 10.3, não o Figma) | LR-30, LR-31 · DEC-87 |
| HF-29 | SCR-07 | Modal de cancelamento com alçada superior evoluído do M-05, com as 4 etapas da linha do tempo | CT-07.3 |
| HF-30 | SCR-07 | Badges da máquina `Ação sobre Assinatura` (Revertida, InvalidadaPorUso, RecusadaPeloFornecedor) com tom e ícone corretos | Design System Seção 10.2 |
| HF-31 | SCR-08 | Tela própria evoluindo do Lo-Fi (W-04/W-05): ROI realizado × projetado em áreas distintas, limite de 5 séries, estado sem histórico suficiente | LR-32 · CT-08.2, 08.3, 08.4 |
| HF-32 | SCR-09 | Estado de edição com aviso de reinício do fluxo por alteração de valor acima de 10% | LR-29 · RI-17 · RN01.9 |
| HF-33 | SCR-09 | Checklist de política (RN01/RN04/segregação de funções) e linha do tempo evoluídos do M-06 | RI-13, 14, 15, 16, 18 |
| HF-34 | SCR-10 | Tela de exportação sem o conteúdo financeiro do M-07 (sem tabela de categorias, sem "Plano Atual × Sugerido") — só filtros, ação de exportar e selo de anonimização | LR-34, LR-35 · DEC-88 |
| HF-35 | SCR-10 | Portal do Titular evoluído do M-08: tabela "o que coletamos"/"o que não coletamos", botões de download em JSON e CSV | M-08 · LGPD-02 |
| HF-36 | Todas | Quadro em tablet de 768 px, com a prioridade de coluna da DEC-52 | RNF-09 |
| HF-37 | Todas | Estado de carregamento por *skeleton* com a mesma estrutura de colunas | RNF-06 |
| HF-38 | Todas | Nenhum nome ou CPF de colaborador; pseudônimos únicos no formato da DEC-53 | LGPD-01 |
| HF-39 | Todas | Todo texto de regra vem do catálogo `MSG` | Critério 7 do Design System |
| HF-40 | Todas | Badges com ícone e tom da Seção 10.2 do Design System (máquinas `Requisição`, `Ação`, `Alerta`) | DEC-49 |

### 11.2. Itens por requisito

| Req | Itens que bloqueiam o "Concluído" |
|:---|:---|
| REQ-06 | HF-25 a HF-27, HF-36 a HF-40 |
| REQ-07 | HF-28 a HF-30, HF-36 a HF-40 |
| REQ-08 | HF-31, HF-36 a HF-40 |
| REQ-09 | HF-32, HF-33, HF-36 a HF-40 |
| REQ-10 | HF-34, HF-35, HF-36 a HF-40 |

---

## 12. Decisões e Pendências

### 12.1. Decisões propostas nesta entrega

| ID | Decisão | Situação | Impacto esperado |
|:---|:---|:---:|:---|
| DEC-87 | O exemplo de "downgrade dentro da alçada" (HF-28) usa o Adobe CC (RC-2), não o Figma — evita reabrir o duplo-cômputo já fechado pela DEC-82 | Proposta | Encaminha LR-30, LR-31 |
| DEC-88 | A SCR-10 Hi-Fi não reproduz a tabela de desperdício por categoria nem o comparativo financeiro do M-07 — esse conteúdo é da SCR-05 (DEC-83, Semana 08) | Proposta | Encaminha LR-34, LR-35 |
| DEC-89 | Regras de derivação da massa canônica do Bloco B (Seção 10.2) | Proposta | Resolveria IC-01 a IC-03 |

### 12.2. Pendências abertas nesta entrega

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-45 | Quadro do Figma de SCR-09 está com o nome interno "M-01" em vez de "M-06" | Renomear na próxima sessão de edição do arquivo (LR-33) |
| P-46 | CT-10.7 (exportação assíncrona acima de 50.000 linhas) sem representação em tela | Decidir se é notificação ou estado de progresso — insumo para Semana 10 |

---

## 13. Rastreabilidade deste Documento

| Este documento é consumido por | Entregável |
|:---|:---|
| Hi-Fi do Bloco B (SCR-06 a SCR-10) | Semana 09, Entregável 2 |
| Pacote de exceções (RI-30, InvalidadaPorUso) | Semana 10, Entregável 1 |
| Protótipo navegável unificado | Semana 11, Entregável 1 |
