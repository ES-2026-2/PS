# Entregável 1 — Relatório de Avaliação de Usabilidade e Cálculo da Nota SUS

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 13 (02/11/2026 – 08/11/2026) — Ajustes e Tratamento de Fricções de UX  
**Responsável:** AR1 / AR2 (Analistas de Requisitos), com D1 / D2  
**Situação:** ◐ **Parcial** — método de cálculo, protocolo de análise e inspeção documental prontos; **nota SUS e métricas calculadas para a única sessão registrada na Semana 12 (USR-01, simulada)**  
**Prazo:** 08/11/2026  

---

## 1. Objetivo e situação

O cronograma pede o relatório de avaliação de usabilidade e a nota SUS, calculados a partir dos
dados brutos da Semana 12. A [planilha da Semana 12](../semana-12/entregavel-01-planilha-coleta-dados-brutos-usabilidade.xlsx)
tem **uma sessão registrada**: a [USR-01](../semana-12/sessoes/USR-01.md), de 13/11/2026,
simulada entre integrantes da equipe (participante no papel de P-01), seguindo as 5 tarefas
do `estudo_caso1.md`, com vídeo, tempos por tarefa e SUS completo.

> **Nenhum número de usuário foi inventado.** Os resultados da Seção 7 vêm só da USR-01. Com
> um único participante, e da própria equipe, eles **não** representam os usuários-alvo: servem
> como sessão-piloto e para conferir o método. O exemplo da Seção 3.3 continua sendo apenas uma
> conta aritmética para conferir a fórmula.

| O que o cronograma pede | Situação | Onde está |
|:---|:---:|:---|
| Método de cálculo da nota SUS | ✅ Pronto | Seção 3 |
| Nota SUS do protótipo | ◐ Calculada para 1 sessão simulada (n = 1) | Seção 7.1 |
| Avaliação de usabilidade por tarefa (sucesso, tempo, erros) | ◐ Calculada para 1 sessão simulada (n = 1) | Seções 4 e 7.2 |
| Catálogo de problemas de UX das sessões | ◐ 1 problema observado | Seção 7.3 |
| Fricções encontráveis **sem** usuário (inspeção dos artefatos) | ✅ Pronto — 9 fricções (`FR-01` a `FR-09`) | Seção 6 |
| Conferência dos 3 exemplos do `estudo_caso1.md` contra o Hi-Fi | ✅ Pronto | Seção 5 |

O que **pode** ser concluído sem usuários está concluído: a regra de cálculo, o protocolo de
leitura dos dados e uma inspeção do protótipo contra o próprio roteiro de teste. A inspeção
(Seção 6) é a parte mais útil desta versão: ela mostra que o protótipo, como está registrado,
**não permitia medir cinco das oito tarefas até o fim**. A correção foi aplicada no Figma pelo
Entregável 2 (`AJ-01` a `AJ-08`).

---

## 2. Fontes

| Fonte | Onde está | Uso aqui |
|:---|:---|:---|
| Planilha de dados brutos (8 abas) | [Semana 12, Entregável 1](../semana-12/entregavel-01-planilha-coleta-dados-brutos-usabilidade.xlsx) | Estrutura das colunas; dados da sessão USR-01 |
| Protocolo de sessão, severidade, DEC-90 a DEC-95 | [Semana 12, Entregável 2](../semana-12/entregavel-02-registros-sessoes-usabilidade.md) | Definições de intervenção, erro e severidade |
| Plano de testes (T1 a T8, métricas) | [Semana 11, Entregável 2](../semana-11/entregavel-02-plano-testes-usabilidade.md) | Tarefas e critérios |
| Registro das ligações do protótipo | [Semana 11, Entregável 1](../semana-11/entregavel-01-prototipo-navegavel-unificado.md), Seções 2 a 6 | Base da inspeção da Seção 6 |
| Capturas do Hi-Fi | [`wireframes/semana-08/`](../wireframes/semana-08/), [`semana-09/`](../wireframes/semana-09/), [`semana-10/`](../wireframes/semana-10/) | Conferência visual das Seções 5 e 6 |
| Roteiro prático e exemplos de problemas | [`estudo_caso1.md`](../estudo_caso1.md), Seção 4 | Formato do registro e os 3 exemplos |
| Massa canônica | [Semana 08, Entregável 1](../semana-08/entregavel-01-matriz-rastreabilidade-bloco-a.md), Seção 10 · [Semana 09, Entregável 1](../semana-09/entregavel-01-matriz-rastreabilidade-bloco-b.md), Seção 10 | Conferência de valores exibidos |

