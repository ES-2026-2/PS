# Semana 12 (Iteração 12) — Execução dos Testes de Usabilidade

**Período:** 26/10/2026 a 01/11/2026  
**Fase:** 4 — Testes de Usabilidade, Refinamento e Handoff  
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Roteiro prático:** [`estudo_caso1.md`](../estudo_caso1.md), Seção 4 · **Plano de testes:** [`semana-11/entregavel-02-plano-testes-usabilidade.md`](../semana-11/entregavel-02-plano-testes-usabilidade.md)  
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md) · [`semana-06/`](../semana-06/README.md) · [`semana-07/`](../semana-07/README.md) · [`semana-08/`](../semana-08/README.md) · [`semana-09/`](../semana-09/README.md) · [`semana-10/`](../semana-10/README.md) · [`semana-11/`](../semana-11/README.md)  

---

## Situação desta iteração

> ### Instrumentos prontos. Sessões ainda não realizadas.
> A Semana 12 é de **execução**: o que ela entrega (tempos, taxas de sucesso, erros, respostas
> do SUS e vídeos) só existe depois que pessoas reais usarem o protótipo. Esta versão entrega a
> planilha e o protocolo para coletar esses dados, **sem nenhum número, resposta ou vídeo
> inventado**. Cada linha de coleta está vazia. A planilha foi testada com dados fictícios, que
> foram descartados e não constam da entrega.

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR1 / AR2** (Facilitadores) | Condução das sessões de teste com gestores financeiros e de TI | ⏳ Pendente de execução · roteiro, consentimento e fichas prontos | Entregável 2 |
| **D1 / D2** (Observadores) | Registro de métricas de usabilidade (tempo na tarefa, taxa de sucesso e erros) | ⏳ Pendente de execução · planilha pronta | Entregável 1 |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Planilha de Coleta de Dados Brutos dos Testes de Usabilidade | [entregavel-01-planilha-coleta-dados-brutos-usabilidade.xlsx](entregavel-01-planilha-coleta-dados-brutos-usabilidade.xlsx) — instrumento pronto · **0 sessões registradas**. 8 abas, 765 fórmulas, 20 validações de dados, capacidade para 15 sessões | D1/D2 |
| 2 | Vídeos Gravados e Registros das Sessões com Usuários da Área Financeira | [entregavel-02-registros-sessoes-usabilidade.md](entregavel-02-registros-sessoes-usabilidade.md) + [`sessoes/`](sessoes/_modelo-ficha-sessao.md) + [`videos/`](videos/README.md) — protocolo, consentimento (rascunho) e ficha modelo prontos · **0 vídeos gravados** | AR1/AR2 |

O cronograma não prevê Entregável 3 (diagramas UML) nesta semana, e a matriz de
[`diagramasUML.md`](../diagramasUML.md) não lista nenhum diagrama para ela.

### O que a planilha contém

| Aba | Conteúdo |
|:---|:---|
| `LEIA-ME` | Legenda, regras de preenchimento, definição das métricas e um exemplo **fictício** do formato |
| `Catalogo` | As 8 tarefas (T1 a T8) com persona, tela, roteiro do facilitador, requisitos e critérios |
| `Participantes` | Uma linha por sessão: persona, dispositivo, equipe, consentimento, arquivo de vídeo |
| `Tarefas_Bruto` | Uma linha por tarefa executada; calcula tempo e sucesso e confere a persona contra o roteiro |
| `Problemas_UX` | Formato do `estudo_caso1.md` (Seção 4), mais tela e timecode |
| `SUS_Bruto` | Respostas brutas (1 a 5) ao SUS e à pergunta aberta |
| `Metricas` | Conferência automática: taxa de sucesso, tempo, erros e alertas de qualidade, por tarefa |
| `Listas` | Menus suspensos |

---

## Achados da Iteração

