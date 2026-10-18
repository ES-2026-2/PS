# Entregável 2 — Biblioteca de Componentes UI: Tabelas Responsivas e Gráficos de Desperdício

**Iteração:** 7 — Consolidação dos Componentes · **Período:** 21/09/2026 a 27/09/2026
**Responsáveis:** D1 / D2 · **Requisitos:** RNF-09 (Portabilidade) e RNF-06 (Usabilidade)
**Código:** [`ui-components/index.html`](ui-components/index.html) · [`styles.css`](ui-components/styles.css) · [`app.js`](ui-components/app.js)
**Versão:** v0.1 (protótipo funcional, em validação)

---

## 1. Objetivo

Consolidar, em código executável, os componentes especificados no Design System da Semana 06: botões, badges de status, tabela responsiva (CMP-08) e gráfico de desperdício, reunidos em um dashboard demonstrativo. O protótipo abre direto no navegador, sem *backend* e sem instalação.

## 2. Definições oficiais usadas

| Requisito | Texto em `estudo_caso1.md` | Como a biblioteca responde |
|:---|:---|:---|
| **RNF-09 — Portabilidade** | A interface web deve ser totalmente responsiva, funcionando perfeitamente em desktops e tablets | Prioridade de coluna, rolagem horizontal e layout fluido (Seção 6) |
| **RNF-06 — Usabilidade** | O dashboard principal deve carregar em menos de 2 segundos em conexões padrão | Orçamento de recursos e procedimento de medição (Seção 9). **Meta, não resultado.** |

> O cronograma cita RNF-09 também para os "componentes de gráficos e tabelas responsivas" (Semana 06). Esta entrega só sustenta o que a definição oficial diz: responsividade em desktop e tablet.

## 3. Organização dos arquivos

| Arquivo | Função |
|:---|:---|
| `ui-components/index.html` | Estrutura do dashboard e catálogo de espécimes de estados |
| `ui-components/styles.css` | Tokens (variáveis CSS), botões, badges, tabela, gráfico |
| `ui-components/app.js` | Regras RN05/RN02, filtros, ordenação, CSV e renderização. A parte pura é exportada para teste em Node |
| `tests/` | Testes automatizados (Seção 11) |

## 4. Componentes implementados

| Componente | Onde | Função real no protótipo |
|:---|:---|:---|
| Botão **Atualizar dados** (primário) | Cabeçalho | Simula recarga de 700 ms; mostra estado de carregamento |
| Botão **Exportar CSV (visão filtrada)** (secundário) | Cabeçalho | Baixa exatamente as linhas filtradas (ANT-04). Fica desabilitado sem registros, com o motivo visível (DEC-39) |
| Botão **Limpar filtros** | Barra da tabela | Remove filtros e devolve o foco à busca; desabilitado quando não há filtro |
| Botão **Tentar novamente** | Estado de erro | Dispara nova tentativa |
| Cabeçalhos ordenáveis | Tabela | Alternam ordem crescente/decrescente e atualizam `aria-sort` |
| Filtros Estado, Tipo e Buscar | Barra da tabela | Filtram em tempo real; busca ignora acentos |
| Simulador de estado | Barra da tabela | Alterna Normal, Carregando, Vazio e Erro para demonstrar cada estado |
| Indicadores (KPIs) | Topo | Economia realizada vem primeiro (DEC-29) |
| Gráfico de barras | Meio | Desperdício em aberto × economia realizada por categoria |

## 5. Badges de status

| Rótulo exibido | Entidade | Regra | Ícone | Borda | Tom |
|:---|:---|:---|:---|:---|:---|
| **Divergente** | Fatura | \|variação\| > 1,00% (RN05.1, limite exclusivo) | Triângulo | Contínua | Vermelho |
| **Pendente de revisão** | Fatura | Confiança do OCR < 85% ou NF = 0 (RN05.2, RN05.6) | Interrogação | Pontilhada | Azul |
| **Ociosa** | Licença | 30 dias corridos ou mais sem evento qualificado (RN02.1) | Relógio | Tracejada | Âmbar |

**Divergência de nomenclatura (decisão pendente de ratificação, DEC-72).** O cronograma da Semana 07 fala em "Ocioso" e "Pendente". A DEC-49 (Semana 06) define que o rótulo do badge é igual ao nome do estado na máquina, e os estados são `Ociosa` e `Pendente de revisão`. A biblioteca segue a DEC-49. Se a equipe preferir os nomes do cronograma, basta alterar o objeto `ESTADOS` em `app.js`.

**Acessibilidade.** Cada badge combina ícone, texto e estilo de borda, então a cor nunca é o único canal (WCAG 1.4.1, ANT-03). Leitores de tela recebem o rótulo e uma frase de significado (`.sr-only`). Os textos usam tons 800 (DEC-47).
**Escopo.** Só os três estados obrigatórios da Semana 07 estão implementados. Os demais dos 68 badges da Semana 06 não fazem parte desta entrega.

## 6. Tabela responsiva (CMP-08 · RNF-09 · DEC-52)

- **Prioridade de coluna.** Alta: Estado, Item, Valor. Média: Tipo, Setor. Baixa: Detalhe.
- **Abaixo de 1024 px** (tablet), a coluna Detalhe sai e seu conteúdo passa para baixo do nome do item, sem perder informação (RI-07).
- **Rolagem horizontal.** A tabela tem largura mínima de 640 px dentro de uma região rolável, focável por teclado (`role="region"`, `tabindex="0"`).
- **Ordenação padrão por severidade** (DEC-37): Divergente, depois Pendente de revisão, depois Ociosa; empate por maior valor.
- **Estados:** carregando (esqueleto, `aria-busy`), vazio, vazio por filtro e erro (`role="alert"`).
- **Privacidade (LGPD-01).** Licenças aparecem só por pseudônimo `COL-xxxx`. Setores com menos de 5 colaboradores são exibidos como "Outros setores" (aplicação **ilustrativa** da DEC-54, a conferir com o Entregável 2 da Semana 06).
- **Limite conhecido (P-29).** Abaixo de 768 px o reflow (WCAG 1.4.10) não é atendido, conforme a DEC-07 registrada na Semana 06. Nessa faixa a tabela só rola na horizontal.

