# Semana 02 (Iteração 2) — Detalhamento do Bloco A (REQ-01 a REQ-03)

**Período:** 17/08/2026 a 23/08/2026  
**Fase:** 1 — Descoberta, Regras e Mapeamento  
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md)  
**Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)  
**Iteração anterior:** [`semana-01/`](../semana-01/README.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR1** | Especificação de histórias de usuário (US-01 a US-03) | Concluído | Entregável 1 |
| **AR1** | Regras de divergência de OCR (RN05) | Concluído | Entregável 2 |
| **D1** | Jornada do usuário para onboarding de integrações e leitura de notas | Concluído | Entregável 3 |
| **AR2 / D2** | Início do levantamento do Bloco B e personas de Gestores Financeiros / IT Admins | Concluído | Anexo A |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Documento de Especificação BDD/Gherkin dos Requisitos REQ-01 a REQ-03 | [entregavel-01-especificacao-bdd-gherkin-req01-req03.md](entregavel-01-especificacao-bdd-gherkin-req01-req03.md) | AR1 |
| 2 | Matriz de Regras de Negócio de OCR e Divergência Financeira (RN05) | [entregavel-02-matriz-regras-ocr-divergencia-rn05.md](entregavel-02-matriz-regras-ocr-divergencia-rn05.md) | AR1 |
| 3 | Mapa de Jornada do Usuário para Leitura de NFs e Ingestão de E-mails | [entregavel-03-mapa-jornada-usuario-nf-email.md](entregavel-03-mapa-jornada-usuario-nf-email.md) | D1 |
| 4 | Diagramas UML conforme `diagramasUML.md` | [entregavel-04-diagramas-uml.md](entregavel-04-diagramas-uml.md) | AR1 / AR2 |
| — | *Anexo:* Levantamento inicial do Bloco B e personas corporativas | [anexo-a-levantamento-bloco-b-e-personas.md](anexo-a-levantamento-bloco-b-e-personas.md) | AR2 / D2 |

> **UML nesta iteração:** a matriz de `diagramasUML.md` marca a **entrega formal do Diagrama
> de Casos de Uso na Semana 2** — feita na Parte I do Entregável 4 (v1.0). O **Diagrama de
> Atividades** inicia nesta semana e é entregue formalmente na Semana 3 — o rascunho v0.1
> está na Parte II.

---

## Números da Iteração

| Indicador | Valor |
|:---|:---|
| Histórias de usuário especificadas | 3 (US-01 a US-03) |
| Cenários Gherkin escritos | 28 (23 no Entregável 1 + 5 no Entregável 2) |
| Sub-regras derivadas da RN05 | 10 (`RN05.1` a `RN05.10`) |
| Casos de borda mapeados | 10 (`BR-01` a `BR-10`) |
| Jornadas mapeadas | 2 (onboarding e divergência) |
| Requisitos de interface derivados | 12 (`RI-01` a `RI-12`) |
| Casos de uso no diagrama v1.0 | 14 (era 12 no rascunho v0.1) |
| Personas esboçadas | 3 + 1 antipersona |

---

## Pendências da Semana 01 Resolvidas

| ID | Pendência | Como foi resolvida |
|:---|:---|:---|
| **P-05** | Definir se UC-11 e UC-12 são casos de uso de 1ª classe | Mantidos como 1ª classe, agrupados no pacote *Governança e Conformidade* (M-01 do Entregável 4) |
| **Sem. 01, item 1** | Descrições textuais de UC-01 a UC-03 | Seção 4 do Entregável 4, formato *fully dressed* |
| **Sem. 01, item 4** | Iniciar Diagrama de Atividades do fluxo de OCR | Parte II do Entregável 4 (v0.1, com 5 raias) |
| **Q-03** | Faturas em moeda estrangeira exigem regra própria | Formalizada como RN05.5 (banda cambial de IOF + spread) |

### Pendências da Semana 01 ainda abertas

| ID | Item | Prazo |
|:---|:---|:---|
| P-01 | Contraste de `green.600` e `amber.600` reprovado no WCAG AA | Semana 6 |
| P-02 | Política de rotação de chaves (CTL-04) | Semana 6 |
| P-03 | Plano de teste de isolamento multi-tenant (CTL-10) | Semana 7 |
| P-04 | Anexo contratual de transferência internacional (CTL-14) | Semana 7 |
| P-06 | Cabeçalho da Fase 1 incompleto em `estudo_caso1.md` | Correção não aplicada — fora do escopo |

---

## Decisões de Projeto Tomadas nesta Iteração

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-08 | O limite de 1% da RN05 é **exclusivo**: exatamente 1,00% concilia | Elimina ambiguidade na fronteira da regra |
| DEC-09 | A conciliação usa **valor absoluto** da variação — cobrança a menor também é divergência | NF emitida a maior passa a ser detectada |
| DEC-10 | Divergência recebe **severidade em 3 faixas** com destinatários e prazos distintos | Evita que uma diferença de 2% e outra de 40% tenham o mesmo tratamento |
| DEC-11 | Somente a confiança do **valor total (CE-02)** bloqueia a conciliação automática | Impede que campo acessório trave a auditoria financeira |
| DEC-12 | UC-02 é disparado por **temporizador**, não por ator humano | Reflete a ingestão contínua e corrige o rascunho v0.1 |
| DEC-13 | Correção manual **reprocessa e preserva** o registro anterior (nunca sobrescreve) | Sustenta a trilha imutável exigida pelo CTL-11 |
| DEC-14 | Consolidação de grafias de fornecedor é **automática com desfazer** | Resolve a questão Q-04 da Semana 02 |

---

## Pendências e Riscos Abertos Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-07 | 6 parâmetros da RN05 dependem de homologação do cliente (janela de conciliação, banda cambial, limiares, prazos) | Seção 11 do Entregável 2 — homologar até a Semana 5 |
| P-08 | Limiar de 85% do OCR e de 70% da catalogação carecem de calibração com amostra real | Semana 5, junto à validação do RNF-10 |
| P-09 | Definir se UC-13 e UC-14 são casos de uso próprios ou fluxos alternativos | Validar AR1 × AR2 na Semana 3 |
| P-10 | Fornecedores sem API de logs podem inviabilizar a RN02 em parte do inventário (RB-01) | Semana 3, no detalhamento do REQ-04 |
| P-11 | Curvas emocionais das jornadas são hipóteses, não medições | Confrontar com dados reais na Semana 12 |

---

## Entradas para a Semana 03 (Detalhamento do Bloco B — REQ-04 a REQ-10)

- **Anexo A** → 14 questões de elicitação (`EB-01` a `EB-14`) estruturam as histórias US-04 a US-10.
- **Anexo A** → personas P-01 e P-02 prontas para consolidação formal; P-03 a detalhar.
- **Entregável 4, Parte II** → base do Diagrama de Atividades, que ganha na Semana 3 o
  segundo fluxo (aprovação de gastos com as travas RN01 e RN04).
- **Entregável 2, Seção 5.1** → faixas de severidade a reaproveitar no desenho dos alertas (REQ-06).
- **Entregável 1, Seção 1.1** → convenções Gherkin a manter nas histórias US-04 a US-10.
