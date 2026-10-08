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
## Anexo A - Levantamento Inicial do Bloco B e Personas Corporativas

### Backlog Inicial de Elicitação do Bloco B (EB-XX)

| ID | Requisito | Questão de elicitação | Regra impactada |
|:---|:---|:---|:---|
| EB-01 | REQ-04 | Quais fontes de log são aceitas como prova de atividade quando o fornecedor não expõe API? | RN02 |
| EB-02 | REQ-04 | Licença provisionada e nunca acessada conta como ociosa desde o provisionamento? | RN02 |
| EB-03 | REQ-06 | Os prazos de 15 e 45 dias são contados em dias corridos ou úteis? | RN03 |
| EB-04 | REQ-06 | Quem é notificado quando o responsável pela assinatura deixa a empresa? | RN03 |
| EB-05 | REQ-07 | O downgrade exige o mesmo nível de aprovação que o cancelamento? | RN01, RN02 |
| EB-06 | REQ-07 | Existe janela de arrependimento antes da execução da ação? | RN02 |
| EB-07 | REQ-08 | O ROI considera apenas economia realizada ou também economia projetada? | RNF-06 |
| EB-08 | REQ-08 | Qual é o marco zero do histórico de ROI para um cliente recém-integrado? | — |
| EB-09 | REQ-09 | O teto de R$ 500/mês é por licença individual ou pelo total da contratação? | RN01 |
| EB-10 | REQ-09 | O bloqueio da RN04 é impeditivo absoluto ou admite justificativa e sobreposição? | RN04 |
| EB-11 | REQ-09 | Quantos níveis de aprovação existem e são sequenciais ou paralelos? | RN01 |
| EB-12 | REQ-10 | A exportação em XLSX precisa preservar fórmulas ou apenas valores? | REQ-10 |
| EB-13 | REQ-10 | O relatório exportado precisa de assinatura digital para valer como auditoria? | LGPD-02 |
| EB-14 | REQ-10 | O colaborador exporta seus próprios dados no mesmo formato do relatório corporativo? | LGPD-02 |
---

### Riscos de Requisito Identificados no Bloco B (RB-XX)

| ID | Risco | Impacto | Encaminhamento |
|:---|:---|:---|:---|
| RB-01 | Fornecedores sem API de logs inviabilizam a RN02 para parte do inventário | Alto | Definir fonte alternativa (SSO/IdP) e sinalizar cobertura parcial na UI |
| RB-02 | A RN04 pode bloquear contratações legítimas (ex.: licença ociosa em outro país) | Médio | Avaliar sobreposição com justificativa registrada (EB-10) |
| RB-03 | ROI projetado pode ser lido como economia realizada e gerar desconfiança | Alto | Separar visualmente "realizado" de "projetado" no SCR-08 |
| RB-04 | Ausência de janela de arrependimento pode gerar cancelamento indevido | Médio | Propor *soft delete* com prazo de reversão (EB-06) |
---

## 2. Matriz de Regras de Negócio de OCR e Divergência Financeira (RN05)

### Matriz de Sub-Regras (RN05.1 a RN05.10)

| ID | Sub-regra | Enunciado formal | Cenário BDD | Criticidade |
|:---|:---|:---|:---|:---:|
| **RN05.1** | **Tolerância** | Uma fatura é `Divergente` quando `\|variação\| > 1,00%`; caso contrário, `Conciliada`. O limite é **exclusivo**: exatamente 1,00% concilia. | CT-02.8 | Alta |
| **RN05.2** | **Base de cálculo** | `variação (%) = ((valor_lançamento − valor_nf) ÷ valor_nf) × 100`, arredondada a 2 casas com `ROUND_HALF_UP`. Se `valor_nf = 0`, a fatura vai para `Pendente de revisão`. | CT-02.4 | Alta |
| **RN05.3** | **Janela de conciliação** | Um lançamento só é pareável com uma NF se ocorrer entre `D−5` e `D+15` dias corridos da data de emissão. Esgotada a janela sem par, a fatura assume `Sem conciliação`. | *(novo — CT-02.9)* | Média |
| **RN05.4** | **Agregação N:1** | Quando um contrato anual é cobrado em parcelas, a comparação é feita entre o **valor da NF** e a **soma dos lançamentos** da mesma assinatura dentro da janela. Parcelamento identificado não gera divergência por si só. | *(novo — CT-02.10)* | Média |
| **RN05.5** | **Câmbio** | NF em moeda estrangeira é convertida pela PTAX de venda da data do lançamento. Sobre a tolerância de 1% aplica-se uma **banda cambial adicional de 6,38%** (IOF) + 4% (spread do emissor). Fora dessa banda, é divergência. | *(novo — CT-02.11)* | Alta |
| **RN05.6** | **Confiança mínima do OCR** | Confiança de CE-02 abaixo de 85% impede a conciliação automática e envia a fatura para `Pendente de revisão` com o documento original ao lado dos campos extraídos. | CT-02.6 | Alta |
| **RN05.7** | **Notificação do financeiro** | Toda transição para `Divergente` notifica o papel *Gestor Financeiro* em até 15 minutos, por e-mail e no sino da plataforma, com valor da NF, valor cobrado e percentual. | CT-02.4 | Alta |
| **RN05.8** | **Mascaramento** | Nenhum dado pessoal (DP-01, DP-03) é persistido a partir do OCR: CPF é descartado e nome é substituído por `COL-{hash}` **antes** da gravação. | CT-02.3 | Alta |
| **RN05.9** | **Trilha imutável** | Todo desfecho de conciliação (`Conciliada`, `Divergente`, `Sem conciliação`) gera registro *append-only* em `audit_log` com os valores comparados no momento da apuração. | — (CTL-11) | Média |
| **RN05.10** | **Reprocessamento** | A correção manual de um campo extraído reexecuta a conciliação e cria **nova** entrada de auditoria; o registro anterior nunca é sobrescrito. | *(novo — CT-02.12)* | Média |
---

