---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: validación
tools: [modkit_validate_lua_script]
wiki_refs: []
---

## modkit_validate_lua_script

**Servidor:** inzoi-modkit | **Dominio:** validación

**Qué hace:** Ejecuta el analisis BlueLuaKit (chequeo de sintaxis y diagnostico) sobre los scripts Lua; sin path valida todo workspace/lua/, con path un solo archivo. Devuelve {ok, errors, warnings, diagnostics:[...]}.

**Descripción actual del MCP:** Run BlueLuaKit analysis (syntax, API, types, C++ method calls). Check `ok`, `errors`, and `diagnostics` `{severity, rule, message, file?, line?}`.

**Cuándo usarla:** Tras escribir scripts y antes de previsualizar o empaquetar.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `path` (string, opcional) — One file, relative to workspace/lua/; omit for the whole workspace

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar y empaquetar el mod

**Herramientas relacionadas:** ninguna mencionada en el volcado
