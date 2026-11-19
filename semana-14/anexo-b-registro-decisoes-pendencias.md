# Anexo B — Registro Consolidado de Decisões e Pendências

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas  
**Iteração:** Semana 14 (09/11/2026 – 15/11/2026) — Handoff Técnico e Encerramento  
**Responsável:** Equipe integrada (AR1, AR2, D1, D2)  
**Parte do:** [Dossiê de Engenharia de Requisitos](entregavel-01-dossie-engenharia-requisitos.md)  

---

## 1. Como este registro foi montado

- **Decisões:** a tabela da Seção 2 foi gerada a partir das tabelas de decisão dos READMEs das
  Semanas 01 a 13, usando a primeira ocorrência de cada identificador. As DEC-87 a DEC-89 não
  constam em tabela de README e foram copiadas do Entregável 1 da Semana 09.
- **Situação das decisões:** DEC-01 a DEC-65 foram registradas como decididas nas semanas de
  origem. A partir da DEC-66, os próprios documentos as declaram **propostas, a ratificar pela
  equipe**, e nenhum documento posterior registra a ratificação.
- **Pendências:** a situação da Seção 3 é a do último documento que cita cada uma, conferida
  nesta iteração. Onde a conferência foi feita em arquivo ou captura de tela, a coluna
  *Evidência* diz qual.

> **Uma inconsistência a resolver.** O Entregável 1 da Semana 09 cita a DEC-76 como "já
> ratificada" (linha da LR-32), enquanto a Semana 08 e todos os demais documentos a mantêm
> como proposta. Nenhum registro de ratificação foi encontrado; este anexo a mantém como
> **Proposta**.

---

## 2. Decisões de projeto (DEC-01 a DEC-100)