### Tabela de decisão completa (DX)

| # | Confiança CE-02 | Par encontrado | Moeda igual | `\|variação\|` | ➜ Estado resultante | Notifica |
|:--|:---|:---|:---|:---|:---|:---|
| D1 | `< 85%` | — | — | — | Pendente de revisão | Gestor Financeiro |
| D2 | `≥ 85%` | Não (janela aberta) | — | — | Aguardando conciliação | — |
| D3 | `≥ 85%` | Não (janela esgotada) | — | — | Sem conciliação | Gestor Financeiro |
| D4 | `≥ 85%` | Sim | Sim | `≤ 1%` | Conciliada | — |
| D5 | `≥ 85%` | Sim | Sim | `> 1%` | Divergente | Conforme severidade |
| D6 | `≥ 85%` | Sim | Não | dentro da banda cambial | Conciliada *(com nota de câmbio)* | — |
| D7 | `≥ 85%` | Sim | Não | fora da banda cambial | Divergente | Conforme severidade |
| D8 | `≥ 85%` | Sim (N:1 agregado) | Sim | `≤ 1%` sobre a soma | Conciliada | — |
| D9 | — | Duplicata de NF já processada | — | — | Descartada (duplicidade) | — |
| D10 | `≥ 85%` | Sim | Sim | `valor_nf = 0` | Pendente de revisão | Gestor Financeiro |
---

### Casos de Borda e Tratamento (BR-XX)

| ID | Caso de borda | Tratamento | Sub-regra |
|:---|:---|:---|:---|
| BR-01 | NF com valor total igual a zero (bonificação) | `Pendente de revisão` — divisão inválida | RN05.2 |
| BR-02 | Mesma NF chega duas vezes (reenvio do fornecedor) | Deduplicação por `CE-01 + CE-06`; segunda cópia descartada | D9 |
| BR-03 | Cobrança estornada e recobrada no mesmo mês | Estorno e recobrança se anulam na agregação | RN05.4 |
| BR-04 | NF anual cobrada em 12 parcelas iguais | Agregação por competência (CE-08); não é divergência | RN05.4 |
| BR-05 | Fornecedor cobra em USD, NF emitida em BRL | Conversão pela PTAX + banda cambial | RN05.5 |
| BR-06 | Variação decorrente exclusivamente de imposto retido | Impostos (CE-09) somados ao valor da NF antes da comparação | RN05.2 |
| BR-07 | Cobrança sem NF correspondente após 30 dias | Lançamento marcado como `NF ausente` e reportado | RN05.3 |
| BR-08 | Documento em imagem girada ou de baixa resolução | Confiança abaixo do limiar → revisão manual | RN05.6 |
| BR-09 | Correção manual do valor após classificação | Reprocessa e cria nova entrada de auditoria | RN05.10 |
| BR-10 | Cartão corporativo desconectado no momento da apuração | `Aguardando conciliação`, sem falso positivo de divergência | RN05.3 |
---

## 3. Mapa de Jornada do Usuário: Onboarding de Integrações e Leitura de Notas Fiscais

### Pontos críticos da Jornada A (PC-AX)

| ID | Momento | Risco | Contramedida | Requisito |
|:---|:---|:---|:---|:---|
| PC-A1 | Leitura dos escopos de OAuth | Abandono por receio de privacidade | Tela de transparência pré-consentimento | RNF-07, CTL-13 |
| PC-A2 | Aval do time de segurança | Jornada paralisada por dias | Resumo de conformidade exportável | RNF-01, RNF-02 |
| PC-A3 | Obtenção da chave de API do ERP | Desistência por atrito técnico | Guia por conector + validação imediata | REQ-01 |
| PC-A4 | Espera da varredura | Percepção de produto quebrado | Progresso + resultados parciais | RNF-04, ANT-02 |
---

