# Entregável 2 — Protótipo UI com Aplicação Visual das Travas RN03 e RN04

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 10 (12/10/2026 – 18/10/2026) — Refinamento Visual e Estados de Interface
**Responsável:** AR1 / AR2 (Analistas de Requisitos)
**Situação:** ✅ **Concluído**
**Prazo:** 18/10/2026

---

## 1. Objetivo

O cronograma desta semana não pede telas novas para a RN03 (alerta 15/45 dias) e a RN04 (teto
de desperdício) — pede **validação de regras de negócio em tela**. As duas já têm Hi-Fi
construída desde a Semana 09 (SCR-06 para a RN03, SCR-09 para a RN04). Este documento audita
essa Hi-Fi contra os padrões que a Semana 01 definiu antes de qualquer wireframe existir
(PAT-04, PAT-08, ANT-06, tokens de cor), em vez de reconstruir as telas.

> **O que a pesquisa desta iteração não encontrou:** nenhum requisito pedindo que a RN03 ou a
> RN04 apareçam em *mais* telas além de SCR-06/SCR-09 (ex.: um banner global, um bloqueio no
> Inventário). Se isso surgir mais adiante, é um entregável novo, não uma correção deste.

---

## 2. Auditoria da RN04 — Teto de Desperdício

| Critério da Semana 01 | Onde foi definido | Está na Hi-Fi (SCR-09)? |
|:---|:---|:---:|
| PAT-08 — Política exibida no momento da decisão, citando RN01 e RN04 | S1·E3, linha 62 | ✓ — checklist "RN01 não acionada" / "RN04 acionada" visível antes de qualquer botão de decisão |
| ANT-06 — Evitar modal sobre modal, que impediria ler a política de fundo | S1·E3, linha 77 | ✓ — bloqueio é exibido na própria tela (banner), não em modal sobreposto |
| `color.status.blocked = red.600` para requisição bloqueada | S1·E3, linha 113 | ✓ — o banner "BLOQUEADA" e o badge usam `color/red/600`, conferido no token do componente (Design System Seção 10.2) |
| Ação de desbloqueio visível (realocar estoque) | CT-09.4 | ✓ — "Realocar 3 licenças do estoque" |
| Sobreposição do bloqueio com justificativa, exigindo alçada superior | CT-09.5 | ✓ — "Registrar justificativa" |

**Resultado: 5 de 5 critérios atendidos.** Nenhum ajuste necessário na SCR-09.

---

## 3. Auditoria da RN03 — Alerta de Renovação (15/45 dias)

A Semana 01 não definiu um `PAT`/`ANT` específico para a RN03 (ela não aparece no benchmark de
padrões, Seção 3 do S1·E3) — seu contrato visual vem direto dos cenários (CT-06.x) e do
catálogo de badges (Design System, Seção 10.2, máquina `Alerta`).

| Critério | Onde foi definido | Está na Hi-Fi (SCR-06)? |
|:---|:---|:---:|
| Antecedência de 15 dias (mensal/trimestral) e 45 dias (anual/bienal) | CT-06.7 | ✓ — coluna "Faltam", valores de exemplo corretos (Miro 7d/anual com ressalva, HubSpot 9d/mensal) |
| Badge com tom `warning` para `Disparado`/`DisparadoComRessalva` | Design System, Seção 10.2 | ✓ |
| Badge com tom `danger` para `Escalado` (assinatura sem responsável) | Design System, Seção 10.2 | ✓ |
| Destaque de licenças ociosas no alerta, com ação de downgrade | CT-06.6 | ✓ — Salesforce, "Avaliar downgrade antes de renovar" |
| Selo de ressalva quando a antecedência não pôde ser cumprida | CT-06.4 | ✓ — Miro |
| Motivo obrigatório ao ignorar o alerta | RI-24 | ✓ — corrigido no Entregável 3 da Semana 09, controle *"[ ... ] ignorar"* presente |

**Resultado: 6 de 6 critérios atendidos.** Nenhum ajuste necessário na SCR-06.

---

## 4. Lista de Verificação (HF-xx)

Numeração contínua a partir da HF-47 (última usada no Entregável 1 desta semana).

| ID | Item | Condição | Situação |
|:---|:---|:---|:---:|
| HF-48 | RN04 (SCR-09) | Política exibida na decisão (PAT-08), sem modal sobre modal (ANT-06), token `color.status.blocked` correto | ✓ Auditado, sem pendência |
| HF-49 | RN03 (SCR-06) | Antecedência correta por ciclo, badges da máquina `Alerta` com tom correto, motivo obrigatório ao ignorar | ✓ Auditado, sem pendência |

---

## 5. Decisões e Pendências

Nenhuma decisão nova proposta — este entregável é uma auditoria de conformidade, não um
entregável de construção.

**Achado da revisão completa desta semana.** A auditoria original do critério
`color.status.blocked = red.600` (linha 31) conferiu só o binding de cor do texto do banner
"BLOQUEADA" — sem checar se existia, de fato, uma instância do componente `Badge/Risco`
(Design System, Seção 10.2) na SCR-09. Inspeção direta do arquivo Figma mostrou que não
existia nenhuma instância de badge na SCR-09, nem na SCR-09b, nem na variante tablet: o
estado "Bloqueada"/"Rascunho" era representado só por texto colorido manualmente. Corrigido
nesta revisão: instâncias de `Badge/Risco` ("Bloqueada · RN04") foram adicionadas à SCR-09 e
à variante tablet, e uma instância de `Badge/Neutro` ("Rascunho") à SCR-09b — refletido nas
imagens reexportadas da Semana 09 (ver nota de correção em Semana 09, Entregável 3, Seção 3).
HF-48 permanece válido: o critério da linha 31 agora é verdadeiro de fato, não só por
inferência do binding de cor. Nenhuma outra pendência aberta.

---

## 6. Rastreabilidade deste Documento

| Fonte auditada | Onde está |
|:---|:---|
| PAT-04, PAT-08, ANT-06, tokens de cor | Semana 01, Entregável 3 |
| CT-06.x (RN03) | Semana 03, Entregável 1 |
| Badges da máquina `Alerta` e `Requisição` | Semana 06, Design System, Seção 10.2 |
| Hi-Fi auditada (SCR-06, SCR-09) | Semana 09, Entregável 2 |
