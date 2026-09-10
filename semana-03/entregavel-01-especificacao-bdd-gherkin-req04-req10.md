# 🥒 Entregável 1 — Especificação BDD/Gherkin dos Requisitos REQ-04 a REQ-10

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 03 (24/08/2026 – 30/08/2026) — Detalhamento do Bloco B
**Responsável:** AR2 (Analista de Requisitos)
**Versão:** 1.0.0
**Escopo:** REQ-04 a REQ-10 · RN01 · RN02 · RN03 · RN04 · LGPD-01 · LGPD-02

---

## 1. 🎯 Objetivo e Convenções

Concluir a especificação executável dos 10 requisitos funcionais, cobrindo o **Bloco B —
Gestão, Ações e Governança**. Mantêm-se integralmente as convenções fixadas na
[Seção 1.1 do Entregável 1 da Semana 02](../semana-02/entregavel-01-especificacao-bdd-gherkin-req01-req03.md):
Gherkin em `# language: pt`, nomenclatura da Arquitetura de Informação, identificação
`US-xx` / `CT-xx.y` e *tags* de rastreabilidade em toda `Funcionalidade`.

> As regras RN01 e RN02 recebem decomposição formal no
> [Entregável 2 desta iteração](entregavel-02-fluxo-aprovacao-gastos-rn01-trava-inatividade-rn02.md).
> Aqui elas aparecem apenas como critérios de aceite verificáveis.

---

## 2. 📖 US-04 — Identificar Licenças Ociosas e Duplicadas

> **Como** Administrador de TI,
> **quero** que a plataforma aponte quais licenças não são usadas e quais são redundantes
> **para que** eu sanei o parque de software sem interromper o trabalho de ninguém.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-04 · **Caso de uso** UC-04 · **Tela** SCR-04 |
| **Regras** | RN02 (e sub-regras RN02.1 a RN02.10) |
| **RNFs** | RNF-10 (falso positivo < 2%) |
| **Controles** | CTL-05 (pseudonimização), CTL-11 (auditoria) |
| **Persona** | P-02 — Administrador de TI |

```gherkin
# language: pt
@REQ-04 @UC-04 @SCR-04 @BlocoB
Funcionalidade: Identificar licenças ociosas e duplicadas
  Para sanear o parque de software sem prejudicar quem trabalha
  Como Administrador de TI
  Quero visualizar quais licenças não registram atividade

  Contexto:
    Dado que estou autenticado como "Administrador de TI"
    E que existe telemetria de uso disponível para as assinaturas ativas

  @CT-04.1 @fluxo-principal @RN02
  Cenário: Classificar licença sem atividade por 30 dias
    Dado uma Licença cujo último acesso ocorreu há 30 dias corridos
    Quando a apuração diária de ociosidade é executada
    Então a Licença deve assumir o estado "Ociosa"
    E deve ser exibido o número de dias sem atividade
    E deve ser exibida a fonte da evidência de uso

  @CT-04.2 @fronteira @RN02
  Cenário: Preservar licença no limite da regra
    Dado uma Licença cujo último acesso ocorreu há 29 dias corridos
    Quando a apuração diária de ociosidade é executada
    Então a Licença deve permanecer no estado "Ativa"
    E não deve ser oferecida para cancelamento

  @CT-04.3 @RN02
  Cenário: Reiniciar a contagem após novo acesso
    Dado uma Licença no estado "Ociosa" há 45 dias
    Quando é registrado um novo acesso do colaborador
    Então a Licença deve retornar ao estado "Ativa"
    E o contador de dias sem atividade deve ser reiniciado
    E a recomendação de cancelamento deve ser retirada

  @CT-04.4 @RN02 @cobertura
  Cenário: Sinalizar ausência de telemetria em vez de presumir ociosidade
    Dado uma Assinatura de fornecedor que não expõe logs de atividade
    Quando a apuração diária de ociosidade é executada
    Então as Licenças devem assumir o estado "Sem telemetria"
    E não devem ser contabilizadas como ociosas
    E o inventário deve exibir a cobertura de telemetria da assinatura

  @CT-04.5 @excecao @RN02
  Cenário: Excluir colaborador afastado da apuração
    Dado uma Licença de colaborador com afastamento registrado
    Quando a apuração diária de ociosidade é executada
    Então a Licença deve assumir o estado "Suspensa por afastamento"
    E o período de afastamento não deve ser contado como ociosidade

  @CT-04.6 @fluxo-principal
  Cenário: Apontar redundância entre ferramentas equivalentes
    Dado que existem assinaturas ativas de "Canva Pro" e "Adobe Express"
    E que ambas pertencem à categoria "Design"
    Quando eu acesso o painel de licenças ociosas
    Então deve ser exibida uma Recomendação de consolidação
    E a economia estimada deve ser apresentada em reais por mês

  @CT-04.7 @privacidade @LGPD-01 @CTL-05
  Cenário: Exibir licença ociosa sem identificar o colaborador
    Dado uma Licença no estado "Ociosa"
    Quando eu acesso o painel como "Administrador de TI"
    Então o titular deve ser exibido pelo pseudônimo
    E o setor deve ser exibido em texto claro
    E o nome do colaborador não deve ser exibido

  @CT-04.8 @esquema @RN02
  Esquema do Cenário: Classificar a licença conforme a evidência de uso
    Dado uma Licença com último acesso há "<dias>" dias
    E com fonte de evidência "<fonte>"
    Quando a apuração diária de ociosidade é executada
    Então a Licença deve assumir o estado "<estado>"

    Exemplos:
      | dias | fonte              | estado         |
      | 5    | API do fornecedor  | Ativa          |
      | 29   | API do fornecedor  | Ativa          |
      | 30   | API do fornecedor  | Ociosa         |
      | 90   | Login via SSO      | Ociosa         |
      | 30   | Nenhuma            | Sem telemetria |
```

