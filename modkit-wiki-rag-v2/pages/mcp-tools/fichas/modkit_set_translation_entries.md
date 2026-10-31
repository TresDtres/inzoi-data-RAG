---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: traducciones
tools: [modkit_set_translation_entries]
wiki_refs: [pages/modkit/project/vehicle/02-general.md]
---

## modkit_set_translation_entries

**Servidor:** inzoi-modkit | **Dominio:** traducciones

**Qué hace:** Inserta o actualiza entradas de traduccion en un archivo PO en lote; las existentes se emparejan por (source, context).

**Descripción actual del MCP:** Upsert PO entries in one call, matched on (source, context). Creates missing files and folders; keeps existing comments. `source` must be the Korean msgid (find it with modkit_list_translation_entries). An English source adds new entries that never apply in game. An entry without `translated` overwrites the existing translation with an empty string.

**Cuándo usarla:** Para escribir traducciones.

**Requisitos:** source debe ser el texto coreano original para emparejar entradas del juego (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `po_path` (string, obligatorio) — Plugin-relative PO path. Ship to l10n/{target_culture}_mod/{Target}.po (e.g. l10n/th_mod/Blue_UI.po).
- `entries` (array, obligatorio)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado advierte que pasar texto ingles como source no empareja las entradas del juego.

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_list_translation_entries`
