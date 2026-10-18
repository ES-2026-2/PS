# Entregável 3 — Diagramas UML da Semana 07

**Iteração:** 7 — Consolidação dos Componentes · **Período:** 21/09/2026 a 27/09/2026
**Responsáveis:** AR1 / AR2 · **Matriz-fonte:** [`diagramasUML.md`](../diagramasUML.md) · **Template:** [`template_modelo_dominio.md`](../template_modelo_dominio.md)
**Notação:** Mermaid, com a fonte versionada como artefato oficial (DEC-65). Versão deste documento: **v0.1 (rascunho para revisão da equipe)**.

---

## 1. Aviso de escopo e de fontes

Este documento foi preparado **sem acesso** aos arquivos `semana-06/entregavel-03-diagramas-uml.md` (8 máquinas de estado e rascunho do diagrama de classes com 18 classes) e `semana-06/entregavel-02-dicionario-dados-anonimizacao-lgpd01.md` (entidades `ENT-01` a `ENT-24`, glossário completo e DEC-46). Isso tem três consequências:

1. Os nomes de classes foram extraídos apenas de `definicoes.md`, de `estudo_caso1.md` e do README da Semana 06. Onde um elemento é **proposta**, ele aparece marcado como tal.
2. Não foi possível dizer o que foi **mantido, atualizado ou complementado** em relação à Semana 06. A Seção 7 traz a tabela para a equipe preencher.
3. O diagrama de classes abaixo é um **recorte** voltado à integração ERP e aos agregados citados em `definicoes.md`. Ele **não substitui** a entrega formal v1.0 do Diagrama de Classes de Domínio (18 classes), que deve partir do rascunho v0.1 da Semana 06 (P-30).

## 2. Escopo desta entrega frente à matriz UML

| Diagrama | Previsto em `diagramasUML.md` | Situação nesta entrega | Justificativa |
|:---|:---|:---|:---|
| Pacotes / Componentes | Semana 7 | **Incluído** (Seção 3) | Entrega prevista para esta semana |
| Classes de Domínio | Semanas 6 e 7 | **Incluído como recorte** (Seção 4) | Entrega formal prevista para a Semana 7; v1.0 completa depende do v0.1 da Semana 06 |
| Sequência | Semanas 4 e 5 (SEQ-01 a SEQ-04) | **Incluído como SEQ-05, complementar** (Seção 5) | Esclarece o componente consolidado nesta semana (Entregável 1); não substitui SEQ-01 a SEQ-04 |
| Implantação | Semana 11 | **Não incluído** | Os documentos não definem provedor de nuvem, regiões nem topologia; desenhá-lo agora seria inventar informação |
| Máquina de Estados | Semanas 5 e 6 | **Não repetido** | Já entregue em v1.0 na Semana 06; o Entregável 1 apenas alinha os estados da API a ela (Seção 6) |

---

## 3. Diagrama de Pacotes — Contextos Delimitados (PROPOSTA)

**Objetivo:** representar os limites entre os *Bounded Contexts* (Core, Supporting, Generic) e a camada anticorrupção (ACL) que isola os ERPs, conforme `diagramasUML.md` e o template do modelo de domínio.
**Status:** os nomes dos contextos são **proposta**, derivada da separação por blocos do `estudo_caso1.md` e do pacote *Governança e Conformidade* da Semana 02 (M-01). A coluna *Contexto* e a DEC-46 do dicionário da Semana 06 **não foram consultadas** e prevalecem sobre este desenho (P-30).

