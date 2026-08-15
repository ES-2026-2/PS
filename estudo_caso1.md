# 🎯 Projeto: Auditor e Otimizador de Assinaturas SaaS Corporativas

* **A oportunidade:** Com a explosão de ferramentas de IA, as empresas estão gastando milhares de dólares em assinaturas redundantes (funcionários assinando ferramentas diferentes para fazer a mesma coisa).
* **O app:** Um software que se conecta via API (com permissão) às faturas da empresa ou contas de e-mail para mapear o uso real de softwares. Ele não apenas lista os gastos, mas usa IA para sugerir consolidações (ex: *"Você tem 5 licenças do Midjourney e 3 do Canva Pro sem uso regular, mude para o plano X e economize $400"*).

## Requisitos Funcionais (RF)

1. O sistema deve permitir a integração via API com os principais ERPs e sistemas de faturamento da empresa.
2. O sistema deve ler e extrair dados de notas fiscais e recibos de SaaS anexados ao e-mail corporativo.
3. O sistema deve catalogar automaticamente as ferramentas encontradas por categoria (ex: Design, CRM, DevTools).
4. O sistema deve identificar licenças duplicadas ou sem uso ativo por parte dos colaboradores através de cruzamento de logs.
5. O sistema deve emitir um relatório mensal de "desperdício financeiro" com sugestões de planos alternativos.
6. O sistema deve disparar alertas quando uma assinatura estiver prestes a ser renovada automaticamente.
7. O sistema deve permitir que o administrador aprove o cancelamento ou downgrade de uma assinatura direto pela interface.
8. O sistema deve possuir um dashboard financeiro mostrando o ROI (Retorno sobre o Investimento) histórico gerado pelo app.
9. O sistema deve permitir a criação de fluxos de aprovação para novas contratações de softwares.
10. O sistema deve exportar relatórios de auditoria nos formatos PDF e XLSX.

## Requisitos Não Funcionais (RNF)

1. **Segurança:** O sistema deve criptografar todos os dados de faturamento e chaves de API em repouso usando AES-256.
2. **Conformidade:** O sistema deve estar em total conformidade com a LGPD e GDPR devido ao tratamento de dados de colaboradores.
3. **Disponibilidade:** O sistema deve garantir um uptime (tempo de atividade) de 99,9%.
4. **Desempenho:** A varredura inicial de e-mails e faturas não deve levar mais do que 5 minutos por conta conectada.
5. **Escalabilidade:** O banco de dados deve suportar a análise de até 50.000 transações financeiras por minuto por cliente corporativo.
6. **Usabilidade:** O dashboard principal deve carregar em menos de 2 segundos em conexões padrão de internet.
7. **Privacidade:** O sistema não deve armazenar o corpo de e-mails que não contenham anexos ou palavras-chave de faturamento.
8. **Interoperabilidade:** As APIs do sistema devem seguir o padrão RESTful com documentação Swagger/OpenAPI.
9. **Portabilidade:** A interface web deve ser totalmente responsiva, funcionando perfeitamente em desktops e tablets.
10. **Confiabilidade:** O índice de falsos positivos na identificação de ferramentas SaaS não deve passar de 2%.

## Regras de Negócio (RN)

1. **RN01 (Aprovação de Gastos):** Nenhuma assinatura corporativa acima de R$ 500/mês pode ser contratada sem a aprovação formal de pelo menos um administrador ou gestor financeiro na plataforma.
2. **RN02 (Gatilho de Inatividade):** Uma licença de software será classificada como "ociosa" e elegível para cancelamento/downgrade caso o colaborador não registre nenhum log de atividade nela pelos últimos 30 dias consecutivos.
3. **RN03 (Prevenção de Renovação):** O alerta de renovação automática deve ser disparado obrigatoriamente 15 dias antes da data de cobrança para assinaturas mensais e 45 dias antes para contratos anuais.
4. **RN04 (Teto de Desperdício):** O sistema deve bloquear o envio de novos convites de licenças em softwares específicos se o dashboard apontar que a empresa já possui licenças ociosas idênticas disponíveis em seu inventário.
5. **RN05 (Auditoria de NF):** Se os dados extraídos de uma nota fiscal de SaaS via OCR não baterem com o valor cobrado no cartão corporativo integrado (variação maior que 1%), o lançamento deve ser marcado como "Divergente" e o financeiro deve ser notificado.

