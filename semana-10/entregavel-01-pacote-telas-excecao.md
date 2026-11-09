# Entregável 1 — Pacote de Telas de Tratamento de Exceções

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 10 (12/10/2026 – 18/10/2026) — Refinamento Visual e Estados de Interface
**Responsável:** D1 / D2 (Designers)
**Situação:** ✅ **Concluído**
**Prazo:** 18/10/2026
**Telas cobertas:** Estado vazio (SCR-01) · Varredura em andamento · *Skeleton* do Dashboard (SCR-08) · Falha de integração · Dado mascarado (LGPD) · Exceção de OCR — valor zero (BR-01) · Exceção de OCR — NF ausente (BR-07)

---

## 1. Situação

Este entregável não cria requisitos novos: fecha os **5 padrões estruturais** que a Semana 01
já havia definido e reservado explicitamente para esta iteração, e os **2 casos de borda de
OCR** do catálogo da Semana 02 que ainda não tinham tela própria.

| Item | Valor |
|:---|:---|
| Responsável | D1 / D2 |
| Prazo | 18/10/2026 |
| Onde será entregue | Arquivo Figma do projeto, um quadro por padrão; o link entra na Seção 4 |
| Critério de aceite | Itens HF-41 a HF-47 (Seção 3) aprovados |
| Quem aceita | AR1/AR2 confere contra a Seção 8 do Entregável 2 da Semana 01 |

### 1.1. Origem de cada item (nada aqui foi inventado nesta iteração)

| # | Padrão | Fonte | Por que entra aqui |
|:--|:---|:---|:---|
| 1 | Estado vazio acionável (zero conexões) | S1·E2, Seção 8 | *"detalhamento visual completo fica para a Semana 10"* (texto literal da Seção 8) |
| 2 | Varredura em andamento | S1·E2, Seção 8 | Idem — RNF-04 (&lt; 5 min) |
| 3 | *Skeleton* de cards do Dashboard | S1·E2, Seção 8 | Idem — RNF-06 (&lt; 2s); distinto do *skeleton* de tabela já feito na Semana 08 |
| 4 | Falha de integração (banner + badge) | S1·E2, Seção 8 | Idem — mais forte que o badge `Erro` já usado na SCR-01 |
| 5 | Dado mascarado por LGPD-01 | S1·E2, Seção 8 · CMP-22 (Design System) | Idem; CMP-22 já especifica pseudônimo + escudo + tooltip (MSG-12) |
| 6 | NF com valor zero/bonificação (BR-01) | S2·E2, Seção 7 (Casos de Borda) | Caso de borda do catálogo RN05 sem tela própria |
| 7 | Cobrança sem nota fiscal, detalhe (BR-07) | S2·E2, Seção 7 · DEC-86 (Semana 08) | O badge `NF ausente` já existe (Semana 08, SCR-02); falta o detalhe da exceção |

> **O que ficou de fora, de propósito.** A pesquisa desta iteração não encontrou nenhum
> requisito pedindo que as travas RN03/RN04 apareçam em *mais* telas além de SCR-06/SCR-09
> (isso é o Entregável 2, que audita o que já existe). Também não há um "convite" como fluxo
> distinto de REQ-09 — é só a forma como o cronograma se refere à Requisição já construída.

---

## 2. Insumos já disponíveis

| Insumo | Onde está | Uso nesta iteração |
|:---|:---|:---|
| Padrões estruturais de estado (Seção 8) | [S1·E2](../semana-01/entregavel-02-arquitetura-informacao-mapa-navegacao.md) | Fonte única dos 5 padrões |
| Casos de borda BR-01 a BR-10 | [S2·E2](../semana-02/entregavel-02-matriz-regras-ocr-divergencia-rn05.md), Seção 7 | BR-01 e BR-07 |
| CMP-16 (Feedback de sistema), CMP-22 (Identificador de colaborador) | Design System (`main`), Seção 9 | Componentes formais de empty/loading/erro e de pseudônimo mascarado |
| Estado inicial (zero conexões) | [S4·E2](../semana-04/entregavel-02-kit-wireframes-lofi.md) — W-01 | Única base para o item 1; nunca evoluído para Hi-Fi |
| Badge `Erro` / `NF ausente` já construídos | Semana 08 — SCR-01, SCR-02 | Precedente a não duplicar; itens 4 e 7 aprofundam, não substituem |
| Pendências já apontadas para esta semana | Semana 09, Entregável 3 — P-47, P-48 | `Licença`/`Assinatura` sem exemplo de `EmDowngrade`/`EmCancelamento`; `Aprovar` habilitado e `Reverter` sem tela |

