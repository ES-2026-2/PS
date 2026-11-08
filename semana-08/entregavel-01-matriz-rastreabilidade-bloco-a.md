# Entregável 1 — Matriz de Rastreabilidade Preenchida para o Bloco A (REQ-01 ao REQ-05)

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 08 (28/09/2026 – 04/10/2026) — UI Hi-Fi do Bloco A  
**Responsável:** AR1 (Analista de Requisitos)  
**Versão:** 1.0.0  
**Situação das decisões:** DEC-76 a DEC-86 são **propostas** até a ratificação da equipe (Seção 13.1)  
**Escopo:** REQ-01 a REQ-05 · UC-01 a UC-05 e UC-13 · SCR-01 a SCR-05 · RN02 · RN05 · RNF-01, RNF-04 a RNF-10 · LGPD-01

---

## 1. Objetivo

A matriz da Seção 3 de [`estudo_caso1.md`](../estudo_caso1.md) lista os 10 requisitos com
*"Status UI/UX: Concluído"*. Essa coluna é a **meta** do projeto, não uma medição: nenhum
requisito tinha, até aqui, tela de alta fidelidade. Este documento preenche a matriz do
**Bloco A** com evidência — para cada requisito, todos os artefatos das Semanas 01 a 06 que o
realizam, a situação de cada um e o que falta para a UI Hi-Fi desta iteração.

| Pergunta | Seções |
|:---|:---|
| Todo requisito do Bloco A chega a um cenário de teste e a uma tela? *(para frente)* | 4, 5 e 6 |
| Todo elemento de tela e componente nasce de um requisito? *(para trás)* | 7 e 8 |
| Os artefatos concordam entre si, inclusive nos números? *(consistência)* | 9 e 10 |
| O que o Hi-Fi do Figma precisa cumprir para o requisito ser "Concluído"? | 11 |
| A Semana 07 concorda com as Semanas 06 e 08? | 12 |

> **Sobre o Entregável 2 (Layouts Hi-Fi no Figma):** a execução no Figma é da D1 e está
> **pendente**, com responsável e prazo registrados em
> [`entregavel-02-layouts-hifi-figma.md`](entregavel-02-layouts-hifi-figma.md). Os insumos que a matriz produz para ela — massa de dados canônica
> (Seção 10) e lista de verificação do Hi-Fi (Seção 11) — estão aqui porque nascem da análise
> de rastreabilidade.

---

## 2. Escopo, Fontes e Dependências

### 2.1. Composição do Bloco A

| Req | Requisito | História | Casos de uso | Tela | Especificado em |
|:---|:---|:---|:---|:---|:---|
| REQ-01 | Integração via API com ERPs e faturamento | US-01 | UC-01 | SCR-01 | Semana 02 (AR1) |
| REQ-02 | Extração de NF e recibos do e-mail (OCR) | US-02 | UC-02, UC-13 | SCR-02 | Semana 02 (AR1) |
| REQ-03 | Catalogação automática por IA | US-03 | UC-03 (fluxos 3a e 6a) | SCR-03 | Semana 02 (AR1) |
| REQ-04 | Licenças ociosas e duplicadas | US-04 | UC-04 | SCR-04 | Semana 03 (AR2) |
| REQ-05 | Relatório mensal de desperdício | US-05 | UC-05 | SCR-05 | Semana 03 (AR2) |

**REQ-04 e REQ-05 pertencem ao Bloco A (DEC-77).** O cronograma divide os blocos em REQ-01 a
05 e REQ-06 a 10, mas o título da Semana 03 — *"Detalhamento do Bloco B (Req. 04 ao 10)"* —
levou a AR2 a especificar US-04 e US-05 com a *tag* `@BlocoB`. Para rastreabilidade e Hi-Fi,
vale a divisão do cronograma: os dois requisitos ficam com AR1 e D1 a partir desta iteração, e
as *tags* passam a ser lidas como `@BlocoA` (correção CU-09 do [Entregável 3](entregavel-03-diagramas-uml.md)).

### 2.2. Fontes rastreadas

| Sigla | Documento |
|:---|:---|
| S1·E1 | [Matriz de Conformidade de Segurança e Privacidade](../semana-01/entregavel-01-matriz-conformidade-seguranca-privacidade.md) |
| S1·E2 | [Arquitetura de Informação e Mapa de Navegação](../semana-01/entregavel-02-arquitetura-informacao-mapa-navegacao.md) |
| S2·E1 | [BDD/Gherkin REQ-01 a REQ-03](../semana-02/entregavel-01-especificacao-bdd-gherkin-req01-req03.md) |
| S2·E2 | [Matriz de Regras de OCR e Divergência (RN05)](../semana-02/entregavel-02-matriz-regras-ocr-divergencia-rn05.md) |
| S2·E4 | [Casos de Uso v1.0 e descrições UC-01 a UC-03](../semana-02/entregavel-04-diagramas-uml.md) |
| S3·E1 | [BDD/Gherkin REQ-04 a REQ-10](../semana-03/entregavel-01-especificacao-bdd-gherkin-req04-req10.md) |
| S3·E2 | [RN01 e RN02 — sub-regras e tabelas de decisão](../semana-03/entregavel-02-fluxo-aprovacao-gastos-rn01-trava-inatividade-rn02.md) |
| S3·E4 | [Atividades v1.0 (AT-01) e descrições UC-04 a UC-10](../semana-03/entregavel-04-diagramas-uml.md) |
| S4·E1 | [Motor de IA e algoritmo de consolidação](../semana-04/entregavel-01-fluxogramas-motor-ia-algoritmo-consolidacao.md) |
| S4·E2 | [Kit de Wireframes Lo-Fi (W-00 a W-08)](../semana-04/entregavel-02-kit-wireframes-lofi.md) |
| S5·E1 | [Wireframes Mid-Fi (M-01 a M-08)](../semana-05/entregavel-01-wireframes-midfi-visualizador-nf-modais.md) |
| S5·E2 | [Validação do RNF-04 e do RNF-10](../semana-05/entregavel-02-relatorio-validacao-rnf04-rnf10.md) |
| S5·E3 | [Diagramas de Sequência v1.0 (SEQ-01 a SEQ-04)](../semana-05/entregavel-03-diagramas-uml.md) |
| S6·E1 | [Design System v1.0](../semana-06/entregavel-01-design-system-saas-b2b.md) ¹ |
| S6·E2 | [Dicionário de Dados e Anonimização](../semana-06/entregavel-02-dicionario-dados-anonimizacao-lgpd01.md) |
| S6·E3 | [Máquinas de Estado v1.0 e Classes v0.1](../semana-06/entregavel-03-diagramas-uml.md) |
| S7·E1 | [OpenAPI 3.1 das integrações de ERP](../semana-07/entregavel-01-openapi-integracoes-erp.yaml) |
| S7·E2 | [Biblioteca de componentes UI (protótipo)](../semana-07/entregavel-02-biblioteca-componentes-ui.md) |
| S7·E3 | [Pacotes, recorte de classes e SEQ-05 (v0.1)](../semana-07/entregavel-03-diagramas-uml.md) |
| S8·E3 | [Diagrama de Classes v1.0 e Pacotes v1.0 desta iteração](entregavel-03-diagramas-uml.md) |

> ¹ **O arquivo do Design System está corrompido no repositório (P-37).** O commit `60dc076`
> substituiu o conteúdo de `entregavel-01-design-system-saas-b2b.md` por uma revisão do
> dicionário de dados. As referências a `CMP-xx`, `MSG-xx`, `TPL-xx`, `BD-x` e à Seção 10
> (badges) usam a última versão íntegra, do commit `c13f5dd`. A revisão do dicionário que está
> no lugar dele traz pendências numeradas P-30 e P-31, que colidem com as da Semana 07 (P-38).
> Esta iteração não altera arquivos de outras semanas; as duas correções ficam registradas.

### 2.3. Insumos da Semana 07

A Semana 07 entrou no repositório depois da primeira versão desta matriz. Ela entrega a
OpenAPI das integrações de ERP (RNF-08), o protótipo da biblioteca de componentes e um
rascunho UML v0.1 — e declara que foi preparada **sem acesso aos entregáveis da Semana 06**,
deixando a reconciliação como pendência própria (P-30 da Semana 07). Esta matriz faz essa
reconciliação no recorte do Bloco A (Seção 12) e o Entregável 3 entrega o **Diagrama de
Classes v1.0** e o **Diagrama de Pacotes v1.0**, que a Semana 07 deixou em aberto.

> **Numeração.** A Semana 07 usa DEC-66 a DEC-75 e P-30 a P-36. As decisões desta iteração
> começam em **DEC-76** e as pendências em **P-37**.

---

## 3. Método

### 3.1. Camadas rastreadas

| Camada | Conteúdo | Identificadores |
|:---|:---|:---|
| **L1** Requisito e regras | RF, RN e sub-regras, RNF, LGPD, controles, decisões | `REQ`, `RN05.x`, `RN02.x`, `RNF`, `CTL`, `DEC` |
| **L2** História | História de usuário | `US` |
| **L3** Caso de uso | Caso de uso e fluxos alternativos | `UC` |
| **L4** Cenário | Critério de aceite executável | `CT` |
| **L5** Comportamento UML | Atividade, sequência, máquina de estados | `AT`, `SEQ`, máquina |
| **L6** Estrutura | Entidade do dicionário e classe de domínio | `ENT`, classe |
| **L7** Regra derivada | Estágios, sinais e recomendações do motor | `E0`–`E6`, `SD`, `REC` |
| **L8** Tela | Tela, wireframe, anotação e transição | `SCR`, `W`, `M`, `T`, `RI` |
| **L9** Design System | Componente, mensagem, *template*, badge | `CMP`, `MSG`, `TPL` |
| **L10** Hi-Fi | Quadro no Figma | Entregável 2 (D1) |

### 3.2. Legenda de situação

| Símbolo | Significado |
|:---:|:---|
| ✓ | **Rastreado** — o artefato existe, está vigente e concorda com os demais |
| ◐ | **Parcial** — existe, mas cobre só parte do requisito |
| ↻ | **Desatualizado** — existe, mas contradiz uma decisão posterior |
| ✗ | **Lacuna** — não existe |
| ⧗ | **Pendente** — depende de iteração futura ou de artefato ausente |

### 3.3. Critério de "Concluído" (DEC-76)

Um requisito só é **Concluído** em UI/UX quando as camadas L1 a L9 estão sem ✗ e sem ↻, e o
quadro Hi-Fi (L10) passou pela lista de verificação da Seção 11. Pelo critério, **nenhum dos
cinco requisitos do Bloco A estava Concluído no início desta iteração**. A situação usada a
partir daqui tem quatro níveis:

| Nível | Condição |
|:---|:---|
| Especificado | L1 a L4 completas |
| Pronto para Hi-Fi | L1 a L9 sem lacuna de severidade Alta em aberto, ou com a lacuna encaminhada a um item `HF-xx` |
| Hi-Fi entregue | Quadro do Figma existe para todas as telas do requisito |
| **Concluído** | Hi-Fi aprovado contra todos os itens `HF-xx` do requisito |

---

## 4. Matriz-Síntese do Bloco A

| Req | Regras vinculadas (L1) | Cenários (L4) | Comportamento (L5) | Estrutura (L6) | Tela e wireframes (L8) | Componentes (L9) | Lacunas | Situação |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **REQ-01** | RNF-01 · RNF-04 · RNF-05 · RNF-08 · DEC-02 · CTL-02/03/12/13 | CT-01.1–01.8 ↻ | SEQ-01 ✓ · SEQ-05 ✓ · `Conexão` ↻ | ENT-06 ✓ · classe v1.0 ✓ | SCR-01: W-01, W-02, W-03, W-08 B/C ◐ | CMP-03, 08, 13, 16, 20 ✓ | LR-01 a 06 | Pronto para Hi-Fi, com ressalvas |
| **REQ-02** | RN05.1–05.10 · RNF-07 · LGPD-01 · DEC-09, 42, 46, 59, 60 | CT-02.1–02.13 ✓ | AT-01 ✓ · SEQ-02 ✓ · `Fatura` ✓ | ENT-13 a 16 ✓ · classe v1.0 ✓ | SCR-02: M-01, M-02 ◐ | CMP-08, 12, 18, 21 ✓ | LR-07 a 11 | Pronto para Hi-Fi, com ressalvas |
| **REQ-03** | RNF-10 · RNF-06 · LGPD-01 · DEC-14, 44, 45 | CT-03.1–03.7 ↻ | `Assinatura` (`Mapeada`) ◐ · sem máquina de fornecedor | ENT-07 ✓ · classe v1.0 ✓ | SCR-03: W-06, Hi-Fi SCR-03a/03b ✓ | CMP-03, 04, 08, 09 ✓ | LR-13 a 16 | Pronto para Hi-Fi, com ressalvas |
| **REQ-04** | RN02.1–02.10 · RNF-10 · LGPD-01 · DEC-15, 16, 56, 61 | CT-04.1–04.12 ◐ | `Licença` ✓ · `Assinatura` ✓ | ENT-08 a 12 ✓ · classe v1.0 ✓ | SCR-04: W-07, Hi-Fi ✓ | CMP-05, 07, 08, 22 ✓ | LR-16, 18, 26 | Pronto para Hi-Fi, com ressalvas |
| **REQ-05** | RNF-06 · DEC-21, 30 · PAT-05, 06 · RN02.4 | CT-05.1–05.5 ✓ | `Recomendação` ◐ | ENT-17, 18 ✓ · relatório na classe v1.0 ✓, sem `ENT` no dicionário ◐ | SCR-05: Hi-Fi entregue ✓ | CMP-06, 07, 11, 12 ✓ | LR-23 | Pronto para Hi-Fi, com ressalvas |

### 4.1. Cobertura numérica

| Indicador | REQ-01 | REQ-02 | REQ-03 | REQ-04 | REQ-05 | Bloco A |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Cenários existentes | 8 | 13 | 7 | 12 | 5 | **45** |
| Cenários propostos nesta entrega (Seção 9.2) | 1 | 2 | 1 | 2 | 2 | **8** |
| Requisitos de interface (`RI`) vinculados | 5 | 6 | — | 3 | — | 14 |
| Wireframes que realizam a tela | 4 | 2 | 1 | 1 | 0 ¹ | 8 |
| Componentes do Design System usados | 5 | 6 | 4 | 5 | 5 | 15 distintos |
| Lacunas encontradas (`LR`) | 6 | 5 | 5 | 7 | 6 | **28** ² |

> ¹ O conteúdo do REQ-05 aparece no M-07, desenhado e rotulado como SCR-10 (LR-21).  
> ² LR-16, LR-25 e LR-26 afetam dois requisitos e são contadas uma vez no total; LR-27 e
> LR-28 são transversais e entram só no total.

---

## 5. Matriz Detalhada por Requisito

### 5.1. REQ-01 — Integração via API com ERPs e sistemas de faturamento

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RNF-01 (AES-256), CTL-02, CTL-03, CH-05/CH-06 | S1·E1, S6·E2 | ✓ | Credencial no cofre; removida ao revogar |
| L1 | RNF-04 — varredura inicial < 5 min | S5·E2 | ✓ | Lido como janela de 90 dias, p95 por conexão (DEC-41, 43) |
| L1 | **RNF-05 — 50.000 transações/min por cliente** | S1·E1 (só CTL-10) | ✗ | Sem cenário, sem validação, sem condição de arquitetura (LR-05) |
| L1 | RNF-08 — REST com OpenAPI | S7·E1 | ◐ | Cobre só ERP (`/erp/*`, DEC-66 da S7): cartão (FT-01) e e-mail por OAuth (FT-03, FT-04, CT-01.2) sem endpoint (LR-06) |
| L1 | DEC-02 — credencial somente-leitura · CTL-13 consentimento | S2·E1 | ✓ | — |
| L2 | US-01 | S2·E1 | ✓ | — |
| L3 | UC-01 (+ `<<include>>` 2FA, `<<extend>>` Tratar falha de conexão) | S2·E4 | ✓ | — |
| L4 | CT-01.1 a CT-01.8 | S2·E1 | ↻ | Rótulo `Ativo` × estado `Ativa` (LR-03); CT-01.1 sem DEC-41/43 (LR-04) |
| L5 | SEQ-01 v1.0 · SEQ-05 (ERP) · máquina `Conexão` v1.0 | S5·E3, S7·E3, S6·E3 | ↻ | Máquina diz `Ativa` só após a primeira varredura; CT-01.1, UC-01 e a OpenAPI dizem após validar a credencial (RS-11 · DEC-85) |
| L6 | ENT-06 Conexão · ENT-01 Tenant · classes `Conexao` e `Sincronizacao` | S6·E2, S8·E3 | ✓ | A `ConexaoErp` da S7 vira `Conexao` com `fonte` (RS-04) |
| L8 | SCR-01: W-01 (onboarding), W-02 (transparência), W-03 (saúde), W-08 B e C | S4·E2 | ◐ | Formulário de chave de API não desenhado (LR-01); revogar e tentar novamente sem controle (LR-02) |
| L8 | RI-01 a RI-05 | S4·E2, Seção 8 | ✓ | RI-03 depende do texto da P-17 |
| L9 | CMP-16 (vazio, progresso, banner), CMP-08, CMP-03, CMP-13, CMP-20 | S6·E1, Seção 12 | ✓ | Microcopy de CT-01.4 e W-08 C fora do catálogo `MSG` (LR-27) |

### 5.2. REQ-02 — Leitura e extração de notas fiscais e recibos do e-mail

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RN05 e RN05.1 a RN05.10 · tabela D1–D10 · casos BR-01 a BR-10 | S2·E2 | ✓ | Detalhe por sub-regra na Seção 6 |
| L1 | RNF-07 · CTL-09 · DP-06 | S1·E1 | ✓ | — |
| L1 | LGPD-01 · AN-01, AN-03, AN-04, AN-05 · DEC-59, DEC-60 | S6·E2 | ✓ | Máscara no dado persistido e na imagem |
| L1 | DEC-42 (OCR fora do caminho crítico) · DEC-46 (OCR com ACL) | S5·E2, S5·E3 | ✓ | — |
| L2 | US-02 | S2·E1 | ✓ | — |
| L3 | UC-02 (+ `<<extend>>` Tratar divergência) · UC-13 | S2·E4, S3·E4 | ✓ | — |
| L4 | CT-02.1 a CT-02.8 · CT-02.9 a CT-02.13 | S2·E1, S2·E2 | ✓ | CT-02.7 sem DEC-41/43 (LR-04) |
| L5 | AT-01 v1.0 · SEQ-02 v1.0 · máquina `Fatura` v1.0 | S3·E4, S5·E3, S6·E3 | ◐ | `NF ausente` (BR-07) está na AT-01 e em nenhum outro artefato (LR-09) |
| L6 | ENT-13 a ENT-16 · classes `Fatura`, `CampoExtraido`, `Conciliacao`, `LancamentoCartao` | S6·E2, S8·E3 | ✓ | A OpenAPI não tem os estados `tratada` e `revogada` (RS-01, RS-02) |
| L8 | SCR-02: M-01 (lista por severidade), M-02 (detalhe) · T-01 a T-04 | S5·E1 | ◐ | Sem controle para `Tratada` (LR-07) nem para `Descartada` (LR-08); `NOTIFICAR` ambíguo (LR-10) |
| L8 | RI-06 a RI-11 | S5·E1, Seção 8 | ✓ | — |
| L9 | CMP-08, CMP-03, CMP-18, CMP-12, CMP-21, CMP-09 · MSG-03, MSG-04 | S6·E1, S7·E2 | ◐ | Badges `Divergente` e `Pendente de revisão` do protótipo da S7 com ícone e tom diferentes do Design System (RS-09) |

### 5.3. REQ-03 — Catalogação automática por categoria

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RNF-10 · DEC-44 (E2 em 0,80) · DEC-45 (FP-A + FP-B) | S5·E2 | ✓ | Projeção de 1,49% contra teto de 2% |
| L1 | RNF-06 (inventário < 2 s) · LGPD-01 (CT-03.7) · DEC-14 (desfazer consolidação) | S2·E1, S4·E1 | ✓ | — |
| L2 | US-03 | S2·E1 | ✓ | — |
| L3 | UC-03 (fluxo alternativo 3a ex-UC-14, 6a) | S2·E4, S3·E4 | ↻ | 3a ainda diz *"inferior a 70%"* e *"aciona UC-14"* (LR-13) |
| L4 | CT-03.1 a CT-03.7 | S2·E1 | ↻ | CT-03.2 cita estado inexistente (LR-15); CT-03.5 usa 3+ fornecedores (LR-16) |
| L5 | Máquina `Assinatura` (`Em catalogação` → `Vigente` / `Descartada`) | S6·E3 | ◐ | Fornecedor não tem máquina, por decisão (DEC-81) |
| L6 | ENT-07 Fornecedor SaaS · classe `FornecedorSaaS` | S6·E2, S8·E3 | ✓ | — |
| L7 | E0, E1, E2 · taxonomia C-01 a C-12 · SD-03 | S4·E1 | ↻ | Limiar de E1 em três versões (LR-14) |
| L8 | SCR-03: W-06 · Hi-Fi SCR-03a (Inventário) e SCR-03b (Detalhe do Fornecedor) | S4·E2, S8·E2 | ✓ | Detalhe desenhado na Semana 08 (HF-09): assinaturas, licenças por pseudônimo, grafia alternativa com "Desfazer", "Corrigir categoria" e "Não é SaaS" — fecha CT-03.3, 03.4, 03.6 e 03.7 (LR-12) |
| L9 | CMP-04 (confiança), CMP-08, CMP-09, CMP-03 | S6·E1 | ✓ | — |

