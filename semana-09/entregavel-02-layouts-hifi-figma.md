# Entregável 2 — Layouts Hi-Fi (Figma) da Central de Ações, Exportador PDF/XLSX e Painel LGPD

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 09 (05/10/2026 – 11/10/2026) — UI Hi-Fi do Bloco B
**Responsável:** D2 (Designer)
**Situação:** ✅ **Concluído**
**Prazo:** 11/10/2026
**Telas cobertas:** SCR-06 (Central de Alertas) · SCR-07 (Central de Ações e Downgrade) · SCR-08 (Dashboard de ROI) · SCR-09 (Aprovação com Bloqueio da RN04) · SCR-10 (Central de Relatórios/Exportação e Portal do Titular)

---

## 1. Situação

Os layouts Hi-Fi foram construídos no Figma (quadro "Wireframes", um por tela) para SCR-06 a
SCR-10, evoluindo o Mid-Fi existente (M-03 a M-06) e o Lo-Fi (W-04/W-05, único precedente da
SCR-08) onde havia base, e corrigindo os exemplos que o Bloco A já havia atualizado (DEC-87,
DEC-88). Os itens HF-25 a HF-40 (Entregável 1, Seção 11) estão prontos. Com este entregável, a
camada **L8** da matriz passa a cobrir REQ-06 a REQ-10 (DEC-76, Entregável 1 da Semana 08,
Seção 3.3).

| Item | Valor |
|:---|:---|
| Responsável | D2 |
| Prazo | 11/10/2026 |
| Onde será entregue | Arquivo Figma do projeto, um quadro por tela; o link entra na Seção 4 deste documento |
| Critério de aceite | Itens HF-25 a HF-40 (Entregável 1, Seção 11) aprovados, com a massa canônica (Entregável 1, Seção 10) |
| Quem aceita | AR2 confere a lista HF; a equipe ratifica |

---

## 2. Insumos já disponíveis

| Insumo | Onde está | Uso no Hi-Fi |
|:---|:---|:---|
| Lista de verificação HF-25 a HF-40 | [Entregável 1, Seção 11](entregavel-01-matriz-rastreabilidade-bloco-b.md) | Critério de aceite de cada tela |
| Massa de dados canônica (regras R1 a R3) | Entregável 1, Seção 10 | Valores exibidos em todas as telas |
| Correção do exemplo de downgrade (Figma → Adobe CC) | Entregável 1, Seção 10.3, DEC-87 | Evita reabrir o duplo-cômputo já fechado na Semana 08 |
| Escopo reduzido da SCR-10 (sem o conteúdo financeiro do M-07) | Entregável 1, Seção 10.6, DEC-88 | SCR-10 cobre só exportação, filtros e máscara |
| Wireframes Mid-Fi | [S5·E1](../semana-05/entregavel-01-wireframes-midfi-visualizador-nf-modais.md) — M-03 a M-05 no Figma; M-07 e M-08 só como texto ASCII no markdown (nunca transpostos para o Figma) | Estrutura e navegação |
| Wireframes Lo-Fi (SCR-08, sem Mid-Fi) | [S4·E1](../semana-04/entregavel-01-fluxogramas-motor-ia-algoritmo-consolidacao.md) — W-04, W-05 | Única base estrutural do Dashboard |
| Design System | [S6·E1](../semana-06/entregavel-01-design-system-saas-b2b.md), Seção 10.2 (badges Bloco B) | Tokens, componentes e badges das máquinas `Requisição`, `Ação`, `Alerta` |

---

## 3. Quadros esperados

| Tela | Itens HF | Observação |
|:---|:---|:---|
| SCR-06 Central de Alertas e Calendário de Renovação | HF-25 a HF-27 | Badges da máquina `Alerta`, downgrade antes de renovar, selo de ressalva |
| SCR-07 Central de Ações e Downgrade de Planos | HF-28 a HF-30 | Exemplo corrigido (Adobe CC, não Figma), badges da máquina `Ação` |
| SCR-08 Dashboard Principal de ROI e Economia | HF-31 | Sem Mid-Fi anterior — evolui direto do Lo-Fi (W-04/W-05) |
| SCR-09 Central de Requisições e Aprovação de Gastos | HF-32, HF-33 | Estado de edição por alteração de valor (RI-17) |
| SCR-10 Central de Relatórios/Exportação e Portal do Titular | HF-34, HF-35 | Sem o conteúdo financeiro do M-07 (já é da SCR-05) |
| Todas | HF-36 a HF-40 | Tablet de 768 px, *skeleton*, pseudônimos, catálogo MSG, badges do Design System |

