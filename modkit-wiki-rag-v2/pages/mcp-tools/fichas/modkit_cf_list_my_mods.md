---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_list_my_mods]
wiki_refs: []
---

## modkit_cf_list_my_mods

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Devuelve los mods registrados por el usuario autenticado; mismos datos que el desplegable 'CurseForge - Share UGC' del editor.

**Descripción actual del MCP:** List the authenticated user's CurseForge mods (id, name, status, main_file_id, is_available, links, ...) to find a mod_id or check duplicates. Auth required. If has_more=true, fetch the next page. Empty items: user has no mods; register with modkit_cf_create_mod. Right after create_mod the list may lag 1–2 min; retry, or use modkit_cf_get_mod_info with the known id.

**Cuándo usarla:** Antes de crear un mod, para confirmar que no existe ya; y para elegir el mod destino de una subida.

**Requisitos:** Autenticacion en CurseForge.

**Parámetros clave:**
- `page` (integer, opcional) — Page index, from 0.
- `page_size` (integer, opcional) — Items per page (1–200)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_create_mod`, `modkit_cf_get_mod_info`
