# 🖼️ Entregável 2 — Kit de Wireframes Lo-Fi

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 04 (31/08/2026 – 06/09/2026)
**Responsáveis:** D1 / D2 (Designers)
**Versão:** 1.0.0
**Telas cobertas:** SCR-01 (Conexões e Chaves API) · SCR-08 (Dashboard de ROI) · SCR-03 (Inventário) · SCR-04 (Licenças Ociosas) + estados globais

---

## 1. 🎯 Objetivo e Método

Traduzir em **estrutura de tela** os 31 requisitos de interface (`RI-01` a `RI-31`) derivados
das jornadas da Semana 02 e dos user flows da Semana 03, cobrindo as telas que o cronograma
prioriza para esta iteração: **telas de integração, Dashboard de ROI e listagem de licenças**.

| Aspecto | Definição |
|:---|:---|
| **Fidelidade** | Baixa — estrutura, hierarquia e conteúdo. Sem cor, tipografia final ou ícones definitivos |
| **Notação** | Wireframes em ASCII, versionáveis junto ao repositório e transpostos para o Figma pela equipe de design |
| **Grid** | 12 colunas, gutter de 24 px, largura de referência 1440 px (Design Tokens, Seção 5.6) |
| **Anotações** | Marcadores numéricos `(n)` no desenho, explicados na tabela que acompanha cada tela |
| **Fora de escopo** | Paleta, tipografia, microinterações, ilustrações — Semanas 06 e 10 |

> **Sobre o formato:** o cronograma prevê o kit em Figma. Os wireframes abaixo são a
> **especificação estrutural versionada** que o time transpõe para o arquivo Figma — a fonte
> de verdade de estrutura e conteúdo fica no repositório, junto dos requisitos que a originam.

---

## 2. 🧱 W-00 — Shell da Aplicação

