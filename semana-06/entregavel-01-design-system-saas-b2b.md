# Entregável 1 — Design System SaaS B2B Completo (Componentes, Tipografia, Grids)

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 06 (14/09/2026 – 20/09/2026)  
**Responsáveis:** D1 / D2 (Designers), com validação de AR1 / AR2  
**Versão:** 1.0.0  
**Ferramenta:** Figma — biblioteca `Auditor SaaS / Design System v1.0` (sucede `Foundations v0.1` da Semana 01)  

---

## 1. Objetivo e Escopo

Consolidar em um único sistema os tokens iniciais da Semana 01 e os padrões que emergiram dos
17 wireframes das Semanas 04 e 05 (`W-00` a `W-08`, `M-01` a `M-08`). O Lo-Fi resolveu
estrutura; o Mid-Fi resolveu conteúdo e estado; esta iteração resolve **forma**: cor,
tipografia, grid, acessibilidade e o catálogo de componentes que as telas Hi-Fi das Semanas 08
e 09 vão consumir.

| Dimensão | Tokens v0.1 (Semana 01) | **Design System v1.0 (esta iteração)** |
|:---|:---|:---|
| Cor | 12 primitivos, 2 reprovações de contraste | 27 primitivos, **todas as combinações de texto aprovadas** (P-01) |
| Tipografia | 7 estilos, apenas desktop | 10 estilos, com variação para tablet |
| Grid | 3 breakpoints | 3 breakpoints + *templates* de página + regras de toque |
| Componentes | — | **22 componentes** (`CMP-01` a `CMP-22`) |
| Estados | — | **76 estados** de 8 máquinas mapeados em badges |
| Mensagens | Microcopy espalhada nos wireframes | **15 mensagens de regra** padronizadas (`MSG-01` a `MSG-15`) |

**Divisão com a Semana 07.** O cronograma prevê, para a Semana 07, a *finalização de botões,
badges de status e layouts do dashboard* e a *biblioteca de tabelas responsivas e gráficos*.
Esta iteração entrega a **especificação** desses componentes (anatomia, tokens, estados,
regras e comportamento responsivo); a Semana 07 entrega a **biblioteca finalizada** com
todas as variantes desenhadas e o teste de carga do dashboard (RNF-06).

> **Sobre o formato:** como no Lo-Fi e no Mid-Fi, a fonte de verdade da especificação fica no
> repositório, ao lado dos requisitos que a originam. O arquivo Figma é a transposição visual
> desta especificação, e os tokens são exportados para o formato da Seção 14.

---

## 2. Princípios do Sistema

Cada princípio é uma decisão já tomada em iteração anterior, agora elevada a regra de design.

| ID | Princípio | O que significa na prática | Origem |
|:---|:---|:---|:---|
| DSP-01 | **Dinheiro primeiro** | O valor financeiro é o primeiro elemento lido em qualquer tela de diagnóstico | DEC-29, P-01 (persona) |
| DSP-02 | **Nunca só cor** | Todo estado combina ícone, rótulo e cor; a cor é reforço, nunca canal único | DEC-06, ANT-03 |
| DSP-03 | **A regra aparece na decisão** | Toda tela que aplica regra de negócio exibe o texto da regra e o parâmetro que a acionou | PAT-08, Mid-Fi critério 1 |
| DSP-04 | **Nada irreversível em um clique** | Ação destrutiva vive em modal, com prévia de impacto e confirmação por digitação | ANT-05, PAT-04 |
| DSP-05 | **Todo número explica sua origem** | Valor vem com período, escopo e base de cálculo; recomendação vem com evidência e confiança | DEC-34, Mid-Fi critério 2 |
| DSP-06 | **Privacidade por padrão** | O componente padrão exibe pseudônimo; mostrar identidade é variante restrita e auditada | DEC-03, LGPD-01 |

---

## 3. Arquitetura de Tokens

A arquitetura em três camadas da Semana 01 é mantida sem alteração:

```
primitivo  ─────────►  semântico  ─────────►  componente
color.green.700        color.status.success.fg    badge.success.fg
```

| Regra | Enunciado |
|:---|:---|
| TK-1 | Componentes consomem **apenas** tokens semânticos — nunca primitivos nem hexadecimais |
| TK-2 | Tokens semânticos referenciam **apenas** primitivos |
| TK-3 | Um token semântico descreve **função**, não aparência (`status.danger`, nunca `red`) |
| TK-4 | Todo par semântico de texto e fundo tem razão de contraste registrada na Seção 4.3 |
| TK-5 | Tokens novos só entram por revisão conjunta de D1 e D2, com caso de uso declarado |

---

## 4. Cor

### 4.1. Primitivos v1.0

Os 12 primitivos da v0.1 são mantidos com os mesmos valores. Os **15 novos** (marcados com ●)
resolvem a P-01 e criam fundos de baixa saturação para badges e a paleta de dados.

| Família | Token | Hex | Uso principal |
|:---|:---|:---|:---|
| Neutro | `slate.900` | `#0F172A` | Texto principal |
| | `slate.700` ● | `#334155` | Texto de cabeçalho de tabela sobre fundo cinza |
| | `slate.600` | `#475569` | Texto secundário, rótulo de badge neutro |
| | `slate.500` ● | `#64748B` | **Placeholder** (DEC-48), série "Outras" e linha projetada |
| | `slate.400` | `#94A3B8` | **Apenas** elementos desabilitados |
| | `slate.200` | `#E2E8F0` | Bordas, divisores, linhas de grade de gráfico |
| | `slate.100` ● | `#F1F5F9` | Fundo de badge neutro, cabeçalho de tabela |
| | `slate.50` | `#F8FAFC` | Fundo da aplicação |
| Ação | `blue.700` | `#1D4ED8` | Hover da ação primária, texto de badge informativo |
| | `blue.600` | `#2563EB` | Ação primária, anel de foco |
| | `blue.50` | `#EFF6FF` | Fundo de badge e banner informativo |
| Economia | `green.700` ● | `#047857` | **Texto** sobre fundo verde, linha "Realizado" |
| | `green.600` | `#059669` | Apenas elementos não textuais (ícone, borda) |
| | `green.50` ● | `#ECFDF5` | Fundo de badge de sucesso |
| Atenção | `amber.800` ● | `#92400E` | **Texto** sobre fundo âmbar |
| | `amber.600` | `#D97706` | Apenas elementos não textuais e barras de desperdício |
| | `amber.100` ● | `#FEF3C7` | Fundo de badge e banner de atenção |
| Risco | `red.700` ● | `#B91C1C` | Texto sobre fundo vermelho, hover destrutivo |
| | `red.600` | `#DC2626` | Botão destrutivo |
| | `red.100` ● | `#FEE2E2` | Fundo de badge e banner de risco |
| IA | `violet.700` ● | `#6D28D9` | Texto de badge de IA |
| | `violet.600` | `#7C3AED` | Ícone e borda de insight de IA |
| | `violet.50` ● | `#F5F3FF` | Fundo de card e badge de IA |
| Dados | `cyan.700` ● | `#0E7490` | Série categórica 2 |
| | `pink.700` ● | `#BE185D` | Série categórica 3 |
| | `yellow.800` ● | `#854D0E` | Série categórica 4 |
| Base | `white` ● | `#FFFFFF` | Superfície de card e tabela (antes hexadecimal solto) |

> `white` deixa de ser hexadecimal direto no token `color.surface.card`, cumprindo o critério de
> aceite 3 da Semana 01 (*"nenhum token semântico referencia hexadecimal direto"*), que a v0.1
> violava.

### 4.2. Semânticos v1.0

