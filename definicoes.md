# Semana 1
## 1. Matriz de Conformidade de Segurança e Privacidade

### Fontes de dados mapeadas (FT-XX)

| ID | Fonte | Protocolo / Método | Dado capturado | Sensibilidade | Requisito |
|:---|:---|:---|:---|:---|:---|
| FT-01 | Cartão corporativo (Open Finance) | API do emissor / conciliação | Lançamentos, valor, data, MCC | Crítica | RN05 |
| FT-02 | Logs de atividade de SaaS | SCIM / API do fornecedor / SSO IdP | `last_login`, `seat_id`, usuário | Crítica (dado de colaborador) | REQ-04 |
| FT-03 | Google Workspace (Gmail) | OAuth 2.0 — escopo `gmail.readonly` | Anexos e metadados de e-mails de faturamento | Alta | REQ-02 |
| FT-04 | Microsoft 365 (Outlook/Graph) | OAuth 2.0 — escopo `Mail.Read` | Anexos e metadados de e-mails de faturamento | Alta | REQ-02 |
| FT-05 | ERP TOTVS Protheus | API REST + token de serviço | Lançamentos contábeis, centro de custo | Alta | REQ-01 |
| FT-06 | SAP Business One | Service Layer (OData) | Notas fiscais, fornecedores, valores | Alta | REQ-01 |
| FT-07 | Omie / Conta Azul | API REST + chave de API | Contas a pagar, NF-e de serviço | Alta | REQ-01 |
---

### Inventário de Dados Pessoais Tratados (DP-XX)

| ID | Dado pessoal | Origem | Finalidade | Base legal (LGPD) | Retenção | Tratamento de minimização |
|:---|:---|:---|:---|:---|:---|:---|
| DP-01 | Nome do colaborador | FT-02, FT-03 | Vincular licença a usuário | Art. 7º, IX — legítimo interesse do controlador | 12 meses | Pseudonimizado (LGPD-01) |
| DP-02 | E-mail corporativo | FT-02 | Chave de identidade da licença | Art. 7º, IX | 12 meses | Hash SHA-256 + salt por tenant |
| DP-03 | CPF em nota fiscal | FT-03, FT-05 | Nenhuma (dado colateral) | Sem finalidade | **Descarte imediato** | Mascarado no OCR (LGPD-01) |
| DP-04 | Setor / centro de custo | FT-05 | Rateio de custo | Art. 7º, IX | 60 meses | Mantido em claro (não identifica) |
| DP-05 | Logs de último acesso | FT-02 | Detectar ociosidade (RN02) | Art. 7º, IX | 90 dias | Agregado após 90 dias |
| DP-06 | Corpo de e-mail | FT-03, FT-04 | Nenhuma | Sem finalidade | **Não armazenado** (RNF-07) | Descartado em memória |
---

### Matriz de Conformidade (CTL-XX)

