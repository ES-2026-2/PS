# Semana 07 (Iteração 7) — Consolidação dos Componentes

**Período:** 21/09/2026 a 27/09/2026 (confirmado no cronograma de [`estudo_caso1.md`](../estudo_caso1.md))
**Fase:** 2 — Wireframing e Design System
**Cronograma-fonte:** [`estudo_caso1.md`](../estudo_caso1.md) · **Matriz UML:** [`diagramasUML.md`](../diagramasUML.md) · **Template de domínio:** [`template_modelo_dominio.md`](../template_modelo_dominio.md)
**Iterações anteriores:** [`semana-01/`](../semana-01/README.md) · [`semana-02/`](../semana-02/README.md) · [`semana-03/`](../semana-03/README.md) · [`semana-04/`](../semana-04/README.md) · [`semana-05/`](../semana-05/README.md) · [`semana-06/`](../semana-06/README.md)

---

## Atividades da Equipe

| Equipe | Atividade prevista no cronograma | Requisito | Situação | Onde está |
|:---|:---|:---|:---:|:---|
| **AR1 / AR2** | Especificação Swagger/OpenAPI para os endpoints RESTful | RNF-08 | Rascunho entregue · validação estrutural executada · revisão da equipe pendente | [Entregável 1](entregavel-01-openapi-integracoes-erp.yaml) |
| **AR1 / AR2** | Documentação das integrações com ERP | RNF-08, REQ-01 | Documentada na especificação · **integração não implementada** | Entregável 1 (`/erp/*`) e SEQ-05 no Entregável 3 |
| **D1 / D2** | Finalização dos botões da interface | RNF-09 | Protótipo funcional · testado em DOM · sem teste em navegador real | [Entregável 2](entregavel-02-biblioteca-componentes-ui.md), Seções 4 |
| **D1 / D2** | Badges de status: Divergente, Ocioso, Pendente | RNF-09 | Protótipo funcional · nomes alinhados à DEC-49 (ver DEC-72) | Entregável 2, Seção 5 |
| **D1 / D2** | Layouts do dashboard, tabelas responsivas e gráficos de desperdício | RNF-09, RNF-06 | Protótipo funcional · responsividade verificada só por regras CSS e DOM | Entregável 2, Seções 6 e 7 |
| **D1 / D2** | Tempo de carregamento < 2 s | RNF-06 | **Meta definida · medição pendente de evidência** | Entregável 2, Seção 9 |
| **AR1 / AR2** | Diagramas UML conforme `diagramasUML.md` | — | Rascunho v0.1 entregue · revisão pendente | [Entregável 3](entregavel-03-diagramas-uml.md) |

---

## Entregáveis

| # | Entregável | Documento | Resp. | Requisitos |
|:--|:---|:---|:---|:---|
| 1 | Especificação OpenAPI/Swagger RESTful para Integrações de ERP | [entregavel-01-openapi-integracoes-erp.yaml](entregavel-01-openapi-integracoes-erp.yaml) | AR1 / AR2 | RNF-08, REQ-01 |
| 2 | Biblioteca de Componentes UI de Tabelas Responsivas e Gráficos de Desperdício | [entregavel-02-biblioteca-componentes-ui.md](entregavel-02-biblioteca-componentes-ui.md) + [`ui-components/`](ui-components/) | D1 / D2 | RNF-09, RNF-06 |
| 3 | Diagramas UML conforme `diagramasUML.md` | [entregavel-03-diagramas-uml.md](entregavel-03-diagramas-uml.md) | AR1 / AR2 | REQ-01, RN05, LGPD-01 |

### O que cada entregável contém

1. **OpenAPI 3.1:** 13 operações em 9 caminhos, 30 *schemas*, 8 respostas de erro padronizadas. Cobre catálogo de conectores (TOTVS Protheus, SAP Business One, Omie, Conta Azul), ciclo de vida da conexão, validação imediata, sincronização assíncrona (202) com progresso parcial, e leitura de documentos fiscais e centros de custo importados. Credenciais são só de escrita e nunca retornam.
2. **Biblioteca UI:** dashboard em HTML/CSS/JS puros, sem dependências (≈ 31 KB no total), com botões, três badges, tabela com prioridade de coluna, filtros, ordenação, exportação CSV da visão filtrada, gráfico de desperdício e estados de carregamento, vazio e erro.
3. **UML:** Diagrama de Pacotes (contextos delimitados), recorte do Diagrama de Classes de Domínio e Diagrama de Sequência SEQ-05 da integração ERP. Diagrama de Implantação **não incluído** (Semana 11; faltam dados de infraestrutura).