| ID | Semana | Decisão | Situação |
|:---|:---:|:---|:---:|
| DEC-01 | S01 | O sistema atua como operador de dados pessoais; a empresa cliente é a controladora | Decidida |
| DEC-02 | S01 | Todas as integrações usam credenciais somente-leitura na v1.0 | Decidida |
| DEC-03 | S01 | Pseudonimização de colaboradores é o padrão, não uma opção | Decidida |
| DEC-04 | S01 | Corpo de e-mail sem anexo/keyword nunca é persistido | Decidida |
| DEC-05 | S01 | Taxonomia da navegação é orientada à tarefa, não à origem do dado | Decidida |
| DEC-06 | S01 | Nenhum estado é comunicado apenas por cor | Decidida |
| DEC-07 | S01 | Escopo de responsividade limitado a desktop e tablet (RNF-09) | Decidida |
| DEC-08 | S02 | O limite de 1% da RN05 é exclusivo: exatamente 1,00% concilia | Decidida |
| DEC-09 | S02 | A conciliação usa valor absoluto da variação — cobrança a menor também é divergência | Decidida |
| DEC-10 | S02 | Divergência recebe severidade em 3 faixas com destinatários e prazos distintos | Decidida |
| DEC-11 | S02 | Somente a confiança do valor total (CE-02) bloqueia a conciliação automática | Decidida |
| DEC-12 | S02 | UC-02 é disparado por temporizador, não por ator humano | Decidida |
| DEC-13 | S02 | Correção manual reprocessa e preserva o registro anterior (nunca sobrescreve) | Decidida |
| DEC-14 | S02 | Consolidação de grafias de fornecedor é automática com desfazer | Decidida |
| DEC-15 | S03 | Evidência de uso segue a hierarquia E1 (API) → E2 (SSO) → E3 (proxy); E4 só contesta | Decidida |
| DEC-16 | S03 | Licença nunca acessada conta a partir do provisionamento | Decidida |
| DEC-17 | S03 | Prazos da RN03 em dias corridos, antecipando para dia útil anterior | Decidida |
| DEC-18 | S03 | Assinatura órfã escala para gestor do centro de custo e Admin de TI | Decidida |
| DEC-19 | S03 | Downgrade segue a mesma alçada do cancelamento, pelo VME afetado | Decidida |
| DEC-20 | S03 | Janela de arrependimento de 72 h antes do envio ao fornecedor | Decidida |
| DEC-21 | S03 | Indicador principal de ROI usa apenas economia realizada | Decidida |
| DEC-22 | S03 | Marco zero do ROI é a primeira varredura concluída | Decidida |
| DEC-23 | S03 | Teto da RN01 incide sobre o VME da contratação completa | Decidida |
| DEC-24 | S03 | Bloqueio da RN04 admite sobreposição com justificativa + alçada superior | Decidida |
| DEC-25 | S03 | Até 3 níveis de aprovação, sequenciais, por faixa de VME | Decidida |
| DEC-26 | S03 | XLSX exporta apenas valores, com aba de metadados dos filtros | Decidida |
| DEC-27 | S03 | Relatório usa hash SHA-256 e carimbo de tempo, sem assinatura ICP-Brasil na v1.0 | Decidida |
| DEC-28 | S03 | Portabilidade do titular em JSON e CSV, restrita aos próprios dados | Decidida |
| DEC-29 | S04 | Economia realizada é o primeiro elemento do Dashboard, acima de qualquer gráfico | Decidida |
| DEC-30 | S04 | Cobertura de telemetria exibida no topo de SCR-04, antes de qualquer recomendação | Decidida |
| DEC-31 | S04 | Recomendações em card individual e sequencial, não em lista densa | Decidida |
| DEC-32 | S04 | O motor nunca executa ação — só produz recomendação com evidência | Decidida |
| DEC-33 | S04 | Piso de publicação de recomendação: R$ 1.200/ano | Decidida |
| DEC-34 | S04 | Recomendação sem os 4 campos de explicação não é publicável | Decidida |
| DEC-35 | S04 | Conciliação é sempre assíncrona à ingestão, nunca em cadeia síncrona | Decidida |
| DEC-36 | S04 | Falso positivo do RNF-10 definido operacionalmente em 4 tipos (`FP-A` a `FP-D`) | Decidida |
| DEC-37 | S05 | Lista de divergências ordena por severidade, nunca por data | Decidida |
| DEC-38 | S05 | Prévia de impacto exibe quem perde acesso, há quanto tempo não usa e por qual evidência, antes de qualquer ação destrutiva | Decidida |
| DEC-39 | S05 | Ação bloqueada aparece desabilitada com o motivo visível, em vez de ser omitida | Decidida |
| DEC-40 | S05 | Contador da janela de 72 h é exibido antes da confirmação | Decidida |
| DEC-41 | S05 | "Varredura inicial" = janela de 90 dias; carga histórica é assíncrona | Decidida |
| DEC-42 | S05 | OCR e conciliação ficam fora do caminho crítico da varredura inicial | Decidida |
| DEC-43 | S05 | O teto de 5 min é por conexão, medido no percentil 95 | Decidida |
| DEC-44 | S05 | Limiar de classificação E2 de 0,70 → 0,80 e base curada de 75% → 85% | Decidida |
| DEC-45 | S05 | O teto de 2% do RNF-10 mede apenas FP-A + FP-B; FP-C e FP-D recebem tetos próprios | Decidida |
| DEC-46 | S05 | OCR é serviço de domínio interno com adaptador (ACL) para provedor externo | Decidida |
| DEC-47 | S06 | Texto sobre fundo de status usa os tons 700/800; verde e âmbar 600 só em elementos não textuais | Decidida |
| DEC-48 | S06 | Placeholder passa de `slate.400` (2,6:1) para `slate.500` (4,8:1) | Decidida |
| DEC-49 | S06 | Badge com anatomia fixa e rótulo igual ao nome do estado na máquina | Decidida |
| DEC-50 | S06 | Gráfico de ROI em tablet com legenda de valores, eixo a cada 2 meses e tooltip por toque | Decidida |
| DEC-51 | S06 | Visualizador de NF em tablet com painéis empilhados, pinça, toque duplo e rotação por botão | Decidida |
| DEC-52 | S06 | Tabelas com prioridade de coluna Alta/Média/Baixa | Decidida |
| DEC-53 | S06 | Pseudônimo por HMAC-SHA-256 com chave por tenant; prefixo único de no mínimo 4 caracteres | Decidida |
| DEC-54 | S06 | k = 5 com supressão complementar e generalização do setor em visões por linha | Decidida |
| DEC-55 | S06 | Chave de pseudonimização sem rotação programada | Decidida |
| DEC-56 | S06 | Licenças *floating* apuradas por pool (capacidade − pico concorrente) | Decidida |
| DEC-57 | S06 | Integração de RH recebe o período do afastamento, nunca o motivo | Decidida |
| DEC-58 | S06 | Pseudonimizado é dado pessoal; só agregado com k ≥ 5 é anonimizado | Decidida |
| DEC-59 | S06 | NF armazenada como cópia redigida | Decidida |
| DEC-60 | S06 | Nome do portador do cartão corporativo não é importado | Decidida |
| DEC-61 | S06 | Assinatura `Ociosa` só com 100% das licenças avaliáveis ociosas e cobertura ≥ 80% | Decidida |
| DEC-62 | S06 | Requisição atendida por realocação ganha estado terminal próprio | Decidida |
| DEC-63 | S06 | `Ação sobre Assinatura` é entidade com máquina própria; execução humana e confirmada | Decidida |
| DEC-64 | S06 | `Assinatura` com estado composto e quatro regiões ortogonais | Decidida |
| DEC-65 | S06 | Fonte Mermaid versionada é o artefato oficial dos diagramas; imagens só no handoff | Decidida |
| DEC-66 | S07 | A API da Semana 07 cobre apenas as integrações de ERP (`/erp/*`) | Proposta |
| DEC-67 | S07 | Credenciais são só de escrita (`writeOnly`) e nunca retornam em respostas | Proposta |
| DEC-68 | S07 | Erros no formato RFC 9457 (`application/problem+json`) com `traceId` | Proposta |
| DEC-69 | S07 | Paginação por cursor (`limit` 1–200, padrão 50) | Proposta |
| DEC-70 | S07 | Valores monetários como texto decimal com moeda ISO 4217 | Proposta |
| DEC-71 | S07 | Sincronização assíncrona (`202`), janela máxima de 90 dias, modo `historical` à parte | Proposta |
| DEC-72 | S07 | Rótulos dos badges seguem a DEC-49: `Ociosa` e `Pendente de revisão` | Proposta |
| DEC-73 | S07 | Gráfico em HTML/CSS sem biblioteca; UI sem dependências | Proposta |
| DEC-74 | S07 | Tabela com prioridade de coluna, detalhe sob o item em < 1024 px e rolagem horizontal | Proposta |
| DEC-75 | S07 | Autenticação Bearer/JWT com papel e tenant nas claims; papéis em `x-papeis` | Proposta |
| DEC-76 | S08 | "Concluído" exige L1 a L9 sem lacuna nem desatualização e Hi-Fi aprovado contra os itens HF | Proposta |
| DEC-77 | S08 | REQ-04 e REQ-05 pertencem ao Bloco A; *tags* `@BlocoB` lidas como `@BlocoA` | Proposta |
| DEC-78 | S08 | Massa de dados canônica do Bloco A, com regras de derivação R1 a R8 | Proposta |
| DEC-79 | S08 | Indicador de redundância: 2+ fornecedores em categoria de redundância alta; média só com a mesma subcategoria | Proposta |
| DEC-80 | S08 | Limiares vigentes de E1 (0,88 / 0,75) e E2 (0,80) | Proposta |
| DEC-81 | S08 | "Pendente de revisão" do fornecedor é atributo, não estado | Proposta |
| DEC-82 | S08 | Consolidação reaproveita licenças ociosas; recomendações concorrentes viram plano combinado | Proposta |
| DEC-83 | S08 | O relatório mensal de desperdício é a SCR-05; a SCR-10 fica com exportação e LGPD | Proposta |
| DEC-84 | S08 | O relatório mensal é retrato imutável do mês fechado | Proposta |
| DEC-85 | S08 | `Conexão` fica `Ativa` ao validar a credencial; a primeira carga é acompanhada pela `Sincronizacao` | Proposta |
| DEC-86 | S08 | `NF ausente` é situação do `LancamentoCartao` | Proposta |
| DEC-87 | S09 | O exemplo de downgrade dentro da alçada (HF-28) usa o Adobe CC (RC-2), não o Figma | Proposta |
| DEC-88 | S09 | A SCR-10 não reproduz a tabela de desperdício nem o comparativo financeiro do M-07; esse conteúdo é da SCR-05 | Proposta |
| DEC-89 | S09 | Regras de derivação da massa canônica do Bloco B | Proposta |
| DEC-90 | S12 | Os registros usam as tarefas T1 a T8 do plano da Semana 11; as 5 tarefas do `estudo_caso1.md` são mapeadas a elas; os exemplos do `estudo_caso1.md` não são dados | Proposta |
| DEC-91 | S12 | O SUS é aplicado no pós-teste, como pede o `estudo_caso1.md`; a planilha guarda os itens brutos (1 a 5) e a nota é calculada na Semana 13 | Proposta |
| DEC-92 | S12 | Participantes identificados só por código `USR-nn`; a tabela código → pessoa fica fora da planilha e do repositório | Proposta |
| DEC-93 | S12 | Vídeos ficam fora do repositório, em armazenamento de acesso restrito; o repositório guarda só nome do arquivo e duração | Proposta |
| DEC-94 | S12 | Os horários das tarefas são registrados como timecode do vídeo (hh:mm:ss) | Proposta |
| DEC-95 | S12 | Intervenção = informação sobre a interface dada pelo facilitador, pedida ou não; reler o enunciado sem acrescentar nada não conta | Proposta |
| DEC-96 | S13 | Questionário SUS incompleto não entra na média e é relatado à parte; nota por persona só com 3 ou mais participantes | Proposta |
| DEC-97 | S13 | As faixas de leitura do SUS (68 e 50/70) são régua de leitura, e não critério de aceite | Proposta |
| DEC-98 | S13 | Prioridade do problema de UX = severidade × frequência; caso isolado de severidade alta é P2 | Proposta |
| DEC-99 | S13 | Tempo de tarefa só das tarefas com sucesso; tempos de tarefas diferentes não se somam | Proposta |
| DEC-100 | S13 | Onde um artefato das Semanas 02 a 07 divergir de uma `CU`, vale o original até a decisão correspondente ser ratificada | Proposta |


