# Entregável 1 — Especificação BDD/Gherkin dos Requisitos REQ-01 a REQ-03

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 02 (17/08/2026 – 23/08/2026) — Detalhamento do Bloco A  
**Responsável:** AR1 (Analista de Requisitos)  
**Versão:** 1.0.0  
**Escopo:** REQ-01 (Integração API/ERPs) · REQ-02 (Leitura de NF/E-mail) · REQ-03 (Catalogação por IA)

---

## 1. Objetivo e Convenções

Traduzir os três primeiros requisitos funcionais em **histórias de usuário com critérios de
aceite executáveis** em Gherkin (pt-BR), de modo que cada regra de negócio, RNF e controle
de segurança definido na Semana 01 tenha um cenário verificável associado.

### 1.1. Convenções adotadas

| Convenção | Regra |
|:---|:---|
| Idioma | `# language: pt` — palavras-chave em português |
| Nomenclatura | Estritamente a da Seção 7 do [Mapa de AI da Semana 01](../semana-01/entregavel-02-arquitetura-informacao-mapa-navegacao.md) |
| Identificação | `US-xx` (história) · `CT-xx.y` (cenário de teste) |
| Rastreabilidade | Toda `Funcionalidade` declara *tags* de RF, RN, RNF e CTL |
| Dados | Valores em `pt-BR` (`R$ 1.234,56`); datas em `dd/MM/aaaa` |
| Atores | Papéis da matriz RBAC (Seção 6 do Entregável 1 da Semana 01) |

### 1.2. Definição de Pronto (*Definition of Ready*)

Uma história só entra em desenvolvimento quando: **(a)** tem ator, ação e valor declarados;
**(b)** todos os cenários de fluxo principal, alternativo e de exceção estão escritos;
**(c)** cada RN aplicável tem ao menos um cenário; **(d)** cada dado pessoal tocado consta
do inventário `DP-xx`; **(e)** os controles `CTL-xx` aplicáveis estão referenciados.

---

## 2. US-01 — Configurar Integração com ERP e Faturamento

> **Como** Administrador de TI,
> **quero** conectar os sistemas de ERP e as caixas de e-mail corporativas à plataforma
> **para que** o inventário de assinaturas SaaS seja construído automaticamente, sem
> levantamento manual de planilhas.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-01 |
| **Caso de uso** | UC-01 |
| **Tela** | SCR-01 — Modal de Conexões & Chaves API |
| **RNFs** | RNF-01 (AES-256), RNF-04 (varredura < 5 min), RNF-08 (RESTful) |
| **Controles** | CTL-02, CTL-03, CTL-12, CTL-13 |
| **Decisão vinculada** | DEC-02 (credenciais somente-leitura) |
| **Fontes** | FT-03 a FT-07 |

