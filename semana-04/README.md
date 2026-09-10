# 📅 Semana 04 (Iteração 4) — Wireframes de Baixa Fidelidade (Lo-Fi)

**Período:** 31/08/2026 a 06/09/2026
**Fase:** 2 — Wireframing e Design System · **⚑ Abertura da Fase 2**
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md)

---

## 👥 Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR1 / AR2** | Fluxogramas do motor de otimização por IA | ✅ | Entregável 1 |
| **AR1 / AR2** | Diagramas de caso de uso | ✅ | Já entregue na Semana 02 (v1.0) e revisado na Semana 03 (v1.1) — ver observação abaixo |
| **D1 / D2** | Prototipagem Lo-Fi das telas de integração, Dashboard de ROI e listagem de licenças | ✅ | Entregável 2 |

> **Observação sobre os Casos de Uso:** a matriz de `diagramasUML.md` posiciona o Diagrama de
> Casos de Uso nas **Semanas 1 a 3**, com entrega formal na Semana 2. Ele já está fechado em
> v1.1 com 13 casos de uso e descrições textuais completas de UC-01 a UC-10. O esforço de
> AR1/AR2 nesta iteração foi redirecionado para os fluxogramas do motor de IA e para a
> abertura do Diagrama de Sequência, que é o artefato UML da janela atual. O registro está na
> Seção 1.1 do [Entregável 3](entregavel-03-diagramas-uml.md).

---

## 📦 Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Fluxogramas Técnicos do Motor de Análise por IA e Algoritmo de Consolidação | [entregavel-01-fluxogramas-motor-ia-algoritmo-consolidacao.md](entregavel-01-fluxogramas-motor-ia-algoritmo-consolidacao.md) | AR1 / AR2 |
| 2 | Kit de Wireframes Lo-Fi do Dashboard de ROI e Conexões API | [entregavel-02-kit-wireframes-lofi.md](entregavel-02-kit-wireframes-lofi.md) | D1 / D2 |
| 3 | Diagramas UML conforme `diagramasUML.md` | [entregavel-03-diagramas-uml.md](entregavel-03-diagramas-uml.md) | AR1 / AR2 |

> Esta iteração tem **3 entregáveis** — o cronograma não prevê um quarto para a Semana 04.

---

## 🔢 Números da Iteração

| Indicador | Valor |
|:---|:---|
| Estágios do pipeline do motor especificados | 7 (`E0` a `E6`) |
| Sinais de desperdício tipificados | 10 (`SD-01` a `SD-10`) |
| Tipos de recomendação com fórmula de economia | 7 (`REC-01` a `REC-07`) |
| Categorias da taxonomia | 12 (`C-01` a `C-12`) |
| Tipos de falso positivo definidos | 4 (`FP-A` a `FP-D`) |
| Indicadores do motor | 6 (`MI-01` a `MI-06`) |
| Wireframes Lo-Fi desenhados | 9 (`W-00` a `W-08`) |
| Anotações de wireframe | 31 |
| Requisitos de interface atendidos | 8 de 31 (recorte previsto no cronograma) |
| Diagramas de sequência esboçados | 2 (`SEQ-01`, `SEQ-02`) |

---

## 🔑 Decisões de Projeto Tomadas nesta Iteração

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-29 | Economia realizada é o primeiro elemento do Dashboard, acima de qualquer gráfico | Atende ao *job to be done* central da persona P-01 |
| DEC-30 | Cobertura de telemetria exibida no topo de SCR-04, antes de qualquer recomendação | O usuário sabe sobre quanto da carteira o número fala (RN02.4) |
| DEC-31 | Recomendações em card individual e sequencial, não em lista densa | Protege a atenção e a credibilidade das sugestões |
| DEC-32 | O motor **nunca executa ação** — só produz recomendação com evidência | Reforça DEC-02 e RN01 na camada de IA |
| DEC-33 | Piso de publicação de recomendação: R$ 1.200/ano | Evita painel com centenas de sugestões irrelevantes |
| DEC-34 | Recomendação sem os 4 campos de explicação não é publicável | Contramedida direta à desconfiança da persona P-02 |
| DEC-35 | Conciliação é sempre assíncrona à ingestão, nunca em cadeia síncrona | O lançamento do cartão pode chegar dias após a nota (RN05.3) |
| DEC-36 | Falso positivo do RNF-10 definido operacionalmente em 4 tipos (`FP-A` a `FP-D`) | Torna o RNF-10 mensurável |

