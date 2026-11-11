# Entregável 1 — Protótipo Navegável de Alta Fidelidade Unificado

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 11 (19/10/2026 – 25/10/2026) — Montagem do Protótipo Navegável  
**Responsável:** D1 / D2 (Designers)  
**Situação:** ✅ **Concluído**  
**Prazo:** 25/10/2026  

---

## 1. Objetivo

O cronograma pede "configuração de transições, interações e ligações do protótipo no Figma
para cobrir 100% dos 10 requisitos" — não telas novas. Este entregável liga, por interação de
protótipo (Figma *Prototype*), as telas Hi-Fi já construídas nas Semanas 08, 09 e 10. A
entrega original só adicionou reações de clique (`ON_CLICK`) e um ponto de partida de fluxo,
sem tocar componente, texto ou layout.

> **Nota de correção.** Uma lacuna encontrada na primeira entrega (P-50, Seção 6) exigiu
> adicionar **um** botão que não existia — "Alterar valor", em SCR-09 — porque não havia
> nenhum gatilho de clique para o estado que a RI-17 já previa (Seção 4). É a única exceção à
> regra acima nesta semana.

---

## 2. Navegação Global (Barra Lateral)

As 14 telas com barra lateral completa já tinham, desde a Semana 08/09, o item correspondente
marcado como ativo (cor `blue/600`) — a ligação abaixo só torna clicável o que o visual já
indicava.

| Item da barra lateral | Destino | Requisito |
|:---|:---|:---|
| Início | SCR-08 — Dashboard Principal de ROI | REQ-08 |
| Inventário | SCR-03a — Inventário de Software por Categoria | REQ-03 |
| Faturas | SCR-02 — Extrator de NFs e Auditoria de Divergência | REQ-02 |
| Ociosas | SCR-04 — Licenças Ociosas e Recomendações | REQ-04 |
| Alertas | SCR-06 — Central de Alertas e Calendário de Renovação | REQ-06 |
| Aprovações | SCR-09 — Requisição de Compra | REQ-09 |
| Relatórios | SCR-05 — Relatório de Desperdício | REQ-05 |
| Configurações | SCR-01 — Conexões e Chaves de API | REQ-01 |

Aplicado às 32 telas que têm barra lateral: as 14 telas principais (SCR-01, SCR-02, SCR-02b,
SCR-02c, SCR-03a, SCR-03b, SCR-04, SCR-05, SCR-06, SCR-07, SCR-08, SCR-09, SCR-09b, SCR-10a),
as 10 variantes tablet, as 6 telas de exceção da Semana 10 (HF-41, 42, 43, 44, 46, 47) e os
2 *skeletons* de carregamento (HF-21, HF-37) — 248 reações (8 itens × 32 telas, descontados
os 8 casos em que o item já é a própria tela). Transição `DISSOLVE`, 0,2 s, igual em todas.

**Telas sem barra lateral, corretamente fora desta ligação:** SCR-07a e SCR-07b (modais) e
SCR-10b (ver Seção 5).

---

## 3. Cobertura dos 10 Requisitos

| Requisito | Tela de entrada | Caminho a partir da navegação global |
|:---|:---|:---:|
| REQ-01 | SCR-01 | Direto (Configurações) |
| REQ-02 | SCR-02 | Direto (Faturas) |
| REQ-03 | SCR-03a | Direto (Inventário) |
| REQ-04 | SCR-04 | Direto (Ociosas) |
| REQ-05 | SCR-05 | Direto (Relatórios) |
| REQ-06 | SCR-06 | Direto (Alertas) |
| REQ-07 | SCR-07 | SCR-04 → botão "Aplicar" (Seção 4) |
| REQ-08 | SCR-08 | Direto (Início) |
| REQ-09 | SCR-09 | Direto (Aprovações) |
| REQ-10 | SCR-10a | SCR-05 → botão de relatórios (Seção 4) |

