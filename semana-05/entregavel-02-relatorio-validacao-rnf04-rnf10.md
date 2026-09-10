# 🧪 Entregável 2 — Relatório de Validação dos Parâmetros RNF-04 e RNF-10

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 05 (07/09/2026 – 13/09/2026)  
**Responsáveis:** AR1 / AR2  
**Versão:** 1.0.0  
**Parâmetros sob análise:** RNF-04 (varredura inicial < 5 min por conta conectada) · RNF-10 (falsos positivos < 2%)

---

## 1. ⚠️ Natureza deste Documento

> **Não há medição empírica neste relatório, e não poderia haver.** O projeto em curso é de
> **análise de requisitos e design de UI/UX** — não existe sistema implementado nas 14 semanas
> do cronograma. Medir tempo de varredura ou taxa de erro exigiria código em execução sobre
> dados reais de um cliente.

O que este documento entrega, portanto, é a **validação técnica dos parâmetros** enquanto
requisitos: são alcançáveis? sob quais condições de arquitetura? como serão medidos quando
houver implementação? Ele se compõe de quatro partes:

| Parte | Conteúdo | Natureza |
|:---|:---|:---|
| **A** | Desambiguação do enunciado de cada RNF | Análise de requisitos |
| **B** | Modelagem analítica de viabilidade | Projeção sobre premissas declaradas |
| **C** | Protocolo de validação empírica | Método a executar na implementação |
| **D** | Consolidação dos parâmetros pendentes de homologação | Decisão do cliente |

Toda premissa numérica usada na Parte B está marcada como **[P]** e listada na Seção 9. São
estimativas de engenharia, não observações — e o veredito muda se elas mudarem.

---

# PARTE A — Desambiguação dos Enunciados

## 2. 🔍 RNF-04: O Que Exatamente Deve Levar Menos de 5 Minutos?

> *"A varredura inicial de e-mails e faturas não deve levar mais do que 5 minutos por conta conectada."*

O enunciado deixa três pontos em aberto que precisam ser fechados antes de qualquer projeção:

| Ambiguidade | Leituras possíveis | Leitura adotada | Decisão |
|:---|:---|:---|:---|
| **O que é "conta conectada"?** | (a) o cliente corporativo; (b) cada caixa de e-mail ou conexão de ERP | **(b)** — cada conexão individual, como o próprio enunciado sugere | DEC-43 |
| **O que é "varredura inicial"?** | (a) todo o histórico da caixa; (b) uma janela recente | **(b)** — janela de 90 dias, com carga histórica assíncrona depois | DEC-41 |
| **O que precisa estar pronto ao fim?** | (a) faturas já conciliadas; (b) inventário de assinaturas mapeado | **(b)** — inventário mapeado; OCR e conciliação são assíncronos | DEC-42 |

### 2.1. Justificativa da leitura adotada

A leitura (a) de qualquer das três ambiguidades torna o requisito **impossível de cumprir**,
não difícil: varrer 10 anos de histórico de 2.000 caixas e conciliar tudo em 5 minutos não é
uma questão de otimização, é uma questão de física. A leitura adotada preserva a **intenção**
do requisito — o usuário vê valor na primeira sessão (Jornada A, momento de valor) — sem
transformá-lo em ficção.

A leitura também é coerente com o que a especificação BDD já pede em CT-01.1: *"devo
visualizar a quantidade de assinaturas mapeadas"* — o critério de aceite fala de assinaturas
mapeadas, não de faturas conciliadas. E é coerente com a DEC-35 da Semana 04, que já
estabeleceu que a conciliação é sempre assíncrona.

---

## 3. 🔍 RNF-10: O Que Conta Como Falso Positivo?

> *"O índice de falsos positivos na identificação de ferramentas SaaS não deve passar de 2%."*

A definição operacional foi estabelecida na Semana 04 (DEC-36) em quatro tipos. Aqui é
preciso ir além e definir **o denominador**, porque o enunciado fala especificamente em
*"identificação de ferramentas SaaS"*:

| Tipo | Escopo | Denominador | Pertence ao RNF-10 literal? |
|:---|:---|:---|:---:|
| **FP-A** Identificação de fornecedor | E1 do motor | Fornecedores catalogados no período | ✅ Sim |
| **FP-B** Classificação de categoria | E2 do motor | Fornecedores catalogados no período | ✅ Sim |
| **FP-C** Ociosidade | E4 do motor | Licenças avaliadas no período | ⬜ Extensão nossa |
| **FP-D** Recomendação revertida | E5 do motor | Recomendações publicadas no período | ⬜ Extensão nossa |

**Decisão (DEC-45):** o teto de 2% do RNF-10 é medido sobre **FP-A + FP-B**, que é o escopo
literal do enunciado. `FP-C` e `FP-D` recebem tetos próprios, propostos abaixo, por medirem
coisas diferentes sobre denominadores diferentes — somá-los ao índice do RNF-10 seria
somar frações de bases distintas.

| Índice | Composição | Teto proposto |
|:---|:---|:---|
| **RNF-10** (contratual) | FP-A + FP-B | ≤ 2,00% |
| MI-07 (interno) | FP-C | ≤ 1,50% |
| MI-08 (interno) | FP-D | ≤ 5,00% |

---

# PARTE B — Modelagem Analítica de Viabilidade

## 4. ⏱️ RNF-04 — Modelo de Tempo

### 4.1. Orçamento por etapa

Consolidação do orçamento esboçado em SEQ-01 (Semana 04), agora com a etapa de OCR removida
por força da DEC-42:

| # | Etapa | Orçamento | Natureza |
|:--|:---|:---|:---|
| 1 | Handshake OAuth e troca de tokens | 2 s | Rede, dependente do provedor |
| 2 | Cifragem e gravação no cofre | 0,2 s | CPU |
| 3 | Listagem e filtragem de mensagens da janela | **210 s** | Rede, etapa dominante |
| 4 | Extração de metadados de assinatura | 45 s | CPU + rede |
| 5 | Catalogação pelo motor (E0 a E2) | 30 s | CPU |
| 6 | Consolidação e publicação do inventário | 12 s | Banco de dados |
| — | **Total** | **299,2 s ≈ 4 min 59 s** | Margem de 0,8 s sobre o teto |

> A margem de menos de 1 segundo é deliberadamente apertada: ela evidencia que **o requisito
> não tem folga** e que qualquer degradação da etapa 3 o rompe. É esse o achado central da
> análise do RNF-04.

### 4.2. Vazão exigida por perfil de conta

| Perfil de conta conectada | Mensagens na janela de 90 dias **[P1]** | Vazão exigida | Viável em 210 s? |
|:---|:---:|:---:|:---:|
| Caixa compartilhada de faturamento | 3.000 | 14 msg/s | ✅ Confortável |
| Caixa individual de colaborador | 1.500 | 7 msg/s | ✅ Confortável |
| Caixa de diretoria com alto volume | 12.000 | 57 msg/s | 🟡 Exige paralelismo |
| Conexão de ERP (lançamentos, não mensagens) | 8.000 registros | 38 reg/s | ✅ API paginada |
| **Caixa histórica sem janela (leitura descartada)** | 120.000 | 571 msg/s | ❌ Inviável |

A última linha é exatamente o cenário que a DEC-41 elimina. Sem a janela de 90 dias, o
requisito é irrealizável para qualquer conta de volume real.

### 4.3. Gargalo e condições de arquitetura

O gargalo é a **etapa 3**, e ele não é de CPU: é de **cota do provedor**. A vazão real fica
limitada pelo menor entre a capacidade de processamento e o limite de requisições por segundo
imposto por Google Workspace e Microsoft Graph **[P2]**.

| ID | Condição de arquitetura exigida | Consequência se não atendida |
|:---|:---|:---|
| CA-01 | Paginação com no mínimo 8 requisições concorrentes por conta | Contas de alto volume estouram o teto |
| CA-02 | Filtro por consulta no lado do provedor (`has:attachment` e termos de faturamento) | Tráfego desnecessário; violação prática do RNF-07 |
| CA-03 | Janela inicial de 90 dias, com carga histórica assíncrona posterior | Requisito irrealizável (linha 5 da tabela acima) |
| CA-04 | OCR e conciliação fora do caminho crítico da varredura | Orçamento estoura por 1 a 3 minutos |
| CA-05 | Tratamento de `429 Too Many Requests` com espera exponencial | Varredura falha em vez de degradar |
| CA-06 | Progresso parcial publicado durante a varredura | ANT-01 volta a ocorrer, mesmo cumprindo o tempo |

