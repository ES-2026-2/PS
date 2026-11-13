# Pasta de vídeos das sessões (Semana 12)

**Esta pasta não guarda vídeos.** Ela existe para documentar onde eles ficam e como se chamam.

## Por que os vídeos não entram no repositório

A gravação de uma sessão contém a **voz e a tela de uma pessoa real**. São dados pessoais que
não constam no inventário `DP-01` a `DP-10` e que dependem de consentimento, prazo de retenção
e controle de acesso (P-55). Um repositório versionado guarda o histórico para sempre: um vídeo
que for enviado por engano continua acessível mesmo depois de apagado. Por isso os vídeos ficam
em armazenamento de acesso restrito à equipe (DEC-93), e o repositório guarda só o nome do arquivo
e a duração (aba `Participantes` do Entregável 1).

## Convenção de nomes

```
USR-nn_P-0x_AAAA-MM-DD.mp4
```

`USR-nn` é o código do participante, `P-0x` é a persona e a data é a da sessão. É um formato, e
não um exemplo de arquivo real.

## Onde ficam

| Item | Valor |
|:---|:---|
| Local de armazenamento | **A definir pela equipe** (P-55): pasta com acesso restrito aos integrantes do projeto |
| Quem acessa | **A definir** (P-55) |
| Prazo de retenção | **A definir** (P-55) |

## Proteção contra envio acidental

Sugestão: acrescentar ao `.gitignore` da raiz do repositório as linhas abaixo, para o Git
ignorar qualquer arquivo colocado nesta pasta, exceto este README:

```
semana-12/videos/*
!semana-12/videos/README.md
```