| Grupo | Token semântico | Primitivo | Aplicação |
|:---|:---|:---|:---|
| Texto | `color.text.primary` | `slate.900` | Corpo de texto, valores |
| | `color.text.secondary` | `slate.600` | Legendas, metadados, motivo de ação desabilitada |
| | `color.text.placeholder` | `slate.500` | Placeholder de campo (DEC-48) |
| | `color.text.disabled` | `slate.400` | Rótulo de controle desabilitado |
| | `color.text.on-action` | `white` | Texto sobre botão primário ou destrutivo |
| Superfície | `color.surface.page` | `slate.50` | Fundo da aplicação |
| | `color.surface.card` | `white` | Cards, tabelas, modais |
| | `color.surface.subtle` | `slate.100` | Cabeçalho de tabela, linha expandida |
| Borda | `color.border.default` | `slate.200` | Divisores e contornos |
| | `color.border.strong` | `slate.500` | Contorno de campo de formulário (≥ 3:1) |
| | `color.focus.ring` | `blue.600` | Anel de foco de 2 px com afastamento de 2 px |
| Ação | `color.action.primary` | `blue.600` | Botão primário, link |
| | `color.action.primary.hover` | `blue.700` | Hover e pressionado |
| | `color.action.destructive` | `red.600` | Botão de confirmação destrutiva |
| | `color.action.destructive.hover` | `red.700` | Hover e pressionado |
| Status (tom) | `color.status.{tom}.bg` / `.fg` / `.icon` | ver Seção 4.3 | Badges, banners, realces de linha |
| Dados | `color.chart.realized` | `green.700` | Série "Realizado" do ROI |
| | `color.chart.projected` | `slate.500` | Série "Projetado" (sempre tracejada) |
| | `color.chart.waste` | `amber.600` | Barras de desperdício |
| | `color.chart.cat.1` … `cat.4` | `blue.700`, `cyan.700`, `pink.700`, `yellow.800` | Séries categóricas |
| | `color.chart.other` | `slate.500` | Agrupamento "Outras" (ANT-07) |
| | `color.chart.grid` | `slate.200` | Linhas de grade |

**Seis tons de status.** Todo estado do produto é expresso em um destes tons. A semântica de
cor da Semana 01 (*verde = dinheiro recuperado, âmbar = oportunidade não explorada, vermelho =
risco, violeta = IA*) ganha dois tons complementares:

| Tom | Significado | Fundo | Texto e ícone |
|:---|:---|:---|:---|
| `neutral` | Estado nominal, encerrado ou interno — não pede atenção | `slate.100` | `slate.600` |
| `info` | Processo em andamento, aguardando terceiro | `blue.50` | `blue.700` |
| `success` | Dinheiro recuperado, conciliado, aprovado, saudável | `green.50` | `green.700` |
| `warning` | Oportunidade não explorada, atenção, ressalva | `amber.100` | `amber.800` |
| `danger` | Risco, inconsistência, bloqueio, erro | `red.100` | `red.700` |
| `ai` | Origem em modelo de IA ou estimativa do motor | `violet.50` | `violet.700` |

> **Ícone herda a cor do rótulo.** Dentro de badges e banners o ícone usa o mesmo token `.fg`
> do texto. Isso garante o contraste não textual de 3:1 (WCAG 1.4.11) sem precisar de um
> terceiro token, e impede o uso do tom 600 sobre fundo claro.

### 4.3. Verificação de contraste v1.0 — resolução da P-01

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1. **Nenhum par de texto fica
abaixo de 4,5:1.**

| # | Primeiro plano | Fundo | Razão | Exigência | Resultado |
|:--|:---|:---|:---:|:---|:---:|
| CC-01 | `slate.900` | `white` | 17,9:1 | 4,5:1 texto | AAA |
| CC-02 | `slate.600` | `white` | 7,6:1 | 4,5:1 texto | AAA |
| CC-03 | `slate.600` | `slate.50` | 7,3:1 | 4,5:1 texto | AAA |
| CC-04 | `slate.500` (placeholder) | `white` | 4,8:1 | 4,5:1 texto | AA · **corrige a v0.1** |
| CC-05 | `white` | `blue.600` (primário) | 5,2:1 | 4,5:1 texto | AA |
| CC-06 | `white` | `red.600` (destrutivo) | 4,8:1 | 4,5:1 texto | AA |
| CC-07 | `white` | `green.700` | 5,5:1 | 4,5:1 texto | AA · **resolve P-01** |
| CC-08 | `slate.900` | `amber.600` | 5,6:1 | 4,5:1 texto | AA · **resolve P-01** |
| CC-09 | `slate.600` | `slate.100` (neutral) | 6,9:1 | 4,5:1 texto | AA |
| CC-10 | `blue.700` | `blue.50` (info) | 6,2:1 | 4,5:1 texto | AA |
| CC-11 | `green.700` | `green.50` (success) | 5,2:1 | 4,5:1 texto | AA |
| CC-12 | `amber.800` | `amber.100` (warning) | 6,4:1 | 4,5:1 texto | AA |
| CC-13 | `red.700` | `red.100` (danger) | 5,3:1 | 4,5:1 texto | AA |
| CC-14 | `violet.700` | `violet.50` (ai) | 6,5:1 | 4,5:1 texto | AA |
| CC-15 | `blue.600` (anel de foco) | `white` | 5,2:1 | 3:1 não textual | AA |
| CC-16 | `slate.500` (borda de campo) | `white` | 4,8:1 | 3:1 não textual | AA |
| CC-17 | `green.600` (ícone isolado) | `white` | 3,8:1 | 3:1 não textual | AA |
| CC-18 | `amber.600` (barra de gráfico) | `white` | 3,2:1 | 3:1 não textual | AA |
| CC-19 | `green.700` (linha Realizado) | `white` | 5,5:1 | 3:1 não textual | AA |
| CC-20 | `cyan.700` · `pink.700` · `yellow.800` · `blue.700` | `white` | 5,4 · 6,0 · 6,9 · 6,7:1 | 3:1 não textual | AA |

**Pares proibidos** (reprovados e sem uso permitido em nenhum componente):

| Par | Razão | Motivo da proibição |
|:---|:---:|:---|
| `white` sobre `green.600` | 3,8:1 | Reprovação original da P-01 |
| `white` sobre `amber.600` | 3,2:1 | Reprovação original da P-01 |
| `slate.400` em texto ativo | 2,6:1 | Fica restrito a controle desabilitado, isento pela WCAG 1.4.3 (DEC-48) |
| Qualquer tom 600 como texto sobre seu fundo claro | < 4,5:1 | Substituído pelo tom 700 ou 800 (DEC-47) |

> **Desabilitado não é isento de explicação.** O rótulo de um botão desabilitado pode usar
> `slate.400`, mas o **motivo** exibido ao lado (DEC-39) é texto informativo e usa
> `color.text.secondary` (7,6:1).

### 4.4. Paleta de dados

| Regra | Enunciado | Origem |
|:---|:---|:---|
| DV-1 | No máximo **5 séries** por gráfico; a quinta é sempre `Outras` em `color.chart.other` | ANT-07 |
| DV-2 | Tons de status **nunca** são usados como cor de série categórica — evita confundir "Design" com "ociosa" | DSP-02 |
| DV-3 | Toda série tem **rótulo direto** no fim da linha; legenda separada só em tablet (Seção 9.4) | ANT-07 |
| DV-4 | Projeção é sempre **tracejada**, nunca diferenciada só pela cor | DEC-21, DSP-02 |
| DV-5 | Gráficos de pizza e rosca não fazem parte do sistema: comparação de partes usa barras ordenadas | PAT-09 |

---

## 5. Tipografia

Família única **Inter** (licença SIL Open Font License), com *tabular-nums* obrigatório em
valores. A família monoespaçada entra apenas para identificadores técnicos.

| Token | Família | Desktop (tamanho / altura) | Tablet | Peso | Uso |
|:---|:---|:---|:---|:---:|:---|
| `font.display` | Inter | 32 / 40 px | 28 / 36 px | 600 | Valor principal do KPI (economia realizada, ROI) |
| `font.heading.1` | Inter | 24 / 32 px | 22 / 30 px | 600 | Título de página |
| `font.heading.2` | Inter | 18 / 26 px | 18 / 26 px | 600 | Título de card, seção ou modal |
| `font.heading.3` ● | Inter | 16 / 24 px | 16 / 24 px | 600 | Título de bloco interno (Impacto, Política) |
| `font.body` | Inter | 14 / 22 px | 15 / 24 px | 400 | Corpo padrão |
| `font.body.strong` | Inter | 14 / 22 px | 15 / 24 px | 600 | Rótulos, cabeçalho de tabela |
| `font.numeric` | Inter *tabular-nums* | 14 / 22 px | 15 / 24 px | 500 | **Todo valor monetário e percentual** |
| `font.caption` | Inter | 12 / 18 px | 13 / 20 px | 400 | Legenda, metadado, sub-linha de tabela |
| `font.label` ● | Inter | 12 / 16 px | 12 / 16 px | 600 | Rótulo de badge e de KPI (caixa alta, espaçamento +0,02 em) |
| `font.code` ● | JetBrains Mono | 13 / 20 px | 13 / 20 px | 500 | Pseudônimo `COL-8f2a`, chave mascarada, hash de exportação |