| ID | Controle | Requisito vinculado | Implementação esperada | Evidência de conformidade | Resp. | Status |
|:---|:---|:---|:---|:---|:---|:---|
| CTL-01 | Criptografia em repouso AES-256-GCM | RNF-01 | Volumes e colunas sensíveis cifrados; envelope encryption | Relatório de configuração do KMS | AR1 | Especificado |
| CTL-02 | Criptografia em trânsito TLS 1.3 | RNF-01, RNF-08 | HSTS obrigatório; cifras legadas desabilitadas | Scan SSL Labs (nota A+) | AR1 | Especificado |
| CTL-03 | Cofre de chaves de API de clientes | RNF-01 | Chaves de ERP em vault dedicado, nunca no banco da aplicação | Diagrama de fluxo de segredo | AR1 | Especificado |
| CTL-04 | Rotação de chaves criptográficas | RNF-01 | DEK rotacionada a cada 90 dias; KEK anual | Política de rotação versionada | AR1 | A detalhar (Sem. 6) |
| CTL-05 | Pseudonimização de colaboradores | LGPD-01 | Nome/CPF substituídos por `COL-{hash}` nas telas e exports | Amostra de relatório exportado | AR2 | Especificado |
| CTL-06 | Perfil de exceção "Admin de RH" | LGPD-01 | Único papel com poder de reidentificação, com log de auditoria | Matriz RBAC | AR2 | Especificado |
| CTL-07 | Canal automatizado de direitos do titular | LGPD-02 | Autoatendimento: consulta + exportação em JSON/CSV | Wireframe SCR-10 (Sem. 9) | AR2 | Especificado |
| CTL-08 | Prazo de resposta ao titular | LGPD-02 | Resposta imediata (automatizada); teto legal de 15 dias | SLA documentado | AR2 | Especificado |
| CTL-09 | Descarte de corpo de e-mail | RNF-07 | Filtro pré-persistência por keyword + anexo | Log de pipeline (contador) | AR1 | Especificado |
| CTL-10 | Segregação multi-tenant | RNF-05 | Isolamento lógico por `tenant_id` + chave de cifra por tenant | Teste de vazamento cross-tenant | AR1 | A detalhar (Sem. 7) |
| CTL-11 | Trilha de auditoria imutável | RN01, RN05 | Log append-only de aprovações, cancelamentos e reidentificações | Modelo da tabela `audit_log` | AR2 | Especificado |
| CTL-12 | Autenticação forte (2FA) | RNF-01 | 2FA obrigatório para papéis Admin TI, CFO e Admin RH | Fluxo `<<include>>` no UC (Sem. 2) | AR1 | Especificado |
| CTL-13 | Consentimento de escopo OAuth | RNF-02 | Tela de consentimento com escopos explícitos e revogáveis | Wireframe SCR-01 (Sem. 4) | AR2 | A detalhar (Sem. 4) |
| CTL-14 | Transferência internacional (GDPR) | RNF-02 | Cláusulas contratuais padrão; região de dados selecionável | Anexo contratual | AR2 | A detalhar (Sem. 7) |
| CTL-15 | Anonimização em relatórios exportados | LGPD-01, REQ-10 | PDF/XLSX herdam a máscara da sessão que gerou | Checklist de export | AR2 | Especificado |
---

### Registro de Riscos de Privacidade (RSK-XX)

| ID | Risco | Probab. | Impacto | Tratamento | Controle |
|:---|:---|:---:|:---:|:---|:---|
| RSK-01 | Captura acidental de e-mail pessoal na caixa corporativa | Média | Alto | Filtro por keyword + descarte pré-persistência | CTL-09 |
| RSK-02 | Uso dos logs de atividade para avaliação de desempenho do colaborador | Média | Crítico | Vedação contratual + pseudonimização por padrão | CTL-05, CTL-06 |
| RSK-03 | Vazamento de chave de API de ERP do cliente | Baixa | Crítico | Vault dedicado + rotação + escopo somente-leitura | CTL-03, CTL-04 |
| RSK-04 | Correlação de colaboradores entre tenants distintos | Baixa | Alto | Salt e DEK por tenant | CTL-01, CTL-10 |
| RSK-05 | CPF extraído por OCR persistido indevidamente | Alta | Alto | Máscara no pipeline de OCR antes da gravação | CTL-05, DP-03 |
| RSK-06 | Falso positivo de ociosidade cancelando licença em uso | Média | Médio | RNF-10 (<2%) + aprovação humana obrigatória | CTL-11, RN01 |
---

## 3. Benchmark de UI/UX FinTech/SaaS Corporativo e Design Tokens Iniciais

### Critérios de Avaliação (CX)

| Critério | O que foi observado |
|:---|:---|
| **C1 · Densidade informacional** | Quantidade de dado útil por tela sem gerar ruído |
| **C2 · Clareza do dado financeiro** | Legibilidade de valores, variações e comparativos |
| **C3 · Confiança em ação destrutiva** | Qualidade da confirmação em cancelar/downgrade |
| **C4 · Onboarding de integração** | Fricção para conectar ERP / e-mail / IdP |
| **C5 · Acessibilidade (WCAG 2.1 AA)** | Contraste, foco visível, uso de cor como único canal |
---

### Matriz COmparativa de Benchmark (BX)

