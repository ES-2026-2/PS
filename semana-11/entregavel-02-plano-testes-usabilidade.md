# Entregável 2 — Plano de Testes de Usabilidade e Roteiro de Avaliação com Gestores

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 11 (19/10/2026 – 25/10/2026) — Montagem do Protótipo Navegável  
**Responsável:** AR1 / AR2 (Analistas de Requisitos)  
**Situação:** ✅ **Concluído**  
**Prazo:** 25/10/2026  

---

## 1. Objetivo

Preparar o roteiro que a Semana 12 vai executar ("Condução das sessões de teste com gestores
financeiros e de TI"). Este documento não roda nenhuma sessão nem coleta dado de usuário —
isso é Entregável 1 e 2 da Semana 12. Aqui só ficam prontos: quem participa, o que cada um
faz, contra qual critério o sucesso é julgado e como a sessão é conduzida.

> **Base usada, nada inventado.** As personas (P-01 a P-03), a matriz Persona × Requisito ×
> Tela e os critérios de sucesso/fracasso na interface já existem desde a
> [Semana 03, Entregável 3](../semana-03/entregavel-03-personas-corporativas-user-flows-bloco-b.md)
> — que já reserva, na própria Seção 11, "Critérios de sucesso das personas → Semana 11 →
> Roteiro de teste de usabilidade". As tarefas abaixo reaproveitam os cenários `CT-xx` de
> fluxo principal (Semanas 02 e 03) como **referência privada do facilitador** — para julgar
> sucesso e contar erros —, não como script lido ao participante; não criam fluxo novo.

---

## 2. Participantes

| Persona | Papel real recrutado | Critério de sucesso/fracasso (fonte) |
|:---|:---|:---|
| P-01 — Gestor Financeiro / CFO | Gestor financeiro | S3·E3, Seção 2.4 |
| P-02 — Administrador de TI | Gestor de TI | S3·E3, Seção 3.4 |
| P-03 — Gestor de Compras | Gestor de compras | S3·E3, Seção 4.3 |

"Gestores financeiros e de TI" (texto do cronograma) corresponde a P-01 e P-02; P-03 entra
porque REQ-09 não tem outra persona principal (S3·E3, Seção 6).

---

## 3. Tarefas (roteiro por persona)

Cada tarefa cita o cenário `CT-xx` de fluxo principal e a tela onde ela começa (Hi-Fi da
Semana 08/09/10, ligada no protótipo do Entregável 1 desta semana). **O `CT-xx`/`UF-xx` é
material do facilitador, não do participante:** ao participante só se lê o objetivo da
tarefa (coluna "Tarefa"), nunca o caminho esperado — ler o passo a passo anularia a taxa de
erro e a taxa de sucesso definidas na Seção 5, que medem justamente se a pessoa encontra o
caminho sozinha.

| # | Persona | Tarefa | Tela inicial | Roteiro (`CT-xx`) | Requisito(s) |
|:--|:---|:---|:---|:---|:---|
| T1 | P-02 | Conectar uma nova fonte de dados e confirmar o resultado ainda na sessão | SCR-01 | CT-01.1 | REQ-01 |
| T2 | P-01 | Revisar uma fatura divergente (Salesforce), entender a causa e registrar o desfecho; depois, descartar um documento que não é fatura (Canva Pro) | SCR-02 → SCR-02b / SCR-02c | CT-02.4, CT-02.14†, CT-02.15† | REQ-02 |
| T3 | P-02 | Corrigir a categoria de um fornecedor mal classificado | SCR-03a → SCR-03b | CT-03.3 | REQ-03 |
| T4 | P-02 | Identificar uma licença ociosa e decidir a ação (downgrade/cancelamento) | SCR-04 → SCR-07 | UF-03 (S3·E3, Seção 9) | REQ-04, REQ-07 |
| T5 | P-01 | Ler o relatório de desperdício do mês e o dashboard de ROI | SCR-05 → SCR-08 | CT-05.1, CT-08.1 | REQ-05, REQ-08 |
| T6 | P-01 | Ler a notificação por e-mail do alerta (RI-20‡) e decidir a ação; só depois abrir o sistema para confirmar em SCR-06 | E-mail simulado → SCR-06 | UF-02 (S3·E3, Seção 8) | REQ-06 |
| T7 | P-03 | Decidir uma requisição bloqueada por estoque ocioso | SCR-09 | UF-01 (S3·E3, Seção 7) | REQ-09 |
| T8 | P-01 | Exportar um relatório de auditoria já anonimizado | SCR-10a | CT-10.1* | REQ-10 |

*CT-10.1 é o primeiro cenário de fluxo principal da Seção 8 (`semana-03/entregavel-01-...md`,
linha 512 em diante — exportação PDF/XLSX).

†CT-02.14 e CT-02.15 não são do catálogo original da Semana 02: vêm da Seção 9.2 do
[Entregável 1 da Semana 08](../semana-08/entregavel-01-matriz-rastreabilidade-bloco-a.md)
("Cenários propostos para fechar lacunas"), que já reservava essas duas para o roteiro desta
semana (linha 835 daquele documento).

‡O facilitador entrega ao participante uma cópia impressa/simulada do e-mail de alerta
(RI-20, Semana 03) antes de liberar o acesso ao protótipo — sem isso, o critério de sucesso
da Seção 4 ("entende o alerta sem abrir o sistema") não teria como ser avaliado, já que a
tarefa começaria com o participante já dentro de SCR-06.

---

## 4. Critérios de Sucesso por Tarefa

Reaproveita, sem reescrever, as tabelas "Sucesso / Fracasso" de cada persona (S3·E3, Seções
2.4, 3.4 e 4.3). Exemplos usados como critério de aceite na sessão:

| Tarefa | Sucesso | Fracasso |
|:---|:---|:---|
| T2 | Participante chega à causa da divergência sem abrir ajuda e completa o registro do desfecho | Badge "+2%" sem explicação (dor USR-01) |
| T4 | Participante vê a fonte da evidência antes de agir (RN02.2) | Presume ociosidade sem checar evidência |
| T6 | Participante entende o alerta sem abrir o sistema (e-mail já traz valor e prazo) | Alerta que obriga abertura do sistema para entender |
| T7 | Participante decide sem consultar manual — política já está na tela (PAT-08) | Regra descoberta só depois de submeter |
| T8 | Exportação sai anonimizada e com os filtros aplicados preservados | Arquivo ignora o filtro aplicado (ANT-04) |

---

## 5. Métricas Coletadas na Sessão (Semana 12)

Conforme o cronograma (Semana 12, Entregável 1 — "tempo na tarefa, taxa de sucesso e taxa de
erros"):

| Métrica | Definição operacional |
|:---|:---|
| Tempo na tarefa | Do início da leitura da tarefa até a ação final confirmada na tela |
| Taxa de sucesso | Tarefa concluída sem intervenção do facilitador, contra o critério da Seção 4 |
| Taxa de erro | Número de caminhos não previstos no `CT-xx`/`UF-xx` antes de concluir |

Este documento não define limiar numérico de aceitação (ex.: "sucesso = X segundos"): nenhuma
semana anterior fixou esse número para tarefas manuais, e inventá-lo agora anteciparia uma
análise que é o Entregável 1 da própria Semana 12.

---

## 6. Roteiro de Sessão

| Etapa | Duração aprox. | Conteúdo |
|:---|:---|:---|
| 1. Abertura | 5 min | Consentimento de gravação, contexto do protótipo (é clicável, não é produto real) |
| 2. Tarefas | 35–40 min | As tarefas da Seção 3 atribuídas à persona do participante, uma por vez, sem ajuda não solicitada |
| 3. Entrevista pós-teste | 10 min | Perguntas abertas por tarefa: o que esperava ver, o que confundiu |
| 4. Fechamento | 5 min | Agradecimento; sem divulgação de dado identificável do participante (RNF-02) |

---

## 7. Rastreabilidade deste Documento

| Fonte | Onde está | Uso aqui |
|:---|:---|:---|
| Personas P-01 a P-03, critérios de sucesso, matriz Persona × Requisito × Tela | [Semana 03, Entregável 3](../semana-03/entregavel-03-personas-corporativas-user-flows-bloco-b.md), Seções 2–6 | Participantes e critérios de aceite |
| UF-01, UF-02, UF-03 | Semana 03, Entregável 3, Seções 7–9 | Roteiro das tarefas T4, T6, T7 |
| Cenários `CT-01.x` a `CT-10.x` (fluxo principal) | [Semana 02](../semana-02/entregavel-01-especificacao-bdd-gherkin-req01-req03.md) e [Semana 03](../semana-03/entregavel-01-especificacao-bdd-gherkin-req04-req10.md), Entregável 1 | Roteiro das demais tarefas |
| `CT-02.14`, `CT-02.15` (cenários propostos para fechar lacunas) | [Semana 08, Entregável 1](../semana-08/entregavel-01-matriz-rastreabilidade-bloco-a.md), Seção 9.2 | Ampliação da tarefa T2 |
| Telas Hi-Fi ligadas no protótipo | Entregável 1 desta semana | Ponto de partida de cada tarefa |
| Execução deste roteiro | Semana 12, Entregável 1 e 2 | Consome este documento integralmente |
