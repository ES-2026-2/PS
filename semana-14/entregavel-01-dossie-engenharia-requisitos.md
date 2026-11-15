# Entregável 1 — Dossiê Completo de Engenharia de Requisitos (Visão, Especificações e Swagger)

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 14 (09/11/2026 – 15/11/2026) — Handoff Técnico e Encerramento  
**Responsável:** Equipe integrada (AR1, AR2, D1, D2)  
**Situação:** ◐ **Consolidado, com ressalvas** — o dossiê reúne e indexa tudo o que as Semanas 01 a 13 produziram; não declara pronto o que não está (Seção 10)  
**Versão:** 1.0.0  
**Prazo:** 15/11/2026  

---

## 1. O que é este dossiê e como usá-lo

É a porta de entrada do time de Engenharia para a especificação do produto. Ele **não reescreve**
os artefatos das 13 semanas: diz o que existe, onde está, em que versão e com que ressalva.

| Se você precisa de… | Vá para |
|:---|:---|
| Entender o produto e o escopo da v1.0 | Seção 2 |
| Saber quem usa e com que permissão | Seção 3 |
| A lista de requisitos e onde cada um está especificado | Seção 4 |
| Um artefato específico (cenário, diagrama, tela, dicionário) | Seção 5 |
| Os diagramas UML e suas versões | Seção 6 |
| A especificação da API (Swagger/OpenAPI) | Seção 7 |
| Saber qual versão vale quando dois documentos divergem | Seção 8 |
| Decisões e pendências | Seção 9 e [Anexo B](anexo-b-registro-decisoes-pendencias.md) |
| O que **não** está pronto | Seção 10 |
| A matriz requisito → tela → teste | [Anexo A](anexo-a-matriz-rastreabilidade-final.md) |

### 1.1. Situação em uma tabela

| Item liberado pelo cronograma | Situação | Ressalva principal |
|:---|:---:|:---|
| Matriz de rastreabilidade final | ✅ Consolidada | 0 de 10 requisitos "Concluído" pelo critério proposto; 10 de 10 com ressalvas |
| Especificações (BDD, regras, dicionário, UML) | ✅ Entregues | 14 correções registradas e não aplicadas; 35 decisões não ratificadas |
| Swagger / OpenAPI | ◐ Parcial | Cobre só `/erp/*` (versão 0.1.0); duas correções pendentes; testes não executados |
| Protótipo interativo Hi-Fi | ◐ Entregue na Semana 11 | 14 ajustes especificados e não aplicados |
| Design System | ✅ Entregue na Semana 06 | Conferência dos tokens com o Figma pendente (P-31) |
| Validação com usuários e nota SUS | ⏳ Não realizada | Nenhuma sessão de teste ocorreu |

---

## 2. Visão do produto

### 2.1. Problema e proposta

Empresas acumulam assinaturas de software redundantes, sobretudo com a multiplicação de
ferramentas de IA: equipes diferentes contratam produtos equivalentes, e licenças continuam
sendo pagas sem uso. O produto conecta-se, com permissão e em modo somente-leitura, às faturas,
ao cartão corporativo, ao e-mail e aos sistemas de faturamento da empresa; mapeia o que é pago
e o que é usado; e recomenda consolidações, *downgrades* e cancelamentos, com a economia
estimada e a evidência que a sustenta.

### 2.2. O que o produto faz e o que não faz

| O produto… | Decisão |
|:---|:---|
| Lê dados; nunca altera sistemas de terceiros na v1.0 | DEC-02 |
| Recomenda com evidência; **nunca executa** a ação sozinho — a execução é humana e confirmada | DEC-32 · DEC-63 |
| Atua como **operador** de dados pessoais; a empresa cliente é a controladora | DEC-01 |
| Pseudonimiza colaboradores por padrão | DEC-03 · DEC-53 |
| Não guarda corpo de e-mail sem anexo ou palavra-chave de faturamento | DEC-04 · RNF-07 |
| Atende desktop e tablet; celular fora do escopo | DEC-07 · RNF-09 |
| Separa economia **realizada** de economia **potencial**; o indicador de ROI usa só a realizada | DEC-21 |

