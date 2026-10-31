---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_add_workspace]
wiki_refs: []
---

## modkit_add_workspace

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Anade un workspace al proyecto y lo abre automaticamente. Devuelve item_id, modo y, segun book_class, el bloque data_asset o las culturas del workspace Language.

**Descripción actual del MCP:** Create a workspace and open it. Confirm name, book, mode and (Duplicate only) copy_assets with the user first. Never repeat a successful call. Returns item_id. Per book_class: - BUILD/CAZ/VEHICLE/SOUND/DA/Talk: `book` required. Talk has one book: use mode='Duplicate'. - CHARACTER_ANIMATION: `category` required, else rejected. - VEHICLE Duplicate with copy_assets=false: every mesh slot becomes None and the parts are missing in game. Tell the user this when asking about copy_assets. - DA: response has a `data_asset` block (class_path/values/delta); do not call get_data_asset_values after. - Language: source_culture + target_culture instead of book; book/mode/category/copy_assets/base_id/dlc ignored. Tell the user about `warning` (target_enabled_in_game=false: not shown in game) and `conflicts` (other plugins using the same target). See ws_language. - UIMod / Script: one per project; book/mode/category/copy_assets/base_id/dlc ignored. Script is optional: modkit_create_lua_script auto-creates it. reused=true (Language with an existing target_culture in this plugin, UIMod, Script): the existing workspace was returned; tell the user.

**Cuándo usarla:** Cuando el proyecto necesita un workspace nuevo (BUILD, CAZ, Language, DA, Talk, VEHICLE, UIMod, Lua...).

**Requisitos:** Elegir antes book/book_class/category (y culturas si es Language) con las herramientas list_*.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `book` (string, opcional) — Base item id from modkit_list_books
- `name` (string, opcional) — Workspace name; ask the user. Default: book id (Language '<SRC>_to_<TGT>', UIMod 'UIMod', Script 'ScriptMod')
- `mode` (string, opcional) — Override patches the existing item; Duplicate creates a new id
- `book_class` (string, opcional) — BUILD, CAZ, VEHICLE, Talk, CHARACTER_ANIMATION, SOUND, DA, Language, UIMod or Script. A Character_* value normalizes to CHARACTER_ANIMATI...
- `category` (string, opcional) — Category key; disambiguates a book id that exists in several categories. CHARACTER_ANIMATION: required (Character_Interaction|Character_L...
- `source_culture` (string, opcional) — Language only, required. modkit_list_cultures `name`, verbatim. Ask the user; never assume 'en'.
- `target_culture` (string, opcional) — Language only, required. modkit_list_cultures `name`, verbatim.
- `copy_assets` (boolean, opcional) — Duplicate only: also duplicate source assets
- `base_id` (string, opcional) — Duplicate only: new id prefix (default: book id); a random suffix is appended
- `dlc` (string, opcional) — DLC code
- `open` (boolean, opcional) — false = create without opening

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** `modkit_create_lua_script`
