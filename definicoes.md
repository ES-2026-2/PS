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
| M-05 | Incluído UC-14 **Revisar classificação de fornecedor** *(absorvido como fluxo alternativo 3a de UC-03 na Semana 03 — decisão P-09)* | Derivado da RNF-10 e do cenário CT-03.2/CT-03.3 |
| M-06 | Adicionado `<<extend>>` **Tratar falha de conexão** em UC-01 | Já previsto em texto no rascunho, agora formalizado no diagrama |
| M-07 | Descrições textuais completas de UC-01, UC-02 e UC-03 | Pendência nº 1 registrada na Semana 01 |
---

# Semana 3
## 1. Fluxo de Aprovação de Gastos (RN01) e Trava de Inatividade (RN02)

### Sub-Regras da RN01 (RN01.1 a RN01.10)

| ID | Sub-regra | Enunciado formal | Cenário BDD | Criticidade |
|:---|:---|:---|:---|:---:|
| **RN01.1** | **Base de cálculo** | O teto incide sobre o VME da contratação completa, com impostos e encargos recorrentes, jamais sobre o valor unitário da licença. | CT-09.2 | Alta |
| **RN01.2** | **Normalização de ciclo** | Contratos de ciclo diferente do mensal são convertidos dividindo o valor total pelo número de meses do ciclo. Pagamento único é amortizado em 36 meses. | CT-09.8 | Alta |
| **RN01.3** | **Moeda estrangeira** | Requisição em moeda estrangeira usa a maior cotação PTAX de venda dos últimos 30 dias, acrescida de IOF e spread — critério conservador para não subestimar a alçada. | *(novo — CT-09.9)* | Média |
| **RN01.4** | **Gatilho do teto** | A aprovação formal adicional é exigida quando `VME > R$ 500,00`. O limite é **exclusivo**: exatamente R$ 500,00 não aciona a regra. | CT-09.3 | Alta |
| **RN01.5** | **Alçadas** | Três faixas de alçada, cumulativas e sequenciais, conforme a Seção 4.1. | CT-09.8 | Alta |
| **RN01.6** | **Segregação de funções** | O solicitante nunca pode aprovar a própria requisição, mesmo possuindo alçada. Não havendo outro aprovador na alçada, escala para o nível superior. | CT-09.6 | Alta |
| **RN01.7** | **Delegação** | A alçada pode ser delegada formalmente, com prazo determinado e registro em auditoria. A delegação não altera o número de níveis exigidos. | *(novo — CT-09.10)* | Média |
| **RN01.8** | **SLA e escalonamento** | Cada nível tem 3 dias úteis para decidir. Esgotado o prazo, a requisição escala automaticamente para o nível superior, sem aprovação tácita. | *(novo — CT-09.11)* | Média |
| **RN01.9** | **Revalidação** | Alteração de valor superior a 10% ou mudança de escopo após o início do fluxo **reinicia** todas as aprovações já concedidas. | *(novo — CT-09.12)* | Alta |
| **RN01.10** | **Imutabilidade da decisão** | Decisões não são editáveis. A retificação é registrada como nova decisão, preservando a anterior na trilha (CTL-11). | CT-09.5 | Média |
---

### Tabela de decisão completa (AX)

| # | VME | Licença ociosa idêntica em estoque | Solicitante é aprovador | Justificativa registrada | ➜ Resultado |
|:--|:---|:---|:---|:---|:---|
| A1 | `≤ 500` | Não | Não | — | Aprovável em 1 nível |
| A2 | `≤ 500` | **Sim** | Não | Não | **Bloqueada por RN04** |
| A3 | `≤ 500` | **Sim** | Não | Sim | Escala para Gestor Financeiro |
| A4 | `> 500` | Não | Não | — | Exige 2 níveis (RN01.5) |
| A5 | `> 500` | **Sim** | Não | Não | **Bloqueada por RN04** *(antes da alçada)* |
| A6 | `> 500` | **Sim** | Não | Sim | Exige 2 níveis + justificativa em auditoria |
| A7 | qualquer | — | **Sim** | — | Ações indisponíveis; escala para nível superior (RN01.6) |
| A8 | `> 5.000` | Não | Não | — | Exige 3 níveis |
| A9 | qualquer | — | Não | — | Valor alterado em mais de 10% ➜ reinicia fluxo (RN01.9) |
---

### Casos de Borda da RN01 (BA-XX)

| ID | Caso de borda | Tratamento | Sub-regra |
|:---|:---|:---|:---|
| BA-01 | Contratação fatiada em 3 requisições de R$ 200,00 para burlar o teto | Requisições do mesmo fornecedor e setor em 30 dias são **somadas** para efeito de alçada | RN01.1 |
| BA-02 | Requisição em USD com câmbio volátil | Maior PTAX dos últimos 30 dias + IOF + spread | RN01.3 |
| BA-03 | Renovação de contrato já existente | Tratada como nova contratação para efeito de alçada | RN01.4 |
| BA-04 | Aumento de licenças em assinatura vigente | Alçada calculada sobre o **acréscimo** de VME | RN01.1 |
| BA-05 | Aprovador de alçada é o próprio solicitante e é o único da alçada | Escala automaticamente para o nível superior | RN01.6 |
| BA-06 | Aprovador em férias sem delegação registrada | SLA corre normalmente; esgotado, escala | RN01.7, RN01.8 |
| BA-07 | Fornecedor reduz o preço após a primeira aprovação | Redução não reinicia o fluxo; apenas aumento acima de 10% reinicia | RN01.9 |
| BA-08 | Requisição aprovada e não contratada por 30 dias | Estado `Expirada`; nova submissão exige novo fluxo | RN01.9 |
| BA-09 | Contratação emergencial fora do fluxo | Não prevista na v1.0; registrada como risco RB-05 | — |
---

### Hierarquia de Evidências de Uso (EX)

| Nível | Fonte de evidência | O que comprova | Confiabilidade | Uso |
|:---|:---|:---|:---:|:---|
| **E1** | API de uso do próprio fornecedor | Uso efetivo da funcionalidade | Alta | Preferencial |
| **E2** | Evento de autenticação no IdP (SSO) | Abertura da ferramenta | Média | Usada na ausência de E1 |
| **E3** | Log de proxy corporativo / CASB | Tráfego para o domínio da ferramenta | Baixa | Usada na ausência de E1 e E2 |
| **E4** | Declaração do gestor da área | Afirmação humana de uso | Indicativa | Apenas para **contestar** ociosidade, nunca para confirmá-la |
| **—** | Nenhuma fonte disponível | Nada | Nenhuma | Estado `Sem telemetria` |
---

### Sub-Regras da RN02 (RN02.1 a RN02.10)