### 2.3. Escopo funcional

Dez requisitos funcionais em dois blocos:

- **Bloco A — Captura, IA e diagnóstico (REQ-01 a REQ-05):** integração, leitura de notas
  fiscais, catalogação, licenças ociosas e relatório de desperdício.
- **Bloco B — Gestão, ações e governança (REQ-06 a REQ-10):** alertas de renovação,
  cancelamento e *downgrade*, dashboard de ROI, aprovação de compras e exportação.

REQ-04 e REQ-05 pertencem ao Bloco A (DEC-77, proposta), embora a Semana 03 os tenha
especificado junto com o Bloco B.

### 2.4. Fora do escopo da v1.0

| Item | Onde foi registrado |
|:---|:---|
| Escrita em sistemas de terceiros (cancelar direto no fornecedor) | DEC-02 · DEC-63 |
| Interface para celular; *reflow* abaixo de 768 px | DEC-07 · P-29 |
| Assinatura digital ICP-Brasil nos relatórios | DEC-27 |
| Contratação emergencial fora do fluxo de aprovação | P-13 (depende do cliente) |
| API pública além das integrações de ERP | DEC-66 · P-36 |

---

## 3. Partes interessadas, papéis e personas

| Persona | Papel no sistema | Requisitos principais | Fonte |
|:---|:---|:---|:---|
| P-01 — Gestor Financeiro / CFO | `GestorFinanceiro`, `CFO` | REQ-02, 05, 06, 08, 10 | Semana 03, Entregável 3, Seção 2 |
| P-02 — Administrador de TI | `AdminTI` | REQ-01, 03, 04, 07 | Semana 03, Entregável 3, Seção 3 |
| P-03 — Gestor de Compras | `GestorCompras` | REQ-09 | Semana 03, Entregável 3, Seção 4 |
| Administrador de RH | `AdminRH` — único papel que reidentifica colaborador | LGPD-01 | Semana 06, Entregável 2 |
| Auditor externo | `AuditorExterno` | — (papel previsto no dicionário) | Semana 06, Entregável 2 (ENT-02) |
| Titular dos dados (colaborador) | Fora do console administrativo; usa o Portal do Titular | LGPD-02 | SCR-10b |

Os códigos de papel são os de `ENT-02` no dicionário de dados. A autenticação em dois fatores é
obrigatória para `AdminTI`, `CFO` e `AdminRH` (CTL-12).

---

## 4. Requisitos

A redação oficial é a do [`estudo_caso1.md`](../estudo_caso1.md). **Nenhum requisito teve a
redação alterada** ao longo das 14 semanas (Semana 13, Anexo A, Seção 2).

### 4.1. Requisitos funcionais

| ID | Requisito | História · Caso de uso | Cenários | Tela | Especificado em |
|:---|:---|:---|:---|:---|:---|
| REQ-01 | Integração via API com ERPs e faturamento | US-01 · UC-01 | CT-01.1 a 01.8 | SCR-01 | S2·E1 · S7·E1 (OpenAPI) |
| REQ-02 | Leitura de notas fiscais e recibos no e-mail | US-02 · UC-02, UC-13 | CT-02.1 a 02.13 | SCR-02 | S2·E1 · S2·E2 (RN05) |
| REQ-03 | Catalogação automática por categoria | US-03 · UC-03 | CT-03.1 a 03.7 | SCR-03 | S2·E1 · S4·E1 (motor) |
| REQ-04 | Licenças duplicadas ou sem uso | US-04 · UC-04 | CT-04.1 a 04.12 | SCR-04 | S3·E1 · S3·E2 (RN02) |
| REQ-05 | Relatório mensal de desperdício | US-05 · UC-05 | CT-05.1 a 05.5 | SCR-05 | S3·E1 · S4·E1 |
| REQ-06 | Alertas de renovação automática | US-06 · UC-06 | CT-06.1 a 06.7 | SCR-06 | S3·E1 |
| REQ-07 | Cancelamento ou *downgrade* pela interface | US-07 · UC-07 | CT-07.1 a 07.6 | SCR-07 | S3·E1 · S3·E2 |
| REQ-08 | Dashboard de ROI histórico | US-08 · UC-08 | CT-08.1 a 08.5 | SCR-08 | S3·E1 |
| REQ-09 | Fluxo de aprovação de novas contratações | US-09 · UC-09 | CT-09.1 a 09.8 (e complementares) | SCR-09 | S3·E1 · S3·E2 (RN01) |
| REQ-10 | Exportação em PDF e XLSX | US-10 · UC-10 | CT-10.1 a 10.7 | SCR-10 | S3·E1 |

