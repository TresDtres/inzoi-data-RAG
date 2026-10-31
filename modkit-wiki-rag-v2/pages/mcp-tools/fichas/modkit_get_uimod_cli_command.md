---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_get_uimod_cli_command]
wiki_refs: []
---

## modkit_get_uimod_cli_command

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Devuelve la informacion detallada de un comando CLI concreto para apps UI, incluido el snippet usage_js, forma canonica para pegar en app.js.

**Descripción actual del MCP:** Full record for one CLI command: `params` (typed; `enum` lists allowed values), `usage_js` (paste this form into `app.js`), `returns`, `example_result`. Alias matches set `matched_alias`. Check here before writing any `inzoi.cli.execute` call.

**Cuándo usarla:** Antes de escribir o modificar inzoi.cli.execute(...) con un comando concreto.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `command` (string, obligatorio) — Command id (e.g. `emotion.set`) or alias

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Misma regla del volcado: ids fuera de cli_catalog.json fallan en runtime.

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
