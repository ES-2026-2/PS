# Semana 06 (Iteração 6) — Design System SaaS Corporativo

**Período:** 14/09/2026 a 20/09/2026
**Fase:** 2 — Wireframing e Design System
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação | Onde está |
|:---|:---|:---:|:---|
| **AR1 / AR2** | Documentação do dicionário de dados | Concluído | Entregável 2, Partes A e B |
| **AR1 / AR2** | Regras de anonimização (LGPD-01) | Concluído | Entregável 2, Parte C |
| **D1 / D2** | Tipografia e paleta | Concluído | Entregável 1, Seções 4 e 5 |
| **D1 / D2** | Acessibilidade WCAG | Concluído | Entregável 1, Seções 4.3 e 8 |
| **D1 / D2** | Componentes de gráficos e tabelas responsivas (RNF-09) | Concluído (especificação) | Entregável 1, Seções 9.3 a 9.5 — biblioteca finalizada na Semana 07 |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Design System SaaS B2B Completo (Componentes, Tipografia, Grids) | [entregavel-01-design-system-saas-b2b.md](entregavel-01-design-system-saas-b2b.md) | D1 / D2 |
| 2 | Dicionário de Dados e Regras de Anonimização de Colaboradores (LGPD-01) | [entregavel-02-dicionario-dados-anonimizacao-lgpd01.md](entregavel-02-dicionario-dados-anonimizacao-lgpd01.md) | AR1 / AR2 |
| 3 | Diagramas UML conforme `diagramasUML.md` | [entregavel-03-diagramas-uml.md](entregavel-03-diagramas-uml.md) | AR1 / AR2 |

> **UML nesta iteração:** entrega formal do **Diagrama de Máquina de Estados** (v1.0, 8
> máquinas, 76 estados) e rascunho v0.1 do **Diagrama de Classes de Domínio**, cuja entrega
> formal é na Semana 07.

---

## Achado Principal da Iteração

> ### O pseudônimo `COL-8f2a` dos wireframes colide em quase todo cliente real.
> Com 4 caracteres hexadecimais há 65.536 pseudônimos possíveis. Em um tenant com 700
> colaboradores, a probabilidade de duas pessoas receberem o mesmo pseudônimo é de **cerca de
> 98%**. Além disso, o "SHA-256 + salt" da Semana 01 é reversível por quem tiver acesso ao banco,
> porque e-mails corporativos são enumeráveis. **DEC-53:** HMAC com chave por tenant no KMS e
> prefixo único de no mínimo 4 caracteres — o formato desenhado é preservado.

> ### A revisão das máquinas de estado encontrou 19 problemas, incluindo um estado-armadilha.
> Na v0.1, uma licença em `Em downgrade` não tinha saída quando o downgrade **dava certo**
> (ME-01). A revisão também mostrou que a etapa *"envio ao fornecedor"* do M-05 contradiz a
> DEC-02: com credenciais somente-leitura, o sistema não consegue cancelar nada no fornecedor.
> **DEC-63:** a execução é humana e confirmada na plataforma, com estado `Em execução`.

E um achado secundário, de consistência entre artefatos:

> O M-04 (Semana 05) mostra um downgrade com *"nenhuma aprovação adicional"* e VME afetado de
> R$ 504,00/mês — valor que já está **acima do teto de R$ 500,00 da RN01** e, pela DEC-19, exige
> o Gestor Financeiro. O mesmo exemplo usa R$ 72,00 por licença do Figma, contra R$ 86,00 do
> inventário (W-06) e do comparativo (M-07). Registrado como **P-25**, para correção no Hi-Fi.

---

## Números da Iteração