| ID | Sub-regra | Enunciado formal | Cenário BDD | Criticidade |
|:---|:---|:---|:---|:---:|
| **RN02.1** | **Definição de ociosidade** | Licença é `Ociosa` após **30 dias corridos consecutivos** sem evento qualificado de atividade. O 30º dia completo aciona a regra; 29 dias não acionam. | CT-04.1, CT-04.2 | Alta |
| **RN02.2** | **Evento qualificado** | Vale o evento de maior nível disponível na hierarquia E1 → E2 → E3. E4 só serve para contestar. A fonte usada é sempre exibida na interface. | CT-04.8 | Alta |
| **RN02.3** | **Marco inicial** | Licença provisionada e nunca acessada conta a partir da **data de provisionamento**, tornando-se ociosa no 30º dia. | *(novo — CT-04.9)* | Média |
| **RN02.4** | **Cobertura de telemetria** | Sem nenhuma fonte disponível, a licença assume `Sem telemetria` e **nunca** é classificada como ociosa. A cobertura é exibida por assinatura. | CT-04.4 | Alta |
| **RN02.5** | **Reinício do contador** | Qualquer evento qualificado retorna a licença a `Ativa` e zera o contador, inclusive após recomendação de cancelamento. | CT-04.3, CT-07.6 | Alta |
| **RN02.6** | **Exclusões legítimas** | Afastamento, férias e licença registrados no RH suspendem a contagem. A licença assume `Suspensa por afastamento`. | CT-04.5 | Alta |
| **RN02.7** | **Latência da coleta** | Atraso de até 48 h na coleta de telemetria não é computado como inatividade. Atraso superior muda a assinatura para `Telemetria desatualizada`. | *(novo — CT-04.10)* | Média |
| **RN02.8** | **Graduação da elegibilidade** | 30 dias ➜ elegível a downgrade; 60 dias ➜ cancelamento sugerido; 90 dias ➜ cancelamento recomendado com destaque. | *(novo — CT-04.11)* | Média |
| **RN02.9** | **Janela de arrependimento** | Ação de cancelamento ou downgrade permanece reversível por 72 h antes de ser enviada ao fornecedor. | CT-07.4 | Alta |
| **RN02.10** | **Vedação de uso** | Dados de ociosidade são pseudonimizados por padrão e **não podem** compor avaliação de desempenho individual. Agregações abaixo de 5 colaboradores não são exibidas por setor. | CT-04.7 | Alta |
---

### Tabela de Decisão da Ociosidade (OX)

| # | Dias sem evento | Fonte disponível | Afastamento registrado | Coleta atualizada | ➜ Estado | Ação oferecida |
|:--|:---|:---|:---|:---|:---|:---|
| O1 | `< 30` | E1, E2 ou E3 | Não | Sim | Ativa | — |
| O2 | `≥ 30` e `< 60` | E1, E2 ou E3 | Não | Sim | **Ociosa** | Downgrade |
| O3 | `≥ 60` e `< 90` | E1, E2 ou E3 | Não | Sim | **Ociosa** | Cancelamento sugerido |
| O4 | `≥ 90` | E1, E2 ou E3 | Não | Sim | **Ociosa** | Cancelamento recomendado |
| O5 | qualquer | Nenhuma | — | — | Sem telemetria | Conectar fonte de uso |
| O6 | qualquer | qualquer | **Sim** | — | Suspensa por afastamento | — |
| O7 | `≥ 30` | qualquer | Não | **Não (> 48 h)** | Telemetria desatualizada | Revisar integração |
| O8 | `≥ 30` | apenas E2 | Não | Sim | **Ociosa** *(evidência: apenas login)* | Downgrade com ressalva |
| O9 | reiniciado | qualquer | Não | Sim | Ativa | — |
---

### Casos de Borda da RN02 (BI-XX)

| ID | Caso de borda | Tratamento | Sub-regra |
|:---|:---|:---|:---|
| BI-01 | Licença provisionada e nunca acessada | Contagem a partir do provisionamento | RN02.3 |
| BI-02 | Ferramenta usada sazonalmente (fechamento contábil trimestral) | Licença marcada como sazonal; janela ampliada para 120 dias | RN02.6 |
| BI-03 | Colaborador de férias por 35 dias | Contagem suspensa no período | RN02.6 |
| BI-04 | Fornecedor sem API de uso, mas com SSO | Usa E2 e sinaliza "evidência: apenas login" | RN02.2, O8 |
| BI-05 | Integração de telemetria fora do ar há 5 dias | `Telemetria desatualizada`; não gera ociosidade nova | RN02.7 |
| BI-06 | Colaborador desligado com licença ativa | Licença marcada como `Órfã`; cancelamento imediato sem contar 30 dias | RN02.1 |
| BI-07 | Setor com 3 colaboradores no painel de ociosidade | Agregação não exibida por setor, para evitar reidentificação | RN02.10 |
| BI-08 | Licença volta a ser usada após execução do cancelamento | Sinaliza necessidade de reprovisionamento e registra falso positivo | RNF-10 |
| BI-09 | Assinatura com licenças compartilhadas (*floating*) | Apurada por pool, não por colaborador | RN02.1 |
| BI-10 | Uso registrado por integração automatizada (bot) | Não conta como evento qualificado de uso humano | RN02.2 |
---

### Respostas às Questões de Elicitação do Bloco B (EB-XX)

| ID | Questão | Resposta adotada | Decisão |
|:---|:---|:---|:---|
| EB-01 | Fontes aceitas como prova de atividade | Hierarquia E1 → E2 → E3; E4 só contesta | DEC-15 |
| EB-02 | Licença provisionada e nunca acessada | Conta a partir do provisionamento | DEC-16 |
| EB-03 | Prazos de 15 e 45 dias: corridos ou úteis? | **Corridos**; caindo em dia não útil, antecipa para o dia útil anterior | DEC-17 |
| EB-04 | Quem é notificado se o responsável sai da empresa | Gestor do centro de custo + Administrador de TI; assinatura marcada `Sem responsável` | DEC-18 |
| EB-05 | Downgrade exige a mesma alçada do cancelamento? | Sim — a alçada segue o VME afetado, não o tipo de ação | DEC-19 |
| EB-06 | Existe janela de arrependimento? | Sim, 72 h antes do envio ao fornecedor | DEC-20 |
| EB-07 | ROI considera economia projetada? | Não no indicador principal; projeção exibida à parte e rotulada | DEC-21 |
| EB-08 | Marco zero do ROI | Data da primeira varredura concluída; linha de base é o custo recorrente daquele momento | DEC-22 |
| EB-09 | Teto de R$ 500 é por licença ou pelo total? | **Pelo VME da contratação completa** | DEC-23 |
| EB-10 | O bloqueio da RN04 admite sobreposição? | Sim, com justificativa registrada e aprovação de nível superior | DEC-24 |
| EB-11 | Quantos níveis de aprovação e em que ordem? | Até 3 níveis, **sequenciais**, conforme faixa de VME | DEC-25 |
| EB-12 | XLSX preserva fórmulas? | Não — apenas valores, com aba de metadados dos filtros | DEC-26 |
| EB-13 | Relatório exige assinatura digital? | Não na v1.0 — hash SHA-256 e carimbo de tempo | DEC-27 |
| EB-14 | Colaborador exporta no mesmo formato corporativo? | Não — formatos interoperáveis JSON e CSV, escopo restrito aos próprios dados | DEC-28 |
---

## 3. Personas Corporativas e User Flows do Bloco B

### Requisitos de interface derivados (RI-XX)