A situação de cada requisito, camada por camada, está no [Anexo A](anexo-a-matriz-rastreabilidade-final.md).

### 4.2. Requisitos não funcionais

| ID | Requisito | Como foi tratado | Situação da verificação |
|:---|:---|:---|:---|
| RNF-01 | Criptografia AES-256 em repouso | Matriz de conformidade (S1·E1); chaves e rotação (S6·E2, Seção 17) | Especificado; não há implementação a verificar |
| RNF-02 | Conformidade com LGPD e GDPR | Matriz de conformidade (S1·E1); dicionário e anonimização (S6·E2) | Especificado; transferência internacional sem anexo contratual (P-04) |
| RNF-03 | Disponibilidade de 99,9% | Redundância genérica no Diagrama de Implantação (S11·E3) | **Sem dimensionamento** (P-49) |
| RNF-04 | Varredura inicial em até 5 min por conta | Modelo analítico (S5·E2); janela de 90 dias, percentil 95 por conexão (DEC-41 a DEC-43) | Viabilidade analítica; **nunca medido** |
| RNF-05 | 50.000 transações por minuto | *Pool* de *workers* no Diagrama de Implantação | **Sem modelo analítico nem medição** (P-51) |
| RNF-06 | Dashboard em menos de 2 s | Componentes leves (S7·E2) | **Nunca medido** (P-32) |
| RNF-07 | Não armazenar corpo de e-mail sem anexo ou palavra-chave | DEC-04; matriz de conformidade | Especificado |
| RNF-08 | APIs RESTful com Swagger/OpenAPI | OpenAPI 3.1 das integrações de ERP (S7·E1) | **Parcial** — só `/erp/*` (Seção 7) |
| RNF-09 | Responsivo em desktop e tablet | Variantes de 768 px de todas as telas (HF-20, HF-36) | Desenhado; **não validado em tablet físico** (P-27) |
| RNF-10 | Falsos positivos de até 2% | Definição operacional em 4 tipos (DEC-36, DEC-45); modelo analítico (S5·E2) | Viabilidade analítica; calibração com amostra real pendente (P-08) |

> **Leitura para a engenharia.** Nenhum RNF de desempenho, disponibilidade ou escala foi
> medido: o projeto não tem sistema implementado. RNF-04 e RNF-10 têm modelo analítico com
> premissas declaradas (`P1` a `P12`, P-23); RNF-03, RNF-05 e RNF-06 não têm nem isso.

### 4.3. Regras de negócio

| ID | Regra | Decomposição e detalhamento | Tela onde a regra aparece |
|:---|:---|:---|:---|
| RN01 | Aprovação obrigatória acima de R$ 500/mês | RN01.x · alçadas e VME (S3·E2; DEC-23, DEC-25) | SCR-09 |
| RN02 | Licença ociosa após 30 dias sem atividade | RN02.x · hierarquia de evidências (S3·E2; DEC-15, DEC-16, DEC-61) | SCR-04, SCR-07 |
| RN03 | Alerta 15 dias (mensal) e 45 dias (anual) antes da cobrança | Dias corridos, antecipando para dia útil (DEC-17) | SCR-06 (auditada na S10·E2) |
| RN04 | Bloqueio de novas licenças havendo ociosas idênticas | Sobreposição com justificativa e alçada superior (DEC-24) | SCR-09 (auditada na S10·E2) |
| RN05 | Divergência acima de 1% entre nota e cartão | RN05.1 a RN05.10 (S2·E2; DEC-08 a DEC-11) | SCR-02, SCR-02b |

