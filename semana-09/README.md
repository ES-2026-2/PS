# Semana 09 (Iteração 9) — UI Hi-Fi do Bloco B (Req. 06 a 10)

**Período:** 05/10/2026 a 11/10/2026
**Fase:** 3 — UI de Alta Fidelidade e Prototipagem Interativa
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md) · [`semana-06/`](../semana-06/README.md) · [`semana-07/`](../semana-07/README.md) · [`semana-08/`](../semana-08/README.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR2** | Elaboração da matriz de rastreabilidade do Bloco B | Concluído | Entregável 1 |
| **D2** | UI final dos relatórios PDF/XLSX, fluxo de cancelamento/downgrade direto e central de LGPD | Concluído | Entregável 2 · insumos HF-25 a HF-40 |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Matriz de Rastreabilidade Preenchida para o Bloco B (REQ-06 ao REQ-10) | [entregavel-01-matriz-rastreabilidade-bloco-b.md](entregavel-01-matriz-rastreabilidade-bloco-b.md) | AR2 |
| 2 | Layouts Hi-Fi (Figma) da Central de Ações, Exportador PDF/XLSX e Painel LGPD | [entregavel-02-layouts-hifi-figma.md](entregavel-02-layouts-hifi-figma.md) — ✅ **concluído**. Telas SCR-06 a SCR-10 contra a lista HF-25 a HF-40 e a massa canônica do Entregável 1 | D2 |
| 3 | Diagramas UML conforme `diagramasUML.md` | [entregavel-03-diagramas-uml.md](entregavel-03-diagramas-uml.md) — ✅ **concluído**. Verificação transição × interface das máquinas do Bloco B | AR2 |

---

## Achado Principal da Iteração

> ### Os exemplos do Mid-Fi do Bloco B carregam o mesmo erro de conta dobrada que a Semana 08 já corrigiu no Bloco A.
> A matriz de rastreabilidade encontrou **7 lacunas** no Bloco B. A mais relevante: o modal de
> downgrade (M-04, Semana 05) usa o Figma como exemplo — reduzindo de 25 para 18 licenças,
> R$ 6.048,00/ano — mas esse mesmo lote já foi consolidado pelo plano combinado RC-1 da
> Semana 08 (Figma final: 24 licenças, R$ 20.232,00/ano). O mesmo acontece com a Central de
> Relatórios (M-07), que ainda mostra o comparativo financeiro com o valor antigo
> (R$ 26.424,00/ano) que a Semana 08 já corrigiu. **DEC-87 e DEC-88 (propostas):** o Hi-Fi do
> Bloco B usa os valores já corrigidos — a SCR-07 troca o exemplo para o Adobe CC, e a SCR-10
> deixa de reproduzir o conteúdo financeiro, que já pertence à SCR-05 (DEC-83).

> ### O Dashboard de ROI (REQ-08) nunca teve wireframe de média fidelidade.
> O texto do cronograma da Semana 09 não cita o Dashboard entre as telas do Entregável 2, mas
> REQ-08 é parte do Bloco B e seu critério de "Concluído" (DEC-76) também exige Hi-Fi aprovado.
> A SCR-08 evolui direto do Lo-Fi (W-04/W-05), sem etapa intermediária — mesmo padrão já usado
> na Semana 08 para a SCR-01.

---

## Rastreabilidade com Semanas Anteriores

| Semana | O que esta iteração usa |
|:---|:---|
| Semana 03 | RN01 a RN04 decompostas, cenários CT-06.x a CT-10.x, personas P-01 a P-03 |
| Semana 04 | Lo-Fi do Dashboard (W-04, W-05) — única base da SCR-08 |
| Semana 05 | Mid-Fi M-03 a M-06 no Figma; M-07 e M-08 só como texto — base de todas as telas |
| Semana 06 | Design System (badges da Seção 10.2), máquinas `Requisição`, `Ação`, `Alerta` |
| Semana 08 | Valores canônicos corrigidos (RC-1 a RC-5, DEC-78 a DEC-83), herdados sem recálculo |