```mermaid
flowchart LR
  subgraph CORE["Core Domain · Otimização de Assinaturas"]
    A1["Assinatura"]
    A2["Licença"]
    A3["Recomendação"]
    A4["Ação sobre Assinatura"]
  end
  subgraph SUP1["Supporting · Ingestão e Conciliação Financeira"]
    S1["Conexão ERP"]
    S2["Sincronização"]
    S3["Fatura / NF (RN05)"]
  end
  subgraph SUP2["Supporting · Aprovação de Gastos"]
    S4["Requisição (RN01, RN04)"]
    S5["Alerta de renovação (RN03)"]
  end
  subgraph SUP3["Supporting · Governança e Conformidade"]
    S6["Pseudonimização (LGPD-01)"]
    S7["audit_log append-only"]
    S8["Portal do Titular (LGPD-02)"]
  end
  subgraph GEN["Generic"]
    G1["Identidade e Acesso (2FA, papéis)"]
    G2["Notificações"]
  end
  subgraph ACL["Camada Anticorrupção (ACL)"]
    X1["Adaptador TOTVS Protheus"]
    X2["Adaptador SAP Business One"]
    X3["Adaptador Omie / Conta Azul"]
    X4["Cofre de credenciais / KMS"]
  end
  EXT1[("ERPs do cliente")]
  X1 --> EXT1
  X2 --> EXT1
  X3 --> EXT1
  S1 -->|"credencial por referência"| X4
  S2 -->|"lê via"| X1
  S2 --> X2
  S2 --> X3
  S2 -->|"documentos normalizados"| S3
  S3 -->|"valor cobrado × NF"| A1
  A1 --> A2
  A3 -->|"se aceita, cria"| A4
  A1 -->|"alerta de renovação"| S5
  S4 -->|"estoque ocioso (RN04)"| A2
  A2 -.->|"exibe só pseudônimo"| S6
  A4 -.->|"registra"| S7
  S3 -.->|"registra"| S7
  S3 -->|"Divergente notifica"| G2
  S5 --> G2
  G1 -.->|"autoriza"| S1
```

**Explicação.** O Core concentra a lógica de ociosidade, recomendação e ação (REQ-04, REQ-05, REQ-07). A ingestão fica num contexto de suporte e só conversa com os ERPs por adaptadores (ACL), de modo que mudanças em Protheus, SAP ou Omie não vazem para o domínio. Credenciais nunca entram no banco da aplicação (CTL-03): `Conexão ERP` guarda apenas a referência ao cofre. A execução de ações é humana e confirmada na plataforma (DEC-63, coerente com a DEC-02).
**Relação com requisitos:** REQ-01, REQ-04, REQ-05, REQ-06, REQ-07, REQ-09; RNF-01, RNF-08; RN01 a RN05; CTL-03, CTL-10, CTL-11; LGPD-01 e LGPD-02.

---

## 4. Diagrama de Classes de Domínio — recorte da integração ERP

**Objetivo:** traduzir para notação UML os blocos DDD (agregados, entidades, *value objects* e enumerações) que sustentam o Entregável 1, incluindo os agregados mencionados em `definicoes.md`.
**Legenda de procedência:** `[D]` documentado em `definicoes.md` ou `estudo_caso1.md` · `[P]` proposta desta entrega, a validar.

```mermaid
classDiagram
  direction LR
  class ConexaoErp {
    <<AggregateRoot>>
    +UUID id
    +ConectorId conector
    +String nomeExibicao
    +StatusConexao status
    +ReferenciaCredencial credencial
    +testar() ResultadoSaude
    +rotacionarCredencial()
    +revogar()
    +iniciarSincronizacao(modo, janelaDias) Sincronizacao
  }
  class Sincronizacao {
    <<Entity>>
    +UUID id
    +ModoSincronizacao modo
    +int janelaDias
    +StatusSincronizacao status
    +int registrosLidos
    +int contador429
    +String traceId
  }
  class ReferenciaCredencial {
    <<ValueObject>>
    +String idNoCofre
    +DateTime rotacionadaEm
  }
  class Fatura {
    <<AggregateRoot>>
    +UUID id
    +String idExterno
    +Date emitidaEm
    +String competencia
    +Money valorNf
    +EstadoConciliacao estado
    +VariacaoPercentual variacao
    +conciliar()
  }
  class Money {
    <<ValueObject>>
    +Decimal valor
    +String moeda
  }
  class VariacaoPercentual {
    <<ValueObject>>
    +Decimal centesimos
    +ehDivergente() bool
  }
  class Assinatura {
    <<AggregateRoot>>
    +UUID id
    +Vme vme
    +Fornecedor fornecedor
  }
  class Licenca {
    <<Entity>>
    +UUID id
    +Pseudonimo titular
    +int diasSemEvento
  }
  class Pseudonimo {
    <<ValueObject>>
    +String valor
  }
  class Vme {
    <<ValueObject>>
    +Money valorMensalEquivalente
  }
  class Recomendacao {
    <<AggregateRoot>>
  }
  class AcaoSobreAssinatura {
    <<AggregateRoot>>
  }
  class Requisicao {
    <<AggregateRoot>>
  }
  class StatusConexao {
    <<enumeration>>
    conectando
    ativa
    token_expirado
    erro
  }
  class ModoSincronizacao {
    <<enumeration>>
    initial
    incremental
    historical
  }
  class StatusSincronizacao {
    <<enumeration>>
    enfileirada
    em_andamento
    concluida
    falhou
  }
  class EstadoConciliacao {
    <<enumeration>>
    aguardando_conciliacao
    conciliada
    divergente
    pendente_de_revisao
    sem_conciliacao
    descartada
  }
  ConexaoErp "1" *-- "0..*" Sincronizacao : executa
  ConexaoErp "1" *-- "1" ReferenciaCredencial : guarda
  ConexaoErp ..> Fatura : origina por idConexao
  ConexaoErp --> StatusConexao
  Sincronizacao --> ModoSincronizacao
  Sincronizacao --> StatusSincronizacao
  Fatura *-- Money
  Fatura *-- VariacaoPercentual
  Fatura --> EstadoConciliacao
  Assinatura "1" *-- "1..*" Licenca : contem
  Licenca *-- Pseudonimo
  Assinatura *-- Vme
  Vme *-- Money
  Recomendacao ..> Assinatura : sugere acao sobre
  AcaoSobreAssinatura ..> Recomendacao : nasce de
  Requisicao ..> Assinatura : pode gerar
```

