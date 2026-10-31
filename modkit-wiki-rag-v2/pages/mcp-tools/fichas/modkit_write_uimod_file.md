---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_write_uimod_file]
wiki_refs: []
---

## modkit_write_uimod_file

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Crea o sobrescribe un archivo de texto en la carpeta de la app; crea subdirectorios intermedios automaticamente.

**Descripción actual del MCP:** Create or overwrite one text file in an app folder (sub-dirs auto-created). Extensions: .html .htm .css .js .mjs .json .txt .md .svg; max 2 MiB. For the manifest use `modkit_write_uimod_manifest`. Rules: - `index.html` must load, in order: `coui://inzoi/cohtml.js`, `coui://inzoi/mod/inzoi-sdk.js`, `window.js`, `app.js`. Without `cohtml.js` the view stays Loading and gets no input. - Never set `pointer-events: none` on `html`/`body`. - In `app.js`, manifest triggers arrive via `inzoi.trigger.onActivated(...)`; in-page buttons use DOM `click`. - Look up every `inzoi.cli.execute(...)` id with `modkit_list_uimod_cli_commands` first; never invent ids. - If the workspace editor has unsaved edits to this file, they are kept over your write; tell the user to save or discard.

**Cuándo usarla:** Para escribir HTML, JS, CSS y demas archivos de la app.

**Requisitos:** Extensiones permitidas: .html, .htm, .css, .js, .mjs, .json, .txt, .md, .svg; limite de 2 MiB por llamada; se escribe UTF-8 sin BOM (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App name
- `path` (string, obligatorio) — Path relative to ui/{app}/
- `content` (string, opcional) — File contents (empty allowed)
- `defer_refresh` (boolean, opcional) — Skip the preview reload. Set true on every write of a multi-file batch, then call modkit_refresh_uimod_workspace once.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_list_uimod_cli_commands`, `modkit_write_uimod_manifest`
