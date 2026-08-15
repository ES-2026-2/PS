Para suportar a transição entre a análise de requisitos, a modelagem de domínio (DDD) e a engenharia de software, a modelagem UML deve ser distribuída estrategicamente ao longo das **14 semanas**.

Os diagramas são divididos entre **comportamentais** (para processos e regras) e **estruturais** (para dados e arquitetura).

---

## 🗺️ Matriz de Diagramas UML por Fase e Iteração

| Fase do Projeto | Semanas / Iteração | Diagrama UML Recomendado | Foco / Finalidade Técnica | Responsável Principal |
| --- | --- | --- | --- | --- |
| **Fase 1: Descoberta e Requisitos** | Semanas 1 a 3 | **Diagrama de Casos de Uso** | Delimitar atores e os 10 requisitos funcionais. | Analistas (AR1/AR2) |
| **Fase 1: Descoberta e Requisitos** | Semanas 2 e 3 | **Diagrama de Atividades** | Mapear fluxos de processos de negócio e regras (RNs). | Analistas (AR1/AR2) |
| **Fase 2: Arquitetura e DDD** | Semanas 4 e 5 | **Diagrama de Sequência** | Detalhar interações temporais críticas e integrações de API. | Analistas com apoio de Design |
| **Fase 2: Arquitetura e DDD** | Semanas 5 e 6 | **Diagrama de Máquina de Estados** | Modelar o ciclo de vida das entidades centrais e status. | Analistas (AR1/AR2) |
| **Fase 2: Arquitetura e DDD** | Semanas 6 e 7 | **Diagrama de Classes de Domínio** | Estruturar Entidades, Value Objects e Agregados do DDD. | Analistas (AR1/AR2) |
| **Fase 2: Arquitetura e DDD** | Semana 7 | **Diagrama de Pacotes / Componentes** | Representar os *Bounded Contexts* e microsserviços. | Analistas (AR1/AR2) |
| **Fase 3: Hi-Fi e Integração** | Semanas 10 e 11 | **Diagrama de Implantação (*Deployment*)** | Mapear infraestrutura (Nuvem, WebSockets, Mobile, POS). | Analistas (AR1/AR2) |

---

## 📋 Detalhamento dos Diagramas por Fase

### Fase 1: Elicitação e Modelagem de Processos (Semanas 1 a 3)

* **Diagrama de Casos de Uso (*Use Case Diagram*) — [Entrega: Semana 2]**
* *Objetivo:* Mapear a fronteira do sistema, atores (ex: Usuário Final, Administrador de TI, Gestor Financeiro, Sistema Externo de Pagamento) e os 10 requisitos funcionais com seus relacionamentos (`<<include>>` para autenticação 2FA/LGPD e `<<extend>>` para fluxos de exceção).

* **Diagrama de Atividades (*Activity Diagram*) — [Entrega: Semana 3]**
* *Objetivo:* Modelar a lógica de negócios com raias (*swimlanes*) dividindo as ações do usuário, do sistema e de serviços terceiros.
* *Aplicações nos estudos de caso:* Fluxo de OCR com validação de divergência >1% (*Auditor SaaS*), fluxo de consentimento de dados sensíveis (*HealthTech*), e triagem de urgência de e-mails (*Agente de E-mail*).

---

### Fase 2: Estruturação do Domínio e Arquitetura (Semanas 4 a 7)

* **Diagrama de Sequência (*Sequence Diagram*) — [Entrega: Semanas 4 e 5]**
* *Objetivo:* Mapear a troca de mensagens síncronas/assíncronas entre atores, controladores, serviços de domínio e gateways externos.
* *Aplicações nos estudos de caso:*
* Processamento assíncrono de renderização de vídeo (*Repurposing AI*).
* Negociação de chat em tempo real via WebSockets com latência <200ms (*Micro-comunidades*).
* Disparo do protocolo de emergência cardíaca em <5 minutos (*Companheiro de Saúde*).
* Validação do pagamento Pix em até 15s com retenção temporária (*Desperdício de Alimentos*).

* **Diagrama de Máquina de Estados (*State Machine Diagram*) — [Entrega: Semanas 5 e 6]**
* *Objetivo:* Mapear estados finitos, gatilhos de transição e condições de guarda das entidades centrais.
* *Aplicações nos estudos de caso:*
* `AssinaturaSaaS`: *[Mapeada] $\rightarrow$ [Ativa] $\rightarrow$ [Ociosa] $\rightarrow$ [Em Downgrade] $\rightarrow$ [Cancelada]*.
* `LoteAlimentoExcedente`: *[Criado] $\rightarrow$ [Disponível] $\rightarrow$ [Reservado] $\rightarrow$ [Retirado] / [Doado]*.
* `SessaoTreinamento`: *[Iniciada] $\rightarrow$ [Em Andamento] $\rightarrow$ [Aprovada] / [Reprovada por Conduta]*.

* **Diagrama de Classes de Domínio (*Domain Class Diagram*) — [Entrega: Semanas 6 e 7]**
* *Objetivo:* Traduzir os blocos de construção DDD (Agregados, Entidades, Value Objects e Enumerations) em uma notação orientada a objetos padronizada com multiplicidade e visibilidade.

* **Diagrama de Pacotes / Componentes (*Package Diagram*) — [Entrega: Semana 7]**
* *Objetivo:* Representar os limites entre os *Bounded Contexts* (Core Domain, Supporting Domain, Generic Domain) e a camada de Anticorrupção (ACL).

---

### Fase 3: Infraestrutura e Handoff Técnico (Semanas 8 a 11)

* **Diagrama de Implantação (*Deployment Diagram*) — [Entrega: Semana 11]**
* *Objetivo:* Especificar a distribuição física e lógica dos artefatos de software na infraestrutura de produção.
* *Aplicações nos estudos de caso:*
* Instâncias de processamento elástico na nuvem AWS/GCP (*Repurposing AI*).
* Servidores Green Hosting com energia renovável (*Pegada de Carbono*).
* Ambientes híbridos: Aplicativo Mobile (iOS/Android) + Smart POS Android (*Desperdício de Alimentos*).
* Mecanismo de Speech-to-Text / Text-to-Speech com isolamento de tenant (*Roleplay de Voz*).

---

## 🎯 Aplicação Prática por Categoria de Estudo de Caso

| Categoria do App | Diagramas Críticos Obrigatórios | Justificativa Técnica |
| --- | --- | --- |
| **FinTechs / SaaS B2B** *(Casos 1, 5 e 6)* | • Máquina de Estados<br><br>• Diagrama de Sequência | Auditoria de estados de faturas, conciliação bancária Open Finance e prevenção de fraudes em pagamentos. |
| **HealthTechs** *(Casos 3 e 4)* | • Diagrama de Atividades<br><br>• Diagrama de Sequência | Mapeamento de protocolos de emergência clínica, verificação de nitidez de OCR e controle estrito de privacidade HIPAA/LGPD. |
| **GreenTech / B2B2C** *(Casos 7 e 8)* | • Máquina de Estados<br><br>• Diagrama de Componentes | Concorrência de estoque em tempo real, expiração de lotes de alimentos e arquitetura isolada de micro-comunidades. |
| **IA & Criadores** *(Casos 2, 9 e 10)* | • Diagrama de Sequência<br><br>• Diagrama de Implantação | Orquestração de pipelines de transcrição/renderização assíncrona e chamadas de áudio bidirecional em tempo real. |