### 4.4. Veredito do RNF-04

> **VIÁVEL, CONDICIONADO.** O teto de 5 minutos é alcançável para todos os perfis de conta
> realistas **desde que** valham as decisões DEC-41, DEC-42 e DEC-43 e sejam implementadas as
> seis condições `CA-01` a `CA-06`. A margem projetada é de menos de 1 segundo, o que
> classifica o requisito como **de alto risco de regressão**: qualquer aumento da janela ou
> inclusão do OCR no caminho crítico o rompe.

---

## 5. 🎯 RNF-10 — Modelo de Erro

### 5.1. Estrutura do modelo

O erro publicado de cada estágio é o erro bruto **reduzido pelas guardas** — os itens de baixa
confiança não chegam a ser publicados, vão para a fila de revisão humana:

```
erro_publicado = Σ (fração_da_população × erro_bruto × (1 − eficácia_da_guarda))
```

### 5.2. FP-A — Identificação de fornecedor (estágio E1)

| Caminho | Fração **[P3]** | Erro bruto **[P4]** | Eficácia da guarda **[P5]** | Erro publicado |
|:---|:---:|:---:|:---:|:---:|
| Match por CNPJ | 70% | 0,10% | — | 0,070% |
| Match por similaridade textual | 30% | 6,00% | 70% | 0,540% |
| **FP-A total** | | | | **0,61%** |

### 5.3. FP-B — Classificação de categoria (estágio E2), com o limiar proposto de 0,70

| Caminho | Fração **[P6]** | Erro bruto **[P7]** | Eficácia da guarda **[P8]** | Erro publicado |
|:---|:---:|:---:|:---:|:---:|
| Base curada de SaaS conhecidos | 75% | 0,50% | — | 0,375% |
| Classificação por modelo | 25% | 12,00% | 60% | 1,200% |
| **FP-B total** | | | | **1,58%** |

### 5.4. Índice agregado do RNF-10

```
RNF-10 = FP-A + FP-B = 0,61% + 1,58% = 2,19%
```

> ### ❌ **Com os limiares propostos na Semana 04, o RNF-10 NÃO é atendido.**
> A projeção fica em **2,19%**, ultrapassando o teto de 2,00% em 0,19 ponto percentual.

Este é o resultado mais relevante da validação. Ele não invalida o requisito — indica que os
parâmetros do motor precisam mudar antes de a implementação começar.

### 5.5. Ajuste corretivo proposto

Duas alavancas, atuando sobre os dois termos dominantes do modelo:

| Alavanca | De | Para | Efeito |
|:---|:---|:---|:---|
| Limiar de publicação de E2 | 0,70 | **0,80** | Eficácia da guarda sobe de 60% para 75% **[P9]** |
| Cobertura da base curada | 75% | **85%** | Reduz a fração exposta ao modelo |

**Recálculo de FP-B:**

| Caminho | Fração | Erro bruto | Eficácia da guarda | Erro publicado |
|:---|:---:|:---:|:---:|:---:|
| Base curada | 85% | 0,50% | — | 0,425% |
| Classificação por modelo | 15% | 12,00% | 75% | 0,450% |
| **FP-B ajustado** | | | | **0,88%** |

```
RNF-10 ajustado = 0,61% + 0,88% = 1,49%   ✅  margem de 0,51 pp sobre o teto
```

### 5.6. Custo do ajuste

Elevar o limiar aumenta a fila de revisão humana. Para uma carteira de 500 fornecedores:

| Cenário | Itens enviados à revisão **[P10]** | Esforço estimado **[P11]** |
|:---|:---:|:---|
| Limiar 0,70 (proposta original) | ~40 itens | ~1 h de trabalho na carga inicial |
| **Limiar 0,80 (proposta ajustada)** | ~75 itens | ~2 h de trabalho na carga inicial |

O custo é de aproximadamente **uma hora adicional de trabalho do Administrador de TI na
carga inicial**, decrescente nos meses seguintes conforme a base curada absorve as correções
(ciclo de calibração, Semana 04, Seção 9.1). É um custo baixo diante do risco de descumprir
um requisito contratual.

