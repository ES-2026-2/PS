# Entregável 4 — Diagramas UML (Semana 01)

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 01 (10/08/2026 – 16/08/2026)
**Responsáveis:** AR1 / AR2
**Versão:** 0.1.0 — *rascunho para consolidação*

---

## 1. O que se aplica a esta iteração

Conforme a Matriz de Diagramas UML definida em [`diagramasUML.md`](../diagramasUML.md):

| Diagrama | Janela de trabalho | Entrega formal | Situação na Semana 01 |
|:---|:---|:---|:---|
| **Casos de Uso** | Semanas 1 a 3 | **Semana 2** | Rascunho v0.1 — fronteira e atores fechados |
| **Atividades** | Semanas 2 e 3 | **Semana 3** | Não iniciado (inicia na Semana 2) |
| Sequência | Semanas 4 e 5 | Semana 5 | Fora do escopo desta iteração |
| Máquina de Estados | Semanas 5 e 6 | Semana 6 | Fora do escopo desta iteração |
| Classes de Domínio | Semanas 6 e 7 | Semana 7 | Fora do escopo desta iteração |
| Pacotes / Componentes | Semana 7 | Semana 7 | Fora do escopo desta iteração |
| Implantação | Semanas 10 e 11 | Semana 11 | Fora do escopo desta iteração |

> **Portanto, o entregável desta semana é o rascunho v0.1 do Diagrama de Casos de Uso**,
> cobrindo a delimitação da fronteira do sistema e a identificação completa dos atores —
> pré-condição para a especificação de histórias de usuário da Semana 2.

---

## 2. Catálogo de Atores

### 2.1. Atores primários (humanos)

| Ator | Descrição | Objetivo no sistema | Casos de uso principais |
|:---|:---|:---|:---|
| **Administrador de TI** | Responsável pelo parque de software | Mapear e sanear o inventário de SaaS | UC-01, UC-03, UC-04, UC-07 |
| **Gestor Financeiro / CFO** | Responsável pelo orçamento | Reduzir desperdício e comprovar ROI | UC-05, UC-06, UC-08, UC-09, UC-10 |
| **Gestor de Compras** | Aprova novas contratações | Garantir conformidade com a política (RN01) | UC-09 |
| **Administrador de RH** | Custodia dados de colaboradores | Atender à LGPD-01 e reidentificar quando necessário | UC-11 |
| **Colaborador (titular)** | Usuário das licenças auditadas | Exercer direitos de acesso e portabilidade (LGPD-02) | UC-12 |

### 2.2. Atores secundários (sistemas externos)

| Ator | Papel | Integração |
|:---|:---|:---|
| **Provedor de E-mail** (Google Workspace / Microsoft 365) | Fornece anexos e metadados de faturamento | OAuth 2.0 somente-leitura |
| **Sistema ERP** (Protheus / SAP B1 / Omie) | Fornece lançamentos e notas fiscais | API REST / OData |
| **Emissor de Cartão Corporativo** | Fornece lançamentos para conciliação (RN05) | Open Finance / API do emissor |
| **Provedor de Identidade (IdP)** | Fornece logs de acesso às ferramentas | SSO / SCIM |
| **Motor de IA de Catalogação** | Classifica ferramentas e gera recomendações | Serviço interno de domínio |
| **Serviço de Notificação** | Entrega alertas por e-mail e push | Contexto genérico |

> Justificativa da separação: os atores secundários **não iniciam** casos de uso — eles são
> acionados pelo sistema ou fornecem dados. Isso mantém a fronteira do sistema legível e
> evita o erro comum de desenhar integrações como se fossem usuários.

---

## 3. Casos de Uso Identificados (rastreados aos 10 RFs)