## LGPD

1. **LGPD-01 (Minimização e Descarte):** O sistema deve aplicar técnicas de anonimização ou pseudonimização nos nomes e CPFs de colaboradores contidos nas notas fiscais e relatórios corporativos, mantendo visíveis apenas o setor e o custo da licença, exceto para o administrador de RH indicado.
2. **LGPD-02 (Direito de Acesso e Portabilidade):** O software deve disponibilizar um canal automatizado para que qualquer colaborador da empresa cliente possa consultar quais dados de utilização de software foram coletados em seu nome e exportar esse relatório em formato interoperável.

---

## 👬 Planejamento Completo de Análise de Requisitos e Design UI/UX (14 Semanas)

## 👥 1. Matriz de Atribuição e Distribuição dos 10 Requisitos

Para otimizar o período de 14 semanas (14 iterações) com a equipe de 2 Analistas de Requisitos (AR1 e AR2) e 2 Designers (D1 e D2), dividimos o escopo em dois blocos funcionais paralelos:

  * **Bloco A (Requisitos 01 ao 05 — Captura, IA e Diagnóstico):**  
  Focado no pipeline de dados, ingestão de NF/e-mails, categorização por IA e métricas de ROI.
  * **Bloco B (Requisitos 06 ao 10 — Gestão, Ações e Governança):**  
  Focado em automações, fluxos de aprovação, alertas de renovação, cancelamento/downgrade e exportações.       

```Plain Text
      [ AUDITOR E OTIMIZADOR DE ASSINATURAS SAAS ]
                            │
         ┌──────────────────┴──────────────────┐
         ▼                                     ▼
   [ BLOCO A: Captura & IA ]             [ BLOCO B: Gestão & Governança ]
   Dupla: AR1 + Designer 1               Dupla: AR2 + Designer 2
   ├── REQ-01: Integração API/ERPs       ├── REQ-06: Alertas de Renovação (RN03)
   ├── REQ-02: Leitura NF/E-mail (RN05)  ├── REQ-07: Cancelamento/Downgrade (RN02)
   ├── REQ-03: Catalogação por IA        ├── REQ-08: Dashboard ROI Histórico
   ├── REQ-04: Identificação Ociosa      ├── REQ-09: Fluxo de Aprovação (RN01, RN04)
   └── REQ-05: Relatório de Desperdício  └── REQ-10: Exportação (PDF/XLSX)
```

## 🗓️ 2. Cronograma de Atividades Semanais (14 Semanas)

|Semana|Início|Fim|
|:---|:---|:---|
|01|10/08/2026|16/08/2026|
|02|17/08/2026|23/08/2026|
|03|24/08/2026|30/08/2026|
|04|31/08/2026|06/09/2026|
|05|07/09/2026|13/09/2026|
|06|14/09/2026|20/09/2026|
|07|21/09/2026|27/09/2026|
|08|28/09/2026|04/10/2026|
|09|05/10/2026|11/10/2026|
|10|12/10/2026|18/10/2026|
|11|19/10/2026|25/10/2026|
|12|26/10/2026|01/11/2026|
|13|02/11/2026|08/11/2026|
|14|09/11/2026|15/11/2026|

