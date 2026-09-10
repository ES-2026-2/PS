# 🔐 Entregável 1 — Matriz de Conformidade de Segurança e Privacidade

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 01 (10/08/2026 – 16/08/2026) — Kickoff e Configuração de Segurança
**Responsáveis:** AR1 / AR2 (Analistas de Requisitos)
**Versão:** 1.0.0
**Escopo normativo:** RNF-01 (AES-256), RNF-02 (LGPD/GDPR), RNF-07 (Privacidade), LGPD-01, LGPD-02

---

## 1. 🎯 Objetivo do Documento

Consolidar, já na primeira iteração, o conjunto de controles de segurança e privacidade que
condicionam **todas as demais entregas do projeto**. Como o produto lê faturas corporativas,
caixas de e-mail e logs de atividade de colaboradores, qualquer decisão de arquitetura,
UI ou modelagem de domínio tomada nas Semanas 2 a 14 precisa nascer aderente a esta matriz.

> **Premissa de projeto:** o sistema é um **operador de dados pessoais** (Art. 5º, VII da LGPD).
> A empresa cliente é a **controladora**. Toda a modelagem parte dessa distinção.

---

## 2. 📥 Elicitação das Integrações de E-mail e ERP (base do REQ-01 e REQ-02)

### 2.1. Fontes de dados mapeadas

| ID | Fonte | Protocolo / Método | Dado capturado | Sensibilidade | Requisito |
|:---|:---|:---|:---|:---|:---|
| FT-01 | Google Workspace (Gmail) | OAuth 2.0 — escopo `gmail.readonly` | Anexos e metadados de e-mails de faturamento | 🟠 Alta | REQ-02 |
| FT-02 | Microsoft 365 (Outlook/Graph) | OAuth 2.0 — escopo `Mail.Read` | Anexos e metadados de e-mails de faturamento | 🟠 Alta | REQ-02 |
| FT-03 | ERP TOTVS Protheus | API REST + token de serviço | Lançamentos contábeis, centro de custo | 🟠 Alta | REQ-01 |
| FT-04 | SAP Business One | Service Layer (OData) | Notas fiscais, fornecedores, valores | 🟠 Alta | REQ-01 |
| FT-05 | Omie / Conta Azul | API REST + chave de API | Contas a pagar, NF-e de serviço | 🟠 Alta | REQ-01 |
| FT-06 | Cartão corporativo (Open Finance) | API do emissor / conciliação | Lançamentos, valor, data, MCC | 🔴 Crítica | RN05 |
| FT-07 | Logs de atividade de SaaS | SCIM / API do fornecedor / SSO IdP | `last_login`, `seat_id`, usuário | 🔴 Crítica (dado de colaborador) | REQ-04 / RN02 |

### 2.2. Princípio de escopo mínimo

Todas as integrações devem usar **credenciais somente-leitura**. Não haverá, em nenhuma
hipótese na versão 1.0, escopo de escrita em caixas de e-mail ou ERPs. O cancelamento de
assinaturas (REQ-07) é executado por **ação humana aprovada** na interface, nunca por
automação silenciosa — o que também sustenta a RN01.

---

## 3. 🗂️ Inventário de Dados Pessoais Tratados

| ID | Dado pessoal | Origem | Finalidade | Base legal (LGPD) | Retenção | Tratamento de minimização |
|:---|:---|:---|:---|:---|:---|:---|
| DP-01 | Nome do colaborador | FT-07, FT-01 | Vincular licença a usuário | Art. 7º, IX — legítimo interesse do controlador | 12 meses | Pseudonimizado (LGPD-01) |
| DP-02 | E-mail corporativo | FT-07 | Chave de identidade da licença | Art. 7º, IX | 12 meses | Hash SHA-256 + salt por tenant |
| DP-03 | CPF em nota fiscal | FT-01, FT-03 | Nenhuma (dado colateral) | ❌ Sem finalidade | **Descarte imediato** | Mascarado no OCR (LGPD-01) |
| DP-04 | Setor / centro de custo | FT-03 | Rateio de custo | Art. 7º, IX | 60 meses | Mantido em claro (não identifica) |
| DP-05 | Logs de último acesso | FT-07 | Detectar ociosidade (RN02) | Art. 7º, IX | 90 dias | Agregado após 90 dias |
| DP-06 | Corpo de e-mail | FT-01, FT-02 | Nenhuma | ❌ Sem finalidade | **Não armazenado** (RNF-07) | Descartado em memória |