**Totais:** 100 decisões — 65 decididas (DEC-01 a DEC-65) e 35 propostas (DEC-66 a DEC-100),
aguardando ratificação (P-63).

---

## 3. Pendências (P-01 a P-64)

Legenda: **Resolvida** · **Proposta** (há resolução escrita, depende de ratificação ou de
aplicação) · **Parcial** · **Aberta**.

### 3.1. Resolvidas

| ID | Item | Como foi resolvida | Evidência |
|:---|:---|:---|:---|
| P-01 | Contraste de `green.600` e `amber.600` reprovado no WCAG AA | `green.700` e `amber.800` para texto; 20 pares verificados | DEC-47 (Semana 06) |
| P-02 | Política de rotação de chaves (CTL-04) | 6 chaves com rotação programada e por incidente | Semana 06, Entregável 2, Seção 17 |
| P-05 | UC-11 e UC-12 como casos de uso de 1ª classe | Mantidos, no pacote *Governança e Conformidade* | Semana 02 |
| P-09 | UC-13 e UC-14 | UC-13 mantido; UC-14 absorvido como fluxo alternativo do UC-03 (13 casos de uso) | Semana 03 |
| P-10 | Fornecedores sem API de logs e a RN02 | Hierarquia de evidências E1 → E4 e estado `Sem telemetria` | Semana 03 |
| P-14 | Licenças *floating* | Apuração por pool | DEC-56 |
| P-16 | Gráfico de ROI em tablet | Legenda de valores, eixo a cada 2 meses, tooltip por toque | DEC-50 |
| P-19 | Serviço de OCR interno ou externo | Serviço interno com ACL | DEC-46 |
| P-20 | Zoom e rotação do visualizador de PDF em tablet | Painéis empilhados, pinça, toque duplo, rotação por botão | DEC-51 |
| P-22 | Proporção mínima de licenças ociosas para a assinatura ficar `Ociosa` | 100% das avaliáveis e cobertura ≥ 80% | DEC-61 |
| P-37 | Design System da Semana 06 sobrescrito pelo commit `60dc076` | Arquivo restaurado | Commit `d200024` no histórico do arquivo |
| P-40 | Destinatário do botão `NOTIFICAR` | O Hi-Fi rotula o botão como *"Notificar Financeiro"* | Captura da SCR-02b (Semana 08) |
| P-50 | SCR-09 sem gatilho para o estado de edição (RI-17) | Botão *"Alterar valor"* ligado à SCR-09b | Semana 11, Entregável 1 |
| P-45 | Quadro do Figma com o nome "M-01" | Quadro renomeado para "M-06 - Aprovação com bloqueio da RN04" (`AJ-13`) | Semana 13, Entregável 2, Seção 6.1 |
| P-58 · P-59 | Fim das tarefas no protótipo; e-mail simulado da T6 | Estados de confirmação ligados e e-mail produzido (`AJ-01` a `AJ-08`) | Semana 13, Entregável 2, Seção 6.1 |
| P-67 | Semana 12 sem seção no `definicoes.md` | Seção acrescentada | `definicoes.md`, Semana 12 |
| P-65 | Termo de Aceite sem assinatura e sem versão do Figma indicada | Versão indicada (estado do arquivo em 19/11/2026) e aceite dos 5 integrantes registrado | Semana 14, Entregável 2, Seção 7 |
| P-62 | SCR-08 com 7 recomendações × 5 da massa canônica | Card alinhado à massa canônica: R$ 47.832,00/ano em 4 publicadas + 1 estimativa (`AJ-11`) | Semana 13, Entregável 2, Seção 6.1 |