---

## Achados da Iteração

> ### Os nomes dos badges do cronograma divergem dos estados oficiais.
> O cronograma pede **Divergente / Ocioso / Pendente**. A DEC-49 (Semana 06) define que o rótulo é igual ao nome do estado na máquina: **Divergente / Ociosa / Pendente de revisão**. Adotamos a DEC-49 e registramos os nomes do cronograma como apelidos (**DEC-72**, a ratificar).

> ### O escopo do Entregável 1 é "integrações de ERP", não toda a API do produto.
> O RNF-08 fala em "APIs do sistema". O cronograma restringe o Entregável 1 às integrações de ERP. A especificação cobre apenas `/erp/*`; os demais módulos (alertas, aprovações, exportações) ficam para a especificação consolidada do handoff (Semana 14). Registrado como **DEC-66**.

E dois achados de consistência:

> Os arquivos `semana-06/entregavel-0X-*.md` e as semanas 01 a 05 **não estavam acessíveis** durante a preparação (repositório privado). Entidades, estados e decisões foram extraídos de `definicoes.md`, `estudo_caso1.md` e do README da Semana 06. Tudo que depende dos entregáveis da Semana 06 está marcado como **a conferir** (**P-30**).

> O README da Semana 06 trata a DEC-54 (k = 5 com generalização de setor em visões por linha) como regra de anonimização. A tabela desta semana a aplica de forma **ilustrativa**, e a busca não vaza o setor generalizado. A implementação oficial depende do Entregável 2 da Semana 06.

---

## Números da Iteração

| Indicador | Valor |
|:---|:---|
| Operações na API | 13 (9 caminhos) |
| *Schemas* reutilizáveis | 30 |
| Respostas de erro padronizadas (`problem+json`) | 8 |
| Conectores de ERP cobertos | 4 (FT-05, FT-06, FT-07) |
| Verificações automatizadas da API | 145 aprovadas, 0 falhas |
| Testes automatizados da UI | 55 aprovados, 0 falhas |
| Blocos Mermaid verificados | 3 de 3 sem erro de sintaxe |
| Peso da biblioteca UI | 31.132 bytes (≈ 11 KB com gzip) |
| Dependências de execução da UI | 0 |

Esses números são resultados reais dos testes descritos na Seção "Observações sobre testes e evidências". **Não** provam atendimento do RNF-06, do RNF-09 nem funcionamento de integração com ERP.

---

## Decisões de Projeto Propostas nesta Iteração (a ratificar pela equipe)

A numeração continua a da Semana 06 (última: DEC-65). Todas estão como **Proposta**, porque nenhum documento do projeto as define.

| ID | Decisão proposta | Impacto |
|:---|:---|:---|
| DEC-66 | A API da Semana 07 cobre apenas as integrações de ERP (`/erp/*`) | Delimita o Entregável 1 |
| DEC-67 | Credenciais são só de escrita (`writeOnly`) e nunca retornam em respostas | Coerência com CTL-03 e RSK-03 |
| DEC-68 | Erros no formato RFC 9457 (`application/problem+json`) com `traceId` | Rastreabilidade (IN-01) |
| DEC-69 | Paginação por cursor (`limit` 1–200, padrão 50) | Volume de até 50.000 transações/min (RNF-05) |
| DEC-70 | Valores monetários como texto decimal com moeda ISO 4217 | Evita erro de ponto flutuante |
| DEC-71 | Sincronização assíncrona (`202`), janela máxima de 90 dias, modo `historical` à parte | Coerência com DEC-41 e CA-03 |
| DEC-72 | Rótulos dos badges seguem a DEC-49: `Ociosa` e `Pendente de revisão` | Resolve a divergência com o cronograma |
| DEC-73 | Gráfico em HTML/CSS sem biblioteca; UI sem dependências | Favorece o RNF-06 |
| DEC-74 | Tabela com prioridade de coluna, detalhe sob o item em < 1024 px e rolagem horizontal | Atende RNF-09 em tablet (DEC-52) |
| DEC-75 | Autenticação Bearer/JWT com papel e tenant nas claims; papéis em `x-papeis` | Base para escopos (a conferir com a matriz de visibilidade) |