| ID | Requisito de interface | Origem | Persona |
|:---|:---|:---|:---|
| RI-13 | Alerta de estoque ocioso **acima** do botão de aprovar, em destaque | RN04 · dor USR-02 | P-03 |
| RI-14 | Política aplicável e faixa de alçada exibidas na tela de decisão | PAT-08 · RN01.5 | P-03 |
| RI-15 | Linha do tempo com nível, responsável, data e prazo restante | PAT-07 · RN01.8 | P-03 |
| RI-16 | Ações de aprovar/rejeitar desabilitadas com motivo visível na autoaprovação | RN01.6 | P-03 |
| RI-17 | Aviso de invalidação de aprovações ao alterar valor acima de 10% | RN01.9 | P-03 |
| RI-18 | Campo de justificativa obrigatório na sobreposição da RN04 | DEC-24 | P-03 |
| RI-19 | Calendário de renovações com valor e dias restantes por assinatura | RN03 | P-01 |
| RI-20 | Notificação por e-mail já contendo valor, data e dias restantes | Jornada B, fase 1 | P-01 |
| RI-21 | Selo de ressalva quando a antecedência mínima não pôde ser cumprida | CT-06.4 | P-01 |
| RI-22 | Destaque de licenças ociosas dentro do alerta de renovação | CT-06.6 | P-01 |
| RI-23 | Badge `Sem responsável` na assinatura órfã | DEC-18 | P-01 |
| RI-24 | Registro obrigatório de motivo ao ignorar um alerta | CTL-11 | P-01 |
| RI-25 | Fonte da evidência de uso exibida em cada licença ociosa | RN02.2 | P-02 |
| RI-26 | Recomendação graduada conforme 30/60/90 dias | RN02.8 | P-02 |
| RI-27 | Confirmação por digitação do nome da assinatura | PAT-04 | P-02 |
| RI-28 | Prévia de impacto: colaboradores afetados e economia mensal | ANT-05 | P-02 |
| RI-29 | Contador visível da janela de arrependimento de 72 h | RN02.9 | P-02 |
| RI-30 | Bloqueio automático quando a licença volta a registrar uso | CT-07.6 | P-02 |
| RI-31 | Badge `Sem telemetria` distinto de `Ociosa` | RN02.4 | P-02 |
---

## 4. Diagramas UML

### Escopo (AT-XX)

| ID | Fluxo | Bloco | Regras modeladas |
|:---|:---|:---|:---|
| **AT-01** | Ingestão, OCR e conciliação financeira | A | RN05 e sub-regras RN05.1 a RN05.10 |
| **AT-02** | Requisição e aprovação de gastos | B | RN01, RN04 e sub-regras RN01.1 a RN01.10 |
---

# Semana 4
## 1. Fluxogramas Técnicos do Motor de Análise por IA e Algoritmo de Consolidação

### Taxonomia base (C-XX)

| # | Categoria | Exemplos de sinal | Redundância típica |
|:---|:---|:---|:---|
| C-01 | Design | Figma, Canva, Adobe CC | Alta |
| C-02 | Produtividade e documentos | Notion, Confluence, Google Workspace | Alta |
| C-03 | Comunicação | Slack, Teams, Zoom | Média |
| C-04 | DevTools | GitHub, GitLab, Jira | Média |
| C-05 | CRM e vendas | Salesforce, HubSpot, Pipedrive | Alta |
| C-06 | Marketing e automação | RD Station, Mailchimp | Alta |
| C-07 | IA e geração de conteúdo | Assistentes, geradores de imagem | Alta |
| C-08 | Infraestrutura e nuvem | AWS, GCP, Cloudflare | Baixa |
| C-09 | Segurança e identidade | Okta, 1Password | Baixa |
| C-10 | RH e financeiro | Gupy, Conta Azul | Média |
| C-11 | Dados e BI | Metabase, Power BI | Média |
| C-12 | Não classificado | — | — |
---

### Sinais de Desperdício (SD-XX)

| ID | Sinal | Condição de detecção | Evidência exigida | Regra |
|:---|:---|:---|:---|:---|
| **SD-01** | Licenças ociosas | Licenças em estado `Ociosa` na assinatura | Telemetria E1, E2 ou E3 | RN02.1 |
| **SD-02** | Licença nunca acessada | `Ociosa` desde o provisionamento | Data de provisionamento | RN02.3 |
| **SD-03** | Redundância de categoria | 2+ fornecedores ativos na mesma categoria de redundância alta | Catalogação com confiança maior ou igual a 0,80 | REQ-03 |
| **SD-04** | Sobreposição de usuários | O mesmo colaborador possui licença ativa em 2 ferramentas da mesma categoria | Telemetria dos dois lados | REQ-04 |
| **SD-05** | Plano superdimensionado | Recursos do plano contratado sem uso registrado | Telemetria de funcionalidade (E1) | REQ-05 |
| **SD-06** | Ciclo desfavorável | Pagamento mensal com plano anual disponível mais barato | Preço de tabela em E3 | REQ-05 |
| **SD-07** | Contrato duplicado | 2 assinaturas ativas do mesmo fornecedor no mesmo tenant | Inventário | REQ-05 |
| **SD-08** | Preço acima do mercado | Preço unitário acima da faixa de referência | Base de referência em E3 | REQ-05 |
| **SD-09** | Renovação iminente com ociosidade | Alerta RN03 ativo e SD-01 presente | RN03 + RN02 | CT-06.6 |
| **SD-10** | Cobrança sem contrapartida | Fatura `Sem conciliação` recorrente | RN05.3 | RN05 |
---

### Tipos de Recomendação (REC-XX)

| ID | Recomendação | Sinal(is) que a origina | Fórmula de economia anual estimada |
|:---|:---|:---|:---|
| **REC-01** | Reduzir assentos (downgrade) | SD-01, SD-02 | `licenças_ociosas × preço_unitário_mensal × 12` |
| **REC-02** | Rebaixar plano | SD-05 | `(preço_plano_atual − preço_plano_adequado) × licenças × 12` |
| **REC-03** | Consolidar ferramentas redundantes | SD-03, SD-04 | `custo_anual_ferramenta_descartada − custo_incremental_da_mantida` |
| **REC-04** | Migrar para ciclo anual | SD-06 | `(preço_mensal × 12) − preço_anual` |
| **REC-05** | Renegociar preço | SD-08 | `(preço_pago − preço_referência) × licenças × 12` |
| **REC-06** | Cancelar assinatura | SD-01 com 90+ dias, SD-10 | `custo_anual_total_da_assinatura` |
| **REC-07** | Unificar contratos duplicados | SD-07 | `custo_anual_do_contrato_menor − desconto_perdido_por_volume` |
---

### Definição Operacional de Falso Positivo (FP-X)

| Tipo | Definição operacional | Como é medido |
|:---|:---|:---|
| **FP-A** Identificação | Fornecedor criado que não é um SaaS, ou fusão indevida de fornecedores distintos | Correção manual em E1 |
| **FP-B** Classificação | Categoria corrigida manualmente pelo Administrador de TI | Correção manual em E2 |
| **FP-C** Ociosidade | Licença classificada como `Ociosa` que volta a registrar uso em até 30 dias após o cancelamento | Evento de reprovisionamento (BI-08) |
| **FP-D** Recomendação | Recomendação aceita e revertida na janela de 72 h ou recusada pelo fornecedor | RN02.9, CT-07.5 |
---

### Indicadores do Motor (MI-XX)

| ID | Indicador | Meta | Fonte |
|:---|:---|:---|:---|
| MI-01 | Taxa de falso positivo agregada | ≤ 2% ao mês | RNF-10 |
| MI-02 | Cobertura de catalogação automática | ≥ 90% dos fornecedores sem revisão manual | E2 |
| MI-03 | Cobertura de telemetria da carteira | ≥ 80% das licenças com fonte E1 ou E2 | E4 |
| MI-04 | Taxa de aceitação de recomendações | ≥ 40% das publicadas | E5 |
| MI-05 | Economia realizada ÷ economia recomendada | ≥ 50% em 90 dias | DEC-21 |
| MI-06 | Tempo de processamento do pipeline completo | ≤ 5 min por conta (RNF-04) | E0 a E6 |
---

## 2. Kit de Wireframes Lo-Fi

### Decisões e Pendências do Kit (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| DEC-29 | Economia realizada é o primeiro elemento do Dashboard, acima de qualquer gráfico | Decidido |
| DEC-30 | Cobertura de telemetria é exibida no topo de SCR-04, antes de qualquer recomendação | Decidido |
| DEC-31 | Recomendações aparecem em card individual e sequencial (1 de 7), não em lista densa | Decidido |
| P-15 | Densidade da tabela de licenças precisa de validação com carteiras de 4.000+ linhas | Semana 05 |
| P-16 | Comportamento do gráfico de ROI em tablet ainda não desenhado | Semana 05 (RNF-09) |
| P-17 | Texto do resumo de conformidade (RI-03) depende da revisão do DPO | Semana 06 |
---

