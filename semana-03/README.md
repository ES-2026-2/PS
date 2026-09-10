# 📅 Semana 03 (Iteração 3) — Detalhamento do Bloco B (REQ-04 a REQ-10)

**Período:** 24/08/2026 a 30/08/2026
**Fase:** 1 — Descoberta, Regras e Mapeamento · **⚑ Encerramento da Fase 1**
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md)

---

## 👥 Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR2** | Especificação de histórias de usuário (US-04 a US-10) | ✅ | Entregável 1 |
| **AR2** | Gatilhos de inatividade de 30 dias (RN02) | ✅ | Entregável 2, Parte II |
| **AR2** | Trava de R$ 500/mês (RN01) | ✅ | Entregável 2, Parte I |
| **D2** | User Flows dos processos de aprovação e alertas de renovação (RN03) | ✅ | Entregável 3, Parte II |

---

## 📦 Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Documento de Especificação BDD/Gherkin dos Requisitos REQ-04 a REQ-10 | [entregavel-01-especificacao-bdd-gherkin-req04-req10.md](entregavel-01-especificacao-bdd-gherkin-req04-req10.md) | AR2 |
| 2 | Especificação do Fluxo de Aprovação de Gastos (RN01) e Trava de Inatividade (RN02) | [entregavel-02-fluxo-aprovacao-gastos-rn01-trava-inatividade-rn02.md](entregavel-02-fluxo-aprovacao-gastos-rn01-trava-inatividade-rn02.md) | AR2 |
| 3 | Personas Corporativas (CFO, IT Admin, Gestor de Compras) e User Flows do Bloco B | [entregavel-03-personas-corporativas-user-flows-bloco-b.md](entregavel-03-personas-corporativas-user-flows-bloco-b.md) | D2 |
| 4 | Diagramas UML conforme `diagramasUML.md` | [entregavel-04-diagramas-uml.md](entregavel-04-diagramas-uml.md) | AR1 / AR2 |

> **UML nesta iteração:** a matriz de `diagramasUML.md` marca a **entrega formal do Diagrama
> de Atividades na Semana 3** — feita na Parte I do Entregável 4, com dois fluxos em raias
> (AT-01 · OCR e conciliação; AT-02 · aprovação de gastos). A Parte II fecha as descrições
> textuais de UC-04 a UC-10 e aplica a revisão v1.1 do Diagrama de Casos de Uso.

---

## 🔢 Números da Iteração

| Indicador | Valor |
|:---|:---|
| Histórias de usuário especificadas | 7 (US-04 a US-10) |
| Cenários Gherkin escritos | 55 (46 no Entregável 1 + 9 no Entregável 2) |
| Sub-regras derivadas | 20 (`RN01.1` a `RN01.10` e `RN02.1` a `RN02.10`) |
| Casos de borda mapeados | 19 (`BA-01` a `BA-09` e `BI-01` a `BI-10`) |
| Máquinas de estado esboçadas | 2 (`Requisição` e `Licença`) |
| Personas consolidadas | 3 + 1 antipersona |
| User Flows desenhados | 3 (`UF-01`, `UF-02`, `UF-03`) |
| Requisitos de interface derivados | 19 novos (`RI-13` a `RI-31`) |
| Diagramas de Atividades entregues | 2 (`AT-01` e `AT-02`) |

### Acumulado do projeto ao fim da Fase 1

| Indicador | Total |
|:---|:---|
| Histórias de usuário | 10 (US-01 a US-10) — **100% dos RFs** |
| Cenários Gherkin | 83 |
| Sub-regras de negócio derivadas | 30 (RN01, RN02 e RN05) |
| Casos de uso modelados | 13 |
| Requisitos de interface | 31 (`RI-01` a `RI-31`) |
| Decisões de projeto registradas | 28 (`DEC-01` a `DEC-28`) |

---

## ✅ Pendências Anteriores Resolvidas

| ID | Pendência | Como foi resolvida |
|:---|:---|:---|
| **P-09** | UC-13 e UC-14: casos de uso próprios ou fluxos alternativos? | ✅ UC-13 mantido (ator e trilha de auditoria próprios); UC-14 absorvido como fluxo alternativo de UC-03. Modelo passa a 13 casos de uso |
| **P-10** | Fornecedores sem API de logs podem inviabilizar a RN02 (RB-01) | ✅ Hierarquia de evidências E1→E2→E3→E4 e estado `Sem telemetria` (RN02.2, RN02.4) |
| **Sem. 02, item 1** | Entrega formal do Diagrama de Atividades | ✅ AT-01 e AT-02, com raias, Mermaid e PlantUML |
| **Sem. 02, item 3** | Descrições textuais de UC-04 a UC-10 | ✅ Seção 8 do Entregável 4 |
| **EB-01 a EB-14** | 14 questões de elicitação do Bloco B | ✅ Todas respondidas (DEC-15 a DEC-28) |
| **RB-02** | RN04 pode bloquear contratação legítima | ✅ Sobreposição com justificativa + alçada superior (DEC-24) |
| **RB-03** | ROI projetado confundido com realizado | ✅ Separação visual obrigatória (DEC-21, CT-08.2) |
| **RB-04** | Ausência de janela de arrependimento | ✅ 72 h antes do envio ao fornecedor (DEC-20, RN02.9) |