---

## Estrutura dos Arquivos da Pasta `semana-07`

```
semana-07/
├── README.md
├── entregavel-01-openapi-integracoes-erp.yaml
├── entregavel-02-biblioteca-componentes-ui.md
├── entregavel-03-diagramas-uml.md
├── ui-components/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── tests/
    ├── package.json
    ├── regras.test.js
    ├── dom.test.js
    ├── contraste.test.js
    ├── tamanho.test.js
    ├── validar_openapi.py
    ├── validar_mermaid.mjs
    └── verificar_links.py
```

---

## Como Abrir e Validar a Especificação OpenAPI

**Opção 1 — Swagger Editor (sem instalar nada):**
1. Acesse <https://editor.swagger.io>.
2. *File → Import file* e selecione `entregavel-01-openapi-integracoes-erp.yaml` (ou cole o conteúdo).
3. A coluna da direita mostra a documentação; erros aparecem em vermelho na esquerda. Use *Try it out* apenas para inspecionar: o servidor é um marcador (`api.example.invalid`) e **não responde**.

**Opção 2 — validação local:**
```
pip install pyyaml openapi-spec-validator jsonschema
python3 semana-07/tests/validar_openapi.py
```
O script verifica YAML, estrutura OpenAPI 3.1, `$ref`, `operationId` únicos, respostas de erro, ausência de segredos, validade dos exemplos contra os *schemas* e rejeição de 6 payloads inválidos.

## Como Abrir e Testar o Dashboard

1. Abra `semana-07/ui-components/index.html` no navegador (duplo clique). Não requer servidor.
2. Experimente filtros, ordenação, **Atualizar dados**, **Exportar CSV**, **Limpar filtros** e o simulador de estados.
3. Reduza a janela para ≈ 800 px para ver a prioridade de coluna.
4. Testes automatizados: `cd semana-07/tests && npm install && npm test`.
5. Medição de carregamento: procedimento no Entregável 2, Seção 9.

## Como Visualizar os Diagramas UML

- No GitHub, abra `entregavel-03-diagramas-uml.md`: os blocos Mermaid são renderizados.
- Para editar ou exportar imagem, cole o bloco em <https://mermaid.live>.
- Verificação de sintaxe local: `cd semana-07/tests && npm install && npm run test:mermaid`.

---

## Critérios de Verificação

| Critério | Como verificar | Situação |
|:---|:---|:---:|
| YAML e estrutura OpenAPI 3.1 válidos | `validar_openapi.py` | Verificado (ambiente de preparação) |
| Referências, exemplos e erros coerentes | `validar_openapi.py` | Verificado |
| Nenhum segredo ou dado pessoal nas respostas | `validar_openapi.py` (schemas) | Verificado em nível de *schema* |
| Badges Divergente, Ociosa, Pendente de revisão com ícone, texto e descrição | `dom.test.js` | Verificado em DOM |
| Regras RN05.1, RN05.2, RN05.6, RN02.1 nos componentes | `regras.test.js` | Verificado |
| Filtros, ordenação, botões e estados | `dom.test.js` | Verificado em DOM |
| Contraste de texto ≥ 4,5:1 e não textual ≥ 3:1 | `contraste.test.js` | Verificado sobre os hex do código |
| Sem dependências externas | `tamanho.test.js` | Verificado |
| Sintaxe dos diagramas | `validar_mermaid.mjs` | Verificado |
| Links relativos deste README | `verificar_links.py` | Verificado |
| Tempo de carregamento < 2 s (RNF-06) | Lighthouse (Entregável 2, Seção 9) | **Pendente de evidência** |
| Responsividade visual em tablet (RNF-09) | Navegador e dispositivo reais | **Pendente de evidência** |
| Leitor de tela e teclado em navegador real | NVDA, VoiceOver | **Pendente de evidência** (P-27) |
| Fidelidade dos diagramas ao modelo de domínio | Revisão da equipe | **Pendente** |

