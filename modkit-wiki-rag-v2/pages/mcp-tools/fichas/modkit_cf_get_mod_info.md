---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_get_mod_info]
wiki_refs: []
---

## modkit_cf_get_mod_info

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Devuelve los metadatos de un mod (nombre, categorias, descargas, autores, enlaces, fechas). Misma forma que un item de modkit_cf_list_my_mods.

**Descripción actual del MCP:** Return one CurseForge mod's metadata (same shape as a modkit_cf_list_my_mods item). Use to inspect a mod or, after upload, confirm main_file_id / is_available. No auth for public mods; private/in-review mods may need the owner's auth. Body text: modkit_cf_get_mod_description.

**Cuándo usarla:** Para inspeccionar un mod concreto, verificar tras una subida que status/main_file_id se actualizaron, u obtener referencias de un mod publico ajeno.

**Requisitos:** Sin autenticacion para mods publicos.

**Parámetros clave:**
- `mod_id` (integer, obligatorio) — Mod id from modkit_cf_list_my_mods. Do not guess.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_get_mod_description`, `modkit_cf_list_my_mods`