---

## 3. Cálculo da nota SUS

### 3.1. O instrumento

O SUS (*System Usability Scale*, Brooke, 1996) tem 10 afirmações respondidas de 1 (discordo
totalmente) a 5 (concordo totalmente). As ímpares são positivas e as pares são negativas. O
enunciado usado é o da aba `SUS_Bruto` da planilha da Semana 12 (colunas `SUS-01` a `SUS-10`).

### 3.2. Fórmula

Para cada participante com os 10 itens respondidos:

| Passo | Regra |
|:---|:---|
| 1. Itens ímpares (1, 3, 5, 7, 9) | contribuição = resposta − 1 |
| 2. Itens pares (2, 4, 6, 8, 10) | contribuição = 5 − resposta |
| 3. Soma | soma das 10 contribuições (0 a 40) |
| 4. Nota do participante | soma × 2,5 (0 a 100) |

A **nota SUS do protótipo** é a média das notas dos participantes. A nota não é percentual:
uma nota 70 não significa "70% de usabilidade".

**Fórmula para a planilha.** Acrescentar à aba `SUS_Bruto` a coluna `N` (*Nota SUS*), a partir
da linha 2, que usa as colunas `B` a `K` já existentes:

```text
=IF(COUNT(B2:K2)=10; ((B2+D2+F2+H2+J2)-5 + (25-(C2+E2+G2+I2+K2))) * 2,5; "")
```

e, em uma célula de resumo, `=IF(COUNT(N2:N16)=0; ""; AVERAGE(N2:N16))`. Em instalações com
separador de lista em inglês, trocar `;` por `,` e `2,5` por `2.5`. A fórmula devolve vazio
para questionário incompleto, de propósito (Seção 3.4).

### 3.3. Conferência aritmética da fórmula (não é dado de participante)

Para conferir a fórmula, um conjunto de respostas **hipotético**, escolhido só para a conta:
ímpares = 4 e pares = 2.

| | Ímpares | Pares | Soma | Nota |
|:---|:---|:---|:---:|:---:|
| Contribuição por item | 4 − 1 = 3 | 5 − 2 = 3 | | |
| Total | 5 × 3 = 15 | 5 × 3 = 15 | 30 | 30 × 2,5 = **75** |

Limites da escala: todas as respostas favoráveis (ímpares 5, pares 1) dão 100; todas
desfavoráveis dão 0; todas neutras (3) dão 50.

### 3.4. Regras de tratamento (propostas — DEC-96)

| Situação | Regra proposta | Motivo |
|:---|:---|:---|
| Questionário com item em branco | Não entra na média; é contado e relatado à parte | A planilha já marca `Incompleto`; imputar um valor seria criar resposta que a pessoa não deu |
| Participante sem consentimento de gravação | O SUS entra normalmente, se respondido | O SUS não depende do vídeo |
| Sessão interrompida antes do pós-teste | Sem SUS; as tarefas concluídas até a interrupção continuam válidas | Evita descartar medida boa |
| Nota por persona | Só é relatada se houver **3 ou mais** participantes na persona | Com 1 ou 2 pessoas, a nota "da persona" seria a resposta identificável de um indivíduo (DEC-92) |
| Arredondamento | Nota do participante sem arredondar; média com 1 casa decimal | Evita erro acumulado |

### 3.5. Como ler a nota

Referências da literatura, usadas como **régua de leitura e não como critério de aceite**: o
projeto nunca fixou uma nota mínima, e fixá-la depois de ver os dados seria escolher o critério
conhecendo a prova (DEC-97).