---

## 3. 📖 US-05 — Emitir Relatório Mensal de Desperdício

> **Como** Gestor Financeiro,
> **quero** receber mensalmente um relatório do desperdício apurado com sugestões de planos
> **para que** eu tome decisões de corte com números defensáveis.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-05 · **Caso de uso** UC-05 · **Tela** SCR-05 |
| **RNFs** | RNF-06 (carga < 2 s) |
| **Padrões** | PAT-01 (card acionável), PAT-07 (comparativo lado a lado) |
| **Persona** | P-01 — Gestor Financeiro / CFO |

```gherkin
# language: pt
@REQ-05 @UC-05 @SCR-05 @BlocoB
Funcionalidade: Emitir relatório mensal de desperdício financeiro
  Para decidir cortes com números defensáveis
  Como Gestor Financeiro
  Quero um relatório mensal do desperdício apurado

  @CT-05.1 @fluxo-principal
  Cenário: Gerar o relatório do mês fechado
    Dado que o mês de referência foi encerrado
    Quando o relatório mensal de desperdício é gerado
    Então deve apresentar o total desperdiçado no período
    E deve detalhar o desperdício por categoria de software
    E deve listar as recomendações de consolidação ordenadas por economia

  @CT-05.2 @fluxo-principal @PAT-07
  Cenário: Sugerir plano alternativo com comparação
    Dado uma Assinatura com 5 licenças e 3 delas ociosas
    Quando o relatório é gerado
    Então deve ser sugerido um plano alternativo
    E devem ser exibidos lado a lado o plano atual e o plano sugerido
    E deve ser exibida a economia mensal e anual estimada

  @CT-05.3 @confiabilidade
  Cenário: Separar economia realizada de economia potencial
    Dado que houve cancelamentos executados no período
    E que existem recomendações ainda não aplicadas
    Quando o relatório é gerado
    Então a economia realizada deve ser apresentada separadamente
    E a economia potencial deve ser rotulada como estimativa
    E os dois valores não devem ser somados em um único total

  @CT-05.4 @excecao
  Cenário: Informar cobertura parcial da apuração
    Dado que 20% das assinaturas estão no estado "Sem telemetria"
    Quando o relatório é gerado
    Então deve ser exibido o percentual de cobertura da apuração
    E o total desperdiçado deve ser apresentado como piso, não como valor exato

  @CT-05.5 @desempenho @RNF-06
  Cenário: Carregar o relatório no prazo
    Dado um período com 500 assinaturas e 4.000 licenças
    Quando eu acesso a tela "SCR-05 - Relatório Mensal de Desperdício"
    Então o conteúdo deve ser apresentado em menos de 2 segundos
```