### 4.4. LGPD

| ID | Item | Como foi tratado |
|:---|:---|:---|
| LGPD-01 | Minimização, pseudonimização e descarte | Pseudônimo por HMAC com chave por *tenant* (DEC-53); k = 5 (DEC-54); nota fiscal em cópia redigida (DEC-59); dicionário e regras de anonimização (S6·E2) |
| LGPD-02 | Acesso e portabilidade para o titular | Portal do Titular (SCR-10b); exportação em JSON e CSV restrita aos próprios dados (DEC-28) |

---

## 5. Índice de artefatos

### 5.1. Especificação textual

| Artefato | Documento |
|:---|:---|
| Conformidade de segurança e privacidade | [S1·E1](../semana-01/entregavel-01-matriz-conformidade-seguranca-privacidade.md) |
| Arquitetura de informação e mapa de navegação | [S1·E2](../semana-01/entregavel-02-arquitetura-informacao-mapa-navegacao.md) |
| Cenários BDD de REQ-01 a REQ-03 | [S2·E1](../semana-02/entregavel-01-especificacao-bdd-gherkin-req01-req03.md) |
| Regras de OCR e divergência (RN05) | [S2·E2](../semana-02/entregavel-02-matriz-regras-ocr-divergencia-rn05.md) |
| Cenários BDD de REQ-04 a REQ-10 | [S3·E1](../semana-03/entregavel-01-especificacao-bdd-gherkin-req04-req10.md) |
| Fluxo de aprovação (RN01) e inatividade (RN02) | [S3·E2](../semana-03/entregavel-02-fluxo-aprovacao-gastos-rn01-trava-inatividade-rn02.md) |
| Personas e *user flows* | [S3·E3](../semana-03/entregavel-03-personas-corporativas-user-flows-bloco-b.md) |
| Motor de análise por IA e algoritmo de consolidação | [S4·E1](../semana-04/entregavel-01-fluxogramas-motor-ia-algoritmo-consolidacao.md) |
| Validação analítica de RNF-04 e RNF-10 | [S5·E2](../semana-05/entregavel-02-relatorio-validacao-rnf04-rnf10.md) |
| Dicionário de dados e anonimização | [S6·E2](../semana-06/entregavel-02-dicionario-dados-anonimizacao-lgpd01.md) |
| Matriz de rastreabilidade do Bloco A | [S8·E1](../semana-08/entregavel-01-matriz-rastreabilidade-bloco-a.md) |
| Matriz de rastreabilidade do Bloco B | [S9·E1](../semana-09/entregavel-01-matriz-rastreabilidade-bloco-b.md) |
| Glossário e definições por semana | [`definicoes.md`](../definicoes.md) |

### 5.2. Interface

| Artefato | Documento |
|:---|:---|
| Benchmark e *design tokens* iniciais | [S1·E3](../semana-01/entregavel-03-benchmark-uiux-design-tokens.md) |
| Jornada do usuário (notas e e-mail) | [S2·E3](../semana-02/entregavel-03-mapa-jornada-usuario-nf-email.md) |
| Wireframes Lo-Fi | [S4·E2](../semana-04/entregavel-02-kit-wireframes-lofi.md) |
| Wireframes Mid-Fi | [S5·E1](../semana-05/entregavel-01-wireframes-midfi-visualizador-nf-modais.md) |
| Design System | [S6·E1](../semana-06/entregavel-01-design-system-saas-b2b.md) |
| Biblioteca de componentes (protótipo em código) | [S7·E2](../semana-07/entregavel-02-biblioteca-componentes-ui.md) · `semana-07/ui-components/` |
| Hi-Fi do Bloco A | [S8·E2](../semana-08/entregavel-02-layouts-hifi-figma.md) |
| Hi-Fi do Bloco B | [S9·E2](../semana-09/entregavel-02-layouts-hifi-figma.md) |
| Telas de exceção | [S10·E1](../semana-10/entregavel-01-pacote-telas-excecao.md) |
| Aplicação visual de RN03 e RN04 | [S10·E2](../semana-10/entregavel-02-aplicacao-visual-rn03-rn04.md) |
| Protótipo navegável | [S11·E1](../semana-11/entregavel-01-prototipo-navegavel-unificado.md) |
| Ajustes do protótipo (não aplicados) | [S13·E2](../semana-13/entregavel-02-prototipo-hifi-refatorado.md) |