Estrutura comum a todas as telas, conforme a Seção 6 da
[Arquitetura de Informação](../semana-01/entregavel-02-arquitetura-informacao-mapa-navegacao.md).

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]        [~] Varredura 62%   [!] 3   [ Ana C. v ]             |
+------------------+---------------------------------------------------------------------------+
|>[#] Inicio       | Inicio > Inventario > Adobe Creative Cloud                        (4)     |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | TITULO DA PAGINA                        [ Acao secund. ] [ ACAO ]  (5)    |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | | [Filtro A v] [Filtro B v] [ Buscar................ ]   (6)        |     |
| [#] Relatorios   | +-------------------------------------------------------------------+     |
| ---------------  | |                                                                   |     |
| [#] Config.      | |                    AREA DE CONTEUDO                               |     |
|                  | |                                                                   |     |
|                  | |   tabelas rolam na horizontal dentro do proprio container  (7)    |     |
|                  | |                                                                   |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | Acoes destrutivas sempre em modal com confirmacao explicita  (8)          |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (1) | Seletor de empresa (tenant) sempre visível — reforça o isolamento multi-tenant | CTL-10 |
| (2) | Progresso de varredura persistente no topbar; navegação permanece livre | RI-05, RNF-04 |
| (3) | Sino de notificações com contador de alertas e divergências | RN05.7, RN03 |
| (4) | Breadcrumb obrigatório em todas as telas de nível 2 ou superior | AI, Seção 6 |
| (5) | Ação primária da página sempre no topo, sem rolagem | Jornada B, fase 4 |
| (6) | Filtros persistentes acima da tabela, preservados no drill-down | PAT-08, RI-06 |
| (7) | Tabelas rolam horizontalmente dentro do próprio container | RNF-09 |
| (8) | Toda ação destrutiva ocorre em modal, nunca inline | ANT-02, PAT-10 |

**Sidebar:** máximo de 7 itens no primeiro nível; em tablet colapsa para ícones (64 px).

---

## 3. 🔌 SCR-01 — Conexões e Chaves de API

### 3.1. W-01 — Estado inicial (nenhuma conexão configurada)

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]                                     [ Ana C. v ]            |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Conexoes                                                         |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Conexoes e Chaves de API                                                  |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | |  VAMOS CONECTAR SUAS FONTES DE DADOS                     (1)      |     |
| [#] Relatorios   | |  Tempo estimado total: 10 minutos                                 |     |
| ---------------  | |                                                                   |     |
|>[#] Config.      | |  [ ] 1. E-mail corporativo ....... ~2 min   [ CONECTAR ]          |     |
|                  | |  [ ] 2. ERP / faturamento ........ ~5 min   [ CONECTAR ]          |     |
|                  | |  [ ] 3. Provedor de identidade ... ~3 min   [ CONECTAR ]          |     |
|                  | |                                                                   |     |
|                  | |  Precisa de aval do time de seguranca?                   (2)      |     |
|                  | |  [ BAIXAR RESUMO DE CONFORMIDADE (PDF) ]                          |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | Nenhuma conexao configurada ainda. O inventario aparece aqui              |
|                  | assim que a primeira varredura terminar.                    (3)           |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (1) | Checklist de onboarding com 3 passos e **tempo estimado por passo** | RI-01, PC-A1 |
| (2) | Resumo de conformidade exportável para destravar o aval do time de segurança | RI-03, PC-A2 |
| (3) | Estado vazio **acionável** — explica o que vai acontecer, não apenas que está vazio | AI, Seção 8 |

### 3.2. W-02 — Transparência pré-consentimento (modal)

Tela que antecede o redirecionamento OAuth. É a contramedida ao ponto de maior abandono da
Jornada A (PC-A1).

```text
+----------------------------------------------------------------------------------------------+
|  MODAL - TRANSPARENCIA PRE-CONSENTIMENTO (SCR-01)                          [x]               |
|  ------------------------------------------------------------------------------------------  |
|                                                                                              |
|  Antes de conectar o Google Workspace                                                        |
|                                                                                              |
|  +----------------------------------------+  +----------------------------------------+      |
|  |  O QUE VAMOS LER                  (9)  |  |  O QUE NUNCA LEMOS              (10)   |      |
|  |                                        |  |                                        |      |
|  |  [x] Anexos de mensagens com           |  |  [ ] Corpo de mensagens sem anexo      |      |
|  |      palavra-chave de faturamento      |  |      nem palavra-chave de faturamento  |      |
|  |  [x] Remetente, assunto e data         |  |  [ ] Mensagens pessoais                |      |
|  |  [x] Valor, numero e CNPJ da nota      |  |  [ ] CPF de colaborador (descartado)   |      |
|  |                                        |  |  [ ] Contatos e calendario             |      |
|  +----------------------------------------+  +----------------------------------------+      |
|                                                                                              |
|  Permissao solicitada: SOMENTE LEITURA. Voce pode revogar quando quiser.        (11)         |
|  Referencia: RNF-07 / CTL-13 / DEC-02                                                        |
|                                                                                              |
|                                            [ Cancelar ]   [ CONTINUAR PARA O GOOGLE ]        |
+----------------------------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (9) | Coluna afirmativa: exatamente o que será lido | RI-02, CT-01.2 |
| (10) | Coluna negativa: o que **nunca** é lido nem armazenado — implementa o RNF-07 na comunicação | RNF-07, CTL-09 |
| (11) | Declaração explícita de escopo somente-leitura e de revogabilidade | DEC-02, CTL-13 |

### 3.3. W-03 — Lista de conectores com saúde

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]        [~] Varredura 62%   [!] 3   [ Ana C. v ]             |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Conexoes                                                         |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Conexoes e Chaves de API                     [ + NOVA CONEXAO ]           |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | | Conector          | Estado            | Ultima varredura | Acoes  |     |
| [#] Relatorios   | +-------------------------------------------------------------------+     |
| ---------------  | | Google Workspace  | (o) Ativo         | ha 12 min        | [...]  |     |
|>[#] Config.      | | Microsoft 365     | (!) Token expirado| ha 6 dias        | [...]  |     |
|                  | | TOTVS Protheus    | (o) Ativo         | ha 1 h           | [...]  |     |
|                  | | Omie              | (~) Conectando    | primeira carga   | [...]  |     |
|                  | | Cartao corporativo| (x) Erro          | ha 2 dias        | [...]  |     |
|                  | +-------------------------------------------------------------------+     |
|                  |   (o) ativo   (~) conectando   (!) atencao   (x) erro       (12)          |
|                  |   estado sempre com icone + rotulo textual, nunca so cor                  |
|                  |                                                                           |
|                  | Chave de API exibida apenas como ****-****-3f9a                (13)       |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (12) | Estado sempre com **ícone + rótulo textual**, nunca apenas cor | ANT-04, CT-01.8 |
| (13) | Credencial nunca reexibida; apenas os 4 últimos caracteres | CT-01.3, CTL-03 |

> **Guia por conector (RI-04):** a ação `[...]` de cada linha abre o passo a passo de obtenção
> da chave no sistema de origem, com captura de tela — contramedida ao ponto crítico PC-A3.

---

## 4. 📈 SCR-08 — Dashboard de ROI

### 4.1. W-04 — Com histórico consolidado

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]        [~] Varredura 62%   [!] 3   [ Ana C. v ]             |
+------------------+---------------------------------------------------------------------------+
|>[#] Inicio       | Inicio                                                                    |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Dashboard de ROI                    [Periodo: 12 meses v] [EXPORTAR]      |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +---------------------------+  +---------------------------------+        |
| [#] Aprovacoes   | | ECONOMIA REALIZADA   (14) |  | ROI ACUMULADO             (15)  |        |
| [#] Relatorios   | |                           |  |                                 |        |
| ---------------  | |     R$ 184.320,00         |  |        4,2x                     |        |
| [#] Config.      | |     nos ultimos 12 meses  |  |  custo da plataforma R$ 43.800  |        |
|                  | +---------------------------+  +---------------------------------+        |
|                  |                                                                           |
|                  | +-------------------------------------------------------------------+     |
|                  | | EVOLUCAO DA ECONOMIA                                       (16)   |     |
|                  | |                                                                   |     |
|                  | |  R$ |                                        ___/               |  |    |
|                  | |     |                              ____/----                    |  |    |
|                  | |     |                    ____/-----                             |  |    |
|                  | |     |          ___/------                                       |  |    |
|                  | |     |____/-----                                                 |  |    |
|                  | |     +-----------------------------------------------------------+  |    |
|                  | |      set out nov dez jan fev mar abr mai jun jul ago              |     |
|                  | |                                                                   |     |
|                  | |  [ ] Realizado (linha cheia)   [ ] Projetado (linha tracejada)    |     |
|                  | |  maximo de 5 series; excedente agrupado em "Outras"        (17)   |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | +-------------------------------------------------------------------+     |
|                  | | ECONOMIA POTENCIAL - ESTIMATIVA                            (18)   |     |
|                  | | R$ 62.400,00 / ano em 7 recomendacoes nao aplicadas               |     |
|                  | | [ VER RECOMENDACOES ]        (nao somado a economia realizada)    |     |
|                  | +-------------------------------------------------------------------+     |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (14) | **Economia realizada é o primeiro elemento da página**, sem rolagem | Persona P-01, DEC-21 |
| (15) | ROI exibido junto ao custo da plataforma — o número que o CFO leva ao conselho | REQ-08 |
| (16) | Séries de realizado e projetado visualmente distintas | CT-08.2, DEC-21 |
| (17) | Máximo de 5 séries; excedente agrupado em "Outras" | ANT-05, CT-08.4 |
| (18) | Economia potencial em bloco separado, rotulada como estimativa e **nunca somada** | DEC-21, CT-08.2 |

### 4.2. W-05 — Sem histórico suficiente

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]        [~] Varredura 62%   [!] 3   [ Ana C. v ]             |
+------------------+---------------------------------------------------------------------------+
|>[#] Inicio       | Inicio                                                                    |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Dashboard de ROI                                                          |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | |  AINDA ESTAMOS MEDINDO                                     (19)   |     |
| [#] Relatorios   | |                                                                   |     |
| ---------------  | |  Sua primeira varredura terminou em 02/09/2026.                   |     |
| [#] Config.      | |  O primeiro ROI estara disponivel em 02/10/2026.                  |     |
|                  | |                                                                   |     |
|                  | |  LINHA DE BASE MAPEADA                                            |     |
|                  | |     R$ 38.900,00 / mes em custo recorrente de SaaS                |     |
|                  | |     127 assinaturas . 1.412 licencas . 23 fornecedores            |     |
|                  | |                                                                   |     |
|                  | |  [ VER INVENTARIO ]   [ VER LICENCAS OCIOSAS (312) ]              |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | Nao exibir grafico zerado nesta situacao (antipadrao ANT-01)  (20)        |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (19) | Informa **quando** o primeiro ROI estará disponível — marco zero explícito | DEC-22, CT-08.3 |
| (20) | Proibido exibir gráfico zerado nesta situação | ANT-01, CT-08.3 |

---

## 5. 📦 SCR-03 — Inventário de Softwares por Categoria

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]        [~] Varredura 62%   [!] 3   [ Ana C. v ]             |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Inventario                                                       |
|>[#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Inventario de Softwares por Categoria                                     |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | | [Categoria v] [Confianca v] [Estado v] [ Buscar........... ]      |     |
| [#] Relatorios   | | filtros persistem ao navegar para o detalhe                (21)   |     |
| ---------------  | +-------------------------------------------------------------------+     |
| [#] Config.      |                                                                           |
|                  | DESIGN  (3 fornecedores)      [!] possivel redundancia       (22)         |
|                  | +-------------------------------------------------------------------+     |
|                  | | Fornecedor  | Licencas | Ociosas | Custo/mes  | Confianca | Acoes |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | Figma       | 25       | 7       | R$ 2.150   | IA 94% (o)| [...] |     |
|                  | | Canva Pro   | 40       | 22      | R$ 1.600   | IA 91% (o)| [...] |     |
|                  | | Adobe CC    | 12       | 3       | R$ 4.320   | Base (o)  | [...] |     |
|                  | +-------------------------------------------------------------------+     |
|                  | [ COMPARAR ASSINATURAS DESTA CATEGORIA ]                                  |
|                  |                                                                           |
|                  | DEVTOOLS  (2 fornecedores)                                                |
|                  | +-------------------------------------------------------------------+     |
|                  | | GitHub      | 60       | 4       | R$ 3.900   | Base (o)  | [...] |     |
|                  | | Jira        | 55       | 18      | R$ 2.475   | IA 88% (o)| [...] |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | NAO CLASSIFICADO  (4 fornecedores)                           (23)         |
|                  | +-------------------------------------------------------------------+     |
|                  | | Servico XPTO| 8        | --      | R$ 640     | IA 52% (!)| [...] |     |
|                  | |   ^ pendente de revisao: nao entra em recomendacoes               |     |
|                  | +-------------------------------------------------------------------+     |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (21) | Filtros preservados ao navegar para o detalhe do fornecedor | PAT-08, CT-03.6 |
| (22) | Indicador de possível redundância na categoria (3+ fornecedores ativos) | SD-03, CT-03.5 |
| (23) | Fornecedor pendente de revisão fica visível, mas **não entra em recomendações** | CT-03.2, E2 |

**Índice de confiança:** exibido como `IA 94%` ou `Base` (base curada), sempre com ícone de
estado ao lado — nunca apenas por cor (PAT-02, ANT-04).

---

## 6. 💤 SCR-04 — Licenças Ociosas e Recomendações

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]        [~] Varredura 62%   [!] 3   [ Ana C. v ]             |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Licencas ociosas                                                 |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Licencas Ociosas e Recomendacoes                                          |
|>[#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | | Cobertura de telemetria: 82% da carteira                   (24)   |     |
| [#] Relatorios   | | 18% das licencas estao SEM TELEMETRIA e nao sao avaliadas         |     |
| ---------------  | | [ CONECTAR MAIS FONTES DE USO ]                                   |     |
| [#] Config.      | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | RECOMENDACAO 1 de 7                                                       |
|                  | +-------------------------------------------------------------------+     |
|                  | | O QUE FAZER   Reduzir de 25 para 18 licencas do Figma      (25)   |     |
|                  | | POR QUE       7 licencas sem uso ha mais de 30 dias               |     |
|                  | | EVIDENCIA     API do fornecedor . coleta em 05/09/2026            |     |
|                  | | ECONOMIA      R$ 6.048,00 / ano . confianca 94%                   |     |
|                  | |                                                                   |     |
|                  | |                      [ VER LICENCAS ]   [ APLICAR DOWNGRADE ]     |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | LICENCAS DA ASSINATURA FIGMA                                              |
|                  | +-------------------------------------------------------------------+     |
|                  | | Titular   | Setor     | Ultimo acesso | Dias | Evidencia | Estado |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | COL-8f2a  | Marketing | 12/07/2026    | 55   | API       | OCIOSA |     |
|                  | | COL-31bd  | Produto   | 02/08/2026    | 34   | API       | OCIOSA |     |
|                  | | COL-a70c  | Design    | 04/09/2026    | 1    | API       | ATIVA  |     |
|                  | | COL-5e19  | Vendas    | --            | 41   | API       | OCIOSA |     |
|                  | |   ^ nunca acessada desde o provisionamento                 (26)   |     |
|                  | | COL-c284  | TI        | --            | --   | nenhuma   | S/TEL. |     |
|                  | +-------------------------------------------------------------------+     |
|                  | titular sempre por pseudonimo; setor em texto claro          (27)         |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (24) | Cobertura de telemetria no topo — o usuário sabe sobre quanto da carteira o número fala | RN02.4, CT-05.4 |
| (25) | Card de recomendação com os **4 campos obrigatórios**: o quê, por quê, evidência e quanto | Motor de IA, Seção 7.2 |
| (26) | Licença nunca acessada conta desde o provisionamento, com motivo explícito | RN02.3, DEC-16 |
| (27) | Titular sempre por pseudônimo; setor em texto claro | LGPD-01, CT-04.7 |

**Evidência por linha (RI-25):** a coluna `Evidência` mostra a fonte usada (`API`, `SSO`,
`Proxy`, `nenhuma`) — resposta direta à desconfiança da persona P-02.

---

## 7. 🔄 Estados Globais de Interface

```text
+----------------------------------------------------------------------------------------------+
|  ESTADO A - CARREGAMENTO (skeleton, nunca spinner de pagina inteira)          (28)           |
|  +--------------------------------------------------------------------------------+          |
|  | [##########      ]  [############    ]                                         |          |
|  | [#####################################################################]        |          |
|  | [#####################################################################]        |          |
|  +--------------------------------------------------------------------------------+          |
|                                                                                              |
|  ESTADO B - VARREDURA EM ANDAMENTO (barra persistente, navegacao livre)       (29)           |
|  +--------------------------------------------------------------------------------+          |
|  | [~] Varredura inicial 62%  |###########------|  47 assinaturas encontradas     |          |
|  +--------------------------------------------------------------------------------+          |
|                                                                                              |
|  ESTADO C - FALHA DE INTEGRACAO (banner fixo + badge na navegacao)            (30)           |
|  +--------------------------------------------------------------------------------+          |
|  | (!) Microsoft 365 com token expirado ha 6 dias.                                |          |
|  |     Os dados exibidos sao da ultima varredura bem-sucedida (28/08/2026).       |          |
|  |     [ RECONECTAR ]                                    [ dispensar por hoje ]   |          |
|  +--------------------------------------------------------------------------------+          |
|                                                                                              |
|  ESTADO D - DADO MASCARADO POR LGPD                                           (31)           |
|  +--------------------------------------------------------------------------------+          |
|  | Titular: COL-8f2a  [escudo] Anonimizado                                        |          |
|  |          ^ tooltip: "Identidade protegida pela LGPD-01. Apenas o               |          |
|  |            Administrador de RH pode reidentificar, com registro."              |          |
|  +--------------------------------------------------------------------------------+          |
+----------------------------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (28) | Skeleton de cards, nunca spinner de página inteira | AI, Seção 8; RNF-06 |
| (29) | Barra de varredura com **resultado parcial em tempo real** | RI-05, PC-A4, ANT-01 |
| (30) | Falha de integração informa a data da última varredura válida, evitando dado silenciosamente velho | CT-01.6 |
| (31) | Badge de anonimização com tooltip explicando o motivo | LGPD-01, AI Seção 8 |

---

## 8. 🔗 Cobertura dos Requisitos de Interface

| Requisito | Onde foi atendido | Situação |
|:---|:---|:---:|
| RI-01 Checklist de onboarding | W-01, anotação (1) | ✅ |
| RI-02 Transparência pré-OAuth | W-02 | ✅ |
| RI-03 Resumo de conformidade | W-01, anotação (2) | ✅ |
| RI-04 Guia de chave por conector | W-03, ação `[...]` | ✅ |
| RI-05 Progresso persistente | W-00 (2) e W-08 estado B | ✅ |
| RI-06 Ordenação por severidade | *SCR-02 — Semana 05* | ⬜ |
| RI-07 Tooltip de base de cálculo | *SCR-02 — Semana 05* | ⬜ |
| RI-08 Comparação lado a lado | *SCR-02 — Semana 05* | ⬜ |
| RI-09 Visualizador com destaque | *SCR-02 — Semana 05* | ⬜ |
| RI-10 Explicação de variação legítima | *SCR-02 — Semana 05* | ⬜ |
| RI-11 Aviso de histórico preservado | *SCR-02 — Semana 05* | ⬜ |
| RI-12 Export com filtros e máscara | *SCR-10 — Semana 05* | ⬜ |
| RI-13 a RI-18 Fluxo de aprovação | *SCR-09 — Semana 05* | ⬜ |
| RI-19 a RI-24 Alertas de renovação | *SCR-06 — Semana 05* | ⬜ |
| RI-25 Fonte da evidência por licença | W-07, coluna `Evidência` | ✅ |
| RI-26 Recomendação graduada 30/60/90 | W-07, card de recomendação | ✅ |
| RI-27 Confirmação por digitação | *SCR-07 — Semana 05* | ⬜ |
| RI-28 Prévia de impacto | *SCR-07 — Semana 05* | ⬜ |
| RI-29 Contador de arrependimento | *SCR-07 — Semana 05* | ⬜ |
| RI-30 Bloqueio por uso retomado | *SCR-07 — Semana 05* | ⬜ |
| RI-31 Badge `Sem telemetria` | W-07, linha `COL-c284` | ✅ |

**Cobertura desta iteração:** 8 de 31 requisitos de interface — exatamente o recorte de telas
previsto no cronograma (integração, ROI e listagem de licenças). Os 23 restantes pertencem às
telas de Mid-Fi da Semana 05 (SCR-02, SCR-06, SCR-07, SCR-09 e SCR-10).

---

## 9. ✅ Critérios de Aceite do Kit

1. Toda tela desenhada tem breadcrumb, ação primária no topo e filtros persistentes quando exibe lista.
2. Nenhum estado é comunicado exclusivamente por cor — todo badge combina ícone, rótulo e cor.
3. Nenhum wireframe exibe nome ou CPF de colaborador fora do perfil Administrador de RH.
4. Todo card de recomendação apresenta os 4 campos obrigatórios de explicação.
5. Nenhum número financeiro aparece sem indicação de período e escopo.
6. Todo estado vazio é acionável — oferece o próximo passo, não apenas informa a ausência.

---

## 10. ⚠️ Decisões e Pendências do Kit

| ID | Item | Situação |
|:---|:---|:---|
| DEC-29 | Economia realizada é o primeiro elemento do Dashboard, acima de qualquer gráfico | ✅ Decidido |
| DEC-30 | Cobertura de telemetria é exibida no topo de SCR-04, antes de qualquer recomendação | ✅ Decidido |
| DEC-31 | Recomendações aparecem em card individual e sequencial (1 de 7), não em lista densa | ✅ Decidido |
| P-15 | Densidade da tabela de licenças precisa de validação com carteiras de 4.000+ linhas | Semana 05 |
| P-16 | Comportamento do gráfico de ROI em tablet ainda não desenhado | Semana 05 (RNF-09) |
| P-17 | Texto do resumo de conformidade (RI-03) depende da revisão do DPO | Semana 06 |

---

## 11. 🔗 Rastreabilidade

| Item | Consumido em | Entregável de destino |
|:---|:---|:---|
| W-00 Shell | Semana 06 | Design System — grids e componentes |
| W-01 a W-03 | Semana 05 e 08 | Mid-Fi e UI Hi-Fi do Bloco A |
| W-04 e W-05 | Semana 09 | UI Hi-Fi do Dashboard de ROI |
| W-06 e W-07 | Semana 08 | UI Hi-Fi da catalogação e desperdício |
| W-08 Estados | Semana 10 | Pacote de telas de exceção |
| Anotações (1) a (31) | Semana 11 | Roteiro de teste de usabilidade |