---

## 4. 📖 US-06 — Receber Alertas de Renovação Automática

> **Como** Gestor Financeiro,
> **quero** ser avisado antes de toda renovação automática
> **para que** eu tenha tempo hábil de cancelar ou renegociar antes da cobrança.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-06 · **Caso de uso** UC-06 · **Tela** SCR-06 |
| **Regras** | RN03 (15 dias mensal · 45 dias anual) |
| **Persona** | P-01 — Gestor Financeiro / CFO |

```gherkin
# language: pt
@REQ-06 @UC-06 @SCR-06 @BlocoB
Funcionalidade: Alertar sobre renovação automática de assinaturas
  Para agir antes da cobrança
  Como Gestor Financeiro
  Quero ser avisado com antecedência de toda renovação automática

  @CT-06.1 @fluxo-principal @RN03
  Cenário: Disparar alerta de assinatura mensal
    Dado uma Assinatura mensal com cobrança prevista para "15/09/2026"
    Quando a data corrente atinge "31/08/2026"
    Então um Alerta de renovação deve ser disparado
    E o Gestor Financeiro deve ser notificado
    E o alerta deve exibir valor, data de cobrança e dias restantes

  @CT-06.2 @fluxo-principal @RN03
  Cenário: Disparar alerta de contrato anual
    Dado uma Assinatura anual com cobrança prevista para "15/10/2026"
    Quando a data corrente atinge "31/08/2026"
    Então um Alerta de renovação deve ser disparado
    E a antecedência do alerta deve ser de 45 dias

  @CT-06.3 @fronteira @RN03
  Cenário: Não antecipar o alerta antes do prazo
    Dado uma Assinatura mensal com cobrança prevista para "15/09/2026"
    Quando a data corrente é "29/08/2026"
    Então nenhum Alerta de renovação deve ser disparado

  @CT-06.4 @excecao @RN03
  Cenário: Disparar alerta imediato em assinatura descoberta tardiamente
    Dado uma Assinatura mensal descoberta pela varredura em "10/09/2026"
    E cuja cobrança está prevista para "15/09/2026"
    Quando a assinatura é catalogada
    Então o Alerta de renovação deve ser disparado imediatamente
    E deve ser sinalizado que a antecedência mínima não pôde ser cumprida

  @CT-06.5 @excecao
  Cenário: Escalar alerta de assinatura sem responsável
    Dado uma Assinatura cujo responsável foi desligado da empresa
    Quando o Alerta de renovação é disparado
    Então a assinatura deve ser marcada como "Sem responsável"
    E o alerta deve ser encaminhado ao gestor do centro de custo e ao Administrador de TI

  @CT-06.6 @integracao @RN02 @RN03
  Cenário: Destacar renovação de assinatura com licenças ociosas
    Dado uma Assinatura anual com 8 de 10 licenças no estado "Ociosa"
    Quando o Alerta de renovação é disparado
    Então o alerta deve destacar a quantidade de licenças ociosas
    E deve oferecer a ação de downgrade antes da renovação

  @CT-06.7 @esquema @RN03
  Esquema do Cenário: Definir a antecedência conforme o ciclo
    Dado uma Assinatura com ciclo "<ciclo>"
    Quando o alerta de renovação é agendado
    Então a antecedência deve ser de "<dias>" dias corridos

    Exemplos:
      | ciclo    | dias |
      | Mensal   | 15   |
      | Trimestral | 15 |
      | Anual    | 45   |
      | Bienal   | 45   |
```

---

## 5. 📖 US-07 — Aprovar Cancelamento ou Downgrade

> **Como** Administrador de TI,
> **quero** executar o cancelamento ou o downgrade direto pela interface
> **para que** a decisão saia do papel sem depender de chamados manuais.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-07 · **Caso de uso** UC-07 · **Tela** SCR-07 |
| **Regras** | RN02 (elegibilidade) · RN01 (alçada de aprovação) |
| **Controles** | CTL-11 (auditoria), CTL-12 (2FA) |
| **Padrão** | PAT-10 (confirmação por digitação) · **Antipadrão evitado:** ANT-02 |