### Pendências ainda abertas

| ID | Item | Prazo |
|:---|:---|:---|
| P-01 | Contraste de `green.600` e `amber.600` reprovado no WCAG AA | Semana 6 |
| P-02 | Política de rotação de chaves (CTL-04) | Semana 6 |
| P-03 | Plano de teste de isolamento multi-tenant (CTL-10) | Semana 7 |
| P-04 | Anexo contratual de transferência internacional (CTL-14) | Semana 7 |
| P-06 | Cabeçalho da Fase 1 incompleto em `estudo_caso1.md` | Correção não aplicada — fora do escopo |
| P-07 | 6 parâmetros da RN05 pendentes de homologação | Semana 5 |
| P-08 | Calibração dos limiares de OCR (85%) e catalogação (70%) | Semana 5 |
| P-11 | Curvas emocionais das jornadas são hipóteses | Semana 12 |

---

## 🔑 Decisões de Projeto Tomadas nesta Iteração

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-15 | Evidência de uso segue a hierarquia E1 (API) → E2 (SSO) → E3 (proxy); E4 só contesta | Torna a RN02 aplicável mesmo sem API do fornecedor |
| DEC-16 | Licença nunca acessada conta a partir do provisionamento | Fecha lacuna do enunciado da RN02 |
| DEC-17 | Prazos da RN03 em dias corridos, antecipando para dia útil anterior | Elimina ambiguidade de contagem |
| DEC-18 | Assinatura órfã escala para gestor do centro de custo e Admin de TI | Nenhum alerta fica sem destinatário |
| DEC-19 | Downgrade segue a mesma alçada do cancelamento, pelo VME afetado | Simetria entre ações destrutivas |
| DEC-20 | Janela de arrependimento de 72 h antes do envio ao fornecedor | Reduz risco de cancelamento indevido |
| DEC-21 | Indicador principal de ROI usa apenas economia **realizada** | Evita inflar o resultado com projeção |
| DEC-22 | Marco zero do ROI é a primeira varredura concluída | Define linha de base auditável |
| DEC-23 | **Teto da RN01 incide sobre o VME da contratação completa** | Impede burla por valor unitário baixo |
| DEC-24 | Bloqueio da RN04 admite sobreposição com justificativa + alçada superior | Evita processo paralelo fora do sistema |
| DEC-25 | Até 3 níveis de aprovação, sequenciais, por faixa de VME | Operacionaliza "aprovação formal" da RN01 |
| DEC-26 | XLSX exporta apenas valores, com aba de metadados dos filtros | Simplifica e mantém consistência com a tela |
| DEC-27 | Relatório usa hash SHA-256 e carimbo de tempo, sem assinatura ICP-Brasil na v1.0 | Reduz escopo sem perder integridade |
| DEC-28 | Portabilidade do titular em JSON e CSV, restrita aos próprios dados | Atende LGPD-02 sem expor dado corporativo |

---

## ⚠️ Pendências e Riscos Abertos Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-12 | 8 parâmetros de RN01 e RN02 dependem de homologação (3º nível de alçada, SLA, janela de 72 h, limiar de 10%, antifatiamento, amortização, graduação 30/60/90, supressão sob 5 colaboradores) | Seção 14 do Entregável 2 — homologar até a Semana 5 |
| P-13 | Contratação emergencial fora do fluxo de aprovação não está prevista na v1.0 (BA-09) | Decidir com o cliente se entra no escopo — Semana 4 |
| P-14 | Licenças *floating* (pool compartilhado) exigem modelo de apuração próprio (BI-09) | Detalhar no Modelo de Domínio — Semana 6 |
| Q-05 | Limite de 5 séries no gráfico de ROI carece de validação | Semana 12 |
| Q-06 | Expiração do link de download em 7 dias carece de homologação | Semana 5 |
| Q-07 | Marca d'água é controle suficiente em exportação reidentificada? | Validar com DPO — Semana 6 |

---

## ➡️ Entradas para a Semana 04 (Wireframes Lo-Fi — início da Fase 2)

- **31 requisitos de interface** (`RI-01` a `RI-31`) prontos para virar tela.
- **3 personas consolidadas** e **3 user flows** como roteiro de navegação.
- **2 máquinas de estado** (`Requisição`, `Licença`) + a de `Fatura` da Semana 02 — insumo do
  Diagrama de Máquina de Estados das Semanas 5 e 6.
- **Tabelas de decisão** de RN01, RN02 e RN05 — base dos fluxogramas do motor de IA previstos
  como Entregável 1 da Semana 04.
- **13 casos de uso** com descrição textual completa — base da matriz de rastreabilidade das
  Semanas 8 e 9.