### 3.2. Com resolução proposta ou parcial

| ID | Item | Situação | O que falta |
|:---|:---|:---:|:---|
| P-08 | Calibração dos limiares de OCR e catalogação | Parcial | Modelo analítico pronto (DEC-44); calibração com amostra real fica para a implementação |
| P-15 | Tabela de licenças com 4.000+ linhas | Parcial | Paginação e prioridade de coluna especificadas (CMP-08); medição nunca feita |
| P-25 | (a) M-04 dispensava aprovação acima do teto da RN01 · (b) preço do Figma divergente | Proposta | (a) O Hi-Fi trocou o exemplo para o Adobe CC dentro da alçada (DEC-87, HF-28) — conferir no aceite · (b) massa canônica com R$ 86,00 (DEC-78) |
| P-30 | Reconciliar a Semana 07 com a Semana 06 | Proposta | Recorte do Bloco A feito (RS-01 a RS-14); depende de aplicar CU-10 a CU-14 |
| P-33 | `x-papeis` × matriz de visibilidade | Proposta | Compatível no escopo `/erp/*`; usar os códigos de ENT-02 |
| P-35 | Formato do pseudônimo na UI | Proposta | A DEC-53 já define o formato; falta a equipe confirmar |
| P-39 | RNF-05 (50.000 transações/min) sem validação | Parcial | Arquitetura compatível com escala horizontal (Semana 11); dimensionamento em P-51 |
| P-42 | `NF ausente`: estado do lançamento ou sinal do motor | Proposta | DEC-86 |
| P-43 | RNF-03 (99,9%) sem rastro | Parcial | Redundância genérica no Diagrama de Implantação; dimensionamento em P-49 |
| P-46 | Exportação assíncrona acima de 50.000 linhas sem tela (CT-10.7) | Parcial | A SCR-10a traz o aviso em texto; não há estado de progresso nem notificação desenhados |

