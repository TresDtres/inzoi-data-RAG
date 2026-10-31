---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_get_categories]
wiki_refs: []
---

## modkit_cf_get_categories

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Devuelve las categorias de mods de CurseForge, necesarias para rellenar primary_category_id / game_category_ids al registrar un mod.

**Descripción actual del MCP:** List CurseForge categories for modkit_cf_create_mod's class_id / primary_category_id / game_category_ids. Call with classes_only=true, then with the user's chosen class as class_id; the user picks the category. is_class=true marks classes; parent_category_id marks subcategories. No auth. Not needed for UI Mods.

**Cuándo usarla:** Siempre antes de modkit_cf_create_mod, para elegir categorias validas.

**Requisitos:** Autenticacion en CurseForge.

**Parámetros clave:**
- `class_id` (integer, opcional) — Only categories of this class. 0 = all.
- `classes_only` (boolean, opcional) — Return only top-level classes.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_create_mod`
