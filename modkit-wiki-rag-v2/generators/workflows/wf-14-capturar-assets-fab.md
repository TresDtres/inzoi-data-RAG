---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [modkit_begin_asset_capture, modkit_finish_asset_capture, modkit_analyze_asset_capture, modkit_finalize_fab_capture_to_workspace, modkit_get_asset_capture_session, modkit_discard_asset_capture, modkit_save]
wiki_refs: [pages/modkit/how-to/getting-started/04usingexternalassets.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-14: Capturar assets de Fab (Add to Project) y adoptarlos al mod

**Objetivo:** traer assets comprados/descargados de Fab al proyecto a traves del flujo Add to Project del editor y dejar el asset primario enlazado al workspace.
**EN:** bring assets bought or downloaded from Fab into the project through the editor's Add to Project flow and link the primary asset to the workspace.
**Nivel:** intermedio
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_begin_asset_capture` (inzoi-modkit) — captura el estado de assets del proyecto ANTES del Add to Project de Fab. Resultado esperado: sesion de captura iniciada. Si falla: cerrar cualquier sesion previa con `modkit_discard_asset_capture`.
2. El usuario hace Add to Project desde el plugin de Fab del editor (paso manual del editor; el volcado no documenta herramienta MCP para dispararlo).
3. `modkit_finish_asset_capture` (inzoi-modkit) — escanea el estado tras la importacion y calcula los diffs de assets nuevos. Resultado esperado: lista de assets nuevos por tipo. Si esta vacia: el Add to Project no aporto nada o se capturo en el momento equivocado (reiniciar desde el paso 1).
4. `modkit_analyze_asset_capture` (inzoi-modkit) — analiza los assets capturados y recomienda candidatos a asset primario. Resultado esperado: candidatos ordenados por tipo.
5. Elegir el asset primario (decision del usuario con la recomendacion delante).
6. `modkit_finalize_fab_capture_to_workspace` (inzoi-modkit) — adopta el asset primario en el plugin y lo enlaza al workspace de inmediato. Resultado esperado: asset adoptado y workspace actualizado.
7. `modkit_get_asset_capture_session` (inzoi-modkit) — verificacion/consulta del estado de la sesion si algo fallo a mitad de flujo.
8. `modkit_discard_asset_capture` (inzoi-modkit) — aborta y limpia si el usuario cancela la importacion.
9. `modkit_save` (inzoi-modkit) — persiste.

**Advertencias:**
- El paso 2 (Add to Project en el editor) es manual: no hay herramienta MCP documentada para dispararlo.
- Retornos unspecified en el volcado para todo el grupo de captura.

**Herramientas:** modkit_begin_asset_capture, modkit_finish_asset_capture, modkit_analyze_asset_capture, modkit_finalize_fab_capture_to_workspace, modkit_get_asset_capture_session, modkit_discard_asset_capture, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna

**Wiki:** pages/modkit/how-to/getting-started/04usingexternalassets.md
## English version (EN)

**Goal:** bring assets bought/downloaded from Fab into the project through the editor's Add to Project flow and leave the primary asset linked to the workspace.

**Level:** intermediate. **Route:** modkit-offline.

**Steps:**

1. `modkit_begin_asset_capture` (inzoi-modkit) — captures the project's asset state BEFORE Fab's Add to Project. Expected: capture session started. If it fails: close any previous session with `modkit_discard_asset_capture`.
2. The user does Add to Project from the editor's Fab plugin (manual editor step; the dump documents no MCP tool to trigger it).
3. `modkit_finish_asset_capture` (inzoi-modkit) — scans the state after import and computes the diffs of new assets. Expected: a list of new assets by type. If empty: Add to Project brought nothing in, or the capture was taken at the wrong moment (restart from step 1).
4. `modkit_analyze_asset_capture` (inzoi-modkit) — analyzes the captured assets and recommends primary-asset candidates. Expected: candidates ordered by type.
5. Choose the primary asset (the user's decision with the recommendation in front).
6. `modkit_finalize_fab_capture_to_workspace` (inzoi-modkit) — adopts the primary asset into the plugin and links it to the workspace immediately. Expected: asset adopted and workspace updated.
7. `modkit_get_asset_capture_session` (inzoi-modkit) — verify/inspect the session state if something failed mid-flow.
8. `modkit_discard_asset_capture` (inzoi-modkit) — aborts and cleans up if the user cancels the import.
9. `modkit_save` (inzoi-modkit) — persist.

**Warnings:**
- Step 2 (Add to Project in the editor) is manual: there is no documented MCP tool to trigger it.
- Unspecified returns in the dump for the whole capture group.
