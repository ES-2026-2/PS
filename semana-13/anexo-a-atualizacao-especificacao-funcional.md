# Anexo A — Atualização da Especificação Funcional e dos Requisitos

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 13 (02/11/2026 – 08/11/2026) — Ajustes e Tratamento de Fricções de UX  
**Responsável:** AR1 / AR2 (Analistas de Requisitos)  
**Situação:** ◐ **Parcial** — errata consolidada e conferida contra os arquivos; nenhuma alteração vinda de usuários, porque não houve sessão  

---

## 1. Objetivo

A atividade da AR1 e da AR2 nesta semana é "atualização da especificação funcional e requisitos
com base no feedback dos usuários". O cronograma não lista um entregável próprio para ela; este
anexo a registra. Ele responde a três perguntas:

| Pergunta | Seção |
|:---|:---|
| O feedback dos usuários mudou algum requisito? | 2 |
| As correções já registradas (CU-01 a CU-14) foram aplicadas? | 3 |
| O que a inspeção desta semana muda no roteiro de teste e na especificação? | 4 e 5 |

---

## 2. Alterações de requisito vindas dos usuários

**Nenhuma.** A Semana 12 não realizou sessões, então não há feedback a incorporar. Os 10
requisitos funcionais, os 10 não funcionais, as 5 regras de negócio e os 2 itens de LGPD do
[`estudo_caso1.md`](../estudo_caso1.md) permanecem com a redação original.

| Item | Alterado nesta semana? |
|:---|:---:|
| REQ-01 a REQ-10 | Não |
| RNF-01 a RNF-10 | Não |
| RN01 a RN05 (e as decomposições RN01.x a RN05.x) | Não |
| LGPD-01 e LGPD-02 | Não |
| Histórias US-01 a US-10 | Não |

---

## 3. Errata consolidada: situação das correções CU-01 a CU-14