> **RNF-07 aplicado:** o pipeline de ingestão faz triagem por *palavras-chave de faturamento*
> e presença de anexo **antes** de qualquer persistência. E-mails que não passam no filtro
> nunca chegam ao banco — apenas um contador anônimo de "mensagens descartadas" é registrado.

---

## 4. 🛡️ Matriz de Conformidade — Controles x Requisitos

| ID | Controle | Requisito vinculado | Implementação esperada | Evidência de conformidade | Resp. | Status |
|:---|:---|:---|:---|:---|:---|:---|
| CTL-01 | Criptografia em repouso AES-256-GCM | RNF-01 | Volumes e colunas sensíveis cifrados; envelope encryption | Relatório de configuração do KMS | AR1 | ✅ Especificado |
| CTL-02 | Criptografia em trânsito TLS 1.3 | RNF-01, RNF-08 | HSTS obrigatório; cifras legadas desabilitadas | Scan SSL Labs (nota A+) | AR1 | ✅ Especificado |
| CTL-03 | Cofre de chaves de API de clientes | RNF-01 | Chaves de ERP em vault dedicado, nunca no banco da aplicação | Diagrama de fluxo de segredo | AR1 | ✅ Especificado |
| CTL-04 | Rotação de chaves criptográficas | RNF-01 | DEK rotacionada a cada 90 dias; KEK anual | Política de rotação versionada | AR1 | 🟡 A detalhar (Sem. 6) |
| CTL-05 | Pseudonimização de colaboradores | LGPD-01 | Nome/CPF substituídos por `COL-{hash}` nas telas e exports | Amostra de relatório exportado | AR2 | ✅ Especificado |
| CTL-06 | Perfil de exceção "Admin de RH" | LGPD-01 | Único papel com poder de reidentificação, com log de auditoria | Matriz RBAC | AR2 | ✅ Especificado |
| CTL-07 | Canal automatizado de direitos do titular | LGPD-02 | Autoatendimento: consulta + exportação em JSON/CSV | Wireframe SCR-10 (Sem. 9) | AR2 | ✅ Especificado |
| CTL-08 | Prazo de resposta ao titular | LGPD-02 | Resposta imediata (automatizada); teto legal de 15 dias | SLA documentado | AR2 | ✅ Especificado |
| CTL-09 | Descarte de corpo de e-mail | RNF-07 | Filtro pré-persistência por keyword + anexo | Log de pipeline (contador) | AR1 | ✅ Especificado |
| CTL-10 | Segregação multi-tenant | RNF-05 | Isolamento lógico por `tenant_id` + chave de cifra por tenant | Teste de vazamento cross-tenant | AR1 | 🟡 A detalhar (Sem. 7) |
| CTL-11 | Trilha de auditoria imutável | RN01, RN05 | Log append-only de aprovações, cancelamentos e reidentificações | Modelo da tabela `audit_log` | AR2 | ✅ Especificado |
| CTL-12 | Autenticação forte (2FA) | RNF-01 | 2FA obrigatório para papéis Admin TI, CFO e Admin RH | Fluxo `<<include>>` no UC (Sem. 2) | AR1 | ✅ Especificado |
| CTL-13 | Consentimento de escopo OAuth | RNF-02 | Tela de consentimento com escopos explícitos e revogáveis | Wireframe SCR-01 (Sem. 4) | AR2 | 🟡 A detalhar (Sem. 4) |
| CTL-14 | Transferência internacional (GDPR) | RNF-02 | Cláusulas contratuais padrão; região de dados selecionável | Anexo contratual | AR2 | 🟡 A detalhar (Sem. 7) |
| CTL-15 | Anonimização em relatórios exportados | LGPD-01, REQ-10 | PDF/XLSX herdam a máscara da sessão que gerou | Checklist de export | AR2 | ✅ Especificado |

**Legenda de status:** ✅ Especificado nesta iteração · 🟡 Aprofundamento previsto em iteração futura

---

## 5. 🔑 Detalhamento do Controle Criptográfico (RNF-01)

### 5.1. Estratégia de *envelope encryption*

```
┌──────────────────────────────────────────────────────────────┐
│  KEK (Key Encryption Key) — custodiada no KMS gerenciado     │
│  rotação anual · nunca sai do módulo criptográfico           │
└───────────────────────────┬──────────────────────────────────┘
                            │ cifra
              ┌─────────────▼─────────────┐
              │ DEK por tenant (AES-256)  │  rotação a cada 90 dias
              └─────────────┬─────────────┘
                            │ cifra
   ┌────────────────────────▼─────────────────────────┐
   │ Dados em repouso:                                │
   │  • chaves de API de ERP        (coluna cifrada)  │
   │  • tokens OAuth de e-mail      (coluna cifrada)  │
   │  • valores de NF e faturas     (coluna cifrada)  │
   │  • identificadores de colaborador (pseudônimo)   │
   └──────────────────────────────────────────────────┘
```