### 5.4. REQ-04 — Licenças duplicadas ou sem uso ativo

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RN02.1 a RN02.10 · tabela O1–O9 · casos BI-01 a BI-10 · hierarquia E1–E4 | S3·E2 | ✓ | Detalhe por sub-regra na Seção 6 |
| L1 | DEC-56 (pool) · DEC-61 (assinatura ociosa) · DEC-57 (afastamento sem motivo) | S6·E2, S6·E3 | ✓ | — |
| L2 | US-04 | S3·E1 | ✓ | *Tag* `@BlocoB` (LR-26) |
| L3 | UC-04 | S3·E4 | ✓ | — |
| L4 | CT-04.1 a CT-04.8 · CT-04.9 a CT-04.12 | S3·E1, S3·E2 | ◐ | **"Duplicadas" sem nenhum cenário** (LR-17) |
| L5 | Máquinas `Licença` e `Assinatura` v1.0 · SY-09, SY-10 | S6·E3 | ◐ | Contestação por E4 sem transição (LR-18) |
| L6 | ENT-08 a ENT-12, ENT-03, ENT-05 · classes `Licenca`, `PoolDeLicencas` | S6·E2, S8·E3 | ✓ | O recorte da S7 punha o pseudônimo e os dias sem uso na licença; a v1.0 segue a S6 (RS-05, RS-06) |
| L7 | SD-01, SD-02, SD-04, SD-07 · REC-01, REC-06 | S4·E1 | ◐ | SD-04 e SD-07 sem cenário nem tela (LR-17) |
| L8 | SCR-04: W-07 · Hi-Fi (Semana 08) · W-08 D · T-07, T-09 | S4·E2, S5·E1, S8·E2 | ✓ | Ação "Recusar (motivo obrigatório)" (LR-19, HF-13), assinatura de pool com capacidade/pico/ociosa (LR-20, HF-16) e rótulo completo "Sem telemetria" (BD-2, HF-14) entregues na Hi-Fi |
| L8 | RI-25, RI-26, RI-31 | S4·E2, Seção 8 | ✓ | — |
| L9 | CMP-07, CMP-08, CMP-05, CMP-22, CMP-16 · MSG-05, 06, 07, 12, 13 | S6·E1, S7·E2 | ◐ | Badge `Ociosa` do protótipo da S7 com ícone de relógio, contra o triângulo do Design System (RS-09) |

### 5.5. REQ-05 — Relatório mensal de desperdício com planos alternativos

| Camada | Artefato | Fonte | Situação | Observação |
|:---|:---|:---|:---:|:---|
| L1 | RNF-06 · DEC-21 (realizada × potencial) · DEC-30 (cobertura no topo) · PAT-05, PAT-06 | S3·E1, S4·E2 | ✓ | — |
| L1 | Definição de "desperdício" | — | ✗ | Nenhum artefato diz como o valor é calculado (IC-03) — fixada na DEC-78 |
| L2 | US-05 | S3·E1 | ✓ | *Tag* `@BlocoB` (LR-26) |
| L3 | UC-05 (`<<include>>` Aplicar anonimização) | S3·E4 | ✓ | — |
| L4 | CT-05.1 a CT-05.5 | S3·E1 | ◐ | Nada protege o mês fechado contra recálculo (LR-23) |
| L5 | Máquina `Recomendação` v1.0 | S6·E3 | ✓ | — |
| L6 | ENT-17, ENT-18 · classes `Recomendacao` e `ApuracaoMensalDesperdicio` | S6·E2, S8·E3 | ◐ | Relatório mensal modelado na classe v1.0 (LR-23); falta a `ENT-25` no dicionário |
| L7 | E3 a E6 · REC-01 a REC-07 · SD-05, SD-06, SD-08 | S4·E1 | ↻ | REC-01 e REC-03 disputam as mesmas licenças (LR-25) |
| L8 | SCR-05 | S8·E2 | ✓ | Desenhada na Semana 08 (HF-18, HF-19), sem precedente de wireframe (LR-21); CT-05.1 (recomendações ordenadas por economia) e CT-05.3 (realizada × potencial em cards separados) cobertos (LR-22) |
| L9 | TPL-04 · CMP-06, CMP-07, CMP-11, CMP-12, CMP-16 · MSG-13, MSG-14 | S6·E1, S7·E2 | ◐ | CMP-11 aparece só no protótipo da S7, que rotula o desperdício como "potencial" (LR-24, RS-10) |

---

## 6. Matriz de Regras, RNFs e LGPD → Verificação

Granularidade de sub-regra: cada linha responde *"onde a regra é testada, modelada e vista"*.

### 6.1. RN05 — Auditoria de NF (REQ-02)

| Sub-regra | Cenário | Elemento UML | Tela · anotação | DS | Situação |
|:---|:---|:---|:---|:---|:---:|
| RN05.1 Tolerância de 1% | CT-02.4, 02.5, 02.8 | `Fatura`: `Extraida` → `Conciliada` / `Divergente` | M-01 · M-02 (6) | CMP-12 · MSG-03 | ✓ |
| RN05.2 Base de cálculo | CT-02.4 | — | M-02 (7) | CMP-21 | ✓ |
| RN05.3 Janela D−5 a D+15 | CT-02.9 | `AguardandoConciliacao` → `SemConciliacao` | M-01 (Slack) | Badge `Sem conciliação` | ✓ |
| RN05.3 · BR-07 `NF ausente` | — | Só na AT-01 | — | — | ✗ (LR-09) |
| RN05.4 Agregação N:1 | CT-02.10 | `Conciliacao.lancamentos` (N:1) | Comparação de M-02 mostra um único lançamento | CMP-12 | ◐ (LR-11) |
| RN05.5 Câmbio | CT-02.11 | — | M-01 (3), Adobe CC | MSG-04 | ✓ |
| RN05.6 Confiança de 85% | CT-02.6 | `Recebida` → `PendenteRevisao` | M-01 (Canva); variante de M-02 não desenhada | CMP-18 | ◐ (LR-08) |
| RN05.7 Notificação em 15 min | CT-02.4, CT-02.13 | SEQ-02 | W-00 (3) · M-02 destinatário | — | ◐ (LR-10) |
| RN05.8 Mascaramento | CT-02.3 | SEQ-02 · AN-01, AN-03 | M-02, campo `Tomador` | CMP-18 (cópia redigida) | ✓ |
| RN05.9 Trilha imutável | — | `Conciliacao` *append-only* | M-02 (8) | — | ◐ ¹ |
| RN05.10 Reprocessamento | CT-02.12 | `Divergente` → `Conciliada` / `Divergente` | M-02 (8) · T-03 | — | ✓ |

> ¹ A RN05.9 nunca teve cenário próprio (S2·E2 registra "— (CTL-11)"); é verificada
> indiretamente pela CT-02.12. Mantida como ◐ sem novo cenário: a verificação natural é a de
> integridade do `audit_log` na fase de implementação.

### 6.2. RN02 — Gatilho de inatividade (REQ-04)

| Sub-regra | Cenário | Elemento UML | Tela · anotação | DS | Situação |
|:---|:---|:---|:---|:---|:---:|
| RN02.1 30 dias consecutivos | CT-04.1, 04.2 | `Licença`: `Ativa` → `Ociosa` | W-07, coluna `Dias` | MSG-05 · CMP-03 | ✓ |
| RN02.2 Evento qualificado · E4 só contesta | CT-04.8 | Contestação sem transição | W-07, coluna `Evidência` (RI-25) | CMP-05 · MSG-06 | ◐ (LR-18) |
| RN02.3 Marco inicial | CT-04.9 | `Provisionada` → `Ociosa` | W-07 (26) | — | ✓ |
| RN02.4 Cobertura | CT-04.4 | `Provisionada` → `SemTelemetria`; região de telemetria | W-07 (24) e linha `COL-c284` | MSG-07 · MSG-13 | ✓ ² |
| RN02.5 Reinício | CT-04.3 | `Ociosa` → `Ativa` | — (muda o badge) | — | ✓ |
| RN02.6 Afastamento | CT-04.5 | `SuspensaPorAfastamento` | Nenhum exemplo em W-07 | Badge definido | ◐ |
| RN02.7 Latência de 48 h | CT-04.10 | `TelemetriaDesatualizada` | W-08 C | Badge definido | ◐ |
| RN02.8 Graduação 30/60/90 | CT-04.11 | Derivado de `ultimo_evento_em` | Card de W-07 (RI-26) | CMP-07 | ✓ |
| RN02.9 Janela de 72 h | — | `Ação sobre Assinatura` | Bloco B (M-04) | CMP-17 | — ³ |
| RN02.10 Vedação · k = 5 | CT-04.7, 04.12 | AN-07, AN-08 | W-07 (27) · W-08 D | CMP-22 · MSG-12 | ✓ |

> ² O rótulo `S/TEL.` do W-07 viola a regra BD-2 do Design System; no Hi-Fi o badge é
> `Sem telemetria` (HF-14).  
> ³ A RN02.9 é regra de execução de ação (REQ-07) e é rastreada na matriz do Bloco B (Semana 09).

### 6.3. RNFs e LGPD do Bloco A

| Requisito | Cenário | Modelo / validação | Tela · anotação | DS | Situação |
|:---|:---|:---|:---|:---|:---:|
| RNF-01 AES-256 | CT-01.3 | SEQ-01 (cofre) · CTL-01, CTL-03 | W-03 (13) | — | ✓ |
| RNF-02 LGPD/GDPR (consentimento) | CT-01.2 | CTL-13, CTL-14 | W-02 (11) | CMP-13 (informativo) | ◐ — CTL-14 depende de P-04 |
| RNF-04 Varredura < 5 min | CT-01.1, CT-02.7 | S5·E2 · CA-01 a CA-06 · SEQ-01 v1.0 | W-00 (2) · W-08 B | CMP-16 | ↻ (LR-04) |
| **RNF-05 50.000 transações/min** | — | — | — | — | ✗ (LR-05) |
| RNF-06 Carga < 2 s | CT-03.6, CT-05.5 | Orçamento de 31 KB e procedimento de medição (S7·E2 §9), sem medição executada | W-08 A (*skeleton*) | CMP-08 (paginação) · CMP-16 | ◐ ⁴ |
| RNF-07 Corpo de e-mail | CT-02.2 | AT-01 (descarte) · IN-08 | W-02 (10) | — | ✓ |
| RNF-08 REST/OpenAPI | — | S7·E1: 13 operações em `/erp/*` · SEQ-05 | — | — | ◐ (LR-06) |
| RNF-09 Responsividade | — | — | TPL-01 a TPL-04 · prioridade de coluna (DEC-52) · DEC-51 | CMP-08, CMP-18 | ◐ (LR-28) |
| RNF-10 Falso positivo < 2% | CT-03.2, 03.3 | S5·E2 · DEC-44 · E1/E2 | W-06 (23) | CMP-04 | ↻ (LR-13, LR-14) |
| LGPD-01 Pseudonimização | CT-02.3, 03.7, 04.7, 04.12 | AN-01 a AN-08 · DEC-53 | M-02 · W-07 (27) · W-08 D | CMP-22 · MSG-12 | ✓ |