### 5.7. Veredito do RNF-10

> **VIÁVEL APENAS COM AJUSTE DE PARÂMETROS.** Com os valores propostos na Semana 04, a
> projeção é de 2,19% e o requisito é descumprido. Com o limiar de E2 elevado a 0,80 e a base
> curada ampliada a 85%, a projeção cai para 1,49%, com margem de 0,51 pp. O ajuste está
> registrado como **DEC-44** e substitui o parâmetro correspondente do Entregável 1 da
> Semana 04.

---

## 6. 📉 Tetos Internos: FP-C e FP-D

| Índice | Modelo | Projeção | Teto proposto | Situação |
|:---|:---|:---:|:---:|:---:|
| **MI-07** (FP-C · ociosidade) | 80% com fonte E1 a 0,3% de erro + 20% com fonte E2 a 5% de erro, guarda de 50% | **0,74%** | 1,50% | ✅ |
| **MI-08** (FP-D · recomendação revertida) | Erro herdado de E1/E2/E4 + piso de publicação + confirmação humana | **~2,1%** **[P12]** | 5,00% | ✅ |

> A guarda mais eficaz de FP-D não é algorítmica: é a **decisão humana obrigatória** antes de
> qualquer execução (DEC-32) somada à janela de arrependimento de 72 h (RN02.9). Uma
> recomendação errada que o usuário recusa não chega a produzir dano.

---

# PARTE C — Protocolo de Validação Empírica

## 7. 🧪 Como Medir Quando Houver Implementação

### 7.1. Conjunto de referência (*golden set*)

| Aspecto | Especificação |
|:---|:---|
| **Composição** | Faturas e fornecedores reais de 3 a 5 clientes-piloto, com consentimento formal |
| **Rotulagem** | Dupla e cega: dois analistas rotulam, um terceiro desempata |
| **Estratificação** | Por categoria (C-01 a C-12), por tamanho de fornecedor e por fonte de telemetria |
| **Congelamento** | Versionado e imutável entre execuções, para permitir comparação |
| **Anonimização** | Aplicada antes da rotulagem — nenhum rotulador vê dado pessoal (LGPD-01) |

### 7.2. Tamanho de amostra

Para estimar uma proporção próxima de 2% com confiança de 95%:

```
n = z² × p × (1 − p) ÷ e²
  z = 1,96   p = 0,02
```

| Margem de erro desejada | Tamanho de amostra | Uso |
|:---|:---:|:---|
| ± 1,0 pp | **753 fornecedores** | Validação de aceite (mínimo) |
| ± 0,5 pp | **3.011 fornecedores** | Monitoramento contínuo em produção |

> Com 753 itens e taxa observada de 1,5%, o intervalo de confiança fica em [0,5%; 2,5%] — ou
> seja, **uma amostra de 753 não distingue com segurança 1,5% de 2,1%**. A validação de aceite
> formal deve, portanto, exigir taxa observada **abaixo de 1,5%**, para que o limite superior
> do intervalo permaneça sob o teto de 2%.

### 7.3. Métricas por estágio

| Estágio | Métrica primária | Métrica secundária | Meta |
|:---|:---|:---|:---|
| E1 Identificação | Precisão | Taxa de fusão indevida | ≥ 99,4% |
| E2 Classificação | Precisão por categoria | Matriz de confusão entre C-01 e C-12 | ≥ 99,1% |
| E4 Ociosidade | Precisão | Taxa de reprovisionamento em 30 dias | ≥ 98,5% |
| E5 Recomendação | Taxa de aceitação | Taxa de reversão em 72 h | ≥ 40% aceitas |

### 7.4. Medição do RNF-04

| Aspecto | Especificação |
|:---|:---|
| **Estatística** | Percentis `p50`, `p95` e `p99` — **nunca a média**, que esconde a cauda longa |
| **Critério de aceite** | `p95 ≤ 300 s` e `p99 ≤ 420 s` |
| **Amostra** | Mínimo de 100 varreduras iniciais por perfil de conta da Seção 4.2 |
| **Ambiente** | Produção ou homologação com cotas reais de provedor — ambiente sintético não reproduz `429` |
| **Decomposição** | Tempo instrumentado por etapa (1 a 6 da Seção 4.1), para localizar regressão |
| **Cenário adversarial** | Conta com 12.000 mensagens na janela e provedor aplicando limitação de taxa |