## 3. Diagramas UML

### Seleção das Interações a Modelar (SEQ-XX)

| ID | Interação | Risco técnico | Requisito | Iteração |
|:---|:---|:---|:---|:---|
| **SEQ-01** | Conexão OAuth e varredura inicial | Alto — orquestração de terceiros com teto de 5 min | REQ-01, RNF-04 | **v0.1 nesta semana** |
| **SEQ-02** | Ingestão, OCR e conciliação assíncrona | Alto — pipeline assíncrono com pareamento temporal | REQ-02, RN05 | **v0.1 nesta semana** |
| SEQ-03 | Fluxo de aprovação de gastos com escalonamento | Médio — máquina de estados com SLA | REQ-09, RN01 | Semana 05 |
| SEQ-04 | Exportação e portabilidade do titular | Médio — processamento assíncrono e anonimização | REQ-10, LGPD-02 | Semana 05 |
---

# Semana 5
## 1. Wireframes Mid-Fi Navegáveis do Visualizador de NFs e Modais de Downgrade

### Mapa de Navegação do Protótipo (T-XX)

| # | Origem | Gatilho | Destino |
|:--|:---|:---|:---|
| T-01 | E-mail de divergência | *deep link* | M-02 (detalhe da fatura) |
| T-02 | M-01 | clique na linha | M-02 |
| T-03 | M-02 | `CORRIGIR LEITURA` | M-02 em modo edição |
| T-04 | M-02 | `NOTIFICAR` | confirmação e retorno a M-01 |
| T-05 | M-03 | `AVALIAR DOWNGRADE ANTES DE RENOVAR` | M-04 |
| T-06 | M-03 | `[ ... ]` → ignorar | modal de motivo obrigatório |
| T-07 | W-07 (SCR-04) | `APLICAR DOWNGRADE` | M-04 |
| T-08 | M-04 | `APLICAR DOWNGRADE` | estado `Em Downgrade` com contador de 72 h |
| T-09 | W-07 | `cancelar assinatura` de alto valor | M-05 |
| T-10 | M-05 | `SOLICITAR APROVAÇÃO` | M-06 (fila de aprovação) |
| T-11 | M-06 | `REALOCAR LICENÇAS DO ESTOQUE` | W-07 com licenças realocadas |
| T-12 | M-06 | `registrar justificativa` | modal de justificativa → alçada superior |
| T-13 | M-07 | `EXPORTAR PDF / XLSX` | modal de confirmação de escopo e anonimização |
| T-14 | Convite por e-mail ao colaborador | *deep link* | M-08 (Portal do Titular) |
---

### Decisões e Pendências (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| DEC-37 | Lista de divergências ordena por severidade, nunca por data | Decidido |
| DEC-38 | Prévia de impacto exibe pseudônimo, setor, dias sem uso e fonte da evidência antes de qualquer ação destrutiva | Decidido |
| DEC-39 | Ação bloqueada aparece desabilitada com o motivo visível, em vez de ser omitida da tela | Decidido |
| DEC-40 | Contador da janela de 72 h é exibido **antes** da confirmação, não apenas depois | Decidido |
| P-15 | Densidade da tabela de licenças com 4.000+ linhas | Mitigada com paginação e filtros; medir na Semana 10 |
| P-16 | Gráfico de ROI em tablet | Segue aberta — Semana 06, junto ao Design System |
| P-20 | Visualizador de PDF em tablet: zoom e rotação exigem gesto próprio | Semana 06 (RNF-09) |
| P-21 | Texto integral das políticas exibidas em tela (RN01, RN04) precisa de revisão jurídica | Semana 06 |
---

## 2. Relatório de Validação dos Parâmetros RNF-04 e RNF-10

### Gargalo e condições de arquitetura (CA-XX)

| ID | Condição de arquitetura exigida | Consequência se não atendida |
|:---|:---|:---|
| CA-01 | Paginação com no mínimo 8 requisições concorrentes por conta | Contas de alto volume estouram o teto |
| CA-02 | Filtro por consulta no lado do provedor (`has:attachment` e termos de faturamento) | Tráfego desnecessário; violação prática do RNF-07 |
| CA-03 | Janela inicial de 90 dias, com carga histórica assíncrona posterior | Requisito irrealizável (linha 5 da tabela acima) |
| CA-04 | OCR e conciliação fora do caminho crítico da varredura | Orçamento estoura por 1 a 3 minutos |
| CA-05 | Tratamento de `429 Too Many Requests` com espera exponencial | Varredura falha em vez de degradar |
| CA-06 | Progresso parcial publicado durante a varredura | ANT-02 volta a ocorrer, mesmo cumprindo o tempo |
---

### Instrumentação Exigida (IN-XX)

| ID | Instrumentação | Serve a |
|:---|:---|:---|
| IN-01 | Cronometragem por etapa da varredura, com `trace_id` por conta | RNF-04 |
| IN-02 | Contador de `429` e de tentativas com espera exponencial | CA-05 |
| IN-03 | Registro de confiança de cada classificação publicada | FP-B |
| IN-04 | Evento de correção manual de categoria, com valor anterior e novo | FP-B, calibração |
| IN-05 | Evento de separação de fornecedores fundidos | FP-A |
| IN-06 | Evento de reprovisionamento em até 30 dias após cancelamento | FP-C |
| IN-07 | Evento de reversão de recomendação na janela de 72 h | FP-D |
| IN-08 | Contador anônimo de mensagens descartadas por ausência de indício | RNF-07, CTL-09 |
---

### Premissas do Modelo (PX)

| ID | Premissa | Valor adotado | Impacto se estiver errada |
|:---|:---|:---|:---|
| P1 | Volume de mensagens por conta na janela de 90 dias | 1.500 a 12.000 | Altera a vazão exigida na Seção 4.2 |
| P2 | Limite de requisições por segundo dos provedores de e-mail | A confirmar na documentação vigente | Pode inviabilizar CA-01 |
| P3 | Fração de fornecedores com CNPJ legível | 70% | Desloca erro entre os caminhos de E1 |
| P4 | Erro bruto do match por similaridade | 6% | Efeito direto em FP-A |
| P5 | Eficácia da guarda de similaridade | 70% | Efeito direto em FP-A |
| P6 | Cobertura da base curada de SaaS | 75% (a ampliar para 85%) | Termo dominante de FP-B |
| P7 | Erro bruto da classificação por modelo | 12% | Termo dominante de FP-B |
| P8 | Eficácia da guarda de confiança em 0,70 | 60% | Base do veredito negativo da Seção 5.4 |
| P9 | Eficácia da guarda de confiança em 0,80 | 75% | Base do ajuste corretivo |
| P10 | Itens enviados à revisão por carteira de 500 fornecedores | 40 a 75 | Dimensiona o custo operacional |
| P11 | Esforço de revisão por item | ~1,5 min | Dimensiona o custo operacional |
| P12 | Erro herdado em recomendações | ~2,1% | Efeito em MI-08 |
---

### Riscos Registrados (RV-XX)

