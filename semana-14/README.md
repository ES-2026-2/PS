# Semana 14 (Iteração 14) — Handoff Técnico e Encerramento

**Período:** 09/11/2026 a 15/11/2026  
**Fase:** 4 — Testes de Usabilidade, Refinamento e Handoff  
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)  
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md) · [`semana-06/`](../semana-06/README.md) · [`semana-07/`](../semana-07/README.md) · [`semana-08/`](../semana-08/README.md) · [`semana-09/`](../semana-09/README.md) · [`semana-10/`](../semana-10/README.md) · [`semana-11/`](../semana-11/README.md) · [`semana-12/`](../semana-12/README.md) · [`semana-13/`](../semana-13/README.md)  

---

## Situação desta iteração

> ### O dossiê está montado. O aceite, não.
> A Semana 14 libera para a Engenharia a matriz de rastreabilidade final, a especificação da
> API, o protótipo e o Design System. Esta versão entrega o **dossiê consolidado** — índice,
> versões vigentes, erratas, 100 decisões e 67 pendências — e a **minuta do Termo de Aceite**.
> Ela não declara pronto o que não está: nenhum requisito é dado como "Concluído", o protótipo
> ainda não recebeu os ajustes da Semana 13, o produto só foi testado numa sessão simulada pela equipe, e não com os usuários-alvo, e o termo
> **não está assinado**.

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **Equipe integrada** | Liberação da Matriz de Rastreabilidade final | ✅ Consolidada | Entregável 1, Anexo A |
| **Equipe integrada** | Liberação da Swagger API Spec | ◐ Parcial — só `/erp/*`; duas correções e a execução dos testes pendentes | Entregável 1, Seção 7 |
| **Equipe integrada** | Liberação do Protótipo Interativo Hi-Fi | ✅ Versão com os ajustes da Semana 13 (13 de 14 aplicados; o `AJ-14` era opcional) | Entregável 2 |
| **Equipe integrada** | Liberação do Design System para a Engenharia | ✅ Indexado, com ressalvas | Entregável 2, Seção 5 |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Dossiê Completo de Engenharia de Requisitos (Visão, Especificações e Swagger) | [entregavel-01-dossie-engenharia-requisitos.md](entregavel-01-dossie-engenharia-requisitos.md) — ◐ **consolidado, com ressalvas** | Equipe |
| 1-A | Anexo: Matriz de Rastreabilidade Final | [anexo-a-matriz-rastreabilidade-final.md](anexo-a-matriz-rastreabilidade-final.md) — 10 requisitos em 12 camadas | Equipe |
| 1-B | Anexo: Registro de Decisões e Pendências | [anexo-b-registro-decisoes-pendencias.md](anexo-b-registro-decisoes-pendencias.md) — DEC-01 a DEC-100 e P-01 a P-67 | Equipe |
| 2 | Link Final do Figma com Handoff para Desenvolvedores e Termo de Aceite do Protótipo | [entregavel-02-handoff-figma-termo-aceite.md](entregavel-02-handoff-figma-termo-aceite.md) — ✅ **aceito pela equipe**. Pacote de handoff descrito; termo com o aceite dos 5 integrantes | D1/D2 |

O cronograma não prevê entregável de diagramas UML nesta semana. O índice dos diagramas, com a
versão vigente de cada um, está no Entregável 1, Seção 6.

---

## Achados da Iteração

> ### Nenhum dos 10 requisitos é "Concluído" — e todos estão prontos para a engenharia, com ressalvas.
> A matriz final aplica o critério da DEC-76 (camadas L1 a L9 sem lacuna nem desatualização e
> Hi-Fi aprovado). O Hi-Fi está aprovado contra as listas de verificação nos 10 requisitos. O
> que impede "Concluído" são correções registradas e não aplicadas, itens propostos fora dos
> documentos de origem e estados sem tela. A coluna "Status UI/UX: Concluído" do
> `estudo_caso1.md` continua sendo a meta, e não a medição.

> ### 35 das 100 decisões do projeto nunca foram ratificadas.
> Da DEC-66 em diante, todas as decisões foram registradas como "propostas, a ratificar pela
> equipe", e nenhum documento registra a ratificação. Elas sustentam a API, a massa de dados
> canônica, o modelo de classes v1.0 e o protocolo de testes. É a pendência que mais trava o
> handoff, e resolve-se em uma reunião (**P-63**).

> ### A API liberada cobre um décimo do produto.
> A OpenAPI da Semana 07 especifica as integrações de ERP, parte do REQ-01. A decisão sobre
> ampliar o escopo estava marcada para esta semana (P-36) e não foi tomada. O dossiê não a toma
> pela equipe: entrega um **mapa de recursos**, derivado das operações do modelo de classes,
> como insumo para a decisão.

> ### Nenhum requisito não funcional de desempenho foi medido.
> O projeto não tem sistema implementado. RNF-04 e RNF-10 têm modelo analítico com premissas
> declaradas; RNF-03, RNF-05 e RNF-06 não têm dimensionamento nem medição. O dossiê diz isso
> com todas as letras, para que a Engenharia não herde uma garantia que ninguém deu.

---

## Números da Iteração

