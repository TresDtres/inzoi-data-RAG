---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [modkit_list_tables, modkit_list_table_rows, modkit_get_row, modkit_get_row_batch, modkit_set_data, modkit_set_data_batch, modkit_create_row, modkit_delete_row, modkit_list_data_asset_types, modkit_get_data_asset_schema, modkit_get_data_asset_values, modkit_set_data_asset_fields, modkit_build_talk_patch, modkit_validate_workspace, modkit_save]
wiki_refs: [pages/modkit/project/dataasset.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-09: Editar datos del juego: override de tabla o fila (y DataAsset)

**Objetivo:** cambiar valores concretos de las tablas de datos del juego (o de un DataAsset) desde un plugin del ModKit, con verificacion del parche.
**EN:** patch concrete values in the game's data tables (or a DataAsset) from a ModKit plugin, verifying with get_row before and after.
**Nivel:** intermedio
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_list_tables` (inzoi-modkit) — tablas disponibles en game.modpak con su numero de filas. Resultado esperado: alias con counts. Si la tabla no aparece: el alias no existe; no inventar nombres.
2. `modkit_list_table_rows` (inzoi-modkit) — filas de la tabla (paginado). Nota del volcado: si el plugin actual edita esa tabla, devuelve base + capa de parches Override/Duplicate (plugin_overlay indica la fuente).
3. `modkit_get_row` (inzoi-modkit) — una fila como JSON para descubrir los campos antes de escribir. Para varias: `modkit_get_row_batch`. Resultado esperado: campos y valores actuales.
4. Override de campos de una fila existente:
   - Un campo: `modkit_set_data` (item, field, value).
   - Muchos campos a la vez: `modkit_set_data_batch` con TODO en un unico array entries y exactamente una llamada (regla del volcado).
   Reglas de serializacion del volcado: escalares como tipo nativo JSON; TMap como objeto JSON; TArray como array JSON. No stringificar (rompe el parseo del juego).
5. Fila nueva: `modkit_create_row` — con source duplica una fila existente; sin source la inicializa por defecto y se rellena con `modkit_set_data`. Regla del volcado: `modkit_set_data` solo puede sobrescribir filas que ya existen.
6. Verificacion inmediata: `modkit_get_row` — los valores cambiados deben verse ya (la capa de parches del plugin tiene prioridad). Si no: field mal escrito o tipo incorrecto.
7. Deshacer: `modkit_delete_row` — quita los parches del plugin para esa fila (la fila creada y las sobreescrituras). Aviso del volcado: NO borra una fila del juego base; si el Id existe en los datos originales, reaparece.
8. Variante DataAsset: `modkit_list_data_asset_types` - `modkit_get_data_asset_schema` (campos y tipos) - `modkit_get_data_asset_values` (valores actuales) - `modkit_set_data_asset_fields` (solo sobrescribe las claves dadas; los mapas se fusionan por clave y los arrays se reemplazan completos).
9. Variante conversaciones (workspace Talk): `modkit_build_talk_patch` — desde los nueve campos editables por talk crea/patchea las filas enlazadas de TalkSelection, InteractionBag_Talk(+Feedback), CoopTalk, Script_Talk y Condition_Interaction_Talk en una llamada.
10. `modkit_validate_workspace` (inzoi-modkit) — verificacion formal del workspace antes de guardar.
11. `modkit_save` (inzoi-modkit) — persiste el parche.

**Advertencias:**
- VERIFICADO EN VIVO (2026-10-09) sobre una fila de prueba: `modkit_set_data` con value mal tipado falla con error tipado y SIN efectos secundarios — literal: "Error: Invalid patch for Object[E01_Bed01].Price -- Field 'Price' is numeric (int64) but received non-numeric string 'abc'. Pass a number or numeric string." Con campo inexistente, el error lista TODOS los campos validos del struct (B1ObjectTableRow) y sugiere modkit_get_row. Nota adicional: modkit_inspect_workspace no soporta workspaces BUILD (literal: "no IWorkspaceAutomation").
- Retornos unspecified en el volcado para todo el kit.

**Herramientas:** modkit_list_tables, modkit_list_table_rows, modkit_get_row, modkit_get_row_batch, modkit_set_data, modkit_set_data_batch, modkit_create_row, modkit_delete_row, modkit_list_data_asset_types, modkit_get_data_asset_schema, modkit_get_data_asset_values, modkit_set_data_asset_fields, modkit_build_talk_patch, modkit_validate_workspace, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna

**Wiki:** pages/modkit/project/dataasset.md
## English version (EN)

**Goal:** change concrete values in the game's data tables (or a DataAsset) from a ModKit plugin, verifying the patch.

**Level:** intermediate. **Route:** modkit-offline.

**Steps:**

1. `modkit_list_tables` (inzoi-modkit) — tables available in game.modpak with their row counts. Expected: aliases with counts. If the table is missing: the alias does not exist; do not invent names.
2. `modkit_list_table_rows` (inzoi-modkit) — the table's rows (paginated). Dump note: if the current plugin edits that table, it returns base + the Override/Duplicate patch layer (plugin_overlay indicates the source).
3. `modkit_get_row` (inzoi-modkit) — one row as JSON to discover the fields before writing. For several: `modkit_get_row_batch`. Expected: current fields and values.
4. Overriding fields of an existing row:
   - One field: `modkit_set_data` (item, field, value).
   - Many fields at once: `modkit_set_data_batch` with EVERYTHING in a single entries array and exactly one call (dump rule).
   Dump serialization rules: scalars as native JSON types; TMap as a JSON object; TArray as a JSON array. Do not stringify (it breaks the game's parsing).
5. New row: `modkit_create_row` — with source it duplicates an existing row; without source it initializes defaults and is filled with `modkit_set_data`. Dump rule: `modkit_set_data` can only overwrite rows that already exist.
6. Immediate verification: `modkit_get_row` — the changed values must already show (the plugin's patch layer takes priority). If not: a mistyped field or wrong type.
7. Undo: `modkit_delete_row` — removes the plugin's patches for that row (the created row and the overwrites). Dump warning: it does NOT delete a row from the base game; if the Id exists in the original data, it reappears.
8. DataAsset variant: `modkit_list_data_asset_types` - `modkit_get_data_asset_schema` (fields and types) - `modkit_get_data_asset_values` (current values) - `modkit_set_data_asset_fields` (only overwrites the given keys; maps merge by key and arrays are replaced whole).
9. Conversation variant (Talk workspace): `modkit_build_talk_patch` — from the nine per-talk editable fields it creates/patches the linked rows of TalkSelection, InteractionBag_Talk(+Feedback), CoopTalk, Script_Talk and Condition_Interaction_Talk in one call.
10. `modkit_validate_workspace` (inzoi-modkit) — formal workspace verification before saving.
11. `modkit_save` (inzoi-modkit) — persist the patch.

**Warnings:**
- VERIFIED LIVE (2026-10-09) on a test row: `modkit_set_data` with a badly typed value fails with a typed error and NO side effects — literal: "Error: Invalid patch for Object[E01_Bed01].Price -- Field 'Price' is numeric (int64) but received non-numeric string 'abc'. Pass a number or numeric string." With a nonexistent field, the error lists ALL the struct's valid fields (B1ObjectTableRow) and suggests modkit_get_row. Additional note: modkit_inspect_workspace does not support BUILD workspaces (literal: "no IWorkspaceAutomation").
- Unspecified returns in the dump for the whole kit.
