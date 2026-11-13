# Entregável 2 — Vídeos Gravados e Registros das Sessões com Usuários da Área Financeira

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 12 (26/10/2026 – 01/11/2026) — Execução dos Testes de Usabilidade  
**Responsável:** AR1 / AR2 (Facilitadores), com D1 / D2 (Observadores)  
**Situação:** ⏳ **Pendente de execução** — protocolo, texto de consentimento e fichas prontos; nenhuma sessão gravada  
**Prazo:** 01/11/2026  

---

## 1. Objetivo e situação

Reunir os vídeos das sessões e o registro de cada uma. Este entregável só se completa **depois**
das sessões: vídeo, ficha preenchida e resposta do participante não podem ser escritos antes
de existirem. O que esta versão entrega é tudo o que a equipe precisa para gravar e registrar
com segurança, sem improviso.

| Item | Situação nesta versão |
|:---|:---|
| Protocolo de condução (facilitadores) e de observação (observadores) | ✅ Pronto (Seções 4 a 6) |
| Texto de abertura e consentimento de gravação | ✅ Rascunho pronto · **a validar** (P-55) |
| Convenção de nomes, armazenamento e acesso aos vídeos | ✅ Proposta pronta (Seção 7) |
| Modelo de ficha de sessão | ✅ Pronto — [`sessoes/_modelo-ficha-sessao.md`](sessoes/_modelo-ficha-sessao.md) |
| Vídeos gravados | ⏳ **0 de n** — `n` ainda não definido (P-54) |
| Fichas de sessão preenchidas | ⏳ **0 de n** |
| Índice de sessões | Aba `Participantes` do [Entregável 1](entregavel-01-planilha-coleta-dados-brutos-usabilidade.xlsx) |

> **Base usada, nada inventado.** O roteiro vem do [plano da Semana 11](../semana-11/entregavel-02-plano-testes-usabilidade.md)
> (tarefas T1 a T8, critérios e métricas) e do roteiro prático do [`estudo_caso1.md`](../estudo_caso1.md),
> Seção 4 (duração, consentimento verbal, formulário SUS). Onde as duas fontes divergem, a
> divergência está registrada na Seção 4 e nas pendências, e não foi resolvida por suposição.

---

## 2. Papéis na sessão

| Papel | Quem | O que faz | O que não faz |
|:---|:---|:---|:---|
| **Facilitador** | AR1 ou AR2 | Conduz a abertura, lê o enunciado de cada tarefa, aplica o SUS e a entrevista | Não ensina o caminho, não aponta botões, não lê o `CT-xx` / `UF-xx` |
| **Observador** | D1 ou D2 | Opera a gravação, anota horários, intervenções, erros e problemas de UX | Não conversa com o participante durante as tarefas |
| **Participante** | Persona P-01, P-02 ou P-03 | Executa as tarefas de sua persona | — |

Cada sessão tem **um facilitador e um observador**. A identificação de quem fez o quê vai na
ficha da sessão e na aba `Participantes`.

---

## 3. Participantes e tarefas por persona

Conforme o plano da Semana 11, cada participante faz **as tarefas da sua persona**:

| Persona | Papel real recrutado | Tarefas | Telas principais |
|:---|:---|:---|:---|
| P-01 — Gestor Financeiro / CFO | Gestor financeiro | T2, T5, T6, T8 | SCR-02, SCR-05, SCR-06, SCR-08, SCR-10a |
| P-02 — Administrador de TI | Gestor de TI | T1, T3, T4 | SCR-01, SCR-03a/b, SCR-04, SCR-07 |
| P-03 — Gestor de Compras | Gestor de compras | T7 | SCR-09 |

Os enunciados, os critérios de sucesso e de fracasso e a fonte de cada critério estão na aba
`Catalogo` do Entregável 1. **O número de participantes por persona não está definido** nem no
cronograma nem no plano (P-54); a planilha comporta até 15 sessões, o que é capacidade e não meta.

---

## 4. Roteiro da sessão

### 4.1. Etapas

| Etapa | Duração | Conteúdo |
|:---|:---|:---|
| 1. Abertura e consentimento | 5 min | Texto da Seção 5; aceite verbal registrado na gravação |
| 2. Tarefas | 30 min (cronograma) ou 35–40 min (plano) | Tarefas da persona, uma por vez, sem induzir o clique |
| 3. Pós-teste | 10 min | **SUS** (10 itens), a pergunta do `estudo_caso1.md` e a entrevista por tarefa |
| 4. Fechamento | 5 min (plano) | Agradecimento; nenhum dado identificável é divulgado (RNF-02) |

> **Duas divergências entre as fontes, sem resolução por suposição:**
> 1. **Duração.** O `estudo_caso1.md` fixa 45 minutos (5 + 30 + 10); o plano da Semana 11 soma
>    55 a 60 minutos. A ficha de cada sessão registra início e fim, e a decisão fica para a
>    sessão-piloto (P-53).
> 2. **SUS.** O `estudo_caso1.md` manda aplicar o SUS no pós-teste, e a Semana 13 calcula a nota,
>    mas o roteiro do plano da Semana 11 não cita o SUS. Esta entrega o inclui (DEC-91). Os
>    itens ficam na aba `SUS_Bruto`; a nota é calculada na Semana 13.

