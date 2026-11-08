# Entregável 2 — Layouts Hi-Fi (Figma) da Ingestão de NFs, Categorização por IA e Desperdício

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 08 (28/09/2026 – 04/10/2026) — UI Hi-Fi do Bloco A  
**Responsável:** D1 (Designer)  
**Situação:** ✅ **Concluído**  
**Prazo:** 13/11/2026  
**Telas cobertas:** SCR-01 (Conexões) · SCR-02 (Extrator de NFs) · SCR-03 (Inventário e Detalhe do Fornecedor) · SCR-04 (Licenças ociosas) · SCR-05 (Relatório de desperdício)

---

## 1. Situação

Os layouts Hi-Fi foram construídos no Figma (quadro "02 · Wireframes", um por tela) para
SCR-01 a SCR-05, evoluindo o Lo-Fi e o Mid-Fi já existentes onde havia precedente e desenhando
do zero onde não havia (SCR-03 Detalhe do Fornecedor e SCR-05, por LR-12 e LR-21). Os itens
HF-01 a HF-24 (Entregável 1, Seção 11) estão prontos, com a massa canônica da Seção 10 aplicada
em todas as telas. Com este entregável, a camada **L10** da matriz passa a cobrir REQ-01 a
REQ-05 (DEC-76, proposta — Entregável 1, Seção 3.3).

| Item | Valor |
|:---|:---|
| Responsável | D1 |
| Prazo | 13/11/2026 |
| Onde será entregue | Arquivo Figma do projeto, um quadro por tela; o link entra na Seção 4 deste documento |
| Critério de aceite | Itens HF-01 a HF-24 (Entregável 1, Seção 11) aprovados, com a massa canônica (Entregável 1, Seção 10) |
| Quem aceita | AR1 confere a lista HF; a equipe ratifica |

---

## 2. Insumos já disponíveis

| Insumo | Onde está | Uso no Hi-Fi |
|:---|:---|:---|
| Lista de verificação HF-01 a HF-24 | [Entregável 1, Seção 11](entregavel-01-matriz-rastreabilidade-bloco-a.md) | Critério de aceite de cada tela |
| Massa de dados canônica (regras R1 a R8) | Entregável 1, Seção 10 | Valores exibidos em todas as telas |
| Mensagens MSG-16 a MSG-19 | Entregável 1, Seção 11.3 | Textos de regra fora do catálogo atual |
| Gatilhos humanos sem controle (GI-xx) | [Entregável 3, Parte II](entregavel-03-diagramas-uml.md) | Controles que precisam aparecer no Hi-Fi |
| Estados sem exemplo em tela | Entregável 3, Seção 8 | 13 badges a acrescentar |
| Wireframes Lo-Fi e Mid-Fi | [S4·E2](../semana-04/entregavel-02-kit-wireframes-lofi.md) · [S5·E1](../semana-05/entregavel-01-wireframes-midfi-visualizador-nf-modais.md) | Estrutura e navegação |
| Design System | [S6·E1](../semana-06/entregavel-01-design-system-saas-b2b.md), versão do commit `c13f5dd` (P-37) | Tokens, componentes e badges |

---

## 3. Quadros esperados

| Tela | Itens HF | Observação |
|:---|:---|:---|
| SCR-01 Conexões | HF-01 a HF-04 | Formulário de chave de API, revogação com 2FA, *"Tentar novamente"* |
| SCR-02 Extrator de NFs | HF-05 a HF-08 | *"Registrar desfecho"*, variante de `Pendente de revisão`, `NF ausente` |
| SCR-03 Inventário e Detalhe do Fornecedor | HF-09 a HF-11 | Detalhe do fornecedor nunca desenhado (LR-12) |
| SCR-04 Licenças ociosas | HF-12 a HF-17 | Plano combinado, *"Recusar"*, pool de licenças |
| SCR-05 Relatório de desperdício | HF-18 e HF-19 | Tela sem wireframe anterior (LR-21) |
| Todas | HF-20 a HF-24 | Tablet de 768 px, badges do Design System |

---

## 4. Registro de entrega

| Data | Link do Figma | Itens HF aprovados | Observação |
|:---|:---|:---|:---|
| 07/11/2026 | [Projeto de Software — Figma](https://www.figma.com/design/3XaNdOU1zdQisXFuDrvB6O/Projeto-de-Software) | 24 de 24 | Todas as telas SCR-01 a SCR-05 entregues, incluindo tablet (HF-20) e estado de carregamento (HF-21). Capturas de tela em [`imagens/`](imagens/) |

### 4.1. Registro de Imagens

| Tela | Arquivo |
|:---|:---|
| SCR-01 — Conexões e Chaves de API | [imagens/scr-01-conexoes-chaves-api.png](imagens/scr-01-conexoes-chaves-api.png) |
| SCR-01 — Tablet 768 px (HF-20) | [imagens/scr-01-tablet-768px.png](imagens/scr-01-tablet-768px.png) |
| SCR-02 — Extrator de NFs (lista) | [imagens/scr-02-extrator-nfs-lista.png](imagens/scr-02-extrator-nfs-lista.png) |
| SCR-02 — Tablet 768 px (HF-20, DEC-52) | [imagens/scr-02-tablet-768px.png](imagens/scr-02-tablet-768px.png) |
| SCR-02b — Detalhe da Divergência | [imagens/scr-02b-detalhe-divergencia.png](imagens/scr-02b-detalhe-divergencia.png) |
| SCR-02c — Fatura Pendente de Revisão | [imagens/scr-02c-fatura-pendente-revisao.png](imagens/scr-02c-fatura-pendente-revisao.png) |
| SCR-03a — Inventário de Software | [imagens/scr-03a-inventario-software.png](imagens/scr-03a-inventario-software.png) |
| SCR-03b — Detalhe do Fornecedor | [imagens/scr-03b-detalhe-fornecedor.png](imagens/scr-03b-detalhe-fornecedor.png) |
| SCR-04 — Licenças Ociosas (topo) | [imagens/scr-04-licencas-ociosas-topo.png](imagens/scr-04-licencas-ociosas-topo.png) |
| SCR-04 — Licenças Ociosas (rodapé) | [imagens/scr-04-licencas-ociosas-rodape-a.png](imagens/scr-04-licencas-ociosas-rodape-a.png) · [imagens/scr-04-licencas-ociosas-rodape-b.png](imagens/scr-04-licencas-ociosas-rodape-b.png) |
| SCR-05 — Relatório de Desperdício | [imagens/scr-05-relatorio-desperdicio.png](imagens/scr-05-relatorio-desperdicio.png) |