> ⁴ O RNF-06 é propriedade de execução: um quadro do Figma não prova tempo de carga. O que o
> Hi-Fi pode garantir — e a lista da Seção 11 cobra — é o **comportamento** que o sustenta:
> *skeleton* em vez de *spinner*, paginação de 50 linhas e nenhuma consulta pesada no primeiro
> quadro.

**Requisitos transversais sem rastro em nenhum artefato.** A varredura mostrou também que o
**RNF-03 (uptime de 99,9%) não aparece em nenhum documento** das Semanas 01 a 06. Não é
requisito do Bloco A, mas fica registrado (P-43) para o Diagrama de Implantação da Semana 11.

---

## 7. Matriz Reversa — Tela e Componente → Requisito

Busca de **órfãos**: elementos de interface sem requisito que os justifique.

### 7.1. Wireframes

| Artefato | Requisitos realizados | Situação | Observação |
|:---|:---|:---:|:---|
| W-00 Shell | Transversal: CTL-10, RI-05, RNF-09 | ✓ | — |
| W-01 Onboarding | REQ-01 (RI-01, RI-03) · REQ-04 (passo 3, provedor de identidade = fonte E2) | ✓ | O passo 3 serve ao REQ-04, não ao REQ-01 |
| W-02 Transparência pré-consentimento | REQ-01 · RNF-07 · CTL-13 | ✓ | — |
| W-03 Conectores | REQ-01 (CT-01.8) | ✓ | — |
| W-04, W-05 Dashboard de ROI | REQ-08 | — | Bloco B |
| W-06 Inventário | REQ-03 · REQ-04 (colunas `Licenças` e `Ociosas`) | ✓ | Sem coluna de estado da assinatura (Seção 9.3 do DS) |
| W-07 Licenças ociosas | REQ-04 · REQ-05 (card de recomendação) | ✓ | Valores de exemplo divergentes (IC-01) |
| W-08 A–D Estados globais | Transversal: RNF-06, RNF-04, REQ-01, LGPD-01 | ✓ | — |
| M-01, M-02 Faturas | REQ-02 · UC-13 | ✓ | — |
| **M-07 "Central de Relatórios"** | **REQ-05** (relatório mensal) · REQ-10 (exportação) | ↻ | Rotulado SCR-10, mas o corpo é o relatório do REQ-05 (DEC-83) |

### 7.2. Elementos de interface sem destino ou sem origem

| Elemento | Onde | Requisito | Situação |
|:---|:---|:---|:---:|
| `COMPARAR ASSINATURAS DESTA CATEGORIA` | W-06 | CT-03.5 | ◐ — destino nunca desenhado |
| `BAIXAR RESUMO DE CONFORMIDADE (PDF)` | W-01 | RI-03 | ⧗ — texto aguarda o DPO (P-17) |
| `[...]` por conector | W-03 | RI-04 (guia) | ◐ — só o guia; revogar e tentar novamente não estão no menu |
| `[...]` por fornecedor | W-06 | CT-03.3, CT-03.4 | ✗ — conteúdo do menu nunca definido |
| `NOTIFICAR` | M-02 | RN05.7 | ◐ — destinatário indefinido (P-40) |

**Resultado:** nenhum elemento é órfão — todo controle desenhado aponta para um requisito. O
problema do Bloco A é o inverso: **requisitos sem controle** (Seções 8 e 9).

### 7.3. Componentes

| Componente | Requisitos do Bloco A | Instanciado em wireframe? |
|:---|:---|:---:|
| CMP-04 Indicador de confiança | REQ-03 · RNF-10 | ✓ W-06 |
| CMP-05 Badge de evidência | REQ-04 · RN02.2 | ✓ W-07 |
| CMP-07 Card de recomendação | REQ-04 · REQ-05 | ✓ W-07 (só a variante Publicada) |
| CMP-11 Barras ordenadas | REQ-05 | ◐ — só no protótipo da S7, não em wireframe (LR-24) |
| CMP-12 Comparativo lado a lado | REQ-02 · REQ-05 | ✓ M-02, M-07 |
| CMP-18 Visualizador de documento | REQ-02 · RN05.6 · RN05.8 | ✓ M-02 |
| CMP-21 Popover de cálculo | REQ-02 · RN05.2 | ✓ M-02 |
| CMP-22 Identificador de colaborador | LGPD-01 | ✓ W-07, W-08 D |

---

## 8. Rastreabilidade Domínio ↔ Interface

Preenchimento da Seção 6 do [`template_modelo_dominio.md`](../template_modelo_dominio.md) para
o Bloco A: que ação de tela altera qual agregado. A verificação transição a transição está no
[Entregável 3](entregavel-03-diagramas-uml.md), Parte II.

| Agregado / entidade | RF | Tela | Ação da interface que altera o domínio | Efeito no domínio | Situação |
|:---|:---|:---|:---|:---|:---:|
| `Conexao` | REQ-01 | SCR-01 | *"Continuar para o Google"* (W-02) | `[*]` → `Conectando` | ✓ |
| `Conexao` | REQ-01 | SCR-01 | Confirmar chave de API do ERP | `[*]` → `Conectando` | ✗ HF-01 |
| `Conexao` | REQ-01 | SCR-01 | *"Reconectar"* (W-08 C) | `TokenExpirado` → `Ativa` | ✓ |
| `Conexao` | REQ-01 | SCR-01 | *"Tentar novamente"* · *"Revogar conexão"* | `Erro` → `Ativa` · qualquer → `Revogada` | ✗ HF-02, HF-03 |
| `Fatura` | REQ-02 | SCR-02 | *"Corrigir leitura"* (M-02, T-03) | Nova versão de `CampoExtraido`; nova `Conciliacao` | ✓ |
| `Fatura` | REQ-02 | SCR-02 | *"Não é uma fatura"* | `PendenteRevisao` → `Descartada` | ✗ HF-06 |
| `Fatura` | REQ-02 | SCR-02 | *"Registrar desfecho"* | `Divergente` → `Tratada`; SY-08 libera a renovação | ✗ HF-05 |
| `FornecedorSaaS` | REQ-03 | Detalhe do fornecedor | *"Corrigir categoria"* · *"Desfazer consolidação"* | `origem_categoria = AjusteManual` · grafias separadas | ✗ HF-09 |
| `Assinatura` | REQ-03 | Detalhe do fornecedor | *"Não é SaaS"* | `Mapeada` → `Descartada` (FP-A) | ✗ HF-09 |
| `Recomendacao` | REQ-04/05 | SCR-04 | *"Aplicar downgrade"* (T-07) | `Publicada` → `Aceita`; SY-01 cria `Ação` | ✓ |
| `Recomendacao` | REQ-04/05 | SCR-04 | *"Recusar"* · *"Validar recomendação"* | → `Recusada` · `Estimativa` → `Aceita` | ✗ HF-13 · ◐ |
| `Licenca` | REQ-04 | SCR-04 | *"Contestar ociosidade"* (E4) | Sem transição definida | ✗ P-41 |
| `ApuracaoMensalDesperdicio` | REQ-05 | SCR-05 | Selecionar mês fechado | Lê o retrato imutável do mês (DEC-84); nada é recalculado | ✗ HF-18 (tela) · modelo ✓ |

---

## 9. Lacunas de Rastreabilidade

### 9.1. Catálogo (LR-xx)

