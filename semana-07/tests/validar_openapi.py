#!/usr/bin/env python3
"""Valida o Entregável 1: YAML, estrutura OpenAPI 3.1, referências, operationIds,
respostas de erro padronizadas, ausência de segredos em respostas e exemplos x schemas."""
import sys, pathlib, yaml
from jsonschema import Draft202012Validator
from openapi_spec_validator import validate

ARQ = pathlib.Path(__file__).resolve().parent.parent / "entregavel-01-openapi-integracoes-erp.yaml"
falhas, ok = [], []

def check(nome, cond, detalhe=""):
    (ok if cond else falhas).append(nome + (f" — {detalhe}" if detalhe and not cond else ""))

spec = yaml.safe_load(ARQ.read_text(encoding="utf-8"))
check("YAML carregado", isinstance(spec, dict))
try:
    validate(spec); check("Estrutura OpenAPI 3.1 válida (openapi-spec-validator)", True)
except Exception as e:
    check("Estrutura OpenAPI 3.1 válida (openapi-spec-validator)", False, str(e)[:300])

# 1) todos os $ref internos resolvem
def resolve(ref):
    node = spec
    for part in ref.lstrip("#/").split("/"):
        node = node[part]
    return node
def walk(n, path=""):
    if isinstance(n, dict):
        for k, v in n.items():
            if k == "$ref" and isinstance(v, str):
                try: resolve(v)
                except Exception: falhas.append(f"$ref quebrado: {v} em {path}")
            else: walk(v, f"{path}/{k}")
    elif isinstance(n, list):
        for i, v in enumerate(n): walk(v, f"{path}[{i}]")
n0 = len(falhas); walk(spec); check("Todos os $ref resolvem", len(falhas) == n0)

# 2) operationIds únicos e operações
ops = [(m, p, o) for p, item in spec["paths"].items() for m, o in item.items() if m in ("get","post","put","patch","delete")]
ids = [o["operationId"] for _, _, o in ops]
check("operationId único em todas as operações", len(ids) == len(set(ids)))
check(f"{len(ops)} operações declaradas", len(ops) > 0)

# 3) cada operação tem 401/403 (segurança global) e 500; GET/DELETE por id têm 404
for m, p, o in ops:
    r = o["responses"]
    check(f"{m.upper()} {p}: 401, 403 e 500 declarados", all(c in r for c in ("401","403","500")))
    if "{" in p: check(f"{m.upper()} {p}: 404 declarado", "404" in r)
    if m == "post": check(f"{m.upper()} {p}: x-papeis declarado", "x-papeis" in o)
    check(f"{m.upper()} {p}: x-papeis declarado", "x-papeis" in o)

# 4) erros usam application/problem+json
for nome, resp in spec["components"]["responses"].items():
    check(f"Resposta de erro {nome} usa problem+json", "application/problem+json" in resp["content"])

# 5) segredos: campos de credencial são writeOnly e Connection nunca os expõe
for nome in ("ServiceTokenCredentials","ApiKeyCredentials","ServiceLayerLoginCredentials"):
    props = spec["components"]["schemas"][nome]["properties"]
    segredos = [k for k in props if k in ("serviceToken","apiKey","password")]
    check(f"{nome}: campos secretos writeOnly", all(props[k].get("writeOnly") for k in segredos) and segredos)
conn_props = spec["components"]["schemas"]["Connection"]["properties"]
check("Connection não expõe 'credentials' nem segredos", not any(k in conn_props for k in ("credentials","serviceToken","apiKey","password")))
# nenhum schema de resposta de colaborador (LGPD-01)
texto = ARQ.read_text(encoding="utf-8").lower()
check("Nenhum campo cpf/colaborador nos schemas", "cpf:" not in texto and "colaboradorid" not in texto)

# 6) exemplos validam contra seus schemas
comp = {"components": spec["components"]}
def validar_exemplo(valor, schema, onde):
    s = dict(schema) if "$ref" not in schema else {"$ref": schema["$ref"]}
    s.update(comp)
    erros = list(Draft202012Validator(s).iter_errors(valor))
    check(f"Exemplo válido: {onde}", not erros, "; ".join(e.message[:120] for e in erros[:2]))
for p, item in spec["paths"].items():
    for m, o in item.items():
        if m not in ("get","post","put","patch","delete"): continue
        rb = o.get("requestBody")
        if rb:
            for nome, ex in rb["content"]["application/json"].get("examples", {}).items():
                validar_exemplo(ex["value"], rb["content"]["application/json"]["schema"], f"{m.upper()} {p} requisição/{nome}")
        for code, resp in o["responses"].items():
            if "$ref" in resp: resp = resolve(resp["$ref"])
            for ctype, media in resp.get("content", {}).items():
                for nome, ex in media.get("examples", {}).items():
                    if "$ref" in ex: ex = resolve(ex["$ref"])
                    validar_exemplo(ex["value"], media["schema"], f"{m.upper()} {p} {code}/{nome}")

# 7) coerência de domínio: status de conexão = PAT-03; conciliação = RN05 (DX)
check("ConnectionStatus = PAT-03", spec["components"]["schemas"]["ConnectionStatus"]["enum"] == ["conectando","ativa","token_expirado","erro"])
check("Conectores = FT-05/06/07", set(spec["components"]["schemas"]["ConnectorId"]["enum"]) == {"totvs_protheus","sap_business_one","omie","conta_azul"})
check("Janela máxima = 90 dias (DEC-41)", spec["components"]["schemas"]["SyncRequest"]["properties"]["windowDays"]["maximum"] == 90)


# 8) casos negativos: payloads inválidos DEVEM ser rejeitados pelo schema
def rejeita(nome, valor, schema_ref):
    s = {"$ref": schema_ref}; s.update(comp)
    check(f"Rejeita (esperado): {nome}", bool(list(Draft202012Validator(s).iter_errors(valor))))
CC = "#/components/schemas/ConnectionCreate"
base = {"displayName":"Teste ERP","accessMode":"read_only"}
rejeita("omie com service_token", {**base,"connector":"omie","credentials":{"kind":"service_token","serviceToken":"abcdefgh"}}, CC)
rejeita("protheus sem baseUrl", {**base,"connector":"totvs_protheus","credentials":{"kind":"service_token","serviceToken":"abcdefgh"}}, CC)
rejeita("accessMode read_write", {**base,"accessMode":"read_write","connector":"omie","credentials":{"kind":"api_key","apiKey":"abcdefgh"}}, CC)
rejeita("baseUrl http (sem TLS)", {**base,"connector":"totvs_protheus","baseUrl":"http://erp.x","credentials":{"kind":"service_token","serviceToken":"abcdefgh"}}, CC)
rejeita("janela de 120 dias", {"mode":"initial","windowDays":120}, "#/components/schemas/SyncRequest")
rejeita("Money com float", {"amount":"10.5","currency":"BRL"}, "#/components/schemas/Money")

print(f"OK: {len(ok)}  FALHAS: {len(falhas)}")
for f in falhas: print("  FALHA:", f)
sys.exit(1 if falhas else 0)