| ID | Caso de uso | RF | Ator primário | Regras vinculadas |
|:---|:---|:---|:---|:---|
| **UC-01** | Configurar integração com ERP e faturamento | REQ-01 | Admin de TI | RNF-01, RNF-08 |
| **UC-02** | Ingerir e extrair dados de notas fiscais (OCR) | REQ-02 | *(disparado pelo sistema)* | RN05, RNF-07, LGPD-01 |
| **UC-03** | Catalogar ferramentas por categoria | REQ-03 | Admin de TI | RNF-10 |
| **UC-04** | Identificar licenças ociosas e duplicadas | REQ-04 | Admin de TI | RN02 |
| **UC-05** | Emitir relatório mensal de desperdício | REQ-05 | Gestor Financeiro | RNF-06 |
| **UC-06** | Receber alerta de renovação automática | REQ-06 | Gestor Financeiro | RN03 |
| **UC-07** | Aprovar cancelamento ou downgrade | REQ-07 | Admin de TI / CFO | RN02 |
| **UC-08** | Consultar dashboard de ROI histórico | REQ-08 | Gestor Financeiro | RNF-06 |
| **UC-09** | Submeter e aprovar requisição de compra | REQ-09 | Gestor de Compras | RN01, RN04 |
| **UC-10** | Exportar relatório de auditoria (PDF/XLSX) | REQ-10 | Gestor Financeiro | LGPD-01, LGPD-02 |
| **UC-11** | Reidentificar colaborador pseudonimizado | LGPD-01 | Admin de RH | CTL-06, CTL-11 |
| **UC-12** | Exercer direito de acesso e portabilidade | LGPD-02 | Colaborador | CTL-07, CTL-08 |

### 3.1. Relacionamentos `<<include>>` e `<<extend>>`

| Origem | Tipo | Destino | Condição |
|:---|:---|:---|:---|
| UC-01, UC-07, UC-09, UC-11 | `<<include>>` | **Autenticar com 2FA** | Sempre (CTL-12) |
| UC-02, UC-05, UC-10, UC-11 | `<<include>>` | **Aplicar anonimização** | Sempre (LGPD-01) |
| UC-07, UC-09, UC-11 | `<<include>>` | **Registrar em trilha de auditoria** | Sempre (CTL-11) |
| UC-02 | `<<extend>>` | **Tratar divergência de NF** | Variação > 1% entre NF e cartão (RN05) |
| UC-09 | `<<extend>>` | **Bloquear por licença ociosa em estoque** | Existe licença idêntica ociosa (RN04) |
| UC-09 | `<<extend>>` | **Exigir aprovação formal** | Valor > R$ 500/mês (RN01) |
| UC-04 | `<<extend>>` | **Sinalizar como ociosa** | 30 dias sem log de atividade (RN02) |
| UC-06 | `<<extend>>` | **Antecipar alerta anual** | Contrato anual → 45 dias (RN03) |
| UC-01 | `<<extend>>` | **Tratar falha de conexão** | Token expirado ou API indisponível |

---

## 4. Diagrama de Casos de Uso — v0.1

### 4.1. Visão geral (Mermaid)

