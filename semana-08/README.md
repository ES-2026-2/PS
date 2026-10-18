# Semana 08 (Iteração 8) — UI Hi-Fi do Bloco A (Req. 01 a 05)

**Período:** 28/09/2026 a 04/10/2026
**Fase:** 3 — UI de Alta Fidelidade e Prototipagem Interativa
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md) · [`semana-06/`](../semana-06/README.md) · [`semana-07/`](../semana-07/README.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR1** | Elaboração da matriz de rastreabilidade do Bloco A | Concluído | Entregável 1 |
| **AR1** | Reconciliação da Semana 07 com a Semana 06 no recorte do Bloco A (P-30 da S7) | Concluído | Entregável 1, Seção 12 |
| **D1** | UI final das telas de conexão com e-mail/ERP | Fora deste repositório (Figma) | Insumos: Entregável 1, Seções 10 e 11 (HF-01 a HF-04) |
| **D1** | UI final do OCR de notas fiscais | Fora deste repositório (Figma) | Insumos: HF-05 a HF-08 |
| **D1** | UI final do Dashboard de Desperdício Financeiro | Fora deste repositório (Figma) | Insumos: HF-12 e HF-17 a HF-19 — **a tela nunca teve wireframe (LR-21)** |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Matriz de Rastreabilidade Preenchida para o Bloco A (REQ-01 ao REQ-05) | [entregavel-01-matriz-rastreabilidade-bloco-a.md](entregavel-01-matriz-rastreabilidade-bloco-a.md) | AR1 |
| 2 | Layouts Hi-Fi (Figma) da Ingestão de NFs, Categorização por IA e Desperdício | *Executado no Figma pela D1 — fora do escopo deste repositório.* O aceite usa a lista HF-01 a HF-24 e a massa canônica do Entregável 1 | D1 |
| 3 | Diagramas UML conforme `diagramasUML.md` | [entregavel-03-diagramas-uml.md](entregavel-03-diagramas-uml.md) | AR1 |

> **UML nesta iteração:** entrega formal do **Diagrama de Classes de Domínio v1.0** (35 classes,
> 12 enumerações cobrindo os 76 estados) e do **Diagrama de Pacotes v1.0** — ambos previstos
> para a Semana 07, que entregou um recorte e uma proposta e deixou as versões finais em aberto.
> Além disso: dependências `«trace»` do Bloco A e verificação transição × interface.

---

## Achado Principal da Iteração

> ### Nenhum requisito do Bloco A estava "Concluído" — e a tela do REQ-05 nunca foi desenhada.
> A matriz de `estudo_caso1.md` marca os 10 requisitos como concluídos, mas a rastreabilidade
> encontrou **28 lacunas** no Bloco A, 10 delas de severidade alta. A mais visível: a SCR-05
> (relatório de desperdício), justamente a tela que o cronograma pede em Hi-Fi nesta semana,
> **não tem wireframe** — o conteúdo do REQ-05 foi desenhado no M-07 sob o rótulo SCR-10.
> O detalhe do fornecedor (REQ-03), previsto no mapa de navegação desde a Semana 01, também
> nunca foi desenhado. **DEC-76:** "Concluído" passa a exigir evidência em todas as camadas e
> Hi-Fi aprovado contra a lista HF.

> ### Os números de exemplo contam a mesma economia duas vezes.
> O comparativo do M-07 (R$ 26.424,00/ano) já inclui a redução do Figma que o card do W-07
> recomenda (R$ 7.224,00), e ainda supõe, sem declarar, que todos os usuários do Canva Pro já
> usam o Figma. Somados, os dois davam R$ 33.648,00; o valor correto do plano é
> **R$ 20.232,00** — 40% menor. E o algoritmo do REC-03 previa comprar 6 licenças novas do
> Figma, que a RN04 bloquearia porque há 7 ociosas idênticas. **DEC-82:** consolidação
> reaproveita licenças ociosas antes de comprar, e recomendações sobre as mesmas licenças viram
> um plano combinado.

E dois achados do modelo:

> **10 dos 16 gatilhos humanos das máquinas do Bloco A não têm controle em nenhuma tela.** Os
> wireframes pararam antes das saídas que encerram o ciclo de vida: `Tratada`, `Descartada`,
> `Revogada`, `Recusada`. Sem *"Registrar desfecho"*, uma renovação bloqueada por divergência
> crítica nunca seria liberada — nem pela interface, nem pela API da Semana 07, que também não
> tem o estado `tratada` (GI-09, CU-11).

> **A Semana 07 e a Semana 06 discordam em 14 pontos do Bloco A.** A Semana 07 foi feita sem
> acesso à 06: a API não tem `revogada` nem `tratada`, o recorte de classes põe o pseudônimo na
> licença (a realocação da RN04 trocaria a identidade de quem usa) e os badges do protótipo
> usam ícones diferentes dos fixados no Design System. O conflito mais sutil — quando a
> conexão vira `Ativa` — já existia entre a máquina da Semana 06 e o CT-01.1 da Semana 02;
> a API da Semana 07 só o tornou visível (**DEC-85**).

---

## Números da Iteração

| Indicador | Valor |
|:---|:---|
| Requisitos rastreados | 5 (REQ-01 a REQ-05) em 9 camadas (L1 a L9) |
| Cenários BDD rastreados | 45 existentes + **8 propostos** (CT-01.9, CT-02.14, CT-02.15, CT-03.8, CT-04.13, CT-04.14, CT-05.6, CT-05.7) |
| Lacunas de rastreabilidade | **28** (`LR-01` a `LR-28`): 10 alta · 10 média · 8 baixa — 7 fechadas no modelo nesta iteração |
| Inconsistências de dados de exemplo | 8 (`IC-01` a `IC-08`), todas resolvidas pela massa canônica |
| Divergências Semana 07 × Semana 06 | 14 (`RS-01` a `RS-14`) |
| Itens da lista de verificação do Hi-Fi | 24 (`HF-01` a `HF-24`) |
| Gatilhos humanos verificados nas máquinas | 16 (`GI-01` a `GI-16`): 4 com controle · 2 parciais · 10 sem controle |
| Estados com badge exemplificados nos wireframes | 12 de 42 (29%) — 15 a acrescentar no Hi-Fi |
| Diagrama de Classes v1.0 | 35 classes (15 raízes, 9 entidades, 11 *value objects*) · 12 enumerações de estado = 76 estados |
| Diagrama de Pacotes v1.0 | 2 contextos *core*, 7 *supporting*, 3 genéricos, 1 isolado, 5 adaptadores na ACL |
| Correções em artefatos anteriores | 14 (`CU-01` a `CU-14`) |
| Mensagens propostas ao Design System | 4 (`MSG-16` a `MSG-19`) |
| Órfãos na matriz reversa | 0 — todo elemento de tela aponta para um requisito |

---

## Decisões de Projeto Tomadas nesta Iteração

A Semana 07 usa DEC-66 a DEC-75; a numeração desta iteração começa em DEC-76.

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-76 | "Concluído" exige L1 a L9 sem lacuna nem desatualização e Hi-Fi aprovado contra os itens HF | A coluna de status de `estudo_caso1.md` passa a ser meta, não medição |
| DEC-77 | REQ-04 e REQ-05 pertencem ao Bloco A; *tags* `@BlocoB` lidas como `@BlocoA` | Fecha a ambiguidade criada pelo título da Semana 03 |
| DEC-78 | Massa de dados canônica do Bloco A, com regras de derivação R1 a R8 | **Resolve P-25 (b)** para o Bloco A |
| DEC-79 | Indicador de redundância: 2+ fornecedores em categoria de redundância alta; média só com a mesma subcategoria | Evita recomendar consolidar GitHub e Jira |
| DEC-80 | Limiares vigentes de E1 (0,88 / 0,75) e E2 (0,80) | Fecha três versões divergentes do limiar de E1 |
| DEC-81 | "Pendente de revisão" do fornecedor é atributo, não estado | Coerência entre CT-03.2, dicionário e máquinas |
| DEC-82 | Consolidação reaproveita licenças ociosas; recomendações concorrentes viram plano combinado | Elimina a contagem dupla e o conflito com a RN04 |
| DEC-83 | O relatório mensal de desperdício é a SCR-05; a SCR-10 fica com exportação e LGPD | Corrige o rótulo do M-07 |
| DEC-84 | O relatório mensal é retrato imutável do mês fechado | Classe `ApuracaoMensalDesperdicio` na v1.0 |
| DEC-85 | `Conexão` fica `Ativa` ao validar a credencial; a primeira carga é acompanhada pela `Sincronizacao` | Resolve o conflito entre máquina, CT-01.1 e OpenAPI |
| DEC-86 | `NF ausente` é situação do `LancamentoCartao` | Resolve a P-42 |

---

## Arquivos de Outras Semanas

Esta iteração **não altera nenhum arquivo das Semanas 01 a 07.** As correções encontradas ficam
registradas aqui e prevalecem, para que os responsáveis de cada semana as apliquem:

| Onde | Correção registrada |
|:---|:---|
| Semanas 02 a 07 | CU-01 a CU-14 (Entregável 3, Parte V); texto exato das CU-10 a CU-14 na Seção 18.1, incluindo três testes da Semana 07 que precisam mudar junto |
| `semana-06/entregavel-01-design-system-saas-b2b.md` | **P-37** — o commit `60dc076` gravou ali uma revisão do dicionário de dados. Restaurar a versão de `c13f5dd` e mover a revisão para o `entregavel-02`. Até lá, esta iteração cita o Design System pela versão `c13f5dd` |
| Revisão do dicionário (hoje no arquivo do Design System) | **P-38** — numera duas pendências como P-30 e P-31, números que a Semana 07 também usa |

As decisões e pendências desta iteração começam em DEC-76 e P-37 para não colidir com a
Semana 07.

---

## Pendências Anteriores Resolvidas

| ID | Pendência | Como foi resolvida |
|:---|:---|:---|
| **P-25 (b)** | Preço do Figma divergente entre telas (R$ 72,00 × R$ 86,00) | Massa canônica com R$ 86,00 e regras de derivação (DEC-78) |
| **P-30 (S7)** | Reconciliar a Semana 07 com os entregáveis da Semana 06 | Resolvida no recorte do Bloco A: RS-01 a RS-14 e Classes v1.0; Bloco B na Semana 09 |
| **P-33 (S7)** | Alinhar `x-papeis` com a matriz de visibilidade | Compatível no escopo `/erp/*` (RS-12); recomenda-se usar os códigos de papel de ENT-02 |
| **P-35 (S7)** | Formato do pseudônimo na UI | A DEC-53 já define o formato (RS-13) |
| Semana 06, item 1 | Entrega formal do Diagrama de Classes de Domínio | v1.0 no Entregável 3 |
| Semana 06, item 2 | Diagrama de Pacotes | v1.0 no Entregável 3 |

### Pendências ainda abertas

| ID | Item | Prazo |
|:---|:---|:---|
| P-03 · P-04 | Teste de isolamento multi-tenant (CTL-10) e anexo de transferência internacional (CTL-14) | Venciam na Semana 07, que registrou não tê-las tratado — precisam de decisão da equipe |
| P-06 | Cabeçalho da Fase 1 incompleto em `estudo_caso1.md` | Correção não aplicada — fora do escopo |
| P-07 · P-12 · P-18 | Parâmetros pendentes de homologação | **23 parâmetros** (22 anteriores + 1 desta iteração) — aguardam o cliente |
| P-11 | Curvas emocionais das jornadas são hipóteses | Semana 12 |
| P-13 | Contratação emergencial fora do fluxo de aprovação | Depende do cliente |
| P-15 | Densidade da tabela de licenças com 4.000+ linhas | Medição na Semana 10; o protótipo da S7 não tem paginação |
| P-17 | Texto do resumo de conformidade (RI-03) | Aguarda o DPO |
| P-21 | Revisão jurídica das mensagens de regra | Aguarda o jurídico — agora inclui MSG-16 a MSG-19 |
| **P-25 (a)** | Modal de downgrade dispensa aprovação acima do teto da RN01 | Semana 09 — a massa canônica confirma VME de R$ 602,00 (downgrade isolado) e R$ 1.686,00 (plano combinado), ambos acima de R$ 500,00 |
| P-26 · P-28 | Prazos de retenção a validar com o DPO | Homologação |
| P-27 · P-32 (S7) | Leitor de tela, tablet físico e medição do RNF-06 em navegador real | Semanas 10 e 12 — esta iteração também não teve navegador |
| P-29 | WCAG 1.4.10 (Reflow) abaixo de 768 px | Decidir com o cliente |
| P-31 (S7) · P-34 (S7) · P-36 (S7) | Hex dos tokens no Figma · contato e ambientes da API · escopo da API além de `/erp/*` | D1 · equipe · Semana 14 |

---

## Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-37 | Design System da Semana 06 sobrescrito pelo commit `60dc076` | Responsáveis pela Semana 06: restaurar `c13f5dd` e mover a revisão para o dicionário |
| P-38 | Pendências P-30 e P-31 da revisão do dicionário colidem com as da Semana 07 | Renumerar ao aplicar a P-37 |
| P-39 | RNF-05 (50.000 transações/min) sem validação nem condição de arquitetura | Validação analítica com o Diagrama de Implantação (Semanas 10 e 11) |
| P-40 | Destinatário do botão `NOTIFICAR` em M-02 | Decidir antes do roteiro de usabilidade (Semana 11) |
| P-41 | Efeito da contestação de ociosidade por E4 | Decidir com o cliente |
| P-42 | `NF ausente` (BR-07): estado do lançamento ou sinal do motor | **Resolvida nesta iteração** (DEC-86) |
| P-43 | RNF-03 (uptime de 99,9%) sem rastro em nenhum artefato | Diagrama de Implantação (Semana 11) |
| P-44 | Subcategorias funcionais para categorias de redundância média | Homologação — necessária para a DEC-79 |

---

## Entradas para a Semana 09 (UI Hi-Fi — Bloco B)

- **Estrutura da matriz** (Entregável 1, Seções 3 a 9) → modelo para a matriz do Bloco B
  (REQ-06 a REQ-10), com as mesmas camadas, legenda e critério de "Concluído".
- **Reconciliação da Semana 07** (Entregável 1, Seção 12) → repetir para `Requisição`,
  `Alerta` e `Ação`; a Vista 4 do Diagrama de Classes v1.0 aguarda revisão da AR2.
- **Método da Parte II do Entregável 3** → verificação transição × interface das máquinas do
  Bloco B.
- **P-25 (a)** → o modal de ação (M-04) precisa exigir o Gestor Financeiro: a massa canônica
  confirma VME acima de R$ 500,00 no downgrade do Figma e no plano combinado.
- **DEC-83** → a SCR-10 fica só com exportação e LGPD; o botão *"Exportar"* da SCR-05 leva a ela
  herdando filtros e máscara.
- **W-04 (Dashboard de ROI)** cita *"7 recomendações, R$ 62.400,00"*; a massa canônica do Bloco A
  tem 5 recomendações. Declarar no Hi-Fi da SCR-08 se é outro cenário de tenant ou alinhar.
- **CU-10 a CU-14** → trechos prontos no Entregável 3, Seção 18.1, para os responsáveis
  aplicarem na OpenAPI, no protótipo e na máquina `Conexão`. Três testes da Semana 07 (validador
  da OpenAPI, rótulo do KPI e contraste do *hover*) precisam mudar no mesmo commit.