```gherkin
# language: pt
@REQ-07 @UC-07 @SCR-07 @BlocoB
Funcionalidade: Aprovar cancelamento ou downgrade de assinatura
  Para transformar diagnóstico em economia efetiva
  Como Administrador de TI
  Quero executar a ação diretamente pela plataforma

  Contexto:
    Dado que estou autenticado como "Administrador de TI"
    E que concluí a verificação em duas etapas

  @CT-07.1 @fluxo-principal @RN02
  Cenário: Executar downgrade de assinatura com licenças ociosas
    Dado uma Assinatura com 10 licenças, sendo 4 no estado "Ociosa"
    Quando eu solicito o downgrade para 6 licenças
    E confirmo digitando o nome da assinatura
    Então a Assinatura deve assumir o estado "Em Downgrade"
    E a economia mensal estimada deve ser exibida
    E a ação deve ser registrada na trilha de auditoria

  @CT-07.2 @seguranca @ANT-02
  Cenário: Impedir ação destrutiva sem confirmação explícita
    Dado uma Assinatura no estado "Ativa"
    Quando eu clico em "Cancelar assinatura"
    Então deve ser exibido um modal de confirmação
    E a ação só deve ser executada após eu digitar o nome da assinatura
    E deve ser exibido o impacto sobre os colaboradores afetados

  @CT-07.3 @RN01
  Cenário: Exigir alçada superior para cancelamento de alto valor
    Dado uma Assinatura com custo mensal de "R$ 1.200,00"
    Quando eu solicito o cancelamento
    Então a ação deve ficar pendente de aprovação do "Gestor Financeiro"
    E a Assinatura deve permanecer no estado atual até a aprovação

  @CT-07.4 @arrependimento
  Cenário: Permitir reversão dentro da janela de arrependimento
    Dado uma Assinatura no estado "Em Downgrade" há 12 horas
    Quando eu solicito a reversão da ação
    Então a Assinatura deve retornar ao estado anterior
    E nenhuma solicitação deve ter sido enviada ao fornecedor
    E a reversão deve ser registrada na trilha de auditoria

  @CT-07.5 @excecao
  Cenário: Tratar recusa do fornecedor
    Dado uma Assinatura no estado "Em Downgrade" com janela encerrada
    Quando o fornecedor recusa a alteração do plano
    Então a Assinatura deve retornar ao estado "Ativa"
    E o Administrador de TI deve ser notificado com o motivo
    E deve ser oferecida a ação de abrir chamado manual

  @CT-07.6 @excecao @RN02
  Cenário: Bloquear cancelamento de licença que voltou a ser usada
    Dado uma Licença que constava como "Ociosa"
    Quando é registrado um acesso antes da execução do cancelamento
    Então o cancelamento daquela licença deve ser bloqueado
    E devo ser avisado de que a licença voltou a registrar atividade
```

---

## 6. 📖 US-08 — Consultar Dashboard de ROI Histórico

> **Como** CFO,
> **quero** ver o retorno acumulado gerado pela plataforma
> **para que** eu justifique a manutenção da própria ferramenta.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-08 · **Caso de uso** UC-08 · **Tela** SCR-08 |
| **RNFs** | RNF-06 (carga < 2 s) |
| **Persona** | P-01 — Gestor Financeiro / CFO |
| **Antipadrões evitados** | ANT-01 (dashboard zerado), ANT-05 (excesso de séries) |