* **Fase 1: Descoberta, Regras e Mapeamento**  
Semanas 1 a 3 (10/08/2026 a )
  * **Semana 1 (Iteração 1): Kickoff e Configuração de Segurança**
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Elicitação detalhada das integrações de e-mail/ERP, regras de privacidade (LGPD-01, LGPD-02) e criptografia AES-256 (RNF-01).
      * **D1 / D2**: Benchmarking de softwares B2B/Fintech, definição de arquitetura de informação e mapeamento de design tokens.
    * **Entregáveis**:
      * **Entregável 1**: Matriz de Conformidade de Segurança e Privacidade (AES-256, LGPD-01, LGPD-02 e RNF-01).
      * **Entregável 2**: Documento de Arquitetura de Informação e Mapa de Navegação do App.
      * **Entregável 3**: Benchmark de UI/UX FinTech/SaaS Corporativo e Design Tokens Iniciais (Figma).
      * **Entregável 4**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 2 (Iteração 2): Detalhamento do Bloco A (Req. 01 ao 03)**
    * **Equipe/Atividades**:
      * **AR1**: Especificação de histórias de usuário (US-01 a US-03) e regras de divergência de OCR (RN05).
      * **D1**: Mapeamento da jornada do usuário para onboarding de integrações e leitura de notas.
      * **AR2 / D2**: Início do levantamento de requisitos do Bloco B e desenho de personas de Gestores Financeiros/IT Admins.
    * **Entregáveis**:
      * **Entregável 1**: Documento de Especificação BDD/Gherkin dos Requisitos REQ-01 a REQ-03.
      * **Entregável 2**: Matriz de Regras de Negócio de OCR e Divergência Financeira (RN05).
      * **Entregável 3**: Mapa de Jornada do Usuário para Leitura de Notas Fiscais e Ingestão de E-mails.
      * **Entregável 4**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 3 (Iteração 3): Detalhamento do Bloco B (Req. 04 ao 10)**
    * **Equipe/Atividades**:
      * **AR2**: Especificação de histórias de usuário (US-04 a US-10), gatilhos de inatividade de 30 dias (RN02) e trava de R$ 500/mês (RN01).
      * **D2**: User Flows dos processos de aprovação e alertas de renovação (RN03).
    * **Entregáveis**:
      * **Entregável 1**: Documento de Especificação BDD/Gherkin dos Requisitos REQ-04 a REQ-10.
      * **Entregável 2**: Especificação do Fluxo de Aprovação de Gastos (RN01) e Trava de Inatividade (RN02).
      * **Entregável 3**: Personas Corporativas (CFO, IT Admin, Gestor de Compras) e User Flows do Bloco B.
      * **Entregável 4**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
