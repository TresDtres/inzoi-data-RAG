---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_update_uplugin]
wiki_refs: []
---

## modkit_cf_update_uplugin

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Escribe los identificadores de CurseForge (CfUgcId) y la URL/descripcion de marketplace en el .uplugin local, con el mismo formato que el widget ShareUGC del editor.

**Descripción actual del MCP:** Write CfUgcId (plus optional marketplace URL / description) into the local .uplugin so modkit_cf_publish can resolve the mod. Call right after modkit_cf_create_mod, then publish. No auth (local disk). ⚠️ plugin and mod_id must come from the user or the latest create_mod response; never pair them arbitrarily. Existing values are overwritten, and a wrong mod_id sends later uploads to the wrong mod.

**Cuándo usarla:** Justo despues de modkit_cf_create_mod, para que las siguientes subidas se adjunten al mismo mod.

**Requisitos:** Haber obtenido el id del mod con modkit_cf_create_mod.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Local .uplugin name without extension, from modkit_list_projects.
- `mod_id` (integer, obligatorio) — CF mod id from modkit_cf_create_mod (result.id).
- `marketplace_url` (string, opcional) — result.links.website_url from create_mod. Recommended; used for in-game mod page links.
- `description` (string, opcional) — New .uplugin Description (e.g. the create_mod summary).

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_create_mod`, `modkit_cf_publish`