```gherkin
# language: pt
@REQ-08 @UC-08 @SCR-08 @BlocoB
Funcionalidade: Consultar dashboard financeiro de ROI histórico
  Para justificar a manutenção da plataforma
  Como CFO
  Quero visualizar o retorno acumulado ao longo do tempo

  @CT-08.1 @fluxo-principal
  Cenário: Apresentar o ROI acumulado
    Dado que existem 6 meses de histórico apurado
    Quando eu acesso o dashboard de ROI
    Então deve ser exibida a economia realizada acumulada
    E deve ser exibido o custo da plataforma no mesmo período
    E deve ser exibido o ROI resultante

  @CT-08.2 @confiabilidade
  Cenário: Distinguir economia realizada de projetada
    Dado que existem recomendações não aplicadas no período
    Quando eu acesso o dashboard de ROI
    Então a economia realizada e a projetada devem ocupar áreas visualmente distintas
    E a economia projetada deve exibir rótulo "Estimativa"
    E o indicador principal deve considerar apenas a economia realizada

  @CT-08.3 @onboarding @ANT-01
  Cenário: Tratar cliente sem histórico suficiente
    Dado um cliente cuja primeira varredura ocorreu há 3 dias
    Quando eu acesso o dashboard de ROI
    Então não deve ser exibido um gráfico com valores zerados
    E deve ser exibido o custo recorrente mapeado como linha de base
    E deve ser informada a data em que o primeiro ROI estará disponível

  @CT-08.4 @acessibilidade @ANT-05
  Cenário: Limitar a densidade do gráfico
    Dado um histórico com 12 categorias de software
    Quando o gráfico de evolução é apresentado
    Então no máximo 5 séries devem ser exibidas simultaneamente
    E as demais devem ser agrupadas como "Outras"
    E cada série deve possuir rótulo direto, sem depender apenas da cor

  @CT-08.5 @desempenho @RNF-06
  Cenário: Carregar o dashboard no prazo
    Dado um histórico de 24 meses
    Quando eu acesso a tela "SCR-08 - Dashboard de ROI"
    Então o conteúdo deve ser apresentado em menos de 2 segundos
```

---

## 7. 📖 US-09 — Submeter e Aprovar Requisição de Compra

> **Como** Gestor de Compras,
> **quero** conduzir a aprovação de novas contratações dentro da plataforma
> **para que** toda contratação siga a política e deixe trilha auditável.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-09 · **Caso de uso** UC-09 · **Tela** SCR-09 |
| **Regras** | RN01 (teto de R$ 500/mês) · RN04 (teto de desperdício) |
| **Controles** | CTL-11, CTL-12 |
| **Padrões** | PAT-04 (política na decisão), PAT-05 (timeline) |
| **Persona** | P-03 — Gestor de Compras |

```gherkin
# language: pt
@REQ-09 @UC-09 @SCR-09 @BlocoB
Funcionalidade: Submeter e aprovar requisição de compra de software
  Para garantir conformidade com a política de gastos
  Como Gestor de Compras
  Quero conduzir o fluxo de aprovação na plataforma

  Contexto:
    Dado que estou autenticado como "Gestor de Compras"
    E que concluí a verificação em duas etapas

  @CT-09.1 @fluxo-principal @RN01
  Cenário: Aprovar contratação abaixo do teto sem alçada adicional
    Dado uma Requisição de "R$ 320,00" mensais para o setor "Marketing"
    Quando eu analiso a requisição
    Então a política aplicável deve ser exibida na própria tela de decisão
    E a requisição deve poder ser aprovada por um único aprovador
    E a decisão deve ser registrada na trilha de auditoria

  @CT-09.2 @regra-negocio @RN01
  Cenário: Exigir aprovação formal acima do teto
    Dado uma Requisição de "R$ 750,00" mensais para o setor "Design"
    Quando eu analiso a requisição
    Então deve ser exigida aprovação de "Gestor Financeiro" ou "Administrador de TI"
    E a requisição deve permanecer no estado "Em Aprovação"
    E o motivo da exigência deve citar a regra do teto de R$ 500,00 mensais

  @CT-09.3 @fronteira @RN01
  Cenário: Tratar requisição exatamente no valor do teto
    Dado uma Requisição de "R$ 500,00" mensais
    Quando eu analiso a requisição
    Então nenhuma aprovação adicional deve ser exigida
    E a regra do teto deve ser apresentada como não acionada

  @CT-09.4 @regra-negocio @RN04
  Cenário: Bloquear contratação com licença ociosa idêntica em estoque
    Dado uma Requisição de 3 licenças de "Figma"
    E que existem 5 licenças de "Figma" no estado "Ociosa"
    Quando eu analiso a requisição
    Então a aprovação direta deve ser bloqueada
    E deve ser exibido o alerta de licenças ociosas disponíveis em destaque
    E deve ser oferecida a ação de realocar licenças do estoque

  @CT-09.5 @excecao @RN04
  Cenário: Sobrepor o bloqueio mediante justificativa
    Dado uma Requisição bloqueada pela regra de teto de desperdício
    Quando eu registro uma justificativa formal
    Então a requisição deve ser encaminhada ao "Gestor Financeiro"
    E a justificativa deve constar da trilha de auditoria
    E a sobreposição não deve ser possível sem aprovação de alçada superior

  @CT-09.6 @governanca @RN01
  Cenário: Impedir que o solicitante aprove a própria requisição
    Dado uma Requisição que eu mesmo submeti
    Quando eu acesso a tela de aprovação
    Então as ações de aprovar e rejeitar devem estar indisponíveis
    E deve ser exibido o motivo da segregação de funções

  @CT-09.7 @fluxo-principal @PAT-05
  Cenário: Acompanhar o andamento da requisição
    Dado uma Requisição no estado "Em Aprovação"
    Quando eu acesso o detalhe da requisição
    Então deve ser exibida a linha do tempo das decisões
    E cada etapa deve indicar responsável, data e prazo

  @CT-09.8 @esquema @RN01
  Esquema do Cenário: Definir a alçada conforme o valor mensal
    Dado uma Requisição com valor mensal de "<valor>"
    Quando a alçada é calculada
    Então os níveis de aprovação exigidos devem ser "<niveis>"

    Exemplos:
      | valor        | niveis                                   |
      | R$ 320,00    | Gestor de Compras                        |
      | R$ 500,00    | Gestor de Compras                        |
      | R$ 500,01    | Gestor de Compras, Gestor Financeiro     |
      | R$ 4.900,00  | Gestor de Compras, Gestor Financeiro     |
      | R$ 5.200,00  | Gestor de Compras, Gestor Financeiro, CFO |
```