```mermaid
graph LR
    ADMTI(["Administrador<br/>de TI"])
    CFO(["Gestor Financeiro<br/>/ CFO"])
    COMPRAS(["Gestor de<br/>Compras"])
    RH(["Administrador<br/>de RH"])
    COLAB(["Colaborador<br/>(titular)"])

    subgraph SISTEMA["Auditor e Otimizador de Assinaturas SaaS"]
        UC01["UC-01<br/>Configurar integração"]
        UC02["UC-02<br/>Ingerir e extrair NFs"]
        UC03["UC-03<br/>Catalogar ferramentas"]
        UC04["UC-04<br/>Identificar ociosas"]
        UC05["UC-05<br/>Emitir relatório<br/>de desperdício"]
        UC06["UC-06<br/>Alertar renovação"]
        UC07["UC-07<br/>Aprovar cancelamento<br/>ou downgrade"]
        UC08["UC-08<br/>Consultar ROI"]
        UC09["UC-09<br/>Aprovar requisição<br/>de compra"]
        UC10["UC-10<br/>Exportar auditoria"]
        UC11["UC-11<br/>Reidentificar<br/>colaborador"]
        UC12["UC-12<br/>Exercer direitos<br/>do titular"]

        AUTH(["Autenticar<br/>com 2FA"])
        ANON(["Aplicar<br/>anonimização"])
        AUDIT(["Registrar<br/>auditoria"])

        EXT_DIV["Tratar divergência<br/>de NF"]
        EXT_BLOQ["Bloquear por<br/>licença ociosa"]
        EXT_APROV["Exigir aprovação<br/>formal"]
    end

    EMAIL(["Provedor<br/>de E-mail"])
    ERP(["Sistema ERP"])
    CARTAO(["Emissor<br/>de Cartão"])
    IDP(["Provedor de<br/>Identidade"])
    NOTIF(["Serviço de<br/>Notificação"])

    ADMTI --- UC01
    ADMTI --- UC03
    ADMTI --- UC04
    ADMTI --- UC07
    CFO --- UC05
    CFO --- UC06
    CFO --- UC08
    CFO --- UC10
    CFO --- UC07
    COMPRAS --- UC09
    RH --- UC11
    COLAB --- UC12

    UC01 --- ERP
    UC01 --- EMAIL
    UC02 --- EMAIL
    UC02 --- CARTAO
    UC04 --- IDP
    UC06 --- NOTIF

    UC01 -.->|"«include»"| AUTH
    UC07 -.->|"«include»"| AUTH
    UC09 -.->|"«include»"| AUTH
    UC11 -.->|"«include»"| AUTH

    UC02 -.->|"«include»"| ANON
    UC05 -.->|"«include»"| ANON
    UC10 -.->|"«include»"| ANON

    UC07 -.->|"«include»"| AUDIT
    UC09 -.->|"«include»"| AUDIT
    UC11 -.->|"«include»"| AUDIT

    EXT_DIV -.->|"«extend»<br/>variação > 1% (RN05)"| UC02
    EXT_BLOQ -.->|"«extend»<br/>estoque ocioso (RN04)"| UC09
    EXT_APROV -.->|"«extend»<br/>> R$ 500/mês (RN01)"| UC09

    classDef ator fill:#EFF6FF,stroke:#2563EB,color:#0F172A
    classDef ext fill:#F1F5F9,stroke:#64748B,color:#0F172A
    classDef inc fill:#ECFDF5,stroke:#059669,color:#0F172A
    classDef extend fill:#FEF3C7,stroke:#D97706,color:#0F172A
    class ADMTI,CFO,COMPRAS,RH,COLAB ator
    class EMAIL,ERP,CARTAO,IDP,NOTIF ext
    class AUTH,ANON,AUDIT inc
    class EXT_DIV,EXT_BLOQ,EXT_APROV extend
```

### 4.2. Fonte PlantUML (notação UML 2.5 canônica)

> Arquivo-fonte versionável para geração da imagem oficial na entrega da Semana 2.

