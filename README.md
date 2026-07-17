# ps-es-20262-g1
Repositório definido para a manutenção do controle de versões do projeto desenvolvido pelos alunos do grupo 1, da disciplina Projeto de Software, no semestre 2026/2.

## 🦾 IA de Ação & Agentes Autônomos (B2B / Produtividade)

### 1. Auditor e Otimizador de Assinaturas SaaS Corporativas

* **A oportunidade:** Com a explosão de ferramentas de IA, as empresas estão gastando milhares de dólares em assinaturas redundantes (funcionários assinando ferramentas diferentes para fazer a mesma coisa).
* **O app:** Um software que se conecta via API (com permissão) às faturas da empresa ou contas de e-mail para mapear o uso real de softwares. Ele não apenas lista os gastos, mas usa IA para sugerir consolidações (ex: *"Você tem 5 licenças do Midjourney e 3 do Canva Pro sem uso regular, mude para o plano X e economize $400"*).

#### Requisitos Funcionais (RF)

1. O sistema deve permitir a integração via API com os principais ERPs e sistemas de faturamento da empresa.
2. O sistema deve ler e extrair dados de notas fiscais e recibos de SaaS anexados ao e-mail corporativo.
3. O sistema deve catalogar automaticamente as ferramentas encontradas por categoria (ex: Design, CRM, DevTools).
4. O sistema deve identificar licenças duplicadas ou sem uso ativo por parte dos colaboradores através de cruzamento de logs.
5. O sistema deve emitir um relatório mensal de "desperdício financeiro" com sugestões de planos alternativos.
6. O sistema deve disparar alertas quando uma assinatura estiver prestes a ser renovada automaticamente.
7. O sistema deve permitir que o administrador aprove o cancelamento ou downgrade de uma assinatura direto pela interface.
8. O sistema deve possuir um dashboard financeiro mostrando o ROI (Retorno sobre o Investimento) histórico gerado pelo app.
9. O sistema deve permitir a criação de fluxos de aprovação para novas contratações de softwares.
10. O sistema deve exportar relatórios de auditoria nos formatos PDF e XLSX.

#### Requisitos Não Funcionais (RNF)

1. **Segurança:** O sistema deve criptografar todos os dados de faturamento e chaves de API em repouso usando AES-256.
2. **Conformidade:** O sistema deve estar em total conformidade com a LGPD e GDPR devido ao tratamento de dados de colaboradores.
3. **Disponibilidade:** O sistema deve garantir um uptime (tempo de atividade) de 99,9%.
4. **Desempenho:** A varredura inicial de e-mails e faturas não deve levar mais do que 5 minutos por conta conectada.
5. **Escalabilidade:** O banco de dados deve suportar a análise de até 50.000 transações financeiras por minuto por cliente corporativo.
6. **Usabilidade:** O dashboard principal deve carregar em menos de 2 segundos em conexões padrão de internet.
7. **Privacidade:** O sistema não deve armazenar o corpo de e-mails que não contenham anexos ou palavras-chave de faturamento.
8. **Interoperabilidade:** As APIs do sistema devem seguir o padrão RESTful com documentação Swagger/OpenAPI.
9. **Portabilidade:** A interface web deve ser totalmente responsiva, funcionando perfeitamente em desktops e tablets.
10. **Confiabilidade:** O índice de falsos positivos na identificação de ferramentas SaaS não deve passar de 2%.

#### Regras de Negócio (RN)

1. **RN01 (Aprovação de Gastos):** Nenhuma assinatura corporativa acima de R$ 500/mês pode ser contratada sem a aprovação formal de pelo menos um administrador ou gestor financeiro na plataforma.
2. **RN02 (Gatilho de Inatividade):** Uma licença de software será classificada como "ociosa" e elegível para cancelamento/downgrade caso o colaborador não registre nenhum log de atividade nela pelos últimos 30 dias consecutivos.
3. **RN03 (Prevenção de Renovação):** O alerta de renovação automática deve ser disparado obrigatoriamente 15 dias antes da data de cobrança para assinaturas mensais e 45 dias antes para contratos anuais.
4. **RN04 (Teto de Desperdício):** O sistema deve bloquear o envio de novos convites de licenças em softwares específicos se o dashboard apontar que a empresa já possui licenças ociosas idênticas disponíveis em seu inventário.
5. **RN05 (Auditoria de NF):** Se os dados extraídos de uma nota fiscal de SaaS via OCR não baterem com o valor cobrado no cartão corporativo integrado (variação maior que 1%), o lançamento deve ser marcado como "Divergente" e o financeiro deve ser notificado.

#### LGPD

1. **LGPD-01 (Minimização e Descarte):** O sistema deve aplicar técnicas de anonimização ou pseudonimização nos nomes e CPFs de colaboradores contidos nas notas fiscais e relatórios corporativos, mantendo visíveis apenas o setor e o custo da licença, exceto para o administrador de RH indicado.
2. **LGPD-02 (Direito de Acesso e Portabilidade):** O software deve disponibilizar um canal automatizado para que qualquer colaborador da empresa cliente possa consultar quais dados de utilização de software foram coletados em seu nome e exportar esse relatório em formato interoperável.