| Indicador | Valor |
|:---|:---|
| Componentes especificados | 22 (`CMP-01` a `CMP-22`) |
| Primitivos de cor | 27 (15 novos) |
| Pares de contraste verificados | 20 aprovados (`CC-01` a `CC-20`) · 4 pares proibidos |
| Estilos tipográficos | 10, com variação para tablet |
| *Templates* de página | 5 (`TPL-01` a `TPL-05`) |
| Mensagens de regra padronizadas | 15 (`MSG-01` a `MSG-15`) |
| Estados com badge definido | 68 visíveis de 76 (8 internos ou nominais) |
| Entidades no dicionário de dados | 24 (`ENT-01` a `ENT-24`) + `audit_log` |
| Dados pessoais inventariados | 10 (`DP-01` a `DP-10`, 4 novos) |
| Regras de anonimização | 14 (`AN-01` a `AN-14`) |
| Chaves com política de rotação | 6 (`CH-01` a `CH-06`) |
| Verificações de conformidade automatizáveis | 17 (`VC-01` a `VC-17`) |
| Termos no glossário da Linguagem Onipresente | 31 |
| Máquinas de estado entregues | 8 · 76 estados · 128 transições · 29 terminais |
| Achados da revisão das máquinas | 21 (`ME-01` a `ME-21`): 20 problemas nas máquinas existentes + 3 máquinas faltantes |
| Regras de sincronização entre máquinas | 13 (`SY-01` a `SY-13`) |
| Classes no rascunho do diagrama de domínio | 18 (10 raízes de agregado, 5 entidades, 3 *value objects*) |

---

## Decisões de Projeto Tomadas nesta Iteração

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-47 | Texto sobre fundo de status usa os tons 700/800; verde e âmbar 600 só em elementos não textuais | **Resolve P-01** |
| DEC-48 | Placeholder passa de `slate.400` (2,6:1) para `slate.500` (4,8:1) | A v0.1 liberava para placeholder um par reprovado para texto |
| DEC-49 | Badge com anatomia fixa e rótulo igual ao nome do estado na máquina | A UI vira veículo da Linguagem Onipresente |
| DEC-50 | Gráfico de ROI em tablet com legenda de valores, eixo a cada 2 meses e tooltip por toque | **Resolve P-16** |
| DEC-51 | Visualizador de NF em tablet com painéis empilhados, pinça, toque duplo e rotação por botão | **Resolve P-20** |
| DEC-52 | Tabelas com prioridade de coluna Alta/Média/Baixa | Tabelas densas legíveis em 8 colunas (RNF-09) |
| DEC-53 | Pseudônimo por HMAC-SHA-256 com chave por tenant; prefixo único de no mínimo 4 caracteres | Elimina colisão e reversão por enumeração |
| DEC-54 | k = 5 com supressão complementar e generalização do setor em visões por linha | Impede reidentificação por subtração |
| DEC-55 | Chave de pseudonimização sem rotação programada | Preserva a continuidade dos pseudônimos |
| DEC-56 | Licenças *floating* apuradas por pool (capacidade − pico concorrente) | **Resolve P-14** |
| DEC-57 | Integração de RH recebe o período do afastamento, nunca o motivo | Evita tratar dado de saúde (Art. 11) |
| DEC-58 | Pseudonimizado é dado pessoal; só agregado com k ≥ 5 é anonimizado | Enquadramento correto na LGPD |
| DEC-59 | NF armazenada como cópia redigida | A máscara vale também para a imagem |
| DEC-60 | Nome do portador do cartão corporativo não é importado | Minimização na origem |
| DEC-61 | Assinatura `Ociosa` só com 100% das licenças avaliáveis ociosas e cobertura ≥ 80% | **Resolve P-22** |
| DEC-62 | Requisição atendida por realocação ganha estado terminal próprio | Economia evitada pela RN04 fica mensurável |
| DEC-63 | `Ação sobre Assinatura` é entidade com máquina própria; execução humana e confirmada | Coerência com a DEC-02 |
| DEC-64 | `Assinatura` com estado composto e quatro regiões ortogonais | Elimina combinações inalcançáveis |
| DEC-65 | Fonte Mermaid versionada é o artefato oficial dos diagramas; imagens só no handoff | Fecha a pendência 2 da Semana 05 |

---

## Pendências Anteriores Resolvidas

