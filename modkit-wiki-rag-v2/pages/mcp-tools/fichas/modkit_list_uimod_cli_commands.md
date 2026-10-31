---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_list_uimod_cli_commands]
wiki_refs: []
---

## modkit_list_uimod_cli_commands

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Lista los comandos CLI disponibles para apps UI. El volcado exige llamarla (o a modkit_get_uimod_cli_command) antes de escribir o modificar cualquier llamada inzoi.cli.execute(...) en app.js, para confirmar id, parametros requeridos y forma del resultado.

**Descripción actual del MCP:** List game commands callable from `app.js` via `inzoi.cli.execute(...)` (`cli_catalog.json`). `matched` is the total before `limit`. ⚠️ Before writing or editing any `inzoi.cli.execute` call, confirm the id, required params and result shape here or with `modkit_get_uimod_cli_command`; re-check on edits instead of trusting memory. Ids not in the catalog fail at runtime with `unknown command`.

**Cuándo usarla:** Antes de escribir inzoi.cli.execute en el codigo de una app.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `category` (string, opcional) — Exact category, case-insensitive (see modkit_list_uimod_cli_categories)
- `query` (string, opcional) — Ranked case-insensitive search over id, display, aliases, param names/enum values, description
- `limit` (integer, opcional)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado advierte: nunca inventar ids de comando; lo que no este en cli_catalog.json falla en runtime.

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_get_uimod_cli_command`
