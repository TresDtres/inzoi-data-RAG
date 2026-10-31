---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: traducciones
tools: [modkit_list_translation_entries]
wiki_refs: []
---

## modkit_list_translation_entries

**Servidor:** inzoi-modkit | **Dominio:** traducciones

**Qué hace:** Devuelve entradas de traduccion de un archivo PO con paginacion, filtros y cortes de campo. El BaseCulture de inZOI esta fijado a ko: el msgid es siempre el texto coreano y el msgstr la traduccion a la cultura destino.

**Descripción actual del MCP:** List PO entries with pagination and filters. `source` (msgid) is always the Korean source text; `translated` (msgstr) is the target-culture text. Master POs have 90k+ entries: always filter, and never pass limit<=0 without a filter. Use count_only=true to size a filter first.

**Cuándo usarla:** Para revisar o traducir entradas concretas de un PO.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `po_path` (string, obligatorio) — po_path from modkit_list_translation_files
- `offset` (integer, opcional) — Start index after filtering
- `limit` (integer, opcional) — Max entries; <=0 returns all
- `max_field_len` (integer, opcional) — Truncate longer source/translated (marked truncated:true); <=0 disables
- `count_only` (boolean, opcional) — Return only total/count, no entries
- `search_source` (string, opcional) — Case-insensitive substring of msgid (Korean)
- `search_translated` (string, opcional) — Case-insensitive substring of msgstr. Search an en master PO by English word to find the Korean msgid.
- `search_context` (string, opcional) — Case-insensitive substring of msgctxt (e.g. ST_BuildPreset)
- `only_untranslated` (boolean, opcional) — Only entries with empty msgstr

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** ninguna mencionada en el volcado