| ID | Pendência | Como foi resolvida |
|:---|:---|:---|
| **P-01** | Contraste de `green.600` e `amber.600` reprovado no WCAG AA | `green.700` e `amber.800` para texto; 20 pares verificados (DEC-47) |
| **P-02** | Política de rotação de chaves (CTL-04) | 6 chaves com rotação programada e por incidente (Entregável 2, Seção 17) |
| **P-14** | Licenças *floating* | Apuração por pool, sem estado por colaborador (DEC-56) |
| **P-16** | Gráfico de ROI em tablet | DEC-50 |
| **P-20** | Zoom e rotação do visualizador de PDF em tablet | DEC-51 |
| **P-22** | Proporção mínima de licenças ociosas para a assinatura ficar `Ociosa` | DEC-61 |
| Semana 05, item 1 | Entrega formal do Diagrama de Máquina de Estados | 8 máquinas em v1.0, verificadas em V1 a V4 |
| Semana 05, item 2 | Imagens oficiais dos diagramas | DEC-65 |
| Semana 05, item 4 | Iniciar o Diagrama de Classes de Domínio | 18 classes em v0.1 |

### Pendências ainda abertas

| ID | Item | Prazo |
|:---|:---|:---|
| P-03 | Plano de teste de isolamento multi-tenant (CTL-10) | Semana 7 |
| P-04 | Anexo contratual de transferência internacional (CTL-14) | Semana 7 |
| P-06 | Cabeçalho da Fase 1 incompleto em `estudo_caso1.md` | Correção não aplicada — fora do escopo |
| P-07 · P-12 · P-18 | Parâmetros pendentes de homologação | **22 parâmetros** (20 da Semana 05 + 2 desta iteração) — aguardam o cliente |
| P-11 | Curvas emocionais das jornadas são hipóteses | Semana 12 |
| P-13 | Contratação emergencial fora do fluxo de aprovação | Segue aberta — depende do cliente |
| P-15 | Densidade da tabela de licenças com 4.000+ linhas | Prioridade de coluna e paginação especificadas (CMP-08); medição na Semana 10 |
| P-17 | Texto do resumo de conformidade (RI-03) | **Rascunho entregue** (Entregável 2, Seção 20) — aguarda o DPO |
| P-21 | Revisão jurídica das políticas exibidas em tela | **Texto entregue** (Entregável 1, Seção 11) — aguarda o jurídico |
| P-23 | Premissas `P1` a `P12` do modelo de validação | Fase de implementação |
| P-24 | Cotas reais de requisição dos provedores de e-mail | Antes da implementação — risco RV-02 |
| RV-05 | Recusa da janela de 90 dias pelo cliente | Escalar na homologação |

---

## Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-25 | M-04 dispensa aprovação com VME de R$ 504,00, acima do teto da RN01; preço do Figma divergente (R$ 72,00 × R$ 86,00) | Corrigir no Hi-Fi — Semanas 08 e 09 |
| P-26 | Marco inicial da retenção de 12 meses de DP-01 e DP-02 | Validar com o DPO |
| P-27 | Validação com leitor de tela real (NVDA, VoiceOver) e tablet físico | Semanas 10 e 12 |
| P-28 | Prazo de 60 meses do `audit_log` e tratamento do período de afastamento | Homologar com o DPO |
| P-29 | WCAG 1.4.10 (Reflow) não atendido abaixo de 768 px (DEC-07) | Decidir com o cliente na homologação |

---

## Entradas para a Semana 07 (Consolidação dos Componentes)

- **Especificação dos componentes CMP-08 (tabela), CMP-10 e CMP-11 (gráficos)** → biblioteca
  finalizada de tabelas responsivas e gráficos de desperdício (RNF-09, RNF-06).
- **Seção 10 do Entregável 1 (68 badges)** → finalização dos badges de status (`Divergente`,
  `Ociosa`, `Pendente de revisão` e os demais).
- **Dicionário de dados (Entregável 2, Parte B)** → esquemas da especificação OpenAPI (RNF-08);
  matriz de visibilidade (Seção 15) → `security schemes` e escopos.
- **Coluna *Contexto* do dicionário + DEC-46** → Diagrama de Pacotes / *Bounded Contexts*.
- **Diagrama de Classes v0.1** → entrega formal v1.0, com o `template_modelo_dominio.md`
  preenchido a partir do glossário (Entregável 2, Seção 21).
- **P-03 e P-04** vencem na Semana 07.