---

## 8. 📖 US-10 — Exportar Relatórios de Auditoria

> **Como** Gestor Financeiro,
> **quero** exportar os relatórios em PDF e XLSX preservando a privacidade dos colaboradores
> **para que** eu circule os números fora da plataforma sem risco de conformidade.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-10 · **Caso de uso** UC-10 · **Tela** SCR-10 |
| **Conformidade** | LGPD-01 (anonimização) · LGPD-02 (portabilidade) |
| **Controles** | CTL-07, CTL-08, CTL-15 |
| **Antipadrão evitado** | ANT-06 (export que ignora filtros) |

```gherkin
# language: pt
@REQ-10 @UC-10 @SCR-10 @BlocoB
Funcionalidade: Exportar relatórios de auditoria em PDF e XLSX
  Para circular os números fora da plataforma com segurança
  Como Gestor Financeiro
  Quero exportar relatórios preservando a privacidade dos colaboradores

  @CT-10.1 @fluxo-principal
  Cenário: Exportar relatório em PDF
    Dado um Relatório mensal de desperdício apresentado na tela
    Quando eu solicito a exportação em "PDF"
    Então o arquivo deve conter os mesmos dados exibidos na tela
    E deve conter período, data de geração e responsável pela exportação

  @CT-10.2 @fluxo-principal @ANT-06
  Cenário: Preservar os filtros aplicados na exportação
    Dado que apliquei o filtro de categoria "DevTools"
    Quando eu solicito a exportação em "XLSX"
    Então o arquivo deve conter apenas os registros da categoria filtrada
    E deve registrar em uma aba de metadados os filtros aplicados

  @CT-10.3 @privacidade @LGPD-01 @CTL-15
  Cenário: Anonimizar colaboradores no arquivo exportado
    Dado um Relatório contendo licenças atribuídas a colaboradores
    Quando eu exporto o relatório como "Gestor Financeiro"
    Então os titulares devem constar por pseudônimo
    E o setor e o custo devem constar em texto claro
    E nenhum nome ou CPF deve constar do arquivo

  @CT-10.4 @privacidade @LGPD-01
  Cenário: Registrar exportação com reidentificação
    Dado que estou autenticado como "Administrador de RH"
    Quando eu exporto um relatório com dados reidentificados
    Então deve ser exigida a declaração do motivo
    E a exportação deve ser registrada na trilha de auditoria
    E o arquivo deve conter marca d'água indicando conter dados pessoais

  @CT-10.5 @conformidade @LGPD-02 @CTL-07
  Cenário: Atender pedido de portabilidade do colaborador
    Dado que estou autenticado como "Colaborador"
    Quando eu solicito os meus dados no portal do titular
    Então devo receber o relatório em formato interoperável
    E o relatório deve listar quais dados de utilização foram coletados
    E devem estar disponíveis os formatos "JSON" e "CSV"

  @CT-10.6 @conformidade @LGPD-02 @CTL-08
  Cenário: Responder ao titular dentro do prazo
    Dado um pedido de acesso registrado pelo colaborador
    Quando o pedido é processado
    Então a resposta deve ser disponibilizada de forma automatizada
    E em nenhuma hipótese deve ultrapassar 15 dias

  @CT-10.7 @excecao
  Cenário: Tratar exportação de grande volume
    Dado um Relatório com mais de 50.000 linhas
    Quando eu solicito a exportação em "XLSX"
    Então a exportação deve ser processada de forma assíncrona
    E devo ser notificado quando o arquivo estiver disponível
    E o link de download deve expirar após 7 dias
```