| ID | Risco | Probab. | Impacto | Mitigação |
|:---|:---|:---:|:---:|:---|
| RV-01 | Margem de menos de 1 s no orçamento do RNF-04 | Alta | Alto | Instrumentação por etapa (IN-01) e alerta de regressão em `p95` |
| RV-02 | Cotas de provedor mais restritivas que o previsto (P2) | Média | Alto | Confirmar antes da implementação; CA-05 como degradação controlada |
| RV-03 | Base curada não atingir 85% de cobertura | Média | Alto | Rompe o ajuste da DEC-44 e o RNF-10 volta a ser descumprido |
| RV-04 | Fila de revisão manual maior que o previsto | Média | Médio | Priorizar por custo da assinatura, revisando primeiro o que mais pesa |
| RV-05 | Cliente recusar a janela de 90 dias (DEC-41) | Baixa | Crítico | Sem a janela, o RNF-04 é irrealizável — exigiria renegociar o requisito |
| RV-06 | Amostra de 753 não distinguir 1,5% de 2,1% | Alta | Médio | Critério de aceite mais rigoroso (abaixo de 1,5%), conforme Seção 7.2 |
---

## 3. Diagramas UML

### Mudanças em Relação ao Rascunho v0.1 (S-XX)

| # | Mudança | Motivo |
|:---|:---|:---|
| S-01 | **SEQ-01:** listagem limitada à janela de 90 dias; carga histórica passa a mensagem assíncrona posterior | DEC-41 (validação do RNF-04) |
| S-02 | **SEQ-01:** OCR removido do caminho crítico da varredura inicial | DEC-42 |
| S-03 | **SEQ-01:** acrescentado tratamento de `429 Too Many Requests` com espera exponencial | CA-05 |
| S-04 | **SEQ-02:** `Serviço de OCR` passa a ser componente interno com adaptador para provedor externo | **P-19 resolvida — ver Seção 6** |
| S-05 | Acrescentado **SEQ-03** — aprovação de gastos com escalonamento por SLA | Previsto no fecho da Semana 04 |
| S-06 | Acrescentado **SEQ-04** — exportação e portabilidade do titular | Previsto no fecho da Semana 04 |
---

# Semana 6
## 1. Design System SaaS B2B Completo (Componentes, Tipografia, Grids)

### Componentes com Regra de Negócio Embutida (CMP-XX)

Do catálogo de 22 componentes, estes 7 têm regra de negócio embutida — um erro de
implementação vira violação de requisito, não só defeito visual.

| ID | Componente | Requisitos |
|:---|:---|:---|
| CMP-03 | Badge de estado — 6 tons × 76 estados | DEC-06, ANT-03 |
| CMP-07 | Card de recomendação — publicada/estimativa | DEC-31, DEC-34 |
| CMP-08 | Tabela de dados responsiva | RNF-09, PAT-09 |
| CMP-10 | Gráfico de ROI em tablet | P-16 |
| CMP-13 | Modal de ação destrutiva (alçada) | ANT-06 |
| CMP-14 | Bloco de política (aviso/bloqueio) | PAT-08, RI-14 |
| CMP-18 | Visualizador de documento em tablet | P-20 |
---

### Decisões e Pendências (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| DEC-47 | Texto sobre status usa tons 700/800; tons 600 só em elementos não textuais | Decidido · resolve P-01 |
| DEC-49 | Badge com anatomia fixa (ícone + rótulo + tom), rótulo = nome do estado na máquina | Decidido |
| DEC-50 | Gráfico de ROI em tablet com tooltip por toque | Decidido · resolve P-16 |
| DEC-51 | Visualizador de NF em tablet com zoom por pinça e rotação por botão | Decidido · resolve P-20 |
| P-21 | Revisão jurídica das mensagens de regra | Aberta |
| P-25 | M-04 (Semana 05) mostra VME acima do teto da RN01 sem exigir aprovação; preço de exemplo também diverge entre telas | Aberta — corrigir no Hi-Fi |
---

## 2. Dicionário de Dados e Regras de Anonimização de Colaboradores (LGPD-01)

### Glossário da Linguagem Onipresente (v1.0)

Seleção de 8 termos entre os 31 do glossário completo — os mais propensos a sinônimo divergente.

| Termo | Definição | Evitar |
|:---|:---|:---|
| **Licença ociosa** | Sem evento qualificado por 30 dias consecutivos (RN02.1) | Inativa, sem uso |
| **Pool de licenças** | Capacidade compartilhada, apurada sem vínculo pessoal (DEC-56) | Licenças *floating* |
| **Pseudônimo** | Identificador `COL-xxxx` por HMAC; continua sendo dado pessoal | Anônimo |
| **Órfã** | Licença de colaborador desligado (BI-06) | Abandonada |
| **Sem responsável** | Assinatura cujo responsável foi desligado (DEC-18) | Órfã |
| **Economia potencial × realizada** | Estimada (não aplicada) × efetivada e confirmada — nunca somadas | Economia, ganho |
| **Janela de arrependimento** | 72 h em que uma ação aprovada pode ser revertida (RN02.9) | Carência |
| **VME** | Valor Mensal Equivalente de uma contratação ou ação (RN01.1) | Valor mensal |
---

### Decisões e Pendências (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| DEC-53 | Pseudônimo por HMAC-SHA-256 com chave por tenant; prefixo mínimo de 4 caracteres | Decidido |
| DEC-56 | Licenças *floating* apuradas por pool (capacidade − pico concorrente) | Decidido · resolve P-14 |
| DEC-57 | Integração de RH recebe só o período do afastamento, nunca o motivo | Decidido |
| DEC-58 | Pseudonimizado é dado pessoal; só agregado com k ≥ 5 é anonimizado | Decidido |
| P-02 | Política de rotação de chaves (CTL-04) | Resolvida |
| P-17 | Texto do resumo de conformidade (RI-03) | Rascunho — aguarda DPO |
---

## 3. Diagramas UML

### Principais Achados da Revisão (ME-XX)

A revisão encontrou 20 problemas nas 5 máquinas da v0.1 e identificou 3 máquinas faltantes.
Seleção de 6 achados estruturais entre os 21 (`ME-01` a `ME-21`) — ver Entregável 3 para a lista completa.

| ID | Máquina | Problema | Correção |
|:---|:---|:---|:---|
| ME-01 | `Licença` | `EmDowngrade` não tinha saída quando o downgrade dava certo | Novo estado terminal `Removida` |
| ME-08 | `Assinatura` | Guarda "maioria das licenças ociosas" indefinida (P-22) | Guarda formal — DEC-61 |
| ME-12 | `Assinatura` | Fornecedor não-SaaS deixava a assinatura presa em `Mapeada` | Novo estado terminal `Descartada` |
| ME-13 | `Requisição` | `Bloqueada` só era alcançada após a alçada, mas a RN04 é avaliada antes | `Rascunho` → `Bloqueada` na submissão |
| ME-19 | `Alerta` | Sem saída se ninguém decidisse até a cobrança | Novo estado terminal `Expirado` |
| ME-20 | — | `Recomendação`, `Ação` e `Conexão` sem máquina própria | Três máquinas novas |
---

### Sincronização entre Máquinas (SY-XX)

Seleção de 5 das 13 regras de sincronização entre as oito máquinas.

| ID | Evento | Efeito |
|:---|:---|:---|
| SY-01 | `Recomendação` → `Aceita` | Cria `Ação` em `Solicitada` |
| SY-03 | Evento qualificado em licença afetada | `Ação` invalidada; `Recomendação` → `Revertida` |
| SY-05 | `Ação` → `Executada` (cancelamento) | Licença e assinatura → `Cancelada` |
| SY-09 | Colaborador desligado | Licenças → `Orfa`; se responsável, assinatura → `SemResponsavel` |
| SY-10 | Licenças avaliáveis ociosas, cobertura ≥ 80% | Assinatura → `Ociosa` (DEC-61) |
---