---

## ✅ Pendências Anteriores Endereçadas

| ID | Pendência | Situação |
|:---|:---|:---|
| Fase 1, item 2 | Priorizar interações de maior risco no Diagrama de Sequência | ✅ SEQ-01 e SEQ-02 esboçados |
| P-08 | Calibração dos limiares de OCR e catalogação | 🟡 Limiares agora **especificados** (E1 0,88 · E2 0,70); calibração com amostra real segue para a Semana 05 |
| RB-01 | Fornecedores sem API de logs | ✅ Guarda de supressão do motor implementa `Sem telemetria` |

### Pendências ainda abertas

| ID | Item | Prazo |
|:---|:---|:---|
| P-01 | Contraste de `green.600` e `amber.600` reprovado no WCAG AA | Semana 6 |
| P-02 | Política de rotação de chaves (CTL-04) | Semana 6 |
| P-03 | Plano de teste de isolamento multi-tenant (CTL-10) | Semana 7 |
| P-04 | Anexo contratual de transferência internacional (CTL-14) | Semana 7 |
| P-06 | Cabeçalho da Fase 1 incompleto em `estudo_caso1.md` | Correção não aplicada — fora do escopo |
| P-07 | 6 parâmetros da RN05 pendentes de homologação | Semana 5 |
| P-08 | Calibração dos limiares com amostra real | Semana 5 |
| P-11 | Curvas emocionais das jornadas são hipóteses | Semana 12 |
| P-12 | 8 parâmetros de RN01 e RN02 pendentes de homologação | Semana 5 |
| P-13 | Contratação emergencial fora do fluxo de aprovação | Semana 4 → **segue aberta**, depende do cliente |
| P-14 | Licenças *floating* exigem modelo de apuração próprio | Semana 6 |

---

## ⚠️ Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-15 | Densidade da tabela de licenças com carteiras de 4.000+ linhas | Semana 05 (Mid-Fi) |
| P-16 | Comportamento do gráfico de ROI em tablet ainda não desenhado | Semana 05 (RNF-09) |
| P-17 | Texto do resumo de conformidade (RI-03) depende de revisão do DPO | Semana 06 |
| P-18 | 6 parâmetros do motor de IA pendentes de homologação (limiares, sobreposição, piso, pesos do score, definição de FP) | Semana 05 |
| P-19 | Definir se o serviço de OCR é componente interno ou fornecedor externo | Semana 05 — altera SEQ-02 e o Diagrama de Componentes da Semana 07 |

---

## ➡️ Entradas para a Semana 05 (Wireframes Mid-Fi)

- **23 requisitos de interface restantes** (`RI-06` a `RI-24`, `RI-27` a `RI-30`) para as telas
  SCR-02, SCR-06, SCR-07, SCR-09 e SCR-10.
- **W-00 (shell)** como estrutura fixa a reaproveitar em todas as telas Mid-Fi.
- **Seção 6 do Entregável 1** (tipos de recomendação) → base do visualizador de relatórios.
- **Seções 8 e 9 do Entregável 1** (falsos positivos e guardas) → base do relatório de
  validação do RNF-10, que é entregável da Semana 05.
- **SEQ-01 e SEQ-02 em v0.1** → consolidar e acrescentar SEQ-03 e SEQ-04 para a entrega formal.
- **Seção 3.1 do Entregável 3** (orçamento de 5 min) → parâmetro a medir na validação do RNF-04.