---

## 3. Lista de Verificação (HF-xx)

Numeração contínua a partir da HF-40 (última usada na Semana 09).

| ID | Padrão/Tela | Condição | Origem |
|:---|:---|:---|:---|
| HF-41 | Estado vazio (SCR-01) | Zero conexões configuradas; CTA acionável para conectar, não apenas texto informativo | S1·E2 Seção 8 |
| HF-42 | Varredura em andamento | Barra de progresso persistente no topbar; navegação para outras telas continua livre (não bloqueia) | S1·E2 Seção 8 · RNF-04 |
| HF-43 | *Skeleton* do Dashboard (SCR-08) | *Skeleton* de cards (KPIs + gráfico), nunca um spinner de página inteira | S1·E2 Seção 8 · RNF-06 |
| HF-44 | Falha de integração | Banner fixo no topo da página do conector afetado + badge correspondente na barra lateral | S1·E2 Seção 8 |
| HF-45 | Dado mascarado (LGPD) | Pseudônimo com ícone de escudo e tooltip (CMP-22, MSG-12); variante reidentificada exclusiva do Admin de RH, com badge "Reidentificado" | S1·E2 Seção 8 · CMP-22 |
| HF-46 | Exceção de OCR — valor zero | NF com valor R$ 0,00 ou nota de bonificação sinalizada como exceção, não como divergência comum | S2·E2, BR-01 |
| HF-47 | Exceção de OCR — NF ausente, detalhe | Tela de detalhe para uma cobrança sem nota correspondente (BR-07), além do badge já existente | S2·E2, BR-07 · DEC-86 |

---

## 4. Registro de entrega

| Data | Link do Figma | Itens HF aprovados | Observação |
|:---|:---|:---|:---|
| 09/11/2026 | [Projeto de Software — Figma](https://www.figma.com/design/3XaNdOU1zdQisXFuDrvB6O/Projeto-de-Software) | 7 de 7 | Todos os padrões da Seção 8 (S1·E2) e os 2 casos de borda de OCR entregues. Capturas de tela em [`wireframes/semana-10/`](../wireframes/semana-10/) |

### 4.1. Registro de Imagens

| Item | Arquivo |
|:---|:---|
| HF-41 — Estado vazio acionável (SCR-01) | [wireframes/semana-10/hf41-estado-vazio-scr01.png](../wireframes/semana-10/hf41-estado-vazio-scr01.png) |
| HF-42 — Varredura em andamento (topbar) | [wireframes/semana-10/hf42-varredura-em-andamento.png](../wireframes/semana-10/hf42-varredura-em-andamento.png) |
| HF-43 — *Skeleton* de cards do Dashboard | [wireframes/semana-10/hf43-skeleton-dashboard.png](../wireframes/semana-10/hf43-skeleton-dashboard.png) |
| HF-44 — Falha de integração (banner + badge na sidebar) | [wireframes/semana-10/hf44-falha-integracao.png](../wireframes/semana-10/hf44-falha-integracao.png) |
| HF-45 — Dado mascarado por LGPD (CMP-22) | [wireframes/semana-10/hf45-dado-mascarado-lgpd.png](../wireframes/semana-10/hf45-dado-mascarado-lgpd.png) |
| HF-46 — Exceção de OCR: valor zero (BR-01) | [wireframes/semana-10/hf46-ocr-valor-zero.png](../wireframes/semana-10/hf46-ocr-valor-zero.png) |
| HF-47 — Exceção de OCR: NF ausente, detalhe (BR-07) | [wireframes/semana-10/hf47-ocr-nf-ausente-detalhe.png](../wireframes/semana-10/hf47-ocr-nf-ausente-detalhe.png) |
