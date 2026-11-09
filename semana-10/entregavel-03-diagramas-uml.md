# Entregável 3 — Diagramas UML (Verificação da Máquina `LancamentoCartao`)

**Projeto:** Auditor e Otimizador de Assinaturas SaaS Corporativas
**Iteração:** Semana 10 (12/10/2026 – 18/10/2026)
**Responsável:** AR1 / AR2 (Analistas de Requisitos)
**Versão:** 1.0.0

---

## 1. O que se aplica a esta iteração

Mesma situação da Semana 09: o próximo diagrama agendado em
[`diagramasUML.md`](../diagramasUML.md) é o **de Implantação**, com entrega formal na
**Semana 11**. Nenhum diagrama novo é devido aqui.

**Por que este documento existe mesmo assim.** O Entregável 1 desta semana (HF-47) construiu a
Hi-Fi de uma máquina que nunca tinha sido verificada: `LancamentoCartao` (Aguardando
pareamento → Pareado → NF ausente), proposta pela **DEC-86** na Semana 08 mas, até aqui, sem
nenhuma checagem de transição × interface — a máquina existia só na decisão, não no catálogo
GI-xx. Este documento fecha essa lacuna específica.

---

## 2. Transições Disparadas por Pessoa (GI-xx)

Numeração contínua a partir do GI-26 (última usada na Semana 09).

| ID | Máquina | Transição | Controle esperado | Onde está | Situação |
|:---|:---|:---|:---|:---|:---:|
| GI-27 | `LancamentoCartao` | `NFAusente` → `AguardandoPareamento` (nova tentativa) | *"Solicitar NF ao fornecedor"* | Exceção OCR, detalhe (HF-47) | ✓ |
| GI-28 | `LancamentoCartao` | `AguardandoPareamento` → `Pareado` (manual) | *"Parear manualmente com outra NF"* | Exceção OCR, detalhe (HF-47) | ✓ |

**Resultado: dos 2 gatilhos humanos da máquina proposta pela DEC-86, os 2 têm controle
desenhado.** Diferente do GI-26 da Semana 09, aqui não houve lacuna: a máquina nasceu junto
com a tela que a usa, não antes dela.

---

## 3. Pendências ainda abertas (herdadas, não novas)

Reafirma o que a Semana 09 já tinha registrado — nada aqui foi fechado nesta iteração porque
não é o escopo desta semana (estados de interface, não modelagem de domínio):

| ID | Item | Situação |
|:---|:---|:---:|
| P-47 | `Licença`/`Assinatura` sem exemplo visual de `EmDowngrade`/`EmCancelamento`/`Removida`/`Cancelada` | Ainda aberta |
| P-48 | GI-20 (`Aprovar` habilitado) e GI-24 (`Reverter`) sem tela própria | Ainda aberta |

---

## 4. Rastreabilidade deste Documento

| Este documento é consumido por | Entregável |
|:---|:---|
| Diagrama de Implantação | Semana 11, Entregável 3 |
| Protótipo Navegável Unificado (liga GI-27/28 ao fluxo real) | Semana 11, Entregável 1 |
