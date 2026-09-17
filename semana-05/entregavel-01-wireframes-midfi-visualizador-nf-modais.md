# 🖼️ Entregável 1 — Wireframes Mid-Fi Navegáveis do Visualizador de NFs e Modais de Downgrade

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 05 (07/09/2026 – 13/09/2026)  
**Responsáveis:** D1 / D2 (Designers)  
**Versão:** 1.0.0  
**Telas cobertas:** SCR-02 (Extrator de NFs) · SCR-06 (Central de Alertas) · SCR-07 (Modais de Downgrade e Cancelamento) · SCR-09 (Aprovação) · SCR-10 (Relatórios e Exportação) · Portal do Titular

---

## 1. 🎯 Objetivo e Salto em Relação ao Lo-Fi

O Lo-Fi da Semana 04 resolveu **estrutura**. O Mid-Fi resolve **conteúdo, estado e
navegação**: valores reais, microcopy definitiva, comportamento de cada estado e as
transições que tornam o protótipo navegável.

| Dimensão | Lo-Fi (Semana 04) | **Mid-Fi (esta iteração)** |
|:---|:---|:---|
| Conteúdo | Rótulos genéricos | Dados representativos e microcopy final |
| Estados | Estrutura do estado | Regra que produz cada estado, com valor e prazo |
| Navegação | Mapa de telas | **Transições nomeadas entre telas** (Seção 9) |
| Regras | Referenciadas | Exibidas na própria interface (PAT-08) |
| Fora de escopo | Cor, tipografia, ícones | Cor, tipografia, ícones — Semana 06 |

---

## 2. 🧾 SCR-02 — Extrator de NFs e Auditoria de Divergência