| Faixa da nota | Leitura | Referência |
|:---|:---|:---|
| Abaixo de 50 | Não aceitável | Bangor, Kortum e Miller (2008) |
| 50 a 70 | Marginal | idem |
| Acima de 70 | Aceitável | idem |
| 68 | Média observada em estudos de SUS; acima dela, usabilidade percebida melhor que a da mediana dos sistemas avaliados | Sauro (2011) |
| Cerca de 85 | Região associada ao adjetivo "excelente" | Bangor, Kortum e Miller (2009) |

> As faixas vêm de publicações em inglês e devem ser conferidas na fonte antes de entrarem no
> relatório final (P-61). A versão em português dos 10 enunciados também precisa ser confirmada
> pela equipe, como a Semana 12 já registrou.

### 3.6. Limites da nota

- **Amostra pequena.** A planilha comporta 15 sessões e o número de participantes não está
  definido (P-54). Com poucos participantes, a média do SUS é instável: relatar sempre **n**,
  mínimo, máximo e mediana junto com a média, e não comparar personas.
- **O SUS mede percepção, não desempenho.** Uma nota alta com taxa de sucesso baixa indica um
  sistema agradável que as pessoas não conseguem usar. As duas medidas são lidas juntas (Seção 4).
- **Cada participante usa só as telas da sua persona** (P-03 faz uma única tarefa). O SUS de
  cada pessoa avalia a parte do protótipo que ela viu, e não o produto inteiro.
- **Protótipo, não produto.** O SUS foi criado para sistemas em uso. Aplicado a um protótipo do
  Figma, mede a experiência com o protótipo, com as limitações da Seção 6.1.

---

## 4. Protocolo de análise dos dados de sessão

Aplica-se quando a planilha estiver preenchida. As definições operacionais são as da Semana 11
(Seção 5) e da Semana 12 (DEC-94 e DEC-95); aqui só se define **como ler**.

### 4.1. Por tarefa

| Medida | Como calcular | Onde está na planilha | Como relatar |
|:---|:---|:---|:---|
| Taxa de sucesso | sucessos ÷ registros completos | `Metricas`, colunas `F`, `D`, `G` | Sempre como fração (`3 de 5`), além do percentual |
| Tempo na tarefa | só das tarefas **com sucesso** | `Metricas`, colunas `H` a `J` | Mediana, mínimo e máximo; a média só com 5 ou mais registros |
| Erros | caminhos não previstos antes de concluir | `Metricas`, colunas `K` e `L` | Média por registro e total |
| Intervenções | informações dadas pelo facilitador (DEC-95) | `Metricas`, coluna `M` | Total, com a tarefa em que ocorreram |

Duas regras de leitura (DEC-99):

1. **Tempo de tarefa fracassada não entra na média.** O tempo de quem desistiu mede
   persistência, e não eficiência; ele é relatado à parte. A aba `Metricas` calcula o tempo
   médio sobre todas as linhas com início e fim válidos, então o filtro por sucesso precisa
   ser aplicado na leitura.
2. **Tarefas não são comparáveis entre si pelo tempo.** T2 tem duas partes e T6 começa fora do
   sistema. A linha "Geral" da aba `Metricas` já não soma tempos, e o relatório também não
   deve somar.

### 4.2. Por problema de UX

Cada linha da aba `Problemas_UX` recebe uma prioridade, combinando a severidade registrada pelo
observador (Semana 12, Seção 6.3) com a frequência (DEC-98):

| Frequência (participantes afetados ÷ participantes que fizeram a tarefa) | 🔴 Alta | 🟡 Média | 🟢 Baixa |
|:---|:---:|:---:|:---:|
| Mais da metade | **P1** | **P1** | P2 |
| Dois ou mais, até a metade | **P1** | P2 | P3 |
| Um só | P2 | P3 | P3 |

- **P1** — corrigir no protótipo antes do handoff (Entregável 2).
- **P2** — corrigir se couber na iteração; senão, registrar como pendência no dossiê.
- **P3** — registrar para a engenharia, sem alterar o protótipo.

Um problema 🔴 Alta com um único participante é **P2**, e não P1: com amostra pequena, um caso
isolado pode ser da pessoa e não da interface. Ele não é descartado, e a ficha da sessão diz se
o comportamento é plausível para outros usuários.