### 5.3. Validação

| Artefato | Documento | Situação |
|:---|:---|:---|
| Plano de testes de usabilidade | [S11·E2](../semana-11/entregavel-02-plano-testes-usabilidade.md) | Pronto |
| Planilha de coleta | [S12·E1](../semana-12/entregavel-01-planilha-coleta-dados-brutos-usabilidade.xlsx) | Instrumento pronto; **vazia** |
| Protocolo e registros das sessões | [S12·E2](../semana-12/entregavel-02-registros-sessoes-usabilidade.md) | Protocolo pronto; **0 sessões** |
| Relatório de usabilidade e SUS | [S13·E1](../semana-13/entregavel-01-relatorio-avaliacao-usabilidade-sus.md) | Método pronto; **sem nota** |
| Testes automatizados da Semana 07 | `semana-07/tests/` | Existentes; **execução não registrada** (P-66) |

---

## 6. Modelos UML

Conforme a matriz de [`diagramasUML.md`](../diagramasUML.md). A fonte Mermaid versionada é o
artefato oficial (DEC-65).

| Diagrama | Versão vigente | Onde está | Ressalva |
|:---|:---|:---|:---|
| Casos de Uso | v1.1 — 13 casos de uso | [S3·E4](../semana-03/entregavel-04-diagramas-uml.md) (origem em S1·E4 e S2·E4) | UC-03 desatualizado no fluxo 3a (CU-03) |
| Atividades | v1.0 | [S3·E4](../semana-03/entregavel-04-diagramas-uml.md) (AT-01 em S2·E4) | — |
| Sequência | v1.0 — SEQ-01 a SEQ-04; SEQ-05 na Semana 07 | [S4·E3](../semana-04/entregavel-03-diagramas-uml.md) · [S5·E3](../semana-05/entregavel-03-diagramas-uml.md) · [S7·E3](../semana-07/entregavel-03-diagramas-uml.md) | — |
| Máquina de Estados | v1.0 — 8 máquinas, 76 estados | [S6·E3](../semana-06/entregavel-03-diagramas-uml.md) | `Conexão` muda com a DEC-85 (CU-14, não aplicada); `LancamentoCartao` verificada em S10·E3 |
| Classes de Domínio | v1.0 — 35 classes, 12 enumerações de estado | [S8·E3](../semana-08/entregavel-03-diagramas-uml.md), Parte III | Vista 4 (Bloco B) sem revisão registrada da AR2 |
| Pacotes | v1.0 — 2 contextos centrais, 7 de suporte, 3 genéricos, 1 isolado e 5 adaptadores na ACL | [S8·E3](../semana-08/entregavel-03-diagramas-uml.md), Parte IV | — |
| Implantação | Primeira entrega formal | [S11·E3](../semana-11/entregavel-03-diagrama-implantacao.md) | Sem dimensionamento (P-49, P-51) |
| Verificação transição × interface | Bloco A e Bloco B | S8·E3, Parte II · [S9·E3](../semana-09/entregavel-03-diagramas-uml.md) · [S10·E3](../semana-10/entregavel-03-diagramas-uml.md) | P-47 e P-48 abertas |

O modelo de domínio em formato de documento ([`template_modelo_dominio.md`](../template_modelo_dominio.md))
não tem cópia preenchida no repositório; os eventos de domínio exigidos pelos novos gatilhos
estão em S8·E3, Seção 19.

---

## 7. Especificação da API (Swagger / OpenAPI)

### 7.1. O que existe

