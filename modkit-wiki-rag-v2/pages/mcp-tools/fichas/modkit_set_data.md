---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_set_data]
wiki_refs: [pages/modkit/project/vehicle/02-general.md]
---

## modkit_set_data

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Sobrescribe un campo de datos de un item del workspace. Si el workspace esta abierto, la UI se refresca sola.

**Descripción actual del MCP:** Override one field of an existing data row (new rows: modkit_create_row). Open workspaces auto-refresh. ⚠️ Pass `value` as the field's JSON type: TMap/Struct as an object, TArray as an array, never stringified (a stringified TMap breaks the game parse). Field names and enum values are validated before writing; invalid ones fail with the valid list. Check result.success. Not for Script/UIMod workspaces.

**Cuándo usarla:** Para cambiar valores concretos de un item ya existente.

**Requisitos:** El item debe existir; para filas nuevas usar modkit_create_row.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Item ID
- `field` (string, obligatorio) — Field name; Field[N] targets one array element
- `value` (unspecified, obligatorio) — JSON value of the field's type. TMap/Struct: object, TArray: array.
- `data` (string, opcional) — Data table name
- `dlc` (string, opcional) — DLC code

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado advierte: los TMap se pasan como objeto JSON y los TArray como array JSON (no stringificarlos; romperia el parseo del juego).

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_create_row`
