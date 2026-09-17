# Semana 05 (Iteração 5) — Wireframes de Média Fidelidade (Mid-Fi)

**Período:** 07/09/2026 a 13/09/2026
**Fase:** 2 — Wireframing e Design System
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR1 / AR2** | Validação técnica do limite de falsos positivos (< 2%, RNF-10) | Concluído | Entregável 2, Parte B |
| **AR1 / AR2** | Validação técnica do tempo de varredura (< 5 min, RNF-04) | Concluído | Entregável 2, Parte B |
| **D1 / D2** | Mid-Fi da central de notificações | Concluído | Entregável 1, M-03 |
| **D1 / D2** | Mid-Fi dos modais de aprovação e downgrade | Concluído | Entregável 1, M-04 a M-06 |
| **D1 / D2** | Mid-Fi do visualizador de relatórios | Concluído | Entregável 1, M-07 |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Wireframes Mid-Fi Navegáveis do Visualizador de NFs e Modais de Downgrade | [entregavel-01-wireframes-midfi-visualizador-nf-modais.md](entregavel-01-wireframes-midfi-visualizador-nf-modais.md) | D1 / D2 |
| 2 | Relatório de Validação dos Parâmetros RNF-04 e RNF-10 | [entregavel-02-relatorio-validacao-rnf04-rnf10.md](entregavel-02-relatorio-validacao-rnf04-rnf10.md) | AR1 / AR2 |
| 3 | Diagramas UML conforme `diagramasUML.md` | [entregavel-03-diagramas-uml.md](entregavel-03-diagramas-uml.md) | AR1 / AR2 |

> **UML nesta iteração:** entrega formal do **Diagrama de Sequência** (v1.0, 4 interações) e
> rascunho v0.1 do **Diagrama de Máquina de Estados** (5 máquinas, 40 estados), cuja entrega
> formal é na Semana 06.

---

## Achado Principal da Iteração

> ### O RNF-10 **não é atendido** com os parâmetros propostos na Semana 04.
> A modelagem analítica projeta **2,19%** de falsos positivos contra um teto de **2,00%**.
> O ajuste corretivo (**DEC-44** — limiar do estágio E2 de 0,70 para 0,80 e base curada de 75%
> para 85%) traz a projeção para **1,49%**, com margem de 0,51 pp. O custo é de
> aproximadamente 1 hora adicional de revisão manual na carga inicial.

E um achado secundário, sobre o RNF-04:

> O teto de 5 minutos só é alcançável se a "varredura inicial" for entendida como **janela de
> 90 dias**, com **OCR fora do caminho crítico** e o teto medido **por conexão**. Sob as
> leituras alternativas, o requisito é irrealizável — não difícil, irrealizável. A margem
> projetada é de **menos de 1 segundo**, o que classifica o RNF-04 como de alto risco de
> regressão.

---

## Números da Iteração

| Indicador | Valor |
|:---|:---|
| Wireframes Mid-Fi desenhados | 8 (`M-01` a `M-08`) |
| Anotações de wireframe | 29 |
| Requisitos de interface atendidos nesta iteração | 20 (acumulado: 28 de 31) |
| Transições de protótipo mapeadas | 14 (`T-01` a `T-14`) |
| Condições de arquitetura derivadas | 6 (`CA-01` a `CA-06`) |
| Premissas do modelo declaradas | 12 (`P1` a `P12`) |
| Requisitos de instrumentação | 8 (`IN-01` a `IN-08`) |
| Riscos de validação registrados | 6 (`RV-01` a `RV-06`) |
| Parâmetros consolidados para homologação | 20 |
| Diagramas de sequência entregues | 4 (`SEQ-01` a `SEQ-04`) |
| Máquinas de estado consolidadas | 5 · 40 estados · 30 guardas |

---