### Decisões desta Entrega (DEC-XX)

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-61 | Assinatura `Ociosa` exige 100% das licenças ociosas/órfãs e cobertura ≥ 80% | Decidido · resolve P-22 |
| DEC-63 | `Ação sobre Assinatura` com máquina própria; execução humana e confirmada | Coerência com DEC-02 |
| DEC-64 | `Assinatura` com estado composto e quatro regiões ortogonais | Elimina combinações inalcançáveis |
---

# Semana 7
## 1. Especificação OpenAPI/Swagger RESTful para Integrações de ERP

| Indicador | Valor |
|:---|:---|
| Operações / caminhos | 13 operações em 9 caminhos |
| *Schemas* reutilizáveis | 30 |
| Respostas de erro padronizadas | 8 (`application/problem+json`, RFC 9457) |
| Conectores cobertos | FT-05 (TOTVS Protheus), FT-06 (SAP Business One), FT-07 (Omie/Conta Azul) |

Escopo restrito a `/erp/*` (DEC-66); credenciais só de escrita, nunca retornam (DEC-67).

---

## 2. Biblioteca de Componentes UI

**Concluído** (protótipo funcional, sem dependências externas, ≈31 KB). Badges `Divergente` /
`Ociosa` / `Pendente de revisão`, alinhados à DEC-49 (DEC-72). Responsividade verificada só por
regra CSS/DOM, sem teste em navegador real (P-32).

---

## 3. Diagramas UML

### Diagrama de Pacotes v1.0 (entrega formal)

9 contextos (3 *Core*: Inventário, Motor, Gestão · 4 *Supporting*: Integração, Catálogo,
Telemetria, Conciliação · 2 *Generic*: Governança, Identidade), 2 ACLs (fontes, OCR), 14
relações entre contextos.

### Diagrama de Classes de Domínio v1.0 (entrega formal)

28 classes (15 raízes, 6 entidades, 7 *value objects*); 12 enumerações de estado (76 valores)
+ 20 outras enumerações; 15 agregados, 18 invariantes.

### `SEQ-05` (complementar)

1 sequência — conexão e sincronização com a fonte, alinhada à máquina `Conexão` v1.0.

---

### Decisões e Pendências (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| DEC-66 | API cobre só `/erp/*` | Proposta |
| DEC-67 | Credenciais `writeOnly`, nunca retornam | Proposta |
| DEC-69 | Paginação por cursor (`limit` 1–200, padrão 50) | Proposta · volume de 50.000 transações/min (RNF-05) |
| DEC-71 | Sincronização assíncrona (`202`), janela de 90 dias | Proposta |
| DEC-72 | Rótulos dos badges seguem a DEC-49 | Proposta |
| DEC-75 | Bearer/JWT com papel e tenant nas claims | Proposta |
| P-30 | Reconciliar entidades/estados/nomes com a Semana 06 | Aberta — proposta de resolução na Semana 08 |
| P-31 | Conferir hex dos tokens com o Figma | Aberta |
| P-32 | Medir RNF-06 e validar RNF-09 em navegador/tablet reais | Aberta — Semanas 10 e 12 |
| P-33 | Alinhar `x-papeis` com a matriz de visibilidade | Aberta — proposta de resolução na Semana 08 |
| P-34 | Contato e ambientes da API não definidos | Aberta — Semana 14 |
| P-35 | Formato final do pseudônimo na UI | Aberta — proposta de resolução na Semana 08 (DEC-53) |
| P-36 | Escopo da API além de `/erp/*` | Aberta — Semana 14 |

> Construída sem acesso aos arquivos da Semana 06 (repositório privado); por isso herdou
> divergências (`RS-xx`) que a Semana 08 já cataloga na própria seção de comparação — não
> repetidas aqui.

---

# Semana 8
## 1. Matriz de Rastreabilidade Preenchida para o Bloco A (REQ-01 ao REQ-05)

### Camadas Rastreadas (LX)

| Camada | Conteúdo | Identificadores |
|:---|:---|:---|
| L1 | Requisito e regras | `REQ`, `RN05.x`, `RN02.x`, `RNF`, `CTL`, `DEC` |
| L2 | História | `US` |
| L3 | Caso de uso | `UC` |
| L4 | Cenário | `CT` |
| L5 | Comportamento UML | `AT`, `SEQ`, máquina |
| L6 | Estrutura | `ENT`, classe |
| L7 | Regra derivada do motor | `E0`–`E6`, `SD`, `REC` |
| L8 | Tela | `SCR`, `W`, `M`, `T`, `RI` |
| L9 | Design System | `CMP`, `MSG`, `TPL` |
| L10 | Hi-Fi | Quadro no Figma (D1) |

---

### Lacunas de Rastreabilidade (LR-XX)

Seleção das 10 lacunas de severidade alta entre as 28 (`LR-01` a `LR-28`).

| ID | Req | Lacuna | Encaminhamento |
|:---|:---|:---|:---|
| LR-01 | REQ-01 | Formulário de chave de API do ERP não desenhado | HF-01 |
| LR-05 | REQ-01/02 | RNF-05 sem cenário, validação ou condição de arquitetura | CT-01.9 · P-39 |
| LR-07 | REQ-02 | `Divergente` → `Tratada` sem gatilho em tela | HF-05 · CT-02.14 |
| LR-12 | REQ-03 | Detalhe do Fornecedor nunca desenhado | HF-09 |
| LR-16 | REQ-03/04 | Limiar de redundância em quatro versões | DEC-79 · CT-03.8 |
| LR-17 | REQ-04 | "Licenças duplicadas" sem cenário e sem tela | CT-04.13, CT-04.14 · HF-15 |
| LR-21 | REQ-05 | SCR-05 nunca desenhada; conteúdo no M-07 rotulado SCR-10 | DEC-83 · HF-18 |
| LR-22 | REQ-05 | CT-05.1 e CT-05.3 sem tela | HF-18 |
| LR-23 | REQ-05 | Relatório mensal sem entidade | DEC-84 · CT-05.6 · classe v1.0 |
| LR-25 | REQ-04/05 | REC-01 e REC-03 disputam as mesmas licenças | DEC-82 · CT-05.7 |

---

### Inconsistências de Dados de Exemplo (IC-XX)

| ID | Inconsistência |
|:---|:---|
| IC-01 | Preço do Figma R$ 72,00 × R$ 86,00 (P-25 b) |
| IC-02 | Adobe CC: R$ 4.320,00 no inventário × R$ 4.920,00 cobrados |
| IC-03 | Desperdício por categoria do M-07 não reproduzível a partir do W-06 |
| IC-04 | Comparativo do M-07 supõe sobreposição de 100% sem declarar |
| IC-05 | M-07 e W-07 contam a mesma redução do Figma duas vezes |
| IC-06 | Filtro `Categoria: DevTools` ativo com três categorias na tabela |
| IC-07 | Relatório de agosto para tenant com primeira varredura em setembro |
| IC-08 | Figma tem 17 licenças ativas, não 18 (uma `Sem telemetria`) |

---

### Divergências Semana 07 × Semana 06 (RS-XX)

Seleção de 6 das 14.

| ID | Divergência | Resolução |
|:---|:---|:---|
| RS-01 | OpenAPI sem o estado `revogada` | CU-10 |
| RS-02 | OpenAPI sem o estado `tratada` | CU-11 |
| RS-05 | Pseudônimo na licença, e não no colaborador | Classes v1.0 |
| RS-08 | Resultado da conciliação usado como estado da fatura | Classes v1.0 |
| RS-09 | Ícones e tons dos badges do protótipo diferentes do Design System | CU-12 · HF-24 |
| RS-11 | `Conectando` → `Ativa`: na validação (S7) ou após a primeira varredura (S6) | DEC-85 · CU-14 |

---

### Lista de Verificação do Hi-Fi (HF-XX)