* **Fase 2: Wireframing e Design System**  
Semanas 4 a 7
  * **Semana 4 (Iteração 4): Wireframes de Baixa Fidelidade (Lo-Fi)**
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Elaboração dos diagramas de caso de uso e fluxogramas do motor de otimização por IA.
      * **D1 / D2**: Prototipagem em Lo-Fi (paper/Balsamiq) para telas de integração, Dashboard de ROI e listagem de licenças.
    * **Entregáveis**:
      * **Entregável 1**: Fluxogramas Técnicos do Motor de Análise por IA e Algoritmo de Consolidação.
      * **Entregável 2**: Kit de Wireframes Lo-Fi (Figma) do Dashboard de ROI e Conexões API.
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 5 (Iteração 5): Wireframes de Média Fidelidade (Mid-Fi)**
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Validação técnica do limite de falsos positivos (<2%, RNF-10) e tempo de varredura (<5 min, RNF-04).
      * **D1 / D2**: Telas em Mid-Fi cobrindo a central de notificações, modais de aprovação/downgrade e visualizador de relatórios.
    * **Entregáveis**:
      * **Entregável 1**: Wireframes Mid-Fi Navegáveis do Visualizador de NFs e Modais de Downgrade.
      * **Entregável 2**: Relatório de Validação dos Parâmetros RNF-04 (<5 min de varredura) e RNF-10 (<2% erro).
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 6 (Iteração 6): Design System SaaS Corporativo**
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Documentação do dicionário de dados e regras de anonimização (LGPD-01).
      * **D1 / D2**: Construção do Design System em Figma (Tipografia, paleta, acessibilidade WCAG, componentes de gráficos e tabelas responsivas - RNF-09).
    * **Entregáveis**:
      * **Entregável 1**: Design System SaaS B2B Completo no Figma (Componentes, Tipografia, Grids).
      * **Entregável 2**: Dicionário de Dados e Regras de Anonimização de Colaboradores (LGPD-01).
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 7 (Iteração 7): Consolidação dos Componentes**:
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Especificação Swagger/OpenAPI para os endpoints RESTful (RNF-08).
      * **D1 / D2**: Finalização de botões, badges de status (Divergente, Ocioso, Pendente) e layouts do dashboard com tempo de carga <2s (RNF-06).
    * **Entregáveis**:
      * **Entregável 1**: Especificação OpenAPI/Swagger RESTful para Integrações de ERP (RNF-08).
      * **Entregável 2**: Biblioteca de Componentes UI de Tabelas Responsivas e Gráficos de Desperdício (RNF-09, RNF-06).
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
* **Fase 3: UI de Alta Fidelidade e Prototipagem Interativa**  
Semanas 8 a 11
  * **Semana 8 (Iteração 8): UI Hi-Fi — Bloco A (Req. 01 a 05)**
    * **Equipe/Atividades**:
      * **AR1**: Elaboração da matriz de rastreabilidade do Bloco A.
      * **D1**: UI Final das telas de conexão com e-mail/ERP, OCR de Notas Fiscais e Dashboard de Desperdício Financeiro.
    * **Entregáveis**:
      * **Entregável 1**: Matriz de Rastreabilidade Preenchida para o Bloco A (REQ-01 ao REQ-05).
      * **Entregável 2**: Layouts Hi-Fi (Figma) da Ingestão de NFs, Categorização por IA e Desperdício.
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 9 (Iteração 9): UI Hi-Fi — Bloco B (Req. 06 a 10)**
    * **Equipe/Atividades**:
      * AR2: Elaboração da matriz de rastreabilidade do Bloco B.
      * D2: UI Final dos relatórios em PDF/XLSX, fluxo de cancelamento/downgrade direto e central de LGPD (LGPD-02).
    * **Entregáveis**:
      * **Entregável 1**: Matriz de Rastreabilidade Preenchida para o Bloco B (REQ-06 ao REQ-10).
      * **Entregável 2**: Layouts Hi-Fi (Figma) da Central de Ações, Exportador PDF/XLSX e Painel LGPD.
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 10 (Iteração 10): Refinamento Visual e Estados de Interface**
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Validação de regras de negócio em tela (ex: Teto de desperdício bloqueando novos convites - RN04).
      * **D1 / D2**: Construção de empty states, telas de erro de integração, loading skeletons e cenários de divergência.
    * **Entregáveis**:
      * **Entregável 1**: Pacote de Telas de Tratamento de Exceções (Divergências de OCR, Falha de API).
      * **Entregável 2**: Protótipo UI com Aplicação Visual das Travas RN03 (Alerta 15/45d) e RN04 (Teto de Desperdício).
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
  * **Semana 11 (Iteração 11): Montagem do Protótipo Navegável**
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Elaboração dos casos e cenários de teste de usabilidade para a Semana 12.
      * **D1 / D2**: Configuração de transições, interações e ligações do protótipo no Figma para cobrir 100% dos 10 requisitos.
    * **Entregáveis**:
      * **Entregável 1**: Protótipo Navegável de Alta Fidelidade Unificado no Figma.
      * **Entregável 2**: Plano de Testes de Usabilidade e Roteiro de Avaliação com Gestores.
      * **Entregável 3**: Diagramas UML, conforme especificado no documento diagramasUML.md, se for o caso.
