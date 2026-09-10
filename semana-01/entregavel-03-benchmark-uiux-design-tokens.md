# Entregável 3 — Benchmark de UI/UX FinTech/SaaS Corporativo e Design Tokens Iniciais

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 01 (10/08/2026 – 16/08/2026)
**Responsáveis:** D1 / D2 (Designers)
**Versão:** 1.0.0
**Ferramenta:** Figma — biblioteca `Auditor SaaS / Foundations v0.1`

---

## 1. Objetivo e Método

Analisar produtos de referência nos segmentos **SaaS Management Platform (SMP)**,
**gestão de despesas corporativas** e **dashboards analíticos densos**, extraindo padrões
reaproveitáveis e antipadrões a evitar. A saída é o conjunto inicial de **design tokens**
que alimentará o Design System da Semana 6.

**Critérios de avaliação** (escala 1–5):

| Critério | O que foi observado |
|:---|:---|
| **C1 · Densidade informacional** | Quantidade de dado útil por tela sem gerar ruído |
| **C2 · Clareza do dado financeiro** | Legibilidade de valores, variações e comparativos |
| **C3 · Confiança em ação destrutiva** | Qualidade da confirmação em cancelar/downgrade |
| **C4 · Onboarding de integração** | Fricção para conectar ERP / e-mail / IdP |
| **C5 · Acessibilidade (WCAG 2.1 AA)** | Contraste, foco visível, uso de cor como único canal |

---

## 2. Matriz Comparativa de Benchmark

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
| B10 | **Linear** | Produtividade B2B | 5 | — | 4 | — | 5 | Velocidade percebida, atalhos de teclado, foco visível |
| B11 | **Datadog** | Observabilidade | 5 | 4 | 3 | 4 | 3 | Filtros persistentes e *drill-down* sem perder contexto |

> Avaliação conduzida sobre material público (sites, documentação, vídeos de demonstração e
> capturas de tela de divulgação dos fornecedores) — não houve contratação de licenças.

---

## 3. Padrões a Incorporar (com vínculo a requisitos)

| ID | Padrão | Referência | Aplicação no projeto | Requisito |
|:---|:---|:---|:---|:---|
| PAT-01 | **Card de economia acionável** — valor + botão de ação no mesmo bloco | B6 | Painel de recomendações de consolidação | REQ-05 |
| PAT-02 | **Índice de confiança da detecção** exibido por item catalogado | B1 | Badge "IA · 92%" no inventário; sustenta o teto de 2% de falso positivo | REQ-03, RNF-10 |
| PAT-03 | **Uso real ≠ acesso concedido** — duas métricas distintas na mesma linha | B2 | Coluna "Último acesso" + "Dias ocioso" no painel de licenças | REQ-04, RN02 |
| PAT-04 | **Política exibida no momento da decisão** | B8 | Ao aprovar, mostrar RN01 (teto de R$ 500) e RN04 (estoque ocioso) na tela | REQ-09 |
| PAT-05 | **Timeline de aprovação** com responsável, data e SLA | B7 | Histórico da requisição de compra | REQ-09 |
| PAT-06 | **Wizard de conexão com saúde do conector** | B3 | SCR-01, com estados: conectando / ativo / token expirado / erro | REQ-01 |
| PAT-07 | **Comparativo lado a lado** (pago vs. alternativa) | B5 | Sugestão de plano alternativo no relatório de desperdício | REQ-05 |
| PAT-08 | **Filtros persistentes + drill-down sem perda de contexto** | B11 | Inventário → detalhe do fornecedor → licença | REQ-03, REQ-04 |
| PAT-09 | **Hierarquia tipográfica em tabela densa** | B9 | Tabelas de faturas e licenças | RNF-06, RNF-09 |
| PAT-10 | **Confirmação por digitação em ação irreversível** | B4 | Cancelamento de assinatura exige digitar o nome do software | REQ-07 |

---

## 4. Antipadrões Identificados (a evitar explicitamente)

| ID | Antipadrão | Onde foi observado | Risco no nosso contexto |
|:---|:---|:---|:---|
| ANT-01 | Dashboard que abre com "0" enquanto a varredura roda | B1, B3 | Usuário conclui que o produto não funciona; violaria a percepção do RNF-04 |
| ANT-02 | Cancelamento em um clique, sem confirmação | B3 | Colide frontalmente com a RN01 e gera risco operacional real |
| ANT-03 | Nome completo do colaborador exposto no dashboard financeiro | B1, B2 | Violação direta da LGPD-01 |
| ANT-04 | Status comunicado **apenas** por cor (verde/vermelho) | B1, B11 | Falha WCAG 1.4.1; nossos badges terão ícone + rótulo textual |
| ANT-05 | Gráficos com 8+ séries e legenda desconectada | B11 | Ilegível; limitaremos a 5 séries com rótulo direto |
| ANT-06 | Exportação que ignora os filtros aplicados na tela | B2 | Gera relatório inconsistente com o que o usuário viu (REQ-10) |
| ANT-07 | Modal sobre modal em fluxos de aprovação | B8 | Impede leitura da política de fundo (PAT-04) |

