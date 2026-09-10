# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is **not a software codebase** — there is no source code, build system, linter, or test suite. It is the documentation trail for a fictional B2B SaaS product ("Auditor e Otimizador de Assinaturas SaaS Corporativas") produced as coursework for the *Projeto de Software* discipline (semester 2026/2, group 1, `ps-es-20262-g1`). All content is Portuguese-language Markdown: requirements engineering, DDD/UML modeling, UX research, and wireframe/design deliverables produced week by week over a 14-week schedule.

There are no commands to build, lint, or test. "Working" on this repo means reading and writing Markdown deliverables that must stay internally consistent with each other (see Traceability below).

## Repository structure

- [`README.md`](README.md) — project charter: the product pitch, the full RF/RNF/RN/LGPD requirement catalog, the 14-week team schedule (2 Analistas de Requisitos "AR1/AR2" + 2 Designers "D1/D2"), and the master traceability matrix (REQ → RN/LGPD → User Story → Figma screen).
- [`estudo_caso1.md`](estudo_caso1.md) — a near-duplicate/working copy of the case-study brief and schedule from README.md (single source of truth is README.md; check both if reconciling requirement text).
- [`diagramasUML.md`](diagramasUML.md) — the authoritative matrix mapping *which UML diagram type is due in which week* (Use Case → Activity → Sequence → State Machine → Class → Package/Component → Deployment). Every week's UML deliverable must match what this matrix schedules for that week/phase.
- [`template_modelo_dominio.md`](template_modelo_dominio.md) — reusable DDD documentation template (Ubiquitous Language, Bounded Contexts, Entities/VOs/Aggregates, Domain Events, Business Rules, UI traceability). New domain-model deliverables should be instantiated from this template's structure, not invented from scratch.
- `semana-01/` … `semana-05/` (more will be added through `semana-14/`) — one folder per iteration, each containing:
  - `README.md` — the week's status report (see standard shape below).
  - `entregavel-NN-<kebab-case-slug>.md` — the actual deliverable documents for that week, numbered per the table in that week's README.
  - occasional `anexo-*.md` — supplementary/annex material not tracked as a numbered deliverable.

## Conventions that must be preserved

**File naming:** `semana-NN/entregavel-NN-<descriptive-kebab-case-slug>.md`, zero-padded two-digit numbers, slug in Portuguese matching the deliverable title.

**Weekly `README.md` shape** — new weeks should follow the same section order as prior weeks:
1. Header with período (date range), fase, links back to `estudo_caso1.md`, `diagramasUML.md`, and all previous `semana-*` READMEs.
2. `Atividades da Equipe` — table of planned activity → status (✅) → which deliverable it lives in.
3. `Entregáveis` — numbered table linking to each `entregavel-*.md`, with responsible party (AR1/AR2/D1/D2), plus a callout naming which UML diagram (per `diagramasUML.md`) is formally due vs. drafted this week.
4. Findings/decisions/numbers/pending-items sections (see ID registries below).
5. `Entradas para a Semana N+1` — explicit handoff list of what feeds the next iteration.

**Global, never-reset ID registries** — these counters are cumulative across the *entire* project, not per week. When adding a new week, continue numbering from the highest existing value; do not restart at 1:
- `DEC-XX` — project decisions log (grep all `semana-*/README.md` for the current max before assigning new ones).
- `P-XX` — pending/open items (carried forward each week as "Pendências Anteriores Resolvidas" vs. "Pendências Abertas Nesta Iteração" until closed).
- `RV-XX` — validation/risk register entries.
- Other recurring per-domain IDs are scoped to their artifact rather than global: `REQ-XX`/`RN-XX`/`RNF-XX`/`LGPD-XX` (from README.md's requirement catalog), `US-XX` (user stories), `SCR-XX` (Figma screens), `M-XX` (wireframes), `SEQ-XX` (sequence diagrams), `CTL-XX` (compliance controls), `CA-XX` (architecture conditions), `IN-XX` (instrumentation requirements). Reuse existing IDs when referencing the same concept across deliverables rather than minting duplicates.

**Traceability discipline:** every requirement (REQ-01…REQ-10), business rule (RN01…RN05), and LGPD clause (LGPD-01, LGPD-02) defined in `README.md` is expected to be traceable forward into BDD specs, UX flows, domain model elements, and UI screens in the weekly deliverables. When editing or adding a deliverable, check the master traceability matrix in `README.md` and the relevant week's README for the IDs it must reference, and keep cross-references (`RNxx`, `RNFxx`, `SCR-xx`, etc.) consistent with how they're spelled elsewhere in the repo.

**Team roles referenced throughout:** AR1, AR2 (Analistas de Requisitos), D1, D2 (Designers/UX). Deliverables are attributed to these roles, not individual names.
