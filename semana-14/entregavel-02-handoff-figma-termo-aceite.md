# Entregável 2 — Link Final do Figma com Handoff para Desenvolvedores e Termo de Aceite do Protótipo

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 14 (09/11/2026 – 15/11/2026) — Handoff Técnico e Encerramento  
**Responsável:** D1 / D2 (Designers), com AR1 / AR2  
**Situação:** ⏳ **Pendente de aceite** — pacote de handoff descrito e termo redigido; **termo não assinado** e preparação do arquivo no Figma a conferir  
**Prazo:** 15/11/2026  

---

## 1. Objetivo e situação

Entregar ao time de Engenharia o endereço do protótipo, o que ele contém, como lê-lo e em que
condições ele é aceito. Este documento tem duas partes: o **pacote de handoff** (Seções 2 a 6)
e o **Termo de Aceite** (Seção 7).

| Item | Situação nesta versão |
|:---|:---|
| Link do arquivo no Figma | ✅ Registrado (Seção 2) — o mesmo das Semanas 08 a 11 |
| Inventário de telas e de capturas | ✅ Pronto (Seção 3) |
| Guia de leitura para desenvolvedores | ✅ Pronto (Seções 4 e 5) |
| Preparação do arquivo para handoff no Figma | ⏳ A conferir pela D1/D2 (Seção 6) |
| Versão final do protótipo, com os ajustes da Semana 13 | ◐ 12 de 14 ajustes aplicados; `AJ-11` aguarda a P-62 |
| Termo de Aceite | ⏳ Redigido; **sem assinatura** (Seção 7) |

> **O que este documento não afirma.** O arquivo do Figma não foi aberto nesta iteração. O
> inventário abaixo vem dos registros de entrega das Semanas 08 a 11 e das capturas versionadas
> em `wireframes/`. A Seção 6 lista o que precisa ser conferido no próprio arquivo antes do
> aceite. Um termo de aceite só vale com a assinatura de quem aceita, e nenhuma foi
> preenchida aqui.

---

## 2. Link do Figma