| ID | Req | Camada | Lacuna | Sev. | Encaminhamento |
|:---|:---|:---:|:---|:---:|:---|
| LR-01 | REQ-01 | L8 | Formulário de chave de API do ERP não desenhado: CT-01.1, 01.3, 01.4 e 01.5 sem tela | Alta | HF-01 |
| LR-02 | REQ-01 | L8 | Revogação com 2FA (CT-01.7) e *"Tentar novamente"* (CT-01.5) sem controle | Média | HF-02, HF-03 |
| LR-03 | REQ-01 | L4 | Cenários dizem `Ativo`; máquina e badge dizem `Ativa` (regra BD-1) | Baixa | CU-01 |
| LR-04 | REQ-01/02 | L4 | CT-01.1 e CT-02.7 não incorporam a leitura do RNF-04 (janela de 90 dias, p95 por conexão — DEC-41, 43) | Média | CU-02 |
| LR-05 | REQ-01/02 | L1 | **RNF-05 sem cenário, sem validação e sem condição de arquitetura** — é o RNF de volume do pipeline de ingestão | Alta | CT-01.9 · P-39 |
| LR-06 | REQ-01 | L1 | RNF-08 parcial: a OpenAPI da S7 cobre só ERP; cartão corporativo e e-mail por OAuth, também parte do REQ-01, não têm endpoint | Média | P-36 da S7 (escopo da API antes do handoff) |
| LR-07 | REQ-02 | L5/L8 | `Divergente` → `Tratada` sem gatilho em tela. Sem ele, a fatura crítica nunca sai de `Divergente` e a SY-08 nunca libera a renovação bloqueada | Alta | HF-05 · CT-02.14 |
| LR-08 | REQ-02 | L8 | Variante de M-02 para `Pendente de revisão` não desenhada; *"não é uma fatura"* sem controle | Média | HF-06 · CT-02.15 |
| LR-09 | REQ-02 | L5/L6 | `NF ausente` (BR-07, cobrança sem nota): presente na AT-01, ausente das máquinas, do dicionário, dos badges e das telas | Média | P-42 → DEC-86 · HF-07 |
| LR-10 | REQ-02 | L8 | `NOTIFICAR` em M-02: a RN05.7 já notifica o financeiro automaticamente; o botão não diz a quem notifica | Baixa | P-40 · HF-08 |
| LR-11 | REQ-02 | L8 | Agregação N:1 (RN05.4) sem representação na comparação NF × cartão | Baixa | HF-07 |
| LR-12 | REQ-03 | L8 | **Detalhe do Fornecedor nunca desenhado**, embora previsto no mapa de navegação da Semana 01: CT-03.3, 03.4, 03.6 e 03.7 sem tela | Alta | HF-09 |
| LR-13 | REQ-03 | L3 | UC-03, fluxo 3a: *"inferior a 70%"* e *"aciona UC-14"* — vigentes são 0,80 (DEC-44) e fluxo 3a próprio (P-09) | Média | CU-03 · DEC-80 |
| LR-14 | REQ-03 | L7 | Limiar de E1 em três versões no mesmo documento: 75% (contrato), < 70% (diagrama geral), 0,88/0,75 (fluxograma E1 e dicionário) | Média | DEC-80 · CU-05 |
| LR-15 | REQ-03 | L4 | CT-03.2 manda o fornecedor *"assumir o estado Pendente de revisão"*, mas fornecedor não tem máquina; o dicionário usa o booleano `pendente_revisao` | Baixa | DEC-81 · CU-04 |
| LR-16 | REQ-03/04 | L4/L7 | Limiar de redundância em quatro versões: 3+ fornecedores (CT-03.5, UC-03, W-06); 2+ em categoria alta (SD-03); alta **ou média** (fluxograma REC-03); 2 fornecedores (CT-04.6) | Alta | DEC-79 · CT-03.8 · CU-06 |
| LR-17 | REQ-04 | L4/L8 | **"Licenças duplicadas" — metade do enunciado do REQ-04 — sem cenário e sem tela**; SD-04 e SD-07 existem só no motor | Alta | CT-04.13, CT-04.14 · HF-15 |
| LR-18 | REQ-04 | L5/L8 | Contestação por E4 (RN02.2) sem transição na máquina e sem controle | Média | P-41 |
| LR-19 | REQ-04/05 | L8 | Recusa de recomendação sem controle; o MI-04 e a calibração do motor dependem dela | Média | HF-13 |
| LR-20 | REQ-04 | L8 | Assinatura de pool (DEC-56) sem representação em SCR-04 | Baixa | HF-16 |
| LR-21 | REQ-05 | L8 | **SCR-05 nunca desenhada**; o conteúdo do REQ-05 está no M-07, rotulado SCR-10 | Alta | DEC-83 · HF-18 |
| LR-22 | REQ-05 | L8 | CT-05.1 (recomendações ordenadas por economia) e CT-05.3 (realizada × potencial) sem tela | Alta | HF-18 |
| LR-23 | REQ-05 | L6 | **Relatório mensal sem entidade**: reaberto meses depois, o relatório de setembro mostraria números de outro momento | Alta | DEC-84 · CT-05.6 · classe `ApuracaoMensalDesperdicio` (S8·E3) |
| LR-24 | REQ-05 | L9 | CMP-11 (barras de desperdício) nunca usado em wireframe; o único exemplo, no protótipo da S7, chama o desperdício de "potencial" | Baixa | HF-18 · CU-13 |
| LR-25 | REQ-04/05 | L7 | REC-01 e REC-03 disputam as mesmas licenças: o comparativo do M-07 já inclui a redução do Figma do W-07, e somar os dois conta R$ 7.224,00 duas vezes; e o REC-03 pressupõe comprar licenças que a RN04 bloquearia | Alta | DEC-82 · CT-05.7 |
| LR-26 | REQ-04/05 | L2 | *Tags* `@BlocoB` em US-04 e US-05 | Baixa | DEC-77 · CU-09 |
| LR-27 | Transversal | L9 | Texto de regra fora do catálogo `MSG` (CT-01.4, W-08 C, fornecedor em revisão, plano combinado) — contraria o critério 7 do Design System | Baixa | MSG-16 a MSG-19 (Seção 11.3) |
| LR-28 | Transversal | L4 | RNF-09 sem nenhum cenário de aceite | Média | Validação em tablet físico (P-27) |

**Distribuição:** 10 de severidade Alta · 10 Média · 8 Baixa.

**Atualização (Hi-Fi entregue na Semana 08):** 16 lacunas foram fechadas pelas telas Hi-Fi de
SCR-01 a SCR-05 — LR-01, 02, 07, 08, 09, 10, 11, 12, 17, 19, 20, 21, 22, 24, 25 e 27. As
referências "sem tela"/"nunca desenhada" nas seções anteriores deste documento descrevem o
estado **antes** desta entrega; a Seção 4 (Matriz-Síntese) e a Seção 5 (Matriz Detalhada) já
refletem o estado atual.

Sete lacunas têm a correção encaminhada mas não dependiam do Hi-Fi: LR-03, LR-13, LR-14, LR-15
e LR-16 (DEC-79 a DEC-81 e correções CU-01 a CU-06), LR-26 (DEC-77) e LR-23 (classe
`ApuracaoMensalDesperdicio` no Diagrama de Classes v1.0). Elas só serão fechadas quando (a) a
equipe ratificar as decisões, hoje propostas (Seção 13.1), e (b) os responsáveis aplicarem as
CU nos arquivos das semanas de origem — nenhuma CU foi aplicada por esta entrega. As 5
restantes (LR-04, LR-05, LR-06, LR-18, LR-28) continuam abertas: dependem de cenário novo ou
de decisão do cliente, não de tela.

> **Leitura do catálogo.** As lacunas não se distribuem ao acaso. Quase todas as de severidade
> Alta estão em **L8** (telas que faltam) ou em **regras definidas em mais de um lugar**
> (LR-16, LR-25). A especificação textual do Bloco A é sólida; o que falhou foi a passagem
> para a tela de requisitos que não tinham wireframe na lista do cronograma — o detalhe do
> fornecedor e o relatório de desperdício nunca estiveram no recorte de nenhuma iteração.

### 9.2. Cenários propostos para fechar lacunas

```gherkin
# language: pt
@BlocoA @Semana08
Funcionalidade: Cenários complementares do Bloco A
  Para fechar as lacunas LR-05, LR-07, LR-08, LR-16, LR-17, LR-23 e LR-25
  Como Analista de Requisitos do Bloco A
  Quero critérios de aceite verificáveis para o que ainda não tinha cenário

  @CT-01.9 @REQ-01 @desempenho @RNF-05
  Cenário: Sustentar o volume de transações por cliente corporativo
    Dado um tenant com conexões de ERP e de cartão corporativo no estado "Ativa"
    Quando as fontes entregam 50.000 transações financeiras em um minuto
    Então todas as transações devem ser aceitas pelo pipeline de ingestão
    E nenhuma transação deve ser descartada por excesso de carga
    E a apuração de outros tenants não deve sofrer degradação

  @CT-02.14 @REQ-02 @fluxo-principal @RN05 @SY-08
  Cenário: Registrar o desfecho de uma divergência crítica
    Dado uma Fatura no estado "Divergente" com severidade "Crítica"
    E que a renovação automática da assinatura está bloqueada
    Quando o Gestor Financeiro registra o desfecho "Estorno solicitado ao fornecedor"
    Então a Fatura deve assumir o estado "Tratada"
    E o desfecho deve ser registrado na trilha de auditoria
    E a renovação automática da assinatura deve ser liberada

  @CT-02.15 @REQ-02 @excecao @RN05.6
  Cenário: Descartar documento que não é fatura
    Dado uma Fatura no estado "Pendente de revisão"
    Quando o revisor indica que o documento não é uma fatura
    Então a Fatura deve assumir o estado "Descartada"
    E não deve aparecer na lista de faturas
    E o descarte deve ser registrado na trilha de auditoria

  @CT-03.8 @REQ-03 @esquema @SD-03 @DEC-79
  Esquema do Cenário: Sinalizar redundância conforme a categoria
    Dado que existem "<n>" Fornecedores SaaS ativos na categoria "<categoria>"
    E que a categoria tem redundância "<redundancia>"
    Quando eu acesso o inventário
    Então o indicador de possível redundância deve estar "<indicador>"

    Exemplos:
      | n | categoria   | redundancia | indicador |
      | 2 | Design      | Alta        | visível   |
      | 3 | Design      | Alta        | visível   |
      | 1 | Design      | Alta        | oculto    |
      | 2 | DevTools    | Média       | oculto    |
      | 3 | Nuvem       | Baixa       | oculto    |

  @CT-04.13 @REQ-04 @fluxo-principal @SD-04
  Cenário: Apontar colaborador com licenças duplicadas
    Dado que o colaborador "COL-a70c" tem licença no estado "Ativa" no "Figma"
    E que o mesmo colaborador tem licença no estado "Ativa" no "Canva Pro"
    E que as duas ferramentas pertencem à categoria "Design"
    Quando eu acesso o painel de licenças do "Figma"
    Então a licença deve exibir o indicador "também usa Canva Pro"
    E o colaborador deve ser identificado apenas pelo pseudônimo

  @CT-04.14 @REQ-04 @fluxo-principal @SD-07
  Cenário: Apontar contrato duplicado do mesmo fornecedor
    Dado que existem duas Assinaturas vigentes do fornecedor "Miro" no mesmo tenant
    Quando a apuração diária é executada
    Então as duas assinaturas devem exibir o indicador "contrato duplicado"
    E deve ser gerada uma Recomendação do tipo "Unificar contratos duplicados"

  @CT-05.6 @REQ-05 @confiabilidade @DEC-84
  Cenário: Preservar os valores do mês fechado
    Dado que o relatório de "setembro/2026" foi fechado com desperdício de "R$ 4.082,00"
    E que em outubro uma licença ociosa de setembro voltou a ser usada
    Quando eu reabro o relatório de "setembro/2026"
    Então o desperdício exibido deve continuar sendo "R$ 4.082,00"
    E a mudança posterior deve aparecer como ajuste após o fechamento

  @CT-05.7 @REQ-05 @confiabilidade @DEC-82
  Cenário: Não somar recomendações que disputam as mesmas licenças
    Dado uma Recomendação de reduzir o Figma de 25 para 18 licenças
    E uma Recomendação de consolidar o Canva Pro no Figma
    Quando o relatório é gerado
    Então as duas devem ser apresentadas como um único plano combinado
    E a economia potencial deve contar as licenças do Figma uma única vez
```

---

## 10. Consistência dos Dados de Exemplo e Massa Canônica

Os números das telas são o que o Gestor Financeiro vai conferir primeiro no teste de
usabilidade (Tarefas 01, 02 e 05 do roteiro da Semana 12). A P-25 já havia apontado um preço divergente;
a verificação cruzada desta iteração encontrou mais sete inconsistências.

### 10.1. Inconsistências encontradas (IC-xx)