> ### O plano da Semana 11 não previa o SUS, mas o cronograma o pede e a Semana 13 o calcula.
> O `estudo_caso1.md` (Seção 4) manda aplicar o formulário SUS no pós-teste, e o Entregável 1 da
> Semana 13 é o "Cálculo da Nota SUS". O roteiro de sessão do plano da Semana 11 tem entrevista
> pós-teste, mas não cita o SUS. Sem os itens brutos coletados agora, a Semana 13 não teria o que
> calcular. A planilha inclui a aba `SUS_Bruto` (**DEC-91**); a nota fica para a Semana 13.

> ### O cronograma descreve 5 tarefas e o plano, 8.
> O `estudo_caso1.md` tem 5 cenários; o plano da Semana 11 tem T1 a T8. As 3 linhas de exemplo do
> `estudo_caso1.md` usam a numeração antiga (por exemplo, "USR-02, T4" é uma compra, que no plano é
> T7). Os registros usam **T1 a T8** do plano, e a correspondência está no Entregável 2, Seção 4.3
> (**DEC-90**). Essas 3 linhas ilustram o formato e **não** são dados.

> ### A duração da sessão diverge entre as fontes.
> O `estudo_caso1.md` fixa 45 minutos; o plano soma 55 a 60. Uma pessoa P-01 tem 4 tarefas (T2 tem
> duas partes e T6 começa por um e-mail). Nenhuma das duas durações foi imposta: a planilha
> registra início e fim de cada sessão, e a decisão fica para a sessão-piloto (**P-53**).

> ### Voz e tela dos participantes são dados pessoais que o inventário não cobre.
> O inventário `DP-01` a `DP-10` trata dos dados do cliente (colaboradores), não dos de quem
> testa o protótipo. Gravar exige consentimento, prazo de retenção e controle de acesso, e
> nenhum documento do projeto os define. O texto de consentimento está pronto como **rascunho**,
> com as lacunas marcadas, e os vídeos ficam fora do repositório (**DEC-93**, **P-55**).

---

## Decisões de Projeto Propostas nesta Iteração (a ratificar pela equipe)

A numeração continua a da Semana 11 (última: DEC-89). Todas estão como **Proposta**.

| ID | Decisão proposta | Impacto |
|:---|:---|:---|
| DEC-90 | Os registros usam as tarefas **T1 a T8** do plano da Semana 11; as 5 tarefas do `estudo_caso1.md` são mapeadas a elas; os exemplos do `estudo_caso1.md` não são dados | Uma só numeração e uma só redação das tarefas |
| DEC-91 | O **SUS** é aplicado no pós-teste, como pede o `estudo_caso1.md`; a planilha guarda os itens brutos (1 a 5) e a nota é calculada na Semana 13 | Evita falta de dado na Semana 13 |
| DEC-92 | Participantes identificados **só** por código `USR-nn`; a tabela código → pessoa fica fora da planilha e do repositório | Coerência com LGPD-01 e RNF-02 |
| DEC-93 | Vídeos ficam **fora do repositório**, em armazenamento de acesso restrito; o repositório guarda só nome do arquivo e duração | Evita dado pessoal versionado para sempre |
| DEC-94 | Os horários das tarefas são registrados como **timecode do vídeo** (hh:mm:ss) | Cada tempo pode ser conferido depois no vídeo |
| DEC-95 | **Intervenção** = informação sobre a interface dada pelo facilitador, pedida ou não; reler o enunciado sem acrescentar nada não conta | Torna a taxa de sucesso reproduzível entre facilitadores |

---

## Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-52 | Os critérios de sucesso de **T1, T3 e T5** foram derivados dos cenários BDD; o plano da Semana 11 só detalha T2, T4, T6, T7 e T8 | AR1/AR2 validam antes da 1ª sessão |
| P-53 | Duração da sessão: 45 min (cronograma) × 55–60 min (plano) | Decidir após a sessão-piloto |
| P-54 | Número de participantes por persona não definido (a planilha comporta 15 sessões, o que é capacidade e não meta) | Equipe e orientador |
| P-55 | Termo de consentimento, base legal, prazo de retenção e acesso aos vídeos | DPO ou orientador, **antes** de gravar |
| P-56 | A **P-11** (curvas emocionais das jornadas são hipóteses) vence na Semana 12, mas o plano não prevê coletar emoção por tarefa | Decidir se a entrevista pós-teste basta ou se entra um campo opcional |
| P-57 | A **P-27** (tablet físico e leitor de tela reais, Semanas 10 e 12) tem a Semana 12 como janela; o plano não exige tablet nem leitor de tela | Decidir se alguma sessão usa tablet; a coluna `Dispositivo usado` registra o que ocorrer |