---

## 8. 🔌 Instrumentação Exigida

Nenhuma das medições acima é possível sem telemetria própria. Requisitos derivados para a
fase de implementação:

| ID | Instrumentação | Serve a |
|:---|:---|:---|
| IN-01 | Cronometragem por etapa da varredura, com `trace_id` por conta | RNF-04 |
| IN-02 | Contador de `429` e de tentativas com espera exponencial | CA-05 |
| IN-03 | Registro de confiança de cada classificação publicada | FP-B |
| IN-04 | Evento de correção manual de categoria, com valor anterior e novo | FP-B, calibração |
| IN-05 | Evento de separação de fornecedores fundidos | FP-A |
| IN-06 | Evento de reprovisionamento em até 30 dias após cancelamento | FP-C |
| IN-07 | Evento de reversão de recomendação na janela de 72 h | FP-D |
| IN-08 | Contador anônimo de mensagens descartadas por ausência de indício | RNF-07, CTL-09 |

> Toda a instrumentação opera sobre dados **agregados e pseudonimizados** (RN02.10). Nenhum
> evento de telemetria carrega identificação de colaborador.

---

# PARTE D — Parâmetros Pendentes de Homologação

## 9. 📋 Premissas do Modelo (a validar empiricamente)

| ID | Premissa | Valor adotado | Impacto se estiver errada |
|:---|:---|:---|:---|
| P1 | Volume de mensagens por conta na janela de 90 dias | 1.500 a 12.000 | Altera a vazão exigida na Seção 4.2 |
| P2 | Limite de requisições por segundo dos provedores de e-mail | A confirmar na documentação vigente | Pode inviabilizar CA-01 |
| P3 | Fração de fornecedores com CNPJ legível | 70% | Desloca erro entre os caminhos de E1 |
| P4 | Erro bruto do match por similaridade | 6% | Efeito direto em FP-A |
| P5 | Eficácia da guarda de similaridade | 70% | Efeito direto em FP-A |
| P6 | Cobertura da base curada de SaaS | 75% (a ampliar para 85%) | Termo dominante de FP-B |
| P7 | Erro bruto da classificação por modelo | 12% | Termo dominante de FP-B |
| P8 | Eficácia da guarda de confiança em 0,70 | 60% | Base do veredito negativo da Seção 5.4 |
| P9 | Eficácia da guarda de confiança em 0,80 | 75% | Base do ajuste corretivo |
| P10 | Itens enviados à revisão por carteira de 500 fornecedores | 40 a 75 | Dimensiona o custo operacional |
| P11 | Esforço de revisão por item | ~1,5 min | Dimensiona o custo operacional |
| P12 | Erro herdado em recomendações | ~2,1% | Efeito em MI-08 |

## 10. 🗂️ Consolidação: 20 Parâmetros Aguardando o Cliente

Reúne as pendências **P-07** (Semana 02), **P-12** (Semana 03) e **P-18** (Semana 04) em uma
única lista de homologação, mais os dois parâmetros novos desta iteração.

| # | Parâmetro | Valor proposto | Regra | Origem |
|:--|:---|:---|:---|:---|
| 1 | Janela de conciliação | `D−5` a `D+15` | RN05.3 | P-07 |
| 2 | Banda cambial (IOF + spread) | 6,38% + 4,00% | RN05.5 | P-07 |
| 3 | Confiança mínima do OCR | 85% | RN05.6 | P-07 |
| 4 | Prazo de notificação de divergência | 15 min | RN05.7 | P-07 |
| 5 | Prazo de "NF ausente" | 30 dias | RN05.3 | P-07 |
| 6 | Amortização de pagamento único | 36 meses | RN01.2 | P-12 |
| 7 | Faixa do 3º nível de alçada | Acima de R$ 5.000,00 | RN01.5 | P-12 |
| 8 | SLA por nível de aprovação | 3 dias úteis | RN01.8 | P-12 |
| 9 | Limiar de revalidação de valor | Aumento acima de 10% | RN01.9 | P-12 |
| 10 | Janela antifatiamento | 30 dias | RN01.1 | P-12 |
| 11 | Janela de arrependimento | 72 horas | RN02.9 | P-12 |
| 12 | Graduação da ociosidade | 30 / 60 / 90 dias | RN02.8 | P-12 |
| 13 | Supressão de agregação | Menos de 5 colaboradores | RN02.10 | P-12 |
| 14 | Limiar de identificação (E1) | Similaridade 0,88 | Motor E1 | P-18 |
| 15 | **Limiar de classificação (E2)** | ~~0,70~~ → **0,80** | Motor E2 | **Revisto nesta iteração (DEC-44)** |
| 16 | Sobreposição mínima para consolidar | 60% de usuários comuns | REC-03 | P-18 |
| 17 | Piso de publicação de recomendação | R$ 1.200,00 / ano | Motor E5 | P-18 |
| 18 | Pesos do score de priorização | 0,50 / 0,30 / 0,20 | Motor E6 | P-18 |
| 19 | **Janela da varredura inicial** | **90 dias** | RNF-04 | **Novo (DEC-41)** |
| 20 | **Cobertura mínima da base curada** | **85%** | Motor E2 | **Novo (DEC-44)** |