### 5.2. Parâmetros normativos

| Parâmetro | Valor exigido | Justificativa |
|:---|:---|:---|
| Algoritmo simétrico | AES-256-GCM | Exigência literal do RNF-01; GCM fornece autenticação (AEAD) |
| Derivação de chave | HKDF-SHA256 | Deriva DEK por tenant a partir de material do KMS |
| Hash de identificadores | SHA-256 + salt por tenant | Impede correlação de colaboradores entre clientes |
| Transporte | TLS 1.3 (fallback 1.2) | RNF-08 e boas práticas de API RESTful |
| Armazenamento de senha | Argon2id | Fora do escopo do RNF-01, mas exigido pelo CTL-12 |

---

## 6. 👤 Matriz RBAC — Quem enxerga o quê (suporte a LGPD-01)

| Papel | Vê custo da licença | Vê setor | Vê nome do colaborador | Reidentifica pseudônimo | Aprova gasto (RN01) |
|:---|:---:|:---:|:---:|:---:|:---:|
| **CFO / Gestor Financeiro** | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Administrador de TI** | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Administrador de RH** | ✅ | ✅ | ✅ | ✅ (com log) | ❌ |
| **Colaborador** | ❌ | ❌ | ✅ (só os próprios) | n/a | ❌ |
| **Auditor externo** | ✅ | ✅ | ❌ | ❌ | ❌ |

> Toda reidentificação pelo Admin de RH gera registro em `audit_log` com motivo declarado —
> controle CTL-06 combinado com CTL-11.

---

## 7. 🚦 Registro de Riscos de Privacidade (pré-RIPD)

| ID | Risco | Probab. | Impacto | Tratamento | Controle |
|:---|:---|:---:|:---:|:---|:---|
| RSK-01 | Captura acidental de e-mail pessoal na caixa corporativa | Média | Alto | Filtro por keyword + descarte pré-persistência | CTL-09 |
| RSK-02 | Uso dos logs de atividade para avaliação de desempenho do colaborador | Média | 🔴 Crítico | Vedação contratual + pseudonimização por padrão | CTL-05, CTL-06 |
| RSK-03 | Vazamento de chave de API de ERP do cliente | Baixa | 🔴 Crítico | Vault dedicado + rotação + escopo somente-leitura | CTL-03, CTL-04 |
| RSK-04 | Correlação de colaboradores entre tenants distintos | Baixa | Alto | Salt e DEK por tenant | CTL-01, CTL-10 |
| RSK-05 | CPF extraído por OCR persistido indevidamente | Alta | Alto | Máscara no pipeline de OCR antes da gravação | CTL-05, DP-03 |
| RSK-06 | Falso positivo de ociosidade cancelando licença em uso | Média | Médio | RNF-10 (<2%) + aprovação humana obrigatória | CTL-11, RN01 |

---

## 8. ✅ Critérios de Aceite desta Matriz

1. Todo requisito funcional especificado nas Semanas 2 e 3 deve referenciar ao menos um `CTL-xx`.
2. Nenhuma tela projetada a partir da Semana 4 pode exibir DP-01 ou DP-03 fora do perfil Admin de RH.
3. O dicionário de dados da Semana 6 (LGPD-01) deve ser gerado a partir do inventário da Seção 3.
4. A especificação OpenAPI da Semana 7 (RNF-08) deve declarar 2FA (CTL-12) como `security scheme`.

---

## 9. 🔗 Rastreabilidade para as próximas iterações

| Item desta matriz | Consumido em | Entregável de destino |
|:---|:---|:---|
| Seção 2 (fontes de dados) | Semana 2 | BDD/Gherkin REQ-01 a REQ-03 |
| Seção 3 (inventário) | Semana 6 | Dicionário de Dados e Anonimização |
| Seção 4 (CTL-12) | Semana 2 | `<<include>>` Autenticação 2FA no Diagrama de Casos de Uso |
| Seção 6 (RBAC) | Semana 4 | Wireframes Lo-Fi de permissões |
| Seção 7 (riscos) | Semana 10 | Telas de tratamento de exceção |
