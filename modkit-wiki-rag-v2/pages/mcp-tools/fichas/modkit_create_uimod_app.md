---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_create_uimod_app]
wiki_refs: []
---

## modkit_create_uimod_app

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Crea una app UI Mod nueva dentro de un workspace UIMod, generando 4 archivos en disco bajo {Plugin}/ui/{app_name}/: uimod_manifest.json, index.html, window.js y app.js. El argumento template (blank, hud_passthrough, panel_keybind, modal_dialog) elige la plantilla de manifest.

**Descripción actual del MCP:** Create a UI Mod app: scaffolds `uimod_manifest.json`, `index.html` (CSS goes in its `<style>` block), `window.js`, `app.js` under `{Plugin}/ui/{app_name}/` and registers it in `uimod_apps.json` (first app becomes default). Fails if the app exists. `index.html` already loads the 4 required scripts in order; keep them. Leave `window.js` as scaffolded.

**Cuándo usarla:** Para empezar una app UI desde cero.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app_name` (string, obligatorio) — App folder name and id, [A-Za-z0-9_-]+
- `template` (string, opcional) — Sets manifest input_policy/trigger and the app.js body: - blank: overlay + always_on, empty. - hud_passthrough: passthrough + always_on H...

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `uimod_apps`