### 4.3. Hipóteses que as sessões respondem

As pendências abaixo foram abertas em semanas anteriores para serem respondidas pelo teste.
Elas continuam abertas e são a lista de leitura do relatório final:

| Pendência | Pergunta | Onde olhar nos dados |
|:---|:---|:---|
| P-11 · P-56 | As curvas emocionais das jornadas (Semana 02) se confirmam? | Entrevista por tarefa; o plano não coleta emoção por tarefa |
| P-27 · P-57 | O protótipo funciona em tablet físico? | Coluna `Dispositivo usado`; só responde se alguma sessão usar tablet |
| P-52 | Os critérios de T1, T3 e T5, derivados dos cenários, medem o que deveriam? | Taxa de sucesso das três tarefas e as fichas de sessão |
| P-53 | A sessão cabe em 45 minutos? | Coluna `Duração (min)` da aba `Participantes` |
| P-40 | O destinatário de "Notificar" ficou claro? | T2; o Hi-Fi já diz "Notificar Financeiro" (Seção 5) |

---

## 5. Os três exemplos do `estudo_caso1.md` contra o Hi-Fi

O `estudo_caso1.md` (Seção 4) traz três linhas de exemplo na planilha de problemas. A Semana 12
já registrou que elas **ilustram o formato e não são dados** (DEC-90). Ainda assim, cada uma
descreve uma fricção plausível, e vale conferir se o Hi-Fi atual a repete. A conferência foi
feita nas capturas de tela versionadas.

| Exemplo | Fricção descrita | Ajuste sugerido no `estudo_caso1.md` | O que o Hi-Fi mostra hoje | Situação |
|:---|:---|:---|:---|:---:|
| USR-01 · RN05 | Não entendeu a porcentagem de divergência | Mostrar valor da NF e valor da fatura | A SCR-02b exibe *Valor da NF*, *Valor cobrado* (os dois lançamentos somados), *Variação* e a linha *"Como calculamos"* com a conta por extenso ([captura](../wireframes/semana-08/scr-02b-detalhe-divergencia.png)) | Já tratada no desenho |
| USR-02 · RN04 | Tentou aprovar sem ver as licenças ociosas | Destacar o alerta antes do botão de aprovação | A SCR-09 abre com o banner *"BLOQUEADA — licenças ociosas disponíveis em estoque"* acima dos dados, com badge `Bloqueada · RN04`, e o botão aparece como *"Aprovar (desabilitado — RN04 ativa)"* ([captura](../wireframes/semana-09/scr-09a-aprovacao-bloqueada.png)) | Já tratada no desenho |
| USR-03 · LGPD-01 | Procurou o botão de exportar no topo | Mover o CTA de exportação para o cabeçalho | A SCR-08 tem *"Exportar Resumo"* no cabeçalho e a SCR-10a tem *"Exportar PDF \| XLSX"* no cabeçalho ([SCR-08](../wireframes/semana-09/scr-08-dashboard-roi.png) · [SCR-10a](../wireframes/semana-09/scr-10a-exportacao.png)) | Já tratada no desenho |

**Leitura.** "Já tratada no desenho" significa que o ajuste sugerido está na tela, e **não** que
o problema está resolvido para o usuário: só a sessão mostra se o banner é de fato lido antes
do clique. Esses três pontos entram como hipóteses a observar em T2, T7 e T8, e não como
problemas fechados.

---

## 6. Inspeção documental do protótipo contra o roteiro

Feita sem usuários: confronta o roteiro de teste (T1 a T8) com o registro das ligações do
protótipo (Semana 11, Entregável 1) e com as capturas do Hi-Fi. **Não substitui o teste.** Uma
inspeção encontra o que os documentos contradizem; não encontra o que uma pessoa não entende.

> **Limite desta inspeção.** Ela se baseia no que a Semana 11 **registrou** como ligado e nas
> capturas exportadas. O arquivo do Figma não foi aberto nesta iteração; se houver ligação não
> documentada, a FR-01 muda. A conferência no próprio Figma é o primeiro item do Entregável 2.

### 6.1. FR-01 — Cinco tarefas terminam em um botão sem reação registrada