## 7. Gráfico de desperdício

- **Dados:** desperdício em aberto (potencial) e economia realizada por categoria da taxonomia C-01 a C-12, em R$/mês. Os dois **nunca são somados** (glossário da Semana 06; RB-03).
- **Distinção sem cor:** em aberto = hachurado; realizada = sólido. Os valores aparecem em texto ao lado de cada barra (DEC-50: legenda de valores, sem depender de tooltip por toque).
- **Acessibilidade:** o gráfico é uma lista (`<ul>`) com texto para cada barra; leitores de tela leem "Em aberto: R$ …" e "Realizada: R$ …". Não há SVG a descrever.
- **Responsividade:** barras em percentual da largura; rótulos quebram linha em telas estreitas.
- **Limite de séries:** 2 séries e 5 categorias (ANT-07 limita a 5 séries).
- **Escolha técnica (DEC-73):** HTML/CSS sem biblioteca gráfica. Evita dependência e peso (RNF-06), e o conjunto de dados é pequeno. Se surgirem gráficos temporais (ROI histórico), reavaliar uma biblioteca.

## 8. Dados demonstrativos

Todos os dados são fictícios e declarados em um banner na tela. O preço de R$ 86,00 por licença do Figma foi mantido igual ao inventário (W-06) e ao comparativo (M-07); o conflito com os R$ 72,00 do M-04 segue registrado como P-25 e **não** é corrigido aqui. Os pseudônimos são ilustrativos e não seguem o formato de prefixo único da DEC-53.

## 9. Desempenho — RNF-06

**Meta definida:** dashboard principal carregando em menos de 2 s em conexão padrão.
**Estado:** **não há medição em navegador real**. O ambiente de preparação não tinha navegador. Portanto o RNF-06 **não está comprovado**.

O que é fato verificável (teste `tamanho.test.js`):

| Arquivo | Bytes | Gzip |
|:---|---:|---:|
| `index.html` | 5.984 | 2.178 |
| `styles.css` | 8.342 | 2.663 |
| `app.js` | 16.806 | 6.240 |
| **Total** | **31.132** | **≈ 11.081** |

Decisões que favorecem a meta: zero dependências, zero fontes web, zero imagens, `script defer`, renderização inicial síncrona a partir de dados locais (sem "0" enquanto carrega, ANT-02), única animação é o *spinner* do botão (desligada com `prefers-reduced-motion`).
Essa medição **não representa** o dashboard real: a versão de produção terá dados remotos, e o tempo de rede domina.

**Procedimento reproduzível de medição (a executar pela equipe):**
1. Abra `ui-components/index.html` no Chrome, em janela anônima.
2. DevTools → *Network* → *Throttling* → "Fast 4G" (ou perfil acordado como "conexão padrão") → marque *Disable cache*.
3. Aba *Lighthouse* → categoria *Performance*, modo *Navigation*, dispositivo Desktop e depois Mobile/Tablet. Anote **LCP** e **Load**.
4. Repita 5 vezes e registre a mediana e o pior caso.
5. O rodapé da página mostra também DOMContentLoaded, load e LCP da sessão (valor indicativo).
6. Registre aqui: ambiente, perfil de rede e valores. **Critério de aceite proposto:** mediana de LCP < 2 s no perfil acordado.

| Ambiente | Perfil | LCP (mediana) | Load (mediana) | Resultado |
|:---|:---|:---|:---|:---|
| *(a preencher)* | *(a preencher)* | — | — | Pendente de evidência |

## 10. Como abrir e testar

1. Baixe a pasta `semana-07` e abra `ui-components/index.html` com duplo clique. Funciona offline.
2. Teste com teclado: `Tab` percorre skip link, botões, filtros, simulador, região da tabela e cabeçalhos; `Enter` ordena.
3. Redimensione a janela de 1280 px para 768 px: a coluna Detalhe passa para baixo do item em < 1024 px.
4. Use o simulador para ver Carregando, Vazio e Erro; filtre e exporte o CSV.

## 11. Testes automatizados

```
cd semana-07/tests
npm install
npm test            # regras, DOM, contraste e tamanho
npm run test:mermaid
python3 validar_openapi.py
```

Resultados reais obtidos no ambiente de preparação (Node 22, Python 3.12): **55 testes JS, 55 aprovados**; **145 verificações OpenAPI, 0 falhas**; **3 blocos Mermaid, 0 erros**. O teste de DOM usa jsdom e **não** calcula layout.

## 12. Limitações conhecidas

- Sem teste em navegador real, em tablet físico ou com leitor de tela (NVDA, VoiceOver): P-27 e P-32.
- Comportamento responsivo foi verificado só por regras CSS e estrutura do DOM, não visualmente.
- Valores hex dos tokens seguem a convenção de nomes da Semana 06 (slate, green, amber), mas **não foram conferidos** com o Figma (P-31). Os contrastes foram calculados sobre os valores usados no código.
- Sem tema escuro, sem paginação (P-15 segue para a Semana 10) e sem integração com a API do Entregável 1.
- O gráfico cobre desperdício por categoria; o gráfico de ROI histórico (CMP-10) não está nesta entrega.