| ID | Onde | Inconsistência | Prova |
|:---|:---|:---|:---|
| IC-01 | W-07, M-04, S4·E1 §7.2 × W-06, M-07 | Preço do Figma: R$ 72,00 × R$ 86,00 por licença (P-25 b) | R$ 2.150,00 ÷ 25 = R$ 86,00; R$ 6.048,00 ÷ 7 ÷ 12 = R$ 72,00 |
| IC-02 | W-06 × M-01 | Adobe CC custa R$ 4.320,00/mês no inventário, mas a cobrança conciliada é de R$ 4.920,00 | M-01: USD 900, cobrado R$ 4.920,00, +5,13% |
| IC-03 | M-07 × W-06 | Desperdício por categoria não é reproduzível a partir do inventário | DevTools: 4 × R$ 65,00 + 18 × R$ 45,00 = **R$ 1.070,00**, não R$ 1.842,00. Design: 7 × 86 + 22 × 40 + 3 × 360 = **R$ 2.562,00**, não R$ 2.914,00 |
| IC-04 | M-07 × S4·E1 §6.2 | O comparativo sugere *"Figma 18 licenças"* após absorver o Canva Pro, ignorando os 18 usuários ativos do Canva | R$ 26.424,00/ano só vale se 100% dos usuários do Canva já usarem o Figma — premissa não declarada |
| IC-05 | M-07 × W-07 | O `SUGERIDO` do M-07 já embute a redução do Figma de 25 para 18 que o card do W-07 recomenda | W-07 (R$ 7.224,00, corrigido) + M-07 (R$ 26.424,00) = R$ 33.648,00 — R$ 7.224,00 contados duas vezes |
| IC-06 | M-07 | Filtro ativo `Categoria: DevTools`, mas a tabela lista DevTools, Design e Comunicação | Contraria o próprio aviso da tela — *"serão aplicados também na exportação"* (ANT-04) |
| IC-07 | M-07 × W-05 | Relatório de *"agosto 2026"* para um tenant cuja primeira varredura terminou em 02/09/2026 | Possível pela janela de 90 dias (DEC-41), mas a economia realizada de agosto é necessariamente zero |
| IC-08 | W-07 × W-06 | W-07 mostra uma licença do Figma `Sem telemetria`; W-06 conta o Figma com 25 licenças e 7 ociosas, sem dizer que só 17 estão ativas | 25 − 7 − 1 = 17, não 18 — afeta o cálculo da consolidação |

### 10.2. Regras de derivação da massa canônica (DEC-78)

| # | Regra |
|:--|:---|
| R1 | **Preço unitário** = custo mensal ÷ licenças contratadas |
| R2 | **Custo mensal** = última cobrança conciliada da assinatura; sem conciliação, vale o valor da NF, com a sub-linha *"valor da nota fiscal · cobrança não conciliada"* |
| R3 | **Desperdício apurado** (fato) = Σ licenças em `Ociosa` ou `Órfã` × preço unitário (SD-01, SD-02). `Sem telemetria` e `Suspensa por afastamento` não entram |
| R4 | **Economia potencial** (estimativa) = soma das recomendações `Publicada`, sem contar duas vezes a mesma licença (DEC-82). `Estimativa` aparece à parte |
| R5 | **Economia realizada** = ações `Executada` no mês, anualizada; nunca somada a R4 (DEC-21) |
| R6 | Desperdício e economia potencial **não precisam coincidir**: o primeiro mede ociosidade; a segunda inclui redundância entre ferramentas |
| R7 | Data de referência única: **30/09/2026**; relatório de **setembro/2026**, escopo filtrado nas categorias Design, DevTools e Comunicação |
| R8 | Pseudônimos únicos no tenant, no formato da DEC-53 |

### 10.3. Inventário canônico (SCR-03)

| Fornecedor | Categoria | Licenças | Ativa | Ociosa | Sem telem. | Preço unit. | Custo/mês | Desperdício/mês | Confiança | Origem do custo |
|:---|:---|---:|---:|---:|---:|---:|---:|---:|:---|:---|
| Figma | Design | 25 | 17 | 7 | 1 | 86,00 | 2.150,00 | 602,00 | IA 94% | Conciliada |
| Canva Pro | Design | 40 | 18 | 22 | 0 | 40,00 | 1.600,00 | 880,00 | IA 91% | NF — `Pendente de revisão` |
| Adobe CC | Design | 12 | 9 | 3 | 0 | 410,00 | 4.920,00 | 1.230,00 | Base | `Conciliada · câmbio` |
| GitHub | DevTools | 60 | 56 | 4 | 0 | 65,00 | 3.900,00 | 260,00 | Base | Conciliada |
| Jira | DevTools | 55 | 30 | 18 | 7 | 45,00 | 2.475,00 | 810,00 | IA 88% | Conciliada |
| Slack | Comunicação | 172 | 100 | 12 | 60 | 25,00 | 4.300,00 | 300,00 | Base | NF — `Sem conciliação` |
| Zoom | Comunicação | 17 | 17 | 0 | 0 | 50,00 | 850,00 | 0,00 | Base | Contratado após redução de 28/09 ¹ |
| **Total** | | **381** | **247** | **66** | **68** | | **20.195,00** | **4.082,00** | | |

> ¹ A fatura de setembro do Zoom (R$ 1.150,00 por 23 licenças, cobrada R$ 1.115,50 — `Divergente
> · Média`, −3,0%) permanece em SCR-02: refere-se ao período anterior à redução.
>
> **Cobertura da apuração no escopo:** (381 − 68) ÷ 381 = **82%** — o mesmo valor do banner
> de W-07 e M-07, agora derivado dos dados. O Slack, com 60 licenças de convidados fora do
> provedor de identidade, tem cobertura de 65%.

### 10.4. Licenças de exemplo do Figma (SCR-04)

Datas recalculadas para a referência de 30/09/2026 a partir das datas do W-07.

| Titular | Setor | Último acesso | Dias | Evidência | Estado (badge) |
|:---|:---|:---|---:|:---|:---|
| COL-8f2a | Marketing | 12/07/2026 | 80 | API | `Ociosa` |
| COL-31bd | Produto | 02/08/2026 | 59 | API | `Ociosa` |
| COL-a70c | Design | 29/09/2026 | 1 | API | `Ativa` — também usa Canva Pro (CT-04.13) |
| COL-5e19 | Vendas | nunca (provisionada em 25/07/2026) | 67 | API | `Ociosa` — nunca acessada (RN02.3) |
| COL-c284 | TI | — | — | Nenhuma | `Sem telemetria` |

### 10.5. Recomendações canônicas (SCR-04 e SCR-05)

| # | Recomendação | Cálculo | Economia anual | Confiança | Estado |
|:--|:---|:---|---:|:---:|:---|
| RC-1 | **Plano combinado Design** — consolidar o Canva Pro no Figma (REC-03) e reduzir 1 licença do Figma (REC-01 residual) | Ver abaixo | **20.232,00** | 0,80 ² | `Publicada` |
| RC-2 | Adobe CC — reduzir de 12 para 9 licenças (REC-01) | 3 × 410,00 × 12 | 14.760,00 | 1,00 | `Publicada` |
| RC-3 | Jira — reduzir de 55 para 37 licenças (REC-01) | 18 × 45,00 × 12 | 9.720,00 | 0,87 | `Publicada` |
| RC-4 | Slack — reduzir de 172 para 160 licenças (REC-01) | 12 × 25,00 × 12 | 3.600,00 | 0,65 | `Estimativa` (MSG-14) |
| RC-5 | GitHub — reduzir de 60 para 56 licenças (REC-01) | 4 × 65,00 × 12 | 3.120,00 | 1,00 | `Publicada` |

> ² Valor de exemplo: a S4·E1 define a confiança do REC-03 como média ponderada de
> classificação, cobertura e sobreposição, sem fixar os pesos. A confiança de REC-01 segue a
> fórmula da S4·E1 §6.2 — `min(cobertura, 1,0)` — e por isso o Slack, com 65% de cobertura,
> fica como `Estimativa`.

**Cálculo do RC-1 (DEC-82).** Premissas: dos 18 usuários ativos do Canva Pro, 12 também usam o
Figma (sobreposição de 66,7%, acima do mínimo de 60%) e 6 são exclusivos; pelo critério 2 da
S4·E1 §6.1, o Figma é o mantido.

| Passo | Valor |
|:---|:---|
| Exclusivos do Canva Pro absorvidos por licenças ociosas do Figma | 6 das 7 ociosas — **nenhuma licença nova** (coerente com a RN04) |
| Licenças do Figma após o plano | 17 ativas + 6 realocadas + 1 sem telemetria = **24** (redução de 1) |
| Custo atual (Figma + Canva Pro) | 2.150,00 + 1.600,00 = R$ 3.750,00/mês |
| Custo após o plano | 24 × 86,00 = R$ 2.064,00/mês |
| Economia | R$ 1.686,00/mês = **R$ 20.232,00/ano** (−45,0%) |
| Decomposição | REC-03: 19.200,00 (custo incremental zero) + REC-01 residual: 1.032,00 |

> A redução residual de 1 licença (R$ 1.032,00/ano) ficaria **abaixo do piso de publicação**
> de R$ 1.200,00 se fosse recomendação isolada; dentro do plano combinado, ela é exibida.
> Comparação com os wireframes: W-07 + M-07 somavam R$ 33.648,00; o valor correto é
> **R$ 20.232,00** — 40% menor.
>
> **Efeito no Bloco B:** o VME afetado do RC-1 (R$ 1.686,00/mês) e o do downgrade isolado do
> Figma (7 × 86,00 = R$ 602,00/mês) estão ambos acima do teto da RN01 — o modal de ação da
> Semana 09 deve exigir o Gestor Financeiro (P-25 a).

### 10.6. Indicadores canônicos do relatório (SCR-05)

| Indicador | Valor | Regra |
|:---|:---|:---|
| Mês de referência | Setembro/2026 · fechado em 30/09/2026 | R7 · DEC-84 |
| Escopo | Design, DevTools e Comunicação (filtro visível) | IC-06 |
| Cobertura da apuração | 82% — valores apresentados como piso (MSG-13) | RN02.4 |
| Desperdício apurado | **R$ 4.082,00/mês** · 66 licenças ociosas | R3 |
| Desperdício por categoria (CMP-11) | Design R$ 2.712,00 · DevTools R$ 1.070,00 · Comunicação R$ 300,00 | R3 |
| Economia potencial | **R$ 47.832,00/ano** em 4 recomendações publicadas · + R$ 3.600,00/ano em 1 estimativa | R4 |
| Economia realizada | **R$ 300,00/mês** (R$ 3.600,00/ano) · 1 ação executada: redução de 6 licenças do Zoom em 28/09/2026 | R5 |
| Comparativo (CMP-12) | Atual: Figma 25 + Canva Pro 40 = R$ 3.750,00/mês · Sugerido: Figma 24 = R$ 2.064,00/mês | RC-1 |

**Faturas (SCR-02):** os valores de M-01 permanecem — todos conferem entre si e com M-03 —, com
os rótulos corrigidos pela regra BD-2 (`Pendente de revisão`, `Conciliada · câmbio`,
`Divergente · Crítica`). A massa ganha dois exemplos que faltavam: uma fatura `Aguardando
conciliação` e uma `Tratada` (HF-07).