```gherkin
# language: pt
@REQ-01 @UC-01 @SCR-01 @BlocoA
Funcionalidade: Configurar integração com ERP e faturamento
  Para construir o inventário de assinaturas sem trabalho manual
  Como Administrador de TI
  Quero conectar sistemas de ERP e caixas de e-mail corporativas

  Contexto:
    Dado que estou autenticado como "Administrador de TI"
    E que concluí a verificação em duas etapas
    E que estou na tela "SCR-01 - Conexões e Chaves API"

  @CT-01.1 @fluxo-principal @RNF-04
  Cenário: Conectar um ERP com credenciais válidas
    Quando eu seleciono o conector "TOTVS Protheus"
    E informo uma chave de API válida com escopo somente-leitura
    E confirmo a conexão
    Então a conexão deve ser registrada com estado "Ativo"
    E a varredura inicial deve ser iniciada automaticamente
    E a varredura inicial deve ser concluída em menos de 5 minutos
    E devo visualizar a quantidade de assinaturas mapeadas

  @CT-01.2 @fluxo-principal @CTL-13
  Cenário: Conectar caixa de e-mail corporativa via OAuth
    Quando eu seleciono o conector "Google Workspace"
    E sou redirecionado para o consentimento do provedor
    Então os escopos solicitados devem se limitar a leitura de mensagens
    E nenhum escopo de escrita ou exclusão deve ser solicitado
    Quando eu concedo o consentimento
    Então a conexão deve ser registrada com estado "Ativo"
    E deve ser exibida a data da última varredura

  @CT-01.3 @seguranca @RNF-01 @CTL-03
  Cenário: Armazenar credencial de forma cifrada
    Quando eu concluo a conexão com o conector "SAP Business One"
    Então a chave de API deve ser persistida cifrada em AES-256-GCM
    E a chave em texto claro não deve ser exibida novamente em nenhuma tela
    E apenas os 4 últimos caracteres devem ser apresentados como identificação

  @CT-01.4 @seguranca @DEC-02
  Cenário: Recusar credencial com escopo de escrita
    Quando eu informo uma chave de API com permissão de escrita
    Então a conexão deve ser recusada
    E devo receber a mensagem "Utilize uma credencial somente-leitura"
    E nenhuma credencial deve ser persistida

  @CT-01.5 @excecao
  Cenário: Tratar credencial inválida
    Quando eu informo uma chave de API inválida
    E confirmo a conexão
    Então a conexão deve ser registrada com estado "Erro"
    E devo visualizar o motivo retornado pelo provedor
    E a plataforma deve oferecer a ação "Tentar novamente"

  @CT-01.6 @excecao
  Cenário: Tratar expiração de token OAuth
    Dado que existe uma conexão "Microsoft 365" com estado "Ativo"
    Quando o token de acesso expira e a renovação automática falha
    Então a conexão deve mudar para o estado "Token expirado"
    E um alerta deve ser exibido no menu lateral
    E a última varredura bem-sucedida deve permanecer visível

  @CT-01.7 @governanca @CTL-12
  Cenário: Exigir dupla verificação para revogar conexão
    Dado que existe uma conexão "TOTVS Protheus" com estado "Ativo"
    Quando eu solicito a revogação da conexão
    Então deve ser exigida a verificação em duas etapas
    E a revogação deve ser registrada na trilha de auditoria
    E os dados já coletados devem permanecer disponíveis

  @CT-01.8 @esquema
  Esquema do Cenário: Exibir saúde de cada conector
    Dado que existe uma conexão "<conector>" na situação "<situacao>"
    Quando eu acesso a tela "SCR-01 - Conexões e Chaves API"
    Então o cartão do conector deve exibir o estado "<estado>"
    E deve exibir o rótulo textual além da cor

    Exemplos:
      | conector          | situacao                  | estado          |
      | Google Workspace  | operando normalmente      | Ativo           |
      | Microsoft 365     | token vencido             | Token expirado  |
      | TOTVS Protheus    | credencial revogada       | Erro            |
      | Omie              | aguardando primeira carga | Conectando      |
```

---

## 3. US-02 — Ingerir e Extrair Dados de Notas Fiscais e E-mails

> **Como** Gestor Financeiro,
> **quero** que a plataforma leia automaticamente as notas fiscais e recibos de SaaS
> recebidos por e-mail
> **para que** eu identifique cobranças divergentes sem conferir documento por documento.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-02 |
| **Caso de uso** | UC-02 (com `<<extend>>` Tratar divergência) |
| **Tela** | SCR-02 — Extrator de NFs & Auditoria de Divergência |
| **Regras** | RN05 (detalhada no Entregável 2) |
| **RNFs** | RNF-04, RNF-07 (privacidade) |
| **Controles** | CTL-05, CTL-09, CTL-15 |
| **Dados pessoais** | DP-03 (CPF — descarte), DP-06 (corpo de e-mail — não persistido) |