---

## 11. ✅ Vereditos e Critérios de Aceite Formais

| Requisito | Veredito | Condições |
|:---|:---|:---|
| **RNF-04** | 🟡 **Viável, condicionado** | DEC-41, DEC-42, DEC-43 + condições CA-01 a CA-06 |
| **RNF-10** | 🔴 **Não atendido com os parâmetros originais** · 🟢 **Atendido com DEC-44** | Limiar de E2 em 0,80 e base curada em 85% |

### 11.1. Critérios de aceite para a fase de implementação

1. `p95` do tempo de varredura inicial ≤ 300 s e `p99` ≤ 420 s, por perfil de conta.
2. Índice RNF-10 (FP-A + FP-B) observado **abaixo de 1,5%** sobre amostra de no mínimo 753 fornecedores rotulados.
3. MI-07 (FP-C) ≤ 1,50% e MI-08 (FP-D) ≤ 5,00%.
4. Nenhuma recomendação publicada sem os 4 campos de explicação (DEC-34).
5. Instrumentação `IN-01` a `IN-08` operante antes do primeiro cliente em produção.
6. Nenhum evento de telemetria contendo identificação de colaborador.

---

## 12. ⚠️ Riscos Registrados

| ID | Risco | Probab. | Impacto | Mitigação |
|:---|:---|:---:|:---:|:---|
| RV-01 | Margem de menos de 1 s no orçamento do RNF-04 | Alta | Alto | Instrumentação por etapa (IN-01) e alerta de regressão em `p95` |
| RV-02 | Cotas de provedor mais restritivas que o previsto (P2) | Média | Alto | Confirmar antes da implementação; CA-05 como degradação controlada |
| RV-03 | Base curada não atingir 85% de cobertura | Média | Alto | Rompe o ajuste da DEC-44 e o RNF-10 volta a ser descumprido |
| RV-04 | Fila de revisão manual maior que o previsto | Média | Médio | Priorizar por custo da assinatura, revisando primeiro o que mais pesa |
| RV-05 | Cliente recusar a janela de 90 dias (DEC-41) | Baixa | 🔴 Crítico | Sem a janela, o RNF-04 é irrealizável — exigiria renegociar o requisito |
| RV-06 | Amostra de 753 não distinguir 1,5% de 2,1% | Alta | Médio | Critério de aceite mais rigoroso (abaixo de 1,5%), conforme Seção 7.2 |

---

## 13. 🔗 Rastreabilidade

| Item | Consumido em | Entregável de destino |
|:---|:---|:---|
| DEC-41 a DEC-43 (escopo da varredura) | Semana 07 e 11 | Diagrama de Componentes e de Implantação |
| DEC-44 (limiar de E2) | Semana 06 | Revisão do motor no Modelo de Domínio |
| Condições CA-01 a CA-06 | Semana 07 | Especificação OpenAPI e arquitetura |
| Instrumentação IN-01 a IN-08 | Semana 14 | Dossiê de handoff para engenharia |
| Seção 10 (20 parâmetros) | Semana 06 | Homologação com o cliente |
| Critérios de aceite (Seção 11.1) | Semana 14 | Termo de aceite técnico |