**Tamanho mínimo:** 12 px em qualquer contexto. Em tablet, corpo e numérico sobem para 15 px —
a distância de leitura é menor, mas o toque exige alvos maiores e a densidade cai de qualquer
forma.

### 5.1. Formatação de números (pt-BR)

| Caso | Formato | Exemplo | Regra |
|:---|:---|:---|:---|
| Monetário | `R$ 1.234,56` | `R$ 12.400,00` | Sempre 2 casas; símbolo separado por espaço |
| Moeda estrangeira | Código ISO antes do valor | `USD 900,00` | Nunca o símbolo `$`, ambíguo entre moedas |
| Percentual de variação | Com sinal sempre | `+40,0%` · `−3,0%` | Sinal de menos tipográfico (U+2212), não hífen |
| Percentual de confiança | Inteiro, sem sinal | `IA 94%` | Arredondado para baixo, nunca para cima |
| Valor compacto | Só em eixo de gráfico | `R$ 50 mil` · `R$ 1,2 mi` | Proibido em KPI, tabela e exportação |
| Data | `dd/mm/aaaa` | `15/10/2026` | Hora só quando o prazo é em horas (`17/09 14:02`) |
| Prazo relativo | Unidade explícita | `faltam 32 d` · `faltam 71 h` | Acompanha sempre a data absoluta |

> Arredondar confiança **para baixo** é uma escolha deliberada: exibir `IA 80%` para um item com
> 0,797 faria o usuário supor que ele passou no limiar de publicação de E2 (DEC-44), quando não
> passou.

### 5.2. Caixa de texto

Os wireframes ASCII usam caixa alta em botões por limitação do formato. **A interface usa caixa
de frase** (`Aplicar downgrade`, não `APLICAR DOWNGRADE`). Caixa alta fica restrita a
`font.label`, em rótulos curtos de badge e de KPI.

---

## 6. Grid e Layout (RNF-09)

### 6.1. Breakpoints

Mantidos da v0.1, com o comportamento abaixo de 768 px agora definido:

| Breakpoint | Largura | Colunas | Gutter | Margem | Sidebar | Topbar |
|:---|:---|:---:|:---:|:---:|:---|:---:|
| `desktop.lg` | ≥ 1440 px | 12 | 24 px | 32 px | Expandida (240 px) | 56 px |
| `desktop.md` | 1024–1439 px | 12 | 20 px | 24 px | Expandida (200 px) | 56 px |
| `tablet` | 768–1023 px | 8 | 16 px | 16 px | Colapsada em ícones (64 px) | 56 px |
| abaixo de 768 px | < 768 px | — | — | — | — | — |

**Abaixo de 768 px (DEC-07):** o layout de tablet é mantido com rolagem horizontal da página
e um aviso não bloqueante *"Esta tela foi desenhada para tablet e desktop"*. Não há layout
mobile na v1.0. O **Portal do Titular** é a única exceção: por ser acessado pelo colaborador a
partir de um *link* de e-mail (T-14), muitas vezes no celular, ele é uma página de coluna
única que funciona a partir de 360 px. É o único fluxo da v1.0 com exigência legal de acesso
irrestrito (LGPD-02).

**Orientação:** tablet em retrato (768–1023 px) usa o grid de 8 colunas; tablet em paisagem
(1024 px ou mais) usa o grid `desktop.md` sem nenhuma adaptação adicional.

### 6.2. Alvos de toque e densidade

| Contexto | Altura mínima de alvo | Espaço mínimo entre alvos | Origem |
|:---|:---:|:---:|:---|
| Desktop | 32 px (24 px absoluto) | 8 px | Boa prática — referência ao critério 2.5.8 da WCAG 2.2 |
| Tablet | **44 px** | 8 px | WCAG 2.5.5 (aplicado como meta) |

Em tablet, todo componente interativo adota automaticamente sua variante de 44 px; a densidade
compacta de tabela (36 px) é desativada.

### 6.3. *Templates* de página

| ID | *Template* | Estrutura desktop (12 col) | Estrutura tablet (8 col) | Telas |
|:---|:---|:---|:---|:---|
| TPL-01 | **Lista** | Filtros 12 · tabela 12 | Filtros 8 (rolagem de chips) · tabela 8 | SCR-02, SCR-03, SCR-04, SCR-06, SCR-09 |
| TPL-02 | **Detalhe com comparação** | Cabeçalho 12 · painel 6 + painel 6 · bloco 12 | Cabeçalho 8 · painéis empilhados 8 | M-02, SCR-09 detalhe |
| TPL-03 | **Dashboard** | KPI 6 + KPI 6 · gráfico 12 · bloco 12 | KPI 4 + KPI 4 · gráfico 8 · bloco 8 | SCR-08 |
| TPL-04 | **Relatório** | Filtros 12 · aviso de cobertura 12 · tabela 12 · comparativo 12 | Mesma ordem em 8 | SCR-05, SCR-10 |
| TPL-05 | **Modal** | Largura 640 px (720 px no modal de impacto) | Largura total menos 2 × 16 px | M-04, M-05, W-02 |

**Regras de layout herdadas do shell (W-00):** ação primária sempre no topo sem rolagem;
breadcrumb em toda tela de nível 2 ou superior; filtros persistentes acima da tabela; ação
destrutiva sempre em modal. Elas deixam de ser anotação de wireframe e passam a ser
propriedades dos *templates*.

---

## 7. Espaçamento, Raio, Elevação, Movimento e Ícones

Espaçamento (`space.1` a `space.8`, base 4 px), raio, elevação e movimento são mantidos sem
alteração da v0.1. Acrescentam-se camadas de sobreposição e a especificação de ícones:

| Token | Valor | Uso |
|:---|:---|:---|
| `layer.base` | 0 | Conteúdo |
| `layer.sticky` | 100 | Cabeçalho de tabela fixo, primeira coluna fixa |
| `layer.shell` | 200 | Topbar e sidebar |
| `layer.popover` | 300 | Dropdown, tooltip, popover de cálculo |
| `layer.modal` | 400 | Modal e sua camada de fundo (`slate.900` a 48%) |
| `layer.toast` | 500 | Notificação temporária |

**Ícones:** biblioteca de traço único (2 px), tamanhos de 16, 20 e 24 px, sempre acompanhados
de rótulo textual ou de nome acessível. Os ícones de estado são fixos e não podem ser trocados
por componente:

| Significado | Ícone | Usado em |
|:---|:---|:---|
| Saudável / concluído | círculo com marca de verificação | Conexão ativa, conciliada, executada |
| Em andamento | relógio | Aguardando conciliação, em aprovação, janela de arrependimento |
| Atenção | triângulo | Ociosa, ressalva, telemetria desatualizada |
| Erro / bloqueio | círculo com X | Divergente, bloqueada, erro de integração |
| Sem dado | sinal cortado | Sem telemetria |
| Anonimizado | escudo | Pseudônimo, selo de exportação mascarada |
| Origem em IA | brilho de quatro pontas | Badge de confiança, card de recomendação |

---

## 8. Acessibilidade — Conformidade WCAG 2.1 AA

Meta: **WCAG 2.1 nível AA**, com uma exceção declarada (1.4.10, abaixo). Cada critério é
atendido **no componente**, não na tela — uma tela montada só com componentes do sistema herda
a conformidade.

