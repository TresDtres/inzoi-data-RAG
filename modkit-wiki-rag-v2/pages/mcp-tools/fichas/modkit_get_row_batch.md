---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_get_row_batch]
wiki_refs: []
---

## modkit_get_row_batch

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Consulta multiples filas de tablas a la vez; cada query incluye table e id con fields y dlc opcionales.

**Descripción actual del MCP:** Read several rows in one call, with the same lookup as get_row. Use instead of repeated get_row calls.

**Cuándo usarla:** En lugar de repetir llamadas individuales a modkit_get_row.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `queries` (array, obligatorio) — Every row to read
- `dlc` (string, opcional) — DLC code
- `plugin` (string, opcional) — Plugin whose patches to read, even if its tab is inactive. Default: open plugin.
- `fields` (array, opcional) — Fields to return for every query (Id always included). Empty = all.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** ninguna mencionada en el volcado
