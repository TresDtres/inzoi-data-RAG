---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools, captured 2026-10-21)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [uimod_scaffold]
wiki_refs: []
---

## uimod_scaffold

**Servidor:** inzoi-game | **Dominio:** authoring-ui

**Qué hace:** Crea un mod de UI o anade una app nueva a un mod UI existente bajo Documents/inZOI/Mods/InGame/. Modo A (mod nuevo) con mod_name: crea {mod_id}.uplugin, mod_manifest.json, ui/uimod_apps.json y los archivos de la app (uimod_manifest.json, index.html, app.js, window.js). Modo B (anadir app a un mod existente) con mod_id y app_name: crea solo la carpeta ui/{app_name}/ y regenera uimod_apps.json y el manifest.

**Descripción actual del MCP:** Create a UI mod or add a new app to an existing UI mod under the user InGame mods directory. TWO MODES: (A) NEW MOD: pass mod_name (and optionally app_name). mod_id is auto-generated as {mod_name}_{RANDOM6}. Creates {mod_id}.uplugin, mod_manifest.json, ui/uimod_apps.json, ui/{app_name}/uimod_manifest.json+index.html+app.js+window.js. (B) ADD APP TO EXISTING MOD: pass mod_id (must already exist under InGame/) and app_name. ONLY the new ui/{app_name}/ folder is created; the existing .uplugin / mod_manifest.json are kept intact (FriendlyName preserved). uimod_apps.json and mod_manifest.json NonAssets are auto-regenerated to include all apps. Use uimod.remount to hot-reload after. IMPORTANT: BEFORE calling this tool, decide whether the new UI belongs in an existing multi-app mod or in a brand-new mod, and ASK the user explicitly. Use uimod_list to enumerate existing parent mods first. Each standalone mod has to be installed/distributed separately, so packing related apps under one mod is preferable. Default trigger is 'game_mode' with the 'gameplay' alias (TopView/ShoulderView/ActiveMode/DiveView/Vehicle), so the mod is visible during normal play and auto-hides in Build / Character Studio / Photo / FreeCamera / Map / lobby menus. Template includes inZOI multi-language font, wheel/hover forwarding, close button.

**Cuándo usarla:** Cuando el usuario quiere crear un mod de UI en vivo o anadir una app a uno existente.

**Requisitos:** Decidir antes si la UI va en un mod nuevo o en uno multi-app existente y preguntarlo explicitamente al usuario; usar uimod_list para enumerar los mods padre (regla del volcado).

**Parámetros clave:**
- `mod_name` (string, opcional) — Mod display name (e.g. WeatherWidget). REQUIRED when creating a NEW mod. Used as FriendlyName; mod_id becomes {mod_name}_{RANDOM6}. Ignor...
- `mod_id` (string, opcional) — Existing mod identifier under InGame/. Pass this to ADD a new app to that mod instead of creating a new one. Get candidates via uimod_lis...
- `app_name` (string, opcional) — UI app name. Creates ui/{app_name}/ directory. Defaults to mod_name when creating a new mod; REQUIRED when mod_id is provided.
- `floating` (boolean, opcional) — Enable drag-to-move floating panel (default: false)
- `resizable` (boolean, opcional) — Enable resize handle (default: true, implies floating). Set false to disable.
- `minimizable` (boolean, opcional) — Enable minimize/restore toggle in title bar (default: false)
- `trigger_type` (string, opcional) — Trigger type written into uimod_manifest.json. Default 'game_mode'. Common values: game_mode | always_on | interaction_menu | command. Se...
- `mode` (array, opcional) — For trigger_type=game_mode: EB1GameMode names the UI is visible in (e.g. ['TopView','ShoulderView','Vehicle','Photo','FreeCamera','Map'])...

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en vivo (juego en marcha)

**Herramientas relacionadas:** `uimod_apps`, `uimod_list`

**Cadena de authoring:** Paso SCAFFOLD del pipeline de authoring UI en vivo: crea la estructura inicial del mod; despues se edita con uimod_write_file, se revisa con uimod_read_file y se recarga en el juego con uimod_remount/uimod_mount.