---

## 11. Lista de Verificação do Hi-Fi do Bloco A

Cada item é uma condição verificável sobre o quadro do Figma. Um requisito só passa a
**Concluído** quando todos os seus itens estão aprovados (DEC-76).

### 11.1. Itens por tela (HF-xx)

| ID | Tela | Condição | Origem |
|:---|:---|:---|:---|
| HF-01 | SCR-01 | Formulário de chave de API do ERP: validação de escopo somente-leitura, recusa com MSG-16, sufixo de 4 caracteres após salvar, erro do provedor com *"Tentar novamente"* | LR-01 · CT-01.1, 01.3, 01.4, 01.5 |
| HF-02 | SCR-01 | Ação *"Revogar conexão"* com reautenticação 2FA e aviso de que os dados já coletados permanecem | LR-02 · CT-01.7 |
| HF-03 | SCR-01 | Conexão em `Erro` com *"Tentar novamente"*; em `Token expirado` com *"Reconectar"*; exemplo de `Revogada` na lista; conexão em primeira carga como `Ativa` com o progresso da sincronização, não como `Conectando` | LR-02 · CT-01.5, 01.6 · DEC-85 |
| HF-04 | SCR-01 | Badges com o rótulo exato da máquina — `Ativa`, não `Ativo` | LR-03 · BD-1 |
| HF-05 | SCR-02 | Ação *"Registrar desfecho"* em fatura `Divergente`, com lista de desfechos e efeito visível sobre a renovação bloqueada | LR-07 · CT-02.14 |
| HF-06 | SCR-02 | Variante de M-02 para `Pendente de revisão`: confiança por campo, campo abaixo de 85% destacado, ações *"Corrigir leitura"* e *"Não é uma fatura"* | LR-08 · CT-02.6, CT-02.15 |
| HF-07 | SCR-02 | Lista com exemplos de `Aguardando conciliação` e `Tratada`; comparação NF × cartão com mais de um lançamento (parcelas, RN05.4); visão de cobranças sem nota com o badge `NF ausente` | LR-09, LR-11 · Seção 10.6 · DEC-86 |
| HF-08 | SCR-02 | `NOTIFICAR` com destinatário explícito no rótulo ou na confirmação | LR-10 · P-40 |
| HF-09 | SCR-03 | **Detalhe do Fornecedor**: assinaturas, licenças por pseudônimo, grafias alternativas com *"Desfazer"*, *"Corrigir categoria"*, *"Não é SaaS"*, filtros preservados no retorno | LR-12 · CT-03.3, 03.4, 03.6, 03.7 |
| HF-10 | SCR-03 | Indicador de redundância conforme a DEC-79 (visível em Design, oculto em DevTools); `Comparar assinaturas` leva ao CMP-12 | LR-16 · CT-03.8 |
| HF-11 | SCR-03 | Coluna `Estado` da assinatura; fornecedor em revisão com CMP-04 `IA 52% · revisar` e MSG-17, sem badge de estado | DEC-81 · DS §9.3 |
| HF-12 | SCR-04 | Valores da massa canônica (Seção 10); card do Figma como plano combinado RC-1 | IC-01 a IC-05 · P-25 b |
| HF-13 | SCR-04 | Ação *"Recusar"* com motivo obrigatório no card; variante `Estimativa` (RC-4) com *"Validar recomendação"* | LR-19 |
| HF-14 | SCR-04 | Rótulos sem abreviação (`Sem telemetria`); exemplos de `Órfã`, `Suspensa por afastamento` e `Ociosa · apenas login` na tabela | BD-2 · RN02.6 · O8 |
| HF-15 | SCR-04 | Indicador de licença duplicada (*"também usa {ferramenta}"*, exemplo `COL-a70c`) e de contrato duplicado | LR-17 · CT-04.13, 04.14 |
| HF-16 | SCR-04 | Assinatura de pool: capacidade, pico concorrente e capacidade ociosa, sem lista de titulares | LR-20 · DEC-56 |
| HF-17 | SCR-04 | Plano combinado explica a realocação (MSG-18) e não exibe as recomendações componentes como cards separados | DEC-82 |
| HF-18 | SCR-05 | **Tela própria** no TPL-04: seletor de mês fechado, banner MSG-13, KPIs realizada e potencial em cards separados (CMP-06), barras por categoria (CMP-11), recomendações ordenadas por economia, comparativo (CMP-12), escopo do filtro nos totais | LR-21 a 24 · CT-05.1 a 05.4, 05.6 |
| HF-19 | SCR-05 | *"Exportar"* leva à SCR-10 herdando filtros e máscara — a exportação continua sendo do REQ-10 | DEC-83 · ANT-04 |
| HF-20 | Todas | Quadro em tablet de 768 px para cada tela, com a prioridade de coluna da DEC-52 e o visualizador da DEC-51 | RNF-09 |
| HF-21 | Todas | Estado de carregamento por *skeleton* com a mesma estrutura de colunas; paginação de 50 linhas | RNF-06 · CMP-08, CMP-16 |
| HF-22 | Todas | Nenhum nome ou CPF de colaborador; pseudônimos únicos no formato da DEC-53 | LGPD-01 · CT-03.7, 04.7 |
| HF-23 | Todas | Todo texto de regra vem do catálogo `MSG` (MSG-01 a MSG-19) | LR-27 · critério 7 do DS |
| HF-24 | Todas | Badges com ícone e tom da Seção 10.1 do Design System, não do protótipo da Semana 07 | RS-09 · DEC-49 |

### 11.2. Itens por requisito

| Req | Itens que bloqueiam o "Concluído" |
|:---|:---|
| REQ-01 | HF-01 a HF-04, HF-20 a HF-24 |
| REQ-02 | HF-05 a HF-08, HF-20 a HF-24 |
| REQ-03 | HF-09 a HF-11, HF-20 a HF-24 |
| REQ-04 | HF-12 a HF-17, HF-20 a HF-24 |
| REQ-05 | HF-12, HF-17 a HF-24 |

### 11.3. Mensagens propostas ao catálogo do Design System

Seguem as regras de redação da Seção 11 do Design System (fato, regra, saída; segunda pessoa).

| ID | Regra | Onde aparece | Texto |
|:---|:---|:---|:---|
| MSG-16 | DEC-02 | Formulário de chave (HF-01) | Esta credencial tem permissão de escrita. Use uma credencial somente-leitura: a plataforma nunca altera dados nos seus sistemas. |
| MSG-17 | DEC-81 · CT-03.2 | Sub-linha do inventário (HF-11) | Classificação com confiança de {confianca}, abaixo de 80%. Este fornecedor fica fora das recomendações até ser revisado. |
| MSG-18 | DEC-82 | Card do plano combinado (HF-17) | Este plano reaproveita {n} licenças ociosas do {mantida} para quem hoje usa só o {descartada}, sem contratar licenças novas. |
| MSG-19 | CT-01.6 | Banner de falha de integração (W-08 C) | {conector} está com o token expirado desde {data}. Os dados exibidos são da última varredura concluída, em {data_ultima}. |

---

## 12. Reconciliação da Semana 07 com as Semanas 06 e 08

A Semana 07 registrou que foi preparada sem acesso aos entregáveis da Semana 06 e abriu a
P-30 para reconciliar *"entidades, estados e nomes"*. Esta seção faz a reconciliação no recorte
do Bloco A; a do Bloco B (`Requisição`, `Alerta`, `Ação`) fica para a Semana 09.

### 12.1. Divergências encontradas (RS-xx)

| ID | Artefato da S7 | Divergência | Fonte vigente | Resolução |
|:---|:---|:---|:---|:---|
| RS-01 | OpenAPI · `ConnectionStatus` e `DELETE /erp/connections/{id}` | Não existe `revogada`; a revogação devolve 204 e a conexão deixa de existir | Máquina `Conexão` (estado terminal `Revogada`) · CT-01.7 (*"os dados já coletados devem permanecer"*) | CU-10 |
| RS-02 | OpenAPI · `ReconciliationStatus` | Não existe `tratada`; uma divergência resolvida continua aparecendo no filtro `divergente` | Máquina `Fatura` v1.0 | CU-11 |
| RS-03 | OpenAPI · escopo | Cobre só ERP; cartão (FT-01) e e-mail por OAuth (FT-03, FT-04) também são REQ-01 | REQ-01 · CT-01.2 | LR-06 · P-36 da S7 |
| RS-04 | Classes · `ConexaoErp` | Agregado específico de ERP | ENT-06 `Conexao`, com `fonte` FT-01 a FT-07 | Classes v1.0 (S8·E3) |
| RS-05 | Classes · `Licenca.titular: Pseudonimo` | Pseudônimo guardado na licença | ENT-03: o pseudônimo é do colaborador e não muda (DEC-53); a realocação (RN04) troca o titular da licença | Classes v1.0 |
| RS-06 | Classes · `Licenca.diasSemEvento` | Dias sem uso armazenados | ENT-09: derivado de `ultimo_evento_em`, nunca armazenado | Classes v1.0 |
| RS-07 | Classes · `Assinatura "1" *-- "1..*" Licenca` | Assinatura sempre com licenças nominais | DEC-56: licenças nominais **ou** pool | Classes v1.0 |
| RS-08 | Classes · `Fatura.estado: EstadoConciliacao` | Seis valores da tabela D1–D10 usados como estado da fatura | Máquina `Fatura` (9 estados); o resultado da apuração pertence à `Conciliacao` (ENT-16) | Classes v1.0 |
| RS-09 | Biblioteca UI · badges | `Divergente` com triângulo, `Ociosa` com relógio, `Pendente de revisão` azul com interrogação; bordas tracejada e pontilhada | Design System §7 (ícones fixos) e §10.1: `Divergente` = X · `danger`; `Ociosa` e `Pendente de revisão` = triângulo · `warning` | CU-12 · HF-24 |
| RS-10 | Biblioteca UI · gráfico | Desperdício rotulado *"em aberto (potencial)"* | DEC-78: desperdício é fato apurado; economia potencial é estimativa | CU-13 |
| RS-11 | OpenAPI · `POST /test` e SEQ-05 | `Conectando` → `Ativa` ao validar a credencial | A máquina da S6 só passa a `Ativa` após a primeira varredura; CT-01.1 e UC-01 concordam com a S7; W-03 concorda com a S6 | **DEC-85** · CU-14 |
| RS-12 | OpenAPI · `x-papeis` | Papéis por extenso (*"Admin de TI"*) | Matriz de visibilidade (S6·E2 §15) e códigos de ENT-02 (`AdminTI`, `GestorFinanceiro`, `CFO`) | Compatível no escopo `/erp/*`: nenhuma operação expõe dado de colaborador. Usar os códigos de ENT-02 |
| RS-13 | Biblioteca UI · pseudônimos | Formato livre (P-35 da S7) | DEC-53 já fixa o formato: `COL-` + menor prefixo único, mínimo de 4 caracteres | Sem correção: a decisão já existia |
| RS-14 | DEC-69 da S7 | Paginação por cursor justificada pelo RNF-05 | RNF-05 trata de vazão de ingestão; paginação de leitura não a demonstra | RNF-05 segue sem validação (P-39) |