A Semana 08 (Entregável 3, Parte V) registrou 14 correções em artefatos anteriores e destinou a
sua aplicação a esta semana ("Parte V (CU-xx) → Semana 13 → Atualização da especificação
funcional"). Cada uma foi **conferida nesta iteração por busca do trecho antigo no arquivo de
origem**.

| ID | Arquivo | Trecho antigo procurado | Ainda está lá? | Situação |
|:---|:---|:---|:---:|:---|
| CU-01 | S2·E1 (cenários CT-01.x) | estado `"Ativo"` | Sim (6 ocorrências) | Não aplicada |
| CU-02 | S2·E1 (CT-01.1, CT-02.7) | "por conta conectada" sem o percentil 95 | Sim | Não aplicada |
| CU-03 | S2·E4 (UC-03, fluxo 3a) | "inferior a 70%" | Sim | Não aplicada |
| CU-04 | S2·E1 (CT-03.2) | "assumir o estado" | Sim | Não aplicada |
| CU-05 | S4·E1 (Seção 2) | "< 70%" | Sim | Não aplicada |
| CU-06 | S2·E4, S4·E2 | "três ou mais fornecedores" | Sim | Não aplicada |
| CU-07 | S4·E1 (Seção 6.2, REC-03) | ausência de `excedentes` no cálculo | Sim (termo novo não existe) | Não aplicada |
| CU-08 | S5·E1 (Seção 6, M-07) | "SCR-10 — Central de Relatórios" como corpo do relatório | Sim | Não aplicada |
| CU-09 | S3·E1 (US-04, US-05) | *tag* `@BlocoB` | Sim (7 ocorrências) | Não aplicada |
| CU-10 | S7·E1 (OpenAPI, `ConnectionStatus`) | enumeração sem `revogada` | Sim (`revogada` só aparece em uma descrição de resposta) | Não aplicada |
| CU-11 | S7·E1 (OpenAPI, `ReconciliationStatus`) | enumeração sem `tratada` | Sim | Não aplicada |
| CU-12 | S7 `ui-components/styles.css` | ausência das variáveis `info-*` | Sim | Não aplicada |
| CU-13 | S7 `ui-components/app.js` | rótulo "Desperdício em aberto" | Sim ("Desperdício apurado" não existe) | Não aplicada |
| CU-14 | S6·E3 (máquina `Conexão`) | ausência de "credencial validada" | Sim | Não aplicada |

**Resultado: 14 registradas, 0 aplicadas.**

### 3.1. Por que este anexo não as aplica

Aplicar as correções agora seria o caminho mais curto, e não é o correto, por dois motivos:

1. **As decisões que as sustentam ainda são propostas.** CU-03 a CU-09 e CU-14 dependem de
   DEC-77 a DEC-85, todas em situação *Proposta* desde a Semana 08. Reescrever cenários e
   máquinas com base em decisão não ratificada trocaria uma especificação vigente por uma
   opinião.
2. **A convenção do repositório é que cada semana corrige os próprios arquivos** (Semana 06,
   Entregável 3, Seção 13; Semana 08, Seção 18). As CU-10 a CU-13 mexem em código e em três
   testes automatizados da Semana 07, que precisam mudar no mesmo commit.

**O que este anexo faz:** declara qual versão vale para a engenharia enquanto as correções não
são aplicadas.

### 3.2. Regra de leitura para a engenharia (proposta — DEC-100)

> Onde um artefato das Semanas 02 a 07 divergir de uma correção `CU-xx`, **vale o artefato
> original até a decisão correspondente ser ratificada**; depois da ratificação, vale a `CU`.
> O dossiê da Semana 14 lista, para cada `CU`, a decisão da qual ela depende.

| CU | Depende de | Depois de ratificada, quem aplica |
|:---|:---|:---|
| CU-01 | Nenhuma decisão — é correção de nome (regra BD-1 do Design System) | Responsáveis pela Semana 02 |
| CU-02 | DEC-41, DEC-42, DEC-43 (já decididas na Semana 05) | Responsáveis pela Semana 02 |
| CU-03, CU-05 | DEC-44 (decidida) e DEC-80 (proposta) | Semanas 02 e 04 |
| CU-04 | DEC-81 (proposta) | Semana 02 |
| CU-06 | DEC-79 (proposta) | Semanas 02 e 04 |
| CU-07 | DEC-82 (proposta) | Semana 04 |
| CU-08 | DEC-83 (proposta) | Semana 05 |
| CU-09 | DEC-77 (proposta) | Semana 03 |
| CU-10, CU-11 | Máquinas `Conexão` e `Fatura` v1.0 (Semana 06) e DEC-85 (proposta) | Semana 07, com os testes |
| CU-12, CU-13 | Design System (Semana 06) e DEC-78 (proposta) | Semana 07, com os testes |
| CU-14 | DEC-85 (proposta) | Semanas 02, 04 e 06 |

**CU-01 e CU-02 não dependem de decisão pendente** e podem ser aplicadas de imediato pelos
responsáveis. São as duas únicas nessa condição.

---

## 4. Ajustes no roteiro de teste (sem mudar requisito)

A inspeção do [Entregável 1](entregavel-01-relatorio-avaliacao-usabilidade-sus.md) encontrou
pontos do roteiro que precisam de ajuste **antes** das sessões. Nenhum altera requisito; todos
alteram a aba `Catalogo` da planilha da Semana 12 ou o plano da Semana 11.

| ID | Tarefa | Problema | Ajuste proposto | Fonte |
|:---|:---|:---|:---|:---|
| RT-01 | T5 | O critério pede "total desperdiçado" e "detalhe por categoria" (SCR-05) **e** "economia realizada / ROI" (SCR-08), mas o enunciado diz só "ler o relatório de desperdício do mês e o dashboard de ROI". O participante pode parar em uma das telas | Manter o enunciado e registrar T5 como **duas partes** (T5a na SCR-05, T5b na SCR-08), com início e fim próprios, como já ocorre em T2 | FR-06 · P-52 |
| RT-02 | T1 | O plano dá a SCR-01 como tela inicial; o ponto de partida do protótipo é a HF-41 (estado vazio). São telas diferentes | Fixar a HF-41 como tela inicial de T1 e ajustar a coluna *Tela inicial* do `Catalogo` | Semana 11, Entregável 1, Seção 5 |
| RT-03 | T1, T3, T5 | Critérios derivados dos cenários, ainda sem validação | Validar junto com a aplicação de `AJ-01` e `AJ-04`, que criam os estados que os critérios citam | P-52 |
| RT-04 | T1, T2, T3, T7, T8 | Fim da tarefa sem evento de tela | Depende da P-58: com `AJ-01` a `AJ-06` aplicados, o fim é a confirmação; sem eles, o fim passa a ser o clique no controle final | FR-01 · P-58 |
| RT-05 | T6 | O e-mail simulado não existe | Incluir a peça na lista de materiais da ficha de sessão só depois do `AJ-08` | FR-02 · P-59 |
| RT-06 | T2 | O critério de fracasso cita o badge "+2%"; a SCR-02b exibe a divergência do Salesforce como **+40,0%** | Atualizar o texto do critério para o valor da tela, ou torná-lo independente do número ("badge de variação sem explicação") | Captura da SCR-02b × `Catalogo`, T2 |

---

## 5. Itens de especificação ainda não incorporados aos documentos de origem

Itens **propostos** em semanas anteriores que continuam fora do documento que deveriam
integrar. A lista existe para que o dossiê da Semana 14 não os dê como parte da especificação.

| Item | Proposto em | Documento de destino | Conferência nesta semana |
|:---|:---|:---|:---|
| Cenários `CT-01.9`, `CT-02.14`, `CT-02.15`, `CT-03.8`, `CT-04.13`, `CT-04.14`, `CT-05.6`, `CT-05.7` | Semana 08, Entregável 1, Seção 9.2 | Especificações BDD das Semanas 02 e 03 | Não constam nos arquivos de origem |
| Cenário `CT-09.14` | Semana 09, Entregável 1, Seção 9.2 | Especificação BDD da Semana 03 | Não consta |
| Entradas `ENT-25` (`ApuracaoMensalDesperdicio`) e `ENT-26` (`Sincronizacao`); campo `situacao` em `ENT-15` | Semana 08, Entregável 3, Seção 20 | Dicionário de dados (Semana 06) | Não constam |
| Mensagens `MSG-16` a `MSG-19` | Semana 08, Entregável 1, Seção 11.3 | Catálogo `MSG` do Design System (Semana 06) | Não constam |
| 23 parâmetros de homologação (P-07, P-12, P-18 e o parâmetro 23 da DEC-79) | Semanas 02 a 08 | Decisão do cliente | Sem decisão registrada |
| Subcategorias funcionais (P-44) | Semana 08 | Enumeração `Subcategoria` do modelo de classes | Sem valores |

Dois cenários desta lista já são **usados** pelo roteiro de teste (`CT-02.14` e `CT-02.15`, em
T2) sem estarem na especificação de origem. Enquanto forem propostos, o roteiro testa um
comportamento que a especificação formal ainda não descreve.

---

## 6. Decisões e pendências

| ID | Decisão proposta | Situação | Impacto esperado |
|:---|:---|:---:|:---|
| DEC-100 | Onde um artefato das Semanas 02 a 07 divergir de uma `CU`, vale o original até a decisão correspondente ser ratificada; depois, vale a `CU` | Proposta | A engenharia sabe qual versão seguir sem depender de leitura cruzada |

| ID | Pendência | Encaminhamento |
|:---|:---|:---|
| P-63 | Ratificação em bloco das decisões DEC-66 a DEC-100, todas em situação *Proposta* | Reunião da equipe antes do handoff; sem ela, a errata da Seção 3 não pode ser aplicada |
| P-64 | Aplicação das CU-01 e CU-02, que não dependem de decisão pendente | Responsáveis pela Semana 02 |

---

## 7. Rastreabilidade deste documento

| Item | Consumido em | Destino |
|:---|:---|:---|
| Seção 3 (errata) | Semana 14, Entregável 1 | Seção de erratas do dossiê |
| Seção 4 (`RT-01` a `RT-06`) | Sessões de teste | Aba `Catalogo` da planilha e plano da Semana 11 |
| Seção 5 | Semana 14, Entregável 1 | Lista de itens propostos e não incorporados |
| DEC-100 · P-63 | Semana 14, Entregável 2 | Condição do Termo de Aceite |