---

## 4. Registro de entrega

| Data | Link do Figma | Itens HF aprovados | Observação |
|:---|:---|:---|:---|
| 08/11/2026 | [Projeto de Software — Figma](https://www.figma.com/design/3XaNdOU1zdQisXFuDrvB6O/Projeto-de-Software) | 16 de 16 | Todas as telas SCR-06 a SCR-10 entregues, incluindo tablet (HF-36) e estado de carregamento (HF-37). Capturas de tela em [`wireframes/semana-09/`](../wireframes/semana-09/) |

### 4.1. Registro de Imagens

| Tela | Arquivo |
|:---|:---|
| SCR-06 — Central de Alertas e Calendário de Renovação | [wireframes/semana-09/scr-06-central-alertas.png](../wireframes/semana-09/scr-06-central-alertas.png) |
| SCR-06 — Tablet 768 px (HF-36, DEC-52) | [wireframes/semana-09/scr-06-tablet-768px.png](../wireframes/semana-09/scr-06-tablet-768px.png) |
| SCR-07 — Central de Ações e Downgrade de Planos | [wireframes/semana-09/scr-07-central-acoes.png](../wireframes/semana-09/scr-07-central-acoes.png) |
| SCR-07a — Modal de Downgrade (Adobe CC, DEC-87) | [wireframes/semana-09/scr-07a-modal-downgrade.png](../wireframes/semana-09/scr-07a-modal-downgrade.png) |
| SCR-07b — Modal de Cancelamento (Salesforce) | [wireframes/semana-09/scr-07b-modal-cancelamento.png](../wireframes/semana-09/scr-07b-modal-cancelamento.png) |
| SCR-07 — Tablet 768 px (HF-36, DEC-52) | [wireframes/semana-09/scr-07-tablet-768px.png](../wireframes/semana-09/scr-07-tablet-768px.png) |
| SCR-08 — Dashboard Principal de ROI e Economia | [wireframes/semana-09/scr-08-dashboard-roi.png](../wireframes/semana-09/scr-08-dashboard-roi.png) |
| SCR-08 — Tablet 768 px (HF-36, TPL-03) | [wireframes/semana-09/scr-08-tablet-768px.png](../wireframes/semana-09/scr-08-tablet-768px.png) |
| SCR-09a — Requisição Bloqueada (RN04) | [wireframes/semana-09/scr-09a-aprovacao-bloqueada.png](../wireframes/semana-09/scr-09a-aprovacao-bloqueada.png) |
| SCR-09b — Estado de Edição (RI-17) | [wireframes/semana-09/scr-09b-estado-edicao.png](../wireframes/semana-09/scr-09b-estado-edicao.png) |
| SCR-09 — Tablet 768 px (HF-36) | [wireframes/semana-09/scr-09-tablet-768px.png](../wireframes/semana-09/scr-09-tablet-768px.png) |
| SCR-10a — Central de Relatórios e Exportação | [wireframes/semana-09/scr-10a-exportacao.png](../wireframes/semana-09/scr-10a-exportacao.png) |
| SCR-10b — Portal do Titular (LGPD-02) | [wireframes/semana-09/scr-10b-portal-titular.png](../wireframes/semana-09/scr-10b-portal-titular.png) |
| SCR-10 — Tablet 768 px (HF-36) | [wireframes/semana-09/scr-10-tablet-768px.png](../wireframes/semana-09/scr-10-tablet-768px.png) |
| Estado de carregamento — *skeleton* e paginação (HF-37) | [wireframes/semana-09/estado-carregamento-skeleton.png](../wireframes/semana-09/estado-carregamento-skeleton.png) |

> **Nota de correção (adicionada na revisão da Semana 11).** A SCR-09 tinha o estado de edição
> (SCR-09b, RI-17) desenhado, mas nenhum botão nela levava até lá — a transição não existia,
> só o destino. Corrigido na Semana 11 (P-50): adicionado o botão "Alterar valor" em SCR-09,
> ligado a SCR-09b. A imagem `scr-09a-aprovacao-bloqueada.png` acima já reflete essa correção.