### 12.2. Parecer sobre as decisões propostas da Semana 07

A ratificação é da equipe; o parecer registra apenas se a decisão é compatível com os
artefatos das Semanas 01 a 06 e com esta matriz.

| Decisão da S7 | Parecer | Observação |
|:---|:---|:---|
| DEC-66 Escopo `/erp/*` | Compatível | Deixa o RNF-08 parcial (LR-06) |
| DEC-67 Credencial `writeOnly` | Compatível | CTL-03 · CT-01.3 |
| DEC-68 Erros RFC 9457 com `traceId` | Compatível | IN-01 |
| DEC-69 Paginação por cursor | Compatível com ressalva | Não evidencia o RNF-05 (RS-14) |
| DEC-70 Valor monetário em texto decimal | Compatível | Equivale a `Decimal(15,2)` do dicionário e ao VO `Dinheiro` |
| DEC-71 Sincronização assíncrona, janela de 90 dias | Compatível | DEC-41 · CA-03 |
| DEC-72 Rótulos dos badges pela DEC-49 | Compatível com ressalva | Rótulos corretos; ícones e tons divergentes (RS-09) |
| DEC-73 Gráfico sem biblioteca | Compatível | Vale para o protótipo; não restringe o Hi-Fi |
| DEC-74 Prioridade de coluna | Compatível | DEC-52 |
| DEC-75 Bearer/JWT com papel e tenant | Compatível com ressalva | Papéis pelos códigos de ENT-02 (RS-12) |

### 12.3. Efeito nas pendências da Semana 07

| Pendência da S7 | Situação após esta iteração |
|:---|:---|
| P-30 Reconciliar com a Semana 06 | **Reconciliação proposta no recorte do Bloco A** (RS-01 a RS-14 e Classes v1.0); depende da aplicação das CU-10 a CU-14 na Semana 07; Bloco B na Semana 09 |
| P-31 Conferir hex dos tokens com o Figma | Aberta — D1 |
| P-32 Medir RNF-06 e validar RNF-09 em navegador e tablet | Aberta — não medida nesta iteração; segue com a P-27 |
| P-33 Alinhar `x-papeis` com a matriz de visibilidade | **Resolução proposta no escopo `/erp/*`** (RS-12) — aguarda a equipe |
| P-34 Contato da API e endereços dos ambientes | Aberta — equipe |
| P-35 Formato do pseudônimo na UI | **Resolução proposta** — a DEC-53 já define o formato (RS-13); aguarda a equipe |
| P-36 Escopo da API além de `/erp/*` | Aberta — Semana 14; agora vinculada à LR-06 |

---

## 13. Decisões e Pendências

### 13.1. Decisões propostas nesta entrega

Todas as decisões abaixo estão em situação **Proposta**: foram elaboradas pela AR1 e só passam a
"Decidido" depois de ratificadas pela equipe. Até lá, os documentos desta iteração as aplicam
para que possam ser avaliadas, e os impactos descritos são **efeitos esperados após a
ratificação**.

| ID | Decisão | Situação | Impacto esperado |
|:---|:---|:---:|:---|
| DEC-76 | Requisito só é "Concluído" com L1 a L9 sem lacuna nem desatualização e Hi-Fi aprovado contra os itens `HF-xx`; a coluna de `estudo_caso1.md` é meta, não medição | Proposta | Situação dos requisitos passa a ter evidência |
| DEC-77 | REQ-04 e REQ-05 pertencem ao Bloco A (AR1/D1), e as *tags* `@BlocoB` de US-04 e US-05 são lidas como `@BlocoA` | Proposta | Encerra a ambiguidade criada pelo título da Semana 03 |
| DEC-78 | Massa de dados canônica do Bloco A e regras R1 a R8 de derivação; desperdício é fato (ociosidade) e economia potencial é estimativa | Proposta | Resolveria a P-25 (b) para o Bloco A e as IC-01 a IC-08 |
| DEC-79 | Indicador de redundância e SD-03: 2 ou mais fornecedores ativos em categoria de redundância **alta**; categorias de redundância média só geram sinal quando os fornecedores compartilham a mesma subcategoria funcional | Proposta | Evita recomendar consolidar GitHub e Jira, ferramentas complementares com sobreposição de usuários próxima de 100% |
| DEC-80 | Limiares vigentes: E1 vincula a partir de 0,88, revisão entre 0,75 e 0,88, novo fornecedor abaixo de 0,75; E2 publica a partir de 0,80 (DEC-44) | Proposta | Encaminha LR-13 e LR-14 (com CU-03 e CU-05) |
| DEC-81 | "Pendente de revisão" do fornecedor é atributo (`pendente_revisao`), não estado: sem máquina, sem badge, sinalizado pelo CMP-04 e pela MSG-17 | Proposta | Coerência entre CT-03.2, dicionário e máquinas |
| DEC-82 | O REC-03 absorve primeiro os usuários exclusivos com licenças ociosas da ferramenta mantida; recomendações sobre as mesmas licenças viram **plano combinado** e não se somam | Proposta | Elimina a contagem dupla e o conflito com a RN04 |
| DEC-83 | O relatório mensal de desperdício é a SCR-05 (REQ-05); o M-07 passa a ser referência de conteúdo da SCR-05, e a SCR-10 fica com exportação e LGPD (REQ-10) | Proposta | Encaminha LR-21 (com CU-08 e HF-18) |
| DEC-84 | O relatório mensal é um retrato imutável do mês fechado; mudanças posteriores aparecem como ajuste após o fechamento, nunca como recálculo | Proposta | Encaminha LR-23 com a classe `ApuracaoMensalDesperdicio` (S8·E3) |
| DEC-85 | A `Conexão` assume `Ativa` quando a credencial é validada; progresso e falha da primeira carga pertencem à `Sincronizacao` da S7. `Conectando` passa a significar *credencial em validação* | Proposta | Resolveria RS-11 (com CU-14); saúde da credencial e andamento da carga deixam de disputar o mesmo estado |
| DEC-86 | `NF ausente` (BR-07) é situação do `LancamentoCartao` — `Aguardando pareamento`, `Pareado` ou `NF ausente` —, com badge `danger` e exemplo em SCR-02 | Proposta | Resolveria a P-42 no Diagrama de Classes v1.0 |

### 13.2. Pendências abertas nesta entrega

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-37 | `semana-06/entregavel-01-design-system-saas-b2b.md` sobrescrito pelo commit `60dc076` com uma revisão do dicionário de dados | Responsáveis pela Semana 06: restaurar a versão de `c13f5dd` e mover a revisão para o `entregavel-02` — ela só acrescenta ressalvas à versão atual do dicionário |
| P-38 | A revisão do dicionário numera duas pendências como P-30 e P-31 (SLA do titular e retenção de backups), números que a Semana 07 também usa | Renumerar as da revisão ao aplicar a P-37 |
| P-39 | RNF-05 (50.000 transações/min) sem validação nem condição de arquitetura | Validação analítica no molde da S5·E2, junto ao Diagrama de Implantação (Semanas 10 e 11) |
| P-40 | Destinatário do botão `NOTIFICAR` em M-02, dado que a RN05.7 já notifica | Decidir antes da Tarefa 01 do roteiro de usabilidade (Semana 11) |
| P-41 | Efeito da contestação por E4 (declaração do gestor): suspende a recomendação? Por quanto tempo? | Decidir com o cliente; insumo para a máquina `Licença` |
| P-42 | `NF ausente` (BR-07): estado do lançamento ou sinal do motor? | Resolução proposta (DEC-86) — aguarda ratificação |
| P-43 | RNF-03 (uptime de 99,9%) sem rastro em nenhum artefato desde a Semana 01 | Diagrama de Implantação (Semana 11) |
| P-44 | Subcategorias funcionais para as categorias de redundância média (C-03, C-04, C-10, C-11) | Necessárias para a DEC-79; levar à homologação |

### 13.3. Numeração e arquivos de outras semanas

| Item | Situação |
|:---|:---|
| Decisões desta iteração | Renumeradas de DEC-66–74 para **DEC-76–84**, porque a Semana 07 já usa DEC-66 a DEC-75 |
| Pendências desta iteração | Começam em **P-37**, porque a Semana 07 já usa P-30 a P-36 |
| Arquivos das Semanas 01 a 07 | **Não alterados por esta entrega.** As correções neles ficam registradas para os responsáveis aplicarem: CU-01 a CU-14 (Entregável 3, com o texto exato das CU-10 a CU-14 na Seção 18.1), P-37 e P-38. **Nenhuma CU está aplicada**, e por isso nenhuma lacuna que dependa delas é dada como fechada (Seção 9.1) |
| `definicoes.md` (raiz) | **Alterado:** acrescenta a seção "Semana 8" com o resumo desta iteração, como fizeram as semanas anteriores |

A convenção é a mesma da Semana 06 (Entregável 3, Seção 13). As CU-10 a CU-14 tocam arquivos da
Semana 07, que está em revisão numa PR própria; devem ser aplicadas nela, junto com os ajustes
nos testes automatizados listados na Seção 18.1 do Entregável 3.

### 13.4. Parâmetro novo para homologação

| # | Parâmetro | Valor proposto | Origem |
|:--|:---|:---|:---|
| 23 | Mínimo de fornecedores para o indicador de redundância e o SD-03 | 2, apenas em categoria de redundância alta | DEC-79 |

---

## 14. Rastreabilidade deste Documento

| Item | Consumido em | Entregável de destino |
|:---|:---|:---|
| Seção 10 (massa canônica) | Semana 08 | Layouts Hi-Fi do Bloco A no Figma (D1) |
| Seção 11 (itens `HF-xx`) | Semanas 08 e 10 | Aceite do Hi-Fi; telas de exceção |
| Seção 9.2 (cenários novos) | Semana 11 | Plano de testes e roteiro de usabilidade |
| Seções 4 e 5 (matriz) | Semana 09 | Modelo da matriz do Bloco B (AR2) |
| Seção 4 (matriz-síntese) | Semana 14 | Matriz de Rastreabilidade final do dossiê de handoff |
| DEC-84 | Revisão do dicionário de dados | `ENT-25` para a classe `ApuracaoMensalDesperdicio` |
| Seção 12 (RS-xx) | Semana 09 · Semana 14 | Reconciliação do Bloco B; OpenAPI consolidada do handoff |
| Seção 10.5, efeito no Bloco B | Semana 09 | Modal de ação com alçada (P-25 a) |