---

## 5. Design Tokens Iniciais (v0.1)

> Nomenclatura em três camadas: **primitivo** (`color.blue.600`) → **semântico**
> (`color.action.primary`) → **componente** (`button.primary.bg`).
> Componentes consomem apenas tokens semânticos, nunca primitivos.

### 5.1. Cor — primitivos

| Token | Hex | Uso |
|:---|:---|:---|
| `color.slate.900` | `#0F172A` | Texto principal |
| `color.slate.600` | `#475569` | Texto secundário |
| `color.slate.400` | `#94A3B8` | Texto desabilitado, placeholder |
| `color.slate.200` | `#E2E8F0` | Bordas e divisores |
| `color.slate.50`  | `#F8FAFC` | Fundo de aplicação |
| `color.blue.700`  | `#1D4ED8` | Ação primária (hover) |
| `color.blue.600`  | `#2563EB` | Ação primária |
| `color.blue.50`   | `#EFF6FF` | Fundo de destaque informativo |
| `color.green.600` | `#059669` | Economia, conciliado, aprovado |
| `color.amber.600` | `#D97706` | Ocioso, pendente, atenção |
| `color.red.600`   | `#DC2626` | Divergente, erro, ação destrutiva |
| `color.violet.600`| `#7C3AED` | Insight gerado por IA |

### 5.2. Cor — semânticos

| Token semântico | Referência | Aplicação |
|:---|:---|:---|
| `color.action.primary` | `blue.600` | Botões primários, links |
| `color.status.saving` | `green.600` | Valor economizado, ROI positivo |
| `color.status.idle` | `amber.600` | Licença ociosa (RN02) |
| `color.status.divergent` | `red.600` | Divergência de NF (RN05) |
| `color.status.blocked` | `red.600` | Requisição bloqueada (RN04) |
| `color.ai.insight` | `violet.600` | Recomendação de consolidação (REQ-05) |
| `color.surface.page` | `slate.50` | Fundo da aplicação |
| `color.surface.card` | `#FFFFFF` | Cards e tabelas |
| `color.text.primary` | `slate.900` | Corpo de texto |
| `color.border.default` | `slate.200` | Divisores |

**Semântica de cor do produto** — decisão de projeto: **verde = dinheiro recuperado**,
**âmbar = oportunidade não explorada**, **vermelho = risco/inconsistência**,
**violeta = origem em IA**. Nenhum estado depende exclusivamente da cor (ANT-04):
todo badge combina `ícone + cor + rótulo`.

### 5.3. Verificação de contraste (WCAG 2.1 AA)

| Par | Razão | Requisito | Resultado |
|:---|:---:|:---|:---:|
| `slate.900` sobre `#FFFFFF` | 17,9:1 | ≥ 4,5:1 (texto normal) | AAA |
| `slate.600` sobre `#FFFFFF` | 7,5:1 | ≥ 4,5:1 | AAA |
| `slate.400` sobre `#FFFFFF` | 2,8:1 | ≥ 3:1 (elementos não textuais) | Restrito a placeholder |
| `#FFFFFF` sobre `blue.600` | 5,2:1 | ≥ 4,5:1 | AA |
| `#FFFFFF` sobre `green.600` | 3,8:1 | ≥ 4,5:1 | **Usar `green.700` em texto** |
| `#FFFFFF` sobre `red.600` | 4,8:1 | ≥ 4,5:1 | AA |
| `#FFFFFF` sobre `amber.600` | 3,1:1 | ≥ 4,5:1 | **Usar texto `slate.900` sobre âmbar** |

> Duas correções já registradas como pendência para a Semana 6: definir `green.700`
> (`#047857`) para texto sobre fundo verde e travar texto escuro sobre âmbar.

### 5.4. Tipografia