## Decisões de Projeto Tomadas nesta Iteração

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-37 | Lista de divergências ordena por severidade, nunca por data | A divergência de 40% aparece antes da de 3% |
| DEC-38 | Prévia de impacto exibe quem perde acesso, há quanto tempo não usa e por qual evidência, antes de qualquer ação destrutiva | Contramedida à desconfiança da persona P-02 |
| DEC-39 | Ação bloqueada aparece desabilitada **com o motivo visível**, em vez de ser omitida | O usuário entende por que não pode agir |
| DEC-40 | Contador da janela de 72 h é exibido antes da confirmação | Reduz ansiedade na ação destrutiva |
| DEC-41 | "Varredura inicial" = **janela de 90 dias**; carga histórica é assíncrona | Torna o RNF-04 realizável |
| DEC-42 | OCR e conciliação ficam **fora do caminho crítico** da varredura inicial | Libera 1 a 3 min do orçamento |
| DEC-43 | O teto de 5 min é **por conexão**, medido no percentil 95 | Fecha a ambiguidade de "conta conectada" |
| DEC-44 | **Limiar de classificação E2 de 0,70 → 0,80 e base curada de 75% → 85%** | **Sem isso, o RNF-10 é descumprido** |
| DEC-45 | O teto de 2% do RNF-10 mede apenas FP-A + FP-B; FP-C e FP-D recebem tetos próprios | Evita somar frações de denominadores distintos |
| DEC-46 | OCR é serviço de domínio interno com adaptador (ACL) para provedor externo | Isola o domínio do contrato do fornecedor |

---

## Pendências Anteriores Resolvidas

| ID | Pendência | Como foi resolvida |
|:---|:---|:---|
| **P-08** | Calibração dos limiares de OCR e catalogação | Modelada analiticamente; limiar de E2 corrigido para 0,80 (DEC-44); calibração empírica tem protocolo definido |
| **P-15** | Densidade da tabela de licenças com 4.000+ linhas | Mitigada com paginação e filtros; medição segue para a Semana 10 |
| **P-19** | Serviço de OCR: interno ou externo? | Serviço interno com ACL (DEC-46) |
| Semana 04, item 1 | Entrega formal do Diagrama de Sequência | SEQ-01 a SEQ-04 em v1.0 |
| Semana 04, item 4 | Iniciar Máquina de Estados | 5 máquinas em v0.1 |
| Semana 04, item 3 | Validar o orçamento de tempo do RNF-04 | Validado analiticamente; protocolo de medição empírica definido |

### Pendências ainda abertas

| ID | Item | Prazo |
|:---|:---|:---|
| P-01 | Contraste de `green.600` e `amber.600` reprovado no WCAG AA | Semana 6 |
| P-02 | Política de rotação de chaves (CTL-04) | Semana 6 |
| P-03 | Plano de teste de isolamento multi-tenant (CTL-10) | Semana 7 |
| P-04 | Anexo contratual de transferência internacional (CTL-14) | Semana 7 — agora também alcança o provedor de OCR (DEC-46) |
| P-06 | Cabeçalho da Fase 1 incompleto em `estudo_caso1.md` | Correção não aplicada — fora do escopo |
| P-07 · P-12 · P-18 | 20 parâmetros pendentes de homologação | **Consolidados** na Seção 10 do Entregável 2 — aguardam decisão do cliente |
| P-11 | Curvas emocionais das jornadas são hipóteses | Semana 12 |
| P-13 | Contratação emergencial fora do fluxo de aprovação | Segue aberta — depende do cliente |
| P-14 | Licenças *floating* exigem modelo de apuração próprio | Semana 6 |
| P-16 | Gráfico de ROI em tablet | Semana 6 |
| P-17 | Texto do resumo de conformidade depende do DPO | Semana 6 |

---

## Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-20 | Zoom e rotação do visualizador de PDF em tablet exigem gesto próprio | Semana 06 (RNF-09) |
| P-21 | Texto integral das políticas exibidas em tela (RN01, RN04) precisa de revisão jurídica | Semana 06 |
| P-22 | Proporção mínima de licenças ociosas para uma `Assinatura` assumir o estado `Ociosa` | Semana 06, na entrega da Máquina de Estados |
| P-23 | Premissas `P1` a `P12` do modelo de validação carecem de confirmação empírica | Fase de implementação |
| P-24 | Cotas reais de requisição dos provedores de e-mail (premissa P2) | Confirmar antes da implementação — risco RV-02 |
| RV-05 | Se o cliente recusar a janela de 90 dias, o RNF-04 precisa ser renegociado | Escalar na homologação |

---

## Entradas para a Semana 06 (Design System SaaS Corporativo)

- **28 requisitos de interface** já desenhados em Lo-Fi ou Mid-Fi — insumo direto dos componentes.
- **Microcopy das regras** (RN01, RN04, RN05) exibida em tela → componentes de mensagem do Design System.
- **P-01** (contraste reprovado de `green.600` e `amber.600`) precisa ser resolvido nesta próxima iteração.
- **5 máquinas de estado** com 40 estados → cada estado precisa de um *badge* no Design System.
- **20 parâmetros consolidados** → levar à homologação do cliente.
- **Seção 3 do Entregável 2** (definição de FP-A a FP-D) → alimenta o dicionário de dados da Semana 06.
