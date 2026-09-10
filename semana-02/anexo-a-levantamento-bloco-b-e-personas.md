# 📎 Anexo A — Levantamento Inicial do Bloco B e Personas Corporativas

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 02 (17/08/2026 – 23/08/2026)  
**Responsáveis:** AR2 / D2  
**Versão:** 0.1.0 — *rascunho*

> **Natureza deste documento:** o cronograma atribui a AR2/D2, nesta semana, a atividade
> *"início do levantamento de requisitos do Bloco B e desenho de personas de Gestores
> Financeiros/IT Admins"*. A entrega **formal** dessas personas e dos *user flows* está
> prevista para a **Semana 03** (Entregável 3 da Iteração 3). Este anexo registra o
> resultado parcial da atividade, sem antecipar a entrega formal.

---

## 1. 👤 Personas Corporativas (v0.1)

### 1.1. Persona P-01 — Gestor Financeiro / CFO

| Atributo | Descrição |
|:---|:---|
| **Papel** | Diretoria financeira de empresa com 200 a 2.000 colaboradores |
| **Contexto** | Fecha o mês sob pressão; presta contas de orçamento a conselho ou matriz |
| **Objetivo principal** | Reduzir custo recorrente **comprovadamente**, com número defensável |
| **Objetivo secundário** | Evitar surpresas de renovação automática no orçamento |
| **Frustração atual** | Gasto com SaaS aparece pulverizado em dezenas de lançamentos de cartão sem rastreio |
| **Métrica que persegue** | Custo de SaaS por colaborador e economia acumulada no ano |
| **Relação com o produto** | Usuário de **leitura e decisão** — consome relatórios, aprova, exporta |
| **Nível técnico** | Baixo a médio — domina planilha, não domina API |
| **Frase que resume** | *"Eu não preciso de mais um painel. Preciso de um número que eu possa levar para o conselho."* |
| **Jornada associada** | Jornada B (tratamento de divergência) |
| **Casos de uso** | UC-05, UC-06, UC-07, UC-08, UC-10, UC-13 |
| **Requisitos do Bloco B** | REQ-06, REQ-08, REQ-10 |

**Critérios de sucesso na interface**
- Enxergar o valor economizado antes de qualquer outra informação (SCR-08).
- Exportar um relatório que já saia anonimizado, pronto para circular (LGPD-01).
- Não precisar entender a origem técnica do dado para confiar nele.

---

### 1.2. Persona P-02 — Administrador de TI

| Atributo | Descrição |
|:---|:---|
| **Papel** | Responsável por infraestrutura, identidade e parque de software |
| **Contexto** | Recebe pedidos de licença por chamado; descobre ferramentas "sombra" tarde demais |
| **Objetivo principal** | Ter inventário confiável e sanear licenças sem quebrar o trabalho de ninguém |
| **Objetivo secundário** | Reduzir superfície de risco de *shadow IT* |
| **Frustração atual** | Cancela licença e descobre depois que alguém a usava semanalmente |
| **Métrica que persegue** | Percentual de licenças ociosas e tempo de provisionamento |
| **Relação com o produto** | Usuário de **configuração e operação** — conecta fontes, revisa, executa ações |
| **Nível técnico** | Alto — lida com OAuth, SCIM e chave de API sem dificuldade |
| **Frase que resume** | *"Eu topo cancelar, mas preciso ter certeza de que ninguém vai abrir chamado amanhã."* |
| **Jornada associada** | Jornada A (onboarding de integrações) |
| **Casos de uso** | UC-01, UC-03, UC-04, UC-07, UC-14 |
| **Requisitos do Bloco B** | REQ-07 |

**Critérios de sucesso na interface**
- Ver **quando** e **quantas vezes** a licença foi usada, não apenas se existe (PAT-02).
- Ter caminho de desfazer ou reverter qualquer ação executada.
- Não ser transformado em instrumento de vigilância sobre colegas (DEC-03).

---

### 1.3. Persona P-03 — Gestor de Compras *(esboço — detalhar na Semana 03)*

| Atributo | Descrição |
|:---|:---|
| **Papel** | Conduz o processo de contratação e renovação de fornecedores |
| **Objetivo principal** | Garantir que toda contratação siga a política, com trilha auditável |
| **Frustração atual** | Aprovações por e-mail, sem histórico consolidado nem visão de estoque ocioso |
| **Relação com o produto** | Usuário de **fluxo e aprovação** |
| **Casos de uso** | UC-09 |
| **Requisitos do Bloco B** | REQ-09 |

---

### 1.4. Antipersona — *quem o produto não atende*

| Perfil | Motivo da exclusão |
|:---|:---|
| **Gestor que busca monitorar produtividade individual** | Colide com DEC-03 e com a LGPD-01; a pseudonimização por padrão é uma decisão de projeto, não uma configuração |
| **Empresa sem cartão corporativo ou ERP integrável** | Sem fonte de dados, a RN05 não é aplicável e o produto não entrega valor |

---

## 2. 📋 Backlog Inicial de Elicitação do Bloco B (REQ-04 a REQ-10)

> Perguntas abertas a serem respondidas na Semana 03, quando o Bloco B recebe detalhamento formal.

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

## 3. ⚠️ Riscos de Requisito Identificados no Bloco B

| ID | Risco | Impacto | Encaminhamento |
|:---|:---|:---|:---|
| RB-01 | Fornecedores sem API de logs inviabilizam a RN02 para parte do inventário | Alto | Definir fonte alternativa (SSO/IdP) e sinalizar cobertura parcial na UI |
| RB-02 | A RN04 pode bloquear contratações legítimas (ex.: licença ociosa em outro país) | Médio | Avaliar sobreposição com justificativa registrada (EB-10) |
| RB-03 | ROI projetado pode ser lido como economia realizada e gerar desconfiança | Alto | Separar visualmente "realizado" de "projetado" no SCR-08 |
| RB-04 | Ausência de janela de arrependimento pode gerar cancelamento indevido | Médio | Propor *soft delete* com prazo de reversão (EB-06) |

---

## 4. ➡️ Entradas Preparadas para a Semana 03

- Personas P-01 e P-02 prontas para consolidação formal, com P-03 a detalhar.
- 14 questões de elicitação (`EB-01` a `EB-14`) que estruturam as histórias US-04 a US-10.
- 4 riscos de requisito a endereçar na especificação do fluxo de aprovação (RN01/RN04).
- Antipersona definida — insumo para delimitar escopo nos *user flows* do Bloco B.