O plano define o **fim da tarefa** como "a ação final confirmada na tela" (Semana 11, Seção 5).
O protótipo tem a navegação global e 9 ligações de aprofundamento (Semana 11, Entregável 1,
Seção 4). Nenhuma delas é a **ação final** das tarefas abaixo:

| Tarefa | Ação final esperada | Ligação registrada | O que acontece na sessão |
|:---|:---|:---|:---|
| T1 | Conectar e ver o resultado (estado e assinaturas mapeadas) | HF-41 → HF-42 (*"Conectar agora"*). HF-42 → SCR-01 **não** é ligada (Semana 11, Seção 6) | O participante chega à varredura em andamento e não vê o resultado que o critério exige |
| T2 | *"Registrar desfecho"* (SCR-02b) e descartar documento (SCR-02c) | Só a chegada às duas telas | O clique final não produz confirmação |
| T3 | Corrigir a categoria e ver a origem "Ajuste manual" | Só SCR-03a → SCR-03b | O critério de sucesso depende de uma mudança de estado que o protótipo não tem |
| T7 | *"Realocar"*, *"Registrar justificativa"* ou *"Rejeitar"* | Só *"Alterar valor"* → SCR-09b | A decisão não produz confirmação |
| T8 | *"Exportar PDF \| XLSX"* e conferir o arquivo anonimizado | Só SCR-05 → SCR-10a | Não há arquivo nem prévia para conferir a anonimização e os filtros |

**T4** fica em observação: SCR-04 → SCR-07 → modal está ligado, mas a confirmação dentro do
modal não consta no registro e precisa ser conferida no Figma. **T5 e T6** são tarefas de
leitura e não dependem de ação final.

**Consequência:** em T1, T2, T3, T7 e T8 o observador não tem um evento de tela para marcar o
fim, o tempo de tarefa fica sem definição, e os critérios de T1, T3 e T8 não podem ser
verificados.

Há dois caminhos, e a escolha é da equipe (P-58):

- **(a) Ligar um estado de confirmação** para cada ação final (aviso de sucesso ou tela de
  resultado). É o que o Entregável 2 propõe (`AJ-01` a `AJ-06`).
- **(b) Redefinir o fim da tarefa** como "o clique no controle final", sem confirmação. Mais
  barato, mas T1, T3 e T8 continuam sem critério verificável.

### 6.2. Demais fricções

| ID | Tarefa · Tela | Fricção | Evidência | Sev. proposta |
|:---|:---|:---|:---|:---:|
| FR-02 | T6 · e-mail | O e-mail de alerta simulado (RI-20) que o facilitador deve entregar **não existe** como artefato: a Semana 05 o marcou como "fora da interface" e "Parcial" | Busca por `RI-20` no repositório: só especificação textual | 🔴 Alta |
| FR-03 | T8 · SCR-10a | A tela exibe *"Período: ago/2026"*; o mês canônico do relatório é **setembro/2026** (R7), e o IC-07 já apontava que agosto é anterior à primeira varredura | [Captura](../wireframes/semana-09/scr-10a-exportacao.png) × S8·E1, Seção 10.6 | 🟡 Média |
| FR-04 | T8 · SCR-10a | O filtro *"Categoria: DevTools"* permanece; a massa canônica define o escopo como Design, DevTools e Comunicação (IC-06) | Idem | 🟢 Baixa |
| FR-05 | T5 · SCR-08 | O card mostra *"7 recomendações não aplicadas · R$ 62.400,00/ano"*; a massa canônica do Bloco A tem 5 recomendações. A Semana 08 pediu que o Hi-Fi declarasse se é outro cenário, e a tela não declara | [Captura](../wireframes/semana-09/scr-08-dashboard-roi.png) × README da Semana 08, "Entradas para a Semana 09" | 🟡 Média |
| FR-06 | T5 · SCR-08 | O critério de T5 pede "o detalhe por categoria" e "o total desperdiçado"; a SCR-08 não tem nenhum dos dois (estão na SCR-05). A tarefa só fecha se o participante passar pelas duas telas, e o enunciado não deixa isso claro | Aba `Catalogo` da planilha, T5 × captura da SCR-08 | 🟡 Média |
| FR-07 | T4 · SCR-04/07 | Nenhuma tela mostra a licença depois da ação (`Em downgrade`, `Em cancelamento`): o participante não tem como confirmar que a decisão surtiu efeito | P-47, aberta desde a Semana 09 | 🟡 Média |
| FR-08 | T7 · SCR-09 | O caminho feliz oposto (*"Aprovar"* habilitado) não tem tela; a sessão só exercita o bloqueio | P-48, aberta desde a Semana 09 | 🟢 Baixa |
| FR-09 | T8 · navegação | A barra lateral marca *"Relatórios"* tanto na SCR-05 quanto na SCR-10a, e o item leva só à SCR-05. Quem procura a exportação pelo menu chega ao relatório, e não à central | Semana 11, Entregável 1, Seções 2 e 3 | 🟢 Baixa |