| Item | Valor |
|:---|:---|
| Documento | [`semana-07/entregavel-01-openapi-integracoes-erp.yaml`](../semana-07/entregavel-01-openapi-integracoes-erp.yaml) |
| Formato | OpenAPI 3.1.0 · versão do documento 0.1.0 |
| Escopo | Integrações de ERP (`/erp/*`) — DEC-66 |
| Caminhos | `/erp/connectors` · `/erp/connections` · `/erp/connections/{connectionId}` · `/erp/connections/{connectionId}/test` · `/erp/connections/{connectionId}/syncs` · `/erp/syncs/{syncId}` · `/erp/invoices` · `/erp/invoices/{invoiceId}` · `/erp/cost-centers` |
| Convenções | Credenciais só de escrita (DEC-67) · erros RFC 9457 com `traceId` (DEC-68) · paginação por cursor (DEC-69) · valores monetários em texto decimal (DEC-70) · sincronização assíncrona `202` (DEC-71) · Bearer/JWT com papel e *tenant* (DEC-75) |
| Validadores | `semana-07/tests/validar_openapi.py` e demais testes da pasta |

### 7.2. Ressalvas da API

| Ressalva | Detalhe | Referência |
|:---|:---|:---|
| As decisões da API são propostas | DEC-66 a DEC-75 aguardam ratificação | P-63 |
| Duas correções pendentes | `ConnectionStatus` sem `revogada` (CU-10) e `ReconciliationStatus` sem `tratada` (CU-11); conferido no arquivo nesta iteração | S13, Anexo A, Seção 3 |
| Sem a CU-11, a API não libera uma renovação bloqueada | Uma divergência crítica só sai de `Divergente` com o estado `tratada`, que a API não tem | S8·E3, GI-09 |
| Testes não executados | Não há registro de execução de `validar_openapi.py` nem de `npm test`; esta iteração também não os executou | P-66 |
| Contato e ambientes | O documento não define contato nem endereços dos ambientes | P-34 |
| Papéis | `x-papeis` usa nomes por extenso; os códigos vigentes são os de `ENT-02` | P-33 |

### 7.3. O que a API não cobre (insumo para a P-36)

A P-36 pede que a equipe decida, antes do handoff, se o escopo da API vai além de `/erp/*`.
**A decisão não foi tomada.** A tabela abaixo é um **mapa de recursos**, derivado das operações
públicas do Diagrama de Classes v1.0 e dos gatilhos das máquinas de estado. É insumo para a
decisão, e **não é especificação**: não define esquema, código de resposta nem regra de
autorização.

| Recurso sugerido | Agregado · Requisito | Operações de domínio a expor | Fonte |
|:---|:---|:---|:---|
| Conexões de e-mail e cartão | `Conexao` (com `fonte`) · REQ-01 | Criar, validar, reconectar, revogar; iniciar sincronização | S8·E3, Vista 1 · RS-03 e RS-04 |
| Faturas | `Fatura` · REQ-02 | Listar e detalhar; `corrigirCampo`; `registrarDesfecho`; `descartarComoNaoFatura` | S8·E3, Vista 1 · GI-06 a GI-09 |
| Lançamentos de cartão | `LancamentoCartao` · REQ-02 | Listar; situação `NF ausente` | DEC-86 |
| Fornecedores | `FornecedorSaaS` · REQ-03 | Listar e detalhar; `corrigirCategoria`; `desfazerConsolidacao` | Vista 2 · GI-15, GI-16 |
| Assinaturas e licenças | `Assinatura`, `Licenca`, `PoolDeLicencas` · REQ-04 | Listar com cobertura de telemetria; `realocar`; `descartarComoNaoSaaS` | Vista 2 |
| Recomendações | `Recomendacao` · REQ-04, REQ-05 | Listar; `aceitar`; `recusar` (motivo obrigatório) | Vista 3 · GI-11 a GI-13 |
| Apuração mensal de desperdício | `ApuracaoMensalDesperdicio` · REQ-05 | Consultar o mês fechado; registrar ajuste após o fechamento | Vista 3 · DEC-84 |
| Alertas de renovação | `Alerta` · REQ-06 | Listar; `ignorar` (motivo obrigatório); `tratar` | Vista 4 |
| Ações sobre assinatura | `AcaoSobreAssinatura` · REQ-07 | Solicitar; decidir aprovação; `reverter`; `confirmarExecucao` | Vista 4 · DEC-20, DEC-63 |
| Indicadores de ROI | Leitura · REQ-08 | Economia realizada, ROI acumulado e economia potencial, separados | DEC-21, DEC-29 |
| Requisições de compra | `Requisicao` · REQ-09 | `submeter`; decidir; `registrarJustificativa`; `atenderPorRealocacao` | Vista 4 · DEC-62 |
| Exportações | `Exportacao` · REQ-10 | Solicitar (PDF, XLSX); acompanhar a geração assíncrona; baixar | Vista 4 · DEC-26, DEC-27 · CT-10.7 |
| Solicitações do titular | `SolicitacaoTitular` · LGPD-02 | Consultar os próprios dados; exportar em JSON e CSV | Vista 4 · DEC-28 |

