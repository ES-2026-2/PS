O livro **"Domain-Driven Design: Tackling Complexity in the Heart of Software"**, de Eric Evans, nos ensina a modelar software focando no ecossistema do negócio, na linguagem onipresente (*Ubiquitous Language*) e no isolamento de complexidades técnicas.

Abaixo, apresento um **Template Padrão de Modelo de Domínio (DDD)**, totalmente reutilizável e padronizado, estruturado para documentar o domínio de **qualquer um dos estudos de caso** (FinTech, HealthTech, EdTech, GreenTech, etc.).

---

# 📐 DOCUMENTO DE MODELO DE DOMÍNIO (DDD)

**Projeto:** `[Nome do Estudo de Caso / Aplicação]`

**Módulo / Contexto:** `[Nome do Módulo Central]`

**Versão do Modelo:** `1.0.0`

**Data:** `[Data Atual]`

**Autores:** `[Dupla de Analistas & Designers]`

---

## 1. 🌐 Linguagem Onipresente (*Ubiquitous Language*)

> *Glossário vivo de termos do negócio que devem ser utilizados de forma idêntica por especialistas do domínio, analistas de requisitos, UX designers e desenvolvedores.*

| Termo do Negócio | Conceito / Definição | Sinônimos Não Permitidos (*Aumentam ruído*) | Contexto de Uso |
| --- | --- | --- | --- |
| **`[Termo 1]`** | *Ex: Período de 30 dias contínuos sem registro de atividade no software.* | Inatividade, Ociosidade genérica. | Utilizado em Regras de Cancelamento. |
| **`[Termo 2]`** | *Ex: Nota fiscal cuja variação seja > 1% do valor do cartão.* | Divergência, Erro de Leitura. | Módulo de Auditoria de NFs. |
| **`[Termo 3]`** | *Definição clara e objetiva do conceito no negócio...* | *Termos a evitar...* | *Onde o termo se aplica...* |

---

## 2. 🗺️ Mapeamento de Contextos Delimitados (*Bounded Contexts*)

> *Delimitação das fronteiras conceituais onde um determinado modelo de domínio se aplica e mantém sua integridade interna.*

```
 ┌─────────────────────────────────────────────────────────┐
 │               [ BOUNDED CONTEXT PRINCIPAL ]             │
 │                                                         │
 │    Core Domain: [Nome do Core do Negócio]               │
 │                                                         │
 └─────────────▲─────────────────────────────▲─────────────┘
               │ (Upstream / Downstream)     │ (Shared Kernel / ACL)
 ┌─────────────┴─────────────┐ ┌─────────────┴─────────────┐
 │ [CONTEXTO SUPORTE A]      │ │ [CONTEXTO GENÉRICO B]     │
 │ Ex: Faturamento / Pagam.  │ │ Ex: Notificações / Auth   │
 └───────────────────────────┘ └───────────────────────────┘

```

### 2.1. Lista de Contextos Delimitados do Sistema

* **Contexto Central (Core Domain):** `[Descrição da atividade principal do app]`
* **Contexto de Suporte (Supporting Domain):** `[Atividades secundárias que viabilizam o core]`
* **Contexto Genérico (Generic Domain):** `[Funcionalidades padrão como autenticação, envio de push, etc.]`

---

## 3. 🧩 Elementos do Modelo de Domínio (*Domain Building Blocks*)

### 3.1. Entidades (*Entities*)

> *Objetos com identidade única que se mantém contínua ao longo do tempo, mesmo que seus atributos mudem.*

#### `[NomeDaEntidade1]`

* **Identificador Único (ID):** `[Ex: TenantID + ContractID]`
* **Atributos Principais:** `[atributo1: Tipo, atributo2: Tipo]`
* **Ciclo de Vida / Estados:** `[Criado] ➔ [Ativo] ➔ [Suspenso] ➔ [Cancelado]`
* **Comportamentos / Regras de Domínio Internas:**
* `renovarContrato()`: *Verifica se o prazo está em janela de renovação.*
* `suspenderAcesso()`: *Altera o estado para Suspenso e dispara evento de domínio.*

---

### 3.2. Objetos de Valor (*Value Objects - VOs*)

> *Objetos imutáveis definidos exclusivamente por seus atributos e sem identidade própria.*

* **`[NomeDoValueObject1]`** *(Ex: EndereçoResidencial, FaixaSintomática, ValorMonetário)*
* **Atributos:** `[rua, numero, cep, bairro]`
* **Regra de Imutabilidade / Validação:** *Não pode ser instanciado com CEP inválido. Se alterado, gera-se uma nova instância completa.*