**Explicação.** `ConexaoErp` é a raiz do agregado de integração: só ela cria e muda `Sincronizacao`, o que garante a invariante de **uma sincronização em andamento por conexão** (resposta `409` do Entregável 1). `Fatura` guarda o estado da RN05 e a variação já arredondada em centésimos (ROUND_HALF_UP). `Licenca` expõe somente `Pseudonimo`, nunca nome ou CPF (LGPD-01).

| Elemento | Procedência | Observação |
|:---|:---|:---|
| `Assinatura`, `Licenca`, `Requisicao`, `Recomendacao`, `AcaoSobreAssinatura`, `Fatura`, `ConexaoErp` | **[D]** nomes de entidades com máquina de estados citadas em `definicoes.md` (ME-20, DEC-63, SY-01 a SY-10) | `Fatura` é inferida dos estados de RN05; `Conexao` aparece como máquina nova (ME-20) |
| `Pseudonimo`, `Vme` | **[D]** glossário (DEC-53, RN01.1) | Atributos internos são **[P]** |
| `StatusConexao` | **[D]** PAT-03 | Alinhar à máquina `Conexão` da Semana 06 (P-30) |
| `EstadoConciliacao` | **[D]** RN05, tabela DX | — |
| `Sincronizacao`, `ModoSincronizacao`, `StatusSincronizacao`, `ReferenciaCredencial`, `VariacaoPercentual`, `Money` | **[P]** | Derivam do Entregável 1; DEC-41 e CA-03 justificam janela e modo `historical` |
| Agregado `Assinatura` contendo `Licenca` | **[P]** | Hipótese de fronteira; pode divergir do rascunho de 18 classes |
| Multiplicidades e visibilidade (`+`) | **[P]** | Visibilidade pública apenas para legibilidade do recorte |

**Relação com requisitos:** REQ-01 (integração), REQ-02/RN05 (conciliação), REQ-04/RN02 (licença), LGPD-01; DEC-56, DEC-61, DEC-63, DEC-64.
**Atributos das raízes `Recomendacao`, `AcaoSobreAssinatura` e `Requisicao` foram omitidos de propósito:** não há fonte consultada para eles nesta entrega.

---

## 5. Diagrama de Sequência SEQ-05 — Conexão e sincronização com ERP (PROPOSTA)

**Objetivo:** mostrar as interações temporais do Entregável 1: criação segura da conexão, validação imediata, varredura assíncrona com progresso parcial, tratamento de `429` e carga histórica posterior.
**Numeração:** SEQ-01 a SEQ-04 já existem (Semanas 04 e 05). `SEQ-05` é um identificador **proposto**.