Se a equipe decidir ampliar a API, as convenções da Seção 7.1 já cobrem autenticação, erros,
paginação e formato monetário, e podem ser reaproveitadas sem alteração.

---

## 8. Erratas: qual versão vale

| Tema | Regra | Referência |
|:---|:---|:---|
| Correções CU-01 a CU-14 | Registradas na Semana 08 e **não aplicadas**. Vale o artefato original até a decisão correspondente ser ratificada; depois, vale a `CU` (DEC-100, proposta) | [S13, Anexo A](../semana-13/anexo-a-atualizacao-especificacao-funcional.md), Seção 3 |
| Diagrama de Classes | Vale a v1.0 da Semana 08; o rascunho v0.1 (Semana 06) e o recorte (Semana 07) estão superados | S8·E3, Seção 15 |
| Diagrama de Pacotes | Vale a v1.0 da Semana 08; a proposta da Semana 07 está superada | S8·E3, Seção 17 |
| Valores de exemplo nas telas | Vale a massa canônica (S8·E1 e S9·E1, Seção 10), e não os números dos wireframes Lo-Fi e Mid-Fi | DEC-78 e DEC-89 (propostas) |
| Tarefas do teste de usabilidade | Vale a numeração T1 a T8 do plano da Semana 11, e não as 5 tarefas do `estudo_caso1.md` | DEC-90 (proposta) |
| Situação dos requisitos | Vale o [Anexo A](anexo-a-matriz-rastreabilidade-final.md), e não a coluna "Status UI/UX" do `estudo_caso1.md` | DEC-76 (proposta) |
| Protótipo | Vale a versão da Semana 11; os ajustes `AJ-01` a `AJ-14` não foram aplicados | S13·E2, Seção 6 |

**Itens propostos e ainda fora dos documentos de origem** (não fazem parte da especificação
vigente): 9 cenários (`CT-01.9`, `CT-02.14`, `CT-02.15`, `CT-03.8`, `CT-04.13`, `CT-04.14`,
`CT-05.6`, `CT-05.7`, `CT-09.14`), as entradas `ENT-25` e `ENT-26`, o campo `situacao` em
`ENT-15` e as mensagens `MSG-16` a `MSG-19` (S13, Anexo A, Seção 5).

---

## 9. Decisões e pendências

O registro completo está no [Anexo B](anexo-b-registro-decisoes-pendencias.md).

| Indicador | Valor |
|:---|:---|
| Decisões registradas | 100 (DEC-01 a DEC-100) |
| Decididas | 65 (DEC-01 a DEC-65) |
| **Propostas, aguardando ratificação** | **35** (DEC-66 a DEC-100) |
| Pendências registradas | 67 (P-01 a P-67) |
| Resolvidas | 13 |
| Com resolução proposta ou parcial | 10 |
| **Abertas no handoff** | **44** |

### 9.1. Pendências que dependem de terceiros