### 4.2. Perguntas do pós-teste

- **Uma por tarefa** (plano da Semana 11): o que você esperava ver? o que confundiu?
- **Pergunta final** (`estudo_caso1.md`): "Em qual etapa do processo de aprovação ou cancelamento você sentiu menos segurança?" — a resposta vai na coluna aberta da aba `SUS_Bruto`.

### 4.3. Alinhamento com as 5 tarefas do `estudo_caso1.md`

O `estudo_caso1.md` (Seção 4) descreve 5 tarefas; o plano da Semana 11, que é mais recente e
detalhado, descreve 8. Os registros usam **T1 a T8** do plano (DEC-90). A correspondência:

| Tarefa do `estudo_caso1.md` | Requisitos e regras | Corresponde no plano | Observação |
|:---|:---|:---|:---|
| 01 — faturas e inconsistência | REQ-01, REQ-02, RN05 | **T2** (REQ-02); **T1** cobre REQ-01 | |
| 02 — licenças ociosas e downgrade | REQ-03, REQ-04, RN02 | **T3** (REQ-03) e **T4** (REQ-04, REQ-07) | |
| 03 — alertas de renovação | REQ-06, RN03 | **T6** | |
| 04 — solicitação de licença (Design) | REQ-09, RN01, RN04 | **T7** | |
| 05 — dashboard de ROI e exportação | REQ-08, REQ-10, LGPD-01 | **T5** (REQ-08, também REQ-05) e **T8** (REQ-10) | |

Os enunciados lidos ao participante são os do plano (coluna *Tarefa* da aba `Catalogo`). As
"instruções exatas" do `estudo_caso1.md` não são lidas ao pé da letra, para haver uma única
redação; se a equipe preferir a redação do `estudo_caso1.md` nas tarefas 01 a 05, basta ajustar o
`Catalogo`. As 3 linhas de exemplo do `estudo_caso1.md` (USR-01 a USR-03) **ilustram o formato
e não são dados coletados**.

---

## 5. Texto de abertura e consentimento (rascunho a validar — P-55)

O facilitador lê em voz alta **antes** de iniciar a gravação de conteúdo da sessão. O
`estudo_caso1.md` pede aceite verbal; a resposta é gravada, e a aba `Participantes` registra a
forma do consentimento (verbal gravado ou escrito).

> Obrigado por participar. Estamos avaliando um protótipo de um sistema que ajuda empresas a
> controlar gastos com assinaturas de software. O protótipo é clicável, mas não é um produto real
> e nenhum dado dele é verdadeiro. **Estamos avaliando o sistema, não você:** não existe resposta
> certa ou errada, e as dificuldades que você encontrar nos ajudam a melhorá-lo.
>
> Com a sua autorização, vamos gravar a **tela e o áudio** desta sessão, que dura cerca de
> **[duração a confirmar — P-53]**. A gravação será usada apenas pela equipe do projeto, para
> revisar a sessão e conferir as anotações. Seu nome, e-mail e empresa não aparecerão em nenhum
> relatório: você será identificado por um código. A gravação ficará guardada com acesso restrito
> à equipe e será apagada em **[prazo de retenção — a definir, P-55]**.
>
> Você pode interromper a sessão ou retirar a autorização a qualquer momento, sem nenhum
> prejuízo, e pedir a exclusão da gravação pelo contato **[contato do responsável — a definir]**.
>
> **Você autoriza a gravação da tela e do áudio?** *(aguardar o "sim" e registrá-lo)*

**Notas do rascunho:**

- Os trechos entre colchetes são lacunas reais: nenhum documento do projeto define o prazo de
  retenção nem o contato. Não preencha com valor inventado; peça a decisão (P-55).
- **Base legal proposta:** consentimento (LGPD, art. 7º, I). A voz e a tela do participante
  são dados pessoais que **não constam** no inventário `DP-01` a `DP-10`; a validação do texto e
  do enquadramento cabe ao DPO ou ao orientador.
- **Minimização:** o rascunho grava tela e áudio. A imagem do rosto **não** é gravada por padrão;
  se a equipe quiser gravá-la, precisa de consentimento específico.
- Sem o "sim", a sessão pode ocorrer **sem gravação**: o observador anota ao vivo, e a aba
  `Participantes` marca consentimento = Não.

---

## 6. Regras de condução e de observação

### 6.1. Facilitador

1. Leia **só o enunciado** da tarefa. O `CT-xx` / `UF-xx` e os critérios são material privado e
   nunca são lidos ao participante.
2. Não induza o clique: não aponte, não nomeie botões e não diga se o caminho está certo.
3. Não há tempo-limite por tarefa no plano. Se o participante desistir, registre
   *Concluída = Não* e passe à próxima.
4. **T6:** entregue ao participante o e-mail de alerta simulado (RI-20) **antes** de liberar o
   protótipo; sem isso, o critério "entende o alerta sem abrir o sistema" não pode ser avaliado.