Seleção de 8 dos 24 itens.

| ID | Tela | Condição |
|:---|:---|:---|
| HF-01 | SCR-01 | Formulário de chave de API com validação somente-leitura |
| HF-05 | SCR-02 | Ação "Registrar desfecho" em fatura `Divergente` |
| HF-09 | SCR-03 | Detalhe do Fornecedor com correção de categoria e desfazer consolidação |
| HF-12 | SCR-04 | Valores da massa canônica; card do Figma como plano combinado |
| HF-13 | SCR-04 | Ação "Recusar" com motivo; variante `Estimativa` |
| HF-18 | SCR-05 | Tela própria com KPIs separados, barras por categoria e recomendações ordenadas |
| HF-20 | Todas | Quadro em tablet de 768 px |
| HF-24 | Todas | Badges com ícone e tom do Design System |

---

### Decisões e Pendências (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| DEC-76 | "Concluído" exige L1 a L9 sem lacuna e Hi-Fi aprovado contra os itens HF | Proposta |
| DEC-77 | REQ-04 e REQ-05 pertencem ao Bloco A | Proposta |
| DEC-78 | Massa de dados canônica do Bloco A (regras R1 a R8) | Proposta · resolveria P-25 (b) |
| DEC-79 | Indicador de redundância: 2+ fornecedores em categoria de redundância alta | Proposta · parâmetro 23 |
| DEC-80 | Limiares vigentes de E1 (0,88 / 0,75) e E2 (0,80) | Proposta |
| DEC-81 | "Pendente de revisão" do fornecedor é atributo, não estado | Proposta |
| DEC-82 | Consolidação reaproveita licenças ociosas; recomendações concorrentes viram plano combinado | Proposta |
| DEC-83 | Relatório mensal de desperdício é a SCR-05 | Proposta |
| DEC-84 | Relatório mensal é retrato imutável do mês fechado | Proposta |
| DEC-85 | `Conexão` fica `Ativa` ao validar a credencial | Proposta |
| DEC-86 | `NF ausente` é situação do `LancamentoCartao` | Proposta · resolveria P-42 |
| P-37 | Design System da Semana 06 sobrescrito pelo commit `60dc076` | Aberta — restauração pelos responsáveis da Semana 06 |
| P-38 | P-30 e P-31 da revisão do dicionário colidem com as da Semana 07 | Aberta |
| P-39 | RNF-05 sem validação | Aberta — Semanas 10 e 11 |
| P-43 | RNF-03 sem rastro em nenhum artefato | Aberta — Semana 11 |
| P-44 | Subcategorias funcionais para categorias de redundância média | Aberta |

---

## 2. Layouts Hi-Fi (Figma)

**Pendente.** Responsável: D1 · prazo: 13/11/2026 · aceite pelos itens HF-01 a HF-24. Registro em `semana-08/entregavel-02-layouts-hifi-figma.md`.

---

## 3. Diagramas UML

### Gatilhos Humanos das Máquinas do Bloco A (GI-XX)

Seleção de 6 dos 16 gatilhos — os 10 sem controle desenhado incluem todos estes.

| ID | Máquina | Transição | Situação |
|:---|:---|:---|:---|
| GI-02 | `Conexão` | `[*]` → `Conectando` por chave de ERP | Sem controle |
| GI-05 | `Conexão` | → `Revogada` | Sem controle |
| GI-07 | `Fatura` | `PendenteRevisao` → `Descartada` | Sem controle |
| GI-09 | `Fatura` | `Divergente` → `Tratada` | Sem controle — bloqueia a SY-08 |
| GI-13 | `Recomendação` | → `Recusada` | Sem controle |
| GI-15 | *(fornecedor)* | Corrigir categoria | Sem controle |

---

### Diagrama de Classes de Domínio v1.0

| Vista | Classes principais |
|:---|:---|
| Integração e Conciliação | `Conexao`, `Sincronizacao`, `Fatura`, `CampoExtraido`, `Conciliacao`, `LancamentoCartao` |
| Catálogo, Inventário e Telemetria | `FornecedorSaaS`, `Assinatura`, `Licenca`, `PoolDeLicencas`, `Colaborador`, `UsoDiario` |
| Motor e Relatório | `SinalDesperdicio`, `Recomendacao`, `ApuracaoMensalDesperdicio` |
| Gestão e Governança | `Requisicao`, `AcaoSobreAssinatura`, `DecisaoAprovacao`, `Alerta`, `Exportacao`, `SolicitacaoTitular` |

35 classes (15 raízes, 9 entidades, 11 *value objects*); 12 enumerações de estado somam os 76 estados das 8 máquinas.

---

### Correções em Artefatos Anteriores (CU-XX)

| ID | Artefato | Correção |
|:---|:---|:---|
| CU-01 | CT-01.x, UC-01 | `Ativo` → `Ativa` |
| CU-03 | UC-03, fluxo 3a | 70% → 80%; sem referência ao UC-14 |
| CU-06 | UC-03, CT-03.5, W-06, SD-03, REC-03 | Regra de redundância da DEC-79 |
| CU-07 | Algoritmo do REC-03 | Custo incremental desconta licenças ociosas da ferramenta mantida |
| CU-10 | OpenAPI da Semana 07 | Estado `revogada`; conexão revogada continua consultável |
| CU-11 | OpenAPI da Semana 07 | Estado `tratada` |
| CU-14 | Máquina `Conexão` | `Conectando` → `Ativa` ao validar a credencial (DEC-85) |

---

# Semana 9
## 1. Matriz de Rastreabilidade Preenchida para o Bloco B (REQ-06 ao REQ-10)

### Lacunas de Rastreabilidade (LR-XX)

7 lacunas, numeração contínua a partir da LR-28 (Semana 08).

| ID | Req | Lacuna | Encaminhamento |
|:---|:---|:---|:---|
| LR-29 | REQ-09 | RI-17 (aviso de invalidação por alteração de valor, RN01.9) sem tela desde a Semana 05 | HF-32 |
| LR-30/31 | REQ-07 | M-04 usa o Figma como exemplo de downgrade — lote já absorvido pelo RC-1 da Semana 08; reaproveitar o valor duplicaria a economia | DEC-87 · HF-28 |
| LR-32 | REQ-08 | SCR-08 nunca teve Mid-Fi | DEC-76 (já ratificada) · HF-31 |
| LR-33 | REQ-09 | Quadro do Figma com nome interno "M-01" em vez de "M-06" | P-45 |
| LR-34/35 | REQ-10 | M-07 reproduz conteúdo e valor já corrigidos pela DEC-82/83 da Semana 08 | DEC-88 · HF-34 |

### Lista de Verificação do Hi-Fi (HF-XX)

Seleção de 6 dos 16 itens (HF-25 a HF-40).

| ID | Tela | Condição |
|:---|:---|:---|
| HF-25 | SCR-06 | Calendário e lista de renovações com badges da máquina `Alerta` |
| HF-28 | SCR-07 | Modal de downgrade com exemplo do Adobe CC (não o Figma) — DEC-87 |
| HF-31 | SCR-08 | Tela própria evoluindo do Lo-Fi (sem Mid-Fi anterior) |
| HF-32 | SCR-09 | Estado de edição com aviso de reinício por alteração de valor acima de 10% |
| HF-34 | SCR-10 | Exportação sem o conteúdo financeiro do M-07 — DEC-88 |
| HF-37 | Todas | Estado de carregamento por *skeleton* |