---

## Checklist de Execução

A marcar pela equipe, conforme as sessões acontecem:

- [ ] Ratificar DEC-90 a DEC-95 e resolver P-52, P-54 e P-55 **antes** da primeira sessão
- [ ] Sessão-piloto com 1 pessoa, para validar duração e roteiro (recomendado; P-53)
- [ ] Sessões realizadas com P-01, P-02 e P-03 (quantas por persona: P-54)
- [ ] Planilha preenchida (`Participantes`, `Tarefas_Bruto`, `Problemas_UX`, `SUS_Bruto`) e aba `Metricas` sem alertas
- [ ] Vídeos gravados com consentimento, guardados **fora** do repositório e indexados
- [ ] Fichas de sessão preenchidas em [`sessoes/`](sessoes/_modelo-ficha-sessao.md)
- [ ] Dados entregues à Semana 13

---

## Rastreabilidade com Semanas Anteriores

| Semana | O que esta iteração usa |
|:---|:---|
| Semana 01 | Minimização e pseudonimização (LGPD-01, RNF-02) — base do código `USR-nn` |
| Semana 03 | Personas P-01 a P-03, critérios de sucesso e fracasso (Seções 2.4, 3.4, 4.3), UF-01 a UF-03 |
| Semana 02 e 03 | Cenários `CT-xx` de fluxo principal, usados como roteiro privado do facilitador e para derivar os critérios de T1, T3 e T5 |
| Semana 06 | Inventário `DP-01` a `DP-10` (não cobre dados dos participantes) e a **P-11** |
| Semana 08 | Seção 9.2 do Entregável 1: `CT-02.14` e `CT-02.15`, reservados para o roteiro de T2 |
| Semana 11 | Entregável 1 (protótipo navegável, 32 telas) e Entregável 2 (plano de testes) — base integral desta iteração |

---

## Entradas para a Semana 13 (Ajustes e Tratamento de Fricções de UX)

- **Planilha de dados brutos** → Relatório de Avaliação de Usabilidade (Entregável 1 da Semana 13).
- **`SUS_Bruto`** → cálculo da nota SUS (Entregável 1 da Semana 13).
- **`Problemas_UX`** → a coluna *Ação de Ajuste (Semana 13)*, deixada em branco de propósito, é o ponto de partida dos ajustes do protótipo (Entregável 2 da Semana 13).
- **Fichas de sessão** → contexto e ocorrências que podem exigir descontar uma medida.
- **P-53, P-54, P-56 e P-57** → decisões que mudam o que o relatório pode concluir.

---

## Estrutura dos Arquivos da Pasta `semana-12`

```
semana-12/
├── README.md
├── entregavel-01-planilha-coleta-dados-brutos-usabilidade.xlsx
├── entregavel-02-registros-sessoes-usabilidade.md
├── sessoes/
│   └── _modelo-ficha-sessao.md
└── videos/
    └── README.md
```

---

## Limitações Conhecidas

- **Nenhuma sessão foi realizada.** Não há dado de usuário, vídeo nem resposta de SUS nesta
  versão, e esta entrega não deve ser lida como resultado de teste de usabilidade.
- A planilha foi verificada por 50 conferências com dados fictícios (cálculo de tempo, sucesso,
  alertas e contagens) e recálculo sem erro de fórmula. Isso prova que as fórmulas funcionam, e
  **não** que o roteiro funciona com pessoas; a sessão-piloto é esse teste.
- O texto de consentimento é rascunho e tem lacunas reais (retenção e contato).
- Os critérios de T1, T3 e T5 e a régua de severidade são propostas a validar (P-52 e Entregável 2,
  Seção 6.3).
- A versão em português do SUS usada na planilha é a de uso corrente; a equipe deve confirmar a
  versão adotada.
