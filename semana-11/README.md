# Semana 11 (Iteração 11) — Montagem do Protótipo Navegável

**Período:** 19/10/2026 a 25/10/2026
**Fase:** 3 — UI de Alta Fidelidade e Prototipagem Interativa
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md) · [`semana-06/`](../semana-06/README.md) · [`semana-07/`](../semana-07/README.md) · [`semana-08/`](../semana-08/README.md) · [`semana-09/`](../semana-09/README.md) · [`semana-10/`](../semana-10/README.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **D1 / D2** | Configuração de transições, interações e ligações do protótipo no Figma para cobrir 100% dos 10 requisitos | Concluído | Entregável 1 |
| **AR1 / AR2** | Elaboração dos casos e cenários de teste de usabilidade para a Semana 12 | Concluído | Entregável 2 |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Protótipo Navegável de Alta Fidelidade Unificado no Figma | [entregavel-01-prototipo-navegavel-unificado.md](entregavel-01-prototipo-navegavel-unificado.md) — ✅ **concluído**. 104 ligações de navegação + 8 aprofundamentos; 10 de 10 requisitos alcançáveis | D1/D2 |
| 2 | Plano de Testes de Usabilidade e Roteiro de Avaliação com Gestores | [entregavel-02-plano-testes-usabilidade.md](entregavel-02-plano-testes-usabilidade.md) — ✅ **concluído**. 8 tarefas, 3 personas, roteiro de sessão | AR1/AR2 |
| 3 | Diagramas UML conforme `diagramasUML.md` | [entregavel-03-diagrama-implantacao.md](entregavel-03-diagrama-implantacao.md) — ✅ **concluído**. Diagrama de Implantação, entrega formal pela primeira vez | AR1/AR2 |

---

## Achado Principal da Iteração

> ### A navegação já estava certa desde a Semana 08 — só faltava ligar o clique.
> As 14 telas com barra lateral já marcavam o item correto em azul desde a construção
> original (Semana 08/09). A ligação desta semana (104 reações) só tornou clicável o que o
> visual já comunicava — nenhuma tela precisou de ajuste de layout ou de conteúdo para cobrir
> os 10 requisitos.

> ### Uma pendência de 3 semanas (P-43) ganhou proposta, sem inventar SLA.
> RNF-03 (99,9% de disponibilidade) não tinha rastro em nenhum artefato desde a Semana 01
> (P-43, registrada na Semana 08). O Diagrama de Implantação propõe o mínimo genérico
> (balanceador + 2ª instância + réplica de banco) sem fixar número de instâncias ou SLA —
> isso vira a pendência nova P-49, para quando a equipe decidir o dimensionamento.

> ### A ligação do protótipo revelou uma lacuna real: SCR-09 não tem botão para o estado de edição.
> RI-17 (Semana 03) previa aviso de invalidação de aprovações ao alterar o valor da
> requisição acima de 10% — e a Semana 09 construiu a tela desse estado (SCR-09b). Mas
> nenhum botão em SCR-09 leva até lá. Registrado como **P-50**, para a equipe decidir antes
> da Semana 12.

---

## Rastreabilidade com Semanas Anteriores

| Semana | O que esta iteração usa |
|:---|:---|
| Semana 01 | Estado vazio (S1·E2 Seção 8) como ponto de partida do fluxo |
| Semana 03 | Personas P-01 a P-03, matriz Persona × Requisito × Tela, user flows UF-01 a UF-03, cenários `CT-xx` — base integral do Entregável 2 |
| Semana 05 | DEC-46 (natureza do serviço de OCR) e a reserva explícita do Provedor Externo de OCR para este diagrama; CA-01 a CA-06 (arquitetura de varredura) |
| Semana 07 | Os 9 contextos delimitados e o Cofre de Credenciais/KMS — base dos nós do Diagrama de Implantação |
| Semana 08 | Hi-Fi do Bloco A (SCR-01 a SCR-05); P-43 (RNF-03 sem rastro), herdada e endereçada aqui |
| Semana 09 | Hi-Fi do Bloco B (SCR-06 a SCR-10) |
| Semana 10 | Pacote de exceção (HF-41, HF-42) — ponto de partida e primeira ligação do protótipo |
