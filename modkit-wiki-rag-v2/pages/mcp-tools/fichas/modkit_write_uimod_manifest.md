---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_write_uimod_manifest]
wiki_refs: [pages/modkit/project/uimod/02-files.chunks/part-002.md]
---

## modkit_write_uimod_manifest

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Reemplaza el uimod_manifest.json de una app, validando el esquema antes de escribir (name requerido; entry; display.width/height/transparent/input_policy; triggers).

**Descripción actual del MCP:** Replace an app's `uimod_manifest.json` after schema validation. Read it first to change individual fields. `display.input_policy`: `overlay` for anything with buttons/drag/sliders/scroll; `modal` for blocking dialogs; `passthrough` only for display-only HUDs. Trigger `type` and its required field: `always_on` (none); `keybind`: `key` (+ optional `modifiers`); `command`: `command`; `game_mode`: `mode`; `interaction_menu`: `label_key`; `game_event`/`ui_event`: `event`; `ui_injection`: `event`, advanced, avoid unless the slot contract is known; `manual`/`auto`: reserved. Choose: passive HUD -> `always_on`; player-opened panel -> `keybind` or `command`; context-only -> `game_mode`; known event -> `game_event`/`ui_event`. In-panel buttons are DOM `click` handlers in `app.js`, not triggers. Keys outside the schema (e.g. `version`, trigger `target`) are preserved.

**Cuándo usarla:** Para reescribir el manifest de la app.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App name
- `manifest` (object, obligatorio) — Full manifest; replaces the file.
- `defer_refresh` (boolean, opcional) — Skip the preview reload in a multi-file batch; call modkit_refresh_uimod_workspace once after.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