### Decisões e Pendências (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| DEC-87 | Hi-Fi usa os valores já corrigidos; SCR-07 troca o exemplo para o Adobe CC | Proposta |
| DEC-88 | SCR-10 deixa de reproduzir o conteúdo financeiro (já é da SCR-05, DEC-83) | Proposta |
| DEC-89 | Regras de derivação da massa canônica do Bloco B | Proposta |
| P-45 | Quadro do Figma de SCR-09 com nome interno "M-01" em vez de "M-06" | Aberta |
| P-46 | CT-10.7 (exportação acima de 50.000 linhas) sem representação em tela | Aberta — insumo para Semana 10 |
| P-47 | `Licença`/`Assinatura` sem exemplo de `EmDowngrade`/`EmCancelamento`/`Removida`/`Cancelada` | Aberta — Semana 10 |
| P-48 | GI-20 (`Aprovar` habilitado) e GI-24 (`Reverter`) sem tela própria | Aberta — Semana 10 |

---

## 2. Layouts Hi-Fi (Figma)

**Concluído.** Telas SCR-06 a SCR-10 (+ variantes tablet e estado de carregamento). Registro
em `semana-09/entregavel-02-layouts-hifi-figma.md`.

> **Nota de correção (Semana 11).** A SCR-09 tinha o estado de edição desenhado (SCR-09b), mas
> nenhum botão nela levava até lá — corrigido na Semana 11 (P-50): botão "Alterar valor"
> adicionado e ligado.

---

## 3. Diagramas UML — Verificação Transição × Interface do Bloco B

### Gatilhos Humanos das Máquinas do Bloco B (GI-XX)

Numeração contínua a partir do GI-16. 10 gatilhos: 7 com controle, 2 parciais, 1 fora do
escopo.

| ID | Máquina | Transição | Situação |
|:---|:---|:---|:---|
| GI-17 | `Requisição` | `[*]` → `Rascunho` → `EmAprovacao` (submeter) | Fora do escopo — tela de criação, não de decisão |
| GI-20 | `Requisição` | `EmAprovacao` → `Aprovada`/`Rejeitada` | Parcial — `Aprovar` corretamente desabilitado, mas nunca mostrado habilitado |
| GI-21 | `Requisição` | `EmAprovacao` → `Rascunho` (RN01.9) | Controle desenhado — fecha a LR-29 |
| GI-24 | `Ação sobre Assinatura` | `JanelaArrependimento` → `Revertida` | Parcial — badge mostrado, botão de reverter não desenhado |
| GI-26 | `Alerta` | qualquer → `Ignorado` | Controle corrigido no Figma antes do fechamento deste documento |

> **Nota de correção (Semana 10/11).** A Seção 3 deste documento contava a `Bloqueada`
> (SCR-09a) como já exemplificada com badge real — mas a instância do componente
> `Badge/Risco` só foi construída durante a revisão da Semana 10. Corrigido: 2 exemplos
> (Bloqueada, Rascunho), 46% de cobertura.

---

# Semana 10
## 1. Pacote de Telas de Tratamento de Exceções

Numeração contínua a partir da HF-40.

| ID | Padrão/Tela | Origem |
|:---|:---|:---|
| HF-41 | Estado vazio (SCR-01) | S1·E2 Seção 8 |
| HF-42 | Varredura em andamento | S1·E2 Seção 8 · RNF-04 |
| HF-43 | *Skeleton* do Dashboard (SCR-08) | S1·E2 Seção 8 · RNF-06 |
| HF-44 | Falha de integração | S1·E2 Seção 8 |
| HF-45 | Dado mascarado (LGPD) | S1·E2 Seção 8 · CMP-22 |
| HF-46 | Exceção de OCR — valor zero | S2·E2, BR-01 |
| HF-47 | Exceção de OCR — NF ausente, detalhe | S2·E2, BR-07 · DEC-86 |

---

## 2. Protótipo UI com Aplicação Visual das Travas RN03 e RN04

| ID | Item | Condição | Situação |
|:---|:---|:---|:---:|
| HF-48 | RN04 (SCR-09) | Política exibida, sem modal sobre modal, token `color.status.blocked` correto | ✓ Auditado — exigiu corrigir badge ausente (ver nota) |
| HF-49 | RN03 (SCR-06) | Antecedência correta, badges com tom correto, motivo obrigatório ao ignorar | ✓ Auditado, sem pendência |

> **Achado:** a auditoria original confirmou o critério de cor do banner "BLOQUEADA" sem
> checar se existia instância real do badge — não existia. Corrigido: `Badge/Risco` e
> `Badge/Neutro` adicionados à SCR-09, SCR-09b e variante tablet.

---

## 3. Diagramas UML — Verificação da Máquina `LancamentoCartao`

Numeração contínua a partir do GI-26.

| ID | Máquina | Transição | Situação |
|:---|:---|:---|:---:|
| GI-27 | `LancamentoCartao` | `NFAusente` → `AguardandoPareamento` | ✓ — "Solicitar NF ao fornecedor" |
| GI-28 | `LancamentoCartao` | `AguardandoPareamento` → `Pareado` | ✓ — "Parear manualmente com outra NF" |

**Resultado:** 2 de 2 gatilhos com controle desenhado.

### Pendências

| ID | Item | Situação |
|:---|:---|:---|
| P-47 | `Licença`/`Assinatura` sem exemplo visual de `EmDowngrade`/`EmCancelamento`/`Removida`/`Cancelada` | Ainda aberta |
| P-48 | GI-20 (`Aprovar` habilitado) e GI-24 (`Reverter`) sem tela própria | Ainda aberta |

---

# Semana 11
## 1. Protótipo Navegável de Alta Fidelidade Unificado

104 reações de navegação global (8 itens × 14 telas) + 9 ligações específicas (*drill-downs*
e *overlays*), cobrindo 10 de 10 requisitos. Ponto de partida do fluxo: HF-41
("Início — primeiro acesso").

---

## 2. Plano de Testes de Usabilidade e Roteiro de Avaliação com Gestores

8 tarefas (T1–T8), 3 personas (P-01 Gestor Financeiro/CFO, P-02 Admin de TI, P-03 Gestor de
Compras), reaproveitando cenários `CT-xx` e os *user flows* UF-01/02/03 (Semana 03). T2
ampliada com `CT-02.14`/`CT-02.15` (Semana 08, Seção 9.2).

---

## 3. Diagrama de Implantação (primeira entrega formal)

Nós: Navegador, Balanceador de Carga, Servidor de Aplicação (N≥2), Worker de Varredura (pool
de M), Worker de Carga Histórica, Banco de Dados + Réplica, Cofre de Credenciais/KMS, Serviço
de OCR interno, Provedor Externo de OCR, Fontes externas FT-01 a FT-07. Nenhum provedor de
nuvem nomeado (nenhum artefato anterior define um).

### Decisões e Pendências (DEC-XX e P-XX)

| ID | Item | Situação |
|:---|:---|:---|
| P-43 | RNF-03 (99,9% de disponibilidade) sem rastro | Parcialmente endereçada — redundância genérica (balanceador + 2ª instância + réplica) |
| P-39 | RNF-05 (50.000 transações/min) sem validação | Parcialmente endereçada — Worker de Varredura como pool de M instâncias |
| P-49 | Dimensionamento de redundância (nº de instâncias, RPO/RTO) para RNF-03 | Aberta |
| P-50 | SCR-09 sem gatilho de clique para o estado `EmEdição`/reinício (RI-17) | **Resolvida** — botão "Alterar valor" adicionado, ligado a SCR-09b |
| P-51 | Vazão por instância do Worker de Varredura, para validar RNF-05 numericamente | Aberta — medição empírica quando houver implementação |
| P-04 | Transferência internacional do Provedor Externo de OCR (CTL-14) | Segue aberta desde a Semana 01 — pendência jurídica, fora do escopo deste diagrama |