| Indicador | Valor |
|:---|:---|
| Requisitos funcionais rastreados na matriz final | 10 (REQ-01 a REQ-10), em 12 camadas |
| Requisitos "Concluído" pelo critério da DEC-76 | **0 de 10** |
| Requisitos prontos para engenharia, com ressalvas | 10 de 10 |
| Requisitos validados com usuários | 0 de 10 |
| Decisões registradas | 100 — 65 decididas · **35 propostas** |
| Pendências registradas | 67 — 19 resolvidas · 10 com resolução proposta ou parcial · **38 abertas** |
| Correções `CU` | 14 registradas · 0 aplicadas |
| Diagramas UML indexados | 7 tipos, com versão vigente e ressalva |
| Caminhos da API especificados | 9, todos em `/erp/*` |
| Recursos mapeados como insumo para ampliar a API | 13 |
| Telas no protótipo | 32 com barra lateral, 2 modais, 1 Portal do Titular |
| Ressalvas no Termo de Aceite | 9 (R1 a R9) |
| Assinaturas no Termo de Aceite | 0 de 6 |

---

## Decisões de Projeto

Nenhuma decisão nova nesta iteração. O registro consolidado das 100 decisões está no
[Anexo B](anexo-b-registro-decisoes-pendencias.md).

---

## Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-65 | Termo de Aceite sem assinatura e sem versão do Figma indicada | **Resolvida** — versão indicada e aceite da equipe registrado |
| P-66 | Não há registro de execução dos testes automatizados da Semana 07 (`npm test`, `validar_openapi.py`); esta iteração também não os executou | Executar e registrar o resultado antes de liberar a API |
| P-67 | A Semana 12 não tem seção no `definicoes.md` (as Semanas 13 e 14 foram acrescentadas nesta entrega) | **Resolvida** — seção acrescentada |

### Pontos a conferir, encontrados na consolidação

| Ponto | Detalhe |
|:---|:---|
| Contagem de cenários | A Semana 03 registra 83 cenários Gherkin; as matrizes das Semanas 08 e 09 rastreiam 78 como existentes (45 + 33). A diferença não está reconciliada em nenhum documento |
| Ratificação da DEC-76 | A Semana 09 a cita uma vez como "já ratificada"; os demais documentos a mantêm como proposta. O registro consolidado a mantém como proposta |
| Modelo de domínio | O `template_modelo_dominio.md` não tem cópia preenchida; o Diagrama de Classes v1.0 cumpre o papel, e falta declarar isso |
| Ligações do protótipo | O `definicoes.md` (Semana 11) registra 104 reações de navegação (8 itens × 14 telas); o README e o Entregável 1 da Semana 11 registram 248 (32 telas). O dossiê usa 248, do entregável |

---

## Lista de Encerramento

A marcar pela equipe. Os quatro primeiros itens são condição do aceite.

- [ ] Ratificar DEC-66 a DEC-100 (P-63)
- [ ] Aplicar CU-01 a CU-14 nos arquivos de origem
- [ ] Executar e registrar os testes da Semana 07 (P-66)
- [x] Aplicar `AJ-01` a `AJ-13` no Figma
- [ ] Publicar a versão de handoff e conferir a Seção 6 do Entregável 2
- [ ] Decidir o escopo da API (P-36)
- [ ] Realizar as sessões de teste e fechar o relatório da Semana 13 (P-60)
- [ ] Encaminhar parâmetros ao cliente e pendências de conformidade ao DPO e ao jurídico
- [x] Assinar o Termo de Aceite (P-65) — falta só a linha do orientador
- [ ] Atualizar a coluna "Status UI/UX" do `estudo_caso1.md` ou apontá-la para a matriz final

---

## Rastreabilidade com Semanas Anteriores

| Semana | O que esta iteração usa |
|:---|:---|
| Semanas 01 a 03 | Conformidade, arquitetura de informação, cenários, regras, personas e casos de uso |
| Semanas 04 e 05 | Motor de análise, wireframes e validação analítica de RNF-04 e RNF-10 |
| Semana 06 | Design System, dicionário de dados e máquinas de estado |
| Semana 07 | OpenAPI e biblioteca de componentes |
| Semanas 08 e 09 | Matrizes de rastreabilidade, classes e pacotes v1.0, Hi-Fi |
| Semanas 10 e 11 | Telas de exceção, auditoria de RN03 e RN04, protótipo navegável e Diagrama de Implantação |
| Semanas 12 e 13 | Protocolo de testes (1 sessão simulada, USR-01), relatório de usabilidade (SUS 90, n = 1), ajustes e errata |

---

## Estrutura dos Arquivos da Pasta `semana-14`

```
semana-14/
├── README.md
├── entregavel-01-dossie-engenharia-requisitos.md
├── anexo-a-matriz-rastreabilidade-final.md
├── anexo-b-registro-decisoes-pendencias.md
└── entregavel-02-handoff-figma-termo-aceite.md
```

---

## Limitações Conhecidas

- **O dossiê consolida, e não verifica de novo.** As situações vêm dos documentos de origem.
  Foram conferidos diretamente nos arquivos: a planilha vazia da Semana 12, a presença do texto
  antigo nas 14 correções, os caminhos da OpenAPI e quatro capturas de tela.
- **O arquivo do Figma não foi aberto.** O inventário de telas e de ligações vem dos registros
  das Semanas 08 a 11.
- **Nenhum teste automatizado foi executado** nesta iteração.
- **O mapa de recursos da API é insumo**, e não especificação.
- **O Termo de Aceite tem o aceite da equipe**, mas não a do orientador.
- **A situação das pendências** é a do último documento que cita cada uma; uma pendência
  resolvida fora do repositório aparece aqui como aberta.
