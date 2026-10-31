---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_start_uimod_preview]
wiki_refs: []
---

## modkit_start_uimod_preview

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Publica el mod UI en el juego en ejecucion para previsualizarlo. El volcado exige confirmar antes de previsualizar, nunca auto-previsualizar: no forma parte del flujo crear/editar/guardar.

**Descripción actual del MCP:** ⚠️ Never auto-preview. Publishes the UI mod into the running game as a temporary preview; not part of create/edit/save. Call only when the user's request asked for it ("test in game", "preview", "mount", "apply", "push to game"), or when, after `modkit_save`, you asked once ("Want me to preview this in the running game now?") and the user confirmed. Otherwise stop; the workspace tab already shows a live preview. At most once per turn without fresh confirmation. Copies `ui/` to `Documents/inZOI/Mods/ModKitPreview/{plugin}/ui/` (installed mods untouched) and asks the game to remount; removed when the workspace closes. If the game is not running, files are still copied and `remount_accepted` is false; it loads on next launch. `remount_note` carries any game error.

**Cuándo usarla:** Solo cuando el usuario pide probar la app en el juego.

**Requisitos:** modkit_save previo y confirmacion explicita del usuario (regla del volcado); el juego en ejecucion.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_save`
