#!/usr/bin/env python3
"""Verifica links relativos dos .md da semana-07. Links internos devem existir em disco.
Links para a raiz do repositório (../) são conferidos contra a lista de arquivos vistos no repositório."""
import re, sys, pathlib
raiz = pathlib.Path(__file__).resolve().parent.parent
FORA = {"estudo_caso1.md", "diagramasUML.md", "template_modelo_dominio.md",
        *(f"semana-0{i}/" for i in range(1, 7)), *(f"semana-0{i}/README.md" for i in range(1, 7))}
falhas, total = [], 0
for md in raiz.glob("*.md"):
    for alvo in re.findall(r"\]\(([^)#\s]+)(?:#[^)]*)?\)", md.read_text(encoding="utf-8")):
        if re.match(r"^(https?:|mailto:)", alvo): continue
        total += 1
        if alvo.startswith("../"):
            if alvo[3:] not in FORA: falhas.append(f"{md.name}: {alvo} (fora da pasta e não listado)")
        elif not (raiz / alvo).exists(): falhas.append(f"{md.name}: {alvo} não existe")
print(f"{total} links verificados, {len(falhas)} com problema")
for f in falhas: print("  FALHA:", f)
sys.exit(1 if falhas else 0)
