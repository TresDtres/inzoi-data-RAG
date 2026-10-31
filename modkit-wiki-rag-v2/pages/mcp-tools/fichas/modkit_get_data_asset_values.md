---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_get_data_asset_values]
wiki_refs: []
---

## modkit_get_data_asset_values

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Devuelve los valores editados actuales de un workspace DA; con el workspace cerrado devuelve los valores por defecto con la lista de parches guardados aplicada encima.

**Descripción actual del MCP:** Return a DA workspace's current `values` (live UI edits if open, else defaults + saved patches) and `delta` vs defaults. Rarely needed: modkit_add_workspace and modkit_set_data_asset_fields responses already carry them.

**Cuándo usarla:** Para inspeccionar el estado actual de un DataAsset antes o despues de editarlo.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — DA workspace id
- `fields` (array, opcional) — Fields to include (PascalCase or camelCase). Empty = all.
- `include` (array, opcional) — Sections to return (default both). ["delta"] saves tokens.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_add_workspace`, `modkit_set_data_asset_fields`