| # | Produto | Segmento | C1 | C2 | C3 | C4 | C5 | Padrão a adotar |
|:--|:---|:---|:--:|:--:|:--:|:--:|:--:|:---|
| B1 | **Zylo** | SaaS Management | 5 | 4 | 3 | 4 | 3 | Inventário com "confiança da detecção" explícita por item |
| B2 | **Productiv** | SaaS Management | 5 | 4 | 3 | 3 | 3 | Curva de engajamento por licença (usa ≠ tem acesso) |
| B3 | **Zluri** | SaaS Management | 4 | 3 | 4 | 5 | 3 | Wizard de integração com estado de saúde por conector |
| B4 | **Cledara** | Gestão de assinaturas | 4 | 5 | 5 | 4 | 4 | Cartão virtual por assinatura → cancelamento verificável |
| B5 | **Vendr** | Negociação de SaaS | 3 | 5 | 3 | 3 | 4 | *Benchmark* de preço pago vs. mercado ao lado do valor |
| B6 | **Ramp** | Despesas corporativas | 5 | 5 | 5 | 4 | 4 | Economia sugerida como card acionável, não como texto |
| B7 | **Brex** | Despesas corporativas | 4 | 5 | 4 | 4 | 4 | Timeline de aprovação com responsável e SLA visíveis |
| B8 | **Spendesk** | Despesas corporativas | 4 | 4 | 5 | 4 | 4 | Fluxo de aprovação com política exibida na própria decisão |
| B9 | **Stripe Dashboard** | Infra financeira | 5 | 5 | 4 | 5 | 5 | Tabelas densas com hierarquia tipográfica impecável |
| B10 | **Linear** | Produtividade B2B | 5 | - | 4 | - | 5 | Velocidade percebida, atalhos de teclado, foco visível |
| B11 | **Datadog** | Observabilidade | 5 | 4 | 3 | 4 | 3 | Filtros persistentes e *drill-down* sem perder contexto |
---

### Padrões a Incorporar (PAT-XX)

| ID | Padrão | Referência | Aplicação no projeto | Requisito |
|:---|:---|:---|:---|:---|
| PAT-01 | **Índice de confiança da detecção** exibido por item catalogado | B1 | Badge "IA · 92%" no inventário; sustenta o teto de 2% de falso positivo | REQ-03 |
| PAT-02 | **Uso real ≠ acesso concedido** — duas métricas distintas na mesma linha | B2 | Coluna "Último acesso" + "Dias ocioso" no painel de licenças | REQ-04 |
| PAT-03 | **Wizard de conexão com saúde do conector** | B3 | SCR-01, com estados: conectando / ativo / token expirado / erro | REQ-01 |
| PAT-04 | **Confirmação por digitação em ação irreversível** | B4 | Cancelamento de assinatura exige digitar o nome do software | REQ-07 |
| PAT-05 | **Comparativo lado a lado** (pago vs. alternativa) | B5 | Sugestão de plano alternativo no relatório de desperdício | REQ-05 |
| PAT-06 | **Card de economia acionável** — valor + botão de ação no mesmo bloco | B6 | Painel de recomendações de consolidação | REQ-05 |
| PAT-07 | **Timeline de aprovação** com responsável, data e SLA | B7 | Histórico da requisição de compra | REQ-09 |
| PAT-08 | **Política exibida no momento da decisão** | B8 | Ao aprovar, mostrar RN01 (teto de R$ 500) e RN04 (estoque ocioso) na tela | REQ-09 |
| PAT-09 | **Hierarquia tipográfica em tabela densa** | B9 | Tabelas de faturas e licenças | RNF-06, RNF-09 |
| PAT-10 | **Filtros persistentes + drill-down sem perda de contexto** | B11 | Inventário → detalhe do fornecedor → licença | REQ-03, REQ-04 |
---

### Antipadrões Identificados (ANT-XX)

| ID | Antipadrão | Onde foi observado | Risco no nosso contexto |
|:---|:---|:---|:---|
| ANT-01 | Nome completo do colaborador exposto no dashboard financeiro | B1, B2 | Violação direta da LGPD-01 |
| ANT-02 | Dashboard que abre com "0" enquanto a varredura roda | B1, B3 | Usuário conclui que o produto não funciona; violaria a percepção do RNF-04 |
| ANT-03 | Status comunicado **apenas** por cor (verde/vermelho) | B1, B11 | Falha WCAG 1.4.1; nossos badges terão ícone + rótulo textual |
| ANT-04 | Exportação que ignora os filtros aplicados na tela | B2 | Gera relatório inconsistente com o que o usuário viu (REQ-10) |
| ANT-05 | Cancelamento em um clique, sem confirmação | B3 | Colide frontalmente com a RN01 e gera risco operacional real |
| ANT-06 | Modal sobre modal em fluxos de aprovação | B8 | Impede leitura da política de fundo (PAT-08) |
| ANT-07 | Gráficos com 8+ séries e legenda desconectada | B11 | Ilegível; limitaremos a 5 séries com rótulo direto |
---

## 4. Diagramas UML

### Casos de Uso Identificados (UC-XX)

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
---

# Semana 2