* **Fase 4: Testes de Usabilidade, Refinamento e Handoff**  
Semanas 12 a 14
  * **Semana 12 (Iteração 12): Execução dos Testes de Usabilidade**
    * **Equipe/Atividades**:
      * **AR1 / AR2** (Facilitadores): Condução das sessões de teste com gestores financeiros e de TI.
      * **D1 / D2** (Observadores): Registro de métricas de usabilidade (tempo na tarefa, taxa de sucesso e erros).
    * **Entregáveis**:
      * **Entregável 1**: Planilha de Coleta de Dados Brutos dos Testes de Usabilidade.
      * **Entregável 2**: Vídeos Gravados e Registros das Sessões com Usuários da Área Financeira.
  * **Semana 13 (Iteração 13): Ajustes e Tratamento de Fricções de UX**
    * **Equipe/Atividades**:
      * **AR1 / AR2**: Atualização da especificação funcional e requisitos com base no feedback dos usuários.
      * **D1 / D2**: Ajuste fino das telas, fluxos de navegação e componentes no protótipo.
    * **Entregáveis**:
      * **Entregável 1**: Relatório de Avaliação de Usabilidade e Cálculo da Nota SUS (System Usability Scale).
      * **Entregável 2**: Protótipo Hi-Fi Refatorado com Ajustes Visuais e de Fluxo.
  * **Semana 14 (Iteração 14): Handoff Técnico e Encerramento**
    * **Equipe/Atividades**:
      * **Equipe Integrada**: Liberação da Matriz de Rastreabilidade final, Swagger API Spec, Protótipo Interativo Hi-Fi e Design System pronto para o time de Engenharia.
    * **Entregáveis**:
      * **Entregável 1**: Dossiê Completo de Engenharia de Requisitos (Visão, Especificações e Swagger).
      * **Entregável 2**: Link Final do Figma com Handoff para Desenvolvedores e Termo de Aceite do Protótipo.

##  📊 3. Matriz de Rastreabilidade Prática (10 Requisitos --> UI/UX)

A matriz a seguir mapeia rigorosamente a relação entre os requisitos, regras de negócio (RN), normas de LGPD e as telas do protótipo navegável:

|ID Req|Descrição do Requisito|Regras / LGPD Vinculadas|User Story|Tela / Módulo no Figma|ID Tela|Responsáveis|Status UI/UX|
|:---|:---|:---|:---|:---|:---|:---|:---|
|REQ-01|Integração via API com ERPs e Faturamento|RNF-01, RNF-08|US-01|Modal de Conexões & Chaves API|SCR-01|AR1 / D1|Concluído|
|REQ-02|Extração OCR de Notas Fiscais e E-mails|RN05, RNF-07, LGPD-01|US-02|Extrator de NFs & Audit de Divergência|SCR-02|AR1 / D1|Concluído|
|REQ-03|Catalogação automática por IA|RNF-10|US-03|Inventário de Softwares por Categoria|SCR-03|AR1 / D1|Concluído|
|REQ-04|Identificação de licenças ociosas/duplicadas|RN02|US-04|Painel de Licenças Ociosas e Recomendações|SCR-04|AR1 / D1|Concluído|
|REQ-05|Relatório de Desperdício e Plano Alternativo|RNF-06|US-05|Relatório Mensal de Desperdício Financeiro|SCR-05|AR1 / D1|Concluído|
|REQ-06|Alertas de renovação automática|RN03|US-06|Central de Alertas e Calendário de Renovação|SCR-06|AR2 / D2|Concluído|
|REQ-07|Ação de Cancelamento ou Downgrade Direto|RN02|US-07|Central de Ações e Downgrade de Planos|SCR-07|AR2 / D2|Concluído|
|REQ-08|Dashboard Financeiro de ROI Histórico|RNF-06|US-08|Dashboard Principal de ROI & Economia|SCR-08|AR2 / D2|Concluído|
|REQ-09|Fluxo de Aprovação para Novas Compras|RN01, RN04|US-09|Central de Requisições e Aprovação de Gastos|SCR-09|AR2 / D2|Concluído|
|REQ-10|Exportação de Relatórios (PDF / XLSX)|LGPD-01, LGPD-02|US-10|Central de Relatórios & Exportação / LGPD|SCR-10|AR2 / D2|Concluído|