### 2.1. M-01 — Lista ordenada por severidade

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]                      [!] 3   [ Ana C. v ]                   |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Faturas                                                          |
| [#] Inventario   | ------------------------------------------------------------------------- |
|>[#] Faturas      | Extrator de NFs e Auditoria de Divergencia                                |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | | [Estado v] [Severidade v] [Periodo: set/2026 v] [ Buscar....... ] |     |
| [#] Relatorios   | +-------------------------------------------------------------------+     |
| ---------------  |                                                                           |
| [#] Config.      | 4 divergencias abertas . ordenadas por severidade            (1)          |
|                  | +-------------------------------------------------------------------+     |
|                  | | Sev | Fornecedor  | NF        | Cobrado   | Var.   | Estado       |     |
|                  | +-------------------------------------------------------------------+     |
|                  | |(X)  | Salesforce  | 12.400,00 | 17.360,00 | +40,0% | DIVERGENTE   |     |
|                  | |     |   ^ critica . prazo 2 dias uteis . renovacao bloqueada      |     |
|                  | |(!)  | HubSpot     |  3.200,00 |  3.520,00 | +10,0% | DIVERGENTE   |     |
|                  | |     |   ^ alta . prazo 5 dias uteis                               |     |
|                  | |(-)  | Notion      |    890,00 |    916,70 |  +3,0% | DIVERGENTE   |     |
|                  | |     |   ^ media . prazo 10 dias uteis                             |     |
|                  | |(-)  | Zoom        |  1.150,00 |  1.115,50 |  -3,0% | DIVERGENTE   |     |
|                  | |     |   ^ cobranca A MENOR tambem e divergencia (DEC-09)   (2)    |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | +-------------------------------------------------------------------+     |
|                  | | Figma       |  2.150,00 |  2.150,00 |  0,00% | CONCILIADA        |      |
|                  | | Adobe CC    |  USD 900  |  4.920,00 | +5,13% | CONCILIADA (cambio)|     |
|                  | |   ^ variacao explicada por cambio e IOF                     (3)   |     |
|                  | | Slack       |  4.300,00 |     --    |   --   | SEM CONCILIACAO   |      |
|                  | |   ^ janela D+15 esgotada sem lancamento pareavel                  |     |
|                  | | Canva Pro   |  1.600,00 |     --    |   --   | PEND. REVISAO     |      |
|                  | |   ^ confianca do OCR 71% no valor total                           |     |
|                  | +-------------------------------------------------------------------+     |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (1) | Lista ordenada por **severidade**, não por data — a divergência de 40% vem antes da de 3% | RI-06, RN05.7 |
| (2) | Cobrança **a menor** também é divergência; o sinal é preservado na exibição | DEC-09 |
| (3) | Variação legítima recebe explicação automática em vez de virar alarme falso | RI-10, RN05.5 |

**Estados representados:** `Divergente` (4 severidades), `Conciliada`, `Conciliada (câmbio)`,
`Sem conciliação`, `Pendente de revisão` — todos os desfechos da tabela de decisão D1–D10.

### 2.2. M-02 — Detalhe da divergência

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]                      [!] 3   [ Ana C. v ]                   |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Faturas > Salesforce NF 4471                                     |
| [#] Inventario   | ------------------------------------------------------------------------- |
|>[#] Faturas      | Divergencia critica +40,0%          [ CORRIGIR LEITURA ] [ NOTIFICAR ]    |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +--------------------------------+  +-------------------------------+     |
| [#] Aprovacoes   | | DOCUMENTO ORIGINAL       (4)   |  | CAMPOS EXTRAIDOS        (5)   |     |
| [#] Relatorios   | |                                |  |                               |     |
| ---------------  | |  +--------------------------+  |  | Numero      4471       (98%)  |     |
| [#] Config.      | |  | NOTA FISCAL DE SERVICO   |  |  | Emitente    Salesforce (96%)  |     |
|                  | |  |                          |  |  | CNPJ        **.***.**  (91%)  |     |
|                  | |  | Numero: 4471             |  |  | Emissao     28/08/2026 (94%)  |     |
|                  | |  | Emissao: 28/08/2026      |  |  | Moeda       BRL        (99%)  |     |
|                  | |  | [[ VALOR 12.400,00 ]]<---+--+--+>Valor total 12.400,00  (97%)  |     |
|                  | |  | Tomador: ***.***.***-**  |  |  | Impostos    0,00       (88%)  |     |
|                  | |  +--------------------------+  |  | Tomador     [mascarado] (--)  |     |
|                  | |                                |  |                               |     |
|                  | |  [ - ] [ + ] [ girar ] [ v ]   |  | campo destacado na imagem     |     |
|                  | +--------------------------------+  +-------------------------------+     |
|                  |                                                                           |
|                  | +-------------------------------------------------------------------+     |
|                  | | COMPARACAO NF x CARTAO                                     (6)    |     |
|                  | |                                                                   |     |
|                  | |   Nota fiscal 4471          Lancamento cartao 28/08               |     |
|                  | |   R$ 12.400,00              R$ 17.360,00                          |     |
|                  | |   -------------------------------------------------------------   |     |
|                  | |   Diferenca: R$ 4.960,00  (+40,0%)                          (7)   |     |
|                  | |   [?] como calculamos: (17.360,00 - 12.400,00) / 12.400,00        |     |
|                  | |                                                                   |     |
|                  | |   Severidade CRITICA . destinatario CFO . prazo 2 dias uteis      |     |
|                  | |   Renovacao automatica desta assinatura foi bloqueada             |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | Ao corrigir a leitura, a conciliacao e refeita e o registro       (8)     |
|                  | anterior e preservado na trilha de auditoria.                             |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (4) | Documento original à esquerda com controles de zoom e rotação | RI-09 |
| (5) | Campos extraídos à direita com **confiança por campo**; o campo focado é destacado na imagem | RI-09, RN05.6 |
| (6) | Comparação NF × cartão lado a lado, sem modal sobre modal | RI-08, ANT-06 |
| (7) | Tooltip com a **fórmula em reais**, não apenas o percentual — resolve a dor USR-01 | RI-07, RN05.2 |
| (8) | Aviso explícito de que corrigir reprocessa e **preserva** o registro anterior | RI-11, RN05.10 |

> **Campos pessoais:** `Tomador` aparece permanentemente mascarado e o CPF nunca chega a ser
> gravado — a máscara é do dado persistido, não apenas da exibição (RN05.8, DP-03).

---

## 3. 🔔 SCR-06 — Central de Alertas e Calendário de Renovação

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]                      [!] 3   [ Ana C. v ]                   |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Alertas                                                          |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Central de Alertas e Calendario de Renovacao   [Mes v] [Lista|Cal.]       |
| [#] Ociosas      |                                                                           |
|>[#] Alertas      | SETEMBRO 2026                                                             |
| [#] Aprovacoes   | +-------------------------------------------------------------------+     |
| [#] Relatorios   | | seg | ter | qua | qui | sex | sab | dom |                   (9)   |     |
| ---------------  | +-------------------------------------------------------------------+     |
| [#] Config.      | |  7  |  8  |  9  | 10  | 11  | 12  | 13  |                         |     |
|                  | |     |     |[!]  |     |     |     |     |  [!] 1 renovacao        |     |
|                  | | 14  | 15  | 16  | 17  | 18  | 19  | 20  |                         |     |
|                  | |     |[!!] |     |     |[!]  |     |     |  [!!] 3 renovacoes      |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | PROXIMAS RENOVACOES                                                       |
|                  | +-------------------------------------------------------------------+     |
|                  | | Assinatura   | Ciclo | Cobranca   | Faltam | Valor     | Acao     |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | Salesforce   | Anual | 15/10/2026 | 32 d   | 148.800   | [ ... ]  |     |
|                  | |   [!] 8 de 30 licencas ociosas . economia R$ 39.680/ano   (10)    |     |
|                  | |       [ AVALIAR DOWNGRADE ANTES DE RENOVAR ]                      |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | HubSpot      | Mensal| 22/09/2026 | 9 d    |   3.200   | [ ... ]  |     |
|                  | |   [!] SEM RESPONSAVEL . escalado ao gestor do centro de custo(11) |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | Zoom         | Mensal| 25/09/2026 | 12 d   |   1.150   | [ ... ]  |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | Miro         | Anual | 20/09/2026 | 7 d    |   9.400   | [ ... ]  |     |
|                  | |   [!] antecedencia minima de 45 d nao pode ser cumprida:   (12)   |     |
|                  | |       assinatura descoberta pela varredura em 09/09/2026          |     |
|                  | +-------------------------------------------------------------------+     |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (9) | Alternância entre calendário e lista; o calendário mostra a densidade de renovações do mês | RI-19 |
| (10) | Alerta de renovação **destaca licenças ociosas** e oferece downgrade antes de renovar | RI-22, CT-06.6 |
| (11) | Assinatura órfã sinalizada e escalada automaticamente | RI-23, DEC-18 |
| (12) | Selo de ressalva quando a antecedência mínima da RN03 não pôde ser cumprida | RI-21, CT-06.4 |

**Microcopy de "Faltam N dias":** contagem em dias corridos, com antecipação para o dia útil
anterior quando a data cai em fim de semana ou feriado (DEC-17).

---

## 4. ⚙️ SCR-07 — Modais de Downgrade e Cancelamento

### 4.1. M-04 — Downgrade dentro da alçada

```text
+----------------------------------------------------------------------------------------------+
|  MODAL - APLICAR DOWNGRADE (SCR-07)                                        [x]               |
|  ------------------------------------------------------------------------------------------  |
|                                                                                              |
|  Figma . reduzir de 25 para 18 licencas                                                      |
|                                                                                              |
|  +----------------------------------------------------------------------------------+        |
|  |  IMPACTO DESTA ACAO                                                     (13)     |        |
|  |                                                                                  |        |
|  |  7 colaboradores perderao acesso:                                                |        |
|  |    COL-8f2a (Marketing) . sem uso ha 55 dias . evidencia: API                    |        |
|  |    COL-31bd (Produto)   . sem uso ha 34 dias . evidencia: API                    |        |
|  |    COL-5e19 (Vendas)    . nunca acessada     . evidencia: API                    |        |
|  |    + 4 outros                              [ ver lista completa ]                |        |
|  |                                                                                  |        |
|  |  Economia estimada: R$ 6.048,00 / ano . confianca 94%                            |        |
|  |  Alcada: nenhuma aprovacao adicional (VME afetado R$ 504,00/mes)      (14)       |        |
|  +----------------------------------------------------------------------------------+        |
|                                                                                              |
|  +----------------------------------------------------------------------------------+        |
|  |  [~] Voce tera 72 horas para reverter antes que enviemos ao fornecedor  (15)     |        |
|  +----------------------------------------------------------------------------------+        |
|                                                                                              |
|  Para confirmar, digite o nome da assinatura:                              (16)              |
|  +----------------------------------+                                                        |
|  | Figma                            |  [v] confere                                           |
|  +----------------------------------+                                                        |
|                                                                                              |
|                                          [ Cancelar ]   [ APLICAR DOWNGRADE ]                |
+----------------------------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (13) | Prévia de impacto **nominal e pseudonimizada**: quem perde acesso, há quanto tempo não usa e por qual evidência | RI-28, RI-25 |
| (14) | Alçada calculada e exibida antes da ação, com o VME que a determinou | RI-14, DEC-19 |
| (15) | Contador da janela de arrependimento apresentado **antes** de confirmar, não depois | RI-29, RN02.9 |
| (16) | Confirmação por digitação do nome da assinatura, com validação em tempo real | RI-27, PAT-04 |

### 4.2. M-05 — Cancelamento que exige alçada superior

```text
+----------------------------------------------------------------------------------------------+
|  MODAL - CANCELAMENTO COM ALCADA (SCR-07)                                  [x]               |
|  ------------------------------------------------------------------------------------------  |
|                                                                                              |
|  Salesforce . cancelar assinatura completa                                                   |
|                                                                                              |
|  +----------------------------------------------------------------------------------+        |
|  |  [!] ESTA ACAO EXIGE APROVACAO FORMAL                                   (17)     |        |
|  |                                                                                  |        |
|  |  Regra aplicavel: RN01 . contratacoes e cancelamentos acima de                   |        |
|  |  R$ 500,00/mes exigem aprovacao de gestor financeiro.                            |        |
|  |                                                                                  |        |
|  |  VME afetado: R$ 12.400,00 / mes                                                 |        |
|  |  Alcada exigida: Administrador de TI -> Gestor Financeiro                        |        |
|  |                                                                                  |        |
|  |  A assinatura permanece ATIVA ate a aprovacao.                                   |        |
|  +----------------------------------------------------------------------------------+        |
|                                                                                              |
|  +----------------------------------------------------------------------------------+        |
|  |  ESTADO ATUAL DA ACAO (apos submeter)                                   (18)     |        |
|  |                                                                                  |        |
|  |  [x] Solicitado por Ana C. (Admin TI)          hoje 14:02                        |        |
|  |  [ ] Aprovacao do Gestor Financeiro            aguardando . prazo 3 d uteis      |        |
|  |  [ ] Janela de arrependimento de 72 h                                            |        |
|  |  [ ] Envio ao fornecedor                                                         |        |
|  +----------------------------------------------------------------------------------+        |
|                                                                                              |
|                                        [ Cancelar ]   [ SOLICITAR APROVACAO ]                |
+----------------------------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (17) | A regra que bloqueia é exibida **com o texto da política**, não apenas com o código | PAT-08, RN01 |
| (18) | Estado da ação em 4 etapas explícitas: solicitação, aprovação, arrependimento, envio | RI-15, RN01.8 |

> **Antipadrão evitado:** nenhum dos dois modais executa a ação com um clique. O M-05 sequer
> executa — apenas solicita aprovação, mantendo a assinatura `Ativa` (ANT-05, CT-07.3).

---

## 5. ✅ SCR-09 — Aprovação com Bloqueio da RN04

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]                      [!] 3   [ Ana C. v ]                   |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Aprovacoes > REQ-2026-0184                                       |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Requisicao REQ-2026-0184 . Figma . 3 licencas                             |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
|>[#] Aprovacoes   | | [!!] BLOQUEADA - LICENCAS OCIOSAS DISPONIVEIS EM ESTOQUE   (19)   |     |
| [#] Relatorios   | |                                                                   |     |
| ---------------  | | Sua empresa possui 7 licencas de Figma sem uso ha mais de 30      |     |
| [#] Config.      | | dias. A regra RN04 impede novas contratacoes enquanto houver      |     |
|                  | | licencas identicas ociosas no inventario.                         |     |
|                  | |                                                                   |     |
|                  | | [ REALOCAR 3 LICENCAS DO ESTOQUE ]   [ registrar justificativa ]  |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | +-------------------------------------------------------------------+     |
|                  | | DADOS DA REQUISICAO                                               |     |
|                  | | Solicitante   Bruno M. (Design)          Submetida em 08/09/2026  |     |
|                  | | Valor mensal  R$ 258,00 (3 x R$ 86,00)                            |     |
|                  | | VME apurado   R$ 258,00 / mes                              (20)   |     |
|                  | | Justificativa "Novos integrantes do time de produto"              |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | +-------------------------------------------------------------------+     |
|                  | | POLITICA APLICAVEL A ESTA DECISAO                          (21)   |     |
|                  | | [v] RN01 nao acionada . VME abaixo de R$ 500,00/mes               |     |
|                  | | [x] RN04 acionada . 7 licencas ociosas identicas em estoque       |     |
|                  | | [v] Segregacao de funcoes . voce nao e o solicitante              |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | LINHA DO TEMPO                                              (22)          |
|                  | +-------------------------------------------------------------------+     |
|                  | | [x] 08/09 14:02  Submetida por Bruno M.                           |     |
|                  | | [!] 08/09 14:02  Bloqueada automaticamente pela RN04              |     |
|                  | | [ ] --           Aguardando decisao . Gestor de Compras           |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  |                          [ REJEITAR ]   [ APROVAR ] (desabilitado)        |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (19) | Alerta de estoque ocioso **acima de tudo**, em bloco de destaque — resolve a dor USR-02 | RI-13, RN04 |
| (20) | VME apurado exibido, deixando visível a base sobre a qual a RN01 é avaliada | RI-14, DEC-23 |
| (21) | Checklist das três regras avaliadas, cada uma com resultado — política na decisão | RI-14, PAT-08 |
| (22) | Linha do tempo com responsável, data e etapa pendente | RI-15, PAT-07 |

**Botão desabilitado com motivo:** `APROVAR` aparece desabilitado e acompanhado da razão
visível, em vez de simplesmente sumir da tela (RI-16, RI-18).

---

## 6. 📤 SCR-10 — Central de Relatórios e Exportação

```text
+==============================================================================================+
| [=] AUDITOR SaaS   ACME S.A. [v]                      [!] 3   [ Ana C. v ]                   |
+------------------+---------------------------------------------------------------------------+
| [#] Inicio       | Inicio > Relatorios                                                       |
| [#] Inventario   | ------------------------------------------------------------------------- |
| [#] Faturas      | Central de Relatorios e Exportacao        [ EXPORTAR PDF | XLSX ]         |
| [#] Ociosas      |                                                                           |
| [#] Alertas      | +-------------------------------------------------------------------+     |
| [#] Aprovacoes   | | [Periodo: ago/2026 v] [Categoria: DevTools v] [Setor: todos v]    |     |
|>[#] Relatorios   | | 3 filtros ativos . serao aplicados tambem na exportacao    (23)   |     |
| ---------------  | +-------------------------------------------------------------------+     |
| [#] Config.      |                                                                           |
|                  | RELATORIO MENSAL DE DESPERDICIO . AGOSTO 2026                             |
|                  | +-------------------------------------------------------------------+     |
|                  | | Cobertura da apuracao: 82% da carteira                     (24)   |     |
|                  | | Os valores abaixo sao um PISO, nao um total exato.                |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | Categoria   | Licencas | Ociosas | Desperdicio/mes | Recomendacao |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | DevTools    | 115      | 22      | R$ 1.842,00     | Downgrade    |     |
|                  | | Design      | 77       | 32      | R$ 2.914,00     | Consolidar   |     |
|                  | | Comunicacao | 210      | 18      | R$   756,00     | Downgrade    |     |
|                  | +-------------------------------------------------------------------+     |
|                  | | TOTAL       | 402      | 72      | R$ 5.512,00     |              |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | +-------------------------------------------------------------------+     |
|                  | | PLANO ATUAL x PLANO SUGERIDO . Design                      (25)   |     |
|                  | |                                                                   |     |
|                  | |  ATUAL                          SUGERIDO                          |     |
|                  | |  Figma      25 lic  R$ 2.150    Figma     18 lic  R$ 1.548        |     |
|                  | |  Canva Pro  40 lic  R$ 1.600    (consolidar no Figma)             |     |
|                  | |  ----------------------------   ------------------------------    |     |
|                  | |  R$ 3.750 / mes                 R$ 1.548 / mes                    |     |
|                  | |                                 economia R$ 26.424 / ano          |     |
|                  | +-------------------------------------------------------------------+     |
|                  |                                                                           |
|                  | [escudo] Colaboradores anonimizados na tela e na exportacao   (26)        |
+------------------+---------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (23) | Contador de filtros ativos e aviso de que a exportação os herda | RI-12, ANT-04 |
| (24) | Cobertura da apuração no topo; o total é apresentado como **piso**, não como valor exato | CT-05.4, DEC-30 |
| (25) | Plano atual × plano sugerido lado a lado, com economia anual | PAT-05, REC-03 |
| (26) | Selo de anonimização válido para a tela **e** para o arquivo exportado | RI-12, CTL-15 |

---

## 7. 🙋 Portal do Titular (LGPD-02)

```text
+----------------------------------------------------------------------------------------------+
|  PORTAL DO TITULAR - LGPD (acesso do colaborador)                                            |
|  ------------------------------------------------------------------------------------------  |
|                                                                                              |
|  Ola, Bruno. Aqui estao os dados que a ACME S.A. coletou sobre o seu uso de software.        |
|                                                                                              |
|  +----------------------------------------------------------------------------------+        |
|  |  O QUE COLETAMOS                                                        (27)     |        |
|  |                                                                                  |        |
|  |  Ferramenta   | Licenca desde | Ultimo acesso | Fonte da evidencia              |         |
|  |  -------------+---------------+---------------+-------------------------        |         |
|  |  Figma        | 12/03/2026    | 04/09/2026    | API do fornecedor               |         |
|  |  GitHub       | 05/01/2026    | 09/09/2026    | Login via SSO                   |         |
|  |  Slack        | 05/01/2026    | 09/09/2026    | Login via SSO                   |         |
|  +----------------------------------------------------------------------------------+        |
|                                                                                              |
|  +----------------------------------------------------------------------------------+        |
|  |  O QUE NAO COLETAMOS                                                    (28)     |        |
|  |  Conteudo do que voce produz . mensagens . arquivos . tempo de tela              |        |
|  |  Estes dados nao podem ser usados para avaliacao de desempenho (RN02.10)         |        |
|  +----------------------------------------------------------------------------------+        |
|                                                                                              |
|  [ BAIXAR MEUS DADOS (JSON) ]   [ BAIXAR MEUS DADOS (CSV) ]              (29)                |
|  Resposta imediata e automatizada . prazo legal maximo de 15 dias                            |
+----------------------------------------------------------------------------------------------+
```

| # | Anotação | Origem |
|:--|:---|:---|
| (27) | Lista exatamente os dados coletados, com a fonte da evidência de cada um | LGPD-02, CTL-07 |
| (28) | Declaração do que **não** é coletado e da vedação de uso para avaliação de desempenho | RN02.10, DEC-03 |
| (29) | Formatos interoperáveis JSON e CSV, com resposta automatizada | DEC-28, CTL-08 |

---

## 8. 🔗 Cobertura dos Requisitos de Interface

| Requisito | Onde foi atendido | Situação |
|:---|:---|:---:|
| RI-06 Ordenação por severidade | M-01, anotação (1) | ✅ |
| RI-07 Tooltip de base de cálculo | M-02, anotação (7) | ✅ |
| RI-08 Comparação lado a lado | M-02, anotação (6) | ✅ |
| RI-09 Visualizador com destaque do campo | M-02, anotações (4) e (5) | ✅ |
| RI-10 Explicação de variação legítima | M-01, anotação (3) | ✅ |
| RI-11 Aviso de histórico preservado | M-02, anotação (8) | ✅ |
| RI-12 Export com filtros e máscara | M-07, anotações (23) e (26) | ✅ |
| RI-13 Alerta de estoque ocioso em destaque | M-06, anotação (19) | ✅ |
| RI-14 Política e alçada na decisão | M-04 (14), M-06 (20) e (21) | ✅ |
| RI-15 Linha do tempo de aprovação | M-05 (18), M-06 (22) | ✅ |
| RI-16 Ação desabilitada com motivo | M-06, rodapé | ✅ |
| RI-17 Aviso de invalidação por alteração de valor | *SCR-09, estado de edição — Semana 09* | 🟡 |
| RI-18 Justificativa obrigatória na sobreposição | M-06, botão `registrar justificativa` | ✅ |
| RI-19 Calendário de renovações | M-03, anotação (9) | ✅ |
| RI-20 E-mail com valor, data e dias restantes | *fora da interface — especificado em RN05.7 e RN03* | 🟡 |
| RI-21 Selo de ressalva de antecedência | M-03, anotação (12) | ✅ |
| RI-22 Ociosas destacadas no alerta | M-03, anotação (10) | ✅ |
| RI-23 Badge `Sem responsável` | M-03, anotação (11) | ✅ |
| RI-24 Motivo obrigatório ao ignorar alerta | M-03, ação `[ ... ]` | ✅ |
| RI-27 Confirmação por digitação | M-04, anotação (16) | ✅ |
| RI-28 Prévia de impacto | M-04, anotação (13) | ✅ |
| RI-29 Contador de arrependimento | M-04, anotação (15) | ✅ |
| RI-30 Bloqueio por uso retomado | *estado de exceção — Semana 10* | 🟡 |

**Acumulado:** 28 dos 31 requisitos de interface atendidos em wireframe (8 na Semana 04, 20
nesta iteração). Os 3 restantes (`RI-17`, `RI-20`, `RI-30`) dependem de telas ou artefatos
previstos para as Semanas 09 e 10.

---

## 9. 🧭 Mapa de Navegação do Protótipo

Transições que tornam o conjunto **navegável** — a base do protótipo interativo da Semana 11.

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

## 10. ✅ Critérios de Aceite do Kit Mid-Fi

1. Toda tela que aplica uma regra de negócio **exibe a regra**, com texto legível, não apenas com o código.
2. Todo número financeiro vem acompanhado de período, escopo e base de cálculo acessível.
3. Nenhuma ação irreversível é executada a partir de um único clique.
4. Todo estado que decorre de regra apresenta o parâmetro que o produziu (dias, percentual, valor).
5. Nenhum dado pessoal aparece fora do perfil Administrador de RH, em tela ou em exportação.
6. Toda transição do mapa da Seção 9 tem origem e destino desenhados neste kit ou no Lo-Fi.

---

## 11. ⚠️ Decisões e Pendências

| ID | Item | Situação |
|:---|:---|:---|
| DEC-37 | Lista de divergências ordena por severidade, nunca por data | ✅ Decidido |
| DEC-38 | Prévia de impacto exibe pseudônimo, setor, dias sem uso e fonte da evidência antes de qualquer ação destrutiva | ✅ Decidido |
| DEC-39 | Ação bloqueada aparece desabilitada com o motivo visível, em vez de ser omitida da tela | ✅ Decidido |
| DEC-40 | Contador da janela de 72 h é exibido **antes** da confirmação, não apenas depois | ✅ Decidido |
| P-15 | Densidade da tabela de licenças com 4.000+ linhas | 🟡 Mitigada com paginação e filtros; medir na Semana 10 |
| P-16 | Gráfico de ROI em tablet | 🟡 Segue aberta — Semana 06, junto ao Design System |
| P-20 | Visualizador de PDF em tablet: zoom e rotação exigem gesto próprio | Semana 06 (RNF-09) |
| P-21 | Texto integral das políticas exibidas em tela (RN01, RN04) precisa de revisão jurídica | Semana 06 |

---

## 12. 🔗 Rastreabilidade

| Item | Consumido em | Entregável de destino |
|:---|:---|:---|
| M-01 e M-02 | Semana 08 | UI Hi-Fi do Bloco A |
| M-03 a M-07 | Semana 09 | UI Hi-Fi do Bloco B |
| M-08 Portal do Titular | Semana 09 | Painel LGPD |
| Seção 9 (transições) | Semana 11 | Protótipo navegável unificado |
| Anotações (1) a (29) | Semana 11 e 12 | Roteiro de teste de usabilidade |
| Microcopy das regras | Semana 06 | Design System — componentes de mensagem |
