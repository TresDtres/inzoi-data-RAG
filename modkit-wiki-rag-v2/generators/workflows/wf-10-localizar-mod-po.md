---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [modkit_list_projects, modkit_list_workspaces, modkit_list_cultures, modkit_add_workspace, modkit_list_translation_files, modkit_list_translation_entries, modkit_set_translation_entries, modkit_validate_workspace, modkit_save]
wiki_refs: [pages/modkit/project/dataasset.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-10: Localizar un mod: traducir con archivos PO

**Objetivo:** anadir o corregir traducciones de un mod creando un workspace Language y editando las entradas PO de la cultura destino.
**EN:** add or fix a mod's translations by creating a Language workspace and editing the PO entries for the target culture.
**Nivel:** principiante
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_list_projects` y `modkit_list_workspaces` (inzoi-modkit) — proyecto del mod y si ya tiene un workspace Language. Si no existe el workspace, pasos 2-3; si existe, saltar al 4.
2. `modkit_list_cultures` (inzoi-modkit) — culturas disponibles [{name, display_name, native_name}]; el usuario elige source_culture y target_culture (codigos como 'en', 'ko', 'ja' se pasan sin cambios).
3. `modkit_add_workspace` (inzoi-modkit) con book_class='Language' — crea el workspace Language. Resultado esperado: { item_id, mode, source_culture, target_culture }.
4. `modkit_list_translation_files` (inzoi-modkit) — archivos PO del plugin: escanea {Plugin}/l10n/ (distribucion) y {Plugin}/Intermediate/Localization/ (copia de trabajo). Resultado esperado: lista con po_path relativo a la raiz del plugin. VERIFICADO CON SORPRESA EN VIVO (2026-10-09): crear el workspace Language con `modkit_add_workspace` AUTO-GENERA los PO inmediatamente — Intermediate/Localization/ko/Blue_UI.master.po (~4,9 MB, fuente coreana) e Intermediate/Localization/<cultura>_mod/Blue_UI.working.po (~2,3 MB, destino). Resultado esperado: 2 archivos PO listos para listar y editar.
5. `modkit_list_translation_entries` (inzoi-modkit) — entradas del PO con paginacion y filtros. Dato del volcado: inZOI tiene BaseCulture fijado a ko — el msgid es SIEMPRE el texto coreano y el msgstr la traduccion a la cultura destino. Resultado esperado: entradas con source coreano.
6. `modkit_set_translation_entries` (inzoi-modkit) — upsert en lote por (source, context). Regla critica del volcado: source debe ser el texto coreano original para emparejar entradas del juego; texto ingles no empareja. Si falla el emparejamiento: el source no coincide con el msgid coreano exacto.
7. Verificacion: `modkit_list_translation_entries` de nuevo — las entradas actualizadas muestran el msgstr nuevo.
8. `modkit_validate_workspace` (inzoi-modkit) — validacion formal.
9. `modkit_save` (inzoi-modkit) — persiste.

**Advertencias:**
- BaseCulture=ko: la traduccion parte siempre de coreano (limitacion documentada del volcado).
- Verificado en vivo 2026-10-09: la generacion inicial de PO es automatica al crear el workspace Language (no hace falta paso manual).

**Herramientas:** modkit_list_projects, modkit_list_workspaces, modkit_list_cultures, modkit_add_workspace, modkit_list_translation_files, modkit_list_translation_entries, modkit_set_translation_entries, modkit_validate_workspace, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna

**Wiki:** pages/modkit/project/dataasset.md
## English version (EN)

**Goal:** add or fix a mod's translations by creating a Language workspace and editing the target culture's PO entries.

**Level:** beginner. **Route:** modkit-offline.

**Steps:**

1. `modkit_list_projects` and `modkit_list_workspaces` (inzoi-modkit) — the mod's project and whether it already has a Language workspace. If the workspace does not exist, steps 2-3; if it exists, jump to 4.
2. `modkit_list_cultures` (inzoi-modkit) — available cultures [{name, display_name, native_name}]; the user chooses source_culture and target_culture (codes like 'en', 'ko', 'ja' are passed unchanged).
3. `modkit_add_workspace` (inzoi-modkit) with book_class='Language' — creates the Language workspace. Expected: { item_id, mode, source_culture, target_culture }.
4. `modkit_list_translation_files` (inzoi-modkit) — the plugin's PO files: it scans {Plugin}/l10n/ (distribution) and {Plugin}/Intermediate/Localization/ (working copy). Expected: a list with po_path relative to the plugin root. VERIFIED WITH SURPRISE LIVE (2026-10-09): creating the Language workspace with `modkit_add_workspace` AUTO-GENERATES the POs immediately — Intermediate/Localization/ko/Blue_UI.master.po (~4.9 MB, Korean source) and Intermediate/Localization/<culture>_mod/Blue_UI.working.po (~2.3 MB, target). Expected: 2 PO files ready to list and edit.
5. `modkit_list_translation_entries` (inzoi-modkit) — the PO's entries with pagination and filters. Dump fact: inZOI has BaseCulture fixed to ko — the msgid is ALWAYS the Korean text and the msgstr the translation into the target culture. Expected: entries with Korean source.
6. `modkit_set_translation_entries` (inzoi-modkit) — batch upsert by (source, context). Critical dump rule: source must be the original Korean text to match game entries; English text does not match. If matching fails: the source does not exactly match the Korean msgid.
7. Verification: `modkit_list_translation_entries` again — the updated entries show the new msgstr.
8. `modkit_validate_workspace` (inzoi-modkit) — formal validation.
9. `modkit_save` (inzoi-modkit) — persist.

**Warnings:**
- BaseCulture=ko: translation always starts from Korean (documented dump limitation).
- Verified live 2026-10-09: the initial PO generation is automatic when the Language workspace is created (no manual step needed).