| Depende de | Pendências |
|:---|:---|
| **Cliente** (homologação) | P-07, P-12, P-18 (23 parâmetros) · P-13 · P-29 · P-41 · P-44 |
| **DPO e jurídico** | P-04 · P-17 · P-21 · P-26 · P-28 · P-55 |
| **Engenharia** (só com sistema implementado) | P-03 · P-08 · P-23 · P-24 · P-32 · P-49 · P-51 |
| **Sessões de teste** | P-11 · P-27 · P-52 a P-57 · P-60 |

---

## 10. O que não está pronto

Lista direta, para que nada abaixo seja presumido como entregue.

1. **O produto não foi validado com usuários.** Nenhuma sessão de teste foi realizada; não há
   nota SUS, taxa de sucesso nem problema de UX observado (P-60).
2. **O protótipo não permite medir cinco das oito tarefas até o fim**, pelo registro de ligações
   da Semana 11, e os 14 ajustes especificados não foram aplicados (S13·E2).
3. **35 das 100 decisões não foram ratificadas** (P-63). Entre elas estão as que definem a
   massa de dados canônica, o modelo de classes v1.0 e todas as convenções da API.
4. **14 correções de especificação estão registradas e não aplicadas.** Cenários, casos de uso,
   a OpenAPI e a máquina `Conexão` ainda trazem o texto antigo.
5. **A API cobre só as integrações de ERP**, com duas enumerações incompletas, e não há registro
   de execução dos seus testes (P-36, P-66).
6. **Nenhum requisito não funcional de desempenho, escala ou disponibilidade foi medido.**
   RNF-03 e RNF-05 não têm dimensionamento; RNF-06 nunca foi medido.
7. **23 parâmetros de regra aguardam homologação do cliente** (limiares, prazos, alçadas).
8. **Pontos de conformidade aguardam DPO e jurídico:** transferência internacional, prazos de
   retenção, textos de regra e o consentimento dos próprios testes.
9. **O Termo de Aceite não está assinado** (Entregável 2).

---

## 11. Lista de liberação para a Engenharia

A marcar pela equipe. Os quatro primeiros itens são condição do Termo de Aceite.

- [ ] Ratificar as decisões DEC-66 a DEC-100 (P-63)
- [ ] Aplicar as correções CU-01 a CU-14 nos arquivos de origem, com os testes da Semana 07 no mesmo commit
- [ ] Executar `npm test` e `validar_openapi.py` da Semana 07 e registrar o resultado (P-66)
- [ ] Aplicar `AJ-01` a `AJ-13` no Figma e republicar o protótipo
- [ ] Decidir o escopo da API além de `/erp/*` (P-36), a partir do mapa da Seção 7.3
- [ ] Realizar as sessões de teste e fechar o relatório da Semana 13 (P-60)
- [ ] Encaminhar ao cliente os 23 parâmetros de homologação
- [ ] Encaminhar ao DPO e ao jurídico as pendências da Seção 9.1
- [ ] Incorporar os itens propostos (cenários, `ENT`, `MSG`) aos documentos de origem
- [ ] Preencher o [`template_modelo_dominio.md`](../template_modelo_dominio.md) ou declarar que o Diagrama de Classes v1.0 o substitui

---

## 12. Rastreabilidade deste documento

| Fonte | Uso aqui |
|:---|:---|
| [`estudo_caso1.md`](../estudo_caso1.md) | Requisitos, regras, cronograma e itens a liberar na Semana 14 |
| READMEs e entregáveis das Semanas 01 a 13 | Índices das Seções 5 e 6; decisões e pendências |
| S7·E1 (OpenAPI) | Seção 7 |
| S8·E3 (Classes e Pacotes v1.0) | Seções 6 e 7.3 |
| S13 (relatório, ajustes e errata) | Seções 8 e 10 |
| [Anexo A](anexo-a-matriz-rastreabilidade-final.md) | Matriz de rastreabilidade final |
| [Anexo B](anexo-b-registro-decisoes-pendencias.md) | Registro de decisões e pendências |
| [Entregável 2](entregavel-02-handoff-figma-termo-aceite.md) | Handoff do Figma e Termo de Aceite |