## Checklist de Conclusão

- [x] Arquivos da estrutura da Semana 07 criados, sem arquivos vazios
- [x] OpenAPI validado estruturalmente
- [x] Diagramas Mermaid com sintaxe válida
- [x] Testes automatizados executados (55 + 145 + 3)
- [ ] Revisão de AR1 / AR2 sobre a API e os diagramas
- [ ] Revisão de D1 / D2 sobre os tokens (conferir hex com o Figma)
- [ ] Ratificação das decisões DEC-66 a DEC-75
- [ ] Medição do RNF-06 em navegador real
- [ ] Conferência com os entregáveis da Semana 06 (P-30)
- [ ] Comparação mantido/atualizado/complementado do Entregável 3 (Seção 7)

---

## Pendências Anteriores Impactadas

| ID | Item | Efeito desta iteração |
|:---|:---|:---|
| P-15 | Densidade da tabela com 4.000+ linhas | **Segue aberta.** A tabela demonstrativa tem 9 linhas; sem paginação |
| P-25 | M-04 × teto da RN01 e preço do Figma (R$ 72,00 × R$ 86,00) | **Segue aberta.** Usamos R$ 86,00 apenas como valor demonstrativo |
| P-27 | Leitor de tela real e tablet físico | **Segue aberta** |
| P-29 | Reflow < 768 px não atendido (DEC-07) | **Respeitada**: a tabela só rola na horizontal nessa faixa |
| P-03 e P-04 | Isolamento multi-tenant (CTL-10) e transferência internacional (CTL-14), previstas para a Semana 7 | **Não tratadas nesta entrega.** A API aplica o isolamento por *tenant* na claim do token, mas não há plano de teste. Precisam de decisão da equipe |

## Pendências Abertas Nesta Iteração

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-30 | Reconciliar entidades, estados e nomes com os entregáveis da Semana 06 (classes v0.1, máquinas, DEC-46, ENT-01 a ENT-24) | Antes da revisão |
| P-31 | Conferir hex dos tokens com o Figma | D1 / D2 |
| P-32 | Medir RNF-06 e validar RNF-09 em navegador e tablet reais | Semana 8 |
| P-33 | Alinhar `x-papeis` com a matriz de visibilidade (Entregável 2 da Semana 06, Seção 15) | AR1 / AR2 |
| P-34 | Definir contato da API e endereços dos ambientes (não constam nos documentos) | Equipe |
| P-35 | Definir o formato final do pseudônimo na UI (prefixo único, DEC-53) | D1 / D2 + AR2 |
| P-36 | Decidir se o escopo da API inclui os demais módulos antes do handoff | Semana 14 |

## Limitações Conhecidas

- A integração com ERP **não está implementada**. Existe somente a especificação.
- Nenhum teste foi executado contra TOTVS Protheus, SAP Business One, Omie ou Conta Azul. Os campos de credencial do SAP e do Omie são propostas.
- Nenhum dado do dashboard é real.
- O servidor do OpenAPI é um marcador reservado.

## Observações sobre Testes e Evidências

Executados no ambiente de preparação (Node 22, Python 3.12, **sem navegador gráfico**):

| Teste | Resultado real |
|:---|:---|
| `npm test` (regras, DOM com jsdom, contraste, tamanho) | 55 testes, 55 aprovados |
| `python3 validar_openapi.py` | 145 verificações, 0 falhas |
| `npm run test:mermaid` | 3 blocos, 0 erros |
| `python3 verificar_links.py` | Todos os links relativos deste README existem |

**Não executados:** medição de tempo de carregamento, teste visual responsivo, teste com leitor de tela, teste em tablet físico, teste de integração com ERP.

---

## Entradas para a Semana 08 (UI Hi-Fi — Bloco A)

- **Componentes e badges** → base para as telas Hi-Fi de ingestão de NFs, categorização por IA e desperdício (D1).
- **Especificação OpenAPI** → insumo para a matriz de rastreabilidade do Bloco A (REQ-01 a REQ-05) (AR1).
- **P-25** → corrigir M-04 e o preço de exemplo no Hi-Fi.
- **P-30 a P-33** → resolver antes de consolidar o handoff.