**10 de 10 requisitos alcançáveis** a partir de qualquer tela, sem usar o menu do navegador.

---

## 4. Ligações Específicas (Aprofundamento)

| Origem | Gatilho | Ação | Destino |
|:---|:---|:---|:---|
| SCR-02, linha "Salesforce" (divergência) | Clique | Navegar | SCR-02b — Detalhe da Divergência |
| SCR-02, linha "Canva Pro" (pendente de revisão) | Clique | Navegar | SCR-02c — Fatura Pendente de Revisão |
| SCR-03a, cartão "Figma" | Clique | Navegar | SCR-03b — Detalhe do Fornecedor |
| SCR-04, recomendação Adobe CC, botão "Aplicar" | Clique | Navegar | SCR-07 — Central de Ações |
| SCR-07, linha de ação Adobe CC (downgrade) | Clique | **Overlay** | SCR-07a — Modal Downgrade |
| SCR-07, linha de ação Salesforce (cancelamento) | Clique | **Overlay** | SCR-07b — Modal Cancelamento |
| SCR-05, botão de acesso à central de relatórios | Clique | Navegar | SCR-10a — Central de Relatórios |
| HF-41, botão "Conectar agora" | Clique | Navegar | HF-42 — Varredura em Andamento |
| SCR-09, botão "Alterar valor" (**adicionado nesta correção**, resolve P-50) | Clique | Navegar | SCR-09b — Estado de Edição |

---

## 5. Ponto de Partida do Fluxo

Definido em **HF-41 — Estado Vazio SCR-01** (`Início — primeiro acesso`): é o estado de zero
conexões que a Semana 01 já reservava como entrada do primeiro uso (S1·E2, Seção 8) e que a
Semana 10 construiu (HF-41). Entrar por aqui, em vez de por uma tela já povoada, é o único
caminho que testa a própria ligação HF-41 → HF-42 do onboarding.

---

## 6. O que Ficou Fora (e por quê)

Nenhum destes é invenção de botão para "fechar" a cobertura — são fronteiras de escopo já
esperadas:

| Item não ligado | Motivo |
|:---|:---|
| SCR-10a → SCR-10b (Portal do Titular) | O texto de SCR-10a não cita "titular" nem traz link algum para lá. SCR-10b não tem barra lateral porque é fluxo do titular dos dados (público externo), não do console administrativo — fronteira de escopo, não lacuna. |
| HF-42 → SCR-01 (fim da varredura) | HF-42 só tem o texto "Navegação livre — continue usando a plataforma", sem CTA. Transição narrativa/temporizada, não por clique — não há o que ligar. |

### Pendência resolvida

| ID | Pendência | Resolução |
|:--|:---|:---|
| P-50 | SCR-09 não tinha gatilho de clique visível para o estado `EmEdição`/reinício (RI-17) | **Resolvida.** Adicionado o botão "Alterar valor" em SCR-09, ligado a SCR-09b (Seção 4) |

---

## 7. Rastreabilidade deste Documento

| Fonte | Onde está | Uso aqui |
|:---|:---|:---|
| Telas Hi-Fi do Bloco A | Semana 08 | SCR-01 a SCR-05 e variantes |
| Telas Hi-Fi do Bloco B | Semana 09 | SCR-06 a SCR-10 e variantes |
| Pacote de exceção (HF-41, HF-42) | Semana 10 | Ponto de partida do fluxo |
| Estado ativo da barra lateral (cor `blue/600`) | Semanas 08 e 09 (construção) | Base da Seção 2 — a ligação só ativa o que já era visual |
| Este protótipo | [Projeto de Software — Figma](https://www.figma.com/design/3XaNdOU1zdQisXFuDrvB6O/Projeto-de-Software) | Consumido pela Semana 12 (sessões de teste) |
| P-50 | Resolvida nesta correção | Imagem da SCR-09 (Semana 09) reexportada com o botão novo |
