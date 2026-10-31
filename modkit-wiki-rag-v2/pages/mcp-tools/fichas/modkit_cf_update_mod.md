---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_update_mod]
wiki_refs: []
---

## modkit_cf_update_mod

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Actualiza los metadatos de un mod registrado: nombre, resumen, cuerpo, categorias, toggle experimental y miniatura.

**Descripción actual del MCP:** Update a registered CurseForge mod's metadata/thumbnail. Auth required; own mods only. ⚠️ thumbnail_path is required on every call (cfcore sends multipart PUT; without a file CF returns 500). If the thumbnail is unchanged, ask the user for the path of the same image; never pick or generate one. No path → do not call. Omitted fields keep current values, except: - description: replaced with summary. To keep the body, read it with modkit_cf_get_mod_description and pass it back. - is_experimental: reset to false. Mod info does not report it, so ask the user whether the mod is experimental and pass it. Send only fields and values the user named; change categories only on explicit request. A thumbnail-only call is valid. Renaming keeps slug, mod_id and files. Returns the updated mod. UI Mod (plugin set and contains ui/uimod_apps.json): categories forced to 'Overlay UI' / 'General'; see forced_uimod_categories.

**Cuándo usarla:** Para editar la ficha publica de un mod ya registrado.

**Requisitos:** Autenticacion; thumbnail_path es obligatorio en cada llamada (limitacion de cfcore documentada en el volcado).

**Parámetros clave:**
- `mod_id` (integer, obligatorio) — Mod id to edit, confirmed by the user.
- `thumbnail_path` (string, obligatorio) — Absolute 1:1 PNG/JPG (>=400×400) path the user gave. Re-pass the same file if unchanged.
- `name` (string, opcional) — New display name. Slug unchanged.
- `summary` (string, opcional) — New one-line summary.
- `description` (string, opcional) — New body (markdown/text).
- `class_id` (integer, opcional) — New class id from modkit_cf_get_categories. Ignored for UI Mods.
- `primary_category_id` (integer, opcional) — New primary category id. Ignored for UI Mods.
- `game_category_ids` (array, opcional) — New subcategory ids; replaces the full list. Ignored for UI Mods.
- `is_experimental` (boolean, opcional) — Experimental flag.
- `plugin` (string, opcional) — Local .uplugin name. Set for UI Mods to force their categories; omit for non-UI mods.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Sin la parte 'file' del multipart, CurseForge devuelve 500 Internal Server Error (limitacion documentada en el volcado).

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_get_mod_description`, `uimod_apps`