---

## 9. 🔗 Matriz de Rastreabilidade dos Cenários (Bloco B)

| Regra / RNF / Conformidade | Cenários que a verificam | Cobertura |
|:---|:---|:---:|
| RN01 (teto de R$ 500/mês) | CT-07.3, CT-09.1, CT-09.2, CT-09.3, CT-09.6, CT-09.8 | ✅ |
| RN02 (ociosidade de 30 dias) | CT-04.1 a CT-04.8, CT-06.6, CT-07.1, CT-07.6 | ✅ |
| RN03 (alerta 15/45 dias) | CT-06.1 a CT-06.7 | ✅ |
| RN04 (teto de desperdício) | CT-09.4, CT-09.5 | ✅ |
| RNF-06 (carga < 2 s) | CT-05.5, CT-08.5 | ✅ |
| RNF-10 (falso positivo < 2%) | CT-04.4, CT-04.5, CT-07.6 | ✅ |
| LGPD-01 (anonimização) | CT-04.7, CT-10.3, CT-10.4 | ✅ |
| LGPD-02 (acesso e portabilidade) | CT-10.5, CT-10.6 | ✅ |
| CTL-11 (trilha de auditoria) | CT-07.1, CT-07.4, CT-09.1, CT-09.5, CT-10.4 | ✅ |
| CTL-12 (2FA) | Contexto de US-07 e US-09 | ✅ |
| ANT-01 (dashboard zerado) | CT-08.3 | ✅ |
| ANT-02 (ação sem confirmação) | CT-07.2 | ✅ |
| ANT-05 (excesso de séries) | CT-08.4 | ✅ |
| ANT-06 (export sem filtros) | CT-10.2 | ✅ |
| PAT-04 (política na decisão) | CT-09.1, CT-09.2 | ✅ |
| PAT-05 (timeline de aprovação) | CT-09.7 | ✅ |
| PAT-10 (confirmação por digitação) | CT-07.1, CT-07.2 | ✅ |

**Totais do Bloco B:** 7 histórias · 46 cenários.
**Acumulado do projeto:** 10 histórias · 83 cenários (28 na Semana 02; 46 aqui + 9 no Entregável 2 desta iteração) · **100% dos 10 RFs, 5 RNs e 2 itens de LGPD com cenário verificável.**

---

## 10. ⚠️ Questões Abertas

| ID | Questão | Encaminhamento |
|:---|:---|:---|
| Q-05 | O limite de 5 séries no gráfico de ROI (CT-08.4) precisa de validação com CFOs reais | Semana 12 |
| Q-06 | Prazo de expiração do link de download (CT-10.7, 7 dias) carece de homologação | Semana 5 |
| Q-07 | A marca d'água em exportação reidentificada (CT-10.4) é suficiente como controle? | Validar com DPO na Semana 6 |