```mermaid
sequenceDiagram
  autonumber
  actor U as Admin de TI
  participant UI as Interface web
  participant API as API de Integrações ERP
  participant COF as Cofre de credenciais
  participant FILA as Worker de sincronização
  participant CON as Adaptador do ERP (ACL)
  participant ERP as ERP do cliente

  U->>UI: Informa conector e credencial somente-leitura
  UI->>API: POST /erp/connections (Idempotency-Key)
  API->>COF: Guarda credencial e recebe referência
  API-->>UI: 201 status conectando (sem segredos)
  UI->>API: POST /erp/connections/id/test
  API->>CON: Verificação mínima de leitura
  CON->>ERP: Chamada de leitura
  alt ERP aceita a credencial
    ERP-->>CON: 200
    API-->>UI: 200 result ok, status ativa
  else Token expirado ou ERP indisponível
    ERP-->>CON: 401 ou falha de rede
    API-->>UI: 200 result falhou, status token_expirado ou erro
    UI-->>U: Orienta rotacionar a credencial
  end
  U->>UI: Inicia varredura inicial
  UI->>API: POST /erp/connections/id/syncs (initial, 90 dias)
  API->>FILA: Enfileira com trace_id
  API-->>UI: 202 Accepted + Location
  loop Até concluir (meta 5 min, RNF-04)
    FILA->>CON: Lê próxima página (até 8 em paralelo, CA-01)
    CON->>ERP: Requisição paginada
    alt ERP responde 429
      ERP-->>CON: 429 Too Many Requests
      CON->>CON: Espera exponencial e incrementa contadores (CA-05, IN-02)
    else Página lida
      ERP-->>CON: Documentos
      CON-->>FILA: Documentos normalizados
    end
    UI->>API: GET /erp/syncs/id
    API-->>UI: 200 progresso parcial (CA-06)
  end
  FILA-->>API: Sincronização concluida
  Note over FILA,CON: Carga historical roda depois, fora do caminho crítico (CA-03)
  UI->>API: GET /erp/invoices?reconciliationStatus=divergente
  API-->>UI: 200 página de documentos (sem dados pessoais)
```

**Explicação.** O cliente nunca recebe credenciais de volta. Falhas do ERP aparecem como `200` com `result = falhou` no teste e como `status = falhou` na sincronização, preservando códigos HTTP de erro para problemas da própria API. O progresso parcial evita o antipadrão ANT-02 (tela com "0" enquanto a varredura roda).
**Relação com requisitos:** REQ-01, RNF-04, RNF-08, RNF-01 (cofre), CTL-03, CA-01, CA-03, CA-05, CA-06, IN-01, IN-02, DEC-41. O limite de 5 minutos é meta; **não há medição** que o comprove.

---

## 6. Alinhamento entre a API (Entregável 1) e as máquinas de estado da Semana 06

| Campo da API | Valores | Máquina da Semana 06 | Situação do alinhamento |
|:---|:---|:---|:---|
| `Connection.status` | `conectando`, `ativa`, `token_expirado`, `erro` | `Conexão` (ME-20) | **A conferir**: valores vêm de PAT-03; a máquina v1.0 não foi consultada |
| `Reconciliation.status` | seis estados da tabela DX | `Fatura` | **A conferir**: a máquina v1.0 não foi consultada |
| `Sync.status` | `enfileirada`, `em_andamento`, `concluida`, `falhou` | — | Proposta nova; sem máquina correspondente |

## 7. Comparação com a Semana 06 (a preencher pela equipe)

| Elemento | Mantido | Atualizado | Complementado | Observação |
|:---|:---:|:---:|:---:|:---|
| Máquinas de estado (8) | Pendente de conferência | — | — | Não repetidas aqui |
| Rascunho de classes (18) | Pendente de conferência | — | Recorte da Seção 4 | Reconciliar nomes e fronteiras (P-30) |
| Diagrama de Pacotes | — | — | Proposta da Seção 3 | Conferir com a DEC-46 |
| Sequências SEQ-01 a SEQ-04 | Pendente de conferência | — | SEQ-05 | — |

## 8. Como visualizar e verificar

1. **No GitHub:** os blocos ```` ```mermaid ```` são renderizados automaticamente ao abrir este arquivo.
2. **Editor online:** copie um bloco para <https://mermaid.live> para editar e exportar imagem (a fonte versionada é o artefato oficial, DEC-65).
3. **Verificação sintática:** os três blocos foram processados pelo *parser* do Mermaid no ambiente de preparação (resultado em `semana-07/README.md`, Seção 12). Isso confirma a sintaxe, **não** a fidelidade ao modelo de domínio, que depende de revisão da equipe.