As severidades são **propostas de inspeção**, pela régua da Semana 12 (Seção 6.3). Elas não
têm frequência, porque nenhum participante as viveu; a prioridade da Seção 4.2 só se aplica
depois das sessões.

### 6.3. O que a inspeção não cobre

Para que a ausência não seja lida como aprovação:

- **Compreensão de texto** (rótulos, mensagens de regra): depende de pessoas.
- **Acessibilidade com leitor de tela e tablet físico** (P-27): depende de equipamento.
- **Tempo de carga** (RNF-06): um protótipo do Figma não mede tempo de carga.
- **Telas não exportadas**: só as capturas versionadas foram conferidas, e nem todas foram
  abertas — a inspeção olhou SCR-02b, SCR-08, SCR-09 e SCR-10a.

---

## 7. Resultados

### 7.1. Nota SUS

| Indicador | Valor |
|:---|:---|
| Questionários completos | **1** (USR-01) |
| Questionários incompletos | 0 |
| Nota SUS do protótipo (média) | **90,0** (n = 1) |
| Mediana · mínimo · máximo | 90,0 · 90,0 · 90,0 |
| Leitura pela régua da Seção 3.5 | Acima de 85, região "excelente" — **com n = 1 e participante da equipe, não generalizável** |

Conta da USR-01 (respostas 5, 2, 5, 1, 5, 2, 3, 1, 5, 1): ímpares (5 + 5 + 5 + 3 + 5) − 5 = 18;
pares 25 − (2 + 1 + 2 + 1 + 1) = 18; soma 36 × 2,5 = **90**. Pela DEC-96, não há nota por
persona (menos de 3 participantes).

### 7.2. Desempenho por tarefa

A sessão seguiu as 5 tarefas do `estudo_caso1.md`, registradas na planilha pela correspondência
da Semana 12 (Entregável 2, Seção 4.3). Tempos em segundos, a partir dos timecodes do vídeo.

| Tarefa | Tarefa do `estudo_caso1.md` | Registros | Taxa de sucesso | Tempo | Erros | Intervenções |
|:---|:---|:---:|:---:|:---:|:---:|:---:|
| T2 | 01 — faturas e inconsistência | 1 | 1 de 1 | 65 s | 0 | 0 |
| T4 | 02 — licenças ociosas e downgrade | 1 | 1 de 1 | 67 s | 1 | 0 |
| T6 | 03 — alertas de renovação | 1 | 1 de 1 | 42 s | 0 | 0 |
| T7 | 04 — solicitação de licença | 1 | 1 de 1 | 46 s | 0 | 0 |
| T8 | 05 — dashboard de ROI e exportação | 1 | 1 de 1 | 57 s | 0 | 0 |
| T1, T3, T5 | — | 0 | *Pendente* | *Pendente* | *Pendente* | *Pendente* |

A sessão inteira durou 10:56, bem abaixo dos 45 minutos do `estudo_caso1.md` (P-53), mas com
5 tarefas, e não as da persona no plano.

### 7.3. Problemas de UX das sessões

| ID | Tarefa | Severidade | Frequência | Prioridade | Ajuste |
|:---|:---|:---|:---|:---|:---|
| PU-01 | T4 | 🟡 Média — atrasou, mas a tarefa foi concluída | 1 de 1 | P3 (caso isolado, DEC-98) | O participante foi primeiro a *Inventário*; o downgrade fica em *Ociosas*. Registrar para observar nas próximas sessões |