## 🧪 4. Roteiro Prático de Teste de Usabilidade (Semana 12)
###  📋 Ficha Técnica
* Perfil do Participante: Gestor Financeiro, CFO ou Administrador de TI / RH.
* Papéis: AR1/AR2 (Facilitadores) | D1/D2 (Anotadores e Observadores de UX).
* Duração: 45 minutos por participante.

1. Introdução e Termo de Consentimento:  
Duração: 5 min.
  * Apresentar o propósito do aplicativo.
  * Explicar que o foco é avaliar a clareza das informações, regras de negócio em tela e facilidade de navegação.
  * Coletar aceite verbal para gravação da sessão.
2. Execução dos Cenários Práticos:  
Duração: 30 min.
  * Passar as tarefas descritas na tabela de cenários abaixo sem induzir o clique do usuário.
3. Avaliação Pós-Teste e Métrica SUS:  
Duração: 10 min.
  * Aplicar o formulário System Usability Scale (SUS).
  * Perguntar: "*Em qual etapa do processo de aprovação ou cancelamento você sentiu menos segurança?*"

### 🎯 Cenários de Teste Mapeados aos Requisitos e Regras de Negócio

|Tarefa|Requisitos & Regras Avaliadas|Instrução Exata para o Usuário|Critério de Aceite & Validação de UX|
|:---|:---|:---|:---|
|01|REQ-01 REQ-02 RN05|"Acesse a área de faturas e analise o aviso de inconsistência recebido sobre uma nota fiscal recente."|• Identifica o alerta de "Divergente" na tela SCR-02.<br>• Percebe a variação >1% entre a NF e a fatura do cartão.• Notifica o setor financeiro em menos de 3 cliques.|
|02|REQ-03 REQ-04 RN02|"Verifique no inventário quais licenças estão classificadas como ociosas e execute o downgrade recomendado para a equipe."|• Localiza o filtro de licenças sem uso há +30 dias na SCR-04.<br>• Confirma a ação de downgrade direto na interface (SCR-07).|
|03|REQ-06 RN03|"Verifique os alertas de renovação programados para este mês e configure um aviso para uma assinatura anual."|• Visualiza os alertas com antecedência mínima de 45 dias para contrato anual na SCR-06.|
|04|REQ-09 RN01 RN04|"Analise uma nova solicitação de licença de R$ 750/mês para o departamento de Design e tome a ação adequada."|• O sistema bloqueia a aprovação direta apontando a existência de licenças idênticas disponíveis em estoque (SCR-09).|
|05|REQ-08 REQ-10 LGPD-01|"Acesse o Dashboard de ROI e exporte o relatório financeiro mensal garantindo a privacidade dos dados da equipe."|• Valida que no relatório gerado os dados dos colaboradores foram anonimizados conforme a regra LGPD-01 na SCR-10|

### 📝 Planilha de Registro de Problemas de UX (Para o Anotador)

|ID Usuário|Tarefa|Requisito / RN|Severidade|Comportamento Observado|Ação de Ajuste (Semana 13)|
|:---|:---|:---|:---|:---|:---|
|USR-01|T1|RN05|🟡 Média|Não entendeu a porcentagem de divergência da Nota Fiscal.|Adicionar tooltip explicativo mostrando valor da NF vs Valor da Fatura.|
|USR-02|T4|RN04|🔴 Alta|Tentou aprovar a compra sem ver que havia licenças ociosas disponíveis.|Destacar o alerta de "Licenças Ociosas no Inventário" com caixa em destaque amarelo antes do botão de aprovação.|
|USR-03|T5|LGPD-01|🟢 Baixa|Procurou o botão de exportar PDF no topo da página em vez do rodapé.|Mover o CTA "Exportar Relatório (PDF/XLSX)" para o cabeçalho do Dashboard.|
