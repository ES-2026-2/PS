# Semana 01 (Iteração 1) — Kickoff e Configuração de Segurança

**Período:** 10/08/2026 a 16/08/2026  
**Fase:** 1 — Descoberta, Regras e Mapeamento  
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md)  
**Matriz UML:** [`diagramasUML.md`](../diagramasUML.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Situação |
|:---|:---|:---:|
| **AR1 / AR2** | Elicitação detalhada das integrações de e-mail/ERP, regras de privacidade (LGPD-01, LGPD-02) e criptografia AES-256 (RNF-01) | Concluído |
| **D1 / D2** | Benchmarking de softwares B2B/FinTech, definição de arquitetura de informação e mapeamento de design tokens | Concluído |

---

## Entregáveis

| # | Entregável | Documento | Resp. |
|:--|:---|:---|:---|
| 1 | Matriz de Conformidade de Segurança e Privacidade (AES-256, LGPD-01, LGPD-02, RNF-01) | [entregavel-01-matriz-conformidade-seguranca-privacidade.md](entregavel-01-matriz-conformidade-seguranca-privacidade.md) | AR1 / AR2 |
| 2 | Documento de Arquitetura de Informação e Mapa de Navegação do App | [entregavel-02-arquitetura-informacao-mapa-navegacao.md](entregavel-02-arquitetura-informacao-mapa-navegacao.md) | D1 / D2 |
| 3 | Benchmark de UI/UX FinTech/SaaS Corporativo e Design Tokens Iniciais (Figma) | [entregavel-03-benchmark-uiux-design-tokens.md](entregavel-03-benchmark-uiux-design-tokens.md) | D1 / D2 |
| 4 | Diagramas UML, conforme `diagramasUML.md`, se for o caso | [entregavel-04-diagramas-uml.md](entregavel-04-diagramas-uml.md) | AR1 / AR2 |

---

## Decisões de Projeto Tomadas nesta Iteração

| ID | Decisão | Impacto |
|:---|:---|:---|
| DEC-01 | O sistema atua como **operador** de dados pessoais; a empresa cliente é a **controladora** | Define responsabilidades LGPD em toda a modelagem |
| DEC-02 | Todas as integrações usam credenciais **somente-leitura** na v1.0 | Nenhuma ação de cancelamento é automatizada — sustenta RN01 |
| DEC-03 | Pseudonimização de colaboradores é o **padrão**, não uma opção | Só o Admin de RH reidentifica, com registro em trilha de auditoria |
| DEC-04 | Corpo de e-mail sem anexo/keyword **nunca é persistido** | Implementa RNF-07 no pipeline, antes da gravação |
| DEC-05 | Taxonomia da navegação é **orientada à tarefa**, não à origem do dado | Evita espelhar as integrações na estrutura de menus |
| DEC-06 | Nenhum estado é comunicado **apenas por cor** | Conformidade WCAG 1.4.1 desde o Design System |
| DEC-07 | Escopo de responsividade limitado a **desktop e tablet** (RNF-09) | Mobile fora do escopo da v1.0; não será prototipado |

---

## Pendências e Riscos Abertos

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-01 | Contraste reprovado: texto branco sobre `green.600` e sobre `amber.600` | Definir `green.700` e texto escuro sobre âmbar — Semana 6 |
| P-02 | Rotação de chaves criptográficas (CTL-04) sem política detalhada | Detalhar na Semana 6 |
| P-03 | Estratégia de isolamento multi-tenant (CTL-10) sem plano de teste | Detalhar na Semana 7, junto ao Diagrama de Pacotes |
| P-04 | Transferência internacional / GDPR (CTL-14) sem anexo contratual | Detalhar na Semana 7 |
| P-05 | Definir se UC-11 e UC-12 são casos de uso de 1ª classe ou contexto genérico | Validar AR1 × AR2 na Semana 2 |
| P-06 | O cabeçalho da Fase 1 em `estudo_caso1.md` está incompleto: *"Semanas 1 a 3 (10/08/2026 a )"* | Sugerido completar para `16/08/2026 a 30/08/2026`; correção não aplicada por estar fora do escopo desta iteração |

---

## Entradas para a Semana 02 (Detalhamento do Bloco A — REQ-01 a REQ-03)

- **Seção 2** do Entregável 1 → base factual para o BDD/Gherkin de REQ-01 a REQ-03.
- **Seção 3** do Entregável 2 → vocabulário dos cenários Gherkin (evita sinônimos ruidosos).
- **Seções 3 e 4** do Entregável 4 → descrições textuais de UC-01 a UC-03 e histórias US-01 a US-03.
- **CTL-12** (2FA) → relacionamento `<<include>>` a formalizar na entrega do Diagrama de Casos de Uso.