```gherkin
# language: pt
@REQ-02 @UC-02 @SCR-02 @BlocoA
Funcionalidade: Ingerir e extrair dados de notas fiscais e e-mails
  Para auditar cobranças de SaaS sem conferência manual
  Como Gestor Financeiro
  Quero que notas fiscais recebidas por e-mail sejam lidas automaticamente

  Contexto:
    Dado que existe uma conexão de e-mail com estado "Ativo"
    E que existe uma conexão de cartão corporativo com estado "Ativo"

  @CT-02.1 @fluxo-principal
  Cenário: Extrair dados de uma nota fiscal anexada
    Dado que chega um e-mail com o assunto "Sua fatura Adobe Creative Cloud"
    E que o e-mail possui um anexo em PDF
    Quando o pipeline de ingestão processa a mensagem
    Então uma Fatura deve ser criada com o estado "Extraída (OCR)"
    E os campos número, valor, data de emissão e fornecedor devem ser preenchidos
    E a Fatura deve aparecer na tela "SCR-02 - Extrator de NFs"

  @CT-02.2 @privacidade @RNF-07 @CTL-09 @DP-06
  Cenário: Descartar e-mail sem indício de faturamento
    Dado que chega um e-mail sem anexo
    E que o assunto e o corpo não contêm palavras-chave de faturamento
    Quando o pipeline de ingestão processa a mensagem
    Então nenhum conteúdo da mensagem deve ser persistido
    E apenas o contador anônimo de mensagens descartadas deve ser incrementado
    E a mensagem não deve aparecer em nenhuma tela da plataforma

  @CT-02.3 @privacidade @LGPD-01 @CTL-05 @DP-03
  Cenário: Mascarar CPF encontrado na nota fiscal
    Dado que chega um e-mail com uma nota fiscal contendo o CPF de um colaborador
    Quando o pipeline extrai os dados do documento
    Então o CPF deve ser descartado antes da gravação
    E o campo correspondente deve ser exibido como "***.***.***-**"
    E o nome do colaborador deve ser substituído pelo pseudônimo "COL-{hash}"

  @CT-02.4 @regra-negocio @RN05
  Cenário: Marcar lançamento como Divergente
    Dado uma Fatura extraída no valor de "R$ 1.000,00"
    E um lançamento de cartão corporativo no valor de "R$ 1.020,00"
    Quando a conciliação é executada
    Então a variação apurada deve ser de "2,00%"
    E a Fatura deve assumir o estado "Divergente"
    E o setor financeiro deve ser notificado

  @CT-02.5 @regra-negocio @RN05
  Cenário: Conciliar lançamento dentro da tolerância
    Dado uma Fatura extraída no valor de "R$ 1.000,00"
    E um lançamento de cartão corporativo no valor de "R$ 1.008,00"
    Quando a conciliação é executada
    Então a variação apurada deve ser de "0,80%"
    E a Fatura deve assumir o estado "Conciliada"
    E nenhuma notificação de divergência deve ser enviada

  @CT-02.6 @excecao
  Cenário: Encaminhar documento ilegível para revisão manual
    Dado que chega um e-mail com um anexo digitalizado de baixa qualidade
    Quando o pipeline extrai os dados do documento
    E a confiança da leitura do valor total é inferior a 85%
    Então a Fatura deve assumir o estado "Pendente de revisão"
    E deve ser exibido o documento original ao lado dos campos extraídos
    E a conciliação automática não deve ser executada

  @CT-02.7 @desempenho @RNF-04
  Cenário: Concluir a varredura inicial no prazo
    Dado que uma conexão de e-mail acabou de ser criada
    Quando a varredura inicial é executada
    Então ela deve ser concluída em menos de 5 minutos por conta conectada
    E o progresso deve permanecer visível durante a navegação

  @CT-02.8 @esquema @RN05
  Esquema do Cenário: Classificar a conciliação conforme a variação
    Dado uma Fatura extraída no valor de "<valor_nf>"
    E um lançamento de cartão corporativo no valor de "<valor_cartao>"
    Quando a conciliação é executada
    Então a Fatura deve assumir o estado "<estado>"

    Exemplos:
      | valor_nf     | valor_cartao | estado      |
      | R$ 1.000,00  | R$ 1.000,00  | Conciliada  |
      | R$ 1.000,00  | R$ 1.010,00  | Conciliada  |
      | R$ 1.000,00  | R$ 1.010,01  | Divergente  |
      | R$ 1.000,00  | R$ 990,00    | Conciliada  |
      | R$ 1.000,00  | R$ 989,00    | Divergente  |
      | R$ 1.000,00  | R$ 1.500,00  | Divergente  |
```

---

## 4. US-03 — Catalogar Ferramentas Automaticamente por IA

> **Como** Administrador de TI,
> **quero** que as ferramentas identificadas sejam classificadas automaticamente por categoria
> **para que** eu enxergue redundâncias entre softwares que resolvem o mesmo problema.

| Atributo | Valor |
|:---|:---|
| **Requisito** | REQ-03 |
| **Caso de uso** | UC-03 |
| **Tela** | SCR-03 — Inventário de Softwares por Categoria |
| **RNFs** | RNF-10 (falsos positivos < 2%), RNF-06 (< 2 s) |
| **Padrão de UI** | PAT-01 (índice de confiança), PAT-10 (drill-down) |