```plantuml
@startuml casos-de-uso-v01
left to right direction
skinparam packageStyle rectangle
skinparam shadowing false

actor "Administrador de TI"   as ADMTI
actor "Gestor Financeiro/CFO" as CFO
actor "Gestor de Compras"     as COMPRAS
actor "Administrador de RH"   as RH
actor "Colaborador (titular)" as COLAB

rectangle "Auditor e Otimizador de Assinaturas SaaS" {
  usecase "UC-01 Configurar integração ERP/e-mail"  as UC01
  usecase "UC-02 Ingerir e extrair NFs (OCR)"       as UC02
  usecase "UC-03 Catalogar ferramentas por IA"      as UC03
  usecase "UC-04 Identificar licenças ociosas"      as UC04
  usecase "UC-05 Emitir relatório de desperdício"   as UC05
  usecase "UC-06 Alertar renovação automática"      as UC06
  usecase "UC-07 Aprovar cancelamento/downgrade"    as UC07
  usecase "UC-08 Consultar dashboard de ROI"        as UC08
  usecase "UC-09 Aprovar requisição de compra"      as UC09
  usecase "UC-10 Exportar auditoria (PDF/XLSX)"     as UC10
  usecase "UC-11 Reidentificar colaborador"         as UC11
  usecase "UC-12 Exercer direitos do titular"       as UC12

  usecase "Autenticar com 2FA"       as AUTH
  usecase "Aplicar anonimização"     as ANON
  usecase "Registrar auditoria"      as AUDIT

  usecase "Tratar divergência de NF"        as EDIV
  usecase "Bloquear por licença ociosa"     as EBLOQ
  usecase "Exigir aprovação formal"         as EAPROV
  usecase "Sinalizar licença como ociosa"   as EOCIO
  usecase "Antecipar alerta anual (45d)"    as EANUAL
}

actor "Provedor de E-mail"      as EMAIL
actor "Sistema ERP"             as ERP
actor "Emissor de Cartão"       as CARTAO
actor "Provedor de Identidade"  as IDP
actor "Serviço de Notificação"  as NOTIF

ADMTI   --> UC01
ADMTI   --> UC03
ADMTI   --> UC04
ADMTI   --> UC07
CFO     --> UC05
CFO     --> UC06
CFO     --> UC07
CFO     --> UC08
CFO     --> UC10
COMPRAS --> UC09
RH      --> UC11
COLAB   --> UC12

UC01 --> ERP
UC01 --> EMAIL
UC02 --> EMAIL
UC02 --> CARTAO
UC04 --> IDP
UC06 --> NOTIF

UC01 ..> AUTH  : <<include>>
UC07 ..> AUTH  : <<include>>
UC09 ..> AUTH  : <<include>>
UC11 ..> AUTH  : <<include>>

UC02 ..> ANON  : <<include>>
UC05 ..> ANON  : <<include>>
UC10 ..> ANON  : <<include>>
UC11 ..> ANON  : <<include>>

UC07 ..> AUDIT : <<include>>
UC09 ..> AUDIT : <<include>>
UC11 ..> AUDIT : <<include>>

EDIV   ..> UC02 : <<extend>>\n[variação > 1% — RN05]
EBLOQ  ..> UC09 : <<extend>>\n[estoque ocioso — RN04]
EAPROV ..> UC09 : <<extend>>\n[> R$ 500/mês — RN01]
EOCIO  ..> UC04 : <<extend>>\n[30 dias sem log — RN02]
EANUAL ..> UC06 : <<extend>>\n[contrato anual — RN03]
@enduml
```

---

## 5. Verificação de Cobertura

| Requisito | Coberto por | ✓ |
|:---|:---|:---:|
| REQ-01 … REQ-10 | UC-01 … UC-10 (mapeamento 1:1) | Sim |
| RN01 | `<<extend>>` Exigir aprovação formal (UC-09) | Sim |
| RN02 | `<<extend>>` Sinalizar licença como ociosa (UC-04) | Sim |
| RN03 | `<<extend>>` Antecipar alerta anual (UC-06) | Sim |
| RN04 | `<<extend>>` Bloquear por licença ociosa (UC-09) | Sim |
| RN05 | `<<extend>>` Tratar divergência de NF (UC-02) | Sim |
| LGPD-01 | `<<include>>` Aplicar anonimização + UC-11 | Sim |
| LGPD-02 | UC-12 | Sim |
| RNF-01 | `<<include>>` Autenticar com 2FA (CTL-12) | Sim |

**Cobertura: 10/10 RFs · 5/5 RNs · 2/2 itens de LGPD.**

---

## 6. Pendências para a Semana 2 (entrega formal)

1. Escrever as **descrições textuais completas** de UC-01 a UC-03 (fluxo principal,
   alternativos e de exceção) junto com as histórias US-01 a US-03.
2. Gerar a **imagem oficial** do diagrama a partir do fonte PlantUML da Seção 4.2.
3. Validar com AR2 se **UC-11** e **UC-12** permanecem como casos de uso de primeira classe
   ou migram para um contexto genérico de "Conformidade".
4. Iniciar o **Diagrama de Atividades** do fluxo de OCR com validação de divergência (RN05),
   com entrega prevista para a Semana 3.