---

### 3.3. Agregados e Raízes de Agregação (*Aggregates & Aggregate Roots*)

> *Conjunto de Entidades e Value Objects agrupados sob uma Raiz de Agregação (Aggregate Root) para garantir a consistência de transação e as invariantes de negócio.*

```
 ┌───────────────────────────────────────────────────────────┐
 │ AGREGADO: [Nome do Agregado]                              │
 │                                                           │
 │   ★ [Raiz da Agregação - Aggregate Root]                  │
 │       ├── [Entidade Filha 1]                              │
 │       ├── [Value Object A]                                │
 │       └── [Value Object B]                                │
 └───────────────────────────────────────────────────────────┘

```

* **Invariantes de Negócio (Regras que NUNCA podem ser violadas dentro do Agregado):**
1. *Ex: Um contrato não pode possuir mais de 50 licenças sem aprovação formal.*
2. *Ex: A soma das porcentagens do rateio deve ser exatamente igual a 100%.*

---

### 3.4. Serviços de Domínio (*Domain Services*)

> *Lógica de negócio que opera sobre o domínio, mas não pertence naturalmente a nenhuma Entidade ou Objeto de Valor específico.*

* **`[NomeDoServicoDeDominio]`** *(Ex: CalculadorDePrevisãoDeBurnout, DetectorDeInteraçãoMedicamentosa)*
* **Entradas:** `[EntidadeA, ValueObjectB]`
* **Responsabilidade:** *Realizar cálculo cruzado de VFC e histórico de sono sem poluir as entidades isoladas.*

---

## 4. ⚡ Eventos de Domínio (*Domain Events*)

> *Fatos relevantes que aconteceram no negócio e que exigem reação de outros contextos ou agregados.*

| Nome do Evento (*Verbo no Passado*) | Gatilho Disparador | Dados do Evento (*Payload*) | Contextos/Agregados Notificados |
| --- | --- | --- | --- |
| **`[LicencaClassificadaComoOciosa]`** | Inatividade por 30 dias consecutivos. | `licencaId`, `colaboradorId`, `diasInativo` | Contexto de Notificações / Dashboard B2B |
| **`[AlertaCriticoDisparado]`** | Batimento < 40 bpm por > 5 min. | `usuarioId`, `bpmAtual`, `timestamp` | Contexto de Emergência / Notificação Push |
| **`[EventoOcorrido]`** | *Ação do usuário ou sistema...* | *Dados que acompanham o evento...* | *Serviços afetados...* |

---

## 5. 🛡️ Regras de Negócio e Invariantes (*Business Rules*)

> *Mapeamento das Regras de Negócio (RN) e Requisitos Não Funcionais Críticos (RNF) sob a ótica do modelo do domínio.*

* **`RN-01` (`[Nome da Regra]`):** *Descrição técnica do comportamento esperado do modelo...*
* **`RN-02` (`[Nome da Regra]`):** *Descrição técnica do comportamento esperado do modelo...*
* **`RNF / LGPD` (`[Garantia de Privacidade/Segurança]`):** *Estratégia de isolamento ou anonimização aplicada às entidades.*

---

## 📊 6. Rastreabilidade com Interfaces de UI/UX e Casos de Uso

> *Mapeamento de como os conceitos do Domínio suportam as interfaces desenvolvidas no Protótipo Hi-Fi.*

| Agregado / Entidade Envolvida | Requisito Funcional (RF) | Tela no Figma (ID) | Ação da Interface que Altera o Domínio |
| --- | --- | --- | --- |
| **`[Agregado 1]`** | `REQ-01` | `SCR-01` | Clique em *"Confirmar Cancelamento"*. |
| **`[Agregado 2]`** | `REQ-05` | `SCR-05` | Envio do formulário de *Registro Rápido de Gastos*. |

---

### 💡 Instruções de Uso deste Template:

1. **Copie e cole** este código Markdown no arquivo de documentação do estudo de caso escolhido.
2. **Substitua as seções marcadas com `[ ]**` pelas entidades, palavras e regras específicas daquele ecossistema (seja ele um *Agente de IA para E-mails*, um *App HealthTech* ou uma *FinTech*).
3. Utilize os diagramas em ASCII/Mermaid para ilustrar os **Agregados** e os **Bounded Contexts** diretamente no repositório.