| Critério WCAG | Como o sistema atende | Componentes |
|:---|:---|:---|
| 1.1.1 Conteúdo não textual | Todo gráfico tem alternativa **"Ver como tabela"**; imagem de NF tem texto alternativo que remete aos campos extraídos | CMP-10, CMP-11, CMP-18 |
| 1.3.1 Informação e relações | Tabela semântica com `th` e `scope`; sub-linha de contexto associada por `aria-describedby` | CMP-08 |
| 1.4.1 Uso da cor | Badge = ícone + rótulo + cor; projeção tracejada; variação com sinal | CMP-03, CMP-10 |
| 1.4.3 Contraste mínimo | Todos os pares de texto da Seção 4.3 ≥ 4,5:1 | Todos |
| 1.4.4 Redimensionar texto | Texto ampliável a 200% sem perda de conteúdo nem de função; abaixo de 768 px efetivos a página rola na horizontal, o que o critério admite | *Templates* |
| 1.4.10 Reflow | **Não atendido — limitação conhecida.** O critério exige uso sem rolagem horizontal a 320 px; a v1.0 não tem layout abaixo de 768 px (DEC-07). Acima de 768 px, a rolagem horizontal fica restrita a tabelas e gráficos, que o critério isenta | CMP-08 · P-29 |
| 1.4.11 Contraste não textual | Bordas de campo, foco, ícones e séries ≥ 3:1 | CMP-02, CMP-03, CMP-10 |
| 1.4.13 Conteúdo em hover ou foco | Tooltip dispensável com `Esc`, persistente sob o cursor, acionável por foco e por toque | CMP-21 |
| 2.1.1 Teclado | Toda ação acessível por teclado; atalhos do visualizador (`+`, `−`, `R`) | CMP-13, CMP-18 |
| 2.2.1 Tempo ajustável | O contador de 72 h é informativo; nenhuma ação expira enquanto o usuário está na tela | CMP-17 |
| 2.4.3 Ordem de foco | Modal prende o foco; o foco inicial nunca cai no botão destrutivo | CMP-13 |
| 2.4.7 Foco visível | Anel `color.focus.ring` de 2 px com afastamento de 2 px em todo elemento interativo | Todos |
| 2.5.5 Tamanho do alvo (AAA, adotado como meta) | 44 px em tablet; 32 px em desktop | Seção 6.2 |
| 3.3.1 Identificação de erro | Erro de campo com ícone, texto e associação ao campo | CMP-02 |
| 3.3.4 Prevenção de erro (financeiro) | Confirmação por digitação + janela de 72 h em toda ação destrutiva | CMP-13, CMP-17 |
| 4.1.2 Nome, função e valor | Botão bloqueado usa `aria-disabled` (continua focável) e lê o motivo | CMP-01 |
| 4.1.3 Mensagens de status | Progresso de varredura e confirmação por digitação anunciados em região `aria-live="polite"` | CMP-02, CMP-16 |

