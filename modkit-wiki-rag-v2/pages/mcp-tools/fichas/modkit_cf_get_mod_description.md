---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_get_mod_description]
wiki_refs: []
---

## modkit_cf_get_mod_description

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Devuelve por separado la descripcion larga (HTML/markdown) del cuerpo de un mod; el 'summary' de modkit_cf_get_mod_info es solo una linea.

**Descripción actual del MCP:** Return a CurseForge mod's full body description (HTML/markdown; empty string = none). Use to show it to the user or to preserve it before modkit_cf_update_mod. No auth.

**Cuándo usarla:** Cuando hay que mostrar o editar la descripcion completa de la pagina del mod.

**Requisitos:** Conocer el mod_id.

**Parámetros clave:**
- `mod_id` (integer, obligatorio) — CurseForge mod id.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_update_mod`