### Pontos críticos da Jornada B (PC-BX)

| ID | Momento | Risco | Contramedida | Requisito |
|:---|:---|:---|:---|:---|
| PC-B1 | Interpretação do percentual | Usuário não entende a divergência e ignora o alerta | Tooltip com base de cálculo em reais | RN05.2 |
| PC-B2 | Comparação NF × cartão | Perda de contexto ao alternar telas | Visualização lado a lado | RN05.1 |
| PC-B3 | Causa legítima confundida com erro | Retrabalho e desconfiança no motor | Explicação automática de câmbio/imposto | RN05.5, BR-06 |
| PC-B4 | Correção manual de campo | Medo de corromper a auditoria | Mensagem de histórico preservado | RN05.10, CTL-11 |
| PC-B5 | Exportação | Relatório inconsistente com a tela | Herdar filtros e máscara | REQ-10, LGPD-01 |
---

### Métricas de Sucesso das Jornadas (MS-XX)

| ID | Métrica | Jornada | Meta | Como será medida |
|:---|:---|:---|:---|:---|
| MS-01 | Tempo até a primeira conexão ativa | A | ≤ 10 min | Telemetria de onboarding |
| MS-02 | Taxa de conclusão do onboarding | A | ≥ 80% | Funil de conexões |
| MS-03 | Tempo até o *momento de valor* | A | ≤ 1 sessão | Primeira licença ociosa exibida |
| MS-04 | Taxa de abandono no consentimento OAuth | A | ≤ 15% | Eventos de redirecionamento |
| MS-05 | Cliques para tratar uma divergência | B | ≤ 3 | Teste de usabilidade (Semana 12) |
| MS-06 | Tempo de compreensão da divergência | B | ≤ 60 s | Observação na Semana 12 |
| MS-07 | Taxa de correção manual de OCR | B | ≤ 10% | Contador de reprocessamentos (RN05.10) |
| MS-08 | Nota SUS agregada | A e B | ≥ 75 | Formulário SUS (Semana 13) |
---

### Requisitos de Interface Derivados das Jornadas (RI-XX)

| ID | Requisito de interface | Origem | Tela |
|:---|:---|:---|:---|
| RI-01 | Checklist de onboarding com 3 passos e tempo estimado | PC-A1 | SCR-01 |
| RI-02 | Tela de transparência pré-OAuth ("o que lemos / o que nunca lemos") | PC-A1 | SCR-01 |
| RI-03 | Resumo de conformidade exportável para o time de segurança | PC-A2 | SCR-01 |
| RI-04 | Guia de obtenção de chave por conector | PC-A3 | SCR-01 |
| RI-05 | Barra de progresso persistente com contagem parcial | PC-A4 | Shell |
| RI-06 | Ordenação por severidade na lista de divergências | PC-B1 | SCR-02 |
| RI-07 | Tooltip com base de cálculo da variação em reais | PC-B1 | SCR-02 |
| RI-08 | Comparação NF × lançamento lado a lado | PC-B2 | SCR-02 |
| RI-09 | Visualizador com destaque do campo extraído sobre a imagem | PC-B3 | SCR-02 |
| RI-10 | Explicação automática de variação legítima | PC-B3 | SCR-02 |
| RI-11 | Aviso de preservação do histórico ao editar campo | PC-B4 | SCR-02 |
| RI-12 | Exportação herdando filtros e anonimização | PC-B5 | SCR-10 |
---

## 4. Diagramas UML

### Mudanças em relação ao rascunho v0.1 (M-XX)

| # | Mudança | Motivo |
|:---|:---|:---|
| M-01 | **P-05 resolvida:** UC-11 e UC-12 mantidos como casos de uso de primeira classe, agrupados no pacote *Governança e Conformidade* | Ambos têm ator próprio e valor de negócio autônomo; a LGPD-02 é requisito numerado do cliente, não detalhe técnico |
| M-02 | UC-02 deixa de ter ator primário humano e passa a ser disparado por **temporizador** | A ingestão é contínua, não sob demanda — corrige impropriedade do rascunho |
| M-03 | Incluído `<<include>>` **Aplicar anonimização** também em UC-11 | Mesmo a reidentificação exibe apenas os campos estritamente necessários (CTL-06) |
| M-04 | Incluído UC-13 **Revisar extração manualmente** | Derivado da RN05.6 e do cenário CT-02.6, ausentes no rascunho |
| M-05 | Incluído UC-14 **Revisar classificação de fornecedor** | Derivado da RNF-10 e do cenário CT-03.2/CT-03.3 |
| M-06 | Adicionado `<<extend>>` **Tratar falha de conexão** em UC-01 | Já previsto em texto no rascunho, agora formalizado no diagrama |
| M-07 | Descrições textuais completas de UC-01, UC-02 e UC-03 | Pendência nº 1 registrada na Semana 01 |
---

# Semana 3
## 1. 