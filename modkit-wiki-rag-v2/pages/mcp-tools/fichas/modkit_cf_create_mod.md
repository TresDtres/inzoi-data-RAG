---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_create_mod]
wiki_refs: []
---

## modkit_cf_create_mod

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Registra un mod nuevo en CurseForge y devuelve su informacion, especialmente el id que se pasa despues a modkit_cf_upload_mod_file / modkit_cf_update_uplugin.

**Descripción actual del MCP:** Register a new mod on CurseForge. Auth required; 60s timeout. Returns the mod (id, links.website_url, ...). Does not write .uplugin. Flow: modkit_cf_status (unauthenticated → modkit_cf_send_code → modkit_cf_verify_code) → modkit_cf_list_my_mods (avoid duplicate names) → modkit_cf_get_categories with the user (skip for UI Mods) → this tool → modkit_cf_update_uplugin with the returned id. UI Mod (plugin contains ui/uimod_apps.json): class/category are always forced to 'Overlay UI' / 'General', the only valid UI Mod classification; passed category args are ignored and forced_uimod_categories in the response shows the override. plugin + thumbnail_path suffice (pass summary too if the .uplugin has no Description). See modkit://workspace-docs/curseforge_rules.

**Cuándo usarla:** Cuando el usuario publica por primera vez un proyecto que aun no esta registrado en CurseForge.

**Requisitos:** Estar autenticado; confirmar antes con modkit_cf_list_my_mods que el mod no existe; elegir categorias con modkit_cf_get_categories.

**Parámetros clave:**
- `plugin` (string, opcional) — Local .uplugin name from modkit_list_projects, chosen by the user. Auto-fills name/summary/description and enables UI Mod classification.
- `name` (string, opcional) — Mod name on CF. Required without plugin; explicit value overrides plugin.
- `summary` (string, opcional) — Short description. Required without plugin; default .uplugin Description.
- `description` (string, opcional) — Long body. Default = summary.
- `class_id` (integer, opcional) — Required for non-UI mods; from modkit_cf_get_categories(classes_only=true), chosen by the user. Ignored for UI Mods.
- `primary_category_id` (integer, opcional) — Required for non-UI mods; from modkit_cf_get_categories(class_id=...), chosen by the user. Ignored for UI Mods.
- `game_category_ids` (array, opcional) — Extra subcategories. Ignored for UI Mods.
- `is_experimental` (boolean, opcional) — Mark as experimental.
- `thumbnail_path` (string, opcional) — ⚠️ Absolute PNG/JPG path the user gave explicitly; if none, ask before calling. Never pick a project image or generate a placeholder. CF ...

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_get_categories`, `modkit_cf_list_my_mods`, `modkit_cf_send_code`, `modkit_cf_status`, `modkit_cf_update_uplugin`, `modkit_cf_verify_code`, `uimod_apps`