| Item | Valor |
|:---|:---|
| Arquivo | [Projeto de Software — Figma](https://www.figma.com/design/3XaNdOU1zdQisXFuDrvB6O/Projeto-de-Software) |
| Quadro das telas | "02 · Wireframes", um quadro por tela (registro da Semana 08) |
| Ponto de partida do protótipo | HF-41 — Estado vazio da SCR-01 (*Início — primeiro acesso*) |
| Versão de referência | Protótipo ligado na Semana 11, com a correção da P-50 |
| Versão final (com os ajustes da Semana 13) | No mesmo arquivo: 12 de 14 ajustes aplicados; `AJ-11` aguarda a P-62 |
| Permissão de acesso para a Engenharia | A conferir (Seção 6) |

---

## 3. O que o protótipo contém

### 3.1. Telas

| Grupo | Telas | Quantidade | Origem |
|:---|:---|:---:|:---|
| Telas principais com barra lateral | SCR-01, SCR-02, SCR-02b, SCR-02c, SCR-03a, SCR-03b, SCR-04, SCR-05, SCR-06, SCR-07, SCR-08, SCR-09, SCR-09b, SCR-10a | 14 | Semanas 08 e 09 |
| Variantes tablet (768 px) | Uma por tela principal de lista ou painel | 10 | Semanas 08 e 09 (HF-20, HF-36) |
| Telas de exceção | HF-41, HF-42, HF-43, HF-44, HF-46, HF-47 | 6 | Semana 10 |
| Estados de carregamento | HF-21, HF-37 | 2 | Semanas 08 e 09 |
| **Subtotal com barra lateral** | | **32** | Semana 11, Entregável 1, Seção 2 |
| Modais (sem barra lateral) | SCR-07a (downgrade), SCR-07b (cancelamento) | 2 | Semana 09 |
| Portal do Titular (fora do console) | SCR-10b | 1 | Semana 09 |
| Padrão de dado mascarado | HF-45 | 1 | Semana 10 |

### 3.2. Navegação

| Tipo | Quantidade | Detalhe |
|:---|:---:|:---|
| Ligações da barra lateral | 248 | 8 itens × 32 telas, menos os 8 casos em que o item é a própria tela; transição `DISSOLVE` de 0,2 s |
| Ligações de aprofundamento | 9 | Semana 11, Entregável 1, Seção 4 |
| Requisitos alcançáveis por clique | 10 de 10 | Semana 11, Entregável 1, Seção 3 |

### 3.3. Capturas versionadas

As capturas em PNG são a referência visual fora do Figma.

| Pasta | Conteúdo | Arquivos |
|:---|:---|:---:|
| [`wireframes/semana-04/`](../wireframes/semana-04/) | Lo-Fi | 7 |
| [`wireframes/semana-05/`](../wireframes/semana-05/) | Mid-Fi | 6 |
| [`wireframes/semana-08/`](../wireframes/semana-08/) | Hi-Fi do Bloco A (SCR-01 a SCR-05) | 16 |
| [`wireframes/semana-09/`](../wireframes/semana-09/) | Hi-Fi do Bloco B (SCR-06 a SCR-10) | 15 |
| [`wireframes/semana-10/`](../wireframes/semana-10/) | Telas de exceção (HF-41 a HF-47) | 7 |

A lista arquivo a arquivo está nos registros de entrega: [S8·E2](../semana-08/entregavel-02-layouts-hifi-figma.md),
[S9·E2](../semana-09/entregavel-02-layouts-hifi-figma.md) e [S10·E1](../semana-10/entregavel-01-pacote-telas-excecao.md).

---

## 4. Guia de leitura para desenvolvedores

### 4.1. Da tela ao requisito

Cada tela tem um identificador `SCR-xx` que leva ao requisito, aos cenários e à máquina de
estados. A tabela completa é a [matriz de rastreabilidade final](anexo-a-matriz-rastreabilidade-final.md).

| Para implementar a tela… | Leia também |
|:---|:---|
| SCR-01 — Conexões | CT-01.x (S2·E1) · máquina `Conexão` (S6·E3) · OpenAPI (S7·E1) |
| SCR-02 — Faturas e divergência | CT-02.x (S2·E1) · regras RN05.1 a RN05.10 (S2·E2) · máquina `Fatura` |
| SCR-03 — Inventário e fornecedor | CT-03.x (S2·E1) · motor de catalogação (S4·E1) |
| SCR-04 — Licenças ociosas | CT-04.x (S3·E1) · RN02 (S3·E2) · máquina `Licença` |
| SCR-05 — Relatório de desperdício | CT-05.x (S3·E1) · classe `ApuracaoMensalDesperdicio` (S8·E3) |
| SCR-06 — Alertas | CT-06.x (S3·E1) · máquina `Alerta` · auditoria da RN03 (S10·E2) |
| SCR-07 — Ações | CT-07.x (S3·E1) · máquina `Ação` · janela de 72 h (DEC-20) |
| SCR-08 — Dashboard de ROI | CT-08.x (S3·E1) · DEC-21 e DEC-29 |
| SCR-09 — Requisições | CT-09.x (S3·E1) · RN01 e RN04 (S3·E2) · máquina `Requisição` · auditoria da RN04 (S10·E2) |
| SCR-10 — Exportação e Portal do Titular | CT-10.x (S3·E1) · DEC-26 a DEC-28 |

### 4.2. Regras de interface que não aparecem no desenho

Decisões que valem para todas as telas e que uma captura de tela não revela:

| Regra | Decisão |
|:---|:---|
| Nenhum estado é comunicado só por cor | DEC-06 |
| O rótulo do badge é o nome do estado na máquina, com anatomia fixa | DEC-49 |
| Ação bloqueada aparece desabilitada, com o motivo visível; nunca é omitida | DEC-39 |
| Antes de ação destrutiva, a prévia mostra quem perde acesso, há quanto tempo não usa e por qual evidência | DEC-38 |
| A economia realizada é o primeiro elemento do dashboard | DEC-29 |
| Listas de divergência ordenam por severidade, e não por data | DEC-37 |
| Tabelas têm prioridade de coluna (Alta, Média, Baixa) para o tablet | DEC-52 |
| Colaboradores aparecem por pseudônimo (`COL-` e prefixo único) | DEC-53 |
| Todo texto de regra vem do catálogo `MSG` | S6·E1, Seção 11 |

### 4.3. Valores de exemplo

Os números exibidos nas telas Hi-Fi seguem a **massa canônica** (S8·E1 e S9·E1, Seção 10). Os
valores dos wireframes Lo-Fi e Mid-Fi estão superados. O período e o filtro da SCR-10a foram
alinhados na Semana 13 (`AJ-09`, `AJ-10`). Um ponto do Hi-Fi ainda diverge da massa canônica: a
contagem de recomendações da SCR-08 (`AJ-11`, P-62).

---

## 5. Design System

| Item | Onde está |
|:---|:---|
| Documento do Design System | [S6·E1](../semana-06/entregavel-01-design-system-saas-b2b.md) |
| Tokens (cor, tipografia, espaçamento, raio, elevação, movimento) | S6·E1, Seções 3 a 7 |
| Arquivo de tokens v1.0, formato W3C Design Tokens | S6·E1, Seção 14 |
| Componentes | 22 (`CMP-01` a `CMP-22`) — S6·E1, Seção 9 |
| *Templates* de página | 5 (`TPL-01` a `TPL-05`) |
| Badges de estado das 8 máquinas | S6·E1, Seção 10 |
| Mensagens de regra (`MSG`) | S6·E1, Seção 11 |
| Acessibilidade WCAG 2.1 AA | S6·E1, Seção 8 |
| Grid e responsividade (RNF-09) | S6·E1, Seção 6 |
| Implementação de referência em HTML/CSS (tabela e gráficos) | [S7·E2](../semana-07/entregavel-02-biblioteca-componentes-ui.md) · `semana-07/ui-components/` |

**Ressalvas do Design System para a Engenharia:**

- O valor hexadecimal dos tokens no documento ainda não foi conferido contra o Figma (P-31).
- A biblioteca em código da Semana 07 usa ícones e tons de badge diferentes dos do Design
  System; a correção está registrada e não aplicada (CU-12). **Vale o Design System.**
- As mensagens `MSG-16` a `MSG-19` são propostas e não constam no catálogo (S13, Anexo A, Seção 5).
- Leitor de tela e tablet físico nunca foram testados (P-27).

---

## 6. Preparação do arquivo no Figma (a conferir pela D1/D2)

Itens que só podem ser conferidos dentro do arquivo. Nenhum foi marcado nesta versão.

- [ ] Engenharia com acesso de visualização ao arquivo e ao modo de inspeção para desenvolvedores
- [ ] Quadros nomeados pelo identificador da tela (`SCR-xx`, `HF-xx`); o quadro "M-01" já foi corrigido para "M-06" (P-45, `AJ-13`)
- [ ] Componentes das telas como instâncias do Design System, sem estilo local (a Semana 10 encontrou badges feitos com texto colorido na SCR-09, já corrigidos)
- [ ] Estilos de cor e de texto ligados aos tokens, e não a valores soltos
- [ ] Telas prontas separadas de rascunhos e de versões antigas (Lo-Fi e Mid-Fi)
- [ ] Ponto de partida do protótipo em HF-41 e fluxo percorrível de T1 a T8
- [x] Ajustes `AJ-01` a `AJ-13` aplicados e capturas reexportadas, exceto o `AJ-11` (P-62)
- [ ] Imagens e ícones marcados para exportação
- [ ] Versão nomeada no histórico do arquivo (por exemplo, "Handoff v1.0") e registrada na Seção 2

---

## 7. Termo de Aceite do Protótipo

> **Minuta.** O texto abaixo está pronto para ser assinado. Enquanto os campos de assinatura
> estiverem em branco, **o protótipo não está aceito**.

### TERMO DE ACEITE DO PROTÓTIPO DE ALTA FIDELIDADE

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Objeto:** protótipo navegável de alta fidelidade, publicado no arquivo "Projeto de Software" do Figma  
**Versão aceita:** `____________________` (nome da versão no histórico do Figma)  
**Data da versão:** `____ / ____ / ________`

#### 7.1. O que está sendo aceito

1. As telas SCR-01 a SCR-10, as variantes tablet, as telas de exceção e os estados de
   carregamento listados na Seção 3.1.
2. A navegação do protótipo, que alcança os 10 requisitos funcionais.
3. A aplicação do Design System da Semana 06 às telas.
4. A documentação que acompanha o protótipo: o [Dossiê de Engenharia de Requisitos](entregavel-01-dossie-engenharia-requisitos.md)
   e seus anexos.

#### 7.2. O que **não** está sendo aceito

1. Código de produção. A biblioteca da Semana 07 é referência, e não entrega de software.
2. Medição de desempenho, disponibilidade ou escala (RNF-03, RNF-04, RNF-05, RNF-06 e RNF-10).
3. A especificação de API além das integrações de ERP.
4. Qualquer afirmação sobre a usabilidade percebida pelos usuários, enquanto a ressalva R1
   estiver marcada.

#### 7.3. Ressalvas na data do aceite

Marcar a situação de cada ressalva na data da assinatura. Uma ressalva em aberto não impede o
aceite, desde que fique registrada.

| # | Ressalva | Referência | Resolvida? |
|:--|:---|:---|:---:|
| R1 | Testes de usabilidade com os usuários-alvo não realizados; só 1 sessão simulada pela equipe (SUS 90, n = 1) | S13·E1 · P-60 | ☐ Sim ☐ Não |
| R2 | Ajuste `AJ-11` do protótipo não aplicado (depende da P-62); os demais foram aplicados | S13·E2 | ☐ Sim ☐ Não |
| R3 | Decisões DEC-66 a DEC-100 não ratificadas | Anexo B · P-63 | ☐ Sim ☐ Não |
| R4 | Correções CU-01 a CU-14 não aplicadas aos documentos de origem | S13, Anexo A | ☐ Sim ☐ Não |
| R5 | API restrita a `/erp/*`, com duas enumerações incompletas e testes sem execução registrada | Dossiê, Seção 7 · P-36 · P-66 | ☐ Sim ☐ Não |
| R6 | 23 parâmetros de regra sem homologação do cliente | P-07 · P-12 · P-18 | ☐ Sim ☐ Não |
| R7 | Pendências de conformidade com DPO e jurídico | P-04 · P-17 · P-21 · P-26 · P-28 | ☐ Sim ☐ Não |
| R8 | Tablet físico e leitor de tela não testados | P-27 | ☐ Sim ☐ Não |
| R9 | Arquivo do Figma preparado para handoff (Seção 6) | Seção 6 | ☐ Sim ☐ Não |

#### 7.4. Declaração

Os abaixo assinados declaram que examinaram o protótipo na versão indicada, que ele corresponde
ao objeto descrito na Seção 7.1 e que o aceitam com as ressalvas marcadas na Seção 7.3, as quais
ficam registradas como trabalho remanescente.

| Papel | Nome | Assinatura | Data |
|:---|:---|:---|:---|
| AR1 — Analista de Requisitos (Bloco A) | | | |
| AR2 — Analista de Requisitos (Bloco B) | | | |
| D1 — Designer (Bloco A) | | | |
| D2 — Designer (Bloco B) | | | |
| Representante do time de Engenharia | | | |
| Orientador ou cliente | | | |

---

## 8. Decisões e pendências

Nenhuma decisão nova.

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-65 | Termo de Aceite sem assinatura e sem versão do Figma indicada | Equipe: conferir a Seção 6, publicar a versão e colher as assinaturas |

---

## 9. Rastreabilidade deste documento

| Fonte | Onde está | Uso aqui |
|:---|:---|:---|
| Registros de entrega do Hi-Fi | S8·E2 · S9·E2 · S10·E1 | Inventário de telas e capturas |
| Protótipo navegável | S11·E1 | Contagem de ligações e ponto de partida |
| Ajustes pendentes | S13·E2 | Ressalva R2 e Seção 6 |
| Design System | S6·E1 | Seção 5 |
| Dossiê | Entregável 1 desta semana | Documentação que acompanha o aceite |