```gherkin
# language: pt
@REQ-03 @UC-03 @SCR-03 @BlocoA
Funcionalidade: Catalogar ferramentas automaticamente por categoria
  Para revelar redundâncias entre softwares equivalentes
  Como Administrador de TI
  Quero que as ferramentas detectadas sejam classificadas por IA

  Contexto:
    Dado que existem faturas processadas para os fornecedores identificados
    E que estou na tela "SCR-03 - Inventário de Softwares por Categoria"

  @CT-03.1 @fluxo-principal @PAT-01
  Cenário: Classificar fornecedor conhecido com índice de confiança
    Dado uma Fatura conciliada do fornecedor "Figma"
    Quando o motor de catalogação processa o fornecedor
    Então o Fornecedor SaaS deve ser classificado na categoria "Design"
    E o índice de confiança da classificação deve ser exibido no inventário
    E o índice deve ser acompanhado de rótulo textual, não apenas de cor

  @CT-03.2 @qualidade @RNF-10
  Cenário: Encaminhar classificação de baixa confiança para revisão
    Dado uma Fatura conciliada de um fornecedor não reconhecido
    Quando o motor de catalogação atribui confiança inferior a 80%
    Então o Fornecedor SaaS deve assumir o estado "Pendente de revisão"
    E não deve ser contabilizado nas recomendações de consolidação
    E o Administrador de TI deve poder confirmar ou corrigir a categoria

  @CT-03.3 @aprendizado
  Cenário: Registrar correção manual de categoria
    Dado um Fornecedor SaaS classificado como "Produtividade"
    Quando eu corrijo a categoria para "DevTools"
    Então a categoria deve ser atualizada imediatamente
    E a correção deve ser registrada para calibração do motor
    E a origem da classificação deve passar a ser exibida como "Ajuste manual"

  @CT-03.4 @fluxo-principal
  Cenário: Consolidar fornecedor com múltiplas grafias
    Dado faturas emitidas por "Adobe Inc.", "ADOBE SYSTEMS" e "Adobe Brasil"
    Quando o motor de catalogação processa os fornecedores
    Então deve existir um único Fornecedor SaaS "Adobe"
    E as três grafias devem ser mantidas como identificadores alternativos

  @CT-03.5 @valor-de-negocio
  Cenário: Sinalizar redundância dentro de uma mesma categoria
    Dado que existem 3 Fornecedores SaaS ativos na categoria "Design"
    Quando eu acesso o inventário
    Então a categoria "Design" deve exibir o indicador de possível redundância
    E deve ser oferecida a ação de comparar as assinaturas da categoria

  @CT-03.6 @desempenho @RNF-06
  Cenário: Carregar o inventário no prazo
    Dado que existem 500 Fornecedores SaaS catalogados
    Quando eu acesso a tela "SCR-03 - Inventário de Softwares por Categoria"
    Então o conteúdo deve ser apresentado em menos de 2 segundos
    E os filtros aplicados devem ser preservados ao navegar para o detalhe

  @CT-03.7 @privacidade @LGPD-01
  Cenário: Ocultar identidade do colaborador no inventário
    Dado um Fornecedor SaaS com 12 licenças atribuídas
    Quando eu acesso o detalhe do fornecedor como "Administrador de TI"
    Então cada licença deve ser identificada por pseudônimo
    E o setor deve ser exibido em texto claro
    E o nome do colaborador não deve ser exibido
```

---

## 5. Matriz de Rastreabilidade dos Cenários

| Regra / RNF / Controle | Cenários que a verificam | Cobertura |
|:---|:---|:---:|
| RN05 (divergência > 1%) | CT-02.4, CT-02.5, CT-02.8 | Sim |
| RNF-01 (AES-256) | CT-01.3 | Sim |
| RNF-04 (varredura < 5 min) | CT-01.1, CT-02.7 | Sim |
| RNF-06 (carga < 2 s) | CT-03.6 | Sim |
| RNF-07 (privacidade de e-mail) | CT-02.2 | Sim |
| RNF-08 (RESTful) | *(verificado na especificação OpenAPI — Semana 7)* | Parcial |
| RNF-10 (falso positivo < 2%) | CT-03.2, CT-03.3 | Sim |
| LGPD-01 (anonimização) | CT-02.3, CT-03.7 | Sim |
| CTL-03 (cofre de chaves) | CT-01.3 | Sim |
| CTL-09 (descarte de e-mail) | CT-02.2 | Sim |
| CTL-12 (2FA) | CT-01.7, Contexto de US-01 | Sim |
| CTL-13 (consentimento OAuth) | CT-01.2 | Sim |
| DEC-02 (somente-leitura) | CT-01.2, CT-01.4 | Sim |
| PAT-01 (índice de confiança) | CT-03.1 | Sim |
| ANT-03 (cor como único canal) | CT-01.8, CT-03.1 | Sim |

**Totais:** 3 histórias · 23 cenários · 100% das RNs e LGPDs aplicáveis ao Bloco A cobertas.

---

## 6. Questões Abertas para Validação

| ID | Questão | Encaminhamento |
|:---|:---|:---|
| Q-01 | O limiar de 85% de confiança do OCR (CT-02.6) é adequado ou deve variar por tipo de documento? | Validar na Semana 5 junto ao teste do RNF-10 |
| Q-02 | O limiar de 80% para revisão de categoria (CT-03.2) precisa de calibração com dados reais | Depende de amostra de faturas; Semana 5 |
| Q-03 | Faturas em moeda estrangeira exigem regra própria de conciliação | Tratada no Entregável 2 (RN05.5) desta semana |
| Q-04 | Consolidação de grafias (CT-03.4) deve ser automática ou sugerida? | Definido como automática com desfazer; revisar na Semana 3 |