### 3.3. Abertas no handoff

| ID | Item | De quem depende |
|:---|:---|:---|
| P-03 | Plano de teste de isolamento multi-tenant (CTL-10) | Equipe e engenharia |
| P-04 | Anexo contratual de transferência internacional (CTL-14), inclusive para o provedor de OCR | Jurídico |
| P-06 | Cabeçalho da Fase 1 incompleto em `estudo_caso1.md` ("10/08/2026 a ") | Dono do documento — continua incompleto |
| P-07 · P-12 · P-18 | 23 parâmetros de regra e do motor pendentes de homologação | Cliente |
| P-11 · P-56 | Curvas emocionais das jornadas são hipóteses | Sessões de teste |
| P-13 | Contratação emergencial fora do fluxo de aprovação | Cliente |
| P-17 | Texto do resumo de conformidade (RI-03) | DPO |
| P-21 | Revisão jurídica das mensagens de regra (inclui MSG-16 a MSG-19) | Jurídico |
| P-23 · P-24 | Premissas `P1` a `P12` do modelo de validação; cotas reais dos provedores de e-mail | Implementação |
| P-26 · P-28 | Prazos de retenção (12 meses de DP-01/DP-02; 60 meses do `audit_log`) | DPO |
| P-27 · P-57 | Leitor de tela real e tablet físico | Sessões de teste e equipamento |
| P-29 | WCAG 1.4.10 (Reflow) abaixo de 768 px | Cliente |
| P-31 | Conferir o hex dos tokens com o Figma | D1 / D2 |
| P-32 | Medir RNF-06 e validar RNF-09 em navegador e tablet reais | Implementação |
| P-34 | Contato da API e endereços dos ambientes | Equipe |
| P-36 | Escopo da API além de `/erp/*` | Equipe — o dossiê traz um mapa de recursos como insumo (Seção 7.3) |
| P-38 | A revisão do dicionário numera pendências como P-30 e P-31, colidindo com a Semana 07 | Responsáveis pela Semana 06 — colisão ainda presente no arquivo |
| P-41 | Efeito da contestação de ociosidade por E4 | Cliente |
| P-44 | Subcategorias funcionais para categorias de redundância média | Cliente |
| P-47 · P-48 | Estados pós-ação sem tela; *"Aprovar"* habilitado e *"Reverter"* sem tela | D1 / D2 (`AJ-07`, `AJ-14`) |
| P-49 · P-51 | Dimensionamento de redundância (RNF-03) e vazão do Worker de Varredura (RNF-05) | Engenharia |
| P-52 a P-55 | Critérios de T1, T3 e T5; duração da sessão; número de participantes; consentimento e retenção dos vídeos | Equipe, orientador e DPO |
| P-60 | Realização das sessões de teste de usabilidade | Equipe e orientador |
| P-61 | Conferir na fonte as faixas de leitura do SUS | AR1 |
| P-63 | Ratificação das decisões DEC-66 a DEC-100 | Equipe |
| P-64 | Aplicar CU-01 e CU-02 | Responsáveis pela Semana 02 |
| P-66 | Aberta na Semana 14 (testes automatizados) | Ver README da Semana 14 |

**Totais (67 identificadores, P-01 a P-67):** 19 resolvidas · 10 com resolução proposta ou
parcial · 38 abertas.