### 7.4. O que já se pode afirmar

1. O protótipo cobre os 10 requisitos por navegação (Semana 11), mas **não está pronto para
   medir tarefas**: a FR-01 e a FR-02 impedem a medição de 6 das 8 tarefas como o plano as
   define.
2. Os três ajustes que o `estudo_caso1.md` antecipava já estão no desenho (Seção 5).
3. Duas telas exibem dados que contradizem a massa canônica (FR-03 a FR-05). São correções de
   conteúdo, que não dependem de usuário.
4. A única sessão (simulada, n = 1) concluiu as 5 tarefas sem ajuda e deu SUS 90. Isso confere o
   método, mas **não** permite afirmar a usabilidade percebida pelos usuários-alvo.

---

## 8. Decisões e pendências

### 8.1. Decisões propostas (a ratificar pela equipe)

A numeração continua a da Semana 12 (última: DEC-95).

| ID | Decisão proposta | Situação | Impacto esperado |
|:---|:---|:---:|:---|
| DEC-96 | Questionário SUS incompleto não entra na média e é relatado à parte; nota por persona só com 3 ou mais participantes | Proposta | Evita imputar resposta e expor a resposta de um indivíduo |
| DEC-97 | As faixas da literatura (68 e 50/70) são régua de leitura, e não critério de aceite; o projeto não fixa nota mínima depois de conhecer os dados | Proposta | Impede escolher o critério de acordo com o resultado |
| DEC-98 | Prioridade do problema de UX = severidade × frequência (Seção 4.2); caso isolado de severidade alta é P2 | Proposta | Uma só regra para decidir o que entra no protótipo |
| DEC-99 | Tempo de tarefa só das tarefas com sucesso; tempos de tarefas diferentes nunca são somados | Proposta | Evita média sem significado |

### 8.2. Pendências abertas nesta entrega

| ID | Item | Encaminhamento |
|:---|:---|:---|
| P-58 | Fim da tarefa em T1, T2, T3, T7 e T8: ligar estados de confirmação ou redefinir o fim como o clique final (FR-01) | Equipe decide **antes** da primeira sessão; opção (a) detalhada no Entregável 2 |
| P-59 | O e-mail simulado da T6 (RI-20) não existe (FR-02) | D2 produz a peça a partir do exemplo da SCR-06; AR2 confere valor, data e dias restantes |
| P-60 | Realização das sessões: a Semana 12 executou só a USR-01, simulada pela equipe; o relatório final depende de sessões com os usuários-alvo | Equipe e orientador definem data e número de participantes (com a P-54) |
| P-61 | Conferir, na fonte, as faixas de leitura do SUS (Seção 3.5) e a versão em português dos enunciados | AR1, antes de publicar o relatório final |

---

## 9. Como fechar este relatório

Passos, na ordem, quando houver sessões:

1. Resolver P-58 e P-59 e republicar o protótipo (Entregável 2).
2. Realizar as sessões pelo protocolo da Semana 12 e preencher a planilha.
3. Conferir que a aba `Metricas` não tem alertas.
4. Acrescentar a coluna `Nota SUS` (Seção 3.2) e copiar os resultados para as Seções 7.1 a 7.3.
5. Classificar os problemas pela Seção 4.2 e atualizar o Entregável 2 com os ajustes P1.
6. Responder às hipóteses da Seção 4.3 e trocar a situação deste documento para *Concluído*.

---

## 10. Rastreabilidade deste documento

| Item | Consumido em | Destino |
|:---|:---|:---|
| Seção 3 (método do SUS) | Fechamento deste relatório | Seção 7.1 |
| Seção 6 (`FR-01` a `FR-09`) | Semana 13, Entregável 2 | Ajustes `AJ-01` a `AJ-14` |
| Seção 5 (exemplos do `estudo_caso1.md`) | Sessões | Hipóteses a observar em T2, T7 e T8 |
| Seções 7 e 8 | Semana 14 | Dossiê (situação da validação com usuários) e Termo de Aceite |