> **Por que `aria-disabled` e não `disabled`:** um botão com o atributo `disabled` sai da ordem
> de foco, e o usuário de leitor de tela nunca descobre *por que* não pode aprovar. Com
> `aria-disabled="true"` e `aria-describedby` apontando para o motivo, a DEC-39 (*"ação
> bloqueada aparece com o motivo visível"*) vale também para quem não enxerga a tela.

---

## 9. Catálogo de Componentes

### 9.1. Visão geral

| ID | Componente | Variantes | Telas de origem | Requisitos atendidos |
|:---|:---|:---|:---|:---|
| CMP-01 | **Botão** | primário · secundário · terciário · destrutivo · link · bloqueado com motivo | Todas | RI-16, DEC-39 |
| CMP-02 | **Campo de formulário** | texto · seleção · busca · data · **confirmação por digitação** | M-04, M-06 | RI-27, PAT-04 |
| CMP-03 | **Badge de estado** | 6 tons × 76 estados (Seção 10) | Todas | DEC-06, ANT-03 |
| CMP-04 | **Indicador de confiança** | `IA nn%` · `Base` · `Ajuste manual` · abaixo do limiar | W-06 | PAT-01, RNF-10 |
| CMP-05 | **Badge de evidência** | API · SSO · Proxy · Declaração · Nenhuma | W-07, M-04, M-08 | RI-25, RN02.2 |
| CMP-06 | **Card de KPI** | realizado · potencial (estimativa) · linha de base | W-04, W-05 | DEC-21, DEC-29 |
| CMP-07 | **Card de recomendação** | publicada · estimativa | W-07 | DEC-31, DEC-34 |
| CMP-08 | **Tabela de dados responsiva** | confortável · compacta · com sub-linha · com total | M-01, W-06, W-07, M-03, M-07 | RNF-09, PAT-09 |
| CMP-09 | **Barra de filtros persistentes** | com contador de filtros ativos | W-00, M-07 | PAT-10, RI-12 |
| CMP-10 | **Gráfico de linha temporal** | realizado × projetado | W-04 | DEC-21, ANT-07 |
| CMP-11 | **Gráfico de barras ordenadas** | desperdício por categoria | SCR-05 | REQ-05 |
| CMP-12 | **Comparativo lado a lado** | NF × cartão · plano atual × sugerido | M-02, M-07 | RI-08, PAT-05 |
| CMP-13 | **Modal de ação destrutiva** | dentro da alçada · exige alçada | M-04, M-05 | DSP-04, ANT-06 |
| CMP-14 | **Bloco de política** | aviso · bloqueio · checklist de regras | M-05, M-06 | PAT-08, RI-14 |
| CMP-15 | **Linha do tempo de aprovação** | requisição · ação | M-05, M-06 | RI-15, PAT-07 |
| CMP-16 | **Feedback de sistema** | banner · toast · estado vazio · skeleton · progresso | W-01, W-05, W-08 | RI-05, ANT-02 |
| CMP-17 | **Contador de janela de arrependimento** | antes da confirmação · em curso | M-04 | RI-29, DEC-40 |
| CMP-18 | **Visualizador de documento** | desktop lado a lado · tablet empilhado | M-02 | RI-09, **P-20** |
| CMP-19 | **Calendário de renovações** | mês · lista | M-03 | RI-19 |
| CMP-20 | **Shell da aplicação** | topbar · sidebar · breadcrumb · seletor de tenant · sino | W-00 | CTL-10 |
| CMP-21 | **Tooltip e popover de cálculo** | informativo · "como calculamos" | M-02 | RI-07 |
| CMP-22 | **Identificador de colaborador** | pseudônimo · reidentificado (Admin de RH) | W-07, W-08 D | LGPD-01, CTL-05 |

As subseções seguintes detalham os componentes **com regra de negócio embutida** — aqueles em
que um erro de implementação vira violação de requisito, não apenas defeito visual.

### 9.2. CMP-03 — Badge de estado

```text
  +---------------------------+
  | (ícone)  RÓTULO DO ESTADO |   altura 24 px (desktop) / 28 px (tablet)
  +---------------------------+   raio radius.full · padding 2 px 8 px
     ^          ^                 font.label · fundo e texto pelo tom
     |          +-- nome do estado da máquina, sem abreviação
     +-- ícone fixo do tom (Seção 7), herda a cor do rótulo
```

| Regra | Enunciado |
|:---|:---|
| BD-1 | O rótulo é **exatamente** o nome de exibição do estado declarado no diagrama do Entregável 3 (`state "Nome" as Id`), sem sinônimos — a UI é o veículo da Linguagem Onipresente |
| BD-2 | Abreviações dos wireframes (`S/TEL.`, `PEND. REVISAO`) **não** passam para a UI; quando falta espaço, o rótulo quebra ou a coluna cresce |
| BD-3 | Qualificador entra após um ponto médio: `Divergente · Crítica`, `Conciliada · câmbio`, `Em aprovação · nível 1 de 2` |
| BD-4 | Em **coluna de estado**, todo estado recebe badge, inclusive os nominais (tom `neutral`). Em **cabeçalho e card**, só os estados que pedem atenção |
| BD-5 | Estados internos não têm badge: `Candidata` e `Descartada` de Recomendação, e `Descartada` de Fatura e de Assinatura. A `Requisição · Descartada` tem badge porque aparece no histórico do solicitante |

### 9.3. CMP-08 — Tabela de dados responsiva (RNF-09)

```text
+--------------------------------------------------------------------------------+
| [Filtro v] [Filtro v] [Buscar........]   3 filtros ativos   [Limpar]   CMP-09  |
+--------------------------------------------------------------------------------+
| Fornecedor* | Licenças | Ociosas | Custo/mês ^ | Confiança | Estado     | ...  |  <- cabeçalho fixo
+-------------+----------+---------+-------------+-----------+------------+------+
| Figma       |       25 |       7 |  R$ 2.150,00|  IA 94%   |    Ativa   | [..] |
|   sub-linha: 7 licenças sem uso há mais de 30 dias . evidência API              |  <- contexto
+-------------+----------+---------+-------------+-----------+------------+------+
| TOTAL       |      402 |      72 |  R$ 5.512,00|           |            |      |  <- rodapé
+--------------------------------------------------------------------------------+
| 1–50 de 4.212        [25 | 50 | 100 por página]          [<] 1 2 3 ... 85 [>]  |
+--------------------------------------------------------------------------------+
  * primeira coluna fixa na rolagem horizontal · ^ coluna ordenada (aria-sort)
```

| Aspecto | Especificação |
|:---|:---|
| Alinhamento | Texto à esquerda; **número à direita** com `font.numeric`; estado como badge; ações no fim |
| Densidade | Confortável 48 px (padrão) · compacta 36 px (opção do usuário, só desktop) · tablet sempre 48 px |
| Prioridade de coluna | `Alta` sempre visível (identificador, estado, valor principal) · `Média` a partir de `desktop.md` · `Baixa` só em `desktop.lg`. Em tablet, colunas `Média`/`Baixa` ocultas vão para a linha expandida *"ver detalhes"* |
| Rolagem horizontal | Dentro do container, nunca da página; primeira coluna fixa com sombra `elevation.1` indicando conteúdo à direita |
| Sub-linha de contexto | Linha secundária em `font.caption` para o motivo do estado (padrão dos `^` do Mid-Fi); associada à linha por `aria-describedby` |
| Ordenação | Cabeçalho clicável com `aria-sort`; a ordem padrão é definida pela tela (ex.: severidade em SCR-02 — DEC-37) |
| Paginação | 50 linhas por padrão (25 / 50 / 100); total sempre explícito. Mitigação da P-15 até a medição da Semana 10 |
| Totais | Rodapé de total em `font.body.strong`, sempre declarando o escopo do filtro aplicado |
| Carregamento | 5 linhas de skeleton com a mesma estrutura de colunas — nunca spinner de página (W-08 A) |
| Vazio | Estado vazio acionável dentro do container (CMP-16) |
| Ações em lote | **Não há ação destrutiva em lote**; ações destrutivas são por objeto, em modal (DSP-04) |

**Prioridade de coluna nas tabelas já desenhadas:**

| Tabela | Alta | Média | Baixa |
|:---|:---|:---|:---|
| Divergências (M-01) | Severidade, Fornecedor, Variação, Estado | NF, Cobrado | — |
| Inventário (W-06) | Fornecedor, Custo/mês, Estado | Licenças, Ociosas, Confiança | — |
| Licenças (W-07) | Titular, Dias, Estado | Último acesso, Evidência | Setor |
| Renovações (M-03) | Assinatura, Faltam, Valor | Cobrança, Ciclo | — |
| Desperdício (M-07) | Categoria, Desperdício/mês | Ociosas, Recomendação | Licenças |
| Conectores (W-03) | Conector, Estado | Última varredura | — |

### 9.4. CMP-10 — Gráfico de linha temporal (ROI) — resolução da P-16

**Desktop:**

| Aspecto | Especificação |
|:---|:---|
| Séries | `Realizado` em linha cheia de 2 px (`chart.realized`); `Projetado` em linha tracejada 4-4 (`chart.projected`) — DV-4 |
| Eixo Y | Começa em zero; valores compactos (`R$ 50 mil`); linhas de grade horizontais em `chart.grid` |
| Eixo X | Um rótulo por mês (`set`, `out`, `nov`…) |
| Rótulo direto | Nome da série e último valor no fim de cada linha (DV-3) |
| Altura | 320 px |
| Interação | Hover e foco por teclado percorrem os meses; tooltip mostra todas as séries do mês |
| Alternativa | Botão **"Ver como tabela"** renderiza os mesmos dados em CMP-08 (WCAG 1.1.1) |
| Sem histórico | O gráfico **não é renderizado**: CMP-16 estado vazio com a data do primeiro ROI (W-05, ANT-02) |

**Tablet (P-16):** o espaço lateral não comporta rótulos diretos e não existe hover.

| Aspecto | Comportamento em tablet | Motivo |
|:---|:---|:---|
| Largura e altura | 8 colunas, 240 px de altura | Mantém o KPI e o gráfico visíveis sem rolar em retrato |
| Rótulos | Rótulo direto substituído por **legenda acima do gráfico com o valor atual** de cada série | Sem margem lateral para o rótulo |
| Eixo X | Rótulo a cada 2 meses (`set`, `nov`, `jan`…) | 12 rótulos não cabem em 8 colunas sem sobrepor |
| Tooltip | Abre com **toque** no ponto e permanece até tocar fora; nunca depende de hover | Não existe hover em tela de toque |
| Gestos | Sem arrastar ou pinçar no gráfico | Evita conflito com a rolagem da página |
| Período | Seletor 6 / 12 / 24 meses mantido; o padrão segue 12 meses | Coerência com o desktop |
| Alternativa | "Ver como tabela" com alvo de 44 px | Seção 6.2 |

### 9.5. CMP-11 e CMP-12 — Barras ordenadas e comparativo lado a lado

- **CMP-11** ordena as barras do maior para o menor desperdício, com rótulo de valor no fim de
  cada barra em `font.numeric`; até 8 categorias, o excedente agrupado em `Outras`. Barra em
  `chart.waste` (âmbar = oportunidade não explorada).
- **CMP-12** exibe duas colunas de mesma largura (`ATUAL` × `SUGERIDO`, `Nota fiscal` ×
  `Lançamento`), com a **diferença** em linha própria abaixo, sempre em valor e em percentual,
  e acesso à fórmula pelo CMP-21. Em tablet, as colunas ficam lado a lado até 768 px — a
  comparação perde o sentido se empilhada.

### 9.6. CMP-13 — Modal de ação destrutiva

```text
+------------------------------------------------------------------+
| Aplicar downgrade                                           [x]  |  font.heading.2
| Figma . reduzir de 25 para 18 licenças                           |
+------------------------------------------------------------------+
| IMPACTO DESTA AÇÃO                       (bloco obrigatório)     |  CMP-22 + CMP-05
|  7 colaboradores perderão acesso · lista de pseudônimos         |
|  Economia estimada · confiança                                   |
+------------------------------------------------------------------+
| POLÍTICA / ALÇADA                        (CMP-14)                |
+------------------------------------------------------------------+
| (relógio) Você terá 72 horas para reverter...  (CMP-17)          |
+------------------------------------------------------------------+
| Para confirmar, digite o nome da assinatura   [ Figma      ] ok  |  CMP-02
+------------------------------------------------------------------+
|                               [ Cancelar ]  [ Aplicar downgrade ]|  destrutivo à direita
+------------------------------------------------------------------+
```

| Regra | Enunciado | Origem |
|:---|:---|:---|
| MD-1 | Os quatro blocos — **impacto, política, janela, confirmação** — são obrigatórios; o modal não renderiza sem eles | DEC-38, DEC-40 |
| MD-2 | O botão destrutivo permanece bloqueado até a confirmação por digitação conferir | PAT-04 |
| MD-3 | Foco inicial no campo de confirmação, nunca no botão destrutivo; `Esc` fecha sem efeito | WCAG 2.4.3 |
| MD-4 | **Sem modal sobre modal**: "ver lista completa" expande o bloco de impacto dentro do próprio modal | ANT-06 |
| MD-5 | Cabeçalho e rodapé fixos; o corpo rola internamente até 90% da altura da janela | TPL-05 |
| MD-6 | Na variante **exige alçada** (M-05), o botão principal é `Solicitar aprovação` e o estilo deixa de ser destrutivo — nada é executado | ANT-05, CT-07.3 |

### 9.7. CMP-14 — Bloco de política

Implementa o padrão **política exibida no momento da decisão** (PAT-08). Três variantes:

| Variante | Tom | Conteúdo | Exemplo |
|:---|:---|:---|:---|
| Aviso | `warning` | Regra aplicável + parâmetro que a aciona + consequência | M-05: *"Esta ação exige aprovação formal…"* |
| Bloqueio | `danger` | Regra que bloqueia + dado que a acionou + saídas possíveis | M-06: *"Bloqueada — licenças ociosas disponíveis em estoque"* |
| Checklist | `neutral` | Uma linha por regra avaliada, cada uma com ícone de resultado | M-06 (21): RN01 não acionada · RN04 acionada · segregação ok |

O texto vem **sempre** de uma mensagem padronizada da Seção 11, nunca escrito na tela.

### 9.8. CMP-07 — Card de recomendação

| Slot | Obrigatório | Conteúdo | Exemplo |
|:---|:---:|:---|:---|
| Cabeçalho | Sim | Posição na sequência + badge `ai` | `Recomendação 1 de 7` |
| **O que fazer** | Sim | Ação concreta com quantidade | `Reduzir de 25 para 18 licenças do Figma` |
| **Por quê** | Sim | Sinal de desperdício em linguagem de negócio | `7 licenças sem uso há mais de 30 dias` |
| **Evidência** | Sim | CMP-05 + data da coleta | `API do fornecedor · coleta em 05/09/2026` |
| **Quanto economiza** | Sim | Valor anual + CMP-04 | `R$ 7.224,00 / ano · confiança 94%` ¹ |
| Ações | Sim | Secundária (ver detalhe) + primária (abre CMP-13) | `Ver licenças` · `Aplicar downgrade` |

O componente **não renderiza** com qualquer um dos quatro campos centrais vazio — a DEC-34
deixa de depender de revisão e passa a ser propriedade do componente. A variante
**Estimativa** (confiança abaixo de 0,70) acrescenta a `MSG-14` e troca o botão primário por
`Validar recomendação`.

> ¹ O valor de exemplo usa R$ 86,00 por licença (R$ 2.150,00 ÷ 25, conforme o inventário W-06
> e o comparativo M-07). Os wireframes W-07 e M-04 exibem R$ 6.048,00, que corresponde a
> R$ 72,00 por licença — ver pendência **P-25**.

### 9.9. CMP-18 — Visualizador de documento — resolução da P-20

**Desktop (M-02):** documento original à esquerda e campos extraídos à direita (TPL-02, 6 + 6
colunas); focar um campo destaca a região correspondente na imagem.

**Tablet em retrato:** seis colunas por painel não cabem em 8 colunas sem tornar a nota
ilegível.

| Aspecto | Comportamento em tablet | Motivo |
|:---|:---|:---|
| Disposição | Documento no topo (até 50% da altura da tela) e campos abaixo; o comparativo NF × cartão fica abaixo dos campos | Mantém a leitura do documento sem miniaturizar |
| Sincronia | Tocar em um campo rola o painel do documento até a região e a destaca | Substitui o "olhar para o lado" do desktop |
| Zoom | **Pinça** de 1× a 4×; **toque duplo** alterna entre 1× e 2× | Gestos nativos esperados pelo usuário |
| Arrastar | Com um dedo **só quando há zoom**; sem zoom, o arrastar rola a página | Evita a armadilha de gesto em que a página "não rola" |
| Rotação | **Botão** `Girar 90°`, nunca gesto de torção | Gesto de rotação conflita com o sistema e é impreciso |
| Controles | `−`, `+`, `Girar`, `Ajustar à largura`, todos com 44 px | Seção 6.2 |
| Teclado (desktop) | `+` / `−` para zoom, `R` para girar, `0` para ajustar | WCAG 2.1.1 |

> **O visualizador nunca recebe a imagem original.** Ele exibe a cópia **redigida** gerada na
> ingestão, em que CPF e nome do tomador já estão cobertos por tarja sólida (regra AN-03 do
> [Entregável 2](entregavel-02-dicionario-dados-anonimizacao-lgpd01.md)). A máscara vista em
> M-02 é do arquivo armazenado, não uma camada de exibição.

### 9.10. Demais componentes com regra embutida

| Componente | Regras específicas |
|:---|:---|
| **CMP-01 Botão bloqueado** | `aria-disabled="true"` + motivo visível ao lado em `color.text.secondary`; nunca some da tela (DEC-39, RI-16) |
| **CMP-02 Confirmação por digitação** | Comparação sem diferenciar maiúsculas e sem espaços nas pontas; feedback `confere` anunciado em `aria-live`; colar texto é permitido |
| **CMP-04 Indicador de confiança** | Em **classificação de fornecedor**, `IA nn%` em tom `ai` quando ≥ 0,80 e, abaixo, tom `warning` com sufixo `· revisar` (E2, DEC-44); `Base` e `Ajuste manual` em tom `neutral` (W-06). Em **recomendação**, o limiar é o de publicação, 0,70: abaixo dele, a variante `Estimativa` (MSG-14) |
| **CMP-05 Evidência** | `SSO` exibe sempre a ressalva `apenas login` (`MSG-06`); `Declaração` (E4) só aparece em contestação, nunca como prova de uso (RN02.2) |
| **CMP-06 KPI** | Economia potencial nunca no mesmo card da realizada e nunca somada a ela; badge `Estimativa` (DEC-21) |
| **CMP-09 Filtros** | Persistem no *drill-down* e na volta; contador de filtros ativos com a frase `serão aplicados também na exportação` (ANT-04) |
| **CMP-15 Linha do tempo** | Cada etapa com responsável, data e prazo de SLA; escalonamento aparece como etapa própria, nunca como edição da anterior (RN01.10) |
| **CMP-16 Progresso de varredura** | Barra no topbar com resultado parcial (`47 assinaturas encontradas`); anúncio em `aria-live` a cada 10%, não a cada atualização |
| **CMP-17 Contador de 72 h** | Data absoluta + prazo relativo (`Reverter até 17/09 14:02 · faltam 71 h`); atualiza por minuto, não por segundo — contador em segundos gera ansiedade e ruído no leitor de tela (DEC-40) |
| **CMP-19 Calendário** | Navegação em grade por setas; em tablet retrato a **lista** é a visão inicial |
| **CMP-20 Shell** | Seletor de tenant sempre visível (CTL-10); sidebar com no máximo 7 itens; em tablet, ícones de 64 px com nome acessível e tooltip |
| **CMP-21 Popover de cálculo** | Mostra a fórmula **com os valores reais** (`(17.360,00 − 12.400,00) ÷ 12.400,00`), não só o percentual (RI-07) |
| **CMP-22 Identificador de colaborador** | Padrão: pseudônimo em `font.code` + ícone de escudo + tooltip `MSG-12`. Variante reidentificada: só no perfil Admin de RH, com o nome ao lado do pseudônimo e badge `Reidentificado` — nunca o nome sozinho |

---

## 10. Badges de Estado — Mapeamento das 8 Máquinas

Fonte única dos rótulos: as máquinas de estado v1.0 do
[Entregável 3](entregavel-03-diagramas-uml.md). Cada estado recebe tom e ícone; estados
internos estão marcados com `—`.

### 10.1. Bloco A — Captura e diagnóstico

| Máquina | Estado | Rótulo na UI | Tom | Ícone |
|:---|:---|:---|:---|:---|
| `Fatura` | Recebida | Recebida | `neutral` | relógio |
| | PendenteRevisao | Pendente de revisão | `warning` | triângulo |
| | Extraida | Extraída (OCR) | `neutral` | relógio |
| | AguardandoConciliacao | Aguardando conciliação | `info` | relógio |
| | Conciliada | Conciliada *(· câmbio)* | `success` | verificação |
| | Divergente | Divergente · Média / Alta / Crítica | `danger` | X |
| | Tratada | Tratada | `neutral` | verificação |
| | SemConciliacao | Sem conciliação | `danger` | X |
| | Descartada | — | — | — |
| `Licença` | Provisionada | Provisionada | `neutral` | relógio |
| | Ativa | Ativa | `neutral` | verificação |
| | Ociosa | Ociosa *(· apenas login)* | `warning` | triângulo |
| | SuspensaPorAfastamento | Suspensa por afastamento | `neutral` | relógio |
| | SemTelemetria | Sem telemetria | `neutral` | sinal cortado |
| | Orfa | Órfã | `warning` | triângulo |
| | EmDowngrade | Em downgrade *(· faltam nn h)* | `info` | relógio |
| | EmCancelamento | Em cancelamento *(· faltam nn h)* | `info` | relógio |
| | Removida | Removida | `neutral` | verificação |
| | Cancelada | Cancelada | `neutral` | verificação |
| `Assinatura` | Mapeada | Em catalogação | `neutral` | relógio |
| | Descartada | — | — | — |
| | Vigente | — *(estado composto)* | — | — |
| | Ativa | Ativa | `neutral` | verificação |
| | Ociosa | Ociosa | `warning` | triângulo |
| | EmDowngrade | Em downgrade | `info` | relógio |
| | EmCancelamento | Em cancelamento | `info` | relógio |
| | TelemetriaAtual | — *(nominal)* | — | — |
| | TelemetriaDesatualizada | Telemetria desatualizada | `warning` | triângulo |
| | SemTelemetria | Sem telemetria | `neutral` | sinal cortado |
| | RenovacaoNaoMapeada | Renovação não mapeada | `warning` | triângulo |
| | RenovacaoLiberada | — *(nominal)* | — | — |
| | RenovacaoBloqueada | Renovação bloqueada | `danger` | X |
| | ComResponsavel | — *(nominal)* | — | — |
| | SemResponsavel | Sem responsável | `warning` | triângulo |
| | Cancelada | Cancelada | `neutral` | verificação |
| `Recomendação` | Candidata | — | — | — |
| | Descartada | — | — | — |
| | Publicada | Publicada | `ai` | brilho |
| | Estimativa | Estimativa | `ai` | brilho |
| | Aceita | Aceita | `info` | relógio |
| | Recusada | Recusada | `neutral` | X |
| | Obsoleta | Desatualizada | `neutral` | relógio |
| | Executada | Economia realizada | `success` | verificação |
| | Revertida | Revertida | `neutral` | relógio |
| | RecusadaPeloFornecedor | Recusada pelo fornecedor | `warning` | triângulo |
| `Conexão` | Conectando | Conectando | `info` | relógio |
| | Ativa | Ativa | `success` | verificação |
| | TokenExpirado | Token expirado | `warning` | triângulo |
| | Erro | Erro | `danger` | X |
| | Revogada | Revogada | `neutral` | sinal cortado |

> **Por que `Ativa` é `success` na Conexão e `neutral` na Licença:** a saúde de um conector é
> uma informação que o Administrador de TI vem conferir (W-03); uma licença ativa é o estado
> esperado de 90% das linhas e, se fosse verde, transformaria a tabela de licenças num mar de
> verde que esconde as âmbar. O tom segue a **pergunta que a tela responde**, não o nome do
> estado.

### 10.2. Bloco B — Gestão e governança

| Máquina | Estado | Rótulo na UI | Tom | Ícone |
|:---|:---|:---|:---|:---|
| `Requisição` | Rascunho | Rascunho | `neutral` | relógio |
| | EmAprovacao | Em aprovação · nível n de m | `info` | relógio |
| | Bloqueada | Bloqueada · RN04 | `danger` | X |
| | Aprovada | Aprovada | `success` | verificação |
| | Rejeitada | Rejeitada | `neutral` | X |
| | Contratada | Contratada | `neutral` | verificação |
| | Expirada | Expirada | `neutral` | relógio |
| | AtendidaPorRealocacao | Atendida por realocação | `success` | verificação |
| | Descartada | Descartada | `neutral` | X |
| `Ação` | Solicitada | Solicitada | `neutral` | relógio |
| | EmAprovacao | Em aprovação | `info` | relógio |
| | Rejeitada | Rejeitada | `neutral` | X |
| | JanelaArrependimento | Reversível · faltam nn h | `info` | relógio |
| | Revertida | Revertida | `neutral` | relógio |
| | InvalidadaPorUso | Cancelada por uso retomado | `warning` | triângulo |
| | EmExecucao | Em execução | `info` | relógio |
| | Executada | Executada | `success` | verificação |
| | RecusadaPeloFornecedor | Recusada pelo fornecedor | `warning` | triângulo |
| `Alerta` | Agendado | Agendado | `neutral` | relógio |
| | Disparado | Renovação próxima | `warning` | triângulo |
| | DisparadoComRessalva | Renovação próxima com ressalva | `warning` | triângulo |
| | Escalado | Escalado | `danger` | X |
| | Tratado | Tratado | `neutral` | verificação |
| | Ignorado | Ignorado | `neutral` | X |
| | Cancelado | Cancelado | `neutral` | X |
| | Expirado | Renovado sem decisão | `danger` | X |

**Consolidação:** 76 estados mapeados; **68 com badge visível** e 8 internos, nominais ou
compostos, sem badge. Distribuição dos visíveis por tom: `neutral` 29 · `warning` 13 · `info`
11 · `danger` 7 · `success` 6 · `ai` 2. Quase metade dos estados é `neutral` por desenho, e o
`danger` fica com apenas 7 dos 68 — se tudo é vermelho, nada é urgente.

---

## 11. Componentes de Mensagem — Microcopy das Regras

Mensagens padronizadas consumidas pelo CMP-14, pelo CMP-21 e pelas sub-linhas de tabela.
Variáveis entre chaves são preenchidas pelo sistema com o **parâmetro que acionou a regra**
(Mid-Fi, critério 4).

| ID | Regra | Onde aparece | Texto |
|:---|:---|:---|:---|
| MSG-01 | RN01 | CMP-14 aviso (M-05) | Esta ação exige aprovação formal. Contratações e cancelamentos com valor mensal equivalente acima de R$ 500,00 precisam da aprovação de um gestor financeiro. Valor desta ação: {vme}. |
| MSG-02 | RN04 | CMP-14 bloqueio (M-06) | Sua empresa já possui {n} licenças de {fornecedor} sem uso há mais de 30 dias. Novas contratações ficam bloqueadas enquanto houver licenças idênticas disponíveis no inventário. |
| MSG-03 | RN05 | CMP-12 e sub-linha (M-01, M-02) | O valor cobrado no cartão ({valor_cartao}) difere {variacao} do valor da nota fiscal ({valor_nf}). Diferenças acima da tolerância aplicada ({tolerancia_aplicada}) são marcadas como divergentes e o financeiro é notificado. |
| MSG-04 | RN05.5 | Sub-linha (M-01) | Variação explicada por câmbio e IOF. |
| MSG-05 | RN02.1 | Sub-linha (W-07) | Sem uso há {dias} dias. Licenças sem atividade por 30 dias seguidos são consideradas ociosas. |
| MSG-06 | RN02.2 | CMP-05 (W-07) | Evidência: apenas login. Sabemos que a ferramenta foi aberta, não que foi usada. |
| MSG-07 | RN02.4 | Sub-linha e banner (W-07) | Não há fonte de uso conectada para esta licença, por isso ela não é avaliada como ociosa. |
| MSG-08 | RN02.9 | CMP-17 (M-04) | Você terá 72 horas para reverter antes que a ação siga para execução junto ao fornecedor. |
| MSG-09 | RN03 | Sub-linha (M-03) | A antecedência mínima de {15 ou 45} dias não pôde ser cumprida: esta assinatura foi encontrada em {data}. |
| MSG-10 | RN01.6 | CMP-14 checklist e CMP-01 | Você não pode aprovar uma requisição feita por você. Ela foi encaminhada para {proximo_nivel}. |
| MSG-11 | RN01.9 | Banner (SCR-09) | O valor mudou mais de 10%. As aprovações anteriores foram invalidadas e a requisição voltou para rascunho. |
| MSG-12 | LGPD-01 | CMP-22 tooltip (W-08 D) | Identidade protegida pela LGPD-01. Apenas o Administrador de RH pode reidentificar, com registro do motivo. |
| MSG-13 | RN02.4 | Banner de cobertura (W-07, M-07) | Cobertura da apuração: {n}% da carteira. Os valores abaixo são um piso, não um total exato. |
| MSG-14 | Motor E5 | CMP-07 variante Estimativa | Estimativa com confiança abaixo de 70%. Valide os dados antes de agir. |
| MSG-15 | RN02.10 | Portal do Titular (M-08) | Estes dados não podem ser usados para avaliação de desempenho. |

**Regras de redação:**

1. Segunda pessoa (*você*), voz ativa, frases de até 25 palavras.
2. Primeiro o **fato**, depois a **regra**, por fim a **saída** — nunca o código da regra como
   primeira palavra. O código (`RN04`) aparece em texto secundário, para fins de auditoria.
3. Nunca *"erro"* para um estado de negócio: divergência, ociosidade e bloqueio são resultados
   esperados das regras, não falhas do sistema (Semana 01, Seção 7 da AI).
4. Os termos seguem o glossário da Linguagem Onipresente (Entregável 2, Seção 21).

> **P-21 — situação.** O texto acima é a **versão de produto**, já submetida ao critério de
> legibilidade; a revisão jurídica de MSG-01, MSG-02 e MSG-15, que reproduzem obrigações
> contratuais e legais, segue pendente. A pendência permanece aberta, agora com o texto que o
> jurídico deve revisar.

---

## 12. Aplicação nas Telas Já Desenhadas

Verificação de que o sistema cobre o que as Semanas 04 e 05 já desenharam — nenhum elemento
dos wireframes fica sem componente correspondente.

| Wireframe | Componentes |
|:---|:---|
| W-00 Shell | CMP-20, CMP-16 (progresso), CMP-09 |
| W-01 a W-03 Conexões | CMP-16 (estado vazio), CMP-13 (W-02 como modal informativo), CMP-08, CMP-03 |
| W-04 e W-05 Dashboard | CMP-06, CMP-10, CMP-16 (estado vazio) |
| W-06 Inventário | CMP-08, CMP-04, CMP-03 |
| W-07 Licenças ociosas | CMP-16 (banner de cobertura), CMP-07, CMP-08, CMP-05, CMP-22 |
| W-08 Estados globais | CMP-16, CMP-22 |
| M-01 e M-02 Faturas | CMP-08, CMP-03, CMP-18, CMP-12, CMP-21 |
| M-03 Alertas | CMP-19, CMP-08, CMP-03 |
| M-04 e M-05 Modais | CMP-13, CMP-14, CMP-17, CMP-02, CMP-15 |
| M-06 Aprovação | CMP-14, CMP-15, CMP-01 (bloqueado com motivo) |
| M-07 Relatórios | CMP-09, CMP-16 (banner), CMP-08, CMP-12 |
| M-08 Portal do Titular | CMP-08, CMP-05, CMP-01 · *template* próprio de coluna única (Seção 6.1) |

---

## 13. Critérios de Aceite do Design System

1. Nenhum par de texto e fundo usado em componente fica abaixo de 4,5:1 (Seção 4.3).
2. Nenhum componente referencia primitivo ou hexadecimal direto (TK-1).
3. Todo estado das 8 máquinas de estado tem rótulo, tom e ícone definidos, ou está declarado
   como interno (Seção 10).
4. Todo componente interativo tem variante de 44 px para tablet (Seção 6.2).
5. Todo gráfico tem alternativa em tabela (WCAG 1.1.1).
6. O CMP-07 e o CMP-13 são incapazes de renderizar sem seus blocos obrigatórios.
7. Todo texto de regra na interface vem da Seção 11, não de texto livre na tela.
8. Todo elemento dos 17 wireframes tem componente correspondente (Seção 12).

---

## 14. Arquivo de Tokens v1.0 (formato W3C Design Tokens)

Trecho representativo. O arquivo completo é exportado do Figma e versionado junto a este
documento a partir da Semana 07.

```json
{
  "color": {
    "green":  { "700": { "$value": "#047857", "$type": "color" } },
    "amber":  { "800": { "$value": "#92400E", "$type": "color" },
                "100": { "$value": "#FEF3C7", "$type": "color" } },
    "white":  { "$value": "#FFFFFF", "$type": "color" },
    "surface": { "card": { "$value": "{color.white}", "$type": "color" } },
    "text": {
      "placeholder": { "$value": "{color.slate.500}", "$type": "color" },
      "disabled":    { "$value": "{color.slate.400}", "$type": "color" }
    },
    "status": {
      "success": { "bg": { "$value": "{color.green.50}",  "$type": "color" },
                   "fg": { "$value": "{color.green.700}", "$type": "color" } },
      "warning": { "bg": { "$value": "{color.amber.100}", "$type": "color" },
                   "fg": { "$value": "{color.amber.800}", "$type": "color" } },
      "danger":  { "bg": { "$value": "{color.red.100}",   "$type": "color" },
                   "fg": { "$value": "{color.red.700}",   "$type": "color" } },
      "ai":      { "bg": { "$value": "{color.violet.50}", "$type": "color" },
                   "fg": { "$value": "{color.violet.700}","$type": "color" } }
    },
    "chart": {
      "realized":  { "$value": "{color.green.700}", "$type": "color" },
      "projected": { "$value": "{color.slate.500}", "$type": "color" }
    }
  },
  "font": {
    "code": {
      "$type": "typography",
      "$value": { "fontFamily": "JetBrains Mono", "fontSize": "13px",
                  "lineHeight": "20px", "fontWeight": 500 }
    }
  },
  "size": {
    "target": {
      "desktop": { "$value": "32px", "$type": "dimension" },
      "tablet":  { "$value": "44px", "$type": "dimension" }
    }
  }
}
```

---

## 15. Decisões e Pendências

| ID | Item | Situação |
|:---|:---|:---|
| DEC-47 | Texto sobre fundo de status usa os tons 700/800; os tons 600 de verde e âmbar ficam restritos a elementos não textuais | Decidido · **resolve P-01** |
| DEC-48 | Placeholder passa de `slate.400` (2,6:1) para `slate.500` (4,8:1); `slate.400` fica restrito a controle desabilitado. A v0.1 registrava 2,8:1 e liberava o par para placeholder, mas placeholder é texto e exige 4,5:1 | Decidido |
| DEC-49 | Badge com anatomia fixa (ícone + rótulo + tom) e rótulo igual ao nome do estado na máquina; seis tons semânticos | Decidido |
| DEC-50 | Gráfico de ROI em tablet: legenda com valor atual no lugar do rótulo direto, eixo a cada 2 meses, tooltip por toque, 240 px de altura | Decidido · **resolve P-16** |
| DEC-51 | Visualizador de NF em tablet: painéis empilhados, pinça e toque duplo para zoom, rotação por botão, arrastar só com zoom | Decidido · **resolve P-20** |
| DEC-52 | Tabela com prioridade de coluna Alta/Média/Baixa; em tablet as colunas de menor prioridade vão para a linha expandida | Decidido |
| P-21 | Revisão jurídica das mensagens MSG-01, MSG-02 e MSG-15 | Segue aberta — texto entregue para revisão |
| P-25 | (a) O M-04 informa *"nenhuma aprovação adicional"* com VME afetado de R$ 504,00/mês, que já está **acima do teto de R$ 500,00 da RN01** — pela DEC-19 o modal deveria exigir o Gestor Financeiro. (b) À parte, o exemplo do Figma em W-07, M-04 e na Seção 7.2 do motor usa R$ 72,00 por licença (R$ 6.048,00/ano), contra R$ 86,00 do inventário W-06 e do M-07 (R$ 7.224,00/ano; VME afetado de R$ 602,00/mês) | Aberta — corrigir os dados de exemplo no Hi-Fi (Semanas 08 e 09) |
| P-27 | Validar o sistema com leitor de tela real (NVDA e VoiceOver) e em tablet físico | Semana 10 (estados) e Semana 12 (testes) |
| P-29 | WCAG 1.4.10 (Reflow) não atendido por falta de layout abaixo de 768 px (DEC-07) | Decidir com o cliente se a exceção é aceita ou se entra um layout de reflow |

---

## 16. Rastreabilidade

| Item | Consumido em | Entregável de destino |
|:---|:---|:---|
| Seções 4 e 5 (cor e tipografia) | Semanas 08 e 09 | Layouts Hi-Fi dos Blocos A e B |
| Seção 9.3 (tabela responsiva) | Semana 07 | Biblioteca de tabelas responsivas (RNF-09) |
| Seções 9.4 e 9.5 (gráficos) | Semana 07 | Biblioteca de gráficos de desperdício (RNF-06) |
| Seção 10 (badges) | Semana 07 | Finalização dos badges de status |
| Seção 11 (mensagens) | Semana 10 | Telas de exceção e travas RN03/RN04 em tela |
| Seção 8 (WCAG) | Semana 12 | Roteiro de teste de usabilidade com tecnologia assistiva |
| Seção 14 (tokens) | Semana 14 | Handoff para engenharia |