5. **Intervenção** é qualquer informação sobre a interface dada pelo facilitador, pedida ou não.
   Reler o enunciado, sem acrescentar nada, não conta (DEC-95).

### 6.2. Observador

1. Inicie o cronômetro da gravação e anote os horários como **timecode do vídeo** (hh:mm:ss),
   para que cada tempo possa ser conferido depois (DEC-94).
2. **Início** da tarefa: o facilitador começa a ler o enunciado. **Fim:** ação final confirmada
   na tela (definição do plano, Seção 5).
3. Por tarefa, registre na aba `Tarefas_Bruto`: concluída, nº de intervenções e nº de erros
   (caminhos não previstos no `CT-xx` / `UF-xx`, um por caminho).
4. Registre cada problema de UX na aba `Problemas_UX`, com o timecode.
5. Nunca anote nome, e-mail, empresa ou cargo identificável (DEC-92).

### 6.3. Severidade dos problemas

O `estudo_caso1.md` usa três níveis (🔴 Alta, 🟡 Média, 🟢 Baixa), ilustrados por três exemplos.
A régua abaixo é uma **proposta deduzida desses exemplos**, a confirmar com a equipe:

| Severidade | Quando usar | Exemplo do `estudo_caso1.md` |
|:---|:---|:---|
| 🔴 Alta | Leva o participante a uma ação errada ou o impede de concluir | Tentou aprovar a compra sem ver as licenças ociosas disponíveis |
| 🟡 Média | Gera confusão ou atraso, mas a tarefa é concluída | Não entendeu a porcentagem de divergência da nota fiscal |
| 🟢 Baixa | Incômodo de localização, sem efeito na conclusão | Procurou o botão de exportar em outro lugar da página |

---

## 7. Convenção de nomes, armazenamento e acesso

| Tema | Regra proposta |
|:---|:---|
| Nome do arquivo de vídeo | `USR-nn_P-0x_AAAA-MM-DD.mp4` (código, persona e data; formato, não exemplo real) |
| Onde ficam os vídeos | **Fora do repositório**, em armazenamento de acesso restrito à equipe (DEC-93). Ver [`videos/README.md`](videos/README.md) |
| O que fica no repositório | A planilha (nome do arquivo e duração), as fichas de sessão e este protocolo; nada com dado identificável |
| Identificação do participante | Só o código `USR-nn`; a tabela código → pessoa fica fora do repositório e fora da planilha (DEC-92) |
| Prazo de retenção | **A definir** (P-55) |
| Quem acessa | Equipe do projeto; lista de pessoas a definir (P-55) |

---

## 8. Índice de sessões

O índice oficial é a aba `Participantes` do Entregável 1. Esta tabela é o espelho legível e deve
ser atualizada ao fim de cada sessão.

| ID | Persona | Data | Facilitador | Observador | Arquivo de vídeo | Duração | Ficha |
|:---|:---|:---|:---|:---|:---|:---|:---|
| — | — | — | — | — | — | — | *Nenhuma sessão realizada até a data desta versão* |

---

## 9. Ficha de sessão

Uma ficha por sessão, copiada de [`sessoes/_modelo-ficha-sessao.md`](sessoes/_modelo-ficha-sessao.md)
para `sessoes/USR-nn.md`. A ficha guarda o **contexto e o qualitativo** (ocorrências,
observações, citações sem identificação). Os **números** ficam só na planilha, para não haver
duas fontes.

---

## 10. Rastreabilidade

| Fonte | Onde está | Uso aqui |
|:---|:---|:---|
| Plano de testes (T1 a T8, critérios, métricas, roteiro) | [Semana 11, Entregável 2](../semana-11/entregavel-02-plano-testes-usabilidade.md) | Base integral do roteiro |
| Roteiro prático, SUS, consentimento verbal e modelo de registro de problemas | [`estudo_caso1.md`](../estudo_caso1.md), Seção 4 | Duração, SUS, formato da planilha de problemas |
| Personas P-01 a P-03 e critérios de sucesso | [Semana 03, Entregável 3](../semana-03/entregavel-03-personas-corporativas-user-flows-bloco-b.md) | Participantes e critérios |
| Protótipo navegável (32 telas, 10 requisitos) | [Semana 11, Entregável 1](../semana-11/entregavel-01-prototipo-navegavel-unificado.md) | Ponto de partida das tarefas |
| Minimização e pseudonimização (LGPD-01) | Semanas 01 e 06 | Código `USR-nn`, ausência de dado identificável |
| Resultado desta coleta | Semana 13, Entregável 1 | Relatório de usabilidade e nota SUS |

---

## 11. Limitações

- **Nada foi executado.** Não há sessão, vídeo, resposta de SUS nem número coletado nesta versão;
  qualquer valor aqui seria invenção.
- O texto de consentimento é rascunho: faltam prazo de retenção, contato e validação (P-55).
- A régua de severidade (Seção 6.3) é deduzida de três exemplos, e a duração da sessão é
  divergente entre as fontes (P-53).
- A planilha e o protocolo foram testados só com dados fictícios, descartados; ainda não foram
  usados em uma sessão real. A sessão-piloto é o teste de verdade.