| Token | Família | Tamanho / Altura | Peso | Uso |
|:---|:---|:---|:---|:---|
| `font.display` | Inter | 32 / 40 px | 600 | Valor principal do dashboard (ROI) |
| `font.heading.1` | Inter | 24 / 32 px | 600 | Título de página |
| `font.heading.2` | Inter | 18 / 26 px | 600 | Título de card / seção |
| `font.body` | Inter | 14 / 22 px | 400 | Corpo padrão |
| `font.body.strong` | Inter | 14 / 22 px | 600 | Rótulos, cabeçalho de tabela |
| `font.caption` | Inter | 12 / 18 px | 400 | Legenda, texto auxiliar |
| `font.numeric` | Inter *tabular-nums* | 14 / 22 px | 500 | **Todos os valores monetários** |

> `font-variant-numeric: tabular-nums` é obrigatório em colunas de valor — sem isso os
> dígitos não alinham verticalmente e a comparação de custos fica prejudicada (PAT-09).
> Formatação monetária: `pt-BR`, `R$ 1.234,56`; percentuais sempre com sinal (`+12,4%`).

### 5.5. Espaçamento, raio e elevação

| Token | Valor | Uso |
|:---|:---|:---|
| `space.1` … `space.8` | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 px | Escala base 4px |
| `radius.sm` / `md` / `lg` / `full` | 4 / 8 / 12 / 9999 px | Input / card / modal / badge |
| `elevation.0` | `none` | Superfície plana (tabelas) |
| `elevation.1` | `0 1px 2px rgba(15,23,42,.06)` | Card em repouso |
| `elevation.2` | `0 4px 12px rgba(15,23,42,.10)` | Dropdown, popover |
| `elevation.3` | `0 12px 32px rgba(15,23,42,.16)` | Modal de confirmação |

### 5.6. Grid e breakpoints (RNF-09)

| Breakpoint | Largura | Colunas | Gutter | Sidebar |
|:---|:---|:---:|:---:|:---|
| `desktop.lg` | ≥ 1440 px | 12 | 24 px | Expandida (240 px) |
| `desktop.md` | 1024–1439 px | 12 | 20 px | Expandida (200 px) |
| `tablet` | 768–1023 px | 8 | 16 px | Colapsada em ícones (64 px) |

> O RNF-09 exige suporte a **desktop e tablet**. Mobile fica explicitamente fora do escopo
> da v1.0 e não será prototipado.

### 5.7. Movimento

| Token | Valor | Uso |
|:---|:---|:---|
| `motion.fast` | 120 ms · `ease-out` | Hover, foco |
| `motion.base` | 200 ms · `cubic-bezier(.2,0,0,1)` | Abertura de painel, dropdown |
| `motion.slow` | 320 ms · `cubic-bezier(.2,0,0,1)` | Modal, transição de página |

Todas as animações respeitam `prefers-reduced-motion`.

---

## 6. Arquivo de Tokens (formato de intercâmbio)

Estrutura acordada para exportação do Figma via *Design Tokens Plugin*, alinhada ao
formato W3C Design Tokens — será versionada junto ao Design System na Semana 6:

```json
{
  "color": {
    "action":  { "primary": { "$value": "{color.blue.600}", "$type": "color" } },
    "status": {
      "saving":    { "$value": "{color.green.600}", "$type": "color" },
      "idle":      { "$value": "{color.amber.600}", "$type": "color" },
      "divergent": { "$value": "{color.red.600}",   "$type": "color" }
    },
    "ai": { "insight": { "$value": "{color.violet.600}", "$type": "color" } }
  },
  "font": {
    "numeric": {
      "$type": "typography",
      "$value": { "fontFamily": "Inter", "fontSize": "14px", "lineHeight": "22px",
                  "fontWeight": 500, "fontVariantNumeric": "tabular-nums" }
    }
  },
  "space": { "4": { "$value": "16px", "$type": "dimension" } }
}
```

---

## 7. Critérios de Aceite

1. Cada padrão adotado (`PAT-xx`) está vinculado a pelo menos um requisito do projeto.
2. Todo antipadrão (`ANT-xx`) tem contramedida declarada.
3. Nenhum token semântico referencia um valor hexadecimal direto — apenas primitivos.
4. Todos os pares de cor de texto foram verificados contra WCAG 2.1 AA, com as duas
   reprovações registradas como pendência da Semana 6.

---

## 8. Rastreabilidade

| Item | Consumido em | Entregável de destino |
|:---|:---|:---|
| Seção 3 (padrões) | Semana 4 e 5 | Wireframes Lo-Fi e Mid-Fi |
| Seção 4 (antipadrões) | Semana 10 | Refinamento visual e estados de interface |
| Seção 5 (tokens) | Semana 6 | Design System SaaS B2B completo |
| Seção 5.3 (contraste) | Semana 6 | Conformidade WCAG do Design System |
| Seção 5.6 (grid) | Semana 7 | Biblioteca de tabelas responsivas (RNF-09) |
